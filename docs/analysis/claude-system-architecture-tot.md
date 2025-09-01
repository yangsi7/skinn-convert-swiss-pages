# CLAUDE System Architecture - Tree of Thought Analysis
**Generated**: 2025-08-28
**Version**: 2.0 (JSON Memory System)
**Purpose**: Comprehensive architectural analysis showing all components, relationships, and autonomous operation flows

## 🌳 Master Tree Structure

```
CLAUDE SYSTEM v2.0
├── 🔴 CORE ORCHESTRATION LAYER
│   ├── 📋 CLAUDE.md (Master Instructions)
│   │   ├── System Process Declaration → CLAUDE_PROCESS.md
│   │   ├── Memory System v2.0 Definition
│   │   ├── Agent Loop Process (7 Phases)
│   │   ├── Index Priming Protocol (MANDATORY)
│   │   ├── MCP Tools Integration Map
│   │   └── Critical Principles & Guard-rails
│   │
│   ├── 🔄 context/CLAUDE_PROCESS.md (8-Phase Lifecycle)
│   │   ├── Phase 1: Context Gathering [MANDATORY FIRST]
│   │   │   ├── Workflow Detection (keyword triggers)
│   │   │   ├── Project Type Detection (React Router vs Next.js)
│   │   │   ├── Memory Loading (tiered: 2K/8K/32K)
│   │   │   ├── Index Querying (smart queries only)
│   │   │   └── Telemetry Recording
│   │   │
│   │   ├── Phase 2: Analysis
│   │   │   ├── Tree-of-Thought Construction
│   │   │   ├── Entity Identification
│   │   │   ├── Relationship Mapping
│   │   │   └── Knowledge Graph Update
│   │   │
│   │   ├── Phase 3: Research & Synthesis [MANDATORY BEFORE PLANNING]
│   │   │   ├── Internal Research (code exploration)
│   │   │   ├── External Research (best practices)
│   │   │   ├── Cross-validation (2+ sources)
│   │   │   └── Pattern Extraction
│   │   │
│   │   ├── Phase 4: Brainstorm & Evaluation
│   │   │   ├── Solution Generation
│   │   │   ├── Feasibility Scoring
│   │   │   ├── Architecture Decisions
│   │   │   └── Pattern Documentation
│   │   │
│   │   ├── Phase 5: Planning (Progressive Elaboration)
│   │   │   ├── Stage 1: Strategic Planning (WBS 3-4 levels)
│   │   │   ├── Stage 2: Sprint Planning (next 14 days only)
│   │   │   ├── Stage 3: Task Decomposition (2-8 hour chunks)
│   │   │   └── Research Completion Gate [BLOCKS PROGRESS]
│   │   │
│   │   ├── Phase 6: Execution
│   │   │   ├── Workflow Matching [EVERY TASK]
│   │   │   ├── Agent Self-Priming [MANDATORY]
│   │   │   ├── Quality Gates (lint, test, type)
│   │   │   ├── Documentation Updates [AUTOMATIC]
│   │   │   └── Memory Synchronization
│   │   │
│   │   ├── Phase 7: Review & Reflection
│   │   │   ├── Expert Panel Simulation
│   │   │   ├── Critical Issue Identification
│   │   │   ├── Fix Implementation
│   │   │   └── Lessons Learned Capture
│   │   │
│   │   └── Phase 8: Delivery
│   │       ├── Completion Verification
│   │       ├── Deliverable Gathering
│   │       ├── Summary Composition
│   │       └── System Standby
│   │
│   └── 🎯 context/WORKFLOWS.md (Orchestration Patterns)
│       ├── Workflow Detection Matrix
│       │   ├── Keyword Triggers → Agent Selection
│       │   ├── Parallel Execution Flags
│       │   ├── Output Type Definitions
│       │   └── Index Focus Areas
│       │
│       └── Standard Workflows
│           ├── Feature Implementation (progressive)
│           ├── Bug Fix (root cause → fix)
│           ├── Database Migration (design → implement)
│           ├── Performance Optimization (analyze → optimize)
│           └── Security Audit (scan → report → fix)
│
├── 🧠 MEMORY SYSTEM v2.0 (Tiered JSON Storage)
│   ├── memory/active.json (8K tokens) [Session State]
│   │   ├── current_session {}
│   │   ├── tasks []
│   │   ├── context {}
│   │   ├── event_log []
│   │   └── orchestration_state {}
│   │
│   ├── memory/patterns.json (2K tokens) [Code Patterns]
│   │   ├── patterns [] with confidence scores
│   │   ├── usage_stats {}
│   │   └── last_used timestamps
│   │
│   ├── memory/knowledge.json (32K tokens) [Domain Knowledge]
│   │   ├── tier_1 {} (frequently accessed)
│   │   ├── tier_2 {} (tree structures, analyses)
│   │   ├── tier_3 {} (archived content)
│   │   └── research {} (permanent findings)
│   │
│   ├── memory/decisions.json (8K tokens) [Architecture]
│   │   ├── decisions [] with TTL
│   │   ├── confidence_scores {}
│   │   └── deprecation_dates {}
│   │
│   ├── memory/agent-groups.json (8K tokens) [Agent Organization]
│   │   ├── core {} (orchestrator, planner, executor)
│   │   ├── research {} (code-searcher, researcher)
│   │   ├── design {} (ux-expert, design-architect)
│   │   ├── database {} (supabase-architect, implementation)
│   │   ├── quality {} (testing-qa, guardrails, reflection)
│   │   └── utility {} (context-manager, tree-of-thought)
│   │
│   ├── memory/telemetry.json [Tracking & Metrics]
│   │   ├── sessions []
│   │   ├── priming_stats {}
│   │   ├── token_savings {}
│   │   └── error_logs []
│   │
│   ├── memory/index-cache.json [Query Cache]
│   │   └── cached_queries {} (60min TTL)
│   │
│   └── memory/index-patterns.json [Query Optimization]
│       └── common_patterns [] with frequency
│
├── 🤖 AGENT SYSTEM (.claude/agents/)
│   ├── 🎮 Central Coordinator
│   │   └── orchestrator.md
│   │       ├── Workflow Detection Engine
│   │       ├── Phase Progression Controller
│   │       ├── Parallel Execution Manager
│   │       ├── Quality Gate Validator
│   │       └── Self-Correction Mechanisms
│   │
│   ├── 🎯 Core Agents (Sequential)
│   │   ├── planning-task-agent.md
│   │   │   ├── Progressive Elaboration
│   │   │   └── WBS Generation
│   │   ├── invocation-chain-generator.md
│   │   │   └── Multi-agent Coordination
│   │   └── Main Agent (implicit)
│   │       ├── Frontend Implementation
│   │       ├── Backend Implementation
│   │       └── Uses: Serena MCP, Playwright MCP
│   │
│   ├── 🔍 Research Agents (Parallel)
│   │   ├── code-searcher.md
│   │   │   ├── CoD Mode Analysis
│   │   │   ├── Forensic Investigation
│   │   │   └── Uses: Serena MCP, Context7 MCP
│   │   ├── researcher.md
│   │   │   ├── External Research
│   │   │   └── Uses: Brave Search MCP, Context7 MCP
│   │   └── brainstormer.md
│   │       └── Uses: Brave Search MCP
│   │
│   ├── 🎨 Design Agents (Collaborative)
│   │   ├── ux-design-expert.md
│   │   │   ├── Conversion Optimization
│   │   │   └── Uses: Playwright MCP
│   │   └── design-system-architect.md
│   │       ├── Atomic Design
│   │       ├── Accessibility
│   │       └── Uses: Playwright MCP
│   │
│   ├── 🗄️ Database Agents (Sequential)
│   │   ├── supabase-architect.md
│   │   │   ├── Schema Design
│   │   │   └── Uses: Supabase MCP
│   │   └── supabase-implementation-engineer.md
│   │       ├── Migration Execution
│   │       └── Uses: Supabase MCP
│   │
│   ├── ✅ Quality Agents (Parallel/Sequential)
│   │   ├── testing-qa-agent.md
│   │   │   └── Uses: Playwright MCP
│   │   ├── guardrails-agent.md
│   │   │   └── Safety Enforcement
│   │   ├── reflection-agent.md
│   │   │   └── Expert Panel Simulation
│   │   └── ui-comprehensive-tester.md
│   │       └── Uses: Playwright MCP
│   │
│   ├── 📚 Utility Agents
│   │   ├── context-manager.md
│   │   │   └── Context Loading/Pruning
│   │   ├── tree-of-thought-agent.md
│   │   │   └── Uses: Calculator MCP
│   │   ├── documentation-maintainer.md
│   │   │   └── Uses: Package Version MCP
│   │   ├── memory-bank-synchronizer.md
│   │   │   └── Memory Updates
│   │   └── requirements-spec-agent.md
│   │       └── Requirement Analysis
│   │
│   └── 👮 Validation Agents
│       ├── karen.md (Compliance Officer)
│       ├── Jenny.md (Quality Auditor)
│       └── task-completion-validator.md
│
├── 📊 CONTEXT SYSTEM (4-Index Architecture)
│   ├── Index Files (Auto-generated)
│   │   ├── PROJECT_INDEX.json (~160KB)
│   │   │   ├── Code Structure
│   │   │   ├── Functions & Classes
│   │   │   ├── Dependencies
│   │   │   └── NO IMAGES
│   │   │
│   │   ├── VISUAL_ASSETS_INDEX.json (~124KB)
│   │   │   ├── All Images
│   │   │   ├── Videos
│   │   │   ├── Icons
│   │   │   └── Metadata
│   │   │
│   │   ├── context/project-tree.txt (~36KB)
│   │   │   └── Directory Tree (no images)
│   │   │
│   │   └── context/project-index.md (~10KB)
│   │       └── High-level Overview
│   │
│   ├── Smart Query System (scripts/query-index.sh)
│   │   ├── Token Budget Aware (<5K per query)
│   │   ├── Result Caching (60min TTL)
│   │   ├── Agent-specific Contexts
│   │   └── Progressive Loading Strategy
│   │
│   └── Event Tracking (context/event-stream.md)
│       ├── Structured Event Schema
│       ├── Action/Observation/Planning
│       ├── KnowledgeCapture Events
│       └── Automatic Enhancement
│
├── 🔧 HOOKS & AUTOMATION (.claude/hooks/)
│   ├── Event Enhancement
│   │   ├── enhance-events.py (periodic)
│   │   ├── periodic-enhance.py (every 5 events)
│   │   └── track-todos.py (task tracking)
│   │
│   ├── Index Management
│   │   ├── update-indexes.py (file changes)
│   │   └── start-run.py (session init)
│   │
│   └── Session Management
│       └── session-cleanup.py (context pruning)
│
├── 🛠️ MCP TOOLS INTEGRATION
│   ├── Code Tools
│   │   ├── Serena MCP → Symbol Navigation
│   │   └── Context7 MCP → Library Docs
│   │
│   ├── Research Tools
│   │   ├── Brave Search MCP → Web Research
│   │   └── Calculator MCP → Computations
│   │
│   ├── Testing Tools
│   │   └── Playwright MCP → E2E Testing (replaces Puppeteer)
│   │
│   ├── Database Tools
│   │   └── Supabase MCP → Database Operations
│   │
│   └── Payment Tools
│       └── Stripe MCP → Payment Processing
│
└── 🚀 AUTONOMOUS OPERATION FLOWS
    ├── Workflow Detection Flow
    │   ├── User Message → Keyword Scan
    │   ├── Match → Select Workflow
    │   ├── No Match → Invocation Chain Generation
    │   └── Execute → Phase Progression
    │
    ├── Phase Progression Flow
    │   ├── Check Quality Gates
    │   ├── Validate Completion
    │   ├── Auto-advance or Block
    │   └── Update Orchestration State
    │
    ├── Parallel Execution Flow
    │   ├── Identify Independent Tasks
    │   ├── Create Isolated Contexts
    │   ├── Promise.all Execution
    │   └── Aggregate Results
    │
    ├── Self-Correction Flow
    │   ├── Detect Error/Failure
    │   ├── Analyze Root Cause
    │   ├── Select Recovery Strategy
    │   ├── Retry with Adjustments
    │   └── Log Learning to Memory
    │
    └── Memory Synchronization Flow
        ├── Capture State Changes
        ├── Update Relevant Tiers
        ├── Promote/Demote Content
        ├── Archive Obsolete Data
        └── Maintain Session Continuity
```

