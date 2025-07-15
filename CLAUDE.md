# **CLAUDE.md** (Project-Specific Playbook)

This version is the project-specific entrypoint for Claude Code to help Claude understand how to run, develop and pull information and documentation from this project

--------------------------------------------------------------------------------
🔰 **LOAD-ORDER GUARANTEE**

1.  **Always read this file first.**
2.  **THEN** load the universal process file embedded below
    (`@working_files/CLAUDE_PROCESS.md`).
3.  **THEN** read the five working files in the order shown in
    **§ 2 Working-File Canon**.

The rest of this document is organised as follows »

1.  Project snapshot & context
2.  Working-file canon (the five files)
3.  Critical principles & guard-rails
4.  Development commands & tech stack
5.  Road-map & success metrics
6.  Design system in depth
7.  Protected artefacts & DON’Ts
8.  File-naming & archival conventions
9.  Reference glossary

--------------------------------------------------------------------------------
## 1  Project snapshot & context
| Item                      | Value                                                                                |
| ------------------------- | ------------------------------------------------------------------------------------ |
| **Project name** | *Multilingual Medical Marketing Site* |
| **Primary goal** | Launch a tri-lingual, medically trustworthy marketing website with interactive calculators |
| **Current state (automated)** | `planning.md` shows **27%** complete                                                 |
| **CEO hard-deadline** | Week 6 after project kick-off                                                            |
| **Live environment** | Vercel Preview → Netlify Prod (DNS TBD)                                                      |
| **Local dev URL** | http://localhost:8080                                                                        |

--------------------------------------------------------------------------------
## 2  Working-File Canon  *(never bypass)*

| File                             | Role                                     | ALWAYS read…                   |
| -------------------------------- | ---------------------------------------- | ------------------------------ |
| **`@working_files/todo.md`** | Task checklist / sprint board            | first for “What next?”         |
| **`@working_files/planning.md`** | Technical blueprint & phase status       | to know “Why?” and “How?”      |
| **`@working_files/conventions.md`** | Coding, naming, design & content rules   | to stay consistent             |
| **`@working_files/event-stream.md`** | Time-stamped log of every action & reflection | to avoid duplicated effort     |
| **`@working_files/doc-ref.md`** | Index into deeper docs (`docs/…`)        | for any deep dive              |

> **One in/one out** — if you need additional scratch space, create a
> `docs/` artefact _and link to it from `doc-ref.md`_.
> Never proliferate ad-hoc files inside `working_files/`.

--------------------------------------------------------------------------------
## 3  Critical principles & guard-rails

1.  **Iteration > Creation**
    *Search, extend, parameterise, only then create.*
2.  **Design-system fidelity**
    Deep navy (#1E3A5F) + medical teal (#00796B) ± neutrals.
    Light-blue “heavenly” hues **forbidden**.
3.  **Atomic components**
    New UI component → new file, ≤ 50 LOC, Tailwind + shadcn/ui.
4.  **English-first** content pipeline.
    Place-holders OK for other locales; translation is Phase 2.
5.  **Protected artefacts** (unchangeable without written CEO sign-off) →
    *HeartBalanceRing*, *ContributingFactorCards*, *TabNavigation*, *TodayTab*.
6.  **Documentation integrity**
    Code ≠ done until `event-stream.md` & `planning.md` are updated.

--------------------------------------------------------------------------------
## 4  Dev commands & tech stack

```text
npm run dev       # Vite dev server :8080
npm run build     # Production build
npm run build:dev # Dev-mode build (debug)
npm run preview   # Preview a prod build locally
npm run lint      # ESLint (React 18 + TypeScript 5)
````

**Major libraries**

  * React 18 + TypeScript 5 + Vite
  * Tailwind CSS 3 + shadcn/ui
  * React Router DOM 6
  * TanStack React-Query 5 (object syntax only)
  * Zod 3 + React-Hook-Form 7
  * Lucide-React icons
  * Recharts (charts)
  * Sonner & Radix Toasts for notifications

-----

## 5  High-level road-map

| Week | Milestone         | Exit criteria                                     |
| ---- | ----------------- | ------------------------------------------------- |
| 1    | English MVP       | 14,000 English words live, CEO green-light on design |
| 2–3  | German & French   | Pixel-perfect, culturally localised content       |
| 4–5  | Interactive tools | Eligibility checker & coverage calculator pass QA |
| 6    | Launch & compliance | Swiss Med-Law checklist ✓, uptime ≥ 95%           |

*Progress & burndown charts live in `planning.md`.*

-----

## 6  Design system — extended spec

  * **Spacing**: base unit 4px; major sections 8 × base.
  * **Typography**: IBM Plex Sans (400/600/700); headings use optical sizing.
    Clamp-based fluid sizing (`clamp(1rem, 2vw + 1rem, 1.5rem)`).
  * **Break-points** (same as Tailwind defaults):
    `sm` 640px, `md` 768px, `lg` 1024px, `xl` 1280px, `2xl` 1536px.
  * **Component states**: `hover` ≥ 150ms fade; focus rings `focus:outline-offset-4`.
  * **Accessibility**: minimum colour-contrast ratio 4.5:1; toast auto-close 6s.

-----

## 7  Protected artefacts & absolute DON’Ts

| Artefact              | Why protected                   | Allowed?           |
| --------------------- | ------------------------------- | ------------------ |
| HeartBalanceRing      | Clinical accuracy & CE marking  | Read-only          |
| ContributingFactorCards | Regulatory copy approved        | Text only          |
| TabNavigation         | Used by marketing ops           | Style override only |
| TodayTab              | Licensed algorithm              | No structural edits |

*Never rename or relocate these without explicit CEO slack message.*

-----

## 8  File-naming & archival conventions

  * All new docs in `docs/` must start with ISO date, e.g.
    `2025-07-14-eligibility-algo-adr.md`.
  * Any file superseded → move to `docs/archive/YYYY-MM-DD/`.
  * Keep root directory ultra-clean: source code, `README.md`, `CLAUDE.md`,
    package/config files only.

-----

## 9  Glossary (quick reference)

| Term            | Meaning                                                        |
| --------------- | -------------------------------------------------------------- |
| MCP             | Modular Capability Provider: remote tool service (search, memory, etc.) |
| TDG             | Test-Driven Generation – AI-assisted TDD loop                  |
| Atomic component| React component ≤ 50 LOC, single responsibility              |
| LOE             | Level Of Effort estimate                                       |
| P0              | Highest urgency/severity level                                 |

-----

EOF — remember to read the embedded process below before doing anything

\<process\_embed\>
@include(working\_files/CLAUDE\_PROCESS.md)
\</process\_embed\>

