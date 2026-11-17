(function () {
  var KEY = 'lovebank-lang';
  function get() {
    var q = new URLSearchParams(location.search).get('lang');
    if (q === 'en' || q === 'zh') return q;
    try { var s = localStorage.getItem(KEY); if (s) return s; } catch (e) {}
    return (navigator.language || '').toLowerCase().indexOf('zh') === 0 ? 'zh' : 'en';
  }
  function apply(lang) {
    document.documentElement.lang = lang === 'en' ? 'en' : 'zh-Hant';
    var btn = document.getElementById('lang-btn');
    if (btn) btn.textContent = lang === 'en' ? '繁體中文' : 'English';
  }
  var current = get();
  apply(current);
  document.addEventListener('DOMContentLoaded', function () {
    apply(current);
    var btn = document.getElementById('lang-btn');
    if (!btn) return;
    btn.addEventListener('click', function () {
      current = current === 'en' ? 'zh' : 'en';
      try { localStorage.setItem(KEY, current); } catch (e) {}
      apply(current);
    });
  });
})();
