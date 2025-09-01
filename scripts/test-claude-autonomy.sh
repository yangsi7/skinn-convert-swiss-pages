#!/bin/bash
# Quick Autonomy Test - Core autonomous operation validation
# Generated: 2025-08-28
# Purpose: Rapid validation of CLAUDE autonomous development capabilities

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(dirname "$SCRIPT_DIR")"

echo "=== CLAUDE Autonomy Quick Test ==="
echo "Testing core autonomous development capabilities..."
echo ""

# Test 1: Workflow Detection
echo "1. Testing Workflow Detection..."
if [[ -f "$PROJECT_ROOT/context/WORKFLOWS.md" ]]; then
    workflow_count=$(grep -c "name:" "$PROJECT_ROOT/context/WORKFLOWS.md" || echo "0")
    echo "   ✓ Found $workflow_count workflows defined"
    
    # Test trigger keywords
    if grep -q "feature-implementation\|bug-fix\|deep-research" "$PROJECT_ROOT/context/WORKFLOWS.md"; then
        echo "   ✓ Core workflow triggers present"
    else
        echo "   ✗ Missing core workflow triggers"
    fi
else
    echo "   ✗ WORKFLOWS.md missing"
fi

# Test 2: Memory System
echo ""
echo "2. Testing JSON Memory System..."
memory_files=("active.json" "patterns.json" "decisions.json" "knowledge.json")
memory_count=0

for file in "${memory_files[@]}"; do
    if [[ -f "$PROJECT_ROOT/memory/$file" ]]; then
        echo "   ✓ $file present"
        ((memory_count++))
    else
        echo "   ✗ $file missing"
    fi
done

echo "   → Memory system: $memory_count/4 files operational"

# Test 3: Index Priming System
echo ""
echo "3. Testing Universal Index Priming..."
if [[ -x "$PROJECT_ROOT/scripts/query-index.sh" ]]; then
    echo "   ✓ query-index.sh executable"
    
    # Test basic stats query
    if stats_output=$("$PROJECT_ROOT/scripts/query-index.sh" stats 2>/dev/null); then
        echo "   ✓ Index query functional"
        file_count=$(echo "$stats_output" | grep -o '"file_count": [0-9]*' | head -1 | grep -o '[0-9]*' || echo "0")
        echo "   → Project contains ~$file_count files"
    else
        echo "   ✗ Index query failed"
    fi
else
    echo "   ✗ query-index.sh not executable"
fi

# Test 4: Agent System
echo ""
echo "4. Testing Agent System..."
if [[ -d "$PROJECT_ROOT/.claude/agents" ]]; then
    agent_count=$(find "$PROJECT_ROOT/.claude/agents" -name "*.md" | wc -l)
    echo "   ✓ Found $agent_count agent files"
    
    # Check for orchestrator
    if [[ -f "$PROJECT_ROOT/.claude/agents/orchestrator.md" ]]; then
        echo "   ✓ Orchestrator agent present"
    else
        echo "   ✗ Orchestrator agent missing"
    fi
    
    # Check for self-priming
    priming_refs=$(grep -r "self_prime" "$PROJECT_ROOT/.claude/agents" | wc -l)
    echo "   → Self-priming references: $priming_refs"
else
    echo "   ✗ Agent directory missing"
fi

# Test 5: Hook System
echo ""
echo "5. Testing Hook System..."
if [[ -d "$PROJECT_ROOT/.claude/hooks" ]]; then
    hook_count=$(find "$PROJECT_ROOT/.claude/hooks" -name "*.py" | wc -l)
    echo "   ✓ Found $hook_count Python hooks"
    
    # Check hook permissions
    executable_hooks=$(find "$PROJECT_ROOT/.claude/hooks" -name "*.py" -executable | wc -l)
    echo "   → Executable hooks: $executable_hooks/$hook_count"
else
    echo "   ✗ Hooks directory missing"
fi

# Test 6: MCP Integration
echo ""
echo "6. Testing MCP Integration..."
if [[ -f "$PROJECT_ROOT/.claude/settings.json" ]]; then
    echo "   ✓ Settings file present"
    
    # Check for MCP tool references
    mcp_refs=$(grep -c "mcp__" "$PROJECT_ROOT"/.claude/agents/*.md 2>/dev/null || echo "0")
    echo "   → MCP tool references in agents: $mcp_refs"
else
    echo "   ✗ Settings file missing"
fi

# Calculate autonomy score
echo ""
echo "=== AUTONOMY SCORE CALCULATION ==="

score=0
max_score=60

# Workflow system (10 points)
if [[ -f "$PROJECT_ROOT/context/WORKFLOWS.md" ]] && grep -q "feature-implementation" "$PROJECT_ROOT/context/WORKFLOWS.md"; then
    score=$((score + 10))
    echo "Workflow Detection: 10/10 ✓"
else
    echo "Workflow Detection: 0/10 ✗"
fi

# Memory system (15 points)
memory_score=$((memory_count * 15 / 4))
score=$((score + memory_score))
echo "Memory System: $memory_score/15"

# Index priming (10 points)
if [[ -x "$PROJECT_ROOT/scripts/query-index.sh" ]]; then
    score=$((score + 10))
    echo "Index Priming: 10/10 ✓"
else
    echo "Index Priming: 0/10 ✗"
fi

# Agent system (15 points)
if [[ -d "$PROJECT_ROOT/.claude/agents" ]]; then
    agent_score=$((agent_count * 15 / 20))  # Assume 20 target agents
    if (( agent_score > 15 )); then agent_score=15; fi
    score=$((score + agent_score))
    echo "Agent System: $agent_score/15"
else
    echo "Agent System: 0/15 ✗"
fi

# Hook system (5 points)
if [[ -d "$PROJECT_ROOT/.claude/hooks" ]] && (( hook_count > 0 )); then
    score=$((score + 5))
    echo "Hook System: 5/5 ✓"
else
    echo "Hook System: 0/5 ✗"
fi

# MCP integration (5 points)
if (( mcp_refs > 10 )); then
    score=$((score + 5))
    echo "MCP Integration: 5/5 ✓"
else
    echo "MCP Integration: 0/5 ✗"
fi

# Final score
percentage=$((score * 100 / max_score))
echo ""
echo "=== FINAL AUTONOMY ASSESSMENT ==="
echo "Score: $score/$max_score points ($percentage%)"

if (( percentage >= 80 )); then
    echo "Status: 🟢 AUTONOMOUS READY"
    echo "Assessment: System demonstrates high autonomous capability"
elif (( percentage >= 60 )); then
    echo "Status: 🟡 PARTIALLY AUTONOMOUS"
    echo "Assessment: System has autonomous foundations, needs orchestration"
elif (( percentage >= 40 )); then
    echo "Status: 🟠 LIMITED AUTONOMY"
    echo "Assessment: System has components but lacks integration"
else
    echo "Status: 🔴 NOT AUTONOMOUS"
    echo "Assessment: System lacks core autonomous capabilities"
fi

echo ""
echo "Next Steps:"
if (( percentage < 80 )); then
    echo "- Run full test suite: ./scripts/claude-system-test-runner.sh"
    echo "- Review compliance audit findings"
    echo "- Focus on orchestration improvements"
else
    echo "- System ready for autonomous operation"
    echo "- Monitor performance with full test suite"
    echo "- Continue incremental improvements"
fi

exit 0