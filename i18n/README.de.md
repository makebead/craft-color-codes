# Craft Color Codes

[![npm](https://img.shields.io/npm/v/craft-color-codes)](https://www.npmjs.com/package/craft-color-codes) [![data: CC BY 4.0](https://img.shields.io/badge/data-CC%20BY%204.0-blue)](../LICENSE-DATA.md) [![code: MIT](https://img.shields.io/badge/code-MIT-green)](../LICENSE)

[English](../README.md) · **Deutsch** · [日本語](README.ja.md) · [한국어](README.ko.md) · [Français](README.fr.md) · [Español](README.es.md) · [Русский](README.ru.md) · [ไทย](README.th.md) · [简体中文](README.zh-CN.md) · [繁體中文](README.zh-TW.md) · [Português (Brasil)](README.pt-BR.md)

Hex- und RGB-Werte für **3.689 Farbcodes** in 15 Paletten — Bügelperlen, Rocailles, Stickgarn, Diamond-Painting-Steine, Wolle, LEGO und Minecraft — mit der Herkunft jeder Zahl und wie weit man ihr trauen kann.

[MakeBead](https://makebead.com/de/) macht aus Fotos Vorlagen für Bügelperlen, Kreuzstich und Pixel-Art. Das hier sind die Paletten seiner Werkzeuge — veröffentlicht, damit niemand sie für einen Vorlagengenerator, einen Farbumrechner oder eine Einkaufsliste noch einmal zusammensuchen muss und ein falscher Farbwert an einer Stelle gefunden und korrigiert wird.

## Paletten

| Palette | Farben | Status | Dateien | Auf MakeBead |
| --- | --: | --- | --- | --- |
| Perler Beads (Midi, 5 mm) | 103 | `community` | [JSON](../data/json/perler-midi.json) · [CSV](../data/csv/perler-midi.csv) | [Kostenloser Bügelperlen-Vorlagengenerator](https://makebead.com/de/) |
| Hama Beads (Midi, 5 mm) | 92 | `community` | [JSON](../data/json/hama-midi.json) · [CSV](../data/csv/hama-midi.csv) | [Kostenloser Hama-Vorlagen-Generator](https://makebead.com/de/hama-bead-pattern-maker/) |
| Artkal S series (Midi, 5 mm) | 199 | `community` | [JSON](../data/json/artkal-s.json) · [CSV](../data/csv/artkal-s.csv) | [Kostenloser Artkal-Vorlagen-Generator](https://makebead.com/de/artkal-bead-pattern-maker/) |
| Nabbi BioBeads (Midi) | 30 | `community` | [JSON](../data/json/nabbi.json) · [CSV](../data/csv/nabbi.csv) | [Free Fuse Bead Pattern Maker](https://makebead.com/fuse-bead-pattern-maker/) |
| MARD Beads (Midi, 5 mm) — 185 colors | 185 | `community` | [JSON](../data/json/mard-185.json) · [CSV](../data/csv/mard-185.csv) | [Kostenloser MARD-Perlenvorlagen-Generator](https://makebead.com/de/mard-bead-pattern-maker/) |
| MARD Beads (Midi, 5 mm) — 221 colors | 221 | `community` | [JSON](../data/json/mard-221.json) · [CSV](../data/csv/mard-221.csv) | [Kostenloser MARD-Perlenvorlagen-Generator](https://makebead.com/de/mard-bead-pattern-maker/) |
| MARD Beads (Midi, 5 mm) — 291 colors | 291 | `community` | [JSON](../data/json/mard-291.json) · [CSV](../data/csv/mard-291.csv) | [Kostenloser MARD-Perlenvorlagen-Generator](https://makebead.com/de/mard-bead-pattern-maker/) |
| Miyuki Delica 11/0 (DB) | 1.288 (76 nicht mehr hergestellt) | `measured` | [JSON](../data/json/miyuki-delica.json) · [CSV](../data/csv/miyuki-delica.csv) | [Kostenloser Perlenwebrahmen-Mustergenerator](https://makebead.com/de/bead-loom-pattern-maker/) |
| DMC Six-Strand Embroidery Floss (Mouliné Spécial, art. 117) | 489 | `cross-checked` | [JSON](../data/json/dmc-floss.json) · [CSV](../data/csv/dmc-floss.csv) | [DMC Color Chart](https://makebead.com/dmc-color-chart/) |
| DMC-coded diamond painting drills | 154 | `cross-checked` | [JSON](../data/json/dmc-diamond.json) · [CSV](../data/csv/dmc-diamond.csv) | [Kostenloser individueller Diamond-Painting-Vorlagengenerator](https://makebead.com/de/diamond-painting-pattern-maker/) |
| LEGO brick colors (mosaic palette) | 40 | `approximate` | [JSON](../data/json/lego.json) · [CSV](../data/csv/lego.csv) | [Kostenloser LEGO Mosaik-Generator](https://makebead.com/de/lego-mosaic-maker/) |
| Minecraft blocks for pixel art | 53 | `approximate` | [JSON](../data/json/minecraft-blocks.json) · [CSV](../data/csv/minecraft-blocks.csv) | [Kostenloser Minecraft Pixel-Art-Generator](https://makebead.com/de/minecraft-pixel-art-generator/) |
| Minecraft map colors (Java Edition) | 244 | `official` | [JSON](../data/json/minecraft-map.json) · [CSV](../data/csv/minecraft-map.csv) | [Minecraft Map Art Generator](https://makebead.com/de/minecraft-map-art-generator/) |
| Red Heart Super Saver (worsted) | 44 | `approximate` | [JSON](../data/json/red-heart-super-saver.json) · [CSV](../data/csv/red-heart-super-saver.csv) | [Gratis Häkelmuster-Generator aus Foto](https://makebead.com/de/crochet-pattern-maker/) |
| Pixel art 256 | 256 | `generated` | [JSON](../data/json/pixel-art-256.json) · [CSV](../data/csv/pixel-art-256.csv) | [Kostenloser Pixel-Art-Konverter](https://makebead.com/de/pixel-art-converter/) |

Die MARD-Sets im Handel (24 → 264 Farben: welche Codes in welcher Box sind) stehen in [`data/sets/mard-kits.json`](../data/sets/mard-kits.json).

## Wie weit man einer Palette trauen kann

- `official` — der Hersteller bzw. das Spiel veröffentlicht die Werte, und unsere stimmen damit überein
- `measured` — nach einer dokumentierten Methode aus Material des Herstellers gemessen
- `cross-checked` — mehrere unabhängige Quellen verglichen, Widersprüche nach einer festen Regel entschieden
- `community` — von Bastlern an echten Perlen oder Fotos gemessen, nicht unabhängig geprüft
- `approximate` — Codes und Namen geprüft, Farben noch nicht kalibriert
- `generated` — keine Produktlinie

Kein Bildschirm zeigt eine echte Perle exakt: Oberfläche, Licht und Monitor verändern sie. Mit dem Hex-Wert auswählen und vergleichen, nach dem Code kaufen.

## Verwendung

### Dateien herunterladen oder verlinken

Jede Palette gibt es als JSON- und als CSV-Datei, direkt über ein CDN:

```
https://cdn.jsdelivr.net/gh/makebead/craft-color-codes@main/data/json/dmc-floss.json
https://cdn.jsdelivr.net/npm/craft-color-codes@1/data/csv/miyuki-delica.csv
```

### JavaScript

Codes nachschlagen, die nächstliegende Farbe finden, zwischen Marken umrechnen. Keine Abhängigkeiten.

```sh
npm install craft-color-codes
```

```js
import { getColor, nearest, convert } from 'craft-color-codes';

getColor('delica', 'DB10'); // "DB10", "DB-010" und "10" funktionieren alle
// → { code: 'DB0010', name: 'Opaque Black', hex: '#131313' }

nearest('#E8A0B0', 'dmc', { limit: 3 }); // nächstliegendes DMC-Garn zu einer Farbe
// → [{ code: '3354', name: 'Dusty Rose Light', hex: '#E4A6AC', deltaE: 3.62 }, …]

convert('perler', 'P38', 'hama'); // Perler P38 → Hama
// → { from: { code: 'P38', name: 'Magenta', … }, matches: [{ code: 'H32', name: 'Neon Fuchsia', hex: '#FF208D', deltaE: 4.81 }, …] }
```

### MCP-Server (Claude, Cursor, VS Code …)

Gibt einem KI-Assistenten die Paletten als Werkzeuge, damit er „Welche Hama-Farbe entspricht Perler P38?“ oder „Welches DMC-Garn liegt am nächsten an #E8A0B0?“ aus den Daten beantwortet statt aus dem Gedächtnis.

Claude Code:

```sh
claude mcp add craft-color-codes -- npx -y craft-color-codes
```

Andere Clients (Claude Desktop, Cursor, VS Code):

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

- `list_palettes` — alle Paletten mit Status
- `get_color` — eine Farbe nach Code, so geschrieben, wie man ihn schreibt
- `find_closest` — die nächstliegenden Farben zu einem Hex-Wert, nach CIEDE2000
- `convert_color` — Code einer Marke → nächstliegende Entsprechungen einer anderen
- `search_colors` — Suche nach Farbname oder Code

## Datenformat

Jede Palettendatei enthält ihre Beschreibung, Quellen und Lizenz:

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

- `code` — wie auf Beutel, Röhrchen, Docke oder Teil gedruckt
- `hex` — `#RRGGBB` in Großbuchstaben, dazu `rgb` als `[r, g, b]`
- `discontinued` — `true` nur bei Farben, die nicht mehr hergestellt werden (Miyuki Delica)
- palettenspezifische Felder: `sku` (Perler-Artikelnummer), `glass` (Delica-Glasart), `group`, `block`, `survival` (Minecraft-Blöcke), `base`, `shade`, `buildable` (Minecraft-Kartenfarben)

Die CSV enthält dieselben Farben, eine pro Zeile:

```csv
code,name,hex,r,g,b,discontinued,glass
DB0010,Opaque Black,#131313,19,19,19,false,opaque
```

## Woher die Zahlen kommen

Quellen, Methode und bekannte Schwächen jeder Palette stehen in [SOURCES.md](../SOURCES.md) (Englisch) und im Feld `notes` der Datei. Zwei Beispiele, was die Prüfung gefunden hat: DMC 309 (Rose Dark) ist in den üblichen Ausgangsdaten graubraun und hier rot, und die Delica-Farben wurden aus Miyukis eigenen Fotos neu erstellt, nachdem MakeBeads eigene frühere 39-Farben-Liste DB0724, ein opakes Grün, rot gezeichnet hatte.

## Falsche Farbe gefunden?

Eröffne ein Issue mit Palette, Code und dem, was du siehst — am besten mit einem Foto bei Tageslicht von Perle, Garn oder Stein neben weißem Papier. Korrekturen gehen zuerst in MakeBead und werden dann hier veröffentlicht.

→ [Falsche Farbe melden](https://github.com/makebead/craft-color-codes/issues/new?template=wrong-color.yml)

## Lizenz

Code (`src/`, `bin/`): MIT. Daten (`data/`): [CC BY 4.0](../LICENSE-DATA.md) — überall nutzbar, auch kommerziell, mit Namensnennung. Die Werte für Perler, Hama, Artkal und Nabbi stammen aus [maxcleme/beadcolors](https://github.com/maxcleme/beadcolors) und bleiben unter dessen MIT-Lizenz. Vorschlag für die Nennung:

```
Color data: craft-color-codes by MakeBead (https://makebead.com)
```

<sub>Perler, Hama, Artkal, Nabbi, MARD, Miyuki, Delica, DMC, Red Heart, LEGO und Minecraft sind Marken ihrer Inhaber. Dieses Projekt ist mit keinem von ihnen verbunden. KEIN OFFIZIELLES MINECRAFT-PRODUKT. NICHT VON MOJANG ODER MICROSOFT GENEHMIGT ODER MIT IHNEN VERBUNDEN.</sub>

## Über MakeBead

[MakeBead](https://makebead.com/de/) ist ein kostenloser Vorlagengenerator für Bügelperlen, Kreuzstich, Diamond Painting, Webperlen, Häkeln, LEGO-Mosaike und Minecraft-Pixel-Art in 11 Sprachen. Jede Palette hier ist in seinen Werkzeugen im Einsatz.
