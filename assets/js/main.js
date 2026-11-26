/* Bancal SK v1.7.0 */
(() => {
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const root = document.documentElement;
  const store = {
    get(k) { try { return localStorage.getItem(k); } catch { return null; } },
    set(k, v) { try { localStorage.setItem(k, v); } catch {} }
  };
  const FB_PAGE = 'https://www.facebook.com/share/1Kp7Ma35EQ/';

  /* ---------- language ---------- */
  const onLang = [];
  let lang = store.get('lang') || 'en';
  if (!window.I18N[lang]) lang = 'en';
  const t = k => (window.I18N[lang] && window.I18N[lang][k]) || window.I18N.en[k] || k;
  function applyLang() {
    root.lang = lang === 'tl' ? 'fil' : lang === 'hil' ? 'hil' : 'en';
    $$('[data-i18n]').forEach(el => { el.textContent = t(el.dataset.i18n); });
    $$('[data-i18n-ph]').forEach(el => { el.placeholder = t(el.dataset.i18nPh); });
    $$('[data-lang]').forEach(b => b.setAttribute('aria-pressed', String(b.dataset.lang === lang)));
    onLang.forEach(f => f());
  }
  $$('[data-lang]').forEach(b => b.addEventListener('click', () => { lang = b.dataset.lang; store.set('lang', lang); applyLang(); }));

  const langBtn = $('#langBtn'), langMenu = $('#langMenu');
  const closeLang = () => { langMenu.hidden = true; langBtn.setAttribute('aria-expanded', 'false'); };
  langBtn.addEventListener('click', e => { e.stopPropagation(); langMenu.hidden = !langMenu.hidden; langBtn.setAttribute('aria-expanded', String(!langMenu.hidden)); });
  langMenu.addEventListener('click', closeLang);
  document.addEventListener('click', e => { if (!e.target.closest('.langwrap')) closeLang(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeLang(); });
  $$('.intro-lang').forEach(g => { g.addEventListener('click', e => e.stopPropagation()); g.addEventListener('keydown', e => e.stopPropagation()); });

  /* ---------- theme ---------- */
  $('#themeBtn').addEventListener('click', e => {
    const btn = e.currentTarget, next = root.dataset.theme === 'dark' ? 'light' : 'dark';
    const apply = () => {
      root.dataset.theme = next; store.set('theme', next);
      const m = $('meta[name="theme-color"]'); if (m) m.content = next === 'dark' ? '#0A1840' : '#FFD60A';
    };
    btn.classList.remove('spin'); void btn.offsetWidth; btn.classList.add('spin');
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) { apply(); return; }
    // a circle grows from the button and paints the new theme over the page
    const r = btn.getBoundingClientRect(), x = r.left + r.width / 2, y = r.top + r.height / 2;
    const R = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y));
    if (document.startViewTransition) {
      root.classList.add('theme-vt');
      const vt = document.startViewTransition(apply);
      vt.ready.then(() => root.animate({ clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${R}px at ${x}px ${y}px)`] }, { duration: 850, easing: 'cubic-bezier(.65,0,.25,1)', pseudoElement: '::view-transition-new(root)' }));
      vt.finished.finally(() => root.classList.remove('theme-vt'));
    } else {
      const w = document.createElement('div'); w.className = 'theme-wipe';
      w.style.cssText = `left:${x}px;top:${y}px;background:${next === 'dark' ? '#0A1840' : '#FFDA2B'}`;
      document.body.append(w);
      w.animate([{ transform: 'translate(-50%,-50%) scale(0)' }, { transform: `translate(-50%,-50%) scale(${R / 10 + 1})` }], { duration: 700, easing: 'cubic-bezier(.65,0,.25,1)', fill: 'forwards' });
      setTimeout(apply, 560);
      setTimeout(() => w.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 300, fill: 'forwards' }).onfinish = () => w.remove(), 720);
    }
  });

  /* ---------- menu ---------- */
  const nav = $('#nav'), menuBtn = $('#menuBtn');
  menuBtn.addEventListener('click', () => { const o = nav.classList.toggle('open'); menuBtn.setAttribute('aria-expanded', String(o)); });
  nav.addEventListener('click', e => { if (e.target.closest('a')) { nav.classList.remove('open'); menuBtn.setAttribute('aria-expanded', 'false'); } });

  /* ---------- feed ---------- */
  const cal = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/></svg>';
  const heart = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round" aria-hidden="true"><path d="M12 21s-7.5-4.6-9.6-9.2C.9 8.3 3 4.8 6.4 4.8c2 0 3.6 1 5.6 3.2 2-2.2 3.6-3.2 5.6-3.2 3.4 0 5.5 3.5 4 7-2.1 4.6-9.6 9.2-9.6 9.2z"/></svg>';
  const esc = s => s.replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  let liked = [];
  try { liked = JSON.parse(store.get('salamat') || '[]'); } catch {}

  const feed = $('#feed');
  // Posts are written into the HTML by tools/build.js. Here we only restore which ones this visitor hearted.
  $$('[data-like]').forEach(b => b.setAttribute('aria-pressed', String(liked.includes(b.dataset.like))));

  let hearts = {};
  const renderCount = id => { const c = $(`[data-like="${id}"] .cnt`); if (c) { const n = hearts[id] || 0; c.textContent = n > 0 ? n.toLocaleString('en-PH') : ''; } };
  function setLike(id, on, btn) {
    hearts[id] = Math.max(0, (hearts[id] || 0) + (on ? 1 : -1)); renderCount(id);
    api({ action: 'heart', id, on: on ? 1 : 0 }).then(r => { if (r && typeof r.count === 'number') { hearts[id] = r.count; renderCount(id); } });
    btn.setAttribute('aria-pressed', String(on));
    liked = on ? [...new Set([...liked, id])] : liked.filter(x => x !== id);
    store.set('salamat', JSON.stringify(liked));
    if (on) {
      btn.classList.remove('pop'); void btn.offsetWidth; btn.classList.add('pop');
      for (let i = 0; i < 8; i++) {
        const s = document.createElement('i'); s.className = 'spark'; s.style.setProperty('--a', (i * 45 + 20) + 'deg');
        btn.append(s); setTimeout(() => s.remove(), 700);
      }
    }
  }
  document.addEventListener('click', e => {
    const b = e.target.closest('[data-like]'); if (!b) return;
    setLike(b.dataset.like, b.getAttribute('aria-pressed') !== 'true', b);
  });
  function likeFromPoster(poster) {
    const post = poster.closest('.post'), btn = $('.like', post); if (!btn) return;
    if (btn.getAttribute('aria-pressed') !== 'true') setLike(post.dataset.id, true, btn);
    const bh = $('.bigheart', poster); bh.classList.remove('show'); void bh.offsetWidth; bh.classList.add('show');
  }
  if (feed) $$('.fchip[data-month]').forEach(c => c.addEventListener('click', () => {
    const m = c.dataset.month;
    $$('.fchip[data-month]').forEach(x => x.setAttribute('aria-pressed', String(x === c)));
    $$('.post', feed).forEach(p => { p.hidden = !(m === 'all' || p.dataset.month === m); });
    restagger($$('.post:not([hidden])', feed));
  }));

  /* ---------- bento tiles + ledger (projects page) ---------- */
  (function projectsPage() {
  const bento = $('#bento'); if (!bento) return;
  const tileStyle = { sports: 't-navy', edu: 't-sun', gov: 't-white', health: 't-red', incl: 't-blue', socio: 't-white', env: 't-blue', youth: 't-red', aware: 't-sun' };
  const order = ['sports', 'edu', 'gov', 'health', 'incl', 'socio', 'env', 'youth', 'aware'];
  let yr = '2025', sector = null, animRows = false;
  const ALLDATA = window.PROJECTS.map(p => Object.assign({ y: '2025' }, p)).concat(window.PROJECTS_2324.map(p => Object.assign({ y: '2023–24' }, p)));
  const DATA = () => (yr === 'all' ? ALLDATA : yr === '2324' ? window.PROJECTS_2324 : window.PROJECTS);
  function renderBento() {
    const counts = {}; DATA().forEach(p => { counts[p.s] = (counts[p.s] || 0) + 1; });
    bento.innerHTML = order.filter(k => counts[k]).map(k => `<button class="tile ${k} ${tileStyle[k]}" type="button" data-sector="${k}" aria-pressed="false"><b>${counts[k]}</b><span>${esc(window.SECTORS[k])}</span></button>`).join('');
  }
  renderBento();
  $('#yearTabs').addEventListener('click', e => {
    const b = e.target.closest('[data-year]'); if (!b || b.dataset.year === yr) return;
    yr = b.dataset.year; sector = null;
    $$('[data-year]', $('#yearTabs')).forEach(x => x.setAttribute('aria-pressed', String(x === b)));
    const s = yr === '2324' ? '.2324' : yr === 'all' ? '.all' : '';
    $('#projBrush').textContent = yr === '2324' ? '2023–24' : yr === 'all' ? '2023–25' : '2025';
    $('#projTitle').dataset.i18n = 'proj.title' + s; $('#projBody').dataset.i18n = 'proj.body' + s; $('#projPoster').dataset.i18n = 'proj.poster' + s;
    const pp = $('#projPoster'); pp.hidden = yr === 'all'; pp.dataset.full = 'assets/img/posters/' + (yr === '2324' ? 'ppa-2324' : 'ppa-2025') + '.jpg'; pp.dataset.cap = yr === '2324' ? 'Accomplishments 2023–2024' : 'Projects, Programs and Activities Implemented in 2025';
    renderBento(); applyLang(); syncSector();
  });
  bento.addEventListener('click', e => {
    const b = e.target.closest('[data-sector]'); if (!b) return;
    sector = sector === b.dataset.sector ? null : b.dataset.sector;
    syncSector();
  });
  $('#clearSector').addEventListener('click', () => { sector = null; syncSector(); });
  function syncSector() {
    $$('.tile', bento).forEach(x => x.setAttribute('aria-pressed', String(x.dataset.sector === sector)));
    $('#clearSector').hidden = !sector;
    animRows = true; renderLedger();
  }
  const q = $('#q');
  q.addEventListener('input', renderLedger);
  function renderLedger() {
    const term = q.value.trim().toLowerCase();
    const rows = DATA().filter(p => (!sector || p.s === sector) && (!term || (p.t + ' ' + window.SECTORS[p.s] + ' ' + p.d).toLowerCase().includes(term)));
    $('#ledgerBody').innerHTML = rows.map((p, i) => `<tr${animRows ? ` class="rowin" style="--i:${Math.min(i, 14)}"` : ''}><td class="n">${yr === 'all' ? i + 1 : p.n}</td><td>${esc(p.t)}</td><td>${esc(window.SECTORS[p.s])}${yr === 'all' ? ' · ' + p.y : ''}</td><td class="d">${esc(p.d)}</td></tr>`).join('');
    $('#count').textContent = t('proj.count').replace('{n}', rows.length).replace('49', DATA().length);
    $('#clearSector').textContent = t('bento.clear').replace('49', DATA().length);
    $('#empty').hidden = rows.length > 0;
    animRows = false;
  }
  onLang.push(renderLedger);
  syncSector();
  })();

  /* ---------- officials + latest ---------- */
  // Officials, latest reports and hotlines are written into the HTML by tools/build.js.

  /* ---------- government services carousel ---------- */
  const ext = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 01-1 1H5a1 1 0 01-1-1V7a1 1 0 011-1h5"/></svg>';
  (function servicesPage() {
  const track = $('#svcTrack'); if (!track) return;
  const prevB = $('#svcPrev'), nextB = $('#svcNext');
  const LOGOS = { lto: 'assets/img/svc/lto.png', sss: 'assets/img/svc/sss.png' };
  const BANNERS = { orus: 'orus', bir: 'bir', lto: 'lto', sss: 'sss', pagibig: 'pagibig', philhealth: 'philhealth', nbi: 'nbi', psa: 'psa', philsys: 'philsys', denr: 'denr', bfar: 'bfar', tesda: 'tesda', ched: 'ched', dole: 'dole', nyc: 'nyc', dilg: 'dilg', dfa: 'dfa' };
  const BAN = { orus: 'assets/img/svc/ban-orus.jpg', lto: 'assets/img/svc/ban-lto.jpg', sss: 'assets/img/svc/ban-sss.jpg', bir: 'assets/img/svc/ban-bir.jpg', pagibig: 'assets/img/svc/ban-pagibig.jpg', philhealth: 'assets/img/svc/ban-philhealth.jpg', nbi: 'assets/img/svc/ban-nbi.jpg', psa: 'assets/img/svc/ban-psa.jpg', philsys: 'assets/img/svc/ban-philsys.jpg', denr: 'assets/img/svc/ban-denr.jpg', bfar: 'assets/img/svc/ban-bfar.jpg', tesda: 'assets/img/svc/ban-tesda.jpg', ched: 'assets/img/svc/ban-ched.jpg', dole: 'assets/img/svc/ban-dole.jpg', nyc: 'assets/img/svc/ban-nyc.jpg', dilg: 'assets/img/svc/ban-dilg.jpg', dfa: 'assets/img/svc/ban-dfa.jpg' };
  const shot = u => 'https://api.microlink.io/?url=' + encodeURIComponent(u) + '&screenshot=true&meta=false&embed=screenshot.url&viewport.width=1280&viewport.height=800';
  const shot2 = u => 'https://image.thum.io/get/width/900/noanimate/' + u;
  const host = u => new URL(u).hostname.replace(/^www\./, '');
  // Only these sites give a usable front-page snapshot. Every other agency shows its logo, because their sites block snapshots or show error and verification pages.
  const LIVE = ['sss', 'bir', 'nyc'];
  track.innerHTML = window.SERVICES.map((s, i) => `
    <article class="card svc" data-cat="${s.c}">
      <button class="svc-shot${LIVE.includes(s.id) ? '' : ' failed'}" type="button" data-pv="${s.id}" aria-label="${esc(s.a)}: preview"><img ${LIVE.includes(s.id) ? `src="${shot(s.u)}"` : ''} data-step="0" data-id="${s.id}" alt="Front page of ${esc(host(s.u))}" loading="lazy" decoding="async"><span class="shot-fb">${BANNERS[s.id] ? `<img class="fb-banner" ${['psa', 'ched', 'tesda'].includes(s.id) ? 'style="object-position:8% center"' : ''} src="${BAN[BANNERS[s.id]]}" alt="${esc(s.a)} logo" loading="lazy">` : `<img class="fb-logo" ${LOGOS[s.id] ? `src="${LOGOS[s.id]}"` : `data-src="https://www.google.com/s2/favicons?domain=${host(s.u)}&sz=128"`} alt=""><b>${esc(s.a)}</b>`}</span><span class="shot-tag" data-i18n="svc.pv">Preview</span></button>
      <div class="svc-top"><span class="svc-badge b${i % 4}" aria-hidden="true">${esc(s.a)}</span><div><h3>${esc(s.t)}</h3><span class="host">${esc(host(s.u))}</span></div></div>
      <p>${esc(s.p)}</p>
      <details><summary data-i18n="svc.docs">Documents to prepare</summary><ul>${s.docs.map(d => `<li>${esc(d)}</li>`).join('')}</ul></details>
      <a class="btn" href="${s.u}" target="_blank" rel="noopener noreferrer"><span data-i18n="svc.open">Open official site</span>${ext}</a>
    </article>`).join('');
  $$('.svc-shot.failed .fb-logo', track).forEach(fl => { if (!fl.src && fl.dataset.src) fl.src = fl.dataset.src; });
  track.addEventListener('error', e => {
    const im = e.target; if (!im.matches) return;
    if (im.matches('.fb-logo')) { im.hidden = true; return; }
    if (!im.matches('.svc-shot > img')) return;
    const s = window.SERVICES.find(x => x.id === im.dataset.id);
    if (im.dataset.step === '0' && s) { im.dataset.step = '1'; im.src = shot2(s.u); }
    else { const sh = im.closest('.svc-shot'); sh.classList.add('failed'); const fl = $('.fb-logo', sh); if (fl && !fl.src && fl.dataset.src) fl.src = fl.dataset.src; }
  }, true);
  track.addEventListener('load', e => { if (e.target.matches && e.target.matches('.svc-shot > img')) e.target.closest('.svc-shot').classList.add('ok'); }, true);
  track.addEventListener('click', e => {
    const b = e.target.closest('[data-pv]'); if (!b) return;
    const s = window.SERVICES.find(x => x.id === b.dataset.pv), im = $('img', b), pv = $('#preview');
    const fl = $('.fb-banner, .fb-logo', b), failed = b.classList.contains('failed'); $('#pvImg').classList.toggle('logo', failed && !fl.matches('.fb-banner')); $('#pvImg').hidden = failed && !(fl && fl.src && !fl.hidden); $('#pvImg').src = failed && fl ? fl.src : (im.currentSrc || im.src); $('#pvImg').alt = im.alt;
    $('#pvCap').textContent = s.t + ' · ' + host(s.u); $('#pvLink').href = s.u; pv.showModal();
  });
  const sf = $('#svcFilters');
  sf.innerHTML = Object.entries(window.SVC_CATS).map(([k, v], i) => `<button class="fchip" type="button" data-cat="${k}" aria-pressed="${i === 0}">${esc(v)}</button>`).join('');
  const syncCar = () => { prevB.disabled = track.scrollLeft < 8; nextB.disabled = track.scrollLeft + track.clientWidth >= track.scrollWidth - 8; };
  let cat = 'all', sq = '';
  const hay = window.SERVICES.reduce((o, s) => (o[s.id] = JSON.stringify(s).toLowerCase(), o), {});
  function applySvc() {
    let n = 0;
    $$('.svc', track).forEach(c => { const id = c.querySelector('[data-pv]').dataset.pv, ok = (cat === 'all' || c.dataset.cat === cat) && (!sq || hay[id].includes(sq)); c.hidden = !ok; if (ok) n++; });
    $('#svcEmpty').hidden = n > 0; track.scrollTo({ left: 0, behavior: 'instant' }); syncCar();
  }
  sf.addEventListener('click', e => {
    const b = e.target.closest('[data-cat]'); if (!b) return;
    $$('.fchip', sf).forEach(x => x.setAttribute('aria-pressed', String(x === b)));
    cat = b.dataset.cat; applySvc();
  });
  $('#svcSearch').addEventListener('input', e => { sq = e.target.value.trim().toLowerCase(); applySvc(); });
  const slide = d => track.scrollBy({ left: d * Math.max(track.clientWidth * .8, 260), behavior: reduceMotionPref() ? 'auto' : 'smooth' });
  function reduceMotionPref() { return matchMedia('(prefers-reduced-motion: reduce)').matches; }
  prevB.addEventListener('click', () => slide(-1)); nextB.addEventListener('click', () => slide(1));
  track.addEventListener('scroll', syncCar, { passive: true });
  track.addEventListener('keydown', e => { if (e.key === 'ArrowRight') { e.preventDefault(); slide(1); } if (e.key === 'ArrowLeft') { e.preventDefault(); slide(-1); } });
  addEventListener('resize', syncCar); syncCar();
  })();


  /* ---------- shared counters (optional Apps Script backend) ---------- */
  const CFG = window.SK_CONFIG || {};
  async function api(params) {
    if (!CFG.counterUrl) return null;
    try { const r = await fetch(CFG.counterUrl + '?' + new URLSearchParams(params)); return await r.json(); } catch { return null; }
  }
  const showVisits = n => { $('#visitCount').textContent = Number(n).toLocaleString('en-PH'); $('#visitNote').textContent = CFG.counterUrl ? '' : t('visits.demo'); };
  async function loadCounters() {
    const today = new Date().toISOString().slice(0, 10), seen = store.get('skb-visit');
    if (!CFG.counterUrl) {
      hearts = {}; liked.forEach(id => { hearts[id] = 1; });
      let n = parseInt(store.get('skb-visits-local') || '0', 10);
      if (seen !== today) { n += 1; store.set('skb-visit', today); store.set('skb-visits-local', String(n)); }
      showVisits(Math.max(n, 1)); [...window.POSTS, ...window.ARCHIVE].forEach(p => renderCount(p.id)); return;
    }
    if (seen !== today) { store.set('skb-visit', today); await api({ action: 'visit' }); }
    const r = await api({ action: 'counts' });
    if (r) { hearts = r.hearts || {}; showVisits(r.visits || 0); [...window.POSTS, ...window.ARCHIVE].forEach(p => renderCount(p.id)); }
  }

  /* ---------- toast, share, copy ---------- */
  const toastEl = $('#toast'); let toastT;
  function toast(msg) { toastEl.textContent = msg; toastEl.classList.add('show'); clearTimeout(toastT); toastT = setTimeout(() => toastEl.classList.remove('show'), 1800); }
  async function copyText(text) {
    try { await navigator.clipboard.writeText(text); } catch { const ta = document.createElement('textarea'); ta.value = text; document.body.append(ta); ta.select(); try { document.execCommand('copy'); } catch {} ta.remove(); }
  }
  document.addEventListener('click', async e => {
    const s = e.target.closest('[data-share]');
    if (s) {
      const p = [...window.POSTS, ...window.ARCHIVE].find(x => x.id === s.dataset.share), id = s.dataset.share;
      const url = /^https?:$/.test(location.protocol) ? new URL('report-' + id + '.html', location.href).href : location.href.split('#')[0] + '#post-' + id;
      if (navigator.share) { try { await navigator.share({ title: 'SK Bancal: ' + p.t, url }); } catch {} } else { await copyText(url); toast(t('toast.link')); }
      return;
    }
    const c = e.target.closest('[data-copy]');
    if (c) { await copyText(c.dataset.copy); toast(t('hl.copied')); }
  });

  /* ---------- emergency hotlines ---------- */
  const sos = $('#sos'), hotSec = $('#hotlines');
  if (hotSec && 'IntersectionObserver' in window) new IntersectionObserver(es => es.forEach(en => sos.classList.toggle('away', en.isIntersecting)), { threshold: .15 }).observe(hotSec);

  if (location.hash === '#print' && $('#hotGrid')) setTimeout(() => window.print(), 700);

  /* ---------- install + offline ---------- */
  let dip = null; const installBtn = $('#installBtn');
  addEventListener('beforeinstallprompt', e => { e.preventDefault(); dip = e; installBtn.hidden = false; });
  installBtn.addEventListener('click', async () => { if (!dip) return; dip.prompt(); await dip.userChoice; dip = null; installBtn.hidden = true; });
  if ('serviceWorker' in navigator && /^https?:$/.test(location.protocol)) addEventListener('load', () => navigator.serviceWorker.register('sw.js').catch(() => {}));

  /* ---------- dialogs ---------- */
  const desk = $('#desk'), lb = $('#lightbox');
  const openLb = f => { $('#lbImg').src = f.dataset.full; $('#lbImg').alt = f.dataset.cap || ''; $('#lbCap').textContent = f.dataset.cap || ''; lb.showModal(); };
  let tapT = null;
  document.addEventListener('click', e => {
    const o = e.target.closest('[data-open-desk]');
    if (o) { nav.classList.remove('open'); desk.showModal(); return; }
    const f = e.target.closest('[data-full]');
    if (f) {
      e.preventDefault();
      if (f.closest('#feed')) {
        if (tapT) { clearTimeout(tapT); tapT = null; likeFromPoster(f); }
        else tapT = setTimeout(() => { tapT = null; openLb(f); }, 260);
      } else openLb(f);
      return;
    }
    if (e.target.closest('[data-close]')) { (e.target.closest('dialog')).close(); return; }
    if (e.target.closest('[data-print]')) { window.print(); return; }
    if (e.target === desk || e.target === lb || e.target === $('#preview')) e.target.close();
  });
  $('#deskForm').addEventListener('submit', async e => {
    e.preventDefault();
    const name = $('#fName').value.trim(), topic = $('#fTopic').value, msg = $('#fMsg').value.trim();
    const text = `${t('form.hi')}\n\n${topic}\n${msg}${name ? `\n\n— ${name}` : ''}`;
    try { await navigator.clipboard.writeText(text); } catch {
      const ta = document.createElement('textarea'); ta.value = text; document.body.append(ta); ta.select(); try { document.execCommand('copy'); } catch {} ta.remove();
    }
    $('#deskStatus').textContent = t('form.ok');
    window.open(FB_PAGE, '_blank', 'noopener');
  });

  /* ---------- motion ---------- */
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  function restagger(list) {
    if (reduce) return;
    list.forEach((el, i) => { el.classList.remove('in'); el.style.setProperty('--d', Math.min(i, 5) * 70 + 'ms'); });
    void document.body.offsetWidth;
    list.forEach(el => el.classList.add('in'));
  }
  function countUp(el) {
    const end = parseInt(el.dataset.end, 10), t0 = performance.now(), dur = 1100;
    const step = n => { const k = Math.min(1, (n - t0) / dur), e = 1 - Math.pow(1 - k, 3); el.textContent = Math.round(end * e); if (k < 1) requestAnimationFrame(step); };
    requestAnimationFrame(step);
  }
  let motionOn = false;
  function setupMotion() {
    if (motionOn) return; motionOn = true;
    const pt = $('.portrait'); if (pt) pt.addEventListener('animationend', () => pt.classList.remove('rv'));
    if (reduce || !('IntersectionObserver' in window)) return;
    const targets = $$('#feed .post, #latestGrid .post, .off, .sec-head, .flag-grid > *, .ledger, .reach, .side .card, .bento, .nums, .carousel, .egov, .quick, .dl-grid .dl, .about-grid > *, .rd, .tl-i, .sosband-in, .wall, .rvx, .tr-bars, .tr-top, .tr-card');
    targets.forEach(el => el.classList.add('reveal'));
    const groups = new Map();
    targets.forEach(el => { const k = el.parentElement; const i = groups.get(k) || 0; groups.set(k, i + 1); el.style.setProperty('--d', (i % 4) * 80 + 'ms'); });
    const nums = $$('.stat b, .tile b, .num-tile b').filter(b => /^\d+$/.test(b.textContent) && +b.textContent < 100);
    nums.forEach(b => { b.dataset.end = b.textContent; b.textContent = '0'; });
    const io2 = new IntersectionObserver(es => es.forEach(en => {
      if (!en.isIntersecting) return;
      if (en.intersectionRatio < .12 && en.intersectionRect.height < innerHeight * .12) return; // tall blocks (like the project table) reveal once a slice of the screen is filled
      const el = en.target; io2.unobserve(el);
      if (el.matches('.stat b, .tile b, .num-tile b')) { countUp(el); return; }
      el.classList.add('in');
    }), { threshold: [0, .04, .12, .25], rootMargin: '0px 0px -6% 0px' });
    targets.forEach(el => io2.observe(el)); nums.forEach(b => io2.observe(b));
    // pointer tilt on the chair portrait
    if (pt && matchMedia('(hover:hover)').matches) {
      pt.addEventListener('pointermove', e => { const r = pt.getBoundingClientRect(); const x = (e.clientX - r.left) / r.width - .5, y = (e.clientY - r.top) / r.height - .5; pt.style.setProperty('--ry', (x * 9).toFixed(2) + 'deg'); pt.style.setProperty('--rx', (-y * 9).toFixed(2) + 'deg'); });
      pt.addEventListener('pointerleave', () => { pt.style.setProperty('--rx', '0deg'); pt.style.setProperty('--ry', '0deg'); });
    }
  }
  const hdr = $('.site-header'), prog = $('#progress'), heroEl = $('.hero');
  let tick = false;
  const onScroll = () => {
    if (tick) return; tick = true;
    requestAnimationFrame(() => {
      const y = scrollY, max = document.documentElement.scrollHeight - innerHeight;
      prog.style.transform = `scaleX(${max > 0 ? y / max : 0})`;
      hdr.classList.toggle('scrolled', y > 40);
      if (!reduce && heroEl) heroEl.style.setProperty('--sy', y);
      tick = false;
    });
  };
  addEventListener('scroll', onScroll, { passive: true }); onScroll();

  /* ---------- intro ---------- */
  const intro = $('#intro');
  const timers = [];
  function reveal() { root.classList.add('ready'); setupMotion(); }
  function finish() {
    root.classList.remove('intro-on'); root.classList.add('no-intro');
    intro.remove(); reveal();
    try { sessionStorage.setItem('skb-intro', '1'); } catch {}
  }
  function setStep(n) { intro.dataset.step = n; }
  if (intro && root.classList.contains('intro-on')) {
    let started = false;
    const go = () => {
      if (!started) {
        started = true; setStep(1); intro.setAttribute('aria-label', 'Welcome');
        timers.push(setTimeout(() => setStep(2), 1700));
        timers.push(setTimeout(exit, 2400));
      } else exit();
    };
    let leaving = false;
    function exit() {
      if (leaving) return; leaving = true; timers.forEach(clearTimeout);
      setStep(3); reveal();
      setTimeout(finish, 1000);
    }
    intro.addEventListener('click', go);
    intro.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); go(); } });
    intro.focus({ preventScroll: true });
  } else { if (intro) intro.remove(); reveal(); }

  applyLang();
  loadCounters();

  /* ---------- announcement bar (set window.ANNOUNCEMENT in data.js) ---------- */
  const A = window.ANNOUNCEMENT, ann = $('#announce');
  if (A && A.t && ann) {
    const s = document.createElement('span'); s.textContent = A.t; ann.append(s);
    if (A.href) { const a = document.createElement('a'); a.href = A.href; a.textContent = A.link || 'Details'; if (/^https?:/.test(A.href) && !A.href.startsWith(location.origin)) { a.target = '_blank'; a.rel = 'noopener'; } ann.append(a); }
    ann.hidden = false;
  }

  /* ---------- text size ---------- */
  const tsBtns = $$('[data-ts]'), curTs = store.get('textsize') || '1';
  const markTs = v => tsBtns.forEach(b => b.setAttribute('aria-pressed', String(b.dataset.ts === v)));
  markTs(tsBtns.some(b => b.dataset.ts === curTs) ? curTs : '1');
  tsBtns.forEach(b => b.addEventListener('click', () => { root.style.fontSize = (parseFloat(b.dataset.ts) * 100) + '%'; store.set('textsize', b.dataset.ts); markTs(b.dataset.ts); }));

  /* ---------- optional Cloudflare Web Analytics (no cookies) ---------- */
  if (CFG.cfBeacon && /^https?:$/.test(location.protocol)) {
    const sc = document.createElement('script'); sc.defer = true; sc.src = 'https://static.cloudflareinsights.com/beacon.min.js';
    sc.dataset.cfBeacon = JSON.stringify({ token: CFG.cfBeacon }); document.head.append(sc);
  }
})();
