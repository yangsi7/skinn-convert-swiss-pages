# Design System – New Project Template

This template provides a structured approach for defining and evolving a design system for a new project. It draws inspiration from the **design‑system‑starting‑instructions** document but focuses on generic guidelines and placeholders. Adapt it to match your brand, user experience goals and technical stack.

## 1 Purpose and Philosophy

Describe the core purpose of your design system. Articulate the brand values and user experience goals it supports (e.g. trust, inclusivity, innovation). Establish principles such as **consistency**, **accessibility**, **responsiveness** and **performance**. Use this section to anchor decisions around colours, typography, spacing and interactions.

## 2 Colour Palette

Define a colour palette that reflects your brand. Use semantic names rather than raw colours (e.g. \--color-primary, \--color-success). Organise colours into categories: **Primary**, **Secondary**, **Accent**, **Neutrals**, **Status** (success, warning, error). Provide placeholders for HEX/RGB values and notes on usage. Ensure contrast ratios meet WCAG 2.1 AA.

Example structure:

| Role | Variable / Token | Placeholder Value | Notes |
| :---- | :---- | :---- | :---- |
| Primary | \--color-primary | \<primary-colour\> | Used for headlines, navigation and emphasis |
| Secondary | \--color-secondary | \<secondary-colour\> | Used for call‑to‑action buttons |
| Neutral | \--color-background | \<background-colour\> | Default page background |
| Status | \--color-success | \<success-colour\> | Success messages and icons |
| Status | \--color-error | \<error-colour\> | Errors and critical states |

Define these variables in your CSS or Tailwind configuration (e.g. tailwind.config.ts) and reference them in your components.

## 3 Typography

Establish your typography scale, fonts and weights. Use relative units (rem) and provide tokens for font families, sizes, line heights and weights. Document guidelines for headings, body text, captions and labels. Provide a table with placeholders:

| Token | Placeholder Value | Notes |
| :---- | :---- | :---- |
| \--font-family-base | \<base-font-family\> | Primary typeface (e.g. Inter, sans‑serif) |
| \--font-size-base | \<base-size\> | Body text (e.g. 1 rem) |
| \--font-size-lg | \<large-size\> | Subheadings |
| \--line-height-normal | \<line-height\> | Standard body text |
| \--weight-bold | \<font-weight\> | Bold weight |

Specify usage guidelines (e.g. maximum heading levels, avoiding too many weights). Provide examples of hierarchy.

## 4 Spacing & Layout

Define a spacing scale based on a small unit (e.g. **4 px**). Provide tokens for spacing increments and usage patterns (margins, padding, gaps). Document responsive breakpoints (e.g. 640 px, 768 px, 1024 px, 1280 px) and grid guidelines (column counts, gutter sizes). Provide examples of common layouts (e.g. card grid, hero section) and note container widths.

## 5 Components Inventory

Create a catalogue of components. Categorise them by level (atoms, molecules, organisms) or by domain (UI controls, data display, navigation). For each component, describe:

* **Name & Purpose** – What the component is used for.

* **Props & Variants** – Required and optional props; variations in size, style or state.

* **Usage Guidelines** – Where and how to use the component; accessibility and performance considerations.

* **Source & Ownership** – Link to the source file in your repository. Note whether it originates from a library (e.g. shadcn/ui, Supabase UI) or an AI‑generated component via Magic MCP. If AI‑generated, save the prompt and modifications in docs/ai/.

Begin with a few common components (Button, Card, Form, Modal, Table) and expand as your project grows. For complex components, create dedicated specification documents under docs/design/ and link them here.

## 6 Micro‑Interactions & Animations

Define your motion language. Specify standard durations (e.g. 200 ms for button hover, 400 ms for page transitions), easing functions (e.g. cubic-bezier(0.4,0,0.2,1)) and guidelines for when to use motion. Provide examples (e.g. button press scale down, card hover lift) and emphasise that animations should respect prefers-reduced-motion and not hinder performance.

## 7 Accessibility Guidelines

Accessibility must be integrated from the start. Document:

* **Colour Contrast** – Minimum ratios (≥4.5:1 for text, ≥3:1 for UI components). Provide examples or a contrast matrix.

* **Keyboard Navigation** – Ensure all interactive elements are focusable with Tab in a logical order. Provide focus styling guidelines.

* **ARIA & Semantic HTML** – Use proper HTML elements (\<button\>, \<nav\>, \<main\>) and ARIA attributes when necessary.

* **Form Errors & Validation** – Show clear error messages associated with inputs; update ARIA live regions.

* **Motion & Cognitive Accessibility** – Honour prefers-reduced-motion; avoid flashing content; provide pauses or controls for auto‑playing media.

* **Testing** – Use automated tools (Axe, Lighthouse) and manual keyboard checks. Document issues and plan fixes.

## 8 Performance Budgets

Set measurable targets for performance, such as **LCP \< 2.5 s**, **CLS \< 0.1**, **TBT \< 200 ms**, **TTI \< 2 s**. Provide strategies for achieving these targets (image optimisation, lazy loading, server components, caching). Document measurement techniques (e.g. Lighthouse, Web Vitals) and track progress in docs/performance/.

## 9 Extending and Evolving the Design System

This design system is a living document. Define a process for proposing and integrating changes:

1. **Proposal** – When a new token or component is needed, draft a proposal describing the use case and design rationale. Create a pull request with the initial implementation.

2. **Review** – Conduct a design and code review with stakeholders (designers, developers, accessibility experts). Document feedback and iterate.

3. **Implementation** – After approval, implement the change. Update tokens, components, documentation and tests. Use the version control history to track modifications.

4. **Communication** – Announce the change to the team. Update doc-ref.md with links to relevant documents.

5. **Maintenance** – Regularly audit the design system for unused tokens, inconsistent components or outdated guidelines. Deprecate and archive items under docs/archive/.

## 10 Leveraging External Libraries & AI Tools

You may accelerate development by reusing or generating components. Consider:

* **shadcn/ui** – Use their CLI to install base components and copy them into your repository. Customise styles, props and behaviours to align with your design system.

* **Supabase UI** – For projects using Supabase, reuse ready‑made blocks (authentication forms, file upload dropzones). Copy the code and adapt it to your tokens and patterns.

* **Magic MCP** – Use AI tools to generate complex components or layouts. Save the prompts and results in docs/ai/. Review, refactor and test AI‑generated code before adoption.

Document any external resources you integrate and ensure they conform to your design system.

## 11 Process Checklist

At the beginning of a new project or major feature, follow this checklist to initialise and customise your design system:

1. Define the project’s purpose and values (Section 1).

2. Choose or adapt the colour palette (Section 2) and define tokens.

3. Select fonts and establish the typography scale (Section 3).

4. Define spacing tokens and responsive layout breakpoints (Section 4).

5. Inventory initial components, copying from libraries or AI tools as needed (Section 5).

6. Specify micro‑interaction and animation patterns (Section 6).

7. Set accessibility requirements and test procedures (Section 7).

8. Set performance budgets and optimisation strategies (Section 8).

9. Establish the extension process for tokens and components (Section 9).

10. Plan integration of external libraries and AI tools (Section 10).

11. Record decisions and update doc-ref.md.

By following this template, you will build a cohesive, accessible and performant design system that scales with your project. Revisit and refine this document regularly as your product and team evolve.

---

