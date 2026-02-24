# HOMEi Property Management Website - Site Guide

This guide helps you update text content and add images to the site. All changes are made in the file **`index.html`** unless otherwise noted. After making changes, commit and push to see them live on GitHub Pages.

---

## Table of Contents

- [Adding Images](#adding-images)
- [Editing Text (by section)](#editing-text)
- [File Structure](#file-structure)
- [Deploying Changes](#deploying-changes)

---

## Adding Images

All images go in the **`images/`** folder. The site automatically detects and uses them — no code changes required for logos.

### Logo (Navbar)

**File:** `images/logo.png`

- Recommended size: **200px wide**, transparent PNG background
- This is your main brand logo shown in the top navigation bar
- The site background behind it is white/light, so use a **dark or coloured** version of your logo
- If this file does not exist, the site shows the orange "H" icon fallback automatically

### Logo (Footer)

**File:** `images/logo-light.png`

- Recommended size: **200px wide**, transparent PNG background
- Shown in the dark footer area
- Use a **white or light-coloured** version of your logo so it's visible on the dark background
- Falls back to the orange "H" icon if the file doesn't exist

### Favicon (Browser Tab Icon)

**Files:**
- `images/favicon-32x32.png` — 32x32 pixels
- `images/favicon-16x16.png` — 16x16 pixels
- `images/apple-touch-icon.png` — 180x180 pixels (for iPhones)

These show as the small icon in the browser tab and when someone saves the site to their phone home screen.

### Social Sharing Image (Open Graph)

**File:** `images/og-image.png`

- Recommended size: **1200x630 pixels**
- This image appears when the URL is shared on Facebook, LinkedIn, Twitter, WhatsApp, etc.
- Include your logo, tagline, and any branding you want people to see in the preview

### How to Add an Image

1. Create the image file at the correct size
2. Name it exactly as shown above (e.g. `logo.png`, not `Logo.PNG`)
3. Place it in the `images/` folder
4. Commit and push — the site picks it up automatically

---

## Editing Text

All text is in **`index.html`**. Open the file in any text editor. The line numbers below help you find each section quickly.

> **Tip:** In most code editors, press `Ctrl+G` (or `Cmd+G` on Mac) to jump to a specific line number.

### Page Title & SEO (Lines 6-11)

These control what appears in browser tabs and search results.

```
Line 6   — Page title (browser tab text)
Line 7   — Meta description (search result snippet)
Line 10  — Social sharing title (og:title)
Line 11  — Social sharing description (og:description)
```

### Hero Section (Lines 163-210)

The large banner at the top of the page.

```
Line 170 — Badge text ("Now Accepting Early Adopters")
Line 174 — Main heading line 1 ("Property Management Software")
Line 175 — Main heading line 2 ("Built for UK Landlords & Agents")
Lines 178-185 — Description paragraph
Line 189 — Primary CTA button text ("Get Started with HOMEi PM")
Line 194 — Secondary button text ("See How It Works")
Line 199 — Trust stat 1 ("Free for 1 Year")
Line 200 — Trust label 1 ("For early adopters")
Line 203 — Trust stat 2 ("100% Web-Based")
Line 204 — Trust label 2 ("Nothing to install")
Line 207 — Trust stat 3 ("UK Focused")
Line 208 — Trust label 3 ("Built for UK lettings")
```

### Features Section (Lines 279-540)

The "Everything You Need in One Place" section with 4 features.

```
Line 284 — Section label ("Platform Features")
Line 285 — Section title ("Everything You Need in One Place")
Lines 286-289 — Section description
```

**Feature 1 — Guided Property Inspections:**
```
Line 301 — Title
Lines 302-307 — Description
Lines 309-311 — Bullet points
```

**Feature 2 — Landlord-Tenant Messaging:**
```
Line 356 — Title
Lines 357-361 — Description
Lines 363-365 — Bullet points
```

**Feature 3 — Maintenance Reporting & Tracking:**
```
Line 409 — Title
Lines 410-414 — Description
Lines 416-418 — Bullet points
```

**Feature 4 — Web-Based Property Dashboard:**
```
Line 468 — Title
Lines 469-473 — Description
Lines 475-477 — Bullet points
```

### CTA Banner (Lines 541-554)

The orange banner between features and inspections.

```
Line 546 — Heading
Line 547 — Description
Line 550 — Button text ("Get Started")
```

### Inspections Comparison (Lines 556-640)

The "A Better Way to Inspect Your Properties" section.

```
Line 560 — Section label
Line 561 — Section title
Lines 562-565 — Section description
Lines 577-582 — "The Old Way" list items
Lines 593-598 — "The HOMEi Way" list items
```

**Benefit Cards:**
```
Line 610 — "Lower Cost" title
Line 611 — "Lower Cost" description
Line 619 — "Saves Time" title
Line 620 — "Saves Time" description
Line 628 — "More Accurate" title
Line 629 — "More Accurate" description
```

### Two Platforms / Ecosystem (Lines 643-709)

The dark section showing how HOMEi PM and the HOMEi App connect.

```
Line 648 — Section label
Line 649 — Section title
Lines 650-655 — Section description
Line 665 — HOMEi PM card title
Lines 668-671 — HOMEi PM feature list
Line 689 — HOMEi App card title
Lines 692-695 — HOMEi App feature list
```

### Quick Poll (Lines 711-780)

The poll asking landlords about their challenges.

```
Line 715 — Section label
Line 716 — Section title
Lines 717-719 — Section description
Lines 724-760 — Poll option button labels (inside <span> tags)
Line 764 — Follow-up prompt text
```

### Feedback Banner (Lines 782-797)

```
Line 786 — Heading
Lines 787-790 — Description paragraph
Line 792 — Button text
```

### How It Works / Early Access (Lines 799-841)

The 3-step process section.

```
Line 802 — Section label
Line 803 — Section title
Lines 804-806 — Section description
Line 812 — Step 1 title ("Sign Up")
Line 813 — Step 1 description
Line 817 — Step 2 title ("Use It Free for 1 Year")
Line 818 — Step 2 description
Line 822 — Step 3 title ("Preferential Pricing")
Line 823 — Step 3 description
Line 828 — Trial highlight paragraph
```

### FAQ (Lines 843-931)

Each FAQ has a question (inside `<span>`) and an answer (inside `<p>`).

```
Line 853 — Q: "Is it really free?"
Line 859 — Answer
Line 864 — Q: "What is HOMEi, the Shared Household Organiser?"
Line 870 — Answer
Line 875 — Q: "How do tenant inspections work?"
Line 881 — Answer
Line 886 — Q: "Can tenants report maintenance issues?"
Line 892 — Answer
Line 897 — Q: "Do I need to install any software?"
Line 903 — Answer
Line 908 — Q: "Is this just for the UK?"
Line 914 — Answer
Line 919 — Q: "What happens after the free year?"
Line 925 — Answer
```

**To add a new FAQ:** Copy an existing `<div class="faq-item">` block and paste it before the closing `</div>` of the `faq-list`. Change the question and answer text.

### Contact / Sign Up Form (Lines 934-1025)

```
Line 938 — Section label ("Get Started")
Line 939 — Section title ("Register Your Interest")
Lines 940-942 — Description
Line 949 — Highlight 1 ("Free for 1 year as an early adopter")
Line 955 — Highlight 2 ("Preferential pricing after the trial")
Line 961 — Highlight 3 ("Your feedback shapes the product")
Line 973 — Email label ("Email Us")
Line 974 — Email address
Line 1013 — Submit button text
Lines 1017-1020 — Privacy disclaimer text
```

**Form fields** (lines 987-1011): Change the `<label>` text and `placeholder` attributes to update what the user sees.

### Footer (Lines 1030-1090)

```
Line 1034 — Footer CTA heading
Line 1035 — Footer CTA description
Line 1037 — Footer CTA button text
Lines 1050-1052 — Brand description
Line 1056 — Footer contact label
Line 1057 — Footer contact email
Lines 1064-1070 — Platform links
Lines 1075-1079 — Connect links
```

### Mobile CTA (Line 1095)

The sticky button bar that appears on mobile devices when scrolling.

```
Line 1095 — Button text ("Get Started with HOMEi PM")
```

### Success Modal (Lines 1102-1116)

Shown after someone submits the contact form.

```
Line 1111 — Heading ("You're in! Welcome aboard.")
Line 1112 — Main message
Line 1113 — Secondary message
Line 1114 — Button text ("Got it, thanks!")
```

---

## File Structure

```
Website-Test/
├── index.html          ← All page content (edit text here)
├── css/
│   └── styles.css      ← All styling (colours, fonts, layout)
├── js/
│   └── main.js         ← Interactive features (form, poll, FAQ, etc.)
├── images/             ← Place your images here
│   ├── README.md       ← Image requirements reference
│   ├── logo.png        ← Navbar logo (add this)
│   ├── logo-light.png  ← Footer logo (add this)
│   ├── favicon-32x32.png
│   ├── favicon-16x16.png
│   ├── apple-touch-icon.png
│   └── og-image.png    ← Social sharing image (add this)
└── SITE-GUIDE.md       ← This file
```

---

## Deploying Changes

1. Make your changes to the files
2. In your terminal, run:
   ```
   git add .
   git commit -m "Update site content"
   git push
   ```
3. GitHub Pages will automatically deploy within a few minutes
4. Check the live site at: https://homeistudent.github.io/Website-Test/

### Quick Text Change Example

Say you want to change the hero heading from "Property Management Software" to "Smart Property Management":

1. Open `index.html`
2. Go to **line 174**
3. Change `Property Management Software` to `Smart Property Management`
4. Save, commit, and push

That's it — no other files need changing.
