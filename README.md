# Tanmay-Somani.github.io

Personal portfolio: <https://tanmay-somani.github.io>

Static HTML — no build step, no framework. All pages carry their CSS and JS
inline on purpose.

## Pages

| File | Purpose |
| --- | --- |
| `index.html` | Main single-page portfolio (book-style project viewer, falls back to a carousel on small screens) |
| `404.html` | Custom 404 page (GitHub Pages serves it automatically) |
| `sitemap.html` | Human-readable sitemap / directory of everything on the site |
| `AIMTechnocrats.html` | Legacy site for AIM Technocrats |

## Structure

```
assets/
  data/projects.json      # single source of truth for the project list
  fonts/                  # self-hosted woff2 + fonts.css (@font-face rules)
  images/                 # avatar, icons, OG share card, project screenshots (demo/)
  vendor/fontawesome/     # FA 6.7.2 css + subsetted webfonts (~8 KB total)
  Tanmay_Somani_Resume.pdf
sw.js                     # service worker: network-first HTML, cache-first assets
manifest.webmanifest      # PWA install metadata
robots.txt / sitemap.xml  # crawlers
```

## Adding a project

1. Edit **`assets/data/projects.json`** — that's it. Both the homepage
   (carousel + flip book) and `sitemap.html` render from this file.
   Screenshot images go in `assets/images/demo/` as WebP.
2. If screenshots are PNG/JPG, convert first:

   ```powershell
   ffmpeg -i input.png -vf "scale=800:-1" -c:v libwebp -quality 82 output.webp
   ```

3. Bump the `<lastmod>` dates in `sitemap.xml`.

## Theme system

Three themes (`light`, `dark`, `funky`) stored in `localStorage` under
`ts-theme`. A tiny script in each page's `<head>` applies the saved theme to
`<html data-theme="…">` before first paint to avoid a flash of wrong theme.

## Analytics & consent

Google Analytics (and Clarity on `sitemap.html`) load **only after** the
visitor accepts the consent banner. The choice persists in `localStorage`
under `ts-cookie`; the footer "Cookie settings" link reopens the prompt.

## Image pipeline reference

```powershell
# avatar (large source photo -> small square-ish webp)
ffmpeg -i test.PNG -vf "crop='min(iw,ih)':'min(iw,ih)',scale=380:-1" -c:v libwebp -quality 84 avatar.webp

# OG share card quantization (1200x630 png)
ffmpeg -i portfolio-thumbnail.png -vf "palettegen=max_colors=256" pal.png
ffmpeg -i portfolio-thumbnail.png -i pal.png -lavfi "paletteuse=dither=sierra2_4a" out.png

# Font Awesome subset (used glyphs only)
python -m fontTools.subset fa-solid-900.woff2 --unicodes=U+... --flavor=woff2 --layout-features= --no-hinting --output-file=fa-solid-900.subset.woff2
```

## Deploying

Push to `main` — GitHub Pages publishes automatically. Note:
`.github/workflows/auto-push.yml` auto-commits working-tree changes on every
push event.
