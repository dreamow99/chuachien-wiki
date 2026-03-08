# Chùa Chiền Wiki

Website to search and look up information about nearby temples and pagodas (chùa, đền).

## Features

- **Search** by name, area, or keywords
- **Near me** — find temples/pagodas near your location (browser geolocation)
- **Search by place** — enter an address or city to find nearby places
- **Detail pages** — name, address, description, opening hours, contact
- **Map view** — results shown on a map (Leaflet + OpenStreetMap)

## Tech

- [Astro](https://astro.build) (static site)
- Data: `public/data/temples.json`
- Map: Leaflet, OSM tiles
- Geocoding: Nominatim (OpenStreetMap)

## Commands

| Command           | Action                          |
| ----------------- | ------------------------------- |
| `npm install`     | Install dependencies            |
| `npm run dev`     | Dev server at `localhost:4321`  |
| `npm run build`   | Production build to `./dist/`   |
| `npm run preview` | Preview the production build   |

## Deployment

Static output is in `dist/` after `npm run build`.

### GitHub Pages

1. In repo **Settings → Pages**, set source to **GitHub Actions** (or push `dist/` to a `gh-pages` branch).
2. If the site is at `https://<user>.github.io/<repo>/`, set in `astro.config.mjs`:
   ```js
   base: '/<repo>/',
   site: 'https://<user>.github.io/<repo>/',
   ```
3. Build: `npm run build` — deploy the `dist/` folder.

### Netlify

- **Build command:** `npm run build`
- **Publish directory:** `dist`
- Optional: add `netlify.toml` (see below).

### Vercel

- Connect the repo; Vercel detects Astro. Build command `npm run build`, output `dist`.

### netlify.toml (optional)

```toml
[build]
  command = "npm run build"
  publish = "dist"
```
