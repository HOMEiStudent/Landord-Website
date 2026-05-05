# Phase 1 — Validation Log

Each task records: validation commands run, output excerpt, pass/fail.

---

## T01 — Audit current state

**Validation gate:** Audit file exists with all required fields populated.

**Commands run:**
```
grep -n '<title>\|<meta name="description"\|<h1\|<h2\|<h3\|<h4' index.html
grep -c '<h1' index.html  → 1
grep -n 'application/ld+json' index.html  → 3 schema blocks found
grep -n 'class="btn\|<a.*href="#contact"\|<button' index.html  → 16 CTAs identified
```

**Output:** Full audit written to `audits/current-seo-state.md` covering:
- Title (66 chars), meta description (219 chars — over limit)
- 1 H1, 15 H2s, 12 H3s, 16 H4s
- 5 heading hierarchy skip issues (H2→H4)
- 3 JSON-LD schemas (SoftwareApplication, FAQPage, Organization)
- 16 CTA buttons/links documented
- 3 issues flagged: missing og-image.png, meta description too long, FAQ schema/HTML mismatch (10 vs 11)

**Result:** PASS — no code changes required for this task.

## T02 — Create folder structure

**Validation gate:** `/audits/` exists.

**Commands run:**
```
ls -la audits/  → exists, contains current-seo-state.md from T01
ls -la data/    → does not exist (not needed for single-page site)
```

**Result:** PASS — `/audits/` already created during T01. `/data/` not applicable to this codebase (no JSON data files). No action needed.

## T03 — Update homepage title

**Validation gate:** Title tag updated, visible portion 55–65 chars, exactly one `<title>` tag.

**Prescribed title:** `Student Landlord Property Management Software (UK) – Renters' Rights Act Ready | HOMEi PM`
**Prescribed visible portion:** 78 chars — OVER the 55–65 limit.
**Adjustment:** Removed "Software (UK)" to preserve the two key SEO phrases ("Student Landlord Property Management" + "Renters' Rights Act").
**Final title:** `Student Landlord Property Management – Renters' Rights Act Ready | HOMEi PM`
**Final visible portion:** 64 chars — within range.

**Commands run:**
```
grep -c '<title>' index.html  → 1
grep '<title>' index.html     → Student Landlord Property Management – Renters' Rights Act Ready | HOMEi PM
```

**Result:** PASS

## T05 — Update homepage H1

**Validation gate:** H1 updated to prescribed text, exactly one H1 on page.

**Previous H1:** `Property Management Software Built for UK Landlords & Agents`
**New H1:** `Run your student lets without the headaches`
**Accent span:** "without the headaches" wrapped in `<span class="text-accent">` to preserve existing styling.

**Commands run:**
```
grep -c '<h1' index.html  → 1
grep -A3 '<h1' index.html → correct content confirmed
```

**Result:** PASS

## T14 — Partner trust strip (deferred, structure built)

**Validation gate:** Trust strip HTML structure exists below hero, hidden, ready for logo activation.

**Status:** User deferred logo permissions. Built the code so logos can be added quickly:
- HTML: `.trust-strip.hidden` div below hero with placeholder comments and example `<img>` tags
- CSS: Full styling for strip, label, logo grid with greyscale/hover effects
- To activate: remove `.hidden` from `#trustStrip`, add `<img>` tags with logo files

**Commands run:**
```
grep 'trust-strip' index.html    → structure present, class="hidden"
grep -c 'trust-strip' styles.css → 6 CSS rules
```

**Result:** PASS (deferred per user instruction, structure ready)

## T13 — Testimonial section placeholders

**Validation gate:** Placeholder text replaced, slots wrapped with PLACEHOLDER comments, no fake quotes.

