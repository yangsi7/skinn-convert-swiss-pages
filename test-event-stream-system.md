# Event Stream System Test Plan

## Test Objectives
Verify that the enhanced event-stream.md logging system correctly:
1. Tracks TodoWrite tasks with stable IDs (T001, T002, etc.)
2. Links events to the active task
3. Captures insights from tool responses
4. Triggers periodic enhancement every 5 events
5. Maintains session-specific state files
6. Groups events under user prompts

## Test Procedure

### Phase 1: Initial Setup Verification
1. Check for hook registration in settings.json
2. Verify all hook scripts are executable
3. Confirm context directory exists

### Phase 2: Task Tracking Test
1. Create a TodoWrite with 3 tasks
2. Mark one task as in_progress
3. Verify claude-todos-{session_id}.json is created
4. Check that active_task is correctly identified

### Phase 3: Event Logging Test  
Perform these operations in sequence:
1. Read a file (should log with task ID and findings)
2. Edit a file (should log what was changed)
3. Run a Bash command (should capture output)
4. Do a Grep search (should show match count)
5. Update TodoWrite (should show active task)

Expected: Each event should have format:
`[timestamp] T### | Type: Description with insight`

### Phase 4: Periodic Enhancement Test
After 5 events, should trigger:
- Check enhancement-state-{session_id}.json for counter
- Verify periodic-enhance.py triggers block decision
- Confirm enhancement prompt appears

### Phase 5: Session Management Test
1. Check all session files exist in context/
2. Verify no files in /tmp/
3. Confirm session_id is used consistently

## Expected Files

After test, these files should exist:
- `context/event-stream.md` - With enhanced entries
- `context/claude-todos-{session_id}.json` - Task state
- `context/enhancement-state-{session_id}.json` - Enhancement counter

## Success Criteria

✅ Task IDs appear in events (T001, T002, etc.)
✅ Events show actual findings, not generic descriptions
✅ Periodic enhancement triggers after 5 events
✅ Session files are created in context/
✅ Events are grouped under user prompts
✅ No collisions between sessions

## Test Commands

```bash
# Check hook registration
cat .claude/settings.json | jq '.hooks'

# Verify hook permissions
ls -la .claude/hooks/*.py

# Check event stream
tail -30 context/event-stream.md

# Look for session files
ls -la context/*-*.json

# Verify task state
cat context/claude-todos-*.json | jq '.'
```