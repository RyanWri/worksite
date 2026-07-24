# worksite

Ran Wright's personal portfolio site — a SvelteKit single-page site deployed on Vercel.

## Developing

Install dependencies, then start the dev server:

```bash
npm install
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

```bash
npm run build
npm run preview   # preview the production build locally
```

## Type checking

```bash
npm run check
npm run check:watch   # watch mode
```

## Deployment

The site deploys to [Vercel](https://vercel.com) via `@sveltejs/adapter-vercel` (configured in `svelte.config.js`, targeting the Node.js 24.x runtime). To connect this repository to Vercel for the first time:

1. In the Vercel dashboard, import this GitHub repository as a new project (or run `vercel link` from the repo root).
2. Vercel auto-detects the SvelteKit framework and build settings — no extra configuration is required.
3. Every push to `master` deploys to production; other branches get preview deployments.
