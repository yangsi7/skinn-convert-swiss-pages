# Implementation Brief Template
VERSION: 1.0
BRIEF_ID: BRIEF-[timestamp]-[type]
TASK_ID: [T###]
CREATED: [ISO Date]
AGENT: [Assigned Agent]
STATUS: [Ready | In Progress | Blocked | Complete]

## Executive Brief
**Objective**: [Single, clear objective - what needs to be built]
**Context**: [Why this is needed and how it fits the larger system]
**Deadline**: [Expected completion date/time]
**Priority**: [Critical | High | Medium | Low]

## Research Foundation
**Research Status**: ✅ Complete (MANDATORY before implementation)
**Research Location**: `context/planning/research-findings.md#[section]`
**Key Validated Findings**:
1. [Finding with confidence score]
2. [Finding with confidence score]
3. [Finding with confidence score]

## Current State Analysis
### What Exists Now
- **Relevant Files**:
  - `[file1.tsx]` - [Purpose/relevance]
  - `[file2.ts]` - [Purpose/relevance]
  - `[file3.tsx]` - [Purpose/relevance]
- **Key Symbols/Components**:
  - `Component1` - [Current functionality]
  - `function2()` - [Current behavior]
  - `Service3` - [Current integration]
- **Existing Patterns**:
  - Pattern from `memory/patterns.json#[pattern-id]`
  - Convention from `CLAUDE-patterns.md#[section]`

### What Needs to Change
- **Modifications Required**:
  1. [Specific change 1]
  2. [Specific change 2]
  3. [Specific change 3]
- **New Components/Functions**:
  1. [New element 1 with purpose]
  2. [New element 2 with purpose]
- **Deprecations**:
  1. [What will be removed/replaced]

## Technical Specifications

### Architecture
```
[ASCII or Mermaid diagram showing component relationships]
```

### Dependencies
**External Libraries**:
- `[package@version]` - [Purpose]
- `[package@version]` - [Purpose]

**Internal Dependencies**:
- `[module]` - [How it's used]
- `[service]` - [Integration point]

### API/Interface Design
```typescript
// Type definitions
interface [InterfaceName] {
  [property]: [type];
}

// Function signatures
function [functionName](params): ReturnType {
  // Implementation approach
}

// Component props
interface [ComponentName]Props {
  [prop]: [type];
}
```

### Data Flow
1. **Input**: [Where data comes from]
2. **Processing**: [How it's transformed]
3. **Output**: [Where it goes]
4. **State Management**: [How state is handled]

## Implementation Steps

### Step 1: [Foundation/Setup]
**Action**: [Specific action to take]
**Files to Modify**:
- `[file1.ts]` - [What to change]
- `[file2.tsx]` - [What to add]

**Validation**:
- [ ] [How to verify this step]
- [ ] Test command: `[npm test specific]`

### Step 2: [Core Implementation]
**Action**: [Specific action to take]
**Code Template**:
```typescript
// Suggested implementation approach
[code snippet or pseudocode]
```

**Validation**:
- [ ] [How to verify this step]
- [ ] Test command: `[npm test specific]`

### Step 3: [Integration]
**Action**: [Connect to existing system]
**Integration Points**:
- Connect to `[Component/Service]`
- Update `[Configuration]`

**Validation**:
- [ ] [How to verify integration]
- [ ] E2E test: `[test command]`

### Step 4: [Testing]
**Test Coverage Required**:
- [ ] Unit tests (>80% coverage)
- [ ] Integration tests
- [ ] E2E tests for critical paths

**Test Files**:
- Create/Update `[test-file.test.ts]`
- Add scenarios for [edge cases]

### Step 5: [Documentation]
**Documentation Updates**:
- [ ] Update component documentation
- [ mysterious update pattern to `memory/patterns.json`
- [ ] Update API documentation if applicable

## Acceptance Criteria
**Functional Requirements**:
- [ ] [Measurable outcome 1]
- [ ] [Measurable outcome 2]
- [ ] [Measurable outcome 3]

**Non-Functional Requirements**:
- [ ] Performance: [Metric, e.g., <100ms response]
- [ ] Accessibility: [WCAG 2.1 AA compliance]
- [ ] Security: [Input validation, sanitization]

**Definition of Done**:
- [ ] Code implements all acceptance criteria
- [ ] All tests pass (unit, integration, E2E)
- [ ] Code review approved (if applicable)
- [ ] Documentation updated
- [ ] Memory banks synchronized
- [ ] No console errors or warnings

## Validation & Testing

### Test Commands
```bash
# Unit tests
npm test [specific-test-file]

# Integration tests
npm run test:integration

# E2E tests
npm run test:e2e [feature]

# Type checking
npm run typecheck

# Linting
npm run lint:fix
```

### Success Indicators
- All acceptance criteria verified ✅
- Test coverage meets threshold ✅
- Performance metrics within limits ✅
- No regression in existing functionality ✅

### Rollback Procedure
If implementation fails or causes issues:
1. `git stash` or `git reset --hard HEAD`
2. Restore from checkpoint if available
3. Document failure reason in `memory/knowledge.json`
4. Create new research task for alternative approach

## Constraints & Risks

### Technical Constraints
- [Framework limitation]
- [Performance budget]
- [Browser compatibility]

### Identified Risks
| Risk | Probability | Impact | Mitigation |
|------|------------|---------|------------|
| [Risk 1] | High/Med/Low | High/Med/Low | [How to handle] |
| [Risk 2] | High/Med/Low | High/Med/Low | [How to handle] |

### Assumptions
- [Assumption 1 - validated/unvalidated]
- [Assumption 2 - validated/unvalidated]

## References & Resources

### Internal References
- Strategic Plan: `context/planning/strategic-plan.md#[section]`
- Research: `context/planning/research-findings.md`
- Patterns: `memory/patterns.json#[pattern]`
- Similar Implementation: `[file-reference]`

### External Resources
- [Documentation link]
- [Tutorial/Guide link]
- [Stack Overflow solution]

## Post-Implementation Actions
After successful implementation:
1. Update `memory/patterns.json` with new patterns
2. Update `memory/decisions.json` with decisions made
3. Archive this brief to `context/briefs/completed/`
4. Update task status in `context/tasks/active-tasks.json`
5. Sync with TodoWrite tool
6. Run telemetry update

## Notes & Context
[Any additional context, warnings, or considerations for the implementing agent]

---
*This brief expires 7 days after creation and should be re-validated if not implemented.*