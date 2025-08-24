# Checkpoints Directory

This directory stores workflow checkpoints for recovery and resumption.

## Purpose

Complex workflows save their state at phase boundaries, allowing recovery from failures without losing progress.

## Checkpoint Structure

```json
{
  "checkpoint_id": "CHK-{workflow_id}-{phase}",
  "workflow_id": "WF-feature-implementation-001",
  "workflow_name": "feature-implementation",
  "phase": "specification_preparation",
  "timestamp": "2025-11-21T10:00:00Z",
  "status": "completed",
  
  "completed_phases": [
    {
      "phase": "research_and_analysis",
      "completed_at": "2025-11-21T09:30:00Z",
      "agents_invoked": ["researcher", "context-manager", "requirements-spec-agent"],
      "outputs": ["research_brief.json", "context.json", "requirements.json"]
    }
  ],
  
  "current_phase": {
    "phase": "specification_preparation",
    "started_at": "2025-11-21T09:45:00Z",
    "completed_agents": ["design-system-architect"],
    "pending_agents": ["database-supabase-agent", "context-manager"]
  },
  
  "context_snapshot": {
    "modified_files": ["src/components/NewFeature.tsx"],
    "memory_keys": ["task-001-research", "task-001-context"],
    "todo_items": ["TASK-001", "TASK-002"],
    "event_stream_position": 1234
  },
  
  "recovery_data": {
    "can_resume": true,
    "resume_from": "specification_preparation",
    "skip_completed": ["researcher", "context-manager", "design-system-architect"],
    "restoration_steps": [
      "Load context from memory",
      "Restore file modifications",
      "Continue from pending agents"
    ]
  }
}
```

## Lifecycle

1. **Creation**: Saved at each phase boundary marked with `checkpoint: true`
2. **Update**: Modified as agents complete within a phase
3. **Recovery**: Loaded when resuming interrupted workflows
4. **Archival**: Moved to archive/ after successful workflow completion
5. **Cleanup**: Deleted after 7 days if workflow abandoned

## File Naming

`{workflow_id}-{phase}-checkpoint.json`

Example: `WF-feature-001-planning-checkpoint.json`

## Recovery Process

1. Main agent detects incomplete workflow
2. Loads latest checkpoint
3. Restores context from memory MCP
4. Skips completed agents
5. Resumes from pending agents
6. Continues workflow execution

## Checkpoint Commands

- Save: Automatic at phase boundaries
- Load: `memory.recall('checkpoint-{workflow_id}')`
- List: `ls context/checkpoints/*.json`
- Clean: Remove checkpoints older than 7 days
