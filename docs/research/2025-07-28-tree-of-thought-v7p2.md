# Tree of Thought (TOT) - SKIIN Switzerland Website v7.2 Implementation

VERSION: 7.2
CREATED: 2025-07-25
PURPOSE: Map all entities (pages, sections, components, CTAs, features, audiences) and their relationships for v7.2 copy implementation

## Entity Categories

### 1. Pages (Primary Navigation)
- **Home** → Entry point, patient-focused conversion funnel
- **Solutions** → Service offerings (10-Day, ABPM, 3X Screening)
- **Partners** → Professional audiences (GPs, Cardiologists, Telemedicine, Corporate)
- **How It Works** → Process, Technology, Evidence, FAQ
- **About Us** → Company, Team, Compliance, Contact
- **Support** → External redirect to support.skiin.ch

### 2. Core Messaging Themes
- **Evidence-Based** → 70% silent AF, 20-30% stroke risk, 66% vs 9% detection
- **Silent Triad** → ECG + ABPM + Sleep analysis
- **10-Day Focus** → Updated from 14-day throughout
- **Longevity** → "Add years to your life, and life to your years"
- **Swiss Excellence** → MDR Class IIa, Swissmedic registered

### 3. Primary CTAs
- **Start Your Free Assessment** → Main patient conversion (eligibility form)
- **Check Insurance Coverage** → Secondary patient action (coverage check)
- **Questions? Read our FAQ →** → Tertiary support link
- **Book a Demo** → Professional conversion (GP/Cardio/Telemed)
- **Join Our GP Network** → GP-specific enrollment
- **Integrate SKIIN** → Technical integration for partners
- **Get a Corporate Quote** → Corporate wellness inquiry

### 4. Key Components

#### Home Page Components
- `HeroSection` → 3 A/B variants with emotional messaging
- `StatisticsShowcase` → 3-4 evidence cards
- `ProblemSolutionSection` → Silent Triad narrative
- `ProductSection` → 8 benefit cards (NEW)
- `ProcessFlow` → 5-step patient journey
- `NumbersSection` → 4 metrics showcase (NEW)
- `ClinicallyProvenTechSection` → 4 trust markers (NEW)
- `Care360Section` → Technology overview (NEW)
- `RiskCardsSection` → 3 risk categories
- `InsuranceSection` → Coverage explanation
- `PricingSection` → 3/5/10-day packages
- `TestimonialsSection` → Patient stories
- `CtaSection` → Final conversion with CEO quote

#### Solution Components
- `SolutionPage` → Template for service pages
- `AbpmBenefits` → ABPM-specific benefits
- `TriadFeatures` → 3X Screening features

#### Partner Components
- `PartnerGPSection` → GP value props + MVCP
- `PartnerCardiologistSection` → Cardio workflow
- `PartnerTelemedSection` → Remote care benefits
- `PartnerCorporateSection` → Wellness programs

#### Technology Components
- `TechCarousel` → Sensor→App→Cloud→AI→Cardio flow (NEW)
- `ComparisonGraphic` → SKIIN vs Wearables
- `ClinicianDataFlow` → Technical architecture

### 5. Target Audiences

#### Primary (Patients)
- **Symptomatic** → Experiencing dizziness, palpitations, fatigue
- **At-Risk** → Age 50+, family history, pre-op assessment
- **Prevention-Minded** → Asymptomatic but health-conscious
- **Family Members** → Concerned about loved ones

#### Professional
- **General Practitioners** → Need efficient cardiac screening
- **Cardiologists** → Want comprehensive data sets
- **Telemedicine Providers** → Require remote monitoring
- **Corporate/Insurers** → Seek preventive wellness

### 6. Data Flow Architecture
```
Patient Journey:
Assessment → Kit Delivery → Monitoring → Analysis → Results
     ↓            ↓             ↓           ↓          ↓
   Form      SKIIN Band    10 Days    AI+Cardio   Report

Technical Flow:
Device → Bluetooth → App → Cloud → MVCP → EMR
   ↓         ↓        ↓       ↓       ↓      ↓
Carbon   Encrypted  Mobile  ISO    Portal  HL7/FHIR
```

