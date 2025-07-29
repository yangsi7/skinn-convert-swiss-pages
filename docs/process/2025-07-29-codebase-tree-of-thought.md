# Codebase Tree of Thought - SKIIN Switzerland Project
VERSION: 1.0
CREATED: 2025-07-29
PURPOSE: Deep recursive mapping of codebase relationships for memory graph creation

## Executive Summary

This document provides a comprehensive tree-of-thought analysis of the SKIIN Switzerland codebase, mapping relationships between files, documentation, features, and conventions. This will serve as the foundation for creating persistent memory entries and knowledge graph entities.

## Tree of Thought Structure

```
SKIIN Switzerland Project
├── Core Architecture
│   ├── Technology Stack
│   │   ├── Frontend: Vite + React 18 + TypeScript 5
│   │   ├── Styling: Tailwind CSS + shadcn/ui
│   │   ├── Routing: React Router DOM 6
│   │   ├── State: TanStack Query + Context API
│   │   └── Forms: Zod + React Hook Form
│   │
│   ├── Project Structure
│   │   ├── /src/ - Source code
│   │   │   ├── /components/ - 95+ React components
│   │   │   ├── /pages/ - Route-based page components
│   │   │   ├── /translations/ - Multi-language support
│   │   │   ├── /hooks/ - Custom React hooks
│   │   │   ├── /contexts/ - React contexts
│   │   │   ├── /utils/ - Utility functions
│   │   │   └── /routes/ - Route definitions
│   │   │
│   │   ├── /docs/ - Documentation (153 files)
│   │   │   ├── /research/ - V7.2 research & analysis
│   │   │   ├── /implementation/ - Technical guides
│   │   │   ├── /design/ - Design system docs
│   │   │   ├── /content/ - Copy master documents
│   │   │   ├── /archive/ - Historical versions
│   │   │   └── /process/ - Process documentation
│   │   │
│   │   └── /working_files/ - Active development
│   │       ├── planning.md - Phase planning (v5.2)
│   │       ├── todo.md - Task tracking (v7.0)
│   │       ├── conventions.md - Coding standards (v5.2)
│   │       ├── event-stream.md - Event log (v5.0)
│   │       └── doc-ref.md - Documentation index (v3.2)
│   │
│   └── Configuration
│       ├── vite.config.ts - Build configuration
│       ├── tailwind.config.ts - Styling configuration
│       ├── package.json - Dependencies & scripts
│       └── .github/workflows/ - CI/CD pipelines
│
├── Features & Components
│   ├── Navigation System
│   │   ├── Multi-language routing (4 languages)
│   │   ├── 98 configured routes
│   │   ├── Protected components (TabNavigation)
│   │   └── Language switching (EN/DE/FR/IT)
│   │
│   ├── Landing Page (V7.2)
│   │   ├── Hero Section
│   │   │   ├── Dual-split layout
│   │   │   ├── Father-daughter.png image
│   │   │   ├── Copy variants system
│   │   │   └── Trust badges
│   │   │
│   │   ├── Content Sections
│   │   │   ├── StatisticsShowcase
│   │   │   ├── ProblemSolutionSection
│   │   │   ├── ProductSection (8 benefits)
│   │   │   ├── NumbersSection (4 metrics)
│   │   │   ├── TechCarousel (5 steps)
│   │   │   ├── MedicalAdvisors
│   │   │   ├── EnhancedTestimonials
│   │   │   ├── InsuranceCoverageSection
│   │   │   └── PricingSection
│   │   │
│   │   └── Visual Assets
│   │       ├── Product images (20+)
│   │       ├── Medical team photos
│   │       ├── MVCP screenshots
│   │       └── Report examples
│   │
│   ├── Solution Pages
│   │   ├── 10-Day Heart Screening
│   │   └── SKIIN 3X Tritest
│   │
│   ├── Partner Pages
│   │   ├── General Practitioners
│   │   ├── Cardiologists
│   │   ├── Telemedicine
│   │   └── Corporations
│   │
│   └── Support Pages
│       ├── How It Works
│       ├── FAQ
│       ├── About Us
│       └── Contact
│
├── Design System
│   ├── Themes (4 variants)
│   │   ├── Medical Blue
│   │   ├── Professional Teal
│   │   ├── Swiss Innovation
│   │   └── Soft Blue Teal
│   │
│   ├── Design Tokens
│   │   ├── Colors (CSS variables)
│   │   ├── Typography (IBM Plex Sans)
│   │   ├── Spacing (8pt grid)
│   │   └── Breakpoints (mobile-first)
│   │
│   └── Component Guidelines
│       ├── Atomic design principles
│       ├── 50 LOC limit per component
│       ├── Wrapper pattern for libraries
│       └── Accessibility requirements
│
├── Copy & Translations
│   ├── Master Documents
│   │   ├── English (authoritative)
│   │   ├── German (formal Sie)
│   │   ├── French (formal vous)
│   │   └── Italian (formal Lei)
│   │
│   ├── Translation System
│   │   ├── /src/translations/ modules
│   │   ├── useTranslation hook
│   │   ├── LanguageContext
│   │   └── Route translations
│   │
│   └── Copy Management
│       ├── 24-hour sync rule
│       ├── Version tracking
│       └── Medical claim compliance
│
├── Development Process
│   ├── Phase Structure
│   │   ├── Phase A: Documentation Cleanup ✅
│   │   ├── Phase B: V7.2 Copy Integration ✅
│   │   ├── Phase C: Working Files Organization ✅
│   │   ├── Phase D: Landing Page Implementation (85%)
│   │   ├── Phase E: Visual Testing & Languages
│   │   └── Phase 6: Landing Page Improvement (35%)
│   │
│   ├── Testing Strategy
│   │   ├── Unit tests (Vitest)
│   │   ├── E2E tests (Playwright)
│   │   ├── Accessibility (axe-core)
│   │   ├── Performance (Lighthouse)
│   │   └── Visual regression
│   │
│   └── CI/CD Pipeline
│       ├── GitHub Actions workflows
│       ├── Claude Code review
│       ├── Dependabot security
│       └── Quality gates
│
└── Conventions & Standards
    ├── Coding Standards
    │   ├── TypeScript strict mode
    │   ├── ESLint + Prettier
    │   ├── Component patterns
    │   └── Testing requirements
    │
    ├── Documentation Standards
    │   ├── ISO date prefixes
    │   ├── Version headers
    │   ├── Archival rules (7-day)
    │   └── Memory persistence
    │
    └── Security & Compliance
        ├── Medical device regulations
        ├── GDPR compliance
        ├── Protected components
        └── Secret management
```

