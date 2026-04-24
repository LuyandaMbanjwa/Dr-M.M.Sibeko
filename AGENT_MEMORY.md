# Agent Memory - Dr. M.M. Sibeko Digital Card

## Project Overview
Building a professional digital business card for Dr. M.M. Sibeko, a medical practitioner.

## Decisions Made
- **Aesthetic**: Switched back to professional "Medical Blue" theme (Recipe 8 variation).
- **Color Palette**: Dark medical blues (#0369a1, #0c4a6e) and clean whites.
- **Typography**: Retained Inter and Georgia pairings for authority.
- **Image**: Using user-uploaded `/Dr Sibeko.jpg` as the primary profile photo.
- **Location**: Added an embedded Google Maps iframe for the practice address.
- **Animations**: Using `motion/react` for entrance animations on load.

## Task Checklist
- [x] Update metadata.json
- [x] Configure theme and fonts in index.css
- [x] Implement core UI in App.tsx
- [x] Implement full-screen mobile-optimized layout
- [x] Update profile photo to user upload
- [x] Integrate Google Maps (Standard Embed - No API key required)
- [x] Add dynamic VCard download functionality
- [x] Verify final address (Dundee 3000)
- [x] Fix deployment image issue by switching to imported assets in /src/assets for proper bundling and hashing.
- [x] Verify build and linting

## Known Issues
- Standard Google Maps embed is non-interactive (no panning) without a key, but providing a direct "Get Directions" link solves this for users.
- VCard download is a client-side generated blob; works on most modern mobile browsers.
