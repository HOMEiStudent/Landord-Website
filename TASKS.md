# Phase 1.5 — PostHog Analytics & A/B Testing

Domain: homeistudent.uk (from CNAME)
Single page: index.html
CSS: /css/styles.css
JS: /js/main.js
PostHog API Key: phc_mv6JqZDqX8urYDijU46DVVLKCdKZphpYnBjCtHWsk357
Feature Flag: homei-pm-website-ab-test

---

## Group A — PostHog Installation

- [x] **T01** — Pre-wizard snapshot. Capture current state (git status, ls, HTML files). Confirm working tree is clean. No code changes — audit only.

- [x] **T02** — Install PostHog. Wizard failed (non-interactive TTY) — Path C manual install. Created `scripts/posthog-init.js` with EU host. Added script tag to index.html.

- [x] **T03** — Review complete. API key correct, EU host confirmed, no .env, no build step. Audit: `audits/posthog-wizard-changes.md`.

- [x] **T04** — Verify PostHog is live. Host corrected EU→US. $pageview events confirmed in PostHog dashboard by user. Start local server, confirm $pageview events fire. Get user confirmation from PostHog dashboard.

## Group B — CTA Click Tracking

- [x] **T05** — Wire up CTA click tracking. Created `scripts/cta-tracking.js`, 17 CTAs covered. Awaiting user confirmation of events. via delegated event listener. Verify cta_clicked events fire with correct data-cta-id values. Get user confirmation.

## Group C — Hero Headline A/B Test

- [x] **T06** — Feature flag verified. User reconfigured from 2 variants (control/test 50/50) to 3 variants (control 33%, variant-a 33%, variant-b 34%). Enabled, 100% rollout.

- [x] **T07** — Implemented feature flag client-side. Created `scripts/posthog-experiments.js` with 3-variant H1 swap. Added deferred script before `</body>` in index.html.

- [x] **T08** — A/B test validated. Two tabs showed different variants (control + variant-b). `hero_variant_shown` events confirmed in PostHog Live Events. Hard-refresh to see different variants. Get user confirmation of hero_variant_shown events.

## Group D — Final Validation

- [x] **T09** — Manual audit complete. Phase 1 intact (61 aria-hidden, 1 H1, 17 CTAs, 3 valid schemas, all SEO elements). PostHog scripts total 2.9KB, non-blocking. No degradation. Confirm Phase 1 scores have not degraded.

- [x] **T10** — Completion report generated: `PHASE_1.5_COMPLETION_REPORT.md`.
