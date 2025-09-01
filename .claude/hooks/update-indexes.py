#!/usr/bin/env python3
"""
Auto-Index Update Hook
Monitors file changes and triggers index regeneration when needed.
"""
import json
import sys
import os
import subprocess
from pathlib import Path
from datetime import datetime

# Patterns that trigger index regeneration
TRIGGER_PATTERNS = {
    'structure_change': [
        'Write',  # New files created
        'MultiEdit',  # Major file modifications
    ],
    'visual_change': [
        'Write',  # When writing to public/assets
    ]
}

# Paths that require index update when modified
TRIGGER_PATHS = {
    'src/': 'code',
    'public/assets/': 'visual',
    'docs/': 'documentation',
    'supabase/': 'database',
    'scripts/': 'scripts',
}

def should_update_index(tool_name, tool_input):
    """Determine if indexes need updating based on the tool and input."""
    
    # Check if tool is in trigger patterns
    if tool_name not in TRIGGER_PATTERNS['structure_change']:
        return False, None
    
    # Extract file path from tool input
    file_path = tool_input.get('file_path', '')
    if not file_path:
        return False, None
    
    # Check if path matches trigger patterns
    for trigger_path, index_type in TRIGGER_PATHS.items():
        if file_path.startswith(trigger_path):
            return True, index_type
    
    return False, None

def update_index_timestamp(project_dir):
    """Update the last index generation timestamp."""
    timestamp_file = Path(project_dir) / '.index-timestamp'
    
    try:
        # Check if enough time has passed since last update (avoid too frequent updates)
        if timestamp_file.exists():
            with open(timestamp_file, 'r') as f:
                last_update = datetime.fromisoformat(f.read().strip())
            
            time_since_update = (datetime.now() - last_update).total_seconds()
            
            # Only update if more than 5 minutes have passed
            if time_since_update < 300:
                return False
        
        # Update timestamp
        with open(timestamp_file, 'w') as f:
            f.write(datetime.now().isoformat())
        
        return True
        
    except Exception as e:
        print(f"Error managing timestamp: {e}", file=sys.stderr)
        return True

def trigger_index_generation(project_dir, index_type):
    """Trigger the index generation script."""
    script_path = Path(project_dir) / 'scripts' / 'generate-indexes.sh'
    
    if not script_path.exists():
        print(f"Warning: Index generation script not found at {script_path}", file=sys.stderr)
        return False
    
    try:
        # Run the index generation script in background
        subprocess.Popen(
            [str(script_path)],
            stdout=subprocess.DEVNULL,
            stderr=subprocess.DEVNULL,
            cwd=project_dir
        )
        
        print(f"🔄 Index regeneration triggered for {index_type} changes", file=sys.stderr)
        return True
        
    except Exception as e:
        print(f"Error triggering index generation: {e}", file=sys.stderr)
        return False

def log_index_query(tool_name, tool_input, project_dir):
    """Log index query patterns for pattern learning."""
    patterns_file = Path(project_dir) / 'memory' / 'index-patterns.json'
    
    # Only log query operations
    if 'query-index' not in str(tool_input.get('command', '')):
        return
    
    try:
        # Load existing patterns
        if patterns_file.exists():
            with open(patterns_file, 'r', encoding='utf-8') as f:
                patterns = json.load(f)
        else:
            patterns = {
                "query_patterns": [],
                "frequency": {},
                "metadata": {
                    "created": datetime.now().isoformat(),
                    "last_updated": datetime.now().isoformat()
                }
            }
        
        # Extract query pattern
        command = tool_input.get('command', '')
        if 'query-index.sh' in command:
            # Parse the query command
            parts = command.split()
            if len(parts) >= 2:
                query_type = parts[1]
                query_path = parts[2] if len(parts) > 2 else '.'
                
                # Create pattern entry
                pattern = {
                    "timestamp": datetime.now().isoformat(),
                    "type": query_type,
                    "path": query_path,
                    "tool": tool_name
                }
                
                # Add to patterns list (keep last 100)
                patterns["query_patterns"].append(pattern)
                patterns["query_patterns"] = patterns["query_patterns"][-100:]
                
                # Update frequency counter
                pattern_key = f"{query_type}:{query_path}"
                patterns["frequency"][pattern_key] = patterns["frequency"].get(pattern_key, 0) + 1
                
                # Update metadata
                patterns["metadata"]["last_updated"] = datetime.now().isoformat()
                patterns["metadata"]["total_queries"] = len(patterns["query_patterns"])
                
                # Save updated patterns
                patterns_file.parent.mkdir(parents=True, exist_ok=True)
                with open(patterns_file, 'w', encoding='utf-8') as f:
                    json.dump(patterns, f, indent=2)
                
    except Exception as e:
        print(f"Error logging query pattern: {e}", file=sys.stderr)

def main():
    """Main hook function."""
    try:
        # Read input from stdin
        input_data = json.load(sys.stdin)
    except json.JSONDecodeError as e:
        print(f"Error parsing JSON input: {e}", file=sys.stderr)
        sys.exit(1)
    
    # Extract hook information
    hook_event = input_data.get('hook_event_name', '')
    tool_name = input_data.get('tool_name', '')
    tool_input = input_data.get('tool_input', {})
    
    # Only process PostToolUse events
    if hook_event != 'PostToolUse':
        sys.exit(0)
    
    # Get project directory
    project_dir = os.environ.get('CLAUDE_PROJECT_DIR', os.getcwd())
    
    # Log query patterns for learning
    log_index_query(tool_name, tool_input, project_dir)
    
    # Check if index update is needed
    should_update, index_type = should_update_index(tool_name, tool_input)
    
    if should_update:
        # Check timestamp to avoid too frequent updates
        if update_index_timestamp(project_dir):
            # Trigger index generation in background
            trigger_index_generation(project_dir, index_type)
    
    sys.exit(0)

if __name__ == '__main__':
    main()