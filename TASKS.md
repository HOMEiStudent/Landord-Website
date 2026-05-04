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

- [ ] **T09** — Audit all CTAs on index.html. Document current text, colour, position, and click-through behaviour. Output to `audits/current-cta-state.md`.

- [ ] **T10** — Add a secondary CTA "Book a 15-minute chat" to the homepage hero, next to the existing primary CTA. Use #ff6a00 with white text for secondary, keep primary in #ffa000. Both must have minimum 44x44px tap target on mobile. STOP and ask user: mailto link or Calendly?

- [ ] **T11** — Add `data-cta-id` attributes to every CTA button/link on index.html (e.g. `data-cta-id="hero-primary"`, `data-cta-id="hero-secondary"`, `data-cta-id="footer-pilot"`). Inert markers only — no tracking scripts.

- [ ] **T12** — Audit existing sticky mobile CTA bar. Verify it is dismissible, doesn't overlap form fields or footer. If not dismissible, add dismiss functionality. If no sticky bar exists, create one using vanilla JS in `js/main.js`.

## Group D — Trust Signals

- [ ] **T13** — Locate the testimonial section (currently hidden). Replace placeholder text with: "Real landlord case studies coming Q2 2026 as our pilot partners go live." Wrap each slot with `<!-- PLACEHOLDER: real testimonial required -->` comments.

- [ ] **T14** — STOP and ask user: which partner/backer logos do you have permission to display? Do not add logos without confirmation. If Emerge logo or University of Sheffield logo is available, add a "Founded at" trust strip below the hero.

- [ ] **T15** — Add a metrics strip with verifiable numbers: "1,200+ student app downloads in Sheffield · 3.5 daily app opens per active user · Currently co-designing HOMEi PM with University of Sheffield SmartMove". STOP and ask user to confirm these numbers are accurate before implementing.

## Group E — Technical SEO Infrastructure

- [ ] **T16** — Verify `<link rel="canonical">` exists and points to `https://homeistudent.uk/`. Fix if incorrect.

- [ ] **T17** — Verify `/sitemap.xml` is correct: lists index.html with `<lastmod>` set to today's date, `<changefreq>` weekly. Fix if needed.

- [ ] **T18** — Verify `/robots.txt` contains: `User-agent: *`, `Allow: /`, `Sitemap: https://homeistudent.uk/sitemap.xml`. Fix if needed.

- [ ] **T19** — Verify existing Organization schema (JSON-LD) in `<head>`. Ensure it includes: name, url, logo URL, description, address (Sheffield, UK). Add `sameAs` with LinkedIn URL — STOP and ask user for the exact LinkedIn URL.

- [ ] **T20** — ~~BreadcrumbList schema on non-homepage pages~~ **SKIPPED** — only homepage exists. N/A.

- [ ] **T21** — Verify existing FAQPage schema (JSON-LD) matches the actual FAQ HTML content. Fix any mismatches between schema entries and visible FAQ questions.

- [ ] **T22** — Validate all schema by reviewing JSON-LD blocks for structural correctness. Paste validation evidence into VALIDATION_LOG.md.

## Group F — Image & Accessibility Pass

- [ ] **T23** — Audit every `<img>` tag and inline SVG. Output `audits/image-audit.md` listing: file path (or "inline SVG"), current alt text, file size (for file-based images), dimensions, format. Flag any image >200KB or missing alt.

- [ ] **T24** — Add descriptive alt text to any image missing one. Decorative SVGs get `aria-hidden="true"`. Output proposed alt text to `audits/proposed-alt-text.md` and STOP for user review before applying.

- [ ] **T25** — Check file-based images (logo.png, logo-light.png, favicons). Convert any >100KB to WebP with `<picture>` fallback. If no images exceed threshold, log and skip.

## Group G — Mobile & Core Web Vitals

- [ ] **T26** — ~~Run Lighthouse~~ **ADAPTED** — No browser available in this environment. Instead, audit index.html manually for: viewport meta, render-blocking resources, image dimensions, lazy loading, CLS risks. Output baseline to `audits/lighthouse-baseline-manual.md`.

- [ ] **T27** — Add `loading="lazy"` to every `<img>` below the fold. Add `loading="eager"` and `fetchpriority="high"` to the logo/hero image.

- [ ] **T28** — Add `width` and `height` attributes to every `<img>` tag. Match to actual image dimensions.

- [ ] **T29** — Audit `css/styles.css` for render-blocking issues. Inline critical above-the-fold CSS in `<style>` in `<head>`. Defer non-critical CSS using `media="print" onload="this.media='all'"` pattern.

- [ ] **T30** — Verify `<meta name="viewport" content="width=device-width, initial-scale=1">` exists. Fix if missing or incorrect.

- [ ] **T31** — ~~Test in browser~~ **ADAPTED** — No browser available. Audit CSS for: min tap target sizes (44px), font sizes (min 14px), overflow risks, fixed-width elements. Log findings in `audits/mobile-audit.md`.

- [ ] **T32** — ~~Re-run Lighthouse~~ **ADAPTED** — Produce a summary of all performance improvements made, expected impact on each Lighthouse category, and remaining recommendations. Output to `audits/performance-summary.md`.

## Group H — Final Validation

- [ ] **T33** — ~~Lighthouse on 3 pages~~ **ADAPTED** — Final manual audit of index.html covering all changes made. Verify no broken links, no missing references, no regressions.

- [ ] **T34** — Review all JSON-LD schema blocks for structural validity. Confirm zero errors in VALIDATION_LOG.md.

- [ ] **T35** — Run HTML validation check: verify all tags are properly closed, no duplicate IDs, no broken attributes across all modified sections. Log results.

- [ ] **T36** — Generate `PHASE_1_COMPLETION_REPORT.md` containing: every task with status, changes made, schema validation results, list of all commits, files changed, user consultations, and items deferred to Phase 1.5/2/3.
