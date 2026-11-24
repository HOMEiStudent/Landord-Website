# Images and assets

## Supplied and final
These three are real, approved images. Use them as-is with the crops and alt text specified in the design files.

| File | Used on | Crop | Alt text |
|---|---|---|---|
| `assets/blog/rent-rules/hero.png` | Rent Rules article header, and the Rent Rules card on the Guides index | `aspect-ratio: 536/330; object-fit: cover; object-position: 50% 60%` (card: `max-height:300px; object-position: 50% 62%`) | A lease agreement and pen on a desk, with books on UK rental rules and tenant rights and an apartment block behind |
| `assets/blog/rent-rules/form-4a.png` | Rent Rules article, "Section 13 and Form 4A" section | `aspect-ratio: 1465/740; object-fit: cover; object-position: 50% 0` (shows the ministry header, form title and opening lines only) | Form 4A, the landlord's notice proposing a new rent for assured tenancies in the private rented sector, under Housing Act 1988 section 13(2) |
| `assets/blog/rent-rules/dashboard.png` | Rent Rules article, "Where HOMEi PM fits in" | `aspect-ratio: 1407/790; object-fit: cover; object-position: 50% 0` (stats row plus the first property row only) | The HOMEi PM landlord dashboard showing properties, inspections awaiting, open maintenance and compliance actions |

`assets/homei-logo.png` is the logo (34px in nav, 26px in footer). `assets/original-flowchart-reference.png` is the founders' methodology flowchart, recreated in the new style on the methodology page.

## Still outstanding
Every one of these appears in the designs as a dashed panel reading "Image to be supplied" with a one-line description of what belongs there. **Do not ship those panels.** Ask the founders for the file, then replace the panel with a plain `<img>` using the same box dimensions and a descriptive alt.

| Page | Section | Needed |
|---|---|---|
| Renters Rights Act Guide | Top of article | Article header image |
| Renters Rights Act Guide | Information Sheet deadline | Image for the 31 May 2026 deadline |
| Renters Rights Act Guide | How HOMEi PM helps | HOMEi PM compliance dashboard screenshot |
| Summer Turnaround Guide | Top of article | Article header image |
| Summer Turnaround Guide | Compliance certificates | Gas safety certificate and EICR paperwork |
| Summer Turnaround Guide | See it in action | Guided inspection demo video (currently a panel; wire as a `<video>` when supplied) |
| Summer Turnaround Guide | Get started | HOMEi PM dashboard overview |
| About | Founder cards | Photos of James and Gurprit (96px circles) |
| Home | Connected to the HOMEi app | Tenant's view of reporting an issue in the HOMEi app |

Note for the RRA and Summer articles: these originally hot-linked images from `homeistudent.uk`. Those URLs 404, so they were removed. Host every image locally in the new build.
