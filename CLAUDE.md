# HOMEi PM marketing website: rules for Claude

Copy this file to `CLAUDE.md` in the repo root. These are hard rules, not suggestions. They apply to every task unless James (founder) overrides one in that task.

This file replaces `previous-handoff/CLAUDE_INSTRUCTIONS.md`. Where the two disagree, this file wins. The colour tokens, type scale and component specs in `previous-handoff/STYLE_GUIDE.md` still apply.

## 0. The approved designs are locked

- The source of truth is `designs/Release *.dc.html`: Home, About, Join, Guides and Savings Calculator. They are founder signed off.
- Recreate them faithfully: exact copy, colours, spacing, type sizes and section order.
- Do not redesign, restyle, reorder, "improve" or reword anything.
- If something looks wrong, or a request conflicts with a design, stop and ask. Never deviate silently.
- `designs/site/` holds the guide articles, the methodology page and the privacy page. Their body copy is locked word for word. They do need the shared header and footer updated (see OPEN_ITEMS.md).
- Reference screenshots are in `screenshots/`.

## 1. Two layouts, kept separate

- **Wider than 640px:** must match the approved laptop design exactly. This includes the design's own behaviour between 641px and 1000px, where grids stack, centre links hide and a "Menu" button appears.
- **640px and narrower:** the phone layout, specified in PHONE_LAYOUT.md.
- Phone changes must never alter anything above 640px.
- Implement the phone layout as additions scoped to `max-width: 640px`. Never edit the shared rules to get a phone result.
- Before finishing any change, compare screenshots above 640px against `screenshots/* - desktop-1440.png`.

## 2. Product facts (never contradict)

- HOMEi PM is a **web-based dashboard** for laptop, computer and tablet. Never call it an app.
- Tenants use the separate **HOMEi app** (free on iOS and Android). Every landlord feature still works if a tenant never downloads it.
- Inspections and maintenance are two separate features.
- **Inspections are not live.** Wherever they appear, label them "Coming Q1 2027".
- Landlords decide what a repair needs. The system does not book or approve contractors.
- The product is live. Every "Get started today" and "Sign in" control links to the platform URL. Keep that URL in **one config value**: currently `https://d1evln8kpnyy80.cloudfront.net`, moving to HOMEi.uk.
- **Do not add, imply or expand any feature claim.** Every feature claim needs James's approval.

## 3. Pricing, offer and guarantee

**Price**
- £28 a month, or £268 a year.
- Show the annual price as £268 with **£336** struck through (12 × £28). Wording: "20% off when you pay yearly".
- Never use a "Save 20%" badge.
- One plan, every feature included. **No property limit.** Never write "up to 5 properties" or invent tiers.

**New year offer**
- HOMEi PM is free until **1 February 2027**. No card needed.
- On 1 February the landlord chooses monthly or annual to carry on.
- The countdown counts to 1 Feb 2027 00:00 UK time, in weeks, days and hh:mm:ss, and hides itself after that.
- Build every piece of offer content behind **one switch** (a config flag or date check) so it can all be removed in one change. That covers the promo bar, the "Free until 1 February 2027" lines, the first pricing row, the sticky phone bar text and the Join price line.

**Six-month money-back guarantee**
- It starts from the **first payment**.
- If the landlord is not satisfied at the six-month mark and tells us within four weeks, we refund everything they have paid, whether monthly or yearly.

**New year bonuses** (included in the £28 a month)
1. Future-Proof Compliance Updates
2. The HOMEi Landlord Help Library
3. Set Up in an Evening Guide
4. Hands-Free Inspections, labelled "Coming Q1 2027"

**Figures**
- Savings figure: "£500 average saving a year per property, estimated". The overall ceiling is "just over £500 a year per property". Never claim more.
- Missed-notice fines: £6,000 to £10,000. Statutory maximums appear only in sourced legal or methodology content.
- **Direct savings and risk figures are never added together**, anywhere.

## 4. Audience and wording

- The audience is **independent landlords in England who manage their own properties**. The promise: easier, lower risk, saves you time.
- Never say "small landlords", "fewer than five properties" or similar.
- Say **"regulations"**, not "law".
- Bigger portfolios and estate agents are pointed to "Get in touch". Do not add messaging for them.

**Buttons**
- Primary: **"Get started today"** everywhere (nav, hero, CTA bands, the phone sticky bar).
- Nav: a "Sign in" text link sits beside it. The Join page also has "Sign in to your account".
- Secondary: "See how much HOMEi PM could save you".
- Never use "Join the waiting list", "Get started free", "Claim a free year" or "Start your free trial".
- "No card needed" is approved for the offer only.

**Other wording**
- Contact email: **contact@homei.uk**.
- Founder photos are intentionally removed, because both founders work full time. Do not add photo slots.

## 5. Writing rules

