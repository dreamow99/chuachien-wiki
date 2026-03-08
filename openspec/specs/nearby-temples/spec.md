# Spec: Nearby Temples

## ADDED Requirements

### Requirement: Discover temples and pagodas near the user's location

The system SHALL support finding temples and pagodas near the user's current location ("near me") using browser geolocation when the user grants permission.

#### Scenario: User allows location and requests "near me"

- **WHEN** the user grants location permission and triggers "near me" (or equivalent) discovery
- **THEN** the system SHALL use the user's coordinates to find temples and pagodas within a defined radius or limit and SHALL display them (e.g., list and/or map) sorted by distance

#### Scenario: User denies location

- **WHEN** the user denies location permission or location is unavailable
- **THEN** the system SHALL show a clear message and SHALL offer an alternative (e.g., search by address or city) instead of failing silently

### Requirement: Discover temples and pagodas near a chosen place

The system SHALL allow users to find temples and pagodas near a chosen place (e.g., address or city) by resolving the place to coordinates and then finding nearby results.

#### Scenario: Search by address or city

- **WHEN** the user enters an address or city and requests "nearby" or "near this place"
- **THEN** the system SHALL resolve the place to coordinates (e.g., via geocoding), SHALL find temples and pagodas near those coordinates, and SHALL display them (e.g., list and/or map) with distance when available

#### Scenario: Geocoding fails or returns no results

- **WHEN** the entered address or city cannot be resolved to coordinates
- **THEN** the system SHALL display an error or message and SHALL suggest the user try a different query or use "near me" if available

### Requirement: Display distance when location is known

When the user's location or a chosen place is known, the system SHALL display distance (e.g., in km or miles) for each result when showing nearby temples and pagodas.

#### Scenario: Distance shown in list

- **WHEN** nearby results are displayed in list form and location context is available
- **THEN** each result SHALL show its distance from that location (e.g., "2.3 km away")

#### Scenario: Order by distance

- **WHEN** nearby results are displayed
- **THEN** the system SHALL order results by distance (closest first) unless the user explicitly chooses another sort order
