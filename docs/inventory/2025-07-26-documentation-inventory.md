# Documentation Inventory
DATE: 2025-07-26
PURPOSE: Comprehensive inventory of all documentation in /docs/ directory
STATUS: Active

## Directory Structure Overview

### /docs/
- **analysis/** - Gap analyses, research summaries, i18n reports
- **architecture/** - System architecture, component inventories, visual diagrams
- **archive/** - Historical documents organized by date
- **assets/** - Asset inventories and guidelines
- **compliance/** - Legal and regulatory documents
- **components/** - Component-specific documentation
- **content/** - Copy documents and iterations
- **design-system/** - Design tokens, guidelines, version history
- **implementation/** - Technical guides, mappings, rollout plans
- **process/** - Process documentation
- **process-review/** - Process improvement analyses
- **reports/** - Meeting notes, test results, audits
- **research/** - Research summaries and findings
- **specifications/** - Legacy specs folder
- **specs/** - Current specifications

## Categorization

### 1. SPECIFICATIONS (What to Build)
**Location**: /docs/specs/
- SPEC_REGISTRY.md - Master registry of all specs
- protected-components/PROTECTED_COMPONENTS_SPEC_v1.md - Protected component requirements
- **Status**: Active, needs v7.2 specs added

**Location**: /docs/research/
- 2025-07-24-skiin-copy-research-summary-v7.pdf - v7.2 evidence-based requirements
- 2025-07-24-skiin-copy-research-summary-v7-part2.md - Additional v7.2 specs
- **Status**: Active, current target

### 2. IMPLEMENTATION GUIDES (How to Build)
**Location**: /docs/implementation/
- 2025-07-24-technical-implementation-guide-v7.md - v7.2 technical guide
- 2025-07-24-ui-component-mapping-v7.md - Component to copy mapping
- 2025-07-24-section-inventory-v7.md - Complete section inventory
- 2025-07-25-week-1-summary.md - Week 1 implementation summary
- 2025-07-25-week-2-3-summary.md - Week 2-3 implementation summary
- **Status**: Active, implementation in progress

**Location**: /docs/design-system/
- design-tokens-v1.0.json - Design token definitions
- theme-system-guide.md - Multi-theme implementation
- animation-guidelines.md - Animation standards
- **Status**: Active, needs v7.2 updates

### 3. ARCHITECTURE & STRUCTURE
**Location**: /docs/architecture/
- component-inventory.md - 80+ component inventory
- system-architecture.md - Tech stack and patterns
- visual-architecture.md - System diagrams
- **Status**: Needs update with v7.2 components

**Location**: /docs/
- ROUTE_MAP.md - Complete route mapping (69 routes)
- protected-components-usage.md - Protected component guidelines
- **Status**: Active

### 4. CONTENT & COPY
**Location**: /docs/content/
- SKIIN_WEBSITE_COPY_ENGLISH.md - English master copy
- SKIIN_WEBSITE_COPY_GERMAN.md - German translations
- SKIIN_WEBSITE_COPY_FRENCH.md - French translations
- COPY_DOCUMENTS_REVIEW.md - Review tracking
- iterations/ - Historical copy iterations
- **Status**: Needs v7.2 update

### 5. REPORTS & ANALYSIS
**Location**: /docs/analysis/
- I18N-ANALYSIS-REPORT.md - Internationalization gaps
- 2025-07-25-gap-analysis-v5.md - Process v5.0 gaps
- **Status**: Active

**Location**: /docs/reports/
- meetings/ - Meeting notes and decisions
- visual-tests/ - Visual test results
- **Status**: Ongoing updates

### 6. PROCESS & METHODOLOGY
**Location**: /docs/process/
- Development methodologies and workflows
- **Status**: Needs alignment with v5.0

**Location**: /docs/process-review/
- Process improvement analyses
- **Status**: Review needed

### 7. COMPLIANCE & LEGAL
**Location**: /docs/compliance/
- Swiss medical law compliance
- GDPR requirements
- **Status**: Active, periodic review needed

## Key Findings

### Active Documents Requiring Updates
1. Component inventory needs v7.2 components added
2. Content documents need v7.2 copy integration
3. Design system needs v7.2 theme updates
4. Architecture diagrams need current state

### Missing Documentation
1. CI/CD pipeline documentation
2. Performance budget documentation
3. Security audit procedures
4. Accessibility testing guidelines

### Duplicate/Redundant Documents
1. Multiple copy document versions in iterations
2. Legacy specs in /specifications/ vs /specs/
3. Multiple implementation plans across archives

## Recommendations

### Immediate Actions
1. Consolidate specs into /docs/specs/ only
2. Update component inventory with v7.2
3. Create missing CI/CD documentation
4. Archive legacy implementation plans

### Organization Improvements
1. Clear separation: Specs (what) vs Implementation (how)
2. Single source of truth for each document type
3. Version control within files, not file names
4. Regular archive cycles (quarterly)

## Archive Summary
- **/archive/2025-07-25/** - Major v5.0 cleanup archive
- **/archive/2025-01-22/** - v2.0 implementation archive
- **/archive/2025-01-13/** - Earlier iterations

Total Active Documents: ~50
Total Archived Documents: ~100+
Documentation Coverage: ~85%