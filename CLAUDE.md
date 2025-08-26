# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

SKIIN Switzerland is a production-ready multi-language marketing website for Myant Health's Swiss heart health screening service, featuring comprehensive eligibility questionnaire, S&W Design system, and Swiss healthcare compliance.

## Memory Bank System

This project uses a structured memory bank system with specialized context files. Always check these files for relevant information before starting work:

### Core Context Files
- **context/event-stream.md** - Event stream tracking all actions and observations
- **context/CLAUDE-planning.md** - Active planning document for current work
- **context/project-index.md** - High-level project overview and structure
- **context/CLAUDE-activeContext.md** - Current session state, goals, and progress 
- **context/CLAUDE-patterns.md** - Established code patterns and conventions 
- **context/CLAUDE-decisions.md** - Architecture decisions and rationale 
- **context/CLAUDE-troubleshooting.md** - Common issues and proven solutions 
- **context/CLAUDE-config-variables.md** - Configuration variables reference 
- **context/CLAUDE-todo.md** - Task tracking synchronized with TodoWrite tool
- **context/CLAUDE-temp.md** - Temporary scratch pad (only read when referenced)
- **context/WORKFLOWS.md** - Workflow orchestration patterns and triggers

### Deep dive on project-index.md
For planning/analysis work, utilize:
- High-level overview from context/project-index.md
- Architectural structure from PROJECT_INDEX.json
- Clean tree view from context/project-tree.txt

**Important:** Always reference the active context file first to understand what's currently being worked on and maintain session continuity.

**Note:** Research artifacts (TOT diagrams, research findings, brainstorm evaluations) should be kept in CLAUDE-temp.md as scratch work and cleaned up regularly to maintain a clean system.


## Critical principles & guard-rails

1.  **Iteration > Creation**
    *Search, extend, parameterise, only then create.*
2.  **Design-system fidelity**
    Review the design system before any design work
3.  **Atomic components**
    New UI component → new file, ≤ 50 LOC, Tailwind + shadcn/ui.
4.  **Mobile-first** responsive design.
    Start at 375px, progressive enhancement to desktop.
5.  **Research-first methodology** – Always gather context (data schema, metrics, design guidelines) before writing code. Record findings in docs/research and reference the file in project-index.md.
6.  **Context priming & persistence** – At the start of each session, read event-stream.md and CLAUDE-*.md.
7.  **Design-system fidelity** – Adopt a minimalistic, airy aesthetic with consistent typography and accessible colours as outlined in the design system docs. Use the 21st.dev design tokens by default; fall back to prebuilt shadcn/ui components. Components should be ≤ 50 LOC and live in their own files.
8.  **Variant & region awareness** – Implement components that react to region and variant filters. The RegionChart, VariantChart and BottleneckTable should update when a region is selected and provide clear feedback to the user (e.g. highlight selected bars).
9.  **Documentation integrity** – Code is not “done” until event-stream.md & all CLAUDE-*.md. Archive superseded docs in docs/archive/YYYY-MM-DD/ and update project-index.md
10.  **Test-driven & visual validation** – Write unit tests for data helpers and component logic. Use puppeteer mcp toolsto capture snapshots of each implemented component, verifying against initial requirements. Use the component and make sure all is as expected. All features must be responsive and accessible (ARIA labels, keyboard navigation, colour contrast).

## Planning

Process: Requirements Analysis -> Research -> system_understanding -> planning -> todo -> Update memory-bank

<system_understanding>
-   **Purpose**: To build a deep, structural understanding of complex problems before planning.
-   **Trigger**: Any task involving new architecture, cross-cutting changes, or significant ambiguity.
-   **Process**:
    1.  Identify all key entities (components, services, data models, user flows).
    2.  Map the relationships and dependencies between them.
    3.  Create a visual representation (e.g., Mermaid diagram) or a structured outline.
    4.  Save the artifact to `docs/diagrams/` and reference it in `planning.md`.
