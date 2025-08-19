# Conventions & Best Practices Template

This template establishes a baseline for the **coding, naming, design, testing, documentation, database and security conventions** used in Claude Code projects. It is intentionally minimal: it defines the structure and guiding principles, leaving project‑specific details (such as colours, fonts, database policies or library choices) to be filled in by your team. Use this file as a living document: revisit and refine it as your project evolves, and reference it whenever creating or modifying code.

## General Coding Practices

1. **Research First** – Before writing code, verify that a similar solution does not already exist. Search the repository and documentation (docs/patterns/, docs/specifications/) and consult authoritative external sources. Avoid reinventing the wheel.

2. **Small, Focused Components** – Each component or module should have a single responsibility and reside in its own file. Extract sub‑components or helper functions when code becomes large or handles multiple concerns. Aim for composability.

3. **Type Safety** – Use a statically typed language (TypeScript or another language if appropriate) in strict mode. Define explicit interfaces for component props. Use unions and discriminated unions for complex state. Avoid any and implicit type coercion.

4. **Hooks / Helpers** – Prefix custom hooks with use and place them under a dedicated directory (e.g. src/hooks/). Keep business logic separate from UI code by using services or util modules in src/lib/ or src/services/.

5. **Error Handling** – Wrap asynchronous calls in try/catch. Provide meaningful error messages and surface user‑friendly notifications. Use Error Boundaries where appropriate to prevent UI crashes.

6. **Testing** – Adopt Test‑Driven Development (TDD). Write unit tests for utilities and business logic and integration tests for user flows. Include visual regression tests for UI components and accessibility audits. Define coverage targets (e.g. ≥80 % on critical paths).

7. **Version Control & CI** – Use descriptive branch names (feature/\<description\>, fix/\<description\>, chore/\<description\>). Keep commit messages concise and present‑tense. Configure continuous integration pipelines to run linting, type checks, tests and deployments. Use pre‑commit hooks to enforce quality locally.

## Naming Conventions

Provide a table or list of naming rules for your project. Fill in details to suit your language and framework. For example:

* **Components** – PascalCase (e.g. UserProfile.tsx).

* **Hooks** – camelCase prefixed with use (e.g. useAuth.ts).

* **Utilities & Services** – camelCase (e.g. formatDate.ts, paymentService.ts).

* **Types & Interfaces** – PascalCase with descriptive suffixes (e.g. UserProfile, PaymentStatus).

* **Constants** – UPPER\_SNAKE\_CASE (e.g. MAX\_RETRIES).

* **Database Tables** – snake\_case and plural (e.g. users, order\_items). Always include an id primary key.

* **Columns** – snake\_case singular names. For foreign keys, use \<referenced\_table\>\_id (e.g. user\_id).

Adjust the rules above according to your stack (e.g. Java, Python). Be consistent across the project.

## Design System Guidelines

Define or link to your design system. Capture high‑level principles such as **consistency**, **accessibility**, **responsiveness** and **performance**. Document tokens and patterns that your UI components must adhere to. For example:

* **Colour Palette** – List semantic roles (primary, secondary, success, warning, error, neutrals) and provide placeholders for HEX/RGB values. Ensure contrast meets WCAG 2.1 AA requirements.

* **Typography** – Define font families, sizes, weights and line heights. Use relative units (e.g. rem).

* **Spacing & Layout** – Choose a base unit (e.g. 4 px) and define spacing increments. Document grid breakpoints for responsive design.

* **Components** – Catalog common components (buttons, cards, forms, modals, tables). For each, describe purpose, props/variants, usage guidelines and accessibility considerations. Link to the source in your repository or external libraries (e.g. shadcn/ui).

* **Micro‑Interactions & Animations** – Specify standard durations (e.g. 200 ms), easing functions and when to use motion. Respect prefers-reduced-motion.

* **Accessibility & Performance** – Set minimum contrast ratios, ensure keyboard navigation and ARIA attributes, and define performance budgets (LCP, CLS, TBT). Link to accessibility testing procedures.

Populate this section with details from your design team or brand guidelines. If using external component libraries or AI tools, document how to incorporate them while maintaining consistency.

## Database & Services Guidelines (Optional)

If your project involves a database or external services (e.g. **Supabase**), create sub‑sections outlining how to declare schemas, generate migrations, define policies and write functions. Specify naming conventions, versioning strategies and restrictions (e.g. always enable Row Level Security, never commit secrets). Provide references to official documentation and call out non‑negotiable rules.

## Documentation & Research

* **Working Files** – Keep planning.md, todo.md, event-stream.md, conventions.md and doc-ref.md up to date. Synchronise them after each iteration.

* **Documentation Structure** – Organise long‑form documents under docs/ (e.g. design/, specifications/, patterns/, research/, requirements/, architecture/, post-mortems/). Use doc-ref.md to index all documents. Archive superseded docs under docs/archive/YYYY‑MM‑DD/ and update the index.

* **Research Protocols** – Conduct thorough research using internal tools (search the codebase with grep, read tests, inspect commit history) and external sources (official documentation, reputable articles). Save detailed notes in docs/research/\<topic\>.md and summarise them in RESEARCH.md with citations.

## Testing & Quality Assurance

Outline your testing strategy and quality thresholds. Specify tools for unit, integration, end‑to‑end, visual regression and accessibility testing. Define coverage targets, pixel‑diff thresholds and performance audits. Describe how tests are run locally and in CI.

## Security & Compliance

State security and privacy requirements applicable to your project. Include guidelines for input validation, sanitisation, secrets management, authentication and authorisation, data encryption, compliance with regulations (e.g. GDPR, HIPAA) and auditing procedures. Document how to address vulnerabilities and perform regular security reviews.

## Continuous Improvement

Encourage regular reflection and improvement. After completing tasks or sprints, document patterns, lessons learned and post‑mortems. Use your knowledge graph or memory services to store observations and update conventions accordingly. Create new sections or update existing ones as the project grows.

By populating this template with your project’s specifics, you establish a consistent and maintainable set of conventions. Adhering to these guidelines will improve code quality, user experience and team collaboration.

---

