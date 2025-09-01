#!/bin/bash
# Smart Index Query Utility
# PURPOSE: Efficiently query PROJECT_INDEX.json with token budget awareness
# VERSION: 1.0
# CREATED: 2025-08-28

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
CYAN='\033[0;36m'
NC='\033[0m'

# Configuration
INDEX_FILE="PROJECT_INDEX.json"
VISUAL_INDEX="VISUAL_ASSETS_INDEX.json"
CACHE_FILE="memory/index-cache.json"
MAX_TOKEN_BUDGET=5000  # Roughly 20KB of JSON
CACHE_TTL=3600  # 1 hour in seconds

# Check if jq is installed
if ! command -v jq &> /dev/null; then
    echo "${RED}Error: jq is not installed${NC}"
    echo "Install with: brew install jq (macOS) or apt-get install jq (Linux)"
    exit 1
fi

# Check if index files exist
if [ ! -f "$INDEX_FILE" ]; then
    echo "${RED}Error: $INDEX_FILE not found${NC}"
    echo "Run: ./scripts/generate-indexes.sh to create indexes"
    exit 1
fi

# Initialize cache file if it doesn't exist
init_cache() {
    if [ ! -f "$CACHE_FILE" ]; then
        mkdir -p "$(dirname "$CACHE_FILE")"
        echo '{"queries": {}, "metadata": {"created": "'$(date -u +"%Y-%m-%dT%H:%M:%SZ")'"}}' > "$CACHE_FILE"
    fi
}

# Check cache for query result
check_cache() {
    local query_key="$1"
    local cached_result
    local cache_timestamp
    local current_timestamp
    
    if [ -f "$CACHE_FILE" ]; then
        cached_result=$(jq -r ".queries[\"$query_key\"].result // null" "$CACHE_FILE")
        if [ "$cached_result" != "null" ]; then
            cache_timestamp=$(jq -r ".queries[\"$query_key\"].timestamp // 0" "$CACHE_FILE")
            current_timestamp=$(date +%s)
            
            if [ $((current_timestamp - cache_timestamp)) -lt $CACHE_TTL ]; then
                echo "$cached_result"
                return 0
            fi
        fi
    fi
    return 1
}

# Store result in cache
update_cache() {
    local query_key="$1"
    local result="$2"
    local timestamp=$(date +%s)
    
    if [ -f "$CACHE_FILE" ]; then
        jq --arg key "$query_key" \
           --argjson result "$result" \
           --arg timestamp "$timestamp" \
           '.queries[$key] = {result: $result, timestamp: ($timestamp | tonumber)}' \
           "$CACHE_FILE" > "${CACHE_FILE}.tmp" && mv "${CACHE_FILE}.tmp" "$CACHE_FILE"
    fi
}

# Estimate token count (rough approximation)
estimate_tokens() {
    local json_size=$(echo "$1" | wc -c)
    echo $((json_size / 4))  # Rough estimate: 4 characters per token
}

