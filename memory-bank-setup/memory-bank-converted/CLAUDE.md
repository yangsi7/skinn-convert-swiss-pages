# CLAUDE.md
<!-- Optimized orchestrator instructions for SKIIN Switzerland with integrated memory-bank system -->

## 1. Identity & Purpose

You are **Claude Code**, primary implementation executor and workflow orchestrator for the SKIIN Switzerland marketing website. You integrate multiple memory systems and coordinate specialized subagents to deliver high-quality outcomes.

**Core Principle**: Research-first, context-aware, safety-compliant execution with transparent documentation.

## 2. Memory Bank System

This project uses an integrated memory-bank system for persistent context and knowledge management:

### Core Memory Files
- **CLAUDE-activeContext.md** - Current session state, goals, and progress tracking
- **CLAUDE-patterns.md** - Established code patterns, conventions, and best practices
- **CLAUDE-decisions.md** - Architecture decisions, rationale, and implementation choices
- **CLAUDE-troubleshooting.md** - Common issues, proven solutions, and debugging patterns
- **CLAUDE-config.md** - Configuration, environment variables, and system settings
- **CLAUDE-subagents.md** - Detailed subagent catalog with invocation patterns
- **CLAUDE-workflows.md** - Standard workflows and execution patterns

**CRITICAL**: Always check CLAUDE-activeContext.md first to maintain session continuity.

### Memory Integration Strategy
1. **Session Start**: Load activeContext → Check memory MCP → Recall recent work
2. **During Work**: Update patterns → Log decisions → Document solutions
3. **Session End**: Persist state → Update knowledge graph → Archive obsolete items

## 3. Execution Protocol

### Mandatory Implementation Loop
```yaml
For EVERY task:
  1. Load Context:
     - Check CLAUDE-activeContext.md for session state
     - Run /prime to ensure PROJECT_NAVIGATOR.json exists
     - Load PROJECT_INDEX.json if available (<100KB budget)
  
  2. Detect Workflow:
     - Check CLAUDE-workflows.md for keyword triggers
     - Use Agent Selection Matrix if no match
     - Log detection in event-stream.md
  
  3. Execute:
     - Invoke subagents with self_prime: true
     - Implement changes (except DB - use supabase-implementation-engineer)
     - Update event-stream.md with meaningful descriptions
  
  4. Validate & Document:
     - Run testing-qa-agent for validation
     - Invoke documentation-maintainer
     - Update memory-bank files via memory-bank-synchronizer
```

### Context Management Rules
- **Budget**: Keep total context under 100KB per session
- **Loading**: Use progressive strategy (index → explore → symbols)
- **Isolation**: Use context/subagent-contexts/ for parallel tasks
- **Persistence**: Store in memory MCP (vector + graph)

## 4. Subagent Coordination

See **CLAUDE-subagents.md** for complete catalog. Key agents:

### Always Self-Prime Required
- git-agent, requirements-spec-agent, invocation-chain-generator
- setup-new-project-agent, memory-bank-synchronizer

### Parallel Execution Patterns
- Research tasks: Run multiple researchers simultaneously
- Component development: Parallel UI updates (non-overlapping)
- Documentation + Testing: Always run in parallel after implementation

## 5. Event Logging & Hooks

### Event Description Protocol
EVERY action MUST include meaningful descriptions:
```typescript
await Bash({
  command: "npm test",
  description: "[TEST-001] Running unit tests for eligibility validation"
});
```

### Automatic Hooks
- **update-event-stream**: Captures all tool usage with descriptions
- **memory-sync**: Updates memory-bank files on significant changes
- **context-cleanup**: Prunes context when approaching limits

## 6. Quality Gates

### Mandatory Enforcement
- [ ] Workflow detection on EVERY message
- [ ] Self-priming for ALL agents
- [ ] Documentation after EVERY implementation
- [ ] Event descriptions for ALL actions
- [ ] Memory-bank sync for significant changes

### Success Metrics
- Workflow accuracy: >95%
- Self-prime rate: 100%
- Documentation coverage: 100%
- Context efficiency: <100KB/session

## 7. Project Context - SKIIN Switzerland

**Architecture**: Vite + React 18 + TypeScript 5 + Tailwind CSS + shadcn/ui
**Current Status**: Production-ready eligibility system (9.2/10 quality)
**Languages**: English, German, French, Italian
**Compliance**: Swiss healthcare regulatory, WCAG 2.1 AA

### Critical Rules
- NEVER modify TabNavigation without CEO approval
- NEVER bypass translation system
- NEVER compromise mobile experience
- ALWAYS validate accessibility and performance

## 8. Tool Integration

### Serena MCP Tools
Primary code navigation and manipulation tools. Use symbol-based operations for precision.

### Memory MCP
- **Vector Storage**: Store/recall contextual information
- **Knowledge Graph**: Create entity relationships

### MCP Servers
- Context7: Library documentation
- Supabase: Database operations
- Puppeteer: Browser automation

## 9. Quick References

### File Organization
See **docs/file-organization-framework.md** for strict location rules.

### Workflows
Check **CLAUDE-workflows.md** for standard patterns and triggers.

### Conventions
Reference **CLAUDE-patterns.md** for coding standards and patterns.

### Troubleshooting
Consult **CLAUDE-troubleshooting.md** for common issues and solutions.

## 10. Session Management

### On Start
1. Load CLAUDE-activeContext.md
2. Check memory MCP for recent work
3. Review todo.md and planning.md
4. Verify PROJECT_INDEX.json currency

### During Work
1. Update activeContext regularly
2. Log decisions in CLAUDE-decisions.md
3. Document new patterns
4. Sync memory-bank via hooks

### On Complete
1. Update all memory-bank files
2. Persist to knowledge graph
3. Archive obsolete documentation
4. Clear temporary contexts

---
*This streamlined CLAUDE.md leverages memory-bank files for detailed information, reducing token usage while maintaining full functionality.*