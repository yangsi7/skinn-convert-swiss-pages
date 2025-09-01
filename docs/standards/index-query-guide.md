# Smart Index Query System Guide

## Overview
The project uses a smart index query system to efficiently load repository context without overwhelming the AI's token budget.

## For AI Agents

### Instead of Loading Entire Indexes ❌
```bash
# Don't do this - too large for context
context=$(cat PROJECT_INDEX.json)        # 151KB - exceeds budget
visual=$(cat VISUAL_ASSETS_INDEX.json)   # 124KB - exceeds budget
```

### Use Targeted Queries ✅
```bash
# Load only what you need
context=$(./scripts/query-index.sh tree src/components 2)  # <1KB
stats=$(./scripts/query-index.sh stats)                    # <200 bytes
recent=$(./scripts/query-index.sh recent 24)               # Variable
```

## Agent-Specific Query Patterns

### Code-Searcher Agent
```bash
# Get code structure overview
./scripts/query-index.sh agent code-searcher
# Returns: component count, pages, hooks, services, etc.

# Find specific components
./scripts/query-index.sh tree src/components 2
./scripts/query-index.sh files src/pages tsx
```

### UX-Design Expert Agent
```bash
# Get design-related context
./scripts/query-index.sh agent ux-designer
# Returns: UI components, landing components, design tokens, visual assets

# Query visual assets
./scripts/query-index.sh visual public/assets image
./scripts/query-index.sh components ui
```

### Supabase Architect Agent
```bash
# Get database context
./scripts/query-index.sh agent supabase-architect
# Returns: migrations, functions, schemas, policies

# Query database structure
./scripts/query-index.sh tree supabase 3
./scripts/query-index.sh files supabase/migrations sql
```

### Testing-QA Agent
```bash
# Get testing context
./scripts/query-index.sh agent testing-qa
# Returns: unit tests, e2e tests, test config, coverage

# Query test files
./scripts/query-index.sh tree tests 2
./scripts/query-index.sh files tests test.ts
```

## Common Query Commands

| Command | Purpose | Token Usage |
|---------|---------|-------------|
| `stats` | Project overview | ~200 tokens |
| `tree [path] [depth]` | Directory structure | ~500-2000 tokens |
| `files [path] [ext]` | List files | ~300-1000 tokens |
| `components [type]` | Component analysis | ~500 tokens |
| `recent [hours]` | Recent changes | Variable |
| `imports [file]` | Import analysis | ~200 tokens |
| `agent [type]` | Agent context | ~100 tokens |
| `visual [path] [type]` | Visual assets | ~600 tokens |

## Token Budget Management

- **Maximum per query**: 5000 tokens (~20KB)
- **Caching**: Results cached for 60 minutes
- **Progressive loading**: Start small, expand as needed

## Example Agent Workflow

```bash
# 1. Start with overview
overview=$(./scripts/query-index.sh stats)

# 2. Get specific structure
structure=$(./scripts/query-index.sh tree src/components 2)

# 3. Find recent changes
recent=$(./scripts/query-index.sh recent 24)

# 4. Get agent-specific context
context=$(./scripts/query-index.sh agent code-searcher)

# Total tokens used: ~1000 (well within budget)
```

## Custom Queries

For advanced needs, use jq queries directly:
```bash
# Count TypeScript files
./scripts/query-index.sh custom '.files | to_entries | map(select(.value.extension == "tsx")) | length'

# Find large files
./scripts/query-index.sh custom '.files | to_entries | map(select(.value.size > 10000)) | map({path: .key, size: .value.size})'

# Get specific directory info
./scripts/query-index.sh custom '.directories["src/components"]'
```

## Integration with Memory System

Query patterns are automatically:
- Logged to `memory/index-patterns.json`
- Cached in `memory/index-cache.json`
- Tracked for frequency analysis
- Used to optimize future queries

## Best Practices

1. **Start small**: Use high-level queries first
2. **Cache awareness**: Repeated queries are free
3. **Progressive loading**: Expand context as needed
4. **Agent-specific**: Use agent-optimized queries
5. **Token tracking**: Monitor usage with estimates

## Troubleshooting

### Query returns too much data
- Reduce depth parameter
- Add extension filter
- Use more specific path

### Cache issues
```bash
# Clear cache if needed
./scripts/query-index.sh clear-cache

# Check cache status
./scripts/query-index.sh cache-stats
```

### Index out of date
```bash
# Manual regeneration (rarely needed)
./scripts/generate-indexes.sh
```

---
*Generated: 2025-08-28 | Version: 2.0*