## 🔗 Critical Relationships & Dependencies

### 1. Orchestration Dependencies
```
orchestrator.md
    ↓ controls
CLAUDE_PROCESS.md phases
    ↓ triggers
WORKFLOWS.md patterns
    ↓ invokes
Agent Groups (parallel/sequential)
    ↓ updates
Memory System (JSON files)
    ↓ queries
Index System (smart queries)
```

### 2. Memory Tier Hierarchy
```
Tier 1 (2K): patterns.json → Frequent patterns
    ↓
Tier 2 (8K): active.json, decisions.json → Active work
    ↓
Tier 3 (32K): knowledge.json → Comprehensive storage
```

### 3. Agent Communication Patterns
```
Orchestrator → Planning Agent → Invocation Chain
    ↓                              ↓
Main Agent ← Context Manager → Research Agents (parallel)
    ↓                              ↓
Quality Agents ← Testing → Documentation Maintainer
    ↓
Memory Synchronizer → All Memory Files
```

### 4. Index Query Flow
```
Agent Request → query-index.sh → Cache Check
                                      ↓
                    PROJECT_INDEX.json (if miss)
                           ↓
                    Filtered Results (<5K tokens)
                           ↓
                    Agent Context → Execution
```

## 🎯 Autonomous Operation Mechanisms

