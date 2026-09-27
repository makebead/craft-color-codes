import { test } from 'node:test';
import assert from 'node:assert/strict';
import { ciede2000, parseColor, deltaE } from '../src/color.js';

// Sharma, Wu & Dalal (2005), "The CIEDE2000 color-difference formula:
// implementation notes, supplementary test data" — a selection of the 34 pairs.
const PAIRS = [
  [[50, 2.6772, -79.7751], [50, 0, -82.7485], 2.0425],
  [[50, 3.1571, -77.2803], [50, 0, -82.7485], 2.8615],
  [[50, 2.8361, -74.02], [50, 0, -82.7485], 3.4412],
  [[50, 0, 0], [50, -1, 2], 2.3669],
  [[50, 2.5, 0], [73, 25, -18], 27.1492],
  [[50, 2.5, 0], [61, -5, 29], 22.8977],
  [[50, 2.5, 0], [56, -27, -3], 31.903],
  [[50, 2.5, 0], [58, 24, 15], 19.4535],
  [[60.2574, -34.0099, 36.2677], [60.4626, -34.1751, 39.4387], 1.2644],
  [[63.0109, -31.0961, -5.8663], [62.8187, -29.7946, -4.0864], 1.263],
  [[22.7233, 20.0904, -46.694], [23.0331, 14.973, -42.5619], 2.0373],
  [[90.8027, -2.0831, 1.441], [91.1528, -1.6435, 0.0447], 1.4441],
];

test('CIEDE2000 matches the Sharma et al. reference pairs', () => {
  for (const [a, b, expected] of PAIRS) {
    assert.ok(Math.abs(ciede2000(a, b) - expected) < 1e-4, `${a} / ${b}: ${ciede2000(a, b)} ≠ ${expected}`);
    assert.ok(Math.abs(ciede2000(b, a) - expected) < 1e-4, 'symmetric');
  }
});

test('colors are read in the forms people paste them', () => {
  assert.deepEqual(parseColor('#FF8800'), [255, 136, 0]);
  assert.deepEqual(parseColor('ff8800'), [255, 136, 0]);
  assert.deepEqual(parseColor('#f80'), [255, 136, 0]);
  assert.deepEqual(parseColor('rgb(255, 136, 0)'), [255, 136, 0]);
  assert.deepEqual(parseColor([255, 136, 0]), [255, 136, 0]);
  assert.equal(parseColor('orange'), null);
  assert.equal(parseColor([300, 0, 0]), null);
  assert.equal(deltaE('#123456', [0x12, 0x34, 0x56]), 0);
  assert.throws(() => deltaE('nope', '#000'), TypeError);
});
