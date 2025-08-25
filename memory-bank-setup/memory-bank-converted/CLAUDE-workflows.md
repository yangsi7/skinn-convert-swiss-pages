# CLAUDE-workflows.md
<!-- Standard workflows and execution patterns -->

## Workflow Detection System

### Mandatory Check on EVERY Message
```javascript
function detectWorkflow(userMessage) {
  const message = userMessage.toLowerCase();
  
  // Check explicit workflow requests
  if (message.includes('workflow:')) {
    return message.split('workflow:')[1].trim();
  }
  
  // Check keyword triggers
  for (const [workflow, triggers] of workflowTriggers) {
    if (triggers.some(trigger => message.includes(trigger))) {
      return workflow;
    }
  }
  
  // Default to agent selection matrix
  return selectFromMatrix(message);
}
```

## Standard Workflows

### 1. Feature Implementation Workflow
**Triggers**: "implement", "create", "feature", "component", "UI"
**Duration**: 4-6 hours
```yaml
phases:
  - research_and_analysis:
      parallel: true
      agents: [researcher, context-manager, requirements-spec-agent]
      output: requirements_brief.json
  
  - planning_and_design:
      parallel: false
      agents: [planning-task-agent, design-system-architect]
      checkpoint: true
      output: implementation_plan.json
  
  - implementation:
      executor: main-agent
      support: [frontend-developer, backend-developer]
      validation: testing-qa-agent
  
  - documentation:
      agents: [documentation-maintainer, memory-bank-synchronizer]
      final: true
```

### 2. Bug Fix Workflow
**Triggers**: "bug", "error", "broken", "fix", "issue", "not working"
**Duration**: 1-2 hours
```yaml
phases:
  - analysis:
      parallel: true
      agents: [context-manager, tree-of-thought-agent]
      output: root_cause_analysis.json
  
  - solution_design:
      agents: [brainstormer, requirements-spec-agent]
      output: fix_approach.json
  
  - implementation:
      executor: main-agent
      validation: testing-qa-agent
  
  - verification:
      agents: [testing-qa-agent, reflection-agent]
      regression_check: true
```

### 3. Database Migration Workflow
**Triggers**: "database", "migration", "schema", "table", "column", "RLS"
**Duration**: 2-3 hours
```yaml
phases:
  - schema_analysis:
      agents: [supabase-architect]
      self_prime: required
      output: schema_design.json
  
  - migration_design:
      agents: [supabase-architect, planning-task-agent]
      checkpoint: true
      output: migration_strategy.json
  
  - migration_execution:
      executor: supabase-implementation-engineer
      validation: supabase-architect
      rollback_plan: required
  
  - validation:
      agents: [testing-qa-agent, documentation-maintainer]
```

### 4. Performance Optimization Workflow
**Triggers**: "slow", "performance", "optimize", "speed", "bottleneck"
**Duration**: 3-4 hours
```yaml
phases:
  - performance_analysis:
      parallel: true
      agents: [testing-qa-agent, researcher]
      metrics: [LCP, CLS, FID, memory]
      output: performance_baseline.json
  
  - optimization_planning:
      agents: [planning-task-agent, tree-of-thought-agent]
      targets: performance_targets.json
  
  - implementation:
      executor: main-agent
      techniques: [code-splitting, memoization, lazy-loading]
  
  - validation:
      agents: [testing-qa-agent]
      comparison: before_after_metrics.json
```

### 5. Security Audit Workflow
**Triggers**: "security", "vulnerability", "audit", "compliance", "penetration"
**Duration**: 4-5 hours
```yaml
phases:
  - security_assessment:
      parallel: true
      agents: [testing-qa-agent, researcher]
      standards: [OWASP, PCI-DSS, GDPR]
      output: vulnerability_report.json
  
  - risk_analysis:
      agents: [tree-of-thought-agent, planning-task-agent]
      severity: [critical, high, medium, low]
      output: risk_matrix.json
  
  - remediation:
      executor: main-agent
      priority: critical_first
      validation: testing-qa-agent
```

