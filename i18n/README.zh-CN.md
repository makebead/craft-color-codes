# Craft Color Codes

[![npm](https://img.shields.io/npm/v/craft-color-codes)](https://www.npmjs.com/package/craft-color-codes) [![data: CC BY 4.0](https://img.shields.io/badge/data-CC%20BY%204.0-blue)](../LICENSE-DATA.md) [![code: MIT](https://img.shields.io/badge/code-MIT-green)](../LICENSE)

[English](../README.md) · [Deutsch](README.de.md) · [日本語](README.ja.md) · [한국어](README.ko.md) · [Français](README.fr.md) · [Español](README.es.md) · [Русский](README.ru.md) · [ไทย](README.th.md) · **简体中文** · [繁體中文](README.zh-TW.md) · [Português (Brasil)](README.pt-BR.md)

拼豆、米珠、绣线、钻石画钻、毛线、乐高和我的世界共 **3,689 个色号**（15 套色卡）的 Hex 和 RGB 值，每个数字都写明从哪来、可信到什么程度。

[MakeBead](https://makebead.com/zh-Hans/) 能把照片变成拼豆、十字绣和像素画图纸。这里是它的工具在用的色卡。公开出来，是为了做图纸生成器、色号换算或材料清单的人不必再重新收集一遍，也让错的颜色能在一个地方被发现、被改正。

## 色卡

| 色卡 | 色数 | 状态 | 文件 | 在 MakeBead 上使用 |
| --- | --: | --- | --- | --- |
| Perler Beads (Midi, 5 mm) | 103 | `community` | [JSON](../data/json/perler-midi.json) · [CSV](../data/csv/perler-midi.csv) | [免费拼豆图案制作器](https://makebead.com/zh-Hans/) |
| Hama Beads (Midi, 5 mm) | 92 | `community` | [JSON](../data/json/hama-midi.json) · [CSV](../data/csv/hama-midi.csv) | [免费 Hama 珠图案制作器](https://makebead.com/zh-Hans/hama-bead-pattern-maker/) |
| Artkal S series (Midi, 5 mm) | 199 | `community` | [JSON](../data/json/artkal-s.json) · [CSV](../data/csv/artkal-s.csv) | [免费 Artkal 珠图案制作器](https://makebead.com/zh-Hans/artkal-bead-pattern-maker/) |
| Nabbi BioBeads (Midi) | 30 | `community` | [JSON](../data/json/nabbi.json) · [CSV](../data/csv/nabbi.csv) | [Free Fuse Bead Pattern Maker](https://makebead.com/fuse-bead-pattern-maker/) |
| MARD Beads (Midi, 5 mm) — 185 colors | 185 | `community` | [JSON](../data/json/mard-185.json) · [CSV](../data/csv/mard-185.csv) | [免费 MARD 拼豆图纸生成器](https://makebead.com/zh-Hans/mard-bead-pattern-maker/) |
| MARD Beads (Midi, 5 mm) — 221 colors | 221 | `community` | [JSON](../data/json/mard-221.json) · [CSV](../data/csv/mard-221.csv) | [免费 MARD 拼豆图纸生成器](https://makebead.com/zh-Hans/mard-bead-pattern-maker/) |
| MARD Beads (Midi, 5 mm) — 291 colors | 291 | `community` | [JSON](../data/json/mard-291.json) · [CSV](../data/csv/mard-291.csv) | [免费 MARD 拼豆图纸生成器](https://makebead.com/zh-Hans/mard-bead-pattern-maker/) |
| Miyuki Delica 11/0 (DB) | 1,288 (其中停产 76) | `measured` | [JSON](../data/json/miyuki-delica.json) · [CSV](../data/csv/miyuki-delica.csv) | [免费串珠织机图案生成器](https://makebead.com/zh-Hans/bead-loom-pattern-maker/) |
| DMC Six-Strand Embroidery Floss (Mouliné Spécial, art. 117) | 489 | `cross-checked` | [JSON](../data/json/dmc-floss.json) · [CSV](../data/csv/dmc-floss.csv) | [DMC Color Chart](https://makebead.com/dmc-color-chart/) |
| DMC-coded diamond painting drills | 154 | `cross-checked` | [JSON](../data/json/dmc-diamond.json) · [CSV](../data/csv/dmc-diamond.csv) | [免费定制钻石画图纸生成器](https://makebead.com/zh-Hans/diamond-painting-pattern-maker/) |
| LEGO brick colors (mosaic palette) | 40 | `approximate` | [JSON](../data/json/lego.json) · [CSV](../data/csv/lego.csv) | [免费 LEGO 马赛克制作器](https://makebead.com/zh-Hans/lego-mosaic-maker/) |
| Minecraft blocks for pixel art | 53 | `approximate` | [JSON](../data/json/minecraft-blocks.json) · [CSV](../data/csv/minecraft-blocks.csv) | [免费 Minecraft 像素画生成器](https://makebead.com/zh-Hans/minecraft-pixel-art-generator/) |
| Minecraft map colors (Java Edition) | 244 | `official` | [JSON](../data/json/minecraft-map.json) · [CSV](../data/csv/minecraft-map.csv) | [Minecraft Map Art Generator](https://makebead.com/minecraft-map-art-generator/) |
| Red Heart Super Saver (worsted) | 44 | `approximate` | [JSON](../data/json/red-heart-super-saver.json) · [CSV](../data/csv/red-heart-super-saver.csv) | [钩针图解生成器(免费)](https://makebead.com/zh-Hans/crochet-pattern-maker/) |
| Pixel art 256 | 256 | `generated` | [JSON](../data/json/pixel-art-256.json) · [CSV](../data/csv/pixel-art-256.csv) | [免费像素画转换器](https://makebead.com/zh-Hans/pixel-art-converter/) |

MARD 零售套装（24 → 264 色：每一盒包含哪些色号）见 [`data/sets/mard-kits.json`](../data/sets/mard-kits.json)。

## 每套色卡可信到什么程度

- `official` — 厂商或游戏本身公布了数值，且我们的与之一致
- `measured` — 按记录在案的方法，从厂商自己的素材测得
- `cross-checked` — 对比了多个独立来源，分歧按写明的规则裁定
- `community` — 由爱好者从实物豆子或照片取色，没有独立核对
- `approximate` — 色号和名称已核对，颜色尚未校准
- `generated` — 不是某个产品线

没有哪块屏幕能准确显示实物豆子：表面质感、光线和显示器都会改变它。用 Hex 来挑选和比较，买的时候认色号。

## 怎么用

### 下载或直接链接文件

每套色卡都有 JSON 和 CSV 两个文件，可以直接从 CDN 链接：

```
https://cdn.jsdelivr.net/gh/makebead/craft-color-codes@main/data/json/dmc-floss.json
https://cdn.jsdelivr.net/npm/craft-color-codes@1/data/csv/miyuki-delica.csv
```

### JavaScript

查色号、找最接近的颜色、跨品牌换算。零依赖。

```sh
npm install craft-color-codes
```

```js
import { getColor, nearest, convert } from 'craft-color-codes';

getColor('delica', 'DB10'); // "DB10"、"DB-010"、"10" 都能查到
// → { code: 'DB0010', name: 'Opaque Black', hex: '#131313' }

nearest('#E8A0B0', 'dmc', { limit: 3 }); // 与某个颜色最接近的 DMC 绣线
// → [{ code: '3354', name: 'Dusty Rose Light', hex: '#E4A6AC', deltaE: 3.62 }, …]

convert('perler', 'P38', 'hama'); // Perler P38 → Hama
// → { from: { code: 'P38', name: 'Magenta', … }, matches: [{ code: 'H32', name: 'Neon Fuchsia', hex: '#FF208D', deltaE: 4.81 }, …] }
```

### MCP 服务器（Claude、Cursor、VS Code 等）

把色卡作为工具交给 AI 助手，它回答「Perler P38 换成 Hama 是几号？」「#E8A0B0 最接近哪根 DMC 线？」时就会查数据，而不是凭记忆。

Claude Code:

```sh
claude mcp add craft-color-codes -- npx -y craft-color-codes
```

其他客户端（Claude Desktop、Cursor、VS Code）：

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

- `list_palettes` — 所有色卡及其状态
- `get_color` — 按色号查一个颜色，各种写法都认
- `find_closest` — 与某个 Hex 最接近的颜色，按 CIEDE2000 排序
- `convert_color` — 一个品牌的色号 → 另一品牌最接近的颜色
- `search_colors` — 按色名或色号搜索

## 数据格式

每个色卡文件都自带说明、来源和许可：

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

- `code` — 印在袋子、管子、线束或零件上的编号
- `hex` — `#RRGGBB`，大写；`rgb` 为 `[r, g, b]`
- `discontinued` — 只有停产的颜色才有，值为 `true`（Miyuki Delica）
- 部分色卡特有的字段：`sku`（Perler 货号）、`glass`（Delica 玻璃类型）、`group`、`block`、`survival`（我的世界方块）、`base`、`shade`、`buildable`（我的世界地图色）

CSV 里是同样的颜色，每行一个：

```csv
code,name,hex,r,g,b,discontinued,glass
DB0010,Opaque Black,#131313,19,19,19,false,opaque
```

## 数字从哪来

每套色卡的来源、方法和已知弱点写在 [SOURCES.md](../SOURCES.md)（英文）和文件的 `notes` 字段里。核对中发现的两个例子：DMC 309（Rose Dark）在流传最广的原始数据里是灰褐色，这里是红色；Delica 的颜色是用 Miyuki 官方照片重建的，因为 MakeBead 自己早先的 39 色数据把不透明绿色的 DB0724 画成了红色。

## 发现颜色不对？

开一个 Issue，写上色卡、色号和你看到的颜色；可以的话，附一张白天光线下、豆子（或线、积木）放在白纸旁的照片。修正会先进入 MakeBead，再在这里重新发布。

→ [报告颜色不对](https://github.com/makebead/craft-color-codes/issues/new?template=wrong-color.yml)

## 许可

代码（`src/`、`bin/`）：MIT。数据（`data/`）：[CC BY 4.0](../LICENSE-DATA.md)，任何地方都能用，包括商用，注明出处即可。Perler、Hama、Artkal 和 Nabbi 的数值来自 [maxcleme/beadcolors](https://github.com/maxcleme/beadcolors)，沿用它的 MIT 许可。出处写法示例：

```
Color data: craft-color-codes by MakeBead (https://makebead.com)
```

<sub>Perler、Hama、Artkal、Nabbi、MARD、Miyuki、Delica、DMC、Red Heart、LEGO 和 Minecraft 是其各自所有者的商标。本项目与它们均无关联，也未获其认可。本项目不是 Minecraft 官方产品，未经 Mojang 或 Microsoft 批准，也与它们无关。</sub>

## 关于 MakeBead

[MakeBead](https://makebead.com/zh-Hans/) 是一个免费的图纸生成器，支持拼豆、十字绣、钻石画、串珠织机、钩针、乐高马赛克和我的世界像素画，共 11 种语言。这里的每套色卡都在它的工具里实际使用。
