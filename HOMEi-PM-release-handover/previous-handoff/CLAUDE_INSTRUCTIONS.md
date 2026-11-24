# HOMEi PM Design Rules (Claude Code — Instructions for Claude)

These are HARD RULES for the HOMEi PM landlord-side product and marketing website. They are not suggestions. Follow them on every task unless a human explicitly overrides them in that task.

## 0. Approved designs are locked
The files in `design_handoff_homei_pm_website/designs/` are approved, founder-signed-off designs. Recreate them faithfully: exact copy, colours, spacing, type sizes, section order.
- Do NOT redesign, restyle, reorder sections, "improve", or reword approved copy.
- If a design looks wrong or a requirement conflicts with it, STOP and ask. Never silently deviate.
- When building something new, extend the system below rather than inventing a new visual language.

## 1. Product facts (never contradict these)
- HOMEi PM is a **web-based dashboard** for landlords. Never call the landlord side an app.
- Tenants use the separate **HOMEi household management app** (homeistudent.com).
- **Inspections** and **maintenance tracking** are two distinct features. Inspections are guided photo checklists tenants complete **at the landlord's request**, producing a condition report. Maintenance is tenants reporting issues and tracking progress from reported to resolved.
- Landlords decide whether a maintenance request needs action. The system does NOT book or approve contractors.
- **The product is LIVE.** There is no waiting list, no pilot, and no launch countdown. Sign-up and sign-in both link straight out to the platform at https://d1evln8kpnyy80.cloudfront.net (this becomes HOMEi.uk once the domain moves: update in one place).
- **There is no payment page yet.** HOMEi PM is advertised as **free to use while in early access**, with every feature included. Never imply a card is taken, a trial is counting down, or a charge is imminent. Standard wording: "Free while we are in early access" and "plenty of notice before any charges begin".
- Future pricing (**shown only in the pricing section, labelled "from launch"**): £15/month or £150/year, both up to 5 properties, both full features. Show annual as £150 with £180 struck through. Never use a "Save 20%" badge. Tiers above 5 properties are not agreed: do not invent them.
- Savings claim ceiling: **"just over £500 a year per property"**. Never claim more.
- Missed-notice fines: state as **£6,000 to £10,000**. Statutory maximums (£7,000 / £40,000 / £51,000 combined) only in legal/methodology contexts where sourced.
- Founders: a Russell Group MSc Real Estate specialist with 7+ years in the rental market (property lead), and a former Bank of England developer (engineering). Team credibility phrasing on the site: "highly skilled team".

## 2. Copy rules
- **Never use em dashes (—).** Use commas, colons, or full stops. Avoid en dashes in prose too.
- British English. No emoji. No exclamation marks. No hype words ("revolutionary", "game-changing", "seamless", "effortless").
- Primary CTA is **"Get started"** (nav and general use) or **"Sign up now"** (page-level hero and conversion moments). A **"Sign in"** link sits to the left of the nav CTA on every page. Never "Join the waiting list", "Claim a free year", "Start your free trial", or "No card required".
- Secondary CTAs are direct verb phrases, e.g. "See how much you could save".
- Every number is sourced (ONS, GOV.UK, NRLA, HSE, ABI) and estimates are labelled as estimates.
- **Direct savings and risk figures are never added together**, anywhere, in any UI or copy.
- Legal/compliance content carries the disclaimer pattern ("general information, not legal advice") and a sources line. The two published guide articles are founder-fact-checked: reproduce **word for word**, never edit.
- Sign-up counters or social-proof counts stay hidden until the real number exceeds 50.
- We do not yet claim customer numbers, testimonials, or "trusted by" proof. Credibility comes from the product, the founders, and sourced data.

## 3. Colour tokens (use these only)
| Token | Hex | Use |
|---|---|---|
| ink | #101B2D | Navy sections, dark cards, headings on light |
| ink-deep | #0B1523 | Stats bars, CTA bands, footer |
| primary | #E8730C | Buttons, accents, kickers, links on dark |
| primary-tint | #F5A356 | Kickers and links on navy |
| surface | #F7F8FA | Light page background, subtle cards |
| border | #E4E8EE | Card borders (#D5DBE4 for inputs) |
| body | #3D4C61 / #4A5A70 | Body text on light |
| muted | #6B7A8F / #9AA7B8 | Captions and fine print (#8FA0B8 on navy) |
| on-navy | #B9C4D4 / #D7DEE8 | Body text on navy |
| amber | #FCEEDE bg / #F5D9BB border / #7A4A0E–#B95E0A text | Risk and warning cards, selected states |
| success | #1F8A5B on #E7F5EE | Valid, stored, resolved states |
| error | #C13515 | Form validation |

