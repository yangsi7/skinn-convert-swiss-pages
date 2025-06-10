# AGENT instructions for skinn-convert-swiss-pages

This repository is a Vite + React + TypeScript project using Tailwind CSS and shadcn/ui components. The codebase includes a multilingual system with translations in `src/translations`, and analytics helpers under `src/components/analytics` and `src/lib`.

## Overview
- Main docs: [ArchitectureOverview](src/docs/ArchitectureOverview.md) and [MultiLanguageSystem](src/docs/MultiLanguageSystem.md).
- Source code lives under `src/`. The `@` alias resolves to this folder.
- Routing is handled with React Router (`src/routes`).
- Internationalisation uses `LanguageContext` and `useTranslation`.

## Development
1. Install dependencies with `npm install`.
2. Start the dev server via `npm run dev`.
3. Run a production build using `npm run build` or `npm run build:dev` for a development build.

### Linting and Tests
- Run `npm run lint` after making changes to source files.
- There is currently no automated test suite. If tests are added in the future, run them before committing.
- Linting and tests are **not** required when changing only documentation or comments.

## Style Guidelines
- Use TypeScript and React functional components.
- Keep translations updated across all languages when modifying content.
- Reuse components in `src/components` where possible. Utility code lives in `src/lib` or `src/utils`.
- Commit messages should be short, imperative statements (e.g. "Add feature" or "Fix bug").

## Adding Features
- New components belong in `src/components` or `src/pages` depending on scope.
- Update translations via `useTranslation` hooks and `src/translations` files.
- Update routes in `src/routes/index.tsx` when adding pages.