### Automatic Workflow Detection
1. **Keyword Scanning**: Every message scanned for triggers
2. **Pattern Matching**: Keywords mapped to workflows
3. **Agent Selection**: Workflow determines agent chain
4. **Parallel Flags**: Identifies parallelizable tasks

### Phase Progression Matrix
```
Phase → Quality Gates → Auto-advance Decision
  ↓                           ↓
Pass: Next Phase        Fail: Block & Report
```

### Parallel Execution Pattern
```javascript
// Orchestrator's parallel execution
const isolatedContexts = agents.map(agent => ({
  path: `context/subagent-contexts/${agent.id}`,
  memory: cloneMemoryState(),
  budget: calculateTokenBudget(agent)
}));

const results = await Promise.all(
  agents.map((agent, i) => 
    executeAgent(agent, task, isolatedContexts[i])
  )
);
```

### Self-Correction Mechanisms
- **Token Overflow**: Clear → Reload minimal → Retry
- **Agent Failure**: Fallback agent → Reduced scope
- **Phase Timeout**: Save checkpoint → Defer
- **Test Failure**: Analyze → Fix → Re-run

## 📈 Quality Gates & Verification

### Mandatory Gates per Phase
1. **Context Gathering**: Workflow detected, Context <100KB
2. **Analysis**: ToT complete, Entities mapped
3. **Research**: Confidence >70%, Sources validated
4. **Planning**: Tasks defined, Acceptance criteria
5. **Execution**: Tests passing, Docs updated
6. **Review**: Quality thresholds met
7. **Delivery**: All complete, Summary ready

