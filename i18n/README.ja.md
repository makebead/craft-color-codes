# Craft Color Codes

[![npm](https://img.shields.io/npm/v/craft-color-codes)](https://www.npmjs.com/package/craft-color-codes) [![data: CC BY 4.0](https://img.shields.io/badge/data-CC%20BY%204.0-blue)](../LICENSE-DATA.md) [![code: MIT](https://img.shields.io/badge/code-MIT-green)](../LICENSE)

[English](../README.md) · [Deutsch](README.de.md) · **日本語** · [한국어](README.ko.md) · [Français](README.fr.md) · [Español](README.es.md) · [Русский](README.ru.md) · [ไทย](README.th.md) · [简体中文](README.zh-CN.md) · [繁體中文](README.zh-TW.md) · [Português (Brasil)](README.pt-BR.md)

アイロンビーズ、シードビーズ、刺しゅう糸、ダイヤモンドアートのビーズ、毛糸、LEGO、Minecraft の **3,689 色の色番号**（15 パレット）の Hex / RGB 値。どの数値もどこから来たか、どこまで信頼できるかを明記しています。

[MakeBead](https://makebead.com/ja/) は写真からアイロンビーズ、クロスステッチ、ドット絵の図案を作るツールです。ここにあるのはそのツールが使っているパレットです。図案メーカーや色変換ツール、材料リストを作る人が同じデータを集め直さずに済むように、そして間違った色が一か所で見つかり直されるように公開しています。

## パレット一覧

| パレット | 色数 | 状態 | ファイル | MakeBead で使う |
| --- | --: | --- | --- | --- |
| Perler Beads (Midi, 5 mm) | 103 | `community` | [JSON](../data/json/perler-midi.json) · [CSV](../data/csv/perler-midi.csv) | [無料アイロンビーズ図案メーカー](https://makebead.com/ja/) |
| Hama Beads (Midi, 5 mm) | 92 | `community` | [JSON](../data/json/hama-midi.json) · [CSV](../data/csv/hama-midi.csv) | [無料ハマビーズ図案メーカー](https://makebead.com/ja/hama-bead-pattern-maker/) |
| Artkal S series (Midi, 5 mm) | 199 | `community` | [JSON](../data/json/artkal-s.json) · [CSV](../data/csv/artkal-s.csv) | [無料 Artkal ビーズ図案メーカー](https://makebead.com/ja/artkal-bead-pattern-maker/) |
| Nabbi BioBeads (Midi) | 30 | `community` | [JSON](../data/json/nabbi.json) · [CSV](../data/csv/nabbi.csv) | [Free Fuse Bead Pattern Maker](https://makebead.com/fuse-bead-pattern-maker/) |
| MARD Beads (Midi, 5 mm) — 185 colors | 185 | `community` | [JSON](../data/json/mard-185.json) · [CSV](../data/csv/mard-185.csv) | [無料 MARD ビーズ図案メーカー](https://makebead.com/ja/mard-bead-pattern-maker/) |
| MARD Beads (Midi, 5 mm) — 221 colors | 221 | `community` | [JSON](../data/json/mard-221.json) · [CSV](../data/csv/mard-221.csv) | [無料 MARD ビーズ図案メーカー](https://makebead.com/ja/mard-bead-pattern-maker/) |
| MARD Beads (Midi, 5 mm) — 291 colors | 291 | `community` | [JSON](../data/json/mard-291.json) · [CSV](../data/csv/mard-291.csv) | [無料 MARD ビーズ図案メーカー](https://makebead.com/ja/mard-bead-pattern-maker/) |
| Miyuki Delica 11/0 (DB) | 1,288 (うち廃番 76) | `measured` | [JSON](../data/json/miyuki-delica.json) · [CSV](../data/csv/miyuki-delica.csv) | [無料ビーズ織り機パターンメーカー](https://makebead.com/ja/bead-loom-pattern-maker/) |
| DMC Six-Strand Embroidery Floss (Mouliné Spécial, art. 117) | 489 | `cross-checked` | [JSON](../data/json/dmc-floss.json) · [CSV](../data/csv/dmc-floss.csv) | [DMC Color Chart](https://makebead.com/dmc-color-chart/) |
| DMC-coded diamond painting drills | 154 | `cross-checked` | [JSON](../data/json/dmc-diamond.json) · [CSV](../data/csv/dmc-diamond.csv) | [無料カスタムダイヤモンドアート図案メーカー](https://makebead.com/ja/diamond-painting-pattern-maker/) |
| LEGO brick colors (mosaic palette) | 40 | `approximate` | [JSON](../data/json/lego.json) · [CSV](../data/csv/lego.csv) | [無料レゴモザイクメーカー](https://makebead.com/ja/lego-mosaic-maker/) |
| Minecraft blocks for pixel art | 53 | `approximate` | [JSON](../data/json/minecraft-blocks.json) · [CSV](../data/csv/minecraft-blocks.csv) | [無料マインクラフト ドット絵ジェネレーター](https://makebead.com/ja/minecraft-pixel-art-generator/) |
| Minecraft map colors (Java Edition) | 244 | `official` | [JSON](../data/json/minecraft-map.json) · [CSV](../data/csv/minecraft-map.csv) | [Minecraft Map Art Generator](https://makebead.com/minecraft-map-art-generator/) |
| Red Heart Super Saver (worsted) | 44 | `approximate` | [JSON](../data/json/red-heart-super-saver.json) · [CSV](../data/csv/red-heart-super-saver.csv) | [かぎ針編み図案メーカー(無料)](https://makebead.com/ja/crochet-pattern-maker/) |
| Pixel art 256 | 256 | `generated` | [JSON](../data/json/pixel-art-256.json) · [CSV](../data/csv/pixel-art-256.csv) | [無料ドット絵変換ツール](https://makebead.com/ja/pixel-art-converter/) |

MARD の市販セット（24〜264 色：各箱に入っている色番号）は [`data/sets/mard-kits.json`](../data/sets/mard-kits.json) にあります。

## 各パレットの信頼度

- `official` — メーカーまたはゲーム自体が数値を公開しており、それと一致
- `measured` — メーカー自身の素材から、記録された方法で測定
- `cross-checked` — 独立した複数のソースを比較し、食い違いは決めたルールで判定
- `community` — 愛好家が実物のビーズや写真から採取。独立した検証はなし
- `approximate` — 色番号と名前は確認済み、色はまだ校正していない
- `generated` — 製品ラインではない

実物のビーズを正確に再現できる画面はありません。質感・照明・モニターで見え方が変わります。Hex は選ぶ・比べるために使い、買うときは色番号で。

## 使い方

### ファイルをダウンロード・リンクする

各パレットは JSON と CSV で提供しています。CDN から直接リンクできます：

```
https://cdn.jsdelivr.net/gh/makebead/craft-color-codes@main/data/json/dmc-floss.json
https://cdn.jsdelivr.net/npm/craft-color-codes@1/data/csv/miyuki-delica.csv
```

### JavaScript

色番号の検索、最も近い色の検索、ブランド間の変換。依存パッケージなし。

```sh
npm install craft-color-codes
```

```js
import { getColor, nearest, convert } from 'craft-color-codes';

getColor('delica', 'DB10'); // "DB10"、"DB-010"、"10" のどれでも可
// → { code: 'DB0010', name: 'Opaque Black', hex: '#131313' }

nearest('#E8A0B0', 'dmc', { limit: 3 }); // ある色に最も近い DMC の糸
// → [{ code: '3354', name: 'Dusty Rose Light', hex: '#E4A6AC', deltaE: 3.62 }, …]

convert('perler', 'P38', 'hama'); // Perler P38 → Hama
// → { from: { code: 'P38', name: 'Magenta', … }, matches: [{ code: 'H32', name: 'Neon Fuchsia', hex: '#FF208D', deltaE: 4.81 }, …] }
```

### MCP サーバー（Claude、Cursor、VS Code など）

AI アシスタントにパレットをツールとして渡せます。「Perler P38 は Hama だと何番？」「#E8A0B0 に一番近い DMC の糸は？」に、記憶ではなくデータで答えるようになります。

Claude Code:

```sh
claude mcp add craft-color-codes -- npx -y craft-color-codes
```

ほかのクライアント（Claude Desktop、Cursor、VS Code）：

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

- `list_palettes` — すべてのパレットと信頼度
- `get_color` — 色番号から 1 色（表記ゆれに対応）
- `find_closest` — Hex の色に近い色を CIEDE2000 で順位付け
- `convert_color` — あるブランドの色番号 → 別ブランドの近い色
- `search_colors` — 色名・色番号で検索

## データ形式

各パレットファイルには説明・出典・ライセンスが含まれています：

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

- `code` — 袋・チューブ・かせ・パーツに印刷されている番号
- `hex` — `#RRGGBB`（大文字）、`rgb` は `[r, g, b]`
- `discontinued` — 廃番の色だけ `true`（Miyuki Delica）
- パレット固有の項目：`sku`（Perler の品番）、`glass`（Delica のガラス種別）、`group`・`block`・`survival`（Minecraft ブロック）、`base`・`shade`・`buildable`（Minecraft の地図の色）

CSV は同じ色を 1 行 1 色で収録：

```csv
code,name,hex,r,g,b,discontinued,glass
DB0010,Opaque Black,#131313,19,19,19,false,opaque
```

## 数値の出どころ

各パレットの出典・方法・既知の弱点は [SOURCES.md](../SOURCES.md)（英語）とファイルの `notes` にあります。検証で見つかった例を 2 つ：DMC 309（Rose Dark）は広く出回っている元データでは灰褐色ですが、ここでは赤です。Delica は、MakeBead 自身の以前の 39 色データが DB0724（不透明の緑）を赤で描いていたため、Miyuki 自身の写真から作り直しました。

## 色の間違いを見つけたら

パレット名・色番号・どう見えるかを書いて Issue を立ててください。できれば、白い紙の横に置いたビーズ・糸・ブロックを日中の光で撮った写真を添えて。修正はまず MakeBead に入り、ここで再公開されます。

→ [色の間違いを報告する](https://github.com/makebead/craft-color-codes/issues/new?template=wrong-color.yml)

## ライセンス

コード（`src/`、`bin/`）：MIT。データ（`data/`）：[CC BY 4.0](../LICENSE-DATA.md) — 商用を含めどこでも使えます（クレジット表記が必要）。Perler・Hama・Artkal・Nabbi の値は [maxcleme/beadcolors](https://github.com/maxcleme/beadcolors) 由来で、その MIT ライセンスのままです。クレジットの例：

```
Color data: craft-color-codes by MakeBead (https://makebead.com)
```

<sub>Perler、Hama、Artkal、Nabbi、MARD、Miyuki、Delica、DMC、Red Heart、LEGO、Minecraft は各社の商標です。本プロジェクトはいずれとも提携・承認関係にありません。Minecraft 公式の製品ではありません。Mojang および Microsoft の承認を受けたものでも、関係するものでもありません。</sub>

## MakeBead について

[MakeBead](https://makebead.com/ja/) は、アイロンビーズ、クロスステッチ、ダイヤモンドアート、ビーズ織り、かぎ針編み、LEGO モザイク、マイクラのドット絵の図案を作れる無料ツールです（11 言語）。ここのパレットはすべて実際にツールで使われています。
