#!/usr/bin/env node
// For every palette's MakeBead page, find which language versions exist and
// what each is called, so the translated READMEs link to a page in the
// reader's language (or to the English one when there is none). A language
// counts only when the English page declares it as an hreflang alternate: some
// locale URLs answer 200 with the English body, and those are not declared.
//
//   node scripts/fetch-page-titles.mjs   → scripts/readme/pages.json

import { writeFileSync } from 'node:fs';
import { PALETTES } from './palettes.meta.mjs';

export const LOCALES = ['en', 'de', 'ja', 'ko', 'fr', 'es', 'ru', 'th', 'zh-Hans', 'zh-Hant', 'pt-BR'];

const decode = (s) =>
  s
    .replace(/&amp;/g, '&')
    .replace(/&#39;|&#x27;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>');

async function get(url) {
  const res = await fetch(url, { redirect: 'manual', headers: { 'user-agent': 'craft-color-codes readme builder' } });
  return res.status === 200 ? res.text() : null;
}

function label(html) {
  const h1 = /<h1[^>]*>([\s\S]*?)<\/h1>/.exec(html)?.[1];
  const title = /<title>([^<]*)<\/title>/.exec(html)?.[1];
  const text = decode((h1 ?? title ?? '').replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim());
  // "Free LEGO Mosaic Maker — Build Art from Any Photo" → "Free LEGO Mosaic Maker"
  return text.replace(/\s*[|—–]\s*MakeBead\s*$/i, '').replace(/\s+[—–]\s+.*$/, '');
}

const pages = {};
for (const path of [...new Set(PALETTES.map((p) => new URL(p.makebead).pathname))]) {
  pages[path] = {};
  const en = await get(`https://makebead.com${path}`);
  if (!en) throw new Error(`https://makebead.com${path} is not 200`);
  const declared = new Set(
    [...en.matchAll(/<link[^>]+rel="alternate"[^>]+hreflang="([^"]+)"/g)].map((m) => m[1]),
  );
  await Promise.all(
    LOCALES.map(async (loc) => {
      if (loc !== 'en' && !declared.has(loc)) return;
      const url = `https://makebead.com${loc === 'en' ? '' : `/${loc}`}${path}`;
      const html = loc === 'en' ? en : await get(url);
      if (html) pages[path][loc] = { url, label: label(html) };
    }),
  );
  console.log(path.padEnd(36), Object.keys(pages[path]).join(' '));
}
writeFileSync(new URL('./readme/pages.json', import.meta.url), JSON.stringify(pages, null, 2) + '\n');
