#!/usr/bin/env python3
"""
SessionEnd hook that cleans up session-specific files.
Removes claude-todos-{session_id}.json and enhancement-state-{session_id}.json
"""
import json
import sys
import os
from pathlib import Path
from datetime import datetime

def cleanup_session_files(session_id, project_dir):
    """Remove session-specific files"""
    context_dir = Path(project_dir) / 'context'
    
    # Files to clean up
    files_to_remove = [
        context_dir / f'claude-todos-{session_id}.json',
        context_dir / f'enhancement-state-{session_id}.json'
    ]
    
    removed = []
    for file_path in files_to_remove:
        if file_path.exists():
            try:
                # Optionally archive before removing
                archive_dir = context_dir / 'archive' / 'sessions'
                archive_dir.mkdir(parents=True, exist_ok=True)
                
                timestamp = datetime.now().strftime('%Y%m%d-%H%M%S')
                archive_name = f"{file_path.stem}-{timestamp}{file_path.suffix}"
                archive_path = archive_dir / archive_name
                
                # Copy to archive
                import shutil
                shutil.copy2(file_path, archive_path)
                
                # Remove original
                file_path.unlink()
                removed.append(file_path.name)
            except Exception as e:
                print(f"Error cleaning up {file_path.name}: {e}", file=sys.stderr)
    
    return removed

def main():
    try:
        input_data = json.load(sys.stdin)
    except json.JSONDecodeError:
        sys.exit(1)
    
    # Only process SessionEnd events
    if input_data.get('hook_event_name') != 'SessionEnd':
        sys.exit(0)
    
    session_id = input_data.get('session_id', 'default')
    project_dir = os.environ.get('CLAUDE_PROJECT_DIR', os.getcwd())
    reason = input_data.get('reason', 'unknown')
    
    # Clean up session files
    removed = cleanup_session_files(session_id, project_dir)
    
    if removed:
        print(f"🧹 Session cleanup completed (reason: {reason})")
        print(f"   Archived and removed: {', '.join(removed)}")
    
    # Also add a final entry to event stream
    event_stream_path = Path(project_dir) / 'context' / 'event-stream.md'
    try:
        timestamp = datetime.now().strftime('[%Y-%m-%d %H:%M:%S]')
        with open(event_stream_path, 'a', encoding='utf-8') as f:
            f.write(f"\n{timestamp} Session ended: {reason}\n")
            f.write(f"{'=' * 80}\n\n")
    except:
        pass
    
    sys.exit(0)

if __name__ == '__main__':
    main()