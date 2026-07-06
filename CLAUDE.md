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
  with a struck-through £180, never a "Save 20%" badge).
- Pilot wording is exactly "waiting list open now, testing starts August
  2026" and "first 50 landlords test free for 3 months". No "free year",
  no "no card required".
- Direct savings and risk figures are never added together anywhere.
- The landlord side is a web-based dashboard, never an app; tenants use the
  HOMEi app. Inspections and maintenance tracking are two separate tools.
- The two guide articles are founder-fact-checked and must stay word-for-word.
- The sign-up counter stays hidden until sign-ups exceed 50.

## Locked systems (do not alter without care)

- **Calculator maths**: `js/calc-engine.js` holds the verified engine; the
  data is `js/calculator-data.js` (frozen, 342 ONS local authorities, matches
  the founders' Excel model to the penny). The savings calculator page and
  the home mini-calculator both bind to this engine. Never edit the formulas,
  coefficients, rent data, or the low/base/high scenario logic.
- **Waiting-list form**: `js/join-form.js` posts to the existing Web3Forms
  endpoint with the established access key and field names (name, email,
  role, feedback). Do not change the endpoint, key, or field names.
- **Analytics**: PostHog loads in memory-only mode until consent
  (`scripts/posthog-init.js`, `scripts/cookie-consent.js`). Keep the consent
  gating and the `data-cta-id` attributes that feed conversion tracking.

## Pages and routes

`/` `/savings-calculator` `/how-the-calculator-works` `/blog/` (guides index)
`/renters-rights-act` `/blog/summer-turnaround-renters-rights-act-2026`
`/join` `/about` `/privacy`. Keep the indexed URLs stable; 301-redirect
anything that moves.
