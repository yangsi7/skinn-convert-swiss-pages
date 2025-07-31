# CLAUDE.md

This file is the **project‑specific entrypoint** for Claude Code when working on the SKIIN Switzerland marketing website. It explains how to run, develop and retrieve documentation from this repository. It aligns with **version 5.x** of the universal process, which groups modules into high‑level categories and introduces memory & knowledge‑graph management, performance optimisation, code review & peer review, design versioning & accessibility testing, security audits and CI/CD guidance. Version 5.x also provides explicit tool‑selection guidelines, GitHub integration patterns and conventions for using MCP servers such as memory, context7, puppeteer and supabase.

**Ultra important**

* Always follow the universal process defined in @working_files/CLAUDE_PROCESS.md.

* At the **start** of every agentic loop, **load and review** the following working files in order, and **update them at the end of the loop**:

* @working_files/todo.md – task checklist / sprint board (for “What next?”)
* @working_files/planning.md – technical blueprint & phase status (understand “Why?” and “How?”)
* @working_files/conventions.md – coding, naming, design & content rules (to stay consistent)
* @working_files/event-stream.md – time‑stamped log of every action & reflection (to avoid duplicated effort)
* @working_files/doc-ref.md – index into deeper docs (docs/…) (for any deep dive)

**One in/one out** – If additional scratch space is required, create a document in the docs/ directory and link to it from doc-ref.md. **Never proliferate ad‑hoc files inside working_files/.** Bug logs and related planning have moved to docs/bugs/ to keep this directory lean.


* Bug documentation is **no longer stored** in @working_files/. All bug discovery, tracking and fix planning live in docs/bugs/. Use the bug management module to access bug logs when required.

## Load‑order Guarantee

1. **Read this file first** – it provides project context, rules and critical constraints.

2. **Next**, load the universal process file @working_files/CLAUDE_PROCESS.md. This file defines the agent life‑cycle and all modules—including planning & memory management, safety & guidance, quality assurance, design & simulation, security & compliance, infrastructure & deployment, context management and CI/CD guidance.

3. **Then** read the working files (see § 2 **Working‑File Canon**) in the specified order. These files represent the current plan, task list, conventions and documentation index. Always update them as you work.

---

### Document Structure

This playbook is organised into the following sections:

* **1 Project snapshot & context** – High‑level overview of the project’s goals, state and architecture.
* **2 Working‑File Canon** – Description of the mandatory working files and how to use them.
* **3 Critical principles & guard‑rails** – Core guidelines for iteration, design fidelity, documentation, performance, and more.
* **4 Development commands & tech stack** – Common scripts and libraries.
* **5 Road‑map & success metrics** – Phased plan for cleaning and implementing the V7.2 copy & design.
* **6 Design system in depth** – Key points from the SKIIN design system.
* **7 Protected artefacts & DON’Ts** – Components and practices that must not be altered.
* **8 File‑naming & archival conventions** – Guidelines for organising and archiving documentation.
* **9 Copy document synchronisation** – Rules for managing multi‑language copy documents.
* **10 Visual asset inventory** – Overview of images, videos and design references.
* **11 Glossary** – Definitions of key terms and acronyms.
* **12 Current implementation status** – Progress update on phases and tasks.
* **13 New modules & workflow summary** – How the universal process modules apply to this project.

---

## 1 Project snapshot & context

