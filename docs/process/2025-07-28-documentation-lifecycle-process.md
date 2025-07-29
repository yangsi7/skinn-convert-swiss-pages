# Documentation Lifecycle Process
VERSION: 1.0
DATE: 2025-07-28
STATUS: Active
COMPLIANCE: CLAUDE_PROCESS.md v5.0

## Overview

This document defines the comprehensive documentation lifecycle process for the SKIIN project, aligning with universal process v5.0 requirements. It establishes clear procedures for creating, indexing, updating, and archiving documentation while integrating with memory storage and knowledge graph systems.

## Lifecycle Stages

### 1. Creation Stage

**Triggers:**
- Research findings
- Design decisions
- Implementation guides
- Test results
- Architecture decisions
- Meeting notes

**Process:**
1. Create file with ISO date prefix: `YYYY-MM-DD-descriptive-name.md`
2. Place in appropriate category:
   - `/docs/research/` - Research and analysis
   - `/docs/implementation/` - Technical guides
   - `/docs/design/` - Design system documentation
   - `/docs/architecture/` - System architecture
   - `/docs/testing/` - Test plans and results
   - `/docs/process/` - Process documentation
3. Include metadata header:
   ```markdown
   # Document Title
   VERSION: 1.0
   DATE: YYYY-MM-DD
   STATUS: Active/Draft/Review
   COMPLIANCE: CLAUDE_PROCESS.md v5.0
   ```
4. Follow writing guidelines:
   - Structured paragraphs for explanations
   - Bullet lists only for short items
   - Clear headings and sections

**Integration Points:**
- Store summary: `memory.store('doc-[name]-v[n]', summary)`
- Create entity: `context7.create_entities({type: 'document', id: 'doc:[name]'})`
- Update doc-ref.md immediately

### 2. Indexing Stage

**Immediate Actions (same session):**
1. Add entry to `doc-ref.md` under appropriate section
2. Include:
   - Path (relative to project root)
   - Brief description
   - Status (Active/Draft/Review/Superseded/Archived)
   - Version number
3. Update "Last-Review" date in doc-ref.md header
4. Update "Version" if structure changes

**Knowledge Graph Updates:**
```typescript
// Create relationships
context7.create_relations([
  { from: 'doc:new-guide', to: 'component:HeroSection', type: 'documents' },
  { from: 'doc:new-guide', to: 'phase:6', type: 'belongs_to' }
]);

// Add observations
context7.add_observations([{
  entityName: 'doc:new-guide',
  contents: ['Created for v7.2 implementation', 'Includes copy variants']
}]);
```

### 3. Updating Stage

**Principles:**
- Documentation updates MUST occur in same commit as code changes
- Never leave documentation stale after modifications
- Maintain version history within documents

**Process:**
1. Update document content
2. Increment version number in header
3. Add changelog entry if significant:
   ```markdown
   ## Changelog
   - v1.1 (2025-07-28): Added copy variant system
   - v1.0 (2025-07-27): Initial version
   ```
4. Update doc-ref.md:
   - New version number
   - Last modified date
5. Log in event-stream.md:
   ```
   [2025-07-28 10:00] Documentation - Updated design-guide.md v1.0 to v1.1 adding theme variants
   ```

**Memory Updates:**
```typescript
memory.store('doc-design-guide-update-2025-07-28', JSON.stringify({
  version: '1.1',
  changes: ['Added theme variants', 'Updated color tokens'],
  rationale: 'Support for A/B testing requirements'
}));
```

### 4. Archival Stage

**Triggers:**
- Document superseded by newer version
- Document outdated and no longer relevant
- Document unused for 7+ days
- Major version change requiring clean break

**Process:**
1. Create archive directory:
   ```bash
   mkdir -p docs/archive/YYYY-MM-DD/[category]/
   ```

2. Move documents preserving names:
   ```bash
   mv docs/research/old-guide.md docs/archive/2025-07-28/research/
   ```

3. Create README.md in archive folder:
   ```markdown
   # Archive - 2025-07-28
   
   ## Archived Documents
   - old-guide.md - Superseded by new-guide-v2.md
   - analysis.md - Outdated analysis from v6.1
   
   ## Reason for Archive
   Phase C.3 cleanup - Documents superseded by v7.2 implementation
   
   ## Superseding Documents
   - old-guide.md → /docs/research/new-guide-v2.md
   ```

