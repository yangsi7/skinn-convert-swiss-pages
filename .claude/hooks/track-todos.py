#!/usr/bin/env python3
"""
PreToolUse hook for TodoWrite that tracks task state with stable IDs.
Stores task information in context/claude-todos-{session_id}.json
"""
import json
import sys
import os
from pathlib import Path

def generate_task_id(index):
    """Generate task ID from array index (T001, T002, etc.)"""
    return f"T{index + 1:03d}"

def main():
    try:
        input_data = json.load(sys.stdin)
    except json.JSONDecodeError:
        sys.exit(1)
    
    # Only process PreToolUse events for TodoWrite
    if (input_data.get('hook_event_name') != 'PreToolUse' or 
        input_data.get('tool_name') != 'TodoWrite'):
        sys.exit(0)
    
    session_id = input_data.get('session_id', 'default')
    project_dir = os.environ.get('CLAUDE_PROJECT_DIR', os.getcwd())
    
    # Create context directory if it doesn't exist
    context_dir = Path(project_dir) / 'context'
    context_dir.mkdir(exist_ok=True)
    
    # Session-specific task file
    task_file = context_dir / f'claude-todos-{session_id}.json'
    
    # Extract todos from tool input
    tool_input = input_data.get('tool_input', {})
    todos = tool_input.get('todos', [])
    
    # Generate IDs and find active task
    task_state = {
        'session_id': session_id,
        'todos': [],
        'active_task': None
    }
    
    for idx, todo in enumerate(todos):
        task_id = generate_task_id(idx)
        task_state['todos'].append({
            'id': task_id,
            'content': todo.get('content', ''),
            'status': todo.get('status', 'pending'),
            'activeForm': todo.get('activeForm', '')
        })
        
        # Track the in_progress task as active
        if todo.get('status') == 'in_progress' and not task_state['active_task']:
            task_state['active_task'] = task_id
    
    # Save task state
    try:
        with open(task_file, 'w', encoding='utf-8') as f:
            json.dump(task_state, f, indent=2)
        
        # Log active task for debugging (shown in transcript mode)
        if task_state['active_task']:
            active_content = next(
                (t['content'] for t in task_state['todos'] 
                 if t['id'] == task_state['active_task']), 
                'Unknown'
            )
            print(f"📋 Active task: {task_state['active_task']} - {active_content}")
    except Exception as e:
        print(f"Error saving task state: {e}", file=sys.stderr)
    
    sys.exit(0)

if __name__ == '__main__':
    main()