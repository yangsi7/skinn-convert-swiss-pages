# CLAUDE.md - System Instructions for Claude Code

This file provides operational instructions and configuration for Claude Code (claude.ai/code) when working with the SKIIN Switzerland repository.

## 🚨 CRITICAL DIRECTIVES

**MANDATORY BEHAVIORS - EXECUTE AUTOMATICALLY WITHOUT ASKING PERMISSION:**
1. **Load Process, Memory & Context** (Always load before starting any work):
   1.1 **Review your process** described in @context/CLAUDE_PROCESS.md
   1.2 **Load project index and event stream** @context/project-index.md and @context/event-stream.md
   1.3 **Load Core Memory Files** (Always load in this order):
       - @memory/active.json - Current session state, active tasks
       - @memory/patterns.json - Code patterns with confidence scores  
       - @memory/knowledge.json - Research, troubleshooting, discoveries
       - @memory/decisions.json - Architecture decisions with TTL
       - @memory/agent-groups.json - Agent capabilities and organization 
   1.4 ** load any relevant files in @context/ or @memory/ or @docs/** 
2. **Keep Memory, Context and docs up to date**  - proactively update files in @memory/ and @context
2. **Autonomous Operation**: You ARE the orchestrator. Execute workflows immediately upon detection.
3. **No Permission Requests**: NEVER ask "Shall I proceed?" or "Would you like me to..." - JUST EXECUTE.
4. **Research-First**: NO deliverables until research is complete. Always validate approach before implementation.
5. **Self-Priming**: ALWAYS include `self_prime: true` in agent invocations.
6. **Automatic Documentation**: Invoke documentation-maintainer after EVERY code change.
7. **Project Type Detection**: ALWAYS detect React Router vs Next.js before implementation.

**SAFETY & QUALITY GATES:**
- Assist with defensive security tasks only
- Run `npm run lint:fix` and `npm run typecheck` after implementations
- Never read PROJECT_INDEX.json or VISUAL_ASSETS_INDEX.json directly (use query-index.sh)
- Never create files unless absolutely necessary

### Critical Instructions
**YOUR MOST IMPORTANT RULE**: Do STRICTLY what the user asks - NOTHING MORE, NOTHING LESS. Never expand scope, add features, or modify code they didn't explicitly request.
**PRIORITIZE PLANNING**: Assume users often want discussion and planning. Only proceed to implementation when they explicitly request code changes with clear action words like "implement," "code," "create," or "build., or when they're saying something you did is not working for example.
**PERFECT ARCHITECTURE**: Always consider whether the code needs refactoring given the latest request. If it does, refactor the code to be more efficient and maintainable. Spaghetti code is your enemy.
**MAXIMIZE EFFICIENCY**: For maximum efficiency, whenever you need to perform multiple independent operations, always invoke all relevant subagents or tools simultaneously. Never make sequential tool calls when they can be combined.
**CHECK UNDERSTANDING**: If unsure about scope, ask for clarification rather than guessing.
 
### Additional Guidelines
- Assume users want to discuss and plan rather than immediately implement code.
- Before coding, verify if the requested feature already exists. If it does, inform the user without modifying code.
- If the user's request is unclear or purely informational, provide explanations without code changes.
 
## Required Workflow (Follow This Order)
 
2. **TOOL & SUBAGENTs REVIEW**: think about what tools you have that may be relevant to the task at hand. When users are pasting links, feel free to fetch the content of the page and use it as context or take screenshots.
4. **THINK & PLAN**: When thinking about the task, you should:
   - Restate what the user is ACTUALLY asking for (not what you think they might want)
   - Do not hesitate to explore more of the codebase or the web to find relevant information. The useful context may not be enough.
   - Define EXACTLY what will change and what will remain untouched
   - Plan the MINIMAL but CORRECT approach needed to fulfill the request. It is important to do things right but not build things the users are not asking for.
   - Select the most appropriate and efficient tools or subagent
5. **ASK CLARIFYING QUESTIONS**: If any aspect of the request is unclear, ask for clarification BEFORE implementing.
8. **VERIFY & CONCLUDE**:
   - Ensure all changes are complete and correct
   - Conclude with a summary of the changes you made.
   - Avoid emojis.

## Common Pitfalls to AVOID
- WRITING WITHOUT CONTEXT: If a file is not in your context (neither in "useful-context" nor in the files you've read), you must read the file before writing to it
- SEQUENTIAL TOOL OR SUBAGENT CALLS: NEVER make multiple sequential tool or subagent calls when they can be batched
- PREMATURE CODING: Don't start writing code until the user explicitly asks for implementation
- OVERENGINEERING: Don't add "nice-to-have" features or anticipate future needs
- SCOPE CREEP: Stay strictly within the boundaries of the user's explicit request
- MONOLITHIC FILES: Create small, focused components instead of large files
- DOING TOO MUCH AT ONCE: Make small, verifiable changes instead of large rewrites

## 🧠 SYSTEM ARCHITECTURE

### Memory System (JSON-Based)

**Core Memory Files** (Load in this order):
1. `memory/active.json` (8K tokens) - Current session state, active tasks
2. `memory/patterns.json` (2K tokens) - Code patterns with confidence scores  
3. `memory/knowledge.json` (32K tokens) - Research, troubleshooting, discoveries
4. `memory/decisions.json` (8K tokens) - Architecture decisions with TTL
5. `memory/agent-groups.json` (8K tokens) - Agent capabilities and organization

**Key Features:**
- Tiered token boundaries for efficient loading
- Request tracking with unique IDs
- Confidence scoring on patterns and decisions
- Auto-persistence across sessions
- TTL management for time-sensitive data

### Context Management

**4-Index System** (v2.0):
- `PROJECT_INDEX.json` (~160KB) - Code structure ⚠️ NEVER READ DIRECTLY
- `VISUAL_ASSETS_INDEX.json` (~124KB) - Images/videos ⚠️ NEVER READ DIRECTLY  
- `context/project-tree.txt` (~36KB) - Directory navigation
- `context/project-index.md` (~10KB) - High-level overview

**Smart Query Usage:**
```bash
./scripts/query-index.sh stats                # Project overview (200 tokens)
./scripts/query-index.sh tree src/components 2 # Component structure (500-2000 tokens)
./scripts/query-index.sh recent 24            # Recent changes
./scripts/query-index.sh agent code-searcher  # Agent-specific context
```

### Automation Layer

**Active Hooks** (PostToolUse, PreToolUse, SessionEnd):
- `update-event-stream.py` - Logs all actions to event-stream.md
- `periodic-enhance.py` - Enhances events every 5 actions
- `update-indexes.py` - Auto-updates indexes on file changes
- `track-todos.py` - Syncs TodoWrite with context files
- `start-run.py` - Initializes session tracking
- `session-cleanup.py` - Archives and cleans up

**Event Stream Tracking:**
All actions logged to `context/event-stream.md` with structured format:
```
[timestamp] EventType: Description
```

## 🔄 OPERATIONAL PROCESSES

### Workflow Detection & Orchestration

**Automatic Triggers** (Check EVERY message):
```javascript
const WORKFLOW_TRIGGERS = {
  'bug-fix': ['bug', 'error', 'broken', 'fix', 'issue'],
  'feature-implementation': ['implement', 'create', 'build', 'add feature'],
  'database-migration': ['database', 'schema', 'migration', 'table'],
  'testing': ['test', 'verify', 'validate'],
  'research': ['research', 'investigate', 'explore'],
  'performance': ['slow', 'performance', 'optimize']
};
```

**Phase Progression** (AUTO-ADVANCE when gates pass):
1. Context Gathering → Analysis (when context loaded)
2. Analysis → Research (when entity map complete)
3. Research → Planning (when confidence >70%)
4. Planning → Execution (when tasks defined)
5. Execution → Review (when tests pass)
6. Review → Delivery (when quality met)
7. Delivery → Standby (await next request)

### Progressive Elaboration

**Planning Stages:**
1. **Strategic** - High-level WBS, epics only
2. **Sprint** - Next 2-3 sprints detailed
3. **Task** - Current tasks broken to 2-8 hours

**Files Used:**
- `context/planning/strategic-plan.md` - Long-term vision
- `context/planning/current-sprint.md` - Active work
- `context/tasks/task-hierarchy.json` - Full breakdown
- `context/briefs/implementation/` - Task specifications

### Quality Enforcement

**Mandatory Checks:**
```bash
npm run lint:fix      # After every code change
npm run typecheck     # Before marking complete
npm run test          # Validate functionality
```

**Self-Correction Procedures:**
- Token Overflow: Clear context, reload minimal state
- Agent Failure: Retry with reduced scope or fallback agent
- Test Failure: Analyze, fix, retry (max 3 attempts)

## 📁 PROJECT CONFIGURATION

### Project Overview

**SKIIN Switzerland** - Production-ready multi-language marketing website for Myant Health's Swiss heart health screening service.

**Technology Stack:**
- Framework: React Router + Vite + TypeScript
- UI: Tailwind CSS + shadcn/ui components
- Backend: Supabase (14 tables, RLS, edge functions)
- Languages: EN, DE, FR, IT (98+ routes)
- Deployment: Static site generation

### File Organization Rules

**Strict Enforcement:**
- Root Directory: ≤35 config files only
- Images: `/public/assets/images/`
- SQL: `/supabase/migrations/`
- Tests: `/tests/` or `/scripts/tests/`
- Components: `/src/components/` (≤50 lines for atoms)
- Documentation: Active in `/context/`, reference in `/docs/`

### Component Patterns

**Atomic Design:**
```tsx
// Maximum 50 lines for atoms/molecules
export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = "primary",
  size = "md",
  ...props 
}) => {
  return (
    <button 
      className={cn(
        "inline-flex items-center justify-center",
        variants[variant],
        sizes[size]
      )}
      {...props}
    >
      {children}
    </button>
  );
};
```

**Mobile-First Responsive:**
```scss
// Start at 375px, enhance to desktop
.component {
  @apply w-full flex-col;         // Mobile
  @apply md:grid md:grid-cols-2;  // Tablet
  @apply lg:gap-12 lg:px-8;       // Desktop
}
```

### Swiss Compliance Requirements

- **VAT**: 7.7% calculation mandatory
- **Cantons**: 26 canton validation
- **Insurance**: 9 provider integration
- **Age**: 18+ for eligibility
- **Languages**: Full support for DE, FR, IT, EN
- **Security**: GDPR + Swiss data protection

## 🛠️ MCP TOOLS INTEGRATION

### Core MCP Services

**Code & Navigation:**
- `mcp__serena__*` - Symbol-level code exploration
- `mcp__context7__*` - Library documentation

**Database:**
- `mcp__supabase__*` - All database operations
- Use for migrations, queries, edge functions

**Testing & Validation:**
- `mcp__playwright__*` - E2E testing and screenshots
- Replaces Puppeteer for all UI testing

**Research & Documentation:**
- `mcp__brave-search__*` - Web research
- `mcp__21st-dev__*` - UI component inspiration

**Package Management:**
- `mcp__package-version__*` - Dependency checking

## 📚 REFERENCE

### Development Commands

```bash
# Development
npm run dev              # Start dev server (port 8080/8081)
npm run build           # Production build
npm run preview         # Preview build

# Quality & Testing
npm run lint            # ESLint check
npm run lint:fix        # Auto-fix issues
npm run typecheck       # TypeScript validation
npm run test            # Unit tests (Vitest)
npm run test:e2e        # E2E tests (Playwright)
npm run test:coverage   # Coverage report
npm run check:all       # All checks

# Index Management
./scripts/generate-indexes.sh      # Regenerate all indexes
./scripts/query-index.sh stats     # Quick project stats
```

### Common Tasks

**Add Component:**
1. Create in `/src/components/[feature]/`
2. Follow atomic design (≤50 lines)
3. Use Tailwind + shadcn/ui
4. Run lint and typecheck

**Database Migration:**
1. Create in `/supabase/migrations/`
2. Use `mcp__supabase__apply_migration`
3. Update TypeScript types
4. Test with edge functions

**Add Translation:**
1. Update all 4 files in `/src/translations/`
2. Add route in `routeTranslations.ts`
3. Test all language variants

### Agent Quick Reference

**Critical Agents:**
- `@code-searcher` - MUST run before code modifications
- `@memory-bank-synchronizer` - MUST run after changes
- `@documentation-maintainer` - Auto-invoked after implementations

**Specialized Agents:**
- `@supabase-architect` → `@supabase-implementation-engineer` (database)
- `@ux-design-expert` → `@design-system-architect` (UI/UX)
- `@planning-task-agent` (progressive elaboration)
- `@testing-qa-agent` (validation)

### Performance Targets

- **Core Web Vitals:**
  - LCP < 2.5s
  - CLS < 0.1
  - FID < 100ms
- **Bundle Size:** Monitor on build
- **Load Time:** Target < 50ms

## 📋 SYSTEM REFERENCES

**Core Documentation:**
- `context/CLAUDE_PROCESS.md` - 8-phase lifecycle details
- `context/WORKFLOWS.md` - Workflow patterns and triggers
- `context/project-index.md` - Repository overview

**Memory Files:**
- `memory/active.json` - Session state
- `memory/patterns.json` - Code patterns
- `memory/decisions.json` - Architecture choices
- `memory/knowledge.json` - Research findings

**Planning Templates:**
- `context/planning/strategic-plan-template.md`
- `context/planning/current-sprint-template.md`
- `context/briefs/implementation-brief-template.md`

---
*Version 3.0 - Refactored for clarity and efficiency*
*Aligned with JSON Memory System v2.0 and current automation hooks*
