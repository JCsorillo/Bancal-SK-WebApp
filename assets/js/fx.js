/* SK Bancal motion helpers (v1.8.0). Loaded after main.js. Pure decoration: the site works without it. */
(function () {
  'use strict';
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  var fine = matchMedia('(hover:hover) and (pointer:fine)').matches;
  var root = document.documentElement;
  function LG() { var l = root.lang || 'en'; return l === 'fil' ? 'tl' : l; }

  /* button ripple */
  document.addEventListener('pointerdown', function (e) {
    var b = e.target.closest && e.target.closest('.btn,.ibtn'); if (!b || reduce) return;
    var r = b.getBoundingClientRect(), d = Math.max(r.width, r.height) * 2, s = document.createElement('span');
    s.className = 'rip'; s.style.cssText = 'width:' + d + 'px;height:' + d + 'px;left:' + (e.clientX - r.left - d / 2) + 'px;top:' + (e.clientY - r.top - d / 2) + 'px';
    b.appendChild(s); setTimeout(function () { s.remove(); }, 650);
  });

  /* language switch: content blurs back in */
  $$('[data-lang]').forEach(function (b) {
    b.addEventListener('click', function () {
      var m = $('main'); if (!m || reduce || !m.animate) return;
      m.animate([{ opacity: .25, filter: 'blur(7px)', transform: 'translateY(8px)' }, { opacity: 1, filter: 'blur(0)', transform: 'none' }], { duration: 520, easing: 'cubic-bezier(.2,.8,.2,1)' });
    });
  });

  /* back to top with a progress ring */
  var tt = document.createElement('button');
  tt.type = 'button'; tt.className = 'totop'; tt.setAttribute('aria-label', 'Back to top');
  tt.innerHTML = '<svg viewBox="0 0 40 40" aria-hidden="true"><circle class="bg" cx="20" cy="20" r="16"/><circle class="fg" cx="20" cy="20" r="16" pathLength="100.5"/></svg><svg class="ar" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" style="position:relative;transform:none;inset:auto"><path d="M12 19V5M5 12l7-7 7 7"/></svg>';
  document.body.appendChild(tt);
  tt.addEventListener('click', function () { scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' }); });

  /* scroll-linked values */
  var tl = $('.tl'), mottos = $$('.motto'), hero = $('.hero'), tick = false;
  function frame() {
    tick = false;
    var y = scrollY, max = root.scrollHeight - innerHeight, vh = innerHeight;
    tt.classList.toggle('show', y > 600);
    root.style.setProperty('--sp', max > 0 ? (y / max).toFixed(4) : 0);
    tt.style.setProperty('--sp', max > 0 ? (y / max).toFixed(4) : 0);
    if (reduce) return;
    if (tl) { var r = tl.getBoundingClientRect(); tl.style.setProperty('--tp', Math.max(0, Math.min(1, (vh * .6 - r.top) / r.height)).toFixed(4)); }
    mottos.forEach(function (m) { var r = m.getBoundingClientRect(); m.style.setProperty('--mp', Math.max(0, Math.min(1, 1 - (r.top + r.height) / (vh + r.height))).toFixed(4)); });
  }
  function req() { if (!tick) { tick = true; requestAnimationFrame(frame); } }
  addEventListener('scroll', req, { passive: true }); addEventListener('resize', req); frame();

  /* headline: words rise in one by one */
  var h1 = $('.hero h1');
  if (h1 && !reduce) {
    var n = 0, out = [];
    h1.childNodes.forEach(function (nd) {
      if (nd.nodeType === 3) nd.textContent.split(/(\s+)/).forEach(function (w) { if (!w) return; if (/^\s+$/.test(w)) out.push(' '); else out.push('<span class="hl-w" style="--w:' + (n++) + '">' + w.replace(/[&<>]/g, '') + '</span>'); });
      else if (nd.nodeName === 'BR') out.push('<br>');
    });
    h1.innerHTML = out.join('');
  }

  /* hero: pointer spotlight + magnetic buttons */
  if (hero && fine && !reduce) {
    var sh = $('.shapes', hero);
    hero.addEventListener('pointermove', function (e) {
      var r = hero.getBoundingClientRect(); if (sh) { sh.style.setProperty('--mx', (e.clientX - r.left) + 'px'); sh.style.setProperty('--my', (e.clientY - r.top) + 'px'); sh.style.setProperty('--so', 1); }
    });
    hero.addEventListener('pointerleave', function () { if (sh) sh.style.setProperty('--so', 0); });
    $$('.hero-actions .btn', hero).forEach(function (b) {
      b.addEventListener('pointermove', function (e) { var r = b.getBoundingClientRect(); b.style.setProperty('--tx', ((e.clientX - r.left - r.width / 2) * .22).toFixed(1) + 'px'); b.style.setProperty('--ty', ((e.clientY - r.top - r.height / 2) * .3).toFixed(1) + 'px'); });
      b.addEventListener('pointerleave', function () { b.style.setProperty('--tx', '0px'); b.style.setProperty('--ty', '0px'); });
    });
  }

  /* pointer tilt on number tiles and quick links */
  if (fine && !reduce) $$('.num-tile, .quick .q').forEach(function (el) {
    el.addEventListener('pointermove', function (e) { var r = el.getBoundingClientRect(), x = (e.clientX - r.left) / r.width - .5, y = (e.clientY - r.top) / r.height - .5; el.style.setProperty('--ry', (x * 12).toFixed(1) + 'deg'); el.style.setProperty('--rx', (-y * 12).toFixed(1) + 'deg'); });
    el.addEventListener('pointerleave', function () { el.style.setProperty('--rx', '0deg'); el.style.setProperty('--ry', '0deg'); });
  });

  /* site search: press / or Ctrl+K */
  var sBtn = $('#srchBtn'), sBox = null, sLast = null;
  function tr(k, fb) { try { var L = window.I18N, lg = LG(); return (L[lg] && L[lg][k]) || (L.en && L.en[k]) || fb; } catch (e) { return fb; } }
  function build() {
    sBox = document.createElement('div'); sBox.className = 'srch'; sBox.hidden = true;
    sBox.innerHTML = '<div class="srch-bg"></div><div class="srch-box" role="dialog" aria-modal="true" aria-label="Search"><div class="srch-in"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="M20 20l-3.6-3.6"/></svg><input type="search" autocomplete="off" spellcheck="false" aria-label="Search"><button type="button" class="srch-x" aria-label="Close">Esc</button></div><ul class="srch-list" role="listbox"></ul><p class="srch-hint"></p></div>';
    document.body.appendChild(sBox);
    var inp = $('input', sBox), list = $('.srch-list', sBox), hint = $('.srch-hint', sBox), sel = 0, res = [];
    function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
    function run() {
      var q = inp.value.trim().toLowerCase(), I = window.SK_INDEX || [];
      if (!q) { res = I.filter(function (r) { return r[3] === 'Page'; }).slice(0, 8); }
      else {
        var w = q.split(/\s+/);
        res = I.map(function (r) {
          var t = r[0].toLowerCase(), d = (r[1] || '').toLowerCase(), sc = 0;
          for (var i = 0; i < w.length; i++) { if (t.indexOf(w[i]) === 0) sc += 6; else if (t.indexOf(w[i]) > -1) sc += 4; else if (d.indexOf(w[i]) > -1) sc += 1; else return null; }
          if (r[3] === 'Page') sc += 2; return [sc, r];
        }).filter(Boolean).sort(function (a, b) { return b[0] - a[0]; }).slice(0, 9).map(function (x) { return x[1]; });
      }
      sel = 0; hint.textContent = res.length ? tr('srch.hint', 'Type to search. Press Esc to close.') : tr('srch.none', 'Nothing found. Try another word.');
      list.innerHTML = res.map(function (r, i) { return '<li role="option" aria-selected="' + (i === 0) + '"><a href="' + r[2] + '"><span class="srch-t">' + esc(r[3]) + '</span><b>' + esc(r[0]) + '</b>' + (r[1] ? '<small>' + esc(r[1]) + '</small>' : '') + '</a></li>'; }).join('');
    }
    function mark() { $$('li', list).forEach(function (li, i) { li.setAttribute('aria-selected', String(i === sel)); if (i === sel) li.scrollIntoView({ block: 'nearest' }); }); }
    inp.addEventListener('input', run);
    inp.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowDown') { e.preventDefault(); sel = Math.min(res.length - 1, sel + 1); mark(); }
      else if (e.key === 'ArrowUp') { e.preventDefault(); sel = Math.max(0, sel - 1); mark(); }
      else if (e.key === 'Enter' && res[sel]) { location.href = res[sel][2]; }
    });
    sBox.addEventListener('click', function (e) { if (e.target.closest('.srch-bg,.srch-x')) closeS(); else if (e.target.closest('a')) closeS(); });
    sBox._run = run; sBox._inp = inp; run();
  }
  function openS() { if (!sBox) build(); sLast = document.activeElement; sBox.hidden = false; document.documentElement.classList.add('srch-on'); sBox._inp.placeholder = tr('srch.ph', 'Search'); sBox._inp.value = ''; sBox._run(); sBox._inp.focus(); }
  function closeS() { if (!sBox || sBox.hidden) return; sBox.hidden = true; document.documentElement.classList.remove('srch-on'); if (sLast && sLast.focus) sLast.focus(); }
  if (sBtn) sBtn.addEventListener('click', openS);
  document.addEventListener('keydown', function (e) {
    var typing = /^(INPUT|TEXTAREA|SELECT)$/.test((e.target || {}).tagName || '') || (e.target && e.target.isContentEditable);
    if ((e.key === '/' && !typing && !e.ctrlKey && !e.metaKey) || ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k')) { e.preventDefault(); openS(); }
    else if (e.key === 'Escape') closeS();
  });

  /* install-as-app prompt, offline notice */
  (function () {
    if (!/^https?:$/.test(location.protocol)) return;
    var KEY = 'skb-pwa-no', standalone = matchMedia('(display-mode: standalone)').matches || navigator.standalone === true;
    var ua = navigator.userAgent, ios = /iphone|ipad|ipod/i.test(ua) || (/Macintosh/.test(ua) && navigator.maxTouchPoints > 1);
    var safari = /safari/i.test(ua) && !/crios|fxios|edgios|chrome|android/i.test(ua);
    function tt(k, fb) { try { var L = window.I18N, lg = LG(); return (L[lg] && L[lg][k]) || L.en[k] || fb; } catch (e) { return fb; } }
    function snoozed() { try { var v = +localStorage.getItem(KEY); return v && Date.now() - v < 14 * 864e5; } catch (e) { return false; } }
    function snooze() { try { localStorage.setItem(KEY, String(Date.now())); } catch (e) {} }
    function say(msg) { var t = $('#toast'); if (!t) return; t.textContent = msg; t.classList.add('show'); setTimeout(function () { t.classList.remove('show'); }, 2600); }
    var ev = null, sheet = null;
    function hide() { if (!sheet) return; sheet.classList.remove('show'); var s = sheet; sheet = null; setTimeout(function () { s.remove(); }, 450); }
    function show() {
      if (sheet || standalone || snoozed() || (!ev && !(ios && safari))) return;
      if (root.classList.contains('intro-on')) { setTimeout(show, 2500); return; }
      sheet = document.createElement('div'); sheet.className = 'pwa'; sheet.setAttribute('role', 'dialog'); sheet.setAttribute('aria-label', tt('pwa.t', 'Install the app'));
      sheet.innerHTML = '<img src="assets/img/icon-192.png" alt="" width="52" height="52"><div class="pwa-tx"><b></b><span></span></div><div class="pwa-act"><button type="button" class="btn pwa-go"></button><button type="button" class="pwa-no"></button></div>';
      $('b', sheet).textContent = tt('pwa.t', 'Install the SK Bancal app');
      $('span', sheet).textContent = ev ? tt('pwa.b', '') : tt('pwa.ios', '');
      var go = $('.pwa-go', sheet), no = $('.pwa-no', sheet); no.textContent = tt('pwa.no', 'Not now');
      if (ev) go.textContent = tt('pwa.go', 'Install'); else go.hidden = true;
      go.addEventListener('click', install); no.addEventListener('click', function () { snooze(); hide(); });
      document.body.appendChild(sheet); void sheet.offsetWidth; sheet.classList.add('show');
    }
    function install() { if (!ev) return; var e = ev; ev = null; hide(); e.prompt(); if (e.userChoice) e.userChoice.then(function (c) { if (c.outcome !== 'accepted') snooze(); }); }
    addEventListener('beforeinstallprompt', function (e) {
      e.preventDefault(); ev = e;
      var l = $('.foot-legal-links');
      if (l && !$('.pwa-foot')) { var b = document.createElement('button'); b.type = 'button'; b.className = 'pwa-foot'; b.textContent = tt('pwa.foot', 'Install the app'); b.addEventListener('click', install); l.appendChild(b); }
      setTimeout(show, 7000);
    });
    addEventListener('appinstalled', function () { ev = null; hide(); say(tt('pwa.done', 'App installed.')); });
    if (ios && safari && !standalone) setTimeout(show, 9000);
    addEventListener('offline', function () { say(tt('net.off', 'You are offline.')); });
    addEventListener('online', function () { say(tt('net.on', 'Back online.')); });
  })();

  /* hotlines: save every number as contacts (.vcf) */
  (function () {
    var grid = $('#hotGrid'); if (!grid || !window.HOTLINES) return;
    var H = window.HOTLINES, L = window.I18N;
    function tt(k, fb) { var lg = LG(); return (L[lg] && L[lg][k]) || L.en[k] || fb; }
    var wrap = document.createElement('div'); wrap.className = 'vcf-row';
    wrap.innerHTML = '<button type="button" class="btn"><span class="vcf-t" data-i18n="vcf.btn"></span></button><p class="vcf-n" data-i18n="vcf.note"></p>';
    var btn = $('.btn', wrap); $('.vcf-t', wrap).textContent = tt('vcf.btn', 'Save all numbers to my phone'); $('.vcf-n', wrap).textContent = tt('vcf.note', '');
    btn.addEventListener('click', function () {
      var out = [];
      H.forEach(function (h) {
        var name = (L.en[h.k] || h.k).replace(/[;,\n]/g, ' ');
        h.n.forEach(function (n, i) { out.push('BEGIN:VCARD\r\nVERSION:3.0\r\nFN:Carles ' + name + (h.n.length > 1 ? ' ' + (i + 1) : '') + '\r\nORG:Carles, Iloilo emergency\r\nTEL;TYPE=WORK,VOICE:+63' + n.replace(/\s/g, '').slice(1) + '\r\nEND:VCARD'); });
      });
      var a = document.createElement('a'); a.href = URL.createObjectURL(new Blob([out.join('\r\n') + '\r\n'], { type: 'text/vcard' })); a.download = 'carles-emergency-numbers.vcf';
      document.body.appendChild(a); a.click(); setTimeout(function () { URL.revokeObjectURL(a.href); a.remove(); }, 500);
    });
    grid.parentNode.insertBefore(wrap, grid);
  })();

  /* hamburger menu: tap outside or press Esc to close */
  (function () {
    var nav = $('#nav'), mb = $('#menuBtn'); if (!nav || !mb) return;
    function close() { if (!nav.classList.contains('open')) return; nav.classList.remove('open'); mb.setAttribute('aria-expanded', 'false'); }
    document.addEventListener('pointerdown', function (e) { if (nav.classList.contains('open') && !e.target.closest('#nav,#menuBtn')) close(); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') close(); });
    addEventListener('scroll', function () { if (nav.classList.contains('open') && scrollY > 120) close(); }, { passive: true });
    var sb = $('#srchBtn'); if (sb) sb.addEventListener('click', close);
  })();

  /* time-of-day greeting in the hero, in the visitor's language */
  (function () {
    if (!hero) return;
    var G = { en: ['Good morning', 'Good afternoon', 'Good evening'], tl: ['Magandang umaga', 'Magandang hapon', 'Magandang gabi'], hil: ['Maayong aga', 'Maayong hapon', 'Maayong gab-i'] };
    var p = document.createElement('p'); p.className = 'greet rv'; p.style.setProperty('--i', 0);
    var h1 = $('h1', hero); if (!h1) return; h1.parentNode.insertBefore(p, h1);
    function set() { var h = new Date().getHours(), i = h < 12 ? 0 : h < 18 ? 1 : 2, g = (G[LG()] || G.en)[i]; p.textContent = g + ', Bancal!'; }
    set(); $$('[data-lang]').forEach(function (b) { b.addEventListener('click', function () { setTimeout(set, 0); }); });
  })();

  /* poster viewer: previous / next with arrows, keys and swipe */
  (function () {
    var lb = $('#lightbox'), img = $('#lbImg'), cap = $('#lbCap'); if (!lb || !img) return;
    var list = [], cur = -1, x0 = null;
    function tr(k, fb) { var L = window.I18N; return (L[LG()] && L[LG()][k]) || (L.en && L.en[k]) || fb; }
    var mk = function (cls, label, d) { var b = document.createElement('button'); b.type = 'button'; b.className = 'lb-nav ' + cls; b.setAttribute('aria-label', label); b.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="' + d + '"/></svg>'; return b; };
    var pv = mk('lb-prev', 'Previous poster', 'M15 5l-7 7 7 7'), nx = mk('lb-next', 'Next poster', 'M9 5l7 7-7 7'), cn = document.createElement('span'); cn.className = 'lb-count';
    lb.appendChild(pv); lb.appendChild(nx); lb.appendChild(cn);
    document.addEventListener('click', function (e) {
      var f = e.target.closest && e.target.closest('[data-full]'); if (!f) return;
      var seen = {}; list = $$('[data-full]').filter(function (el) { var k = el.dataset.full; if (seen[k] || !el.offsetParent) return false; seen[k] = 1; return true; });
      cur = list.indexOf(f); if (cur < 0) { list = [f]; cur = 0; }
      setTimeout(upd, 280);
    }, true);
    function upd() { pv.hidden = nx.hidden = cn.hidden = list.length < 2; if (list.length > 1) cn.textContent = (cur + 1) + ' / ' + list.length; pv.setAttribute('aria-label', tr('lb.prev', 'Previous poster')); nx.setAttribute('aria-label', tr('lb.next', 'Next poster')); }
    function go(d) {
      if (list.length < 2) return; cur = (cur + d + list.length) % list.length; var f = list[cur];
      var swap = function () { img.src = f.dataset.full; img.alt = f.dataset.cap || ''; cap.textContent = f.dataset.cap || ''; upd(); };
      if (reduce || !img.animate) { swap(); return; }
      img.animate([{ opacity: 1, transform: 'none' }, { opacity: 0, transform: 'translateX(' + (-d * 40) + 'px)' }], { duration: 140, easing: 'ease-in' }).onfinish = function () { swap(); img.animate([{ opacity: 0, transform: 'translateX(' + (d * 40) + 'px)' }, { opacity: 1, transform: 'none' }], { duration: 240, easing: 'cubic-bezier(.2,.9,.3,1)' }); };
    }
    pv.addEventListener('click', function (e) { e.stopPropagation(); go(-1); }); nx.addEventListener('click', function (e) { e.stopPropagation(); go(1); });
    lb.addEventListener('keydown', function (e) { if (e.key === 'ArrowLeft') go(-1); else if (e.key === 'ArrowRight') go(1); });
    lb.addEventListener('touchstart', function (e) { x0 = e.touches[0].clientX; }, { passive: true });
    lb.addEventListener('touchend', function (e) { if (x0 === null) return; var dx = e.changedTouches[0].clientX - x0; x0 = null; if (Math.abs(dx) > 50) go(dx < 0 ? 1 : -1); });
  })();
})();
