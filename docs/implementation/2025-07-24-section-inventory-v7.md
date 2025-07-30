# **Inventory of Sections, Components and Tasks (SKIIN Website v7.2 Implementation)**

This document enumerates every page, section and UI component that needs to be updated, created or removed in order to implement the Version 7.2 copy specification on the existing SKIIN Switzerland marketing site. Tasks are grouped by page and component. Each task references the relevant copy section in **UI Component Mapping Copy Spec (Version 7.1)** and the corresponding code component (if it exists) or notes where a new component must be created. Use this list to track implementation progress and assign work across development and design teams.

## **Legend**

* **Page/Section** – Logical grouping of content (e.g., Home → Hero Section).

* **Component** – React component in the codebase or new component to build.

* **Copy Source** – Reference to the section in `UI Component Mapping Copy Spec (Version 7.1)` containing the required copy and design notes.

* **Existing File** – Path to the existing component in the repository (if applicable).

* **Tasks** – Specific actions required to update or build the component.

## **Home Page**

| Page/Section | Component | Copy Source | Existing File | Tasks |
| ----- | ----- | ----- | ----- | ----- |
| **Hero Section** | `HeroSection` | 1.1 Hero Section | `/src/components/home/HeroSection.tsx` | • Update translation strings to include Variant A (Urgency & Longevity), Variant B (Comfort & Longevity) and Variant C (Family & Control) with headlines, sub‑headlines, emotional sub‑headlines and CTAs. • Add support for emotional sub‑headline below the headline. • Ensure CTAs appear above the fold and map to the eligibility/coverage form. • Remove references to 14‑day monitoring; emphasise 10‑day screening. • Maintain split‑screen layout and trust badge component. |
| **Statistics Section** | `StatisticsShowcase` | 1.2 Statistics Section | `/src/components/home/StatisticsShowcase.tsx` | • Update card texts to display: “70 % of atrial fibrillation episodes occur without symptoms,” “20–30 % of ischaemic strokes are attributed to AF,” and “66 % vs 9 % detection rate with extended monitoring vs 24‑hour Holter.” • Add a footnote linking to the Clinical Evidence page. • Optionally add a fourth card for ABPM being the reference standard for diagnosing hypertension. |
| **Problem & Solution Narrative** | `ProblemSolutionSection` | 1.3 Problem & Solution Narrative | `/src/components/home/ProblemSolutionSection.tsx` | • Replace existing problem/solution copy with v7.2 narrative. • Introduce icons or sub‑cards for arrhythmia, hypertension and sleep apnoea to visualise the Silent Triad. • Add a link to the Vision page for SKIIN 3X Screening™. |
| **Product Section** | `ProductSection` (new) or extend `FeaturesSection` | 1.4 Product Section | `n/a` (new component) | • Create a `ProductSection` component that displays eight benefit cards in a 2 × 4 grid. • Use icons to illustrate each benefit: extended monitoring, shortened wait times, seamless referrals, comfortable band, AI‑powered precision, fast turnaround, proven technology and Health Canada licensing. • Include a concluding sentence about secure data flow to the ISO 27001‑certified cloud. • Incorporate a carousel/graphic illustrating the sensor→app→cloud→AI→cardiologist pipeline (build a separate `TechCarousel` if necessary). • Import and display the “skiin‑your‑second‑skin.png” collage at the top of this section. |
| **Process Section** | `ProcessFlow` | 1.5 Process Section | `/src/components/home/HowItWorksSection.tsx` or `/src/components/home/ProcessFlow.tsx` | • Update step descriptions to match the v7.2 copy: include eligibility assessment, kit delivery, 10‑day monitoring (mention removability for showers), AI analysis & cardiologist review, and results. • Ensure the “AI analysis & cardiologist review” phrase appears explicitly in step 4\. |
| **SKIIN by the Numbers** | `NumbersSection` (new) | 1.6 SKIIN by the Numbers | `n/a` (new component) | • Build a `NumbersSection` component to display four metrics (95 % detection accuracy, 10 days continuous monitoring, 100 % insurance coverage, 24/7 real‑time analysis). • Use large typography and concise descriptions; link each statistic to the Evidence page via tooltip or footnote. |
| **Clinically Proven Technology** | `ClinicallyProvenTechSection` (new or reused from Features) | 1.7 Clinically Proven Technology | `n/a` | • Create a component that presents four trust markers: 98.6 % accuracy rate, published research, MDR Class IIa & CE certification, cardiologist endorsement. • Use icons and a grid layout. • Add links to the Evidence page for details. |
| **AI‑Measured, Cardiologist‑Evaluated** | `AISection` (new/merged) | 1.8 AI‑Measured & Cardiologist‑Evaluated | `n/a` (new component or merge into `ProductSection`) | • Decide whether to keep a standalone AI section or merge the six pillars into the Product section. • If standalone, build a component displaying six cards/pillars: comfortable monitoring, AI‑powered precision, cardiology expertise, seamless referrals, fast turnaround, insurance coverage & self‑pay options. • If merged, incorporate these pillars into the eight benefit cards and Care360 narrative. |
| **Myant Care360 Technology** | `Care360Section` (new) | 1.9 Myant Care360 Technology | `n/a` | • Build a split‑layout component summarising continuous 10‑day monitoring, real‑time AI analysis, Swiss cardiologist validation, medical‑grade accuracy, seamless data transmission, proven technology and Health Canada licensing. • Include an illustration or carousel showing the band, smartphone app and AI analysis. • Use the product collage image for visual variety. |
| **Know Your Heart Risk** | `RiskCardsSection` (new or adapt `RiskAssessment`) | 1.10 Know Your Heart Risk | `/src/components/home/RiskAssessment.tsx` | • Update the risk cards to the v7.2 categories: Silent Atrial Fibrillation, Cardiac Arrhythmias and Heart Disease Prevention. • Provide concise descriptions and icons (pulse, heartbeat, shield). • Position the section before the insurance & pricing information. |
| **Insurance Coverage & Pricing** | `InsuranceSection` and `PricingSection` | 1.11 Insurance Coverage & Pricing | `/src/components/home/InsuranceSection.tsx` | • Separate coverage information from pricing. • In `InsuranceSection`, bullet out coverage benefits: covered by basic insurance when prescribed, reimbursement support, direct billing and four pathways (Standard, GP model, HMO, Telmed). • Note that GPs bill only for consultation and onboarding; cardiologists bill for interpretation. • In `PricingSection`, create a table with 3‑, 5‑ and 10‑day packages; highlight the 10‑day option. • Include the self‑pay note: “If you have no symptoms but still want peace of mind, the 10‑Day Screening offers the most comprehensive insight.” • Place CTAs after the pricing table. |
| **Testimonials** | `TestimonialsSection` | 1.12 Testimonials Section | `/src/components/home/TestimonialsSection.tsx` | • Update testimonial copy to match v7.2. • Ensure component supports a carousel or grid; include placeholders for images. |
| **Final CTA & CEO Quote** | `CtaSection` | 1.13 Final CTA Section | `/src/components/home/CtaSection.tsx` | • Update headline, subtitle and description. • Include CTAs: Start Your Free Assessment, Talk to a Heart‑Health Specialist, Book a Demo (professional). • Add Tony Chahine’s quote below the CTAs. • Ensure responsive layout and theme compliance. |

