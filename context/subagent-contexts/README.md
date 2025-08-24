# Subagent Contexts Directory

This directory contains isolated context files for parallel subagent execution.

## Purpose

When running multiple subagents in parallel, each needs its own isolated context to prevent conflicts. Context files here are temporary and should be cleaned up after workflow completion.

## File Format

```json
{
  "context_id": "CTX-{agent}-{timestamp}",
  "agent": "frontend-developer",
  "task": "Update header component",
  "created_at": "2025-11-21T10:00:00Z",
  "expires_at": "2025-11-21T11:00:00Z",
  "relevant_files": ["src/components/layout/Navbar.tsx"],
  "dependencies": ["React", "TypeScript"],
  "constraints": ["Maintain mobile responsiveness"],
  "output_expected": "specification_brief.json"
}
```

## Lifecycle

1. **Creation**: Main agent creates context file before parallel invocation
2. **Usage**: Subagent reads its specific context file
3. **Cleanup**: Main agent deletes after workflow completion
4. **Recovery**: If workflow fails, contexts are preserved for debugging

## Naming Convention

`{agent_name}-{task_id}-context.json`

Example: `frontend-developer-TASK-001-context.json`

## Auto-Cleanup

Files older than 1 hour are automatically deleted by the context-manager agent during its maintenance cycle.
