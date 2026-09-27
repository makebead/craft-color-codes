// README copy for every language. The palette table, code samples and links
// are filled in by build-readme.mjs from data/index.json, so a new palette or a
// corrected count reaches all eleven READMEs from one `npm run readme`.
//
// `site` is MakeBead's URL prefix for the language; `file` is the README path.

export const LANGS = {
  en: {
    name: 'English',
    site: 'en',
    file: 'README.md',
    tagline: (n, p) =>
      `Hex and RGB values for **${n} craft color codes** in ${p} palettes — fuse beads, seed beads, embroidery floss, diamond painting drills, yarn, LEGO and Minecraft — with where every number comes from and how far to trust it.`,
    intro:
      '[MakeBead](https://makebead.com/) turns photos into bead, cross-stitch and pixel-art patterns. These are the palettes its tools use, published so that anyone building a pattern maker, a color converter or a shopping list does not have to collect them again, and so that a wrong color gets found and fixed in one place.',
    h: {
      palettes: 'Palettes',
      status: 'How far to trust a palette',
      use: 'Use it',
      download: 'Download or link the files',
      js: 'JavaScript',
      mcp: 'MCP server (Claude, Cursor, VS Code…)',
      format: 'Data format',
      sources: 'Where the numbers come from',
      fix: 'Found a wrong color?',
      license: 'License',
      about: 'About MakeBead',
    },
    th: ['Palette', 'Colors', 'Status', 'Files', 'Used on MakeBead'],
    discontinued: (n) => `${n} discontinued`,
    kits: 'MARD retail boxes (24 → 264 colors: which codes each box holds) are in [`data/sets/mard-kits.json`](data/sets/mard-kits.json).',
    status: {
      official: 'the maker or the game publishes these numbers, and ours match them',
      measured: "measured from the maker's own material by a documented method",
      'cross-checked': 'several independent sources compared, conflicts settled by a written rule',
      community: 'sampled from physical beads or photos by hobbyists, not independently checked',
      approximate: 'codes and names checked, colors not yet calibrated',
      generated: 'not a product line',
    },
    statusNote:
      'No screen shows a physical bead exactly: finish, lighting and monitor all move it. Use the hex to choose and compare, and buy by the code.',
    downloadText: 'Every palette is a JSON file and a CSV file. Link them straight from a CDN:',
    jsText: 'Look up codes, find the closest color, convert between brands. No dependencies.',
    jsComments: {
      get: '"DB10", "DB-010" and "10" all work',
      closest: 'closest DMC floss to a color',
      convert: 'Perler P38 → Hama',
    },
    mcpText:
      'Give an AI assistant the palettes as tools, so it answers "what is Perler P38 in Hama?" or "which DMC floss is closest to #E8A0B0?" from the data instead of from memory.',
    mcpOther: 'Other clients (Claude Desktop, Cursor, VS Code):',
    tools: {
      list_palettes: 'every palette, with its status',
      get_color: 'one color by its code, written the way people write it',
      find_closest: 'closest colors to a hex color, ranked by CIEDE2000',
      convert_color: 'a code in one brand → its closest equivalents in another',
      search_colors: 'search by color name or code',
    },
    formatText: 'Each palette file carries its own description, sources and license:',
    fields: {
      code: 'as printed on the bag, tube, skein or item',
      hex: '`#RRGGBB`, upper case, with `rgb` as `[r, g, b]`',
      discontinued: '`true` only for colors no longer made (Miyuki Delica)',
      extra:
        'palette-specific fields: `sku` (Perler item number), `glass` (Delica glass type), `group`, `block`, `survival` (Minecraft blocks), `base`, `shade`, `buildable` (Minecraft map colors)',
    },
    csvText: 'The CSV has the same colors, one per row:',
    sourcesText:
      "Each palette's sources, method and known weaknesses are in [SOURCES.md](SOURCES.md) and in the palette file's `notes`. Two examples of what that checking found: DMC 309 (Rose Dark) is grey-brown in the common upstream data and red here, and the Delica colors were rebuilt from Miyuki's own photos after MakeBead's earlier 39-color set turned out to draw DB0724, an opaque green, as red.",
    fixText:
      'Open an issue with the palette, the code, what you see — and if you can, a daylight photo of the bead, skein or brick next to white paper. Corrections go into MakeBead first and are republished here.',
    fixLink: 'Report a wrong color',
    licenseText:
      'Code (`src/`, `bin/`): MIT. Data (`data/`): [CC BY 4.0](LICENSE-DATA.md) — use it anywhere, commercial use included, with a credit. The Perler, Hama, Artkal and Nabbi values come from [maxcleme/beadcolors](https://github.com/maxcleme/beadcolors) and stay under its MIT license. Suggested credit:',
    trademarks:
      'Perler, Hama, Artkal, Nabbi, MARD, Miyuki, Delica, DMC, Red Heart, LEGO and Minecraft are trademarks of their owners. This project is not affiliated with or endorsed by any of them. NOT AN OFFICIAL MINECRAFT PRODUCT. NOT APPROVED BY OR ASSOCIATED WITH MOJANG OR MICROSOFT.',
    aboutText:
      '[MakeBead](https://makebead.com/) is a free pattern maker for Perler and Hama beads, cross stitch, diamond painting, loom beading, crochet, LEGO mosaics and Minecraft pixel art, in 11 languages. Every palette here is live in its tools.',
  },

  de: {
    name: 'Deutsch',
    site: 'de',
    file: 'i18n/README.de.md',
    tagline: (n, p) =>
      `Hex- und RGB-Werte für **${n} Farbcodes** in ${p} Paletten — Bügelperlen, Rocailles, Stickgarn, Diamond-Painting-Steine, Wolle, LEGO und Minecraft — mit der Herkunft jeder Zahl und wie weit man ihr trauen kann.`,
    intro:
      '[MakeBead](https://makebead.com/de/) macht aus Fotos Vorlagen für Bügelperlen, Kreuzstich und Pixel-Art. Das hier sind die Paletten seiner Werkzeuge — veröffentlicht, damit niemand sie für einen Vorlagengenerator, einen Farbumrechner oder eine Einkaufsliste noch einmal zusammensuchen muss und ein falscher Farbwert an einer Stelle gefunden und korrigiert wird.',
    h: {
      palettes: 'Paletten',
      status: 'Wie weit man einer Palette trauen kann',
      use: 'Verwendung',
      download: 'Dateien herunterladen oder verlinken',
      js: 'JavaScript',
      mcp: 'MCP-Server (Claude, Cursor, VS Code …)',
      format: 'Datenformat',
      sources: 'Woher die Zahlen kommen',
      fix: 'Falsche Farbe gefunden?',
      license: 'Lizenz',
      about: 'Über MakeBead',
    },
    th: ['Palette', 'Farben', 'Status', 'Dateien', 'Auf MakeBead'],
    discontinued: (n) => `${n} nicht mehr hergestellt`,
    kits: 'Die MARD-Sets im Handel (24 → 264 Farben: welche Codes in welcher Box sind) stehen in [`data/sets/mard-kits.json`](../data/sets/mard-kits.json).',
    status: {
      official: 'der Hersteller bzw. das Spiel veröffentlicht die Werte, und unsere stimmen damit überein',
      measured: 'nach einer dokumentierten Methode aus Material des Herstellers gemessen',
      'cross-checked': 'mehrere unabhängige Quellen verglichen, Widersprüche nach einer festen Regel entschieden',
      community: 'von Bastlern an echten Perlen oder Fotos gemessen, nicht unabhängig geprüft',
      approximate: 'Codes und Namen geprüft, Farben noch nicht kalibriert',
      generated: 'keine Produktlinie',
    },
    statusNote:
      'Kein Bildschirm zeigt eine echte Perle exakt: Oberfläche, Licht und Monitor verändern sie. Mit dem Hex-Wert auswählen und vergleichen, nach dem Code kaufen.',
    downloadText: 'Jede Palette gibt es als JSON- und als CSV-Datei, direkt über ein CDN:',
    jsText: 'Codes nachschlagen, die nächstliegende Farbe finden, zwischen Marken umrechnen. Keine Abhängigkeiten.',
    jsComments: {
      get: '"DB10", "DB-010" und "10" funktionieren alle',
      closest: 'nächstliegendes DMC-Garn zu einer Farbe',
      convert: 'Perler P38 → Hama',
    },
    mcpText:
      'Gibt einem KI-Assistenten die Paletten als Werkzeuge, damit er „Welche Hama-Farbe entspricht Perler P38?“ oder „Welches DMC-Garn liegt am nächsten an #E8A0B0?“ aus den Daten beantwortet statt aus dem Gedächtnis.',
    mcpOther: 'Andere Clients (Claude Desktop, Cursor, VS Code):',
    tools: {
      list_palettes: 'alle Paletten mit Status',
      get_color: 'eine Farbe nach Code, so geschrieben, wie man ihn schreibt',
      find_closest: 'die nächstliegenden Farben zu einem Hex-Wert, nach CIEDE2000',
      convert_color: 'Code einer Marke → nächstliegende Entsprechungen einer anderen',
      search_colors: 'Suche nach Farbname oder Code',
    },
    formatText: 'Jede Palettendatei enthält ihre Beschreibung, Quellen und Lizenz:',
    fields: {
      code: 'wie auf Beutel, Röhrchen, Docke oder Teil gedruckt',
      hex: '`#RRGGBB` in Großbuchstaben, dazu `rgb` als `[r, g, b]`',
      discontinued: '`true` nur bei Farben, die nicht mehr hergestellt werden (Miyuki Delica)',
      extra:
        'palettenspezifische Felder: `sku` (Perler-Artikelnummer), `glass` (Delica-Glasart), `group`, `block`, `survival` (Minecraft-Blöcke), `base`, `shade`, `buildable` (Minecraft-Kartenfarben)',
    },
    csvText: 'Die CSV enthält dieselben Farben, eine pro Zeile:',
    sourcesText:
      'Quellen, Methode und bekannte Schwächen jeder Palette stehen in [SOURCES.md](../SOURCES.md) (Englisch) und im Feld `notes` der Datei. Zwei Beispiele, was die Prüfung gefunden hat: DMC 309 (Rose Dark) ist in den üblichen Ausgangsdaten graubraun und hier rot, und die Delica-Farben wurden aus Miyukis eigenen Fotos neu erstellt, nachdem MakeBeads eigene frühere 39-Farben-Liste DB0724, ein opakes Grün, rot gezeichnet hatte.',
    fixText:
      'Eröffne ein Issue mit Palette, Code und dem, was du siehst — am besten mit einem Foto bei Tageslicht von Perle, Garn oder Stein neben weißem Papier. Korrekturen gehen zuerst in MakeBead und werden dann hier veröffentlicht.',
    fixLink: 'Falsche Farbe melden',
    licenseText:
      'Code (`src/`, `bin/`): MIT. Daten (`data/`): [CC BY 4.0](../LICENSE-DATA.md) — überall nutzbar, auch kommerziell, mit Namensnennung. Die Werte für Perler, Hama, Artkal und Nabbi stammen aus [maxcleme/beadcolors](https://github.com/maxcleme/beadcolors) und bleiben unter dessen MIT-Lizenz. Vorschlag für die Nennung:',
    trademarks:
      'Perler, Hama, Artkal, Nabbi, MARD, Miyuki, Delica, DMC, Red Heart, LEGO und Minecraft sind Marken ihrer Inhaber. Dieses Projekt ist mit keinem von ihnen verbunden. KEIN OFFIZIELLES MINECRAFT-PRODUKT. NICHT VON MOJANG ODER MICROSOFT GENEHMIGT ODER MIT IHNEN VERBUNDEN.',
    aboutText:
      '[MakeBead](https://makebead.com/de/) ist ein kostenloser Vorlagengenerator für Bügelperlen, Kreuzstich, Diamond Painting, Webperlen, Häkeln, LEGO-Mosaike und Minecraft-Pixel-Art in 11 Sprachen. Jede Palette hier ist in seinen Werkzeugen im Einsatz.',
  },

  ja: {
    name: '日本語',
    site: 'ja',
    file: 'i18n/README.ja.md',
    tagline: (n, p) =>
      `アイロンビーズ、シードビーズ、刺しゅう糸、ダイヤモンドアートのビーズ、毛糸、LEGO、Minecraft の **${n} 色の色番号**（${p} パレット）の Hex / RGB 値。どの数値もどこから来たか、どこまで信頼できるかを明記しています。`,
    intro:
      '[MakeBead](https://makebead.com/ja/) は写真からアイロンビーズ、クロスステッチ、ドット絵の図案を作るツールです。ここにあるのはそのツールが使っているパレットです。図案メーカーや色変換ツール、材料リストを作る人が同じデータを集め直さずに済むように、そして間違った色が一か所で見つかり直されるように公開しています。',
    h: {
      palettes: 'パレット一覧',
      status: '各パレットの信頼度',
      use: '使い方',
      download: 'ファイルをダウンロード・リンクする',
      js: 'JavaScript',
      mcp: 'MCP サーバー（Claude、Cursor、VS Code など）',
      format: 'データ形式',
      sources: '数値の出どころ',
      fix: '色の間違いを見つけたら',
      license: 'ライセンス',
      about: 'MakeBead について',
    },
    th: ['パレット', '色数', '状態', 'ファイル', 'MakeBead で使う'],
    discontinued: (n) => `うち廃番 ${n}`,
    kits: 'MARD の市販セット（24〜264 色：各箱に入っている色番号）は [`data/sets/mard-kits.json`](../data/sets/mard-kits.json) にあります。',
    status: {
      official: 'メーカーまたはゲーム自体が数値を公開しており、それと一致',
      measured: 'メーカー自身の素材から、記録された方法で測定',
      'cross-checked': '独立した複数のソースを比較し、食い違いは決めたルールで判定',
      community: '愛好家が実物のビーズや写真から採取。独立した検証はなし',
      approximate: '色番号と名前は確認済み、色はまだ校正していない',
      generated: '製品ラインではない',
    },
    statusNote:
      '実物のビーズを正確に再現できる画面はありません。質感・照明・モニターで見え方が変わります。Hex は選ぶ・比べるために使い、買うときは色番号で。',
    downloadText: '各パレットは JSON と CSV で提供しています。CDN から直接リンクできます：',
    jsText: '色番号の検索、最も近い色の検索、ブランド間の変換。依存パッケージなし。',
    jsComments: {
      get: '"DB10"、"DB-010"、"10" のどれでも可',
      closest: 'ある色に最も近い DMC の糸',
      convert: 'Perler P38 → Hama',
    },
    mcpText:
      'AI アシスタントにパレットをツールとして渡せます。「Perler P38 は Hama だと何番？」「#E8A0B0 に一番近い DMC の糸は？」に、記憶ではなくデータで答えるようになります。',
    mcpOther: 'ほかのクライアント（Claude Desktop、Cursor、VS Code）：',
    tools: {
      list_palettes: 'すべてのパレットと信頼度',
      get_color: '色番号から 1 色（表記ゆれに対応）',
      find_closest: 'Hex の色に近い色を CIEDE2000 で順位付け',
      convert_color: 'あるブランドの色番号 → 別ブランドの近い色',
      search_colors: '色名・色番号で検索',
    },
    formatText: '各パレットファイルには説明・出典・ライセンスが含まれています：',
    fields: {
      code: '袋・チューブ・かせ・パーツに印刷されている番号',
      hex: '`#RRGGBB`（大文字）、`rgb` は `[r, g, b]`',
      discontinued: '廃番の色だけ `true`（Miyuki Delica）',
      extra:
        'パレット固有の項目：`sku`（Perler の品番）、`glass`（Delica のガラス種別）、`group`・`block`・`survival`（Minecraft ブロック）、`base`・`shade`・`buildable`（Minecraft の地図の色）',
    },
    csvText: 'CSV は同じ色を 1 行 1 色で収録：',
    sourcesText:
      '各パレットの出典・方法・既知の弱点は [SOURCES.md](../SOURCES.md)（英語）とファイルの `notes` にあります。検証で見つかった例を 2 つ：DMC 309（Rose Dark）は広く出回っている元データでは灰褐色ですが、ここでは赤です。Delica は、MakeBead 自身の以前の 39 色データが DB0724（不透明の緑）を赤で描いていたため、Miyuki 自身の写真から作り直しました。',
    fixText:
      'パレット名・色番号・どう見えるかを書いて Issue を立ててください。できれば、白い紙の横に置いたビーズ・糸・ブロックを日中の光で撮った写真を添えて。修正はまず MakeBead に入り、ここで再公開されます。',
    fixLink: '色の間違いを報告する',
    licenseText:
      'コード（`src/`、`bin/`）：MIT。データ（`data/`）：[CC BY 4.0](../LICENSE-DATA.md) — 商用を含めどこでも使えます（クレジット表記が必要）。Perler・Hama・Artkal・Nabbi の値は [maxcleme/beadcolors](https://github.com/maxcleme/beadcolors) 由来で、その MIT ライセンスのままです。クレジットの例：',
    trademarks:
      'Perler、Hama、Artkal、Nabbi、MARD、Miyuki、Delica、DMC、Red Heart、LEGO、Minecraft は各社の商標です。本プロジェクトはいずれとも提携・承認関係にありません。Minecraft 公式の製品ではありません。Mojang および Microsoft の承認を受けたものでも、関係するものでもありません。',
    aboutText:
      '[MakeBead](https://makebead.com/ja/) は、アイロンビーズ、クロスステッチ、ダイヤモンドアート、ビーズ織り、かぎ針編み、LEGO モザイク、マイクラのドット絵の図案を作れる無料ツールです（11 言語）。ここのパレットはすべて実際にツールで使われています。',
  },

  ko: {
    name: '한국어',
    site: 'ko',
    file: 'i18n/README.ko.md',
    tagline: (n, p) =>
      `퓨즈비즈, 시드비즈, 자수실, 보석십자수 비즈, 뜨개실, LEGO, 마인크래프트의 **${n}가지 색상 코드**(${p}개 팔레트) Hex·RGB 값. 모든 숫자의 출처와 어디까지 믿을 수 있는지를 함께 적었습니다.`,
    intro:
      '[MakeBead](https://makebead.com/ko/)는 사진을 비즈·십자수·픽셀아트 도안으로 바꿔 주는 도구입니다. 이곳의 팔레트는 그 도구들이 쓰는 데이터입니다. 도안 생성기, 색상 변환기, 재료 목록을 만드는 사람이 같은 데이터를 다시 모으지 않도록, 그리고 틀린 색이 한 곳에서 발견되고 고쳐지도록 공개합니다.',
    h: {
      palettes: '팔레트',
      status: '팔레트별 신뢰도',
      use: '사용법',
      download: '파일 다운로드 또는 링크',
      js: 'JavaScript',
      mcp: 'MCP 서버 (Claude, Cursor, VS Code 등)',
      format: '데이터 형식',
      sources: '숫자의 출처',
      fix: '틀린 색을 발견했다면',
      license: '라이선스',
      about: 'MakeBead 소개',
    },
    th: ['팔레트', '색상 수', '상태', '파일', 'MakeBead에서 사용'],
    discontinued: (n) => `단종 ${n}`,
    kits: 'MARD 시판 세트(24 → 264색: 상자마다 들어 있는 코드)는 [`data/sets/mard-kits.json`](../data/sets/mard-kits.json)에 있습니다.',
    status: {
      official: '제조사나 게임이 직접 공개한 값이며 우리 값과 일치',
      measured: '제조사 자료에서 기록된 방법으로 측정',
      'cross-checked': '독립된 여러 출처를 비교하고, 충돌은 정해진 규칙으로 판정',
      community: '취미가들이 실물 비즈나 사진에서 추출, 독립 검증 없음',
      approximate: '코드와 이름은 확인, 색은 아직 보정 전',
      generated: '제품 라인이 아님',
    },
    statusNote:
      '실물 비즈를 정확히 보여 주는 화면은 없습니다. 질감·조명·모니터에 따라 달라집니다. Hex는 고르고 비교할 때 쓰고, 살 때는 코드로 사세요.',
    downloadText: '모든 팔레트는 JSON과 CSV 파일로 제공됩니다. CDN에서 바로 링크하세요:',
    jsText: '코드 조회, 가장 가까운 색 찾기, 브랜드 간 변환. 의존성 없음.',
    jsComments: {
      get: '"DB10", "DB-010", "10" 모두 가능',
      closest: '어떤 색에 가장 가까운 DMC 실',
      convert: 'Perler P38 → Hama',
    },
    mcpText:
      'AI 어시스턴트에게 팔레트를 도구로 줄 수 있습니다. "Perler P38은 Hama로 몇 번?", "#E8A0B0에 가장 가까운 DMC 실은?"에 기억이 아니라 데이터로 답하게 됩니다.',
    mcpOther: '다른 클라이언트 (Claude Desktop, Cursor, VS Code):',
    tools: {
      list_palettes: '모든 팔레트와 상태',
      get_color: '코드로 한 가지 색 조회 (여러 표기 방식 지원)',
      find_closest: 'Hex 색에 가까운 색을 CIEDE2000 순으로',
      convert_color: '한 브랜드의 코드 → 다른 브랜드의 가까운 색',
      search_colors: '색 이름이나 코드로 검색',
    },
    formatText: '각 팔레트 파일에는 설명·출처·라이선스가 들어 있습니다:',
    fields: {
      code: '봉지·튜브·타래·부품에 인쇄된 번호',
      hex: '`#RRGGBB` 대문자, `rgb`는 `[r, g, b]`',
      discontinued: '단종된 색에만 `true` (Miyuki Delica)',
      extra:
        '팔레트별 필드: `sku`(Perler 품번), `glass`(Delica 유리 종류), `group`·`block`·`survival`(마인크래프트 블록), `base`·`shade`·`buildable`(마인크래프트 지도 색)',
    },
    csvText: 'CSV에는 같은 색이 한 줄에 하나씩 들어 있습니다:',
    sourcesText:
      '각 팔레트의 출처, 방법, 알려진 약점은 [SOURCES.md](../SOURCES.md)(영어)와 파일의 `notes`에 있습니다. 검증으로 찾은 예 두 가지: DMC 309(Rose Dark)는 널리 쓰이는 원본 데이터에서 회갈색이지만 여기서는 빨간색입니다. Delica는 MakeBead의 예전 39색 데이터가 불투명 초록인 DB0724를 빨간색으로 그리고 있어 Miyuki 공식 사진으로 다시 만들었습니다.',
    fixText:
      '팔레트, 코드, 실제로 보이는 색을 적어 Issue를 열어 주세요. 가능하면 흰 종이 옆에 둔 비즈·실·블록을 낮에 찍은 사진을 함께 올려 주세요. 수정은 먼저 MakeBead에 반영되고 여기에 다시 게시됩니다.',
    fixLink: '틀린 색 신고하기',
    licenseText:
      '코드(`src/`, `bin/`): MIT. 데이터(`data/`): [CC BY 4.0](../LICENSE-DATA.md) — 상업적 이용을 포함해 어디서나 쓸 수 있으며 출처 표시가 필요합니다. Perler·Hama·Artkal·Nabbi 값은 [maxcleme/beadcolors](https://github.com/maxcleme/beadcolors)에서 왔으며 그 MIT 라이선스를 따릅니다. 출처 표시 예:',
    trademarks:
      'Perler, Hama, Artkal, Nabbi, MARD, Miyuki, Delica, DMC, Red Heart, LEGO, Minecraft는 각 소유자의 상표입니다. 이 프로젝트는 이들 중 누구와도 제휴하거나 승인받지 않았습니다. 마인크래프트 공식 제품이 아닙니다. Mojang 또는 Microsoft의 승인을 받았거나 관련이 있지 않습니다.',
    aboutText:
      '[MakeBead](https://makebead.com/ko/)는 퓨즈비즈, 십자수, 보석십자수, 비즈 직조, 코바늘, LEGO 모자이크, 마인크래프트 픽셀아트 도안을 만드는 무료 도구입니다(11개 언어). 이곳의 팔레트는 모두 실제 도구에서 쓰이고 있습니다.',
  },

  fr: {
    name: 'Français',
    site: 'fr',
    file: 'i18n/README.fr.md',
    tagline: (n, p) =>
      `Valeurs hex et RVB de **${n} codes couleur** dans ${p} palettes — perles à repasser, perles de rocaille, fils à broder, strass de broderie diamant, laine, LEGO et Minecraft — avec l’origine de chaque valeur et le degré de confiance qu’on peut lui accorder.`,
    intro:
      '[MakeBead](https://makebead.com/fr/) transforme des photos en modèles de perles, de point de croix et de pixel art. Voici les palettes qu’utilisent ses outils, publiées pour que personne n’ait à les rassembler de nouveau pour un générateur de modèles, un convertisseur de couleurs ou une liste d’achats, et pour qu’une couleur fausse soit repérée et corrigée à un seul endroit.',
    h: {
      palettes: 'Palettes',
      status: 'Quel crédit accorder à une palette',
      use: 'Utilisation',
      download: 'Télécharger ou lier les fichiers',
      js: 'JavaScript',
      mcp: 'Serveur MCP (Claude, Cursor, VS Code…)',
      format: 'Format des données',
      sources: 'D’où viennent les valeurs',
      fix: 'Une couleur est fausse ?',
      license: 'Licence',
      about: 'À propos de MakeBead',
    },
    th: ['Palette', 'Couleurs', 'Statut', 'Fichiers', 'Sur MakeBead'],
    discontinued: (n) => `${n} arrêtées`,
    kits: 'Les coffrets MARD du commerce (24 → 264 couleurs : les codes de chaque boîte) sont dans [`data/sets/mard-kits.json`](../data/sets/mard-kits.json).',
    status: {
      official: 'le fabricant ou le jeu publie ces valeurs, et les nôtres y correspondent',
      measured: 'mesurées sur le matériel du fabricant selon une méthode documentée',
      'cross-checked': 'plusieurs sources indépendantes comparées, désaccords tranchés par une règle écrite',
      community: 'relevées par des amateurs sur des perles ou des photos, sans vérification indépendante',
      approximate: 'codes et noms vérifiés, couleurs pas encore calibrées',
      generated: 'pas une gamme de produits',
    },
    statusNote:
      'Aucun écran ne montre exactement une perle réelle : finition, lumière et moniteur la modifient. Servez-vous du hex pour choisir et comparer, et achetez au code.',
    downloadText: 'Chaque palette existe en JSON et en CSV. Liez-les directement depuis un CDN :',
    jsText: 'Chercher un code, trouver la couleur la plus proche, convertir d’une marque à l’autre. Aucune dépendance.',
    jsComments: {
      get: '"DB10", "DB-010" et "10" fonctionnent',
      closest: 'le fil DMC le plus proche d’une couleur',
      convert: 'Perler P38 → Hama',
    },
    mcpText:
      'Donnez les palettes à un assistant IA sous forme d’outils : il répond à « Quel Hama pour Perler P38 ? » ou « Quel fil DMC est le plus proche de #E8A0B0 ? » à partir des données, pas de mémoire.',
    mcpOther: 'Autres clients (Claude Desktop, Cursor, VS Code) :',
    tools: {
      list_palettes: 'toutes les palettes, avec leur statut',
      get_color: 'une couleur par son code, écrit comme on l’écrit',
      find_closest: 'les couleurs les plus proches d’un hex, classées par CIEDE2000',
      convert_color: 'un code d’une marque → ses équivalents les plus proches dans une autre',
      search_colors: 'recherche par nom ou par code',
    },
    formatText: 'Chaque fichier de palette contient sa description, ses sources et sa licence :',
    fields: {
      code: 'tel qu’imprimé sur le sachet, le tube, l’échevette ou la pièce',
      hex: '`#RRGGBB` en majuscules, avec `rgb` sous forme `[r, g, b]`',
      discontinued: '`true` uniquement pour les couleurs arrêtées (Miyuki Delica)',
      extra:
        'champs propres à certaines palettes : `sku` (référence Perler), `glass` (type de verre Delica), `group`, `block`, `survival` (blocs Minecraft), `base`, `shade`, `buildable` (couleurs de carte Minecraft)',
    },
    csvText: 'Le CSV contient les mêmes couleurs, une par ligne :',
    sourcesText:
      'Les sources, la méthode et les faiblesses connues de chaque palette sont dans [SOURCES.md](../SOURCES.md) (en anglais) et dans le champ `notes` du fichier. Deux exemples de ce que la vérification a trouvé : DMC 309 (Rose Dark) est gris-brun dans les données répandues et rouge ici, et les couleurs Delica ont été refaites à partir des photos de Miyuki après que l’ancienne liste de 39 couleurs de MakeBead eut dessiné en rouge DB0724, un vert opaque.',
    fixText:
      'Ouvrez une issue avec la palette, le code et ce que vous voyez — si possible avec une photo à la lumière du jour de la perle, du fil ou de la brique à côté d’une feuille blanche. Les corrections entrent d’abord dans MakeBead, puis sont republiées ici.',
    fixLink: 'Signaler une couleur fausse',
    licenseText:
      'Code (`src/`, `bin/`) : MIT. Données (`data/`) : [CC BY 4.0](../LICENSE-DATA.md) — utilisables partout, y compris commercialement, avec mention de la source. Les valeurs Perler, Hama, Artkal et Nabbi viennent de [maxcleme/beadcolors](https://github.com/maxcleme/beadcolors) et restent sous sa licence MIT. Mention suggérée :',
    trademarks:
      'Perler, Hama, Artkal, Nabbi, MARD, Miyuki, Delica, DMC, Red Heart, LEGO et Minecraft sont des marques de leurs propriétaires. Ce projet n’est affilié à aucun d’eux ni approuvé par eux. CE N’EST PAS UN PRODUIT OFFICIEL MINECRAFT. NI APPROUVÉ PAR MOJANG OU MICROSOFT, NI ASSOCIÉ À EUX.',
    aboutText:
      '[MakeBead](https://makebead.com/fr/) est un générateur de modèles gratuit pour perles à repasser, point de croix, broderie diamant, tissage de perles, crochet, mosaïques LEGO et pixel art Minecraft, en 11 langues. Chaque palette d’ici est en service dans ses outils.',
  },

  es: {
    name: 'Español',
    site: 'es',
    file: 'i18n/README.es.md',
    tagline: (n, p) =>
      `Valores hex y RGB de **${n} códigos de color** en ${p} paletas — hama beads, mostacillas, hilos de bordar, piedras de pintura con diamantes, lana, LEGO y Minecraft — con el origen de cada número y cuánto fiarse de él.`,
    intro:
      '[MakeBead](https://makebead.com/es/) convierte fotos en patrones de hama beads, punto de cruz y pixel art. Estas son las paletas que usan sus herramientas, publicadas para que nadie tenga que volver a reunirlas para un generador de patrones, un conversor de colores o una lista de compra, y para que un color equivocado se encuentre y se corrija en un solo lugar.',
    h: {
      palettes: 'Paletas',
      status: 'Cuánto fiarse de cada paleta',
      use: 'Uso',
      download: 'Descargar o enlazar los archivos',
      js: 'JavaScript',
      mcp: 'Servidor MCP (Claude, Cursor, VS Code…)',
      format: 'Formato de los datos',
      sources: 'De dónde salen los números',
      fix: '¿Un color está mal?',
      license: 'Licencia',
      about: 'Sobre MakeBead',
    },
    th: ['Paleta', 'Colores', 'Estado', 'Archivos', 'En MakeBead'],
    discontinued: (n) => `${n} descatalogados`,
    kits: 'Las cajas MARD a la venta (24 → 264 colores: qué códigos trae cada caja) están en [`data/sets/mard-kits.json`](../data/sets/mard-kits.json).',
    status: {
      official: 'el fabricante o el juego publica estos valores y los nuestros coinciden',
      measured: 'medidos sobre material del propio fabricante con un método documentado',
      'cross-checked': 'varias fuentes independientes comparadas; los conflictos se deciden con una regla escrita',
      community: 'tomados por aficionados de cuentas o fotos reales, sin verificación independiente',
      approximate: 'códigos y nombres comprobados, colores aún sin calibrar',
      generated: 'no es una línea de productos',
    },
    statusNote:
      'Ninguna pantalla muestra una cuenta real con exactitud: el acabado, la luz y el monitor la cambian. Usa el hex para elegir y comparar, y compra por el código.',
    downloadText: 'Cada paleta está en JSON y en CSV. Enlázalas directamente desde un CDN:',
    jsText: 'Buscar códigos, encontrar el color más cercano, convertir entre marcas. Sin dependencias.',
    jsComments: {
      get: '"DB10", "DB-010" y "10" funcionan',
      closest: 'el hilo DMC más cercano a un color',
      convert: 'Perler P38 → Hama',
    },
    mcpText:
      'Da las paletas a un asistente de IA como herramientas, para que responda «¿qué Hama equivale a Perler P38?» o «¿qué hilo DMC se parece más a #E8A0B0?» con los datos y no de memoria.',
    mcpOther: 'Otros clientes (Claude Desktop, Cursor, VS Code):',
    tools: {
      list_palettes: 'todas las paletas, con su estado',
      get_color: 'un color por su código, escrito como lo escribe la gente',
      find_closest: 'los colores más cercanos a un hex, ordenados por CIEDE2000',
      convert_color: 'un código de una marca → sus equivalentes más cercanos en otra',
      search_colors: 'buscar por nombre o código',
    },
    formatText: 'Cada archivo de paleta lleva su descripción, fuentes y licencia:',
    fields: {
      code: 'tal como viene impreso en la bolsa, el tubo, la madeja o la pieza',
      hex: '`#RRGGBB` en mayúsculas, con `rgb` como `[r, g, b]`',
      discontinued: '`true` solo en colores que ya no se fabrican (Miyuki Delica)',
      extra:
        'campos propios de algunas paletas: `sku` (referencia Perler), `glass` (tipo de vidrio Delica), `group`, `block`, `survival` (bloques de Minecraft), `base`, `shade`, `buildable` (colores de mapa de Minecraft)',
    },
    csvText: 'El CSV tiene los mismos colores, uno por fila:',
    sourcesText:
      'Las fuentes, el método y los puntos débiles conocidos de cada paleta están en [SOURCES.md](../SOURCES.md) (en inglés) y en el campo `notes` del archivo. Dos ejemplos de lo que encontró la comprobación: DMC 309 (Rose Dark) es gris pardo en los datos habituales y rojo aquí, y los colores Delica se rehicieron a partir de las fotos de Miyuki después de que la antigua lista de 39 colores de MakeBead dibujara en rojo DB0724, un verde opaco.',
    fixText:
      'Abre una issue con la paleta, el código y lo que ves — si puedes, con una foto a la luz del día de la cuenta, el hilo o la pieza junto a un papel blanco. Las correcciones entran primero en MakeBead y se vuelven a publicar aquí.',
    fixLink: 'Informar de un color equivocado',
    licenseText:
      'Código (`src/`, `bin/`): MIT. Datos (`data/`): [CC BY 4.0](../LICENSE-DATA.md) — se pueden usar en cualquier sitio, también comercialmente, citando la fuente. Los valores de Perler, Hama, Artkal y Nabbi vienen de [maxcleme/beadcolors](https://github.com/maxcleme/beadcolors) y siguen bajo su licencia MIT. Cita sugerida:',
    trademarks:
      'Perler, Hama, Artkal, Nabbi, MARD, Miyuki, Delica, DMC, Red Heart, LEGO y Minecraft son marcas de sus propietarios. Este proyecto no está afiliado a ninguno de ellos ni respaldado por ellos. NO ES UN PRODUCTO OFICIAL DE MINECRAFT. NO ESTÁ APROBADO POR MOJANG NI MICROSOFT NI ASOCIADO A ELLOS.',
    aboutText:
      '[MakeBead](https://makebead.com/es/) es un generador de patrones gratuito para hama beads, punto de cruz, pintura con diamantes, telar de cuentas, ganchillo, mosaicos LEGO y pixel art de Minecraft, en 11 idiomas. Todas las paletas de aquí están en uso en sus herramientas.',
  },

  ru: {
    name: 'Русский',
    site: 'ru',
    file: 'i18n/README.ru.md',
    tagline: (n, p) =>
      `Hex и RGB для **${n} кодов цвета** в ${p} палитрах — термомозаика, бисер, мулине, стразы для алмазной вышивки, пряжа, LEGO и Minecraft — с указанием, откуда взято каждое число и насколько ему можно доверять.`,
    intro:
      '[MakeBead](https://makebead.com/ru/) превращает фотографии в схемы для термомозаики, вышивки крестом и пиксель-арта. Здесь — палитры, которыми пользуются его инструменты. Они опубликованы, чтобы никому не пришлось собирать их заново для генератора схем, конвертера цветов или списка покупок, и чтобы неверный цвет находили и исправляли в одном месте.',
    h: {
      palettes: 'Палитры',
      status: 'Насколько доверять палитре',
      use: 'Как использовать',
      download: 'Скачать или подключить файлы',
      js: 'JavaScript',
      mcp: 'MCP-сервер (Claude, Cursor, VS Code…)',
      format: 'Формат данных',
      sources: 'Откуда числа',
      fix: 'Нашли неверный цвет?',
      license: 'Лицензия',
      about: 'О MakeBead',
    },
    th: ['Палитра', 'Цветов', 'Статус', 'Файлы', 'На MakeBead'],
    discontinued: (n) => `снято с производства: ${n}`,
    kits: 'Наборы MARD из магазинов (24 → 264 цвета: какие коды в какой коробке) — в [`data/sets/mard-kits.json`](../data/sets/mard-kits.json).',
    status: {
      official: 'производитель или игра публикует эти значения, и наши с ними совпадают',
      measured: 'измерены по материалам самого производителя задокументированным методом',
      'cross-checked': 'сверены несколько независимых источников, расхождения решены по записанному правилу',
      community: 'сняты любителями с настоящих бусин или фото, независимо не проверены',
      approximate: 'коды и названия проверены, цвета ещё не откалиброваны',
      generated: 'не товарная линейка',
    },
    statusNote:
      'Ни один экран не покажет настоящую бусину точно: покрытие, свет и монитор меняют её. Выбирайте и сравнивайте по hex, покупайте по коду.',
    downloadText: 'Каждая палитра есть в JSON и CSV. Подключайте прямо с CDN:',
    jsText: 'Поиск по коду, ближайший цвет, пересчёт между брендами. Без зависимостей.',
    jsComments: {
      get: 'работают "DB10", "DB-010" и "10"',
      closest: 'ближайшее мулине DMC к цвету',
      convert: 'Perler P38 → Hama',
    },
    mcpText:
      'Дайте палитры ИИ-ассистенту как инструменты — и на вопросы «какой Hama соответствует Perler P38?» или «какое мулине DMC ближе всего к #E8A0B0?» он ответит по данным, а не по памяти.',
    mcpOther: 'Другие клиенты (Claude Desktop, Cursor, VS Code):',
    tools: {
      list_palettes: 'все палитры и их статус',
      get_color: 'цвет по коду в любом привычном написании',
      find_closest: 'ближайшие цвета к hex по CIEDE2000',
      convert_color: 'код одного бренда → ближайшие аналоги другого',
      search_colors: 'поиск по названию или коду',
    },
    formatText: 'В каждом файле палитры есть описание, источники и лицензия:',
    fields: {
      code: 'как напечатано на пакете, тубе, пасме или детали',
      hex: '`#RRGGBB` заглавными, `rgb` как `[r, g, b]`',
      discontinued: '`true` только у снятых с производства цветов (Miyuki Delica)',
      extra:
        'поля отдельных палитр: `sku` (артикул Perler), `glass` (тип стекла Delica), `group`, `block`, `survival` (блоки Minecraft), `base`, `shade`, `buildable` (цвета карт Minecraft)',
    },
    csvText: 'В CSV те же цвета, по одному на строку:',
    sourcesText:
      'Источники, метод и известные слабые места каждой палитры — в [SOURCES.md](../SOURCES.md) (на английском) и в поле `notes` файла. Два примера того, что нашла проверка: DMC 309 (Rose Dark) в распространённых исходных данных серо-коричневый, а здесь красный; цвета Delica пересобраны по фотографиям самой Miyuki после того как прежний список MakeBead из 39 цветов рисовал красным DB0724 — непрозрачный зелёный.',
    fixText:
      'Откройте issue: палитра, код, что вы видите — и, если можно, фото бусины, мулине или детали рядом с белой бумагой при дневном свете. Исправления сначала попадают в MakeBead, затем публикуются здесь.',
    fixLink: 'Сообщить о неверном цвете',
    licenseText:
      'Код (`src/`, `bin/`): MIT. Данные (`data/`): [CC BY 4.0](../LICENSE-DATA.md) — можно использовать где угодно, в том числе коммерчески, с указанием источника. Значения Perler, Hama, Artkal и Nabbi взяты из [maxcleme/beadcolors](https://github.com/maxcleme/beadcolors) и остаются под его лицензией MIT. Пример указания источника:',
    trademarks:
      'Perler, Hama, Artkal, Nabbi, MARD, Miyuki, Delica, DMC, Red Heart, LEGO и Minecraft — товарные знаки их владельцев. Проект с ними не связан и ими не одобрен. НЕ ЯВЛЯЕТСЯ ОФИЦИАЛЬНЫМ ПРОДУКТОМ MINECRAFT. НЕ ОДОБРЕН MOJANG ИЛИ MICROSOFT И НЕ СВЯЗАН С НИМИ.',
    aboutText:
      '[MakeBead](https://makebead.com/ru/) — бесплатный генератор схем для термомозаики, вышивки крестом, алмазной вышивки, ткачества бисером, вязания крючком, мозаик LEGO и пиксель-арта Minecraft на 11 языках. Все палитры отсюда работают в его инструментах.',
  },

  th: {
    name: 'ไทย',
    site: 'th',
    file: 'i18n/README.th.md',
    tagline: (n, p) =>
      `ค่า Hex และ RGB ของ **รหัสสี ${n} สี** ใน ${p} พาเลต — ลูกปัดรีดร้อน ลูกปัดเม็ดทราย ไหมปัก เม็ดคริสตัลครอสติสคริสตัล ไหมพรม LEGO และ Minecraft — พร้อมบอกที่มาของทุกตัวเลขและความน่าเชื่อถือ`,
    intro:
      '[MakeBead](https://makebead.com/th/) เปลี่ยนรูปภาพเป็นแพทเทิร์นลูกปัด ครอสติช และพิกเซลอาร์ต นี่คือพาเลตที่เครื่องมือเหล่านั้นใช้ เผยแพร่ไว้เพื่อให้ผู้ที่สร้างเครื่องมือทำแพทเทิร์น ตัวแปลงสี หรือรายการซื้อวัสดุ ไม่ต้องรวบรวมข้อมูลใหม่ และให้สีที่ผิดถูกพบและแก้ไขได้ในที่เดียว',
    h: {
      palettes: 'พาเลต',
      status: 'ความน่าเชื่อถือของแต่ละพาเลต',
      use: 'วิธีใช้',
      download: 'ดาวน์โหลดหรือลิงก์ไฟล์',
      js: 'JavaScript',
      mcp: 'เซิร์ฟเวอร์ MCP (Claude, Cursor, VS Code…)',
      format: 'รูปแบบข้อมูล',
      sources: 'ตัวเลขมาจากไหน',
      fix: 'เจอสีผิด?',
      license: 'สัญญาอนุญาต',
      about: 'เกี่ยวกับ MakeBead',
    },
    th: ['พาเลต', 'จำนวนสี', 'สถานะ', 'ไฟล์', 'ใช้บน MakeBead'],
    discontinued: (n) => `เลิกผลิต ${n}`,
    kits: 'ชุด MARD ที่วางขาย (24 → 264 สี: แต่ละกล่องมีรหัสอะไรบ้าง) อยู่ใน [`data/sets/mard-kits.json`](../data/sets/mard-kits.json)',
    status: {
      official: 'ผู้ผลิตหรือตัวเกมเผยแพร่ค่าเหล่านี้เอง และค่าของเราตรงกัน',
      measured: 'วัดจากสื่อของผู้ผลิตเองด้วยวิธีที่บันทึกไว้',
      'cross-checked': 'เทียบหลายแหล่งที่เป็นอิสระต่อกัน ตัดสินข้อขัดแย้งด้วยกฎที่เขียนไว้',
      community: 'ผู้ที่ชื่นชอบเก็บค่าจากลูกปัดหรือภาพถ่ายจริง ยังไม่ได้ตรวจสอบโดยอิสระ',
      approximate: 'ตรวจรหัสและชื่อแล้ว สียังไม่ได้ปรับเทียบ',
      generated: 'ไม่ใช่สายผลิตภัณฑ์',
    },
    statusNote:
      'ไม่มีหน้าจอใดแสดงลูกปัดจริงได้ตรงเป๊ะ ผิว แสง และจอภาพล้วนเปลี่ยนสี ใช้ค่า Hex เพื่อเลือกและเปรียบเทียบ แล้วซื้อตามรหัส',
    downloadText: 'ทุกพาเลตมีไฟล์ JSON และ CSV ลิงก์ได้โดยตรงจาก CDN:',
    jsText: 'ค้นหารหัส หาสีที่ใกล้ที่สุด แปลงระหว่างแบรนด์ ไม่มี dependency',
    jsComments: {
      get: 'ใช้ได้ทั้ง "DB10" "DB-010" และ "10"',
      closest: 'ไหม DMC ที่ใกล้สีที่สุด',
      convert: 'Perler P38 → Hama',
    },
    mcpText:
      'ให้ผู้ช่วย AI ใช้พาเลตเป็นเครื่องมือ เพื่อให้ตอบคำถามอย่าง “Perler P38 ตรงกับ Hama เบอร์อะไร” หรือ “ไหม DMC สีไหนใกล้ #E8A0B0 ที่สุด” จากข้อมูลจริง ไม่ใช่จากความจำ',
    mcpOther: 'ไคลเอนต์อื่น (Claude Desktop, Cursor, VS Code):',
    tools: {
      list_palettes: 'ทุกพาเลตพร้อมสถานะ',
      get_color: 'สีหนึ่งสีจากรหัส เขียนแบบไหนก็ได้',
      find_closest: 'สีที่ใกล้ค่า Hex ที่สุด เรียงตาม CIEDE2000',
      convert_color: 'รหัสของแบรนด์หนึ่ง → สีที่ใกล้เคียงในอีกแบรนด์',
      search_colors: 'ค้นหาด้วยชื่อสีหรือรหัส',
    },
    formatText: 'ไฟล์พาเลตแต่ละไฟล์มีคำอธิบาย แหล่งที่มา และสัญญาอนุญาตของตัวเอง:',
    fields: {
      code: 'ตามที่พิมพ์บนถุง หลอด ไจ หรือชิ้นส่วน',
      hex: '`#RRGGBB` ตัวพิมพ์ใหญ่ และ `rgb` เป็น `[r, g, b]`',
      discontinued: 'เป็น `true` เฉพาะสีที่เลิกผลิต (Miyuki Delica)',
      extra:
        'ฟิลด์เฉพาะพาเลต: `sku` (รหัสสินค้า Perler), `glass` (ชนิดแก้ว Delica), `group` `block` `survival` (บล็อก Minecraft), `base` `shade` `buildable` (สีแผนที่ Minecraft)',
    },
    csvText: 'CSV มีสีชุดเดียวกัน หนึ่งสีต่อหนึ่งแถว:',
    sourcesText:
      'แหล่งที่มา วิธีการ และจุดอ่อนที่รู้แล้วของแต่ละพาเลตอยู่ใน [SOURCES.md](../SOURCES.md) (ภาษาอังกฤษ) และในฟิลด์ `notes` ของไฟล์ ตัวอย่างสองเรื่องที่การตรวจพบ: DMC 309 (Rose Dark) ในข้อมูลต้นทางที่ใช้กันทั่วไปเป็นสีเทาอมน้ำตาล แต่ที่นี่เป็นสีแดง และสี Delica ถูกสร้างใหม่จากภาพถ่ายของ Miyuki เอง หลังพบว่ารายการ 39 สีเดิมของ MakeBead เองวาด DB0724 ซึ่งเป็นสีเขียวทึบเป็นสีแดง',
    fixText:
      'เปิด issue โดยระบุพาเลต รหัส และสีที่คุณเห็น — ถ้าได้ แนบภาพถ่ายลูกปัด ไหม หรือตัวต่อ วางข้างกระดาษขาวใต้แสงกลางวัน การแก้ไขจะเข้า MakeBead ก่อน แล้วจึงเผยแพร่ที่นี่',
    fixLink: 'แจ้งสีที่ผิด',
    licenseText:
      'โค้ด (`src/`, `bin/`): MIT ข้อมูล (`data/`): [CC BY 4.0](../LICENSE-DATA.md) — ใช้ได้ทุกที่ รวมถึงเชิงพาณิชย์ โดยให้เครดิต ค่า Perler, Hama, Artkal และ Nabbi มาจาก [maxcleme/beadcolors](https://github.com/maxcleme/beadcolors) และยังอยู่ภายใต้สัญญาอนุญาต MIT ของโปรเจกต์นั้น ตัวอย่างเครดิต:',
    trademarks:
      'Perler, Hama, Artkal, Nabbi, MARD, Miyuki, Delica, DMC, Red Heart, LEGO และ Minecraft เป็นเครื่องหมายการค้าของเจ้าของแต่ละราย โปรเจกต์นี้ไม่ได้เกี่ยวข้องหรือได้รับการรับรองจากรายใด ไม่ใช่ผลิตภัณฑ์ทางการของ MINECRAFT ไม่ได้รับการอนุมัติจากหรือเกี่ยวข้องกับ MOJANG หรือ MICROSOFT',
    aboutText:
      '[MakeBead](https://makebead.com/th/) คือเครื่องมือฟรีสำหรับทำแพทเทิร์นลูกปัดรีดร้อน ครอสติช ครอสติสคริสตัล ลูกปัดทอกี่ โครเชต์ โมเสก LEGO และพิกเซลอาร์ต Minecraft ใน 11 ภาษา ทุกพาเลตที่นี่ใช้งานจริงในเครื่องมือเหล่านั้น',
  },

  'zh-Hans': {
    name: '简体中文',
    site: 'zh-Hans',
    file: 'i18n/README.zh-CN.md',
    tagline: (n, p) =>
      `拼豆、米珠、绣线、钻石画钻、毛线、乐高和我的世界共 **${n} 个色号**（${p} 套色卡）的 Hex 和 RGB 值，每个数字都写明从哪来、可信到什么程度。`,
    intro:
      '[MakeBead](https://makebead.com/zh-Hans/) 能把照片变成拼豆、十字绣和像素画图纸。这里是它的工具在用的色卡。公开出来，是为了做图纸生成器、色号换算或材料清单的人不必再重新收集一遍，也让错的颜色能在一个地方被发现、被改正。',
    h: {
      palettes: '色卡',
      status: '每套色卡可信到什么程度',
      use: '怎么用',
      download: '下载或直接链接文件',
      js: 'JavaScript',
      mcp: 'MCP 服务器（Claude、Cursor、VS Code 等）',
      format: '数据格式',
      sources: '数字从哪来',
      fix: '发现颜色不对？',
      license: '许可',
      about: '关于 MakeBead',
    },
    th: ['色卡', '色数', '状态', '文件', '在 MakeBead 上使用'],
    discontinued: (n) => `其中停产 ${n}`,
    kits: 'MARD 零售套装（24 → 264 色：每一盒包含哪些色号）见 [`data/sets/mard-kits.json`](../data/sets/mard-kits.json)。',
    status: {
      official: '厂商或游戏本身公布了数值，且我们的与之一致',
      measured: '按记录在案的方法，从厂商自己的素材测得',
      'cross-checked': '对比了多个独立来源，分歧按写明的规则裁定',
      community: '由爱好者从实物豆子或照片取色，没有独立核对',
      approximate: '色号和名称已核对，颜色尚未校准',
      generated: '不是某个产品线',
    },
    statusNote:
      '没有哪块屏幕能准确显示实物豆子：表面质感、光线和显示器都会改变它。用 Hex 来挑选和比较，买的时候认色号。',
    downloadText: '每套色卡都有 JSON 和 CSV 两个文件，可以直接从 CDN 链接：',
    jsText: '查色号、找最接近的颜色、跨品牌换算。零依赖。',
    jsComments: {
      get: '"DB10"、"DB-010"、"10" 都能查到',
      closest: '与某个颜色最接近的 DMC 绣线',
      convert: 'Perler P38 → Hama',
    },
    mcpText:
      '把色卡作为工具交给 AI 助手，它回答「Perler P38 换成 Hama 是几号？」「#E8A0B0 最接近哪根 DMC 线？」时就会查数据，而不是凭记忆。',
    mcpOther: '其他客户端（Claude Desktop、Cursor、VS Code）：',
    tools: {
      list_palettes: '所有色卡及其状态',
      get_color: '按色号查一个颜色，各种写法都认',
      find_closest: '与某个 Hex 最接近的颜色，按 CIEDE2000 排序',
      convert_color: '一个品牌的色号 → 另一品牌最接近的颜色',
      search_colors: '按色名或色号搜索',
    },
    formatText: '每个色卡文件都自带说明、来源和许可：',
    fields: {
      code: '印在袋子、管子、线束或零件上的编号',
      hex: '`#RRGGBB`，大写；`rgb` 为 `[r, g, b]`',
      discontinued: '只有停产的颜色才有，值为 `true`（Miyuki Delica）',
      extra:
        '部分色卡特有的字段：`sku`（Perler 货号）、`glass`（Delica 玻璃类型）、`group`、`block`、`survival`（我的世界方块）、`base`、`shade`、`buildable`（我的世界地图色）',
    },
    csvText: 'CSV 里是同样的颜色，每行一个：',
    sourcesText:
      '每套色卡的来源、方法和已知弱点写在 [SOURCES.md](../SOURCES.md)（英文）和文件的 `notes` 字段里。核对中发现的两个例子：DMC 309（Rose Dark）在流传最广的原始数据里是灰褐色，这里是红色；Delica 的颜色是用 Miyuki 官方照片重建的，因为 MakeBead 自己早先的 39 色数据把不透明绿色的 DB0724 画成了红色。',
    fixText:
      '开一个 Issue，写上色卡、色号和你看到的颜色；可以的话，附一张白天光线下、豆子（或线、积木）放在白纸旁的照片。修正会先进入 MakeBead，再在这里重新发布。',
    fixLink: '报告颜色不对',
    licenseText:
      '代码（`src/`、`bin/`）：MIT。数据（`data/`）：[CC BY 4.0](../LICENSE-DATA.md)，任何地方都能用，包括商用，注明出处即可。Perler、Hama、Artkal 和 Nabbi 的数值来自 [maxcleme/beadcolors](https://github.com/maxcleme/beadcolors)，沿用它的 MIT 许可。出处写法示例：',
    trademarks:
      'Perler、Hama、Artkal、Nabbi、MARD、Miyuki、Delica、DMC、Red Heart、LEGO 和 Minecraft 是其各自所有者的商标。本项目与它们均无关联，也未获其认可。本项目不是 Minecraft 官方产品，未经 Mojang 或 Microsoft 批准，也与它们无关。',
    aboutText:
      '[MakeBead](https://makebead.com/zh-Hans/) 是一个免费的图纸生成器，支持拼豆、十字绣、钻石画、串珠织机、钩针、乐高马赛克和我的世界像素画，共 11 种语言。这里的每套色卡都在它的工具里实际使用。',
  },

  'zh-Hant': {
    name: '繁體中文',
    site: 'zh-Hant',
    file: 'i18n/README.zh-TW.md',
    tagline: (n, p) =>
      `拼豆、米珠、繡線、鑽石畫鑽、毛線、樂高與 Minecraft 共 **${n} 個色號**（${p} 套色卡）的 Hex 與 RGB 值，每個數字都寫明從哪裡來、可信到什麼程度。`,
    intro:
      '[MakeBead](https://makebead.com/zh-Hant/) 能把照片變成拼豆、十字繡和像素畫圖紙。這裡是它的工具在用的色卡。公開出來，是為了讓做圖紙產生器、色號換算或材料清單的人不必再重新蒐集一次，也讓錯的顏色能在一個地方被發現、被改正。',
    h: {
      palettes: '色卡',
      status: '每套色卡可信到什麼程度',
      use: '怎麼用',
      download: '下載或直接連結檔案',
      js: 'JavaScript',
      mcp: 'MCP 伺服器（Claude、Cursor、VS Code 等）',
      format: '資料格式',
      sources: '數字從哪裡來',
      fix: '發現顏色不對？',
      license: '授權',
      about: '關於 MakeBead',
    },
    th: ['色卡', '色數', '狀態', '檔案', '在 MakeBead 上使用'],
    discontinued: (n) => `其中停產 ${n}`,
    kits: 'MARD 零售套裝（24 → 264 色：每一盒包含哪些色號）見 [`data/sets/mard-kits.json`](../data/sets/mard-kits.json)。',
    status: {
      official: '廠商或遊戲本身公布了數值，且我們的與之一致',
      measured: '依記錄在案的方法，從廠商自己的素材測得',
      'cross-checked': '比對了多個獨立來源，分歧依寫明的規則裁定',
      community: '由愛好者從實物豆子或照片取色，沒有獨立核對',
      approximate: '色號和名稱已核對，顏色尚未校準',
      generated: '不是某個產品線',
    },
    statusNote:
      '沒有哪塊螢幕能準確顯示實物豆子：表面質感、光線和顯示器都會改變它。用 Hex 來挑選和比較，購買時認色號。',
    downloadText: '每套色卡都有 JSON 和 CSV 兩個檔案，可以直接從 CDN 連結：',
    jsText: '查色號、找最接近的顏色、跨品牌換算。零依賴。',
    jsComments: {
      get: '"DB10"、"DB-010"、"10" 都查得到',
      closest: '與某個顏色最接近的 DMC 繡線',
      convert: 'Perler P38 → Hama',
    },
    mcpText:
      '把色卡作為工具交給 AI 助理，它回答「Perler P38 換成 Hama 是幾號？」「#E8A0B0 最接近哪條 DMC 線？」時就會查資料，而不是憑記憶。',
    mcpOther: '其他用戶端（Claude Desktop、Cursor、VS Code）：',
    tools: {
      list_palettes: '所有色卡及其狀態',
      get_color: '依色號查一個顏色，各種寫法都認得',
      find_closest: '與某個 Hex 最接近的顏色，依 CIEDE2000 排序',
      convert_color: '一個品牌的色號 → 另一品牌最接近的顏色',
      search_colors: '依色名或色號搜尋',
    },
    formatText: '每個色卡檔案都附有說明、來源和授權：',
    fields: {
      code: '印在袋子、管子、線束或零件上的編號',
      hex: '`#RRGGBB`，大寫；`rgb` 為 `[r, g, b]`',
      discontinued: '只有停產的顏色才有，值為 `true`（Miyuki Delica）',
      extra:
        '部分色卡特有的欄位：`sku`（Perler 貨號）、`glass`（Delica 玻璃類型）、`group`、`block`、`survival`（Minecraft 方塊）、`base`、`shade`、`buildable`（Minecraft 地圖色）',
    },
    csvText: 'CSV 裡是同樣的顏色，每列一個：',
    sourcesText:
      '每套色卡的來源、方法和已知弱點寫在 [SOURCES.md](../SOURCES.md)（英文）和檔案的 `notes` 欄位裡。核對中發現的兩個例子：DMC 309（Rose Dark）在流傳最廣的原始資料裡是灰褐色，這裡是紅色；Delica 的顏色是用 Miyuki 官方照片重建的，因為 MakeBead 自己早先的 39 色資料把不透明綠色的 DB0724 畫成了紅色。',
    fixText:
      '開一個 Issue，寫上色卡、色號和你看到的顏色；可以的話，附一張白天光線下、豆子（或線、積木）放在白紙旁的照片。修正會先進入 MakeBead，再於此處重新發布。',
    fixLink: '回報顏色不對',
    licenseText:
      '程式碼（`src/`、`bin/`）：MIT。資料（`data/`）：[CC BY 4.0](../LICENSE-DATA.md)，任何地方都能用，包括商用，註明出處即可。Perler、Hama、Artkal 和 Nabbi 的數值來自 [maxcleme/beadcolors](https://github.com/maxcleme/beadcolors)，沿用其 MIT 授權。出處寫法範例：',
    trademarks:
      'Perler、Hama、Artkal、Nabbi、MARD、Miyuki、Delica、DMC、Red Heart、LEGO 和 Minecraft 是其各自所有者的商標。本專案與它們均無關聯，也未獲其認可。本專案不是 Minecraft 官方產品，未經 Mojang 或 Microsoft 核准，也與它們無關。',
    aboutText:
      '[MakeBead](https://makebead.com/zh-Hant/) 是免費的圖紙產生器，支援拼豆、十字繡、鑽石畫、串珠織機、鉤針、樂高馬賽克和 Minecraft 像素畫，共 11 種語言。這裡的每套色卡都在它的工具裡實際使用。',
  },

  'pt-BR': {
    name: 'Português (Brasil)',
    site: 'pt-BR',
    file: 'i18n/README.pt-BR.md',
    tagline: (n, p) =>
      `Valores hex e RGB de **${n} códigos de cor** em ${p} paletas — contas de fusão (hama beads), miçangas, linhas de bordado, pedrinhas de pintura com diamantes, lã, LEGO e Minecraft — com a origem de cada número e quanto confiar nele.`,
    intro:
      'O [MakeBead](https://makebead.com/pt-BR/) transforma fotos em gráficos de hama beads, ponto cruz e pixel art. Estas são as paletas que as ferramentas dele usam, publicadas para que ninguém precise reuni-las de novo para um gerador de gráficos, um conversor de cores ou uma lista de compras, e para que uma cor errada seja encontrada e corrigida em um só lugar.',
    h: {
      palettes: 'Paletas',
      status: 'Quanto confiar em cada paleta',
      use: 'Como usar',
      download: 'Baixar ou linkar os arquivos',
      js: 'JavaScript',
      mcp: 'Servidor MCP (Claude, Cursor, VS Code…)',
      format: 'Formato dos dados',
      sources: 'De onde vêm os números',
      fix: 'Achou uma cor errada?',
      license: 'Licença',
      about: 'Sobre o MakeBead',
    },
    th: ['Paleta', 'Cores', 'Status', 'Arquivos', 'No MakeBead'],
    discontinued: (n) => `${n} descontinuadas`,
    kits: 'As caixas MARD vendidas no varejo (24 → 264 cores: quais códigos vêm em cada caixa) estão em [`data/sets/mard-kits.json`](../data/sets/mard-kits.json).',
    status: {
      official: 'o fabricante ou o jogo publica esses valores, e os nossos batem com eles',
      measured: 'medidos no material do próprio fabricante por um método documentado',
      'cross-checked': 'várias fontes independentes comparadas; conflitos decididos por uma regra escrita',
      community: 'coletados por hobbistas de contas ou fotos reais, sem verificação independente',
      approximate: 'códigos e nomes conferidos, cores ainda não calibradas',
      generated: 'não é uma linha de produtos',
    },
    statusNote:
      'Nenhuma tela mostra uma conta real com exatidão: acabamento, luz e monitor mudam a cor. Use o hex para escolher e comparar, e compre pelo código.',
    downloadText: 'Cada paleta vem em JSON e em CSV. Linke direto de um CDN:',
    jsText: 'Consultar códigos, achar a cor mais próxima, converter entre marcas. Sem dependências.',
    jsComments: {
      get: '"DB10", "DB-010" e "10" funcionam',
      closest: 'a linha DMC mais próxima de uma cor',
      convert: 'Perler P38 → Hama',
    },
    mcpText:
      'Entregue as paletas a um assistente de IA como ferramentas, para que ele responda “qual Hama equivale ao Perler P38?” ou “qual linha DMC é mais próxima de #E8A0B0?” com os dados, e não de memória.',
    mcpOther: 'Outros clientes (Claude Desktop, Cursor, VS Code):',
    tools: {
      list_palettes: 'todas as paletas, com o status',
      get_color: 'uma cor pelo código, escrito do jeito que as pessoas escrevem',
      find_closest: 'as cores mais próximas de um hex, ordenadas por CIEDE2000',
      convert_color: 'um código de uma marca → os equivalentes mais próximos em outra',
      search_colors: 'busca por nome ou código',
    },
    formatText: 'Cada arquivo de paleta traz a própria descrição, fontes e licença:',
    fields: {
      code: 'como vem impresso no saquinho, tubo, meada ou peça',
      hex: '`#RRGGBB` em maiúsculas, com `rgb` como `[r, g, b]`',
      discontinued: '`true` só em cores que saíram de linha (Miyuki Delica)',
      extra:
        'campos específicos de algumas paletas: `sku` (código Perler), `glass` (tipo de vidro Delica), `group`, `block`, `survival` (blocos do Minecraft), `base`, `shade`, `buildable` (cores de mapa do Minecraft)',
    },
    csvText: 'O CSV tem as mesmas cores, uma por linha:',
    sourcesText:
      'As fontes, o método e os pontos fracos conhecidos de cada paleta estão em [SOURCES.md](../SOURCES.md) (em inglês) e no campo `notes` do arquivo. Dois exemplos do que a checagem encontrou: DMC 309 (Rose Dark) é cinza-amarronzado nos dados de origem mais comuns e vermelho aqui, e as cores Delica foram refeitas a partir das fotos da própria Miyuki depois que a antiga lista de 39 cores do próprio MakeBead desenhava em vermelho o DB0724, um verde opaco.',
    fixText:
      'Abra uma issue com a paleta, o código e o que você vê — se puder, com uma foto à luz do dia da conta, linha ou peça ao lado de um papel branco. As correções entram primeiro no MakeBead e depois são republicadas aqui.',
    fixLink: 'Informar uma cor errada',
    licenseText:
      'Código (`src/`, `bin/`): MIT. Dados (`data/`): [CC BY 4.0](../LICENSE-DATA.md) — use em qualquer lugar, inclusive comercialmente, dando o crédito. Os valores de Perler, Hama, Artkal e Nabbi vêm do [maxcleme/beadcolors](https://github.com/maxcleme/beadcolors) e continuam sob a licença MIT dele. Crédito sugerido:',
    trademarks:
      'Perler, Hama, Artkal, Nabbi, MARD, Miyuki, Delica, DMC, Red Heart, LEGO e Minecraft são marcas de seus donos. Este projeto não é afiliado a nenhum deles nem endossado por eles. NÃO É UM PRODUTO OFICIAL DO MINECRAFT. NÃO É APROVADO PELA MOJANG OU MICROSOFT NEM ASSOCIADO A ELAS.',
    aboutText:
      'O [MakeBead](https://makebead.com/pt-BR/) é um gerador de gráficos gratuito para hama beads, ponto cruz, pintura com diamantes, tear de miçangas, crochê, mosaicos LEGO e pixel art de Minecraft, em 11 idiomas. Todas as paletas daqui estão em uso nas ferramentas dele.',
  },
};