-   **Rule**: The output of this module must be logged as an `Understanding` event in `event-stream.md`.
</system_understanding>

<planning>
-   **Purpose**: To create and maintain a clear, actionable implementation plan.
-   **Rules**:
    -   The canonical plan lives in `CLAUDE-planning.md`. The actionable checklist lives in `@context/CLAUDE-todo.md`.
    -   Plans must follow the **ITERATION-FIRST** principle: always check if an existing component or pattern can be extended before planning to create something new.
    -   Break down work into logical phases where applicable: 1. Foundation (data, types), 2. Backend (logic, APIs), 3. Frontend (UI, state), 4. Testing (unit, integration, E2E).
    -   Log major plan updates as `Plan` events in `event-stream.md`.
</planning>

<todo>
  – **Purpose**: Manage fine-grained tasks associated with the plan.
  – **Rules**:
    * `@context/CLAUDE-todo.md` should be kept in sync with the TodoWrite tool's internal state but significantly expand on them breaking them up into relevant subtasks and grouping them by parent phases and deliverables. Updates happen when:
        - Tasks are added, modified, or completed
        - Status changes occur
        - Session continuity needs to be maintained
    * Maintain `todo.md` as a checklist of tasks derived from the plan. Each entry corresponds to a specific deliverable or subtask and may have sub-items.
    * Link tasks to their parent phases and deliverables.
    * After completing each item, update `@context/CLAUDE-todo.md` and check it off. 
    * If the plan changes or new tasks emerge, consider all tasks and reprioritize to make sure to have a clean consistent and coherent tasklist. Update `todo.md` accordingly. Invoke system_understanding if there is too much complexity or ambiguity

</todo>

    


--------------------------------------------------------------------------------
## <research_first_methodology>

### Research process

1.  **Current-State Review**: Scan codebase & docs referenced in `doc-ref.md`.
2.  **Gap Analysis**: Compare requirements vs. existing artifacts.
3.  **Target State Snapshot**: Draft architecture diagram & data flow.
4.  **Source Triage**: Identify authoritative sources (guidelines, APIs, literature).
5.  **Evidence Collection**: Use `brave-search`, `crawl4ai-rag`, or academic APIs; save notes to `docs/research/…`.
6.  **Synthesis**: Distil findings into actionable design choices.

*_No code generation occurs before step 6 is crystallised._*

</research_first_methodology>

### Research Best Practices

2. **Internal Research Protocol**:
   ```
   1. read @context/project-index.md for a high-level overview 
      - For a deeper dive on architectural structure read PROJECT_INDEX.json
      - For a clean tree view read context/project-tree.txt 
   2. Use the @code-explorer agent for complex code bases
   3. Use serena mcp tools to research dependencies
   ```

1. **External Research Protocol**:
   ```
   1. Use brave_web_search for initial discovery
   2. Use context7 to retrieve library documentation
   2. Use puppeteer for visual capture of competitor sites
   3. Save all findings to docs/research/[topic]/
   4. Create synthesis document with actionable insights
   ```

3. **Pattern Recognition**:
   - Always look for existing implementations first
   - Document reusable patterns in `docs/patterns/`
   - Create pattern library entries for common solutions
   - Reference patterns in implementation plans
### Requirements Evaluation Framework



--------------------------------------------------------------------------------
## <visual_excellence_module>

> **Purpose**: Implement conversion-focused, modern UI patterns that drive user engagement and business outcomes

### Core Visual Principles

<visual_principles>
| Principle | Implementation | Measurement |
|-----------|----------------|-------------|
| **Clarity** | • 8pt grid system<br>• Clear visual hierarchy<br>• Consistent spacing | Time to first action < 3s |
| **Movement** | • Scroll-triggered animations<br>• Micro-interactions<br>• Loading states | Engagement rate > 60% |
| **Trust** | • Social proof placement<br>• Security badges<br>• Professional typography | Trust score > 4.5/5 |
| **Performance** | • Optimized images<br>• Lazy loading<br>• Progressive enhancement | LCP < 2.5s, CLS < 0.1 |
</visual_principles>

