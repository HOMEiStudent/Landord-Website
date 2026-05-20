# RRA Guide — Content Structure Plan

Source: `/content/renters-rights-act.md` (100 lines, approved copy)

## Page URL
`/renters-rights-act.html`

## Heading Hierarchy

| Line | Level | Text | HTML | Anchor ID |
|------|-------|------|------|-----------|
| 1 | H1 | The Renters' Rights Act 2025: A Quick Guide for UK Landlords | `<h1>` | (page title) |
| 8 | H2 | The 31 May 2026 Information Sheet deadline | `<h2>` | #information-sheet-deadline |
| 13 | H3 | Who must receive the sheet? | `<h3>` | #who-must-receive |
| 16 | H3 | How must it be served? | `<h3>` | #how-to-serve |
| 24 | H3 | What records do you need to keep? | `<h3>` | #records-to-keep |
| 27 | H2 | A second deadline for student landlords | `<h2>` | #student-landlord-deadline |
| 32 | H2 | What's actually changed since 1 May 2026 | `<h2>` | #whats-changed |
| 34 | H3 | Section 21 is gone | `<h3>` | #section-21-gone |
| 38 | H3 | Fixed-term tenancies are gone | `<h3>` | #fixed-terms-gone |
| 41 | H3 | Tenants can leave with two months' notice from day one | `<h3>` | #tenant-notice |
| 44 | H3 | Rent increases use Section 13 and Form 4A only | `<h3>` | #rent-increases |
| 53 | H3 | Tenants can request to keep a pet | `<h3>` | #pets |
| 55 | H3 | A few other things worth knowing | `<h3>` | #other-changes |
| 60 | H2 | What about new tenancies started after 1 May 2026? | `<h2>` | #new-tenancies |
| 65 | H2 | A practical checklist for the next two weeks | `<h2>` | #checklist |
| 75 | H2 | Where to get guidance | `<h2>` | #guidance |
| 82 | H2 | How HOMEi PM helps | `<h2>` | #homei-pm |
| 87 | H2 | Frequently asked questions | `<h2>` | #faq |
| 96 | H2 | Disclaimer | `<h2>` | #disclaimer |

## Special Elements

### Deadline alert banner (lines 3)
- Placed directly after the author byline, before the intro text
- Orange accent background (#F97316 / var(--accent-500)), white text
- Bold: "31 May 2026", "£7,000"
- HTML: `<div class="rra-alert">`

### Author byline (line 2)
- Below H1, above deadline alert
- Muted colour, small text
- HTML: `<p class="rra-byline">`

### Table of contents
- Placed after the intro paragraphs (after line 7), before the first H2
- Jump links to each H2 section
- HTML: `<nav class="rra-toc">` with `<ol>` of anchor links
- No sticky sidebar (site has no sidebar pattern)

### Ordered lists
- Lines 20-22: Three acceptable delivery methods
- Lines 46-49: Section 13 rent increase rules (bullet list in source, will use `<ul>`)
- Lines 56-59: Other changes (bullet list)
- Lines 67-74: Practical checklist (numbered, 8 steps)

### Unordered lists
- Lines 46-49: Rent increase requirements
- Lines 56-59: Other changes worth knowing

### External links (all get `target="_blank" rel="noopener noreferrer"`)
- Line 23: GOV.UK Information Sheet download
- Line 31: Trowers & Hamlins overview
- Line 36: NRLA possession grounds guidance
- Line 52: Shelter Section 13 guidance + NRLA rent increase resources
- Line 62: Government guidance on written information
- Line 67: GOV.UK PDF download (repeated in checklist)
- Lines 77-81: Resource links section (GOV.UK, NRLA, Shelter, Citizens Advice)

### Internal links
- Line 26: "contact us at HOMEi PM" — link to homeistudent.uk/#contact
- Line 85: "drop us a line" — link to homeistudent.uk/#contact

### Image placeholders (3 slots)
- Line 4: `[Image: Hero — UK street]` — `assets/images/blog/renters-rights-act/hero.webp`, alt: "Terraced street of rental properties in England"
- Line 12: `[Image: 31 May calendar]` — `assets/images/blog/renters-rights-act/deadline-calendar.webp`, alt: "Calendar showing the 31 May 2026 deadline"
- Line 86: `[Image: HOMEi PM dashboard or landlord with tablet]` — `assets/images/blog/renters-rights-act/homei-dashboard.webp`, alt: "HOMEi PM property management dashboard"

### FAQ accordion (lines 88-95)
- 8 Q&A pairs using `<details>` / `<summary>`
- Each line has format: "Question? Answer text."

### CTA placement
- After "How HOMEi PM helps" section (line 85): inline CTA to contact form
- Bottom of page before disclaimer: full-width CTA banner matching footer-cta pattern

### Schema markup
- Article structured data (JSON-LD) in `<head>`
- FAQPage structured data for the FAQ section

### Disclaimer (lines 96-100)
- Small muted text at the very bottom
- "Last updated" date and sources line
