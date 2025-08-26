# CLAUDE-planning.md
<!-- Active planning document for current work -->

## Current Task: System Audit and Streamlining

### Objective
Transform the CLAUDE system into a fully autonomous, self-updating, self-correcting system with excellent project context awareness.

### Research Complete
✅ Audited all core system files
✅ Identified 6 major issue categories
✅ Found 16 .bak files to clean
✅ Located misplaced files
✅ Discovered missing memory bank files

### Implementation Plan

## Phase 1: Immediate Cleanup (IN PROGRESS)

### 1.1 Delete Backup Files
- [ ] Remove all 16 .bak files
- [ ] Verify no critical content lost

### 1.2 Move Misplaced Files
- [ ] Move WORKFLOWS.md from root to context/
- [ ] Move event-stream-api.py from context/ to scripts/
- [ ] Move agent-outputs from context/ to docs/

### 1.3 Create Missing Memory Bank Files
- [ ] Create context/CLAUDE-troubleshooting.md
- [ ] Create context/CLAUDE-config-variables.md
- [ ] Ensure all CLAUDE-* files exist as referenced

### 1.4 Fix Directory Structure
- [ ] Remove references to non-existent context/subagent-contexts/ from PROJECT_INDEX.json
- [ ] Update generate-indexes.sh if needed

## Phase 2: Fix References

### 2.1 Update CLAUDE.md
- [ ] Fix memory bank file references
- [ ] Add WORKFLOWS.md integration
- [ ] Update agent workflow section
- [ ] Add automatic triggers

### 2.2 Update CLAUDE_PROCESS.md
- [ ] Fix all file path references
- [ ] Add workflow detection integration
- [ ] Update memory bank loading order
- [ ] Fix isolated context references

### 2.3 Standardize Agent Prompts
- [ ] Add self_prime: true to all agent invocations
- [ ] Add request_id tracking
- [ ] Standardize output format
- [ ] Remove .bak references

### 2.4 Integrate WORKFLOWS.md
- [ ] Reference in CLAUDE.md
- [ ] Add to CLAUDE_PROCESS.md workflow detection
- [ ] Update agent selection matrix

## Phase 3: Automation (FUTURE)

### 3.1 Memory Bank Automation
- [ ] Add hook for automatic sync after changes
- [ ] Create validation script
- [ ] Add monitoring

### 3.2 Archive Automation
- [ ] Implement 7-day archive policy
- [ ] Create archive script
- [ ] Add to daily maintenance

### 3.3 Self-Correction
- [ ] Add validation hooks
- [ ] Create health checks
- [ ] Implement auto-repair

## Success Criteria
1. Zero .bak files in codebase
2. All files in correct locations
3. All memory bank files exist and are referenced correctly
4. Workflows integrated into main process
5. Self-priming enforced everywhere
6. Documentation is consistent and complete

## Risks & Mitigations
- **Risk**: Breaking existing functionality
  - **Mitigation**: Test each change carefully
- **Risk**: Lost content in .bak files
  - **Mitigation**: Review before deletion
- **Risk**: Hook conflicts
  - **Mitigation**: Update hooks carefully

## Timeline
- Phase 1: Complete within 30 minutes
- Phase 2: Complete within 1 hour
- Phase 3: Plan for future implementation

## Notes
- The system has evolved organically with many legacy artifacts
- Focus on creating a clean, self-maintaining system
- Prioritize automation to prevent future drift