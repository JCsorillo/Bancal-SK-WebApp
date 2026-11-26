/* Runs before the page paints: theme, text size and whether to show the intro (home page only). */
(function () {
  var d = document.documentElement, seen = false, th = null;
  try { seen = sessionStorage.getItem('skb-intro') === '1'; th = localStorage.getItem('theme'); } catch (e) {}
  if (!th && window.matchMedia && matchMedia('(prefers-color-scheme: dark)').matches) th = 'dark';
  d.setAttribute('data-theme', th === 'dark' ? 'dark' : 'light');
  d.classList.add(d.hasAttribute('data-home') && !seen ? 'intro-on' : 'no-intro');
})();
