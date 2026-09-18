# HOMEi PM website: full handover

**Last updated:** 13 September 2026
**Repository:** `HOMEiStudent/Landord-Website` (note the typo in the repo name, it is
deliberate and must not be "fixed", the remote URL depends on it)
**Live site:** https://homei.org.uk
**Default branch:** `Main` (capital M)
**Working branch:** `claude/jolly-hopper-cias7`

---

## 0. How to use this document

This file is the full context handover for a new chat session. `CLAUDE.md` in the
repository root is the short, enforced rules file that loads automatically at the
start of every session; this file is the long-form background behind it.

**To start a new session, say:** *"Read HANDOVER.md and STYLE_GUIDE.md before doing
anything."*

Order of authority if two documents disagree:

1. A direct instruction from the founders in the current chat
2. `CLAUDE.md` (hard rules, loads automatically)
3. `STYLE_GUIDE.md` (design language)
4. This file (context, history, procedures)

This file is **not** published. The deploy workflow uses an explicit allow-list and
`HANDOVER.md` is not on it, so it stays internal.

---

## 1. What this site is

A static marketing website for **HOMEi PM**, property management software for UK
landlords. It is the landlord-facing site. There is a separate tenant product, the
**HOMEi app**, which lives at `homeistudent.com` and is a different codebase entirely.
Do not confuse the two: a design pack arrived once that targeted the tenant site and
almost got built into this repo.

The site's job is to explain the product, let a landlord estimate their savings, and
capture waiting-list sign-ups. Search visibility is a primary goal, which is why every
page carries structured data and why the two original guide articles must keep their
indexed URLs.

### Business facts that drive the copy

- **The landlord side is a web-based dashboard. Never call it an app.** Tenants use
  the HOMEi app; landlords use a dashboard in a browser.
- **Inspections and maintenance tracking are two separate tools.** Inspections are
  guided photo checklists that tenants complete at the landlord's request, producing a
  condition report. Maintenance is tenants reporting issues and tracking them from
  reported to resolved. Landlords decide whether a maintenance request needs action;
  the system does not book or approve contractors.
- **Founders:** James (property lead, Russell Group MSc Real Estate specialist, 7+
  years in the rental market) and Gurprit (engineering, former Bank of England
  developer). Articles are bylined "By James".
- **Support email:** support@homeistudent.com

---

## 2. Hard content rules (do not break)

These are copied from `CLAUDE.md` and expanded. Breaking one of these is worse than
missing a deadline.

| Rule | Detail |
|---|---|
| **No em dashes** | Not anywhere in site copy. Use commas, colons or full stops. This overrides design fidelity: the approved About design itself contained two em dashes and they were replaced with commas. Check with `grep -r '—' --include=*.html .` |
| **Savings ceiling** | Never claim more than **"just over £500 a year per property"**. |
| **Pricing** | £15/month or £150/year, both up to 5 properties, both full features. Annual is shown as £150 with a struck-through £180. **Never** a "Save 20%" badge. No tiers above 5 properties, they are not agreed. |
| **Pilot wording** | Exactly *"waiting list open now, testing starts August 2026"* and *"first 50 landlords test free for 3 months"*. No "free year", no "no card required", no "free trial". |
| **Never sum savings and risk** | Direct savings figures and risk-mitigation figures are shown in separate cards and are never added into one headline number. This is a legal exposure issue, not a design preference. |
| **Guide articles are locked** | The two original guides (`renters-rights-act.html` and `blog/summer-turnaround-renters-rights-act-2026.html`) are founder-fact-checked. Reproduce word for word. Restyling is allowed; rewording is not. The third guide (rent rules) is also reproduced verbatim from its approved design. |
| **Sign-up counter** | Stays hidden until real sign-ups exceed 50. |
| **Missed-notice fines** | State as £6,000 to £10,000 in marketing copy. Statutory maximums (£7,000 / £40,000 / £51,000 combined) only in legal or methodology contexts where sourced. |
| **Sourcing** | Every number is sourced (ONS, GOV.UK, NRLA, HSE, ABI) and estimates are labelled as estimates. |
| **No unearned proof** | No testimonials, no customer counts, no "trusted by" logos. Credibility comes from the product, the founders and sourced data. |
| **Tone** | British English. No emoji. No exclamation marks. No hype words ("revolutionary", "game-changing", "seamless", "effortless"). |