## **Solutions Section**

| Page/Section | Component | Copy Source | Existing File | Tasks |
| ----- | ----- | ----- | ----- | ----- |
| **10‑Day Heart Screening** | `SolutionPage` (reuse with modifications) | 2.1 10‑Day Heart Screening | `/src/pages/solutions/14DayHolter.tsx` or similar | • Adapt existing 14‑Day Holter page to 10‑Day Heart Screening. • Update hero badge, headline, subheadline and CTA. • Replace detection statistics with 66 % vs 9 % detection and emphasise comfort. • Describe why 10 days capture more arrhythmias; list who should consider screening (adults ≥50, family history, symptoms, diagnosed arrhythmia, pre‑operative assessment, prevention‑minded). • Add insurance & pricing call‑out and CTA. • Update translation keys. |
| **Ambulatory Blood Pressure Monitoring (ABPM)** | `SolutionPage` (new) | 2.2 ABPM | `n/a` | • Create a new ABPM page with hero (badge, headline, subheadline, CTA). • Include problem/solution narrative emphasising masked/nocturnal hypertension, measurement intervals (15–30 min day/30–60 min night) and reference standard status. • Present benefits: reference standard, comprehensive profile, convenience and actionable insights. • Add CTA. |
| **Silent Triad Screening (SKIIN 3X Screening™)** | `SolutionPage` (new) | 2.3 Silent Triad Screening | `n/a` | • Build a new page describing tri‑modal screening (ECG, BP, sleep). • Create hero with “Coming Soon” badge and waitlist CTA. • Explain features: one kit, synchronised data, sleep insights and clinical oversight. • Provide link to the Vision page. |

