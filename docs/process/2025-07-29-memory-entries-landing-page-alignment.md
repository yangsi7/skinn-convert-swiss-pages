# Memory Entries for Landing Page Copy Alignment
VERSION: 1.0
CREATED: 2025-07-29
PURPOSE: Memory entries to create when MCP servers are available

## Memory Entries to Create

### 1. Copy Specification Authority
```javascript
memory.store('project-skiin-copy-authority', {
  authoritative_document: "/docs/implementation/skiin-ch-copy 29072025.md",
  importance: "CRITICAL",
  rule: "All landing page copy must match this specification exactly",
  created: "2025-07-29",
  enforced_by: "User directive"
});
```

### 2. Gap Analysis Results
```javascript
memory.store('gap-analysis-2025-07-29-landing-page', {
  major_issues: [
    "Silent Triad on homepage (must be removed)",
    "Missing Care360 Vision section",
    "Missing Know Your Heart Risk section",
    "Hero copy doesn't match spec variants",
    "Extra non-spec sections present"
  ],
  sections_to_remove: [
    "Silent Triad",
    "Video Education",
    "Generic Features",
    "MVCP Preview",
    "Technology Section"
  ],
  sections_to_add: [
    "Care360 Vision",
    "Know Your Heart Risk",
    "AI-Measured (or integrate)"
  ],
  document: "/docs/analysis/2025-07-29-landing-page-copy-gap-analysis.md"
});
```

### 3. Implementation Decision
```javascript
memory.store('decision-2025-07-29-copy-alignment', {
  decision: "Align landing page with official copy specification immediately",
  rationale: "Current implementation has significant deviations from approved copy",
  approach: "4-phase implementation: remove, update, add, reorder",
  priority: "IMMEDIATE - takes precedence over other Phase 6 work",
  impact: "Ensures compliance with approved messaging and structure"
});
```

### 4. Copy Alignment Tasks
```javascript
memory.store('task-copy-alignment-phases', {
  phase1: {
    name: "Remove Non-Compliant Content",
    tasks: [
      "Remove Silent Triad from homepage",
      "Remove Video Section",
      "Remove Features Section",
      "Remove MVCP Preview",
      "Remove Technology Section"
    ],
    priority: "IMMEDIATE"
  },
  phase2: {
    name: "Update Existing Copy",
    tasks: [
      "Update Hero variants A/B/C",
      "Add emotional subheadline",
      "Update badge text",
      "Verify Product Section copy"
    ],
    priority: "HIGH"
  },
  phase3: {
    name: "Add Missing Sections",
    tasks: [
      "Create Care360Vision component",
      "Create KnowYourHeartRisk component",
      "Add AI-Measured section"
    ],
    priority: "HIGH"
  },
  phase4: {
    name: "Reorder and Test",
    tasks: [
      "Ensure correct section order",
      "Update translations",
      "Test all variants"
    ],
    priority: "MEDIUM"
  }
});
```

## Knowledge Graph Entities to Create

### 1. Copy Specification Entity
```javascript
context7.create_entities([{
  name: "Copy Spec v7.2",
  entityType: "Document",
  observations: [
    "Authoritative copy specification",
    "Located at /docs/implementation/skiin-ch-copy 29072025.md",
    "Must be followed exactly",
    "Contains all approved page copy"
  ]
}]);
```

### 2. Gap Analysis Entity
```javascript
context7.create_entities([{
  name: "Landing Page Gap Analysis 2025-07-29",
  entityType: "Analysis",
  observations: [
    "Identified major deviations from spec",
    "Silent Triad must be removed",
    "Missing Care360 and Risk sections",
    "4-phase remediation plan created"
  ]
}]);
```

### 3. Relationships
```javascript
context7.create_relations([
  {
    from: "Landing Page Gap Analysis 2025-07-29",
    to: "Copy Spec v7.2",
    relationType: "analyzes_compliance_with"
  },
  {
    from: "Home2 Page",
    to: "Copy Spec v7.2",
    relationType: "must_comply_with"
  },
  {
    from: "Copy Alignment Tasks",
    to: "Landing Page Gap Analysis 2025-07-29",
    relationType: "remediates_issues_from"
  }
]);
```

## Recall Patterns

When working on landing page copy:
```javascript
// Always recall the copy authority first
const copyAuth = await memory.recall('project-skiin-copy-authority');

// Then recall the gap analysis
const gapAnalysis = await memory.recall('gap-analysis-2025-07-29-landing-page');

// Get implementation tasks
const alignmentTasks = await memory.recall('task-copy-alignment-phases');

// Search for related entities
const copyEntities = await context7.search_nodes('Copy Spec');
```

## Important Notes

1. The copy specification document is the single source of truth
2. No deviations without explicit approval
3. All changes must be documented
4. Translations must be updated simultaneously
5. Test thoroughly before marking complete