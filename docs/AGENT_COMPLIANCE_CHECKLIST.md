# Agent Compliance & Quality Assurance Checklist
VERSION: 2.0
CREATED: 2025-08-22
PURPOSE: Ensure systematic enforcement of orchestration protocols
STATUS: ACTIVE

## 🚨 CRITICAL: This Checklist is MANDATORY for ALL Tasks

### Part A: Orchestrator Compliance (Main Agent)

#### A1. Workflow Detection (EVERY user message)
- [ ] Checked WORKFLOWS.md for keyword triggers
- [ ] Logged workflow detection result in event-stream.md
- [ ] Selected appropriate workflow OR used Agent Selection Matrix
- [ ] Documented trigger keywords that matched

#### A2. Self-Priming Protocol (BEFORE any work)
- [ ] Ran `/prime` command
- [ ] Verified PROJECT_NAVIGATOR.json exists
- [ ] Loaded PROJECT_INDEX.json if available
- [ ] Checked memory MCP: `mcp__memory__search_nodes('project')`
- [ ] Context size < 100KB

#### A3. Agent Invocation (EVERY agent call)
- [ ] Included `self_prime: true` in invocation
- [ ] Passed explicit context in prompt
- [ ] Used parallel execution where possible
- [ ] Created isolated context files for parallel tasks

#### A4. Post-Implementation (AFTER EVERY change)
- [ ] Invoked documentation-maintainer with self_prime: true
- [ ] Updated todo.md (marked tasks complete)
- [ ] Updated planning.md (reflected changes)
- [ ] Updated event-stream.md (logged all actions)
- [ ] Archived obsolete docs to archive/

### Part B: Subagent Compliance

#### B1. Context Loading (MANDATORY first step)
```yaml
compliance_check:
  - [ ] Ran /prime command
  - [ ] Loaded PROJECT_INDEX.json
  - [ ] Extracted relevant sections only
  - [ ] Used Serena tools for symbol lookup
  - [ ] Kept context under budget
```

#### B2. Specification vs Implementation
| Agent Type | Can Implement? | Output Format |
|------------|---------------|---------------|
| supabase-implementation-engineer | ✅ YES | Implemented changes |
| All other agents | ❌ NO | Specifications only |

#### B3. Brief Format Compliance
- [ ] Used structured JSON brief format
- [ ] Included all required sections:
  - [ ] brief_id with timestamp
  - [ ] objective with success_criteria
  - [ ] context (current_state, target_state)
  - [ ] specifications (technical, design, testing)
  - [ ] implementation_steps
  - [ ] validation criteria

### Part C: Workflow Execution

#### C1. Workflow Trigger Keywords
```javascript
// MUST check these on EVERY message:
const mandatoryChecks = {
  'bug': 'bug-fix workflow',
  'database': 'database-migration workflow',
  'component': 'feature-implementation workflow',
  'performance': 'performance-optimization workflow',
  'security': 'security-audit workflow',
  'research': 'deep-research workflow'
};
```

#### C2. Database Workflow (Special Case)
- [ ] Design phase: Used supabase-architect
- [ ] Implementation: Used supabase-implementation-engineer
- [ ] Never used deprecated database-supabase-agent
- [ ] Applied RLS policies
- [ ] Updated TypeScript types

### Part D: Quality Gates

#### D1. Mandatory Gates (MUST pass all)
- [ ] ✅ Workflow detection performed
- [ ] ✅ All agents self-primed
- [ ] ✅ Documentation updated
- [ ] ✅ Tests executed
- [ ] ✅ Context files current

#### D2. Compliance Metrics
Track and report in event-stream.md:
- Workflow trigger accuracy (target: 95%)
- Agent self-prime rate (target: 100%)
- Documentation update rate (target: 100%)
- Context budget compliance (target: 100%)
- Parallel execution rate (target: 40%)

### Part E: Common Violations to Avoid

#### ❌ NEVER DO THIS:
1. Skip workflow detection check
2. Invoke agents without self_prime: true
3. Skip documentation-maintainer after implementation
4. Let context exceed 100KB
5. Use database-supabase-agent (deprecated)
6. Ask specification agents to implement
7. Forget to update context files
8. Leave obsolete docs in docs/ folder

#### ✅ ALWAYS DO THIS:
1. Check workflows FIRST on every message
2. Self-prime ALL agents
3. Document EVERY implementation
4. Track ALL actions in event-stream.md
5. Use supabase-architect for DB design
6. Use supabase-implementation-engineer for DB implementation
7. Archive obsolete docs after 7 days
8. Run tests after implementation

## Enforcement Mechanisms

### Automatic Enforcement
```javascript
// This should run automatically on EVERY task
function enforceCompliance() {
  // 1. Workflow Detection
  const workflow = detectWorkflow(userMessage);
  log('workflow-detection', workflow || 'none');
  
  // 2. Self-Prime Check
  if (!agent.selfPrimed) {
    throw new Error('Agent must self-prime before work');
  }
  
  // 3. Documentation Gate
  if (implementationComplete && !docUpdateInvoked) {
    throw new Error('Must invoke documentation-maintainer');
  }
  
  // 4. Context Budget
  if (contextSize > 100000) {
    throw new Error('Context exceeds 100KB limit');
  }
}
```

### Manual Verification
At the end of EVERY session, verify:
- [ ] All checklist items completed
- [ ] Compliance metrics logged
- [ ] Violations documented and fixed
- [ ] Knowledge graph updated

## Escalation Protocol

If compliance < 90% for any metric:
1. **STOP** current work
2. **AUDIT** last 10 operations
3. **IDENTIFY** violation patterns
4. **FIX** systematic issues
5. **RETRAIN** affected agents
6. **RESUME** with enhanced monitoring

## Success Criteria

A task is ONLY complete when:
- All Part A items checked ✅
- All Part B items checked ✅
- All Part C items checked ✅
- All Part D gates passed ✅
- Zero Part E violations ✅
- Compliance metrics ≥ 95% ✅

---

**REMEMBER**: This checklist is not optional. It is the MANDATORY quality assurance protocol that ensures the orchestration system functions correctly. Every violation degrades system performance and must be treated as a critical error.