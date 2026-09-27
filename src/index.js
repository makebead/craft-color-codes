// craft-color-codes — color codes for beads, thread, yarn, bricks and blocks.
// Data: ../data/json/*.json (also usable directly, without this module).
// Maintained by MakeBead — https://makebead.com/

import { createRequire } from 'node:module';
import { parseColor, rgbToLab, ciede2000, deltaE, toHex } from './color.js';

export { parseColor, rgbToLab, ciede2000, deltaE, toHex };

const require = createRequire(import.meta.url);
const INDEX = require('../data/index.json');

/** Metadata of every palette (no colors). */
export const palettes = INDEX.palettes.map(({ json, csv, ...meta }) => meta);

/** Names people use for a palette, mapped to its id. */
const ALIASES = {
  perler: 'perler-midi',
  hama: 'hama-midi',
  artkal: 'artkal-s',
  mard: 'mard-291',
  miyuki: 'miyuki-delica',
  delica: 'miyuki-delica',
  dmc: 'dmc-floss',
  'dmc-drills': 'dmc-diamond',
  'diamond-painting': 'dmc-diamond',
  'red-heart': 'red-heart-super-saver',
  'lego-colors': 'lego',
  minecraft: 'minecraft-blocks',
  'minecraft-map-colors': 'minecraft-map',
  'map-art': 'minecraft-map',
};

/** A palette id from an id, an alias ("dmc", "delica") or a brand name. */
export function resolvePaletteId(input) {
  if (typeof input !== 'string') return null;
  const s = input.trim().toLowerCase().replace(/[\s_]+/g, '-');
  if (palettes.some((p) => p.id === s)) return s;
  if (ALIASES[s]) return ALIASES[s];
  const byBrand = palettes.filter((p) => p.brand.toLowerCase().replace(/\s+/g, '-') === s);
  return byBrand.length === 1 ? byBrand[0].id : null;
}

const cache = new Map();

/** A whole palette: metadata plus `colors`. Throws on an unknown id. */
export function getPalette(id) {
  const pid = resolvePaletteId(id);
  if (!pid) throw new RangeError(`Unknown palette "${id}". Known: ${palettes.map((p) => p.id).join(', ')}`);
  if (!cache.has(pid)) {
    const p = require(`../data/json/${pid}.json`);
    cache.set(pid, { ...p, labs: p.colors.map((c) => rgbToLab(c.rgb)) });
  }
  const { labs, ...palette } = cache.get(pid);
  return palette;
}

function loaded(id) {
  getPalette(id);
  return cache.get(resolvePaletteId(id));
}

/**
 * A color code as people write it, reduced to what identifies it: letters and
 * digits, lower case, numbers without leading zeros. "DB0010", "DB-010",
 * "db 10" and "DB10" are all "db10".
 */
export function codeKey(code) {
  return String(code)
    .normalize('NFKC')
    .toLowerCase()
    .replace(/[\s\-_.#/]+/g, '')
    .replace(/(^|[a-z])0+(?=\d)/g, '$1');
}

/** The letters every code of a palette starts with ("db" for Delica), or null. */
function codePrefix(colors) {
  let prefix = null;
  for (const c of colors) {
    const p = /^[a-z]+(?=\d)/.exec(codeKey(c.code))?.[0];
    if (!p || (prefix !== null && p !== prefix)) return null;
    prefix = p;
  }
  return prefix;
}

/**
 * One color by its code, written the way people write it: "DB10", "DB-0010"
 * and "10" all find Delica DB0010; "310" finds DMC 310; "blanc" finds Blanc;
 * a Perler retail number ("80-19001") finds P01. Undefined when nothing, or
 * more than one color, matches.
 */
export function getColor(paletteId, code) {
  const { colors } = getPalette(paletteId);
  const raw = String(code).trim();
  const exact = colors.find((c) => c.code === raw) ?? colors.find((c) => c.sku === raw);
  if (exact) return exact;
  const lower = raw.toLowerCase().replace(/^(miyuki|delica|dmc|perler|hama|artkal|mard|lego)\s+/, '');
  const ci = colors.filter((c) => c.code.toLowerCase() === lower);
  if (ci.length === 1) return ci[0];
  const key = codeKey(lower);
  let hits = colors.filter((c) => codeKey(c.code) === key);
  if (hits.length === 0 && /^\d+$/.test(key)) {
    const prefix = codePrefix(colors);
    if (prefix) hits = colors.filter((c) => codeKey(c.code) === prefix + key);
  }
  return hits.length === 1 ? hits[0] : undefined;
}

/**
 * The closest colors in one palette, by CIEDE2000.
 * @returns colors with a `deltaE` field, closest first. Under ~1 is invisible,
 *   under ~3 is a close match, over ~10 is a different color.
 */
export function nearest(color, paletteId, { limit = 5, includeDiscontinued = false } = {}) {
  const rgb = parseColor(color);
  if (!rgb) throw new TypeError(`Not a color: ${JSON.stringify(color)}`);
  const lab = rgbToLab(rgb);
  const p = loaded(paletteId);
  const scored = [];
  p.colors.forEach((c, i) => {
    if (c.discontinued && !includeDiscontinued) return;
    scored.push({ ...c, deltaE: round2(ciede2000(lab, p.labs[i])) });
  });
  scored.sort((a, b) => a.deltaE - b.deltaE);
  return scored.slice(0, limit);
}

/** The closest colors in several palettes (default: all), grouped by palette. */
export function nearestAcross(color, { palettes: ids, limit = 1, includeDiscontinued = false } = {}) {
  const list = (ids ?? palettes.map((p) => p.id)).map((id) => getPalette(id));
  return list.map((p) => ({
    palette: p.id,
    brand: p.brand,
    product: p.product,
    matches: nearest(color, p.id, { limit, includeDiscontinued }),
  }));
}

/**
 * Convert a color from one palette to its closest equivalents in another:
 * convert('perler', 'P38', 'hama').
 */
export function convert(fromPalette, code, toPalette, { limit = 3, includeDiscontinued = false } = {}) {
  const from = getColor(fromPalette, code);
  if (!from) return null;
  return {
    from: { palette: resolvePaletteId(fromPalette), ...from },
    to: resolvePaletteId(toPalette),
    matches: nearest(from.rgb, toPalette, { limit, includeDiscontinued }),
  };
}

/** Colors whose name contains every word of the query, or whose code matches it. */
export function search(query, { palettes: ids, limit = 20 } = {}) {
  const words = String(query).toLowerCase().split(/\s+/).filter(Boolean);
  if (!words.length) return [];
  const key = codeKey(query);
  const out = [];
  for (const id of ids ?? palettes.map((p) => p.id)) {
    const p = getPalette(id);
    for (const c of p.colors) {
      const name = c.name.toLowerCase();
      if (codeKey(c.code) === key || words.every((w) => name.includes(w))) {
        out.push({ palette: p.id, brand: p.brand, ...c });
        if (out.length >= limit) return out;
      }
    }
  }
  return out;
}

const round2 = (n) => Math.round(n * 100) / 100;
