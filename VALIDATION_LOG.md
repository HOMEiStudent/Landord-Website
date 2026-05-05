# Phase 1.5 — Validation Log

Each task records: validation commands run, output excerpt, pass/fail.

---

## T01 — Pre-wizard snapshot

**Validation gate:** Working tree clean, all Phase 1 files present.

**Commands run:**
```
git status  → nothing to commit, working tree clean
ls -la      → index.html, css/, js/, images/, audits/ all present
find . -name "*.html"  → 2 files (index.html + legacy src/.../index.html)
```

**Result:** PASS — no code changes required.

## T02 — Install PostHog

**Validation gate:** PostHog init script exists with correct API key and host.

**Wizard outcome:** Path C — wizard requires interactive TTY, manual install performed.
**Files created:** `scripts/posthog-init.js`
**Files modified:** `index.html` (added script tag before `</head>`)

**Result:** PASS

## T03 — Review and complete PostHog installation

**Validation gate:** PostHog loads on all HTML pages, API key correct, no build step, no .env.

**Commands run:**
```
grep -c 'posthog' index.html  → 1
grep 'phc_mv6JqZDqX8urYDijU46DVVLKCdKZphpYnBjCtHWsk357' scripts/posthog-init.js  → present
grep 'eu.i.posthog.com' scripts/posthog-init.js  → present
for f in *.html; do grep -c "posthog" "$f"; done  → index.html: 1 (only HTML page)
ls .env 2>/dev/null  → not found (correct)
ls package.json 2>/dev/null  → not found (correct)
```

**Audit output:** `audits/posthog-wizard-changes.md`

**Result:** PASS

