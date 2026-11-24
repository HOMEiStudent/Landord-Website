# First message for Claude Code

Put the `HOMEi-PM-release-handover` folder in the repo, then paste the message below.

---

Build the HOMEi PM marketing website from the approved designs in `HOMEi-PM-release-handover/`.

Before writing any code, read these files in order:

1. `README.md`
2. `CLAUDE.md`
3. `PHONE_LAYOUT.md`
4. `DECISIONS.md`
5. `OPEN_ITEMS.md`
6. `CHECKLIST.md`

Then copy `CLAUDE.md` to the repo root so the rules apply to all future work.

The designs in `designs/Release *.dc.html` are founder signed off. Recreate them exactly: copy, colours, spacing, type sizes and section order. Do not redesign, restyle, reorder, improve or reword anything. If something looks wrong or conflicts with a rule, stop and ask me.

The site has two layouts:

- **Wider than 640px:** must match the approved laptop design exactly, including its own behaviour between 641px and 1000px.
- **640px and narrower:** the phone layout in `PHONE_LAYOUT.md`. Phone changes must never alter the laptop design.

The things that matter most:

- Prices are £28 a month or £268 a year, with £336 struck through, and no property limit.
- HOMEi PM is free until 1 February 2027 with no card needed. Put every piece of offer content behind one switch.
- The six-month money-back guarantee starts from the first payment.
- The primary button everywhere is "Get started today", linking to the platform URL. Keep that URL in one config value.
- Inspections are labelled "Coming Q1 2027".
- Do not touch the savings calculator's logic or data, or the form endpoint. The guide articles stay word for word.
- No em dashes. British English. Never "small landlords". Say "regulations", not "law".

Work one page at a time, starting with the shared header, promo bar, phone sticky bar and footer, then Home. After each page, show me full-page screenshots at 1440px and 390px next to the matching files in `screenshots/`. Do not move on until I approve.

Do not guess any of the open items. List the ones that affect each page as you reach it.