## Key Relationships

### 1. Component Dependencies
- HeroSection → useTranslation → LanguageContext → translation files
- ProductSection → visual assets → public/assets/images/product/
- All pages → Navbar → language switching → route translations
- Forms → Zod schemas → React Hook Form → validation

### 2. Documentation Relationships
- CLAUDE.md → working_files/* → docs/*
- planning.md ← todo.md (bidirectional sync)
- event-stream.md → all changes (chronological log)
- doc-ref.md → all documentation (index)

### 3. Process Dependencies
- Code changes → tests → documentation → memory/graph updates
- Translation changes → 24h sync → all language files
- Design token changes → component updates → visual testing

### 4. Technical Dependencies
- Vite config → all builds
- Package.json → all dependencies
- GitHub workflows → CI/CD pipeline
- TypeScript config → type safety

## Memory Graph Entity Categories

Based on this analysis, the following entity types should be created in the knowledge graph:

1. **Project** - Root entity
2. **Phase** - Development phases (A-E, 6)
3. **Module** - Code modules (components, pages, hooks)
4. **Component** - Individual React components
5. **Page** - Route-based pages
6. **Document** - Documentation files
7. **Translation** - Language-specific content
8. **Asset** - Images, videos, documents
9. **Feature** - User-facing features
10. **Task** - Development tasks
11. **Bug** - Known issues
12. **Convention** - Coding/process standards
13. **Dependency** - External packages
14. **Route** - URL routes
15. **Theme** - Design themes

## Memory Keys Structure

Proposed memory key naming convention:
- `project-skiin-overview` - High-level project summary
- `phase-[letter]-summary` - Phase summaries
- `component-[name]-spec` - Component specifications
- `feature-[name]-implementation` - Feature details
- `bug-[id]-details` - Bug information
- `convention-[category]-rules` - Convention details
- `research-[topic]-findings` - Research summaries
- `plan-[date]-snapshot` - Planning snapshots
- `graph-snapshot-[date]` - Knowledge graph backups

## Next Steps

1. Create memory entries for each major category
2. Build knowledge graph entities and relationships
3. Implement recall patterns for common queries
4. Set up automatic memory/graph updates in development workflow
5. Create memory maintenance procedures

This tree of thought provides the foundation for a comprehensive memory and knowledge graph system that will enhance development efficiency and maintain project context across sessions.