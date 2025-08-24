# Project Index - SKIIN Switzerland Marketing Website
VERSION: 2.0
LAST-UPDATED: 2025-11-20
STATUS: ACTIVE
PURPOSE: Repository structure and code organization reference

## Complete Repository Tree Structure

```
.
├── .claude                     # Claude Code configuration
│   ├── agents/                 # 21 subagent definitions
│   ├── hooks/                  # Automation hooks
│   ├── tdd-guard/             # Test-driven development guard
│   └── settings.json          # Claude settings
├── .github                     # GitHub configuration
│   └── workflows/             # CI/CD pipelines
├── context/                    # Working context files (CRITICAL)
│   ├── CLAUDE_PROCESS.md      # Process lifecycle definition
│   ├── conventions.md         # Coding & design standards
│   ├── doc-ref.md            # Documentation index
│   ├── event-stream.md       # Event log (UPDATE ALWAYS)
│   ├── planning.md           # Current plans
│   ├── project-index.md      # This file (UPDATE ON STRUCTURE CHANGES)
│   ├── requirements.md       # Active requirements
│   ├── researcher-handoff-brief.md  # Research context
│   └── todo.md              # Task tracking
├── docs/                       # Reference documentation
│   ├── api/                   # API documentation
│   ├── architecture/          # System architecture
│   ├── content/              # Master copy documents (4 languages)
│   ├── deployment/           # Deployment guides
│   ├── design/               # Design tokens and system
│   ├── design-system/        # Component specifications
│   ├── reports/              # Analysis and validation reports
│   ├── documentation-guidelines.md  # Doc standards
│   ├── file-organization-framework.md  # File location rules
│   ├── test-migration-plan.md      # Testing migration
│   └── testing-framework.md        # Testing standards
├── public/
│   └── assets/
│       └── images/
│           ├── marketing/    # Marketing images
│           ├── products/     # Product images
│           └── optimized/    # Optimized images
├── scripts/                    # Build and utility scripts
│   └── optimize-images.js
├── src/                        # Source code
│   ├── components/            # React components
│   │   ├── about/            # About page components
│   │   ├── analytics/        # Analytics components
│   │   ├── auth/             # Authentication (OTP)
│   │   ├── forms/            # Form components
│   │   ├── home/             # Homepage components (40+ files)
│   │   ├── landing/          # Landing page components (25+ files)
│   │   ├── layout/           # Navbar, Footer
│   │   ├── partners/         # Partner components
│   │   ├── physicians/       # Physician components
│   │   ├── protected/        # Protected clinical components
│   │   ├── test/             # Test components
│   │   ├── tritest/          # TriTest components
│   │   ├── ui/               # 80+ UI components (shadcn/ui + custom)
│   │   └── RouteRedirects.tsx
│   ├── contexts/              # React contexts
│   │   ├── CopyVariantContext.tsx
│   │   ├── LanguageContext.tsx
│   │   └── ThemeContext.tsx
│   ├── docs/                  # Internal documentation
│   ├── hooks/                 # Custom React hooks
│   ├── lib/                   # Libraries and utilities
│   │   ├── analytics.ts
│   │   ├── consentManager.ts
│   │   ├── supabase.ts
│   │   └── utils.ts
│   ├── pages/                 # Page components
│   │   ├── about/            # About pages
│   │   ├── how-it-works/     # How it works pages
│   │   ├── legal/            # Legal pages
│   │   ├── partners/         # Partner pages
│   │   ├── solutions/        # Solution pages
│   │   └── [Page files]      # Various page components
│   ├── routes/                # Route configuration
│   │   └── index.tsx
│   ├── translations/          # i18n translations
│   │   ├── about/            # About translations
│   │   ├── demo/             # Demo translations
│   │   ├── eligibility/      # Eligibility translations
│   │   ├── home/             # Home translations
│   │   ├── home2/            # Alternative home
│   │   ├── howItWorks/       # How it works translations
│   │   ├── it/               # Italian translations (complete)
│   │   ├── legal/            # Legal translations
│   │   ├── notFound/         # 404 translations
│   │   ├── partners/         # Partner translations
│   │   ├── physicians/       # Physician translations
│   │   ├── solutions/        # Solution translations
│   │   └── ui/               # UI translations
│   ├── types/                 # TypeScript definitions
│   ├── utils/                 # Utility functions
│   ├── App.tsx               # Main app component
│   ├── App.css               # App styles
│   ├── index.css             # Global styles
│   ├── main.tsx              # Entry point
│   └── vite-env.d.ts        # Vite types
├── supabase/                   # Database configuration
│   ├── edge-functions/        # Edge functions
│   ├── functions/             # Database functions
│   ├── migrations/            # Schema migrations (8 files)
│   ├── policies/              # RLS policies
│   ├── schemas/               # Schema definitions
│   ├── scripts/               # Database scripts
│   └── storage/               # Storage configuration
├── tests/                      # Test files
│   ├── config/                # Test configuration
│   ├── integration/           # Integration tests
│   ├── unit/                  # Unit tests
│   └── README.md
├── Configuration Files
│   ├── .lintstagedrc.json    # Lint-staged config
│   ├── .mcp.json              # MCP configuration
│   ├── .tdd-guard.yaml       # TDD guard config
│   ├── CLAUDE.md              # Claude instructions
│   ├── PROJECT_INDEX.json     # Auto-generated index
│   ├── README.md              # Project readme
│   ├── components.json        # Component config
│   ├── eslint.config.js       # ESLint config
│   ├── index.html             # HTML entry
│   ├── package.json           # Dependencies
│   ├── postcss.config.js      # PostCSS config
│   ├── tailwind.config.ts     # Tailwind config
│   ├── tsconfig.*.json        # TypeScript configs
│   ├── vite.config.ts         # Vite config
│   └── vitest.config.ts       # Vitest config
```

