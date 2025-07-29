# Documentation Cleanup Plan
**Date**: 2025-07-28
**Based on**: Comprehensive Documentation Audit
**Priority**: Phase C - Working Files & Documentation Organization

## Quick Action Items

### 1. Move Root Files (14 files) 🚨

**Archive these v6.1 files:**
```bash
# Create archive directory
mkdir -p docs/archive/2025-07-28/v6-documents/

# Move v6.1 files
mv "Change Log v6p1.md" docs/archive/2025-07-28/v6-documents/
mv "Research Summary v6p1.md" docs/archive/2025-07-28/v6-documents/
mv "Website Copy Guide v6p1.md" docs/archive/2025-07-28/v6-documents/
mv "brainstorm-evaluation-v6p1.md" docs/archive/2025-07-28/v6-documents/
mv "planning-skiin-website-copy-v6p1.md" docs/archive/2025-07-28/v6-documents/
mv "tot-v6p1.md" docs/archive/2025-07-28/v6-documents/
```

**Move v7.2 files to active locations:**
```bash
# Move to implementation
mv "Change Log v7p2.md" docs/implementation/
mv "Website Copy Guide v7p2.md" docs/implementation/

# Move to research
mv "Research Summary v7p2.md" docs/research/
mv "brainstorm-evaluation-v7p2.md" docs/research/
mv "tot-v7p2.md" docs/research/

# Move to reports
mv "14-to-10-day-replacement-report.md" docs/reports/

# Archive duplicate
mv "DOC-REFERENCE-INDEX.md" docs/archive/2025-07-28/
```

### 2. Create Master Copy Documents 📝

Create in `/docs/content/`:
1. `SKIIN_WEBSITE_COPY_ENGLISH_v7.2.md` - Extract from latest implementation guide
2. `SKIIN_WEBSITE_COPY_GERMAN_v7.2.md` - From German UI mapping
3. `SKIIN_WEBSITE_COPY_FRENCH_v7.2.md` - From French UI mapping
4. `SKIIN_WEBSITE_COPY_ITALIAN_v7.2.md` - Create placeholder
5. `COPY_DOCUMENTS_REVIEW_v7.2.md` - Review tracking

### 3. Update doc-ref.md 🔄

Update all file paths to reflect:
- New locations of moved files
- Archived v6.1 documents
- Active v7.2 documents
- Missing documents marked as "TO CREATE"

### 4. Fill Critical Gaps 🔧

1. **Compliance**: Add Swiss medical device regulations to `/docs/compliance/`
2. **Assets**: Create `/docs/assets/asset-inventory.md`
3. **Italian**: Complete Italian translations

## Estimated Time

- Moving files: 30 minutes
- Creating master copy docs: 2 hours
- Updating doc-ref.md: 30 minutes
- Total Phase C.3: ~3 hours

## Success Criteria

✅ No documentation files in root (except CLAUDE.md, README.md)
✅ All v7.2 content in active directories
✅ All v6.1 content archived
✅ Master copy documents created
✅ doc-ref.md accurately reflects all locations
✅ Clear separation between specs, implementation, and archives