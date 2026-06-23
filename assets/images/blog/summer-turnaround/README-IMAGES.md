# Image Placeholders — Your First Summer Turnaround

Replace each `.svg` placeholder with a real `.webp` photo, then update the `<img src>` attribute
in `blog/summer-turnaround-renters-rights-act-2026.html` from `.svg` to `.webp`.
Update the OG/Twitter meta tags and Article JSON-LD `"image"` property in the same file.

| Filename | Dimensions | Alt text | Location on page |
|----------|-----------|----------|-----------------|
| `hero.webp` | 1200 × 630 px | Student terraced houses on a UK street in summer | Top of article, below byline |
| `compliance-checklist.webp` | 800 × 450 px | Gas safety certificate and EICR paperwork laid out on a desk | After compliance certificates section |
| `video-poster.webp` | 1280 × 720 px | HOMEi PM inspection flow on a smartphone screen | Video poster frame (shown before play) |
| `homei-dashboard.webp` | 800 × 450 px | HOMEi PM property management dashboard overview | Before the Get Involved section |

## Notes

- Hero image: `loading="eager"`, `fetchpriority="high"`. 1200×630 doubles as LinkedIn share image.
- Inline images: `loading="lazy"`. Compress to under 150 KB each.
- Video poster: 1280×720. Use a screenshot of the best frame from inspection-demo.mp4.
- Free WebP converter: squoosh.app
- All images: WebP format preferred. If only JPG/PNG available, change the `src` extension to match.

## Video file

Place `inspection-demo.mp4` at `/assets/videos/inspection-demo.mp4`.

Recommended specs:
- Codec: H.264, MP4 container
- Resolution: 720p (1280×720)
- Target size: under 25 MB
- Compress with HandBrake (free) if needed

GitHub has a 100 MB file size limit. For files over 100 MB, use Git LFS:
```
git lfs track "*.mp4"
git add .gitattributes
git add assets/videos/inspection-demo.mp4
```
