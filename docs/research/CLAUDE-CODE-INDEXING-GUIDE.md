# Claude Code Indexing System: Complete Research Guide
VERSION: 1.0.0  
CREATED: 2025-08-24  
STATUS: COMPLETE  
RESEARCH_ID: RES-INDEX-001

## Executive Summary

**CRITICAL FINDING**: Claude Code does NOT use traditional indexing. The `/index`, `/explore`, and `/prime` commands mentioned in your project are CUSTOM implementations, not built-in Claude Code features.

### Key Discoveries
1. **No Built-in Indexing**: Claude Code explores projects dynamically using Glob and Grep tools
2. **Custom Commands**: Your project's indexing commands are markdown files in `.claude/commands/`
3. **Two Approaches**: Monolithic (PROJECT_INDEX.json) vs Progressive (PROJECT_NAVIGATOR.json)
4. **Size Problem**: Your PROJECT_INDEX.json is 617KB - too large for effective use

## How Claude Code Actually Works

### Native Exploration Method
Claude Code uses real-time exploration instead of pre-built indexes:

```yaml
Tools Used:
  - Glob: Find files by pattern
  - Grep: Search file contents  
  - Read: Load specific files
  - LS: List directory contents

Advantages:
  - Always current with file system
  - No maintenance required
  - Works with any project size
  - No storage overhead

Disadvantages:
  - Slower initial discovery
  - No persistent context
  - Repeated exploration needed
```

### Custom Commands System
Commands like `/index` are created via markdown files:

```markdown
Location: .claude/commands/command-name.md
Becomes: /command-name in Claude Code

Structure:
---
allowed-tools: Read, Write, Bash
description: What this command does
model: claude-3-5-sonnet-20241022
---

Command instructions here...
```

## Your Project's Indexing Approaches

### 1. Monolithic Index (/index → PROJECT_INDEX.json)

**Current State**: 617KB file with complete codebase analysis

```json
{
  "project_structure": {
    "total_directories": 160,
    "total_files": 358,
    "tree": "complete directory tree"
  },
  "files": {
    "filename.ts": {
      "language": "typescript",
      "functions": ["list of all functions"],
      "classes": ["list of all classes"],
      "imports": ["dependency list"],
      "exports": ["export list"]
    }
  },
  "dependency_graph": {},
  "call_graph": {}
}
```

**Problems**:
- Too large for context window (617KB)
- Becomes stale quickly
- Memory intensive to load

**When to Use**:
- One-time deep analysis
- Generating architecture documentation
- Complex refactoring planning

### 2. Progressive Navigator (/explore → PROJECT_NAVIGATOR.json)

**Current State**: 19KB lightweight navigation file

```json
{
  "version": "1.0.0",
  "instructions": "how to explore",
  "structure": {
    "directories": 160,
    "files": 358
  },
  "explorations": {
    "cached_results": {}
  },
  "statistics": {}
}
```

**Advantages**:
- Manageable size (19KB)
- Progressive loading capability
- Cached exploration results
- Fits in context window

**Best For**:
- Daily development work
- Quick navigation
- Iterative exploration

### 3. Prime Command (/prime)

**Purpose**: Initialize project context at session start

```markdown
Actions:
1. Check for PROJECT_NAVIGATOR.json
2. Load navigation instructions  
3. Set up exploration context
4. Report readiness
```

## Recommended Implementation

### For Your Project Specifically

Given your situation:
- PROJECT_INDEX.json exists but is too large (617KB)
- PROJECT_NAVIGATOR.json exists and is usable (19KB)
- No generation scripts found

#### Immediate Actions

1. **Create /prime Command**
```markdown
# File: .claude/commands/prime.md
---
allowed-tools: Read
description: Initialize project context
---

Load PROJECT_NAVIGATOR.json and prepare for exploration.

Navigator: @PROJECT_NAVIGATOR.json

Report:
- Project statistics
- Key directories
- Recent explorations
- Ready status
```

2. **Create /refresh Command**
```markdown
# File: .claude/commands/refresh.md
---
allowed-tools: Bash, Write
description: Update project navigator
---

Regenerate PROJECT_NAVIGATOR.json with current structure.

Steps:
1. Analyze file structure
2. Update navigator
3. Clear cache
4. Report changes
```

