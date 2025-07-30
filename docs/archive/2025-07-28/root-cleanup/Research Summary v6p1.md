# Research Summary for SKIIN Website Copy Update (v6.0)

This document gathers and synthesises the information required to update the SKIIN Switzerland website copy from version 5.0 to version 6.0. It consolidates insights from the existing copy specification, component mapping, change log, marketing strategy slides and additional authoritative sources. Each piece of evidence is cited with a tether ID from the PDF reader or from the research context. The research is organised by thematic categories aligned with the new requirements from the CEO.

## High‑level goals and context

The SKIIN website copy must evolve to reflect **CEO comments** and **marketing strategy** for 2025\. The overarching objectives include:

* **Aligning messaging with longevity and preventive care themes.** Messaging should emphasise that atrial fibrillation (AF) and other arrhythmias are often silent but dangerous and that extended monitoring can prevent strokes. The hero and problem–solution narratives should highlight urgency and tie heart health to enjoying life’s milestones.

* **Highlighting comfort and convenience.** The garment uses soft carbon‑fibre electrodes and is washable; studies show textile electrodes maintain ECG quality after 50 wash cycles and that patch‑style monitors are preferred by 93.7 % of patients over Holters. The copy should emphasise that SKIIN is water‑resistant, can be removed for showering and feels like normal clothing.

* **Integrating the “Silent Triad” narrative.** The marketing plan frames SKIIN 3X Screening™ as the only home‑based wearable to screen for arrhythmia, hypertension and sleep‑apnoea—the three conditions that often co‑occur and exacerbate each other. The copy must explain ambulatory blood‑pressure monitoring (ABPM) and sleep analytics while maintaining a unified story.

* **Updating the AI analysis description.** MediCalgorithmics’ DeepRhythm Platform is hardware‑agnostic, cloud‑based and uses convolutional neural networks and transformer models to detect multiple arrhythmias with high sensitivity. It is ISO/IEC 27001 certified and integrates seamlessly into clinical workflows. The process flow—sensor → app → encrypted cloud → AI → human review—should be clearly described.

* **Emphasising certification and reimbursement.** SKIIN is MDR Class IIa certified and registered with Swissmedic; it complies with ISO 13485 and ISO/IEC 27001 and stores data exclusively in Switzerland. The copy must highlight that screening is fully covered by basic insurance with a prescription and that self‑pay options are available.

* **Refining professional content.** The stand‑alone physicians page is removed in v5.0 and merged into a unified Partners page. Each partner subtype (patients, GPs, cardiologists, telemedicine providers, corporate wellness) has specific value propositions and CTAs (e.g., “Join Our GP Network,” “Book a Demo,” “Integrate SKIIN”)【189895243140782†L804-L934】. The MVCP section is embedded within the GP and cardiologist pages and describes account management, ECG review, blood‑pressure and sleep visualisation, remote monitoring tools and report generation.

* **Aligning with Myant marketing strategy.** The marketing plan emphasises slogans like “Arrhythmias Are Often Missed” and “14 Days = Better Detection”. It presents a problem hierarchy linking silent arrhythmias, the burden of traditional monitoring and siloed care to SKIIN’s solutions. It underscores the need for an EU‑specific website that handles e‑commerce and lead generation. Our copy must reflect these themes while adhering to the updated brand voice (empathetic expert, avoid hyperbolic marketing terms).

## Repository and component structure

To implement the new copy, it is essential to understand how the current website is structured and how copy is rendered. The yangsi7/skinn-convert-swiss-pages repository uses **React with TypeScript**, **React Router** for navigation and a **design system** based on **Radix UI** components and **Tailwind** styling. Internationalisation (i18n) is handled through custom hooks (useTranslation) that map translation keys to text. Copy is stored in JSON/TS translation files under src/translations/\<page\>/\<lang\>.ts.

### Layout and page routing

