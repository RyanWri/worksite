# Site Review — 2026-07-24

A snapshot rating of the homepage as it stands after this batch of work (Vercel connect, trusted-by slider, pnpm migration, Medium link, lint/format), plus a concrete backlog for the next iteration.

## Vision Readiness: 3/5

The site has a clear, single narrative (who Ran is, proof of work, how to get in touch) and a working conversion path (`mailto:` CTA, LinkedIn, GitHub, Medium). The tech foundation is now solid: connected to Vercel, pinned dependencies, linting/formatting in place.

What holds it back from a higher score is the depth of "proof of work":

- Both "Featured Work" project links point to LinkedIn post URLs, not dedicated case studies or live projects.
- `src/lib/data/projects.json` (the "trusted by" data source) has placeholder `purpose` text ("Purpose A/B/C") and an identical `technologies` icon for all 8 entries — unused in the UI today, but it's dead weight in the data model that violates this repo's own no-placeholder-content rule.
- No social proof beyond company names — no testimonials, no linked outcomes.
- No secondary/low-friction conversion path (only email) and no analytics to know whether any of this is working.

## Visuals: 4/5

The "Ink & Electric" design system (recent redesign) is cohesive: restrained palette, dark mode, self-hosted variable fonts, consistent spacing, and tasteful scroll-reveal/slider micro-interactions that respect `prefers-reduced-motion`.

Docked a point for:

- No `og:image` / `twitter:image` — social shares currently render without a preview image.
- Every section is text/icon-only; there's no imagery or screenshots proving the work described (just one headshot photo across the whole page).

## Backlog for next iteration

- [ ] Replace `projects.json` placeholder `purpose` and `technologies` fields with real, specific descriptions and accurate tech icons per client.
- [ ] Give "Featured Work" real case-study content — either dedicated pages/sections or links to live projects, not LinkedIn post URLs.
- [ ] Add `og:image` / `twitter:image` meta tags (`src/app.html`) so link shares render a preview card.
- [ ] Add `static/sitemap.xml` (robots.txt already allows all crawlers but there's nothing to submit to search engines).
- [ ] Add analytics (e.g. Vercel Analytics) — there's currently no way to measure whether the site converts.
- [ ] Add CI (`.github/workflows`) running `pnpm lint`, `pnpm format:check`, and `pnpm build` on PRs, now that those scripts exist.
- [ ] Fix `pnpm check` — the script calls `svelte-check`, which isn't listed as a devDependency, so the command currently fails with "not found."
- [ ] Run an accessibility pass (contrast in both themes, screen-reader check on the new slider) — no audit has been done yet.
- [ ] Consider a lower-friction CTA alongside `mailto:` (e.g. a booking link) if lead volume matters more than qualification.
