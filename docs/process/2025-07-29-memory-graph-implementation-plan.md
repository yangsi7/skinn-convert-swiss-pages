# Memory Graph Implementation Plan - SKIIN Switzerland
VERSION: 1.0
CREATED: 2025-07-29
PURPOSE: Strategic plan for implementing persistent memory and knowledge graph system

## Executive Summary

This plan outlines the systematic implementation of memory persistence and knowledge graph structures for the SKIIN Switzerland project. The goal is to create a comprehensive context system that enhances development efficiency and maintains project knowledge across sessions.

## Implementation Phases

### Phase 1: Core Memory Entries (2 hours)

#### 1.1 Project Overview Memories
```
Key: project-skiin-overview
Content: {
  "name": "SKIIN Switzerland Marketing Website",
  "description": "Medical device marketing site with multi-language support",
  "tech_stack": ["Vite", "React 18", "TypeScript 5", "Tailwind CSS", "shadcn/ui"],
  "languages": ["EN", "DE", "FR", "IT"],
  "current_phase": "Phase 6 - Landing Page Improvement",
  "completion": "85% overall"
}

Key: project-skiin-architecture
Content: {
  "frontend": "Vite + React + TypeScript",
  "styling": "Tailwind CSS + shadcn/ui + CSS variables",
  "routing": "React Router DOM 6 with locale prefixes",
  "state": "TanStack Query + Context API",
  "forms": "Zod + React Hook Form",
  "testing": "Vitest + Playwright + Lighthouse"
}

Key: project-skiin-conventions
Content: {
  "components": "Atomic design, 50 LOC limit, own files",
  "typescript": "Strict mode always",
  "styling": "CSS variables for colors, 8pt grid",
  "documentation": "ISO date prefixes, 7-day archival",
  "testing": "80% coverage target, visual regression"
}
```

#### 1.2 Phase Summaries
```
Key: phase-a-summary
Content: "Documentation cleanup completed 2025-07-25. Aligned to v5.0 process, archived 19 files, created knowledge graph foundation."

Key: phase-b-summary
Content: "V7.2 copy integration completed 2025-07-25. Implemented all components, fixed routing, updated to evidence-based messaging."

Key: phase-c-summary
Content: "Working files organization completed 2025-07-28. Fixed event-stream format, updated doc-ref, added navigation docs."

Key: phase-d-summary
Content: "Landing page V7.2 85% complete. Created 8 new components, integrated 20+ visual assets, met critical requirements."

Key: phase-6-summary
Content: "Landing page improvement 35% complete. Hero redesign done, copy variants implemented, statistics consolidated."
```

### Phase 2: Knowledge Graph Structure (3 hours)

#### 2.1 Core Entities
```javascript
// Project root
{
  name: "SKIIN Switzerland",
  entityType: "Project",
  observations: [
    "Medical device marketing website",
    "4-language support (EN/DE/FR/IT)",
    "V7.2 implementation in progress",
    "85% overall completion"
  ]
}

// Phase entities
{
  name: "Phase A - Documentation Cleanup",
  entityType: "Phase",
  observations: ["Completed 2025-07-25", "Duration: 1 day"]
}

// Component entities (sample)
{
  name: "HeroSection",
  entityType: "Component",
  observations: [
    "Dual-split layout implemented",
    "Copy variants system active",
    "Father-daughter.png integrated"
  ]
}
```

#### 2.2 Relationship Mappings
```javascript
// Project relationships
Project "SKIIN Switzerland" -> has -> Phase "A"
Project "SKIIN Switzerland" -> has -> Phase "B"
Project "SKIIN Switzerland" -> has -> Phase "C"
Project "SKIIN Switzerland" -> has -> Phase "D"
Project "SKIIN Switzerland" -> has -> Phase "6"

// Component relationships
Component "HeroSection" -> uses -> Hook "useTranslation"
Component "HeroSection" -> displays -> Asset "Father-daughter.png"
Component "HeroSection" -> belongs_to -> Page "Home"

// Documentation relationships
Document "CLAUDE.md" -> references -> Document "planning.md"
Document "planning.md" -> tracks -> Phase "D"
Document "todo.md" -> contains -> Task "6.8"

// Feature relationships
Feature "Multi-language" -> supports -> Language "EN"
Feature "Multi-language" -> supports -> Language "DE"
Feature "Multi-language" -> supports -> Language "FR"
Feature "Multi-language" -> supports -> Language "IT"
```

### Phase 3: Component & Feature Memories (2 hours)

#### 3.1 Critical Components
```
Key: component-herosection-spec
Content: {
  "variants": ["default", "original"],
  "layout": "dual-split",
  "image": "Father-daughter.png",
  "copy": {
    "default": "Most Heart Issues are silent",
    "original": "Live Younger, Longer"
  }
}

Key: component-navbar-spec
Content: {
  "features": ["language switching", "dropdown menus", "mobile responsive"],
  "routes": 98,
  "languages": 4
}

Key: component-productSection-spec
Content: {
  "benefits": 8,
  "layout": "grid/carousel",
  "images": ["skiin-your-second-skin.png", "wear-skiin-man-band.png"]
}
```

