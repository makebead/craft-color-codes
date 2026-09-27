export type RGB = [number, number, number];
/** "#RRGGBB", "RRGGBB", "#RGB", "rgb(r, g, b)" or [r, g, b]. */
export type ColorInput = string | RGB;

export type Status = 'official' | 'measured' | 'cross-checked' | 'community' | 'approximate' | 'generated';

export interface Color {
  /** As printed on the bag, tube, skein or item. */
  code: string;
  name: string;
  /** "#RRGGBB", upper case. */
  hex: string;
  rgb: RGB;
  /** Present (true) only for colors no longer made. */
  discontinued?: true;
  /** Perler: retail item number, e.g. "80-19001". */
  sku?: string;
  /** Miyuki Delica: glass type (opaque, transparent, alabaster, silk). */
  glass?: string;
  /** Minecraft blocks: block group (wool, concrete, wood, natural). */
  group?: string;
  /** Minecraft: namespaced block id, e.g. "minecraft:white_wool". */
  block?: string;
  /** Minecraft blocks: false for ore blocks impractical to gather in survival. */
  survival?: boolean;
  /** Minecraft map colors: base color id (1–61). */
  base?: number;
  /** Minecraft map colors: 0 low, 1 level, 2 high, 3 water depth only. */
  shade?: 0 | 1 | 2 | 3;
  /** Minecraft map colors: a staircase build can produce it with `block`. */
  buildable?: boolean;
  /** Minecraft map colors: a property of the suggested block that will bite a builder. */
  caveat?: string;
}

export interface PaletteMeta {
  id: string;
  brand: string;
  product: string;
  craft: string;
  unit: string;
  count: number;
  discontinued?: number;
  status: Status;
  notes: string;
  sources: { name: string; url: string }[];
  license: string;
  /** The MakeBead page that uses this palette. */
  makebead: string;
}

export interface Palette extends PaletteMeta {
  colors: Color[];
}

export interface Match extends Color {
  /** CIEDE2000. Under ~1 looks identical, under ~3 is close, over ~10 is a different color. */
  deltaE: number;
}

export const palettes: PaletteMeta[];

/** A palette id from an id, an alias ("dmc", "delica", "perler") or a brand name. */
export function resolvePaletteId(input: string): string | null;
export function getPalette(id: string): Palette;
/** "DB10", "DB-0010" and "10" all find Delica DB0010. */
export function getColor(paletteId: string, code: string): Color | undefined;
export function codeKey(code: string): string;

export interface NearestOptions {
  limit?: number;
  includeDiscontinued?: boolean;
}
export function nearest(color: ColorInput, paletteId: string, options?: NearestOptions): Match[];
export function nearestAcross(
  color: ColorInput,
  options?: NearestOptions & { palettes?: string[] },
): { palette: string; brand: string; product: string; matches: Match[] }[];
export function convert(
  fromPalette: string,
  code: string,
  toPalette: string,
  options?: NearestOptions,
): { from: Color & { palette: string }; to: string; matches: Match[] } | null;
export function search(
  query: string,
  options?: { palettes?: string[]; limit?: number },
): (Color & { palette: string; brand: string })[];

export function parseColor(input: ColorInput): RGB | null;
export function toHex(rgb: RGB): string;
export function rgbToLab(rgb: RGB): [number, number, number];
/** CIEDE2000 between two Lab colors. */
export function ciede2000(a: [number, number, number], b: [number, number, number]): number;
/** CIEDE2000 between two colors. */
export function deltaE(a: ColorInput, b: ColorInput): number;
