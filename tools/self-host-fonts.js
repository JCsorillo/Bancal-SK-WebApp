#!/usr/bin/env node
/* Downloads Poppins from Google Fonts into assets/fonts/ so visitors do not contact Google.
   Needs internet. Run once:  node tools/self-host-fonts.js   then:  node tools/build.js
   (Not tested by the author offline. If it fails, nothing is changed. Delete assets/fonts to undo.) */
'use strict';
const fs = require('fs'), path = require('path');
const ROOT = path.resolve(__dirname, '..'), OUT = path.join(ROOT, 'assets', 'fonts');
const CSS_URL = 'https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,500;0,600;0,700;0,800;0,900;1,700;1,800;1,900&family=Caveat:wght@600&display=swap';
(async () => {
  const css = await (await fetch(CSS_URL, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/126 Safari/537.36' } })).text();
  fs.mkdirSync(OUT, { recursive: true });
  const urls = [...new Set([...css.matchAll(/url\((https:[^)]+\.woff2)\)/g)].map(m => m[1]))];
  if (!urls.length) throw new Error('No font files found in the Google response');
  let out = css;
  for (const u of urls) {
    const name = u.split('/').slice(-2).join('-').replace(/[^a-z0-9.-]/gi, '');
    fs.writeFileSync(path.join(OUT, name), Buffer.from(await (await fetch(u)).arrayBuffer()));
    out = out.split(u).join(name);
  }
  fs.writeFileSync(path.join(OUT, 'poppins.css'), out);
  console.log('Saved', urls.length, 'font files to assets/fonts. Now run: node tools/build.js');
})().catch(e => { console.error('Failed:', e.message); process.exit(1); });
