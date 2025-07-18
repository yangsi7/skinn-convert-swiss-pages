# working_files/planning.md

## Project: Multilingual Medical Marketing Site

### Overall Progress: 35% Complete

## 🚨 Critical Issues Identified (2025-01-17)

### Multi-Language System Audit Results
- **Core system works** but only 2/25 pages use it
- **22 pages have hardcoded English text**
- **Missing translation files** for about/howItWorks sections
- **useTranslation hook** doesn't support all sections

### Multi-Theme System Audit Results  
- **Theme system properly implemented** with 4 themes
- **Only ~6% of components are theme-aware**
- **TriTestReport worst offender** with 50+ hardcoded colors
- **Theme switcher works** but components don't use it

### Navigation Audit Results
- **12 broken Footer links** (routes not defined)
- **6 placeholder social media links**
- **4 non-functional CTA buttons** on homepage
- **Missing critical pages**: demo request, legal pages, patient/physician portals

## Technical Architecture

### Tech Stack
- **Frontend**: React 18 + TypeScript 5 + Vite
- **Styling**: Tailwind CSS 3 + shadcn/ui components
- **Routing**: React Router DOM 6 (multilingual support)
- **State Management**: TanStack Query 5 + Context API
- **Forms**: React Hook Form 7 + Zod validation
- **Analytics**: Google Analytics + Google Ads + HubSpot
- **Deployment**: Vercel (preview) → Netlify (production)

