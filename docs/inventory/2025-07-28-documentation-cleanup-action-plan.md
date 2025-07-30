# Documentation Cleanup Action Plan
VERSION: 1.0
DATE: 2025-07-28
STATUS: Ready for Execution
COMPLIANCE: CLAUDE_PROCESS.md v5.0

## Executive Summary

This action plan provides step-by-step instructions for cleaning up the SKIIN project documentation structure. The plan addresses 14 misplaced files in the root directory, creates missing master copy documents, and establishes a proper documentation lifecycle process.

**Total Estimated Time**: 3 hours

## Phase 1: Archive Misplaced Files (45 minutes)

### 1.1 Create Archive Directory
```bash
mkdir -p docs/archive/2025-07-28/root-cleanup
```

### 1.2 Archive v6.1 Files
These outdated files should be moved to the archive:

```bash
# Move v6.1 files to archive
mv "Website Copy Guide v6p1.md" docs/archive/2025-07-28/root-cleanup/
mv "Research Summary v6p1.md" docs/archive/2025-07-28/root-cleanup/
mv "Change Log  v6p1.md" docs/archive/2025-07-28/root-cleanup/
mv planning-skiin-website-copy-v6p1.md docs/archive/2025-07-28/root-cleanup/
mv tot-v6p1.md docs/archive/2025-07-28/root-cleanup/
mv brainstorm-evaluation-v6p1.md docs/archive/2025-07-28/root-cleanup/
mv 14-to-10-day-replacement-report.md docs/archive/2025-07-28/root-cleanup/
```

### 1.3 Create Archive README
```bash
cat > docs/archive/2025-07-28/root-cleanup/README.md << 'EOF'
# Root Cleanup Archive - 2025-07-28

This archive contains documentation files that were misplaced in the project root directory.

## Archived Files

### v6.1 Documentation (Superseded)
- Website Copy Guide v6p1.md - Superseded by v7.2
- Research Summary v6p1.md - Superseded by v7.2
- Change Log v6p1.md - Historical change log
- planning-skiin-website-copy-v6p1.md - Old planning document
- tot-v6p1.md - Tree of thought analysis
- brainstorm-evaluation-v6p1.md - Feature evaluation
- 14-to-10-day-replacement-report.md - Completed migration

These files represent an earlier version of the project documentation and have been superseded by v7.2 documentation in /docs/research/.

## Archive Date
2025-07-28

## Reason for Archive
Phase C.3 Documentation Cleanup - Moving misplaced root files to proper archive location per v5.0 process requirements.
EOF
```

## Phase 2: Relocate Active v7.2 Files (30 minutes)

### 2.1 Move Research Documents
```bash
# Move v7.2 research files to proper location
mv "Website Copy Guide v7p2.md" docs/research/2025-07-28-website-copy-guide-v7p2.md
mv "Research Summary v7p2.md" docs/research/2025-07-28-research-summary-v7p2.md
mv "Change Log  v7p2.md" docs/research/2025-07-28-change-log-v7p2.md
mv tot-v7p2.md docs/research/2025-07-28-tree-of-thought-v7p2.md
mv brainstorm-evaluation-v7p2.md docs/research/2025-07-28-brainstorm-evaluation-v7p2.md
```

### 2.2 Move Documentation Reference
```bash
# Move documentation index
mv DOC-REFERENCE-INDEX.md docs/inventory/2025-07-28-doc-reference-index.md
```

### 2.3 Handle Images (if needed)
```bash
# Check if images are referenced anywhere
grep -r "man-wear-band.webp" src/ docs/
grep -r "medicalgorythmic-pamflet.png" src/ docs/

# If not referenced, move to assets
mv man-wear-band.webp public/assets/images/product/
mv medicalgorythmic-pamflet.png public/assets/images/documents/
```

## Phase 3: Create Master Copy Documents (1 hour)

### 3.1 Create English Master Copy
Create `/docs/content/SKIIN_WEBSITE_COPY_ENGLISH.md`:
- Extract content from `/src/translations/home/en.ts`
- Include all sections from Home2 implementation
- Add version header: v7.2
- Include copy variants (default and original)

