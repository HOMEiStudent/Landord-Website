document.addEventListener('DOMContentLoaded', function() {

    // ===== Mobile menu toggle =====
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

    // ===== Navbar scroll effect =====
    var navbar = document.getElementById('navbar');
    var scrollProgress = document.getElementById('scrollProgress');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 20) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        // Scroll progress bar
        if (scrollProgress) {
            var docHeight = document.documentElement.scrollHeight - window.innerHeight;
            var scrolled = (window.scrollY / docHeight) * 100;
            scrollProgress.style.width = scrolled + '%';
        }
    });

    // ===== Active section highlighting in nav =====
    var navAnchors = document.querySelectorAll('.nav-links a[href^="#"]');
    var navSectionMap = {};
    navAnchors.forEach(function(a) {
        var id = a.getAttribute('href').slice(1);
        if (id) navSectionMap[id] = a;
    });
    var navSections = Object.keys(navSectionMap)
        .map(function(id) { return document.getElementById(id); })
        .filter(Boolean);

    if (navSections.length) {
        var sectionObserver = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                var link = navSectionMap[entry.target.id];
                if (!link) return;
                if (entry.isIntersecting) {
                    navAnchors.forEach(function(a) { a.classList.remove('active'); });
                    link.classList.add('active');
                }
            });
        }, {
            rootMargin: '-40% 0px -55% 0px',
            threshold: 0
        });

        navSections.forEach(function(s) { sectionObserver.observe(s); });
    }

    // ===== Scroll reveal animations =====
    var reveals = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
    var revealObserver = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, {
        threshold: 0.08,
        rootMargin: '0px 0px -40px 0px'
    });

    reveals.forEach(function(el) {
        revealObserver.observe(el);
    });

    // ===== FAQ accordion =====
    var faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(function(item) {
        var question = item.querySelector('.faq-question');

        question.addEventListener('click', function() {
            var isOpen = item.classList.contains('open');

            // Close all FAQ items
            faqItems.forEach(function(otherItem) {
                otherItem.classList.remove('open');
                otherItem.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
            });

            // Open clicked item if it was closed
            if (!isOpen) {
                item.classList.add('open');
                question.setAttribute('aria-expanded', 'true');
            }
        });
    });

    // ===== Poll functionality =====
    var pollGrid = document.getElementById('pollGrid');
    var pollFollowup = document.getElementById('pollFollowup');
    var pollSelectedValue = document.getElementById('pollSelectedValue');
    var selectedChallenges = [];

    if (pollGrid) {
        var pollOptions = pollGrid.querySelectorAll('.poll-option');

        pollOptions.forEach(function(option) {
            option.addEventListener('click', function() {
                var value = option.dataset.value;
                option.classList.toggle('selected');

                if (option.classList.contains('selected')) {
                    selectedChallenges.push(value);
                } else {
                    selectedChallenges = selectedChallenges.filter(function(v) { return v !== value; });
                }

                if (selectedChallenges.length > 0) {
                    pollFollowup.classList.remove('hidden');
                    pollSelectedValue.value = selectedChallenges.join('; ');
                } else {
                    pollFollowup.classList.add('hidden');
                    pollSelectedValue.value = '';
                }
            });
        });

        // Poll form submission via Web3Forms
        var pollForm = document.getElementById('pollForm');
        if (pollForm) {
            pollForm.addEventListener('submit', async function(e) {
                e.preventDefault();
                var pollBtn = pollForm.querySelector('button[type="submit"]');
                var originalText = pollBtn.textContent;
                pollBtn.textContent = 'Sending...';
                pollBtn.disabled = true;

                var formData = new FormData(pollForm);

                try {
                    var response = await fetch('https://api.web3forms.com/submit', {
                        method: 'POST',
                        body: formData
                    });
                    var data = await response.json();

                    if (response.ok) {
                        pollBtn.textContent = 'Thanks!';
                        pollBtn.style.background = '#059669';
                        pollForm.reset();
                        setTimeout(function() {
                            pollFollowup.classList.add('hidden');
                            selectedChallenges = [];
                            pollOptions.forEach(function(opt) { opt.classList.remove('selected'); });
                            pollBtn.textContent = originalText;
                            pollBtn.style.background = '';
                            pollBtn.disabled = false;
                        }, 3000);
                    } else {
                        pollBtn.textContent = originalText;
                        pollBtn.disabled = false;
                    }
                } catch (error) {
                    pollBtn.textContent = originalText;
                    pollBtn.disabled = false;
                }
            });
        }
    }

    // ===== Web3Forms contact form submission =====
    var form = document.getElementById('form');
    var successModal = document.getElementById('successModal');
    var successModalClose = document.getElementById('successModalClose');
    var successModalBtn = document.getElementById('successModalBtn');

    if (form) {
        var submitBtn = form.querySelector('button[type="submit"]');
        var formError = document.getElementById('formError');

        form.addEventListener('submit', async function(e) {
            e.preventDefault();

            // Hide any previous error
            if (formError) formError.classList.add('hidden');

            var formData = new FormData(form);

            var originalText = submitBtn.textContent;
            submitBtn.textContent = "Sending...";
            submitBtn.disabled = true;

            try {
                var response = await fetch("https://api.web3forms.com/submit", {
                    method: "POST",
                    body: formData
                });
                var data = await response.json();

                if (data.success) {
                    form.reset();
                    // Show success modal
                    if (successModal) {
                        successModal.classList.remove('hidden');
                    }
                    submitBtn.textContent = originalText;
                    submitBtn.disabled = false;
                } else {
                    // Show error message
                    if (formError) formError.classList.remove('hidden');
                    submitBtn.textContent = originalText;
                    submitBtn.disabled = false;
                }
            } catch (error) {
                // Show error message on network failure
                if (formError) formError.classList.remove('hidden');
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }
        });
    }

    // Close success modal
    function closeModal() {
        if (successModal) {
            successModal.classList.add('hidden');
        }
    }

    if (successModalClose) {
        successModalClose.addEventListener('click', closeModal);
    }

    if (successModalBtn) {
        successModalBtn.addEventListener('click', closeModal);
    }

    // ===== Sticky desktop CTA =====
    var desktopCta = document.getElementById('desktopCta');
    var contactSection = document.getElementById('contact');

    if (desktopCta && contactSection) {
        var desktopCtaObserver = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    desktopCta.classList.add('hidden');
                } else {
                    if (window.scrollY > 600) {
                        desktopCta.classList.remove('hidden');
                    }
                }
            });
        }, { threshold: 0.1 });

        desktopCtaObserver.observe(contactSection);

        window.addEventListener('scroll', function() {
            if (window.scrollY < 600) {
                desktopCta.classList.add('hidden');
            }
        });
    }

    // ===== Sticky mobile CTA =====
    var mobileCta = document.getElementById('mobileCta');
    var mobileCtaDismissed = false;
    var mobileCtaDismissBtn = document.getElementById('mobileCtaDismiss');

    if (mobileCtaDismissBtn) {
        mobileCtaDismissBtn.addEventListener('click', function(e) {
            e.preventDefault();
            mobileCtaDismissed = true;
            mobileCta.classList.add('hidden');
        });
    }

    if (mobileCta && contactSection) {
        var mobileCtaObserver = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (mobileCtaDismissed) return;
                if (entry.isIntersecting) {
                    mobileCta.classList.add('hidden');
                } else {
                    if (window.scrollY > 400) {
                        mobileCta.classList.remove('hidden');
                    }
                }
            });
        }, {
            threshold: 0.1
        });

        mobileCtaObserver.observe(contactSection);

        window.addEventListener('scroll', function() {
            if (mobileCtaDismissed) return;
            if (window.scrollY < 400) {
                mobileCta.classList.add('hidden');
            }
        });
    }

    // ===== Copyright year =====
    document.getElementById('copyright').textContent =
        '\u00A9 ' + new Date().getFullYear() + ' HOMEi Property Management. All rights reserved.';
});
