# CLAUDE-subagents.md
<!-- Comprehensive subagent catalog with invocation patterns -->

## Foundational Agents

### context-manager
**Purpose**: Loads, summarizes, and synchronizes context files
**Self-Prime**: Required
**Key Responsibilities**:
- Load and validate context files
- Generate implementation briefs
- Detect inconsistencies
- Synchronize planning, todo, event logs
**Invocation Pattern**:
```typescript
Task({
  subagent_type: 'context-manager',
  description: 'Load project context',
  prompt: 'self_prime: true\nTask: Generate implementation brief for [feature]'
})
```

### graph-memory-agent  
**Purpose**: Manages knowledge graph and semantic queries
**Self-Prime**: Required
**Key Responsibilities**:
- Create/update entities and relations
- Perform semantic searches
- Enforce schema validation
- Track project knowledge
**Invocation Pattern**:
```typescript
Task({
  subagent_type: 'graph-memory-agent',
  description: 'Update knowledge graph',
  prompt: 'self_prime: true\nTask: Store implementation decisions for [feature]'
})
```

### documentation-maintainer
**Purpose**: Maintains all project documentation
**Self-Prime**: Required
**When to Invoke**: ALWAYS after code changes
**Key Responsibilities**:
- Update docs/ structure
- Archive obsolete documents
- Enforce documentation standards
- Synchronize with code changes

### memory-bank-synchronizer
**Purpose**: Synchronizes memory-bank files with codebase
**Self-Prime**: Required
**Key Responsibilities**:
- Compare documented patterns with code
- Update architecture decisions
- Maintain CLAUDE-*.md accuracy
- Validate code examples
**Invocation Pattern**:
```typescript
Task({
  subagent_type: 'memory-bank-synchronizer',
  description: 'Sync memory-bank with code',
  prompt: 'self_prime: true\nTask: Update patterns after refactoring'
})
```

## Domain-Specific Agents

### planning-task-agent
**Purpose**: Creates structured project plans
**Self-Prime**: Required
**Best For**: New features, requirement changes
**Output**: Detailed plans with tasks and dependencies
**PROJECT_INDEX Usage**: Use project_structure and dependency_graph

### frontend-developer
**Purpose**: Implements UI components
**Self-Prime**: Optional
**Technologies**: React 18, TypeScript 5, Tailwind CSS
**Focus Areas**: 
- src/components/ structure
- Atomic design patterns
- Accessibility compliance
**Parallel Safe**: Yes (non-overlapping components)

### backend-developer
**Purpose**: Implements server-side functionality
**Self-Prime**: Optional
**Focus Areas**:
- API routes
- Authentication middleware
- Business logic
- Data validation
**Parallel Safe**: Yes (different endpoints)

### supabase-architect
**Purpose**: DESIGNS database schemas (no implementation)
**Self-Prime**: Required
**Output**: Schema specifications, migration plans
**Note**: Pass output to supabase-implementation-engineer

### supabase-implementation-engineer
**Purpose**: IMPLEMENTS database changes
**Self-Prime**: Required
**Input**: Specifications from supabase-architect
**Can Execute**: Migrations, RLS policies, edge functions

### testing-qa-agent
**Purpose**: Runs tests and quality audits
**Self-Prime**: Required
**Coverage**:
- Unit tests (Vitest)
- E2E tests (Puppeteer)
- Accessibility audits
- Performance metrics
**Parallel Safe**: Yes

### design-system-architect
**Purpose**: Defines design standards
**Self-Prime**: Optional
**Focus**:
- Design tokens
- Component guidelines
- UI patterns
- WCAG compliance

### repository-conformance-agent
**Purpose**: Ensures repository structure compliance
**Self-Prime**: Optional
**Tasks**:
- File organization
- Coding standards
- CI/CD configuration

## Research & Analysis Agents

### researcher
**Purpose**: Gathers authoritative information
**Self-Prime**: Optional
**Best Practices**:
- Cross-validate from 2+ sources
- Cite all sources
- Focus on official documentation
**Parallel Safe**: Yes (different topics)

### tree-of-thought-agent
**Purpose**: Creates structured problem analysis
**Self-Prime**: Optional
**Output**: Tree diagrams, entity relationships
**Best For**: Complex architectural decisions

### brainstormer
**Purpose**: Generates creative solutions
**Self-Prime**: Optional
**Process**:
- Divergent thinking phase
- Evaluation and scoring
- Recommendation ranking

### reflection-agent
**Purpose**: Reviews and critiques outputs
**Self-Prime**: Optional
**Perspectives**:
- Requirements alignment
- Architecture compliance
- Performance impact
- Code quality

## Specialized Agents

### git-agent
**Purpose**: Manages Git operations
**Self-Prime**: ALWAYS REQUIRED
**Tasks**:
- Commits with proper messages
- Branch management
- Pull requests
**Critical**: Include co-authored-by in commits

### requirements-spec-agent
**Purpose**: Documents requirements
**Self-Prime**: ALWAYS REQUIRED
**Output**: Detailed specifications with acceptance criteria

### invocation-chain-generator
**Purpose**: Designs agent execution sequences
**Self-Prime**: ALWAYS REQUIRED
**Output**: Ordered invocation chains with parallelization

### setup-new-project-agent
**Purpose**: Initializes new projects
**Self-Prime**: ALWAYS REQUIRED
**Coverage**: Structure, configuration, documentation

## Parallel Execution Guidelines

### Safe to Parallelize
```typescript
// Research different topics
Promise.all([
  researcher({ topic: 'React patterns' }),
  researcher({ topic: 'TypeScript best practices' }),
  researcher({ topic: 'Performance optimization' })
]);

// Non-overlapping components
Promise.all([
  frontendDeveloper({ component: 'Header' }),
  frontendDeveloper({ component: 'Footer' }),
  frontendDeveloper({ component: 'Sidebar' })
]);

// Documentation + Testing
Promise.all([
  documentationMaintainer({ scope: 'feature' }),
  testingQaAgent({ scope: 'unit-tests' })
]);
```

### Must Run Sequentially
- Database design → Implementation
- Planning → Execution
- Analysis → Design → Implementation
- Testing → Bug fixes → Re-testing

## Invocation Best Practices

1. **Always Include Context**:
   - Pass PROJECT_INDEX.json sections
   - Include relevant symbols
   - Provide clear success criteria

2. **Self-Prime Protocol**:
   - Include `self_prime: true` when required
   - Agent will run `/prime` automatically
   - Loads PROJECT_INDEX.json if available

3. **Context Budget**:
   - Extract only relevant sections
   - Target <30KB per agent
   - Use context/subagent-contexts/ for isolation

4. **Error Handling**:
   - Check agent output for errors
   - Retry with more context if needed
   - Fall back to alternative agents

5. **Documentation**:
   - ALWAYS invoke documentation-maintainer after changes
   - Update memory-bank via synchronizer
   - Log significant decisions

---
*This catalog ensures optimal subagent utilization with clear invocation patterns and parallelization guidelines.*