### 3.2 Create German Master Copy
Create `/docs/content/SKIIN_WEBSITE_COPY_GERMAN.md`:
- Extract from `/src/translations/home/de.ts`
- Note: Formal "Sie" addressing throughout
- Swiss German medical terminology

### 3.3 Create French Master Copy
Create `/docs/content/SKIIN_WEBSITE_COPY_FRENCH.md`:
- Extract from `/src/translations/home/fr.ts`
- Note: Formal "vous" throughout
- Swiss French conventions

### 3.4 Create Italian Master Copy
Create `/docs/content/SKIIN_WEBSITE_COPY_ITALIAN.md`:
- Extract from `/src/translations/it/home.ts`
- Note: Formal "Lei" addressing
- Swiss Italian conventions

## Phase 4: Update Documentation Index (30 minutes)

### 4.1 Update doc-ref.md
- Change version from 3.2 to 4.0
- Update "Last-Review" date
- Add new file locations under appropriate sections
- Mark archived files with status: Archived
- Update file counts in Key Metrics

### 4.2 Update conventions.md
- Add documentation lifecycle process details
- Include memory.store requirements
- Add context7 graph integration steps

### 4.3 Update CLAUDE.md
- Add navigation structure to section 14
- Update working files section to reflect bugs moved to /docs/bugs/
- Add documentation lifecycle summary

## Phase 5: Memory & Knowledge Graph Integration (15 minutes)

### 5.1 Store Key Information
```typescript
// Store documentation audit results
memory.store('doc-audit-2025-07-28', JSON.stringify({
  totalFiles: 153,
  misplacedFiles: 14,
  gaps: ['compliance', 'assetInventory', 'masterCopy'],
  cleanupCompleted: true
}));

// Store cleanup plan execution
memory.store('doc-cleanup-execution-2025-07-28', JSON.stringify({
  archivedFiles: 7,
  relocatedFiles: 6,
  createdFiles: 4,
  updatedIndices: ['doc-ref.md', 'conventions.md', 'CLAUDE.md']
}));
```

### 5.2 Create Graph Entities
```typescript
// Create document entities
const documents = [
  { id: 'doc:website-copy-v7p2', type: 'document', name: 'Website Copy Guide v7.2' },
  { id: 'doc:website-copy-v6p1', type: 'document', name: 'Website Copy Guide v6.1' },
  // ... more entities
];

// Create relationships
const relations = [
  { from: 'doc:website-copy-v7p2', to: 'doc:website-copy-v6p1', type: 'supersedes' },
  { from: 'doc:website-copy-v6p1', to: 'archive:2025-07-28', type: 'archived_to' },
  // ... more relations
];
```

## Validation Checklist

After completing all phases:

- [ ] Root directory contains no documentation files (only code and config)
- [ ] All v6.1 files archived with README
- [ ] All v7.2 files in proper /docs/ locations
- [ ] Master copy documents created for all 4 languages
- [ ] doc-ref.md updated to v4.0
- [ ] conventions.md includes lifecycle process
- [ ] CLAUDE.md updated with navigation section
- [ ] Memory entries created
- [ ] Knowledge graph updated
- [ ] event-stream.md updated with all actions

## Success Criteria

1. **Clean Root**: No .md files except README.md and CLAUDE.md
2. **Organized /docs/**: All documentation in proper categories
3. **Master Copies**: All 4 languages have master copy documents
4. **Updated Indices**: doc-ref.md, conventions.md, CLAUDE.md current
5. **Lifecycle Process**: Clear documentation management process established
6. **Persistent Context**: Memory and graph updated for future sessions

## Risk Mitigation

- **Before moving files**: Check for any hardcoded references in code
- **Create backups**: Consider git stash or branch before major moves
- **Test builds**: Ensure no build dependencies on moved files
- **Update imports**: If any code imports moved files, update paths

This plan ensures compliance with CLAUDE_PROCESS.md v5.0 and establishes a sustainable documentation management system for the SKIIN project.