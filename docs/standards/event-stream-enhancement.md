# Event Stream Enhancement System

## Overview

The Event Stream Enhancement System uses Claude Code hooks to create informative, context-rich event logs that capture not just what tools were used, but what was actually discovered, decided, and achieved during each session.

## Architecture

### Three-Layer Hook System

1. **PostToolUse Hook** (`update-event-stream.py`)
   - Logs basic events in real-time
   - Captures tool usage with available descriptions
   - Maintains continuous event stream

2. **UserPromptSubmit Hook** (`start-run.py`)
   - Adds run headers when user starts new requests
   - Creates clear boundaries between different user tasks
   - Provides session organization

3. **Stop Hook** (`enhance-events.py`)
   - Reviews recent events when Claude finishes responding
   - Prompts Claude to enhance descriptions with actual findings
   - Adds context about what was discovered and decided

## How It Works

### Basic Event Logging
When you use any tool, the PostToolUse hook creates a basic entry:
```
[14:15] Action: Modified settings.json | Phase: Execution
```

### Run Organization
When you submit a prompt, the UserPromptSubmit hook adds a header:
```
## [2025-08-28 14:00] User: Fix the date validation error display...
```

### Event Enhancement
When Claude finishes responding, the Stop hook triggers and asks Claude to enhance the recent events with actual findings:

**Before enhancement:**
```
[09:03] T005a | Observation: Read process-data.json
[09:06] T005a | Action: Modified process-utils.ts
```

**After enhancement:**
```
[09:03] T005a | Observation: stepVariances array was empty (length 0)
[09:06] T005a | Action: Fixed filtering logic in getProcessStepComparison to parse region/variant from processId
```

## Configuration

### Hooks Registration
The hooks are registered in `.claude/settings.json`:

```json
{
  "hooks": {
    "PostToolUse": [...],
    "UserPromptSubmit": [
      {
        "hooks": [
          {
            "type": "command",
            "command": "$CLAUDE_PROJECT_DIR/.claude/hooks/start-run.py",
            "timeout": 2
          }
        ]
      }
    ],
    "Stop": [
      {
        "hooks": [
          {
            "type": "command",
            "command": "$CLAUDE_PROJECT_DIR/.claude/hooks/enhance-events.py",
            "timeout": 10
          }
        ]
      }
    ]
  }
}
```

## Benefits

1. **Rich Context**: Events include what was discovered, not just what tools were used
2. **Natural Language**: Claude summarizes findings in human-readable format
3. **Session Organization**: Clear boundaries between different user requests
4. **Low Complexity**: Simple implementation without transcript parsing
5. **Reliability**: Graceful fallback if enhancement fails

## Usage

The system works automatically once configured. No manual intervention needed:

1. Submit your request to Claude
2. Claude performs the work, logging basic events
3. When Claude finishes, the Stop hook enhances descriptions
4. Review the enriched event stream in `context/event-stream.md`

## Troubleshooting

### Events Not Enhanced
- Check if Stop hook is registered in settings.json
- Verify enhance-events.py is executable
- Check for `stop_hook_active` to avoid infinite loops

### Missing Run Headers
- Ensure UserPromptSubmit hook is registered
- Verify start-run.py is executable
- Check file permissions on event-stream.md

### Performance Issues
- Adjust timeout values in settings.json
- Reduce number of events processed (default: 20)
- Check hook execution with `claude --debug`

## Future Enhancements

Potential improvements for consideration:
- Task ID extraction from memory/active.json
- Automated archival of old events
- Integration with memory bank system
- Custom event types for specific tools