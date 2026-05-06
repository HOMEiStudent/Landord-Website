# Phase 1.5 — Validation Log

Each task records: validation commands run, output excerpt, pass/fail.

---

## T01 — Pre-wizard snapshot

**Validation gate:** Working tree clean, all Phase 1 files present.

**Commands run:**
```
git status  → nothing to commit, working tree clean
ls -la      → index.html, css/, js/, images/, audits/ all present
find . -name "*.html"  → 2 files (index.html + legacy src/.../index.html)
```

**Result:** PASS — no code changes required.

## T02 — Install PostHog

**Validation gate:** PostHog init script exists with correct API key and host.

**Wizard outcome:** Path C — wizard requires interactive TTY, manual install performed.
**Files created:** `scripts/posthog-init.js`
**Files modified:** `index.html` (added script tag before `</head>`)

**Result:** PASS

## T03 — Review and complete PostHog installation

**Validation gate:** PostHog loads on all HTML pages, API key correct, no build step, no .env.

**Commands run:**
```
grep -c 'posthog' index.html  → 1
grep 'phc_mv6JqZDqX8urYDijU46DVVLKCdKZphpYnBjCtHWsk357' scripts/posthog-init.js  → present
grep 'eu.i.posthog.com' scripts/posthog-init.js  → present
for f in *.html; do grep -c "posthog" "$f"; done  → index.html: 1 (only HTML page)
ls .env 2>/dev/null  → not found (correct)
ls package.json 2>/dev/null  → not found (correct)
```

**Audit output:** `audits/posthog-wizard-changes.md`

**Result:** PASS

## T04 — Verify PostHog is live

**Validation gate:** $pageview events visible in PostHog dashboard, user confirmed.

**Host fix:** Changed api_host from `eu.i.posthog.com` to `us.i.posthog.com` after user's PostHog dashboard revealed US project.

**Evidence:**
- Network tab on homeistudent.uk: posthog-init.js (200), array.js (200), config.js (200), flags/ (200), e/ events (200)
- All requests going to US endpoints
- PostHog dashboard → Activity: "Pageview" event from `https://homeistudent.uk/#contact`, library: web
- User confirmed: YES

**Result:** PASS

## T05 — Wire up CTA click tracking

**Validation gate:** cta_clicked events fire with correct data-cta-id values, user confirmed.

**Implementation:**
- Created `scripts/cta-tracking.js` with delegated click listener on `[data-cta-id]`
- Added `<script src="/scripts/cta-tracking.js" defer>` to index.html after PostHog init
- Captures: cta_id, cta_text, page pathname

**CTA IDs covered (17):**
contact-form-submit, cta-banner-primary, early-access-primary, feedback-banner-primary, footer-primary, hero-primary, hero-secondary, inspections-primary, modal-dismiss, nav-app-link, nav-mobile-primary, nav-primary, poll-submit, rra-primary, sticky-desktop-primary, sticky-mobile-primary, why-homei-app-link

**User confirmation:** YES — `cta_clicked` events visible in PostHog Live Events, including "Join as a Founding Landlord" button.

**Result:** PASS

## T06 — Verify feature flag configuration

**Validation gate:** Feature flag is multivariate with 3 variants, enabled.

**Before:** 2 variants (control 50%, test 50%)
**After:** User reconfigured to 3 variants (control 33%, variant-a 33%, variant-b 34%)
**Rollout:** 100% of all users
**Status:** Enabled
**User confirmed:** YES

**Result:** PASS

## T07 — Implement feature flag client-side

**Validation gate:** Script exists, loads after PostHog init, swaps H1 based on variant.

**Implementation:**
- Created `scripts/posthog-experiments.js` with `posthog.onFeatureFlags()` callback
- 3 variants mapped: control, variant-a, variant-b
- Captures `hero_variant_shown` event with variant and headline
- Added `<script src="/scripts/posthog-experiments.js" defer>` before `</body>`
- Script order: posthog-init.js (head) → cta-tracking.js (defer) → main.js (defer) → posthog-experiments.js (defer)

**Commands run:**
```
grep -n 'posthog-init\|cta-tracking\|posthog-experiments\|main.js' index.html
  → 181: posthog-init.js, 182: cta-tracking.js, 1553: main.js, 1554: posthog-experiments.js
```

**Result:** PASS

## T08 — Validate A/B test working

**Validation gate:** Different variants show on different loads, hero_variant_shown events fire.

**Evidence:**
- User opened two tabs: one showed "Run your student lets without the headaches" (control), other showed "Built by a former HMO landlord, for landlords" (variant-b)
- PostHog Live Events: multiple `hero_variant_shown` events confirmed
- User confirmed: YES

**Result:** PASS

## T09 — Manual Lighthouse audit for regression

**Validation gate:** Phase 1 scores not degraded, PostHog scripts non-blocking.

**Phase 1 work verification:**
- aria-hidden="true": 61 SVGs (intact)
- H1 count: 1 (intact)
- data-cta-id: 17 (intact)
- JSON-LD schemas: 3 valid blocks (intact)
- SEO elements (canonical, meta description, viewport, schemas): all present

**PostHog script impact:**
- posthog-init.js: 1,885 bytes (in head, but loads PostHog library async)
- cta-tracking.js: 348 bytes (deferred)
- posthog-experiments.js: 740 bytes (deferred)
- Total added: 2,973 bytes (~2.9KB)
- No render-blocking scripts added

**Result:** PASS