---

## 3. Locked systems (do not alter)

### 3.1 Calculator maths

- `js/calc-engine.js` is the verified engine. It exposes exactly one global:
  `window.HOMEI_CALC.computeSavings(data, areaCode, bedrooms, management, propertyType)`.
  It returns `{ area, monthlyRent, low, base, high }`, where each of `low`/`base`/`high`
  carries `maintenance, inspection, rentUplift, totalDirect, complianceExpected,
  complianceMax, s13, ground4a, s8, possession`.
- `js/calculator-data.js` is the frozen dataset: 342 ONS local authorities, verified
  identical to the founders' Excel model **V4 (01_07_2026)** to the penny. It is a
  single `Object.freeze`d global, `window.CALCULATOR_DATA`, loaded synchronously so
  there is no fetch that can fail.
- **Never edit the formulas, coefficients, rent data, or the low/base/high scenario
  logic.** If a figure looks wrong, that is a founders' decision, not a code fix.
- Two pages bind to the engine: the full calculator (`js/calculator-page.js`) and the
  home page mini-calculator (`js/home-mini-calc.js`). No maths lives in either; they
  only read the engine's output and render it.

**Verified reference cases** (use these to prove you have not broken anything):

| Inputs | Expected |
|---|---|
| Sheffield / 4 beds / Self-managed / Student HMO | Direct saving **£574**, range £338 to £1,111; compliance £307; worst case £51,000; possession £7,127 |
| Leeds / 2 beds / Agent-managed / Single let | Inspection saving £100, Ground 4A row hidden |
| Manchester / 3 beds / Self-managed / Single let | Direct saving **£463** |

The calculator page deliberately defaults to Sheffield / 4 / Self-managed / Student HMO
so the headline matches the £574 reference. The approved design showed Agent-managed as
the default; this is a knowing, documented deviation. Do not "correct" it.

### 3.2 Waiting-list form

`js/join-form.js` posts to **Web3Forms**:

- Endpoint: `https://api.web3forms.com/submit`
- Access key: `a1ac79e5-9df0-46b7-8379-d913a8a74b11`
- Field names: `access_key, subject, email, name, role, feedback`
- The management toggle maps to `role`; the notes textarea maps to `feedback`.
- There is a deliberate `no-cors` retry fallback: CORS can block the response even when
  the submission succeeded, so a failed first attempt is retried opaquely and treated as
  success. This mirrors the behaviour of the original live site. Do not "clean it up".
- Confirmation email routing is configured inside Web3Forms' own settings, not in code.

A previous design brief said Formspark. That was wrong; the founders confirmed Web3Forms
is correct. Do not create a new form, change the endpoint, the key or the field names.

### 3.3 Analytics and consent

- `scripts/posthog-init.js` loads PostHog with `persistence: 'memory'` and
  `opt_out_capturing_by_default: true`. It only switches to
  `localStorage+cookie` and opts in **after** the visitor accepts in the consent banner
  (`scripts/cookie-consent.js`, key `cookie_consent` in localStorage).
- Project key: `phc_mv6JqZDqX8urYDijU46DVVLKCdKZphpYnBjCtHWsk357`, host `https://us.i.posthog.com`.
- `scripts/cta-tracking.js` is a 10-line global click delegate that fires a
  `cta_clicked` event for any element carrying a `data-cta-id` attribute.
  **Keep `data-cta-id` on every CTA you add** or it drops out of conversion tracking.
- `scripts/posthog-experiments.js` runs an A/B/C copy test behind the PostHog feature
  flag `landlord-test-v2`, targeting elements by `data-ab-key`.

Current CTA inventory (17 distinct ids): `nav-join`, `nav-mobile-join`, `hero-join`,
`hero-calculator`, `minicalc-full-breakdown`, `pricing-pilot-join`, `cta-band-join`,
`calc-cta-join`, `calc-direct-join`, `method-open-calc`, `method-flow-join`,
`guides-cta-join`, `guides-more-join`, `article-cta-join` (x3),
`article-cta-calculator`, `about-cta-join`, `join-submit`.

---

## 4. Design brief

The full design language is in **`STYLE_GUIDE.md`** in the repository root. Read it
before building any page. Summary:

### Colour tokens (use these only)

