# Research Summary: Preparing for V2 Copy Implementation

This document collates findings from the existing project documentation to provide context for the V2 copy update. It covers the current status of the codebase, the proposed copy changes, the progressive design‑system rollout plan and production readiness report. Citations are included for key facts.

**Note on missing files** – During research, no file named IMPLEMENTATION\_PLAN\_v2.0.md or V2\_POLISH\_AND\_READINESS\_REPORT.md was found in the repository. The **Design System Rollout Plan** effectively serves as the implementation roadmap for component migration and page updates[\[1\]](https://github.com/yangsi7/skinn-convert-swiss-pages/blob/ffebeef0fdc7686d1c5ab7c9a31881bc2f1112a7/docs/implementation/design-system-rollout-plan.md#L30-L36)[\[2\]](https://github.com/yangsi7/skinn-convert-swiss-pages/blob/ffebeef0fdc7686d1c5ab7c9a31881bc2f1112a7/docs/implementation/design-system-rollout-plan.md#L43-L62), and a new readiness report will be compiled as part of this work. The absence of those files has been documented in the planning and doc‑ref updates.

## Current Project Status

* **Multilingual system** – The codebase supports English, German and French with a solid translation infrastructure. However, only 20 % of pages have been converted to use translation files; 20 pages still have hard‑coded English content[\[3\]](https://github.com/yangsi7/skinn-convert-swiss-pages/blob/ffebeef0fdc7686d1c5ab7c9a31881bc2f1112a7/docs/PRODUCTION_READINESS_REPORT.md#L131-L145). A new language (Italian) must be added across the site[\[4\]](https://github.com/yangsi7/skinn-convert-swiss-pages/blob/ffebeef0fdc7686d1c5ab7c9a31881bc2f1112a7/docs/content/iterations/2025-01-22-COPY_UPDATE_SPEC.md#L30-L32).

* **Theme compliance** – 96.25 % of components adhere to the theme system, leaving three components with hard‑coded colours[\[5\]](https://github.com/yangsi7/skinn-convert-swiss-pages/blob/ffebeef0fdc7686d1c5ab7c9a31881bc2f1112a7/docs/PRODUCTION_READINESS_REPORT.md#L131-L140). A script to verify theme compliance is still pending[\[6\]](https://github.com/yangsi7/skinn-convert-swiss-pages/blob/ffebeef0fdc7686d1c5ab7c9a31881bc2f1112a7/working_files/todo.md#L42-L46).

* **Protected components** – All four protected components (HeartBalanceRing, ContributingFactorCards, TabNavigation, TodayTab) have been implemented and theme‑compliant[\[7\]](https://github.com/yangsi7/skinn-convert-swiss-pages/blob/ffebeef0fdc7686d1c5ab7c9a31881bc2f1112a7/working_files/event-stream.md#L113-L134). Their proper usage is documented separately.

* **Production readiness** – A refactoring pass improved code quality and established best practices. Remaining tasks include completing page translations, adding error/loading states, enabling strict TypeScript, writing tests, optimizing bundle size and adding SEO meta tags[\[8\]](https://github.com/yangsi7/skinn-convert-swiss-pages/blob/ffebeef0fdc7686d1c5ab7c9a31881bc2f1112a7/docs/PRODUCTION_READINESS_REPORT.md#L131-L153).

* **Planned phases** – The existing plan divides work into Phases A–F covering UX restoration, theme compliance, multi‑language implementation, protected components, calculators, and content & polish[\[9\]](https://github.com/yangsi7/skinn-convert-swiss-pages/blob/ffebeef0fdc7686d1c5ab7c9a31881bc2f1112a7/working_files/todo.md#L5-L117). Phase A and most of Phase B are complete, while Phase C (translations) is 35 % complete and later phases have not started[\[10\]](https://github.com/yangsi7/skinn-convert-swiss-pages/blob/ffebeef0fdc7686d1c5ab7c9a31881bc2f1112a7/working_files/todo.md#L119-L125).

## V2 Copy Update Specification (2025‑01‑22)

The V2 copy update specification introduces significant changes to product naming, messaging and page structure. Key elements include:

### Product naming and themes

* Rename the **“14‑Day Holter”** product to **“10‑Day Heart Screening”** and **“TriTest”** to **“SKIIN 3X Screening™”[\[11\]](https://github.com/yangsi7/skinn-convert-swiss-pages/blob/ffebeef0fdc7686d1c5ab7c9a31881bc2f1112a7/docs/content/iterations/2025-01-22-COPY_UPDATE_SPEC.md#L10-L12)**.

* Maintain existing themes (Swiss quality, medical credibility, insurance coverage, comfort, clinical accuracy), and integrate new themes emphasising **longevity**, **preventive health**, the **arrhythmia‑stroke connection**, **emotional storytelling** and **caregiver messaging[\[12\]](https://github.com/yangsi7/skinn-convert-swiss-pages/blob/ffebeef0fdc7686d1c5ab7c9a31881bc2f1112a7/docs/content/iterations/2025-01-22-COPY_UPDATE_SPEC.md#L16-L28)**.

* Add **Italian** as the fourth language option and update all language references accordingly[\[4\]](https://github.com/yangsi7/skinn-convert-swiss-pages/blob/ffebeef0fdc7686d1c5ab7c9a31881bc2f1112a7/docs/content/iterations/2025-01-22-COPY_UPDATE_SPEC.md#L30-L32).

### Homepage restructuring

* **New hero section** – Provide emotionally charged headlines (e.g. “Heart Disease Is the \#1 Killer — When Was Your Last Heart Check?”) and a sub‑headline inviting Swiss families to take control of their heart health[\[13\]](https://github.com/yangsi7/skinn-convert-swiss-pages/blob/ffebeef0fdc7686d1c5ab7c9a31881bc2f1112a7/docs/content/iterations/2025-01-22-COPY_UPDATE_SPEC.md#L34-L45). The hero should feature prominent calls to action: **“Start Your Free Assessment”**, **“Check Insurance Coverage”**, and a link to FAQ[\[14\]](https://github.com/yangsi7/skinn-convert-swiss-pages/blob/ffebeef0fdc7686d1c5ab7c9a31881bc2f1112a7/docs/content/iterations/2025-01-22-COPY_UPDATE_SPEC.md#L46-L51).

* **Problem/solution framework** – Present three problem statements (heart disease mortality, broken traditional screening, and when screening is needed) and three solution statements emphasising easy early detection, a single system measuring three vital signs, and preventive habit formation[\[15\]](https://github.com/yangsi7/skinn-convert-swiss-pages/blob/ffebeef0fdc7686d1c5ab7c9a31881bc2f1112a7/docs/content/iterations/2025-01-22-COPY_UPDATE_SPEC.md#L53-L91).

* **Pricing section** – Replace existing pricing with tiered self‑pay options (3‑day screening: CHF 149, 5‑day: CHF 249, 10‑day: CHF 349) and reinforce insurance coverage[\[16\]](https://github.com/yangsi7/skinn-convert-swiss-pages/blob/ffebeef0fdc7686d1c5ab7c9a31881bc2f1112a7/docs/content/iterations/2025-01-22-COPY_UPDATE_SPEC.md#L92-L106).

* **Medical advisor section** – Introduce a board of Swiss cardiology leaders (e.g., Prof. Frank Ruschitzka) with supporting quotes[\[17\]](https://github.com/yangsi7/skinn-convert-swiss-pages/blob/ffebeef0fdc7686d1c5ab7c9a31881bc2f1112a7/docs/content/iterations/2025-01-22-COPY_UPDATE_SPEC.md#L107-L128).

### Value propositions by audience

Separate messaging is defined for five audiences: **patients**, **general practitioners**, **cardiologists**, **telemedicine companies**, and **corporate wellness programmes**, each with specific headlines and benefit bullet points[\[18\]](https://github.com/yangsi7/skinn-convert-swiss-pages/blob/ffebeef0fdc7686d1c5ab7c9a31881bc2f1112a7/docs/content/iterations/2025-01-22-COPY_UPDATE_SPEC.md#L129-L169). These sections must be integrated across corresponding pages or collapsible sections.

### Technology and workflow updates

* Highlight the patented **carbon‑electrode technology** with bullet points describing machine‑washability, skin‑friendliness, consistent contact and Swiss engineering[\[19\]](https://github.com/yangsi7/skinn-convert-swiss-pages/blob/ffebeef0fdc7686d1c5ab7c9a31881bc2f1112a7/docs/content/iterations/2025-01-22-COPY_UPDATE_SPEC.md#L171-L184).

* Provide workflow explanations for patients (“Your Journey to Heart Health”) and doctors, detailing steps from eligibility check to results delivery and emphasising regulatory compliance and integration with MVCP portals[\[20\]](https://github.com/yangsi7/skinn-convert-swiss-pages/blob/ffebeef0fdc7686d1c5ab7c9a31881bc2f1112a7/docs/content/iterations/2025-01-22-COPY_UPDATE_SPEC.md#L187-L194).

### Call‑to‑action and emotional messaging

* A library of **primary**, **secondary** and **micro CTAs** is provided for rotation on different pages[\[21\]](https://github.com/yangsi7/skinn-convert-swiss-pages/blob/ffebeef0fdc7686d1c5ab7c9a31881bc2f1112a7/docs/content/iterations/2025-01-22-COPY_UPDATE_SPEC.md#L219-L240).

* Emotional messaging frameworks include example patient stories and caregiver angles for use in testimonials and marketing copy[\[22\]](https://github.com/yangsi7/skinn-convert-swiss-pages/blob/ffebeef0fdc7686d1c5ab7c9a31881bc2f1112a7/docs/content/iterations/2025-01-22-COPY_UPDATE_SPEC.md#L242-L253).

### Implementation notes and success metrics

The specification outlines a five‑phase rollout: (1) update product names and pricing, (2) implement the new homepage structure, (3) add the medical advisors and testimonials, (4) enhance all audience‑specific value propositions, and (5) integrate emotional messaging throughout[\[23\]](https://github.com/yangsi7/skinn-convert-swiss-pages/blob/ffebeef0fdc7686d1c5ab7c9a31881bc2f1112a7/docs/content/iterations/2025-01-22-COPY_UPDATE_SPEC.md#L255-L261). Success metrics target improved CTA engagement, eligibility form completion, reduced bounce rates and increased conversion[\[24\]](https://github.com/yangsi7/skinn-convert-swiss-pages/blob/ffebeef0fdc7686d1c5ab7c9a31881bc2f1112a7/docs/content/iterations/2025-01-22-COPY_UPDATE_SPEC.md#L263-L269).

## Design System Rollout Plan

The design‑system rollout plan complements the copy update by defining component and layout changes:

* **Phase 1 (Foundation & navigation)** – Fix the Home2 navigation and create core progressive components such as ProgressiveCard, ImageSection, TeamMember, FeatureGrid and StatCard[\[1\]](https://github.com/yangsi7/skinn-convert-swiss-pages/blob/ffebeef0fdc7686d1c5ab7c9a31881bc2f1112a7/docs/implementation/design-system-rollout-plan.md#L30-L36). Extract common patterns like spacing utilities and animation constants for reuse[\[25\]](https://github.com/yangsi7/skinn-convert-swiss-pages/blob/ffebeef0fdc7686d1c5ab7c9a31881bc2f1112a7/docs/implementation/design-system-rollout-plan.md#L37-L41).

* **Phase 2 (High‑priority pages)** – Modernize the Physicians, Solutions and About pages by integrating MVCP screenshots, progressive animations and new card components[\[2\]](https://github.com/yangsi7/skinn-convert-swiss-pages/blob/ffebeef0fdc7686d1c5ab7c9a31881bc2f1112a7/docs/implementation/design-system-rollout-plan.md#L43-L62).

* **Phase 3 (Content‑rich pages)** – Develop partner pages, expand the How It Works section with interactive timelines, and complete the About section with testimonials, medical board profiles and compliance details[\[26\]](https://github.com/yangsi7/skinn-convert-swiss-pages/blob/ffebeef0fdc7686d1c5ab7c9a31881bc2f1112a7/docs/implementation/design-system-rollout-plan.md#L63-L82).

* **Phase 4 (Polish & optimization)** – Focus on performance (lazy loading, skeletons, bundle optimization), consistency (auditing animations, responsive behaviour, theme consistency, language switching) and accessibility (ARIA labels, keyboard navigation, colour contrast)[\[27\]](https://github.com/yangsi7/skinn-convert-swiss-pages/blob/ffebeef0fdc7686d1c5ab7c9a31881bc2f1112a7/docs/implementation/design-system-rollout-plan.md#L83-L101). Risk mitigation strategies include incremental rollout, visual regression testing, feature flags and rollback tags[\[28\]](https://github.com/yangsi7/skinn-convert-swiss-pages/blob/ffebeef0fdc7686d1c5ab7c9a31881bc2f1112a7/docs/implementation/design-system-rollout-plan.md#L167-L171).

## Gaps & Outstanding Issues

From the planning and todo files, several gaps remain:

* **Page translations** – Only two of twenty‑two pages have been converted; remaining pages require extraction of hard‑coded text and creation of German, French and new Italian translation files[\[29\]](https://github.com/yangsi7/skinn-convert-swiss-pages/blob/ffebeef0fdc7686d1c5ab7c9a31881bc2f1112a7/working_files/todo.md#L57-L81)[\[30\]](https://github.com/yangsi7/skinn-convert-swiss-pages/blob/ffebeef0fdc7686d1c5ab7c9a31881bc2f1112a7/working_files/todo.md#L82-L85).

* **Theme‑verification script** – A script to detect hard‑coded colours is still pending[\[6\]](https://github.com/yangsi7/skinn-convert-swiss-pages/blob/ffebeef0fdc7686d1c5ab7c9a31881bc2f1112a7/working_files/todo.md#L42-L46).

* **Protected components** – Implementation is complete, but guidelines and integration examples must be documented and referenced in the new plan[\[7\]](https://github.com/yangsi7/skinn-convert-swiss-pages/blob/ffebeef0fdc7686d1c5ab7c9a31881bc2f1112a7/working_files/event-stream.md#L113-L134).

* **Home components** – The homepage still lacks many sections defined in the specification: hero, problem/solution, pricing, medical advisors, testimonials, CTAs, etc. Additional components must be designed using the progressive design system.

* **Clinical evidence and compliance content** – The copy spec calls for credible references (e.g., PACE study results, peer‑reviewed publications)[\[31\]](https://github.com/yangsi7/skinn-convert-swiss-pages/blob/ffebeef0fdc7686d1c5ab7c9a31881bc2f1112a7/docs/content/iterations/2025-01-22-COPY_UPDATE_SPEC.md#L210-L218). These materials are currently missing and need research and integration.

* **Italian localisation** – Adding Italian requires not only translation files but also adaptation of the language selector, routing and fallback logic. Content must be translated following the copy style guidelines in the existing English, German and French copy documents.

* **Testing and readiness** – The production readiness report lists tasks such as error boundaries, loading states, TypeScript strict mode, unit tests, bundle optimisation and SEO meta tags[\[32\]](https://github.com/yangsi7/skinn-convert-swiss-pages/blob/ffebeef0fdc7686d1c5ab7c9a31881bc2f1112a7/docs/PRODUCTION_READINESS_REPORT.md#L146-L153). These must be considered in the implementation plan to ensure a polished release.

## Relationships Between Entities (High‑level)

The V2 copy update touches multiple areas of the project. Product renaming affects translation files, marketing copy and routing. New themes and emotional messaging influence the design system and content across all pages. Adding Italian extends the i18n infrastructure. The homepage restructure requires new components, images and data. Audience‑specific value propositions need targeted sections or microsites. Technology and workflow descriptions must be supported by visuals and possibly new protected components. Call‑to‑action strategies tie into analytics and conversion tracking. Each phase in the specification dovetails with the design‑system rollout plan and the outstanding tasks from the planning and readiness documents.

---

[\[1\]](https://github.com/yangsi7/skinn-convert-swiss-pages/blob/ffebeef0fdc7686d1c5ab7c9a31881bc2f1112a7/docs/implementation/design-system-rollout-plan.md#L30-L36) [\[2\]](https://github.com/yangsi7/skinn-convert-swiss-pages/blob/ffebeef0fdc7686d1c5ab7c9a31881bc2f1112a7/docs/implementation/design-system-rollout-plan.md#L43-L62) [\[25\]](https://github.com/yangsi7/skinn-convert-swiss-pages/blob/ffebeef0fdc7686d1c5ab7c9a31881bc2f1112a7/docs/implementation/design-system-rollout-plan.md#L37-L41) [\[26\]](https://github.com/yangsi7/skinn-convert-swiss-pages/blob/ffebeef0fdc7686d1c5ab7c9a31881bc2f1112a7/docs/implementation/design-system-rollout-plan.md#L63-L82) [\[27\]](https://github.com/yangsi7/skinn-convert-swiss-pages/blob/ffebeef0fdc7686d1c5ab7c9a31881bc2f1112a7/docs/implementation/design-system-rollout-plan.md#L83-L101) [\[28\]](https://github.com/yangsi7/skinn-convert-swiss-pages/blob/ffebeef0fdc7686d1c5ab7c9a31881bc2f1112a7/docs/implementation/design-system-rollout-plan.md#L167-L171) design-system-rollout-plan.md

[https://github.com/yangsi7/skinn-convert-swiss-pages/blob/ffebeef0fdc7686d1c5ab7c9a31881bc2f1112a7/docs/implementation/design-system-rollout-plan.md](https://github.com/yangsi7/skinn-convert-swiss-pages/blob/ffebeef0fdc7686d1c5ab7c9a31881bc2f1112a7/docs/implementation/design-system-rollout-plan.md)

[\[3\]](https://github.com/yangsi7/skinn-convert-swiss-pages/blob/ffebeef0fdc7686d1c5ab7c9a31881bc2f1112a7/docs/PRODUCTION_READINESS_REPORT.md#L131-L145) [\[5\]](https://github.com/yangsi7/skinn-convert-swiss-pages/blob/ffebeef0fdc7686d1c5ab7c9a31881bc2f1112a7/docs/PRODUCTION_READINESS_REPORT.md#L131-L140) [\[8\]](https://github.com/yangsi7/skinn-convert-swiss-pages/blob/ffebeef0fdc7686d1c5ab7c9a31881bc2f1112a7/docs/PRODUCTION_READINESS_REPORT.md#L131-L153) [\[32\]](https://github.com/yangsi7/skinn-convert-swiss-pages/blob/ffebeef0fdc7686d1c5ab7c9a31881bc2f1112a7/docs/PRODUCTION_READINESS_REPORT.md#L146-L153) PRODUCTION\_READINESS\_REPORT.md

[https://github.com/yangsi7/skinn-convert-swiss-pages/blob/ffebeef0fdc7686d1c5ab7c9a31881bc2f1112a7/docs/PRODUCTION\_READINESS\_REPORT.md](https://github.com/yangsi7/skinn-convert-swiss-pages/blob/ffebeef0fdc7686d1c5ab7c9a31881bc2f1112a7/docs/PRODUCTION_READINESS_REPORT.md)

[\[4\]](https://github.com/yangsi7/skinn-convert-swiss-pages/blob/ffebeef0fdc7686d1c5ab7c9a31881bc2f1112a7/docs/content/iterations/2025-01-22-COPY_UPDATE_SPEC.md#L30-L32) [\[11\]](https://github.com/yangsi7/skinn-convert-swiss-pages/blob/ffebeef0fdc7686d1c5ab7c9a31881bc2f1112a7/docs/content/iterations/2025-01-22-COPY_UPDATE_SPEC.md#L10-L12) [\[12\]](https://github.com/yangsi7/skinn-convert-swiss-pages/blob/ffebeef0fdc7686d1c5ab7c9a31881bc2f1112a7/docs/content/iterations/2025-01-22-COPY_UPDATE_SPEC.md#L16-L28) [\[13\]](https://github.com/yangsi7/skinn-convert-swiss-pages/blob/ffebeef0fdc7686d1c5ab7c9a31881bc2f1112a7/docs/content/iterations/2025-01-22-COPY_UPDATE_SPEC.md#L34-L45) [\[14\]](https://github.com/yangsi7/skinn-convert-swiss-pages/blob/ffebeef0fdc7686d1c5ab7c9a31881bc2f1112a7/docs/content/iterations/2025-01-22-COPY_UPDATE_SPEC.md#L46-L51) [\[15\]](https://github.com/yangsi7/skinn-convert-swiss-pages/blob/ffebeef0fdc7686d1c5ab7c9a31881bc2f1112a7/docs/content/iterations/2025-01-22-COPY_UPDATE_SPEC.md#L53-L91) [\[16\]](https://github.com/yangsi7/skinn-convert-swiss-pages/blob/ffebeef0fdc7686d1c5ab7c9a31881bc2f1112a7/docs/content/iterations/2025-01-22-COPY_UPDATE_SPEC.md#L92-L106) [\[17\]](https://github.com/yangsi7/skinn-convert-swiss-pages/blob/ffebeef0fdc7686d1c5ab7c9a31881bc2f1112a7/docs/content/iterations/2025-01-22-COPY_UPDATE_SPEC.md#L107-L128) [\[18\]](https://github.com/yangsi7/skinn-convert-swiss-pages/blob/ffebeef0fdc7686d1c5ab7c9a31881bc2f1112a7/docs/content/iterations/2025-01-22-COPY_UPDATE_SPEC.md#L129-L169) [\[19\]](https://github.com/yangsi7/skinn-convert-swiss-pages/blob/ffebeef0fdc7686d1c5ab7c9a31881bc2f1112a7/docs/content/iterations/2025-01-22-COPY_UPDATE_SPEC.md#L171-L184) [\[20\]](https://github.com/yangsi7/skinn-convert-swiss-pages/blob/ffebeef0fdc7686d1c5ab7c9a31881bc2f1112a7/docs/content/iterations/2025-01-22-COPY_UPDATE_SPEC.md#L187-L194) [\[21\]](https://github.com/yangsi7/skinn-convert-swiss-pages/blob/ffebeef0fdc7686d1c5ab7c9a31881bc2f1112a7/docs/content/iterations/2025-01-22-COPY_UPDATE_SPEC.md#L219-L240) [\[22\]](https://github.com/yangsi7/skinn-convert-swiss-pages/blob/ffebeef0fdc7686d1c5ab7c9a31881bc2f1112a7/docs/content/iterations/2025-01-22-COPY_UPDATE_SPEC.md#L242-L253) [\[23\]](https://github.com/yangsi7/skinn-convert-swiss-pages/blob/ffebeef0fdc7686d1c5ab7c9a31881bc2f1112a7/docs/content/iterations/2025-01-22-COPY_UPDATE_SPEC.md#L255-L261) [\[24\]](https://github.com/yangsi7/skinn-convert-swiss-pages/blob/ffebeef0fdc7686d1c5ab7c9a31881bc2f1112a7/docs/content/iterations/2025-01-22-COPY_UPDATE_SPEC.md#L263-L269) [\[31\]](https://github.com/yangsi7/skinn-convert-swiss-pages/blob/ffebeef0fdc7686d1c5ab7c9a31881bc2f1112a7/docs/content/iterations/2025-01-22-COPY_UPDATE_SPEC.md#L210-L218) 2025-01-22-COPY\_UPDATE\_SPEC.md

[https://github.com/yangsi7/skinn-convert-swiss-pages/blob/ffebeef0fdc7686d1c5ab7c9a31881bc2f1112a7/docs/content/iterations/2025-01-22-COPY\_UPDATE\_SPEC.md](https://github.com/yangsi7/skinn-convert-swiss-pages/blob/ffebeef0fdc7686d1c5ab7c9a31881bc2f1112a7/docs/content/iterations/2025-01-22-COPY_UPDATE_SPEC.md)

[\[6\]](https://github.com/yangsi7/skinn-convert-swiss-pages/blob/ffebeef0fdc7686d1c5ab7c9a31881bc2f1112a7/working_files/todo.md#L42-L46) [\[9\]](https://github.com/yangsi7/skinn-convert-swiss-pages/blob/ffebeef0fdc7686d1c5ab7c9a31881bc2f1112a7/working_files/todo.md#L5-L117) [\[10\]](https://github.com/yangsi7/skinn-convert-swiss-pages/blob/ffebeef0fdc7686d1c5ab7c9a31881bc2f1112a7/working_files/todo.md#L119-L125) [\[29\]](https://github.com/yangsi7/skinn-convert-swiss-pages/blob/ffebeef0fdc7686d1c5ab7c9a31881bc2f1112a7/working_files/todo.md#L57-L81) [\[30\]](https://github.com/yangsi7/skinn-convert-swiss-pages/blob/ffebeef0fdc7686d1c5ab7c9a31881bc2f1112a7/working_files/todo.md#L82-L85) todo.md

[https://github.com/yangsi7/skinn-convert-swiss-pages/blob/ffebeef0fdc7686d1c5ab7c9a31881bc2f1112a7/working\_files/todo.md](https://github.com/yangsi7/skinn-convert-swiss-pages/blob/ffebeef0fdc7686d1c5ab7c9a31881bc2f1112a7/working_files/todo.md)

[\[7\]](https://github.com/yangsi7/skinn-convert-swiss-pages/blob/ffebeef0fdc7686d1c5ab7c9a31881bc2f1112a7/working_files/event-stream.md#L113-L134) event-stream.md

[https://github.com/yangsi7/skinn-convert-swiss-pages/blob/ffebeef0fdc7686d1c5ab7c9a31881bc2f1112a7/working\_files/event-stream.md](https://github.com/yangsi7/skinn-convert-swiss-pages/blob/ffebeef0fdc7686d1c5ab7c9a31881bc2f1112a7/working_files/event-stream.md)