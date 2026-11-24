/*
 * HOMEi PM site configuration.
 *
 * Two switches live here. Nothing else in the site hard-codes either one.
 *
 * 1. PLATFORM_URL
 *    The marketing site never handles sign-up. Every "Get started today"
 *    and "Sign in" control links out to the platform. Elements carrying
 *    data-platform-link are repointed on load, and the same URL is written
 *    into their href attributes so the links work without JavaScript and
 *    stay crawlable.
 *
 *    When the platform moves to HOMEi.uk, change PLATFORM_URL here and
 *    bring the hrefs along with it:
 *
 *      grep -rl 'd1evln8kpnyy80.cloudfront.net' --include=*.html . \
 *        | xargs sed -i 's|https://d1evln8kpnyy80.cloudfront.net|https://homei.uk|g'
 *
 * 2. OFFER_ACTIVE
 *    The new year offer: free until 1 February 2027, no card needed.
 *    Every piece of offer content carries data-offer, so setting
 *    OFFER_ACTIVE to false removes all of it in one change: the promo bar,
 *    the "Free until 1 February 2027" lines, the first pricing row, the
 *    sticky phone bar text, the Contact page price and plan lines, and the
 *    four new year bonuses.
 *
 *    It switches itself off after the offer date regardless, so the site
 *    cannot keep advertising a lapsed offer if nobody flips the flag.
 *
 *    The offer sits over the base copy rather than replacing it, so taking
 *    it down reveals the page underneath with nothing missing: one plan at
 *    £28 a month or £268 a year, and the six-month guarantee. James has
 *    said a new bonus follows straight after 1 February 2027, which will
 *    be a separate change.
 */
(function () {
    'use strict';

    var PLATFORM_URL = 'https://d1evln8kpnyy80.cloudfront.net';

    // The offer ends at 1 Feb 2027 00:00 UK time. UK is on GMT in February,
    // so UTC and local time agree on that instant.
    var OFFER_ENDS = Date.UTC(2027, 1, 1, 0, 0, 0);

    // Set to false to take the whole offer down before its end date.
    var OFFER_ACTIVE = true;

    var offerRunning = OFFER_ACTIVE && Date.now() < OFFER_ENDS;

    window.HOMEI_CONFIG = {
        PLATFORM_URL: PLATFORM_URL,
        OFFER_ENDS: OFFER_ENDS,
        OFFER_ACTIVE: OFFER_ACTIVE,
        offerRunning: offerRunning
    };

    function apply() {
        var links = document.querySelectorAll('a[data-platform-link]');
        for (var i = 0; i < links.length; i++) {
            links[i].setAttribute('href', PLATFORM_URL);
        }
        if (!offerRunning) {
            var offer = document.querySelectorAll('[data-offer]');
            for (var j = 0; j < offer.length; j++) {
                offer[j].hidden = true;
            }
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', apply);
    } else {
        apply();
    }
})();