* The docs/ROUTE\_MAP.md file lists all routes across languages. There are pages for / (legacy home) and /home-2 (modern home), /solutions/\*, /partners/\*, /how-it-works/\*, /about/\* and a placeholder for the unused physicians page[\[1\]](https://github.com/yangsi7/skinn-convert-swiss-pages/blob/ffebeef0fdc7686d1c5ab7c9a31881bc2f1112a7/docs/ROUTE_MAP.md#L20-L64). Each route maps to a React component imported from src/pages.

* The home page (Home2.tsx) imports many components (hero, statistics, problem/solution, features, etc.) and uses translation keys from home/en.ts[\[2\]](https://github.com/yangsi7/skinn-convert-swiss-pages/blob/ffebeef0fdc7686d1c5ab7c9a31881bc2f1112a7/src/pages/Home2.tsx#L24-L32). This design implies that updating the copy requires editing translation files rather than component code, except where static text (e.g., “14 Days Monitoring,” “500+ Patients”) appears.

* The component-inventory.md document summarises available components in categories: layout (Navbar, Footer, Section headers), UI controls (Card, Button, Badge), home page sections (HeroSection, StatisticsShowcase, ProcessFlow, Comparison, EligibilityChecker, EnhancedComparison), partner‑specific sections (DoctorsIntro, MVCP, GPFeatures), and protected dashboard components (HeartBalanceRing, TabNavigation)[\[3\]](https://github.com/yangsi7/skinn-convert-swiss-pages/blob/ffebeef0fdc7686d1c5ab7c9a31881bc2f1112a7/docs/architecture/component-inventory.md#L17-L57). It emphasises **atomic design** principles and adherence to a **progressive design system**[\[4\]](https://github.com/yangsi7/skinn-convert-swiss-pages/blob/ffebeef0fdc7686d1c5ab7c9a31881bc2f1112a7/docs/architecture/component-inventory.md#L104-L114).

### Example components and translation patterns

* **HeroSection:** The hero component uses translation keys for the main headline, description, and CTA labels, but still embeds static content such as “14 days monitoring” and statistics like “7x better detection” and “500+ patients”[\[5\]](https://github.com/yangsi7/skinn-convert-swiss-pages/blob/ffebeef0fdc7686d1c5ab7c9a31881bc2f1112a7/src/components/home/HeroSection.tsx#L31-L100). These will need to be removed or updated in v6.0.

* **ProblemSolutionSection:** This component maps over arrays of problems and solutions defined in translation files. Each item includes a title and description and is associated with an icon[\[6\]](https://github.com/yangsi7/skinn-convert-swiss-pages/blob/ffebeef0fdc7686d1c5ab7c9a31881bc2f1112a7/src/components/home/ProblemSolutionSection.tsx#L11-L32). New problem/solution narratives should be added to the translation file and their lengths considered for the card layout.

* **EligibilityChecker:** The eligibility checker is an interactive form that asks about symptoms, risk factors, insurance model and insurer, then produces a recommendation (covered, consult-first or self-pay). It uses translation keys for questions and results and maps insurance models to next steps[\[7\]](https://github.com/yangsi7/skinn-convert-swiss-pages/blob/ffebeef0fdc7686d1c5ab7c9a31881bc2f1112a7/src/components/home/EligibilityChecker.tsx#L53-L115). The logic might remain unchanged, but labels must be updated (e.g., “10-Day Heart Screening” instead of “Holter ECG”).

### Translation files

* The home/en.ts translation file includes keys for hero text, statistics, clinical evidence, features, technology, patient journey, insurance models, risk assessment, CTA, comparison table, problem/solution, FAQ, contact form and footer. It currently references outdated terms like “14-day continuous monitoring”, “7x better detection”, “500+ Patients” and “94% compliance”[\[8\]](https://github.com/yangsi7/skinn-convert-swiss-pages/blob/ffebeef0fdc7686d1c5ab7c9a31881bc2f1112a7/src/translations/home/en.ts#L265-L312). Updating the copy requires editing these keys to reflect the v6.0 content (e.g., “10-Day Heart Screening,” 66 % vs 9 % detection, 70 % silent AF). Similar translation files exist for other languages (de.ts, fr.ts, etc.), which must be updated concurrently once the English text is finalised.

### Design considerations from uploaded images

* **Garment visuals:** Images such as man-wear-band.webp, skiin-your-second-skin.png and skiin-kit.webp show the SKIIN band on a male model, the variety of SKIIN garments (sports bra, underwear, baby vest) and the kit contents. These images emphasise comfort, natural fit and completeness. They can be used in the hero or features section to visualise the comfort revolution.

* **Comparison graphic:** Screenshot 2025-07-23 at 15.53.36.png illustrates SKIIN’s advantages (multimodality, continuous, natural form factor) versus competitors (single modality, episodic, artificial, obtrusive). This can support the comparison section or technology page.

* **Medicalgorythmics reports:** The pamphlet and example reports show the comprehensive analysis produced by the DeepRhythm Platform, including arrhythmia detection summary, ECG strips and trends. These visuals can enrich the technology or evidence pages to illustrate the AI workflow and report output.

## Evidence supporting key claims

### Silent AF and stroke risk

* Up to **70 %** of atrial fibrillation episodes are asymptomatic, making early detection critical. Continuous monitoring is essential because symptomatic episodes represent only a fraction of AF events.

* Approximately **20 %** of ischaemic strokes are attributable to atrial fibrillation. Detecting AF early enables preventive treatment and reduces stroke risk.

### Detection rates with extended monitoring

* A prospective pilot study comparing a 14‑day ECG patch to a 24‑hour Holter monitor found that paroxysmal arrhythmias were detected in **66 %** of patients using the patch versus **9 %** using the Holter.

* Traditional Holters worn for 24–48 hours are too brief to capture infrequent arrhythmias; the marketing plan emphasises that “14 Days = Better Detection” and SKIIN’s 10‑day monitoring follows the same principle.

### Patient comfort and device durability

* Textile electrodes maintain ECG signal quality after **at least 50 wash cycles**.

* In comparative trials, **93.7 %** of patients preferred patch monitors over Holter monitors; patch monitors were worn for longer periods and produced cleaner data.

### Ambulatory blood‑pressure monitoring and sleep analysis

* **ABPM** measures blood pressure every **20–30 minutes** over 24 hours; it is considered the reference standard for diagnosing hypertension and predicts cardiovascular risk better than office readings.

* Sleep sensors monitor breathing patterns, heart‑rate variability and nocturnal blood‑pressure dipping to detect sleep apnoea and other sleep‑related cardiac risks.

### Technology and AI analysis

* The SKIIN device combines carbon‑fibre textile electrodes, ABPM sensors and sleep analysis tools in a single comfortable platform.

* MediCalgorithmics’ **DeepRhythm Platform** analyses ECG data with **convolutional neural networks and transformer models**, delivering high sensitivity and integrating seamlessly into clinical workflows.

* The platform is **ISO/IEC 27001 certified** for information security and supports scalable integration via robust APIs.

### Business & marketing context

* The marketing plan underscores that arrhythmias are often missed, standard Holters are too short to detect them, and SKIIN offers comfort, control and clarity from home.

* It introduces the concept of the “Silent Triad” (arrhythmia, hypertension, sleep apnoea) and positions SKIIN 3X Screening™ as the only home‑based solution that connects these dots.

* The plan emphasises building a funnel with problem–solution messaging, a clear conversion path and integrated e‑commerce and lead generation.

## Component mapping and gap analysis

The Component Mapping & Gap Analysis document details how the current website implementation (repository yangsi7/skinn-convert-swiss-pages) maps to the v5.0 copy spec and where changes are required. Key findings relevant to v6.0 include:

* **Hero Section:** Replace existing headline and subheadline with new A/B options; adjust badge to “MDR Class IIa Certified & Swissmedic Registered”; update CTAs (“Start Your Free Assessment”, “Check Insurance Coverage”).

* **Statistics Section:** Replace numbers with four evidence‑based statistics: 70 % silent AF, 20 % stroke link, 66 % vs 9 % detection, and 93.7 % patient comfort.

* **Problem/Solution Section:** Rewrite narratives to emphasise silent danger, outdated monitoring, and siloed care; integrate adapted Samantha phrasing (e.g., “waiting and wondering,” “brief snapshot”); emphasise tri‑modal screening.

* **Features & Process:** Consolidate features around comfort, AI analysis, clinical expertise and insurance coverage; update process steps with durations; separate patient and clinician workflows.

* **Partner Pages:** Merge physicians content into partners; create subpages for GPs, cardiologists, telemedicine providers and corporate wellness; embed MVCP features; update CTAs accordingly.

* **Technology Page:** Expand sections on carbon electrodes, AI analysis, ABPM and sleep analysis.

* **Evidence Page:** Summarise key studies (arrhythmia detection, silent AF, stroke link, ABPM, textile durability, patient preference).

* **Removed pages:** The blog, heart‑age calculator and stand‑alone physicians page are removed.

## Conclusion

The research demonstrates that the updated copy should prioritise preventive health urgency, emotional storytelling, comfort, and the integrated screening “Silent Triad.” All claims must be grounded in peer‑reviewed evidence. The copy should showcase the technology’s comfort and durability, highlight the secure AI analysis pipeline, and present clear, audience‑specific value propositions with consistent CTAs. Component mapping must ensure the site’s design and structure support this content, particularly the unified Partners page and embedded MVCP features.

---

[\[1\]](https://github.com/yangsi7/skinn-convert-swiss-pages/blob/ffebeef0fdc7686d1c5ab7c9a31881bc2f1112a7/docs/ROUTE_MAP.md#L20-L64) ROUTE\_MAP.md

[https://github.com/yangsi7/skinn-convert-swiss-pages/blob/ffebeef0fdc7686d1c5ab7c9a31881bc2f1112a7/docs/ROUTE\_MAP.md](https://github.com/yangsi7/skinn-convert-swiss-pages/blob/ffebeef0fdc7686d1c5ab7c9a31881bc2f1112a7/docs/ROUTE_MAP.md)

[\[2\]](https://github.com/yangsi7/skinn-convert-swiss-pages/blob/ffebeef0fdc7686d1c5ab7c9a31881bc2f1112a7/src/pages/Home2.tsx#L24-L32) Home2.tsx

[https://github.com/yangsi7/skinn-convert-swiss-pages/blob/ffebeef0fdc7686d1c5ab7c9a31881bc2f1112a7/src/pages/Home2.tsx](https://github.com/yangsi7/skinn-convert-swiss-pages/blob/ffebeef0fdc7686d1c5ab7c9a31881bc2f1112a7/src/pages/Home2.tsx)

[\[3\]](https://github.com/yangsi7/skinn-convert-swiss-pages/blob/ffebeef0fdc7686d1c5ab7c9a31881bc2f1112a7/docs/architecture/component-inventory.md#L17-L57) [\[4\]](https://github.com/yangsi7/skinn-convert-swiss-pages/blob/ffebeef0fdc7686d1c5ab7c9a31881bc2f1112a7/docs/architecture/component-inventory.md#L104-L114) component-inventory.md

[https://github.com/yangsi7/skinn-convert-swiss-pages/blob/ffebeef0fdc7686d1c5ab7c9a31881bc2f1112a7/docs/architecture/component-inventory.md](https://github.com/yangsi7/skinn-convert-swiss-pages/blob/ffebeef0fdc7686d1c5ab7c9a31881bc2f1112a7/docs/architecture/component-inventory.md)

[\[5\]](https://github.com/yangsi7/skinn-convert-swiss-pages/blob/ffebeef0fdc7686d1c5ab7c9a31881bc2f1112a7/src/components/home/HeroSection.tsx#L31-L100) HeroSection.tsx

[https://github.com/yangsi7/skinn-convert-swiss-pages/blob/ffebeef0fdc7686d1c5ab7c9a31881bc2f1112a7/src/components/home/HeroSection.tsx](https://github.com/yangsi7/skinn-convert-swiss-pages/blob/ffebeef0fdc7686d1c5ab7c9a31881bc2f1112a7/src/components/home/HeroSection.tsx)

[\[6\]](https://github.com/yangsi7/skinn-convert-swiss-pages/blob/ffebeef0fdc7686d1c5ab7c9a31881bc2f1112a7/src/components/home/ProblemSolutionSection.tsx#L11-L32) ProblemSolutionSection.tsx

[https://github.com/yangsi7/skinn-convert-swiss-pages/blob/ffebeef0fdc7686d1c5ab7c9a31881bc2f1112a7/src/components/home/ProblemSolutionSection.tsx](https://github.com/yangsi7/skinn-convert-swiss-pages/blob/ffebeef0fdc7686d1c5ab7c9a31881bc2f1112a7/src/components/home/ProblemSolutionSection.tsx)

[\[7\]](https://github.com/yangsi7/skinn-convert-swiss-pages/blob/ffebeef0fdc7686d1c5ab7c9a31881bc2f1112a7/src/components/home/EligibilityChecker.tsx#L53-L115) EligibilityChecker.tsx

[https://github.com/yangsi7/skinn-convert-swiss-pages/blob/ffebeef0fdc7686d1c5ab7c9a31881bc2f1112a7/src/components/home/EligibilityChecker.tsx](https://github.com/yangsi7/skinn-convert-swiss-pages/blob/ffebeef0fdc7686d1c5ab7c9a31881bc2f1112a7/src/components/home/EligibilityChecker.tsx)

[\[8\]](https://github.com/yangsi7/skinn-convert-swiss-pages/blob/ffebeef0fdc7686d1c5ab7c9a31881bc2f1112a7/src/translations/home/en.ts#L265-L312) en.ts

[https://github.com/yangsi7/skinn-convert-swiss-pages/blob/ffebeef0fdc7686d1c5ab7c9a31881bc2f1112a7/src/translations/home/en.ts](https://github.com/yangsi7/skinn-convert-swiss-pages/blob/ffebeef0fdc7686d1c5ab7c9a31881bc2f1112a7/src/translations/home/en.ts)