# Craft Color Codes

[![npm](https://img.shields.io/npm/v/craft-color-codes)](https://www.npmjs.com/package/craft-color-codes) [![data: CC BY 4.0](https://img.shields.io/badge/data-CC%20BY%204.0-blue)](../LICENSE-DATA.md) [![code: MIT](https://img.shields.io/badge/code-MIT-green)](../LICENSE)

[English](../README.md) · [Deutsch](README.de.md) · [日本語](README.ja.md) · [한국어](README.ko.md) · [Français](README.fr.md) · [Español](README.es.md) · [Русский](README.ru.md) · [ไทย](README.th.md) · [简体中文](README.zh-CN.md) · [繁體中文](README.zh-TW.md) · **Português (Brasil)**

Valores hex e RGB de **3.689 códigos de cor** em 15 paletas — contas de fusão (hama beads), miçangas, linhas de bordado, pedrinhas de pintura com diamantes, lã, LEGO e Minecraft — com a origem de cada número e quanto confiar nele.

O [MakeBead](https://makebead.com/pt-BR/) transforma fotos em gráficos de hama beads, ponto cruz e pixel art. Estas são as paletas que as ferramentas dele usam, publicadas para que ninguém precise reuni-las de novo para um gerador de gráficos, um conversor de cores ou uma lista de compras, e para que uma cor errada seja encontrada e corrigida em um só lugar.

## Paletas

| Paleta | Cores | Status | Arquivos | No MakeBead |
| --- | --: | --- | --- | --- |
| Perler Beads (Midi, 5 mm) | 103 | `community` | [JSON](../data/json/perler-midi.json) · [CSV](../data/csv/perler-midi.csv) | [Criador de Padrões Perler Grátis](https://makebead.com/pt-BR/) |
| Hama Beads (Midi, 5 mm) | 92 | `community` | [JSON](../data/json/hama-midi.json) · [CSV](../data/csv/hama-midi.csv) | [Criador gratuito de padrões Hama](https://makebead.com/pt-BR/hama-bead-pattern-maker/) |
| Artkal S series (Midi, 5 mm) | 199 | `community` | [JSON](../data/json/artkal-s.json) · [CSV](../data/csv/artkal-s.csv) | [Criador gratuito de padrões Artkal](https://makebead.com/pt-BR/artkal-bead-pattern-maker/) |
| Nabbi BioBeads (Midi) | 30 | `community` | [JSON](../data/json/nabbi.json) · [CSV](../data/csv/nabbi.csv) | [Free Fuse Bead Pattern Maker](https://makebead.com/fuse-bead-pattern-maker/) |
| MARD Beads (Midi, 5 mm) — 185 colors | 185 | `community` | [JSON](../data/json/mard-185.json) · [CSV](../data/csv/mard-185.csv) | [Gerador de padrões de miçangas MARD grátis](https://makebead.com/pt-BR/mard-bead-pattern-maker/) |
| MARD Beads (Midi, 5 mm) — 221 colors | 221 | `community` | [JSON](../data/json/mard-221.json) · [CSV](../data/csv/mard-221.csv) | [Gerador de padrões de miçangas MARD grátis](https://makebead.com/pt-BR/mard-bead-pattern-maker/) |
| MARD Beads (Midi, 5 mm) — 291 colors | 291 | `community` | [JSON](../data/json/mard-291.json) · [CSV](../data/csv/mard-291.csv) | [Gerador de padrões de miçangas MARD grátis](https://makebead.com/pt-BR/mard-bead-pattern-maker/) |
| Miyuki Delica 11/0 (DB) | 1.288 (76 descontinuadas) | `measured` | [JSON](../data/json/miyuki-delica.json) · [CSV](../data/csv/miyuki-delica.csv) | [Gerador Grátis de Padrões para Tear de Miçangas](https://makebead.com/pt-BR/bead-loom-pattern-maker/) |
| DMC Six-Strand Embroidery Floss (Mouliné Spécial, art. 117) | 489 | `cross-checked` | [JSON](../data/json/dmc-floss.json) · [CSV](../data/csv/dmc-floss.csv) | [DMC Color Chart](https://makebead.com/dmc-color-chart/) |
| DMC-coded diamond painting drills | 154 | `cross-checked` | [JSON](../data/json/dmc-diamond.json) · [CSV](../data/csv/dmc-diamond.csv) | [Criador Grátis de Pintura de Diamantes Personalizada](https://makebead.com/pt-BR/diamond-painting-pattern-maker/) |
| LEGO brick colors (mosaic palette) | 40 | `approximate` | [JSON](../data/json/lego.json) · [CSV](../data/csv/lego.csv) | [Criador de Mosaico LEGO Grátis](https://makebead.com/pt-BR/lego-mosaic-maker/) |
| Minecraft blocks for pixel art | 53 | `approximate` | [JSON](../data/json/minecraft-blocks.json) · [CSV](../data/csv/minecraft-blocks.csv) | [Gerador de Pixel Art para Minecraft Grátis](https://makebead.com/pt-BR/minecraft-pixel-art-generator/) |
| Minecraft map colors (Java Edition) | 244 | `official` | [JSON](../data/json/minecraft-map.json) · [CSV](../data/csv/minecraft-map.csv) | [Minecraft Map Art Generator](https://makebead.com/minecraft-map-art-generator/) |
| Red Heart Super Saver (worsted) | 44 | `approximate` | [JSON](../data/json/red-heart-super-saver.json) · [CSV](../data/csv/red-heart-super-saver.csv) | [Gerador de Gráfico de Crochê Grátis](https://makebead.com/pt-BR/crochet-pattern-maker/) |
| Pixel art 256 | 256 | `generated` | [JSON](../data/json/pixel-art-256.json) · [CSV](../data/csv/pixel-art-256.csv) | [Conversor de Pixel Art Grátis](https://makebead.com/pt-BR/pixel-art-converter/) |

As caixas MARD vendidas no varejo (24 → 264 cores: quais códigos vêm em cada caixa) estão em [`data/sets/mard-kits.json`](../data/sets/mard-kits.json).

## Quanto confiar em cada paleta

- `official` — o fabricante ou o jogo publica esses valores, e os nossos batem com eles
- `measured` — medidos no material do próprio fabricante por um método documentado
- `cross-checked` — várias fontes independentes comparadas; conflitos decididos por uma regra escrita
- `community` — coletados por hobbistas de contas ou fotos reais, sem verificação independente
- `approximate` — códigos e nomes conferidos, cores ainda não calibradas
- `generated` — não é uma linha de produtos

Nenhuma tela mostra uma conta real com exatidão: acabamento, luz e monitor mudam a cor. Use o hex para escolher e comparar, e compre pelo código.

## Como usar

### Baixar ou linkar os arquivos

Cada paleta vem em JSON e em CSV. Linke direto de um CDN:

```
https://cdn.jsdelivr.net/gh/makebead/craft-color-codes@main/data/json/dmc-floss.json
https://cdn.jsdelivr.net/npm/craft-color-codes@1/data/csv/miyuki-delica.csv
```

### JavaScript

Consultar códigos, achar a cor mais próxima, converter entre marcas. Sem dependências.

```sh
npm install craft-color-codes
```

```js
import { getColor, nearest, convert } from 'craft-color-codes';

getColor('delica', 'DB10'); // "DB10", "DB-010" e "10" funcionam
// → { code: 'DB0010', name: 'Opaque Black', hex: '#131313' }

nearest('#E8A0B0', 'dmc', { limit: 3 }); // a linha DMC mais próxima de uma cor
// → [{ code: '3354', name: 'Dusty Rose Light', hex: '#E4A6AC', deltaE: 3.62 }, …]

convert('perler', 'P38', 'hama'); // Perler P38 → Hama
// → { from: { code: 'P38', name: 'Magenta', … }, matches: [{ code: 'H32', name: 'Neon Fuchsia', hex: '#FF208D', deltaE: 4.81 }, …] }
```

### Servidor MCP (Claude, Cursor, VS Code…)

Entregue as paletas a um assistente de IA como ferramentas, para que ele responda “qual Hama equivale ao Perler P38?” ou “qual linha DMC é mais próxima de #E8A0B0?” com os dados, e não de memória.

Claude Code:

```sh
claude mcp add craft-color-codes -- npx -y craft-color-codes
```

Outros clientes (Claude Desktop, Cursor, VS Code):

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

- `list_palettes` — todas as paletas, com o status
- `get_color` — uma cor pelo código, escrito do jeito que as pessoas escrevem
- `find_closest` — as cores mais próximas de um hex, ordenadas por CIEDE2000
- `convert_color` — um código de uma marca → os equivalentes mais próximos em outra
- `search_colors` — busca por nome ou código

## Formato dos dados

Cada arquivo de paleta traz a própria descrição, fontes e licença:

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

- `code` — como vem impresso no saquinho, tubo, meada ou peça
- `hex` — `#RRGGBB` em maiúsculas, com `rgb` como `[r, g, b]`
- `discontinued` — `true` só em cores que saíram de linha (Miyuki Delica)
- campos específicos de algumas paletas: `sku` (código Perler), `glass` (tipo de vidro Delica), `group`, `block`, `survival` (blocos do Minecraft), `base`, `shade`, `buildable` (cores de mapa do Minecraft)

O CSV tem as mesmas cores, uma por linha:

```csv
code,name,hex,r,g,b,discontinued,glass
DB0010,Opaque Black,#131313,19,19,19,false,opaque
```

## De onde vêm os números

As fontes, o método e os pontos fracos conhecidos de cada paleta estão em [SOURCES.md](../SOURCES.md) (em inglês) e no campo `notes` do arquivo. Dois exemplos do que a checagem encontrou: DMC 309 (Rose Dark) é cinza-amarronzado nos dados de origem mais comuns e vermelho aqui, e as cores Delica foram refeitas a partir das fotos da própria Miyuki depois que a antiga lista de 39 cores do próprio MakeBead desenhava em vermelho o DB0724, um verde opaco.

## Achou uma cor errada?

Abra uma issue com a paleta, o código e o que você vê — se puder, com uma foto à luz do dia da conta, linha ou peça ao lado de um papel branco. As correções entram primeiro no MakeBead e depois são republicadas aqui.

→ [Informar uma cor errada](https://github.com/makebead/craft-color-codes/issues/new?template=wrong-color.yml)

## Licença

Código (`src/`, `bin/`): MIT. Dados (`data/`): [CC BY 4.0](../LICENSE-DATA.md) — use em qualquer lugar, inclusive comercialmente, dando o crédito. Os valores de Perler, Hama, Artkal e Nabbi vêm do [maxcleme/beadcolors](https://github.com/maxcleme/beadcolors) e continuam sob a licença MIT dele. Crédito sugerido:

```
Color data: craft-color-codes by MakeBead (https://makebead.com)
```

<sub>Perler, Hama, Artkal, Nabbi, MARD, Miyuki, Delica, DMC, Red Heart, LEGO e Minecraft são marcas de seus donos. Este projeto não é afiliado a nenhum deles nem endossado por eles. NÃO É UM PRODUTO OFICIAL DO MINECRAFT. NÃO É APROVADO PELA MOJANG OU MICROSOFT NEM ASSOCIADO A ELAS.</sub>

## Sobre o MakeBead

O [MakeBead](https://makebead.com/pt-BR/) é um gerador de gráficos gratuito para hama beads, ponto cruz, pintura com diamantes, tear de miçangas, crochê, mosaicos LEGO e pixel art de Minecraft, em 11 idiomas. Todas as paletas daqui estão em uso nas ferramentas dele.