| Item | Value |
| :---- | :---- |
| **Project name** | **SKIIN Switzerland – Marketing Website** |
| **Primary goal** | **Phase A – Documentation cleanup:** audit and organise all project documentation and working files according to the universal process v5.x (archive superseded docs, reset working files, update doc‑ref.md, ensure conventions are current). **Phase B – Copy & design integration:** implement the Version 7.2 copy, component and design updates following the cleaned documentation and the improved process. |
| **Current state** | Documentation misaligned – the project contains documents and working files created under versions 2 and 3 of the process. Tasks and plans refer to old copy (v2.0/3.0). Phase B content (v7.2) remains unimplemented. |
| **Implementation approach** | **Research‑First & Phased Development**. For cleaning: perform a documentation audit → understand → plan → execute → validate → document. For copy integration: follow research → plan → execute → validate → document. Always use the universal process modules. |
| **Architecture** | Vite \+ React 18 \+ TypeScript 5 \+ Tailwind CSS \+ shadcn/ui. React Router for routing; TanStack Query for server state; Zod \+ React‑Hook‑Form for forms. Supabase integration is planned but not yet implemented. |
| **Live environment** | Development: npm run dev via Vite. Production: Netlify/Vercel (DNS pending). |
| **Key metrics** | Unknown – metrics will be re‑established after documentation cleanup. |

## 2 Working‑File Canon (never bypass)

| File | Role | When to read |
| :---- | :---- | :---- |
| @working_files/todo.md | **Task checklist / sprint board** | First—“What next?” |
| @working_files/planning.md | **Technical blueprint & phase status** | To know **“Why?”** and **“How?”** |
| @working_files/conventions.md | **Coding, naming, design & content rules** | To stay consistent |
| @working_files/event-stream.md | **Chronological log of every action & reflection** | To avoid duplicated effort |
| @working_files/doc-ref.md | **Index into deeper docs (docs/…)** | For any deep dive |

**One in/one out** – If additional scratch space is required, create a document in the docs/ directory and link to it from doc-ref.md. **Never proliferate ad‑hoc files inside working_files/.** Bug logs and related planning have moved to docs/bugs/ to keep this directory lean.


These files represent the **living state** of the project. Always read them before starting work and update them immediately after making changes. When the memory MCP is available, persist important updates using the patterns below.

### Memory MCP Integration

The memory MCP provides two complementary systems:
1. **Vector Storage**: For storing and recalling contextual information
2. **Knowledge Graph**: For creating structured relationships between entities

#### At Session Start

When the memory MCP is available, at the beginning of every session after reading CLAUDE.md and CLAUDE_PROCESS.md:

1. **Recall Project Context**: 
   - Use `memory.recall('project-skiin-*')` to retrieve project overview, architecture, and conventions
   - Use `memory.search_nodes('project')` to find project entities in the graph
2. **Recall Recent Work**: 
   - Use `memory.recall('recent-changes-*')` and `memory.recall('decision-*')` for latest updates
   - Use `memory.open_nodes(['component:HeroSection', 'page:Home'])` to get specific entities
3. **Query Knowledge Graph**: 
   - Use `memory.read_graph()` to get the full graph structure
   - Use `memory.search_nodes('query')` to find relevant entities

#### During Development

When the memory MCP is available, use both storage and graph capabilities:

**Vector Storage (memory.store/recall)**:
1. **Task Completion**: Store outcomes with `memory.store('task-[id]-outcome', details)`
2. **Bug Discovery**: Store bug details with `memory.store('bug-[severity]-[id]-details', info)`
3. **Design Decisions**: Store rationale with `memory.store('decision-[date]-[topic]', decision)`
4. **Daily Snapshots**: Store progress with `memory.store('recent-changes-[date]', summary)`

**Knowledge Graph (entities, relations, observations)**:
1. **Create Entities**: `memory.create_entities([{name: 'HeroSection', entityType: 'component', observations: ['Uses new design system']}])`
2. **Link Entities**: `memory.create_relations([{from: 'HomePage', to: 'HeroSection', relationType: 'uses'}])`
3. **Add Observations**: `memory.add_observations([{entityName: 'HeroSection', contents: ['Performance optimized', 'WCAG AA compliant']}])`
4. **Update Graph**: When components change, update their observations and relationships

### Context7 MCP Usage

The context7 MCP is specifically for retrieving library documentation only:
- Use `context7.resolve-library-id` to find library IDs
- Use `context7.get-library-docs` to retrieve documentation for React, TypeScript, Tailwind, etc.
- Context7 does NOT provide knowledge graph capabilities - those are in memory MCP


