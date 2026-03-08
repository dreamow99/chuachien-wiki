# Design: Beautify UI

## Context

The temple & pagoda search site (chuachien-wiki) is built with Astro; pages use inline and scoped styles with a minimal system palette. The change is purely presentational: improve the visual design (typography, colors, spacing, components) so the site feels cohesive, readable, and appropriate for cultural/religious content, without altering behavior or data.

## Goals / Non-Goals

**Goals:**

- Define and apply a single visual theme (colors, type, spacing) across the app.
- Improve layout hierarchy and reading comfort (line length, spacing, clear sections).
- Style form controls, buttons, cards, and links consistently with visible hover/focus states.
- Keep the design responsive and accessible (contrast, focus indicators, semantic structure).
- Optional: subtle cultural or atmospheric touches (e.g., restrained accent, pattern, or font choice) that fit temple/pagoda content.

**Non-Goals:**

- No new features or spec changes for search, detail, or nearby.
- No redesign of information architecture or navigation flow.
- No new dependencies beyond fonts or lightweight CSS (no design system or component library unless trivial).

## Decisions

### 1. Theme implementation: CSS custom properties in Layout

- **Choice**: Centralize theme in the root layout via CSS custom properties (e.g., `--color-primary`, `--font-sans`, `--space-unit`). Pages and components reference these variables so one place controls the look.
- **Rationale**: No new build step or framework; easy to tune and keep consistent. Fits existing Astro + scoped styles.
- **Alternatives**: Tailwind/utility CSS — adds config and class discipline; design tokens in JS — unnecessary for a static site.

### 2. Typography

- **Choice**: Use a clear, readable sans (or optional serif for headings) from a CDN (e.g., Google Fonts). Set a comfortable base size (e.g., 16px), line-height (~1.5–1.6), and max-width for text blocks (~65–75ch).
- **Rationale**: Readability and a slightly more distinctive look than system-only fonts; CDN keeps setup simple.
- **Alternatives**: System font stack only — simpler but less distinctive; local font files — more control, more setup.

### 3. Color palette

- **Choice**: A small palette: neutral background and text, one primary (e.g., deep red, gold, or teal) for links and buttons, and a muted secondary for borders and secondary text. Ensure sufficient contrast (WCAG AA).
- **Rationale**: Calm, appropriate for cultural content; primary can echo traditional or spiritual associations without being loud.
- **Alternatives**: Many accent colors — risk of clutter; dark-only theme — defer to a future change.

### 4. Components (buttons, inputs, cards)

- **Choice**: Reuse existing elements; restyle with the shared variables: rounded corners, consistent padding, clear border or shadow for cards, visible `:hover` and `:focus-visible` states.
- **Rationale**: Improves polish without introducing new component abstractions; keeps scope manageable.
- **Alternatives**: New component library — out of scope; no component styling — would not meet “more beautiful” goal.

### 5. Optional decorative elements

- **Choice**: Allow a single subtle touch (e.g., a very light background pattern, a thin accent line, or a simple icon style) if it fits the theme. Avoid heavy imagery or animation.
- **Rationale**: Can add character without distracting from content.
- **Alternatives**: No decoration — acceptable; heavy illustration — out of scope.

## Risks / Trade-offs

| Risk | Mitigation |
|------|------------|
| Font or CDN adds latency | Use `preconnect` / `font-display: swap`; consider system fallback if needed. |
| Over-styling hurts accessibility | Keep contrast and focus indicators; test with keyboard and screen reader. |
| Inconsistent application | Document variables in one place; apply to index, detail, and 404. |

## Migration Plan

- Apply theme variables and updated styles in the existing Layout and pages.
- No data or URL changes; no feature flags. Deploy as a visual-only update; rollback = revert CSS/markup.

## Open Questions

- Exact primary color (e.g., deep red vs. gold vs. teal) and optional serif for headings can be decided during implementation based on a quick mock or preference.
