# working_files/conventions.md

**Version:** 5.2 – **Last updated:** 2025‑07‑28   **Purpose:** Provide comprehensive, up‑to‑date guidelines for coding, documentation, memory & knowledge‑graph management, project organisation, testing, security, performance, accessibility, code review and CI/CD for the SKIIN Switzerland marketing site.

This conventions file supersedes all previous versions. It aligns with the universal process v5.x and reflects our commitment to clear documentation, maintainable code and robust processes. Always consult this file before adding new code, documentation or tasks. If you discover new patterns or best practices, update this file and log the change in event‑stream.md. Archive old conventions files in docs/archive/ with an ISO date prefix.

## 1\. Project structure & file organisation

### 1.1 Repository layout

Use the following top‑level structure to organise the project. Keep the root directory clean: only essential files (README.md, CLAUDE.md, configuration files) should live there. All documentation belongs in docs/; all live artefacts belong in working\_files/.

repository/  
├── src/             \# Source code (components, pages, hooks, services)  
├── working\_files/   \# Live development artefacts (see below)  
├── docs/            \# Documentation (specs, guides, reports, patterns)  
│   ├── research/    \# Research summaries and analyses  
│   ├── implementation/  \# Technical guides (translation, analytics, API contracts)  
│   ├── design/      \# Design tokens, guidelines, version history  
│   ├── patterns/    \# Reusable patterns, snippets, templates  
│   ├── compliance/  \# Regulatory and legal documents  
│   ├── archive/     \# Archived docs (by date)  
│   ├── bugs/        \# Bug logs, active issues and fix plans  
│   └── …            \# Other categorised docs  
└── tests/           \# Unit, integration and end‑to‑end tests

**Key rules**

* **Root cleanliness:** Only essential project files belong in the root. All documentation goes in docs/; all working files go in working\_files/.

* **Working files:** Live artefacts used by the agent loop. These include todo.md, planning.md, conventions.md, event‑stream.md and doc‑ref.md. *Bug logs and fix plans are no longer stored in working\_files/; they reside under docs/bugs/ to keep the working directory lean.* Do not add additional files here unless absolutely necessary; instead create a document in docs/ and link it in doc‑ref.md.

* **Archive:** Superseded documents and working files must be moved to docs/archive/YYYY‑MM‑DD/. Include a README.md describing the contents and reasons for archival. Update doc‑ref.md to point to the new location and mark the status as Archived.

### 1.2 File naming

* **Documentation:** Use ISO date prefixes: YYYY‑MM‑DD-name.md. Keep names descriptive and kebab‑cased. Place docs in appropriate subfolders (research/, implementation/, design/, reports/, etc.).

* **Components:** Use PascalCase for React components (HeroSection.tsx, EligibilityForm.tsx). Limit each component file to one component and ≤ 50 lines when possible. Use index.ts barrels to re‑export groups of components.

* **Hooks:** Use camelCase prefixed with use (useTranslation.ts, useEligibility.ts). Place custom hooks in src/hooks/.

* **Services:** Use lowercase with .service.ts suffix (eligibility.service.ts) to encapsulate API calls or business logic. Put them in src/services/.

* **Types:** Use PascalCase interfaces and type aliases. Store shared types in src/types/.

### 1.3 Directory structure

Adopt a feature‑based structure for the src/ directory:

src/  
├── components/  
│   ├── ui/          \# Base UI primitives (shadcn/ui wrappers)  
│   ├── features/    \# Feature‑specific components (EligibilityForm, PricingSection)  
│   ├── layout/      \# Layout components (Navbar, Footer)  
│   └── progressive/ \# Animated and progressive components  
├── pages/           \# Top‑level route components  
├── hooks/           \# Custom hooks  
├── services/        \# API and business logic  
├── translations/    \# Per‑language translation files  
├── types/           \# TypeScript types  
└── utils/           \# Utility functions

## 2 Coding & Testing Conventions

### 2.1 TypeScript Best Practices

* Always use explicit types and interfaces; avoid any and implicit any.

* Use meaningful variable and function names; avoid abbreviations.

* Explicitly define return types for exported functions.

* Use enums or union types for fixed sets of values (e.g. type Language \= 'en' | 'de' | 'fr' | 'it').

* Enable strict mode in tsconfig.json and address all warnings.

### 2.2 React Component Patterns

* Keep components **pure** and functional; avoid side effects in render functions.

* Limit components to ≤ 50 lines; break larger components into smaller pieces.

* Use typed props and default values; define prop interfaces adjacent to the component.

* Use Tailwind utility classes and shadcn/ui primitives; avoid inline styles.

* Manage server state with TanStack Query; manage local state with hooks (useState, useReducer) or a small store (Zustand).

