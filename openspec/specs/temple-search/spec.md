# Spec: Temple Search

## ADDED Requirements

### Requirement: Search by text

The system SHALL allow users to search temples and pagodas by name, area, or keywords. Results SHALL be displayed as a list and MAY be displayed on a map.

#### Scenario: Search by name

- **WHEN** the user enters a temple or pagoda name (or partial name) in the search input and submits
- **THEN** the system SHALL return all matching records and display them in a list (and optionally on a map)

#### Scenario: Search by area or location keyword

- **WHEN** the user enters an area name, city, or location keyword and submits
- **THEN** the system SHALL return temples and pagodas associated with that area and display them in a list (and optionally on a map)

#### Scenario: Search by general keyword

- **WHEN** the user enters a keyword that may match name, description, or other text fields and submits
- **THEN** the system SHALL return matching temples and pagodas and display them in a list (and optionally on a map)

#### Scenario: No results

- **WHEN** the user's search matches no temples or pagodas
- **THEN** the system SHALL display an empty state or message indicating no results were found

### Requirement: Filter results

The system SHALL support filtering search results (e.g., by type such as temple vs pagoda, or by distance when location is available).

#### Scenario: Filter by type

- **WHEN** the user applies a filter for type (e.g., temple only or pagoda only)
- **THEN** the system SHALL show only results that match the selected type

#### Scenario: Clear filters

- **WHEN** the user clears applied filters
- **THEN** the system SHALL show all results that match the current search query without the filter

### Requirement: Result list display

The system SHALL display each search result in the list with at least: name, address (or locality), and a link or action to view details.

#### Scenario: Result item links to detail

- **WHEN** the user clicks a result item (or its "View details" action)
- **THEN** the system SHALL navigate to the detail page for that temple or pagoda