#### 3.2 Feature Implementations
```
Key: feature-routing-implementation
Content: {
  "total_routes": 98,
  "pattern": "/:locale/path",
  "fallbacks": true,
  "protected": ["TabNavigation", "TodayTab"]
}

Key: feature-translation-implementation
Content: {
  "hook": "useTranslation",
  "context": "LanguageContext",
  "files": "/src/translations/",
  "sync_rule": "24 hours"
}
```

### Phase 4: Research & Decisions (2 hours)

#### 4.1 Research Summaries
```
Key: research-v72-requirements
Content: "V7.2 spec requires: 8-benefit product grid, 3 statistics cards, split insurance/pricing, enhanced testimonials, medical advisors showcase."

Key: research-competitor-analysis
Content: "Landing page best practices: hero with emotional appeal, social proof early, clear value proposition, trust signals throughout."

Key: research-performance-targets
Content: "LCP < 2.5s, CLS < 0.1, FID < 100ms, bundle size < 500KB, 95% accessibility score."
```

#### 4.2 Design Decisions
```
Key: decision-hero-layout
Content: "Selected dual-split layout with Father-daughter image for emotional connection. Trust bar and product overlay for credibility."

Key: decision-copy-variants
Content: "Implemented variant system to A/B test messaging. Default: health awareness focus. Original: longevity focus."

Key: decision-component-architecture
Content: "Atomic design with 50 LOC limit ensures maintainability. Wrapper pattern for library components prevents lock-in."
```

### Phase 5: Bug & Issue Tracking (1 hour)

```
Key: bug-p0-001-homepage-blank
Content: {
  "severity": "P0",
  "issue": "Homepage blank in all languages",
  "cause": "Missing problemSolution translations",
  "fix": "Added translations to all language files",
  "date": "2025-07-28"
}

Key: bug-p2-testid-attributes
Content: {
  "severity": "P2",
  "issue": "Missing data-testid attributes",
  "components": ["HeroSection", "Statistics", "Product"],
  "status": "80% complete",
  "remaining": ["ProblemSolution", "Care360"]
}
```

### Phase 6: Automated Memory Patterns (2 hours)

#### 6.1 Memory Update Triggers
1. **On Task Completion**: Store task outcome and lessons learned
2. **On Bug Discovery**: Create bug memory with context
3. **On Design Decision**: Document rationale and alternatives
4. **On Phase Completion**: Summarize achievements and metrics
5. **Daily Snapshot**: Store planning.md and todo.md state

#### 6.2 Recall Patterns
```javascript
// Start of session
memory.recall(['project-skiin-overview', 'phase-6-summary', 'recent-decisions-*'])

// Before component work
memory.recall(['component-[name]-spec', 'convention-component-rules'])

// Bug investigation
memory.recall(['bug-*', 'recent-changes-*'])

// Planning session
memory.recall(['phase-*-summary', 'plan-*-snapshot'])
```

## Implementation Schedule

### Day 1 (Today)
1. Create core project memories (1 hour)
2. Build initial knowledge graph entities (2 hours)
3. Implement phase and component memories (2 hours)
4. Document memory patterns (1 hour)

### Day 2
1. Complete feature and research memories (2 hours)
2. Set up automated memory triggers (2 hours)
3. Test recall patterns (1 hour)
4. Create maintenance procedures (1 hour)

### Day 3
1. Integrate with development workflow (2 hours)
2. Train team on memory usage (1 hour)
3. Monitor and refine (ongoing)

## Success Metrics

1. **Context Retrieval**: < 5 seconds to load relevant context
2. **Coverage**: 100% of critical components documented
3. **Accuracy**: 95% of recalled information is current
4. **Usage**: Memory system used in 80% of development sessions
5. **Maintenance**: < 30 minutes daily for updates

## Maintenance Procedures

### Daily
- Update task memories on completion
- Store planning snapshots
- Log significant decisions

### Weekly
- Review and prune outdated memories
- Update graph relationships
- Archive completed phase data

### Monthly
- Full memory audit
- Performance optimization
- Usage analysis and improvements

## Integration Points

1. **Development Workflow**
   - Load context at session start
   - Update memories on task completion
   - Store decisions during planning

2. **CI/CD Pipeline**
   - Trigger memory updates on deployment
   - Store performance metrics
   - Log release information

3. **Documentation System**
   - Sync with doc-ref.md
   - Update on document changes
   - Maintain consistency

This implementation plan provides a systematic approach to building a comprehensive memory and knowledge graph system that will significantly enhance development efficiency and maintain critical project context.