| Token | Hex | Use |
|---|---|---|
| ink | `#101B2D` | Navy sections, dark cards, headings on light |
| ink-deep | `#0B1523` | Stats bars, CTA bands, footer |
| primary | `#E8730C` | Buttons, accents, kickers, links on dark |
| primary-tint | `#F5A356` | Kickers and links on navy |
| surface | `#F7F8FA` | Light page background, subtle cards |
| border | `#E4E8EE` | Card borders (`#D5DBE4` for inputs) |
| body text | `#3D4C61` / `#4A5A70` | Body copy on light |
| muted | `#6B7A8F` / `#9AA7B8` | Captions and fine print (`#8FA0B8` on navy) |
| on-navy | `#B9C4D4` / `#D7DEE8` | Body text on navy |
| amber | bg `#FCEEDE`, border `#F5D9BB`, text `#7A4A0E` to `#B95E0A` | Risk cards, warnings, selected states |
| success | `#1F8A5B` on `#E7F5EE` | Valid, stored, resolved |
| error | `#C13515` | Form validation |

Alternate navy and light sections down a page. Orange is an accent, never a large
section background (the thin feature marquee on the home page is the one exception).
Maximum two background colours per view. Do not introduce new hues.

### Typography

- **Source Serif 4**, weight 600: all headlines and large display numbers.
  H1 44 to 50px / 1.1, H2 34px / 1.15, article H2 29px / 1.25.
- **Public Sans**, 400 to 700: everything else. Body 16 to 16.5px, line-height 1.6 to
  1.75. Card titles 15 to 17px / 700. Captions 12 to 13.5px.
- A kicker sits above every H2: 13px, weight 700, uppercase, letter-spacing 0.08em, in
  `#E8730C` on light or `#F5A356` on navy.
- Never below 12px. `text-wrap: pretty` on headlines. Exactly one `<h1>` per page.
- Fonts load from Google Fonts with `preconnect`, a `preload as="style"`, and a
  `media="print" onload="this.media='all'"` swap plus a `<noscript>` fallback. Copy this
  block verbatim into any new page.

### Components

- **Buttons:** primary `#E8730C`, white text, weight 600, radius 6px (8px inside cards),
  padding 15px 26px large / 10px 18px nav. Secondary on navy is
  `1px solid rgba(255,255,255,0.25)` with white text. Secondary on light is a `#101B2D`
  background.
- **Cards:** radius 10 to 14px, 1px `#E4E8EE` border, padding 24 to 32px, flex column
  with 8 to 14px gaps. Shadow on navy `0 24px 60px rgba(0,0,0,0.45)`; on light
  `0 8px 28px rgba(16,27,45,0.06)`.
- **Segmented controls** are the standard choice input: equal-width options, 1.5px
  `#D5DBE4` border, radius 8px; selected state is `#FCEEDE` background, `#E8730C`
  border, `#B95E0A` text. Prefer these over dropdowns for 2 to 4 options; use a `select`
  for 6 or more.
- **Inputs:** 1.5px `#D5DBE4` border, radius 8px, padding 12 to 13px by 14px. Labels
  13.5px / 600 above. Inline errors `#C13515` with a red border. Validate on submit,
  never block typing.
- **Nav:** navy bar, 34px logo plus "HOMEi PM" wordmark with "PM" in `#8FA0B8`, centre
  links 14px / 500 in `#B9C4D4` (active is white / 600), orange CTA on the right,
  external "HOMEi App ↗" in muted.
- **Section anatomy:** kicker → H2 → one short paragraph (max ~64ch) → content grid.
  Section padding 64px 48px; content max-width 1184px (nav 1280px).
- **Every page ends** with the `#0B1523` CTA band, then the footer.

### Layout, motion, accessibility

- Two-column grids (1.15fr / 1fr hero) or three-column card grids, 16px gaps. Always
  flex or grid with `gap`, never margin-spaced inline siblings.
- At ~900px collapse to a single column, swap the desktop nav for the hamburger
  (exposing the same links plus the CTA), make sticky rails static, and put calculator
  inputs above results. Minimum tap target 44px.
- Motion is minimal: the 32s linear feature marquee and standard hover states. No
  scroll-triggered animation, no parallax, no gradient washes. Respect
  `prefers-reduced-motion`.
- WCAG AA contrast, visible focus states, labelled inputs, alt text on every image,
  keyboard-operable segmented controls.

