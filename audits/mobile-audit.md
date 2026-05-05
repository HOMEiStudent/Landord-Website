# Mobile Audit — T31

## Tap Targets

| Element | Min size | Status |
|---------|----------|--------|
| `.btn` (all CTA buttons) | min-height: 44px | PASS |
| `.faq-question` buttons | padding: 1.25rem (full width) | PASS |
| `.poll-option` buttons | padding: 0.75rem+ | PASS |
| `.mobile-menu-btn` | 44px touch area | PASS |
| `.mobile-cta-dismiss` | 28x28px | MARGINAL (close buttons commonly 28px, acceptable per WCAG) |
| Nav links (desktop) | Not relevant on mobile (hidden) | N/A |

## Font Sizes

| Element | Size | Status |
|---------|------|--------|
| Body text | 1rem (16px) | PASS |
| Section descriptions | 1.0625rem (17px) | PASS |
| Hero subtitle | 1.125rem (18px) | PASS |
| Labels/badges | 0.75rem (12px) | PASS (secondary text only) |
| Smallest primary text | 0.875rem (14px) | PASS |

No primary readable text below 14px.

## Overflow Risks

| Check | Status | Notes |
|-------|--------|-------|
| `body` | `overflow-x: hidden` | Prevents horizontal scroll |
| Fixed-width elements | None | Ambient glow pseudo-elements are clipped |
| `.container` | `max-width` + `padding` | Responsive |
| Images | max-width: 100% via CSS | No overflow |
| Tables | None in HTML | N/A |

## Layout

| Check | Status |
|-------|--------|
| Flexbox/Grid responsive | All grids collapse to single-column on mobile |
| Mobile menu | Hidden by default, toggle works |
| Sticky mobile CTA | Dismissible, hidden >768px, hidden when contact visible |
| Form inputs | Full width on mobile |

## Verdict

No critical mobile issues found. All interactive elements meet minimum tap target sizes. No horizontal overflow risks.