### Conversion-Optimized Patterns

1. **Hero Section Pattern**:
   ```tsx
   // High-converting hero structure
   <section className="relative min-h-[600px] flex items-center">
     <div className="container grid lg:grid-cols-2 gap-12 items-center">
       <div className="space-y-6">
         <Badge>Trust indicator</Badge>
         <h1 className="text-4xl lg:text-6xl font-bold">
           <span className="text-primary">Benefit-focused</span> headline
         </h1>
         <p className="text-xl text-muted-foreground">Supporting value prop</p>
         <div className="flex gap-4">
           <Button size="lg">Primary CTA</Button>
           <Button variant="outline" size="lg">Secondary CTA</Button>
         </div>
         <div className="flex items-center gap-6 text-sm">
           <TrustSignal />
         </div>
       </div>
       <div className="relative">
         <ProductVisual />
       </div>
     </div>
   </section>
   ```

2. **Progressive Disclosure Pattern**:
   ```tsx
   // Reveal complexity gradually
   const [expanded, setExpanded] = useState(false);
   
   return (
     <div className="space-y-4">
       <div className="visible-by-default">
         {/* Essential info */}
       </div>
       {expanded && (
         <motion.div
           initial={{ opacity: 0, height: 0 }}
           animate={{ opacity: 1, height: "auto" }}
           transition={{ duration: 0.3 }}
         >
           {/* Additional details */}
         </motion.div>
       )}
     </div>
   );
   ```

3. **Social Proof Integration**:
   ```tsx
   // Strategic placement of trust signals
   const trustPlacements = {
     hero: "Below headline",
     form: "Near submit button", 
     pricing: "Under price points",
     checkout: "Above payment form"
   };
   ```

### Animation Guidelines

1. **Scroll-Triggered Animations**:
   - Use Intersection Observer for performance
   - Stagger delays: 150ms between elements
   - Duration: 600-1000ms for reveals
   - Easing: ease-out for natural feel

2. **Micro-Interactions**:
   - Hover states: 150ms transition
   - Click feedback: scale(0.98) on press
   - Loading states: skeleton screens > spinners
   - Success states: checkmark animation

3. **Performance Rules**:
   - CSS transforms only (no layout shifts)
   - Will-change for heavy animations
   - Reduce motion for accessibility
   - GPU acceleration for smoothness

### Responsive Design Strategy

```scss
// Mobile-first breakpoints
$breakpoints: (
  'sm': 640px,   // Tablet portrait
  'md': 768px,   // Tablet landscape
  'lg': 1024px,  // Desktop
  'xl': 1280px,  // Wide desktop
  '2xl': 1536px  // Ultra-wide
);

// Component scaling
.component {
  // Mobile: Full width, stacked
  @apply w-full flex-col;
  
  // Tablet: 2-column grid
  @screen md {
    @apply grid grid-cols-2 gap-8;
  }
  
  // Desktop: Enhanced spacing
  @screen lg {
    @apply gap-12 px-8;
  }
}
```

### Visual Testing Protocol

1. **Before Implementation**:
   - Screenshot competitor implementations
   - Create wireframe/mockup
   - Get stakeholder approval

2. **During Implementation**:
   - Use MCP Puppeteer for live preview
   - Test at all breakpoints
   - Verify animations performance

3. **After Implementation**:
   - Visual regression testing
   - Cross-browser verification
   - Performance audit
   - Accessibility scan

</visual_excellence_module>



## Commands

### Development
```bash
npm run dev              # Start development server (port 8080/8081)
npm run build           # Build for production
npm run preview         # Preview production build
```

### Testing & Quality
```bash
npm run test            # Run unit tests (Vitest)
npm run test:e2e        # Run E2E tests (Playwright) 
npm run test:coverage   # Run tests with coverage report
npm run lint            # ESLint with auto-fix
npm run typecheck       # TypeScript type checking
npm run check           # Run lint + typecheck + test:coverage
npm run check:all       # Run all checks + E2E tests
```