### Anti-patterns

Em dashes. Emoji. Gradient backgrounds. Rounded containers with a coloured left-border
accent. Inter, Roboto, Arial or Fraunces. Invented brand colours. Stock-photo filler or
decorative SVG illustrations (use real product screenshots or a labelled placeholder).
Placeholder or padded content. Testimonials or statistics we cannot evidence. Calling
the landlord dashboard an app. Combining savings and risk into one number.

---

## 5. Technical brief

### 5.1 Stack

Plain static HTML, CSS and vanilla JavaScript. **There is no build step.** No npm, no
bundler, no framework. What is in the repository is what ships. This is deliberate: it
keeps the site fast, keeps the deploy trivial, and means anyone can edit a page.

Pages carry the approved designs' **inline styles verbatim**. Shared chrome lives in
`css/site.css`. This looks unusual but it is intentional: it makes each page a faithful,
self-contained copy of its signed-off design, and it means a change to one page cannot
break another. Follow the same pattern on new pages: inline the section styles, and only
add to `css/site.css` when the rule is genuinely shared.

### 5.2 File map

```
/
├── index.html                                    Home
├── savings-calculator.html                       Full calculator
├── how-the-calculator-works.html                 Methodology
├── renters-rights-act.html                       Guide 1 (root URL, indexed, locked copy)
├── join.html                                     Waiting-list form
├── about.html                                    Founders
├── privacy.html                                  Privacy policy
├── blog/
│   ├── index.html                                Guides index
│   ├── summer-turnaround-renters-rights-act-2026.html   Guide 2 (locked copy)
│   └── renters-rights-act-rent-rules.html        Guide 3 (added Sept 2026)
├── css/
│   ├── site.css                                  Shared chrome. THE live stylesheet.
│   └── styles.css                                OLD, unreferenced, retained for review
├── js/
│   ├── calc-engine.js                            LOCKED engine
│   ├── calculator-data.js                        LOCKED data, 342 authorities
│   ├── calculator-page.js                        Calculator page bindings
│   ├── home-mini-calc.js                         Home mini-calculator bindings
│   ├── join-form.js                              LOCKED Web3Forms submission
│   ├── site.js                                   Mobile menu + footer year
│   ├── main.js                                   OLD, unreferenced, retained for review
│   └── savings-calculator.js                     OLD, unreferenced, retained for review
├── scripts/
│   ├── posthog-init.js                           Consent-gated analytics loader
│   ├── posthog-experiments.js                    A/B/C copy test (flag landlord-test-v2)
│   ├── cta-tracking.js                           data-cta-id click delegate
│   └── cookie-consent.js                         Consent banner
├── assets/
│   ├── images/blog/{renters-rights-act,summer-turnaround,rent-rules}/
│   ├── images/calculator/
│   └── videos/inspection-demo.mp4
├── images/                                       Logos, favicons, og-image
├── CNAME                                         homei.org.uk
├── robots.txt, sitemap.xml, favicon.ico
├── CLAUDE.md                                     Enforced rules (loads automatically)
├── STYLE_GUIDE.md                                Design language
├── HANDOVER.md                                   This file
└── .github/workflows/deploy.yml                  Deploy
```

Also in the repository but **not published**: `audits/`, `content/`, `TASKS*.md`,
`VALIDATION_LOG*.md`, `*_REPORT.md`, `SITE-GUIDE.md` (stale, predates the redesign, do
not follow it), `README.md`.

### 5.3 Script loading pattern

Every page loads, in the `<head>`:

```html
<script src="/scripts/posthog-init.js"></script>
<script src="/scripts/posthog-experiments.js"></script>
<script src="/scripts/cta-tracking.js" defer></script>
<script src="/scripts/cookie-consent.js" defer></script>
```

and at the end of `<body>`, `js/site.js` (root pages use the relative `js/site.js`, blog
pages use the absolute `/js/site.js`, both are correct for their depth). The calculator
page additionally loads `calc-engine.js`, `calculator-data.js`, `calculator-page.js`;
the home page loads `calc-engine.js`, `calculator-data.js`, `home-mini-calc.js`; the
join page loads `join-form.js`.

### 5.4 Hosting, domain and deploy

