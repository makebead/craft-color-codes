#!/usr/bin/env node
// Write README.md, i18n/README.*.md and SOURCES.md from data/index.json,
// scripts/readme/strings.mjs and scripts/readme/pages.json.
//
//   npm run readme
//
// The code samples print real results: they are computed here, from the data.

import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { LANGS } from './readme/strings.mjs';
import { getColor, nearest, convert } from '../src/index.js';

const root = new URL('../', import.meta.url);
const read = (p) => JSON.parse(readFileSync(new URL(p, root), 'utf8'));
const index = read('data/index.json');
const pages = read('scripts/readme/pages.json');

const REPO = 'makebead/craft-color-codes';
const CREDIT = 'Color data: craft-color-codes by MakeBead (https://makebead.com)';

const fmtColor = (c) =>
  `{ code: '${c.code}', name: '${c.name}', hex: '${c.hex}'${c.deltaE !== undefined ? `, deltaE: ${c.deltaE}` : ''} }`;

function samples(t) {
  const delica = getColor('delica', 'DB10');
  const [dmc] = nearest('#E8A0B0', 'dmc', { limit: 1 });
  const conv = convert('perler', 'P38', 'hama', { limit: 1 });
  return [
    "import { getColor, nearest, convert } from 'craft-color-codes';",
    '',
    `getColor('delica', 'DB10'); // ${t.jsComments.get}`,
    `// → ${fmtColor(delica)}`,
    '',
    `nearest('#E8A0B0', 'dmc', { limit: 3 }); // ${t.jsComments.closest}`,
    `// → [${fmtColor(dmc)}, …]`,
    '',
    `convert('perler', 'P38', 'hama'); // ${t.jsComments.convert}`,
    `// → { from: { code: 'P38', name: '${conv.from.name}', … }, matches: [${fmtColor(conv.matches[0])}, …] }`,
  ].join('\n');
}

function pageLink(lang, makebeadUrl) {
  const path = new URL(makebeadUrl).pathname;
  const page = pages[path]?.[lang.site] ?? pages[path]?.en;
  return page ? `[${page.label}](${page.url})` : `[makebead.com](${makebeadUrl})`;
}

