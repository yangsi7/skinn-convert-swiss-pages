#!/usr/bin/env python3
"""
Stop hook that asks Claude to enhance recent event descriptions
with actual findings and insights.
"""
import json
import sys
import re
from pathlib import Path

def read_recent_events(event_stream_path, num_events=20):
    """Read the last N events from the event stream."""
    try:
        with open(event_stream_path, 'r', encoding='utf-8') as f:
            lines = f.readlines()
        
        # Find event lines (start with timestamp pattern)
        event_lines = []
        for line in lines:
            if re.match(r'\[\d{4}-\d{2}-\d{2} \d{2}:\d{2}\]', line.strip()):
                event_lines.append(line.strip())
        
        # Return last N events
        return event_lines[-num_events:] if event_lines else []
    except Exception as e:
        print(f"Error reading events: {e}", file=sys.stderr)
        return []

def main():
    try:
        input_data = json.load(sys.stdin)
    except json.JSONDecodeError:
        sys.exit(1)
    
    # Check if already in enhancement mode
    if input_data.get('stop_hook_active', False):
        # Avoid infinite loops
        sys.exit(0)
    
    # Get project directory
    project_dir = Path(input_data.get('cwd', '.'))
    event_stream_path = project_dir / 'context' / 'event-stream.md'
    
    # Read recent events
    recent_events = read_recent_events(event_stream_path)
    
    if not recent_events:
        sys.exit(0)
    
    # Format events for Claude
    events_text = '\n'.join(recent_events)
    
    # Ask Claude to enhance descriptions
    output = {
        "decision": "block",
        "reason": f"""ENHANCE EVENT DESCRIPTIONS:

Review these recent events and provide enhanced versions with actual findings:

{events_text}

For each event, create an enhanced description that includes:
- What was actually discovered or observed
- Key findings or insights  
- Decisions made or problems identified

Format each as: [timestamp] task_id | type: enhanced description with findings

Example transformations:
FROM: [09:03] T005a | Observation: Read process-data.json
TO:   [09:03] T005a | Observation: stepVariances array was empty (length 0)

FROM: [09:06] T005a | Action: Modified process-utils.ts  
TO:   [09:06] T005a | Action: Fixed filtering logic in getProcessStepComparison to parse region/variant from processId

Provide the enhanced versions below, then update event-stream.md with these enhanced descriptions."""
    }
    
    print(json.dumps(output))
    sys.exit(0)

if __name__ == '__main__':
    main()