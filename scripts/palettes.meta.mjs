// What each published palette is, where its numbers come from, and how far
// they can be trusted. The colors themselves are read from MakeBead's source
// by sync-from-makebead.mjs; everything a reader needs to judge them is here.
//
// status — how the values were obtained (weakest part of the palette wins):
//   official      the maker or game publishes these numbers and ours match them
//   measured      measured from the maker's own material by a documented method
//   cross-checked several independent sources compared, conflicts settled by a
//                 written rule
//   community     sampled from physical beads or photos by hobbyists; not
//                 independently checked
//   approximate   codes and names checked, colors not yet calibrated
//   generated     not a product line

const BEADCOLORS = {
  name: 'maxcleme/beadcolors (MIT)',
  url: 'https://github.com/maxcleme/beadcolors',
};
const BEADCOLORS_LICENSE = 'MIT (maxcleme/beadcolors, Copyright (c) 2020 maxcleme)';

export const PALETTES = [
  {
    id: 'perler-midi',
    from: 'perler-midi',
    brand: 'Perler',
    product: 'Perler Beads (Midi, 5 mm)',
    craft: 'fuse beads',
    unit: 'bead',
    status: 'community',
    sources: [BEADCOLORS],
    notes:
      'Values sampled from physical beads by the beadcolors contributors. Perler does not publish RGB values. `sku` is the retail item number (e.g. 80-19001).',
    license: BEADCOLORS_LICENSE,
    makebead: 'https://makebead.com/',
  },
  {
    id: 'hama-midi',
    from: 'hama-midi',
    brand: 'Hama',
    product: 'Hama Beads (Midi, 5 mm)',
    craft: 'fuse beads',
    unit: 'bead',
    status: 'community',
    sources: [BEADCOLORS],
    notes:
      'Values sampled from physical beads by the beadcolors contributors. Hama does not publish RGB values.',
    license: BEADCOLORS_LICENSE,
    makebead: 'https://makebead.com/hama-bead-pattern-maker/',
  },
  {
    id: 'artkal-s',
    from: 'artkal-s',
    brand: 'Artkal',
    product: 'Artkal S series (Midi, 5 mm)',
    craft: 'fuse beads',
    unit: 'bead',
    status: 'community',
    sources: [BEADCOLORS],
    notes:
      'Values sampled from physical beads by the beadcolors contributors. Artkal does not publish RGB values.',
    license: BEADCOLORS_LICENSE,
    makebead: 'https://makebead.com/artkal-bead-pattern-maker/',
  },
  {
    id: 'nabbi',
    from: 'nabbi',
    brand: 'Nabbi',
    product: 'Nabbi BioBeads (Midi)',
    craft: 'fuse beads',
    unit: 'bead',
    status: 'community',
    sources: [BEADCOLORS],
    notes: 'Values sampled from physical beads by the beadcolors contributors.',
    license: BEADCOLORS_LICENSE,
    makebead: 'https://makebead.com/fuse-bead-pattern-maker/',
  },
  {
    id: 'mard-185',
    from: 'mard-standard',
    brand: 'MARD',
    product: 'MARD Beads (Midi, 5 mm) — 185 colors',
    craft: 'fuse beads',
    unit: 'bead',
    status: 'community',
    sources: [
      { name: 'peiseka.com color chart', url: 'https://peiseka.com/' },
      { name: 'pixel-beads.com MARD chart', url: 'https://pixel-beads.com/perler-bead-color-chart' },
    ],
    notes:
      'The 185-color MARD standard used across Chinese pattern apps (A–H series). MARD bottles carry a code and no name; the English names here are descriptive names written by MakeBead.',
    license: 'CC-BY-4.0',
    makebead: 'https://makebead.com/mard-bead-pattern-maker/',
  },
  {
    id: 'mard-221',
    from: 'mard-221',
    brand: 'MARD',
    product: 'MARD Beads (Midi, 5 mm) — 221 colors',
    craft: 'fuse beads',
    unit: 'bead',
    status: 'community',
    sources: [
      { name: 'peiseka.com color chart', url: 'https://peiseka.com/' },
      { name: 'pixel-beads.com MARD chart', url: 'https://pixel-beads.com/perler-bead-color-chart' },
    ],
    notes:
      'The 221-color set (A–H and M series). Retail boxes of 24–216 colors are listed in data/sets/mard-kits.json. English names are descriptive names written by MakeBead.',
    license: 'CC-BY-4.0',
    makebead: 'https://makebead.com/mard-bead-pattern-maker/',
  },
  {
    id: 'mard-291',
    from: 'mard-291',
    brand: 'MARD',
    product: 'MARD Beads (Midi, 5 mm) — 291 colors',
    craft: 'fuse beads',
    unit: 'bead',
    status: 'community',
    sources: [
      { name: 'pixel-beads.com MARD chart (2026 revised)', url: 'https://pixel-beads.com/perler-bead-color-chart' },
      {
        name: 'Zippland/perler-beads colorSystemMapping.json',
        url: 'https://github.com/Zippland/perler-beads',
      },
      {
        name: 'HansBug/pindou-color-data (mard-291-github, from abearxiong/get-colors-from-beans)',
        url: 'https://github.com/HansBug/pindou-color-data',
      },
    ],
    notes:
      'The 221 plus the 70 specialty colors (P, Q, R, T, Y, ZG series) that the 240 and 264 boxes reach into. The 221 base values are the mard-221 values. For the 70 specialty colors no maker chart with numbers exists, so three data lineages were compared: where the first two agree their value is used, otherwise whichever of the two the third lineage sits closer to (7 codes: P2, P14, P19, Q2, Q5, R6, T1).',
    license: 'CC-BY-4.0',
    makebead: 'https://makebead.com/mard-bead-pattern-maker/',
  },
  {
    id: 'miyuki-delica',
    from: 'miyuki-delica',
    brand: 'Miyuki',
    product: 'Miyuki Delica 11/0 (DB)',
    craft: 'seed beads',
    unit: 'bead',
    status: 'measured',
    sources: [
      {
        name: 'MIYUKI bead directory (codes, glass type, finish, discontinued list)',
        url: 'https://directory.miyuki-beads.co.jp/',
      },
      {
        name: 'MIYUKI official product photos (color = mean of every pixel, sRGB)',
        url: 'https://directory.miyuki-beads.co.jp/download/',
      },
    ],
    notes:
      'Every Delica 11/0 code in Miyuki’s directory, 76 of them discontinued. The color is the plain sRGB mean of Miyuki’s official 400×400 product photo of each code; the photos themselves are not redistributed. Compared with two independent datasets (DianeGagne/beads-website, rowguide) the color family agrees on every code and the shade differs by 6–12 ΔE00 (median): right bead, approximate shade. Metallic, galvanized, AB and silver-lined beads cannot be one flat color. Miyuki publishes no color names; names are built from Miyuki’s own terms. `glass` is the glass type.',
    license: 'CC-BY-4.0',
    makebead: 'https://makebead.com/bead-loom-pattern-maker/',
  },
  {
    id: 'dmc-floss',
    from: 'dmc-floss',
    brand: 'DMC',
    product: 'DMC Six-Strand Embroidery Floss (Mouliné Spécial, art. 117)',
    craft: 'cross stitch & embroidery',
    unit: 'skein',
    status: 'cross-checked',
    sources: [
      { name: 'floss.maxxmint.com (R/G/B columns)', url: 'https://floss.maxxmint.com/' },
      {
        name: 'adrianj/CrossStitchCreator (the set behind the sharlagelfand/dmc R package)',
        url: 'https://github.com/adrianj/CrossStitchCreator',
      },
      { name: 'xstitchify.com (arbiter)', url: 'https://xstitchify.com/' },
    ],
    notes:
      'All 489 colors. Hex is rebuilt from the integer R/G/B columns because the hex strings in the common upstream were damaged by a spreadsheet (221 stored as 8.83E+45, lost leading zeros). Where a source’s displayed hex disagreed with its own RGB columns (11 rows), an independent third source sided with the RGB columns 8 times of 9. DMC 309 (Rose Dark) is #C12041: both older sources carry a grey-brown #564A4A inherited from a shared ancestor. Blanc and B5200 are distinct (#FCFBF8 / #FFFFFF).',
    license: 'CC-BY-4.0',
    makebead: 'https://makebead.com/dmc-color-chart/',
  },
  {
    id: 'dmc-diamond',
    from: 'dmc-diamond',
    brand: 'DMC',
    product: 'DMC-coded diamond painting drills',
    craft: 'diamond painting',
    unit: 'drill',
    status: 'cross-checked',
    sources: [{ name: 'dmc-floss in this repository', url: './dmc-floss.json' }],
    notes:
      'Diamond painting kits number their drills with DMC floss codes. Colors are the dmc-floss values for the same codes. The 154 codes are the set MakeBead started with, not a list of what is sold as drills; it has not been extended because which codes exist as drills could not be verified. For the full DMC range use dmc-floss.',
    license: 'CC-BY-4.0',
    makebead: 'https://makebead.com/diamond-painting-pattern-maker/',
  },
  {
    id: 'lego',
    from: 'lego-colors',
    brand: 'LEGO',
    product: 'LEGO brick colors (mosaic palette)',
    craft: 'brick mosaics',
    unit: 'stud',
    status: 'approximate',
    sources: [
      { name: 'Rebrickable colors.csv (LEGO’s own RGB values)', url: 'https://rebrickable.com/downloads/' },
    ],
    notes:
      'Codes L01–L40 are this palette’s own index, not LEGO color IDs. The 21 colors whose names match Rebrickable’s list are exact (two were corrected on 2026-08-18: Lavender, Light Nougat); the other 19 have not been checked.',
    license: 'CC-BY-4.0',
    makebead: 'https://makebead.com/lego-mosaic-maker/',
  },
  {
    id: 'minecraft-blocks',
    from: 'minecraft-blocks',
    brand: 'Minecraft',
    product: 'Minecraft blocks for pixel art',
    craft: 'Minecraft pixel art',
    unit: 'block',
    status: 'approximate',
    sources: [{ name: 'MakeBead Minecraft pixel-art generator', url: 'https://makebead.com/minecraft-pixel-art-generator/' }],
    notes:
      'A representative color per block, with its namespaced block id and `group`. `survival: false` marks ore and mineral blocks that are impractical to gather in survival. Colors have not yet been checked against the game textures.',
    license: 'CC-BY-4.0',
    makebead: 'https://makebead.com/minecraft-pixel-art-generator/',
  },
  {
    id: 'minecraft-map',
    from: 'map-colors',
    brand: 'Minecraft',
    product: 'Minecraft map colors (Java Edition)',
    craft: 'Minecraft map art',
    unit: 'block',
    status: 'official',
    sources: [
      { name: 'Minecraft Wiki — Map item format', url: 'https://minecraft.wiki/w/Map_item_format' },
    ],
    notes:
      'Every color a map can show: 61 base colors × 4 shades. `code` is the byte stored in map_N.dat (base × 4 + shade). Shade 0 = the block is lower than its north neighbour (×180/255), 1 = level (×220/255), 2 = higher (×255/255), 3 = water depth only (×135/255). `buildable` marks the colors a staircase build can produce with the suggested `block`. Base colors checked 62/62 against the game data.',
    license: 'CC-BY-4.0',
    makebead: 'https://makebead.com/minecraft-map-art-generator/',
  },
  {
    id: 'red-heart-super-saver',
    from: 'red-heart',
    brand: 'Red Heart',
    product: 'Red Heart Super Saver (worsted)',
    craft: 'crochet & knitting',
    unit: 'skein',
    status: 'approximate',
    sources: [
      {
        name: 'Yarnspirations Super Saver catalogue (codes and names, 2026-07-06)',
        url: 'https://www.yarnspirations.com/products/red-heart-super-saver-yarn',
      },
    ],
    notes:
      '44 colors. Every code and name was checked against the current catalogue (discontinued shades removed); the colors are approximations and have not been calibrated. Corrections with a photo are very welcome.',
    license: 'CC-BY-4.0',
    makebead: 'https://makebead.com/crochet-pattern-maker/',
  },
  {
    id: 'pixel-art-256',
    from: 'pixel-art-256',
    brand: 'Generic',
    product: 'Pixel art 256',
    craft: 'digital pixel art',
    unit: 'pixel',
    status: 'generated',
    sources: [{ name: 'MakeBead pixel-art converter', url: 'https://makebead.com/pixel-art-converter/' }],
    notes: 'A general-purpose 256-color palette. The code is the hex value.',
    license: 'CC-BY-4.0',
    makebead: 'https://makebead.com/pixel-art-converter/',
  },
];