- British English.
- **Never use em dashes.** Avoid en dashes in prose too. Use commas, colons or full stops.
- No emoji. No exclamation marks. No hype words (revolutionary, game-changing, seamless, effortless). No triadic lists as a habit.
- Every number is sourced (ONS, GOV.UK, NRLA, HSE, ABI). Estimates are labelled as estimates.
- No testimonials, logos or statistics we cannot evidence. The old rule holding sign-up counters back until the number passed 50 is retired (James, November 2026); any figure shown still has to be real and evidenced.
- Legal and compliance content carries "general information, not legal advice" plus a sources line.

## 6. Locked assets (never change without asking)

- The savings calculator's logic, its 342-authority ONS rent dataset and its compliance risk model. The Release calculator page wraps the original logic unchanged.
- The Formspark form endpoint. Never change it or recreate it.
- The guide articles, word for word.
- Indexed URLs: keep the calculator and guide URLs, and 301-redirect anything that moves.
- Prices and offer dates.

## 7. Design system

- Fonts: Source Serif 4 (600) for headlines and display numbers; Public Sans (400 to 700) for everything else. Never use Inter, Roboto, Arial or Fraunces.
- Use only the colour tokens in `previous-handoff/STYLE_GUIDE.md`. Navy and light sections alternate. Orange is an accent, never a big background; the promo bar is the one exception.
- No gradient washes, no scroll-triggered animation, no coloured left-border cards, no stock photos or decorative illustrations. Use real product screenshots only. Never invent app UI.
- Accessibility: WCAG AA contrast, visible focus states, labelled inputs, alt text on every image, 44px minimum tap targets, keyboard-operable controls.

## 8. SEO

- Keep each page's title and meta description from its `<helmet>`. One H1 per page.
- Add canonical URLs, plus Open Graph and Twitter tags with absolute URLs.
- Structured data:
  - `Organization` on every page
  - `SoftwareApplication` on Home
  - `FAQPage` where there is a FAQ
  - `Article` with author and dates on guides
  - `BreadcrumbList` on the guide index
- Host images locally, lazy-load below the fold, set width and height, and keep `sitemap.xml` and `robots.txt` current.
- Internal linking: guides, then calculator, then sign-up. Target Lighthouse SEO and accessibility of 95 or above.

## 9. How to work

- Build one page at a time, starting with Home.
- After each page, show James laptop (1440px) and phone (390px) screenshots before moving on.
- Never resolve an open item by guessing. Ask.

---

# Repository notes

The rules above come from `HOMEi-PM-release-handover/CLAUDE.md` and are the
authority on design, copy, pricing and the offer. This section records facts
about **this repository** that the pack does not cover, and one place where
the pack is out of date. It does not override anything above.

## How this site is built and shipped

Plain static HTML, CSS and vanilla JavaScript, served by GitHub Pages from
the repository root on the `Main` branch. **There is no build step**, no npm
and no framework: what is in the repository is what ships. The pack suggests
Astro or Next "if the repo is empty". It is not, so the Release designs are
recreated in the existing static site instead, matching the rendered result.

The deploy workflow stages an **explicit allow-list** into `_site/`. A new
root-level HTML page must be added to the `cp` list in
`.github/workflows/deploy.yml` or it will 404. `HOMEi-PM-release-handover/`
is deliberately not on that list, so the pack is never published.

Extensionless URLs: GitHub Pages serves `about.html` at `/about`.

## Shared Release assets

- `css/release.css` is the approved design's stylesheet, ported verbatim.
  Release Home, Join, About and Guides carry an identical block in the pack,
  so it lives in one file. Never edit a shared rule to fix a phone problem:
  add to the `max-width:640px` block, then re-check 1440px against
  `HOMEi-PM-release-handover/screenshots/`.
- `js/release.js` holds the countdown and swipe-dot scripts, ported as they
  are.
- `js/config.js` holds both switches: `PLATFORM_URL` and `OFFER_ACTIVE`.
  Offer content carries `data-offer`; platform links carry
  `data-platform-link`.

## Where the pack is out of date

- **The form is Web3Forms, not Formspark.** Section 6 above says never to
  change "the Formspark endpoint". The site has always posted to Web3Forms,
  and the previous handover recorded in writing that the Formspark brief was
  a mistake. The Release Join design contains no endpoint at all. Keep
  `js/join-form.js` pointing at the existing Web3Forms endpoint, access key
  and field names (name, email, role, feedback).

## Decisions taken with the founder during this build

- The Join page moves to `/contact`, with `/join` kept as a forwarding page
  carrying a canonical tag. GitHub Pages cannot serve a true 301 on a static
  site, so this is the closest available.
- **Analytics are switched off** at the founder's request from September
  2026. No tracking scripts and no cookies load, so there is no consent
  banner. `scripts/posthog-init.js`, `scripts/cookie-consent.js` and
  `scripts/cta-tracking.js` remain on disk, referenced by no page. The
  `data-cta-id` attributes stay in the markup so tracking can be restored by
  re-adding those script tags. `privacy.html` still describes PostHog and
  needs updating before any restart.
