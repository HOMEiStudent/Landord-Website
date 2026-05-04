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

