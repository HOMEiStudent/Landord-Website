# Image & SVG Audit — T23

## File-based images

| File | Alt text | Size | Dimensions | Format | Flag |
|------|----------|------|-----------|--------|------|
| images/logo.png | "HOMEi Property Management" | 25.5KB | 200x200 | PNG RGBA | OK |
| images/logo-light.png | "HOMEi Property Management" | 25.5KB | 200x200 | PNG RGBA | OK |
| images/apple-touch-icon.png | N/A (link tag) | 23.9KB | 180x180 | PNG RGBA | OK |
| images/favicon-32x32.png | N/A (link tag) | 2.3KB | 32x32 | PNG RGBA | OK |
| images/favicon-16x16.png | N/A (link tag) | 0.8KB | 16x16 | PNG RGBA | OK |

No images exceed 200KB. No missing alt on rendered `<img>` tags.

## Active `<img>` tags in HTML

| Line | src | alt | Notes |
|------|-----|-----|-------|
| 190 | images/logo.png | "HOMEi Property Management" | Navbar logo, has fallback div |
| 1456 | images/logo-light.png | "HOMEi Property Management" | Footer logo, has fallback div |

Commented-out `<img>` tags (trust strip placeholders, testimonial avatars): not rendered, no action needed.

## Inline SVGs (61 total)

| Category | Count | aria-hidden? | Purpose |
|----------|-------|-------------|---------|
| Icon SVGs (stroke icons: chevrons, menu, check marks, feature icons) | ~50 | NO | Decorative, adjacent to text |
| Illustration SVGs (hero, feature cards: viewBox 420x300 / 520x380) | 5 | NO | Decorative illustrations |
| FAQ chevron SVGs | 11 | NO | Decorative indicator |

## Flags

1. **No SVGs have `aria-hidden="true"`** — all 61 decorative SVGs should be marked `aria-hidden="true"` to hide from screen readers (text labels already provide meaning).
2. **No images exceed 200KB** — no conversion needed.
3. **Both logo `<img>` tags have descriptive alt text** — OK.
4. **No `width`/`height` attributes on `<img>` tags** — CLS risk (covered in T28).
