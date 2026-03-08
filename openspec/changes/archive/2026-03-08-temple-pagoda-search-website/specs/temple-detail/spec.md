# Spec: Temple Detail

## ADDED Requirements

### Requirement: Detail page for a single temple or pagoda

The system SHALL provide a dedicated detail page for each temple or pagoda, reachable via a stable URL (e.g., by id or slug).

#### Scenario: View detail by URL

- **WHEN** the user opens the detail URL for a temple or pagoda (e.g., /temples/:id or /place/:slug)
- **THEN** the system SHALL display the full detail view for that place

#### Scenario: Unknown or invalid id

- **WHEN** the user opens a detail URL with an unknown or invalid id
- **THEN** the system SHALL display a 404 or "not found" state

### Requirement: Display core information

The detail page SHALL display at least: name, address, and description (if available). It MAY display opening hours, contact information, and images.

#### Scenario: Core fields displayed

- **WHEN** the user views a temple or pagoda detail page
- **THEN** the system SHALL show name, address, and description (when present in the data)

#### Scenario: Optional fields when available

- **WHEN** the data includes opening hours, contact, or images
- **THEN** the system SHALL display those fields on the detail page in a structured way

#### Scenario: Optional fields absent

- **WHEN** the data does not include opening hours, contact, or images
- **THEN** the system SHALL not show those sections or SHALL show a neutral state (e.g., "Not provided") without errors

### Requirement: Link back to search or list

The detail page SHALL provide a way to return to the search or list view (e.g., back button or "Search again" link).

#### Scenario: Navigate back to search

- **WHEN** the user clicks the back or "Search" / "List" action on the detail page
- **THEN** the system SHALL navigate to the search or list view (and MAY preserve previous search state if applicable)
