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

**Routing**: None — single-page scroll, no React Router. `src/App.tsx` renders all sections in order: Hero → Work → Projects → Skills → Education → Footer.

**Data** (`src/data/user.ts`): Single `INFO` object is the source of truth for all portfolio content. Update this file to change site content.

**Components** (`src/components/`): One flat file per section — `Hero`, `Work`, `Projects`, `Skills`, `Education`, `Footer`. Each has a co-located `.css` file.

**Styling**: Plain CSS files co-located with components (no CSS-in-JS despite styled-components being installed). CSS variables for the design system are in `src/data/styles.css` — primary color `#27272a`, link color `#14b8a6` (teal), fonts Heebo/Roboto. Responsive breakpoints at 1270px, 1024px, 800px with max-width 1000px content wrapper.

**No global state** — component-level `useState` only. No API calls; all data is static.
