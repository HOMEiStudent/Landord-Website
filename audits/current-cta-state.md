# T09 — Current CTA State Audit

## CTA Inventory

| # | Location | Text | Class | Target | Colour | Behaviour |
|---|----------|------|-------|--------|--------|-----------|
| 1 | Nav (desktop) | Claim Free Year | btn btn-primary | #contact | Orange (#F97316) bg, white text | Scrolls to contact form |
| 2 | Nav (mobile) | Claim Your Free Year of Early Access | btn btn-primary mobile-cta | #contact | Orange bg, white text | Scrolls to contact form |
| 3 | Hero (primary) | Claim Your Free Year of Early Access | btn btn-primary btn-lg | #contact | Orange bg, white text, glow pulse | Scrolls to contact form |
| 4 | Hero (secondary) | See How It Works | btn btn-outline btn-lg | #features | White bg, grey border | Scrolls to features section |
| 5 | CTA Banner | Reserve Your Free Trial Spot | btn btn-white btn-lg | #contact | White bg, dark text | Scrolls to contact form |
| 6 | Inspections | Reserve Your Free Trial Spot | btn btn-primary btn-lg | #contact | Orange bg, white text, glow pulse | Scrolls to contact form |
| 7 | RRA | Get RRA-Ready: Join the Pilot | btn btn-primary btn-lg | #contact | Orange bg, white text, glow pulse | Scrolls to contact form |
| 8 | Why HOMEi | Explore the HOMEi App | btn btn-outline-light btn-lg | homeistudent.com | Transparent bg, white border | Opens external site (new tab) |
| 9 | Poll form | Send Feedback | btn btn-primary | Form POST | Orange bg, white text | Submits poll to Web3Forms |
| 10 | Feedback Banner | Reserve Your Free Trial Spot | btn btn-primary btn-lg | #contact | Orange bg, white text, glow pulse | Scrolls to contact form |
| 11 | Early Access | Join as a Founding Landlord | btn btn-primary btn-lg | #contact | Orange bg, white text, glow pulse | Scrolls to contact form |
| 12 | Contact form | Join as a Founding Landlord | btn btn-primary btn-full | Form POST | Orange bg, white text, full width | Submits form to Web3Forms |
| 13 | Footer CTA | Join as a Founding Landlord | btn btn-white | #contact | White bg, dark text | Scrolls to contact form |
| 14 | Desktop sticky | Get Free Onboarding | btn btn-primary btn-sm | #contact | Orange bg, white text | Scrolls to contact form |
| 15 | Mobile sticky | Get Free Onboarding | mobile-cta-link | #contact | Orange bg, white text | Scrolls to contact form |
| 16 | Success modal | Got it, thanks! | btn btn-primary btn-lg | JS close | Orange bg, white text | Closes modal |

## Non-button CTAs

| Location | Text | Target |
|----------|------|--------|
| Nav (desktop) | HOMEi App | homeistudent.com (btn btn-outline btn-sm) |
| Partner section | Interested in partnering with us? Get in touch. | #contact (inline-link) |
| Footer link | Claim Free Year | #contact (text link) |

## CTA Colour Summary

| Style | Background | Text | Border | Used by |
|-------|-----------|------|--------|---------|
| btn-primary | var(--accent-500) = #F97316 | white | none | 10 CTAs |
| btn-outline | white | var(--navy-800) | 1.5px solid var(--slate-200) | 2 CTAs |
| btn-outline-light | transparent | white | 1.5px solid white/30% | 1 CTA |
| btn-white | white | var(--navy-900) | none | 2 CTAs |
| mobile-cta-link | orange gradient | white | none | 1 CTA |

## Observations

- **Primary CTA text varies**: "Claim Your Free Year of Early Access", "Reserve Your Free Trial Spot", "Join as a Founding Landlord", "Get Free Onboarding", "Get RRA-Ready: Join the Pilot" — 5 different primary CTA messages across the page.
- **All primary CTAs target #contact** (the sign-up form), except the poll "Send Feedback" and modal "Got it, thanks!".
- **No secondary action CTA in the hero** beyond "See How It Works" which scrolls to features rather than offering a direct contact path.
- **No "Book a chat" or calendar-based CTA exists anywhere.**
- **btn-primary has a glow pulse animation** (subtle box-shadow animation on a 3s loop, disabled for prefers-reduced-motion).
