# Files to Archive - 2025-07-25

This document lists all files identified for archival during the Phase A documentation cleanup. These files reference outdated process versions (v2.0/v3.0) or contain superseded information.

## Files Requiring Archival

### Root Level Documentation
1. `/docs/CURRENT_STATUS_2025-01-22.md` - Old date, references v2.0→v3.0 transition
2. `/docs/IMPLEMENTATION-PLAN-V2.md` - V2 implementation plan
3. `/docs/PROJECT_AUDIT_2025-01-18.md` - Old audit referencing v2.0
4. `/docs/UPDATE-WEBSITE-COPY-v3-Jul-22-2025.md` - V3.0 specification
5. `/docs/V2_COPY_CLEANUP_AND_INTEGRATION_PLAN.md` - V2 cleanup plan
6. `/docs/V2_COPY_INTEGRATION_PLAN.md` - V2 integration plan
7. `/docs/V2_COPY_TO_COMPONENT_MAPPING.md` - V2 component mapping

### Content Documents (v2.0)
8. `/docs/content/iterations/2025-01-22-copy-update-v2/SKIIN_WEBSITE_COPY_ENGLISH_v2.md`
9. `/docs/content/iterations/2025-01-22-copy-update-v2/SKIIN_WEBSITE_COPY_FRENCH_v2.md`
10. `/docs/content/iterations/2025-01-22-copy-update-v2/SKIIN_WEBSITE_COPY_GERMAN_v2.md`

### Specs (v3.0)
11. `/docs/specs/copy/SKIIN_WEBSITE_COPY_ENGLISH_v3.md` - V3.0 copy spec

### Analysis & Reports
12. `/docs/analysis/V2-RESEARCH-SUMMARY.md` - V2 research
13. `/docs/overview/PROJECT-OVERVIEW-V2.md` - V2 project overview
14. `/docs/reports/V2-POLISH-READINESS-REPORT.md` - V2 readiness report

### Working Files
15. `/working_files/i18n-analysis-report.md` - Should be in docs/analysis/

## Archival Strategy

1. **Create subdirectories** in `/docs/archive/2025-07-25/`:
   - `v2-documents/` - All v2.0 related files
   - `v3-documents/` - All v3.0 related files
   - `old-status-reports/` - Outdated status and audit files

2. **Update doc-ref.md** to mark these as Archived with new paths

3. **Preserve useful content** by extracting insights before archival

4. **Create README** in each subdirectory explaining the contents

## Files to Keep Active

The following v2.0 review reports contain useful insights and should remain active:
- Copy review reports (psychological, cultural, medical, pricing)
- Process improvement analyses
- Architecture documentation
- Design system specifications

These provide valuable context for v7.2 implementation even though they reference v2.0.