### Continuous Enforcement
- **Every Message**: Workflow detection
- **Every Agent**: self_prime: true
- **Every Implementation**: Documentation update
- **Every Change**: Memory synchronization
- **Every Query**: Token budget check

## 🔄 Data Flows

### Session State Flow
```
User Input → active.json → Orchestrator
    ↓            ↓              ↓
Workflow    Task State    Phase Progress
    ↓            ↓              ↓
Agents      TodoWrite     Quality Gates
    ↓            ↓              ↓
Results    Completion    Next Phase
```

### Knowledge Accumulation Flow
```
Research → patterns.json (if reusable)
    ↓
Findings → knowledge.json (permanent)
    ↓
Decisions → decisions.json (with TTL)
    ↓
Telemetry → telemetry.json (metrics)
```

### Index Query Optimization Flow
```
First Query → Cache Miss → Full Search
    ↓              ↓            ↓
Pattern → index-patterns.json → Cache Hit
    ↓                             ↓
Optimized → Faster Response → Token Savings
```

## 🚨 Critical System Invariants

1. **Research-First**: NO deliverables without research completion
2. **Self-Priming**: ALL agents MUST include self_prime: true
3. **Index Access**: NEVER direct read PROJECT_INDEX.json (use query-index.sh)
4. **Memory Tiers**: Respect 2K/8K/32K boundaries
5. **Workflow Detection**: Check EVERY user message
6. **Documentation**: Update AFTER EVERY implementation
7. **Progressive Planning**: Detail only next 14 days
8. **Parallel Isolation**: Separate contexts for concurrent execution
9. **Quality Gates**: Block progression on failure
10. **Session Continuity**: Always maintain active.json state

