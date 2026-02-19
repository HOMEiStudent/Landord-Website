document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
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

    // Web3Forms contact form submission
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
                alert("Success! Your message has been sent.");
                form.reset();
            } else {
                alert("Error: " + data.message);
            }
        } catch (error) {
            alert("Something went wrong. Please try again.");
        } finally {
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }
    });

    // Copyright year
    document.getElementById('copyright').textContent =
        '\u00A9 ' + new Date().getFullYear() + ' HOMEi Property Management. All rights reserved.';
});
