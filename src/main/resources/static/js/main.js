// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
    var menuBtn = document.getElementById('mobileMenuBtn');
    var mobileMenu = document.getElementById('mobileMenu');
    var menuIcon = menuBtn.querySelector('.menu-icon');
    var closeIcon = menuBtn.querySelector('.close-icon');
    var mobileLinks = mobileMenu.querySelectorAll('a');

    menuBtn.addEventListener('click', function() {
        mobileMenu.classList.toggle('hidden');
        menuIcon.classList.toggle('hidden');
        closeIcon.classList.toggle('hidden');
    });

    mobileLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            mobileMenu.classList.add('hidden');
            menuIcon.classList.remove('hidden');
            closeIcon.classList.add('hidden');
        });
    });

    // Contact form submission
    var form = document.getElementById('contactForm');
    var success = document.getElementById('formSuccess');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        form.classList.add('hidden');
        success.classList.remove('hidden');
    });

    // Copyright year
    document.getElementById('copyright').textContent =
        '\u00A9 ' + new Date().getFullYear() + ' HOMEi. All rights reserved.';
});
