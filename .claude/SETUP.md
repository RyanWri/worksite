# Claude Code Setup Guide

## Quick Start

Your project is configured with Claude Code for Svelte/Tailwind development on Vercel.

### 1. Add Svelte Skills (One-time Setup)

Choose one method to add the svelte-skills-kit:

**Method A: Clone as Skills (Recommended)**
```bash
cd .claude/skills
git clone https://github.com/spences10/svelte-skills-kit svelte-kit
cd ../..
```

**Method B: Add as MCP Server**
Create or update `.mcp.json`:
```json
{
  "mcpServers": {
    "svelte-skills": {
      "source": "github",
      "repo": "spences10/svelte-skills-kit"
    }
  }
}
```

### 2. Verify Configuration

```bash
# Check type safety
npm run check

# Start dev server (Claude can do this)
npm run dev
```

## File Structure

```
.claude/
├── settings.json           # Team-wide Claude Code config
├── settings.local.json     # Your personal config (git-ignored)
├── skills/                 # Custom skills directory
│   └── svelte-kit/         # Svelte skills (after setup)
└── SETUP.md               # This file
```

## Available Commands for Claude

Claude has pre-approved permissions for:
- `npm run dev` - Start development server
- `npm run build` - Production build
- `npm run check` - Type checking
- `npm run check:watch` - Watch mode type checking
- `git` operations - Full git access
- File reading/writing - All project files

## Settings Configuration

### settings.json (Committed)
- Team-wide Claude Code preferences
- Permissions for npm/git operations
- Auto-formatting with Prettier
- Tailwind + Svelte support

### settings.local.json (Git-ignored)
Create this for your personal Claude Code preferences:
```json
{
  "model": "claude-opus-4-8",
  "effortLevel": "high",
  "permissions": {
    "defaultMode": "auto"
  }
}
```

## Vercel Deployment

Your project uses `@sveltejs/adapter-vercel`:

```bash
# Build for Vercel
npm run build

# Deploy (handled by Vercel CI/CD)
# Just push to main branch
```

### Environment Variables
- Add to `.env.local` for local development
- Add to Vercel project settings for production
- Vercel KV available via `@vercel/kv` package

## Development Tips

### Svelte Components
- Place in `src/lib/components/`
- Use Tailwind utilities in class attributes
- Support dark mode with `dark:` prefixes

### Tailwind Styling
- No custom CSS file needed (utilities first)
- Dark mode enabled via `class="dark"`
- Custom animation: `animate-wiggle`
- Responsive: `md:`, `lg:`, `xl:` prefixes

### API Routes
- Create in `src/routes/api/[endpoint]/+server.js`
- Export `GET`, `POST`, `PUT`, `DELETE` handlers
- Import data from `src/lib/data/*.json`

### Type Safety
Before committing:
```bash
npm run check
```

## Troubleshooting

**Claude can't find npm:**
- Ensure `node` and `npm` are in PATH
- Check `npm -v` returns a version

**Svelte skills not loading:**
- Verify `.claude/skills/svelte-kit/` directory exists
- Restart Claude Code after cloning
- Try Method B (MCP server approach) as alternative

**Prettier not auto-formatting:**
- Check settings.json hook is valid
- Run `npm run check` to verify setup
- Check file extension is in format list (svelte, ts, tsx, js, jsx, json)

**Vercel deployment issues:**
- Check build completes: `npm run build`
- Verify adapter-vercel is installed
- Check `.vercel` directory (auto-generated)
