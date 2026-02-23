# Images Directory

Place your image files here. The site will automatically detect and use them.

## Required Images

| File | Size | Purpose |
|------|------|---------|
| `logo.png` | ~200px wide, transparent background | Navbar logo (dark backgrounds behind it are light, so use a dark/coloured logo) |
| `logo-light.png` | ~200px wide, transparent background | Footer logo (dark background, so use a white/light version) |
| `favicon-32x32.png` | 32x32 px | Browser tab icon |
| `favicon-16x16.png` | 16x16 px | Browser tab icon (small) |
| `apple-touch-icon.png` | 180x180 px | iOS home screen icon |
| `og-image.png` | 1200x630 px | Social sharing preview (Facebook, LinkedIn, etc.) |

## How It Works

- **Logo**: The site tries to load `images/logo.png`. If the file exists, it replaces the "H" fallback icon automatically. No code changes needed.
- **Footer logo**: Same as above but uses `images/logo-light.png` for the dark footer background.
- **Favicon**: Shown in the browser tab. If the files don't exist, the browser uses its default icon.
- **OG image**: Shown when the site URL is shared on social media. If missing, platforms show a generic preview.

## Tips

- Use PNG format with transparent backgrounds for logos.
- Keep file sizes small (under 200KB for logos, under 500KB for OG image).
- After adding files, commit and push to see them on the live site.
