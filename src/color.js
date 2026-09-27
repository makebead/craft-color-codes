// Color parsing and CIEDE2000 — the color difference that matches what the
// eye sees far better than distance in RGB. Zero dependencies.

/**
 * Accepts "#RRGGBB", "RRGGBB", "#RGB", "rgb(r, g, b)" or [r, g, b].
 * Returns [r, g, b] (0–255 integers) or null.
 */
export function parseColor(input) {
  if (Array.isArray(input)) {
    if (input.length !== 3 || input.some((n) => !Number.isFinite(n) || n < 0 || n > 255)) return null;
    return input.map((n) => Math.round(n));
  }
  if (typeof input !== 'string') return null;
  const s = input.trim().toLowerCase();
  const rgb = /^rgba?\(\s*(\d{1,3})[\s,]+(\d{1,3})[\s,]+(\d{1,3})/.exec(s);
  if (rgb) return parseColor([+rgb[1], +rgb[2], +rgb[3]]);
  const hex = s.replace(/^#/, '');
  if (/^[0-9a-f]{3}$/.test(hex)) return [...hex].map((c) => parseInt(c + c, 16));
  if (/^[0-9a-f]{6}$/.test(hex)) return [0, 2, 4].map((i) => parseInt(hex.slice(i, i + 2), 16));
  return null;
}

export const toHex = (rgb) =>
  '#' + rgb.map((n) => n.toString(16).padStart(2, '0')).join('').toUpperCase();

function srgbToLinear(c) {
  const s = c / 255;
  return s <= 0.04045 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4);
}

/** sRGB → CIELAB, D65 white. */
export function rgbToLab([r8, g8, b8]) {
  const r = srgbToLinear(r8);
  const g = srgbToLinear(g8);
  const b = srgbToLinear(b8);
  const x = (r * 0.4124 + g * 0.3576 + b * 0.1805) / 0.95047;
  const y = r * 0.2126 + g * 0.7152 + b * 0.0722;
  const z = (r * 0.0193 + g * 0.1192 + b * 0.9505) / 1.08883;
  const f = (t) => (t > 0.008856 ? Math.cbrt(t) : 7.787 * t + 16 / 116);
  const fx = f(x);
  const fy = f(y);
  const fz = f(z);
  return [116 * fy - 16, 500 * (fx - fy), 200 * (fy - fz)];
}

const deg2rad = (d) => (d * Math.PI) / 180;
function hueAngle(b, ap) {
  if (ap === 0 && b === 0) return 0;
  const deg = (Math.atan2(b, ap) * 180) / Math.PI;
  return deg >= 0 ? deg : deg + 360;
}

/** CIEDE2000 ΔE between two Lab colors (Sharma, Wu & Dalal 2005). */
export function ciede2000([L1, a1, b1], [L2, a2, b2]) {
  const avgLp = (L1 + L2) / 2;
  const c1 = Math.hypot(a1, b1);
  const c2 = Math.hypot(a2, b2);
  const avgC = (c1 + c2) / 2;
  const g = 0.5 * (1 - Math.sqrt(Math.pow(avgC, 7) / (Math.pow(avgC, 7) + Math.pow(25, 7))));
  const a1p = a1 * (1 + g);
  const a2p = a2 * (1 + g);
  const c1p = Math.hypot(a1p, b1);
  const c2p = Math.hypot(a2p, b2);
  const avgCp = (c1p + c2p) / 2;
  const h1p = hueAngle(b1, a1p);
  const h2p = hueAngle(b2, a2p);
  const dLp = L2 - L1;
  const dCp = c2p - c1p;
  let dhp = 0;
  if (c1p * c2p !== 0) {
    dhp = h2p - h1p;
    if (dhp > 180) dhp -= 360;
    else if (dhp < -180) dhp += 360;
  }
  const dHp = 2 * Math.sqrt(c1p * c2p) * Math.sin((dhp * Math.PI) / 360);
  let avgHp = h1p + h2p;
  if (c1p * c2p !== 0) {
    if (Math.abs(h1p - h2p) > 180) avgHp += h1p + h2p < 360 ? 360 : -360;
    avgHp /= 2;
  }
  const t =
    1 -
    0.17 * Math.cos(deg2rad(avgHp - 30)) +
    0.24 * Math.cos(deg2rad(2 * avgHp)) +
    0.32 * Math.cos(deg2rad(3 * avgHp + 6)) -
    0.2 * Math.cos(deg2rad(4 * avgHp - 63));
  const sl = 1 + (0.015 * (avgLp - 50) ** 2) / Math.sqrt(20 + (avgLp - 50) ** 2);
  const sc = 1 + 0.045 * avgCp;
  const sh = 1 + 0.015 * avgCp * t;
  const dTheta = 30 * Math.exp(-(((avgHp - 275) / 25) ** 2));
  const rc = 2 * Math.sqrt(Math.pow(avgCp, 7) / (Math.pow(avgCp, 7) + Math.pow(25, 7)));
  const rt = -rc * Math.sin(deg2rad(2 * dTheta));
  const tL = dLp / sl;
  const tC = dCp / sc;
  const tH = dHp / sh;
  return Math.sqrt(tL * tL + tC * tC + tH * tH + rt * tC * tH);
}

/** CIEDE2000 ΔE between two colors given as hex strings or [r, g, b]. */
export function deltaE(a, b) {
  const ra = parseColor(a);
  const rb = parseColor(b);
  if (!ra || !rb) throw new TypeError(`Not a color: ${ra ? JSON.stringify(b) : JSON.stringify(a)}`);
  return ciede2000(rgbToLab(ra), rgbToLab(rb));
}
