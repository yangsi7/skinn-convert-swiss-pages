# Memory Implementation Guide - Quick Reference
VERSION: 1.0
CREATED: 2025-07-29
PURPOSE: Practical guide for implementing memory and knowledge graph

## Quick Start

### 1. Memory Store Examples

```javascript
// Project Overview
memory.store('project-skiin-overview', {
  name: "SKIIN Switzerland Marketing Website",
  tech_stack: ["Vite", "React 18", "TypeScript 5", "Tailwind CSS"],
  languages: ["EN", "DE", "FR", "IT"],
  current_phase: "Phase 6",
  completion: "85%"
});

// Component Spec
memory.store('component-herosection-spec', {
  layout: "dual-split",
  image: "Father-daughter.png",
  variants: ["default", "original"],
  copy: {
    default: "Most Heart Issues are silent",
    original: "Live Younger, Longer"
  }
});

// Recent Decision
memory.store('decision-2025-07-29-memory-priority', 
  "Prioritized memory implementation to enhance development efficiency"
);
```

### 2. Knowledge Graph Examples

```javascript
// Create entities
context7.create_entities([
  {
    name: "SKIIN Switzerland",
    entityType: "Project",
    observations: ["Medical device website", "85% complete"]
  },
  {
    name: "HeroSection",
    entityType: "Component",
    observations: ["Dual-split layout", "Copy variants implemented"]
  }
]);

// Create relationships
context7.create_relations([
  {
    from: "SKIIN Switzerland",
    to: "Phase 6",
    relationType: "currently_in"
  },
  {
    from: "HeroSection",
    to: "Home Page",
    relationType: "belongs_to"
  }
]);
```

### 3. Recall Patterns

```javascript
// Session start
const projectContext = await memory.recall('project-skiin-*');
const recentDecisions = await memory.recall('decision-2025-07-*');

// Component work
const componentSpec = await memory.recall('component-herosection-spec');
const conventions = await memory.recall('project-skiin-conventions');

// Bug investigation
const recentBugs = await memory.recall('bug-p*');
const componentHistory = await context7.search_nodes('HeroSection');
```

## Memory Naming Conventions

### Project Level
- `project-[name]-overview` - High-level summary
- `project-[name]-architecture` - Technical details
- `project-[name]-conventions` - Standards and rules

### Development
- `phase-[letter]-summary` - Phase outcomes
- `component-[name]-spec` - Component details
- `feature-[name]-implementation` - Feature specs
- `bug-[severity]-[id]-details` - Bug information

### Decisions & Research
- `decision-[date]-[topic]` - Important decisions
- `research-[topic]-findings` - Research outcomes
- `plan-[date]-snapshot` - Planning states

### Temporal
- `recent-changes-[date]` - Daily changes
- `graph-snapshot-[date]` - Graph backups
- `performance-[date]-metrics` - Performance data

## Integration Points

### 1. Task Completion
```javascript
// After completing a task
memory.store(`task-${taskId}-outcome`, {
  completed: new Date(),
  duration: taskDuration,
  lessons: "Key learnings...",
  nextSteps: ["task-123", "task-124"]
});

context7.add_observations([{
  entityName: taskId,
  contents: ["Completed", `Duration: ${taskDuration}`]
}]);
```

### 2. Bug Discovery
```javascript
// When finding a bug
memory.store(`bug-${severity}-${bugId}-details`, {
  discovered: new Date(),
  component: affectedComponent,
  symptoms: "Description...",
  reproduction: "Steps..."
});

context7.create_entities([{
  name: bugId,
  entityType: "Bug",
  observations: [severity, affectedComponent]
}]);

context7.create_relations([{
  from: bugId,
  to: affectedComponent,
  relationType: "affects"
}]);
```

### 3. Design Decision
```javascript
// When making a design decision
memory.store(`decision-${date}-${topic}`, {
  decision: "What was decided",
  rationale: "Why this approach",
  alternatives: ["option1", "option2"],
  impact: "Expected outcomes"
});

context7.add_observations([{
  entityName: affectedComponent,
  contents: [`Design decision: ${decision}`]
}]);
```

## Maintenance Tasks

### Daily
1. Store planning snapshot: `memory.store('plan-[date]-snapshot', planningContent)`
2. Log significant decisions
3. Update task outcomes

### Weekly
1. Prune outdated memories: `memory.forget('old-key')`
2. Create graph snapshot: `memory.store('graph-snapshot-[date]', graphData)`
3. Review and clean relationships

### Monthly
1. Audit memory usage
2. Optimize frequently accessed memories
3. Archive completed phase data

## Common Queries

### Get project status
```javascript
const overview = await memory.recall('project-skiin-overview');
const currentPhase = await memory.recall('phase-6-summary');
const recentWork = await memory.recall('recent-changes-*');
```

### Find related components
```javascript
const nodes = await context7.search_nodes('Component');
const heroRelations = await context7.open_nodes(['HeroSection']);
```

### Track decisions
```javascript
const decisions = await memory.recall('decision-*');
const rationales = decisions.map(d => d.rationale);
```

## Best Practices

1. **Keep memories focused** - One concept per memory entry
2. **Use consistent naming** - Follow the conventions above
3. **Add timestamps** - Include dates in temporal data
4. **Link entities** - Always create relationships in the graph
5. **Regular cleanup** - Prune outdated information
6. **Document changes** - Update event-stream.md

## Troubleshooting

### Memory not found
- Check key naming convention
- Verify memory was stored
- Try wildcard search: `memory.recall('*keyword*')`

### Graph query slow
- Use specific entity types
- Limit search scope
- Consider creating indices

### Stale information
- Check last update timestamp
- Verify automated triggers working
- Manual refresh if needed

This guide provides practical patterns for implementing the memory and knowledge graph system. Refer to the full implementation plan for detailed specifications.