**Changes:**
- Removed all 3 fake placeholder quote strings
- Added visible note: "Real landlord case studies coming Q2 2026 as our pilot partners go live."
- Wrapped each of the 3 testimonial card slots with `<!-- PLACEHOLDER: real testimonial required -->` / `<!-- /PLACEHOLDER -->`
- Updated H2 to "Trusted by UK landlords and agents" (matches T06 prescribed text for this heading)
- Section remains hidden (`class="hidden"`)

**Commands run:**
```
grep -c 'PLACEHOLDER: real testimonial required' index.html  → 3
grep 'Q2 2026' index.html  → note present in section-description
grep 'Placeholder testimonial' index.html  → 0 matches (old text removed)
```

**Result:** PASS

## T12 — Audit/fix sticky mobile CTA bar

**Validation gate:** Sticky bar is dismissible, doesn't overlap form/footer, only visible below 768px.

**Audit findings:**
- Bar exists with correct show/hide logic (IntersectionObserver on #contact, scroll threshold 400px)
- Hidden above 768px via `display: none !important`
- Hides when contact form visible (no overlap)
- **NOT dismissible** — no close button existed

**Fixes applied:**
1. Added dismiss button (`<button class="mobile-cta-dismiss">`) with X icon and `aria-label="Dismiss"`
2. Added CSS for dismiss button (positioned top-right, 28x28px, hover state)
3. Added JS: click handler sets `mobileCtaDismissed = true` and hides bar
4. Added `if (mobileCtaDismissed) return;` guards in both the IntersectionObserver and scroll handlers to prevent bar reappearing after dismissal

**Commands run:**
```
grep 'mobileCtaDismiss' index.html js/main.js  → button in HTML, 7 refs in JS
grep 'mobile-cta-dismiss' css/styles.css       → 2 rules (base + hover)
```

**Result:** PASS

## T11 — Add data-cta-id attributes

**Validation gate:** Every CTA has a unique `data-cta-id`, no duplicates, no tracking scripts added.

**Attributes added (17 total):**
nav-app-link, nav-primary, nav-mobile-primary, hero-primary, hero-secondary, cta-banner-primary, inspections-primary, rra-primary, why-homei-app-link, poll-submit, feedback-banner-primary, early-access-primary, contact-form-submit, footer-primary, sticky-desktop-primary, sticky-mobile-primary, modal-dismiss

**Commands run:**
```
grep -o 'data-cta-id="[^"]*"' index.html | sort        → 17 entries
grep -o 'data-cta-id="[^"]*"' index.html | sort | uniq -d  → 0 duplicates
grep 'posthog\|gtag\|analytics' index.html               → 0 matches (no tracking)
```

**Result:** PASS

## T10 — Add secondary hero CTA

**Validation gate:** Secondary CTA exists in hero, correct href, both buttons have min 44px tap target, btn-secondary CSS uses #ff6a00.

**Changes made:**
- Added `<a href="mailto:support@homeistudent.com?subject=..." class="btn btn-secondary btn-lg">Book a 15-minute chat</a>` to hero-actions div
- Replaced "See How It Works" outline button (which scrolled to #features) with the new secondary CTA
- Created `.btn-secondary` CSS class: background #ff6a00, white text, hover darkens to #e55f00
- Added `min-height: 44px` to base `.btn` class to ensure all CTAs meet WCAG tap target requirement

**Commands run:**
```
grep 'btn-secondary\|15-minute' index.html  → 1 match, correct mailto href
grep -c 'btn-secondary' css/styles.css  → 3 rules (base, hover, active)
```

**Result:** PASS

## T09 — Audit current CTAs

**Validation gate:** Audit file exists with all CTAs documented.

**Output:** `audits/current-cta-state.md` — 16 button CTAs + 3 non-button CTAs documented with text, class, target, colour, and behaviour.

**Key findings:**
- 5 different primary CTA text variants across the page
- All primary CTAs target #contact (sign-up form)
- No "book a chat" or direct contact CTA exists in hero
- btn-primary uses #F97316 orange with glow pulse animation

**Result:** PASS — no code changes required.

## T08 — Heading hierarchy audit

**Validation gate:** Exactly one H1, no skipped heading levels in `<main>`, no empty headings.

**Issues found and fixed (14 H4→H3 changes):**
| Section | Headings changed | Lines |
|---------|-----------------|-------|
| Trust badges | 3 H4→H3 | 370, 379, 388 |
| Benefit cards | 3 H4→H3 | 731, 740, 749 |
| RRA cards | 5 H4→H3 | 785, 795, 805, 815, 825 |
| Onboarding items | 3 H4→H3 | 1043, 1052, 1061 |

**CSS selectors updated (4 rules):**
- `.trust-badge-card h4` → `.trust-badge-card h3`
- `.benefit-card h4` → `.benefit-card h3`
- `.rra-card h4` → `.rra-card h3`
- `.onboarding-item h4` → `.onboarding-item h3`

**Intentionally left unchanged:**
- Footer H4s ("Platform", "Connect") — standard footer column label pattern, H3→H4 hierarchy is valid.

**Post-fix validation:**
```
grep -c '<h1' index.html  → 1
grep '<h[1-6]>' index.html  → H1→H2→H3 throughout <main>, no skips
grep '<h[1-6]>\s*</h[1-6]>' index.html  → 0 empty headings
```

**Result:** PASS

## T07 — Audit remaining pages

**SKIPPED** — Single-page site (index.html only). No other pages to audit.

**Result:** N/A

## T06 — Update H2s to match patterns

**Validation gate:** Matching H2s updated, non-matching logged and skipped.

**Pattern matching:**
| Prescribed Source | Found? | Action |
|---|---|---|
| "Built for the Renters' Rights Act" | YES (line 770) | Changed to "Stay compliant with the Renters' Rights Act 2026" |
| "Everything you need in one place" | YES (line 405, title case) | Changed to "Manage inspections, maintenance and rent in one place" |
| "Free Onboarding & Setup Support" | YES (line 1028) | Changed to "Dedicated onboarding, no hassle" |
| "What Landlords Say" | NO | "What Landlords Say" exists only as a `<p class="section-label">` (line 1072), not an H2. The H2 is "Trusted by Landlords Like You" which doesn't match the prescribed source. **SKIPPED.** |

**Commands run:**
```
grep -n 'Stay compliant\|Manage inspections\|Dedicated onboarding\|What Landlords Say' index.html
```

**Result:** PASS — 3 of 4 applied, 1 skipped (not found as H2).

## T04 — Update homepage meta description

**Validation gate:** Meta description updated, 150–160 characters total.

**Prescribed text (211 chars):** `HOMEi PM is the UK property management platform built for student landlords. Stay Renters' Rights Act compliant, run digital inspections, track maintenance and message tenants — all in one place. Join the pilot.`
**Issues:** 211 chars (over limit); contains em dash (previously removed per user request).
**Final text (157 chars):** `HOMEi PM is property management software for UK student landlords. Stay Renters' Rights Act compliant, run inspections and track maintenance. Join the pilot.`
**Key terms preserved:** property management software, UK student landlords, Renters' Rights Act, inspections, maintenance, pilot.

**Commands run:**
```
grep '<meta name="description"' index.html  → confirmed updated, single occurrence
python3 -c "print(len('...'))"  → 157 chars
```

**Result:** PASS

## T15 — Metrics strip with verifiable numbers

**Validation gate:** Strip visible below hero with 3 metrics, no unverified claims.

**User-confirmed metrics:**
- "1,200+" — student app downloads (in Sheffield since Sept 2025)
- "3.5" — daily active opens per user
- "Co-designed" — with universities

**Implementation:**
- HTML: `.metrics-strip` div between trust strip and About section (lines 362-377)
- CSS: Dark background (gray-900), flexbox layout, accent-500 numbers, responsive breakpoint at 640px
- Not hidden — visible by default (user confirmed numbers are accurate)

**Commands run:**
```
grep -c 'metric-item' index.html  → 3
grep '1,200\|3.5\|Co-designed' index.html  → all 3 values present in metrics strip
grep -c 'metrics-strip\|metric-item' css/styles.css  → 8 rules
```

**Result:** PASS

## T16 — Verify canonical link

**Validation gate:** `<link rel="canonical">` exists and points to `https://homeistudent.uk/`.

**Before:** `<link rel="canonical" href="https://homeistudent.uk">` (missing trailing slash)
**After:** `<link rel="canonical" href="https://homeistudent.uk/">` (matches sitemap `<loc>`)

**Commands run:**
```
grep 'rel="canonical"' index.html  → href="https://homeistudent.uk/"
grep -c 'rel="canonical"' index.html  → 1
```

**Result:** PASS

## T17 — Verify sitemap.xml

**Validation gate:** Lists index.html with `<lastmod>` today, `<changefreq>` weekly.

**Before:** `<lastmod>2026-04-26</lastmod>` (stale)
**After:** `<lastmod>2026-05-05</lastmod>` (today)
**Structure:** Single `<url>` entry, `<loc>https://homeistudent.uk/</loc>`, `<changefreq>weekly</changefreq>`, `<priority>1.0</priority>`.

**Commands run:**
```
grep 'lastmod' sitemap.xml  → 2026-05-05
grep 'changefreq' sitemap.xml  → weekly
```

**Result:** PASS

## T18 — Verify robots.txt

**Validation gate:** Contains `User-agent: *`, `Allow: /`, `Sitemap: https://homeistudent.uk/sitemap.xml`.

**Content (verbatim):**
```
User-agent: *
Allow: /

Sitemap: https://homeistudent.uk/sitemap.xml
```

**Result:** PASS — no changes needed.

## T19 — Verify Organization schema

**Validation gate:** Organization schema includes name, url, logo, description, address (Sheffield, UK).

**Before:** Missing `address` field. No `sameAs`.
**After:** Added `address` with `addressLocality: "Sheffield"`, `addressCountry: "GB"`.
**LinkedIn `sameAs`:** Skipped per user instruction.

**Fields verified:**
- name: "HOMEi" — OK
- url: "https://homeistudent.uk" — OK
- logo: "https://homeistudent.uk/images/logo.png" — OK
- description: present — OK
- founder: [James, Gurprit] — OK
- foundingDate: "2024" — OK
- address: Sheffield, GB — OK

**Result:** PASS

## T20 — BreadcrumbList schema

**SKIPPED** — single-page site, no breadcrumbs applicable.

**Result:** N/A

## T21 — Fix FAQ schema/HTML mismatch

**Validation gate:** Schema question count = HTML question count, names match visible text.

**Before:** 10 schema entries vs 11 HTML FAQ items. Schema question names were longer/more formal than visible text.
**Fixes:**
1. Added missing Q7: "What happens after the free year?"
2. Updated all `"name"` values to match exact visible `<span>` text in HTML
3. Updated `"text"` values to match current HTML answer content

**Commands run:**
```
grep -c '"@type": "Question"' index.html  → 11
grep -c 'class="faq-question"' index.html  → 11
```

**Result:** PASS — 11 = 11, all names match.

## T22 — Validate all JSON-LD schema

**Validation gate:** All schema blocks parse as valid JSON with required fields.

**Validation output (python3 json.loads):**
```
Block 1 (SoftwareApplication): VALID JSON
  name: OK, applicationCategory: OK, operatingSystem: OK
  url: OK, description: OK, offers: OK, publisher: OK
  offers.@type: OK, offers.price: OK, offers.priceCurrency: OK

Block 2 (FAQPage): VALID JSON
  Questions: 11
  All questions have name + acceptedAnswer.text: YES

Block 3 (Organization): VALID JSON
  name: OK, url: OK, logo: OK, description: OK, address: OK
  address.locality: Sheffield, address.country: GB
```

**Result:** PASS — zero structural errors across all 3 blocks.