function build(key) {
  const t = LANGS[key];
  const up = key === 'en' ? '' : '../';
  const num = (n) => n.toLocaleString(key === 'en' ? 'en-US' : key);
  const out = [];

  out.push('# Craft Color Codes', '');
  out.push(
    `[![npm](https://img.shields.io/npm/v/craft-color-codes)](https://www.npmjs.com/package/craft-color-codes) ` +
      `[![data: CC BY 4.0](https://img.shields.io/badge/data-CC%20BY%204.0-blue)](${up}LICENSE-DATA.md) ` +
      `[![code: MIT](https://img.shields.io/badge/code-MIT-green)](${up}LICENSE)`,
    '',
  );
  out.push(
    Object.entries(LANGS)
      .map(([k, l]) =>
        k === key ? `**${l.name}**` : `[${l.name}](${key !== 'en' && k !== 'en' ? l.file.replace('i18n/', '') : up + l.file})`,
      )
      .join(' · '),
    '',
  );
  out.push(t.tagline(num(index.total), index.palettes.length), '');
  out.push(t.intro, '');

  out.push(`## ${t.h.palettes}`, '');
  out.push(`| ${t.th.join(' | ')} |`, `| ${t.th.map((_, i) => (i === 1 ? '--:' : '---')).join(' | ')} |`);
  for (const p of index.palettes) {
    const count = p.discontinued ? `${num(p.count)} (${t.discontinued(p.discontinued)})` : num(p.count);
    out.push(
      `| ${p.product} | ${count} | \`${p.status}\` | [JSON](${up}${p.json}) · [CSV](${up}${p.csv}) | ${pageLink(t, p.makebead)} |`,
    );
  }
  out.push('', t.kits, '');

  out.push(`## ${t.h.status}`, '');
  for (const [k, v] of Object.entries(t.status)) out.push(`- \`${k}\` — ${v}`);
  out.push('', t.statusNote, '');

  out.push(`## ${t.h.use}`, '');
  out.push(`### ${t.h.download}`, '', t.downloadText, '');
  out.push(
    '```',
    `https://cdn.jsdelivr.net/gh/${REPO}@main/data/json/dmc-floss.json`,
    `https://cdn.jsdelivr.net/npm/craft-color-codes@1/data/csv/miyuki-delica.csv`,
    '```',
    '',
  );
  out.push(`### ${t.h.js}`, '', t.jsText, '');
  out.push('```sh', 'npm install craft-color-codes', '```', '');
  out.push('```js', samples(t), '```', '');
  out.push(`### ${t.h.mcp}`, '', t.mcpText, '');
  out.push('Claude Code:', '', '```sh', 'claude mcp add craft-color-codes -- npx -y craft-color-codes', '```', '');
  out.push(t.mcpOther, '');
  out.push(
    '```json',
    JSON.stringify({ mcpServers: { 'craft-color-codes': { command: 'npx', args: ['-y', 'craft-color-codes'] } } }, null, 2),
    '```',
    '',
  );
  for (const [k, v] of Object.entries(t.tools)) out.push(`- \`${k}\` — ${v}`);
  out.push('');

  out.push(`## ${t.h.format}`, '', t.formatText, '');
  const delica = read('data/json/miyuki-delica.json');
  const db10 = delica.colors.find((c) => c.code === 'DB0010');
  out.push(
    '```jsonc',
    '{',
    `  "id": "miyuki-delica",`,
    `  "brand": "Miyuki",`,
    `  "product": "${delica.product}",`,
    `  "count": ${delica.count},`,
    `  "status": "${delica.status}",`,
    `  "notes": "…", "sources": [ … ], "license": "${delica.license}",`,
    `  "colors": [`,
    `    ${JSON.stringify(db10)},`,
    '    …',
    '  ]',
    '}',
    '```',
    '',
  );
  out.push(`- \`code\` — ${t.fields.code}`, `- \`hex\` — ${t.fields.hex}`);
  out.push(`- \`discontinued\` — ${t.fields.discontinued}`, `- ${t.fields.extra}`, '');
  const csv = readFileSync(new URL('data/csv/miyuki-delica.csv', root), 'utf8').split('\n');
  out.push(t.csvText, '', '```csv', csv[0], csv.find((l) => l.startsWith('DB0010,')), '```', '');

  out.push(`## ${t.h.sources}`, '', t.sourcesText, '');
  out.push(`## ${t.h.fix}`, '', t.fixText, '');
  out.push(`→ [${t.fixLink}](https://github.com/${REPO}/issues/new?template=wrong-color.yml)`, '');
  out.push(`## ${t.h.license}`, '', t.licenseText, '', '```', CREDIT, '```', '', `<sub>${t.trademarks}</sub>`, '');
  out.push(`## ${t.h.about}`, '', t.aboutText, '');
  return out.join('\n');
}

mkdirSync(new URL('i18n/', root), { recursive: true });
for (const key of Object.keys(LANGS)) {
  writeFileSync(new URL(LANGS[key].file, root), build(key));
  console.log(LANGS[key].file);
}

// SOURCES.md — English only: it is the reference the translations link to.
const src = ['# Sources', ''];
src.push(
  'Where every palette’s numbers come from, how they were checked, and what is known to be weak. The same text is in each palette file’s `notes` and `sources`.',
  '',
);
for (const p of index.palettes) {
  src.push(`## ${p.product} — \`${p.id}\``, '');
  src.push(`**Status:** \`${p.status}\` · **Colors:** ${p.count.toLocaleString('en-US')}${p.discontinued ? ` (${p.discontinued} discontinued)` : ''} · **License:** ${p.license} · **Used on:** [${new URL(p.makebead).pathname === '/' ? 'makebead.com' : 'makebead.com' + new URL(p.makebead).pathname}](${p.makebead})`, '');
  src.push(p.notes, '');
  for (const s of p.sources) src.push(`- ${s.url.startsWith('./') ? `\`${s.name}\`` : `[${s.name}](${s.url})`}`);
  src.push('');
}
src.push('## Third-party license: maxcleme/beadcolors', '');
src.push('The `perler-midi`, `hama-midi`, `artkal-s` and `nabbi` values are taken from maxcleme/beadcolors under this license:', '');
src.push('```', readFileSync(new URL('scripts/licenses/beadcolors-MIT.txt', root), 'utf8').trim(), '```', '');
writeFileSync(new URL('SOURCES.md', root), src.join('\n'));
console.log('SOURCES.md');
