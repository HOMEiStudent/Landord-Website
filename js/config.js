/*
 * HOMEi PM site configuration.
 *
 * PLATFORM_URL is the platform address, kept here so it survives periods
 * when the site is not linking to it. PLATFORM_LINKS_LIVE decides where the
 * site's calls to action actually send people.
 *
 * CURRENT STATE: pointing at the contact page for the bridge round of
 * testing. Nothing on the site links to the platform.
 *
 * TO SEND PEOPLE BACK TO THE PLATFORM, revert the commit titled
 * "Point calls to action at contact for the bridge round of testing".
 * That restores the hrefs, the button labels and the sign-up copy in one
 * step, and flips the flag below back to true.
 *
 * Flipping PLATFORM_LINKS_LIVE on its own moves the links but leaves the
 * buttons reading "Get in touch" and the copy saying we are making changes,
 * so use it only for a quick check, not to go back properly.
 *
 * When the platform moves to HOMEi.uk, change PLATFORM_URL here. While the
 * links point at contact there are no platform hrefs in the HTML to keep in
 * step; once they are restored, update them too with:
 *
 *   grep -rl 'd1evln8kpnyy80.cloudfront.net' --include=*.html . \
 *     | xargs sed -i 's|https://d1evln8kpnyy80.cloudfront.net|https://homei.uk|g'
 */
(function () {
    'use strict';

    var PLATFORM_URL = 'https://d1evln8kpnyy80.cloudfront.net';
    var CONTACT_URL = '/join';

    // false = calls to action go to the contact page (bridge round of testing)
    // true  = calls to action go straight to the platform
    var PLATFORM_LINKS_LIVE = false;

    var TARGET = PLATFORM_LINKS_LIVE ? PLATFORM_URL : CONTACT_URL;

    window.HOMEI_CONFIG = {
        PLATFORM_URL: PLATFORM_URL,
        CONTACT_URL: CONTACT_URL,
        PLATFORM_LINKS_LIVE: PLATFORM_LINKS_LIVE,
        TARGET: TARGET
    };

    function applyPlatformLinks() {
        var links = document.querySelectorAll('a[data-platform-link]');
        for (var i = 0; i < links.length; i++) {
            links[i].setAttribute('href', TARGET);
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', applyPlatformLinks);
    } else {
        applyPlatformLinks();
    }
})();
