# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

All commands are run from the `client/` directory:

```bash
npm start          # Development server with hot reload
npm run build      # Production build → client/build/
npm test           # Jest tests (interactive watch mode)
npm run deploy     # Build and deploy to GitHub Pages (gh-pages branch)
```

No explicit lint command — ESLint runs through react-scripts.

## Architecture

React SPA (Create React App) deployed to GitHub Pages at `https://govgovnahr.github.io`.

**Routing** (`src/App.js`): React Router v6 with routes for `/`, `/about`, `/projects`, `/contact`, and `/*` (404).

**Data** (`src/data/user.js`): Single `INFO` object is the source of truth for all portfolio content (bio, projects, socials, etc.). Update this file to change site content. SEO metadata lives in `src/data/seo.js`.

**Components vs Pages**: Pages (`src/pages/`) are route targets — each calls `window.scrollTo(0,0)` on mount and wraps content in NavBar + Logo + Footer. Components (`src/components/`) are organized by page, with a `common/` subfolder for NavBar, Logo, and Footer.

**Styling**: Plain CSS files co-located with components (no CSS-in-JS despite styled-components being installed). CSS variables for the design system are in `src/data/styles.css` — primary color `#27272a`, link color `#14b8a6` (teal), fonts Heebo/Roboto. Responsive breakpoints at 1270px, 1024px, 800px with max-width 1000px content wrapper.

**No global state** — component-level `useState` only. No API calls; all data is static.
