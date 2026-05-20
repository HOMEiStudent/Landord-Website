# AI Content Detection Audit -- renters-rights-act.html

Date: 2026-05-20
Auditor: Automated scan

## Summary
14 flags found / 2 critical / 12 minor

## Flags

### Flag 1: Em dash in checklist intro
- **Phrase:** "here's the minimum to get through the deadline"
- **Location:** Line 690 / paragraph before checklist (`<p>If you haven't started, here's the minimum...`)
- **Category:** "Here's what/how/why..." sentence opener
- **Severity:** Minor
- **Suggested fix:** Part of approved copy (source line 66) -- cannot change without user approval.

### Flag 2: "designed to" / "built to" adjacent pattern -- "building HOMEi PM"
- **Phrase:** "We're building HOMEi PM because tracking all of this in spreadsheets and email threads stops working pretty quickly"
- **Location:** Line 736 / HOMEi PM section
- **Category:** Clean -- "building" used literally here, not as a marketing intensifier. No action required.
- **Severity:** N/A (false positive on scan -- included for completeness, no flag)

Note: Removed from count. Actual flag count remains 14.

### Flag 3: "comprehensive" in disclaimer
- **Phrase:** "a complex piece of legislation"
- **Location:** Line 812 / disclaimer paragraph
- **Category:** Near-miss for "comprehensive" -- "complex" is neutral and accurate here. Not flagged as AI tell.
- **Severity:** N/A (false positive -- removed from count)

Note: Removed from count. Re-tallying below.

---

Restarting with clean flags only:

---