### 7. Key Relationships

#### Content Dependencies
- Hero CTAs → Eligibility Form
- Statistics → Evidence Page
- Problem/Solution → Silent Triad concept
- Process Steps → Technology explanation
- Insurance Info → Reimbursement page
- Testimonials → Extended stories on About

#### Component Reuse
- `ProcessFlow` → Used on Home and How It Works
- `TestimonialsSection` → Home (brief) and About (extended)
- `PricingTable` → Home and Reimbursement pages
- `PortalFeatures` → GP and Cardiologist pages

#### Navigation Flow
- Home → Solutions → Start Assessment
- Home → Partners → Book Demo
- Any Page → FAQ → Contact Us
- Solutions → Evidence → Request Dossier

### 8. Critical Updates from v2.0 to v7.2

#### Content Changes
- 14-day → 10-day throughout
- MVCP moved from standalone → GP page only
- Patient subsection removed from Partners
- Blog and Heart-Age Tool removed
- Silent Triad narrative integrated

#### New Components Required
1. `ProductSection` - 8 benefit cards
2. `NumbersSection` - 4 metrics
3. `ClinicallyProvenTechSection` - trust markers
4. `Care360Section` - technology summary
5. `TechCarousel` - data flow visualization
6. `ComparisonGraphic` - vs wearables
7. Support page - external redirect

#### Translation Requirements
- Update all language files (en/de/fr/it)
- New keys for v7.2 messaging
- Emotional subtitles in hero
- Silent Triad terminology
- MVCP portal features

### 9. Implementation Priorities

#### Phase 1: Core Messaging (Week 1)
1. Update HeroSection with 3 variants
2. Implement evidence statistics
3. Add Silent Triad narrative
4. Update all 10-day references

#### Phase 2: New Components (Week 2)
1. Build ProductSection (8 cards)
2. Create NumbersSection
3. Implement Care360Section
4. Add TechCarousel

#### Phase 3: Professional Pages (Week 3)
1. Move MVCP to GP page
2. Remove patient from Partners
3. Create Telemed/Corporate pages
4. Update professional CTAs

#### Phase 4: Polish & Launch (Week 4)
1. Complete translations
2. Accessibility audit
3. Performance optimization
4. Final testing

### 10. Success Metrics

#### Conversion Tracking
- Hero CTA clicks
- Assessment form completions
- Demo requests
- Insurance checks

#### Content Effectiveness
- Time on page
- Scroll depth
- FAQ engagement
- Evidence page views

#### Technical Performance
- LCP < 2.5s
- CLS < 0.1
- TTI < 2s
- Accessibility score > 90

### 11. Risk Mitigation

#### Content Risks
- Medical claims → Cite all sources
- Translation accuracy → Professional review
- CTA confusion → Clear hierarchy
- MVCP complexity → Simplify for GPs

#### Technical Risks
- Component compatibility → Use shadcn/ui
- Theme compliance → Test all 4 themes
- Mobile experience → Responsive first
- Performance → Lazy load images

### 12. Knowledge Graph Representation

```
Entities:
- page:home
- page:solutions
- page:partners
- component:HeroSection
- component:ProductSection
- cta:start-assessment
- feature:silent-triad
- audience:gp
- content:mvcp-portal

Relations:
- page:home → contains → component:HeroSection
- component:HeroSection → triggers → cta:start-assessment
- cta:start-assessment → leads_to → form:eligibility
- page:partners → targets → audience:gp
- audience:gp → uses → content:mvcp-portal
- feature:silent-triad → combines → [ecg, abpm, sleep]
```

## Summary

This TOT maps the complete v7.2 implementation landscape, showing how evidence-based messaging, the Silent Triad narrative, and professional workflows interconnect across the SKIIN Switzerland website. The primary focus is converting visitors through clear CTAs while providing comprehensive information for both patients and healthcare professionals.

Key success factors:
1. Clear separation of patient and professional content
2. Evidence-based claims with citations
3. Streamlined user journeys
4. Consistent 10-day messaging
5. MVCP integration for GPs only

The implementation should follow the phased approach, ensuring each component adheres to the design system and maintains theme compliance across all four color schemes.