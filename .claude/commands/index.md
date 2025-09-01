---
allowed-tools: Bash(./scripts/query-index.sh:*), Bash(./scripts/generate-indexes.sh)
argument-hint: tree [path] [depth] | stats [path] | agent [type] | components [type] | visual [path] [type] | recent [hours] | imports <file> | generate | cache-stats | clear-cache
description: Query project indexes efficiently or regenerate them
---

## Smart Index Query System

You are requested to query the project indexes using the smart query system that provides token-efficient context loading.

### Key Principles
- **NEVER** load entire PROJECT_INDEX.json (151KB) or VISUAL_ASSETS_INDEX.json (124KB)
- **ALWAYS** use targeted queries to stay within ~5000 token budget
- Results are **cached for 60 minutes** - repeated queries are free
- Use **progressive loading** - start small, expand as needed

### Current Query Context

Based on the arguments provided: $ARGUMENTS

Execute the appropriate index query operation:

### Available Operations

#### Query directory structure
For "tree" operations - Get hierarchical directory structure:
!`if [[ "$1" == "tree" ]]; then ./scripts/query-index.sh tree ${2:-.} ${3:-3}; fi`

#### Get project or path statistics
For "stats" operations - Get statistical overview:
!`if [[ "$1" == "stats" ]]; then ./scripts/query-index.sh stats ${2:-.}; fi`

#### Get agent-specific context
For "agent" operations - Load agent-optimized context:
!`if [[ "$1" == "agent" ]]; then ./scripts/query-index.sh agent ${2:-code-searcher}; fi`

#### Query component structure
For "components" operations - Analyze React components:
!`if [[ "$1" == "components" ]]; then ./scripts/query-index.sh components ${2:-all}; fi`

#### Query visual assets
For "visual" operations - Explore images, videos, icons:
!`if [[ "$1" == "visual" ]]; then ./scripts/query-index.sh visual ${2:-.} ${3:-all}; fi`

#### Get recently modified files
For "recent" operations - Track recent changes:
!`if [[ "$1" == "recent" ]]; then ./scripts/query-index.sh recent ${2:-24}; fi`

#### Analyze file imports
For "imports" operations - Understand dependencies:
!`if [[ "$1" == "imports" && -n "$2" ]]; then ./scripts/query-index.sh imports $2; fi`

#### Regenerate all indexes
For "generate" operations - Full index rebuild:
!`if [[ "$1" == "generate" ]]; then ./scripts/generate-indexes.sh; fi`

#### View cache statistics
For "cache-stats" operations - Check cache usage:
!`if [[ "$1" == "cache-stats" ]]; then ./scripts/query-index.sh cache-stats; fi`

#### Clear query cache
For "clear-cache" operations - Reset cache:
!`if [[ "$1" == "clear-cache" ]]; then ./scripts/query-index.sh clear-cache; fi`

### Usage Examples

**Basic Queries:**
- `/index tree src/components 2` - Component structure with depth 2
- `/index stats` - Full project overview
- `/index stats src/pages` - Statistics for pages directory

**Agent Context:**
- `/index agent code-searcher` - Code search context
- `/index agent ux-designer` - Design context
- `/index agent supabase-architect` - Database context

**Specialized Queries:**
- `/index components ui` - UI component listing
- `/index visual public/assets image` - All images
- `/index recent 48` - Files changed in last 48 hours
- `/index imports src/App.tsx` - Analyze App.tsx imports

**Maintenance:**
- `/index generate` - Regenerate all indexes (rarely needed)
- `/index cache-stats` - View cache performance
- `/index clear-cache` - Clear cache if needed

### Token Budget Management

Each query type has approximate token usage:
- **stats**: ~200 tokens (overview statistics)
- **tree**: ~500-2000 tokens (depending on depth)
- **files**: ~300-1000 tokens (file listings)
- **components**: ~500 tokens (component analysis)
- **agent**: ~100 tokens (agent context)
- **visual**: ~600 tokens (asset metadata)
- **recent**: Variable (based on activity)

### Performance Tips

1. **Start with stats** for high-level understanding
2. **Use specific paths** instead of root queries
3. **Limit depth to 2-3** for tree queries
4. **Filter by extension** when listing files
5. **Check cache-stats** to see what's already cached

### Integration with Memory System

Query patterns are automatically:
- Logged to `memory/index-patterns.json`
- Cached in `memory/index-cache.json`
- Analyzed for optimization opportunities
- Used to improve future query performance

### Troubleshooting

If query returns too much data:
- Reduce depth parameter for tree queries
- Use more specific path targeting
- Add extension filters for file queries
- Consider using custom jq queries

### Custom Advanced Queries

For complex needs beyond standard operations, use custom jq syntax:
```bash
# Count TypeScript files
/index custom '.files | to_entries | map(select(.value.extension == "tsx")) | length'

# Find large files
/index custom '.files | to_entries | map(select(.value.size > 10000)) | map({path: .key, size: .value.size})'
```

Remember: The smart query system ensures efficient context loading while maintaining full project awareness.