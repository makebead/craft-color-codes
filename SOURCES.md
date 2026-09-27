# Sources

Where every palette’s numbers come from, how they were checked, and what is known to be weak. The same text is in each palette file’s `notes` and `sources`.

## Perler Beads (Midi, 5 mm) — `perler-midi`

**Status:** `community` · **Colors:** 103 · **License:** MIT (maxcleme/beadcolors, Copyright (c) 2020 maxcleme) · **Used on:** [makebead.com](https://makebead.com/)

Values sampled from physical beads by the beadcolors contributors. Perler does not publish RGB values. `sku` is the retail item number (e.g. 80-19001).

- [maxcleme/beadcolors (MIT)](https://github.com/maxcleme/beadcolors)

## Hama Beads (Midi, 5 mm) — `hama-midi`

**Status:** `community` · **Colors:** 92 · **License:** MIT (maxcleme/beadcolors, Copyright (c) 2020 maxcleme) · **Used on:** [makebead.com/hama-bead-pattern-maker/](https://makebead.com/hama-bead-pattern-maker/)

Values sampled from physical beads by the beadcolors contributors. Hama does not publish RGB values.

- [maxcleme/beadcolors (MIT)](https://github.com/maxcleme/beadcolors)

## Artkal S series (Midi, 5 mm) — `artkal-s`

**Status:** `community` · **Colors:** 199 · **License:** MIT (maxcleme/beadcolors, Copyright (c) 2020 maxcleme) · **Used on:** [makebead.com/artkal-bead-pattern-maker/](https://makebead.com/artkal-bead-pattern-maker/)

Values sampled from physical beads by the beadcolors contributors. Artkal does not publish RGB values.

- [maxcleme/beadcolors (MIT)](https://github.com/maxcleme/beadcolors)

## Nabbi BioBeads (Midi) — `nabbi`

**Status:** `community` · **Colors:** 30 · **License:** MIT (maxcleme/beadcolors, Copyright (c) 2020 maxcleme) · **Used on:** [makebead.com/fuse-bead-pattern-maker/](https://makebead.com/fuse-bead-pattern-maker/)

Values sampled from physical beads by the beadcolors contributors.

- [maxcleme/beadcolors (MIT)](https://github.com/maxcleme/beadcolors)

## MARD Beads (Midi, 5 mm) — 185 colors — `mard-185`

**Status:** `community` · **Colors:** 185 · **License:** CC-BY-4.0 · **Used on:** [makebead.com/mard-bead-pattern-maker/](https://makebead.com/mard-bead-pattern-maker/)

The 185-color MARD standard used across Chinese pattern apps (A–H series). MARD bottles carry a code and no name; the English names here are descriptive names written by MakeBead.

- [peiseka.com color chart](https://peiseka.com/)
- [pixel-beads.com MARD chart](https://pixel-beads.com/perler-bead-color-chart)

## MARD Beads (Midi, 5 mm) — 221 colors — `mard-221`

**Status:** `community` · **Colors:** 221 · **License:** CC-BY-4.0 · **Used on:** [makebead.com/mard-bead-pattern-maker/](https://makebead.com/mard-bead-pattern-maker/)

The 221-color set (A–H and M series). Retail boxes of 24–216 colors are listed in data/sets/mard-kits.json. English names are descriptive names written by MakeBead.

- [peiseka.com color chart](https://peiseka.com/)
- [pixel-beads.com MARD chart](https://pixel-beads.com/perler-bead-color-chart)

## MARD Beads (Midi, 5 mm) — 291 colors — `mard-291`

**Status:** `community` · **Colors:** 291 · **License:** CC-BY-4.0 · **Used on:** [makebead.com/mard-bead-pattern-maker/](https://makebead.com/mard-bead-pattern-maker/)

The 221 plus the 70 specialty colors (P, Q, R, T, Y, ZG series) that the 240 and 264 boxes reach into. The 221 base values are the mard-221 values. For the 70 specialty colors no maker chart with numbers exists, so three data lineages were compared: where the first two agree their value is used, otherwise whichever of the two the third lineage sits closer to (7 codes: P2, P14, P19, Q2, Q5, R6, T1).

- [pixel-beads.com MARD chart (2026 revised)](https://pixel-beads.com/perler-bead-color-chart)
- [Zippland/perler-beads colorSystemMapping.json](https://github.com/Zippland/perler-beads)
- [HansBug/pindou-color-data (mard-291-github, from abearxiong/get-colors-from-beans)](https://github.com/HansBug/pindou-color-data)

## Miyuki Delica 11/0 (DB) — `miyuki-delica`

**Status:** `measured` · **Colors:** 1,288 (76 discontinued) · **License:** CC-BY-4.0 · **Used on:** [makebead.com/bead-loom-pattern-maker/](https://makebead.com/bead-loom-pattern-maker/)

Every Delica 11/0 code in Miyuki’s directory, 76 of them discontinued. The color is the plain sRGB mean of Miyuki’s official 400×400 product photo of each code; the photos themselves are not redistributed. Compared with two independent datasets (DianeGagne/beads-website, rowguide) the color family agrees on every code and the shade differs by 6–12 ΔE00 (median): right bead, approximate shade. Metallic, galvanized, AB and silver-lined beads cannot be one flat color. Miyuki publishes no color names; names are built from Miyuki’s own terms. `glass` is the glass type.

- [MIYUKI bead directory (codes, glass type, finish, discontinued list)](https://directory.miyuki-beads.co.jp/)
- [MIYUKI official product photos (color = mean of every pixel, sRGB)](https://directory.miyuki-beads.co.jp/download/)

## DMC Six-Strand Embroidery Floss (Mouliné Spécial, art. 117) — `dmc-floss`

**Status:** `cross-checked` · **Colors:** 489 · **License:** CC-BY-4.0 · **Used on:** [makebead.com/dmc-color-chart/](https://makebead.com/dmc-color-chart/)

All 489 colors. Hex is rebuilt from the integer R/G/B columns because the hex strings in the common upstream were damaged by a spreadsheet (221 stored as 8.83E+45, lost leading zeros). Where a source’s displayed hex disagreed with its own RGB columns (11 rows), an independent third source sided with the RGB columns 8 times of 9. DMC 309 (Rose Dark) is #C12041: both older sources carry a grey-brown #564A4A inherited from a shared ancestor. Blanc and B5200 are distinct (#FCFBF8 / #FFFFFF).

- [floss.maxxmint.com (R/G/B columns)](https://floss.maxxmint.com/)
- [adrianj/CrossStitchCreator (the set behind the sharlagelfand/dmc R package)](https://github.com/adrianj/CrossStitchCreator)
- [xstitchify.com (arbiter)](https://xstitchify.com/)

## DMC-coded diamond painting drills — `dmc-diamond`

**Status:** `cross-checked` · **Colors:** 154 · **License:** CC-BY-4.0 · **Used on:** [makebead.com/diamond-painting-pattern-maker/](https://makebead.com/diamond-painting-pattern-maker/)

Diamond painting kits number their drills with DMC floss codes. Colors are the dmc-floss values for the same codes. The 154 codes are the set MakeBead started with, not a list of what is sold as drills; it has not been extended because which codes exist as drills could not be verified. For the full DMC range use dmc-floss.

- `dmc-floss in this repository`

## LEGO brick colors (mosaic palette) — `lego`

**Status:** `approximate` · **Colors:** 40 · **License:** CC-BY-4.0 · **Used on:** [makebead.com/lego-mosaic-maker/](https://makebead.com/lego-mosaic-maker/)

Codes L01–L40 are this palette’s own index, not LEGO color IDs. The 21 colors whose names match Rebrickable’s list are exact (two were corrected on 2026-08-18: Lavender, Light Nougat); the other 19 have not been checked.

- [Rebrickable colors.csv (LEGO’s own RGB values)](https://rebrickable.com/downloads/)

## Minecraft blocks for pixel art — `minecraft-blocks`

**Status:** `approximate` · **Colors:** 53 · **License:** CC-BY-4.0 · **Used on:** [makebead.com/minecraft-pixel-art-generator/](https://makebead.com/minecraft-pixel-art-generator/)

A representative color per block, with its namespaced block id and `group`. `survival: false` marks ore and mineral blocks that are impractical to gather in survival. Colors have not yet been checked against the game textures.

- [MakeBead Minecraft pixel-art generator](https://makebead.com/minecraft-pixel-art-generator/)

## Minecraft map colors (Java Edition) — `minecraft-map`

**Status:** `official` · **Colors:** 244 · **License:** CC-BY-4.0 · **Used on:** [makebead.com/minecraft-map-art-generator/](https://makebead.com/minecraft-map-art-generator/)

Every color a map can show: 61 base colors × 4 shades. `code` is the byte stored in map_N.dat (base × 4 + shade). Shade 0 = the block is lower than its north neighbour (×180/255), 1 = level (×220/255), 2 = higher (×255/255), 3 = water depth only (×135/255). `buildable` marks the colors a staircase build can produce with the suggested `block`. Base colors checked 62/62 against the game data.

- [Minecraft Wiki — Map item format](https://minecraft.wiki/w/Map_item_format)

## Red Heart Super Saver (worsted) — `red-heart-super-saver`

**Status:** `approximate` · **Colors:** 44 · **License:** CC-BY-4.0 · **Used on:** [makebead.com/crochet-pattern-maker/](https://makebead.com/crochet-pattern-maker/)

44 colors. Every code and name was checked against the current catalogue (discontinued shades removed); the colors are approximations and have not been calibrated. Corrections with a photo are very welcome.

- [Yarnspirations Super Saver catalogue (codes and names, 2026-07-06)](https://www.yarnspirations.com/products/red-heart-super-saver-yarn)

## Pixel art 256 — `pixel-art-256`

**Status:** `generated` · **Colors:** 256 · **License:** CC-BY-4.0 · **Used on:** [makebead.com/pixel-art-converter/](https://makebead.com/pixel-art-converter/)

A general-purpose 256-color palette. The code is the hex value.

- [MakeBead pixel-art converter](https://makebead.com/pixel-art-converter/)

## Third-party license: maxcleme/beadcolors

The `perler-midi`, `hama-midi`, `artkal-s` and `nabbi` values are taken from maxcleme/beadcolors under this license:

```
MIT License

Copyright (c) 2020 maxcleme

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
