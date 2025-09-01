#!/usr/bin/env python3
"""
UserPromptSubmit hook that adds run headers to event stream.
"""
import json
import sys
from datetime import datetime
from pathlib import Path

def main():
    try:
        input_data = json.load(sys.stdin)
    except json.JSONDecodeError:
        sys.exit(1)
    
    prompt = input_data.get('prompt', '')[:100]
    timestamp = datetime.now().strftime('%Y-%m-%d %H:%M')
    
    # Get project directory
    project_dir = Path(input_data.get('cwd', '.'))
    event_stream_path = project_dir / 'context' / 'event-stream.md'
    
    try:
        # Add run header
        with open(event_stream_path, 'a', encoding='utf-8') as f:
            f.write(f"\n## [{timestamp}] User: {prompt}{'...' if len(prompt) >= 100 else ''}\n\n")
        
        print(f"📝 Started new run: {prompt[:50]}...")
    except Exception as e:
        print(f"Error adding run header: {e}", file=sys.stderr)
    
    sys.exit(0)

if __name__ == '__main__':
    main()