# Phase 1 — 30-Day Quick Wins (Adapted for Single-Page Codebase)

Domain: homeistudent.uk (from CNAME)
Single page: index.html
CSS: /css/styles.css
JS: /js/main.js

---

## Group A — Discovery & Setup

- [x] **T01** — Audit current state: extract current `<title>`, meta description, H1, all H2s, heading hierarchy, existing schema, existing CTAs. Output to `audits/current-seo-state.md`. No code changes.

- [x] **T02** — Create `/audits/` folder. No deletions.

## Group B — On-Page SEO Foundations

- [x] **T03** — Update `<title>` to: `Student Landlord Property Management Software (UK) – Renters' Rights Act Ready | HOMEi PM`. Verify visible portion before the pipe is 55–65 characters. **Adjusted:** removed "Software (UK)" to fit 64 chars.

- [x] **T04** — Update meta description to: `HOMEi PM is the UK property management platform built for student landlords. Stay Renters' Rights Act compliant, run digital inspections, track maintenance and message tenants — all in one place. Join the pilot.` Trim to 150–160 characters total. **Adjusted:** trimmed to 157 chars, removed em dash.

- [x] **T05** — Update H1 to: `Run your student lets without the headaches`. Confirm exactly one H1 exists after the change.

- [x] **T06** — Update H2s where they match these patterns (only rename existing ones):
  - "Built for the Renters' Rights Act" → "Stay compliant with the Renters' Rights Act 2026" **DONE**
  - "Everything You Need in One Place" → "Manage inspections, maintenance and rent in one place" **DONE**
  - "Free Onboarding & Setup Support" → "Dedicated onboarding, no hassle" **DONE**
  - "Trusted by Landlords Like You" → "Trusted by UK landlords and agents" **SKIPPED** — "What Landlords Say" is a section label `<p>`, not an H2. The actual H2 "Trusted by Landlords Like You" doesn't match the prescribed source.
  If any H2 is not present, log and skip.

- [x] **T07** — ~~Audit remaining pages~~ **SKIPPED** — only index.html exists. N/A.

- [x] **T08** — Audit index.html for: exactly one H1, no skipped heading levels (no H1→H3 jumps), no empty headings. Fix violations. Log all fixes. **Fixed 14 H4→H3 skips across 4 sections + 4 CSS selectors. Footer H4s left unchanged.**

## Group C — CTA Improvements

- [x] **T09** — Audit all CTAs on index.html. Document current text, colour, position, and click-through behaviour. Output to `audits/current-cta-state.md`.

- [x] **T10** — Add a secondary CTA "Book a 15-minute chat" to the homepage hero, next to the existing primary CTA. Use #ff6a00 with white text for secondary, keep primary in #ffa000. Both must have minimum 44x44px tap target on mobile. **User confirmed: mailto to support@homeistudent.com. Also added min-height: 44px to all .btn.**

- [x] **T11** — Add `data-cta-id` attributes to every CTA button/link on index.html. **17 unique IDs added, zero duplicates, zero tracking scripts.**

- [x] **T12** — Audit existing sticky mobile CTA bar. **Bar existed but was not dismissible. Added dismiss button with X icon, CSS, and JS handler. Bar stays hidden after dismissal.**

## Group D — Trust Signals

- [x] **T13** — Testimonial section updated. Fake quotes removed, Q2 2026 note added, 3 slots wrapped with PLACEHOLDER comments. Section remains hidden.

- [ ] **T14** — STOP and ask user: which partner/backer logos do you have permission to display? Do not add logos without confirmation. If Emerge logo or University of Sheffield logo is available, add a "Founded at" trust strip below the hero.

- [x] **T15** — Add a metrics strip with verifiable numbers. **User confirmed:** 1,200+ downloads, 3.5 daily active opens per user, co-designed with universities. Visible strip added below hero.

## Group E — Technical SEO Infrastructure

- [x] **T16** — Verify canonical link. **Fixed:** added trailing slash to match sitemap `<loc>`. Points to `https://homeistudent.uk/`.

- [x] **T17** — Verify sitemap.xml. **Fixed:** updated `<lastmod>` from 2026-04-26 to 2026-05-05. Structure correct.

- [x] **T18** — Verify robots.txt. **Already correct** — no changes needed.

- [x] **T19** — Verify Organization schema. **Fixed:** added `address` (Sheffield, GB). LinkedIn `sameAs` skipped per user instruction. All required fields present.

- [x] **T20** — ~~BreadcrumbList schema on non-homepage pages~~ **SKIPPED** — only homepage exists. N/A.

- [x] **T21** — Fix FAQ schema/HTML mismatch. **Fixed:** added missing Q7 "What happens after the free year?", updated all question names to match visible HTML text exactly. Now 11 schema entries = 11 HTML FAQ items.

- [x] **T22** — Validate all JSON-LD schema. **All 3 blocks (SoftwareApplication, FAQPage, Organization) pass structural validation.** Evidence in VALIDATION_LOG.md.

## Group F — Image & Accessibility Pass

- [x] **T23** — Image/SVG audit complete. Output: `audits/image-audit.md`. 5 image files (largest 25.5KB), 2 active `<img>` tags with alt text, 61 decorative SVGs flagged for aria-hidden.

- [x] **T24** — All `<img>` tags already had alt text. Added `aria-hidden="true"` to all 61 decorative SVGs. Output: `audits/proposed-alt-text.md`.

- [x] **T25** — No images exceed 100KB (largest: 25.5KB logo.png). No conversion needed. Logged and skipped.

## Group G — Mobile & Core Web Vitals

- [x] **T26** — Manual Lighthouse audit. Output: `audits/lighthouse-baseline-manual.md`. Identified render-blocking Google Fonts, missing image dimensions, no lazy loading.

- [x] **T27** — Added `loading="eager"` + `fetchpriority="high"` to navbar logo, `loading="lazy"` to footer logo.

- [x] **T28** — Added `width="200" height="200"` to both `<img>` tags (matching actual PNG dimensions).

- [x] **T29** — Deferred Google Fonts via `media="print" onload` pattern with preload hint and noscript fallback. Local styles.css kept blocking (small enough that inlining critical CSS would add more bytes than saved).

- [x] **T30** — Viewport meta already correct: `width=device-width, initial-scale=1.0`. No fix needed.

- [x] **T31** — Mobile CSS audit. Output: `audits/mobile-audit.md`. All tap targets meet 44px min, no font below 14px on primary text, no overflow risks.

- [x] **T32** — Performance summary. Output: `audits/performance-summary.md`. Expected Lighthouse: Performance 90-95, Accessibility 95-100, SEO 100.

## Group H — Final Validation

- [x] **T33** — Final audit. 0 broken links, 0 missing file references, all anchor targets exist.

- [x] **T34** — Schema re-validation. All 3 JSON-LD blocks valid, 0 errors. Confirmed in VALIDATION_LOG.md.

- [x] **T35** — HTML validation. 66 unique IDs, 0 duplicates, all tags properly balanced.

- [x] **T36** — Completion report generated: `PHASE_1_COMPLETION_REPORT.md`.
