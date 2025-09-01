#!/usr/bin/env python3
"""
PostToolUse hook that triggers enhancement periodically.
Counts events and triggers enhancement every N events.
"""
import json
import sys
import os
from pathlib import Path

def should_enhance(session_id, project_dir, threshold=5):
    """Check if we should trigger enhancement based on event count"""
    # Session-specific counter file
    counter_file = Path(project_dir) / 'context' / f'enhancement-state-{session_id}.json'
    
    # Load or initialize counter
    counter_state = {'event_count': 0, 'last_enhanced': 0}
    
    if counter_file.exists():
        try:
            with open(counter_file, 'r', encoding='utf-8') as f:
                counter_state = json.load(f)
        except:
            pass
    
    # Increment counter
    counter_state['event_count'] += 1
    events_since_enhancement = counter_state['event_count'] - counter_state['last_enhanced']
    
    # Check if we should enhance
    should_trigger = events_since_enhancement >= threshold
    
    if should_trigger:
        counter_state['last_enhanced'] = counter_state['event_count']
    
    # Save updated counter
    try:
        with open(counter_file, 'w', encoding='utf-8') as f:
            json.dump(counter_state, f, indent=2)
    except:
        pass
    
    return should_trigger, counter_state['event_count']

def trigger_enhancement(event_stream_path, num_events=15):
    """Trigger the enhancement process by returning appropriate output"""
    # Read recent events for enhancement
    try:
        with open(event_stream_path, 'r', encoding='utf-8') as f:
            lines = f.readlines()
        
        # Find recent event lines (those with timestamps)
        import re
        event_lines = []
        for line in reversed(lines):
            if re.match(r'\[\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}\]', line.strip()):
                event_lines.append(line.strip())
                if len(event_lines) >= num_events:
                    break
        
        event_lines.reverse()
        
        if event_lines:
            # Return block decision to trigger enhancement
            output = {
                "decision": "block",
                "reason": f"""PERIODIC ENHANCEMENT TRIGGERED (Every 5 events):

Please enhance these recent events with additional context and insights:

{chr(10).join(event_lines)}

For each event, consider:
- What was the actual finding or discovery?
- What decision was made based on this?
- How does this relate to the active task?
- What insight does this provide?

After enhancement, continue with the current work."""
            }
            print(json.dumps(output))
            return True
    except Exception as e:
        print(f"Error triggering enhancement: {e}", file=sys.stderr)
    
    return False

def main():
    try:
        input_data = json.load(sys.stdin)
    except json.JSONDecodeError:
        sys.exit(1)
    
    # Only process PostToolUse events
    if input_data.get('hook_event_name') != 'PostToolUse':
        sys.exit(0)
    
    tool_name = input_data.get('tool_name', '')
    
    # Skip certain tools to avoid counting them
    if tool_name in ['LS', 'BashOutput', 'KillBash', 'ListMcpResourcesTool', 'ExitPlanMode']:
        sys.exit(0)
    
    session_id = input_data.get('session_id', 'default')
    project_dir = os.environ.get('CLAUDE_PROJECT_DIR', os.getcwd())
    
    # Check if we should enhance
    should_trigger, event_count = should_enhance(session_id, project_dir)
    
    if should_trigger:
        event_stream_path = Path(project_dir) / 'context' / 'event-stream.md'
        if trigger_enhancement(event_stream_path):
            # Exit code 2 blocks and shows reason to Claude
            sys.exit(2)
        else:
            print(f"📊 Event count: {event_count} (enhancement scheduled)")
    
    sys.exit(0)

if __name__ == '__main__':
    main()