## 3 Critical Principles & Guard‑rails

These principles ensure that development proceeds smoothly and safely. Always refer to them when making decisions.

* **Iteration \> Creation** – Search for existing components, hooks or patterns before creating new ones. Extend, parameterise or wrap existing solutions where possible. Use context7 to retrieve library documentation when needed.

* **Design‑system fidelity** – The SKIIN design system uses deep navy (\#1E3A5F) and medical teal (\#00796B) with neutrals. Light‑blue “heavenly” hues are forbidden. Use CSS variables only for colours. Follow atomic design: components should be ≤ 50 lines of code and live in their own files.

* **Language pipeline** – English copy is authoritative. Placeholders are acceptable for other locales; translation occurs later. Any text change in code must be reflected in copy documents within 24 hours (see § 9 Copy document synchronisation).

* **Protected artefacts** – The TabNavigation component is clinically validated and legally protected. You may read it and adjust styling via wrappers, but do **not** modify its structure or behaviour without explicit CEO approval.

* **Documentation integrity** – Code isn't "done" until you have updated event-stream.md, planning.md, todo.md and relevant docs. When memory MCP is available, use memory.store to persist summaries. For front-end components, visually inspect and interact with them using puppeteer MCP tools when available.

* **Research‑first methodology** – For every feature, perform context gathering and competitive analysis (e.g. with brave_web_search and puppeteer_screenshot). Document findings in docs/research/…, summarise in event-stream.md.

* **Guardrails & prompt design** – All tool calls must respect guardrails. Design prompts by clearly stating the persona, problem and expected outcome. Use the prompt design module to clarify ambiguous requests and route tasks appropriately.

* **Memory management** – When the memory MCP is available, persist research notes, plans, decisions and performance reports via memory.store with descriptive keys. Recall relevant entries at the start of each session using memory.recall. Follow the memory naming conventions documented in `/docs/process/2025-07-29-memory-implementation-guide.md` for consistent key structure. Use context7 only for retrieving library documentation.

* **Performance & security audits** – Use the Performance module to set budgets (LCP, CLS, API latency). Use package‑version and npm audit to check dependencies. Monitor Supabase logs via supabase.get_logs. Treat user data as medical data: enforce encryption, row‑level security and GDPR compliance. Document audit findings in docs/bugs/bugs.md, outline remediation tasks in docs/bugs/bug_fix_planning.md and ensure new tasks are reflected in todo.md.

* **Documentation & context engineering** – Always gather context before acting. At the start of each loop, read event-stream.md (chronology), todo.md (tasks), planning.md (strategy) and conventions.md (standards). Consult doc-ref.md to find relevant documentation; open only the docs that apply to your task. Use shell commands (e.g. ls \-R, tree \-L 2, git ls-files) to explore the repository and update the tree file structure in CLAUDE.md and/or @conventions.md and indicate it in event-stream if there was a change. When memory MCP is available, summarise context in memory. Follow naming conventions (ISO‑date prefixes) when creating/updating docs and archive superseded versions.

* **Code review & peer review** – Before merging, run static analysis (ESLint, Prettier, strict TypeScript), unit tests and visual snapshots. Request a peer review via GitHub (Claude Code can help). Document review outcomes in event-stream.md.

* **Design versioning & accessibility** – Store design tokens (colours, spacing, typography) in versioned files and maintain a changelog in docs/design/version_history.md. Use puppeteer_evaluate and accessibility tools (axe‑core) to ensure UI elements meet WCAG 2.1 AA. Address accessibility issues promptly.

* **CI/CD & GitHub integration** – Configure GitHub Actions to run linting, tests, accessibility audits and performance checks on each push. Use supabase.list_edge_functions to ensure database functions are deployed. Document the CI pipeline in docs/deployment/ and update as needed. Use slash commands (/install-github-app, /create-pr) to interact with the Claude Code GitHub app.

* **Multi‑agent & workflow guidance** – For complex tasks (e.g. combining research, copywriting and coding), delegate to specialist agents. Use the mediator–worker pattern defined in the universal process. When memory MCP is available, synchronise context via memory.store.

* **Bug tracking & fix planning** – All bug documentation lives in docs/bugs/. Record defects in docs/bugs/bugs.md with severity and context. Track active issues in docs/bugs/bugs_todo.md and outline fix plans in docs/bugs/bug_fix_planning.md. Link each bug to tasks in todo.md. Resolve P0/P1 bugs before progressing. When a bug arises, log the event in event-stream.md, create a bug entry, update the graph and add a task. Conduct post‑mortems for significant bugs and capture lessons learned.

* **Responsibility & autonomy** – The agent should self‑organise: read context, plan, execute and iterate without repeatedly asking the user. Only ask for clarification if critical information is missing.

## 4 Development Commands & Tech Stack

### Common commands

Run these scripts in the project root (skinn-convert-swiss-pages):

\# Start the Vite development server  
npm run dev

\# Build for production  
npm run build

\# Preview a production build locally  
npm run preview

\# Lint and format code  
npm run lint

\# Type‑check TypeScript definitions  
npm run typecheck

\# Run unit tests (Vitest)  
npm run test

\# Run end‑to‑end tests (Puppeteer \+ Playwright, if configured)  
npm run test:e2e

### Major libraries and tools

* **React 18 \+ TypeScript 5 \+ Vite** – core UI framework and build tool.

* **Tailwind CSS 3 \+ shadcn/ui** – styling and component library. *Do not edit library components directly; wrap them instead.*

* **React Router DOM 6** – routing library. Use dynamic route parameters for language prefixes (e.g. /en/home).

* **TanStack React‑Query 5** – server state management; use context or Zustand for global client state.

* **Zod 3 \+ React‑Hook‑Form 7** – form validation and handling. Ensure forms are accessible and localised.

* **Lucide‑React icons & Radix UI** – icons and accessibility primitives.

* **Supabase client** – authentication and database queries (pending integration). Use RLS and environment variables.

* **Puppeteer** – visual and accessibility testing. Use puppeteer_navigate and puppeteer_screenshot for snapshots, and puppeteer_evaluate for custom checks.

* **Memory & context7 MCPs** – memory provides persistent storage and knowledge graph capabilities; context7 provides library documentation retrieval.

## 5 Road‑map & success metrics

The documentation cleanup and preparation phase precedes any feature or copy implementation. Treat it as Phase A. Only after Phase A is complete should you move on to Phase B (copy & design integration). High‑level phases are:

| Phase | Objectives | Success criteria |
| :---- | :---- | :---- |
| **A.1 – Context Gathering & Audit** | Read all existing docs and working files; list them in doc‑ref.md; identify outdated or superseded documents; summarise findings in event-stream.md and memory. | All documents are catalogued; gaps and obsolete files are identified; a cleanup plan is drafted. |
| **A.2 – Planning & Preparation** | Produce a detailed plan (planning.md) to clean up documentation and reset working files. Transfer useful insights from old plans; schedule archival tasks. | planning.md contains a step‑by‑step cleanup plan; todo.md lists concrete tasks; old plans are archived. |
| **A.3 – Execution & Validation** | Execute the cleanup: archive superseded docs, update doc‑ref.md, reset working files and update conventions. Validate that all links in doc‑ref.md resolve and that working files match the universal process structure. | Superseded docs moved to archive; new working files created; doc‑ref.md is accurate; conventions updated; memory & graph updated. |
| **B.1 – Copy & Design Integration** | Implement Version 7.2 copy and design updates per the research summary and implementation guide. See the subsequent playbook updates after Phase A completes. | Copy integrated; design components built; translations synchronised; success metrics met. |

**Key success metrics for Phase A**

* **Documentation completeness:** All existing documents are accounted for in doc‑ref.md with statuses (Active, Archived or Superseded).

* **Working file alignment:** todo.md, planning.md, conventions.md, event‑stream.md and doc‑ref.md match the universal process v5.x (no outdated references to v2.0 or v3.0) and are initialised for new tasks.

* **Archive hygiene:** Superseded docs are moved to docs/archive/YYYY‑MM‑DD/ and recorded in doc‑ref.md. The root directory and working_files/ contain only relevant files.

* **Memory & graph:** Summaries of the audit, decisions and plans are stored via memory.store and graph nodes/relations reflect document statuses and dependencies.

* **No code changes:** During Phase A, no code or UI changes should be made (except trivial updates to file references). Focus exclusively on documentation.

## 6 Design system in depth

The SKIIN design system is documented in conventions.md and the /docs/design/ directory. Key references:

* **Design System Documentation:**
  - `/working_files/conventions.md` - Section 4: Design System (themes, colors, tokens)
  - `/docs/design-system/modern-design-system-spec.md` - Complete modern design specification
  - `/docs/design/2025-07-30-design-token-usage-guide.md` - Design token usage guidelines

* **Multi‑Theme System:** Four themes – Medical Blue, Professional Teal, Swiss Innovation and Soft Blue Teal. Each theme uses CSS custom properties for colours, spacing and typographic scales. See /docs/implementation/theme-system-guide.md for implementation details and docs/design/version_history.md for changelogs. When memory MCP is available, use memory.add_observations to link design tokens to components in the knowledge graph.

* **Spacing:** Base unit 4 px. Major sections use 8× base (32 px). Use Tailwind spacing classes; **do not hardcode pixel values**.

* **Typography:** IBM Plex Sans (weights 400/600/700) with optical sizing enabled. Use clamp() for fluid sizing (e.g. clamp(1rem, 2vw \+ 1rem, 1.5rem)). Maintain high contrast and readability.

* **Breakpoints:** Use Tailwind defaults (sm 640 px, md 768 px, lg 1024 px, xl 1280 px, 2xl 1536 px). Design mobile‑first and progressively enhance for larger screens.

* **Component states:** Hover transitions ≥ 150 ms; focus rings focus:outline-offset-4. Use micro‑interactions to guide users (e.g. scale buttons on press). Document animations in docs/design/animation_guidelines.md and link them via the knowledge graph.

* **Accessibility:** Maintain contrast ratio ≥ 4.5:1, ensure keyboard navigability, use ARIA labels and test with screen readers. Use puppeteer_evaluate with axe‑core to detect issues.

* **Design versioning (NEW):** Keep design tokens and components versioned. When updating tokens, increment the version number, document changes and propagate updates to components. Record these events in event-stream.md and when memory MCP is available, via memory.add_observations.

## 7 Protected artefacts & absolute DON’Ts

| Artefact | Why protected | Allowed? |
| :---- | :---- | :---- |
| **TabNavigation** | Used by marketing operations and clinically validated. | Only style overrides via wrapper components. Do not modify its structure or behaviour without explicit CEO approval. |

Never rename or relocate these components without CEO sign‑off. When memory MCP is available and referencing them, document the relationship in the knowledge graph.

**Absolute DON’Ts**

* **Do not modify medical claims** without regulatory approval.

* **Do not bypass the four‑language translation system.**

* **Do not hardcode translation text. Always create the translation objects.

* **Do not hardcode colours** – always use CSS variables or design tokens.

* **Do not compromise the mobile experience** for desktop features.

* **Do not skip visual, accessibility or performance validation** for UI changes.

Do not skip visual, accessibility or performance validation for UI changes.

## 8 File‑naming & archival conventions

- Documentation naming – New docs in docs/ must start with an ISO date: YYYY‑MM‑DD-feature-name.md. Place them inappropriate subdirectories (docs/implementation/, docs/design/, docs/architecture/ etc.).
- Archiving superseded files – Once a file is superseded and unused for 7 days, move it to docs/archive/YYYY‑MM‑DD/ with a README pointer. Update doc-ref.md to reflect the new location.
- Root directory cleanliness – Keep the root directory lean: source code, config files, README.md and this CLAUDE.md. All other content belongs in docs/, scripts/ or working_files/.
- Versioning – Use semantic versioning (e.g. v1.2.0) for modules, components and design tokens. Document version changes in docs/design/version_history.md.

## 9 Copy document synchronisation

The marketing website relies on **synchronised copy** across multiple languages. Core copy documents reside in the docs/content/ directory:

| Language | Path |
| :---- | :---- |
| **English** | /docs/content/SKIIN_WEBSITE_COPY_ENGLISH.md |
| **German** | /docs/content/SKIIN_WEBSITE_COPY_GERMAN.md |
| **French** | /docs/content/SKIIN_WEBSITE_COPY_FRENCH.md |
| **Italian** | /docs/content/SKIIN_WEBSITE_COPY_ITALIAN.md (pending creation) |
| **Review** | /docs/content/COPY_DOCUMENTS_REVIEW.md |

### Synchronisation rules

* **Reflect changes:** Any text change in code or components must be mirrored in the **English** copy document within **24 hours**. Document the change in the iteration folder (see below) and update version numbers.

* **Propagate translations:** Changes in one language must be propagated to **all** languages within **48 hours** via the translation pipeline to ensure fidelity.

* **Version tracking:** Increment the version number and date whenever copy changes are made.

* **Review cycle:** Conduct a **monthly review** and record notes in the review file.

### Update triggers

* New page creation
* Component text changes
* Translation file updates
* Legal/medical disclaimer changes
* CTA modifications
* Error message updates

### Enforcement

Before marking any text‑related task as complete, ensure that:
* The copy document is updated.
* All languages are synchronised.
* The version number is incremented.
* Review notes are added.

### Iteration process

When iterating on copy:
1. **Create an iteration folder** under /docs/content/iterations/YYYY‑MM‑DD‑iteration‑name/.
2. **Copy** current copy documents into this folder before making changes.
3. **Make changes** in the main copy documents.
4. **Document changes** in /docs/content/iterations/YYYY‑MM‑DD‑iteration‑name/CHANGES.md.
5. **Update version numbers** in the main documents (e.g., v1.0 → v1.1).
6. **Synchronise all languages** within **48 hours**
7. **Record relationships** between copy sections and components in the knowledge graph (e.g. entity:copy:hero-headline relates to entity:component:HeroSection) when memory MCP is available. Persist iteration notes via memory.store using keys like copy-iteration-2025-07-24.
## 10 Visual asset inventory

Maintain an inventory of images, videos and design references to ensure consistent use across the site. Store assets under /assets/images/ and /assets/videos/. Document each asset in docs/assets/asset-inventory.md.

| Category | Examples |
| :---- | :---- |
| **Process & Product Images** | Doctor consultation, device delivery, wearing the SKIIN device, app showing live ECG and doctor–patient interactions. See /assets/images/… for file names. Use these to illustrate the 5‑step customer journey. |
| **Videos** | “Cardiac Assessment” and “Silent Arrhythmias” – educational videos explaining arrhythmia prevalence and home monitoring. |
| **Design references** | Progressive scrolling statistics, dark contrast sections, comparison tables – these guide page layout and interactive elements. See /assets/images/design-examples/. |
| **Medical advisors & team** | Photos of Prof. Dr. Frank Ruschitzka, PD Dr. Mehdi Namdar, Dr. Mathias Wilhelm, Dr. Michiel Winter and the SKIIN team. |
| **MVCP & related apps** | Screenshots of the Myant Virtual Clinic Portal (MVCP) for physician pages. These may inspire layout patterns but should not be directly copied. |

Document asset descriptions, file paths and usage guidelines in docs/assets/asset-inventory.md.

## 11 Glossary (quick reference)

| Term | Meaning |
| :---- | :---- |
| **MCP** | Modular Capability Provider: remote tool service (search, memory, Puppeteer, Supabase, etc.). |
| **TDG** | Test‑Driven Generation – an AI‑assisted TDD loop: write tests first, then implement code. |
| **Atomic component** | React component ≤ 50 LOC with a single responsibility, following atomic design principles. |
| **LOE** | Level‑Of‑Effort estimate. |
| **P0** | Highest urgency/severity level in bug tracking. |
| **Knowledge graph** | Persistent representation of project entities and their relationships in the memory MCP server. |
| **Memory MCP** | Server providing persistent storage, retrieval of vectorised information, and knowledge graph capabilities (entities, relations, observations). |
| **CI/CD** | Continuous integration and deployment pipeline running automated tests, audits and releases. |
| **ADR** | Architecture Decision Record – documents design choices and their trade‑offs. |

## 12 Current implementation status

### Completed ✅

* **Foundation:** Italian language infrastructure implemented; product names updated to v2.0; skeleton components built; translation directories scaffolded.
* **Component architecture:** 80+ React components following atomic design; multi‑theme support implemented via CSS variables; responsive layout scaffolded.
* **Routing system:** 69 routes configured across English, German, French and Italian; all pages include locale prefixes and fallback routing.
* **State management:** Context API and TanStack Query configured; basic Zod schemas defined; forms integrated with React‑Hook‑Form.
* **Analytics framework:** GA4, Google Ads and HubSpot scripts added; awaiting production IDs.

### In progress 🚧

* **Homepage content:** Components exist; English copy ready; translations pending; asset selection underway.
* **Translations:** File structure ready; German and French copy partially integrated; Italian translation to follow.
* **Interactive calculators:** Eligibility checker UI built; awaiting backend design and integration; coverage calculator not started.
* **Design versioning:** Initial version (v1.0) defined; changelog file created; version updates pending.
* **Accessibility audit:** Basic checks performed; full audit scheduled for Phase 3\.

### Not started ❌
* **Protected components:** HeartBalanceRing, ContributingFactorCards, TabNavigation and TodayTab are not yet implemented.
* **Medical content:** Clinical evidence, compliance documents and testimonials not integrated; requires regulatory review.
* **Content management:** No CMS or dynamic content loading system implemented. Consider using Supabase or a static site generator in Phase 4\.
* **IBM Plex Sans:** Font files not loaded; to be added in Phase 2\.
* **Performance budget definition:** Budgets for LCP, CLS and API latency not defined; to be set in Phase 3\.
### Critical paths
* **Week 1:** Finish protected components, homepage content and analytics configuration.
* **Weeks 2–3:** Complete German/French translations and integrate medical content.
* **Weeks 4–5:** Implement calculators and integrate insurance mappings. Conduct performance and accessibility audits.
Week 6: Run compliance review, final optimisation and launch. Prepare post‑mortems and next iteration plan.
## 13 New modules & workflow summary (v5.0)

The universal process v5.0 introduces several new modules and updates existing ones. Below is a summary of **how they apply** to the SKIIN website:

### Memory Management Module Integration

The memory management module is now a core part of the agent lifecycle:

* **Session Start**: Always recall project context, recent changes, and phase status before beginning work
* **During Development**: Create memories for task outcomes, bug discoveries, design decisions, and component specs
* **Graph Maintenance**: Create entities for new components/features, establish relationships, add observations
* **Memory Lifecycle**: Follow creation → recall → update → archive pattern with proper naming conventions
* **Automated Triggers**: Memory creation happens automatically on task completion, bug discovery, and daily snapshots

See `/docs/process/2025-07-29-memory-implementation-guide.md` for detailed patterns and examples.

* **Planning & Memory Management** – Use the planner module to create a detailed plan in planning.md and generate tasks in todo.md. When memory MCP is available, store plans and tasks in memory (memory.store). Recall past research, design decisions and plans at the start of each session (memory.recall).

* **Safety & Guidance** – Invoke guardrails when uncertain and design prompts clearly. Use multi‑agent guidance for complex tasks (e.g. a research agent for copywriting, a coding agent for front‑end, a testing agent for accessibility/performance).

* **Quality Assurance** – Follow test‑driven development; run unit, integration, visual and accessibility tests. Use the performance module to set budgets and instrument code. Perform code reviews with static analysis tools and peer feedback. Manage bugs via the redesigned bug module: record defects in docs/bugs/bugs.md, track active issues in docs/bugs/bugs_todo.md, plan fixes in docs/bugs/bug_fix_planning.md and integrate bug tasks into todo.md. Log bug events in event-stream.md.

* **Design & Simulation** – Adhere to the lovable design module and SKIIN design system guidelines. Use the design versioning module to track token changes and synchronise updates. Use mock data and simulation modules when backend services are unavailable. Employ AI‑generated components via the 21st‑dev MCP, but ensure final implementations meet accessibility and design standards.

* **Security & Compliance** – Follow the security module: validate inputs, store secrets securely, implement RLS policies in Supabase and comply with GDPR and Swiss medical regulations. Run regular audits and maintain documentation.

* **Infrastructure & Deployment** – Use architecture templates for Vite/React \+ Supabase. Manage dependencies and security with weekly audits. Keep the repository organised and archive superseded files. Configure CI/CD pipelines for automated testing and deployment. Use the sandbox environment spec for local development.

* **Context & Knowledge Graph** – When memory MCP is available, use the memory module to persist and query context. Create entities for pages, components, copy sections, assets and tasks. Define relations like page → uses → component, component → linked_to → copy and copy → translated_to → copy (fr). Record observations such as performance metrics, bug reports and decisions. Persist snapshots via memory.store for time‑travel debugging. Use memory.create_entities, memory.create_relations, and memory.add_observations to build the graph.

* **Documentation & Context Engineering** – Before acting, gather context: read event-stream.md, todo.md, planning.md, conventions.md and doc-ref.md. Use shell commands to explore the repository and when memory MCP is available, recall past information using memory.recall. Summarise context in RESEARCH.md or planning.md and when memory MCP is available, persist via memory. When creating or updating documents, follow naming and placement conventions (ISO‑date prefixes under docs/) and update doc-ref.md. Archive superseded documents appropriately. Log each event in event-stream.md on a single line with timestamp, event type and concise description.

* **Process Reprioritisation** – The planning & todo modules now include a mechanism for reprioritising tasks. When new research or requirements emerge, review planning.md and todo.md, reorder tasks, add or remove entries. Document these changes as Plan events in event-stream.md.

* **GitHub Process & Development Workflow** – Follow a structured commit and PR strategy integrated with planning/todo systems:
  - **Commit Strategy**: Group tasks in todo.md under commit boundaries. Commit after completing each group (typically 2-5 related tasks). Use conventional commits: `feat:`, `fix:`, `docs:`, `test:`, `refactor:`, `chore:`. Always run tests before committing.
  - **PR Strategy**: Create PRs at phase or major feature boundaries defined in planning.md. Feature branches follow pattern: `feature/[phase]-[description]`. PRs must include summary, testing performed, and screenshots for UI changes.
  - **Integration**: Tasks in todo.md are organized under commit/PR headers. Event-stream.md logs all commits and PRs. Agent checks `git status` at session start and after task completion.
  - **Testing Before Commits**: Every commit must pass: design system compliance (no hardcoded values), multilanguage verification (all 4 languages), performance budgets, accessibility checks.
  - **Documentation**: Update docs in same commit as code changes. Never create PR without updating relevant documentation.

By following this playbook and the universal process (@working_files/CLAUDE_PROCESS.md), Claude Code can autonomously plan, execute, validate and document the SKIIN marketing site with minimal user intervention. Always adhere to the principles above, update the working files promptly and use the MCP tools wisely.
