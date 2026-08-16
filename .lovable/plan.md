# Scale Down the Level Select Hero Photo

## Current sizing (verified in `public/levelselect/index.html`)

The hero is a CSS grid. Three rules make the portrait as large as it is:

- Line 59: `.hero-grid{max-width:1440px;margin:0 auto;display:grid;grid-template-columns:1fr}`
- Line 76: `.hero-media{position:relative;background:#0b0708;min-height:330px}` — mobile height
- Line 77: `.hero-media img{width:100%;height:100%;object-fit:cover;object-position:50% 8%}`
- Line 237 (desktop, min-width:1024px): `.hero-grid{grid-template-columns:45% 55%}` — the photo column takes **55% of a 1440px hero**, i.e. up to ~790px wide
- Line 239 (desktop): `.hero-media{min-height:520px}`

So on desktop the image is a full-bleed 55%-wide, 520px-tall block with no margins; on mobile it is a full-width 330px-tall block.

## Proposed desktop sizing (>=1024px, incl. 1200px+)

- Change the column split from `45% 55%` to `55% 45%` so the copy gets more room and the media column narrows.
- Cap the image itself instead of letting it fill the column:
  - `.hero-media{min-height:auto;background:transparent;padding:48px 34px 48px 0;display:flex;align-items:center;justify-content:flex-end}`
  - `.hero-media img{width:100%;max-width:clamp(300px,26vw,420px);height:auto;aspect-ratio:4/5;object-fit:cover;border-radius:4px}`

Result: rendered photo goes from roughly 790x520 to roughly 400x500 in a padded column — about **33% smaller in visual width/area footprint**, with clear whitespace around it, still right-aligned opposite the LEVEL SELECT headline.

## Proposed tablet / small desktop sizing (700–1023px)

Keep the single-column stack but constrain the image:
- `.hero-media img{max-width:min(78%,420px)}` centered, with `padding:0 28px 40px`, so it never crowds the copy and keeps comfortable margins.

## Proposed mobile sizing (<700px)

- `.hero-media{min-height:auto;padding:0 20px 32px;display:flex;justify-content:center}`
- `.hero-media img{width:100%;max-width:min(72vw,320px);height:auto;aspect-ratio:4/5}`

That takes the portrait from a full-width 330px-tall band to roughly 300x375 centered — about **25–28% smaller**, cleanly spaced above the next section.

## Badge

`.badge` is absolutely positioned inside `.hero-media` (desktop offsets `right:26px;top:80px`). Since the media box now has padding, the badge offsets get a small matching nudge so it stays pinned to the photo's corner — same badge, same text, same styling.

## Files affected

- `public/levelselect/index.html` — only the CSS lines noted above (59, 76–77, 237–239) plus one small tablet/mobile media-query addition. No markup, no base64, no reformatting.

## Confirmation

- The exact existing portrait `<img>` and its base64 source stay untouched.
- The 1,000+ badge remains, only repositioned to hug the resized photo.
- No audio code changes: genres array, audioUrl mappings, player JS, play/pause, progress bars, playlists, `/audio/levelselect/` all untouched.
- No other section, nav, footer, typography, color, or card design changes.
- Fully responsive via `clamp()`/`max-width`, three breakpoints (<700, 700–1023, 1024+).
- Targeted CSS-only diff, roughly 8–10 lines changed.
