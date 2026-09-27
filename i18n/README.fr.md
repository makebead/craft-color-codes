# Craft Color Codes

[![npm](https://img.shields.io/npm/v/craft-color-codes)](https://www.npmjs.com/package/craft-color-codes) [![data: CC BY 4.0](https://img.shields.io/badge/data-CC%20BY%204.0-blue)](../LICENSE-DATA.md) [![code: MIT](https://img.shields.io/badge/code-MIT-green)](../LICENSE)

[English](../README.md) · [Deutsch](README.de.md) · [日本語](README.ja.md) · [한국어](README.ko.md) · **Français** · [Español](README.es.md) · [Русский](README.ru.md) · [ไทย](README.th.md) · [简体中文](README.zh-CN.md) · [繁體中文](README.zh-TW.md) · [Português (Brasil)](README.pt-BR.md)

Valeurs hex et RVB de **3 689 codes couleur** dans 15 palettes — perles à repasser, perles de rocaille, fils à broder, strass de broderie diamant, laine, LEGO et Minecraft — avec l’origine de chaque valeur et le degré de confiance qu’on peut lui accorder.

[MakeBead](https://makebead.com/fr/) transforme des photos en modèles de perles, de point de croix et de pixel art. Voici les palettes qu’utilisent ses outils, publiées pour que personne n’ait à les rassembler de nouveau pour un générateur de modèles, un convertisseur de couleurs ou une liste d’achats, et pour qu’une couleur fausse soit repérée et corrigée à un seul endroit.

## Palettes

| Palette | Couleurs | Statut | Fichiers | Sur MakeBead |
| --- | --: | --- | --- | --- |
| Perler Beads (Midi, 5 mm) | 103 | `community` | [JSON](../data/json/perler-midi.json) · [CSV](../data/csv/perler-midi.csv) | [Créateur de Motifs Perles Gratuit](https://makebead.com/fr/) |
| Hama Beads (Midi, 5 mm) | 92 | `community` | [JSON](../data/json/hama-midi.json) · [CSV](../data/csv/hama-midi.csv) | [Créateur de motifs Hama gratuit](https://makebead.com/fr/hama-bead-pattern-maker/) |
| Artkal S series (Midi, 5 mm) | 199 | `community` | [JSON](../data/json/artkal-s.json) · [CSV](../data/csv/artkal-s.csv) | [Créateur de motifs Artkal gratuit](https://makebead.com/fr/artkal-bead-pattern-maker/) |
| Nabbi BioBeads (Midi) | 30 | `community` | [JSON](../data/json/nabbi.json) · [CSV](../data/csv/nabbi.csv) | [Free Fuse Bead Pattern Maker](https://makebead.com/fuse-bead-pattern-maker/) |
| MARD Beads (Midi, 5 mm) — 185 colors | 185 | `community` | [JSON](../data/json/mard-185.json) · [CSV](../data/csv/mard-185.csv) | [Générateur de motifs perles MARD gratuit](https://makebead.com/fr/mard-bead-pattern-maker/) |
| MARD Beads (Midi, 5 mm) — 221 colors | 221 | `community` | [JSON](../data/json/mard-221.json) · [CSV](../data/csv/mard-221.csv) | [Générateur de motifs perles MARD gratuit](https://makebead.com/fr/mard-bead-pattern-maker/) |
| MARD Beads (Midi, 5 mm) — 291 colors | 291 | `community` | [JSON](../data/json/mard-291.json) · [CSV](../data/csv/mard-291.csv) | [Générateur de motifs perles MARD gratuit](https://makebead.com/fr/mard-bead-pattern-maker/) |
| Miyuki Delica 11/0 (DB) | 1 288 (76 arrêtées) | `measured` | [JSON](../data/json/miyuki-delica.json) · [CSV](../data/csv/miyuki-delica.csv) | [Créateur de Motifs pour Métier à Perles Gratuit](https://makebead.com/fr/bead-loom-pattern-maker/) |
| DMC Six-Strand Embroidery Floss (Mouliné Spécial, art. 117) | 489 | `cross-checked` | [JSON](../data/json/dmc-floss.json) · [CSV](../data/csv/dmc-floss.csv) | [DMC Color Chart](https://makebead.com/dmc-color-chart/) |
| DMC-coded diamond painting drills | 154 | `cross-checked` | [JSON](../data/json/dmc-diamond.json) · [CSV](../data/csv/dmc-diamond.csv) | [Créateur Gratuit de Motifs de Peinture Diamant Personnalisée](https://makebead.com/fr/diamond-painting-pattern-maker/) |
| LEGO brick colors (mosaic palette) | 40 | `approximate` | [JSON](../data/json/lego.json) · [CSV](../data/csv/lego.csv) | [Créateur de Mosaïques LEGO Gratuit](https://makebead.com/fr/lego-mosaic-maker/) |
| Minecraft blocks for pixel art | 53 | `approximate` | [JSON](../data/json/minecraft-blocks.json) · [CSV](../data/csv/minecraft-blocks.csv) | [Générateur de Pixel Art Minecraft Gratuit](https://makebead.com/fr/minecraft-pixel-art-generator/) |
| Minecraft map colors (Java Edition) | 244 | `official` | [JSON](../data/json/minecraft-map.json) · [CSV](../data/csv/minecraft-map.csv) | [Minecraft Map Art Generator](https://makebead.com/minecraft-map-art-generator/) |
| Red Heart Super Saver (worsted) | 44 | `approximate` | [JSON](../data/json/red-heart-super-saver.json) · [CSV](../data/csv/red-heart-super-saver.csv) | [Générateur de Grille Crochet Gratuit](https://makebead.com/fr/crochet-pattern-maker/) |
| Pixel art 256 | 256 | `generated` | [JSON](../data/json/pixel-art-256.json) · [CSV](../data/csv/pixel-art-256.csv) | [Convertisseur Pixel Art Gratuit](https://makebead.com/fr/pixel-art-converter/) |

Les coffrets MARD du commerce (24 → 264 couleurs : les codes de chaque boîte) sont dans [`data/sets/mard-kits.json`](../data/sets/mard-kits.json).

## Quel crédit accorder à une palette

- `official` — le fabricant ou le jeu publie ces valeurs, et les nôtres y correspondent
- `measured` — mesurées sur le matériel du fabricant selon une méthode documentée
- `cross-checked` — plusieurs sources indépendantes comparées, désaccords tranchés par une règle écrite
- `community` — relevées par des amateurs sur des perles ou des photos, sans vérification indépendante
- `approximate` — codes et noms vérifiés, couleurs pas encore calibrées
- `generated` — pas une gamme de produits

Aucun écran ne montre exactement une perle réelle : finition, lumière et moniteur la modifient. Servez-vous du hex pour choisir et comparer, et achetez au code.

## Utilisation

### Télécharger ou lier les fichiers

Chaque palette existe en JSON et en CSV. Liez-les directement depuis un CDN :

```
https://cdn.jsdelivr.net/gh/makebead/craft-color-codes@main/data/json/dmc-floss.json
https://cdn.jsdelivr.net/npm/craft-color-codes@1/data/csv/miyuki-delica.csv
```

### JavaScript

Chercher un code, trouver la couleur la plus proche, convertir d’une marque à l’autre. Aucune dépendance.

```sh
npm install craft-color-codes
```

```js
import { getColor, nearest, convert } from 'craft-color-codes';

getColor('delica', 'DB10'); // "DB10", "DB-010" et "10" fonctionnent
// → { code: 'DB0010', name: 'Opaque Black', hex: '#131313' }

nearest('#E8A0B0', 'dmc', { limit: 3 }); // le fil DMC le plus proche d’une couleur
// → [{ code: '3354', name: 'Dusty Rose Light', hex: '#E4A6AC', deltaE: 3.62 }, …]

convert('perler', 'P38', 'hama'); // Perler P38 → Hama
// → { from: { code: 'P38', name: 'Magenta', … }, matches: [{ code: 'H32', name: 'Neon Fuchsia', hex: '#FF208D', deltaE: 4.81 }, …] }
```

### Serveur MCP (Claude, Cursor, VS Code…)

Donnez les palettes à un assistant IA sous forme d’outils : il répond à « Quel Hama pour Perler P38 ? » ou « Quel fil DMC est le plus proche de #E8A0B0 ? » à partir des données, pas de mémoire.

Claude Code:

```sh
claude mcp add craft-color-codes -- npx -y craft-color-codes
```

Autres clients (Claude Desktop, Cursor, VS Code) :

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

- `list_palettes` — toutes les palettes, avec leur statut
- `get_color` — une couleur par son code, écrit comme on l’écrit
- `find_closest` — les couleurs les plus proches d’un hex, classées par CIEDE2000
- `convert_color` — un code d’une marque → ses équivalents les plus proches dans une autre
- `search_colors` — recherche par nom ou par code

## Format des données

Chaque fichier de palette contient sa description, ses sources et sa licence :

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

- `code` — tel qu’imprimé sur le sachet, le tube, l’échevette ou la pièce
- `hex` — `#RRGGBB` en majuscules, avec `rgb` sous forme `[r, g, b]`
- `discontinued` — `true` uniquement pour les couleurs arrêtées (Miyuki Delica)
- champs propres à certaines palettes : `sku` (référence Perler), `glass` (type de verre Delica), `group`, `block`, `survival` (blocs Minecraft), `base`, `shade`, `buildable` (couleurs de carte Minecraft)

Le CSV contient les mêmes couleurs, une par ligne :

```csv
code,name,hex,r,g,b,discontinued,glass
DB0010,Opaque Black,#131313,19,19,19,false,opaque
```

## D’où viennent les valeurs

Les sources, la méthode et les faiblesses connues de chaque palette sont dans [SOURCES.md](../SOURCES.md) (en anglais) et dans le champ `notes` du fichier. Deux exemples de ce que la vérification a trouvé : DMC 309 (Rose Dark) est gris-brun dans les données répandues et rouge ici, et les couleurs Delica ont été refaites à partir des photos de Miyuki après que l’ancienne liste de 39 couleurs de MakeBead eut dessiné en rouge DB0724, un vert opaque.

## Une couleur est fausse ?

Ouvrez une issue avec la palette, le code et ce que vous voyez — si possible avec une photo à la lumière du jour de la perle, du fil ou de la brique à côté d’une feuille blanche. Les corrections entrent d’abord dans MakeBead, puis sont republiées ici.

→ [Signaler une couleur fausse](https://github.com/makebead/craft-color-codes/issues/new?template=wrong-color.yml)

## Licence

Code (`src/`, `bin/`) : MIT. Données (`data/`) : [CC BY 4.0](../LICENSE-DATA.md) — utilisables partout, y compris commercialement, avec mention de la source. Les valeurs Perler, Hama, Artkal et Nabbi viennent de [maxcleme/beadcolors](https://github.com/maxcleme/beadcolors) et restent sous sa licence MIT. Mention suggérée :

```
Color data: craft-color-codes by MakeBead (https://makebead.com)
```

<sub>Perler, Hama, Artkal, Nabbi, MARD, Miyuki, Delica, DMC, Red Heart, LEGO et Minecraft sont des marques de leurs propriétaires. Ce projet n’est affilié à aucun d’eux ni approuvé par eux. CE N’EST PAS UN PRODUIT OFFICIEL MINECRAFT. NI APPROUVÉ PAR MOJANG OU MICROSOFT, NI ASSOCIÉ À EUX.</sub>

## À propos de MakeBead

[MakeBead](https://makebead.com/fr/) est un générateur de modèles gratuit pour perles à repasser, point de croix, broderie diamant, tissage de perles, crochet, mosaïques LEGO et pixel art Minecraft, en 11 langues. Chaque palette d’ici est en service dans ses outils.