4. Update doc-ref.md:
   - Change status to "Archived"
   - Update path to archive location
   - Note superseding document

**Graph Updates:**
```typescript
// Archive relationships
context7.create_relations([
  { from: 'doc:old-guide', to: 'archive:2025-07-28', type: 'archived_to' },
  { from: 'doc:new-guide-v2', to: 'doc:old-guide', type: 'supersedes' }
]);

// Add archive observation
context7.add_observations([{
  entityName: 'doc:old-guide',
  contents: ['Archived on 2025-07-28', 'Superseded by v2']
}]);
```

## Integration with Agent Loop

### Step 13: Document Auto-Update

The agent must check for documentation requirements:

```typescript
function documentAutoUpdate() {
  // 1. Check if code changes were made
  if (codeChanges.length > 0) {
    // 2. Identify affected documentation
    const affectedDocs = findAffectedDocumentation(codeChanges);
    
    // 3. Update each document
    for (const doc of affectedDocs) {
      updateDocument(doc);
      updateDocRef(doc);
      logToEventStream(`Documentation - Updated ${doc.name}`);
    }
    
    // 4. Create new documentation if needed
    if (needsNewDocumentation(codeChanges)) {
      const newDoc = createDocumentation(codeChanges);
      indexInDocRef(newDoc);
      storeInMemory(newDoc);
      createGraphEntity(newDoc);
    }
  }
  
  // 5. Check for archival needs
  checkForArchival();
}
```

## Memory Storage Patterns

### Document Keys
```
doc-[type]-[name]-v[version]
doc-[type]-[name]-[date]
doc-archive-[date]
doc-lifecycle-process-v1
```

### Storage Examples
```typescript
// New document
memory.store('doc-impl-hero-v7-2', JSON.stringify({
  type: 'implementation',
  version: '7.2',
  components: ['HeroSection', 'HeroVariants'],
  created: '2025-07-28',
  status: 'Active'
}));

// Archive action
memory.store('doc-archive-2025-07-28', JSON.stringify({
  archived: [
    'website-copy-v6.1.md',
    'research-summary-v6.1.md'
  ],
  destination: '/docs/archive/2025-07-28/',
  reason: 'Superseded by v7.2'
}));
```

## Knowledge Graph Patterns

### Entity Types
- `document` - All documentation files
- `archive` - Archive folders
- `phase` - Project phases
- `component` - Code components
- `feature` - Product features

### Relationship Types
- `supersedes` - New version replacing old
- `archived_to` - Document moved to archive
- `documents` - Document describes entity
- `belongs_to` - Document part of phase/category
- `relates_to` - General relationship

### Query Patterns
```typescript
// Find all active documents
const activeDocs = await context7.search_nodes({
  query: 'status:Active type:document'
});

// Find superseded documents
const superseded = await context7.search_nodes({
  query: 'supersedes'
});

// Find documents for a component
const componentDocs = await context7.search_nodes({
  query: 'documents component:HeroSection'
});
```

## Enforcement & Compliance

### Automated Checks
1. Pre-commit hooks to verify doc-ref.md is updated
2. CI/CD pipeline to check documentation coverage
3. Weekly archive sweep for 7-day rule

### Manual Reviews
1. Sprint retrospective includes documentation review
2. Monthly doc-ref.md audit
3. Quarterly archive cleanup

### Metrics
- Documentation coverage: >90%
- Update lag: <24 hours
- Archive compliance: 100%
- doc-ref.md accuracy: 100%

## Quick Reference

### File Naming
```
YYYY-MM-DD-descriptive-name.md
2025-07-28-hero-implementation-guide.md
2025-07-28-copy-variant-system.md
```

### Status Values
- `Active` - Current and maintained
- `Draft` - Work in progress
- `Review` - Awaiting approval
- `Superseded` - Replaced by newer version
- `Archived` - Moved to archive

### Archive Structure
```
/docs/archive/
  └── YYYY-MM-DD/
      ├── README.md
      ├── research/
      ├── implementation/
      └── design/
```

This process ensures all project knowledge is properly captured, maintained, and preserved throughout the SKIIN project lifecycle.