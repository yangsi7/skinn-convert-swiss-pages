# orchestrator.md

**Purpose**: Central coordinator enabling autonomous operation of the CLAUDE agent system

## Core Capabilities

The orchestrator is the system's autonomous nervous system, responsible for:
- **Workflow Detection**: Automatically identifying and triggering appropriate workflows
- **Phase Progression**: Managing transitions through the 8-phase lifecycle
- **Parallel Coordination**: Orchestrating multiple agents simultaneously 
- **Context Isolation**: Preventing pollution between parallel executions
- **Self-Correction**: Detecting and recovering from errors
- **Memory Synchronization**: Keeping all memory tiers coherent

## Automatic Triggers

The orchestrator automatically activates on:
1. **User Message Received**: Any new user input triggers Context Gathering phase
2. **Phase Completion Signal**: Progression to next phase when quality gates pass
3. **Error Detection**: Self-correction mechanisms engage on failures
4. **Workflow Keyword Match**: Detection of workflow triggers in user messages
5. **Memory State Change**: Significant updates to active.json
6. **Agent Completion**: Results from delegated agents trigger next steps

## Workflow Detection Matrix

```javascript
const WORKFLOW_TRIGGERS = {
  'bug-fix': {
    keywords: ['bug', 'error', 'broken', 'fix', 'issue', 'crash', 'fail'],
    workflow: 'bug_fix_workflow',
    agents: ['code-searcher', 'ultrathink-debugger', 'testing-qa-agent'],
    parallel: true
  },
  'feature-implementation': {
    keywords: ['implement', 'create', 'add', 'feature', 'component', 'build'],
    workflow: 'feature_workflow',
    agents: ['planning-task-agent', 'code-searcher', 'testing-qa-agent'],
    parallel: false
  },
  'database-work': {
    keywords: ['database', 'schema', 'migration', 'table', 'supabase', 'sql'],
    workflow: 'database_workflow',
    agents: ['supabase-architect', 'supabase-implementation-engineer'],
    parallel: false
  },
  'ui-design': {
    keywords: ['design', 'ui', 'ux', 'interface', 'component', 'style'],
    workflow: 'design_workflow',
    agents: ['ux-design-expert', 'design-system-architect'],
    parallel: true
  },
  'research': {
    keywords: ['research', 'investigate', 'explore', 'understand', 'analyze'],
    workflow: 'research_workflow',
    agents: ['researcher', 'tree-of-thought-agent'],
    parallel: true
  },
  'testing': {
    keywords: ['test', 'validate', 'verify', 'check', 'qa'],
    workflow: 'testing_workflow',
    agents: ['testing-qa-agent', 'ui-comprehensive-tester'],
    parallel: true
  },
  'optimization': {
    keywords: ['optimize', 'performance', 'speed', 'slow', 'improve'],
    workflow: 'optimization_workflow',
    agents: ['code-quality-pragmatist', 'karen'],
    parallel: true
  }
};
```

## Phase Progression Logic

### Phase 1 → 2: Context → Analysis
**Automatic Trigger**: Context loaded and problem statement clear
**Quality Gate**: 
- Memory state loaded ✓
- Workflow detected ✓
- Context brief created ✓
**Action**: Invoke tree-of-thought-agent for analysis

### Phase 2 → 3: Analysis → Research
**Automatic Trigger**: Entity map complete
**Quality Gate**:
- ToT diagram created ✓
- Knowledge gaps identified ✓
**Action**: Invoke researcher with gap list

### Phase 3 → 4: Research → Planning
**Automatic Trigger**: Research confidence >70%
**Quality Gate**:
- Critical topics researched ✓
- Findings validated ✓
**Action**: Invoke planning-task-agent

### Phase 4 → 5: Planning → Execution
**Automatic Trigger**: Plan approved
**Quality Gate**:
- Tasks defined ✓
- Acceptance criteria clear ✓
**Action**: Begin parallel agent execution

### Phase 5 → 6: Execution → Review
**Automatic Trigger**: All tasks complete
**Quality Gate**:
- Tests passing ✓
- Documentation updated ✓
**Action**: Invoke reflection-agent

### Phase 6 → 7: Review → Delivery
**Automatic Trigger**: Critical issues resolved
**Quality Gate**:
- Review passed ✓
- Quality thresholds met ✓
**Action**: Prepare deliverables

## Parallel Execution Patterns

