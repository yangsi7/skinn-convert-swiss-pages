# CLAUDE-todo.md

## Purpose
This file mirrors the TodoWrite tool's internal state for persistence across sessions. It tracks active tasks and their progress to maintain continuity between Claude sessions.

## Current Tasks

### Completed ✅
- [x] Review all agents in .claude/agents/ for report generation patterns
- [x] Design request_id system and folder structure
- [x] Add request_id to tree-of-thought-agent.md
- [x] Add request_id to all other report-generating agents
- [x] Update specification iteration agents (design-system, supabase, requirements)
- [x] Update context-manager.md for new memory bank system
- [x] Add proactive usage instructions to key agents
- [x] Move event-stream-api.py to scripts/
- [x] Move brainstorm spec to agent-outputs/archived/
- [x] Rename planning.md to CLAUDE-planning.md
- [x] Update all references to planning.md (38 occurrences)

### In Progress 🔄
- [ ] Create context/CLAUDE-todo.md (currently working on this)

### Pending ⏳
- [ ] Update CLAUDE.md with all changes
- [ ] Update CLAUDE_PROCESS.md with all changes
- [ ] Run memory-bank-synchronizer to validate

## Task Format

Each task should include:
- **Content**: What needs to be done
- **Status**: pending, in_progress, completed
- **Active Form**: Present continuous description for UI display

## Synchronization

This file should be kept in sync with the TodoWrite tool's internal state. Updates happen when:
- Tasks are added, modified, or completed
- Status changes occur
- Session continuity needs to be maintained

## Integration with TodoWrite

The TodoWrite tool should reference this file for:
- Session initialization (loading previous state)
- Persistence of task changes
- Recovery after context switches

---
*Last Updated: 2025-08-25 16:28*
*Session: Agent and Context System Overhaul*