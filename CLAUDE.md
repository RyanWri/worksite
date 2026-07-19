# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a **SvelteKit portfolio/business website** deployed on Vercel. It's a modern, responsive web application built with component-based architecture, styled with Tailwind CSS, and featuring dark mode support.

## Tech Stack

- **Framework**: SvelteKit (full-stack Svelte framework)
- **Styling**: Tailwind CSS with dark mode (selector-based), PostCSS, autoprefixer
- **Deployment**: Vercel (Node.js 24.x runtime via `@sveltejs/adapter-vercel`)
- **Icons**: Iconify/svelte for icon rendering
- **Animation**: Neoconfetti for confetti effects
- **Database**: Vercel KV for caching/data storage

## Project Structure

```
src/
├── routes/                 # SvelteKit file-based routing (becomes URL paths)
│   ├── +page.svelte       # Home page
│   ├── +layout.svelte     # Root layout (shared across all pages)
│   ├── +page.server.js    # Data loading for home page
│   ├── about/             # /about route
│   ├── contact/           # /contact route
│   ├── projects/          # /projects route
│   ├── technologies/      # /technologies route
│   └── api/               # API endpoints
│       ├── about/
│       └── services/
├── lib/
│   ├── components/        # Reusable Svelte components
│   │   ├── Header.svelte
│   │   ├── Footer.svelte
│   │   ├── Card.svelte
│   │   ├── ProjectCard.svelte
│   │   ├── SkillsIconGrid.svelte
│   │   ├── ClientsBar.svelte
│   │   └── Project.svelte
│   └── data/              # Static JSON data files
│       ├── services.json
│       ├── projects.json
│       ├── skills.json
│       ├── about.json
│       ├── education.json
│       └── training.json
└── app.html              # Root HTML template
```

## Data Architecture

The site uses a **JSON-based static data model** with an API layer:

1. **Data Source**: JSON files in `src/lib/data/`
2. **API Endpoints**: `src/routes/api/*/+server.js` files that import and serve JSON data as REST endpoints
3. **Data Loading**: Page `.server.js` files use `fetch()` to call API endpoints and load data server-side
4. **Usage**: Data is passed to pages via the `load()` function return value

**Example flow**: `src/lib/data/services.json` → `src/routes/api/services/+server.js` → `src/routes/+page.server.js` fetches it → `src/routes/+page.svelte` uses `data.services`

## Common Commands

```bash
# Development
npm run dev              # Start dev server (runs on http://localhost:5173)
npm run dev -- --open   # Start dev server and open in browser

# Building
npm run build           # Build for production
npm run preview         # Preview production build locally

# Code Quality
npm run check          # Type-check with Svelte and TypeScript
npm run check:watch    # Type-check in watch mode (auto-rerun on changes)
```

## Key Development Concepts

### Routing (SvelteKit Conventions)
- Files in `src/routes/` define URL paths
- `+page.svelte` = page component
- `+page.server.js` = server-side data loading (runs server-side only)
- `+layout.svelte` = shared layout wrapping child pages
- `+server.js` = API endpoint handler
- `+error.svelte` = error page

### Styling
- Tailwind CSS utility classes for styling
- Dark mode via `darkMode: "selector"` (add `class="dark"` to element to enable)
- Custom Tailwind config in `tailwind.config.cjs` with custom animations (wiggle)
- PostCSS processes Tailwind before output

### Components
Shared Svelte components live in `src/lib/components/`. Components receive props for configuration and render reactively. Notable components:
- `Header.svelte` - Navigation and branding
- `Footer.svelte` - Footer links and info
- `ProjectCard.svelte` - Individual project display
- `SkillsIconGrid.svelte` - Skills visualization
- `ClientsBar.svelte` - Client logos/info

## Important Patterns

**Adding a New Page**:
1. Create `src/routes/page-name/+page.svelte`
2. If the page needs data, add `src/routes/page-name/+page.server.js` with a `load()` function
3. If you need server-side data loading from an API, call `fetch('/api/endpoint')` in the `load()` function

**Adding a New API Endpoint**:
1. Create `src/routes/api/endpoint-name/+server.js`
2. Export `GET` (or `POST`, etc.) function that returns `json(data)`
3. Import data from `src/lib/data/*.json`

**Adding a New Data File**:
1. Create JSON file in `src/lib/data/`
2. Create API endpoint in `src/routes/api/` to serve it
3. Use `fetch('/api/...')` in page `load()` functions to retrieve

## Deployment

Deployed on **Vercel** with these considerations:
- Production build outputs to `.vercel` directory
- `svelte.config.js` uses `@sveltejs/adapter-vercel` with Node.js 24.x runtime
- Environment variables go in `.env.local` (git-ignored)
- Vercel KV can be accessed via `@vercel/kv` package if needed

## Type Checking

Use `npm run check` before committing. This runs:
- `svelte-kit sync` - Generates types for routes
- `svelte-check` - Type checks all Svelte components and TypeScript files

Watch mode with `npm run check:watch` is useful during development.

## Rules for Claude

This is a solo portfolio site meant to load fast and stay easy to maintain. Three principles:

1. **Minimize footprint** — no new npm dependency without asking first; every package is bytes shipped to visitors. Prefer existing Tailwind utilities over new custom CSS in `app.css`.
2. **Readability** — clear naming and structure over clever abstractions. This codebase is small; keep it easy to scan.
3. **Clean and minimal, don't break things** — delete dead code rather than commenting it out. Verify `npm run build` still succeeds after structural changes.

Known cleanup deferred to a future PR (not now): `ProjectCard.svelte` and `ClientsBar.svelte` are currently unused, and a few images under `static/images/` (`svelte-welcome.png/.webp`) aren't referenced anywhere.
