# Conventions.md v5.5
**Last updated:** 2025-08-23 | **Purpose:** Coding, documentation, testing, CI/CD guidelines for SKIIN Switzerland
**Default Theme:** Swiss Healthcare Design v2.0.0 | **Default Homepage:** LandingPageV2025

## 1. Project Structure

### Repository Layout
```
repository/
├── src/                    # Source code
├── context/                # Working context files ONLY
├── docs/                   # All documentation
│   ├── api/               # API specifications
│   ├── architecture/      # System design
│   ├── design/           # Design system
│   ├── reports/          # Analysis reports
│   ├── archive/          # Superseded docs (YYYY-MM-DD)
│   └── bugs/             # Bug tracking
├── public/
│   └── assets/
│       ├── images/       # ALL images go here
│       ├── videos/       # Video files
│       └── icons/        # SVG icons
├── supabase/              # Database files
│   ├── migrations/       # SQL migrations
│   ├── schemas/         # Schema definitions
│   └── scripts/         # Database scripts
└── tests/                # Test files
```

**STRICT RULES:** 
- Root: ≤15 config files ONLY (package.json, tsconfig.json, etc.)
- NO images/SQL/logs in root - EVER
- NO working_files/ directory - use context/
- NO duplicate files across directories
- Archive superseded to archive/YYYY-MM-DD/

### Naming Conventions
- **Docs:** YYYY-MM-DD-name.md (kebab-case)
- **Components:** PascalCase (≤50 lines)
- **Hooks:** camelCase with 'use' prefix
- **Services:** lowercase.service.ts
- **Types:** PascalCase interfaces

### Source Structure
```
src/
├── components/
│   ├── ui/          # Base primitives
│   ├── features/    # Feature components
│   ├── layout/      # Layout components
│   └── progressive/ # Animated components
├── pages/           # Route components
├── hooks/           # Custom hooks
├── services/        # API/business logic
├── translations/    # i18n files
├── types/           # TypeScript types
└── utils/           # Utilities
```

## 2. Coding Standards

### TypeScript
- Explicit types (no `any`)
- Meaningful names
- Return types for exports
- Union types for fixed values
- Strict mode enabled

### React Components
- Pure functional components
- ≤50 lines per component (STRICTLY ENFORCED for atomic components)
- Typed props with defaults
- Tailwind + shadcn/ui + Swiss Healthcare Design System v2.0.0
- TanStack Query for server state
- Try/catch async with toast feedback

### Atomic Component Architecture ✅ IMPLEMENTED
**Component Hierarchy (Brad Frost Atomic Design)**
- **Atoms (≤50 lines):** Single-purpose UI elements (buttons, inputs, labels)
- **Molecules (≤75 lines):** Simple combinations of atoms (form fields, cards)
- **Organisms (≤100 lines):** Complex UI sections (forms, navigation, headers)
- **Templates:** Page layouts and structure
- **Pages:** Specific instances of templates with real content

**Swiss Healthcare Atomic Components:**
- `StageHeader.tsx` (27 lines) - Stage navigation and progress indication
- `StageFooter.tsx` (31 lines) - Form progression controls (Next/Back buttons)
- `SymptomSelector.tsx` (43 lines) - Medical symptom selection interface
- `FamilyHistoryQuestion.tsx` (39 lines) - Family history data collection
- `EligibilityStatusAlert.tsx` (29 lines) - Status notifications and alerts
- `NextStepsCard.tsx` (41 lines) - Post-completion guidance display

### Testing Requirements
- **Backend**: TDD mandatory, unit tests with Vitest
- **Frontend**: MCP Puppeteer for critical flows only
- **Coverage**: 80% for services, 70% for utils
- **No Scripts**: Agents use MCP tools, not test scripts
- **Results**: Archived to /archive/tests/ (ephemeral)

## 3. Documentation Lifecycle

### Stages
1. **Creation:** ISO date prefix, proper category, memory.store summary
2. **Indexing:** Update doc-ref.md immediately, create graph relations
3. **Updating:** Same commit as code, increment version, log in event-stream
4. **Archival:** 7+ days unused → /docs/archive/YYYY-MM-DD/

### Working Files
- **todo.md:** Atomic tasks, hierarchical lists, immediate updates
- **planning.md:** Detailed phases, dependencies, memory.store changes
- **event-stream.md:** One-line entries, chronological, all events
- **doc-ref.md:** Accurate index with path/status/version
- **conventions.md:** This file, increment version on update

### Memory & Graph
```typescript
// Memory keys: category-item-version
memory.store('doc-cleanup-v1', summary);
memory.recall('recent-changes-*');

// Graph entities: namespace:name
context7.create_entities([{
  id: 'component:HeroSection',
  type: 'component',
  properties: { version: '1.0' }
}]);
```

## 4. Design System

