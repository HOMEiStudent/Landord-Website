# Decisions log

These choices were made deliberately during design review with the founder. Do not "tidy" any of them back. If one looks odd, ask before changing it.

## Commercial

- **Pricing** moved from £15 and £150 (up to 5 properties, "from launch") to **£28 a month or £268 a year**, with no property limit. The system has no limit, so the site must never imply one.
- **The annual price** is shown against £336 struck through. £336 is the real 12 × £28 reference price, so the discount is genuine.
- **Free until 1 February 2027** as a new year offer. No card is taken, and landlords choose a plan on 1 February.
  - It is shown as an overlay on the existing content: the pinned promo bar with a countdown in weeks (weeks feel more urgent), plus plain orange text lines.
  - Badges and boxed notes were tried and rejected as looking "AI generated" and "slapped on". Do not reintroduce pills or badges for the offer.
- **The six-month money-back guarantee** starts from the first payment, not from sign-up.
- **The new year bonuses** are presented as part of the £28 a month, in this order: Compliance Updates, Help Library, Set Up in an Evening Guide, Inspections (Coming Q1 2027).
- **"Get started today"** is the single primary button label across the site. It links straight to the platform.

## Messaging

- The customer avatar is the independent landlord who manages their own properties. The promise is "easier, lower risk, saves you time".
- "Small landlords", "fewer than five properties" and "law" were removed everywhere. Use "regulations".
- **The "Is it for you?" section** says we are a local Sheffield business with nearly a decade in the rental market. We do not state that HOMEi PM is "not for agents or large portfolios". Bigger portfolios get a soft "Get in touch".
- **The founder letter on Home** ends: "We are so confident in its value that if you are not satisfied after six months, we will give you all your money back." That is the founder's own wording.
- **About page:**
  - H1: "Property experience you can rely on".
  - No founder photos (both founders work full time).
  - The founding year is shown as 2023.
- **The HOMEi app section** explains the tenant side in one paragraph, then "Catching repairs early can save you thousands", then a four-step repair flow.
- **Setup section:** "Set it up once. Then HOMEi PM shows you how to stay compliant and manage your property." Five setup steps, then three timeline cards.
- **The cost section** adapts to how many properties the landlord lets (1 to 5) using a CSS-only selector. Savings are £500 per property, estimated, and are never added to risk figures.
- **The FAQ** response promise is "within 3 days". The UK-business FAQ was removed. The guarantee FAQ links to contact@homei.uk.
- **Closing band:** "Stay compliant, save time, and keep more of your rent."

## Visual

- **Hero (laptop):** a laptop with the real dashboard screenshot and a real tablet screenshot overlapping it. The tablet image is a crop of the original iPad PNG, sized so text stays sharp.
- **App section:** three real app screenshots in a slight fan (side phones rotated ±2°). The surname on the app home screenshot is painted out on purpose.
- **Guides page:** the Renters' Rights Act and Summer Turnaround cards use real product screenshots instead of "Image to be supplied" panels. They show on both layouts.

## Phone layout

- The phone layout applies only at 640px and narrower. An earlier version used 1000px and leaked into laptops, which the founder rejected. Laptop designs must stay identical.
- On phones everything is centred, by explicit founder request: "if we are going to make some central the whole thing needs to be central".
- Swipe rows, dropdowns, the sticky bottom bar, the hidden Renters' Rights Act strip, hidden hero ticks, the phone-sized hero crop, the simplified pricing and the shortened founder credentials were all requested or approved by the founder. See PHONE_LAYOUT.md.
