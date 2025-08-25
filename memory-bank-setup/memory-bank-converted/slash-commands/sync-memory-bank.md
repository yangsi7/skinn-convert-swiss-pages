# /sync-memory-bank
<!-- Synchronize memory-bank files with current codebase state -->

You are tasked with synchronizing the memory-bank system files with the current state of the codebase, ensuring all documentation accurately reflects implementation reality.

## Execution Steps

1. **Audit Current State**
   - Review all CLAUDE-*.md files
   - Check last sync timestamp in CLAUDE-activeContext.md
   - Identify files changed since last sync

2. **Pattern Validation**
   ```bash
   # Check if documented patterns match code
   grep -r "React.FC" src/components/ | head -5
   grep -r "useForm" src/components/ | head -5
   ```
   - Compare with CLAUDE-patterns.md
   - Update any divergent patterns

3. **Decision Verification**
   - Review CLAUDE-decisions.md entries
   - Check if decisions still valid
   - Mark deprecated decisions
   - Add new decisions made

4. **Workflow Updates**
   - Test workflow triggers in CLAUDE-workflows.md
   - Verify agent invocation patterns
   - Update execution times based on metrics

5. **Subagent Catalog**
   - Confirm all agents in CLAUDE-subagents.md exist
   - Update invocation patterns if changed
   - Add any new agents created

6. **Event Integration**
   - Ensure event-stream.md hooks working
   - Verify automatic sync triggers
   - Update hook configurations if needed

## Output Format

```markdown
# Memory-Bank Sync Report
**Date**: [Timestamp]
**Files Updated**: [Count]

## Changes Made
- CLAUDE-patterns.md: [Changes]
- CLAUDE-decisions.md: [Changes]
- CLAUDE-workflows.md: [Changes]
- CLAUDE-subagents.md: [Changes]

## Patterns Synchronized
- [Pattern 1]: Updated to match implementation
- [Pattern 2]: Deprecated, removed

## New Discoveries
- [New pattern found]
- [New decision documented]

## Sync Metrics
- Files analyzed: [Count]
- Patterns updated: [Count]
- Decisions added: [Count]
- Accuracy improvement: [Percentage]
```

## Integration Points

### With Serena MCP
```typescript
// Use for precise code analysis
mcp__serena__find_symbol('ComponentName')
mcp__serena__get_symbols_overview('file.tsx')
```

### With Memory MCP
```typescript
// Persist sync results
mcp__memory__create_entities([{
  name: 'sync-report-[date]',
  entityType: 'sync',
  observations: ['Files updated', 'Patterns changed']
}])
```

### With Event-Stream
```typescript
// Log sync activity
Event: {
  type: 'MemorySync',
  timestamp: Date.now(),
  filesUpdated: count,
  accuracy: percentage
}
```

## Automation

### Triggered By
- Manual: `/sync-memory-bank`
- Automatic: On significant code changes
- Scheduled: Weekly sync recommended

### Hooks
```javascript
// .claude/hooks/post-tool-use/sync-memory.js
if (significantChange(tool, result)) {
  triggerMemorySync();
}
```

## Best Practices

1. **Incremental Sync**: Don't sync everything at once
2. **Validate First**: Check before updating
3. **Preserve History**: Archive old patterns in decisions
4. **Document Changes**: Log all updates in sync report
5. **Test Impact**: Verify sync doesn't break workflows

---
*This command ensures memory-bank files remain the source of truth for system behavior.*