### Theme System
- **Default Theme:** S&W Design (streamlined colors, benefit-led)
- **Original Theme:** Medical Blue (classic clinical credibility)
- **Professional Teal:** Modern healthcare innovation
- **Swiss Innovation:** Precision and heritage
- **Soft Blue-Teal:** Gentle wellness approach
- **Myant Violet:** Bold innovation with violet accents

### Swiss Healthcare Design System Colors (v2.0.0) ✅ ACTIVE
**Primary Implementation for Eligibility Questionnaire & Medical Components**
- **Deep Navy (#004C96):** `bg-[#004C96]` - Primary buttons, headers, focus states (7.5:1 contrast ratio)
- **Light Blue (#5298F2):** `hover:bg-[#5298F2]` - Hover states, interactive elements (6.8:1 contrast)
- **Violet Accent (#5549A6):** `bg-[#5549A6]` - Accent highlights, special badges (5.8:1 contrast)
- **Beige Background (#EEE8E1):** `bg-[#EEE8E1]` - Soft backgrounds, card containers
- **Charcoal Text (#6B7280):** `text-[#6B7280]` - Secondary text, descriptions
- **Pure Black (#0D0D0D):** `text-[#0D0D0D]` - Primary text, high contrast elements

### S&W Design Landing Page Colors (Legacy)
- **Primary Blue (#5298F2):** `bg-lp-primary-blue` - CTAs
- **Purple (#5549A6):** `bg-lp-purple` - Accents and comparison sections
- **Dark Blue (#004C96):** `bg-lp-dark-blue` - Headlines
- **Charcoal (#475259):** `bg-lp-charcoal` - Body text
- **Light Purple (#BCA2F2):** `bg-lp-purple-light` - Light accents
- **Off White (#F2F2F2):** `bg-lp-white` - Backgrounds
- **Black (#0D0D0D):** `bg-lp-black` - Contrast
- **Cream (#EEE8E1):** `bg-lp-cream` - Soft backgrounds

### Core Design Tokens
```css
--color-medical-blue: #1E3A5F;
--color-medical-teal: #00796B;
--spacing-base: 4px;
--font-family: 'IBM Plex Sans';
```

**Rules:** CSS variables only | Mobile-first | Theme-aware | No hardcoded values

## 5. Performance & Security

### Performance Budgets
- LCP < 2.5s
- CLS < 0.1
- FID < 100ms
- TTI < 2s
- Bundle: main < 200KB, vendor < 500KB

### Security
- Treat data as medical/sensitive
- Zod validation
- Environment variables only
- Weekly npm audit
- Document in docs/bugs/

### Accessibility
- WCAG 2.1 AA
- Keyboard navigable
- ARIA labels
- Alt text/transcripts
- axe-core testing

## 6. Git & CI/CD

### Workflow
- Commit: 2-5 related tasks
- PR: Phase/feature complete
- Tests: All passing before commit
- Docs: Updated in same commit

### Branches
```
feature/phase6-landing
fix/p0-homepage-blank
chore/update-deps
```

### Commits
```
feat: implement hero v7.2
fix: form validation
docs: update conventions
test: add unit tests
perf: lazy loading
```

### Pre-Commit Checklist
- [ ] Design compliance (no hardcoded)
- [ ] 4 languages tested
- [ ] Images optimized
- [ ] Performance budgets
- [ ] Accessibility passed

### CI Pipeline
```yaml
name: CI
on: [push, pull_request]
jobs:
  quality:
    steps:
      - Lint
      - TypeCheck
      - Test
      - Build
```

## 7. Testing Patterns

### Unit Tests
```typescript
describe('Component', () => {
  it('validates fields', async () => {
    // Arrange, Act, Assert
  });
});
```

### Visual Regression
```typescript
expect(screenshot).toMatchImageSnapshot({
  failureThreshold: 0.01
});
```

## 8. Navigation & Routes

### Protected Hierarchy
```
/ (Landing - S&W Design) - PROTECTED
├── /original (Home2 - Medical Blue)
├── /solutions
│   ├── /10-day-heart-screening
│   └── /3x-screening
├── /partners
│   ├── /general-practitioners
│   ├── /cardiologists
│   ├── /telemedicine
│   └── /corporate
├── /how-it-works
└── /about
```

### Multi-Language Pattern
```
/[lang?]/[section]/[page]
/de/loesungen/10-tage-herzscreening
/fr/solutions/screening-cardiaque
/it/soluzioni/screening-cardiaco
```

**Rules:** Never rename without approval | Maintain redirects | Test all languages

## 9. Forbidden Patterns

### Code Patterns
❌ Never commit secrets
❌ Never use `any`
❌ Never ignore errors
❌ Never modify shadcn/ui
❌ Never skip tests
❌ Never hardcode colors
❌ Never leave TODOs
❌ Never merge without docs
❌ Never skip accessibility

### File Organization Violations
❌ NEVER place images in root (→ public/assets/images/)
❌ NEVER place SQL files in root (→ supabase/)
❌ NEVER commit log files (→ archive/logs/)
❌ NEVER create working_files/ (→ context/)
❌ NEVER duplicate context files
❌ NEVER leave test results unarchived
❌ NEVER scatter assets randomly
❌ NEVER ignore file location rules


## 10. Memory Graph Schema

Ontology for using the memory mcp tools to persist information in the knowledge graph. The schema ensures consistency across entities and relations so that all agents can store and retrieve knowledge reliably.

### Entity Types

| Type | Description | Attributes |
| :---- | :---- | :---- |
| **Task** | Represents a unit of work to be completed. | id, name, description, status (pending/in progress/complete), priority, created\_at, updated\_at |
| **Phase** | A high‑level stage in the process lifecycle (Context Gathering, Analysis, etc.). | id, name, order, description |
| **Requirement** | A functional or non‑functional system requirement derived from user goals. | id, name, type (functional/nonfunctional), acceptance\_criteria, status |
| **File** | Any document or source code file. | id, path, description, version, status (draft/review/approved/delivered/archived) |
| **Agent** | A subagent or orchestrator in the system. | id, name, domain, model |
| **Workflow** | A predefined sequence of subagent calls for a common scenario. | id, name, description |
| **Concept** | An abstract idea or pattern identified during brainstorming or research. | id, name, description |
| **Document** | A formal piece of documentation (e.g. plans, requirements, research reports). | id, path, title, status, version |
| **Plan** | A collection of tasks and their dependencies describing how to achieve a goal. | id, name, description, created\_at |
| **Bug** | A defect uncovered during testing. | id, summary, severity, status |
| **Review** | A multi‑panel review session and its outputs. | id, scope, date, summary |
| **Lesson** | A reflection or insight captured after a phase or milestone. | id, summary, impact |

Additional entity types may be defined as needed. All entities should have a concise, specific name (≤5 words) and only be created when there is supporting evidence in the context or event logs.

### Relation Types

| Relation | Direction | Description |
| :---- | :---- | :---- |
| **depends\_on** | Task → Task | Task A cannot start until Task B finishes. |
| **belongs\_to** | Task/Document → Phase/Plan | Links a task or document to its parent phase or plan. |
| **assigned\_to** | Task → Agent | Indicates which agent is responsible for a task. |
| **created\_by** | Entity → Agent | Records which agent created or authored an entity (task, document, requirement). |
| **implements** | Task → Requirement | Specifies that a task implements or satisfies a requirement. |
| **uses** | Task/Agent → Tool/Component | Indicates that a task or agent uses a specific tool, library or component. |
| **part\_of** | Concept → Idea/Plan | Associates a concept with a larger idea or plan. |
| **relates\_to** | Entity ↔ Entity | Generic association when no specific relation fits; provide a description. |
| **precedes** | Task/Phase → Task/Phase | Indicates order of execution. |
| **succeeds** | Task/Phase → Task/Phase | Opposite of precedes. |
| **same\_as** | Entity ↔ Entity | Identifies duplicate entities that should be merged. |

Additional relations can be added, but names and semantics should be documented here. Relations should be directional and link distinct entity types when possible.

### Validation Procedure

When creating or updating entities or relations:

1. Verify that the entity type and relation type are defined in this schema. If you need a new type, update this file first.

2. Ensure entity names are concise and unique; avoid synonyms.

3. Confirm that evidence exists in the context or event stream to justify the entity or relation. Do not create speculative nodes.

4. Use the memory service (memory.create\_entities, memory.create\_relations) to persist nodes and edges. Validation should run automatically via the Memory‑Manager subagent.

5. If the Memory‑Manager detects a schema violation, correct the entity or relation before proceeding. Log the incident in event-stream.md.

### Schema Evolution

This schema is a living document. When new domains or patterns emerge, propose additions via tasks and update this file. Increment the version number (e.g. 1.0 → 1.1) at the top of the file when making significant changes. Archive older versions in docs/archive/ and update references in context/doc-ref.md.


## 11. Quick Reference

### Commands
```bash
npm run dev          # Dev server
npm run build        # Production
npm run lint         # ESLint
npm run typecheck    # TypeScript
npm run test         # Tests
npm audit            # Security
```

### Templates
```typescript
// Component
export function Component({ className }: Props) {
  return <div className={cn('base', className)} />;
}

// Hook
export function useHook() {
  const [state, setState] = useState();
  return { state };
}

// Service
export const service = {
  async fetch(): Promise<Data> {
    return api.get('/endpoint');
  }
};
```

### Memory Patterns
```typescript
// Store: category-item-version
memory.store('task-001-outcome', data);
memory.store('bug-p0-001', details);

// Recall
memory.recall('project-*');
memory.recall('recent-changes-*');

// Graph
context7.create_entities([entity]);
context7.create_relations([relation]);
```



---
Update VERSION & log changes in event-stream.md when modifying this file.