## **Partners Section**

| Page/Section | Component | Copy Source | Existing File | Tasks |
| ----- | ----- | ----- | ----- | ----- |
| **General Practitioners (GPs)** | `PartnerGPSection` (new) | 3.1 General Practitioners | `n/a` or `/src/components/partners/GeneralPractitionersSection.tsx` | • Create or update a section for GPs that communicates value propositions: detect more sooner, streamlined workflow, reimbursable care (GPs bill only for consultation/onboarding; cardiologists bill for interpretation) and effortless follow‑up. • Include MVCP details (real‑time monitoring, analysis tools, patient management dashboard, one‑click reporting, security & compliance). • Update CTAs (Join Our GP Network, Book a Demo). • Remove any patient‑facing content from this page. |
| **Cardiologists** | `PartnerCardiologistSection` (new) | 3.2 Cardiologists | `n/a` or `/src/components/partners/CardiologistsSection.tsx` | • Create or update a section explaining comprehensive data sets (ECG, BP, sleep), AI‑powered & human‑reviewed analysis, efficient workflows and collaborative care. • Include CTAs (Book a Demo, Integrate SKIIN). • Ensure tone is professional and emphasises data accuracy and workflow efficiency. |
| **Telemedicine Providers** | `PartnerTelemedSection` (new) | 3.3 Telemedicine Providers | `n/a` | • Build a section for telemedicine providers describing how SKIIN enables remote cardiac care. • Highlight features: complete vital signs from afar, scalable platform with MVCP and API integration, improved patient engagement. • Provide CTAs (Integrate SKIIN, Book a Demo). |
| **Corporate (Employers & Insurers)** | `PartnerCorporateSection` (new) | 3.4 Corporate | `n/a` | • Develop a section targeting employers and insurers. • Emphasise preventive wellness programmes, flexible packages and data‑driven insights. • Include CTAs (Get a Corporate Quote, Book a Demo). |

## **How It Works Section**

| Page/Section | Component | Copy Source | Existing File | Tasks |
| ----- | ----- | ----- | ----- | ----- |
| **Process Page** | `ProcessPage` (reuse) and `ClinicianDataFlow` (new) | 4.1 Process Page | `/src/pages/how-it-works/process.tsx` or `/src/components/how-it-works/ProcessSection.tsx` | • Reuse the five‑step patient journey from the home page; ensure copy matches 1.5 Process Section. • Add a Clinician Data Flow subsection explaining the data architecture (device → app → cloud → MVCP → EMR). • Emphasise compliance & security (MDR Class IIa, ISO 13485, ISO/IEC 27001, GDPR, Swiss DPA) and describe clinician workflow (onboarding, real‑time monitoring, analysis tools, report generation). |
| **Reimbursement Page** | `ReimbursementSection` (new) | 4.2 Reimbursement Page | `n/a` | • Create a page explaining insurance pathways: Standard, Hausarztmodell/GP, HMO, Telmed and self‑pay. • Include the pricing table with 3‑/5‑/10‑day packages and the self‑pay note for asymptomatic users. • Clarify that GPs bill only for consultation/setup while cardiologists bill for interpretation. • Provide CTAs to check insurance coverage or start an assessment. |
| **Technology Page** | `TechnologySection` (new) or refactor existing | 4.3 Technology Page | `/src/pages/how-it-works/technology.tsx` | • Replace bullet outlines with narrative paragraphs describing carbon‑electrode technology, ambulatory BP & sleep analysis, AI analysis and security & compliance, as detailed in the copy spec. • Add a “Looking Ahead” subsection referencing SKIIN 3X Screening™ and the Silent Triad. • Include a carousel or series of images showing the band, cuff, sleep sensor, app, cloud and cardiologist review pipeline. • Integrate the SKIIN vs Wearables graphic near the comparison table. |
| **Clinical Evidence Page** | `EvidenceSection` (new) | 4.4 Clinical Evidence Page | `n/a` | • Build a page summarising key studies: detection superiority, patient comfort, silent AF & stroke risk, ABPM efficacy, sleep apnoea & arrhythmia, and durability of electrodes. • Include citations and a CTA inviting clinicians to request a full evidence dossier. |
| **FAQ Page** | `FaqSection` (new or reuse) | 4.5 FAQ Page | `/src/pages/how-it-works/faq.tsx` or `/src/components/faq/FaqSection.tsx` | • Create categories (Getting Started, Wearing SKIIN, Results & Data). • Populate questions and answers with the v7.2 copy. • Include a CTA (“Still have questions? Contact us →”). |

