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
    window.addEventListener('scroll', function() {
        if (window.scrollY > 20) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // ===== Scroll reveal animations =====
    var reveals = document.querySelectorAll('.reveal');
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

    // ===== Image carousels with auto-swap to real images =====
    var carousels = document.querySelectorAll('.image-carousel');

    carousels.forEach(function(container) {
        var img = container.querySelector('.carousel-img');
        var realImagePath = container.dataset.realImage;
        var placeholderImages = [];

        try {
            placeholderImages = JSON.parse(container.dataset.carousel);
        } catch (e) {
            return;
        }

        if (!img || placeholderImages.length === 0) return;

        var currentIndex = 0;
        var intervalId = null;
        var usingRealImage = false;

        // Try loading the real image
        function checkRealImage() {
            if (!realImagePath) return;

            var testImg = new Image();
            testImg.onload = function() {
                // Real image exists, use it and stop carousel
                usingRealImage = true;
                if (intervalId) {
                    clearInterval(intervalId);
                    intervalId = null;
                }
                img.style.opacity = '0';
                setTimeout(function() {
                    img.src = realImagePath;
                    img.style.opacity = '1';
                }, 300);
            };
            testImg.onerror = function() {
                // Real image not found, start carousel if not already running
                if (!intervalId && !usingRealImage) {
                    startCarousel();
                }
            };
            testImg.src = realImagePath + '?t=' + Date.now();
        }

        // Cycle through placeholder images
        function startCarousel() {
            if (placeholderImages.length <= 1) return;

            intervalId = setInterval(function() {
                if (usingRealImage) {
                    clearInterval(intervalId);
                    return;
                }
                currentIndex = (currentIndex + 1) % placeholderImages.length;
                img.style.opacity = '0';
                setTimeout(function() {
                    img.src = placeholderImages[currentIndex];
                    img.style.opacity = '1';
                }, 400);
            }, 5000);
        }

        // Initial check
        checkRealImage();

        // Re-check for real image every 30 seconds
        setInterval(function() {
            if (!usingRealImage) {
                checkRealImage();
            }
        }, 30000);
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

    // ===== Web3Forms contact form submission =====
    var form = document.getElementById('form');
    var submitBtn = form.querySelector('button[type="submit"]');

    form.addEventListener('submit', async function(e) {
        e.preventDefault();
        var formData = new FormData(form);
        formData.append("access_key", "a1ac79e5-9df0-46b7-8379-d913a8a74b11");

        var originalText = submitBtn.textContent;
        submitBtn.textContent = "Sending...";
        submitBtn.disabled = true;

        try {
            var response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });
            var data = await response.json();

            if (response.ok) {
                submitBtn.textContent = "Sent!";
                submitBtn.style.background = "#059669";
                form.reset();
                setTimeout(function() {
                    submitBtn.textContent = originalText;
                    submitBtn.style.background = "";
                    submitBtn.disabled = false;
                }, 3000);
            } else {
                alert("Error: " + data.message);
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }
        } catch (error) {
            alert("Something went wrong. Please try again.");
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }
    });

    // ===== Copyright year =====
    document.getElementById('copyright').textContent =
        '\u00A9 ' + new Date().getFullYear() + ' HOMEi Property Management. All rights reserved.';
});
