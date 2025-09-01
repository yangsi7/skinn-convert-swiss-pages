#!/bin/bash

# Verification Script for Agent Priming Compliance
# Analyzes telemetry data to verify all agents are priming correctly

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

TELEMETRY_FILE="memory/telemetry.json"
REPORT_FILE="docs/reports/priming-verification-$(date +%Y%m%d).md"

echo "================================================"
echo "       Agent Priming Verification Report        "
echo "================================================"
echo ""

# Check if telemetry file exists
if [ ! -f "$TELEMETRY_FILE" ]; then
    echo -e "${RED}❌ ERROR: Telemetry file not found at $TELEMETRY_FILE${NC}"
    echo "Please ensure telemetry tracking is enabled."
    exit 1
fi

# Function to analyze telemetry using Python
analyze_telemetry() {
    python3 -c "
import json
import sys
from datetime import datetime, timedelta

def analyze():
    with open('$TELEMETRY_FILE', 'r') as f:
        data = json.load(f)
    
    report = []
    report.append('# Agent Priming Verification Report')
    report.append(f'Generated: {datetime.now().isoformat()}')
    report.append('')
    
    # Overall Statistics
    report.append('## Overall Statistics')
    stats = data['statistics']
    total_sessions = stats.get('total_sessions', 0)
    total_priming = stats.get('total_priming_executions', 0)
    priming_rate = (total_priming / total_sessions * 100) if total_sessions > 0 else 0
    
    report.append(f'- Total Sessions: {total_sessions}')
    report.append(f'- Total Priming Executions: {total_priming}')
    report.append(f'- Priming Compliance Rate: {priming_rate:.1f}%')
    report.append(f'- Total Tokens Saved: {stats.get(\"total_tokens_saved\", 0):,}')
    report.append(f'- Cache Hit Rate: {stats.get(\"total_cache_hits\", 0)}')
    report.append('')
    
    # Agent-Specific Analysis
    report.append('## Agent-Specific Compliance')
    report.append('')
    report.append('| Agent | Invocations | Priming Count | Compliance % | Tokens Saved | Last Used |')
    report.append('|-------|-------------|---------------|--------------|--------------|-----------|')
    
    compliance_issues = []
    
    for agent_name, agent_data in data['agent_usage'].items():
        invocations = agent_data.get('invocations', 0)
        priming_count = agent_data.get('priming_count', 0)
        tokens_saved = agent_data.get('tokens_saved', 0)
        last_used = agent_data.get('last_used', 'Never')
        
        if invocations > 0:
            compliance = (priming_count / invocations * 100)
            status = '✅' if compliance >= 95 else '⚠️' if compliance >= 80 else '❌'
            
            report.append(f'| {status} {agent_name} | {invocations} | {priming_count} | {compliance:.1f}% | {tokens_saved:,} | {last_used} |')
            
            if compliance < 95:
                compliance_issues.append({
                    'agent': agent_name,
                    'compliance': compliance,
                    'missing': invocations - priming_count
                })
    
    report.append('')
    
    # Recent Sessions Analysis (last 10)
    report.append('## Recent Session Analysis (Last 10)')
    report.append('')
    
    sessions = data.get('sessions', [])[:10]
    if sessions:
        report.append('| Timestamp | Agent | Operation | Priming | Tokens Saved | Cache Hits |')
        report.append('|-----------|-------|-----------|---------|--------------|------------|')
        
        for session in sessions:
            timestamp = session.get('timestamp', 'Unknown')
            agent = session.get('agent', 'Unknown')
            operation = session.get('operation', 'Unknown')
            session_data = session.get('data', {})
            priming = '✅' if session_data.get('priming_executed', False) else '❌'
            tokens = session_data.get('tokens_saved', 0)
            cache_hits = session_data.get('cache_hits', 0)
            
            report.append(f'| {timestamp} | {agent} | {operation} | {priming} | {tokens:,} | {cache_hits} |')
    else:
        report.append('No recent sessions found.')
    
    report.append('')
    
    # Compliance Issues
    if compliance_issues:
        report.append('## ⚠️ Compliance Issues Detected')
        report.append('')
        for issue in compliance_issues:
            report.append(f'- **{issue[\"agent\"]}**: {issue[\"compliance\"]:.1f}% compliance ({issue[\"missing\"]} invocations without priming)')
        report.append('')
        report.append('### Recommended Actions:')
        report.append('1. Review agent implementations for self_prime parameter')
        report.append('2. Check if agents are executing query-index.sh')
        report.append('3. Verify telemetry recording is working correctly')
        report.append('4. Run test invocations with explicit priming')
    else:
        report.append('## ✅ All Agents Compliant')
        report.append('All agents are following the priming protocol correctly.')
    
    report.append('')
    
    # Error Log Analysis
    errors = data.get('error_log', [])
    if errors:
        report.append('## ❌ Error Log')
        report.append('')
        for error in errors[:10]:  # Show last 10 errors
            report.append(f'- {error}')
    
    # Performance Metrics
    perf = data.get('performance_metrics', {})
    if perf.get('query_index_response_times'):
        avg_time = sum(perf['query_index_response_times']) / len(perf['query_index_response_times'])
        report.append('')
        report.append('## Performance Metrics')
        report.append(f'- Average Query Time: {avg_time:.2f}ms')
        report.append(f'- Cache Hit Rate: {perf.get(\"cache_hit_rate\", 0):.1f}%')
    
    return '\\n'.join(report)

# Run analysis
try:
    report = analyze()
    print(report)
    
    # Save to file
    with open('$REPORT_FILE', 'w') as f:
        f.write(report)
    
    # Check overall compliance
    with open('$TELEMETRY_FILE', 'r') as f:
        data = json.load(f)
    
    stats = data['statistics']
    if stats.get('total_sessions', 0) > 0:
        compliance_rate = (stats.get('total_priming_executions', 0) / stats['total_sessions'] * 100)
        if compliance_rate >= 95:
            sys.exit(0)  # Success
        elif compliance_rate >= 80:
            sys.exit(1)  # Warning
        else:
            sys.exit(2)  # Critical
    else:
        print('\\n⚠️ No sessions recorded yet. Run some agent invocations first.')
        sys.exit(0)
        
except Exception as e:
    print(f'Error analyzing telemetry: {e}')
    sys.exit(3)
"
}