### Design System (Modern Progressive)
- **Primary Colors**: 
  - Deep Navy (#1E3A5F)
  - Medical Teal (#00796B)
  - Swiss Red (#FF0000) - Heritage accents
- **Typography**: IBM Plex Sans (400/600/700) - Primary font
- **Spacing**: 
  - Sections: py-20 (mobile) / py-30 (desktop)
  - Cards: p-6 to p-8
  - Gaps: gap-8 to gap-12
- **Animations**:
  - Base duration: 1000ms with ease-out
  - Stagger delay: 150ms between elements
  - Scroll-triggered with intersection observer
- **Breakpoints**: sm:640px, md:768px, lg:1024px, xl:1280px, 2xl:1536px

## Implementation Phases (Revised 2025-01-17)

### Phase A: Critical UX Restoration
**Goal**: Restore basic navigation and user experience functionality
**Status**: 0% Complete
**Dependencies**: None

#### Tasks:
1. Implement CTA button handlers on Home2
   - Hero CTAs → proper navigation routes
   - Technology section → link to content
   - Bottom CTAs → contact form modal/page
2. Fix Footer navigation issues
   - Remove broken links or create placeholder routes
   - Update social media links or remove them
   - Ensure all footer links have valid destinations
3. Create missing critical routes
   - /request-demo (form page)
   - /privacy, /terms, /cookies (legal pages)
   - Placeholder pages for non-critical routes

### Phase B: Theme System Compliance
**Goal**: Ensure all components use the theme system
**Status**: 6% Complete
**Dependencies**: None (can run parallel to Phase A)

#### Tasks:
1. Fix TriTestReport component (50+ hardcoded colors)
   - Map all hardcoded colors to theme variables
   - Test across all 4 themes
2. Update remaining non-compliant components
   - ContactForm, MvcpSection, CtaSection
   - Any other components with hardcoded colors
3. Create theme compliance verification script

### Phase C: Multi-Language Implementation
**Goal**: Enable language switching across entire site
**Status**: 10% Complete
**Dependencies**: Phase A (for navigation consistency)

#### Tasks:
1. Create missing translation infrastructure
   - Add 'about' and 'howItWorks' to useTranslation hook
   - Create de.ts and fr.ts files for these sections
2. Convert all pages to use translations (22 pages)
   - Extract all hardcoded text to translation files
   - Implement useTranslation hook in each page
   - Verify language switching works

### Phase D: Protected Components
**Goal**: Implement the 4 protected medical components
**Status**: 0% Complete
**Dependencies**: Phase B (theme compliance)

#### Tasks:
1. HeartBalanceRing component (clinical accuracy)
2. ContributingFactorCards (regulatory approved content)
3. TabNavigation (marketing ops requirement)
4. TodayTab (licensed algorithm)

### Phase E: Interactive Calculators
**Goal**: Build eligibility checker and coverage calculator
**Status**: 0% Complete
**Dependencies**: Phase D (may use protected components)

#### Tasks:
1. Eligibility Checker
   - Complete form flow and validation
   - Insurance mapping logic
   - Results page design
2. Coverage Calculator
   - Design calculation interface
   - Implement calculation logic
   - Results visualization

### Phase F: Content & Polish
**Goal**: Complete remaining pages and optimize
**Status**: 0% Complete
**Dependencies**: Phases A-C

#### Tasks:
1. Complete all Partner pages with modern design
2. Finish How It Works section
3. Complete About section pages
4. Performance optimization
5. Analytics integration

## Phase Status

### Phase 1: Foundation (English MVP) - 85% Complete
- [x] Project setup and configuration
- [x] Base routing structure
- [x] Multi-language context setup
- [x] Theme system implementation
- [x] Progressive design system created
- [x] Homepage implementation (Home2 as default)
- [x] Core progressive components library
- [x] Navigation system fixed and working
- [x] High-priority pages modernized (Physicians, 14DayHolter, Company)
- [x] Component showcase created
- [ ] Analytics integration (structure ready, needs IDs)
- [ ] Contact form with validation

### Phase 2: Localization - 10% Complete
- [x] Translation file structure
- [ ] German content translation
- [ ] French content translation
- [ ] Language switcher UI
- [ ] Route localization testing

### Phase 3: Interactive Tools - 0% Complete
- [ ] Eligibility checker design
- [ ] Coverage calculator design
- [ ] API integration
- [ ] Form validations
- [ ] Testing suite

### Phase 4: Launch Preparation - 0% Complete
- [ ] Swiss medical law compliance
- [ ] Performance optimization
- [ ] Security hardening
- [ ] Production deployment

## Key Components Status

### Protected Components (Read-Only)
- HeartBalanceRing - Not implemented
- ContributingFactorCards - Not implemented
- TabNavigation - Not implemented
- TodayTab - Not implemented

### Core Components
- Navbar - Basic implementation exists
- Footer - Basic implementation exists
- Hero Section - Needs implementation
- Contact Form - Basic implementation exists

## Recent Achievements

### Design System Rollout (Day 2 Complete)
1. **Progressive Components Created**:
   - ProgressiveCard - Reusable card with hover effects
   - ImageSection - Optimized image display component
   - TeamMember - Three variants for team displays
   - FeatureGrid - Responsive grid layouts
   - StatCard - Animated statistics display
   - ContentSection - Flexible content component

2. **Pages Modernized**:
   - Physicians page with MVCP integration
   - 14-Day Holter with product showcases
   - Company page with Swiss heritage section

3. **Process Enhancements**:
   - CLAUDE_PROCESS.md v2.0 with 5 new modules
   - conventions.md v2.0 with concrete examples
   - Comprehensive documentation updates

## Current Architecture

### Page Structure
```
/                           # Homepage (multilingual)
├── /solutions
│   ├── /14-day-holter     # Core product
│   └── /tritest           # Coming soon (3X screening)
├── /partners
│   ├── /gp                # General practitioners
│   ├── /cardiologists     # Specialists
│   ├── /telemedicine      # Remote providers
│   └── /corporate         # B2B partners
├── /how-it-works
│   ├── /process           # 5-step journey
│   ├── /reimbursement     # Insurance pathways
│   ├── /technology        # Product details
│   ├── /evidence          # Clinical validation
│   └── /faq               # Common questions
└── /about
    ├── /company           # About SKIIN
    ├── /medical-board     # Expert advisors
    ├── /blog              # Health articles
    ├── /testimonials      # Patient stories
    ├── /compliance        # Regulatory info
    └── /contact           # Contact form
```

### Component Organization
```
src/components/
├── ui/                    # shadcn/ui primitives (50+ components)
├── layout/               # Structural components
│   ├── Navbar.tsx        # Multi-language navigation
│   └── Footer.tsx        # Site footer
├── home/                 # Homepage sections
│   └── (to be implemented)
├── analytics/            # Tracking components
│   └── AnalyticsProvider.tsx
└── physicians/           # Professional components
    └── (to be implemented)
```

### Translation Structure
```
src/translations/
├── en/                   # English (default)
├── de/                   # German (primary)
└── fr/                   # French
    └── [feature].json    # Feature-based translations
```

## Implementation Gaps

### High Priority
1. **Protected Components**: None implemented yet
   - HeartBalanceRing (clinical accuracy critical)
   - ContributingFactorCards (regulatory approved)
   - TabNavigation (marketing ops dependency)
   - TodayTab (licensed algorithm)

2. **Homepage Sections**: All need implementation
   - Hero with emotional hook
   - Problem/Solution grid
   - How-it-works preview
   - Insurance clarity
   - Testimonials
   - CTAs

3. **Analytics Integration**: Structure exists but not connected
   - Google Analytics setup
   - Conversion tracking
   - HubSpot forms
   - Cookie consent

### Medium Priority
1. **Content Management**: No CMS or content loading
2. **Form Handling**: Basic structure, needs validation
3. **SEO Optimization**: Meta tags, structured data
4. **Performance**: Image optimization, lazy loading

### Low Priority
1. **Interactive Calculators**: Phase 3
2. **Blog System**: Content structure
3. **Advanced Analytics**: User journey tracking

## Next Steps
1. Document existing component inventory
2. Map spec requirements to implementation
3. Create architecture diagrams
4. Update CLAUDE.md with full context
5. Begin systematic implementation per phases