* Wrap asynchronous calls in try/catch and provide error feedback via toast notifications.

### 2.3 Testing

* **Test‑driven generation:** write failing tests first, then implement the code to make them pass. Use Vitest for unit tests and integrate with React Testing Library for components.

* Cover all business logic (hooks, services) with unit tests (\> 80 % coverage) and write integration tests for key flows (eligibility calculation, form submissions). Use end‑to‑end tests with Puppeteer/Playwright for critical user journeys.

* Record visual snapshots using puppeteer\_screenshot and verify them against baselines to catch UI regressions. Set a pixel‑diff threshold of **0.1 %**.

* Include tests for accessibility using axe‑core (puppeteer\_evaluate with axe scripts). Fail tests when WCAG 2.1 AA violations are detected.

* Add regression tests for each bug fixed. Document the bug and its fix in docs/bugs/bugs.md and docs/bugs/bug\_fix\_planning.md, and ensure the corresponding tasks are updated in todo.md.

## 3 Documentation & Process Conventions

### 3.1 Documentation Lifecycle

* **Creation:** Whenever you perform research, make a decision or implement a feature, document it in a dedicated file under docs/ (e.g. docs/research/2025-07-25-i18n-gap-analysis.md). Use clear headings and paragraphs; avoid bullet lists for long explanations (see the universal process writing rules).

* **Indexing:** After creating or moving a document, add an entry to working\_files/doc-ref.md with its path, description and status (Active). If the document supersedes another, update the superseded document’s status to *Superseded* and archive it.

* **Updating:** When a document or convention is updated, record the change in the same commit as any related code change. Update doc-ref.md and the knowledge graph to reflect the new version. Use memory.store to summarise the rationale behind the change.

* **Archival:** Superseded documents must be moved to docs/archive/YYYY-MM-DD/. Create a README.md in that folder explaining what was archived and why. Update doc-ref.md to point to the archive location and set status to Archived.

### 3.1.1 Enhanced Documentation Lifecycle Process (v5.0)

The documentation lifecycle integrates with the universal process v5.0, incorporating memory persistence and knowledge graph management for better context retention across sessions.

#### Lifecycle Stages

1. **Creation Stage**
   - Use ISO date prefix: `YYYY-MM-DD-descriptive-name.md`
   - Place in correct category under `/docs/`
   - Include metadata header with version, status, compliance
   - Store summary: `memory.store('doc-[name]-v[n]', summary)`
   - Create graph entity: `context7.create_entities({type: 'document', id: 'doc:[name]'})`

2. **Indexing Stage** 
   - Update `doc-ref.md` immediately (same session)
   - Include path, description, status, version
   - Create graph relationships to related components/features
   - Update "Last-Review" date in doc-ref.md

3. **Updating Stage**
   - Updates occur in same commit as code changes
   - Increment version number in document
   - Update doc-ref.md with new version
   - Log in event-stream.md as Documentation event
   - Store rationale: `memory.store('doc-[name]-update-[date]', rationale)`

4. **Archival Stage**
   - Trigger: Document superseded or unused for 7+ days
   - Create `/docs/archive/YYYY-MM-DD/` directory
   - Move documents with README explaining archive
   - Update doc-ref.md status to "Archived"
   - Create graph relation: `doc → archived_to → archive`

#### Integration with Agent Loop

In Step 13 of the agent lifecycle (Document Auto-Update):
- Check if code changes require documentation updates
- Update affected documentation in same commit
- Index new documents in doc-ref.md
- Store summaries in memory
- Update knowledge graph with new entities/relations

#### Memory & Graph Patterns

```typescript
// Document creation
memory.store('doc-cleanup-plan-2025-07-28', JSON.stringify({
  type: 'plan',
  phase: 'C.3',
  tasks: ['archive', 'relocate', 'create-masters'],
  estimatedTime: '3 hours'
}));

// Create document entity
context7.create_entities([{
  id: 'doc:cleanup-plan-2025-07-28',
  type: 'document',
  name: 'Documentation Cleanup Plan',
  properties: {
    status: 'Active',
    version: '1.0',
    path: '/docs/inventory/cleanup-plan.md'
  }
}]);

// Link relationships
context7.create_relations([
  { from: 'doc:cleanup-plan-2025-07-28', to: 'phase:C3', type: 'implements' },
  { from: 'doc:v7-copy', to: 'doc:v6-copy', type: 'supersedes' }
]);
```

### 3.2 Working Files Maintenance

* **todo.md:** Keep tasks atomic and actionable. Each entry should be check‑listed. Use hierarchical lists for subtasks. Update tasks immediately after completion. Remove tasks only when completed or intentionally cancelled.

