# CLAUDE-temp.md
<!-- Temporary scratch pad for research, brainstorming, and work-in-progress -->

## Current Session: System Audit and Streamlining

### Tree of Thought Analysis - System Audit

## Goal
Create a fully autonomous, self-updating, self-correcting system with excellent project context awareness.

## Issues Identified

### 1. File Organization Issues
- **Root Clutter**: WORKFLOWS.md in root instead of context/ or docs/
- **Backup Files**: 16 .bak files scattered throughout the codebase
- **Agent Outputs**: In context/agent-outputs/ instead of docs/ 
- **Orphaned References**: PROJECT_INDEX.json references non-existent context/subagent-contexts/
- **Misplaced Scripts**: event-stream-api.py in context/ instead of scripts/

### 2. Hook Issues
- **Auto-creation**: update-event-stream.py creates subagent-contexts/ automatically
- **Purpose**: Creates filtered context for subagents (but directory doesn't exist)
- **Problem**: Directory gets created even when not needed, then might get deleted

### 3. Memory Bank Inconsistencies
- **Missing Files**:
  - CLAUDE-troubleshooting.md doesn't exist (referenced in CLAUDE.md)
  - CLAUDE-config-variables.md doesn't exist (referenced in CLAUDE.md)
- **Naming Inconsistencies**:
  - CLAUDE-planning.md vs planning.md references
  - CLAUDE-todo.md vs todo.md references
  - Some files have CLAUDE- prefix, others don't

### 4. Documentation Process Issues
- **Event Tracking**: event-stream-api.py in context/ instead of scripts/
- **Archive Policy**: No automatic 7-day archival happening
- **Cross-references**: Many outdated references in CLAUDE_PROCESS.md
- **Duplicated Content**: Similar information in multiple places

### 5. Subagent Integration Issues
- **Self-priming**: Not consistently enforced (missing self_prime: true in many workflows)
- **Request ID tracking**: Not implemented in all agents
- **Output organization**: agent-outputs not following request_id structure
- **Agent File Consistency**: Some agents have different structures/formats

### 6. Process Gaps
- **Workflow Detection**: WORKFLOWS.md not referenced in main CLAUDE.md or CLAUDE_PROCESS.md properly
- **Memory Bank Sync**: Not automatically triggered after changes
- **Index Updates**: Not automated after structural changes
- **Context Budget**: No enforcement of <100KB limit

## Root Causes

### RC1: Legacy Evolution
- System evolved organically without cleanup
- Multiple iterations left artifacts
- Old systems not fully deprecated

### RC2: Manual Processes  
- Many tasks rely on manual intervention
- No automated cleanup/maintenance
- Scripts exist but aren't integrated

### RC3: Incomplete Integration
- New systems (memory bank, workflows) not fully integrated
- Old references not updated
- Documentation drift

### RC4: Missing Automation
- No hooks for automatic cleanup
- No scheduled maintenance tasks
- Manual triggers for critical processes

## Solution Branches

### Branch 1: Quick Fixes (Immediate)
- Delete all .bak files
- Move WORKFLOWS.md to context/
- Move event-stream-api.py to scripts/
- Create missing memory bank files
- Fix agent references
- Clean up agent-outputs

### Branch 2: Structural Reform (Medium-term)
- Reorganize agent-outputs with proper structure
- Update all agent prompts for consistency
- Fix hook to not create unnecessary directories
- Implement automated cleanup
- Standardize naming conventions

### Branch 3: System Integration (Long-term)  
- Fully integrate workflow detection
- Automate memory bank synchronization
- Create self-correcting mechanisms
- Implement comprehensive monitoring
- Add automatic archival

## Selected Approach

**Hybrid Implementation**: Execute Branch 1 immediately, then implement key elements from Branch 2 while planning Branch 3.

## Priority Order

### Phase 1: Immediate Cleanup (Now)
1. Delete all .bak files
2. Move misplaced files to proper locations
3. Create missing memory bank files
4. Update PROJECT_INDEX.json

### Phase 2: Fix References (Next)
5. Update CLAUDE.md with correct references
6. Fix CLAUDE_PROCESS.md inconsistencies
7. Update agent prompts for consistency
8. Integrate WORKFLOWS.md properly

### Phase 3: Automation (Future)
9. Add automatic memory bank sync
10. Implement 7-day archive policy
11. Create self-correction mechanisms
12. Add monitoring and alerts