## Component Dependencies and Architecture

### Entry Points
- **main.tsx**: Application entry point, initializes React app
  - Imports: App.tsx, index.css
  - Dependencies: React, ReactDOM, Router

- **App.tsx**: Main application component
  - Imports: Router configuration, theme providers, analytics
  - Dependencies: React Router, Theme Context, Language Context

### Core Components

#### Layout Components (`src/components/layout/`)
- **Navbar.tsx**: Main navigation component
  - Dependencies: LanguageContext, ThemeContext, ui/button, ui/navigation-menu
  - Features: Multi-language selector, theme switcher, responsive menu
  
- **Footer.tsx**: Site footer component
  - Dependencies: ui/link components, translation files
  - Features: Multi-column layout, social links, legal links

#### Page Components (`src/pages/`)
- **LandingPageV2025.tsx**: Current landing page (DEFAULT)
  - Dependencies: All landing/* components, analytics, forms
  - Key imports: HeroV2025, SwissHealthInsurance, MinimalFeatures
  
- **Home2.tsx**: Alternative homepage with medical theme
  - Dependencies: home/* components, protected components
  - Key imports: HeroSection, StatisticsShowcase, TabNavigation

- **EligibilityFlow.tsx**: Multi-step eligibility questionnaire
  - Dependencies: forms/*, auth/MinimalOTPVerification
  - Key imports: IntegratedEligibilityFlow, MinimalInsuranceSelector

#### Form Components (`src/components/forms/`)
- **IntegratedEligibilityFlow.tsx**: Main eligibility form orchestrator
  - Dependencies: All form step components, Supabase client
  - Features: Multi-step state machine, validation, persistence
  
- **MinimalInsuranceSelector.tsx**: Swiss insurance provider selection
  - Dependencies: ui/minimal-select, insurance data
  - Features: 9 Swiss providers, 4 insurance models

- **MinimalPaymentForm.tsx**: Payment processing component
  - Dependencies: Stripe integration, ui/minimal-input
  - Features: PCI compliance, CHF currency support

#### UI Component Library (`src/components/ui/`)
Base components following atomic design:
- **Primitives**: button, input, select, card, badge
- **Composites**: accordion, dialog, carousel, tabs
- **Specialized**: minimal-* components (simplified variants)
- **Custom**: swiss-quality, medical-card, trust-badge

### Service Layer (`src/services/`)
- **api.service.ts**: Core API communication layer
  - Dependencies: TanStack Query, axios
  - Features: Request/response interceptors, error handling, retry logic
  - Used by: All components making API calls
  - Key exports: apiClient, useQuery hooks, mutation hooks

- **auth.service.ts**: Authentication and authorization logic
  - Dependencies: Supabase Auth, JWT handling, bcrypt
  - Features: OTP verification, session management, role-based access
  - Used by: Protected routes, form components, navbar
  - Key exports: signIn, signOut, verifyOTP, getSession

- **analytics.service.ts**: Analytics and conversion tracking
  - Dependencies: GA4, HubSpot, custom events
  - Features: Conversion tracking, user journey, funnel analysis
  - Used by: All page components, CTAs, forms
  - Key exports: trackEvent, trackPageView, trackConversion

- **validation.service.ts**: Form and data validation
  - Dependencies: Zod schemas, custom validators
  - Features: Swiss-specific validation (phone, postal codes)
  - Used by: All form components
  - Key exports: eligibilitySchema, paymentSchema, insuranceSchema

### Context Providers (`src/contexts/`)
- **ThemeContext.tsx**: Theme management
  - Provides: Theme switching, CSS variable management
  - Consumers: All components needing theme awareness

- **LanguageContext.tsx**: i18n management
  - Provides: Language switching, translation hooks
  - Consumers: All components with text content

- **CopyVariantContext.tsx**: Copy variant A/B testing
  - Provides: Copy variant selection, persistence
  - Consumers: Hero sections, CTAs

### Translation System (`src/translations/`)
Structure:
```
translations/
├── [feature]/
│   ├── en.ts   # English translations
│   ├── de.ts   # German translations
│   ├── fr.ts   # French translations
│   └── it.ts   # Italian translations
```

Dependencies:
- All page components import from their feature folder
- Fallback chain: requested → English → key string

### Type Definitions (`src/types/`)
- **analytics.d.ts**: GA4 and HubSpot type definitions
- Component prop types defined inline with interfaces
- Shared types for forms, API responses, and domain models

### Utility Functions (`src/utils/`)
- **performance.ts**: Performance monitoring and optimization
  - Features: LCP, CLS, FID measurement, bundle analysis
  - Dependencies: Web Vitals API
  - Used by: App.tsx, analytics service
  - Key exports: measurePerformance, reportWebVitals
  
- **routeTranslations.ts**: Multi-language route management
  - Features: URL mapping, locale detection, path generation
  - Dependencies: React Router, i18n config
  - Used by: Router, LanguageContext, navigation components
  - Key exports: getLocalizedPath, parseLocalizedPath

- **formatters.ts**: Data formatting utilities
  - Features: Date/time, currency (CHF), phone numbers
  - Dependencies: Intl API, Swiss locale data
  - Used by: All display components
  - Key exports: formatCHF, formatSwissPhone, formatDate

- **validators.ts**: Runtime validation helpers
  - Features: Email, phone, Swiss postal codes
  - Dependencies: Regex patterns, Zod
  - Used by: Form components, API endpoints
  - Key exports: isValidEmail, isValidSwissPhone, isValidPostalCode

## Build Configuration Files

### Root Configuration
- **package.json**: Dependencies and scripts
  - Key deps: React 18, TypeScript 5, Vite, TanStack Query
  - Scripts: dev, build, test, lint, typecheck

- **vite.config.ts**: Build configuration
  - Features: TypeScript paths, env variables, optimization

- **tsconfig.json**: TypeScript configuration
  - Features: Strict mode, path aliases, React JSX

- **tailwind.config.js**: Styling configuration
  - Features: Custom design tokens, responsive breakpoints

## Database & Backend (`supabase/`)
```
supabase/
├── migrations/            # Database schema migrations
│   ├── 001_initial.sql   # Base tables
│   ├── 007_core_user_tables.sql  # User profiles, GDPR
│   └── 008_swiss_insurance_tables.sql  # Swiss healthcare
├── functions/             # Edge functions (TypeScript)
│   ├── send-otp/         # OTP email/SMS service
│   ├── verify-insurance/ # Swiss insurance validation
│   └── generate-pdf/     # GP referral packets
├── policies/             # Row Level Security (RLS)
│   ├── user_profiles.sql # User data isolation
│   └── payments.sql      # Payment security
├── seed.sql              # Test data (9 insurers, 26 cantons)
└── config.toml           # Supabase configuration
```

**Key Database Tables**:
- `user_profiles`: User accounts with Swiss-specific fields
- `eligibility_questionnaires`: Multi-step form data
- `insurance_providers`: 9 Swiss insurance companies
- `user_insurance`: Insurance model selections
- `payments`: Stripe integration for self-pay
- `gp_referrals`: GP packet generation tracking

## Testing Structure (`tests/`)
```
tests/
├── unit/                  # Component & utility tests
│   ├── components/       # React component tests
│   ├── services/        # Service layer tests
│   ├── utils/           # Utility function tests
│   └── hooks/           # Custom hook tests
├── integration/          # User flow tests
│   ├── eligibility/     # Form flow tests
│   ├── payment/         # Checkout tests
│   └── navigation/      # Routing tests
├── config/              # Test configuration
│   ├── setup.ts        # Test environment setup
│   └── mocks/          # API mocks
└── README.md           # Testing guidelines
```

**Test Coverage Requirements**:
- Services: 80% minimum
- Utils: 70% minimum
- Components: 60% minimum
- Critical paths: 100% E2E coverage

## Documentation (`docs/`)
```
docs/
├── api/           # API documentation
├── architecture/  # System architecture
├── design/        # Design system docs
└── deployment/    # Deployment guides
```

## Key Architectural Patterns

1. **Component Organization**: Atomic design with feature grouping
   - Atoms: ui/* base components (buttons, inputs)
   - Molecules: Composed components (cards, forms)
   - Organisms: Feature components (hero, navigation)
   - Templates: Page layouts
   - Pages: Route components

2. **State Management**: Hybrid approach
   - Context API: Theme, language, copy variants (client state)
   - TanStack Query: API data, caching, synchronization (server state)
   - Local state: Component-specific UI state
   - Session storage: Form progress, user preferences

3. **Routing**: File-based with dynamic language prefixes
   - Pattern: /:lang?/:section/:page
   - Languages: en, de, fr, it
   - Fallback: English when language not specified
   - Protected routes: Eligibility flow, admin panels

4. **Styling**: Tailwind CSS with design tokens
   - Design system: S&W Design (default)
   - CSS variables: Color tokens, spacing, typography
   - Utility-first: Tailwind classes
   - Component styles: CSS modules for complex components

5. **Forms**: Multi-layer validation
   - Client: Zod schemas with React Hook Form
   - Server: API validation middleware
   - Swiss-specific: Insurance, phone, postal validation
   - Error handling: Toast notifications, inline errors

6. **API Communication**: Service layer pattern
   - TanStack Query: Data fetching, caching
   - Axios: HTTP client with interceptors
   - Error boundaries: Graceful error handling
   - Optimistic updates: Immediate UI feedback

7. **Testing**: Comprehensive test strategy
   - Unit: Vitest for components and utilities
   - Integration: Testing Library for user flows
   - E2E: MCP Puppeteer tools (agent-driven)
   - Visual: Screenshot comparison

8. **Build**: Optimized development and production
   - Vite: Fast HMR, optimized builds
   - TypeScript: Strict mode, path aliases
   - Bundle splitting: Route-based code splitting
   - Asset optimization: Image compression, WebP

9. **Deployment**: JAMstack architecture
   - Static generation: Pre-rendered pages
   - CDN: Global distribution via Netlify/Vercel
   - Edge functions: Serverless API endpoints
   - Environment variables: Secure configuration

## Import Dependencies Graph

### Critical Paths
```
main.tsx (Entry point - bootstraps React app)
  └── App.tsx (Root component - provides global context)
      ├── Router (routes/index.tsx - defines all 98+ routes)
      │   ├── LandingPageV2025 (default homepage)
      │   ├── Home2 (alternative medical theme)
      │   ├── EligibilityFlow (multi-step questionnaire)
      │   ├── Solutions/* (product pages)
      │   ├── Partners/* (partnership pages)
      │   └── Legal/* (compliance pages)
      ├── ThemeProvider (contexts/ThemeContext - S&W Design default)
      │   └── CSS Variables (design tokens)
      ├── LanguageProvider (contexts/LanguageContext - 4 languages)
      │   └── Translation Files (en, de, fr, it)
      └── AnalyticsProvider (components/analytics)
          ├── GA4 Integration
          ├── HubSpot Tracking
          └── Custom Events
```

### Component Dependency Layers
```
┌─────────────────────────────────────┐
│         Pages (routes/*.tsx)        │ ← User-facing routes
├─────────────────────────────────────┤
│     Features (landing/*, home/*)    │ ← Business logic
├─────────────────────────────────────┤
│      Forms (forms/*, auth/*)        │ ← User input handling
├─────────────────────────────────────┤
│        UI (ui/*, minimal-*)         │ ← Presentation layer
├─────────────────────────────────────┤
│     Services (api, auth, analytics) │ ← External integration
├─────────────────────────────────────┤
│      Utils (formatters, validators) │ ← Helper functions
└─────────────────────────────────────┘
```

### Shared Dependencies
- **All components**: React 18, TypeScript 5, react-router-dom
- **UI components**: Tailwind CSS, clsx/cn utility, design tokens
- **Form components**: Zod, React Hook Form, validation service
- **Page components**: Layout wrapper, analytics, contexts
- **API components**: TanStack Query, axios, error boundaries
- **Translation components**: i18n files, LanguageContext

## Critical Files and Their Roles

### Configuration Files (Root)
- **package.json**: Dependency management, scripts, project metadata
  - Key scripts: dev, build, test, lint, typecheck
  - Major deps: React 18, Vite 5, TypeScript 5, TanStack Query 5
  
- **vite.config.ts**: Build tool configuration
  - Path aliases: @/* → src/*
  - Build optimization: code splitting, tree shaking
  - Dev server: port 8080/8081, HMR enabled

- **tailwind.config.ts**: Design system configuration
  - Custom colors: S&W Design palette
  - Typography: IBM Plex Sans
  - Responsive breakpoints: sm(640), md(768), lg(1024), xl(1280)

- **tsconfig.json**: TypeScript compiler options
  - Strict mode: enabled
  - Target: ES2022
  - Module resolution: bundler

### Critical Source Files
- **src/main.tsx**: Application entry point
  - Mounts React app to #root
  - Initializes providers and routing
  
- **src/App.tsx**: Root component orchestrator
  - Wraps app in context providers
  - Sets up routing and error boundaries
  - Initializes analytics and monitoring

- **src/routes/index.tsx**: Route definitions
  - 98+ routes across 4 languages
  - Dynamic language prefixes
  - Protected route handling

- **src/lib/supabase.ts**: Database client
  - Singleton Supabase instance
  - Auth configuration
  - RLS policy setup

### Critical Components
- **components/layout/Navbar.tsx**: Main navigation
  - Multi-language selector
  - Theme/copy variant switcher
  - Responsive mobile menu
  - CTA buttons

- **components/home/EligibilityChecker.tsx**: Core business logic
  - Multi-step form orchestration
  - Swiss insurance integration
  - OTP verification flow
  - Payment processing

- **pages/LandingPageV2025.tsx**: Default homepage
  - Hero with copy variants
  - Feature sections
  - Swiss insurance showcase
  - Conversion-optimized CTAs

## Update Requirements

This file MUST be updated when:
1. New directories are added to src/
2. Major components are created or removed
3. Service layer changes significantly
4. New contexts or providers are added
5. Build configuration changes
6. New feature modules are introduced
7. Database schema changes
8. New edge functions added
9. Testing structure changes
10. Critical dependencies updated

Update frequency: After each significant structural change
Update method: Manual review and documentation
Validation: Compare with actual file structure using tree command

## Maintenance Checklist

### When Adding New Features
- [ ] Update component dependencies section
- [ ] Add new routes to routing section
- [ ] Document new service endpoints
- [ ] Update translation file references
- [ ] Add to architectural patterns if novel

### When Refactoring
- [ ] Update import dependency graph
- [ ] Revise component relationships
- [ ] Update file roles and responsibilities
- [ ] Check for orphaned dependencies

### Weekly Review
- [ ] Run tree command to verify structure
- [ ] Check for new unindexed files
- [ ] Update dependency versions
- [ ] Archive obsolete sections