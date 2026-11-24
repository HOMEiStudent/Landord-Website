/*
 * HOMEi PM site configuration.
 *
 * PLATFORM_URL is the single place the platform address is defined. The
 * marketing site does not handle sign-up: every "Get started", "Sign up now"
 * and "Sign in" control links straight out to the platform.
 *
 * When the platform moves to HOMEi.uk, change PLATFORM_URL here. Every
 * element carrying data-platform-link is repointed on load. The same URL is
 * also written into those href attributes so the links work without
 * JavaScript and are crawlable; keep them in step with:
 *
 *   grep -rl 'd1evln8kpnyy80.cloudfront.net' --include=*.html . \
 *     | xargs sed -i 's|https://d1evln8kpnyy80.cloudfront.net|https://homei.uk|g'
 */
(function () {
    'use strict';

    var PLATFORM_URL = 'https://d1evln8kpnyy80.cloudfront.net';

    window.HOMEI_CONFIG = { PLATFORM_URL: PLATFORM_URL };

    function applyPlatformLinks() {
        var links = document.querySelectorAll('a[data-platform-link]');
        for (var i = 0; i < links.length; i++) {
            links[i].setAttribute('href', PLATFORM_URL);
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', applyPlatformLinks);
    } else {
        applyPlatformLinks();
    }
})();
