# SK Bancal community website v1.7.0

Static site for the Sangguniang Kabataan of Barangay Bancal, Carles, Iloilo. HTML, CSS and vanilla JavaScript. No framework, no database. Hosts on Hostinger, Vercel, Netlify or Cloudflare Pages.

## Run it
Open `index.html` through a local server (VS Code "Live Server") or upload the folder to your host. Opening the file directly also works.

## How pages are made
Pages are generated from `src/` and `assets/js/data.js` by one script. After you change content, run:

    node tools/build.js

(Node 16 or newer. No installs.) It rewrites the page files, one page per report, sitemap.xml, robots.txt, sw.js and the security files. Commit the results.

- Content (reports, projects, hotlines, services, officers, translations): `assets/js/data.js`
- Page layouts: `src/pages/*.html`, shared header/footer/dialogs: `src/parts/`
- Privacy, Terms, Legal text: `src/legal/`
- Site settings (domain, version, links): `tools/site.json`

## First-time setup
1. `node set-domain.js https://yourdomain.com`
2. Follow `SEO-SETUP.md` (Google Search Console).
3. Optional shared counters and hearts: `SETUP-counters.md`.
4. Optional analytics: put a Cloudflare Web Analytics token in `assets/js/config.js` (`cfBeacon`).
5. Optional self-hosted font: `node tools/self-host-fonts.js` (needs internet, run it once, then `node tools/build.js`).

## Add things
- Announcement bar (all pages): set `window.ANNOUNCEMENT` in `assets/js/data.js`.
- Events: add to `window.EVENTS` (the Events page is hidden from Google until there is one).
- Documents (PDF): put the file in `assets/docs/` and add it to `window.DOCUMENTS`.
- New report: add the poster to `assets/img/posters/`, then add an entry to `window.ARCHIVE` (and its `POSTS` line, see the examples at the end of data.js), then run the build.

## Security
- `.htaccess` (Hostinger/Apache/LiteSpeed), `vercel.json` (Vercel) and `_headers` (Netlify, Cloudflare Pages) all send the same headers: Content-Security-Policy, HSTS, no-sniff, frame blocking, Referrer and Permissions policy. Only the file for your host is used.
- `src/`, `tools/`, `apps-script/` and `.md` files are blocked from public access on Apache and excluded on Vercel.
- Turn on two-factor sign-in for GitHub, your host and your domain registrar, and turn on domain auto-renew.
- Never commit passwords or keys. The Apps Script URL is the only external endpoint and it holds no secrets.
- `/.well-known/security.txt` lists where to report a problem.

## Credits
Design and code by Jolan Clark Sorillo. Posters, photos and the SK logo belong to the Sangguniang Kabataan of Barangay Bancal. This is a community information site, not an official government website.


## Publishing the budget (Transparency page)

Open assets/js/data.js and find `window.BUDGET`. When the SK releases its figures, fill it in:

```js
window.BUDGET = {
  year: 2026, asOf: 'December 2026',
  allocation: 1500000,                       // total SK budget in pesos
  items: [ { label: 'Sports and recreation', planned: 400000, spent: 150000 } ],
  docs:  [ { label: 'ABYIP 2026 (PDF)', url: 'https://...' } ]
};
```

Then run `node tools/build.js`. Leave `allocation: null` to keep the "not yet published" message. Only publish numbers the SK Chair and Treasurer have approved.
