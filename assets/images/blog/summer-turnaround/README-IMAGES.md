# Image Placeholders — Your First Summer Turnaround

All images are live. PNG format, referenced in the blog post HTML.

| Filename | Dimensions | Alt text | Location on page |
|----------|-----------|----------|-----------------|
| `hero.png` | 1200 × 630 px | Student terraced houses on a UK street in summer | Top of article, below byline |
| `compliance-checklist.png` | 800 × 450 px | Gas safety certificate and EICR paperwork laid out on a desk | After compliance certificates section |
| `video-poster.png` | 1280 × 720 px | HOMEi PM inspection flow on a smartphone screen | Video poster frame (shown before play) |
| `homei-dashboard.png` | 800 × 450 px | HOMEi PM property management dashboard overview | Before the Get Involved section |

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
