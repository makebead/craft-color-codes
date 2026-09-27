# Craft Color Codes

[![npm](https://img.shields.io/npm/v/craft-color-codes)](https://www.npmjs.com/package/craft-color-codes) [![data: CC BY 4.0](https://img.shields.io/badge/data-CC%20BY%204.0-blue)](LICENSE-DATA.md) [![code: MIT](https://img.shields.io/badge/code-MIT-green)](LICENSE)

**English** · [Deutsch](i18n/README.de.md) · [日本語](i18n/README.ja.md) · [한국어](i18n/README.ko.md) · [Français](i18n/README.fr.md) · [Español](i18n/README.es.md) · [Русский](i18n/README.ru.md) · [ไทย](i18n/README.th.md) · [简体中文](i18n/README.zh-CN.md) · [繁體中文](i18n/README.zh-TW.md) · [Português (Brasil)](i18n/README.pt-BR.md)

Hex and RGB values for **3,689 craft color codes** in 15 palettes — fuse beads, seed beads, embroidery floss, diamond painting drills, yarn, LEGO and Minecraft — with where every number comes from and how far to trust it.

[MakeBead](https://makebead.com/) turns photos into bead, cross-stitch and pixel-art patterns. These are the palettes its tools use, published so that anyone building a pattern maker, a color converter or a shopping list does not have to collect them again, and so that a wrong color gets found and fixed in one place.

## Palettes

| Palette | Colors | Status | Files | Used on MakeBead |
| --- | --: | --- | --- | --- |
| Perler Beads (Midi, 5 mm) | 103 | `community` | [JSON](data/json/perler-midi.json) · [CSV](data/csv/perler-midi.csv) | [Free Perler Bead Pattern Maker](https://makebead.com/) |
| Hama Beads (Midi, 5 mm) | 92 | `community` | [JSON](data/json/hama-midi.json) · [CSV](data/csv/hama-midi.csv) | [Free Hama Bead Pattern Maker](https://makebead.com/hama-bead-pattern-maker/) |
| Artkal S series (Midi, 5 mm) | 199 | `community` | [JSON](data/json/artkal-s.json) · [CSV](data/csv/artkal-s.csv) | [Free Artkal Bead Pattern Maker](https://makebead.com/artkal-bead-pattern-maker/) |
| Nabbi BioBeads (Midi) | 30 | `community` | [JSON](data/json/nabbi.json) · [CSV](data/csv/nabbi.csv) | [Free Fuse Bead Pattern Maker](https://makebead.com/fuse-bead-pattern-maker/) |
| MARD Beads (Midi, 5 mm) — 185 colors | 185 | `community` | [JSON](data/json/mard-185.json) · [CSV](data/csv/mard-185.csv) | [Free MARD Bead Pattern Maker](https://makebead.com/mard-bead-pattern-maker/) |
| MARD Beads (Midi, 5 mm) — 221 colors | 221 | `community` | [JSON](data/json/mard-221.json) · [CSV](data/csv/mard-221.csv) | [Free MARD Bead Pattern Maker](https://makebead.com/mard-bead-pattern-maker/) |
| MARD Beads (Midi, 5 mm) — 291 colors | 291 | `community` | [JSON](data/json/mard-291.json) · [CSV](data/csv/mard-291.csv) | [Free MARD Bead Pattern Maker](https://makebead.com/mard-bead-pattern-maker/) |
| Miyuki Delica 11/0 (DB) | 1,288 (76 discontinued) | `measured` | [JSON](data/json/miyuki-delica.json) · [CSV](data/csv/miyuki-delica.csv) | [Free Bead Loom Pattern Maker](https://makebead.com/bead-loom-pattern-maker/) |
| DMC Six-Strand Embroidery Floss (Mouliné Spécial, art. 117) | 489 | `cross-checked` | [JSON](data/json/dmc-floss.json) · [CSV](data/csv/dmc-floss.csv) | [DMC Color Chart](https://makebead.com/dmc-color-chart/) |
| DMC-coded diamond painting drills | 154 | `cross-checked` | [JSON](data/json/dmc-diamond.json) · [CSV](data/csv/dmc-diamond.csv) | [Free Custom Diamond Painting Pattern Maker](https://makebead.com/diamond-painting-pattern-maker/) |
| LEGO brick colors (mosaic palette) | 40 | `approximate` | [JSON](data/json/lego.json) · [CSV](data/csv/lego.csv) | [Free LEGO Mosaic Maker](https://makebead.com/lego-mosaic-maker/) |
| Minecraft blocks for pixel art | 53 | `approximate` | [JSON](data/json/minecraft-blocks.json) · [CSV](data/csv/minecraft-blocks.csv) | [Free Minecraft Pixel Art Generator](https://makebead.com/minecraft-pixel-art-generator/) |
| Minecraft map colors (Java Edition) | 244 | `official` | [JSON](data/json/minecraft-map.json) · [CSV](data/csv/minecraft-map.csv) | [Minecraft Map Art Generator](https://makebead.com/minecraft-map-art-generator/) |
| Red Heart Super Saver (worsted) | 44 | `approximate` | [JSON](data/json/red-heart-super-saver.json) · [CSV](data/csv/red-heart-super-saver.csv) | [Free Crochet Pattern Maker](https://makebead.com/crochet-pattern-maker/) |
| Pixel art 256 | 256 | `generated` | [JSON](data/json/pixel-art-256.json) · [CSV](data/csv/pixel-art-256.csv) | [Free Pixel Art Converter](https://makebead.com/pixel-art-converter/) |

MARD retail boxes (24 → 264 colors: which codes each box holds) are in [`data/sets/mard-kits.json`](data/sets/mard-kits.json).

## How far to trust a palette

- `official` — the maker or the game publishes these numbers, and ours match them
- `measured` — measured from the maker's own material by a documented method
- `cross-checked` — several independent sources compared, conflicts settled by a written rule
- `community` — sampled from physical beads or photos by hobbyists, not independently checked
- `approximate` — codes and names checked, colors not yet calibrated
- `generated` — not a product line

No screen shows a physical bead exactly: finish, lighting and monitor all move it. Use the hex to choose and compare, and buy by the code.

## Use it

### Download or link the files

Every palette is a JSON file and a CSV file. Link them straight from a CDN:

```
https://cdn.jsdelivr.net/gh/makebead/craft-color-codes@main/data/json/dmc-floss.json
https://cdn.jsdelivr.net/npm/craft-color-codes@1/data/csv/miyuki-delica.csv
```

### JavaScript

Look up codes, find the closest color, convert between brands. No dependencies.

```sh
npm install craft-color-codes
```

```js
import { getColor, nearest, convert } from 'craft-color-codes';

getColor('delica', 'DB10'); // "DB10", "DB-010" and "10" all work
// → { code: 'DB0010', name: 'Opaque Black', hex: '#131313' }

nearest('#E8A0B0', 'dmc', { limit: 3 }); // closest DMC floss to a color
// → [{ code: '3354', name: 'Dusty Rose Light', hex: '#E4A6AC', deltaE: 3.62 }, …]

convert('perler', 'P38', 'hama'); // Perler P38 → Hama
// → { from: { code: 'P38', name: 'Magenta', … }, matches: [{ code: 'H32', name: 'Neon Fuchsia', hex: '#FF208D', deltaE: 4.81 }, …] }
```

### MCP server (Claude, Cursor, VS Code…)

Give an AI assistant the palettes as tools, so it answers "what is Perler P38 in Hama?" or "which DMC floss is closest to #E8A0B0?" from the data instead of from memory.

Claude Code:

```sh
claude mcp add craft-color-codes -- npx -y craft-color-codes
```

Other clients (Claude Desktop, Cursor, VS Code):

```json
{
  "mcpServers": {
    "craft-color-codes": {
      "command": "npx",
      "args": [
        "-y",
        "craft-color-codes"
      ]
    }
  }
}
```

- `list_palettes` — every palette, with its status
- `get_color` — one color by its code, written the way people write it
- `find_closest` — closest colors to a hex color, ranked by CIEDE2000
- `convert_color` — a code in one brand → its closest equivalents in another
- `search_colors` — search by color name or code

## Data format

Each palette file carries its own description, sources and license:

```jsonc
{
  "id": "miyuki-delica",
  "brand": "Miyuki",
  "product": "Miyuki Delica 11/0 (DB)",
  "count": 1288,
  "status": "measured",
  "notes": "…", "sources": [ … ], "license": "CC-BY-4.0",
  "colors": [
    {"code":"DB0010","name":"Opaque Black","hex":"#131313","rgb":[19,19,19],"glass":"opaque"},
    …
  ]
}
```

- `code` — as printed on the bag, tube, skein or item
- `hex` — `#RRGGBB`, upper case, with `rgb` as `[r, g, b]`
- `discontinued` — `true` only for colors no longer made (Miyuki Delica)
- palette-specific fields: `sku` (Perler item number), `glass` (Delica glass type), `group`, `block`, `survival` (Minecraft blocks), `base`, `shade`, `buildable` (Minecraft map colors)

The CSV has the same colors, one per row:

```csv
code,name,hex,r,g,b,discontinued,glass
DB0010,Opaque Black,#131313,19,19,19,false,opaque
```

## Where the numbers come from

Each palette's sources, method and known weaknesses are in [SOURCES.md](SOURCES.md) and in the palette file's `notes`. Two examples of what that checking found: DMC 309 (Rose Dark) is grey-brown in the common upstream data and red here, and the Delica colors were rebuilt from Miyuki's own photos after MakeBead's earlier 39-color set turned out to draw DB0724, an opaque green, as red.

## Found a wrong color?

Open an issue with the palette, the code, what you see — and if you can, a daylight photo of the bead, skein or brick next to white paper. Corrections go into MakeBead first and are republished here.

→ [Report a wrong color](https://github.com/makebead/craft-color-codes/issues/new?template=wrong-color.yml)

## License

Code (`src/`, `bin/`): MIT. Data (`data/`): [CC BY 4.0](LICENSE-DATA.md) — use it anywhere, commercial use included, with a credit. The Perler, Hama, Artkal and Nabbi values come from [maxcleme/beadcolors](https://github.com/maxcleme/beadcolors) and stay under its MIT license. Suggested credit:

```
Color data: craft-color-codes by MakeBead (https://makebead.com)
```

<sub>Perler, Hama, Artkal, Nabbi, MARD, Miyuki, Delica, DMC, Red Heart, LEGO and Minecraft are trademarks of their owners. This project is not affiliated with or endorsed by any of them. NOT AN OFFICIAL MINECRAFT PRODUCT. NOT APPROVED BY OR ASSOCIATED WITH MOJANG OR MICROSOFT.</sub>

## About MakeBead

[MakeBead](https://makebead.com/) is a free pattern maker for Perler and Hama beads, cross stitch, diamond painting, loom beading, crochet, LEGO mosaics and Minecraft pixel art, in 11 languages. Every palette here is live in its tools.
