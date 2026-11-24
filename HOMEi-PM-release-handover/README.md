# HOMEi PM website: release handover

This pack takes the approved HOMEi PM landlord website from design into production. It is for Claude Code and for anyone building the site.

**Start here, then read the files in this order:**

1. `CLAUDE.md`: the hard rules. Copy it to the repo root.
2. `PHONE_LAYOUT.md`: everything that is phone only (640px and narrower).
3. `DECISIONS.md`: choices that look unusual but are deliberate.
4. `OPEN_ITEMS.md`: things not yet decided. Ask, never guess.
5. `CHECKLIST.md`: what "done" means for each page.

`PROMPT.md` is the first message to paste into Claude Code.

## What is in the pack

| Folder | Contents |
|---|---|
| `designs/` | The approved pages: `Release Home`, `Release About`, `Release Join`, `Release Guides`, `Release Savings Calculator`. Also `Release Phone Preview`, a helper that shows each page in a 390px phone frame. Each `.dc.html` holds the full markup with inline styles, the CSS (including the phone rules) and, where interactive, the logic |
| `designs/site/` | The three guide articles, How the Calculator Works and Privacy. Their body copy is locked word for word. Their header and footer need updating (open item 11) |
| `designs/assets/` | Every image the pages use, already cropped |
| `screenshots/` | Reference renders of each page at 1440px (laptop) and 390px (phone), with real fonts and live data |
| `previous-handoff/` | The earlier handoff. Its colour tokens, type scale, component specs and image list still apply. Its pricing, CTA and "early access" rules are **replaced** by `CLAUDE.md` |

## Pages and routes

| Design file | Route | Notes |
|---|---|---|
| Release Home | `/` | Main conversion page |
| Release Savings Calculator | keep the current indexed URL | Logic and data are locked |
| Release Guides | `/blog/` | Guide index |
| Release Join | `/contact` | Sign-up buttons plus a contact form |
| Release About | `/about` | Founders, no photos |
| site/Renters Rights Act Guide | keep the current indexed URL | Word for word |
| site/Rent Rules Guide | `/blog/renters-rights-act-rent-rules` | Word for word |
| site/Summer Turnaround Guide | `/blog/summer-turnaround-renters-rights-act-2026` | Word for word |
| site/How the Calculator Works | `/how-the-calculator-works` | Methodology |
| site/Privacy | `/privacy` | Legal text |

## Reading the design files

- Each `.dc.html` page needs `support.js` (included) and React from a CDN to render in a browser. The markup and CSS can also be read directly as plain HTML.
- `{{ ... }}` placeholders, `sc-if` and `sc-for` are template bindings. Their logic is in the `<script type="text/x-dc">` block at the bottom of the page.
- The countdown and the swipe-row dots are small plain scripts just before `</body>`. Port them as they are.
- The design files use inline styles. In production, move them into components and stylesheets, but the rendered result must match.

## Recommended way of working

1. Set up the stack. A static-first framework such as Astro or Next.js suits the SEO goals. Put the platform URL and the offer switch in config.
2. Build the shared parts first: header, promo bar, phone sticky bar and footer.
3. Build **Home**, then send James laptop and phone screenshots for sign-off.
4. Then About, Join, Guides and the Savings Calculator, one at a time, with screenshots after each.
5. Then the `designs/site/` pages with the shared header and footer.
6. Run the full checklist, then raise the open items with James.