## **About Section**

| Page/Section | Component | Copy Source | Existing File | Tasks |
| ----- | ----- | ----- | ----- | ----- |
| **Company & Mission** | `CompanyPage` | 5.1 Company & Mission | `/src/pages/about/index.tsx` or `/src/components/about/CompanySection.tsx` | • Update the page with Tony Chahine’s personal story and the history of Myant, including the Nanoleq acquisition. • Add mission and vision statements emphasising longevity and routine cardiac care. • List the values (Longevity & Compassion, Swiss Excellence, Local Partnership, Innovation With Purpose). • Ensure translation keys reflect the new copy. |
| **Our Team & Medical Advisors** | `TeamPage` | 5.2 Our Team & Medical Advisors | `/src/pages/about/team.tsx` | • Create or update bios for key leaders and advisors. • Include placeholders or actual photos. • Feature quotes from Swiss cardiologists and emphasise expertise across cardiology, digital health and textile science. |
| **Testimonials** | `TestimonialsPage` | 5.3 Testimonials | `/src/pages/about/testimonials.tsx` | • Aggregate the home‑page testimonials and allow for longer stories. • Provide a form or CTA for users to submit their stories in the future. |
| **Compliance & Legal** | `CompliancePage` | 5.4 Compliance & Legal | `/src/pages/about/compliance.tsx` | • Summarise certifications (MDR Class IIa, Swissmedic, ISO 13485, ISO/IEC 27001), data protection (GDPR, Swiss DPA), insurance & billing guidelines and user rights. • Include standard privacy, medical and insurance notices. |
| **Contact** | `ContactPage` | 5.5 Contact | `/src/pages/about/contact.tsx` | • List phone support hours and numbers; provide multiple email addresses (support, info, clinical, technical, privacy). • State response commitments for each channel. |
| **Support** | `SupportPage` | 5.6 Support | `n/a` or `/src/pages/support/index.tsx` | • Build a simple page directing users to **support.skiin.ch**. • Describe available resources (troubleshooting guides, FAQs, live chat) and note that support is handled by Swiss‑based representatives in multiple languages. |

## **Global / Miscellaneous**

* **Translation Keys:** For every new or updated copy element, create or update translation keys in the appropriate language files (`home.en.ts`, `solutions.en.ts`, `partners.en.ts`, etc.). Use formal address in German (Sie), French (Vous) and Italian (Lei). Keep SEO terms like “arrhythmia,” “holter,” and “ambulatory blood pressure monitoring” for searchability. Check for duplicate keys and follow naming conventions described in the project’s `conventions.md`.

* **Theme Compliance:** Ensure all new components adhere to the design system and theme variables as outlined in `theme-compliance-audit.md` and `theme-aware-components-inventory.md`. Replace hard‑coded colours with CSS variables; use Tailwind classes appropriately; ensure dark‑mode compatibility.

* **Accessibility:** All components must include ARIA labels, alt text for images, logical heading hierarchy, sufficient colour contrast and keyboard accessibility. Follow WCAG 2.1 guidelines.

* **Performance & SEO:** Optimise image loading (use next/image or similar), implement lazy loading for heavy components (e.g., carousels), and ensure metadata and structured data are updated for SEO (e.g., JSON‑LD for medical devices). Use the existing analytics hooks to track conversions and CTA clicks.

## **Partners Section**

