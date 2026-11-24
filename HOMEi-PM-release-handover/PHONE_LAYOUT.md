# Phone layout (640px and narrower)

The phone layout is approved by the founder. Everything below applies **only at 640px and narrower**. Above 640px the approved laptop design is unchanged.

The exact CSS is in the `@media (max-width:640px)` blocks inside each `designs/Release *.dc.html` file. The markup uses two helper classes:

- `hx-pho`: shown on phones only
- `hx-npho`: hidden on phones only

The older classes `hx-show-m` and `hx-hide-m` belong to the approved laptop design's own 1000px behaviour. Keep them as they are.

Reference images:
- `screenshots/* - phone-390.png`: full page
- `screenshots/* - phone-390 first screen.png`: first screen, showing the sticky bar
- `designs/Release Phone Preview.dc.html`: shows each page in a 390px phone frame

## Across every page

1. **Alignment.** Everything is centred: headings, kickers, paragraphs, lists, buttons, cards, pricing rows and the footer. Three exceptions stay left-aligned on purpose: the form fields on Join, the mobile menu links, and the text and button inside the sticky bottom bar.
2. **Header.** One row: logo, "Get started today" button, then a 44px hamburger icon that opens the menu. The nav "Sign in" link moves into the menu.
3. **Promo bar.** Short text, "Free until 1 Feb 2027", with the countdown pill and no "Ends in" label. The "Get started today" link is hidden.
4. **Sticky bottom bar.** A navy bar fixed to the bottom of the screen, respecting the iPhone safe area. On the left: "Free until 1 Feb 2027" with "No card needed" below it. On the right: an orange "Get started today" button. The page gets bottom padding so the bar never covers the footer.
5. **Fewer inline buttons.** The orange button inside standard CTA rows is hidden, because the sticky bar replaces it. The secondary text links stay. Orange buttons remain in three places: the hero, the guarantee card and the closing band.
6. **Forced line breaks.** Line breaks inside headings and paragraphs are hidden. Keep a space before each break so words never join.
7. **Swipe rows.** Cards scroll sideways with snap points, and the next card peeks in. Under each row sit position dots, where the active dot becomes a short orange bar, plus a small "Swipe to see..." hint where the design has one. The dots need a small script (included at the bottom of each page).
8. **Dropdowns.** Questions are centred, with a + button on the right that turns into a minus sign when open.
9. **Footer.** Centred. Every link has a 44px tap height.

## Home page, top to bottom

- **Renters' Rights Act strip** (under the promo bar): hidden.
- **Hero:**
  - Order: kicker, H1 (32px), intro paragraph.
  - Then the dashboard **phone crop** (`assets/hero/dashboard-phone.png`) in a plain screen frame. There is no laptop base and no tablet overlay.
  - Then "Works on your laptop...", the orange serif line, two full-width buttons, the guarantee line, and the three price facts in **one row of three**.
  - The three tick bullets are hidden.
- **Is it for you:** centred, and the tick rows are centred.
- **Regulations table:** becomes a **swipe row of three cards**. Each card has the rule on a navy header ("THE RULE" in orange), "Where it goes wrong" with an amber label, and "What you no longer worry about" with a green label. Hint: "Swipe to see all three rules".
- **Five ways:** becomes five **dropdowns** (title visible, description inside).
- **HOMEi app section:**
  - The three phone screenshots become a **swipe row**, with the Report an issue screen first.
  - The row sits after the intro paragraphs and before "Catching repairs early".
  - Hint: "Swipe to see more screens". The orange button is hidden.
- **How a repair request works:** a swipe row of four cards.
- **Setup:**
  - The five steps become a compact centred list (number circle above each title).
  - The three timeline cards (Day one, and so on) become a swipe row.
- **Founder note:**
  - The credentials paragraph is replaced by one line: "I have spent nearly a decade in the rental market, as a letting agent and managing my own portfolio."
  - Paragraphs 2 to 4 (the reason we built it, and the guarantee) show in full.
  - The "Who is behind HOMEi PM" list is hidden. The "About the founders" link stays.
- **Cost section:**
  - Centred, with the property selector full width.
  - "What you save" stacks under "What it costs", with a divider line.
  - The Cost and Saving bar labels sit centred above full-width bars.
  - "On top of your savings" becomes a swipe row.
- **Pricing:**
  - The intro paragraph is hidden.
  - The bonuses become a swipe row, with each "BONUS n" label centred and the "Coming Q1 2027" pill under the label.
  - The pricing list becomes three compact centred rows, label above price: Until 1 Feb 2027 (Free), Monthly (£28), Annual (£268 with £336 struck through). Their descriptions are hidden, and the "At six months" row is hidden.
  - The guarantee card is tighter.
- **FAQ:** dropdowns.
- **Closing band:** centred, with both buttons full width.

## Other pages

- **About:** centred. Founder name and role are centred.
- **Join:** centred. The plan, price and guarantee rows stack. Inside the form card, the heading, intro and Send button are centred; the fields stay left-aligned. The bonuses are a swipe row.
- **Guides:** centred. The guide cards stack, with images below the text.
- **Savings Calculator:** only the shared header, promo bar, sticky bar and footer changes apply. Its own layout and logic are locked. Checked with real data at 390px: no sideways scroll.