# Query function: Get directory tree structure
query_tree() {
    local path="$1"
    local depth="${2:-3}"
    local query_key="tree:$path:$depth"
    
    # Check cache first
    if cached=$(check_cache "$query_key"); then
        echo "${CYAN}[Cache hit]${NC}" >&2
        echo "$cached"
        return
    fi
    
    echo "${YELLOW}Querying tree structure for: $path${NC}" >&2
    
    # Build jq query for directory tree
    local result
    if [ "$path" = "." ] || [ -z "$path" ]; then
        # Get all directories up to specified depth
        result=$(jq --argjson depth "$depth" '
            .directories | 
            to_entries | 
            map(select((.key | split("/") | length) <= $depth)) |
            map({path: .key, files: .value.fileCount, subdirs: .value.subdirs}) |
            sort_by(.path)
        ' "$INDEX_FILE")
    else
        # Get directories under specific path
        result=$(jq --arg path "$path" --argjson depth "$depth" '
            .directories | 
            to_entries | 
            map(select(.key | startswith($path))) |
            map(select(((.key | split("/") | length) - ($path | split("/") | length)) <= $depth)) |
            map({path: .key, files: .value.fileCount, subdirs: .value.subdirs}) |
            sort_by(.path)
        ' "$INDEX_FILE")
    fi
    
    # Check token budget
    local tokens=$(estimate_tokens "$result")
    if [ $tokens -gt $MAX_TOKEN_BUDGET ]; then
        echo "${RED}Warning: Result exceeds token budget ($tokens > $MAX_TOKEN_BUDGET)${NC}" >&2
        echo "${YELLOW}Consider using a more specific path or lower depth${NC}" >&2
    fi
    
    # Update cache and return
    update_cache "$query_key" "$result"
    echo "$result"
}

# Query function: Get files in directory
query_files() {
    local path="$1"
    local extension="$2"
    local query_key="files:$path:$extension"
    
    # Check cache first
    if cached=$(check_cache "$query_key"); then
        echo "${CYAN}[Cache hit]${NC}" >&2
        echo "$cached"
        return
    fi
    
    echo "${YELLOW}Querying files in: $path${NC}" >&2
    
    # Build jq query for files
    local result
    if [ -n "$extension" ]; then
        result=$(jq --arg path "$path" --arg ext "$extension" '
            .files | 
            to_entries | 
            map(select(.key | startswith($path)) | 
                select(.value.extension == $ext)) |
            map({
                path: .key, 
                size: .value.size, 
                modified: .value.modified,
                extension: .value.extension
            }) |
            sort_by(.path)
        ' "$INDEX_FILE")
    else
        result=$(jq --arg path "$path" '
            .files | 
            to_entries | 
            map(select(.key | startswith($path))) |
            map({
                path: .key, 
                size: .value.size, 
                modified: .value.modified,
                extension: .value.extension
            }) |
            sort_by(.path)
        ' "$INDEX_FILE")
    fi
    
    # Update cache and return
    update_cache "$query_key" "$result"
    echo "$result"
}

# Query function: Get project statistics
query_stats() {
    local path="$1"
    local query_key="stats:$path"
    
    # Check cache first
    if cached=$(check_cache "$query_key"); then
        echo "${CYAN}[Cache hit]${NC}" >&2
        echo "$cached"
        return
    fi
    
    echo "${YELLOW}Calculating statistics for: ${path:-entire project}${NC}" >&2
    
    # Build statistics query
    local result
    if [ -z "$path" ] || [ "$path" = "." ]; then
        result=$(jq '
            {
                total_files: (.files | length),
                total_directories: (.directories | length),
                code_files: (.files | to_entries | map(select(.value.extension | IN("ts", "tsx", "js", "jsx"))) | length),
                total_size: (.files | to_entries | map(.value.size) | add),
                languages: (.files | to_entries | map(.value.extension) | unique | sort)
            }
        ' "$INDEX_FILE")
    else
        result=$(jq --arg path "$path" '
            {
                files: (.files | to_entries | map(select(.key | startswith($path))) | length),
                directories: (.directories | to_entries | map(select(.key | startswith($path))) | length),
                code_files: (.files | to_entries | map(select(.key | startswith($path)) | select(.value.extension | IN("ts", "tsx", "js", "jsx"))) | length),
                total_size: (.files | to_entries | map(select(.key | startswith($path))) | map(.value.size) | add),
                extensions: (.files | to_entries | map(select(.key | startswith($path))) | map(.value.extension) | unique | sort)
            }
        ' "$INDEX_FILE")
    fi
    
    # Update cache and return
    update_cache "$query_key" "$result"
    echo "$result"
}

# Query function: Get component structure (for UX/design agents)
query_components() {
    local component_type="${1:-all}"  # ui, forms, landing, etc.
    local query_key="components:$component_type"
    
    # Check cache first
    if cached=$(check_cache "$query_key"); then
        echo "${CYAN}[Cache hit]${NC}" >&2
        echo "$cached"
        return
    fi
    
    echo "${YELLOW}Querying component structure${NC}" >&2
    
    # Build component query
    local result
    if [ "$component_type" = "all" ]; then
        result=$(jq '
            .directories | 
            to_entries | 
            map(select(.key | startswith("src/components"))) |
            map({
                path: .key,
                type: (.key | split("/")[2] // "root"),
                fileCount: .value.fileCount,
                subdirs: .value.subdirs
            }) |
            group_by(.type) |
            map({
                type: .[0].type,
                count: (map(.fileCount) | add),
                directories: length
            })
        ' "$INDEX_FILE")
    else
        result=$(jq --arg type "$component_type" '
            .files |
            to_entries |
            map(select(.key | startswith("src/components/" + $type))) |
            map({
                path: .key,
                name: (.key | split("/")[-1]),
                size: .value.size,
                modified: .value.modified
            }) |
            sort_by(.name)
        ' "$INDEX_FILE")
    fi
    
    # Update cache and return
    update_cache "$query_key" "$result"
    echo "$result"
}

# Query function: Get recent changes (for context awareness)
query_recent() {
    local hours="${1:-24}"
    local query_key="recent:$hours"
    
    # Check cache first (shorter TTL for recent queries)
    if cached=$(check_cache "$query_key"); then
        echo "${CYAN}[Cache hit]${NC}" >&2
        echo "$cached"
        return
    fi
    
    echo "${YELLOW}Querying files modified in last $hours hours${NC}" >&2
    
    # Calculate timestamp threshold
    local threshold=$(date -u -d "$hours hours ago" +"%Y-%m-%dT%H:%M:%SZ" 2>/dev/null || \
                     date -u -v-${hours}H +"%Y-%m-%dT%H:%M:%SZ" 2>/dev/null)
    
    # Query recent files
    local result=$(jq --arg threshold "$threshold" '
        .files |
        to_entries |
        map(select(.value.modified >= $threshold)) |
        map({
            path: .key,
            modified: .value.modified,
            extension: .value.extension,
            size: .value.size
        }) |
        sort_by(.modified) |
        reverse
    ' "$INDEX_FILE")
    
    # Update cache with shorter TTL
    update_cache "$query_key" "$result"
    echo "$result"
}

# Query function: Find TypeScript/JavaScript imports (for dependency analysis)
query_imports() {
    local file="$1"
    local query_key="imports:$file"
    
    if [ -z "$file" ] || [ ! -f "$file" ]; then
        echo "${RED}Error: File not found${NC}" >&2
        return 1
    fi
    
    # Check cache first
    if cached=$(check_cache "$query_key"); then
        echo "${CYAN}[Cache hit]${NC}" >&2
        echo "$cached"
        return
    fi
    
    echo "${YELLOW}Analyzing imports in: $file${NC}" >&2
    
    # Extract imports (simple regex-based for now)
    local imports=$(grep -E "^import |^export .* from " "$file" 2>/dev/null | \
        sed -E "s/^import .* from ['\"](.*)['\"]/\1/" | \
        sed -E "s/^export .* from ['\"](.*)['\"]/\1/" | \
        sort -u)
    
    # Build JSON result
    local result=$(echo "$imports" | jq -R . | jq -s '{
        file: "'$file'",
        imports: .,
        count: length,
        hasRelative: (map(select(startswith("."))) | length > 0),
        hasAbsolute: (map(select(startswith("@") or (startswith(".") | not))) | length > 0)
    }')
    
    # Update cache and return
    update_cache "$query_key" "$result"
    echo "$result"
}

# Query function: Agent-specific queries (optimized for different agents)
query_agent() {
    local agent_type="$1"
    local query_key="agent:$agent_type"
    
    # Check cache first
    if cached=$(check_cache "$query_key"); then
        echo "${CYAN}[Cache hit]${NC}" >&2
        echo "$cached"
        return
    fi
    
    echo "${YELLOW}Preparing context for $agent_type agent${NC}" >&2
    
    # Build agent-specific queries
    local result
    case "$agent_type" in
        code-searcher)
            result=$(jq '{
                components: (.directories | to_entries | map(select(.key | startswith("src/components"))) | length),
                pages: (.files | to_entries | map(select(.key | startswith("src/pages"))) | length),
                hooks: (.files | to_entries | map(select(.key | startswith("src/hooks"))) | length),
                services: (.files | to_entries | map(select(.key | startswith("src/services"))) | length),
                total_tsx: (.files | to_entries | map(select(.value.extension == "tsx")) | length),
                total_ts: (.files | to_entries | map(select(.value.extension == "ts")) | length)
            }' "$INDEX_FILE")
            ;;
        
        ux-designer)
            result=$(jq '{
                ui_components: (.files | to_entries | map(select(.key | startswith("src/components/ui"))) | length),
                landing_components: (.files | to_entries | map(select(.key | startswith("src/components/landing"))) | length),
                design_tokens: (.files | to_entries | map(select(.key | contains("design") and .value.extension == "md")) | length),
                visual_assets: (.files | to_entries | map(select(.key | startswith("public/assets"))) | length)
            }' "$INDEX_FILE")
            ;;
        
        supabase-architect)
            result=$(jq '{
                migrations: (.files | to_entries | map(select(.key | startswith("supabase/migrations"))) | length),
                functions: (.directories | to_entries | map(select(.key | startswith("supabase/functions"))) | length),
                schemas: (.files | to_entries | map(select(.key | startswith("supabase/schemas"))) | length),
                policies: (.files | to_entries | map(select(.key | contains("policies"))) | length)
            }' "$INDEX_FILE")
            ;;
        
        testing-qa)
            result=$(jq '{
                unit_tests: (.files | to_entries | map(select(.key | contains(".test."))) | length),
                e2e_tests: (.files | to_entries | map(select(.key | startswith("tests/"))) | length),
                test_config: (.files | to_entries | map(select(.key | contains("test") and .value.extension == "config")) | length),
                coverage: (.files | to_entries | map(select(.key | contains("coverage"))) | length)
            }' "$INDEX_FILE")
            ;;
        
        *)
            echo "${RED}Unknown agent type: $agent_type${NC}" >&2
            echo '{"error": "Unknown agent type"}'
            return 1
            ;;
    esac
    
    # Update cache and return
    update_cache "$query_key" "$result"
    echo "$result"
}

# Query function: Get visual assets
query_visual() {
    local path="$1"
    local type="$2"  # image, video, icon, or all
    local query_key="visual:$path:$type"
    
    # Check cache first
    if cached=$(check_cache "$query_key"); then
        echo "${CYAN}[Cache hit]${NC}" >&2
        echo "$cached"
        return
    fi
    
    if [ ! -f "$VISUAL_INDEX" ]; then
        echo "${RED}Error: $VISUAL_INDEX not found${NC}" >&2
        return 1
    fi
    
    echo "${YELLOW}Querying visual assets in: ${path:-all}${NC}" >&2
    
    # Build visual query
    local result
    if [ -n "$type" ] && [ "$type" != "all" ]; then
        result=$(jq --arg path "$path" --arg type "$type" '
            .assets | 
            map(select(.type == $type)) |
            if $path != "" then map(select(.path | startswith($path))) else . end |
            map({path, type, dimensions, size})
        ' "$VISUAL_INDEX")
    else
        result=$(jq --arg path "$path" '
            .assets | 
            if $path != "" then map(select(.path | startswith($path))) else . end |
            group_by(.type) | 
            map({type: .[0].type, count: length, total_size: (map(.size) | add)})
        ' "$VISUAL_INDEX")
    fi
    
    # Update cache and return
    update_cache "$query_key" "$result"
    echo "$result"
}

# Query function: Custom jq query
query_custom() {
    local query="$1"
    echo "${YELLOW}Executing custom query${NC}" >&2
    
    # Execute custom jq query with error handling
    if result=$(jq "$query" "$INDEX_FILE" 2>/dev/null); then
        # Check token budget
        local tokens=$(estimate_tokens "$result")
        if [ $tokens -gt $MAX_TOKEN_BUDGET ]; then
            echo "${RED}Warning: Result exceeds token budget ($tokens > $MAX_TOKEN_BUDGET)${NC}" >&2
        fi
        echo "$result"
    else
        echo "${RED}Error: Invalid jq query${NC}" >&2
        echo '{"error": "Invalid query syntax"}'
        return 1
    fi
}

# Clear cache function
clear_cache() {
    if [ -f "$CACHE_FILE" ]; then
        echo "${YELLOW}Clearing index cache...${NC}"
        echo '{"queries": {}, "metadata": {"created": "'$(date -u +"%Y-%m-%dT%H:%M:%SZ")'"}}' > "$CACHE_FILE"
        echo "${GREEN}Cache cleared${NC}"
    fi
}

# Show cache statistics
cache_stats() {
    if [ -f "$CACHE_FILE" ]; then
        local total=$(jq '.queries | length' "$CACHE_FILE")
        local size=$(du -h "$CACHE_FILE" | cut -f1)
        echo "${CYAN}Cache Statistics:${NC}"
        echo "  Cached queries: $total"
        echo "  Cache size: $size"
        echo "  Cache file: $CACHE_FILE"
        echo ""
        echo "${CYAN}Recent queries:${NC}"
        jq -r '.queries | to_entries | sort_by(.value.timestamp) | reverse | .[0:5] | .[] | "  - \(.key)"' "$CACHE_FILE"
    else
        echo "${YELLOW}No cache found${NC}"
    fi
}

# Show help
show_help() {
    cat << EOF
${BLUE}Smart Index Query Utility v1.0${NC}

${GREEN}Usage:${NC}
  ./query-index.sh <command> [arguments]

${GREEN}Commands:${NC}
  tree <path> [depth]     Query directory structure (default depth: 3)
  files <path> [ext]      List files in directory (optional extension filter)
  stats [path]            Get statistics for path (or entire project)
  components [type]       Query component structure (type: all/ui/forms/landing/etc)
  recent [hours]          Get recently modified files (default: 24 hours)
  imports <file>          Analyze imports in a TypeScript/JavaScript file
  agent <type>            Get agent-specific context (code-searcher/ux-designer/etc)
  visual [path] [type]    Query visual assets (type: image/video/icon/all)
  custom <jq-query>       Execute custom jq query
  clear-cache             Clear the query cache
  cache-stats             Show cache statistics
  help                    Show this help message

${GREEN}Examples:${NC}
  ./query-index.sh tree src/components 2
    Query component structure with depth 2

  ./query-index.sh files src/pages tsx
    List all TypeScript files in pages directory

  ./query-index.sh stats docs/
    Get statistics for docs directory

  ./query-index.sh components ui
    List all UI components

  ./query-index.sh recent 48
    Get files modified in last 48 hours

  ./query-index.sh imports src/App.tsx
    Analyze imports in App.tsx

  ./query-index.sh agent code-searcher
    Get context for code-searcher agent

  ./query-index.sh visual public/assets image
    List all images in public/assets

  ./query-index.sh custom '.directories | keys | length'
    Count total directories using custom query

${GREEN}Token Budget:${NC}
  Maximum result size: ~$MAX_TOKEN_BUDGET tokens (20KB)
  Results are cached for $((CACHE_TTL/60)) minutes

${GREEN}Tips:${NC}
  - Use specific paths to reduce token usage
  - Cached queries return instantly
  - Custom queries provide maximum flexibility
EOF
}

# Main command dispatcher
main() {
    init_cache
    
    case "${1:-help}" in
        tree)
            query_tree "${2:-.}" "${3:-3}"
            ;;
        files)
            query_files "${2:-.}" "$3"
            ;;
        stats)
            query_stats "${2:-.}"
            ;;
        components)
            query_components "${2:-all}"
            ;;
        recent)
            query_recent "${2:-24}"
            ;;
        imports)
            query_imports "$2"
            ;;
        agent)
            query_agent "$2"
            ;;
        visual)
            query_visual "${2:-}" "${3:-all}"
            ;;
        custom)
            if [ -z "$2" ]; then
                echo "${RED}Error: Custom query required${NC}"
                echo "Example: ./query-index.sh custom '.stats'"
                exit 1
            fi
            query_custom "$2"
            ;;
        clear-cache)
            clear_cache
            ;;
        cache-stats)
            cache_stats
            ;;
        help|--help|-h)
            show_help
            ;;
        *)
            echo "${RED}Unknown command: $1${NC}"
            show_help
            exit 1
            ;;
    esac
}

# Run main function
main "$@"