| Partner Page | Component | Copy Source | Existing File | Tasks |
| ----- | ----- | ----- | ----- | ----- |
| **General Practitioners (GPs)** | `PartnerGPSection` | 3.1 General Practitioners | `/src/components/partners/GeneralPractitioners.tsx` | • Relocate MVCP content from the home page to this page. • Update value propositions to highlight detection benefits across ECG, BP and sleep, streamlined workflow via the MVCP and no equipment costs. • Clarify that GPs can bill only for consultation/onboarding; cardiologists bill for interpretation. • Describe MVCP features: real‑time monitoring, analysis tools, patient dashboard, one‑click reporting and security. • Ensure CTAs (Join Our GP Network, Book a Demo). |
| **Cardiologists** | `PartnerCardiologistSection` | 3.2 Cardiologists | `/src/components/partners/Cardiologists.tsx` | • Update copy to emphasise comprehensive data (extended ECG, BP and sleep), AI‑assisted analysis, efficient workflows and collaborative care. • Include MVCP overview for cardiologists. • Provide CTAs (Book a Demo, Integrate SKIIN). |
| **Telemedicine Providers** | `PartnerTelemedSection` (new) | 3.3 Telemedicine Providers | `n/a` | • Create a new partner page focusing on remote monitoring capabilities, API integration and patient engagement benefits. • Describe how SKIIN enables telemedicine providers to scale cardiac care. • Add CTAs (Integrate SKIIN, Book a Demo). |
| **Corporate (Employers & Insurers)** | `PartnerCorporateSection` (new) | 3.4 Corporate | `n/a` | • Build a page tailored to employers and insurers: emphasise preventive wellness programmes, flexible packages and data‑driven insights. • Offer CTAs (Get a Corporate Quote, Book a Demo). |

## **How It Works Section**

| Page/Section | Component | Copy Source | Existing File | Tasks |
| ----- | ----- | ----- | ----- | ----- |
| **Process Page** | `ProcessFlow`, `ClinicianDataFlow` | 4.1 Process Page | `/src/pages/how-it-works/process.tsx` or `/src/components/how-it-works/ProcessFlow.tsx` | • Reuse the patient journey with updated copy. • Add a clinician data flow subsection explaining the path: device → Bluetooth → app → encrypted cloud → MVCP → EMR. • Explain compliance/security (MDR Class IIa, ISO 13485, ISO/IEC 27001, GDPR, Swiss DPA) and clinical workflow (onboarding, real‑time monitoring, analysis tools, report generation). |
| **Reimbursement Page** | `ReimbursementSection` | 4.2 Reimbursement Page | `/src/pages/how-it-works/reimbursement.tsx` | • Explain the four insurance pathways and self‑pay options. • Clarify GP and cardiologist billing. • Include the pricing table and the “no symptoms but still want peace of mind” note. |
| **Technology Page** | `TechnologySection`, `TechCarousel`, `ComparisonGraphic` | 4.3 Technology Page | `/src/pages/how-it-works/technology.tsx` | • Replace bullet outline with narrative paragraphs covering carbon‑electrode technology, ABPM & sleep analysis, AI analysis pipeline and security/compliance. • Emphasise that SKIIN is the first piece of textile designed to diagnose the heart; describe the Silent Triad. • Build a `TechCarousel` component to depict the sensor→app→cloud→AI→cardiologist pipeline. • Include the “SKIIN vs Wearables” comparison graphic to contrast multimodal, continuous, passive monitoring with single‑modality, episodic devices. • Add a “Looking Ahead” paragraph linking to the Vision page. |
| **Clinical Evidence Page** | `EvidenceSection` (new) | 4.4 Clinical Evidence Page | `n/a` | • Summarise key studies (66 % vs 9 % detection, silent AF, stroke risk, ABPM efficacy, sleep apnoea & arrhythmia, durability of textile electrodes). • Provide citations with tether IDs. • Invite clinicians to request a full evidence dossier. • Design a simple layout with study titles and key findings. |
| **FAQ Page** | `FaqSection` | 4.5 FAQ Page | `/src/components/home/FaqSection.tsx` (or dedicated page) | • Group questions into Getting Started, Wearing SKIIN and Results & Data. • Provide concise, reassuring answers. • Add CTA linking to a contact form for unresolved questions. |

## **About Us Section**

