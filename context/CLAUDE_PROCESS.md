# CLAUDE Process v3.1 – Autonomous Lifecycle Framework

**Purpose**: Define the autonomous execution lifecycle for the CLAUDE system with clear triggers, quality gates, and agent orchestration patterns.

---

## 🎯 Core Principles

### Research-First Methodology
**NO DELIVERABLES UNTIL RESEARCH IS COMPLETE**

Every significant task follows this sequence:
1. **Research** → Understand the problem space
2. **Design** → Create specifications from evidence
3. **Implement** → Execute validated approach
4. **Validate** → Verify against requirements

### Autonomous Execution
**THE MAIN AGENT IS THE ORCHESTRATOR - EXECUTE WITHOUT PERMISSION**

- Check EVERY message for workflow triggers
- Progress through phases when quality gates pass
- Run agents in parallel when possible
- Retry automatically on errors
- Update memory after significant actions

**Never ask "Shall I proceed?" or "Would you like me to..." - JUST EXECUTE**

---

## 📁 System Architecture

### Memory System (9 JSON Files)
```
memory/
├── active.json        # Session state & orchestration (8KB)
├── patterns.json      # Code patterns & confidence (2KB)
├── knowledge.json     # Research & troubleshooting (32KB)
├── decisions.json     # Architecture decisions & TTL (8KB)
├── agent-groups.json  # Agent capabilities & workflows (8KB)
├── product.json       # Mission, vision, roadmap
├── telemetry.json     # Performance tracking
├── index-cache.json   # Query optimization
└── index-patterns.json # Common access patterns
```

### Context Management (4-Index System)
- **PROJECT_INDEX.json** (~160KB) - Code structure ⚠️ NEVER READ DIRECTLY
- **VISUAL_ASSETS_INDEX.json** (~124KB) - Media assets ⚠️ NEVER READ DIRECTLY
- **project-tree.txt** (~36KB) - Directory navigation
- **project-index.md** (~10KB) - High-level overview

**Use Smart Queries Instead:**
```bash
./scripts/query-index.sh stats              # Overview (200 tokens)
./scripts/query-index.sh tree src 2         # Structure (500-2K tokens)
./scripts/query-index.sh agent [type]       # Agent context
./scripts/query-index.sh recent 24          # Recent changes
```

### Hook Automation (7 Python Scripts)
```
.claude/hooks/
├── update-event-stream.py    # Log all actions
├── periodic-enhance.py       # Enhance every 5 events
├── track-todos.py           # Sync TodoWrite state
├── start-run.py            # Initialize sessions
├── enhance-events.py       # Enrich event data
├── update-indexes.py       # Auto-update indexes
└── session-cleanup.py      # Archive on completion
```

---

## 🔄 Execution Lifecycle (5 Stages)

### Stage 1: Context & Detection
**Trigger**: ANY new user message  
**Quality Gate**: Workflow identified + Memory loaded

**Actions:**
1. Match message against workflow triggers in WORKFLOWS.md
2. Load memory files in priority order (active → patterns → knowledge)
3. Query indexes for relevant context (NOT full files)
4. Detect project type if code work involved
5. Record telemetry for session start

**Workflow Triggers:**
```javascript
{
  'bug-fix': ['bug', 'error', 'broken', 'fix'],
  'feature': ['implement', 'create', 'build', 'add'],
  'database': ['schema', 'migration', 'table'],
  'testing': ['test', 'verify', 'validate'],
  'research': ['investigate', 'explore', 'find']
}
```

### Stage 2: Analysis & Research
**Trigger**: Context loaded with gaps identified  
**Quality Gate**: Confidence >70% on approach

**Actions:**
1. Build entity map with tree-of-thought-agent
2. Research unknowns with researcher agent
3. Cross-validate with Context7/Brave MCPs
4. Update knowledge.json with findings
5. Document decisions if architectural

**Research Protocol:**
- Max 3 iterations per topic
- Require 2+ sources for validation
- Cache results for 30 days
- Update patterns.json if established

### Stage 3: Planning & Design
**Trigger**: Research complete with validated approach  
**Quality Gate**: Tasks defined with acceptance criteria

**Progressive Elaboration:**
1. **Strategic** → High-level WBS (epics only)
2. **Sprint** → Next 2-3 sprints detailed
3. **Task** → Current work at 2-8 hour chunks

**Outputs:**
- `context/planning/strategic-plan.md` (if new feature)
- `context/planning/current-sprint.md` (active work)
- `TodoWrite` updates (task tracking)

### Stage 4: Execution
**Trigger**: Tasks defined in TodoWrite  
**Quality Gate**: Tests pass + Documentation updated

