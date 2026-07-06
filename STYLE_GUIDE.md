# HOMEi PM Design Style Guide
For building **new** pages and features in the approved design language. When extending the site, follow this document; when touching existing pages, match the design files exactly (see README.md — they take precedence).

## Brand voice
- Professional, plain-English, landlord-first. Confident but honest about being pre-launch ("waiting list", "pilot", "testing starts August 2026").
- Lead with money saved and compliance protection; frame risk as "what we keep off the table", never scaremongering with maximum fines as the headline.
- British English. No em dashes, no emoji, no exclamation marks, no hype words ("revolutionary", "game-changing").
- Numbers are always sourced (ONS, GOV.UK, NRLA...) and estimates are labelled as estimates. Savings and risk are never summed.
- Primary CTA is always exactly "Join the waiting list". Secondary CTA pattern: direct verb phrases ("See how much you could save").

## Color system
| Token | Hex | Use |
|---|---|---|
| ink | #101B2D | Navy page/section backgrounds, headings on light, dark cards |
| ink-deep | #0B1523 | Stats bar, CTA bands, footer |
| primary | #E8730C | Buttons, links on dark, accents, kickers, marquee bg |
| primary-tint | #F5A356 | Kickers/links on navy |
| surface | #F7F8FA | Light page background, cards on white |
| border | #E4E8EE | Card borders on light (#D5DBE4 for inputs) |
| body | #3D4C61 / #4A5A70 | Body text on light |
| muted | #6B7A8F / #9AA7B8 | Captions, fine print (#8FA0B8 on navy) |
| on-navy | #B9C4D4 | Body text on navy (#D7DEE8 brighter) |
| amber-bg/border/text | #FCEEDE / #F5D9BB / #7A4A0E | Risk/warning cards, selected segments (#B95E0A text) |
| success | #1F8A5B on #E7F5EE | Valid/stored/positive badges |
| error | #C13515 | Form validation |

Rules: one navy section and one light section alternate down a page; orange is an accent, never a section background (except the thin marquee strip); white cards on navy get `box-shadow: 0 24px 60px rgba(0,0,0,0.45)`; cards on light get `0 8px 28px rgba(16,27,45,0.06–0.08)`.

## Typography
- **Source Serif 4**, weight 600: every headline (H1/H2) and big display numbers. H1 44–50px/1.1, H2 34px/1.15, article H2 29px/1.25.
- **Public Sans**: everything else. Body 16–16.5px/1.6–1.75; card titles 15–17px/700; captions 12–13.5px.
- Kicker pattern above every H2: 13px/700, uppercase, letter-spacing 0.08em, color primary (#E8730C on light, #F5A356 on navy).
- Never below 12px. `text-wrap: pretty` on headlines.

## Components
- **Buttons**: primary = #E8730C bg, white text, 600 weight, radius 6px (8px inside cards), padding 15px 26px (large) / 10px 18px (nav). Secondary on navy = 1px solid rgba(255,255,255,0.25), white text. Secondary on light = navy #101B2D bg.
- **Pills/badges**: radius 100px, 12–13px/600. Status colors: success green, amber for deadlines, orange-tint on navy.
- **Cards**: radius 10–14px, 1px border, padding 24–32px, column flex with 8–14px gaps.
- **Segmented controls**: equal-width spans, 1.5px border #D5DBE4, radius 8px; selected = #FCEEDE bg, #E8730C border, #B95E0A text.
- **Inputs**: 1.5px border #D5DBE4, radius 8px, padding 12–13px 14px; labels 13.5px/600; inline errors in #C13515 with red border.
- **Nav**: navy, logo left (34px + "HOMEi PM" wordmark, "PM" in #8FA0B8), center links 14px/500 #B9C4D4 (active white/600), orange CTA right, external "HOMEi App ↗" link in muted.
- **Section anatomy**: kicker → H2 → one short paragraph (max ~64ch) → content grid. Section padding 64px 48px, content max-width 1184px.
- **Stats bar**: 4 columns on #0B1523, serif 26px figure + 12.5px muted caption, hairline dividers rgba(255,255,255,0.06).
- **CTA band**: #0B1523, serif headline + one-line subtext left, orange button right.
- **Footer**: #0B1523, logo + one-liner + support email left, 3 link columns (Product / Guides / Company).

## Layout & motion
- 12-col mental model, but sections are mostly 2-col grids (1.15fr/1fr hero) or 3-col card grids with 16px gaps.
- Breakpoint ~900px: collapse to single column, hide desktop nav behind hamburger, sticky rails become static.
- Motion is minimal: the marquee (32s linear infinite) and default hover affordances. No scroll-triggered animation, no parallax.
- Playful allowance: paired mock-UI cards may tilt ±2° (tenant app ⇄ landlord dashboard motif).

## Content patterns for new pages
- Every page ends with the #0B1523 CTA band → waiting list.
- Legal/compliance content always carries the disclaimer pattern ("general information, not legal advice") and a sources line.
- Articles: navy header with kicker/byline, sticky ToC left rail, 72ch article column, amber alert boxes for deadlines, grey source boxes (`border-left: 3px solid #E8730C`) for citations, related-article link at the end.
- New guide cards on the index follow the two existing card layouts (image right, text left).
- SEO: unique title + meta description, one H1, FAQ schema where a FAQ exists, internal links to calculator and join.
