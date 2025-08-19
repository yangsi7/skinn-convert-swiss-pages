# Next.js \+ Supabase – Starting Instructions

This document offers a **generic starting point** for bootstrapping a modern full‑stack web application using **Next.js**, **Supabase**, **TypeScript**, **Tailwind CSS** and **shadcn/ui**. It captures recommended setup commands, project structure, key patterns and principles. Replace bracketed placeholders (e.g. \<project-name\>) with values specific to your project and adjust sections to suit your domain. Treat this as a template: follow the **conventions** defined in conventions.md and adapt best practices to your needs.

## Tech Stack

* **Framework** – Next.js (App Router) with React Server Components and Server Actions.

* **Language** – TypeScript in strict mode.

* **Styling** – Tailwind CSS with component code copied from shadcn/ui for full control.

* **Data & Auth** – Supabase (Postgres, Row Level Security, Supabase Auth SSR via @supabase/ssr).

* **State Management** – TanStack Query and React Context; avoid global state libraries unless necessary.

* **Validation** – Zod for schema validation and type inference.

* **Testing** – Vitest for unit/integration tests; Playwright or Puppeteer for end‑to‑end tests; Axe for accessibility audits.

* **Optional AI Tools** – Magic MCP (21st.dev) for AI‑generated components. Use responsibly and review code before inclusion.

## Setup Commands

1. **Create the Next.js app** – Generate a new app directory with TypeScript, Tailwind CSS and the App Router:

npx create-next-app@latest \<project-name\> \--typescript \--tailwind \--app  
cd \<project-name\>

1. **Install Supabase** – Add the Supabase client and SSR helpers:

npm install @supabase/supabase-js @supabase/ssr

1. **Install shadcn/ui** – Initialise the shadcn/ui CLI and generate the initial configuration. This command prompts for theme and alias options—use the defaults or customise them:

npx shadcn-ui@latest init

1. **Set up Supabase types** – Generate TypeScript definitions for your Supabase project. Replace \<project-id\> with your Supabase project ID:

npx supabase gen types typescript \--project-id \<project-id\> \> src/types/database.ts

1. **Configure linting and testing** – Install ESLint, Prettier, Vitest and your preferred end‑to‑end testing framework. Example:

npm install \-D eslint prettier @typescript-eslint/parser @typescript-eslint/eslint-plugin vitest  
npm install \-D playwright @axe-core/playwright  
\# Or: npm install \-D puppeteer

1. **Prepare environment variables** – Copy the .env.example provided by Supabase and set NEXT\_PUBLIC\_SUPABASE\_URL and NEXT\_PUBLIC\_SUPABASE\_ANON\_KEY. Do **not** commit secrets. For server components, store SUPABASE\_SERVICE\_ROLE\_KEY in your deployment platform’s secrets manager.

2. **Run the development server** – Start the dev server and verify that the landing page renders:

npm run dev

1. **Initial commits** – Commit the initial project structure and push to your repository. Configure branch protection rules and pre‑commit hooks for linting, type checks and tests.

## Recommended Project Structure

Organise your code by concern. Adjust names to fit your domain but preserve the overall pattern:

app/                 \# Route handlers and pages (App Router)  
├── (auth)/          \# Authentication pages and layout (e.g. login, register)  
├── (dashboard)/     \# Protected dashboard pages and feature modules  
├── api/             \# Route handlers and edge functions  
├── components/  
│   ├── ui/          \# Copied shadcn/ui components (customisable)  
│   ├── features/    \# Feature-specific components  
│   └── layouts/     \# Layout components and shells  
├── hooks/  
│   ├── use-supabase.ts  \# Hook to create and use the Supabase client (SSR & CSR)  
│   └── use-\<feature\>.ts \# Custom hooks per feature  
├── lib/  
│   ├── supabase/  
│   │   ├── client.ts    \# Browser client wrapper using @supabase/ssr  
│   │   ├── server.ts    \# Server client wrapper using @supabase/ssr  
│   │   └── middleware.ts\# Middleware to refresh auth tokens  
│   └── utils/           \# Generic utilities (e.g. date formatting)  
├── types/  
│   └── database.ts  \# Auto-generated database types  
└── middleware.ts    \# Next.js middleware to protect routes

supabase/  
├── schemas/         \# Declarative SQL schema files (one per entity)  
├── migrations/      \# Auto-generated migration files (never edited directly)  
├── functions/  
│   ├── \_shared/      \# Shared utilities for edge functions  
│   └── \<function\>/   \# One directory per edge function  
└── policies/        \# Optional: store RLS policies separately

docs/                \# Documentation (design, specifications, patterns, research, requirements)  
├── design/  
└── ...

test/                \# Tests organised parallel to code

## Key Patterns & Best Practices

* **Supabase Auth SSR** – Use @supabase/ssr exclusively for creating browser and server clients. Pass a cookies object with getAll() and setAll() methods only. Do not call get(), set() or remove() on cookies and do **not** import from @supabase/auth-helpers-nextjs. Implement authentication middleware that calls supabase.auth.getUser() and refreshes sessions. See the Supabase guidelines in your conventions for code examples.

* **Row Level Security (RLS)** – Enable RLS on every table. Write separate policies for select, insert, update and delete, specifying roles (authenticated, anon). Use auth.uid() wrapped in select for comparing user IDs. Name policies descriptively and wrap SQL in fenced blocks. Avoid overly restrictive policies unless necessary.

* **Server Components and Actions** – Default to React Server Components. Use Client Components sparingly when stateful interactivity or browser‑only APIs are required. Use Server Actions for data mutations; validate inputs with Zod, handle errors gracefully and update caches via React’s revalidation methods.

