(function() {
    var CONSENT_KEY = 'cookie_consent';

    function getConsent() {
        return localStorage.getItem(CONSENT_KEY);
    }

    function setConsent(value) {
        localStorage.setItem(CONSENT_KEY, value);
    }

    function hideBanner() {
        var banner = document.getElementById('cookieConsent');
        if (banner) banner.classList.add('hidden');
    }

    function showBanner() {
        var banner = document.getElementById('cookieConsent');
        if (banner) banner.classList.remove('hidden');
    }

    function initPostHog() {
        if (window.__posthogLoaded) return;
        window.__posthogLoaded = true;

        var s = document.createElement('script');
        s.src = '/scripts/posthog-init.js';
        s.onload = function() {
            var deps = ['/scripts/cta-tracking.js', '/scripts/posthog-experiments.js'];
            deps.forEach(function(src) {
                var d = document.createElement('script');
                d.src = src;
                d.defer = true;
                document.body.appendChild(d);
            });
        };
        document.head.appendChild(s);
    }

    function handleAccept() {
        setConsent('accepted');
        hideBanner();
        initPostHog();
    }

    function handleReject() {
        setConsent('rejected');
        hideBanner();
    }

    function clearPostHogCookies() {
        if (window.posthog) {
            posthog.opt_out_capturing();
            posthog.reset();
        }
        document.cookie.split(';').forEach(function(c) {
            var name = c.split('=')[0].trim();
            if (name.indexOf('ph_') === 0) {
                document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/';
            }
        });
    }

    function onReady(fn) {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', fn);
        } else {
            fn();
        }
    }

    if (getConsent() === 'accepted') {
        initPostHog();
    }

    onReady(function() {
        var banner = document.getElementById('cookieConsent');
        if (banner) {
            banner.querySelector('.cookie-accept').addEventListener('click', handleAccept);
            banner.querySelector('.cookie-reject').addEventListener('click', handleReject);
        }

        var settingsLink = document.getElementById('cookieSettingsLink');
        if (settingsLink) {
            settingsLink.addEventListener('click', function(e) {
                e.preventDefault();
                localStorage.removeItem(CONSENT_KEY);
                clearPostHogCookies();
                showBanner();
            });
        }

        if (!getConsent()) {
            showBanner();
        }
    });
})();
