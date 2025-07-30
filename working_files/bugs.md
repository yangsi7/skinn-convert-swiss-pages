# Bugs Log
This file records all known defects discovered during the project. Each entry should include a unique identifier, a brief description, the phase or module where the bug was encountered, severity, root cause (once known), current status and any relevant notes or links to reproduction steps, screenshots or logs. Bugs should be added as soon as they are discovered and removed only when fully resolved and verified.

Template for New Bug
markdown
Copy
Edit
### BUG-[YYYYMMDD-XX] – Brief title

- **Date discovered**: 2025-07-25
- **Discovered by**: [Agent name or user]
- **Phase / Module**: [e.g. Phase B.2 – Eligibility Checker]
- **Description**: [Clear description of the problem]
- **Severity**: P0 / P1 / P2 / P3  
  * P0 – Critical; blocks core functionality or violates medical/legal requirements  
  * P1 – Major; significant feature impacted but workaround exists  
  * P2 – Minor; does not hinder functionality but needs correction  
  * P3 – Cosmetic/enhancement
- **Root cause**: [Leave blank until analysis is complete]
- **Status**: Open / In Progress / Fixed / Verified / Closed
- **Notes & References**:
  * [Link to reproduction steps or logs]
  * [Any screenshots or test evidence]
Bugs
<!-- Add new bug entries below this line -->

### BUG-20250725-01 – Classic Theme Loads by Default Instead of Modern

- **Date discovered**: 2025-07-25
- **Discovered by**: Claude Code (Visual Inspection)
- **Phase / Module**: Phase B.4 – Theme System / HomePageTabs
- **Description**: The Classic theme loads by default on the homepage, hiding all v7.2 features and components. Users must manually click the Modern tab to see the new implementation. This defeats the purpose of the v7.2 update as users see outdated design.
- **Severity**: P1 – Major; v7.2 features hidden from users
- **Root cause**: HomePageTabs component defaultTab prop likely set to "classic" or state initialization defaults to classic
- **Status**: Open
- **Notes & References**:
  * Screenshot: v7-2-modern-clinically-proven-tech (shows Modern tab not selected by default)
  * Impact: Users don't see evidence-based messaging, Silent Triad, or new CTAs
  * Fix: Update HomePageTabs to set defaultTab="modern"

### BUG-20250725-02 – Missing data-testid Attributes on v7.2 Components

- **Date discovered**: 2025-07-25
- **Discovered by**: Claude Code (Visual Inspection)
- **Phase / Module**: Phase B.2-B.3 – All v7.2 Components
- **Description**: All newly created v7.2 components lack data-testid attributes, making automated testing difficult. Puppeteer scripts must rely on fragile selectors like text content or class names.
- **Severity**: P2 – Minor; testing harder but functionality not impacted
- **Root cause**: Components developed without test automation considerations
- **Status**: Open
- **Notes & References**:
  * Affected components: HeroSection, StatisticsShowcase, ProblemSolutionSection, ProductSection, NumbersSection, ClinicallyProvenTechSection, Care360Section, TechCarousel
  * Example needed: data-testid="hero-variant-a", data-testid="stat-silent-af"
  * Impact: QA automation blocked, tests fragile

### BUG-20250726-01 – Homepage Renders Blank for All Languages

- **Date discovered**: 2025-07-26
- **Discovered by**: Claude Code (Navigation Testing)
- **Phase / Module**: Phase E.2 – useTranslation Hook / Home2.tsx
- **Description**: All homepage routes (/, /de, /fr, /it) show blank white pages. No content renders, no error messages displayed.
- **Severity**: P0 – Critical; complete loss of functionality
- **Root cause**: Multiple issues: 1) Missing problemSolution section in Italian/German/French translations, 2) CSS positioning conflicts between fixed navigation elements
- **Status**: Fixed
- **Notes & References**:
  * Fixed by adding missing problemSolution sections to all translation files
  * Fixed CSS positioning: HomePageTabs top-24, main content pt-32
  * All language homepages now render correctly with v7.2 content
  * Verified with puppeteer screenshots: homepage-english-fixed, homepage-german-fixed, homepage-french-fixed, homepage-italian-fixed

### BUG-20250726-02 – Route URLs Don't Match v7.2 Specification

- **Date discovered**: 2025-07-26
- **Discovered by**: Claude Code (Route Analysis)
- **Phase / Module**: Phase E.2 – Routes Configuration
- **Description**: German and French routes use incorrect terminology. German uses "herzueberwachung" instead of "herzscreening", French may use "depistage" instead of "bilan-cardiaque"
- **Severity**: P0 – Critical; SEO failure, broken marketing links
- **Root cause**: Routes implemented before v7.2 specification finalized
- **Status**: Open
- **Notes & References**:
  * Current: /de/loesungen/10-tage-herzueberwachung
  * Required: /de/loesungen/10-tage-herzscreening
  * Impacts all marketing materials and search rankings
  * See: docs/testing/2025-07-26-route-discrepancy-report.md

### BUG-20250726-03 – Italian Translation Structure Incompatible

- **Date discovered**: 2025-07-26
- **Discovered by**: Claude Code (Code Analysis)
- **Phase / Module**: Phase E – Translation System
- **Description**: Italian translations use different file structure (/translations/it/) while system expects (/translations/home/it.ts). This prevents Italian from loading.
- **Severity**: P0 – Critical; Italian language completely broken
- **Root cause**: Inconsistent translation file organization
- **Status**: Open
- **Notes & References**:
  * Italian files exist but in wrong location
  * useTranslation hook can't find them
  * Causes homepage crash when Italian selected
  * Blocks Italian market launch
