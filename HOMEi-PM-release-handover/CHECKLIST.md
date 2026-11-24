# Acceptance checklist

A page is not done until every box is ticked. Show James the screenshots at the end of each page.

## Laptop design (wider than 640px)
- [ ] Full-page screenshot at 1440px matches `screenshots/<page> - desktop-1440.png`: copy, section order, colours, spacing and type sizes.
- [ ] Checked again at 1280px, 1024px and 800px. Between 641px and 1000px it follows the approved design's own stacking and the "Menu" button.
- [ ] None of the phone-only features appear above 640px: no sticky bar, swipe rows, dropdowns or centring.

## Phone design (640px and narrower)
- [ ] Full-page screenshot at 390px matches `screenshots/<page> - phone-390.png`.
- [ ] No sideways page scroll at 360px, 390px or 430px. Only the swipe rows scroll sideways.
- [ ] Sticky bottom bar: shows on every page, respects the iPhone safe area, never covers the footer.
- [ ] Hamburger menu opens and shows every nav link plus Sign in.
- [ ] Every swipe row snaps, and its dots follow the active card.
- [ ] Dropdowns open and close with keyboard and touch, and the icon changes from + to minus.
- [ ] Property selector (1 to 5) updates the saving figure and the bars.
- [ ] Tested on a real iPhone (Safari) and a real Android phone (Chrome).

## Behaviour
- [ ] The countdown shows weeks, days and hh:mm:ss to 1 Feb 2027 00:00 UK time, and hides after it.
- [ ] All offer content can be switched off with one change.
- [ ] Every "Get started today" and "Sign in" goes to the platform URL from config.
- [ ] The Join form validates on submit (inline error and red border), shows the success state, and uses the existing endpoint.
- [ ] Savings calculator outputs match the design files exactly for the same inputs (for example, Sheffield, 4 bedrooms).

## Content rules
- [ ] No em dashes, en dashes in prose, emoji or exclamation marks.
- [ ] No "small landlords", "fewer than five properties", "up to 5 properties", "law" (meaning regulations), "waiting list" or "Save 20%".
- [ ] Prices: £28, £268, £336 struck through. The offer date is 1 February 2027 everywhere.
- [ ] Inspections are labelled "Coming Q1 2027" everywhere they appear.
- [ ] The guide articles match the design files word for word (diff the text).
- [ ] The contact email is contact@homei.uk on Release pages (see open item 11 for the others).

## Quality and SEO
- [ ] Lighthouse SEO and accessibility scores are 95 or above, on phone and laptop.
- [ ] Each page keeps its title and meta description from its design file, with one H1, a canonical URL and Open Graph and Twitter tags.
- [ ] Structured data validates: Organization, SoftwareApplication (Home), FAQPage, Article (guides), BreadcrumbList (guide index).
- [ ] Images are local, lazy below the fold, with width, height and alt text set.
- [ ] `sitemap.xml` and `robots.txt` are present, existing URLs are kept, and anything moved has a 301 redirect.
- [ ] Focus states are visible, contrast meets WCAG AA, and tap targets are 44px or larger.