# Run the analysis
analyze_telemetry
EXIT_CODE=$?

echo ""
echo "================================================"

# Interpret exit codes
case $EXIT_CODE in
    0)
        echo -e "${GREEN}✅ Verification Complete - All agents compliant or no data yet${NC}"
        echo -e "Report saved to: ${BLUE}$REPORT_FILE${NC}"
        ;;
    1)
        echo -e "${YELLOW}⚠️ Warning - Some compliance issues detected${NC}"
        echo -e "Report saved to: ${BLUE}$REPORT_FILE${NC}"
        echo "Please review the report and address issues."
        ;;
    2)
        echo -e "${RED}❌ Critical - Major compliance violations detected${NC}"
        echo -e "Report saved to: ${BLUE}$REPORT_FILE${NC}"
        echo "Immediate action required to fix priming issues."
        ;;
    3)
        echo -e "${RED}❌ Error - Failed to analyze telemetry data${NC}"
        ;;
esac

echo "================================================"

# Additional checks
echo ""
echo "Additional Verification Checks:"
echo "--------------------------------"

# Check if cache directory exists
if [ -d ".cache/query-cache" ]; then
    CACHE_COUNT=$(ls -1 .cache/query-cache/*.cache 2>/dev/null | wc -l)
    echo -e "${GREEN}✅ Cache directory exists with $CACHE_COUNT cached queries${NC}"
else
    echo -e "${RED}❌ Cache directory not found - agents may not be priming${NC}"
fi

# Check if query-index.sh is executable
if [ -x "./scripts/query-index.sh" ]; then
    echo -e "${GREEN}✅ query-index.sh is executable${NC}"
else
    echo -e "${RED}❌ query-index.sh is not executable${NC}"
fi

# Check if indexes exist
if [ -f "PROJECT_INDEX.json" ] && [ -f "VISUAL_ASSETS_INDEX.json" ]; then
    echo -e "${GREEN}✅ Project indexes exist${NC}"
else
    echo -e "${YELLOW}⚠️ Some indexes missing - run ./scripts/generate-indexes.sh${NC}"
fi

echo ""
echo "To record test telemetry manually:"
echo "  ./scripts/record-telemetry.sh 'test-agent' 'priming' '{\"priming_executed\": true, \"tokens_saved\": 145000}'"
echo ""

exit $EXIT_CODE