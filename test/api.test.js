import { test } from 'node:test';
import assert from 'node:assert/strict';
import {
  palettes,
  resolvePaletteId,
  getPalette,
  getColor,
  nearest,
  nearestAcross,
  convert,
  search,
  codeKey,
} from '../src/index.js';

test('palettes are found by id, alias or brand', () => {
  assert.equal(resolvePaletteId('dmc-floss'), 'dmc-floss');
  assert.equal(resolvePaletteId('DMC'), 'dmc-floss');
  assert.equal(resolvePaletteId('Delica'), 'miyuki-delica');
  assert.equal(resolvePaletteId('Red Heart'), 'red-heart-super-saver');
  assert.equal(resolvePaletteId('mard'), 'mard-291');
  assert.equal(resolvePaletteId('nope'), null);
  assert.throws(() => getPalette('nope'), RangeError);
  assert.equal(palettes.length, 15);
});

test('codes are found however they are written', () => {
  for (const q of ['DB0010', 'DB10', 'DB-010', 'db 0010', '10', 'Miyuki DB10'])
    assert.equal(getColor('delica', q)?.code, 'DB0010', q);
  assert.equal(getColor('dmc', 'blanc')?.code, 'Blanc');
  assert.equal(getColor('dmc', '0310')?.code, '310');
  assert.equal(getColor('mard', 'a01')?.code, 'A1');
  assert.equal(getColor('perler', '80-19001')?.code, 'P01');
  // Perler has P, C and N codes, so a bare number means nothing there.
  assert.equal(getColor('perler', '1'), undefined);
  assert.equal(getColor('dmc', 'no-such-code'), undefined);
  assert.equal(codeKey('DB-0010'), 'db10');
});

test('the nearest color to a palette color is itself, at ΔE 0', () => {
  for (const p of palettes) {
    const { colors } = getPalette(p.id);
    const c = colors.find((x) => !x.discontinued);
    const [first] = nearest(c.hex, p.id, { limit: 1 });
    assert.equal(first.deltaE, 0, p.id);
    assert.equal(first.hex, c.hex, p.id);
  }
});

test('nearest is sorted, limited and skips discontinued colors unless asked', () => {
  const m = nearest('#808080', 'delica', { limit: 10 });
  assert.equal(m.length, 10);
  for (let i = 1; i < m.length; i++) assert.ok(m[i - 1].deltaE <= m[i].deltaE);
  const gone = getPalette('delica').colors.find((c) => c.discontinued);
  assert.notEqual(nearest(gone.hex, 'delica', { limit: 1 })[0].code, gone.code);
  assert.equal(nearest(gone.hex, 'delica', { limit: 1, includeDiscontinued: true })[0].deltaE, 0);
});

test('convert and nearestAcross answer the cross-brand question', () => {
  const r = convert('perler', 'P05', 'hama', { limit: 2 });
  assert.equal(r.from.code, 'P05');
  assert.equal(r.to, 'hama-midi');
  assert.equal(r.matches.length, 2);
  assert.equal(convert('perler', 'nope', 'hama'), null);
  const across = nearestAcross('#C12041', { palettes: ['dmc', 'hama'] });
  assert.deepEqual(across.map((x) => x.palette), ['dmc-floss', 'hama-midi']);
  assert.equal(across[0].matches[0].code, '309');
});

test('search matches every word of a name, or a code', () => {
  const r = search('rose dark', { palettes: ['dmc'] });
  assert.ok(r.some((c) => c.code === '309'));
  assert.ok(r.every((c) => /rose/i.test(c.name) && /dark/i.test(c.name)));
  assert.equal(search('DB10', { palettes: ['delica'] })[0].code, 'DB0010');
  assert.deepEqual(search('   '), []);
});
