# Craft Color Codes

[![npm](https://img.shields.io/npm/v/craft-color-codes)](https://www.npmjs.com/package/craft-color-codes) [![data: CC BY 4.0](https://img.shields.io/badge/data-CC%20BY%204.0-blue)](../LICENSE-DATA.md) [![code: MIT](https://img.shields.io/badge/code-MIT-green)](../LICENSE)

[English](../README.md) · [Deutsch](README.de.md) · [日本語](README.ja.md) · [한국어](README.ko.md) · [Français](README.fr.md) · **Español** · [Русский](README.ru.md) · [ไทย](README.th.md) · [简体中文](README.zh-CN.md) · [繁體中文](README.zh-TW.md) · [Português (Brasil)](README.pt-BR.md)

Valores hex y RGB de **3689 códigos de color** en 15 paletas — hama beads, mostacillas, hilos de bordar, piedras de pintura con diamantes, lana, LEGO y Minecraft — con el origen de cada número y cuánto fiarse de él.

[MakeBead](https://makebead.com/es/) convierte fotos en patrones de hama beads, punto de cruz y pixel art. Estas son las paletas que usan sus herramientas, publicadas para que nadie tenga que volver a reunirlas para un generador de patrones, un conversor de colores o una lista de compra, y para que un color equivocado se encuentre y se corrija en un solo lugar.

## Paletas

| Paleta | Colores | Estado | Archivos | En MakeBead |
| --- | --: | --- | --- | --- |
| Perler Beads (Midi, 5 mm) | 103 | `community` | [JSON](../data/json/perler-midi.json) · [CSV](../data/csv/perler-midi.csv) | [Generador Gratuito de Patrones de Perlas](https://makebead.com/es/) |
| Hama Beads (Midi, 5 mm) | 92 | `community` | [JSON](../data/json/hama-midi.json) · [CSV](../data/csv/hama-midi.csv) | [Generador gratuito de patrones Hama](https://makebead.com/es/hama-bead-pattern-maker/) |
| Artkal S series (Midi, 5 mm) | 199 | `community` | [JSON](../data/json/artkal-s.json) · [CSV](../data/csv/artkal-s.csv) | [Generador gratuito de patrones Artkal](https://makebead.com/es/artkal-bead-pattern-maker/) |
| Nabbi BioBeads (Midi) | 30 | `community` | [JSON](../data/json/nabbi.json) · [CSV](../data/csv/nabbi.csv) | [Free Fuse Bead Pattern Maker](https://makebead.com/fuse-bead-pattern-maker/) |
| MARD Beads (Midi, 5 mm) — 185 colors | 185 | `community` | [JSON](../data/json/mard-185.json) · [CSV](../data/csv/mard-185.csv) | [Generador de patrones de perlas MARD gratis](https://makebead.com/es/mard-bead-pattern-maker/) |
| MARD Beads (Midi, 5 mm) — 221 colors | 221 | `community` | [JSON](../data/json/mard-221.json) · [CSV](../data/csv/mard-221.csv) | [Generador de patrones de perlas MARD gratis](https://makebead.com/es/mard-bead-pattern-maker/) |
| MARD Beads (Midi, 5 mm) — 291 colors | 291 | `community` | [JSON](../data/json/mard-291.json) · [CSV](../data/csv/mard-291.csv) | [Generador de patrones de perlas MARD gratis](https://makebead.com/es/mard-bead-pattern-maker/) |
| Miyuki Delica 11/0 (DB) | 1288 (76 descatalogados) | `measured` | [JSON](../data/json/miyuki-delica.json) · [CSV](../data/csv/miyuki-delica.csv) | [Generador de Patrones para Telar de Cuentas Gratis](https://makebead.com/es/bead-loom-pattern-maker/) |
| DMC Six-Strand Embroidery Floss (Mouliné Spécial, art. 117) | 489 | `cross-checked` | [JSON](../data/json/dmc-floss.json) · [CSV](../data/csv/dmc-floss.csv) | [DMC Color Chart](https://makebead.com/dmc-color-chart/) |
| DMC-coded diamond painting drills | 154 | `cross-checked` | [JSON](../data/json/dmc-diamond.json) · [CSV](../data/csv/dmc-diamond.csv) | [Generador Gratuito de Pintura de Diamantes Personalizada](https://makebead.com/es/diamond-painting-pattern-maker/) |
| LEGO brick colors (mosaic palette) | 40 | `approximate` | [JSON](../data/json/lego.json) · [CSV](../data/csv/lego.csv) | [Generador Gratuito de Mosaicos LEGO](https://makebead.com/es/lego-mosaic-maker/) |
| Minecraft blocks for pixel art | 53 | `approximate` | [JSON](../data/json/minecraft-blocks.json) · [CSV](../data/csv/minecraft-blocks.csv) | [Generador Gratuito de Pixel Art de Minecraft](https://makebead.com/es/minecraft-pixel-art-generator/) |
| Minecraft map colors (Java Edition) | 244 | `official` | [JSON](../data/json/minecraft-map.json) · [CSV](../data/csv/minecraft-map.csv) | [Minecraft Map Art Generator](https://makebead.com/minecraft-map-art-generator/) |
| Red Heart Super Saver (worsted) | 44 | `approximate` | [JSON](../data/json/red-heart-super-saver.json) · [CSV](../data/csv/red-heart-super-saver.csv) | [Generador de patrones de crochet desde foto](https://makebead.com/es/crochet-pattern-maker/) |
| Pixel art 256 | 256 | `generated` | [JSON](../data/json/pixel-art-256.json) · [CSV](../data/csv/pixel-art-256.csv) | [Convertidor Gratuito de Pixel Art](https://makebead.com/es/pixel-art-converter/) |

Las cajas MARD a la venta (24 → 264 colores: qué códigos trae cada caja) están en [`data/sets/mard-kits.json`](../data/sets/mard-kits.json).

## Cuánto fiarse de cada paleta

- `official` — el fabricante o el juego publica estos valores y los nuestros coinciden
- `measured` — medidos sobre material del propio fabricante con un método documentado
- `cross-checked` — varias fuentes independientes comparadas; los conflictos se deciden con una regla escrita
- `community` — tomados por aficionados de cuentas o fotos reales, sin verificación independiente
- `approximate` — códigos y nombres comprobados, colores aún sin calibrar
- `generated` — no es una línea de productos

Ninguna pantalla muestra una cuenta real con exactitud: el acabado, la luz y el monitor la cambian. Usa el hex para elegir y comparar, y compra por el código.

## Uso

### Descargar o enlazar los archivos

Cada paleta está en JSON y en CSV. Enlázalas directamente desde un CDN:

```
https://cdn.jsdelivr.net/gh/makebead/craft-color-codes@main/data/json/dmc-floss.json
https://cdn.jsdelivr.net/npm/craft-color-codes@1/data/csv/miyuki-delica.csv
```

### JavaScript

Buscar códigos, encontrar el color más cercano, convertir entre marcas. Sin dependencias.

```sh
npm install craft-color-codes
```

```js
import { getColor, nearest, convert } from 'craft-color-codes';

getColor('delica', 'DB10'); // "DB10", "DB-010" y "10" funcionan
// → { code: 'DB0010', name: 'Opaque Black', hex: '#131313' }

nearest('#E8A0B0', 'dmc', { limit: 3 }); // el hilo DMC más cercano a un color
// → [{ code: '3354', name: 'Dusty Rose Light', hex: '#E4A6AC', deltaE: 3.62 }, …]

convert('perler', 'P38', 'hama'); // Perler P38 → Hama
// → { from: { code: 'P38', name: 'Magenta', … }, matches: [{ code: 'H32', name: 'Neon Fuchsia', hex: '#FF208D', deltaE: 4.81 }, …] }
```

### Servidor MCP (Claude, Cursor, VS Code…)

Da las paletas a un asistente de IA como herramientas, para que responda «¿qué Hama equivale a Perler P38?» o «¿qué hilo DMC se parece más a #E8A0B0?» con los datos y no de memoria.

Claude Code:

```sh
claude mcp add craft-color-codes -- npx -y craft-color-codes
```

Otros clientes (Claude Desktop, Cursor, VS Code):

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

- `list_palettes` — todas las paletas, con su estado
- `get_color` — un color por su código, escrito como lo escribe la gente
- `find_closest` — los colores más cercanos a un hex, ordenados por CIEDE2000
- `convert_color` — un código de una marca → sus equivalentes más cercanos en otra
- `search_colors` — buscar por nombre o código

## Formato de los datos

Cada archivo de paleta lleva su descripción, fuentes y licencia:

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

- `code` — tal como viene impreso en la bolsa, el tubo, la madeja o la pieza
- `hex` — `#RRGGBB` en mayúsculas, con `rgb` como `[r, g, b]`
- `discontinued` — `true` solo en colores que ya no se fabrican (Miyuki Delica)
- campos propios de algunas paletas: `sku` (referencia Perler), `glass` (tipo de vidrio Delica), `group`, `block`, `survival` (bloques de Minecraft), `base`, `shade`, `buildable` (colores de mapa de Minecraft)

El CSV tiene los mismos colores, uno por fila:

```csv
code,name,hex,r,g,b,discontinued,glass
DB0010,Opaque Black,#131313,19,19,19,false,opaque
```

## De dónde salen los números

Las fuentes, el método y los puntos débiles conocidos de cada paleta están en [SOURCES.md](../SOURCES.md) (en inglés) y en el campo `notes` del archivo. Dos ejemplos de lo que encontró la comprobación: DMC 309 (Rose Dark) es gris pardo en los datos habituales y rojo aquí, y los colores Delica se rehicieron a partir de las fotos de Miyuki después de que la antigua lista de 39 colores de MakeBead dibujara en rojo DB0724, un verde opaco.

## ¿Un color está mal?

Abre una issue con la paleta, el código y lo que ves — si puedes, con una foto a la luz del día de la cuenta, el hilo o la pieza junto a un papel blanco. Las correcciones entran primero en MakeBead y se vuelven a publicar aquí.

→ [Informar de un color equivocado](https://github.com/makebead/craft-color-codes/issues/new?template=wrong-color.yml)

## Licencia

Código (`src/`, `bin/`): MIT. Datos (`data/`): [CC BY 4.0](../LICENSE-DATA.md) — se pueden usar en cualquier sitio, también comercialmente, citando la fuente. Los valores de Perler, Hama, Artkal y Nabbi vienen de [maxcleme/beadcolors](https://github.com/maxcleme/beadcolors) y siguen bajo su licencia MIT. Cita sugerida:

```
Color data: craft-color-codes by MakeBead (https://makebead.com)
```

<sub>Perler, Hama, Artkal, Nabbi, MARD, Miyuki, Delica, DMC, Red Heart, LEGO y Minecraft son marcas de sus propietarios. Este proyecto no está afiliado a ninguno de ellos ni respaldado por ellos. NO ES UN PRODUCTO OFICIAL DE MINECRAFT. NO ESTÁ APROBADO POR MOJANG NI MICROSOFT NI ASOCIADO A ELLOS.</sub>

## Sobre MakeBead

[MakeBead](https://makebead.com/es/) es un generador de patrones gratuito para hama beads, punto de cruz, pintura con diamantes, telar de cuentas, ganchillo, mosaicos LEGO y pixel art de Minecraft, en 11 idiomas. Todas las paletas de aquí están en uso en sus herramientas.
