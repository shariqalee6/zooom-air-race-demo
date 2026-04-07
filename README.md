# Zooom Air Race Demo

A small web application for exploring international air race events through a synchronized map and list view. The goal of the project is to keep the implementation clear, maintainable, and close to the assignment brief while still reflecting how this feature could evolve in a real content-driven product.

## Setup

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

For a production build:

```bash
npm run build
npm run start
```

## Project Overview

- Interactive map with one marker per event
- Structured event list shown beside the map
- Hover sync between list items and markers
- Click selection that recenters the map on the chosen event
- Marker popup with title and description
- Category filter for `Championship` and `Challenger`
- Text filtering across title, description, address, and country
- Loading, error, and empty states
- A scrollable event panel so larger datasets remain usable without pushing the map out of view

## Approach

The task only required a modern frontend framework, so I chose `Next.js` because it provides a solid React foundation, simple routing, a clean project structure, and the option to add server-side capabilities later without changing the overall architecture. For this assignment, it lets the solution stay small while still feeling close to a real application setup.

The implementation is intentionally pragmatic:

- `React Leaflet` is used for map rendering because it is lightweight, reliable, and easy to integrate into a React-based UI.
- Event data is served through a small local API route instead of being hardcoded directly inside the page, which keeps the UI separate from the data source and makes a future CMS or backend integration straightforward.
- Shared types in `src/lib/types.ts` keep the data model explicit and extendable.
- Filtering logic lives in a dedicated utility so UI rendering and business logic stay separate.
- Selection and hover state are managed in one place at the page level because both the list and the map depend on it. This keeps synchronization simple without introducing unnecessary global state.

## Project Structure

- `src/app` contains the page, layout, global styles, and API route
- `src/components` contains presentational UI pieces such as the map, list, cards, and filters
- `src/hooks` contains client-side data fetching logic
- `src/lib` contains shared types, mock content, and filtering helpers

## Scope

This solution intentionally stays close to the assignment brief:

- mocked event data instead of a full backend
- simple but clean styling
- focused interaction logic
- small and maintainable component boundaries

The goal was to make sensible technical choices without turning the task into a larger architecture exercise.