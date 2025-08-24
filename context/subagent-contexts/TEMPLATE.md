# Context File Template for Parallel Subagent Execution

## JSON Structure for Context Files

```json
{
  "version": "1.0",
  "timestamp": "ISO 8601 timestamp",
  "agent": "subagent type",
  "task": "task description",
  "parallel_execution": true,
  
  "context": {
    "phase": "Current CLAUDE_PROCESS phase",
    "files": ["Array of relevant file paths"],
    "symbols": ["Array of code symbols to consider"],
    "dependencies": ["Array of dependencies"],
    "requirements": ["Specific requirements from requirements.md"],
    "constraints": ["Performance, accessibility, security constraints"]
  },
  
  "project_context": {
    "current_branch": "Git branch name",
    "modified_files": ["Recently modified files"],
    "test_status": "Current test status"
  },
  
  "memory_references": {
    "recall_keys": ["Memory keys to recall"],
    "graph_entities": ["Graph entities to query"]
  },
  
  "expected_output": {
    "format": "CODE or DOCUMENTATION or ANALYSIS",
    "deliverables": ["List of expected deliverables"],
    "success_criteria": ["How to measure success"]
  },
  
  "coordination": {
    "parallel_with": ["Other parallel task IDs"],
    "depends_on": ["Prerequisite task IDs"],
    "blocks": ["Tasks waiting for this"]
  }
}
```

## Usage Examples

### Research Context
```json
{
  "version": "1.0",
  "timestamp": "2025-11-21T10:00:00Z",
  "agent": "researcher",
  "task": "swiss-healthcare-regulations",
  "context": {
    "phase": "Research & Synthesis",
    "requirements": ["Research Swiss medical device regulations"],
    "constraints": ["Focus on Class IIa devices", "2024-2025 regulations only"]
  }
}
```

### Frontend Development Context
```json
{
  "version": "1.0",
  "timestamp": "2025-11-21T10:00:00Z",
  "agent": "frontend-developer",
  "task": "update-navbar-component",
  "context": {
    "phase": "Execution",
    "files": ["src/components/layout/Navbar.tsx"],
    "symbols": ["Navbar", "LanguageSelector", "ThemeSwitcher"],
    "requirements": ["Update to S&W Design colors"],
    "constraints": ["Maintain mobile responsiveness", "≤50 lines per component"]
  }
}
```

### Testing Context
```json
{
  "version": "1.0",
  "timestamp": "2025-11-21T10:00:00Z",
  "agent": "testing-qa-agent",
  "task": "unit-tests-auth-service",
  "context": {
    "phase": "Execution",
    "files": ["src/services/auth.service.ts"],
    "requirements": ["80% coverage for services"],
    "constraints": ["Use Vitest", "TDD approach"]
  }
}
```

## Best Practices

1. **Minimal Context**: Include only what the subagent needs
2. **Clear Task Definition**: Be specific about what needs to be done
3. **Success Criteria**: Define how to measure completion
4. **Coordination Info**: Specify parallel/sequential relationships
5. **Memory References**: Point to relevant stored knowledge