| Page/Section | Component | Copy Source | Existing File | Tasks |
| ----- | ----- | ----- | ----- | ----- |
| **Company & Mission** | `CompanyPage` | 5.1 Company & Mission | `/src/pages/about/company.tsx` | • Tell Tony Chahine’s story of caring for his father and weaving health into textiles. • Clarify that Myant developed the technology in Canada and acquired Nanoleq (ETH spin‑off) for its Swiss R\&D hub. • Present mission (“We empower people and their physicians to detect cardiac issues early by providing comfortable, continuous monitoring from home”) and vision (“Reduce preventable cardiac events by 50 % in the next decade by making cardiac screening as routine as dental check‑ups”). • List values: Longevity & Compassion, Swiss Excellence, Local Partnership, Innovation with Purpose. |
| **Our Team & Advisors** | `TeamPage` | 5.2 Our Team & Medical Advisors | `/src/pages/about/team.tsx` | • Provide bios of key executives and medical advisors. • Include quotes or video testimonials where available. • Use headshots; ensure translation keys are updated. |
| **Testimonials** | `TestimonialsPage` | 5.3 Testimonials | `/src/pages/about/testimonials.tsx` | • Aggregate patient and doctor testimonials; reuse home page stories with expanded detail. |
| **Compliance & Legal** | `CompliancePage` | 5.4 Compliance & Legal | `/src/pages/about/compliance.tsx` | • Summarise certifications (MDR Class IIa, Swissmedic, ISO 13485, ISO/IEC 27001), data protection (GDPR, Swiss DPA), insurance/billing guidelines and user rights. • Provide standard privacy, medical and insurance notices. |
| **Contact** | `ContactPage` | 5.5 Contact | `/src/pages/about/contact.tsx` | • List contact channels: phone numbers, emails (general, support, physician liaison, technical, privacy) and response commitments. • Provide a contact form for general enquiries. |

## **Support**

| Page | Component | Copy Source | Existing File | Tasks |
| ----- | ----- | ----- | ----- | ----- |
| **Support** | External link | n/a | `n/a` | • Ensure the navigation includes a “Support” link pointing to `https://support.skiin.ch`. • Remove any on‑site support pages. |

## **Global / Cross‑Cutting Tasks**

| Task | Description |
| ----- | ----- |
| **Remove patient page from Partners** | Delete or repurpose the patient subsection from the Partners section; patient‑focused content belongs on the Home and Solutions pages. |
| **Relocate MVCP content** | Move the detailed MVCP explanation from the home page to the General Practitioner page; on the home page, include only a brief mention linking professionals to the GP page. |
| **Remove Blog and Heart‑Age Tool** | Ensure these sections remain absent per CEO instruction; future content strategies can revisit this. |
| **Update Translation Files** | For every new or modified copy element, add or update keys in the translation files (`/src/locales/en.ts`, etc.). Maintain consistency across German, French and Italian translations. |
| **Ensure Theme Compliance** | When updating or creating components, use CSS variables and Tailwind classes (`text-primary`, `bg-secondary`, etc.) instead of hard‑coded colors. Follow guidelines in `/working_files/conventions.md` and `/docs/theme-compliance-audit.md`. Test all components across the four predefined themes. |
| **Accessibility & SEO** | Add alt text to images and icons; use semantic HTML elements; ensure headings follow a logical hierarchy; include ARIA attributes where necessary. Optimise page metadata for SEO. |
| **Analytics Integration** | Use existing analytics components (AnalyticsProvider, ConversionButton) to track CTAs and form submissions. Ensure GDPR‑compliant consent banners are active. |
| **Performance Optimisation** | Lazy‑load heavy images (e.g., product collage); use responsive images; split code bundles for new pages/components. |

## **Notes**

* Each task should be marked as completed in the project `todo.md` once implemented. Cross‑reference the relevant copy section for verification.

* Developers should follow the coding conventions in `/working_files/conventions.md` and the atomic architecture described in `/docs/architecture/component-inventory.md`.

* The page structure must adhere to the prescribed site map: Home, Solutions, Partners, How It Works, About Us and Support. Avoid adding patient pages under Partners.

* For imagery, use provided assets (`skiin-your-second-skin.png`, `IMG_6126.png` and SKIIN vs Wearables graphic) and ensure they are optimised for web. Do not reuse placeholder images once final assets are available.

* When building new components, leverage the shadcn/ui library for consistent design (e.g., buttons, cards, tabs) and follow Tailwind CSS best practices. Use React hooks and TypeScript interfaces for props and state management.