* **Edge Functions** – Use Supabase Edge Functions for API endpoints requiring serverless compute near users. Write them in Deno with Deno.serve. Avoid external dependencies; if needed, import from npm: or jsr: with explicit versions. Share utilities in supabase/functions/\_shared and avoid cross‑function dependencies.

* **Type Safety** – Generate database types from Supabase and ensure API responses match those types. Validate all inputs with Zod and propagate type inference to forms and components.

* **Testing & Quality** – Adopt TDD: write failing unit tests and integration tests before implementation. Use Playwright or Puppeteer for end‑to‑end and visual regression tests. Use Axe or Lighthouse for accessibility audits. Maintain high coverage and fix regressions.

* **Documentation & Research** – Maintain context files (planning.md, todo.md, event-stream.md, conventions.md, doc-ref.md) after each iteration. Write long‑form documents under docs/ and index them in doc-ref.md. Use the research module to gather authoritative sources, summarise them in RESEARCH.md and update your plan accordingly.

* **Git & CI/CD** – Use descriptive branches; write concise commit messages. Configure CI pipelines (GitHub Actions, etc.) to run linting, type checks, tests and deployments. Use environment‑specific .env.\* files and do not commit secrets.

## Libraries & Tools Reference

The following table lists common libraries and tools for Next.js \+ Supabase projects. Adjust the list based on your needs and avoid adding dependencies without evaluation.

| Category | Library / Tool | Purpose & Notes |
| :---- | :---- | :---- |
| **Framework** | next (App Router) | Core React framework with server components and server actions |
| **Styling** | tailwindcss | Utility‑first CSS framework; configured via tailwind.config.ts |
| **UI Components** | shadcn/ui | Copy components into your project for full control and customisation |
| **Data & Auth** | @supabase/supabase-js | Supabase client for data and authentication |
|  | @supabase/ssr | Creates SSR‑friendly clients |
| **State Management** | @tanstack/react-query | Declarative data fetching and caching |
| **Validation** | zod | Schema validation and type inference |
| **Form Handling** | react-hook-form | Lightweight form state management |
| **Date Utilities** | date-fns or dayjs | Date parsing and formatting |
| **Icons** | lucide-react | Feather‑style icons |
| **Testing** | vitest | Unit testing framework compatible with Vite |
|  | playwright or puppeteer | End‑to‑end and visual testing |
| **Accessibility** | @axe-core/playwright | Automated accessibility testing |
| **CI Tools** | eslint, prettier | Linting and formatting |
|  | husky, lint-staged | Pre‑commit hooks |
| **AI Tools** | Magic MCP (21st.dev) | AI‑powered UI generation; review generated code before use |

## Critical Principles & Guard‑Rails

To maintain quality, security and maintainability, enforce the following principles:

1. **Context Integrity** – Do not bypass or modify files in @working\_files/ directly without updating them through the proper modules. Keep planning.md, todo.md, event-stream.md, conventions.md, doc-ref.md and related files in sync. Never create untracked files in @working\_files/.

2. **One In, One Out** – Whenever new documentation, research notes or patterns are created, cross‑reference them in doc-ref.md. Archive superseded documents under docs/archive/YYYY‑MM‑DD/.

3. **Bug Discovery & Tracking** – Log discovered bugs in docs/bugs/bugs\_todo.md with severity, reproduction steps and context. Plan fixes in todo.md and update status upon verification.

4. **Design Compliance** – Follow your design system guidelines. Use shadcn/ui and Supabase UI components as starting points; customise them to your tokens and patterns. Validate colour contrast, spacing and responsiveness.

5. **Security & Privacy** – Validate inputs, sanitise outputs, enforce RLS policies and store secrets in environment variables. Perform periodic security audits. Comply with relevant regulations (e.g. GDPR, HIPAA) if applicable.

6. **Performance Budgets** – Set and monitor performance targets (LCP, CLS, TTI). Optimise images, enable lazy loading, compress assets and leverage server components and edge functions for faster responses.

7. **Accessibility** – Comply with WCAG 2.1 AA. Provide keyboard navigation, visible focus states and proper ARIA labelling. Use automated tools to detect issues.

## Research & Exploration Process

Before generating code or final deliverables, follow a **research and exploration process** to understand the current state, identify gaps and gather authoritative sources. Only after synthesising findings should you proceed to design and implementation. The typical steps are:

1. **Current‑State Review** – Use command‑line tools and code exploration to summarise modules, exported functions, React component structures and imported libraries. Compare against conventions and flag deviations.

2. **Gap Analysis** – Compare project requirements (from planning.md or requirements documents) to existing artefacts. Identify missing features or incomplete documentation.

3. **Target State Snapshot** – Draft high‑level architecture or data‑flow diagrams representing the desired future state. Save them under docs/research/.

4. **Source Triage** – Identify authoritative sources (official docs, API references, peer‑reviewed articles) relevant to each gap. Prioritise primary sources.

5. **Evidence Collection** – Use web search and API tools to collect information. Save notes in docs/research/\<topic\>.md and summarise them in RESEARCH.md with citations.

6. **Synthesis** – Distil collected evidence into actionable design choices and guidelines. Document insights in RESEARCH.md and integrate them into your plan.

Only after completing these steps should coding or implementation begin. This ensures decisions are evidence‑based and align with project goals and conventions.

---

Use this document as your starting blueprint. Adapt it as your project evolves, and refer back to your conventions, design system and planning documents for alignment. Keep the **research‑first mindset**, and maintain transparency via the event stream and knowledge graph.

---