### 6. Deep Research Workflow
**Triggers**: "research", "investigate", "explore", "analyze", "study"
**Duration**: 2-3 hours
```yaml
phases:
  - discovery:
      parallel: true
      agents: [researcher, tree-of-thought-agent, context-manager]
      sources: [official_docs, expert_guides, case_studies]
  
  - synthesis:
      agents: [brainstormer, reflection-agent]
      output: research_synthesis.json
  
  - documentation:
      agents: [documentation-maintainer, graph-memory-agent]
      format: research_report.md
```

## Parallel Execution Patterns

### Pattern 1: Independent Research
```typescript
const results = await Promise.all([
  researcher.analyze({ topic: 'React 18 patterns' }),
  researcher.analyze({ topic: 'TypeScript 5 features' }),
  researcher.analyze({ topic: 'Tailwind optimization' })
]);
```

### Pattern 2: Component Development
```typescript
const components = await Promise.all([
  frontendDeveloper.implement({ component: 'Header' }),
  frontendDeveloper.implement({ component: 'Footer' }),
  frontendDeveloper.implement({ component: 'Sidebar' })
]);
```

### Pattern 3: Multi-Phase Testing
```typescript
const validation = await Promise.all([
  testingQaAgent.unitTests(),
  testingQaAgent.integrationTests(),
  testingQaAgent.accessibilityAudit()
]);
```

## Checkpoint Recovery System

### Checkpoint Structure
```json
{
  "checkpoint_id": "CHK-feature-123-phase2",
  "workflow": "feature-implementation",
  "phase": "planning_and_design",
  "timestamp": "2025-08-24T21:30:00Z",
  "completed_agents": ["researcher", "context-manager"],
  "pending_agents": ["planning-task-agent"],
  "context_snapshot": {
    "files_modified": ["src/components/Feature.tsx"],
    "memory_keys": ["task-123-research"]
  }
}
```

### Recovery Procedure
1. Load checkpoint from context/checkpoints/
2. Restore memory from MCP
3. Skip completed agents
4. Resume from pending agents
5. Continue workflow

## Agent Selection Matrix

| Task Type | Primary Agent | Support Agents | Parallel? |
|-----------|--------------|----------------|-----------|
| UI Component | frontend-developer | design-system-architect | Yes |
| API Endpoint | backend-developer | supabase-architect | Yes |
| Database Change | supabase-architect → implementation-engineer | - | No |
| Bug Investigation | tree-of-thought-agent | researcher | Partial |
| Documentation | documentation-maintainer | memory-bank-synchronizer | Yes |
| Testing | testing-qa-agent | reflection-agent | Yes |
| Code Review | reflection-agent | testing-qa-agent | Yes |
| Research | researcher | brainstormer | Yes |

## Workflow Metrics

### Target Performance
- **Workflow Detection Accuracy**: >95%
- **Parallel Execution Rate**: >40%
- **Context Budget Usage**: <30%
- **Checkpoint Recovery Success**: 100%
- **Documentation Coverage**: 100%

### Monitoring Points
- Workflow trigger detection
- Agent self-prime compliance
- Parallel execution efficiency
- Context window usage
- Error recovery rate

## Custom Workflow Creation

### Template
```yaml
name: custom-workflow
triggers: ["keyword1", "keyword2"]
duration: estimated-hours
phases:
  - phase_name:
      parallel: true/false
      agents: [agent-list]
      checkpoint: true/false
      output: expected-output
  - implementation:
      executor: main-agent/specific-agent
      validation: testing-qa-agent
  - documentation:
      agents: [documentation-maintainer]
```

### Best Practices
1. Always include documentation phase
2. Add checkpoints for phases >30 minutes
3. Parallelize independent tasks
4. Include validation after implementation
5. Update memory-bank after completion

---
*These workflows ensure consistent, efficient execution with automatic documentation and recovery capabilities.*