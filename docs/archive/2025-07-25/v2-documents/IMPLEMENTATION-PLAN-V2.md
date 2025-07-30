# Multilingual Medical Marketing Site – V2 Copy & Design Implementation Plan (2025‑07‑22)

## Purpose

This plan supersedes the previous sprint plan and aligns the project with the **V2 copy update specification** and the **design‑system rollout plan**. It integrates outstanding tasks from the production readiness report and positions the product for a polished, multilingual release with Italian support.

## Panel of Experts

To ensure that every aspect of the update is addressed holistically, a panel of specialists provides insight for each decision:

| Role | Representative | Focus |
| :---- | :---- | :---- |
| **Technical Lead** | *React/TypeScript developer* | architecture, component implementation, state management, performance |
| **Copywriter** | *Medical marketing specialist* | writing new copy, ensuring accuracy and emotion, localisation guidelines |
| **UX/UI Designer** | *Design system expert* | progressive components, responsive layouts, accessibility |
| **Translator** | *Multilingual translator (DE/FR/IT)* | translation quality, Italian localisation, consistency across languages |
| **Medical Advisor** | *Cardiologist consultant* | verifying medical accuracy, approving testimonials, reviewing clinical evidence |
| **Marketer** | *Growth & analytics specialist* | CTA optimisation, conversion strategy, A/B testing |

The planning document synthesises their recommendations and outlines a step‑wise implementation strategy.

## Assumptions and Constraints