3. **Add Auto-Update Hook**
```python
# File: .claude/hooks/post_tool_use.py
#!/usr/bin/env python3
import json
import sys

# Update navigator after file changes
input_data = json.load(sys.stdin)
if input_data.get('tool_name') in ['Write', 'Edit']:
    # Trigger navigator update
    print("Navigator update needed")
```

## Best Practices

### Choosing the Right Approach

| Project Size | Recommended Approach | Reason |
|-------------|---------------------|---------|
| Small (<100 files) | Native Claude Code | No indexing needed |
| Medium (100-1000) | PROJECT_NAVIGATOR | Progressive loading |
| Large (1000+) | MCP Server | Professional indexing |
| Complex Analysis | PROJECT_INDEX | One-time deep dive |

### Optimization Strategies

#### Size Management
```yaml
Exclude Patterns:
  - node_modules/
  - dist/
  - .git/
  - *.log
  - *.tmp

Include Only:
  - src/**/*.ts
  - src/**/*.tsx
  - docs/**/*.md
```

#### Context Efficiency
```yaml
Progressive Loading:
  1. Load navigator (19KB)
  2. Explore specific area
  3. Cache exploration
  4. Load details as needed

Never:
  - Load entire PROJECT_INDEX.json
  - Include build artifacts
  - Index binary files
```

### Maintenance Schedule

```yaml
Update Triggers:
  - Major feature additions
  - Architecture changes
  - New dependencies
  - Weekly refresh

Automation:
  - Git pre-commit hooks
  - Claude Code session start
  - After bulk file changes
  - Scheduled cron job
```

## Advanced Solutions

### Third-Party MCP Servers

For professional indexing needs:

1. **code-index-mcp**
   - Semantic code search
   - AST-based analysis
   - Vector embeddings

2. **claude-context**
   - Incremental indexing
   - Merkle tree optimization
   - Zilliz Cloud integration

3. **Custom MCP Server**
   - Tailored to your needs
   - Database-backed
   - Real-time updates

## Migration Path

### From Current State to Optimal

```mermaid
graph LR
    A[Current: 617KB Index] --> B[Step 1: Use Navigator]
    B --> C[Step 2: Add Commands]
    C --> D[Step 3: Hook Integration]
    D --> E[Step 4: MCP Server]
```

1. **Immediate**: Switch to PROJECT_NAVIGATOR.json
2. **Week 1**: Implement custom commands
3. **Week 2**: Add update hooks
4. **Month 1**: Evaluate MCP servers

## Troubleshooting

### Common Issues

| Problem | Solution |
|---------|----------|
| Index too large | Use progressive navigator |
| Stale data | Implement auto-refresh hooks |
| Slow exploration | Cache frequent queries |
| Lost context | Run /prime at session start |

### Debug Commands

```bash
# Check index size
ls -lh PROJECT_*.json

# Find custom commands
ls -la .claude/commands/

# Verify hooks
cat .claude/settings.json | jq '.hooks'

# Test exploration
claude --debug
```

## Conclusion

Your project's indexing system is a custom implementation, not native Claude Code functionality. The best approach is to:

1. **Use PROJECT_NAVIGATOR.json** as your primary navigation tool
2. **Create /prime command** for session initialization
3. **Implement /refresh command** for updates
4. **Add hooks** for automatic maintenance
5. **Consider MCP servers** for advanced needs

The 617KB PROJECT_INDEX.json should be used sparingly for deep analysis only, while daily work should rely on the 19KB navigator with progressive exploration.

## References

- [Claude Code Hooks Mastery](https://github.com/disler/claude-code-hooks-mastery)
- [Claude Code Project Index](https://github.com/ericbuess/claude-code-project-index)
- [Claude Context MCP](https://github.com/zilliztech/claude-context)
- [Official Claude Code Docs](https://docs.anthropic.com/en/docs/claude-code)
- [Awesome Claude Code](https://github.com/hesreallyhim/awesome-claude-code)