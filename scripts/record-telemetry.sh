#!/bin/bash

# Telemetry Recording Script for Agent Operations
# Usage: ./scripts/record-telemetry.sh <agent_name> <operation> [additional_data]

TELEMETRY_FILE="memory/telemetry.json"
TIMESTAMP=$(date -u +"%Y-%m-%dT%H:%M:%SZ")
AGENT_NAME=${1:-"unknown"}
OPERATION=${2:-"unknown"}
ADDITIONAL_DATA=${3:-"{}"}

# Function to update JSON file using jq or fallback to python
update_telemetry() {
    if command -v jq &> /dev/null; then
        # Use jq if available
        update_with_jq
    else
        # Fallback to Python
        update_with_python
    fi
}

update_with_jq() {
    local session_entry=$(cat <<EOF
{
    "timestamp": "$TIMESTAMP",
    "agent": "$AGENT_NAME",
    "operation": "$OPERATION",
    "data": $ADDITIONAL_DATA
}
EOF
)
    
    # Update telemetry file
    jq --argjson entry "$session_entry" \
       --arg agent "$AGENT_NAME" \
       --arg timestamp "$TIMESTAMP" '
        # Add to sessions array (keep last 100)
        .sessions = ([$entry] + .sessions)[0:100] |
        
        # Update statistics
        .statistics.total_sessions += 1 |
        
        # Update agent usage
        if .agent_usage[$agent] then
            .agent_usage[$agent].invocations += 1 |
            .agent_usage[$agent].last_used = $timestamp |
            if $entry.data.priming_executed then
                .agent_usage[$agent].priming_count += 1 |
                .statistics.total_priming_executions += 1
            else . end |
            if $entry.data.tokens_saved then
                .agent_usage[$agent].tokens_saved += $entry.data.tokens_saved |
                .statistics.total_tokens_saved += $entry.data.tokens_saved
            else . end
        else . end |
        
        # Update cache statistics
        if $entry.data.cache_hits then
            .statistics.total_cache_hits += $entry.data.cache_hits
        else . end |
        
        # Update last_updated
        .last_updated = $timestamp
    ' "$TELEMETRY_FILE" > "${TELEMETRY_FILE}.tmp" && mv "${TELEMETRY_FILE}.tmp" "$TELEMETRY_FILE"
}

update_with_python() {
    python3 -c "
import json
import sys
from datetime import datetime

telemetry_file = '$TELEMETRY_FILE'
agent_name = '$AGENT_NAME'
operation = '$OPERATION'
timestamp = '$TIMESTAMP'
additional_data = json.loads('$ADDITIONAL_DATA')

# Read existing telemetry
with open(telemetry_file, 'r') as f:
    telemetry = json.load(f)

# Create new session entry
session_entry = {
    'timestamp': timestamp,
    'agent': agent_name,
    'operation': operation,
    'data': additional_data
}

# Update sessions (keep last 100)
telemetry['sessions'].insert(0, session_entry)
telemetry['sessions'] = telemetry['sessions'][:100]

# Update statistics
telemetry['statistics']['total_sessions'] += 1

# Update agent usage
if agent_name in telemetry['agent_usage']:
    agent_stats = telemetry['agent_usage'][agent_name]
    agent_stats['invocations'] += 1
    agent_stats['last_used'] = timestamp
    
    if additional_data.get('priming_executed', False):
        agent_stats['priming_count'] += 1
        telemetry['statistics']['total_priming_executions'] += 1
    
    if 'tokens_saved' in additional_data:
        agent_stats['tokens_saved'] += additional_data['tokens_saved']
        telemetry['statistics']['total_tokens_saved'] += additional_data['tokens_saved']

# Update cache statistics
if 'cache_hits' in additional_data:
    telemetry['statistics']['total_cache_hits'] += additional_data['cache_hits']

# Update last_updated
telemetry['last_updated'] = timestamp

# Write back to file
with open(telemetry_file, 'w') as f:
    json.dump(telemetry, f, indent=2)

print(f'✅ Telemetry recorded for {agent_name}')
"
}

# Function to record specific priming telemetry
record_priming() {
    local tokens_saved=${1:-0}
    local cache_hits=${2:-0}
    local query_count=${3:-0}
    
    local data=$(cat <<EOF
{
    "priming_executed": true,
    "tokens_saved": $tokens_saved,
    "cache_hits": $cache_hits,
    "query_index_calls": $query_count
}
EOF
)
    
    ADDITIONAL_DATA="$data" update_telemetry
}

# Function to record error
record_error() {
    local error_msg="$1"
    local data=$(cat <<EOF
{
    "error": true,
    "error_message": "$error_msg"
}
EOF
)
    
    ADDITIONAL_DATA="$data" update_telemetry
}

# Main execution
case "$OPERATION" in
    "priming")
        # Special handling for priming operations
        # Extract metrics from additional data or query cache
        if [ -d ".cache/query-cache" ]; then
            cache_count=$(ls -1 .cache/query-cache/*.cache 2>/dev/null | wc -l)
            # Estimate tokens saved (avg 145KB saved per full index load)
            tokens_saved=$((145000 - 5000))  # Approximate calculation
            record_priming "$tokens_saved" "$cache_count" 1
        else
            record_priming 0 0 1
        fi
        ;;
    "error")
        record_error "$ADDITIONAL_DATA"
        ;;
    *)
        update_telemetry
        ;;
esac

# Output confirmation
echo "📊 Telemetry recorded: Agent=$AGENT_NAME, Operation=$OPERATION"

# Check if priming compliance warning needed
if [ "$OPERATION" == "task_start" ] && [ ! -d ".cache/query-cache" ]; then
    echo "⚠️ WARNING: No cache directory detected - agent may not have primed correctly"
fi