* **planning.md:** Maintain a detailed, numbered plan. Reflect the current phase and anticipate next phases. Record dependencies, assumptions and risks. Update this file whenever the plan changes and summarise changes via memory.store.

* **event-stream.md:** Log every action, observation, plan, bug, performance test, reflection, memory store or graph update. Use timestamps and event types. Append entries in chronological order. Do not omit errors or failed attempts.

* **doc-ref.md:** Keep this index accurate. Each document entry should include: path (relative to project root), brief description, status (Active, Superseded, Archived, To Do) and optional notes. Maintain categories (Specifications, Guides, Analysis & Reports, Process Docs, Working Files, Archive, To Do). Update immediately after moving or creating documents.

* **conventions.md:** This file itself. Update it when new patterns emerge. When updating, increment the VERSION and LAST UPDATED fields, summarise changes in event-stream.md and update doc-ref.md if necessary.

### 3.3 Naming & Context Keys

* **Memory keys:** Use structured keys when calling memory.store (e.g. summary-phase-A1, plan-doc-cleanup, bug-2025-07-25-route-404). Avoid using natural language sentences as keys; keep them short and descriptive.

* **Graph entities:** Use namespaced IDs (e.g. doc:filename, component:EligibilityForm, plan:PhaseA1, file:working\_files/todo.md). Use context7.create\_entities to create entities with properties (name, path, status).

* **Graph relations:** Use verbs (e.g. supersedes, archived\_to, relates\_to, references, hasStatus). Example: doc:2025-07-24-copy-research-v7 → supersedes → doc:2025-01-22-copy-v2.

### 3.4 Writing Style

* Write explanatory content in coherent paragraphs. Only use bullet lists for short lists of items or step‑by‑step instructions.

* Cite external sources with footnotes or in‑text references (use the citation format from the universal process if necessary). Provide links at the end of the document.

