/*
 * Shared site behaviour for the redesigned pages:
 * mobile menu toggle and footer year.
 */
(function () {
    'use strict';

    var btn = document.getElementById('hxMobileBtn');
    var menu = document.getElementById('hxMobileMenu');
    if (btn && menu) {
        btn.addEventListener('click', function () {
            var open = menu.classList.toggle('open');
            btn.setAttribute('aria-expanded', String(open));
        });
        menu.addEventListener('click', function (e) {
            if (e.target.closest('a')) { menu.classList.remove('open'); btn.setAttribute('aria-expanded', 'false'); }
        });
    }

    var year = document.getElementById('hxYear');
    if (year) { year.textContent = String(new Date().getFullYear()); }
})();
