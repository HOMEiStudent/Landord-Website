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

**User confirmation:** PENDING

