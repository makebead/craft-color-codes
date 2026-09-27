# Craft Color Codes

[![npm](https://img.shields.io/npm/v/craft-color-codes)](https://www.npmjs.com/package/craft-color-codes) [![data: CC BY 4.0](https://img.shields.io/badge/data-CC%20BY%204.0-blue)](../LICENSE-DATA.md) [![code: MIT](https://img.shields.io/badge/code-MIT-green)](../LICENSE)

[English](../README.md) · [Deutsch](README.de.md) · [日本語](README.ja.md) · [한국어](README.ko.md) · [Français](README.fr.md) · [Español](README.es.md) · **Русский** · [ไทย](README.th.md) · [简体中文](README.zh-CN.md) · [繁體中文](README.zh-TW.md) · [Português (Brasil)](README.pt-BR.md)

Hex и RGB для **3 689 кодов цвета** в 15 палитрах — термомозаика, бисер, мулине, стразы для алмазной вышивки, пряжа, LEGO и Minecraft — с указанием, откуда взято каждое число и насколько ему можно доверять.

[MakeBead](https://makebead.com/ru/) превращает фотографии в схемы для термомозаики, вышивки крестом и пиксель-арта. Здесь — палитры, которыми пользуются его инструменты. Они опубликованы, чтобы никому не пришлось собирать их заново для генератора схем, конвертера цветов или списка покупок, и чтобы неверный цвет находили и исправляли в одном месте.

## Палитры

| Палитра | Цветов | Статус | Файлы | На MakeBead |
| --- | --: | --- | --- | --- |
| Perler Beads (Midi, 5 mm) | 103 | `community` | [JSON](../data/json/perler-midi.json) · [CSV](../data/csv/perler-midi.csv) | [Бесплатный конструктор схем бусин Перлер](https://makebead.com/ru/) |
| Hama Beads (Midi, 5 mm) | 92 | `community` | [JSON](../data/json/hama-midi.json) · [CSV](../data/csv/hama-midi.csv) | [Бесплатный генератор схем Hama](https://makebead.com/ru/hama-bead-pattern-maker/) |
| Artkal S series (Midi, 5 mm) | 199 | `community` | [JSON](../data/json/artkal-s.json) · [CSV](../data/csv/artkal-s.csv) | [Бесплатный генератор схем Artkal](https://makebead.com/ru/artkal-bead-pattern-maker/) |
| Nabbi BioBeads (Midi) | 30 | `community` | [JSON](../data/json/nabbi.json) · [CSV](../data/csv/nabbi.csv) | [Free Fuse Bead Pattern Maker](https://makebead.com/fuse-bead-pattern-maker/) |
| MARD Beads (Midi, 5 mm) — 185 colors | 185 | `community` | [JSON](../data/json/mard-185.json) · [CSV](../data/csv/mard-185.csv) | [Бесплатный конструктор схем бусин MARD](https://makebead.com/ru/mard-bead-pattern-maker/) |
| MARD Beads (Midi, 5 mm) — 221 colors | 221 | `community` | [JSON](../data/json/mard-221.json) · [CSV](../data/csv/mard-221.csv) | [Бесплатный конструктор схем бусин MARD](https://makebead.com/ru/mard-bead-pattern-maker/) |
| MARD Beads (Midi, 5 mm) — 291 colors | 291 | `community` | [JSON](../data/json/mard-291.json) · [CSV](../data/csv/mard-291.csv) | [Бесплатный конструктор схем бусин MARD](https://makebead.com/ru/mard-bead-pattern-maker/) |
| Miyuki Delica 11/0 (DB) | 1 288 (снято с производства: 76) | `measured` | [JSON](../data/json/miyuki-delica.json) · [CSV](../data/csv/miyuki-delica.csv) | [Бесплатный генератор схем для бисерного станка](https://makebead.com/ru/bead-loom-pattern-maker/) |
| DMC Six-Strand Embroidery Floss (Mouliné Spécial, art. 117) | 489 | `cross-checked` | [JSON](../data/json/dmc-floss.json) · [CSV](../data/csv/dmc-floss.csv) | [DMC Color Chart](https://makebead.com/dmc-color-chart/) |
| DMC-coded diamond painting drills | 154 | `cross-checked` | [JSON](../data/json/dmc-diamond.json) · [CSV](../data/csv/dmc-diamond.csv) | [Бесплатный конструктор индивидуальной алмазной вышивки](https://makebead.com/ru/diamond-painting-pattern-maker/) |
| LEGO brick colors (mosaic palette) | 40 | `approximate` | [JSON](../data/json/lego.json) · [CSV](../data/csv/lego.csv) | [Бесплатный конструктор LEGO мозаики](https://makebead.com/ru/lego-mosaic-maker/) |
| Minecraft blocks for pixel art | 53 | `approximate` | [JSON](../data/json/minecraft-blocks.json) · [CSV](../data/csv/minecraft-blocks.csv) | [Бесплатный генератор пиксельного арта Minecraft](https://makebead.com/ru/minecraft-pixel-art-generator/) |
| Minecraft map colors (Java Edition) | 244 | `official` | [JSON](../data/json/minecraft-map.json) · [CSV](../data/csv/minecraft-map.csv) | [Minecraft Map Art Generator](https://makebead.com/minecraft-map-art-generator/) |
| Red Heart Super Saver (worsted) | 44 | `approximate` | [JSON](../data/json/red-heart-super-saver.json) · [CSV](../data/csv/red-heart-super-saver.csv) | [Генератор схем вязания крючком из фото](https://makebead.com/ru/crochet-pattern-maker/) |
| Pixel art 256 | 256 | `generated` | [JSON](../data/json/pixel-art-256.json) · [CSV](../data/csv/pixel-art-256.csv) | [Бесплатный конвертер пиксельного арта](https://makebead.com/ru/pixel-art-converter/) |

Наборы MARD из магазинов (24 → 264 цвета: какие коды в какой коробке) — в [`data/sets/mard-kits.json`](../data/sets/mard-kits.json).

## Насколько доверять палитре

- `official` — производитель или игра публикует эти значения, и наши с ними совпадают
- `measured` — измерены по материалам самого производителя задокументированным методом
- `cross-checked` — сверены несколько независимых источников, расхождения решены по записанному правилу
- `community` — сняты любителями с настоящих бусин или фото, независимо не проверены
- `approximate` — коды и названия проверены, цвета ещё не откалиброваны
- `generated` — не товарная линейка

Ни один экран не покажет настоящую бусину точно: покрытие, свет и монитор меняют её. Выбирайте и сравнивайте по hex, покупайте по коду.

## Как использовать

### Скачать или подключить файлы

Каждая палитра есть в JSON и CSV. Подключайте прямо с CDN:

```
https://cdn.jsdelivr.net/gh/makebead/craft-color-codes@main/data/json/dmc-floss.json
https://cdn.jsdelivr.net/npm/craft-color-codes@1/data/csv/miyuki-delica.csv
```

### JavaScript

Поиск по коду, ближайший цвет, пересчёт между брендами. Без зависимостей.

```sh
npm install craft-color-codes
```

```js
import { getColor, nearest, convert } from 'craft-color-codes';

getColor('delica', 'DB10'); // работают "DB10", "DB-010" и "10"
// → { code: 'DB0010', name: 'Opaque Black', hex: '#131313' }

nearest('#E8A0B0', 'dmc', { limit: 3 }); // ближайшее мулине DMC к цвету
// → [{ code: '3354', name: 'Dusty Rose Light', hex: '#E4A6AC', deltaE: 3.62 }, …]

convert('perler', 'P38', 'hama'); // Perler P38 → Hama
// → { from: { code: 'P38', name: 'Magenta', … }, matches: [{ code: 'H32', name: 'Neon Fuchsia', hex: '#FF208D', deltaE: 4.81 }, …] }
```

### MCP-сервер (Claude, Cursor, VS Code…)

Дайте палитры ИИ-ассистенту как инструменты — и на вопросы «какой Hama соответствует Perler P38?» или «какое мулине DMC ближе всего к #E8A0B0?» он ответит по данным, а не по памяти.

Claude Code:

```sh
claude mcp add craft-color-codes -- npx -y craft-color-codes
```

Другие клиенты (Claude Desktop, Cursor, VS Code):

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

- `list_palettes` — все палитры и их статус
- `get_color` — цвет по коду в любом привычном написании
- `find_closest` — ближайшие цвета к hex по CIEDE2000
- `convert_color` — код одного бренда → ближайшие аналоги другого
- `search_colors` — поиск по названию или коду

## Формат данных

В каждом файле палитры есть описание, источники и лицензия:

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

- `code` — как напечатано на пакете, тубе, пасме или детали
- `hex` — `#RRGGBB` заглавными, `rgb` как `[r, g, b]`
- `discontinued` — `true` только у снятых с производства цветов (Miyuki Delica)
- поля отдельных палитр: `sku` (артикул Perler), `glass` (тип стекла Delica), `group`, `block`, `survival` (блоки Minecraft), `base`, `shade`, `buildable` (цвета карт Minecraft)

В CSV те же цвета, по одному на строку:

```csv
code,name,hex,r,g,b,discontinued,glass
DB0010,Opaque Black,#131313,19,19,19,false,opaque
```

## Откуда числа

Источники, метод и известные слабые места каждой палитры — в [SOURCES.md](../SOURCES.md) (на английском) и в поле `notes` файла. Два примера того, что нашла проверка: DMC 309 (Rose Dark) в распространённых исходных данных серо-коричневый, а здесь красный; цвета Delica пересобраны по фотографиям самой Miyuki после того как прежний список MakeBead из 39 цветов рисовал красным DB0724 — непрозрачный зелёный.

## Нашли неверный цвет?

Откройте issue: палитра, код, что вы видите — и, если можно, фото бусины, мулине или детали рядом с белой бумагой при дневном свете. Исправления сначала попадают в MakeBead, затем публикуются здесь.

→ [Сообщить о неверном цвете](https://github.com/makebead/craft-color-codes/issues/new?template=wrong-color.yml)

## Лицензия

Код (`src/`, `bin/`): MIT. Данные (`data/`): [CC BY 4.0](../LICENSE-DATA.md) — можно использовать где угодно, в том числе коммерчески, с указанием источника. Значения Perler, Hama, Artkal и Nabbi взяты из [maxcleme/beadcolors](https://github.com/maxcleme/beadcolors) и остаются под его лицензией MIT. Пример указания источника:

```
Color data: craft-color-codes by MakeBead (https://makebead.com)
```

<sub>Perler, Hama, Artkal, Nabbi, MARD, Miyuki, Delica, DMC, Red Heart, LEGO и Minecraft — товарные знаки их владельцев. Проект с ними не связан и ими не одобрен. НЕ ЯВЛЯЕТСЯ ОФИЦИАЛЬНЫМ ПРОДУКТОМ MINECRAFT. НЕ ОДОБРЕН MOJANG ИЛИ MICROSOFT И НЕ СВЯЗАН С НИМИ.</sub>

## О MakeBead

[MakeBead](https://makebead.com/ru/) — бесплатный генератор схем для термомозаики, вышивки крестом, алмазной вышивки, ткачества бисером, вязания крючком, мозаик LEGO и пиксель-арта Minecraft на 11 языках. Все палитры отсюда работают в его инструментах.
