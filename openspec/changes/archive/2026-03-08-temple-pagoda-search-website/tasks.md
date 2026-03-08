# Tasks: Temple & Pagoda Search Website

## 1. Project setup

- [x] 1.1 Initialize frontend project (e.g., Astro, Next.js static, or HTML/JS) with build and dev script
- [x] 1.2 Add dependency for map library (e.g., Leaflet) if map view is in scope
- [x] 1.3 Configure static export and base path for deployment target (e.g., GitHub Pages)

## 2. Data layer

- [x] 2.1 Define and document the temple/pagoda data shape (id, name, address, lat/lng, description, openingHours, contact, images, type)
- [x] 2.2 Create static JSON data file(s) and seed with initial temple/pagoda records
- [x] 2.3 Implement client-side loader/API to load and optionally cache the data for search and detail

## 3. Temple search (temple-search spec)

- [x] 3.1 Implement text search (name, area, keywords) over the loaded data and return matching results
- [x] 3.2 Add search UI: input, submit, and result list with name, address, and link to detail
- [x] 3.3 Add filter by type (temple vs pagoda) and clear filters; show empty state when no results
- [x] 3.4 Ensure result list items link to the correct detail page URL (by id or slug)

## 4. Temple detail (temple-detail spec)

- [x] 4.1 Add detail route/page (e.g., /temples/:id or /place/:slug) and resolve record by id/slug
- [x] 4.2 Render core fields: name, address, description; optionally opening hours, contact, images
- [x] 4.3 Handle unknown id with 404 or "not found" state
- [x] 4.4 Add back / search link or button to return to search or list view

## 5. Nearby temples (nearby-temples spec)

- [x] 5.1 Implement "near me" using Geolocation API; on success, compute distances and sort results
- [x] 5.2 Handle location denial or error with message and fallback (e.g., "Search by address" or city)
- [x] 5.3 Add UI to search by address/city; integrate geocoding to get coordinates for chosen place
- [x] 5.4 For nearby results, display distance per item and order list by distance (closest first)
- [x] 5.5 Handle geocoding failure with clear message and suggestion to try another query or "near me"

## 6. Map view (optional)

- [x] 6.1 Add optional map view showing search or nearby results as pins
- [x] 6.2 Wire map to same data as list; clicking a pin or list item updates selection/detail as needed

## 7. Polish and deployment

- [x] 7.1 Ensure layout and typography are responsive (desktop and mobile)
- [x] 7.2 Add basic accessibility (focus, labels, semantic HTML) for search and detail
- [x] 7.3 Configure deployment (e.g., GitHub Pages, Netlify, or Vercel) and verify production build
