# Handoff: HOMEi PM Marketing Website Redesign

## Overview
A full redesign of https://homeistudent.uk/ — the marketing site for HOMEi PM, property management software for UK landlords. The site's job is to drive **account sign-ups to the live platform**, leading with two messages: **money saved (just over £500/yr per property)** and **Renters' Rights Act readiness**. The product is live and **free to use while in early access** (there is no payment page yet).

## About the Design Files
The files in `designs/` are **design references created in HTML** — approved prototypes showing intended look, copy, and behaviour. They are NOT production code to ship directly. The task is to **recreate these designs faithfully in the production codebase** (choose an appropriate stack if none exists — a static-first framework such as Astro or Next.js is recommended for SEO). Each `.dc.html` file contains the full markup with inline styles between `<x-dc>` and `</x-dc>`, plus (where interactive) a JavaScript `Component` class holding the logic and data — read both.

## ⚠️ Fidelity: HIGH — do not redesign
These are **approved, high-fidelity designs**. Recreate them pixel-faithfully: exact colors, copy, spacing, type sizes, and section order. **Do not "improve", restyle, reorder sections, or reword copy.** The copy has been deliberately reviewed by the founders (e.g. legal wording, claims like "just over £500", fine ranges "£6,000–£10,000"). Any deviation needs founder sign-off. Specific hard rules:
- Never use em dashes (—) in site copy. Use commas, colons, or full stops.
- Never claim more than "just over £500 a year per property" saved.
- Pricing shown in the pricing section only, labelled "from launch": £15/month or £150/year (both up to 5 properties; annual shown with struck-through £180, never a "Save 20%" badge). Tiers above 5 properties are not agreed: do not invent them.
- The product is live and **free while in early access**. No waiting list, no pilot, no trial countdown, no "no card required".
- Sign-up and sign-in both link to https://d1evln8kpnyy80.cloudfront.net (changing to HOMEi.uk: keep the URL in one config value). Every page nav carries a "Sign in" link plus a "Get started" button.
- Direct savings and risk figures are NEVER added together anywhere.
- Landlord side is a **web-based dashboard** (never call it an app); tenants use the **HOMEi app**. Inspections and maintenance tracking are two separate tools.
- The two guide articles must remain **word-for-word** as written (founder-fact-checked legal content).

## Pages (9)
| File | Route suggestion | Purpose |
|---|---|---|
| Home.dc.html | / | Hero (RRA + savings), stats bar, feature marquee, mini savings calculator, RRA modules, HOMEi app section, pricing, CTAs |
| Savings Calculator.dc.html | /savings-calculator | Interactive calculator (see logic below) |
| How the Calculator Works.dc.html | /how-the-calculator-works | Methodology page incl. the 4-step flowchart (original reference: assets/original-flowchart-reference.png) |
| Guides.dc.html | /blog/ | Guide index: 3 articles + "more coming" slot |
| Renters Rights Act Guide.dc.html | /renters-rights-act | Article, word-for-word |
| Summer Turnaround Guide.dc.html | /blog/summer-turnaround-renters-rights-act-2026 | Article, word-for-word |
| Rent Rules Guide.dc.html | /blog/renters-rights-act-rent-rules | Article, word-for-word. Newest guide: advertising, rent in advance, Section 13/Form 4A, review clauses, tribunal, checklist |
| Join.dc.html | /contact | "Get started" panel (links to the app) plus a contact form and success state |
| About.dc.html | /about | Founders, credibility, HOMEi app link |
| Privacy.dc.html | /privacy | Privacy policy |

Keep the current live URLs for the two articles and calculator (they are indexed); 301-redirect anything that moves.

## Key interactions & behaviour
### Savings calculator (Savings Calculator.dc.html — read the `Component` class in the file)
- Inputs (all fixed choices, no free text): Location (select), Bedrooms (1–4 segmented), Management (Self/Agent segmented), Property type (Single let / Student HMO segmented). Selected segment style: border+text #B95E0A on #FCEEDE, border #E8730C.
- Outputs, computed live for three scenarios (low/base/high):
  1. **Direct savings each year** (dark navy card): headline base figure + range; three sub-lines each with base + low–high range: Maintenance saved, Inspection saved (description switches with management type), Rent uplift captured.
  2. **Average annual risk mitigated** (white card): base + range.
  3. **What is at stake if it goes wrong** (amber card): worst case £51,000; possession delay = 2 months' local rent + £404 court fee; Ground 4A row (4 months' rent) **only rendered for Student HMO**.
- The in-file model uses a representative 24-authority rent table and placeholder coefficients tuned to the founders' example (£574 for a Sheffield 4-bed student HMO). **At build time, swap in the production dataset (all 342 English local authorities, ONS medians by bedroom count) and the founders' real coefficients.** Keep the model client-side; nothing the user enters is stored.
- Home page embeds a mini version (location + bedrooms → base direct saving) linking to the full page.

