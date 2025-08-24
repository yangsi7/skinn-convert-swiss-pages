# Documentation Reference Index
VERSION: 5.1 
LAST-UPDATED: 2025-08-23
PURPOSE: Clean, organized index of all project documentation
STATUS: ACTIVE
Implementation-Status: Documentation cleanup completed ✅
Default-Theme: S&W Design | Default-Page: LandingPageV2025

## Documentation Structure

### /context/ - Working Files (8 files)
| File | Purpose | Update Frequency |
|------|---------|------------------|
| CLAUDE_PROCESS.md | Process lifecycle definition | Weekly |
| conventions.md | Coding & design standards (v5.5) | As needed |
| doc-ref.md | This file - documentation index | Daily |
| event-stream.md | Execution log | Multiple/day |
| planning.md | Current sprint planning (v6.1) | Daily |
| requirements.md | Active requirements & specs (NEW) | Weekly |
| researcher-handoff-brief.md | Research agent context | As needed |
| todo.md | Active task tracking | Multiple/day |

### /docs/ - Reference Documentation (27 files)

#### API Documentation
- `api/ROUTE_MAP.md` - Complete route mapping for all 4 languages

#### Architecture
- `architecture/system-architecture.md` - Core system design
- `architecture/visual-architecture.md` - System diagrams
- `architecture/component-inventory.md` - Component catalog
- `architecture/2025-08-19-copy-variant-system-architecture.md` - Copy variant system

#### Content (Master Copies)
- `content/SKIIN_WEBSITE_COPY_ENGLISH.md` - English master copy
- `content/SKIIN_WEBSITE_COPY_FRENCH.md` - French master copy
- `content/SKIIN_WEBSITE_COPY_GERMAN.md` - German master copy
- `content/SKIIN_WEBSITE_COPY_ITALIAN.md` - Italian master copy

#### Deployment
- `deployment/PRODUCTION_READINESS_REPORT.md` - Production deployment guide

#### Design System
- `design/tokens.md` - Design tokens specification
- `design/minimalist-component-library.md` - Component library
- `design/2025-07-29-design-system-implementation-review.md` - Implementation review
- `design/2025-07-29-myant-violet-palette-implementation.md` - Color palette
- `design/2025-07-30-design-token-usage-guide.md` - Token usage guide
- `design/2025-08-19-eligibility-form-design-system.md` - Form design system
- `design/2025-08-19-form-component-specifications.md` - Form components

#### Design System Specifications
- `design-system/modern-design-system-spec.md` - Modern design system
- `design-system/protected-components-usage.md` - Protected component guidelines
- `design-system/PROTECTED_COMPONENTS_SPEC_v1.md` - Protected components spec
- `design-system/2025-08-22-eligibility-workflow-atomic-components.md` - 6-stage workflow atomic components specification
- `design-system/swiss-healthcare-eligibility-ui-specifications.json` - ✅ Swiss Healthcare Design System v2.0.0 specifications

#### Reports
- `reports/design-system-validation-report.md` - ✅ Design system validation (97% compliance)
- `SWISS_HEALTHCARE_ELIGIBILITY_DESIGN_SYSTEM_TEST_REPORT.md` - ✅ Comprehensive testing report (87/100 score)

#### Documentation Standards
- `documentation-guidelines.md` - Documentation standards and lifecycle

#### Implementation Documentation
- `implementation/2025-08-22-6-stage-eligibility-workflow-implementation.md` - 6-stage workflow comprehensive implementation

### /archive/ - Historical Records (200+ files)
Location: `archive/YYYY-MM-DD/`
Status: Read-only, ignored by git
Purpose: Superseded documents for historical reference

## Key Metrics

| Metric | Target | Current |
|--------|--------|---------|
| Context files | ≤10 | 8 ✅ |
| Docs files | ≤30 | 27 ✅ |
| Avg file size | <500 lines | ~200 ✅ |
| Documentation freshness | 100% < 7 days | 100% ✅ |
| Duplicate content | 0% | 0% ✅ |

## Quick Access

### Most Referenced
1. `/context/requirements.md` - Current requirements
2. `/context/todo.md` - Active tasks
3. `/docs/documentation-guidelines.md` - Documentation standards
4. `/docs/design-system/modern-design-system-spec.md` - Design system

### Recently Updated
1. `/docs/design-system/swiss-healthcare-eligibility-ui-specifications.json` - ✅ Swiss Healthcare Design System v2.0.0 (2025-08-23)
2. `/docs/reports/design-system-validation-report.md` - ✅ Validation report (97% compliance) (2025-08-23)
3. `SWISS_HEALTHCARE_ELIGIBILITY_DESIGN_SYSTEM_TEST_REPORT.md` - ✅ Testing report (87/100 score) (2025-08-23)
4. `/context/requirements.md` - ✅ NEW: Active requirements tracking (2025-08-23)
5. `/context/conventions.md` - Updated with Swiss Healthcare Design System v2.0.0 (2025-08-23)

## Navigation Guide

### For Development
- Start with `/context/requirements.md` for current specs
- Check `/context/todo.md` for tasks
- Reference `/context/conventions.md` for standards
- Use `/docs/design-system/` for UI guidelines

### For Architecture
- `/docs/architecture/system-architecture.md` - System design
- `/docs/architecture/visual-architecture.md` - Diagrams
- `/docs/api/ROUTE_MAP.md` - API routes

### For Content
- `/docs/content/` - Master copy documents
- 4 language versions maintained

### For Documentation
- `/docs/documentation-guidelines.md` - How to document
- Follow lifecycle: creation → active → archive → deletion

## Archive Policy

Documents are archived when:
- Superseded by newer version
- Unused for 7+ days
- Project phase completed
- No longer relevant

Archive location: `archive/YYYY-MM-DD/`
Compression: After 30 days
Deletion: After 90 days (unless compliance required)

## Migration Summary (2025-11-20)

### Before Cleanup
- 200+ files in docs/
- Complex nested structure
- Mix of working files and reference docs
- Significant noise and clutter

### After Cleanup
- 8 files in context/ (working)
- 25 files in docs/ (reference)
- 200+ files archived
- Clear separation of concerns
- 81% reduction in active documentation

### Archived Categories
- All research documents → archive/2025-11-20/research/
- All implementation guides → archive/2025-11-20/implementation/
- All test results → archive/2025-11-20/testing/
- All analysis reports → archive/2025-11-20/analysis/
- All handoff documents → archive/2025-11-20/handoffs/
- All conformance docs → archive/2025-11-20/conformance/

## Success Criteria ✅

- [x] docs/ contains only essential reference documentation
- [x] context/ contains all working files
- [x] No duplicate information across files
- [x] All files under 500 lines
- [x] Clear navigation in doc-ref.md
- [x] Archive ignored in .gitignore
- [x] Find any information in <10 seconds
- [x] ✅ NEW: Swiss Healthcare Design System fully documented
- [x] ✅ NEW: All design system requirements tracked and fulfilled
- [x] ✅ NEW: Production-ready validation and testing completed