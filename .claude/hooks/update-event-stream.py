#!/usr/bin/env python3
"""
Enhanced PostToolUse hook that logs events with task IDs and insights.
Reads task state from context/claude-todos-{session_id}.json
"""
import json
import sys
import os
import re
from datetime import datetime
from pathlib import Path

def load_task_state(session_id, project_dir):
    """Load current task state from session file"""
    task_file = Path(project_dir) / 'context' / f'claude-todos-{session_id}.json'
    
    if task_file.exists():
        try:
            with open(task_file, 'r', encoding='utf-8') as f:
                return json.load(f)
        except:
            pass
    return None

def extract_insights(tool_name, tool_input, tool_response):
    """Extract meaningful insights from tool responses"""
    insights = []
    
    if tool_name == 'Read':
        file_path = tool_input.get('file_path', '')
        file_name = os.path.basename(file_path)
        
        # Try to extract key findings from response
        if isinstance(tool_response, str):
            # Look for patterns like function definitions, error messages, etc.
            if 'timeout' in tool_response.lower():
                match = re.search(r'(\d+)(ms|s)', tool_response)
                if match:
                    insights.append(f"Found timeout value: {match.group(0)}")
            if 'error' in tool_response.lower():
                insights.append("Contains error handling")
        
        return f"Examined {file_name}" + (f" - {insights[0]}" if insights else "")
    
    elif tool_name == 'Edit' or tool_name == 'Write':
        file_path = tool_input.get('file_path', '')
        file_name = os.path.basename(file_path)
        
        if tool_name == 'Edit':
            old_str = tool_input.get('old_string', '')[:30]
            new_str = tool_input.get('new_string', '')[:30]
            return f"Modified {file_name} - changed {old_str}... to {new_str}..."
        else:
            return f"Created/updated {file_name}"
    
    elif tool_name == 'Bash':
        command = tool_input.get('command', '')[:50]
        if tool_response and isinstance(tool_response, dict):
            output = tool_response.get('output', '')
            if output:
                lines = output.strip().split('\n')
                if lines:
                    return f"Executed: {command} - {lines[0][:50]}"
        return f"Executed: {command}"
    
    elif tool_name == 'Grep':
        pattern = tool_input.get('pattern', '')
        if tool_response and isinstance(tool_response, str):
            lines = tool_response.strip().split('\n')
            count = len([l for l in lines if l])
            return f"Found {count} matches for '{pattern}'"
        return f"Searched for '{pattern}'"
    
    elif tool_name == 'TodoWrite':
        todos = tool_input.get('todos', [])
        in_progress = [t for t in todos if t.get('status') == 'in_progress']
        if in_progress:
            return f"Working on: {in_progress[0].get('content', 'task')[:50]}"
        return "Updated task list"
    
    elif tool_name == 'Task':
        subagent = tool_input.get('subagent_type', '')
        desc = tool_input.get('description', '')[:30]
        return f"Delegated to {subagent}: {desc}"
    
    else:
        # Generic fallback
        return f"{tool_name} operation completed"

def get_event_type(tool_name):
    """Determine event type based on tool"""
    if tool_name in ['Read', 'Grep', 'Glob', 'LS']:
        return 'Observation'
    elif tool_name in ['Edit', 'Write', 'MultiEdit', 'Bash']:
        return 'Action'
    elif tool_name == 'TodoWrite':
        return 'Planning'
    elif tool_name == 'Task':
        return 'Delegation'
    elif tool_name in ['WebFetch', 'WebSearch']:
        return 'Research'
    else:
        return 'Operation'

def main():
    try:
        input_data = json.load(sys.stdin)
    except json.JSONDecodeError:
        sys.exit(1)
    
    # Only process PostToolUse events
    if input_data.get('hook_event_name') != 'PostToolUse':
        sys.exit(0)
    
    tool_name = input_data.get('tool_name', '')
    tool_input = input_data.get('tool_input', {})
    tool_response = input_data.get('tool_response', {})
    
    # Skip certain tools
    if tool_name in ['BashOutput', 'KillBash', 'ListMcpResourcesTool', 'ExitPlanMode']:
        sys.exit(0)
    
    session_id = input_data.get('session_id', 'default')
    project_dir = os.environ.get('CLAUDE_PROJECT_DIR', os.getcwd())
    
    # Load task state
    task_state = load_task_state(session_id, project_dir)
    active_task = task_state.get('active_task', '') if task_state else ''
    
    # Generate timestamp
    timestamp = datetime.now().strftime('[%Y-%m-%d %H:%M:%S]')
    
    # Extract insights from tool response
    description = extract_insights(tool_name, tool_input, tool_response)
    event_type = get_event_type(tool_name)
    
    # Format event line with task ID
    if active_task:
        event_line = f"{timestamp} {active_task} | {event_type}: {description}"
    else:
        event_line = f"{timestamp} {event_type}: {description}"
    
    # Ensure context directory and event-stream.md exist
    event_stream_path = Path(project_dir) / 'context' / 'event-stream.md'
    event_stream_path.parent.mkdir(parents=True, exist_ok=True)
    
    # Create event-stream.md with header if it doesn't exist
    if not event_stream_path.exists():
        with open(event_stream_path, 'w', encoding='utf-8') as f:
            f.write('# Event Stream\n\n')
            f.write(f'## Session Started: {datetime.now().strftime("%Y-%m-%d %H:%M:%S")}\n\n')
    
    # Append to event stream
    try:
        with open(event_stream_path, 'a', encoding='utf-8') as f:
            f.write(f"{event_line}\n")
        
        # Show in transcript mode (for debugging)
        print(f"📝 {event_line}")
    except Exception as e:
        print(f"Error logging event: {e}", file=sys.stderr)
    
    sys.exit(0)

if __name__ == '__main__':
    main()