# Performance Improvements Summary — T32

## Changes Made (Phase 1)

### Render-Blocking Resources
- **Google Fonts deferred**: Changed from blocking `rel="stylesheet"` to `media="print" onload="this.media='all'"` pattern with `<noscript>` fallback and `preload` hint
- **Expected impact**: First Contentful Paint (FCP) improvement of 200-500ms on slow connections

### Image Optimisation
- **`loading="eager"` + `fetchpriority="high"`** on navbar logo (above-the-fold)
- **`loading="lazy"`** on footer logo (below-the-fold)
- **`width` and `height` attributes** on both `<img>` tags to reserve layout space
- **Expected impact**: Eliminates CLS from images; prioritises LCP image

### Accessibility (affects Lighthouse score)
- **`aria-hidden="true"`** on all 61 decorative SVGs
- **Expected impact**: Lighthouse Accessibility score improvement

### Already Optimised (no changes needed)
- JS already uses `defer`
- Font preconnects already present
- `overflow-x: hidden` prevents layout overflow
- All images under 100KB (no conversion needed)
- `display=swap` already in font URL (no FOIT)

## Expected Lighthouse Impact

| Category | Expected Score | Key Factors |
|----------|---------------|-------------|
| Performance | 90-95 | Deferred fonts, lazy loading, image dimensions |
| Accessibility | 95-100 | aria-hidden, alt text, tap targets, skip link |
| Best Practices | 95-100 | HTTPS, no console errors, structured data |
| SEO | 100 | Title, meta, canonical, sitemap, robots, schema |

## Remaining Recommendations (Future Phases)
1. Consider self-hosting Inter font (eliminates third-party dependency)
2. Add `font-display: optional` for non-critical weights if FOUT is visible
3. Consider HTTP/2 server push for styles.css (if server supports it)
4. Add `<link rel="dns-prefetch" href="https://api.web3forms.com">` for form submission
5. Consider service worker for offline caching (if PWA planned)
