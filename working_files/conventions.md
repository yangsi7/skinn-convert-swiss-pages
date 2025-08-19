# Conventions.md v5.6
**Last updated:** 2025-08-19 | **Purpose:** Enterprise-grade coding, documentation, testing, CI/CD guidelines for SKIIN Switzerland
**Default Theme:** S&W Design | **Default Homepage:** LandingPageV2025
**Repository Conformance:** Phase 3b - Documentation Maintenance (Phase 3a Infrastructure COMPLETED ✅)

## 1. Project Structure

### Repository Layout
```
repository/
├── src/                    # Source code
├── working_files/          # Live artefacts (todo.md, planning.md, etc.)
├── docs/                   # All documentation
│   ├── research/          # Research summaries
│   ├── implementation/    # Technical guides
│   ├── design/           # Design system
│   ├── patterns/         # Reusable patterns
│   ├── compliance/       # Legal/regulatory
│   ├── archive/          # Superseded docs (YYYY-MM-DD)
│   └── bugs/             # Bug tracking
└── tests/                # Test files
```

**Rules:** Root clean (essential files only) | Docs in docs/ | Working files in working_files/ | Archive superseded to docs/archive/YYYY-MM-DD/

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

### TypeScript (Enterprise Standards)
- **Strict Configuration Required**: strict: true, noImplicitAny: true, strictNullChecks: true
- Explicit types (no `any`) - 0 tolerance policy
- Meaningful names following domain conventions
- Return types for all exports
- Union types for fixed values
- Advanced type safety: strictFunctionTypes, noImplicitReturns, noFallthroughCasesInSwitch

### React Components
- Pure functional components
- ≤50 lines per component
- Typed props with defaults
- Tailwind + shadcn/ui only
- TanStack Query for server state
- Try/catch async with toast feedback

### Testing Requirements (Enterprise Standards)
- **TDD Mandatory**: Write tests first - no exceptions
- **Coverage Standards**: >80% for logic, >95% for critical paths
- **Visual Regression**: 0.1% threshold with automated CI validation
- **Accessibility**: WCAG 2.1 AA compliance with automated axe-core testing
- **Performance**: Core Web Vitals monitoring (LCP < 2.5s, CLS < 0.1, FID < 100ms)
- **Security**: Automated vulnerability scanning and dependency audits
- **Bug Regression**: All bugs require regression tests before closure

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

### S&W Design Landing Page Colors
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

### Performance Budgets (Enterprise Standards)
- **LCP (Largest Contentful Paint)**: < 2.5s (target: < 2.0s)
- **CLS (Cumulative Layout Shift)**: < 0.1 (target: < 0.05)
- **FID (First Input Delay)**: < 100ms (target: < 50ms)
- **TTI (Time to Interactive)**: < 2s (target: < 1.5s)
- **Bundle Sizes**: main < 200KB, vendor < 500KB, total < 1MB
- **Memory**: Heap size monitoring, no memory leaks
- **Network**: API response times < 500ms, retry logic implemented

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

### Pre-Commit Checklist (Enterprise Standards)
- [ ] **Code Quality**: ESLint, Prettier, TypeScript strict mode passed
- [ ] **Design Compliance**: No hardcoded values, design system adherence
- [ ] **Internationalization**: All 4 languages tested (EN/DE/FR/IT)
- [ ] **Performance**: All budgets met, Lighthouse score > 90
- [ ] **Accessibility**: WCAG 2.1 AA compliance verified
- [ ] **Security**: No vulnerabilities, secrets properly managed
- [ ] **Testing**: All tests pass, coverage requirements met
- [ ] **Documentation**: Updated in same commit as code changes

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
❌ Never commit secrets
❌ Never use `any`
❌ Never ignore errors
❌ Never modify shadcn/ui
❌ Never skip tests
❌ Never hardcode colors
❌ Never create root files
❌ Never leave TODOs
❌ Never merge without docs
❌ Never skip accessibility

## 10. Quick Reference

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