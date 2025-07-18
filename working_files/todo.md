# working_files/todo.md

## Task Checklist - Phase-Based Implementation

### Phase A: Critical UX Restoration ⚡ CURRENT PHASE

#### A1: CTA Button Implementation
- [ ] Implement Hero section CTAs
  - [ ] "Book Assessment" → navigate to /about/contact
  - [ ] "Learn More" → navigate to /how-it-works/process
- [ ] Implement Technology section CTA
  - [ ] "Learn More About Technology" → navigate to /how-it-works/technology
- [ ] Implement Bottom section CTAs
  - [ ] Both buttons → navigate to /about/contact

#### A2: Footer Navigation Fixes
- [ ] Audit all Footer links and identify broken ones
- [ ] Create decision: remove broken links vs create placeholder pages
- [ ] Update Footer component with valid links only
- [ ] Add real social media URLs or remove social links

#### A3: Critical Missing Routes
- [ ] Create /request-demo page with contact form
- [ ] Create /privacy page (legal compliance)
- [ ] Create /terms page (legal compliance)  
- [ ] Create /cookies page (legal compliance)

### Phase B: Theme System Compliance 🎨 (Can run parallel)

#### B1: TriTestReport Component Fix
- [ ] Identify all 50+ hardcoded colors
- [ ] Create color mapping to theme variables
- [ ] Replace all hardcoded colors
- [ ] Test component across all 4 themes

#### B2: Other Component Fixes
- [ ] Fix ContactForm hardcoded colors
- [ ] Fix MvcpSection hardcoded colors
- [ ] Fix CtaSection SVG color
- [ ] Audit and fix any other components

#### B3: Theme Verification
- [ ] Create script to detect hardcoded colors
- [ ] Document theme variable mapping guide
- [ ] Add theme compliance to PR checklist

### Phase C: Multi-Language Implementation 🌍

#### C1: Translation Infrastructure
- [ ] Update useTranslation hook to support 'about' section
- [ ] Update useTranslation hook to support 'howItWorks' section
- [ ] Create /translations/about/de.ts
- [ ] Create /translations/about/fr.ts
- [ ] Create /translations/howItWorks/de.ts
- [ ] Create /translations/howItWorks/fr.ts

#### C2: Page Conversions (22 pages)
- [ ] Convert About section pages (7)
  - [ ] Company
  - [ ] MedicalBoard
  - [ ] Compliance
  - [ ] Contact
  - [ ] Overview
  - [ ] Testimonials
  - [ ] Blog
- [ ] Convert How It Works pages (6)
  - [ ] Overview
  - [ ] Process
  - [ ] Technology
  - [ ] Reimbursement
  - [ ] Evidence
  - [ ] FAQ
- [ ] Convert Partners pages (5)
  - [ ] Overview
  - [ ] GeneralPractitioners
  - [ ] Cardiologists
  - [ ] Telemedicine
  - [ ] Corporate
- [ ] Convert Solutions pages (2)
  - [ ] 14DayHolter
  - [ ] Tritest
- [ ] Convert utility pages (2)
  - [ ] Index
  - [ ] NotFound

### Phase D: Protected Components 🔒

- [ ] Implement HeartBalanceRing component
- [ ] Implement ContributingFactorCards component
- [ ] Implement TabNavigation component
- [ ] Implement TodayTab component

### Phase E: Interactive Calculators 🧮

#### E1: Eligibility Checker
- [ ] Design form flow and steps
- [ ] Implement form validation
- [ ] Create insurance mapping logic
- [ ] Design and build results page

#### E2: Coverage Calculator  
- [ ] Design calculator interface
- [ ] Implement calculation logic
- [ ] Create results visualization
- [ ] Add data export functionality

### Phase F: Content & Polish ✨

- [ ] Complete Partner pages with modern design
- [ ] Finish How It Works section content
- [ ] Complete About section pages
- [ ] Performance optimization (images, bundles)
- [ ] Analytics integration (GA4, Google Ads, HubSpot)
- [ ] Accessibility audit and fixes
- [ ] Cross-browser testing

## Progress Tracking

### Phase Completion
- Phase A: 0% ⚡ ACTIVE
- Phase B: 0% ⚡ ACTIVE (parallel)
- Phase C: 0% 
- Phase D: 0%
- Phase E: 0%
- Phase F: 0%

### Overall Project: 35% Complete

### Success Metrics
- [ ] All navigation functional
- [ ] All pages switch languages correctly
- [ ] All components theme-compliant
- [ ] Protected components implemented
- [ ] Calculators functional
- [ ] Analytics tracking active

## Previously Completed ✅

### Foundation Phase
- [x] Project setup and architecture
- [x] 80+ component library built
- [x] 69 routes configured
- [x] Theme system implemented
- [x] Language context created
- [x] Progressive design system
- [x] Modern homepage (Home2)
- [x] High-priority pages modernized

### Documentation
- [x] Complete component inventory
- [x] Architecture documentation
- [x] CLAUDE.md project context
- [x] Working files ecosystem
- [x] Design system specs

### Process Enhancements
- [x] CLAUDE_PROCESS.md v2.0
- [x] conventions.md with examples
- [x] Asset organization
- [x] Visual asset inventory