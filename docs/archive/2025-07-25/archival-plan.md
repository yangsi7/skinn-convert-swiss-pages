# Archival Plan - 2025-07-25

This document outlines the archival strategy for Phase A.3 of the documentation cleanup.

## Archival Structure

Create the following subdirectories in `/docs/archive/2025-07-25/`:
- `v2-documents/` - All v2.0 related documentation
- `v3-documents/` - All v3.0 related documentation  
- `old-status-reports/` - Outdated status reports and audits
- `working_files/` - Already contains archived todo.md and planning.md

## Files to Archive by Category

### V2 Documents (15 files)
**Root Level:**
1. `/docs/IMPLEMENTATION-PLAN-V2.md`
2. `/docs/V2_COPY_CLEANUP_AND_INTEGRATION_PLAN.md`
3. `/docs/V2_COPY_INTEGRATION_PLAN.md`
4. `/docs/V2_COPY_TO_COMPONENT_MAPPING.md`

**Content Documents:**
5. `/docs/content/iterations/2025-01-22-copy-update-v2/SKIIN_WEBSITE_COPY_ENGLISH_v2.md`
6. `/docs/content/iterations/2025-01-22-copy-update-v2/SKIIN_WEBSITE_COPY_FRENCH_v2.md`
7. `/docs/content/iterations/2025-01-22-copy-update-v2/SKIIN_WEBSITE_COPY_GERMAN_v2.md`

**Analysis & Reports:**
8. `/docs/analysis/V2-RESEARCH-SUMMARY.md`
9. `/docs/overview/PROJECT-OVERVIEW-V2.md`
10. `/docs/reports/V2-POLISH-READINESS-REPORT.md`

**Keep Active (useful insights):**
- Copy review reports in `/docs/content/iterations/2025-01-22-copy-update-v2/`
- Process improvement analyses

### V3 Documents (2 files)
1. `/docs/UPDATE-WEBSITE-COPY-v3-Jul-22-2025.md`
2. `/docs/specs/copy/SKIIN_WEBSITE_COPY_ENGLISH_v3.md`

### Old Status Reports (2 files)
1. `/docs/CURRENT_STATUS_2025-01-22.md`
2. `/docs/PROJECT_AUDIT_2025-01-18.md`

### Misplaced Files (1 file)
1. `/working_files/i18n-analysis-report.md` → move to `/docs/analysis/`

## Archival Steps

1. Create subdirectories
2. Move files maintaining structure
3. Create README in each subdirectory
4. Update doc-ref.md statuses
5. Update knowledge graph relationships
6. Log all moves in event-stream.md

## Post-Archival Validation

- Verify all files moved successfully
- Check doc-ref.md links
- Ensure no broken references in remaining docs
- Confirm working_files/ only contains v5.0 files