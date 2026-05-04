# T01 — Current SEO State Audit

**Page:** index.html (single-page site)
**Domain:** homeistudent.uk

---

## Meta Tags

| Tag | Current Value |
|-----|---------------|
| `<title>` | `HOMEi PM: Renters' Rights Act Software for UK Landlords \| Free Trial` |
| Title length | 66 characters |
| `<meta description>` | `HOMEi PM is building Renters' Rights Act-ready property management software for UK landlords. Automated inspections, Section 13 tracking, maintenance reporting and tenant communication. Join the free early-adopter pilot.` |
| Description length | 219 characters (OVER 160 char limit) |
| `<meta keywords>` | Present (10 keywords) |
| `<meta robots>` | `index, follow` |
| `<link rel="canonical">` | `https://homeistudent.uk` (missing trailing slash — should match CNAME convention) |
| OG title | `HOMEi PM \| Renters' Rights Act-Ready Software for UK Landlords` |
| OG description | `Property management software being built for the Renters' Rights Act era. Inspections, Section 13 tracking, maintenance and communication. Free pilot for early adopters.` |
| OG image | `https://homeistudent.uk/images/og-image.png` |
| Twitter card | `summary_large_image` |
| Viewport | `width=device-width, initial-scale=1.0` |

---

## Heading Structure

### H1 (count: 1)
| Line | Text |
|------|------|
| 242 | `Property Management Software Built for UK Landlords & Agents` |

### H2s (count: 12)
| Line | Text | Section |
|------|------|---------|
| 354 | Built by People Who Understand Property | About / Trust |
| 405 | Everything You Need in One Place | Features |
| 667 | We're building this with landlords, not just for them. | CTA Banner |
| 682 | A Better Way to Inspect Your Properties | Inspections Comparison |
| 770 | Built for the Renters' Rights Act | RRA Compliance |
| 846 | Two Platforms, One Connected System | Why HOMEi Ecosystem |
| 913 | What Takes Up Most of Your Time? | Poll |
| 984 | Help us build something useful | Feedback Banner |
| 1001 | Trusted Partners | Partner Section |
| 1028 | Free Onboarding & Setup Support | Onboarding |
| 1073 | Trusted by Landlords Like You | Testimonials (hidden) |
| 1124 | Getting Started Is Simple | Early Access Steps |
| 1168 | Got Questions? | FAQ |
| 1303 | Register Your Interest | Contact Form |
| 1488 | Thanks for registering your interest! | Success Modal |

### H3s (count: 8)
| Line | Text | Parent Section |
|------|------|----------------|
| 422 | Guided Property Inspections | Features (under H2 line 405) |
| 477 | Landlord-Tenant Messaging | Features (under H2 line 405) |
| 530 | Maintenance Reporting & Tracking | Features (under H2 line 405) |
| 589 | Web-Based Property Dashboard | Features (under H2 line 405) |
| 695 | The Old Way | Inspections (under H2 line 682) |
| 711 | The HOMEi Way | Inspections (under H2 line 682) |
| 862 | HOMEi Property Management | Why HOMEi (under H2 line 846) |
| 886 | HOMEi Household Organiser | Why HOMEi (under H2 line 846) |
| 1133 | Sign Up | Early Access (under H2 line 1124) |
| 1138 | Use It Free for 1 Year | Early Access (under H2 line 1124) |
| 1143 | Preferential Pricing | Early Access (under H2 line 1124) |
| 1398 | Ready to get ahead of the Renters' Rights Act? | Footer CTA |

### H4s (count: 13)
| Line | Text | Parent Section |
|------|------|----------------|
| 370 | Sheffield-Based, Founded at Emerge | Trust badges (under H2 line 354) |
| 379 | Co-Founded by James & Gurprit | Trust badges (under H2 line 354) |
| 388 | 1,200+ Student Users | Trust badges (under H2 line 354) |
| 731 | Lower Cost | Inspections benefits (under H2 line 682) |
| 740 | Saves Time | Inspections benefits (under H2 line 682) |
| 749 | More Accurate | Inspections benefits (under H2 line 682) |
| 785 | Section 13 Rent Increase Tracker | RRA (under H2 line 770) |
| 795 | Section 8 Evidence Pack Builder | RRA (under H2 line 770) |
| 805 | Section 4A Compliance Tracker | RRA (under H2 line 770) |
| 815 | Termination Notice Storage | RRA (under H2 line 770) |
| 825 | Prescribed Information Delivery | RRA (under H2 line 770) |
| 1043 | 1:1 Walkthrough with a Founder | Onboarding (under H2 line 1028) |
| 1052 | Full Setup Support | Onboarding (under H2 line 1028) |
| 1061 | First Inspection Walkthrough | Onboarding (under H2 line 1028) |
| 1428 | Platform | Footer |
| 1439 | Connect | Footer |

