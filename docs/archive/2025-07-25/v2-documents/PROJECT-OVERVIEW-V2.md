# SKIIN Switzerland – V2 Project Overview (2025‑07‑22)

**Purpose:** This document summarises the objectives, scope and plan for the V2 release of the SKIIN Switzerland multilingual medical marketing site. It references the **V2 copy update specification**, the **design system rollout plan** and the **production readiness report**, and outlines the high‑level roadmap captured in planning.md and todo.md.

## Objectives

1. **Align product naming and messaging** – Rename the 14‑Day Holter to **10‑Day Heart Screening** and TriTest to **SKIIN 3X Screening™** across all languages and marketing materials[\[1\]](https://github.com/yangsi7/skinn-convert-swiss-pages/blob/ffebeef0fdc7686d1c5ab7c9a31881bc2f1112a7/docs/content/iterations/2025-01-22-COPY_UPDATE_SPEC.md#L10-L12).

2. **Introduce new themes and storytelling** – Incorporate longevity, preventive health, arrhythmia‑stroke connections, emotional storytelling and caregiver messaging into the copy and design[\[2\]](https://github.com/yangsi7/skinn-convert-swiss-pages/blob/ffebeef0fdc7686d1c5ab7c9a31881bc2f1112a7/docs/content/iterations/2025-01-22-COPY_UPDATE_SPEC.md#L16-L28).

3. **Add Italian as a supported language** – Extend the multilingual infrastructure to include Italian alongside English, German and French[\[3\]](https://github.com/yangsi7/skinn-convert-swiss-pages/blob/ffebeef0fdc7686d1c5ab7c9a31881bc2f1112a7/docs/content/iterations/2025-01-22-COPY_UPDATE_SPEC.md#L30-L32).

4. **Redesign the homepage and key pages** – Implement a new homepage featuring a compelling hero section, problem/solution framework, tiered pricing, medical advisor profiles and testimonials[\[4\]](https://github.com/yangsi7/skinn-convert-swiss-pages/blob/ffebeef0fdc7686d1c5ab7c9a31881bc2f1112a7/docs/content/iterations/2025-01-22-COPY_UPDATE_SPEC.md#L34-L106). Modernise high‑priority pages (Physicians, Solutions, About) using progressive design components[\[5\]](https://github.com/yangsi7/skinn-convert-swiss-pages/blob/ffebeef0fdc7686d1c5ab7c9a31881bc2f1112a7/docs/implementation/design-system-rollout-plan.md#L43-L62).

5. **Develop audience & partner pages** – Create tailored sections for patients, general practitioners, cardiologists, telemedicine companies, corporate wellness programmes and partners, each with specific value propositions[\[6\]](https://github.com/yangsi7/skinn-convert-swiss-pages/blob/ffebeef0fdc7686d1c5ab7c9a31881bc2f1112a7/docs/content/iterations/2025-01-22-COPY_UPDATE_SPEC.md#L129-L169) and interactive content[\[7\]](https://github.com/yangsi7/skinn-convert-swiss-pages/blob/ffebeef0fdc7686d1c5ab7c9a31881bc2f1112a7/docs/implementation/design-system-rollout-plan.md#L63-L82).

6. **Explain technology and workflows** – Produce clear descriptions of the patented carbon‑electrode technology and patient/doctor workflows[\[8\]](https://github.com/yangsi7/skinn-convert-swiss-pages/blob/ffebeef0fdc7686d1c5ab7c9a31881bc2f1112a7/docs/content/iterations/2025-01-22-COPY_UPDATE_SPEC.md#L171-L194).

7. **Ensure readiness and polish** – Achieve full translation coverage, performance optimisation, accessibility compliance, robust testing, analytics integration and comprehensive documentation[\[9\]](https://github.com/yangsi7/skinn-convert-swiss-pages/blob/ffebeef0fdc7686d1c5ab7c9a31881bc2f1112a7/docs/PRODUCTION_READINESS_REPORT.md#L131-L153)[\[10\]](https://github.com/yangsi7/skinn-convert-swiss-pages/blob/ffebeef0fdc7686d1c5ab7c9a31881bc2f1112a7/docs/implementation/design-system-rollout-plan.md#L83-L101).

## Key Changes & Requirements

### Copy & Content

* **New product names** must replace all occurrences of the old names, including route paths, translation keys and marketing assets[\[1\]](https://github.com/yangsi7/skinn-convert-swiss-pages/blob/ffebeef0fdc7686d1c5ab7c9a31881bc2f1112a7/docs/content/iterations/2025-01-22-COPY_UPDATE_SPEC.md#L10-L12).

* **Homepage structure** requires a new hero with emotional headlines and CTAs[\[11\]](https://github.com/yangsi7/skinn-convert-swiss-pages/blob/ffebeef0fdc7686d1c5ab7c9a31881bc2f1112a7/docs/content/iterations/2025-01-22-COPY_UPDATE_SPEC.md#L34-L51), a problem/solution section with three problems and three solutions[\[12\]](https://github.com/yangsi7/skinn-convert-swiss-pages/blob/ffebeef0fdc7686d1c5ab7c9a31881bc2f1112a7/docs/content/iterations/2025-01-22-COPY_UPDATE_SPEC.md#L53-L91), a pricing section with self‑pay tiers[\[13\]](https://github.com/yangsi7/skinn-convert-swiss-pages/blob/ffebeef0fdc7686d1c5ab7c9a31881bc2f1112a7/docs/content/iterations/2025-01-22-COPY_UPDATE_SPEC.md#L92-L106), a medical advisor section[\[14\]](https://github.com/yangsi7/skinn-convert-swiss-pages/blob/ffebeef0fdc7686d1c5ab7c9a31881bc2f1112a7/docs/content/iterations/2025-01-22-COPY_UPDATE_SPEC.md#L107-L128) and testimonials with caregiver angles[\[15\]](https://github.com/yangsi7/skinn-convert-swiss-pages/blob/ffebeef0fdc7686d1c5ab7c9a31881bc2f1112a7/docs/content/iterations/2025-01-22-COPY_UPDATE_SPEC.md#L242-L253).

* **Audience sections** must communicate tailored benefits for each group and be available in all four languages[\[6\]](https://github.com/yangsi7/skinn-convert-swiss-pages/blob/ffebeef0fdc7686d1c5ab7c9a31881bc2f1112a7/docs/content/iterations/2025-01-22-COPY_UPDATE_SPEC.md#L129-L169).

* **Technology & workflow content** should highlight the benefits of carbon‑electrode technology and provide step‑by‑step journeys for patients and doctors[\[8\]](https://github.com/yangsi7/skinn-convert-swiss-pages/blob/ffebeef0fdc7686d1c5ab7c9a31881bc2f1112a7/docs/content/iterations/2025-01-22-COPY_UPDATE_SPEC.md#L171-L194).

### Design System & Components

* The **progressive design system** defines core components such as ProgressiveCard, ImageSection, TeamMember, FeatureGrid and StatCard[\[16\]](https://github.com/yangsi7/skinn-convert-swiss-pages/blob/ffebeef0fdc7686d1c5ab7c9a31881bc2f1112a7/docs/implementation/design-system-rollout-plan.md#L30-L36). These components must be implemented during the foundation phase and used across all pages.

* High‑priority pages (Physicians, Solutions, About) should adopt the modern design patterns of Home2, integrate MVCP screenshots, process flows and Swiss heritage content[\[5\]](https://github.com/yangsi7/skinn-convert-swiss-pages/blob/ffebeef0fdc7686d1c5ab7c9a31881bc2f1112a7/docs/implementation/design-system-rollout-plan.md#L43-L62).

* Content‑rich pages (partner pages, How It Works, About completion) should incorporate interactive timelines, testimonials and compliance information[\[7\]](https://github.com/yangsi7/skinn-convert-swiss-pages/blob/ffebeef0fdc7686d1c5ab7c9a31881bc2f1112a7/docs/implementation/design-system-rollout-plan.md#L63-L82).

### Multilingual & Technical

* Extract all hard‑coded text into translation files and complete German and French translations; prepare Italian files for new content[\[17\]](https://github.com/yangsi7/skinn-convert-swiss-pages/blob/ffebeef0fdc7686d1c5ab7c9a31881bc2f1112a7/working_files/todo.md#L57-L85).

* Update routing to support Italian and ensure language switching works across all pages.

* Implement a theme verification script to detect hard‑coded colours[\[18\]](https://github.com/yangsi7/skinn-convert-swiss-pages/blob/ffebeef0fdc7686d1c5ab7c9a31881bc2f1112a7/working_files/todo.md#L42-L46).

* Add error boundaries, loading states, TypeScript strict mode, unit tests, bundle optimisation and SEO meta tags[\[9\]](https://github.com/yangsi7/skinn-convert-swiss-pages/blob/ffebeef0fdc7686d1c5ab7c9a31881bc2f1112a7/docs/PRODUCTION_READINESS_REPORT.md#L131-L153).

## Implementation Plan Summary

The work is organised into **five phases**, each with a set of tasks and priorities. Detailed tasks and owners are documented in planning.md and mirrored in the checklist todo.md.

| Phase | Focus | Key Deliverables |
| :---- | :---- | :---- |
| **0\. Setup & Foundation** | Audit V1 content, add Italian support, rename products, fix Home2 navigation and create core progressive components[\[16\]](https://github.com/yangsi7/skinn-convert-swiss-pages/blob/ffebeef0fdc7686d1c5ab7c9a31881bc2f1112a7/docs/implementation/design-system-rollout-plan.md#L30-L36). Update conventions and documentation. |  |
| **1\. Translation Extraction & Infrastructure** | Extract all remaining hard‑coded text, complete DE/FR translations and translate V2 copy into Italian. Validate language switching and implement a theme verification script. |  |
| **2\. Homepage & High‑Priority Pages** | Design and implement the new homepage, build HeroV2, ProblemSolution, PricingSection and MedicalAdvisors components, and modernise the Physicians, Solutions and About pages using progressive design[\[5\]](https://github.com/yangsi7/skinn-convert-swiss-pages/blob/ffebeef0fdc7686d1c5ab7c9a31881bc2f1112a7/docs/implementation/design-system-rollout-plan.md#L43-L62). Begin CTA A/B testing[\[19\]](https://github.com/yangsi7/skinn-convert-swiss-pages/blob/ffebeef0fdc7686d1c5ab7c9a31881bc2f1112a7/docs/content/iterations/2025-01-22-COPY_UPDATE_SPEC.md#L219-L240). |  |
| **3\. Audience & Partner Sections** | Define templates for audience and partner pages, write and translate tailored content, build dedicated sections, expand How It Works and About with interactive timelines and medical board profiles[\[7\]](https://github.com/yangsi7/skinn-convert-swiss-pages/blob/ffebeef0fdc7686d1c5ab7c9a31881bc2f1112a7/docs/implementation/design-system-rollout-plan.md#L63-L82). Integrate CTAs and analytics. |  |
| **4\. Technology, Workflow & Content‑Rich Pages** | Write technical copy on the patented technology, implement a reusable technology section component and create workflow diagrams and interactive timelines[\[8\]](https://github.com/yangsi7/skinn-convert-swiss-pages/blob/ffebeef0fdc7686d1c5ab7c9a31881bc2f1112a7/docs/content/iterations/2025-01-22-COPY_UPDATE_SPEC.md#L171-L194). |  |
| **5\. Polish & Readiness** | Optimise performance and accessibility, add error boundaries and loading states, enable TypeScript strict mode, write unit tests, optimise bundles and SEO, and update all documentation. Compile a readiness report capturing metrics and remaining risks[\[9\]](https://github.com/yangsi7/skinn-convert-swiss-pages/blob/ffebeef0fdc7686d1c5ab7c9a31881bc2f1112a7/docs/PRODUCTION_READINESS_REPORT.md#L131-L153). |  |

## Supporting Documentation

Several documents guide and support this project:

* **V2 copy update specification (2025‑01‑22)** – Defines new product names, themes, homepage structure, pricing, medical advisor content, audience value propositions, CTA libraries and emotional storytelling[\[20\]](https://github.com/yangsi7/skinn-convert-swiss-pages/blob/ffebeef0fdc7686d1c5ab7c9a31881bc2f1112a7/docs/content/iterations/2025-01-22-COPY_UPDATE_SPEC.md#L10-L28)[\[4\]](https://github.com/yangsi7/skinn-convert-swiss-pages/blob/ffebeef0fdc7686d1c5ab7c9a31881bc2f1112a7/docs/content/iterations/2025-01-22-COPY_UPDATE_SPEC.md#L34-L106). This specification is the authoritative source for copy and messaging changes.

* **Design System Rollout Plan** – Provides a phased strategy to migrate legacy components to modern progressive components, outlines tasks for high‑priority and content‑rich pages, and specifies performance, accessibility and risk mitigation measures[\[21\]](https://github.com/yangsi7/skinn-convert-swiss-pages/blob/ffebeef0fdc7686d1c5ab7c9a31881bc2f1112a7/docs/implementation/design-system-rollout-plan.md#L30-L62)[\[7\]](https://github.com/yangsi7/skinn-convert-swiss-pages/blob/ffebeef0fdc7686d1c5ab7c9a31881bc2f1112a7/docs/implementation/design-system-rollout-plan.md#L63-L82).

* **Production Readiness Report** – Lists outstanding technical tasks (translations, error boundaries, tests, bundle optimisation, SEO) and gives a baseline for the readiness metrics[\[9\]](https://github.com/yangsi7/skinn-convert-swiss-pages/blob/ffebeef0fdc7686d1c5ab7c9a31881bc2f1112a7/docs/PRODUCTION_READINESS_REPORT.md#L131-L153).

* **Research Summary & Tree of Thought** – Located in RESEARCH.md and TREE\_OF\_THOUGHT.md, these documents synthesise findings and map relationships between entities, ensuring nothing is overlooked.

* **Planning & To‑Do** – planning.md contains the detailed phase plan with tasks, priorities, owners and notes; todo.md provides a checkbox list to track progress.

* **Conventions & Docs Index** – conventions.md sets naming, copy, coding and design conventions; doc-ref.md indexes all documentation; i18n-analysis-report.md analyses the multilingual infrastructure and outlines further i18n tasks.

Together, these documents form the basis of the project strategy and should be consulted regularly. All updates to code or documentation must follow the **CLAUDE\_PROCESS.md** guidelines to ensure consistency, quality and traceability.

---

[\[1\]](https://github.com/yangsi7/skinn-convert-swiss-pages/blob/ffebeef0fdc7686d1c5ab7c9a31881bc2f1112a7/docs/content/iterations/2025-01-22-COPY_UPDATE_SPEC.md#L10-L12) [\[2\]](https://github.com/yangsi7/skinn-convert-swiss-pages/blob/ffebeef0fdc7686d1c5ab7c9a31881bc2f1112a7/docs/content/iterations/2025-01-22-COPY_UPDATE_SPEC.md#L16-L28) [\[3\]](https://github.com/yangsi7/skinn-convert-swiss-pages/blob/ffebeef0fdc7686d1c5ab7c9a31881bc2f1112a7/docs/content/iterations/2025-01-22-COPY_UPDATE_SPEC.md#L30-L32) [\[4\]](https://github.com/yangsi7/skinn-convert-swiss-pages/blob/ffebeef0fdc7686d1c5ab7c9a31881bc2f1112a7/docs/content/iterations/2025-01-22-COPY_UPDATE_SPEC.md#L34-L106) [\[6\]](https://github.com/yangsi7/skinn-convert-swiss-pages/blob/ffebeef0fdc7686d1c5ab7c9a31881bc2f1112a7/docs/content/iterations/2025-01-22-COPY_UPDATE_SPEC.md#L129-L169) [\[8\]](https://github.com/yangsi7/skinn-convert-swiss-pages/blob/ffebeef0fdc7686d1c5ab7c9a31881bc2f1112a7/docs/content/iterations/2025-01-22-COPY_UPDATE_SPEC.md#L171-L194) [\[11\]](https://github.com/yangsi7/skinn-convert-swiss-pages/blob/ffebeef0fdc7686d1c5ab7c9a31881bc2f1112a7/docs/content/iterations/2025-01-22-COPY_UPDATE_SPEC.md#L34-L51) [\[12\]](https://github.com/yangsi7/skinn-convert-swiss-pages/blob/ffebeef0fdc7686d1c5ab7c9a31881bc2f1112a7/docs/content/iterations/2025-01-22-COPY_UPDATE_SPEC.md#L53-L91) [\[13\]](https://github.com/yangsi7/skinn-convert-swiss-pages/blob/ffebeef0fdc7686d1c5ab7c9a31881bc2f1112a7/docs/content/iterations/2025-01-22-COPY_UPDATE_SPEC.md#L92-L106) [\[14\]](https://github.com/yangsi7/skinn-convert-swiss-pages/blob/ffebeef0fdc7686d1c5ab7c9a31881bc2f1112a7/docs/content/iterations/2025-01-22-COPY_UPDATE_SPEC.md#L107-L128) [\[15\]](https://github.com/yangsi7/skinn-convert-swiss-pages/blob/ffebeef0fdc7686d1c5ab7c9a31881bc2f1112a7/docs/content/iterations/2025-01-22-COPY_UPDATE_SPEC.md#L242-L253) [\[19\]](https://github.com/yangsi7/skinn-convert-swiss-pages/blob/ffebeef0fdc7686d1c5ab7c9a31881bc2f1112a7/docs/content/iterations/2025-01-22-COPY_UPDATE_SPEC.md#L219-L240) [\[20\]](https://github.com/yangsi7/skinn-convert-swiss-pages/blob/ffebeef0fdc7686d1c5ab7c9a31881bc2f1112a7/docs/content/iterations/2025-01-22-COPY_UPDATE_SPEC.md#L10-L28) 2025-01-22-COPY\_UPDATE\_SPEC.md

[https://github.com/yangsi7/skinn-convert-swiss-pages/blob/ffebeef0fdc7686d1c5ab7c9a31881bc2f1112a7/docs/content/iterations/2025-01-22-COPY\_UPDATE\_SPEC.md](https://github.com/yangsi7/skinn-convert-swiss-pages/blob/ffebeef0fdc7686d1c5ab7c9a31881bc2f1112a7/docs/content/iterations/2025-01-22-COPY_UPDATE_SPEC.md)

[\[5\]](https://github.com/yangsi7/skinn-convert-swiss-pages/blob/ffebeef0fdc7686d1c5ab7c9a31881bc2f1112a7/docs/implementation/design-system-rollout-plan.md#L43-L62) [\[7\]](https://github.com/yangsi7/skinn-convert-swiss-pages/blob/ffebeef0fdc7686d1c5ab7c9a31881bc2f1112a7/docs/implementation/design-system-rollout-plan.md#L63-L82) [\[10\]](https://github.com/yangsi7/skinn-convert-swiss-pages/blob/ffebeef0fdc7686d1c5ab7c9a31881bc2f1112a7/docs/implementation/design-system-rollout-plan.md#L83-L101) [\[16\]](https://github.com/yangsi7/skinn-convert-swiss-pages/blob/ffebeef0fdc7686d1c5ab7c9a31881bc2f1112a7/docs/implementation/design-system-rollout-plan.md#L30-L36) [\[21\]](https://github.com/yangsi7/skinn-convert-swiss-pages/blob/ffebeef0fdc7686d1c5ab7c9a31881bc2f1112a7/docs/implementation/design-system-rollout-plan.md#L30-L62) design-system-rollout-plan.md

[https://github.com/yangsi7/skinn-convert-swiss-pages/blob/ffebeef0fdc7686d1c5ab7c9a31881bc2f1112a7/docs/implementation/design-system-rollout-plan.md](https://github.com/yangsi7/skinn-convert-swiss-pages/blob/ffebeef0fdc7686d1c5ab7c9a31881bc2f1112a7/docs/implementation/design-system-rollout-plan.md)

[\[9\]](https://github.com/yangsi7/skinn-convert-swiss-pages/blob/ffebeef0fdc7686d1c5ab7c9a31881bc2f1112a7/docs/PRODUCTION_READINESS_REPORT.md#L131-L153) PRODUCTION\_READINESS\_REPORT.md

[https://github.com/yangsi7/skinn-convert-swiss-pages/blob/ffebeef0fdc7686d1c5ab7c9a31881bc2f1112a7/docs/PRODUCTION\_READINESS\_REPORT.md](https://github.com/yangsi7/skinn-convert-swiss-pages/blob/ffebeef0fdc7686d1c5ab7c9a31881bc2f1112a7/docs/PRODUCTION_READINESS_REPORT.md)

[\[17\]](https://github.com/yangsi7/skinn-convert-swiss-pages/blob/ffebeef0fdc7686d1c5ab7c9a31881bc2f1112a7/working_files/todo.md#L57-L85) [\[18\]](https://github.com/yangsi7/skinn-convert-swiss-pages/blob/ffebeef0fdc7686d1c5ab7c9a31881bc2f1112a7/working_files/todo.md#L42-L46) todo.md

[https://github.com/yangsi7/skinn-convert-swiss-pages/blob/ffebeef0fdc7686d1c5ab7c9a31881bc2f1112a7/working\_files/todo.md](https://github.com/yangsi7/skinn-convert-swiss-pages/blob/ffebeef0fdc7686d1c5ab7c9a31881bc2f1112a7/working_files/todo.md)