# Image Placeholders for Renters' Rights Act Guide

Replace the `.svg` placeholders with real `.webp` photos, then update the `<img>` src attributes in `renters-rights-act.html` from `.svg` to `.webp`.

| Filename | Dimensions | Alt Text | Location on Page |
|----------|-----------|----------|-----------------|
| `hero.webp` | 1200 x 630px | Terraced street of rental properties in England | Top of article, below deadline alert banner |
| `deadline-calendar.webp` | 800 x 450px | Calendar showing the 31 May 2026 deadline | After the "31 May 2026 Information Sheet deadline" section intro |
| `homei-dashboard.webp` | 800 x 450px | HOMEi PM property management dashboard | After the "How HOMEi PM helps" section, before CTA banner |

## Notes

- Hero image: use `loading="eager"` (already set). Recommended dimensions match LinkedIn sharing preview (1200x630).
- Inline images: use `loading="lazy"` (already set). 800x450 recommended.
- All images should be compressed to under 150KB each.
- Free WebP converter: squoosh.app
- If you only have JPG/PNG, either convert to WebP or change the file extension in the HTML.
- The OG/Twitter meta image tags also reference the hero image and will need updating from `.svg` to `.webp`.
- The Article JSON-LD schema `"image"` property also references the hero and needs the same update.
