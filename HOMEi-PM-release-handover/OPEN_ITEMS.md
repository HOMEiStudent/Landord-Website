# Open items

None of these are decided yet. **Do not guess.** Build with the current content and flag each item to James when you reach it.

| # | Item | Where | What is needed |
|---|---|---|---|
| 1 | New year bonuses end date | Home pricing, Join | James to confirm whether the bonuses end with the free offer on 1 Feb 2027 or continue |
| 2 | Content after the offer ends | Promo bar, sticky bar, hero facts, cost section, pricing list, Join | James to confirm the copy that replaces the offer lines after 1 Feb 2027. Build the offer behind one switch (see CLAUDE.md section 3) |
| 3 | Hero screenshots show inspections | `assets/blog/rent-rules/dashboard.png` (laptop hero) and `assets/hero/dashboard-phone.png` (phone hero) | Inspections are not live, but both show "Inspections awaiting" and a "New inspection" button. James to supply a fresh dashboard screenshot; then recrop both |
| 4 | App screenshot reshoots | `assets/app/*.png` | The app home shows an Inspections card; the tracker screenshot shows a "Not proceeding" state and the property "51 Porterbrook 2". James to supply replacements |
| 5 | "5+" option in the property selector | Home cost section | James to decide whether to add a 5+ option |
| 6 | Proof line | Home | Add a real customer or usage proof line only once the evidence exists, and hide counters until they pass 50 |
| 7 | Images inside the articles | `designs/site/*` | The list of images still needed is in `previous-handoff/IMAGES.md`. Never ship an "Image to be supplied" panel |
| 8 | Founding year | About ("Founded in Sheffield in 2023") | James to confirm 2023 |
| 9 | Contractor time slot | Home, "How a repair request works", step 3 | Step 3 says the landlord sends the tenant a time slot to accept. James to confirm this is live before launch |
| 10 | "How it works" nav link | Nav and footer | It currently jumps to the regulations section (`#how`). James to decide whether it should point to the setup section instead |
| 11 | Secondary pages still use the old header and footer | `designs/site/`: the three guides, How the Calculator Works, Privacy | Give them the Release nav, promo bar, phone sticky bar, footer and "Get started today" buttons. Their body copy stays word for word. They still show `support@homeistudent.com`: ask James before changing it, because the Privacy page is legal text |
| 12 | Platform URL | Config | Currently `https://d1evln8kpnyy80.cloudfront.net`, moving to HOMEi.uk. Keep it in one config value |
| 13 | Guide index images | Guides page | The Renters' Rights Act and Summer Turnaround cards use product screenshots. James may supply dedicated header images later |

Resolved during handover: the savings calculator does not scroll sideways on phones when it runs with real data (checked at 390px).