- **GitHub Pages**, deployed by GitHub Actions from the `Main` branch.
- The workflow (`.github/workflows/deploy.yml`) stages an **explicit allow-list** into
  `_site/` rather than publishing the whole repository. This was a security fix: the
  repository previously served everything, including an old Java prototype's
  `keystore.p12`. **If you add a new root-level HTML page you must add it to the `cp`
  list in the workflow or it will 404.** Files inside `blog/`, `css/`, `js/`,
  `images/`, `scripts/` and `assets/` are copied recursively, so a new guide under
  `blog/` needs no workflow change.
- `configure-pages@v5` runs with `enablement: true` so a transient "Get Pages site
  failed: Not Found" no longer breaks the deploy.
- **Extensionless URLs:** GitHub Pages serves `savings-calculator.html` at
  `/savings-calculator`. All internal links use the extensionless form. `blog/index.html`
  is served at `/blog/`.
- **Custom domain:** the `CNAME` file contains `homei.org.uk` and must stay in the
  deploy artifact, or Pages drops the custom domain on every deploy. DNS is at GoDaddy,
  pointing at GitHub's four A records. HTTPS enforcement is on.

### 5.5 SEO

- Unique `<title>` and meta description per page, one `<h1>`, semantic headings,
  canonical URL, Open Graph and Twitter card tags, `theme-color`.
- Structured data in use: `WebSite` and `Organization` and `SoftwareApplication` (home),
  `FAQPage` (where a FAQ exists), `Article` with author and dates (guides),
  `BreadcrumbList` (guides), `CollectionPage` (guides index), `VideoObject` (summer
  turnaround demo video), `WebApplication`.
- `sitemap.xml` currently lists 9 URLs. Add every new page to it.
- Internal linking pattern: guides → calculator → join.
- **Keep the indexed URLs stable.** `/renters-rights-act`, `/savings-calculator` and
  `/blog/summer-turnaround-renters-rights-act-2026` are indexed. 301-redirect anything
  that moves.

---

## 6. Page inventory

| Route | File | Notes |
|---|---|---|
| `/` | `index.html` | Hero, feature marquee, platform, mini-calculator, pricing, stats, CTA |
| `/savings-calculator` | `savings-calculator.html` | Bound to the locked engine |
| `/how-the-calculator-works` | `how-the-calculator-works.html` | Methodology, recreated flowchart |
| `/blog/` | `blog/index.html` | Guides index, three cards plus a dashed "more on the way" panel |
| `/renters-rights-act` | `renters-rights-act.html` | Guide 1. Root URL, indexed. Copy locked |
| `/blog/summer-turnaround-renters-rights-act-2026` | `blog/summer-turnaround-...html` | Guide 2. Copy locked. Has the inspection demo video |
| `/blog/renters-rights-act-rent-rules` | `blog/renters-rights-act-rent-rules.html` | Guide 3, added 13 Sept 2026 |
| `/join` | `join.html` | Waiting-list form |
| `/about` | `about.html` | Founders. Photos currently hidden at the founders' request |
| `/privacy` | `privacy.html` | Wording carried over verbatim from the pre-redesign site |

The two older guides use a `.rra-*` class block for the article body; the new rent-rules
guide uses a `.rr-*` block with the sticky contents rail from its design. Both are
acceptable; match whichever page you are working on.

---

## 7. Recipe: adding a new guide

1. Put the page at `blog/<slug>.html`. A `blog/` page needs **no** deploy-workflow
   change; a root-level page does.
2. Copy the `<head>` from `blog/renters-rights-act-rent-rules.html` and change the
   title, description, canonical, OG and Twitter tags, and both JSON-LD blocks
   (`Article` and `BreadcrumbList`).
3. Copy the nav, mobile menu, CTA band and footer from the same file so the chrome
   matches. Keep every `data-cta-id`.
4. Host images locally under `assets/images/blog/<slug>/`. Never hot-link. Give every
   image real alt text. Use `loading="lazy"` below the fold and
   `fetchpriority="high"` on the hero.
   **Do not put `width`/`height` attributes on an image that uses a CSS
   `aspect-ratio` crop:** the HTML `height` attribute becomes a presentational height
   and overrides the aspect ratio, which renders the image at full natural height and
   makes `object-fit: cover` crop the wrong axis. This actually happened; the fix is to
   drop the attributes and let the CSS `aspect-ratio` prevent layout shift.
