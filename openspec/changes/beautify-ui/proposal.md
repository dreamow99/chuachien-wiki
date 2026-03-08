# Proposal: Beautify UI

## Why

The temple & pagoda search site is functional but visually plain. A more polished, distinctive design will improve trust, readability, and enjoyment for users looking up temples and pagodas—and better reflect the cultural context of the content.

## What Changes

- **Visual refresh**: Introduce a cohesive theme (typography, color, spacing) that feels calm and appropriate for cultural/religious places.
- **Improved layout**: Clearer hierarchy, comfortable reading width, and consistent spacing across search, results, detail, and map.
- **Refined components**: Buttons, inputs, cards, and links with consistent styling, hover/focus states, and optional light decorative elements (e.g., subtle patterns or accents).
- **Responsive polish**: Ensure the improved design works well on mobile and desktop without losing clarity or accessibility.

## Capabilities

### New Capabilities

- `visual-design`: The site SHALL present a cohesive, readable, and culturally appropriate visual design across all pages (search, results, detail, map), with consistent typography, colors, spacing, and component styling.

### Modified Capabilities

- (None — no change to functional requirements for temple-search, temple-detail, or nearby-temples.)

## Impact

- **Frontend**: Styles (CSS/global theme), layout components, and possibly small markup changes in existing Astro pages.
- **No API or data changes**: Purely presentational.
- **Dependencies**: Optional (e.g., a font from a CDN or a small CSS approach); no new runtime framework required.