Rules: alternate navy and light sections down a page. Orange is an accent, never a large section background (the thin feature marquee is the one exception). Max two background colours per view. Do not introduce new hues; if a new shade is needed, derive it from these in oklch and keep it within the family.

## 4. Typography
- **Source Serif 4**, weight 600: all headlines and large display numbers. H1 44–50px/1.1, H2 34px/1.15, article H2 29px/1.25.
- **Public Sans**, 400–700: everything else. Body 16–16.5px, line-height 1.6–1.75. Card titles 15–17px/700. Captions 12–13.5px.
- Kicker above every H2: 13px, weight 700, uppercase, letter-spacing 0.08em, in #E8730C on light or #F5A356 on navy.
- Never below 12px. Use `text-wrap: pretty` on headlines. One `<h1>` per page.

## 5. Components
- **Buttons**: primary #E8730C, white text, weight 600, radius 6px (8px inside cards), padding 15px 26px large / 10px 18px nav. Secondary on navy: 1px solid rgba(255,255,255,0.25), white text. Secondary on light: #101B2D background.
- **Cards**: radius 10–14px, 1px border #E4E8EE, padding 24–32px, flex column with 8–14px gaps. Shadow on navy `0 24px 60px rgba(0,0,0,0.45)`; on light `0 8px 28px rgba(16,27,45,0.06)`.
- **Pills/badges**: radius 100px, 12–13px/600. Success green, amber for deadlines, orange-tint on navy.
- **Segmented controls** (the standard choice input): equal-width options, 1.5px border #D5DBE4, radius 8px; selected = #FCEEDE background, #E8730C border, #B95E0A text. Prefer these over dropdowns for 2–4 options; use a select for 6+.
- **Inputs**: 1.5px border #D5DBE4, radius 8px, padding 12–13px 14px. Labels 13.5px/600 above. Inline errors in #C13515 with a red border. Validate on submit, never block typing.
- **Nav**: navy bar, logo 34px + "HOMEi PM" wordmark ("PM" in #8FA0B8), centre links 14px/500 #B9C4D4 (active white/600), orange CTA right, external "HOMEi App ↗" in muted.
- **Section anatomy**: kicker → H2 → one short paragraph (max ~64ch) → content grid. Section padding 64px 48px; content max-width 1184px (nav 1280px).
- **Stats bar**: four columns on #0B1523, serif 26px figure + 12.5px muted caption, hairline dividers rgba(255,255,255,0.06).
- **Every page ends** with the #0B1523 CTA band leading to sign-up, then the footer (logo, one-liner, support email, three link columns).
- **Dashboard/product UI** follows the same tokens: white cards on #F7F8FA, navy headers, status pills (green valid / amber due / red overdue), tables and lists with #F1F3F6 row dividers, timestamps and evidence trails always visible on compliance records.

## 6. Layout, motion, accessibility
- Two-column grids (1.15fr/1fr hero) or three-column card grids, 16px gaps. Always flex/grid with `gap`, never margin-spaced inline siblings.
- Responsive: at ~900px collapse to single column, move the desktop nav into a hamburger exposing the same links plus the CTA, sticky rails become static, calculator inputs sit above results. Minimum tap target 44px. The site must work on phone, tablet and desktop.
- Motion is minimal: the 32s linear feature marquee and standard hover affordances. No scroll-triggered animation, no parallax, no gradient washes.
- Playful allowance: paired mock-UI cards may tilt ±2° (the tenant app ⇄ landlord dashboard motif).
- Accessibility: WCAG AA contrast, visible focus states, labelled inputs, alt text on every image, keyboard-operable segmented controls.

## 7. SEO (marketing site)
- Unique title and meta description per page, one H1, semantic headings.
- Structured data: Organization + SoftwareApplication on home, FAQPage where a FAQ exists, Article with author and dates on guides, BreadcrumbList on the guide index.
- Keep existing URLs for the calculator and the two guides; 301-redirect anything that moves. Sitemap, canonical URLs, lazy-loaded below-fold images, locally hosted assets with the given alt text.
- Internal linking pattern: guides → calculator → join.

## 8. Anti-patterns (never do these)
Em dashes. Emoji. Aggressive gradient backgrounds. Rounded containers with a coloured left-border accent. Inter, Roboto, Arial or Fraunces. Invented brand colours. Stock-photo filler or decorative SVG illustrations (use real product screenshots or a labelled placeholder). Placeholder or padded content. Testimonials, logos or statistics we cannot evidence. Calling the landlord dashboard an app. Combining savings and risk into one headline number. Waiting-list, pilot or "coming soon" language anywhere on the site. Implying payment is being taken while there is no payment page.
