import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, readdirSync } from 'node:fs';
import { getColor } from '../src/index.js';

const read = (p) => JSON.parse(readFileSync(new URL(`../${p}`, import.meta.url), 'utf8'));
const index = read('data/index.json');
const STATUSES = ['official', 'measured', 'cross-checked', 'community', 'approximate', 'generated'];

test('the index lists every palette file, with the right counts', () => {
  const files = readdirSync(new URL('../data/json/', import.meta.url)).map((f) => f.replace(/\.json$/, ''));
  assert.deepEqual(index.palettes.map((p) => p.id).sort(), files.sort());
  let total = 0;
  for (const meta of index.palettes) {
    const p = read(meta.json);
    assert.equal(p.count, p.colors.length, meta.id);
    assert.equal(meta.count, p.colors.length, meta.id);
    const csv = readFileSync(new URL(`../${meta.csv}`, import.meta.url), 'utf8').trim().split('\n');
    assert.equal(csv.length, p.colors.length + 1, `${meta.id} csv rows`);
    total += p.count;
  }
  assert.equal(index.total, total);
});

for (const meta of index.palettes) {
  test(`${meta.id}: every color is well formed and findable by its own code`, () => {
    const p = read(meta.json);
    assert.ok(STATUSES.includes(p.status), p.status);
    assert.match(p.makebead, /^https:\/\/makebead\.com\//);
    assert.ok(p.sources.length > 0 && p.notes.length > 0 && p.license);
    const seen = new Set();
    for (const c of p.colors) {
      assert.ok(c.code && typeof c.code === 'string', JSON.stringify(c));
      assert.ok(c.name, JSON.stringify(c));
      assert.match(c.hex, /^#[0-9A-F]{6}$/, JSON.stringify(c));
      const rgb = [1, 3, 5].map((i) => parseInt(c.hex.slice(i, i + 2), 16));
      assert.deepEqual(c.rgb, rgb, `${p.id} ${c.code}: rgb and hex disagree`);
      assert.ok(!seen.has(c.code), `${p.id}: duplicate code ${c.code}`);
      seen.add(c.code);
      assert.deepEqual(getColor(p.id, c.code), c, `${p.id} ${c.code} does not find itself`);
    }
  });
}

test('MARD sets: sizes are what the box says, each box holds the one before, every code exists', () => {
  const { sets } = read('data/sets/mard-kits.json');
  let previous = [];
  for (const s of sets) {
    if (s.codes === 'all') {
      assert.equal(read(`data/json/${s.palette}.json`).count, s.size);
      continue;
    }
    assert.equal(s.codes.length, s.size, `the ${s.size} box`);
    assert.equal(new Set(s.codes).size, s.size, `duplicates in the ${s.size} box`);
    for (const code of previous) assert.ok(s.codes.includes(code), `${code} missing from the ${s.size} box`);
    const palette = read(`data/json/${s.palette}.json`);
    for (const code of s.codes) assert.ok(palette.colors.some((c) => c.code === code), `${code} not in ${s.palette}`);
    previous = s.codes;
  }
});

test('values that were wrong somewhere upstream stay right here', () => {
  const dmc = read('data/json/dmc-floss.json');
  const byCode = Object.fromEntries(dmc.colors.map((c) => [c.code, c]));
  assert.equal(dmc.count, 489);
  assert.equal(byCode['309'].hex, '#C12041'); // grey-brown #564A4A upstream
  assert.notEqual(byCode.Blanc.hex, byCode.B5200.hex);
  // Diamond drills share floss values code for code.
  for (const d of read('data/json/dmc-diamond.json').colors) assert.equal(d.hex, byCode[d.code].hex, d.code);
  const delica = read('data/json/miyuki-delica.json');
  assert.equal(delica.count, 1288);
  assert.equal(delica.colors.filter((c) => c.discontinued).length, 76);
});

test('Minecraft map colors follow the game: code = base × 4 + shade, shades 180/220/255/135', () => {
  const map = read('data/json/minecraft-map.json');
  assert.equal(map.count, 61 * 4);
  for (const c of map.colors) assert.equal(Number(c.code), c.base * 4 + c.shade);
  const grass = map.colors.filter((c) => c.base === 1).map((c) => c.hex);
  assert.deepEqual(grass, ['#597D27', '#6D9930', '#7FB238', '#435E1D']); // minecraft.wiki
  assert.ok(map.colors.filter((c) => c.shade === 3).every((c) => !c.buildable));
});