5. Add a card to `blog/index.html` in the position the design specifies.
6. Add the URL to `sitemap.xml`.
7. Run the verification protocol in section 8.

---

## 8. Verification protocol

Do this before every commit. It has caught real bugs every time.

```bash
# serve locally
python3 -m http.server 8899
```

Then drive it with Playwright. Chromium is preinstalled at `/opt/pw-browsers/chromium`
and the module must be required by absolute path (an ESM import fails):

```js
const { chromium } = require('/opt/node22/lib/node_modules/playwright');
const br = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium' });
```

Check, on every page you touched:

- exactly one `<h1>`
- zero `pageerror` events
- zero HTTP responses >= 400
- every image has non-zero `naturalWidth` after scrolling (lazy images report 0 until
  they enter the viewport, so scroll first) and non-empty alt text
- every in-page `#anchor` resolves to an element with that id
- every internal `/link` returns 200 (remember to map extensionless URLs back to
  `.html`, and `/blog/` to `blog/index.html`)
- `document.documentElement.scrollWidth` never exceeds the viewport at 375, 768, 1024
  and 1440
- no em dash in `document.body.innerText`
- if the page reproduces approved copy, diff the rendered `innerText` against the
  rendered design file and confirm the article body is identical

For calculator changes, additionally re-run the three reference cases in section 3.1
**through the real UI**, not by calling the engine directly.

**The sandbox has no outbound internet access.** `curl` to a live URL returns `000`.
That is a firewall limitation, never evidence that the site is down. Verify locally and
ask the founders to confirm anything that needs the live domain.

---

## 9. Git and deploy conventions

- Develop on `claude/jolly-hopper-cias7`. Push with `git push -u origin <branch>`.
  Retry network failures up to four times with exponential backoff (2s, 4s, 8s, 16s).
- Never push directly to `Main`. Merging to `Main` triggers the live deploy.
- Do not open a pull request unless the founders ask for one.
- If the branch's PR has already been merged, restart the branch from the latest `Main`
  rather than stacking new commits on merged history.
- A local git proxy has previously cached branches that never reached GitHub. If a
  branch is invisible on GitHub after a successful-looking push, fall back to the
  GitHub MCP API (`create_branch`, `push_files`).
- Commits are signed. A merge commit created by GitHub itself is authored by
  `noreply@github.com` and cannot be re-authored without rewriting history from `Main`;
  that is expected, not a fault to fix.

---

## 10. Open decisions and pending work

### 10.1 The big one: switching the site from "waiting list" to "live product"

A design pack, `HOMEi_PM_Website_Redesign.zip`, arrived on 13 September 2026. Only its
new guide was built. **The rest of the pack is a substantial repositioning that has not
been applied**, because the instruction at the time was to touch only the guides. The
pack's `CLAUDE_INSTRUCTIONS.md` and `PROMPT.md` state:

- **The product is live.** There is no waiting list, no pilot, no launch countdown.
- Sign-up and sign-in both link straight out to the platform at
  `https://d1evln8kpnyy80.cloudfront.net`, which becomes `HOMEi.uk` once the domain
  moves. **Keep that URL in one config value** so it changes in one place.
- Primary CTA becomes **"Get started"** (nav and general use) or **"Sign up now"**
  (hero and conversion moments). A **"Sign in"** link sits to the left of the nav CTA on
  every page.
- **There is no payment page yet**, so HOMEi PM is advertised as **free to use while in
  early access**, with every feature included. Standard wording: *"Free while we are in
  early access"* and *"plenty of notice before any charges begin"*. Never imply a card
  is taken or a charge is imminent.
- Pricing appears **only** in the pricing section, labelled **"from launch"**.
- No waiting-list, pilot or "coming soon" language anywhere.

This directly answers the founders' earlier question, *"what do I need to give you to
change the waiting list page to sign up now"*: the pack contains everything needed. What
still needs a founder decision before that work starts:

1. Is `https://d1evln8kpnyy80.cloudfront.net` the URL to ship today, or should it wait
   for `HOMEi.uk`?
2. Same tab or new tab for sign-up and sign-in?
3. Is `/join` retired and 301-redirected to the platform, or repurposed as a contact
   page? The pack's footer labels it "Contact us", which suggests repurposed.
4. Does the Web3Forms capture continue in any form, or does it stop entirely?
5. Once the waiting list ends, the pilot wording rule in `CLAUDE.md` is obsolete and
   `CLAUDE.md` must be updated in the same change.

