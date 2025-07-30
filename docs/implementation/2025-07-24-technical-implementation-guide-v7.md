

# **Technical Implementation Guide for SKIIN Switzerland Website (v7.2)**

This guide summarises the architectural conventions, design system guidelines and best practices needed to implement the Version 7.2 copy specification on the SKIIN Switzerland marketing site. It draws from the project’s internal documentation (e.g., `conventions.md`, `component‑inventory.md`, `theme‑compliance‑audit.md`) and outlines practical steps for developers and designers.

## **1 Project Architecture & Conventions**

1. **Framework and Structure** – The website is built using **React** with **Next.js** (app router) and **TypeScript**. Pages live under `src/pages`, while reusable UI components live under `src/components`. The project follows an **atomic design** approach: atoms (basic elements), molecules (combined atoms), organisms (complex structures) and pages. Keep component files small and single‑purpose; extract reusable logic into hooks or utility functions.

2. **TypeScript & React Patterns** – All components are functional and typed. Use explicit prop interfaces and define default values where appropriate. Avoid `any` types; leverage generics and utility types. Side effects (e.g., data fetching) should live in hooks (`useEffect`, `useQuery`) rather than component bodies. Each page/component file should include a concise JSDoc comment describing its purpose.

3. **Translation & i18n** – Copy is stored as translation strings in `/src/locales/{lang}.ts`. Use the `useTranslations()` hook from `next-intl` or `react-intl` to access strings. When adding new copy, define descriptive keys (e.g., `home.hero.urgency.headline`) and include translations for German, French and Italian. Avoid hard‑coded text in components.

4. **Theme & Design System** – The project uses **Tailwind CSS** with a design token system defined in `tailwind.config.ts`. Avoid hard‑coding colours or spacing; instead, use CSS variables (`var(--primary)`, `var(--surface)`, etc.) or Tailwind classes (`text-primary`, `bg-secondary`). Four themes (light, dark and extended variants) are supported. When building new components, ensure they derive colours from the theme and remain legible in all themes. Refer to `theme‑compliance‑audit.md` for guidance on converting legacy components to theme‑aware design.

5. **shadcn/ui Component Library** – The project uses shadcn/ui (a Tailwind‑based component library) for common UI elements such as **Card**, **Button**, **Badge**, **Tabs**, **Tooltip**, **Carousel** and **Dialog**. Leverage these components to maintain consistency. For example, the new **ProductSection** can be built using `<Card>` elements with icons and headings, and the **TechCarousel** can wrap `<Carousel>` with images and captions.

6. **Responsive Design & Animations** – Tailwind’s responsive utilities (`sm:`, `md:`, `lg:`) should be used to adapt layouts across devices. The design system includes guidelines for spacing (`px-4`, `py-8`), typography (`text-sm`, `font-bold`) and layering (`shadow-md`). Avoid overusing animations; when needed, use Tailwind’s `transition` classes or `framer-motion` for simple fade/slide effects. Ensure that content remains accessible without animations.

7. **Accessibility** – All interactive components must be accessible. Use semantic HTML elements (`<button>` vs. `<div>`) and include `aria` attributes (`aria-label`, `aria-expanded`) as appropriate. Provide alt text for all images and icons. Ensure sufficient colour contrast between text and background (WCAG 2.1 AA minimum). Support keyboard navigation and focus states.

8. **Analytics & Tracking** – The site integrates an `AnalyticsProvider` and `ConversionButton` to track user interactions. When adding CTAs or forms, wrap them in the appropriate analytics components and pass descriptive event names (e.g., `"cta_start_free_assessment"`). Respect GDPR and Swiss DPA requirements: obtain consent via the cookie banner and anonymise data where possible.

## **2 Component Guidelines**

1. **HeroSection** – Supports A/B/C variants via props or translation keys. The component should accept `title`, `subtitle`, `emotionalSubtitle`, `badge` and `ctas` props and render them in a consistent layout. Ensure the emotional subheadline is visually subordinate to the headline. Implement variant switching via query parameter, feature flag or A/B testing tool. Use CSS Grid or Flexbox to maintain the split‑screen image/text layout.

2. **StatisticsShowcase / NumbersSection** – Use a responsive grid to display statistic cards. Each card contains a large number, a bold title and a short description. Accept `items` as props (array of objects with `value`, `title`, `description`) and map to `<Card>`. Provide optional footnote support for linking to the Evidence page.

3. **ProductSection** – Compose a grid of eight `ProductCard` components. Each card should include an icon (from Heroicons or a custom SVG), a bold heading and a short paragraph. Use a two‑column grid on desktop and a single column on mobile. Accept a `cards` array as props. For the sensor→app→cloud→AI→cardiologist illustration, build a `TechCarousel` component using shadcn/ui’s `Carousel` with slides containing images and captions.

4. **ProcessFlow** – Already exists; update step labels via translation keys. Ensure the component accepts an array of steps with `title` and `description`. When adding clinician workflow, consider a new subsection or a separate `ClinicianDataFlow` component.

5. **NumbersSection** – New component summarising detection accuracy, monitoring duration, insurance coverage and real‑time analysis. Use a 2 × 2 grid with large numbers. Provide a `tooltip` prop for each item to link to the evidence page or display additional information.

