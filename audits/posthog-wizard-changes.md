# PostHog Installation Audit — T02/T03

## Wizard Outcome: Path C (manual fallback)

The PostHog wizard (`npx -y @posthog/wizard@latest`) failed because it requires an interactive TTY, which is not available in this environment. PostHog was installed manually instead.

## New Files Created

| File | Purpose |
|------|---------|
| `scripts/posthog-init.js` | PostHog JS snippet with API key and EU host inline |

## Modified Files

| File | Change |
|------|--------|
| `index.html` | Added `<script src="/scripts/posthog-init.js"></script>` before `</head>` |

## Not Created

- No `package.json` — not needed for static site
- No `.env` or `.env.local` — API key is inline (PostHog project keys are public, client-side)
- No build step introduced
- No framework SDK installed

## Verification

- API key `phc_mv6JqZDqX8urYDijU46DVVLKCdKZphpYnBjCtHWsk357` present in init script
- Host set to `https://eu.i.posthog.com` (EU region)
- Script loads client-side from `<script>` tag, no server-side dependency
- Only HTML page (index.html) has the script tag — site-wide coverage confirmed