### Sign-up and contact (Join.dc.html)
Sign-up is **not** handled on the marketing site: every "Get started" / "Sign up now" / "Sign in" control links straight to the platform (https://d1evln8kpnyy80.cloudfront.net). The page's left column carries the sign-up proposition and both buttons; the right column is a contact form for people who want to ask first.
Contact form fields: name, email (validated with inline error + red border), management type segmented toggle, optional textarea. On submit: success card with green check, personalised thanks, reply expectation, a "Sign up now" button, and "While you wait" links (calculator, RRA guide). Wire submissions to the existing backend/email (support@homeistudent.com). A sign-up counter concept must stay **hidden until sign-ups exceed 50**.

### Other
- Feature marquee on Home: infinite horizontal scroll, 32s linear loop (duplicate the strip and translateX −50%).
- Sticky table-of-contents rails on article/methodology pages (position:sticky; top:24px), static on mobile.
- All primary CTAs go to https://d1evln8kpnyy80.cloudfront.net. In-copy "contact us" / "drop us a line" links go to the contact page. External links to https://homeistudent.com open in a new tab with an ↗ affix.

## Responsive behaviour
The prototypes carry minimal breakpoints (≤900px: grids collapse to 1 column, desktop nav hidden, sticky rails become static). Production should implement proper responsive behaviour in this spirit: single column stacking, a mobile menu (hamburger) exposing the same nav items + waiting-list CTA, marquee unchanged, calculator inputs above results. Minimum tap target 44px.

## SEO requirements
- One `<h1>` per page; titles/meta descriptions are in each file's `<helmet>` — keep them.
- Keyword targets: Home = "property management software UK landlords"; Calculator = "landlord savings calculator"; RRA article = "Renters' Rights Act landlord guide", "Section 13 rent increase rules"; Summer article = student HMO turnaround terms.
- Add structured data: Organization + SoftwareApplication (Home), FAQPage (calculator FAQ, RRA article FAQ), Article with author/dates (both guides), BreadcrumbList (guides).
- Serve blog images locally with the alt text given in the files (they are currently hot-linked from the live site — download at build time), lazy-load below-the-fold images, canonical URLs, sitemap.xml, robots follow/index.
- Internal linking pattern: articles → calculator → join; keep every in-copy link present in the designs.

## Design tokens (see also STYLE_GUIDE.md)
Colors: navy ink #101B2D, deep navy #0B1523, orange primary #E8730C, orange tint #F5A356, amber tint bg #FCEEDE / border #F5D9BB / text #7A4A0E–#B95E0A, page bg #F7F8FA, card border #E4E8EE, body slate #3D4C61 / #4A5A70, muted #6B7A8F / #8FA0B8 / #9AA7B8, success #1F8A5B on #E7F5EE, error #C13515, on-navy body #B9C4D4, on-navy bright #D7DEE8.
Type: Source Serif 4 (600) for all display/headline text; Public Sans 400–700 for everything else. H1 44–50px, H2 34px, H3/article-h2 29px, card titles 15–17px/700, body 16–16.5px/1.6–1.75, small 12–14px. Radii: 6px buttons, 8px inputs, 10–14px cards, 100px pills. Section padding 64px 48px; content max-width 1184px (nav 1280px).

## Assets
- `assets/homei-logo.png` — logo (34px in nav, 26px in footer).
- `assets/original-flowchart-reference.png` — founders' original methodology flowchart; the methodology page recreates it in the new style.
- Blog images + inspection demo video: currently referenced from https://homeistudent.uk/assets/... — copy them into the new build.
- Image slots on About (founder photos) and product screenshots are placeholders — founders will supply real imagery; use real screenshots wherever the design shows mocked UI cards if available.

## Article template
All three guide articles share one template: navy header (kicker, H1, optional italic standfirst, byline row), sticky table-of-contents rail on the left, ~72ch article column, amber callout for legal disclaimers, light summary cards, bordered numbered lists for checklists, a navy promotional block, external-link cards for further reading, muted sources line, CTA band, footer. The Rent Rules article is the most complete example: build new guides from it.

## Responsive note
Nav collapses at 1000px (not 900px) — below that the centre links hide and a hamburger should expose them plus Sign in and the CTA. Content grids and sticky rails collapse at the same breakpoint.

## Files
- `designs/*.dc.html` — the ten approved page designs (markup + inline styles + logic classes).
- `STYLE_GUIDE.md` — how to build NEW features/pages in this design language going forward.
- `CLAUDE_INSTRUCTIONS.md` — the hard rules. Paste into Claude Code's "Instructions for Claude" and keep a copy as CLAUDE.md in the repo root.
- `IMAGES.md` — which images are final (with their crops and alt text) and which are still outstanding.
- `assets/` — logo and flowchart reference.
