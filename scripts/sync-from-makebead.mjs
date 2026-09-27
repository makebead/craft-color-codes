#!/usr/bin/env node
// Rebuild data/ from MakeBead's palettes.
//
//   node scripts/sync-from-makebead.mjs [--src ../makebead]
//
// MakeBead (makebead.com) is where these palettes are used and corrected; this
// repository publishes them. Run this after a palette changes there, then
// `npm test` and `npm run readme`.

import { readFileSync, writeFileSync, mkdirSync, rmSync } from 'node:fs';
import { resolve, dirname, join } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { PALETTES } from './palettes.meta.mjs';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const argSrc = process.argv.indexOf('--src');
const SRC = resolve(ROOT, argSrc > 0 ? process.argv[argSrc + 1] : '../makebead');
const PAL_DIR = join(SRC, 'src/data/palettes');

const hexOf = (rgb) => '#' + rgb.map((n) => n.toString(16).padStart(2, '0')).join('').toUpperCase();
const rgbOf = (hex) => [1, 3, 5].map((i) => parseInt(hex.slice(i, i + 2), 16));

/** Colors of a MakeBead palette file, in its own order, as public records. */
function readPaletteFile(id) {
  const file = JSON.parse(readFileSync(join(PAL_DIR, `${id}.json`), 'utf8'));
  const rows = file.colors;
  // Miyuki Delica is stored as compact rows: [code, name, hex, glass, available].
  if (Array.isArray(rows[0])) {
    return rows.map(([code, name, hex, glass, available]) =>
      record({ code, name, hex, glass, discontinued: available !== 1 }),
    );
  }
  return rows.map((c) => {
    const extra = {};
    if (id === 'perler-midi' && c.id.startsWith('perler_')) extra.sku = c.id.slice('perler_'.length);
    // `category` in MakeBead's files is mostly an automatic color family (DMC
    // Blanc filed under "orange") or a default ("solid" for every Hama bead).
    // Only the Minecraft block group is a real property of the item.
    if (id === 'minecraft-blocks' && c.category) extra.group = c.category;
    if (c.block) extra.block = c.block;
    if (c.survival !== undefined) extra.survival = c.survival;
    return record({
      code: c.code,
      name: c.name,
      hex: c.hex,
      discontinued: c.available === false,
      ...extra,
    });
  });
}

function record({ code, name, hex, discontinued, ...extra }) {
  const h = hex.toUpperCase();
  const out = { code: String(code), name, hex: h, rgb: rgbOf(h) };
  Object.assign(out, extra);
  if (discontinued) out.discontinued = true;
  return out;
}

/** Minecraft map colors: every base color in all four shades. */
async function readMapColors() {
  const mod = await import(pathToFileURL(join(SRC, 'src/data/map-colors.ts')).href);
  const out = [];
  for (const base of mod.MAP_BASE_COLORS) {
    if (base.id === 0) continue; // transparent
    for (const shade of [0, 1, 2, 3]) {
      const m = mod.SHADE_MULTIPLIERS[shade];
      const rgb = base.rgb.map((v) => Math.floor(v * m));
      const buildable = shade !== 3 && !!base.block && base.id !== 12;
      const rec = {
        code: String(base.id * 4 + shade),
        name: `${base.name} (${['low', 'level', 'high', 'water depth'][shade]})`,
        hex: hexOf(rgb),
        rgb,
        base: base.id,
        shade,
      };
      if (base.block) rec.block = base.block;
      rec.buildable = buildable;
      if (base.caveat) rec.caveat = base.caveat;
      out.push(rec);
    }
  }
  return out;
}

async function readMardKits() {
  const mod = await import(pathToFileURL(join(PAL_DIR, 'mard-kits.ts')).href);
  return {
    description:
      'MARD retail boxes. Each box is the previous one plus a fixed block of colors, so owning the 96 means owning exactly these 96 codes. Transcribed from the manufacturer’s set charts. The 221 box is the whole mard-221 palette; the 240 and 264 boxes reach into the specialty series and need mard-291.',
    sets: [
      ...mod.MARD_KITS.map((k) => ({ size: k.size, palette: 'mard-221', codes: k.codes })),
      { size: mod.MARD_FULL_SIZE, palette: 'mard-221', codes: 'all' },
      ...mod.MARD_BIG_KITS.map((k) => ({ size: k.size, palette: 'mard-291', codes: k.codes })),
    ],
  };
}

// ---- writers ---------------------------------------------------------------

/** Pretty JSON with one color per line — readable, and a diff shows the color that changed. */
function paletteJson(meta, colors) {
  const head = JSON.stringify(meta, null, 2).replace(/\n}$/, '');
  const lines = colors.map((c) => '    ' + JSON.stringify(c));
  return `${head},\n  "colors": [\n${lines.join(',\n')}\n  ]\n}\n`;
}

const CSV_BASE = ['code', 'name', 'hex', 'r', 'g', 'b', 'discontinued'];
const csvCell = (v) => {
  if (v === undefined || v === null) return '';
  const s = String(v);
  return /[",\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
};

function paletteCsv(colors) {
  const extras = [];
  for (const c of colors)
    for (const k of Object.keys(c))
      if (!['code', 'name', 'hex', 'rgb', 'discontinued'].includes(k) && !extras.includes(k)) extras.push(k);
  const cols = [...CSV_BASE, ...extras];
  const rows = colors.map((c) =>
    cols
      .map((k) => {
        if (k === 'r' || k === 'g' || k === 'b') return c.rgb['rgb'.indexOf(k)];
        if (k === 'discontinued') return c.discontinued ? 'true' : 'false';
        return csvCell(c[k]);
      })
      .join(','),
  );
  return [cols.join(','), ...rows].join('\n') + '\n';
}

// ---- main ------------------------------------------------------------------

const index = [];
rmSync(join(ROOT, 'data'), { recursive: true, force: true });
for (const d of ['data/json', 'data/csv', 'data/sets']) mkdirSync(join(ROOT, d), { recursive: true });

for (const p of PALETTES) {
  const colors = p.from === 'map-colors' ? await readMapColors() : readPaletteFile(p.from);
  const { from, ...pub } = p;
  const meta = {
    id: pub.id,
    brand: pub.brand,
    product: pub.product,
    craft: pub.craft,
    unit: pub.unit,
    count: colors.length,
    discontinued: colors.filter((c) => c.discontinued).length,
    status: pub.status,
    notes: pub.notes,
    sources: pub.sources,
    license: pub.license,
    makebead: pub.makebead,
  };
  if (!meta.discontinued) delete meta.discontinued;
  writeFileSync(join(ROOT, 'data/json', `${p.id}.json`), paletteJson(meta, colors));
  writeFileSync(join(ROOT, 'data/csv', `${p.id}.csv`), paletteCsv(colors));
  index.push({ ...meta, json: `data/json/${p.id}.json`, csv: `data/csv/${p.id}.csv` });
  console.log(`${p.id.padEnd(24)} ${String(colors.length).padStart(5)}  ${p.status}`);
}

writeFileSync(join(ROOT, 'data/sets/mard-kits.json'), JSON.stringify(await readMardKits(), null, 2) + '\n');
writeFileSync(
  join(ROOT, 'data/index.json'),
  JSON.stringify(
    {
      name: 'craft-color-codes',
      homepage: 'https://makebead.com/',
      total: index.reduce((n, p) => n + p.count, 0),
      palettes: index,
    },
    null,
    2,
  ) + '\n',
);
console.log(`total ${index.reduce((n, p) => n + p.count, 0)} colors in ${index.length} palettes`);