## 🎭 Hidden Dependencies

### Implicit Coupling
- `orchestrator.md` ← → `CLAUDE_PROCESS.md` (bidirectional)
- `active.json` → All agents (state dependency)
- `query-index.sh` → `index-cache.json` (performance)
- `enhance-events.py` → `event-stream.md` (periodic)

### Cascade Effects
- Memory tier promotion affects query performance
- Pattern confidence updates influence agent decisions
- Index regeneration invalidates cache
- Workflow detection failures trigger fallback chains

### Critical Paths
1. **Startup**: active.json → orchestrator → workflow detection
2. **Research**: researcher → knowledge.json → planner
3. **Implementation**: planner → executor → quality → memory-sync
4. **Recovery**: error → orchestrator → self-correction → retry

## 💡 System Insights

### Strengths
1. **Autonomous Operation**: Self-driving through orchestrator
2. **Progressive Elaboration**: Avoids over-planning
3. **Parallel Execution**: Efficient resource utilization
4. **Self-Correction**: Resilient to failures
5. **Memory Persistence**: Maintains context across sessions

### Innovation Points
1. **4-Index System**: Separates code from visual assets
2. **Smart Queries**: Token-efficient context loading
3. **Tiered Memory**: Optimizes for access patterns
4. **Research Gates**: Prevents premature implementation
5. **Workflow Detection**: Keyword-based automation

### Optimization Opportunities
1. **Cache Warming**: Pre-load common patterns
2. **Predictive Promotion**: Anticipate memory tier needs
3. **Agent Pooling**: Reuse agent instances
4. **Query Batching**: Combine related index queries
5. **Event Compression**: Summarize old events

## 📊 Metrics & Monitoring

### Key Performance Indicators
- **Token Savings**: Via smart queries vs direct loading
- **Cache Hit Rate**: Efficiency of index caching
- **Phase Duration**: Time per lifecycle phase
- **Parallel Speedup**: Concurrent vs sequential execution
- **Error Recovery Rate**: Self-correction success

### Health Indicators
- **Memory Tier Balance**: Distribution across tiers
- **Pattern Confidence**: Average confidence scores
- **Decision TTL**: Freshness of architecture choices
- **Index Staleness**: Time since last regeneration
- **Session Continuity**: Successful state persistence

---

## Summary

The CLAUDE system v2.0 represents a sophisticated autonomous development system with:
- **8-phase lifecycle** with mandatory research-first methodology
- **Orchestrator-driven** workflow detection and phase progression
- **Parallel execution** with isolated contexts
- **Self-correction** mechanisms for resilience
- **Tiered memory** system for efficient context management
- **4-index architecture** for token-efficient navigation
- **30+ specialized agents** organized in functional groups
- **MCP tools integration** for external capabilities
- **Progressive elaboration** to avoid over-planning
- **Continuous quality gates** ensuring standards compliance

The system achieves autonomous operation through the orchestrator's coordination of workflows, automatic phase progression based on quality gates, and self-correction mechanisms that handle failures gracefully. The memory system provides persistence across sessions while the index system enables efficient navigation of large codebases without token overflow.