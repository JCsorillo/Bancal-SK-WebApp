#!/usr/bin/env node
/* SK Bancal site builder. Run from the project folder:  node tools/build.js
   Reads  assets/js/data.js, src/, tools/site.json
   Writes every page (*.html), sitemap.xml, robots.txt, sw.js, manifest, security headers.
   No dependencies. Only Node 16+ is needed. */
'use strict';
const fs = require('fs'), path = require('path');
const ROOT = path.resolve(__dirname, '..');
const rd = p => fs.readFileSync(path.join(ROOT, p), 'utf8');
const wr = (p, s) => { fs.mkdirSync(path.dirname(path.join(ROOT, p)), { recursive: true }); fs.writeFileSync(path.join(ROOT, p), s); };
const exists = p => fs.existsSync(path.join(ROOT, p));

const SITE = JSON.parse(rd('tools/site.json'));
const argDomain = (process.argv.find(a => /^https:\/\//.test(a)) || '').replace(/\/+$/, '');
if (argDomain) { SITE.domain = argDomain; wr('tools/site.json', JSON.stringify(SITE, null, 2) + '\n'); }
const PREVIEW = (process.argv.find(a => a.startsWith('--preview=')) || '').slice(10);
const D = SITE.domain;
const W = {}; new Function('window', rd('assets/js/data.js'))(W);
const EN = W.I18N.en;
const TODAY = SITE.updated || new Date().toISOString().slice(0, 10);

const esc = s => String(s == null ? '' : s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const tx = k => esc(EN[k] || k);
const jl = o => JSON.stringify(o).replace(/</g, '\\u003c');

/* ---------- static renderers (must match what main.js expects) ---------- */
const ICON = {
  cal: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/></svg>',
  heart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round" aria-hidden="true"><path d="M12 21s-7.5-4.6-9.6-9.2C.9 8.3 3 4.8 6.4 4.8c2 0 3.6 1 5.6 3.2 2-2.2 3.6-3.2 5.6-3.2 3.4 0 5.5 3.5 4 7-2.1 4.6-9.6 9.2-9.6 9.2z"/></svg>',
  share: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="M8.6 10.5l6.8-4M8.6 13.5l6.8 4"/></svg>',
  phone: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M6.6 10.8a15 15 0 006.6 6.6l2.2-2.2a1 1 0 011-.25 11.4 11.4 0 003.6.6 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.6 3.6a1 1 0 01-.25 1z"/></svg>'
};
const reportFile = p => 'report-' + p.id + '.html';
function postHtml(p, opts = {}) {
  const tag = p.tag || 'SK23';
  return `
    <article class="card post" id="post-${esc(p.id)}" data-month="${esc(p.m)}" data-id="${esc(p.id)}">
      <div class="post-head"><img src="assets/img/logo.png" alt=""><div><b>SK Bancal</b></div>${p.d ? `<span class="pill" style="margin-left:auto">${ICON.cal}${esc(p.d)}</span>` : ''}</div>
      <p class="post-cap"><a class="post-link" href="${reportFile(p)}"><strong>${esc(p.t)}.</strong></a> ${esc(p.c)}</p>
      <button class="poster" type="button" data-full="assets/img/posters/${esc(p.img)}.jpg" data-cap="${esc(p.t)}${p.d ? ', ' + esc(p.d) : ''}"><img src="assets/img/posters/${esc(p.img)}.jpg" alt="${esc(p.t)} poster" loading="lazy" decoding="async"><span class="bigheart" aria-hidden="true">${ICON.heart}</span></button>
      ${p.note ? `<p class="poster-note">${esc(p.note)}</p>` : ''}
      <div class="post-tags"><span class="chip-tag">#${esc(tag)}AccomplishmentReport</span><span class="chip-tag">#BancalToTheHighest</span></div>
      <div class="post-actions">
        <button class="act like" type="button" data-like="${esc(p.id)}" aria-pressed="false" aria-label="Like">${ICON.heart}<span class="cnt"></span></button>
        <button class="act share" type="button" data-share="${esc(p.id)}" aria-label="Share">${ICON.share}<span data-i18n="act.share">Share</span></button>
        <a class="act push" href="${SITE.fb}" target="_blank" rel="noopener" data-i18n="act.fb">SK on Facebook</a>
      </div>
    </article>`;
}
const pendingCard = '<article class="card post pending" data-month="all"><b data-i18n="pending.t">Poster coming soon</b><span data-i18n="pending.b">The SK counts 13 programs. Two posters have not been added yet.</span></article>';
const feedHtml = W.POSTS.map(p => postHtml(p)).join('') + pendingCard;
const latestHtml = W.LATEST.map(l => `
    <article class="card post"><div class="post-head"></div>
      <button class="poster" type="button" data-full="assets/img/posters/${esc(l.img)}.jpg" data-cap="${esc(l.d)}"><img src="assets/img/posters/${esc(l.img)}.jpg" alt="${esc(EN[l.k])}, poster" loading="lazy" decoding="async"></button>
      <div class="meta"><time>${esc(l.d)}</time><h3 data-i18n="${l.k}">${tx(l.k)}</h3></div></article>`).join('');
const officersHtml = W.OFFICERS.map(([k, n, r]) => `<figure class="card off"><img src="assets/img/officers/${k}.jpg" alt="${esc(n)}" loading="lazy" width="300" height="400"><figcaption><strong>${esc(n)}</strong><span>${esc(r)}</span></figcaption></figure>`).join('');
const hotHtml = W.HOTLINES.map((h, i) => `
    <article class="card hot tone${i % 3}">
      <h3 data-i18n="${h.k}">${tx(h.k)}</h3>
      <p class="unit">${esc(h.u)}</p>
      ${h.n.map(n => `<div class="num-row"><a class="btn call" href="tel:+63${n.replace(/\s/g, '').slice(1)}">${ICON.phone}<span>${n}</span></a><button class="btn alt" type="button" data-copy="${n.replace(/\s/g, '')}" data-i18n="hl.copy">Copy</button></div>`).join('')}
      ${h.f ? `<p class="hot-fb">${esc(h.f)}</p>` : ''}
    </article>`).join('');
const svcHtml = W.SERVICES.map(s => `
    <article class="card svc" data-cat="${esc(s.c)}"><div class="svc-top"><span class="svc-badge b0" aria-hidden="true">${esc(s.a)}</span><div><h3>${esc(s.t)}</h3></div></div><p>${esc(s.p)}</p><details><summary>Documents to prepare</summary><ul>${s.docs.map(d => `<li>${esc(d)}</li>`).join('')}</ul></details><a class="btn" href="${esc(s.u)}" target="_blank" rel="noopener noreferrer">Open official site</a></article>`).join('');
const tileStyle = { sports: 't-navy', edu: 't-sun', gov: 't-white', health: 't-red', incl: 't-blue', socio: 't-white', env: 't-blue', youth: 't-red', aware: 't-sun' };
const order = ['sports', 'edu', 'gov', 'health', 'incl', 'socio', 'env', 'youth', 'aware'];
const counts = {}; W.PROJECTS.forEach(p => { counts[p.s] = (counts[p.s] || 0) + 1; });
const bentoHtml = order.filter(k => counts[k]).map(k => `<button class="tile ${k} ${tileStyle[k]}" type="button" data-sector="${k}" aria-pressed="false"><b>${counts[k]}</b><span>${esc(W.SECTORS[k])}</span></button>`).join('');
const ALLP = W.PROJECTS.concat(W.PROJECTS_2324 || []);
const sc = {}; ALLP.forEach(p => { sc[p.s] = (sc[p.s] || 0) + 1; });
const numsHtml = order.filter(k => sc[k]).map(k => `<a class="num-tile ${tileStyle[k]}" href="projects.html" style="--n:${order.indexOf(k)}"><b>${sc[k]}</b><span>${esc(W.SECTORS[k])}</span></a>`).join('');
const topSec = order.filter(k => sc[k]).sort((x, y) => sc[y] - sc[x])[0];
const shareHtml = `<div class="rvx"><div class="glance nums">` +
  `<div class="num-tile t-blue"><b>${ALLP.length}</b><span data-i18n="pj.g1">projects, programs and activities listed</span></div>` +
  `<div class="num-tile t-sun"><b>${order.filter(k => sc[k]).length}</b><span data-i18n="pj.g2">sectors covered</span></div>` +
  `<div class="num-tile t-red"><b>${sc[topSec]}</b><span><em data-i18n="pj.g3">in the busiest sector:</em> ${esc(W.SECTORS[topSec])}</span></div></div>` +
  `<div class="share" role="img" aria-label="Share of projects by sector">${order.filter(k => sc[k]).map(k => `<i class="sc-${k}" data-k="${k}" style="flex:${sc[k]}" title="${esc(W.SECTORS[k])}: ${sc[k]}">${sc[k] / ALLP.length >= 0.05 ? sc[k] : ''}</i>`).join('')}</div>` +
  `<ul class="share-key">${order.filter(k => sc[k]).map(k => `<li data-k="${k}"><i class="sc-${k}"></i><span>${esc(W.SECTORS[k])}</span><b>${sc[k]}</b></li>`).join('')}</ul></div>`;
const repGlance = `<div class="nums glance rvx"><div class="num-tile t-blue"><b>${W.POSTS.length}</b><span data-i18n="rp.g1">accomplishment reports</span></div><div class="num-tile t-sun"><b>${ALLP.length}</b><span data-i18n="rp.g2">projects behind them</span></div><div class="num-tile t-red"><b>4</b><span data-i18n="rp.g3">years of SK work, 2023 to 2026</span></div></div>`;
const offGlance = `<div class="nums glance rvx"><div class="num-tile t-blue"><b>${W.OFFICERS.length + 1}</b><span data-i18n="of.g1">council members</span></div><div class="num-tile t-sun"><b>3</b><span data-i18n="of.g2">years in this term</span></div><div class="num-tile t-red"><b>${ALLP.length}</b><span data-i18n="of.g3">projects and programs so far</span></div></div>`;
const wallImgs = W.POSTS.filter(p => p.img);
const wallRow = (list, rev) => { const one = list.map(p => `<a href="${reportFile(p)}"><img src="assets/img/posters/${esc(p.img)}.jpg" alt="${esc(p.t)}" loading="lazy" decoding="async" width="200" height="250"></a>`).join('');
  const two = list.map(p => `<a href="${reportFile(p)}" tabindex="-1"><img src="assets/img/posters/${esc(p.img)}.jpg" alt="" loading="lazy" decoding="async" width="200" height="250"></a>`).join('');
  return `<div class="wall-row${rev ? ' rev' : ''}"><div class="wall-track">${one}<span class="wall-dup" aria-hidden="true">${two}</span></div></div>`; };
const wallHtml = wallRow(wallImgs.slice(0, 16), false) + wallRow(wallImgs.slice(16), true);
const TL = [['Nov 2023', 'caravan', 'SK Caravan and Thanksgiving'], ['Nov 2023', 'training', 'Mandatory training and oathtaking'], ['Dec 2023', 'court', 'The basketball court gets repainted'], ['Aug 2024', 'miss-linggo', 'Youth Month contests: debate, film, singing and more'], ['Dec 2024', 'office', 'Construction of the SK office'], ['2025', null, '49 projects, programs and activities listed for the year'], ['Aug 2026', 'gambling', 'Campaign against illegal and online gambling'], ['Sep 2026', 'billiards', 'First SK billiards tournament in Bancal'], ['Nov 2026', null, 'Bible study and feeding program continues']];
const timelineHtml = TL.map(([d, id, t], i) => { const href = id ? 'report-' + id + '.html' : (i === 5 ? 'projects.html' : null);
  const inner = `<span class="tl-d">${esc(d)}</span><b>${esc(t)}</b>`;
  return `<li class="tl-i ${i % 2 ? 'r' : 'l'}"><span class="tl-dot" aria-hidden="true"></span>${href ? `<a class="tl-c" href="${href}">${inner}</a>` : `<div class="tl-c">${inner}</div>`}</li>`; }).join('');
const ledgerHtml = W.PROJECTS.map(p => `<tr><td class="n">${p.n}</td><td>${esc(p.t)}</td><td>${esc(W.SECTORS[p.s])}</td><td class="d">${esc(p.d)}</td></tr>`).join('');

const MONTHS = { jan: 0, feb: 1, mar: 2, apr: 3, may: 4, jun: 5, jul: 6, aug: 7, sep: 8, oct: 9, nov: 10, dec: 11 };
function isoOf(d) { // "Nov 3, 2023" -> 2023-11-03 ; "Dec 8–9, 2023" -> 2023-12-08 ; "Aug 2024" -> 2024-08-01 ; else null
  const m = /^([A-Za-z]{3})[a-z]*\s+(\d{1,2})?[^\d,]*,?\s*(\d{4})$/.exec((d || '').trim());
  if (!m || !(m[1].toLowerCase() in MONTHS)) return null;
  return `${m[3]}-${String(MONTHS[m[1].toLowerCase()] + 1).padStart(2, '0')}-${String(m[2] || 1).padStart(2, '0')}`;
}

/* events / docs / faq */
const nowIso = new Date().toISOString().slice(0, 10);
const EVENTS = (W.EVENTS || []).slice().sort((a, b) => (a.iso || '').localeCompare(b.iso || ''));
const evCard = e => `<article class="card ev"><span class="pill">${ICON.cal}${esc(e.d || e.iso || '')}</span><h2>${esc(e.t)}</h2>${e.where ? `<p class="ev-where"><b data-i18n="ev.where">Where</b>: ${esc(e.where)}</p>` : ''}${e.c ? `<p>${esc(e.c)}</p>` : ''}</article>`;
function eventsHtml() {
  if (!EVENTS.length) return '<div class="card empty-card"><p data-i18n="ev.none">' + tx('ev.none') + '</p></div>';
  const up = EVENTS.filter(e => !e.iso || e.iso >= nowIso), past = EVENTS.filter(e => e.iso && e.iso < nowIso).reverse();
  return (up.length ? `<h2 class="sub-h" data-i18n="ev.up">${tx('ev.up')}</h2><div class="ev-grid">${up.map(evCard).join('')}</div>` : '') +
    (past.length ? `<h2 class="sub-h" data-i18n="ev.past">${tx('ev.past')}</h2><div class="ev-grid">${past.map(evCard).join('')}</div>` : '');
}
const docsHtml = (W.DOCUMENTS || []).length ? `<h2 class="sub-h" data-i18n="dl.docs">${tx('dl.docs')}</h2><ul class="doc-list">${W.DOCUMENTS.map(d => `<li><a href="${esc(d.f)}" download>${esc(d.t)}</a>${d.d ? ` <span class="pill">${esc(d.d)}</span>` : ''}</li>`).join('')}</ul>` : '';
const FAQN = 9;
const faqHtml = Array.from({ length: FAQN }, (_, i) => i + 1).map(i => `<details class="card faq-i"${i === 1 ? ' open' : ''}><summary data-i18n="faq.q${i}">${tx('faq.q' + i)}</summary><p data-i18n="faq.a${i}">${tx('faq.a' + i)}</p></details>`).join('');

/* ---------- parts ---------- */
const part = n => rd('src/parts/' + n + '.html');
const PAGEFILE = s => s + '.html';
const NAV = [['reports', 'nav.reports', 'Reports'], ['projects', 'nav.projects', 'Projects'], ['services', 'nav.services', 'Services'], ['hotlines', 'nav.hotlines', 'Hotlines'], ['officials', 'nav.officials', 'Officials'], ['about', 'nav.about', 'About']];

function navTools() {
  return `<div class="nav-tools"><div class="nt-row"><span class="nt-l" data-i18n="nt.lang">Language</span><div class="nt-set"><button type="button" data-lang="en" aria-pressed="true">English</button><button type="button" data-lang="hil" aria-pressed="false">Hiligaynon</button><button type="button" data-lang="tl" aria-pressed="false">Tagalog</button></div></div></div>`;
}
function header(slug) {
  let h = part('header');
  h = h.replace('<a class="brand" href="#top">', '<a class="brand" href="index.html" aria-label="SK Bancal, home">');
  const mlink = (s, k, en) => `<a class="nav-m${slug === s ? ' on' : ''}" href="${PAGEFILE(s)}" data-i18n="${k}"${slug === s ? ' aria-current="page"' : ''}>${en}</a>`;
  h = h.replace(/<nav class="nav" id="nav" aria-label="Main">.*?<\/nav>/s, '<nav class="nav" id="nav" aria-label="Main">' + mlink('index', 'nav.home', 'Home') + NAV.map(([s, k, en]) => `<a href="${PAGEFILE(s)}" data-i18n="${k}"${slug === s ? ' aria-current="page" class="on"' : ''}>${en}</a>`).join('') + navTools() + '</nav>');
  const srch = `<button class="ibtn" id="srchBtn" type="button" aria-haspopup="dialog" aria-label="Search the site"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="M20 20l-3.6-3.6"/></svg></button>
      `;
  h = h.replace('<button class="ibtn" id="themeBtn"', srch + '<button class="ibtn" id="themeBtn"');
  return h;
}
function footer() {
  const f = part('footer');
  const links = (arr) => arr.map(([s, k, en]) => `<a href="${PAGEFILE(s)}" data-i18n="${k}">${en}</a>`).join('');
  return f
    .replace(/<nav class="foot-col" aria-label="On this site">.*?<\/nav>/s, `<nav class="foot-col" aria-label="On this site"><h4 data-i18n="foot.links">On this site</h4>${links([['index', 'nav.home', 'Home'], ...NAV])}</nav>
    <nav class="foot-col" aria-label="More"><h4 data-i18n="foot.more">More</h4>${links([['events', 'nav.events', 'Events'], ['downloads', 'nav.downloads', 'Downloads'], ['faq', 'nav.faq', 'FAQ'], ['contact', 'nav.contact', 'Contact']])}</nav>`)
    .replace(/<p class="foot-legal-links">.*?<\/p>/s, `<p class="foot-legal-links"><a href="privacy.html" data-i18n="legal.privacy">Privacy Policy</a><a href="terms.html" data-i18n="legal.terms">Terms and Conditions</a><a href="legal.html" data-i18n="legal.legal">Legal notice</a><a href="accessibility.html" data-i18n="legal.access">Accessibility</a></p>`)
    .replace(/<p class="foot-copy">.*?<\/p>/s, `<p class="foot-copy">© 2026 Jolan Clark Sorillo. All rights reserved. · v${SITE.version}</p>`)
    .replace('<p data-i18n="foot.priv">This site does not collect personal data. Your heart reactions and language choice are saved only on your own device.</p>', `<p data-i18n="foot.priv">${tx('foot.priv')}</p>`);
}
const sos = () => part('sos').replace('href="#hotlines"', 'href="hotlines.html"');
const dialogs = () => part('dialogs');
const intro = () => part('intro').replace('<h1 class="title intro-title">', '<p class="title intro-title">').replace(/(<span class="l"><span>the Highest<\/span><\/span>)<\/h1>/, '$1</p>');

/* ---------- page definitions ---------- */
const FB = SITE.fb, FORM = SITE.form;
const REACH = `\n  <section class="section" id="reach" style="padding-top:0">\n    <div class="wrap">\n      <div class="reach dots">\n        <div style="position:relative"><h2 class="title" data-i18n="reach.h">Got a question for the SK?</h2><p data-i18n="reach.cta.body">Questions about programs, scholarships or events? Write your message here and send it through the SK's Facebook profile.</p></div>\n        <div class="acts"><button class="btn" type="button" data-open-desk data-i18n="reach.write">Write a message</button></div>\n      </div>\n    </div>\n  </section>\n`;
const PAGES = [
  { slug: 'index', url: '/', title: 'SK Bancal: Sangguniang Kabataan of Barangay Bancal, Carles, Iloilo', desc: 'Community website for the Sangguniang Kabataan of Barangay Bancal, Carles, Iloilo: SK programs, accomplishment reports for 2023 to 2026, emergency hotlines, and government service guides.', body: 'home', home: true },
  { slug: 'reports', title: 'SK Bancal Accomplishment Reports 2023 to 2026, Carles, Iloilo', desc: 'Every accomplishment report poster of the SK of Barangay Bancal, Carles, Iloilo: sports leagues, scholarships, feeding programs, clean-ups, financial assistance and more.', body: 'reports', type: 'CollectionPage' },
  { slug: 'projects', title: 'SK Bancal Projects, Programs and Activities 2023 to 2025', desc: `Searchable list of ${W.PROJECTS.length + W.PROJECTS_2324.length} projects, programs and activities of the Sangguniang Kabataan of Barangay Bancal, Carles, Iloilo, grouped by sector for 2023 to 2025.`, body: 'projects', type: 'CollectionPage' },
  { slug: 'officials', title: 'SK Officials of Barangay Bancal, Carles, Iloilo (2023 to 2026)', desc: 'The SK Chair Hon. Nicole Anne D. Barbosa and the council of the Sangguniang Kabataan of Barangay Bancal, Carles, Iloilo, term 2023 to 2026.', body: 'officials', type: 'AboutPage' },
  { slug: 'about', title: 'About the SK and Officials of Barangay Bancal, Carles, Iloilo', desc: 'Meet the Sangguniang Kabataan of Barangay Bancal, Carles, Iloilo: SK Chair Hon. Nicole Anne D. Barbosa and the SK council, term 2023 to 2026.', body: 'about', type: 'AboutPage' },
  { slug: 'services', title: 'Government Services Guide: LTO, SSS, PhilHealth, BIR and more', desc: 'Shortcuts to official Philippine government websites with the documents to prepare: LTO, SSS, PhilHealth, Pag-IBIG, BIR, NBI, PSA, DFA and more.', body: 'services', type: 'CollectionPage' },
  { slug: 'hotlines', title: 'Carles Emergency Hotlines: Medical, Fire, Police, Sea Rescue', desc: 'Emergency hotline numbers for Carles, Iloilo from the Carles MDRRMO advisory (July 20, 2026): ambulance, fire, police, Coast Guard and more. Tap to call.', body: 'hotlines', type: 'CollectionPage' },
  { slug: 'events', title: 'SK Bancal Announcements and Events', desc: 'Upcoming activities and notices from the Sangguniang Kabataan of Barangay Bancal, Carles, Iloilo.', body: 'events', noindex: !EVENTS.length },
  { slug: 'downloads', title: 'Downloads: SK Bancal Project Posters, Video and Hotline List', desc: 'Download SK Bancal project posters for 2023 to 2025, the accomplishment report video and a printable Carles emergency hotline list.', body: 'downloads' },
  { slug: 'accessibility', title: 'Accessibility Statement | SK Bancal', desc: 'How the SK Bancal community website supports keyboard, screen reader, small-screen and reduced-motion visitors, and how to report a problem.', body: 'accessibility' },
  { slug: 'faq', title: 'FAQ: SK Bancal and Barangay Bancal, Carles, Iloilo', desc: 'Answers about the Sangguniang Kabataan of Barangay Bancal: how to suggest a project, contact the SK, find reports and emergency numbers.', body: 'faq', type: 'FAQPage' },
  { slug: 'contact', title: 'Contact the SK of Barangay Bancal, Carles, Iloilo', desc: 'How to reach the Sangguniang Kabataan of Barangay Bancal, Carles, Iloilo through its Facebook profile, and where to send project suggestions.', body: 'contact', type: 'ContactPage' },
  { slug: 'privacy', title: 'Privacy Policy | SK Bancal', desc: 'How the SK Bancal community website handles data: what is saved on your device, counters, and links to other services.', legal: 'privacy' },
  { slug: 'terms', title: 'Terms and Conditions | SK Bancal', desc: 'Terms for using the SK Bancal community information website.', legal: 'terms' },
  { slug: 'legal', title: 'Legal Notice | SK Bancal', desc: 'Legal notice, credits and trademarks for the SK Bancal community information website.', legal: 'legal' }
];
// one page per report
const REPORTS = W.POSTS.map((p, i) => ({ p, i }));
REPORTS.forEach(({ p, i }) => PAGES.push({
  slug: 'report-' + p.id, report: p, idx: i,
  title: `${p.t}${p.d && /\d{4}/.test(p.d) ? ' (' + p.d + ')' : ''} | SK Bancal Report`,
  desc: (p.c.length > 150 ? p.c.slice(0, 147) + '...' : p.c) + ' SK Bancal, Carles, Iloilo.'
}));
PAGES.push({ slug: '404', title: 'Page not found | SK Bancal', desc: 'This page was not found.', body: '404', noindex: true, abs: true });

/* body fill */
const BUD = (process.env.SK_BUDGET_DEMO ? { year: 2026, asOf: 'November 2026', allocation: 1000000, items: [{ label: 'Sports and recreation', planned: 300000, spent: 210000 }, { label: 'Education', planned: 250000, spent: 90000 }, { label: 'Health and environment', planned: 200000, spent: 120000 }], docs: [{ label: 'ABYIP 2026', url: 'https://example.com/abyip.pdf' }] } : W.BUDGET) || {};
const peso = n => '\u20B1' + Number(n).toLocaleString('en-PH', { maximumFractionDigits: 0 });
function budgetHtml() {
  const items = (BUD.items || []).filter(i => i && i.planned > 0);
  const docs = (BUD.docs || []).filter(d => d && d.url);
  const docsHtml = `<div class="tr-docs"><h2 data-i18n="tr.docs">Documents</h2>${docs.length ? '<ul>' + docs.map(d => `<li><a class="btn alt" href="${esc(d.url)}" target="_blank" rel="noopener">${esc(d.label)}</a></li>`).join('') + '</ul>' : '<p data-i18n="tr.nodocs">Signed documents will be linked here once the SK releases them.</p>'}</div>`;
  if (!BUD.allocation || !items.length) return `<div class="tr-pending card"><span class="pill" data-i18n="tr.pend">Not yet published</span><h2 data-i18n="tr.pendh">The figures are not posted yet</h2><p data-i18n="tr.pendp">The SK has not released its budget figures for this website. Nothing on this page is an estimate. When the ABYIP and the SK budget are released, the totals, the spending by sector and the documents will appear here.</p><div class="tr-ghost" aria-hidden="true"><span></span><span></span><span></span></div></div>${docsHtml}`;
  const spent = items.reduce((a, i) => a + (+i.spent || 0), 0), planned = items.reduce((a, i) => a + i.planned, 0), pct = Math.min(100, Math.round(spent / BUD.allocation * 100));
  return `<div class="tr-top"><div class="tr-ring" style="--p:${pct}"><b>${pct}%</b><span data-i18n="tr.used">of the budget used</span></div><div class="tr-stats"><div class="card"><span data-i18n="tr.total">SK budget ${esc(BUD.year)}</span><b>${peso(BUD.allocation)}</b></div><div class="card"><span data-i18n="tr.spent">Spent so far</span><b>${peso(spent)}</b></div><div class="card"><span data-i18n="tr.left">Remaining</span><b>${peso(BUD.allocation - spent)}</b></div></div></div>${BUD.asOf ? `<p class="tr-asof"><span data-i18n="tr.asof">As of</span> ${esc(BUD.asOf)}</p>` : ''}<div class="tr-bars">${items.map(i => { const u = Math.min(100, Math.round((+i.spent || 0) / i.planned * 100)); return `<div class="tr-bar"><div class="tr-bh"><b>${esc(i.label)}</b><span>${peso(+i.spent || 0)} / ${peso(i.planned)}</span></div><div class="tr-track" role="img" aria-label="${esc(i.label)}: ${u}% used"><i style="--w:${u}%"></i></div></div>`; }).join('')}</div>${docsHtml}`;
}
function fill(html, slug) {
  const rep = (s, from, to) => { if (!s.includes(from)) throw new Error('missing token in ' + slug + ': ' + from.slice(0, 40)); return s.replace(from, to); };
  if (slug === 'index') html = rep(html, '<div class="latest" id="latestGrid"></div>', `<div class="latest" id="latestGrid">${latestHtml}</div>`);
  if (slug === 'index') { html = rep(html, '{{nums}}', numsHtml); html = rep(html, '{{wall}}', wallHtml); html = rep(html, '{{timeline}}', timelineHtml); }
  if (slug === 'projects') { html = rep(html, '{{budget}}', budgetHtml()); html = rep(html, '{{share}}', shareHtml); }
  if (slug === 'reports') { html = rep(html, '{{glance}}', repGlance); html = rep(html, '{{wall}}', wallHtml); }
  if (slug === 'officials') html = rep(html, '{{glance}}', offGlance);
  if (slug === 'reports') html = rep(html, '<div class="feed" id="feed"></div>', `<div class="feed" id="feed">${feedHtml}</div>`);
  if (slug === 'officials') html = html.replace(/(<figure class="card off chair">.*?<\/figure>)\s*\n\s*<\/div>/s, `$1${officersHtml}\n      </div>`);
  if (slug === 'hotlines') html = rep(html, '<div class="hot-grid" id="hotGrid"></div>', `<div class="hot-grid" id="hotGrid">${hotHtml}</div>`);
  if (slug === 'services') html = rep(html, '<div class="svc-track" id="svcTrack" tabindex="0" aria-label="Government services"></div>', `<div class="svc-track" id="svcTrack" tabindex="0" aria-label="Government services">${svcHtml}</div>`);
  if (slug === 'projects') {
    html = rep(html, '<div class="bento" id="bento"></div>', `<div class="bento" id="bento">${bentoHtml}</div>`);
    html = rep(html, '<tbody id="ledgerBody"></tbody>', `<tbody id="ledgerBody">${ledgerHtml}</tbody>`);
  }
  if (slug === 'events') html = rep(html, '{{events}}', eventsHtml());
  if (slug === 'downloads') html = rep(html, '{{docs}}', docsHtml);
  if (slug === 'faq') html = rep(html, '{{faq}}', faqHtml);
  if (slug === 'contact') html = rep(html, '{{form}}', FORM);
  if (['reports', 'projects', 'about', 'services', 'hotlines', 'events', 'downloads', 'faq'].includes(slug)) html += REACH;
  return html;
}
function reportBody(pg) {
  const p = pg.report, idx = pg.idx, tag = p.tag || 'SK23';
  const prev = W.POSTS[idx - 1], next = W.POSTS[idx + 1];
  const full = W.ARCHIVE.find(a => a.id === p.id);
  const crumbs = `<nav class="crumbs" aria-label="Breadcrumb"><a href="index.html" data-i18n="nav.home">Home</a><span aria-hidden="true">/</span><a href="reports.html" data-i18n="nav.reports">Reports</a><span aria-hidden="true">/</span><span aria-current="page">${esc(p.t)}</span></nav>`;
  return `  <section class="section" id="report">
    <div class="wrap">
      ${crumbs}
      <article class="rd card post" id="post-${esc(p.id)}" data-id="${esc(p.id)}">
        <div class="rd-grid">
          <button class="poster" type="button" data-full="assets/img/posters/${esc(p.img)}.jpg" data-cap="${esc(p.t)}${p.d ? ', ' + esc(p.d) : ''}"><img src="assets/img/posters/${esc(p.img)}.jpg" alt="${esc(p.t)} poster" decoding="async"></button>
          <div class="rd-copy">
            ${p.d ? `<span class="pill">${ICON.cal}${esc(p.d)}</span>` : ''}
            <h1 class="title">${esc(p.t)}</h1>
            <p class="lead">${esc(p.c)}</p>
            ${full && full.o ? `<p><b data-i18n="rd.obj">Objective</b>: ${esc(full.o)}</p>` : ''}
            ${p.note ? `<p class="poster-note">${esc(p.note)}</p>` : ''}
            <div class="post-tags"><span class="chip-tag">#${esc(tag)}AccomplishmentReport</span><span class="chip-tag">#BancalToTheHighest</span></div>
            <div class="post-actions">
              <button class="act like" type="button" data-like="${esc(p.id)}" aria-pressed="false" aria-label="Like">${ICON.heart}<span class="cnt"></span></button>
              <button class="act share" type="button" data-share="${esc(p.id)}" aria-label="Share">${ICON.share}<span data-i18n="act.share">Share</span></button>
              <a class="act push" href="${FB}" target="_blank" rel="noopener" data-i18n="act.fb">SK on Facebook</a>
            </div>
          </div>
        </div>
      </article>
      <div class="rd-nav">
        ${prev ? `<a class="btn alt" href="${reportFile(prev)}" rel="prev"><span data-i18n="rd.prev">Previous report</span></a>` : '<span></span>'}
        <a class="btn" href="reports.html" data-i18n="rd.back">All reports</a>
        ${next ? `<a class="btn alt" href="${reportFile(next)}" rel="next"><span data-i18n="rd.next">Next report</span></a>` : '<span></span>'}
      </div>
    </div>
  </section>`;
}
function legalBody(k) {
  const titles = { privacy: 'legal.privacy', terms: 'legal.terms', legal: 'legal.legal' };
  return `  <section class="section" id="legal-page">
    <div class="wrap legal-page">
      <h1 class="title" data-i18n="${titles[k]}">${tx(titles[k])}</h1>
      <p class="sub">These documents are written in English. Last updated ${SITE.legalUpdated}.</p>
      <article class="doc">${rd('src/legal/' + k + '.html')}</article>
      <p class="legal-links"><a href="privacy.html">Privacy Policy</a> · <a href="terms.html">Terms and Conditions</a> · <a href="legal.html">Legal notice</a></p>
    </div>
  </section>`;
}

/* ---------- head + JSON-LD ---------- */
const abs = u => D + (u === '/' ? '/' : '/' + u);
const pageUrl = pg => pg.slug === 'index' ? '/' : pg.slug + '.html';
const ORG = { '@type': 'GovernmentOrganization', '@id': D + '/#org', name: 'Sangguniang Kabataan of Barangay Bancal', alternateName: 'SK Bancal', url: D + '/', logo: abs('assets/img/logo.png'), image: abs('assets/img/og-image.jpg'), sameAs: [SITE.fb, SITE.fbChair], address: { '@type': 'PostalAddress', addressLocality: 'Bancal, Carles', addressRegion: 'Iloilo', addressCountry: 'PH' }, areaServed: 'Barangay Bancal, Carles, Iloilo' };
function schema(pg) {
  const url = D + (pg.slug === 'index' ? '/' : '/' + pg.slug + '.html');
  const g = [];
  if (pg.slug === 'index') {
    g.push({ '@type': 'WebSite', '@id': D + '/#website', url: D + '/', name: 'SK Bancal', alternateName: ['Sangguniang Kabataan ng Bancal', 'Bancal to the Highest'], inLanguage: ['en', 'tl', 'hil'], publisher: { '@id': D + '/#org' } });
    g.push(ORG);
  }
  const wp = { '@type': pg.report ? 'WebPage' : (pg.type || 'WebPage'), '@id': url + '#page', url, name: pg.title, description: pg.desc, isPartOf: { '@id': D + '/#website' }, inLanguage: 'en' };
  if (pg.slug === 'faq') wp.mainEntity = Array.from({ length: FAQN }, (_, i) => ({ '@type': 'Question', name: EN['faq.q' + (i + 1)], acceptedAnswer: { '@type': 'Answer', text: EN['faq.a' + (i + 1)] } }));
  if (pg.slug === 'reports') wp.mainEntity = { '@type': 'ItemList', numberOfItems: W.POSTS.length, itemListElement: W.POSTS.map((p, i) => ({ '@type': 'ListItem', position: i + 1, name: p.t, url: D + '/' + reportFile(p) })) };
  if (pg.slug === 'hotlines') wp.mainEntity = { '@type': 'ItemList', itemListElement: W.HOTLINES.map((h, i) => ({ '@type': 'ListItem', position: i + 1, name: EN[h.k] + ': ' + h.u })) };
  if (pg.report) {
    const p = pg.report, iso = isoOf(p.d);
    g.push({ '@type': 'Article', '@id': url + '#article', mainEntityOfPage: url, headline: p.t, description: p.c, image: abs('assets/img/posters/' + p.img + '.jpg'), ...(iso ? { datePublished: iso } : {}), author: { '@id': D + '/#org' }, publisher: { '@id': D + '/#org' }, inLanguage: 'en' });
  } else g.push(wp);
  if (pg.slug !== 'index' && pg.slug !== '404') {
    const items = [{ '@type': 'ListItem', position: 1, name: 'Home', item: D + '/' }];
    if (pg.report) { items.push({ '@type': 'ListItem', position: 2, name: 'Reports', item: D + '/reports.html' }); items.push({ '@type': 'ListItem', position: 3, name: pg.report.t, item: url }); }
    else items.push({ '@type': 'ListItem', position: 2, name: pg.title.split(/[:|,]/)[0].trim(), item: url });
    g.push({ '@type': 'BreadcrumbList', itemListElement: items });
  }
  return { '@context': 'https://schema.org', '@graph': g };
}
function head(pg) {
  const url = D + (pg.slug === 'index' ? '/' : '/' + pg.slug + '.html');
  const img = pg.report ? abs('assets/img/posters/' + pg.report.img + '.jpg') : abs('assets/img/og-image.jpg');
  const robots = pg.noindex ? 'noindex,follow' : 'index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1';
  const imgAlt = pg.report ? pg.report.t + ' poster, SK Bancal' : 'Sangguniang Kabataan of Barangay Bancal, Carles, Iloilo: Bancal to the Highest';
  return `<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>${esc(pg.title)}</title>
<meta name="description" content="${esc(pg.desc)}">
<meta name="robots" content="${robots}">
<meta name="author" content="Jolan Clark Sorillo">
<meta name="geo.region" content="PH-ILI">
<meta name="geo.placename" content="Bancal, Carles, Iloilo">
${pg.noindex ? '' : `<link rel="canonical" href="${url}">`}
${SITE.googleVerification ? `<meta name="google-site-verification" content="${esc(SITE.googleVerification)}">` : '<!-- Google Search Console: put your token in tools/site.json ("googleVerification") and run node tools/build.js -->'}
<meta property="og:site_name" content="SK Bancal">
<meta property="og:title" content="${esc(pg.title)}">
<meta property="og:description" content="${esc(pg.desc)}">
<meta property="og:type" content="${pg.report ? 'article' : 'website'}">
<meta property="og:url" content="${url}">
<meta property="og:image" content="${img}">
${pg.report ? '' : '<meta property="og:image:width" content="1200">\n<meta property="og:image:height" content="630">\n'}<meta property="og:image:alt" content="${esc(imgAlt)}">
<meta property="og:locale" content="en_PH">
<meta name="twitter:card" content="${pg.report ? 'summary' : 'summary_large_image'}">
<meta name="twitter:title" content="${esc(pg.title)}">
<meta name="twitter:description" content="${esc(pg.desc)}">
<meta name="twitter:image" content="${img}">
${pg.noindex ? '' : `<script type="application/ld+json">\n${jl(schema(pg))}\n</script>\n`}<meta name="theme-color" content="#FFD60A">
<link rel="icon" href="assets/img/favicon.png">
<link rel="manifest" href="manifest.webmanifest">
<link rel="apple-touch-icon" href="assets/img/icon-192.png">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
${exists('assets/fonts/poppins.css') ? '<link rel="stylesheet" href="assets/fonts/poppins.css">' : '<link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,500;0,600;0,700;0,800;0,900;1,700;1,800;1,900&family=Caveat:wght@600&display=swap" rel="stylesheet">'}
<script src="assets/js/boot.js"></script>
<link rel="stylesheet" href="assets/css/style.css">
<link rel="stylesheet" href="assets/css/motion.css">`;
}

function render(pg) {
  let main;
  if (pg.report) main = reportBody(pg);
  else if (pg.legal) main = legalBody(pg.legal);
  else main = fill(rd('src/pages/' + pg.body + '.html'), pg.slug);
  const noscript = pg.home ? part('noscript').trim() : '';
  const html = `<!doctype html>
<html lang="en" data-page="${pg.slug}"${pg.home ? ' data-home="1"' : ''}>
<head>
${head(pg)}
</head>
<body>
<a class="skip" href="#main">Skip to content</a>
<div class="progress" id="progress" aria-hidden="true"></div>
${pg.home ? intro() : ''}
${header(pg.slug)}
<div class="announce" id="announce" hidden></div>
<main id="main">
${noscript}
${main}
</main>
${sos()}
<div class="toast" id="toast" role="status" aria-live="polite"></div>
${footer()}
${dialogs()}
<script src="assets/js/config.js"></script>
<script src="assets/js/data.js"></script>
<script src="assets/js/main.js"></script>
<script src="assets/js/search-index.js"></script>
<script src="assets/js/fx.js"></script>
</body>
</html>
`;
  return pg.abs ? html.replace(/((?:href|src)=")(?!https?:|#|\/|mailto:|tel:|data:)([^"]+")/g, '$1/$2') : html;
}

/* ---------- search index ---------- */
const SIDX = [];
[['Home', 'index.html', 'Bancal to the Highest, SK programs, latest reports'], ['Reports', 'reports.html', 'Every accomplishment report poster'], ['Projects', 'projects.html', 'Searchable project lists 2023 to 2025'], ['Services', 'services.html', 'Government services guide'], ['Hotlines', 'hotlines.html', 'Emergency numbers for Carles, Iloilo'], ['Officials', 'officials.html', 'SK Chair and council 2023 to 2026'], ['About the SK', 'about.html', 'How the SK works, policies and notices'], ['Events', 'events.html', 'Announcements and activities'], ['Downloads', 'downloads.html', 'Posters, video and printable lists'], ['FAQ', 'faq.html', 'Common questions'], ['Contact', 'contact.html', 'How to reach the SK'], ['Budget transparency', 'projects.html#transparency', 'SK budget, ABYIP, spending, how to ask for documents'], ['Accessibility', 'accessibility.html', 'Keyboard, screen reader and reduced motion support'], ['Privacy Policy', 'privacy.html', ''], ['Terms and Conditions', 'terms.html', '']].forEach(([t, u, d]) => SIDX.push([t, d, u, 'Page']));
W.POSTS.forEach(p => SIDX.push([p.t, (p.d ? p.d + '. ' : '') + p.c.slice(0, 110), reportFile(p), 'Report']));
ALLP.forEach(p => SIDX.push([p.t, W.SECTORS[p.s] + (p.d ? ', ' + p.d : ''), 'projects.html', 'Project']));
W.SERVICES.forEach(v => SIDX.push([v.t, v.p.slice(0, 110), 'services.html', 'Service']));
W.HOTLINES.forEach(h => SIDX.push([EN[h.k] || h.k, h.n.join(', '), 'hotlines.html', 'Hotline']));
for (let i = 1; i <= FAQN; i++) SIDX.push([EN['faq.q' + i], '', 'faq.html', 'FAQ']);
wr('assets/js/search-index.js', 'window.SK_INDEX=' + jl(SIDX) + ';\n');

/* ---------- write pages ---------- */
const built = [];
PAGES.forEach(pg => { wr(pg.slug + '.html', render(pg)); built.push(pg); });

/* sitemap */
const idx = PAGES.filter(p => !p.noindex);
const urlOf = pg => D + (pg.slug === 'index' ? '/' : '/' + pg.slug + '.html');
const prio = pg => pg.slug === 'index' ? '1.0' : pg.report ? '0.5' : (['reports', 'projects', 'hotlines', 'services'].includes(pg.slug) ? '0.9' : ['privacy', 'terms', 'legal'].includes(pg.slug) ? '0.2' : '0.7');
const freq = pg => pg.slug === 'index' || pg.slug === 'reports' || pg.slug === 'events' ? 'weekly' : pg.report || ['privacy', 'terms', 'legal'].includes(pg.slug) ? 'yearly' : 'monthly';
wr('sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${idx.map(pg => `  <url>
    <loc>${urlOf(pg)}</loc>
    <lastmod>${TODAY}</lastmod>
    <changefreq>${freq(pg)}</changefreq>
    <priority>${prio(pg)}</priority>${pg.report ? `
    <image:image><image:loc>${abs('assets/img/posters/' + pg.report.img + '.jpg')}</image:loc><image:title>${esc(pg.report.t)}</image:title></image:image>` : pg.slug === 'index' ? `
    <image:image><image:loc>${abs('assets/img/og-image.jpg')}</image:loc><image:title>SK Bancal: Sangguniang Kabataan of Barangay Bancal, Carles, Iloilo</image:title></image:image>` : ''}
  </url>`).join('\n')}
</urlset>
`);
wr('robots.txt', `User-agent: *
Allow: /
Disallow: /apps-script/
Disallow: /src/
Disallow: /tools/
Disallow: /404.html

Sitemap: ${D}/sitemap.xml
`);

/* manifest */
wr('manifest.webmanifest', JSON.stringify({
  id: './', name: 'SK Bancal', short_name: 'SK Bancal', description: 'Sangguniang Kabataan of Barangay Bancal, Carles, Iloilo', lang: 'en', dir: 'ltr',
  start_url: './', scope: './', display: 'standalone', orientation: 'portrait', background_color: '#FFD60A', theme_color: '#FFD60A', categories: ['government', 'news'],
  icons: [{ src: 'assets/img/icon-192.png', sizes: '192x192', type: 'image/png', purpose: 'any maskable' }, { src: 'assets/img/icon-512.png', sizes: '512x512', type: 'image/png', purpose: 'any maskable' }],
  shortcuts: [{ name: 'Emergency hotlines', short_name: 'Hotlines', url: 'hotlines.html', icons: [{ src: 'assets/img/icon-192.png', sizes: '192x192' }] }, { name: 'Accomplishment reports', short_name: 'Reports', url: 'reports.html', icons: [{ src: 'assets/img/icon-192.png', sizes: '192x192' }] }]
}, null, 2) + '\n');

/* service worker: network first, cached pages work offline */
const core = ['./', ...PAGES.filter(p => !p.report && p.slug !== '404').map(p => p.slug + '.html'), 'assets/css/style.css', 'assets/css/motion.css', 'assets/js/fx.js', 'assets/js/search-index.js', 'assets/js/boot.js', 'assets/js/config.js', 'assets/js/data.js', 'assets/js/main.js', 'assets/img/logo.png', 'assets/img/favicon.png'];
wr('sw.js', `// SK Bancal service worker. Network first, cache as fallback so the site and hotlines open offline.
// Generated by tools/build.js. Do not edit by hand.
const V = 'skb-v${SITE.version}';
const CORE = ${JSON.stringify(core)};
self.addEventListener('install', e => { e.waitUntil(caches.open(V).then(c => c.addAll(CORE)).then(() => self.skipWaiting())); });
self.addEventListener('activate', e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== V).map(k => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener('fetch', e => {
  const r = e.request, u = new URL(r.url);
  if (r.method !== 'GET' || u.origin !== location.origin || /\\.mp4$/.test(u.pathname)) return;
  e.respondWith(fetch(r).then(res => { if (res.ok) { const c = res.clone(); caches.open(V).then(ch => ch.put(r, c)); } return res; }).catch(() => caches.match(r).then(m => m || (r.mode === 'navigate' ? caches.match('index.html') : Response.error()))));
});
`);

/* security headers (same policy for Apache/LiteSpeed, Vercel, Netlify and Cloudflare Pages) */
const CSP = [
  "default-src 'self'", "script-src 'self' https://static.cloudflareinsights.com", "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
  "font-src 'self' https://fonts.gstatic.com", "img-src 'self' data: https:", "media-src 'self'", "connect-src 'self' https://script.google.com https://script.googleusercontent.com https://cloudflareinsights.com",
  "object-src 'none'", "base-uri 'self'", "form-action 'self'", "frame-ancestors 'none'", 'upgrade-insecure-requests'
].join('; ');
const HEADERS = {
  'Content-Security-Policy': CSP, 'X-Content-Type-Options': 'nosniff', 'Referrer-Policy': 'strict-origin-when-cross-origin',
  'Permissions-Policy': 'camera=(), microphone=(), geolocation=(), payment=(), usb=(), interest-cohort=()', 'Cross-Origin-Opener-Policy': 'same-origin',
  'X-Frame-Options': 'DENY', 'Strict-Transport-Security': 'max-age=31536000'
};
wr('.htaccess', `# For Hostinger / Apache / LiteSpeed. Vercel and Netlify ignore this file. Generated by tools/build.js.
RewriteEngine On
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}/$1 [L,R=301]

ErrorDocument 404 /404.html
Options -Indexes
DirectoryIndex index.html

# Keep build tools, sources and notes private
RedirectMatch 404 ^/(src|tools|apps-script)(/|$)
<FilesMatch "\\.md$">
  Require all denied
</FilesMatch>

<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/css application/javascript application/json application/xml image/svg+xml
</IfModule>
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/jpeg "access plus 6 months"
  ExpiresByType image/png "access plus 6 months"
  ExpiresByType video/mp4 "access plus 6 months"
  ExpiresByType font/woff2 "access plus 1 year"
  ExpiresByType text/css "access plus 1 week"
  ExpiresByType application/javascript "access plus 1 week"
  ExpiresByType text/html "access plus 0 seconds"
</IfModule>
<IfModule mod_headers.c>
${Object.entries(HEADERS).map(([k, v]) => `  Header always set ${k} "${v}"`).join('\n')}
</IfModule>
AddType application/manifest+json .webmanifest
`);
wr('vercel.json', JSON.stringify({ cleanUrls: false, trailingSlash: false, headers: [{ source: '/(.*)', headers: Object.entries(HEADERS).map(([key, value]) => ({ key, value })) }, { source: '/assets/(.*)', headers: [{ key: 'Cache-Control', value: 'public, max-age=15552000' }] }] }, null, 2) + '\n');
wr('_headers', '/*\n' + Object.entries(HEADERS).map(([k, v]) => `  ${k}: ${v}`).join('\n') + '\n/assets/*\n  Cache-Control: public, max-age=15552000\n');
wr('.vercelignore', 'src\ntools\napps-script\n*.md\n');
wr('.well-known/security.txt', `Contact: ${SITE.securityContact}\nExpires: ${SITE.securityExpires}\nPreferred-Languages: en, fil\nCanonical: ${D}/.well-known/security.txt\n`);

console.log('built', PAGES.length, 'pages,', idx.length, 'in sitemap, domain', D);

/* ---------- optional: single-file preview source (used for the offline preview, not for hosting) ---------- */
if (PREVIEW) {
  const slugs = ['index', 'reports', 'projects', 'officials', 'about', 'services', 'hotlines', 'events', 'downloads', 'faq', 'contact', 'accessibility', 'privacy', 'terms', 'legal'];
  const map = Object.fromEntries(slugs.map(s => [s + '.html', '#pg-' + s]));
  const pgs = slugs.map(s => PAGES.find(p => p.slug === s));
  let bodies = pgs.map(pg => {
    const m = /<main id="main">([\s\S]*?)<\/main>/.exec(render(pg))[1].replace(/<noscript>[\s\S]*?<\/noscript>/, '');
    return `<div class="pv-page" id="pg-${pg.slug}" hidden>${m}</div>`;
  }).join('\n');
  const home = render(PAGES[0]);
  let out = home.replace(/<main id="main">[\s\S]*?<\/main>/, '<main id="main">\n' + bodies + '\n</main>')
    .replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>/, '').replace(/<link rel="canonical"[^>]*>/, '').replace(/<meta property="og:[^>]*>|<meta name="twitter:[^>]*>/g, '');
  out = out.replace(/(href=")([a-z]+)\.html(#[a-z]*)?(")/g, (m, a, s, h, z) => map[s + '.html'] ? a + map[s + '.html'] + z : m);
  out = out.replace(/(href=")report-[^"]+\.html(")/g, '$1#pg-reports$2').replace(/href="index\.html"/g, 'href="#pg-index"');
  out = out.replace('</body>', `<script>(function(){var pages=[].slice.call(document.querySelectorAll('.pv-page'));function show(){var h=location.hash.slice(1)||'pg-index',tgt=h;if(h.indexOf('post-')===0)tgt='pg-reports';if(!document.getElementById(tgt)||tgt.indexOf('pg-')!==0)tgt='pg-index';pages.forEach(function(p){p.hidden=p.id!==tgt});document.documentElement.setAttribute('data-page',tgt.slice(3));[].slice.call(document.querySelectorAll('.nav a')).forEach(function(a){var on=a.getAttribute('href')==='#'+tgt;a.classList.toggle('on',on);on?a.setAttribute('aria-current','page'):a.removeAttribute('aria-current')});if(h.indexOf('post-')===0){var el=document.getElementById(h);if(el)setTimeout(function(){el.scrollIntoView()},50)}else window.scrollTo(0,0)}addEventListener('hashchange',show);show()})();</script>\n</body>`);
  fs.writeFileSync(PREVIEW, out);
  console.log('preview source ->', PREVIEW);
}