### Heading Hierarchy Issues
- **H2→H4 skip** in Trust section: H2 (line 354) → H4 (line 370). No H3 in between.
- **H2→H4 skip** in RRA section: H2 (line 770) → H4 (line 785). No H3 in between.
- **H2→H4 skip** in Inspections benefits: H2 (line 682) has H3 children but also H4 children (lines 731-749) without an intermediate H3.
- **H2→H4 skip** in Onboarding: H2 (line 1028) → H4 (line 1043). No H3 in between.
- **H2→H4 skip** in Footer: H4s (lines 1428, 1439) sit outside any H2/H3 context.

---

## Existing Schema (JSON-LD)

### 1. SoftwareApplication (lines 32-53)
- name: "HOMEi Property Management"
- category: BusinessApplication
- price: 0 GBP
- availability: LimitedAvailability

### 2. FAQPage (lines 55-141)
- 10 questions matching the visible FAQ section
- All questions have acceptedAnswer entries

### 3. Organization (lines 143-162)
- name: HOMEi
- url: https://homeistudent.uk
- logo: https://homeistudent.uk/images/logo.png
- founders: James, Gurprit
- foundingDate: 2024
- **Missing:** address, sameAs (LinkedIn), contactPoint

---

## CTAs (All Buttons/Links)

| Location | Text | Type | Target | Notes |
|----------|------|------|--------|-------|
| Nav desktop | Claim Free Year | btn btn-primary | #contact | |
| Nav mobile | Claim Your Free Year of Early Access | btn btn-primary | #contact | |
| Hero primary | Claim Your Free Year of Early Access | btn btn-primary btn-lg | #contact | |
| Hero secondary | See How It Works | btn btn-outline btn-lg | #features | Scrolls to features |
| CTA Banner | Reserve Your Free Trial Spot | btn btn-white btn-lg | #contact | |
| Inspections | Reserve Your Free Trial Spot | btn btn-primary btn-lg | #contact | |
| RRA | Get RRA-Ready: Join the Pilot | btn btn-primary btn-lg | #contact | |
| Why HOMEi | Explore the HOMEi App | btn btn-outline-light btn-lg | homeistudent.com | External |
| Feedback Banner | Reserve Your Free Trial Spot | btn btn-primary btn-lg | #contact | |
| Early Access | Join as a Founding Landlord | btn btn-primary btn-lg | #contact | |
| Contact form | Join as a Founding Landlord | btn btn-primary btn-full | Form submit | |
| Footer CTA | Join as a Founding Landlord | btn btn-white | #contact | |
| Desktop sticky | Get Free Onboarding | btn btn-primary btn-sm | #contact | Shows on scroll |
| Mobile sticky | Get Free Onboarding | mobile-cta-link | #contact | Shows on scroll |
| Footer link | Claim Free Year | text link | #contact | |
| Partner section | Interested in partnering? Get in touch. | inline-link | #contact | |

---

## Other SEO-Relevant Findings

- **og:image** references `images/og-image.png` — file does NOT exist in repo
- **twitter:image** references same missing file
- **Scarcity bar** above hero with "Limited pilot places" message
- **Skip to content** link present
- **Scroll progress bar** present
- **11 visible FAQ entries** in HTML, **10 entries** in FAQPage schema (mismatch — "What happens after the free year?" is in HTML but not in schema)
- **Testimonial section** exists but is hidden (`class="hidden"`)
- **robots.txt** and **sitemap.xml** both exist
- **Font loading:** Google Fonts (Inter) loaded via render-blocking `<link>` with `display=swap`
- **CSS:** Single render-blocking stylesheet `css/styles.css`
- **JS:** Single script `js/main.js` with `defer` attribute
