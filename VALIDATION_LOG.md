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