**Execution Rules:**
1. Mark task as `in_progress` BEFORE starting
2. Include `self_prime: true` in ALL agent invocations
3. Run quality checks after EVERY change:
   - `npm run lint:fix` (code style)
   - `npm run typecheck` (type safety)
   - Update docs with documentation-maintainer
4. Mark task `completed` IMMEDIATELY when done
5. Create new tasks for discovered work

**Agent Invocation Pattern:**
```yaml
agent:
  self_prime: true          # MANDATORY
  context: query_results    # From index queries
  telemetry: true          # Track performance
```

### Stage 5: Validation & Delivery
**Trigger**: All tasks completed  
**Quality Gate**: Review panel approval

**Validation Steps:**
1. Run reflection-agent for multi-perspective review
2. Execute testing-qa-agent for quality metrics
3. Check with guardrails-agent for security
4. Update all documentation
5. Present results to user
6. Archive working files to `archive/YYYY-MM-DD/`

---

## 🚀 Orchestration Patterns

### Phase Progression Matrix

| Current Stage | Next Trigger | Auto-Action |
|--------------|--------------|-------------|
| Context | Workflow detected | → START Analysis |
| Analysis | Gaps identified | → START Research |
| Research | Confidence >70% | → START Planning |
| Planning | Tasks defined | → START Execution |
| Execution | Tests passing | → START Validation |
| Validation | Quality met | → DELIVER Results |

### Parallel Execution
Execute multiple agents when tasks are independent:
- Research: brave-search + context7 + code-searcher
- Testing: unit tests + e2e tests + visual validation
- Documentation: update docs + sync memory + archive old

### Error Recovery
**Automatic retry on failure:**
- Token overflow → Clear context, reload minimal
- Agent failure → Use fallback agent
- Test failure → Analyze, fix, retry (max 3)
- Timeout → Save checkpoint, continue next session

---

## 📋 Continuous Operations

### Memory Synchronization
- **Frequency**: After every significant task
- **Priority**: patterns > decisions > knowledge
- **Cleanup**: Archive stale items after 30 days

### Event Stream Tracking
All actions logged to `context/event-stream.md`:
```
[timestamp] [task-id] | EventType: Description
```

Enhanced every 5 events by periodic-enhance.py

### Index Maintenance
- **Auto-update**: Via update-indexes.py hook
- **Manual**: `./scripts/generate-indexes.sh`
- **Cache**: 60-minute TTL on queries

### Telemetry Recording
```bash
./scripts/record-telemetry.sh "[agent]" "event" \
  '{"priming": true, "tokens_saved": 145000}'
```

---

## 🎯 Quality Standards

### Code Quality Gates
- ✅ ESLint passing (`npm run lint`)
- ✅ TypeScript valid (`npm run typecheck`)
- ✅ Tests passing (`npm run test`)
- ✅ Coverage >70% (components)
- ✅ Bundle <1MB total

### Agent Requirements
- ✅ ALL agents have `self_prime: true`
- ✅ Request tracking with unique IDs
- ✅ Isolated contexts for parallel work
- ✅ Documentation updated after changes
- ✅ Memory synchronized after completion

### Performance Targets
- LCP < 2.5s
- CLS < 0.1
- FID < 100ms
- Response time < 5s (orchestration)

---

## 📚 Quick Reference

### Essential Commands
```bash
# Development
npm run dev              # Start dev server
npm run build           # Production build
npm run check:all       # All validations

# Context Management
./scripts/query-index.sh stats     # Project overview
./scripts/query-index.sh tree [path] [depth]
./scripts/query-index.sh recent 24

# Telemetry
./scripts/record-telemetry.sh "main" "session_start" '{}'
```

### Key File Locations
- **Memory**: `memory/*.json`
- **Planning**: `context/planning/`
- **Events**: `context/event-stream.md`
- **Agents**: `.claude/agents/*.md`
- **Hooks**: `.claude/hooks/*.py`

### Common Workflows
1. **Bug Fix**: code-searcher → main → testing-qa → docs
2. **Feature**: planner → designer → main → testing → docs
3. **Database**: supabase-architect → implementation → testing
4. **Research**: researcher → tree-of-thought → documentation

---

## 🔗 Related Documentation

- **CLAUDE.md** - System overview and configuration
- **WORKFLOWS.md** - Detailed workflow patterns
- **memory/agent-groups.json** - Agent capabilities
- **docs/standards/** - Coding and quality standards

---

*Version 3.1 - Streamlined for clarity and autonomous execution*
*Validated against actual system implementation (9 memory files, 7 hooks, 4 indexes)*