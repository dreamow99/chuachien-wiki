# Spec: Visual Design

## ADDED Requirements

### Requirement: Cohesive theme

The site SHALL use a single visual theme (colors, typography, spacing) applied consistently across the search page, result list, detail pages, map, and 404.

#### Scenario: Theme applied on search page

- **WHEN** the user views the search or home page
- **THEN** the page SHALL use the same theme variables (e.g., primary color, font, spacing) as the rest of the site

#### Scenario: Theme applied on detail page

- **WHEN** the user views a temple or pagoda detail page
- **THEN** the page SHALL use the same theme as the search and list views (no jarring style changes)

### Requirement: Readable typography

The site SHALL use readable typography with an appropriate base size, line height, and maximum line length for text content.

#### Scenario: Comfortable reading

- **WHEN** the user reads body text on any page
- **THEN** the text SHALL have a readable line length (e.g., constrained width where appropriate) and sufficient line height

#### Scenario: Clear hierarchy

- **WHEN** the user scans a page
- **THEN** headings and body text SHALL be visually distinct (size or weight) so hierarchy is clear

### Requirement: Consistent component styling

Buttons, form inputs, links, and result cards SHALL have consistent styling and visible hover and focus states.

#### Scenario: Interactive elements have hover state

- **WHEN** the user hovers over a button, link, or clickable result item
- **THEN** the element SHALL show a visible hover state (e.g., color or underline change)

#### Scenario: Focus visible for keyboard users

- **WHEN** the user focuses an interactive element via keyboard (Tab)
- **THEN** the element SHALL show a visible focus indicator (e.g., outline or ring) so the user can see where focus is

### Requirement: Accessible contrast

Text and interactive elements SHALL meet minimum contrast requirements so content is readable.

#### Scenario: Text contrast

- **WHEN** the user views any page in normal lighting
- **THEN** text SHALL have sufficient contrast against its background (e.g., WCAG AA or equivalent)

#### Scenario: Link and button contrast

- **WHEN** the user views links or buttons
- **THEN** they SHALL be distinguishable from body text and have sufficient contrast against the background

### Requirement: Responsive layout

The improved design SHALL work on both mobile and desktop without breaking layout or hiding critical content.

#### Scenario: Usable on narrow viewport

- **WHEN** the user views the site on a narrow viewport (e.g., phone)
- **THEN** content SHALL remain readable and interactive (e.g., no horizontal scroll for main content, touch-friendly targets where appropriate)

#### Scenario: Usable on wide viewport

- **WHEN** the user views the site on a wide viewport (e.g., desktop)
- **THEN** content SHALL not stretch excessively (e.g., max-width or comfortable reading width where appropriate)
