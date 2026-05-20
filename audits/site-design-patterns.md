# Site Design Patterns — homeistudent.uk

Documented for RRA guide page build. Source: `css/styles.css`, `index.html`, `privacy.html`.

## Fonts

- **Family:** Inter (Google Fonts), fallback: system-ui, -apple-system, sans-serif
- **Weights loaded:** 400, 500, 600, 700, 800
- **Body:** 16px implied (browser default), line-height 1.6, color #1E293B
- **H1 (hero-title):** 1.875rem mobile, 2.75rem @640px, 3.25rem @1024px, weight 800, letter-spacing -0.03em, line-height 1.1
- **H2 (section-title):** 1.875rem mobile, 2.25rem @640px, weight 800, letter-spacing -0.03em, line-height 1.15, text-align center
- **H3 (feature-title):** 1.5rem, weight 700, letter-spacing -0.02em
- **H4 (footer-links-group):** 0.8125rem, weight 600, uppercase, letter-spacing 0.05em
- **Small/label:** 0.8125rem (section-label), 0.75rem (badge-text)
- **Section description:** 1.0625rem, color var(--slate-500), line-height 1.75

## Colour Palette

### CSS Custom Properties (`:root`)
| Variable | Hex | Usage |
|----------|-----|-------|
| --accent-600 | #EA580C | Primary accent dark, link colour |
| --accent-500 | #F97316 | Primary accent, buttons, icons |
| --accent-400 | #FB923C | Accent light, hover states |
| --accent-200 | #FED7AA | Borders, underline colour |
| --accent-100 | #FFEDD5 | Light accent backgrounds |
| --accent-50 | #FFF7ED | Very light accent bg |
| --navy-950 | #1C1917 | Darkest text |
| --navy-900 | #292524 | Headings, primary text |
| --navy-800 | #44403C | Secondary headings |
| --navy-700 | #57534E | Body text alt |
| --navy-600 | #78716C | Muted text |
| --navy-100 | #E7E5E4 | Light borders |
| --navy-50 | #F5F5F4 | Light backgrounds |
| --slate-50 | #FAFAF9 | Section backgrounds |
| --slate-100 | #F5F5F4 | Card backgrounds |
| --slate-200 | #E7E5E4 | Borders |
| --slate-300 | #D6D3D1 | Subtle borders |
| --slate-400 | #A8A29E | Placeholder, muted |
| --slate-500 | #78716C | Section descriptions, footer text |
| --slate-600 | #57534E | Nav links, body text |
| --green-100 | #D1FAE5 | Success bg |
| --green-600 | #059669 | Success text |
| --red-100 | #FEE2E2 | Error bg |
| --red-500 | #EF4444 | Error text |
| --white | #FFFFFF | White |

### Hard-coded colours
- Body text: #1E293B
- Footer background: #0f172a
- Dark section bg: #111827
- Secondary button: #ff6a00

## Container

- `max-width: 1200px`, `margin: 0 auto`
- Padding: `0 1.25rem` (mobile), `0 2rem` (@640px), `0 2.5rem` (@1024px)

## Spacing

- Section padding: `5rem 0` mobile, `7rem 0` @1024px
- Section header: `margin: 0 auto 3.5rem`, `max-width: 40rem`, `text-align: center`
- Section label margin-bottom: 0.75rem
- Section description margin-top: 1rem
- Feature row gap: 2.5rem mobile, 4rem desktop
- Feature row margin-bottom: 5rem
- Card padding: 2rem (desktop), 1.5rem (mobile)
- List gap: 0.625rem (feature lists)

## Link Styles

- `.inline-link`: color var(--accent-600), weight 500, underline, text-decoration-color var(--accent-200), offset 2px
- `.inline-link:hover`: text-decoration-color var(--accent-500)
- Global `a`: text-decoration none, color inherit
- Footer links: 0.875rem, hover color var(--accent-400)

## Button Styles

- `.btn`: inline-flex, weight 600, 0.875rem, border-radius 999px (pill), padding 0.625rem 1.5rem, min-height 44px
- `.btn-primary`: white on --accent-500, glow box-shadow, hover --accent-600
- `.btn-secondary`: white on #ff6a00
- `.btn-outline`: --navy-800 on white, 1.5px solid --slate-200 border
- `.btn-white`: --navy-900 on white, 1rem font, 0.875rem 1.75rem padding
- `.btn-sm`: 0.8125rem, 0.5rem 1rem
- `.btn-lg`: 1rem, 0.875rem 1.75rem
- `.btn-full`: width 100%

## Navbar Structure

```html
<nav class="navbar" id="navbar">
  <div class="container navbar-inner">
    <a href="#" class="logo" id="navLogo">
      <img src="images/logo.png" alt="HOMEi Property Management" class="logo-img" ...>
      <div class="logo-fallback">
        <div class="logo-icon">H</div>
        <span class="logo-text">HOMEi <span class="logo-accent">Property Management</span></span>
      </div>
    </a>
    <div class="nav-links" id="navLinks">
      <a href="#features">Features</a>
      ...
    </div>
    <div class="nav-cta">
      <a href="https://homeistudent.com" class="btn btn-outline btn-sm">HOMEi App</a>
      <a href="#contact" class="btn btn-primary">Claim Free Year</a>
    </div>
    <button class="mobile-menu-btn" id="mobileMenuBtn">...</button>
  </div>
  <div class="mobile-menu hidden" id="mobileMenu">...</div>
</nav>
```

- Fixed position, top 0, z-index 50
- Background: rgba(255,255,255,0.92) with backdrop-filter blur(12px)
- Height: 4rem mobile, 4.5rem @1024px
- Nav links hidden on mobile, shown @1024px

## Footer Structure

```html
<footer class="footer">
  <div class="footer-cta">
    <div class="container footer-cta-inner">
      <div class="footer-cta-content">
        <h3>...</h3>
        <p>...</p>
      </div>
      <a href="#contact" class="btn btn-white">...</a>
    </div>
  </div>
  <div class="footer-main">
    <div class="container footer-grid">
      <div class="footer-brand">...</div>
      <div class="footer-links-group">Platform</div>
      <div class="footer-links-group">Connect</div>
      <div class="footer-links-group">Legal</div>
    </div>
  </div>
  <div class="footer-bottom">
    <div class="container"><p id="copyright"></p></div>
  </div>
</footer>
```

- Background: #0f172a
- Grid: 1col mobile, 2col @640px, 2fr 1fr 1fr @1024px
- Footer CTA: flex col mobile, row @1024px
- Copyright set via JS

## Icon System

- Inline SVG throughout (no icon font, no sprite)
- Standard pattern: `<svg aria-hidden="true" width="X" height="Y" fill="none" stroke="currentColor" viewBox="0 0 24 24">`
- Stroke icons, not filled
