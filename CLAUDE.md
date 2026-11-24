# HOMEi PM website

Static marketing site for HOMEi PM (property management software for UK
landlords), served on GitHub Pages from the repository root on the `Main`
branch. No build step: the deploy workflow publishes an allow-list of public
files directly.

## Design system

**All new pages and UI must follow `STYLE_GUIDE.md` in the repository root.**
It defines the approved design language: the navy/orange colour system,
Source Serif 4 (headlines) + Public Sans (everything else) type scale, the
components (buttons, cards, segmented controls, nav, footer, CTA band, stats
bar), and the section anatomy. Shared chrome lives in `css/site.css`. When
touching an existing redesigned page, match it exactly.

## Hard content rules (do not break)

- No em dashes anywhere in site copy. Use commas, colons, or full stops.
- Never claim more than "just over £500 a year per property" saved.
- Pricing is £15/month or £150/year (both up to 5 properties; annual shown
  with a struck-through £180, never a "Save 20%" badge). Tiers above 5
  properties are not agreed: do not invent them.
- The product is live. There is no waiting list, no pilot, and no launch
  countdown. Never use waiting-list, pilot or "coming soon" language.
- There is no payment page yet, so HOMEi PM is advertised as free to use
  while in early access, with every feature included. Standard wording is
  "Free while we are in early access" and "plenty of notice before any
  charges begin". Never imply a card is taken, a trial is counting down, or
  a charge is imminent. No "free year", no "no card required", no
  "free trial".
- Pricing appears only in the pricing section, labelled "from launch".
- Primary CTA is "Get started" (nav and general use) or "Sign up now" (hero
  and conversion moments). A "Sign in" link sits to the left of the nav CTA
  on every page. Never "Join the waiting list" or "Claim a free year".
  Secondary CTAs are direct verb phrases, such as "See how much you could
  save".
- Direct savings and risk figures are never added together anywhere.
- The landlord side is a web-based dashboard, never an app; tenants use the
  HOMEi app. Inspections and maintenance tracking are two separate tools.
- The three guide articles are founder-fact-checked and must stay
  word-for-word against their approved designs.
- The sign-up counter stays hidden until sign-ups exceed 50.

## Locked systems (do not alter without care)

- **Calculator maths**: `js/calc-engine.js` holds the verified engine; the
  data is `js/calculator-data.js` (frozen, 342 ONS local authorities, matches
  the founders' Excel model to the penny). The savings calculator page and
  the home mini-calculator both bind to this engine. Never edit the formulas,
  coefficients, rent data, or the low/base/high scenario logic.
- **Contact form**: `js/join-form.js` posts to the existing Web3Forms
  endpoint with the established access key and field names (name, email,
  role, feedback). Do not change the endpoint, key, or field names.
- **Platform URL**: the marketing site never handles sign-up. Every
  "Get started", "Sign up now" and "Sign in" control links out to the
  platform. `js/config.js` holds that URL in one place and repoints every
  `a[data-platform-link]` on load; the same URL is written into those href
  attributes so the links work without JavaScript. Change both together
  (the command is in the comment at the top of `js/config.js`).
- **Analytics**: currently switched off at the founders' request. No
  analytics, no tracking scripts and no cookies are loaded, so there is no
  consent banner. `scripts/posthog-init.js`, `scripts/cookie-consent.js`
  and `scripts/cta-tracking.js` stay on disk but are referenced by no page.
  The `data-cta-id` attributes stay in the markup so conversion tracking
  can be switched back on by re-adding those script tags and the banner
  markup (both are in git history). Note that `privacy.html` still
  describes PostHog analytics and needs updating before or alongside any
  restart.

## Pages and routes

`/` `/savings-calculator` `/how-the-calculator-works` `/blog/` (guides index)
`/renters-rights-act` `/blog/summer-turnaround-renters-rights-act-2026`
`/blog/renters-rights-act-rent-rules` `/join` (get started and contact)
`/about` `/privacy`. Keep the indexed URLs stable; 301-redirect anything
that moves.