1. The existing codebase uses **React 18**, **TypeScript**, **Vite** and **Tailwind CSS** with a custom theme system and translation context[\[1\]](https://github.com/yangsi7/skinn-convert-swiss-pages/blob/ffebeef0fdc7686d1c5ab7c9a31881bc2f1112a7/working_files/planning.md#L91-L98).

2. The multilingual infrastructure currently supports English, German and French and must be extended to Italian[\[2\]](https://github.com/yangsi7/skinn-convert-swiss-pages/blob/ffebeef0fdc7686d1c5ab7c9a31881bc2f1112a7/docs/content/iterations/2025-01-22-COPY_UPDATE_SPEC.md#L30-L32).

3. Protected components have been implemented and can be reused for new pages[\[3\]](https://github.com/yangsi7/skinn-convert-swiss-pages/blob/ffebeef0fdc7686d1c5ab7c9a31881bc2f1112a7/working_files/event-stream.md#L113-L134).

4. Only two of twenty‑two pages currently use translations; remaining pages will require refactoring[\[4\]](https://github.com/yangsi7/skinn-convert-swiss-pages/blob/ffebeef0fdc7686d1c5ab7c9a31881bc2f1112a7/working_files/todo.md#L57-L81).

5. The V2 copy specification provides authoritative messaging; any missing clinical evidence or statistics must be sourced before publication[\[5\]](https://github.com/yangsi7/skinn-convert-swiss-pages/blob/ffebeef0fdc7686d1c5ab7c9a31881bc2f1112a7/docs/content/iterations/2025-01-22-COPY_UPDATE_SPEC.md#L210-L218).

## Revised Phase Structure

The plan consolidates existing phases (A–F) into a more coherent rollout aligned with the copy specification and design‑system plan. Each phase includes tasks ranked by priority (P0 critical, P1 high, P2 medium) and references to relevant documentation.

### Phase 0 – Setup & Foundation (2 days)

| ID | Task | Priority | Owner | Notes |
| :---- | :---- | :---- | :---- | :---- |
| **0.1** | **Audit V1 content and determine refactoring scope** | P0 | Tech Lead & Copywriter | Identify all pages with hard‑coded text; map to translation sections[\[4\]](https://github.com/yangsi7/skinn-convert-swiss-pages/blob/ffebeef0fdc7686d1c5ab7c9a31881bc2f1112a7/working_files/todo.md#L57-L81). |
| **0.2** | **Set up Italian language support** | P0 | Translator | Create /src/translations/it/ structure; extend language context and route localisation; update language switcher[\[2\]](https://github.com/yangsi7/skinn-convert-swiss-pages/blob/ffebeef0fdc7686d1c5ab7c9a31881bc2f1112a7/docs/content/iterations/2025-01-22-COPY_UPDATE_SPEC.md#L30-L32). |
| **0.3** | **Rename core products** | P0 | Copywriter & Translator | Replace “14‑Day Holter” with “10‑Day Heart Screening” and “TriTest” with “SKIIN 3X Screening™” across all languages[\[6\]](https://github.com/yangsi7/skinn-convert-swiss-pages/blob/ffebeef0fdc7686d1c5ab7c9a31881bc2f1112a7/docs/content/iterations/2025-01-22-COPY_UPDATE_SPEC.md#L10-L12). |
| **0.4** | **Fix Home2 navigation** | P0 | Tech Lead | Resolve the broken Home2 link or alias the route to ensure the progressive home page is reachable[\[7\]](https://github.com/yangsi7/skinn-convert-swiss-pages/blob/ffebeef0fdc7686d1c5ab7c9a31881bc2f1112a7/docs/implementation/design-system-rollout-plan.md#L22-L28). |
| **0.5** | **Create core progressive components** | P1 | Tech Lead & UX Designer | Build ProgressiveCard, ImageSection, TeamMember, FeatureGrid and StatCard components as defined in the design‑system rollout plan[\[8\]](https://github.com/yangsi7/skinn-convert-swiss-pages/blob/ffebeef0fdc7686d1c5ab7c9a31881bc2f1112a7/docs/implementation/design-system-rollout-plan.md#L30-L36). Ensure they are theme‑aware and support translations. |
| **0.6** | **Extract common design patterns** | P2 | Tech Lead | Define spacing utilities, animation timing constants and gradient presets for reuse[\[9\]](https://github.com/yangsi7/skinn-convert-swiss-pages/blob/ffebeef0fdc7686d1c5ab7c9a31881bc2f1112a7/docs/implementation/design-system-rollout-plan.md#L37-L41). |
| **0.7** | **Update conventions & documentation** | P1 | Tech Lead | Refresh conventions.md, doc-ref.md, CLAUDE.md and other working files to reflect new naming, Italian language support and the updated process. |

### Phase 1 – Translation Extraction & Infrastructure (2 days)

| ID | Task | Priority | Owner | Notes |
| :---- | :---- | :---- | :---- | :---- |
| 1.1 | **Extract hard‑coded text from remaining pages** | P0 | Tech Lead | For each page (About, How It Works, Partners, Solutions, index, NotFound), move text into translation files following existing patterns. |
| 1.2 | **Complete DE/FR translations** | P1 | Translator | Populate missing German and French content for extracted keys[\[10\]](https://github.com/yangsi7/skinn-convert-swiss-pages/blob/ffebeef0fdc7686d1c5ab7c9a31881bc2f1112a7/working_files/todo.md#L57-L85). |
| 1.3 | **Translate V2 copy into Italian** | P0 | Translator | Use the V2 spec to produce Italian translations for all new copy (hero messages, problem/solution statements, CTAs, pricing, advisor quotes, etc.). |
| 1.4 | **Language switch & routing tests** | P0 | QA (Marketer) | Verify that all pages switch correctly between EN/DE/FR/IT; ensure 404 routes are localised. |
| 1.5 | **Theme verification script** | P2 | Tech Lead | Implement a script to detect hard‑coded colours as per the todo list[\[11\]](https://github.com/yangsi7/skinn-convert-swiss-pages/blob/ffebeef0fdc7686d1c5ab7c9a31881bc2f1112a7/working_files/todo.md#L42-L46). |

### Phase 2 – Homepage & High‑Priority Pages (3 days)

| ID | Task | Priority | Owner | Notes |
| :---- | :---- | :---- | :---- | :---- |
| **2.1** | **Design new homepage & high‑priority page layouts** | P0 | UX Designer | Create responsive wireframes and mockups for the homepage, Physicians, Solutions and About pages. Incorporate hero, problem/solution, pricing, medical advisors, testimonials and progressive design patterns[\[12\]](https://github.com/yangsi7/skinn-convert-swiss-pages/blob/ffebeef0fdc7686d1c5ab7c9a31881bc2f1112a7/docs/implementation/design-system-rollout-plan.md#L43-L62). |
| **2.2** | **Develop new hero component** (HeroV2) | P0 | Tech Lead | Build a component with dynamic headline, sub‑headline and CTA props; ensure translation keys and responsiveness. |
| **2.3** | **Implement problem/solution section** | P1 | Tech Lead | Create a ProblemSolution component with three problem cards and three solution cards using icons/illustrations; integrate into translations. |
| **2.4** | **Create pricing section component** | P1 | Tech Lead | Build a PricingSection with configurable tiers and an insurance message; support translation and currency formatting. |
| **2.5** | **Medical advisors & testimonials** | P1 | Copywriter & Medical Advisor | Gather advisor profiles and quotes, and patient stories; design a MedicalAdvisors component; incorporate caregiver messaging[\[13\]](https://github.com/yangsi7/skinn-convert-swiss-pages/blob/ffebeef0fdc7686d1c5ab7c9a31881bc2f1112a7/docs/content/iterations/2025-01-22-COPY_UPDATE_SPEC.md#L242-L253). |
| **2.6** | **Modernize Physicians, Solutions and About pages** | P1 | Tech Lead & UX Designer | Replace legacy sections with progressive components (MVCP showcase, process flows, Swiss heritage, leadership photos); integrate design system tokens and ensure translation support[\[12\]](https://github.com/yangsi7/skinn-convert-swiss-pages/blob/ffebeef0fdc7686d1c5ab7c9a31881bc2f1112a7/docs/implementation/design-system-rollout-plan.md#L43-L62). |
| **2.7** | **Integrate progressive animations** | P2 | UX Designer | Use the new ProgressiveCard and other animations to enhance the homepage and high‑priority pages[\[8\]](https://github.com/yangsi7/skinn-convert-swiss-pages/blob/ffebeef0fdc7686d1c5ab7c9a31881bc2f1112a7/docs/implementation/design-system-rollout-plan.md#L30-L36). |
| **2.8** | **A/B test CTAs on homepage** | P2 | Marketer | Rotate primary, secondary and micro CTAs; measure click‑through rates and report findings[\[14\]](https://github.com/yangsi7/skinn-convert-swiss-pages/blob/ffebeef0fdc7686d1c5ab7c9a31881bc2f1112a7/docs/content/iterations/2025-01-22-COPY_UPDATE_SPEC.md#L219-L240). |

### Phase 3 – Audience & Partner Sections (2 days)

| ID | Task | Priority | Owner | Notes |
| :---- | :---- | :---- | :---- | :---- |
| **3.1** | **Define templates for audience & partner pages** | P1 | UX Designer | Create base components or templates for patient, GP, cardiologist, telemedicine, corporate and partner audiences; consider collapsible sections or dedicated pages[\[15\]](https://github.com/yangsi7/skinn-convert-swiss-pages/blob/ffebeef0fdc7686d1c5ab7c9a31881bc2f1112a7/docs/content/iterations/2025-01-22-COPY_UPDATE_SPEC.md#L129-L169)[\[16\]](https://github.com/yangsi7/skinn-convert-swiss-pages/blob/ffebeef0fdc7686d1c5ab7c9a31881bc2f1112a7/docs/implementation/design-system-rollout-plan.md#L63-L70). |
| **3.2** | **Develop content & translation** | P1 | Copywriter & Translator | Write audience‑specific value propositions and partner benefits; translate into German, French and Italian. |
| **3.3** | **Build audience & partner pages or sections** | P1 | Tech Lead | Implement pages or modular sections using progressive components; integrate them into navigation and route localisation. |
| **3.4** | **Expand How It Works & About sections** | P2 | UX Designer | Create interactive timelines and process flows for patients and doctors; complete the About section with testimonials, medical board profiles, compliance details and contact forms[\[17\]](https://github.com/yangsi7/skinn-convert-swiss-pages/blob/ffebeef0fdc7686d1c5ab7c9a31881bc2f1112a7/docs/implementation/design-system-rollout-plan.md#L71-L82). |
| **3.5** | **Integrate CTAs & analytics** | P2 | Marketer | Embed appropriate CTAs for each audience and partner; configure analytics to track conversions by segment and page. |

### Phase 4 – Technology, Workflow & Content‑Rich Pages (1.5 days)

| ID | Task | Priority | Owner | Notes |
| :---- | :---- | :---- | :---- | :---- |
| **4.1** | **Write technical copy** | P1 | Copywriter & Medical Advisor | Draft clear explanations of carbon‑electrode technology, MVCP integration and workflow steps for patients and doctors[\[18\]](https://github.com/yangsi7/skinn-convert-swiss-pages/blob/ffebeef0fdc7686d1c5ab7c9a31881bc2f1112a7/docs/content/iterations/2025-01-22-COPY_UPDATE_SPEC.md#L171-L194). |
| **4.2** | **Implement technology section component** | P2 | Tech Lead | Create a TechnologySection with icons, bullet lists and optional images; integrate into Solutions, How It Works and partner pages. |
| **4.3** | **Create workflow diagrams & interactive timelines** | P2 | UX Designer | Produce accessible visual timelines or infographics for “Your Journey to Heart Health” and doctor workflows; implement interactive components in the How It Works section. |

### Phase 5 – Polish & Readiness (2 days)

| ID | Task | Priority | Owner | Notes |
| :---- | :---- | :---- | :---- | :---- |
| 5.1 | **Refactor for performance & accessibility** | P1 | Tech Lead | Lazy‑load images, add skeleton loaders, ensure WCAG 2.1 compliance, audit responsive behaviour[\[19\]](https://github.com/yangsi7/skinn-convert-swiss-pages/blob/ffebeef0fdc7686d1c5ab7c9a31881bc2f1112a7/docs/implementation/design-system-rollout-plan.md#L83-L101). |
| 5.2 | **Error boundaries & loading states** | P1 | Tech Lead | Introduce React error boundaries and Suspense for asynchronous content as per production readiness checklist[\[20\]](https://github.com/yangsi7/skinn-convert-swiss-pages/blob/ffebeef0fdc7686d1c5ab7c9a31881bc2f1112a7/docs/PRODUCTION_READINESS_REPORT.md#L146-L166). |
| 5.3 | **Enable TypeScript strict mode & add unit tests** | P2 | Tech Lead | Migrate remaining any types; write unit tests for translation hooks and critical components[\[21\]](https://github.com/yangsi7/skinn-convert-swiss-pages/blob/ffebeef0fdc7686d1c5ab7c9a31881bc2f1112a7/docs/PRODUCTION_READINESS_REPORT.md#L155-L178). |
| 5.4 | **Bundle & SEO optimisation** | P2 | Marketer | Implement route‑based code splitting; optimise images; add meta tags; measure bundle size[\[22\]](https://github.com/yangsi7/skinn-convert-swiss-pages/blob/ffebeef0fdc7686d1c5ab7c9a31881bc2f1112a7/docs/PRODUCTION_READINESS_REPORT.md#L169-L171). |
| 5.5 | **Documentation & final review** | P1 | All | Update CLAUDE.md, conventions.md, doc-ref.md, i18n-analysis-report.md; compile V2\_POLISH\_AND\_READINESS\_REPORT.md summarising remaining gaps and release readiness. |

## Risk Assessment

| Risk | Impact | Likelihood | Mitigation |
| :---- | :---- | :---- | :---- |
| **Unverified statistics** | Incorrect medical claims could harm credibility | Medium | Engage the medical advisor to source and verify all clinical references early[\[5\]](https://github.com/yangsi7/skinn-convert-swiss-pages/blob/ffebeef0fdc7686d1c5ab7c9a31881bc2f1112a7/docs/content/iterations/2025-01-22-COPY_UPDATE_SPEC.md#L210-L218). |
| **Translation delays** | Italian localisation may delay release | Medium | Prioritise translation tasks in Phase 1; consider temporary fallback to English. |
| **Design integration complexity** | New sections may require significant layout changes | Medium | Use progressive components and extract patterns early[\[9\]](https://github.com/yangsi7/skinn-convert-swiss-pages/blob/ffebeef0fdc7686d1c5ab7c9a31881bc2f1112a7/docs/implementation/design-system-rollout-plan.md#L37-L41). |
| **Performance regressions** | Additional content and animations may slow the site | High | Enforce performance budget; implement lazy loading and code splitting in Phase 5[\[22\]](https://github.com/yangsi7/skinn-convert-swiss-pages/blob/ffebeef0fdc7686d1c5ab7c9a31881bc2f1112a7/docs/PRODUCTION_READINESS_REPORT.md#L169-L171). |
| **Scope creep** | Emotional storytelling may require additional assets | Medium | Stick to specification phases; add assets only if available and approved. |

## Milestones & Timeline

Assuming an available team and sequential execution with some overlap, the total estimated timeline is **approximately 9.5 working days**:

1. **Phase 0** – 1 day (Audit & setup)

2. **Phase 1** – 2 days (Translation extraction)

3. **Phase 2** – 3 days (Homepage redesign)

4. **Phase 3** – 2 days (Audience sections)

5. **Phase 4** – 1.5 days (Technology & workflow)

6. **Phase 5** – 2 days (Polish & readiness)

Parallelisation is possible for some tasks (translations and design work can proceed concurrently). Frequent synchronization between developers, copywriters and designers is essential.

---

[\[1\]](https://github.com/yangsi7/skinn-convert-swiss-pages/blob/ffebeef0fdc7686d1c5ab7c9a31881bc2f1112a7/working_files/planning.md#L91-L98) planning.md

[https://github.com/yangsi7/skinn-convert-swiss-pages/blob/ffebeef0fdc7686d1c5ab7c9a31881bc2f1112a7/working\_files/planning.md](https://github.com/yangsi7/skinn-convert-swiss-pages/blob/ffebeef0fdc7686d1c5ab7c9a31881bc2f1112a7/working_files/planning.md)

[\[2\]](https://github.com/yangsi7/skinn-convert-swiss-pages/blob/ffebeef0fdc7686d1c5ab7c9a31881bc2f1112a7/docs/content/iterations/2025-01-22-COPY_UPDATE_SPEC.md#L30-L32) [\[5\]](https://github.com/yangsi7/skinn-convert-swiss-pages/blob/ffebeef0fdc7686d1c5ab7c9a31881bc2f1112a7/docs/content/iterations/2025-01-22-COPY_UPDATE_SPEC.md#L210-L218) [\[6\]](https://github.com/yangsi7/skinn-convert-swiss-pages/blob/ffebeef0fdc7686d1c5ab7c9a31881bc2f1112a7/docs/content/iterations/2025-01-22-COPY_UPDATE_SPEC.md#L10-L12) [\[13\]](https://github.com/yangsi7/skinn-convert-swiss-pages/blob/ffebeef0fdc7686d1c5ab7c9a31881bc2f1112a7/docs/content/iterations/2025-01-22-COPY_UPDATE_SPEC.md#L242-L253) [\[14\]](https://github.com/yangsi7/skinn-convert-swiss-pages/blob/ffebeef0fdc7686d1c5ab7c9a31881bc2f1112a7/docs/content/iterations/2025-01-22-COPY_UPDATE_SPEC.md#L219-L240) [\[15\]](https://github.com/yangsi7/skinn-convert-swiss-pages/blob/ffebeef0fdc7686d1c5ab7c9a31881bc2f1112a7/docs/content/iterations/2025-01-22-COPY_UPDATE_SPEC.md#L129-L169) [\[18\]](https://github.com/yangsi7/skinn-convert-swiss-pages/blob/ffebeef0fdc7686d1c5ab7c9a31881bc2f1112a7/docs/content/iterations/2025-01-22-COPY_UPDATE_SPEC.md#L171-L194) 2025-01-22-COPY\_UPDATE\_SPEC.md

[https://github.com/yangsi7/skinn-convert-swiss-pages/blob/ffebeef0fdc7686d1c5ab7c9a31881bc2f1112a7/docs/content/iterations/2025-01-22-COPY\_UPDATE\_SPEC.md](https://github.com/yangsi7/skinn-convert-swiss-pages/blob/ffebeef0fdc7686d1c5ab7c9a31881bc2f1112a7/docs/content/iterations/2025-01-22-COPY_UPDATE_SPEC.md)

[\[3\]](https://github.com/yangsi7/skinn-convert-swiss-pages/blob/ffebeef0fdc7686d1c5ab7c9a31881bc2f1112a7/working_files/event-stream.md#L113-L134) event-stream.md

[https://github.com/yangsi7/skinn-convert-swiss-pages/blob/ffebeef0fdc7686d1c5ab7c9a31881bc2f1112a7/working\_files/event-stream.md](https://github.com/yangsi7/skinn-convert-swiss-pages/blob/ffebeef0fdc7686d1c5ab7c9a31881bc2f1112a7/working_files/event-stream.md)

[\[4\]](https://github.com/yangsi7/skinn-convert-swiss-pages/blob/ffebeef0fdc7686d1c5ab7c9a31881bc2f1112a7/working_files/todo.md#L57-L81) [\[10\]](https://github.com/yangsi7/skinn-convert-swiss-pages/blob/ffebeef0fdc7686d1c5ab7c9a31881bc2f1112a7/working_files/todo.md#L57-L85) [\[11\]](https://github.com/yangsi7/skinn-convert-swiss-pages/blob/ffebeef0fdc7686d1c5ab7c9a31881bc2f1112a7/working_files/todo.md#L42-L46) todo.md

[https://github.com/yangsi7/skinn-convert-swiss-pages/blob/ffebeef0fdc7686d1c5ab7c9a31881bc2f1112a7/working\_files/todo.md](https://github.com/yangsi7/skinn-convert-swiss-pages/blob/ffebeef0fdc7686d1c5ab7c9a31881bc2f1112a7/working_files/todo.md)

[\[7\]](https://github.com/yangsi7/skinn-convert-swiss-pages/blob/ffebeef0fdc7686d1c5ab7c9a31881bc2f1112a7/docs/implementation/design-system-rollout-plan.md#L22-L28) [\[8\]](https://github.com/yangsi7/skinn-convert-swiss-pages/blob/ffebeef0fdc7686d1c5ab7c9a31881bc2f1112a7/docs/implementation/design-system-rollout-plan.md#L30-L36) [\[9\]](https://github.com/yangsi7/skinn-convert-swiss-pages/blob/ffebeef0fdc7686d1c5ab7c9a31881bc2f1112a7/docs/implementation/design-system-rollout-plan.md#L37-L41) [\[12\]](https://github.com/yangsi7/skinn-convert-swiss-pages/blob/ffebeef0fdc7686d1c5ab7c9a31881bc2f1112a7/docs/implementation/design-system-rollout-plan.md#L43-L62) [\[16\]](https://github.com/yangsi7/skinn-convert-swiss-pages/blob/ffebeef0fdc7686d1c5ab7c9a31881bc2f1112a7/docs/implementation/design-system-rollout-plan.md#L63-L70) [\[17\]](https://github.com/yangsi7/skinn-convert-swiss-pages/blob/ffebeef0fdc7686d1c5ab7c9a31881bc2f1112a7/docs/implementation/design-system-rollout-plan.md#L71-L82) [\[19\]](https://github.com/yangsi7/skinn-convert-swiss-pages/blob/ffebeef0fdc7686d1c5ab7c9a31881bc2f1112a7/docs/implementation/design-system-rollout-plan.md#L83-L101) design-system-rollout-plan.md

[https://github.com/yangsi7/skinn-convert-swiss-pages/blob/ffebeef0fdc7686d1c5ab7c9a31881bc2f1112a7/docs/implementation/design-system-rollout-plan.md](https://github.com/yangsi7/skinn-convert-swiss-pages/blob/ffebeef0fdc7686d1c5ab7c9a31881bc2f1112a7/docs/implementation/design-system-rollout-plan.md)

[\[20\]](https://github.com/yangsi7/skinn-convert-swiss-pages/blob/ffebeef0fdc7686d1c5ab7c9a31881bc2f1112a7/docs/PRODUCTION_READINESS_REPORT.md#L146-L166) [\[21\]](https://github.com/yangsi7/skinn-convert-swiss-pages/blob/ffebeef0fdc7686d1c5ab7c9a31881bc2f1112a7/docs/PRODUCTION_READINESS_REPORT.md#L155-L178) [\[22\]](https://github.com/yangsi7/skinn-convert-swiss-pages/blob/ffebeef0fdc7686d1c5ab7c9a31881bc2f1112a7/docs/PRODUCTION_READINESS_REPORT.md#L169-L171) PRODUCTION\_READINESS\_REPORT.md

[https://github.com/yangsi7/skinn-convert-swiss-pages/blob/ffebeef0fdc7686d1c5ab7c9a31881bc2f1112a7/docs/PRODUCTION\_READINESS\_REPORT.md](https://github.com/yangsi7/skinn-convert-swiss-pages/blob/ffebeef0fdc7686d1c5ab7c9a31881bc2f1112a7/docs/PRODUCTION_READINESS_REPORT.md)