6. **ClinicallyProvenTechSection** – Use a grid or vertical list of four trust markers. Each marker should have an icon, heading and short description. Accept an array of markers as props. Link each marker to the Evidence page via `<Link>`.

7. **AISection** – Depending on design, either integrate the six pillars into the ProductSection or implement a separate `AISection` with six `InfoCard`s. If separate, space the cards evenly and use icons representing comfort, AI analysis, cardiology expertise, referrals, fast turnaround and insurance. Provide a `layout="grid"` prop to allow switching between grid and column.

8. **Care360Section** – Create a split layout with a text column and an image column. Use `<Image>` from `next/image` for optimal loading of the product collage. List the seven Care360 benefits as bullet points or `ListItem` components. Optionally include a mini‑carousel showing the band, smartphone app, cloud dashboard and cardiologist review. Provide props for `title`, `bullets` and `image`.

9. **RiskCardsSection** – Build a responsive grid of three cards describing Silent AF, Cardiac Arrhythmias and Heart Disease Prevention. Each card should include an icon, heading and short text. Accept an array of risks via props. Consider linking each card to the Evidence or Solutions pages.

10. **InsuranceSection & PricingSection** – Separate the coverage explanation from the pricing table. Use `<Card>` or `<Accordion>` to display coverage benefits (covered by basic insurance, reimbursement support, direct billing, four pathways). Implement a `PricingTable` component to display 3/5/10‑day packages. Highlight the 10‑day package using a badge (`className="bg-accent text-white"`). Place CTAs below the table. Add the note about asymptomatic users underneath.

11. **TestimonialsSection** – Use shadcn/ui’s `Carousel` or `Tabs` to display multiple testimonials. Accept an array of testimonial objects with `quote`, `author` and optional `role`/`photo`. Provide alt text for placeholder images.

12. **CtaSection** – Accept `title`, `subtitle`, `description`, `primaryCta`, `secondaryCta` and `tertiaryCta` props. Use a contrasting background and emphasise the primary CTA. Position the CEO quote under the CTAs with smaller font size.

13. **SolutionPage Template** – For each solution page (10‑Day Heart Screening, ABPM, Silent Triad), use a common page template that accepts props for `badge`, `title`, `subtitle`, `sections` and `cta`. Structure the page with a hero, a problem/solution narrative, a benefits list, pricing/coverage call‑outs and a CTA. Implement separate components (`AbpmBenefits`, `TriadFeatures`) as needed.

14. **Partners Pages** – Use a generic `PartnerPage` template with `title`, `valuePropositions`, `portalFeatures` and `ctas` props. Build separate pages for GPs, Cardiologists, Telemedicine Providers and Corporate. For the MVCP portal features, reuse a `PortalFeatures` component listing real‑time monitoring, analysis tools, patient management, reporting and security/compliance.

15. **Technology Page** – Create `TechnologySection` to house multiple subsections: narrative paragraphs, `TechCarousel`, and the “SKIIN vs Wearables” comparison graphic. Use responsive columns to align text and images. Ensure all images are optimised with `next/image` and have alt text.

16. **Evidence Page** – Develop an `EvidencePage` component that maps an array of study objects to a list or grid. Each study should display a title, summary, key findings and citation links (tether IDs). Include a contact form or button for clinicians to request a full evidence dossier.

17. **FaqSection** – Update existing `FaqSection` to accept categories and questions as props. Render them using an accordion component (`shadcn/ui` `Accordion`). Include CTAs at the bottom linking to the contact page.

18. **About Pages** – Use `CompanyPage`, `TeamPage`, `CompliancePage` and `ContactPage` templates. Ensure mission, vision, values and heritage are pulled from translation strings. Use `Card` and `Grid` for team bios. Add icons for certifications and data protection in the compliance page. Provide a contact form using `react-hook-form` and integrate with an API endpoint for submissions.  
      
19. **Support Page** – Implement a simple `SupportPage` that directs users to **support.skiin.ch**. This component should contain a headline (“Support”), a brief paragraph explaining that troubleshooting guides, FAQs and live chat are available on the external support site, and a button or link leading to the support portal. Include icons for phone/email/chat if desired. Ensure the page is lightweight, fully responsive and translated into the supported languages.

## **3 Development Workflow**

1. **Branching & Version Control** – Follow Gitflow or a similar workflow. Create a feature branch for each major area (e.g., `feature/home-page-update`). Write meaningful commit messages and open pull requests for review.

2. **Testing** – Unit test components using **React Testing Library**. Write tests for translation keys, prop rendering, conditional layouts and event handling (CTAs). Use **Jest** snapshots to catch unintended layout changes. Write end‑to‑end tests with **Cypress** or **Playwright** for form submissions and navigation flows.

3. **Performance & Optimisation** – Use `next/image` for all images; specify sizes and `priority` for hero images. Lazy‑load heavy sections using `dynamic` imports. Implement code‑splitting at the page level. Minimise CSS by using Tailwind’s purge feature.

4. **Accessibility & SEO Audits** – Run **Lighthouse** or **axe** audits to check accessibility and performance. Adjust meta tags (title, description, Open Graph) for each page. Add structured data (JSON‑LD) where appropriate (e.g., FAQ schema).

5. **Deployment** – Use the existing Netlify pipeline (as indicated in the repository) for preview and production deployments. Ensure environment variables (API keys) are set correctly in Netlify settings. Monitor build logs for errors.

