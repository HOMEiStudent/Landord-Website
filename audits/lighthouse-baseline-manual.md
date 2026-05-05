# Manual Lighthouse-Style Audit — T26

## Performance

| Check | Status | Notes |
|-------|--------|-------|
| Viewport meta | OK | `width=device-width, initial-scale=1.0` present |
| Render-blocking CSS | FIXED | Google Fonts deferred via `media="print" onload` pattern |
| Local CSS (styles.css) | OK | Single file, reasonable size (~2300 lines) |
| JS loading | OK | `defer` attribute on main.js |
| Image dimensions | FIXED | `width` and `height` added to both `<img>` tags |
| Lazy loading | FIXED | `loading="lazy"` on footer logo, `loading="eager"` + `fetchpriority="high"` on navbar logo |
| CLS risks | MITIGATED | Image dimensions prevent layout shift; logo has CSS-sized fallback |
| Preconnects | OK | fonts.googleapis.com and fonts.gstatic.com preconnected |

## Accessibility

| Check | Status | Notes |
|-------|--------|-------|
| aria-hidden on decorative SVGs | FIXED | All 61 SVGs marked `aria-hidden="true"` |
| Alt text on images | OK | Both `<img>` tags have descriptive alt |
| Tap targets (44px min) | OK | `.btn` has `min-height: 44px` |
| Skip to content link | OK | Present at top of body |
| ARIA on FAQ buttons | OK | `aria-expanded` toggles on FAQ items |

## Best Practices

| Check | Status | Notes |
|-------|--------|-------|
| HTTPS canonical | OK | Points to https://homeistudent.uk/ |
| No console errors expected | OK | All element IDs referenced in JS exist in HTML |
| Font display swap | OK | `display=swap` in Google Fonts URL |

## SEO

| Check | Status | Notes |
|-------|--------|-------|
| Title length | OK | 64 chars visible |
| Meta description | OK | 157 chars |
| Canonical | OK | https://homeistudent.uk/ |
| Structured data | OK | 3 valid JSON-LD blocks |
| Heading hierarchy | OK | H1→H2→H3, no skips |
| robots.txt | OK | Allow all, sitemap declared |
| sitemap.xml | OK | Updated lastmod |
