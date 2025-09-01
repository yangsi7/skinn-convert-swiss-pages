# Current Sprint Plan
VERSION: 1.0
SPRINT: [Sprint Number/Name]
DATES: [Start Date] - [End Date]
STATUS: [Planning | Active | Review | Complete]
VELOCITY: [Story Points or Hours]

## Sprint Goal
**Primary Objective**: [What we aim to achieve this sprint]
**Success Metrics**:
- [ ] Metric 1: [Measurable outcome]
- [ ] Metric 2: [Measurable outcome]
- [ ] Metric 3: [Measurable outcome]

## Research Phase Status
| Research Item | Status | Confidence | Findings Location |
|---------------|---------|------------|-------------------|
| [Topic 1] | Complete | High | `research-findings.md#topic1` |
| [Topic 2] | In Progress | Medium | - |
| [Topic 3] | Pending | - | - |

## Sprint Backlog (Fully Elaborated)

### HIGH PRIORITY - Must Complete

#### T001: [Task Title]
**Feature**: FEAT-001
**Type**: Implementation
**Assigned**: main
**Status**: In Progress
**Research**: ✅ Complete

**Description**:
[Detailed description of what needs to be done]

**Acceptance Criteria**:
- [ ] Criterion 1
- [ ] Criterion 2
- [ ] Criterion 3

**Subtasks** (8/80 rule applied):
- [ ] **T001.1** (2h): [Specific action]
  - Validation: [How to verify]
  - Dependencies: None
- [ ] **T001.2** (4h): [Specific action]
  - Validation: [How to verify]
  - Dependencies: T001.1
- [ ] **T001.3** (6h): [Specific action]
  - Validation: [How to verify]
  - Dependencies: T001.2

**Implementation Notes**:
```markdown
- Use pattern from memory/patterns.json#auth-pattern
- Follow decision memory/decisions.json#D001
- Reference existing component: src/components/auth/Login.tsx
```

#### T002: [Task Title]
**Feature**: FEAT-001
**Type**: Testing
**Assigned**: testing-qa-agent
**Status**: Pending
**Research**: ✅ Complete

**Description**:
[Detailed description of what needs to be done]

**Acceptance Criteria**:
- [ ] Criterion 1
- [ ] Criterion 2
- [ ] Criterion 3

**Subtasks** (8/80 rule applied):
- [ ] **T002.1** (3h): [Specific action]
- [ ] **T002.2** (3h): [Specific action]
- [ ] **T002.3** (2h): [Specific action]

### MEDIUM PRIORITY - Should Complete

#### T003: [Task Title]
**Feature**: FEAT-002
**Type**: Research
**Assigned**: researcher
**Status**: Not Started
**Research**: ⏳ Required

**Description**:
[Detailed description of what needs to be done]

**Research Questions**:
1. [Question 1]
2. [Question 2]
3. [Question 3]

**Subtasks** (8/80 rule applied):
- [ ] **T003.1** (8h): Research [specific topic]
- [ ] **T003.2** (4h): Validate findings
- [ ] **T003.3** (4h): Document recommendations

### LOW PRIORITY - Nice to Have

#### T004: [Task Title]
**Feature**: FEAT-003
**Type**: Documentation
**Status**: Not Started
**Research**: N/A

**Description**:
[Brief description - not fully elaborated]

**Note**: Will be elaborated if high-priority tasks complete early

## Daily Progress Tracking

### Day 1 - [Date]
**Completed**:
- [ ] T001.1: [Result/Outcome]

**In Progress**:
- T001.2: [Current status]

**Blockers**:
- [Any blockers encountered]

### Day 2 - [Date]
**Completed**:
- [ ] [Tasks completed]

**In Progress**:
- [Current work]

**Blockers**:
- [Any blockers]

## Sprint Metrics

### Velocity Tracking
| Metric | Plan | Actual | Delta |
|--------|------|--------|-------|
| Tasks Planned | 10 | - | - |
| Tasks Completed | - | - | - |
| Hours Planned | 80 | - | - |
| Hours Actual | - | - | - |
| Research Items | 3 | - | - |

### Elaboration Metrics
| Metric | Count | Status |
|--------|-------|---------|
| Fully Elaborated Tasks | 4 | Ready |
| Partially Elaborated | 2 | Pending Research |
| Placeholder Tasks | 3 | Next Sprint |
| Subtasks Created | 12 | Granular |

## Dependencies & Risks

### Dependencies
| Task | Depends On | Status | Impact if Delayed |
|------|------------|---------|-------------------|
| T002 | T001 | In Progress | Testing blocked |
| T004 | T003 | Not Started | Documentation incomplete |

### Sprint Risks
| Risk | Probability | Impact | Mitigation |
|------|------------|---------|------------|
| Research delay | Medium | High | Start research early |
| API unavailable | Low | High | Use mock data |

## Definition of Done

A task is considered DONE when:
- [ ] Code is written and follows patterns
- [ ] Unit tests pass (>80% coverage)
- [ ] Integration tests pass
- [ ] Code review approved
- [ ] Documentation updated
- [ ] Acceptance criteria verified
- [ ] Memory banks synchronized

## Sprint Retrospective Notes
(To be filled at sprint end)

**What Went Well**:
- 

**What Could Improve**:
- 

**Action Items for Next Sprint**:
- 

## Links & References

- Strategic Plan: `context/planning/strategic-plan.md`
- Research Findings: `context/planning/research-findings.md`
- Task JSON: `context/tasks/active-tasks.json`
- Previous Sprint: `context/planning/sprint-[N-1].md`
- Memory Patterns: `memory/patterns.json`

---
*This sprint plan uses progressive elaboration. Only current sprint tasks are fully detailed.*
*Update daily with actual progress and new learnings.*