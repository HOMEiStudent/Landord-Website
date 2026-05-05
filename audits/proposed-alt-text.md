# Proposed Alt Text Changes — T24

## File-based `<img>` tags

Both active `<img>` tags already have appropriate alt text:
- Line 190: `alt="HOMEi Property Management"` (navbar logo) — no change needed
- Line 1456: `alt="HOMEi Property Management"` (footer logo) — no change needed

No images are missing alt text. No changes proposed.

## Decorative SVGs — `aria-hidden="true"`

All 61 inline SVGs are decorative (icons next to text labels, or illustrations with adjacent headings/descriptions). Adding `aria-hidden="true"` to prevent screen readers from announcing meaningless path data.

Categories affected:
- Menu/close icons (2)
- Clock/timer icons (2) 
- Checkmark icons in hero (~4)
- Trust badge icons (3)
- Feature card header icons (4)
- Feature card illustrations (4)
- Benefit card icons (2)
- Poll icons (2)
- RRA section icons (5+)
- Onboarding step icons (3)
- FAQ chevrons (11)
- CTA banner/feedback icons (2)
- Footer social icons (various)
- Mobile CTA dismiss button icon (1)