### Index Generation (v2.0)
```bash
./scripts/generate-indexes.sh   # Generate all 4 project indexes
```

## Architecture & Code Organization

### Project Structure
- **src/components/**: React components following atomic design (≤50 lines for atoms/molecules)
  - `ui/`: Base shadcn/ui components (50+ components)
  - `forms/eligibility/`: 6-stage eligibility workflow with 14 atomic components
  - `layout/`: Layout components (Navbar, Footer)
  - `features/`: Feature-specific components
- **supabase/**: Database schema (14 tables), migrations, RLS policies, edge functions
- **context/**: Active working files (event-stream.md, CLAUDE-planning.md, project-index.md)
- **docs/**: Reference documentation organized by category

### Context Navigation (4-Index System v2.0)

| Index File | Size | Purpose | When to Load |
|------------|------|---------|--------------|
| PROJECT_INDEX.json | ~160KB | Code structure, functions, dependencies (no images) | Code work |
| VISUAL_ASSETS_INDEX.json | ~124KB | All images, videos, icons with metadata | UI work |
| context/project-tree.txt | ~36KB | Directory tree without images | Navigation |
| context/project-index.md | ~10KB | High-level overview with depth-3 tree | Quick overview |

### Key Design Patterns

#### Component Architecture
- **Atomic Design**: Maximum 50 lines per atom/molecule component
- **Context + Reducer**: State management pattern for complex forms
- **TypeScript Strict Mode**: No `any` types, explicit return types required
- **Swiss Compliance**: VAT (7.7%), canton validation, 9 insurance providers

#### Multi-language Support
- **4 Languages**: English, German, French, Italian
- **Route Structure**: /[language]/[page] (e.g., /de/home)
- **98+ Routes**: Complete routing across all languages

#### Database (Supabase)
- **14 Tables**: Users, insurance, eligibility, sessions, OTP
- **RLS Policies**: Row-level security on all tables
- **Edge Functions**: OTP email, session management
- **Security**: bcrypt hashing, rate limiting (5 attempts/10 min)

## Development Guidelines

### Code Quality Requirements
- **ESLint**: Must pass with zero errors
- **TypeScript**: Must compile without errors
- **Test Coverage**: 80% for services, 70% for utilities
- **Performance**: LCP <2.5s, CLS <0.1, FID <100ms
- **Accessibility**: WCAG 2.1 AA compliance mandatory

### Security Standards
- **OTP Verification**: bcrypt hashing with rate limiting
- **PCI DSS Compliance**: Secure payment form patterns
- **No Secrets in Code**: Use environment variables
- **Session Management**: Secure cookie handling

### Testing Approach
- **Unit Tests**: Use Vitest for components and services
- **E2E Tests**: Use Playwright for critical user flows
- **Visual Regression**: Test design system consistency
- **Accessibility**: Run accessibility audits regularly

## AI Agent Workflow
- **@memory-bank-synchronizer** - MUST be invoked after EVERY significant code change, architectural pattern modification, or technical decision. Failure to sync results in outdated documentation and context drift.
- **@code-searcher** - MUST be invoked BEFORE making any code modifications to understand existing implementation, locate patterns, and prevent duplicate work.
- @ux-design-expert and @design-system-architect - Use proactively for any design and component related specifications (front-end)
- @supabase-architect and @supabase-implementation-engineer - Invoke for any backend related work

### Phase-Based Process (CLAUDE_PROCESS.md)
1. **Context Gathering**: Load indexes, detect workflows (check context/WORKFLOWS.md)
2. **Analysis**: Build entity relationships with tree-of-thought
3. **Research**: Gather best practices from authoritative sources
4. **Planning**: Create actionable tasks in CLAUDE-planning.md
5. **Execution**: Implement with quality gates and self-priming
6. **Review**: Expert panel assessment via reflection-agent
7. **Delivery**: Present final outputs and update documentation

### Mandatory Protocols
- **Workflow Detection**: Check context/WORKFLOWS.md on EVERY message
- **Self-Priming**: Include `self_prime: true` in ALL agent invocations
- **Documentation Update**: Run documentation-maintainer after EVERY code change
- **Index Updates**: Run `./scripts/generate-indexes.sh` after structural changes
- **Memory Bank Sync**: Run @memory-bank-synchronizer after significant changes

## Critical Files & References

### Core Context Files
- **context/event-stream.md**: Event tracking
- **context/CLAUDE-planning.md**: Active planning
- **context/project-index.md**: Project overview
- **context/CLAUDE_PROCESS.md**: Agent workflow process
- **context/WORKFLOWS.md**: Workflow orchestration patterns

### Reference Documentation (docs/)
- **docs/architecture/**: System architecture, database, API
- **docs/frontend/**: Component architecture, design system
- **docs/features/**: Eligibility, multi-language features
- **docs/testing/**: Test strategy, unit/E2E tests
- **docs/content/**: Translations and content management

### Key Scripts
- **scripts/generate-indexes.sh**: Generate project indexes
- **scripts/file-organization-scanner.sh**: Check file organization
- **scripts/auto-file-mover.sh**: Fix file organization violations
- **scripts/event-stream-api.py**: Event stream API utilities

### Database
- **supabase/migrations/**: SQL migration files
- **supabase/schemas/**: Database schema definitions
- **supabase/functions/**: Edge functions (OTP, session management)

## Important Constraints

### File Organization Rules
- **Root Directory**: Maximum 35 config files only
- **Images**: Must be in `/public/assets/images/`
- **SQL Files**: Must be in `/supabase/`
- **Tests**: Must be in `/tests/` or `/scripts/tests/`
- **Documentation**: Active in `/context/`, reference in `/docs/`

### Component Rules
- **Atomic Components**: ≤50 lines for atoms/molecules
- **Pure Functional**: No class components
- **TypeScript**: Explicit typing required
- **Tailwind Only**: No custom CSS except index.css

### Memory Management
- **Archive After 7 Days**: Move unused docs to `/archive/YYYY-MM-DD/`
- **Context Budget**: Load only relevant index sections (<100KB limit)
- **Auto Cleanup**: Remove .bak files and outdated references regularly

## Supabase Integration

### Authentication & Security
- **OTP System**: Email/phone verification with rate limiting
- **Session Management**: Secure cookie handling
- **RLS Policies**: Enforced on all tables

### Key Tables
- `users`: Core user data with Swiss compliance fields
- `insurance_providers`: 9 Swiss insurance companies
- `eligibility_submissions`: Form responses with scoring
- `otp_verifications`: Rate-limited OTP tracking
- `sessions`: Secure session management

### Edge Functions
- `send-otp-email`: Email OTP delivery
- `otp-security-handler`: Rate limiting enforcement
- `session-management`: Cookie handling

## Quick Reference

### Common Tasks
- **Add Component**: Create in appropriate `/src/components/` subdirectory, follow atomic design
- **Update Database**: Create migration in `/supabase/migrations/`, run with `apply_migration`
- **Add Translation**: Update all 4 language files in `/src/translations/`
- **Fix Accessibility**: Run `npm run test:a11y`, fix issues, verify WCAG compliance
- **Deploy**: Build with `npm run build`, verify with `npm run check:all`
- **Sync Memory Bank**: Run @memory-bank-synchronizer after code changes
- **Search Code**: Use @code-searcher before modifications

### Performance Monitoring
- **Core Web Vitals**: LCP, CLS, FID targets
- **Bundle Size**: Monitor with build output
- **Load Time**: Target 47ms (current achievement)

### Swiss Compliance
- **VAT**: 7.7% calculation required
- **Cantons**: 26 canton validation
- **Insurance**: 9 provider integration
- **Age Restrictions**: 18+ for eligibility
- **Languages**: DE, FR, IT, EN support