The 17 `data-cta-id` attributes listed in section 3.3 are the complete inventory of what
would need re-pointing and renaming.

### 10.2 Smaller open items

| Item | Status |
|---|---|
| Old domain `homeistudent.uk` | 301 redirect decision **never given** despite being asked several times. Currently nothing points from the old domain to the new one. |
| Google Search Console sitemap | Submit the **full URL** `https://homei.org.uk/sitemap.xml`. The greyed-out prefix only exists on URL-prefix properties; this is a Domain property, which needs the full URL. |
| Bing Webmaster Tools | Not yet imported from Search Console. |
| RRA guide's 31 May 2026 deadline | Has now passed. The framing reads as forward-looking. Flagged but not changed, because the copy is locked. Needs a founder decision. |
| Old files | `css/styles.css`, `js/main.js`, `js/savings-calculator.js` are unreferenced. Retained at the founders' request until a post-launch review. |
| Founder photos | Hidden on the About page at the founders' request. The files exist in the tenant pack (`team/james.png`, `team/gurprit.png`) if they are wanted later. |
| Outstanding images | The RRA and Summer guides still show placeholder panels where the design expected an article header image, a deadline image, a compliance-dashboard screenshot, gas safety and EICR paperwork, and a dashboard overview. The Home page wants a tenant's view of reporting an issue in the HOMEi app. Ask for these files rather than shipping dashed panels. |
| Em dash in a screenshot | `assets/images/blog/rent-rules/dashboard.png` contains "All caught up — nothing needs your attention" in the **product UI**. It is inside an image, not site copy, so the rule is not broken, but it is worth fixing in the platform. |

---

## 11. Gotchas worth knowing

- **`Main` has a capital M.** Scripts and commands that assume `main` will fail.
- **A design file is not automatically right.** The approved About design contained em
  dashes. The hard content rules beat design fidelity. When a design conflicts with a
  rule, stop and ask rather than silently choosing.
- **Check which product a design pack targets** before building. One pack was for the
  tenant app site (`homeistudent.com`) and referenced pages that do not exist here.
- **Image weight matters.** The rent-rules hero arrived at 1.9 MB. It was downscaled to
  1100px and palette-optimised to 402 KB. Pillow is not preinstalled;
  `pip install Pillow` works. Keep photographic PNGs under roughly 400 KB.
- **Rounding:** JavaScript's `Math.round` is half-up, Python's `round` is half-even.
  When verifying calculator output against a Python model, compare full-precision floats
  and never compare values that have already been rounded once.
- **Grid overflow on mobile:** grid children default to `min-width: auto`, which forces
  a track wider than the viewport. `css/site.css` sets `.hx-grid > * { min-width: 0 }`
  for exactly this reason. Do not remove it.
- **The shared responsive breakpoint is 900px**, set once in `css/site.css`: below it
  `.hx-nav` and `.hx-nav-cta` hide, `.hx-mobile-btn` appears, `.hx-grid` and `.hx-flow`
  collapse to one column, `.hx-stats` goes to two, sticky rails go static, and
  `.hx-section` side padding drops to 20px. The nav genuinely does not fit below that:
  eight items overflowed by 116px at 768px, so it collapses rather than cramming. The
  rent-rules guide additionally collapses its own two-column blocks at 1000px, which is
  what its approved design specified.
- **DNS:** a GoDaddy "Parked" A record will silently block GitHub's DNS verification and
  certificate issuance. If HTTPS will not activate, look for that first.

---

## 12. Quick reference

```
Live:        https://homei.org.uk
Repo:        HOMEiStudent/Landord-Website
Deploy:      GitHub Actions → GitHub Pages, on push to Main
Branch:      claude/jolly-hopper-cias7
Form:        Web3Forms, key a1ac79e5-9df0-46b7-8379-d913a8a74b11
Analytics:   PostHog phc_mv6JqZDqX8urYDijU46DVVLKCdKZphpYnBjCtHWsk357 (us.i.posthog.com)
Flag:        landlord-test-v2 (A/B/C copy test)
Support:     support@homeistudent.com
Tenant app:  https://homeistudent.com (separate codebase)
Platform:    https://d1evln8kpnyy80.cloudfront.net (not yet linked from this site)
```