* For long documents, use headings (\#, \#\#, \#\#\#) to structure content. Provide an executive summary at the top when appropriate.

## 4 Memory & Knowledge‑Graph Usage

### 4.1 Memory MCP (memory)

* Use memory.store(key, chunk) to persist important information across sessions. Chunks should be ≤ 1 KB. Keys should be descriptive and versioned if necessary (doc-ref-v1, plan-cleanup-v1).

* Retrieve context with memory.recall(key) at the start of a session. If multiple keys apply, recall them all and summarise for quick access.

* Remove obsolete entries with memory.forget(key) when they are no longer needed. Keep memory tidy.

### 4.2 Knowledge‑Graph MCP (context7)

* Create entities for each significant document, working file, plan, phase, component, feature, bug or research summary using context7.create\_entities.

* Define relationships between entities (e.g. file:working\_files/planning.md → contains → plan:PhaseA). Use verbs that make the relation clear.

* Add observations using context7.add\_observations to attach additional metadata (e.g. author, lastUpdated, status, category).

* Search the graph with context7.search\_nodes before creating new entities to avoid duplication.

* Delete entities or relations carefully using the appropriate delete functions only when they are truly obsolete.

## 5 Performance, Security & Accessibility

### 5.1 Performance

* **Budgets:** Define budgets for Largest Contentful Paint (LCP \< 2.5 s), Cumulative Layout Shift (CLS \< 0.1), Time To Interactive (TTI \< 2 s) and API latency (\< 200 ms). Document budgets in planning.md and monitor them via Lighthouse tests.

* **Optimisation:** Use code splitting, lazy loading and memoisation to optimise performance. Optimise images using Vite’s asset pipeline and set the priority flag appropriately. Use Puppeteer for performance measurements during tests.

### 5.2 Security

* Treat all user data as **sensitive** (medical). Use Supabase Row Level Security (RLS) for any database. Validate inputs with Zod; sanitise outputs. Never commit secrets (API keys) to the repository; use environment variables.

* Run npm audit weekly and flag high/critical vulnerabilities in todo.md. Use the package-version MCP to check for outdated dependencies and plan upgrades in a separate branch. Document security policies in docs/compliance/.

### 5.3 Accessibility

* Follow WCAG 2.1 AA guidelines: high contrast, keyboard navigability, proper semantic elements, ARIA labels. Use axe‑core to test.

* Ensure interactive components (buttons, forms, modals) are accessible: include appropriate labels, focus management and error feedback.

* Provide alt text for images and transcripts for videos. Use tabIndex to control focus order.

## 6 Code Review, CI/CD & GitHub Integration

### 6.1 Code Review

* **Self‑review:** Use linters (ESLint, Prettier) and type checkers before committing. Run tests locally. Ensure documentation is updated for any change.

* **Peer review:** For each merge request, request a peer review via GitHub. Provide a summary of changes and link to the relevant tasks and documentation. Address feedback thoroughly.

* **AI review:** Use the expert\_reflection\_module from the universal process to evaluate requirements, architecture, design, UX, performance, security and quality. Document reflections in event-stream.md and address any critical issues before merging.

### 6.2 CI/CD

* Configure GitHub Actions to run on push and pull request events. The pipeline should run linting, type checking, unit tests, integration tests, accessibility tests, performance budget checks and build. Only allow merges when the pipeline passes.

* For deployments, use Netlify or Vercel. Configure environment variables securely. Use Supabase migrations and edge functions in the CI pipeline when integrating the backend.

* Use versioned releases and semantic versioning for deployments. Tag releases in Git and document them in docs/deployment/release-notes.md.

### 6.3 Git & Branching

* Use feature branches prefixed by type (feature/, fix/, chore/). Example: feature/phase-a-cleanup, fix/docs-broken-link.

* Write descriptive commit messages following **conventional commits** (feat:, fix:, docs:, etc.). Include a brief description and, if relevant, reference the task number.

* Rebase onto the latest main before merging. Avoid large merge commits; prefer fast‑forward merges when possible.

## 7 Forbidden Patterns

* **Never commit secrets** – Do not hardcode API keys or credentials. Use environment variables and .env.\* files ignored by Git.

* **Never use any** – Always type your variables. If you must circumvent typing, document why and plan to remove it.

* **Never ignore errors** – Always handle exceptions and provide user feedback. Log errors for debugging.

* **Never modify third‑party components directly** – For shadcn/ui or protected components, wrap them in custom components to apply styling or behaviour.

* **Never create files in root** – All new documentation must live in docs/; all working artefacts must live in working\_files/.

* **Never leave documentation stale** – Any change to code or process must include a corresponding documentation update.

## 8 Project Setup Guide (Vite \+ React \+ TypeScript \+ Tailwind \+ shadcn/ui)

### Development Environment Setup

\# 1\. Ensure Node.js LTS (≥ 18\) and npm are installed

\# 2\. Install dependencies  
npm install

\# 3\. Start development server (Vite on localhost:5173)  
npm run dev

\# 4\. Copy environment variables  
cp .env.example .env.local

\# 5\. Run quality checks  
npm run lint && npm run typecheck && npm run test

\# 6\. (Optional) Generate Supabase types when database is integrated  
npx supabase gen types typescript \--project-id "$SUPABASE\_PROJECT\_ID" \> src/types/database.ts

### Adding Dependencies

\# Runtime dependencies  
npm install \<package\>

\# Development dependencies  
npm install \-D \<package\>

\# Check for vulnerabilities after installation  
npm audit

\# Update package-lock.json and document in event-stream.md

## Project Structure

skinn-convert-swiss-pages/  
├── working\_files/              \# Live development artefacts  
│   ├── CLAUDE\_PROCESS.md      \# Universal process v5.x  
│   ├── todo.md                \# Task tracking  
│   ├── planning.md            \# Technical planning  
│   ├── conventions.md         \# This file  
│   ├── event-stream.md        \# Chronological log  
│   └── doc-ref.md             \# Documentation index  
├── docs/                      \# All documentation  
│   ├── research/              \# Research summaries (v7)  
│   ├── implementation/        \# Technical guides  
│   ├── design/                \# Design system docs  
│   ├── architecture/          \# System architecture  
│   ├── analysis/              \# Gap analyses, reports  
│   ├── compliance/            \# Legal & regulatory  
│   ├── bugs/                  \# Bug logs, active issues and fix plans  
│   └── archive/               \# Superseded docs  
├── src/                       \# Source code  
│   ├── components/            \# React components  
│   ├── hooks/                 \# Custom hooks  
│   ├── services/              \# API services  
│   ├── translations/          \# i18n files  
│   ├── types/                 \# TypeScript types  
│   └── utils/                 \# Utility functions  
├── public/                    \# Static assets  
└── tests/                     \# Test files

## Coding Conventions

### TypeScript Best Practices

// ✅ GOOD: Explicit types, meaningful names, error handling  
interface EligibilityResult {  
  isEligible: boolean;  
  reasons: string\[\];  
  recommendations?: string\[\];  
  nextSteps?: string;  
}

export async function checkEligibility(  
  data: EligibilityFormData  
): Promise\<EligibilityResult\> {  
  try {  
    const response \= await api.post('/api/eligibility', data);  
    return response.data as EligibilityResult;  
  } catch (error) {  
    console.error('Eligibility check failed:', error);  
    throw new Error('Failed to check eligibility. Please try again.');  
  }  
}

// ❌ BAD: Any types, poor naming, no error handling  
function getData(id: any) {  
  return fetch('/api/' \+ id);  
}

### React Component Patterns

// ✅ GOOD: Atomic component, typed props, ≤50 LOC  
interface CardProps {  
  title: string;  
  description?: string;  
  children: React.ReactNode;  
  className?: string;  
  variant?: 'default' | 'medical' | 'teal';  
}

export function Card({   
  title,   
  description,   
  children,   
  className,  
  variant \= 'default'   
}: CardProps) {  
  return (  
    \<div className={cn(  
      'rounded-lg shadow-sm p-6 transition-all duration-200',  
      'bg-background border border-border',  
      variant \=== 'medical' && 'border-medical-blue',  
      variant \=== 'teal' && 'border-medical-teal',  
      className  
    )}\>  
      \<h3 className="text-xl font-semibold text-foreground mb-2"\>{title}\</h3\>  
      {description && (  
        \<p className="text-muted-foreground mb-4"\>{description}\</p\>  
      )}  
      {children}  
    \</div\>  
  );  
}

// ❌ BAD: Mixed concerns, untyped, too long  
function MyComponent(props) {  
  // 200+ lines mixing UI, logic, API calls, and side effects  
}

### State Management Patterns

// ✅ GOOD: TanStack Query for server state  
export function useEligibilityCheck() {  
  return useMutation({  
    mutationFn: checkEligibility,  
    onSuccess: (data) \=\> {  
      toast.success('Eligibility check complete');  
      // Store result in memory for recall  
      memory.store('eligibility-result-latest', JSON.stringify(data));  
    },  
    onError: () \=\> {  
      toast.error('Failed to check eligibility');  
    }  
  });  
}

// ✅ GOOD: Zustand for global UI state (if needed)  
interface UIStore {  
  isSidebarOpen: boolean;  
  toggleSidebar: () \=\> void;  
}

// ❌ BAD: Prop drilling, unnecessary global state  
function App() {  
  const \[user, setUser\] \= useState();  
  // Passing through 5+ component levels  
}

### Import Organization

// 1\. React/Framework imports  
import { useState, useEffect } from 'react';  
import { useNavigate } from 'react-router-dom';

// 2\. External libraries  
import { useQuery } from '@tanstack/react-query';  
import { z } from 'zod';

// 3\. UI components  
import { Button } from '@/components/ui/button';  
import { Card } from '@/components/ui/card';

// 4\. Internal imports (absolute paths)  
import { useTranslation } from '@/hooks/useTranslation';  
import { checkEligibility } from '@/services/eligibility.service';

// 5\. Relative imports  
import { formatDate } from './utils';

// 6\. Type imports  
import type { EligibilityResult } from '@/types/eligibility';

## Memory & Knowledge-Graph Conventions (v5.0)

### Memory Storage Patterns

// Key naming convention: category-item-version  
const MEMORY\_KEYS \= {  
  RESEARCH: 'research-{topic}-v{n}',  
  DESIGN: 'design-{component}-v{n}',  
  DECISION: 'decision-{feature}-{date}',  
  PERFORMANCE: 'perf-{page}-{date}',  
  BUG: 'bug-{id}-summary'  
};

// Store chunked information (≤ 1KB)  
async function storeResearchInsight(topic: string, insight: string) {  
  const key \= \`research-${topic}-v1\`;  
  await memory.store(key, insight);

  // Log in event stream  
  logEvent('MemoryStore', \`Stored research insight: ${key}\`);  
}

// Recall with error handling  
async function recallDesignDecision(component: string) {  
  try {  
    const key \= \`design-${component}-v1\`;  
    return await memory.recall(key);  
  } catch (error) {  
    console.warn(\`No design decision found for ${component}\`);  
    return null;  
  }  
}

### Knowledge Graph Patterns

// Entity creation with consistent namespacing  
const ENTITY\_TYPES \= {  
  PAGE: 'page',  
  COMPONENT: 'component',   
  COPY: 'copy',  
  ASSET: 'asset',  
  FEATURE: 'feature'  
};

// Create entities with metadata  
async function createComponentEntity(name: string, metadata: any) {  
  const entity \= {  
    id: \`component:${name}\`,  
    type: ENTITY\_TYPES.COMPONENT,  
    name,  
    properties: {  
      ...metadata,  
      createdAt: new Date().toISOString(),  
      version: '1.0'  
    }  
  };

  await context7.create\_entities(\[entity\]);

  // Create relationships  
  await context7.create\_relations(\[  
    {  
      from: entity.id,  
      to: \`copy:${name}-content\`,  
      type: 'uses'  
    }  
  \]);  
}

// Query before creating to avoid duplicates  
async function findOrCreateEntity(type: string, name: string) {  
  const existing \= await context7.search\_nodes({  
    query: name,  
    type  
  });

  if (existing.length \> 0\) {  
    return existing\[0\];  
  }

  return createEntity(type, name);  
}

## Design System Conventions

### SKIIN Design Tokens

// Core colors \- use CSS variables only  
\--color-medical-blue: \#1E3A5F;    // Deep navy  
\--color-medical-teal: \#00796B;    // Medical teal  
\--color-background: \#FFFFFF;       // White  
\--color-foreground: \#0A0A0A;      // Near black  
\--color-muted: \#6B7280;           // Gray  
\--color-border: \#E5E7EB;          // Light gray

// Spacing \- base unit 4px  
\--spacing-xs: 0.25rem;  // 4px  
\--spacing-sm: 0.5rem;   // 8px  
\--spacing-md: 1rem;     // 16px  
\--spacing-lg: 2rem;     // 32px  
\--spacing-xl: 3rem;     // 48px

// Typography \- IBM Plex Sans  
\--font-family: 'IBM Plex Sans', system-ui, sans-serif;  
\--font-size-sm: clamp(0.875rem, 1.5vw, 1rem);  
\--font-size-base: clamp(1rem, 2vw, 1.125rem);  
\--font-size-lg: clamp(1.25rem, 2.5vw, 1.5rem);

### Component Styling

// ✅ GOOD: Theme-aware with CSS variables  
\<div className="bg-background text-foreground border-border"\>  
  \<h2 className="text-medical-blue"\>Heart Screening\</h2\>  
\</div\>

// ❌ BAD: Hardcoded colors  
\<div style={{ backgroundColor: '\#FFFFFF', color: '\#000000' }}\>  
  \<h2 style={{ color: '\#1E3A5F' }}\>Heart Screening\</h2\>  
\</div\>

### Responsive Design

// ✅ GOOD: Mobile-first responsive  
\<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 md:p-6 lg:p-8"\>  
  \<Card className="w-full"\>  
    \<h3 className="text-lg md:text-xl lg:text-2xl"\>Title\</h3\>  
  \</Card\>  
\</div\>

// ❌ BAD: Fixed widths, desktop-only  
\<div style={{ width: '1200px', padding: '40px' }}\>  
  {/\* Not responsive \*/}  
\</div\>

## Performance & Security Guidelines

### Performance Budgets

// Performance targets (must meet all)  
const PERFORMANCE\_BUDGETS \= {  
  LCP: 2500,      // Largest Contentful Paint \< 2.5s  
  FID: 100,       // First Input Delay \< 100ms  
  CLS: 0.1,       // Cumulative Layout Shift \< 0.1  
  TTI: 2000,      // Time to Interactive \< 2s  
  bundleSize: {  
    main: 200,    // Main bundle \< 200KB  
    vendor: 500   // Vendor bundle \< 500KB  
  }  
};

// Monitor and log violations  
function checkPerformance() {  
  const metrics \= getWebVitals();  
  Object.entries(PERFORMANCE\_BUDGETS).forEach((\[metric, budget\]) \=\> {  
    if (metrics\[metric\] \> budget) {  
      logEvent('PerformanceViolation', \`${metric}: ${metrics\[metric\]}ms (budget: ${budget}ms)\`);  
    }  
  });  
}

### Security Practices

// ✅ GOOD: Input validation with Zod  
const eligibilitySchema \= z.object({  
  age: z.number().min(18).max(120),  
  email: z.string().email(),  
  hasSymptoms: z.boolean()  
});

function validateInput(data: unknown) {  
  return eligibilitySchema.parse(data);  
}

// ✅ GOOD: Environment variables  
const API\_URL \= import.meta.env.VITE\_API\_URL;

// ❌ BAD: Hardcoded secrets  
const API\_KEY \= 'sk\_live\_1234567890';

### Dependency Auditing

\# Weekly security audit checklist  
\- \[ \] Run npm audit  
\- \[ \] Check for critical vulnerabilities  
\- \[ \] Update dependencies in a separate branch  
\- \[ \] Test thoroughly after updates  
\- \[ \] Log any security issues in \`docs/bugs/bugs.md\`  
\- \[ \] Outline remediation steps in \`docs/bugs/bug\_fix\_planning.md\`

## Testing Conventions

### Unit Testing

// Component test example  
describe('EligibilityForm', () \=\> {  
  it('validates required fields', async () \=\> {  
    render(\<EligibilityForm /\>);

    const submitButton \= screen.getByRole('button', { name: /check eligibility/i });  
    await userEvent.click(submitButton);

    expect(screen.getByText(/age is required/i)).toBeInTheDocument();  
  });

  it('submits valid data', async () \=\> {  
    const onSubmit \= vi.fn();  
    render(\<EligibilityForm onSubmit={onSubmit} /\>);

    await userEvent.type(screen.getByLabelText(/age/i), '45');  
    await userEvent.click(screen.getByRole('button', { name: /check/i }));

    expect(onSubmit).toHaveBeenCalledWith({ age: 45 });  
  });  
});

### Accessibility Testing

// Axe-core integration  
describe('Accessibility', () \=\> {  
  it('has no WCAG violations', async () \=\> {  
    const { container } \= render(\<HomePage /\>);  
    const results \= await axe(container);

    expect(results).toHaveNoViolations();  
  });  
});

### Visual Testing

// Puppeteer snapshot test  
test('homepage visual regression', async () \=\> {  
  await page.goto('http://localhost:5173');  
  await page.waitForSelector('\[data-testid="hero-section"\]');

  const screenshot \= await page.screenshot();  
  expect(screenshot).toMatchImageSnapshot({  
    failureThreshold: 0.01, // 1% difference allowed  
    failureThresholdType: 'percent'  
  });  
});

## Bug Tracking Conventions

### Bug Logging Format

\# Bug ID: BUG-2025-07-25-001  
\*\*Severity\*\*: P0 (Critical) | P1 (High) | P2 (Medium) | P3 (Low)  
\*\*Component\*\*: EligibilityForm  
\*\*Description\*\*: Form submits without validation when Enter key pressed  
\*\*Steps to Reproduce\*\*:  
1\. Navigate to eligibility page  
2\. Press Enter without filling fields  
3\. Form submits with empty data

\*\*Expected\*\*: Validation should prevent submission  
\*\*Actual\*\*: Form submits, causing API error

\*\*Environment\*\*: Production, Chrome 120, Desktop  
\*\*First Seen\*\*: 2025-07-25  
\*\*Assigned To\*\*: TBD

### Bug Fix Planning

\# Fix Plan: BUG-2025-07-25-001

\#\# Root Cause  
Event handler on form doesn't prevent default on Enter key

\#\# Solution  
1\. Add onSubmit handler to form element  
2\. Validate before submission  
3\. Add e.preventDefault()

\#\# Testing Required  
\- Unit test for Enter key handling  
\- E2E test for form submission flow  
\- Manual test across browsers

\#\# Rollout Plan  
1\. Fix in feature branch  
2\. Test thoroughly  
3\. Deploy to staging  
4\. Monitor for 24h  
5\. Deploy to production

## CI/CD & GitHub Conventions

### Branch Naming

\# Feature branches  
feature/hero-section-v7-copy  
feature/eligibility-calculator

\# Bug fixes  
fix/form-validation-enter-key  
fix/mobile-navigation-overlap

\# Chores  
chore/update-dependencies  
chore/improve-build-performance

### Commit Messages

\# Conventional commits format  
feat: implement hero section with v7.2 copy  
fix: prevent form submission without validation  
docs: update conventions for v5.0 process  
chore: upgrade to React 18.3  
test: add eligibility form unit tests  
perf: optimize image loading with lazy loading  
refactor: extract card component from home page

\# With scope  
feat(eligibility): add age validation  
fix(navigation): correct mobile menu z-index

### GitHub Actions Pipeline

\# .github/workflows/ci.yml  
name: CI  
on: \[push, pull\_request\]

jobs:  
  quality:  
    runs-on: ubuntu-latest  
    steps:  
      \- uses: actions/checkout@v4  
      \- name: Install  
        run: npm ci  
      \- name: Lint  
        run: npm run lint  
      \- name: Type Check  
        run: npm run typecheck  
      \- name: Test  
        run: npm run test  
      \- name: Build  
        run: npm run build

## Forbidden Patterns

### ❌ NEVER DO THESE

1. **Never commit secrets or API keys**

2. **Never use any type** \- use unknown and narrow

3. **Never ignore errors** \- always handle and log

4. **Never modify shadcn/ui directly** \- wrap components

5. **Never skip tests** for business logic

6. **Never hardcode colors** \- use design tokens

7. **Never create files in root** \- use proper directories

8. **Never leave TODOs** without creating a task

9. **Never merge without updating docs**

10. **Never skip accessibility** validation

## Documentation Triggers

Update documentation when: \- Adding new components → Update component inventory \- Changing design tokens → Update design version history \- Adding API endpoints → Update API documentation \- Modifying architecture → Update architecture docs – Finding bugs → Log in docs/bugs/bugs.md and update docs/bugs/bugs\_todo.md \- Making decisions → Store in memory, update ADRs \- Completing features → Update event-stream.md

## Quick Reference

### Common Commands

\# Development  
npm run dev              \# Start Vite dev server  
npm run build           \# Build for production  
npm run preview         \# Preview production build

\# Quality  
npm run lint            \# Run ESLint  
npm run typecheck       \# TypeScript check  
npm run test            \# Run tests  
npm run test:e2e        \# E2E tests

\# Documentation  
npm run docs:build      \# Build documentation

\# Maintenance  
npm audit               \# Security check  
npm outdated           \# Check for updates

### File Templates

// Component template  
import { cn } from '@/lib/utils';

interface ComponentNameProps {  
  className?: string;  
  children?: React.ReactNode;  
}

export function ComponentName({   
  className,  
  children   
}: ComponentNameProps) {  
  return (  
    \<div className={cn('', className)}\>  
      {children}  
    \</div\>  
  );  
}

// Hook template  
export function useHookName() {  
  const \[state, setState\] \= useState\<StateType\>();

  useEffect(() \=\> {  
    // Effect logic  
  }, \[\]);

  return { state };  
}

// Service template  
export const serviceNameService \= {  
  async fetchData(params: ParamsType): Promise\<DataType\> {  
    const response \= await api.get('/endpoint', { params });  
    return response.data;  
  }  
};

## Navigation Structure & Routing Conventions

### Protected Pages Hierarchy

All main pages are PROTECTED and should not be modified without explicit approval:

/ (Landing Page) \- PROTECTED  
├── /solutions \- PROTECTED  
│   ├── /10-day-heart-screening \- PROTECTED (was 14-day-holter)  
│   └── /3x-screening \- PROTECTED (was tritest)  
├── /partners \- PROTECTED  
│   ├── /general-practitioners \- PROTECTED  
│   ├── /cardiologists \- PROTECTED    
│   ├── /telemedicine \- PROTECTED  
│   └── /corporate \- PROTECTED  
├── /how-it-works \- PROTECTED  
│   ├── /overview \- PROTECTED  
│   ├── /technology \- PROTECTED  
│   ├── /evidence \- PROTECTED  
│   ├── /reimbursement \- PROTECTED  
│   └── /faq \- PROTECTED  
└── /about \- PROTECTED  
    ├── /company \- PROTECTED  
    ├── /team \- PROTECTED  
    ├── /testimonials \- PROTECTED  
    └── /blog \- PROTECTED

### Multi-Language URL Patterns

// Base pattern: /\[language\]/\[section\]/\[page\]  
// English can omit language prefix

const URL\_PATTERNS \= {  
  en: {  
    solutions: '/solutions/10-day-heart-screening',  
    partners: '/partners/general-practitioners',  
    howItWorks: '/how-it-works/overview',  
    about: '/about/company'  
  },  
  de: {  
    solutions: '/de/loesungen/10-tage-herzscreening',  
    partners: '/de/partner/hausaerzte',  
    howItWorks: '/de/so-funktionierts/uebersicht',  
    about: '/de/ueber-uns/unternehmen'  
  },  
  fr: {  
    solutions: '/fr/solutions/screening-cardiaque-10-jours',  
    partners: '/fr/partenaires/medecins-generalistes',  
    howItWorks: '/fr/comment-ca-marche/apercu',  
    about: '/fr/a-propos/entreprise'  
  },  
  it: {  
    solutions: '/it/soluzioni/screening-cardiaco-10-giorni',  
    partners: '/it/partner/medici-di-base',  
    howItWorks: '/it/come-funziona/panoramica',  
    about: '/it/chi-siamo/azienda'  
  }  
};

### Routing Implementation

// Route configuration in /src/routes/index.tsx  
// All routes must support 4 languages: en, de, fr, it

// Example route definition  
\<Route path="/:lang?/solutions/10-day-heart-screening" element={\<TenDayHeartScreening /\>} /\>  
\<Route path="/:lang?/loesungen/10-tage-herzscreening" element={\<TenDayHeartScreening /\>} /\>  
\<Route path="/:lang?/solutions/screening-cardiaque-10-jours" element={\<TenDayHeartScreening /\>} /\>  
\<Route path="/:lang?/soluzioni/screening-cardiaco-10-giorni" element={\<TenDayHeartScreening /\>} /\>

### Navigation Component Standards

1. **Language Switching**: Must preserve current page when switching languages

2. **Active State**: Use pathname matching for active link highlighting

3. **Mobile Menu**: Full navigation hierarchy must be accessible on mobile

4. **Breadcrumbs**: Show full path with translated segments

5. **SEO**: Each language variant needs proper hreflang tags

### Protected Route Guidelines

* Never rename protected routes without stakeholder approval

* Maintain redirects from old URLs (e.g., /14-day-holter → /10-day-heart-screening)

* Document all route changes in ROUTE\_MAP.md

* Test all language variants when modifying routes

---

This document is maintained alongside the codebase. Update it when patterns change, always maintaining backward compatibility and clear migration paths. Version changes require updating the VERSION field and logging in event-stream.md.

---

