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

    function enableTracking() {
        if (window.posthog) {
            posthog.set_config({ persistence: 'localStorage+cookie' });
            posthog.opt_in_capturing();
        }
    }

    function handleAccept() {
        setConsent('accepted');
        hideBanner();
        enableTracking();
    }

    function handleReject() {
        setConsent('rejected');
        hideBanner();
    }

    function clearPostHogCookies() {
        if (window.posthog) {
            posthog.opt_out_capturing();
            posthog.set_config({ persistence: 'memory' });
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
