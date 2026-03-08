# Design: Temple & Pagoda Search Website

## Context

This is a new greenfield web application. Users need to search and look up information about temples and pagodas, including finding places nearby. The system must support search by name/location/keywords, “near me” and place-based discovery, and detailed pages per temple/pagoda. There are no existing codebases or specs to integrate; the proposal defines three capabilities: temple-search, temple-detail, and nearby-temples.

## Goals / Non-Goals

**Goals:**

- Deliver a working website where users can search temples/pagodas, view details, and find nearby places.
- Support text search (name, area, keywords) and location-based discovery (current location or chosen place).
- Provide a responsive UI (desktop and mobile).
- Use a simple, maintainable stack that can be extended later (e.g., more data, auth, CMS).

**Non-Goals:**

- User accounts, reviews, or bookings (out of scope for v1).
- Real-time or community-edited content; initial focus is read-only lookup.
- Native mobile apps; web-only for now.

## Decisions

### 1. Frontend stack: Static site + client-side logic

- **Choice**: Static site generator (e.g., Astro, Next.js static export, or plain HTML/JS) with client-side search and optional map.
- **Rationale**: Fits read-only lookup, simple deployment (e.g., GitHub Pages, Netlify), and good performance. No server required for v1 if data is embedded or loaded from static JSON.
- **Alternatives**: Full SSR framework (e.g., Next.js with API routes) for dynamic search—defer until we need server-side search or large datasets.

### 2. Data source: Static JSON + optional later API

- **Choice**: Start with a static JSON file (or multiple files) of temple/pagoda records; structure supports search and filtering on the client. Option to replace with a small API or CMS later.
- **Rationale**: No backend or database needed for v1; fast to ship and easy to version with the repo.
- **Alternatives**: Backend API + DB from day one—adds complexity; headless CMS—useful later if non-developers need to edit content.

### 3. Data model for a temple/pagoda

- **Choice**: Each record has at least: `id`, `name`, `address`, `latitude`, `longitude`, `description` (optional), `openingHours` (optional), `contact` (optional), `images` (optional array of URLs). Type or tag (e.g., temple vs pagoda) for filtering.
- **Rationale**: Enough for list view, detail page, and distance/nearby computation; optional fields allow incremental enrichment.

### 4. “Nearby” and location search

- **Choice**: Use browser Geolocation API for “near me”; for “search by place,” use a geocoding service (e.g., Nominatim or a provider API) to get coordinates, then compute distances client-side or via a thin server endpoint. Sort/filter by distance using lat/lng in the data.
- **Rationale**: Keeps v1 simple; no backend required if we do distance math in the client for a moderate number of points.
- **Alternatives**: Backend geo queries (e.g., PostGIS)—introduce when dataset or query complexity grows.

### 5. Map display

- **Choice**: Optional map view (e.g., Leaflet or Mapbox) to show results or “nearby” pins; not required for MVP but recommended for better UX.
- **Rationale**: Map improves discovery; Leaflet is lightweight and works with OSM tiles without keys for basic use.
- **Alternatives**: Map-only UI—list view is still important for accessibility and quick scan; no map—reduces clarity for “nearby.”

### 6. Hosting and deployment

- **Choice**: Deploy as static assets to a host like GitHub Pages, Netlify, or Vercel; environment only needs to serve files and optional redirects/headers.
- **Rationale**: Matches static frontend; simple CI (e.g., build on push) and no server ops.

## Risks / Trade-offs

| Risk | Mitigation |
|------|------------|
| Large dataset makes client-side search slow | Paginate or limit results; move to server-side search/API when needed. |
| Geolocation denied or inaccurate | Fall back to manual city/address search; show message when location unavailable. |
| Geocoding rate limits or cost | Use free tier (e.g., Nominatim) with caching; consider self-hosted or alternative later. |
| Stale or incomplete data | Document data format; plan for future CMS or import pipeline. |
| No auth → no protected content | Acceptable for v1; add auth later if needed for editors or premium data. |

## Migration Plan

- **Initial deploy**: Create repo, add static data file(s), implement search + detail + nearby (and optional map), then deploy to chosen static host.
- **Rollback**: Revert to previous build or disable feature via config if needed; static deploys are easy to roll back.
- **Future**: If moving to API/CMS, introduce a data layer abstraction so the frontend can switch from static JSON to API without rewriting all components.

## Open Questions

- Exact map provider and whether to use an API key (e.g., Mapbox) for production or stay on OSM/Leaflet without key.
- Source and maintenance of initial temple/pagoda data (manual entry, import from existing dataset, or partner data).
- Whether to support multiple languages/locales in v1 (e.g., Vietnamese/English for “Chùa Chiền” context).
