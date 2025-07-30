# V2 Copy Implementation – Task Checklist

**Legend**: \[ \] \= not started; \[/\] \= in progress; \[x\] \= complete

## Phase 0 – Setup & Foundation

* \[ \] **0.1 Audit V1 content and determine refactoring scope** – identify pages with hard‑coded text and map to translation sections.

* \[ \] **0.2 Set up Italian language support** – create /src/translations/it/ and extend language context, routing and language selector.

* \[ \] **0.3 Rename core products** – replace “14‑Day Holter” with “10‑Day Heart Screening” and “TriTest” with “SKIIN 3X Screening™” across all languages.

* \[ \] **0.4 Fix Home2 navigation** – resolve the broken Home2 link or add an alias route to ensure the progressive home page is reachable.

* \[ \] **0.5 Create core progressive components** – build ProgressiveCard, ImageSection, TeamMember, FeatureGrid and StatCard with theme awareness and translation support.

* \[ \] **0.6 Extract common design patterns** – define spacing utilities, animation timing constants and gradient presets for reuse.

* \[ \] **0.7 Update conventions & documentation** – refresh conventions.md, doc-ref.md, CLAUDE.md and other working files to reflect new naming, Italian support and the updated process.

## Phase 1 – Translation Extraction & Infrastructure

* \[ \] **1.1 Extract hard‑coded text** – migrate text from About, How It Works, Partners, Solutions, index and NotFound pages into translation files.

* \[ \] **1.2 Complete DE/FR translations** – fill missing German/French content for extracted keys.

* \[ \] **1.3 Translate V2 copy into Italian** – produce Italian translations for hero headlines, problem/solution, pricing, advisor quotes, CTA strings and value propositions.

* \[ \] **1.4 Language switch & routing tests** – verify EN/DE/FR/IT switching across all pages; ensure 404 pages are localised.

* \[ \] **1.5 Implement theme verification script** – build a script to detect hard‑coded colours and integrate it into the CI pipeline.

## Phase 2 – Homepage & High‑Priority Pages

* \[ \] **2.1 Design new homepage & high‑priority page layouts** – create responsive wireframes for the homepage, Physicians, Solutions and About pages, incorporating hero, problem/solution, pricing, advisors, testimonials and CTAs.

* \[ \] **2.2 Develop new hero component** (HeroV2) – dynamic headline, sub‑headline and CTA props with translation and responsiveness.

* \[ \] **2.3 Implement problem/solution section** – build ProblemSolution component with three problem and three solution cards; integrate icons and translations.

* \[ \] **2.4 Create pricing section component** – implement PricingSection with configurable tiers and an insurance message.

* \[ \] **2.5 Medical advisors & testimonials** – collect advisor profiles and patient stories; build MedicalAdvisors component; include caregiver messaging.

* \[ \] **2.6 Modernize Physicians, Solutions & About pages** – replace legacy layouts with progressive components, MVCP showcases, process flows, Swiss heritage and leadership photos.

* \[ \] **2.7 Integrate progressive animations** – apply progressive animations using ProgressiveCard and related components.

* \[ \] **2.8 A/B test CTAs** – rotate primary, secondary and micro CTAs and track performance using analytics.

## Phase 3 – Audience & Partner Sections

* \[ \] **3.1 Define templates for audience & partner pages** – design base components or templates for patient, GP, cardiologist, telemedicine, corporate and partner audiences.

* \[ \] **3.2 Develop content & translation** – craft audience‑ and partner‑specific value propositions and translate them into EN/DE/FR/IT.

* \[ \] **3.3 Build audience & partner pages or sections** – implement dedicated pages or collapsible sections using progressive design and route localisation.

* \[ \] **3.4 Expand How It Works & About sections** – create interactive timelines and process flows; complete About with testimonials, medical board profiles, compliance details and contact forms.

* \[ \] **3.5 Integrate CTAs & analytics** – embed appropriate CTAs for each audience and partner; set up analytics to track conversions by segment.

## Phase 4 – Technology, Workflow & Content‑Rich Pages

* \[ \] **4.1 Write technical copy** – draft clear explanations of carbon‑electrode technology, MVCP integration and workflows for patients and doctors.

* \[ \] **4.2 Implement technology section component** – build TechnologySection with icons, bullet lists and optional images; integrate into Solutions, How It Works and partner pages.

* \[ \] **4.3 Create workflow diagrams & interactive timelines** – design accessible visual timelines and infographics for patient and doctor journeys; implement interactive components in the How It Works section.

## Phase 5 – Polish & Readiness

* \[ \] **5.1 Refactor for performance & accessibility** – lazy‑load images, add skeleton loaders, audit responsiveness and ensure WCAG 2.1 compliance.

* \[ \] **5.2 Add error boundaries & loading states** – implement React error boundaries and Suspense for asynchronous operations.

* \[ \] **5.3 Enable TypeScript strict mode & add unit tests** – migrate any remaining any types; write unit tests for translation hooks and key components.

* \[ \] **5.4 Optimise bundle & SEO** – perform code splitting, optimise images and add SEO meta tags.

* \[ \] **5.5 Update documentation & readiness report** – update CLAUDE.md, conventions.md, doc-ref.md, i18n-analysis-report.md; compile V2\_POLISH\_AND\_READINESS\_REPORT.md summarising release readiness.

---