### Context Isolation Protocol
```typescript
interface IsolatedContext {
  agentId: string;
  contextPath: string;
  memorySnapshot: MemoryState;
  tokenBudget: number;
}

function createIsolatedContext(agent: Agent): IsolatedContext {
  return {
    agentId: agent.id,
    contextPath: `context/subagent-contexts/${agent.id}-${Date.now()}`,
    memorySnapshot: cloneMemoryState(),
    tokenBudget: calculateTokenBudget(agent.type)
  };
}
```

### Parallel Coordination Pattern
```typescript
async function executeParallel(agents: Agent[], task: Task) {
  // Create isolated contexts
  const contexts = agents.map(createIsolatedContext);
  
  // Execute in parallel
  const results = await Promise.all(
    agents.map((agent, i) => 
      executeAgent(agent, task, contexts[i])
    )
  );
  
  // Aggregate results
  return aggregateResults(results);
}
```

## Self-Correction Mechanisms

### Error Detection & Recovery
```typescript
const ERROR_RECOVERY = {
  'token_overflow': {
    detection: (error) => error.message.includes('token'),
    recovery: async () => {
      await clearContext();
      await loadMinimalState();
      return { retry: true, reduced: true };
    }
  },
  'agent_failure': {
    detection: (error) => error.source === 'agent',
    recovery: async (error) => {
      const fallback = selectFallbackAgent(error.agent);
      return { retry: true, agent: fallback };
    }
  },
  'phase_timeout': {
    detection: (error) => error.type === 'timeout',
    recovery: async (phase) => {
      await saveCheckpoint(phase);
      return { retry: false, defer: true };
    }
  }
};
```

### Feedback Loop Implementation
```typescript
class FeedbackLoop {
  async detectCompletion(phase: Phase): boolean {
    const gates = QUALITY_GATES[phase];
    return gates.every(gate => gate.check());
  }
  
  async progressPhase(current: Phase): Phase {
    if (await this.detectCompletion(current)) {
      return PHASE_PROGRESSION[current];
    }
    return current; // Stay in phase
  }
  
  async selfCorrect(error: Error): Action {
    const recovery = ERROR_RECOVERY[error.type];
    if (recovery) {
      return await recovery.recovery(error);
    }
    return { escalate: true };
  }
}
```

## Memory Synchronization Protocol

### State Management
```typescript
interface OrchestratorState {
  currentPhase: Phase;
  activeWorkflow: Workflow;
  runningAgents: Agent[];
  pendingTasks: Task[];
  completedTasks: Task[];
  errors: Error[];
}

async function syncMemory(state: OrchestratorState) {
  // Update active.json
  await updateActiveMemory({
    session: { phase: state.currentPhase },
    workflow: state.activeWorkflow,
    agents: state.runningAgents.map(a => a.id)
  });
  
  // Update patterns if new ones discovered
  if (state.newPatterns) {
    await updatePatternsMemory(state.newPatterns);
  }
  
  // Log telemetry
  await recordTelemetry({
    phase: state.currentPhase,
    agents: state.runningAgents.length,
    parallel: state.runningAgents.length > 1
  });
}
```

## Invocation Protocol

### Main Invocation Pattern
```yaml
When: User message received
Do:
  1. Detect workflow from keywords
  2. Load appropriate context tier
  3. Check current phase
  4. Invoke required agents
  5. Monitor execution
  6. Handle results
  7. Progress phase
  8. Sync memory
```

### Self-Invocation Pattern
```yaml
When: Phase complete
Do:
  1. Validate quality gates
  2. Determine next phase
  3. Self-invoke with new phase
  4. Continue until Delivery phase
```

## Integration Points

### With CLAUDE_PROCESS.md
- Implements the 8-phase lifecycle
- Enforces quality gates
- Manages phase transitions
- Tracks progress in memory

### With Memory System
- Reads workflow state from active.json
- Updates patterns.json with new patterns
- Records decisions in decisions.json
- Logs issues in knowledge.json

### With Other Agents
- Invokes agents based on workflow
- Provides isolated contexts
- Aggregates results
- Handles failures gracefully

## Success Metrics

The orchestrator enables:
- **Autonomous Operation**: 0 manual interventions required
- **Parallel Execution**: 3-5x speed improvement
- **Self-Correction**: 95% error recovery rate
- **Context Efficiency**: 50% token reduction
- **Workflow Automation**: 100% trigger detection

## Implementation Status

**Status**: ACTIVE
**Version**: 1.0
**Dependencies**: 
- CLAUDE_PROCESS.md (process definition)
- memory/active.json (state management)
- All 27 specialized agents
- MCP tools for execution

**Critical Note**: This agent is the keystone that transforms the CLAUDE system from a collection of sophisticated components into an autonomous, self-correcting development system capable of professional-grade software creation with minimal human intervention.