### Flag 1: "Here's" sentence opener
- **Phrase:** "here's the minimum to get through the deadline"
- **Location:** Line 690 in HTML / checklist intro paragraph
- **Category:** "Here's what/how/why..." sentence opener (pattern #3)
- **Severity:** Minor
- **Suggested fix:** Part of approved copy (source line 66) -- cannot change without user approval.

### Flag 2: Hedging with "may"
- **Phrase:** "you may not be able to use Ground 4A"
- **Location:** Line 798 in HTML / FAQ answer for re-letting question; also line 117 in schema markup
- **Category:** Excessive hedging (pattern #14)
- **Severity:** Minor
- **Suggested fix:** Part of approved copy (source line 95) -- cannot change without user approval. In this context "may" is legally appropriate hedging, not AI fluff.

### Flag 3: Hedging with "can temporarily lose"
- **Phrase:** "you can temporarily lose access to Ground 4A"
- **Location:** Line 617 in HTML / student landlord deadline section
- **Category:** Excessive hedging (pattern #14)
- **Severity:** Minor
- **Suggested fix:** Part of approved copy (source line 30) -- cannot change without user approval. The hedging is factually warranted here (the loss is conditional and temporary).

### Flag 4: Triple parallel structure -- "Section 21 is gone. Fixed-term tenancies are gone."
- **Phrase:** "Section 21 is gone. Fixed-term tenancies are gone. Rent increases now have a single statutory path."
- **Location:** Line 552 in HTML / second introductory paragraph
- **Category:** Triple parallel structure (pattern #10)
- **Severity:** Minor
- **Suggested fix:** Part of approved copy (source line 6) -- cannot change without user approval. The parallel structure is intentional for emphasis and reads naturally in context.

### Flag 5: "ensure" usage in meta description area -- not present
- **Phrase:** N/A
- **Location:** N/A
- **Category:** Checked all text for "ensure" / "ensure compliance" / "ensure that" -- none found.
- **Severity:** N/A

Note: Removed from count -- clean pass on "ensure."

---

Re-tallying again for clean output:

### Flag 1: "Here's" sentence opener
- **Phrase:** "here's the minimum to get through the deadline"
- **Location:** Line 690 in HTML / checklist intro paragraph
- **Category:** "Here's what/how/why..." sentence opener (pattern #3)
- **Severity:** Minor
- **Suggested fix:** Part of approved copy (source line 66) -- cannot change without user approval.

### Flag 2: Hedging -- "may not be able to"
- **Phrase:** "you may not be able to use Ground 4A for the tenancy in question"
- **Location:** Line 798 (FAQ answer), line 117 (schema markup)
- **Category:** Excessive hedging (pattern #14)
- **Severity:** Minor
- **Suggested fix:** Part of approved copy (source line 95) -- cannot change without user approval. Legally appropriate.

### Flag 3: Hedging -- "can temporarily lose"
- **Phrase:** "you can temporarily lose access to Ground 4A for that tenancy"
- **Location:** Line 617 in HTML
- **Category:** Excessive hedging (pattern #14)
- **Severity:** Minor
- **Suggested fix:** Part of approved copy (source line 30) -- cannot change without user approval. Factually accurate conditional.

### Flag 4: Triple parallel structure
- **Phrase:** "Section 21 is gone. Fixed-term tenancies are gone. Rent increases now have a single statutory path."
- **Location:** Line 552 in HTML
- **Category:** Triple parallel structure (pattern #10)
- **Severity:** Minor
- **Suggested fix:** Part of approved copy (source line 6) -- cannot change without user approval.

### Flag 5: Formulaic list intro
- **Phrase:** "Three acceptable methods:"
- **Location:** Line 594 in HTML
- **Category:** Formulaic list intro (pattern #11) -- "X things you need to know" variant
- **Severity:** Minor
- **Suggested fix:** Part of approved copy (source line 19) -- cannot change without user approval. This is a factual count, not a marketing formula.

### Flag 6: "peace of mind" adjacent -- "this evidence is what protects you"
- **Phrase:** "this evidence is what protects you"
- **Location:** Line 606 in HTML
- **Category:** Near "peace of mind" / reassurance language (pattern #16)
- **Severity:** Minor
- **Suggested fix:** Part of approved copy (source line 25) -- cannot change without user approval. Direct and specific, not generic reassurance.

### Flag 7: Overly balanced sentence pair
- **Phrase:** "It's a different form, served for a different reason, but the deadline is identical."
- **Location:** Line 619 in HTML
- **Category:** Overly balanced sentence pair (pattern #12) -- symmetrical "different X / different Y / identical Z"
- **Severity:** Minor
- **Suggested fix:** Part of approved copy (source line 31) -- cannot change without user approval. The parallelism serves clarity here.

### Flag 8: "could potentially" hedging cluster
- **Phrase:** "They could move out three months into a 12-month period and you have no recourse to hold them, unless you can negotiate."
- **Location:** Line 642 in HTML
- **Category:** Excessive hedging (pattern #14) -- "could" + conditional
- **Severity:** Minor
- **Suggested fix:** Part of approved copy (source line 42) -- cannot change without user approval. Contextually appropriate.

### Flag 9: CTA banner text -- not in approved source copy
- **Phrase:** "Join the free pilot" / "50 places for landlords with 5+ properties. Free for 1 year." / "Claim Your Free Year"
- **Location:** Lines 804-806 in HTML / CTA banner
- **Category:** Non-source text (added beyond approved copy)
- **Severity:** Critical -- text not in approved source. Needs user review.
- **Suggested fix:** Verify this CTA copy was separately approved. It is marketing copy, not article content, but it sits within the article element.

### Flag 10: Footer CTA text -- not in approved source copy
- **Phrase:** "Ready to get ahead of the Renters' Rights Act?" / "Join the free pilot and help us build the platform landlords actually need." / "Join as a Founding Landlord"
- **Location:** Lines 825-828 in HTML / footer CTA section
- **Category:** Non-source text (added beyond approved copy)
- **Severity:** Critical -- text not in approved source. Needs user review.
- **Suggested fix:** Verify this footer CTA copy was separately approved. Note: "Ready to get ahead of" is a natural phrase and does not trigger AI tells.

### Flag 11: Table of Contents -- not in approved source copy
- **Phrase:** "On this page" + 8 anchor links
- **Location:** Lines 557-569 in HTML / TOC nav element
- **Category:** Non-source text (structural addition)
- **Severity:** Minor -- navigational element, standard practice. Not content.
- **Suggested fix:** No fix needed -- standard UX element.

### Flag 12: Meta description -- not in approved source copy
- **Phrase:** "What landlords need to know about the Renters' Rights Act 2025, the 31 May 2026 Information Sheet deadline, Section 13 rent increases, and the end of Section 21."
- **Location:** Line 7 in HTML / meta description tag; also lines 34, 62 in schema markup
- **Category:** Non-source text (meta/SEO addition)
- **Severity:** Minor -- meta descriptions are standard SEO elements not part of article copy.
- **Suggested fix:** No fix needed -- standard SEO practice. Text is factual and does not contain AI tells.

### Flag 13: Alt text -- not in approved source copy
- **Phrase:** "Terraced street of rental properties in England" / "Calendar showing the 31 May 2026 deadline" / "HOMEi PM property management dashboard"
- **Location:** Lines 548, 580, 740 in HTML / img alt attributes
- **Category:** Non-source text (alt text additions)
- **Severity:** Minor -- alt text is a standard accessibility requirement.
- **Suggested fix:** No fix needed -- required for accessibility. Text is descriptive and factual.

### Flag 14: Footer brand description -- not in approved source copy
- **Phrase:** "Web-based inspection, maintenance and communication software for UK landlords and estate agents."
- **Location:** Lines 843-844 in HTML / footer brand description
- **Category:** Non-source text (site-wide footer element)
- **Severity:** Minor -- site-wide boilerplate, not article content.
- **Suggested fix:** No fix needed -- site-wide element, not part of article copy.

## Non-source text audit

The following visible text appears in the HTML but is not present in the approved source copy (content/renters-rights-act.md):

| Text | Location | Assessment |
|------|----------|------------|
| "On this page" + 8 TOC links | Lines 557-569, nav element | Standard navigational UX. No AI tells. Acceptable. |
| Meta description: "What landlords need to know..." | Line 7, meta tag | Standard SEO. Factual summary. No AI tells. Acceptable. |
| OG/Twitter descriptions: "What landlords need to know..." | Lines 10, 16 | Standard social meta. Shortened version of meta desc. Acceptable. |
| Schema markup Article description | Line 34 | Duplicate of meta description in structured data. Acceptable. |
| Schema markup FAQ answers | Lines 59-119 | Exact match to approved source FAQ text. Acceptable. |
| Alt text on 3 images | Lines 548, 580, 740 | Descriptive, factual. Required for accessibility. Acceptable. |
| CTA banner: "Join the free pilot" / "50 places..." / "Claim Your Free Year" | Lines 804-806 | **Needs separate approval.** Marketing CTA within article wrapper. |
| Footer CTA: "Ready to get ahead of the Renters' Rights Act?" / "Join the free pilot..." / "Join as a Founding Landlord" | Lines 825-828 | **Needs separate approval.** Footer CTA block. |
| Footer brand: "Web-based inspection, maintenance and communication software..." | Lines 843-844 | Site-wide boilerplate. Acceptable. |
| Footer nav links (Features, Inspections, etc.) | Lines 854-876 | Site-wide navigation. Acceptable. |
| Copyright: "2026 HOMEiStudent Ltd. All rights reserved." | Line 883 | Standard copyright. Acceptable. |
| Nav links (Features, Inspections, RRA Compliance, etc.) | Lines 501-507 | Site-wide navigation. Acceptable. |
| "Claim Free Year" / "HOMEi App" / "Claim Your Free Year of Early Access" | Lines 512-513, 533 | Nav/mobile CTA text -- site-wide. Acceptable. |
| "Skip to main content" | Line 489 | Accessibility skip link. Acceptable. |
| "Have a question? Drop us a line." / "support@homeistudent.com" | Lines 847-848 | Site-wide footer contact. Acceptable. |

## Patterns NOT found (clean passes)

The following AI tell categories were scanned and produced zero hits:

- **Em dashes** -- No em dashes (U+2014) found anywhere in the HTML. All dashes are standard hyphens or encoded entities. Clean pass.
- **Semicolons in informal prose** -- No inappropriate semicolons found. Clean pass.
- **"It's worth noting" / "It's important to note" / "Notably"** -- Not found. Clean pass.
- **"Designed to" / "Built to" / "Tailored to"** in marketing framing -- Not found. "building" appears literally (building a product). Clean pass.
- **"Comprehensive" / "robust" / "seamless" / "streamlined" / "cutting-edge" / "state-of-the-art" / "leverage"** -- Not found. Clean pass.
- **"Delve into" / "navigate the complexities" / "in today's landscape"** -- Not found. Clean pass.
- **"Ensure compliance" / "ensure that"** -- Not found. Clean pass.
- **"Furthermore" / "Moreover" / "Additionally"** as paragraph openers -- Not found. Clean pass.
- **"Empowering" / "Revolutionizing" / "Transforming"** -- Not found. Clean pass.
- **"In an ever-changing/evolving..."** -- Not found. Clean pass.
- **"Rest assured" / "peace of mind"** -- Not found. Clean pass.

## Content fidelity check

All article body text in the HTML was compared line by line against the approved source copy. Findings:

- The source copy line 30 contains a typo: "ma kes" (space in "makes"). The HTML on line 617 correctly renders this as "makes" (no space). This is a fix, not an unauthorized change.
- All other article body text matches the approved source copy verbatim.
- FAQ answers in both visible HTML and schema markup match the approved source copy.
- The disclaimer text matches the approved source copy.
- The "Sources" line matches the approved source copy (with `&amp;` encoding for ampersands, as expected).

## Verdict

**PASS WITH NOTES**

The article body content is clean. It avoids em dashes, AI buzzwords, and the most common detector signals. The few minor flags (one "here's" opener, light hedging, one triple parallel structure) are all present in the approved source copy and are contextually appropriate -- they read as natural writing rather than AI patterns.

Two items need separate user review:

1. **CTA banner text** (lines 804-806): "Join the free pilot / 50 places for landlords with 5+ properties. Free for 1 year. / Claim Your Free Year" -- not in approved source copy. Needs confirmation this was separately approved.
2. **Footer CTA text** (lines 825-828): "Ready to get ahead of the Renters' Rights Act? / Join the free pilot and help us build the platform landlords actually need. / Join as a Founding Landlord" -- not in approved source copy. Needs confirmation this was separately approved.

Neither CTA block contains AI writing tells. The concern is purely that they are outside the approved source document.
