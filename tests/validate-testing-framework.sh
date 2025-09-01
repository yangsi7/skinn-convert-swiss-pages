#!/bin/bash
# Testing Framework Validation Script
# Purpose: Validate that the testing framework is properly set up and functional

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(dirname "$SCRIPT_DIR")"

echo "=== CLAUDE Testing Framework Validation ==="
echo "Validating testing infrastructure setup..."
echo ""

# Validation results
VALIDATION_SCORE=0
MAX_SCORE=100

# 1. Test Scripts Validation (20 points)
echo "1. Testing Framework Scripts..."

if [[ -f "$PROJECT_ROOT/scripts/claude-system-test-runner.sh" ]]; then
    echo "   ✓ Main test runner present"
    VALIDATION_SCORE=$((VALIDATION_SCORE + 10))
    
    if [[ -x "$PROJECT_ROOT/scripts/claude-system-test-runner.sh" ]]; then
        echo "   ✓ Main test runner executable"
        VALIDATION_SCORE=$((VALIDATION_SCORE + 5))
    else
        echo "   ⚠ Main test runner not executable (run: chmod +x scripts/claude-system-test-runner.sh)"
    fi
else
    echo "   ✗ Main test runner missing"
fi

if [[ -f "$PROJECT_ROOT/scripts/test-claude-autonomy.sh" ]]; then
    echo "   ✓ Quick autonomy test present"
    VALIDATION_SCORE=$((VALIDATION_SCORE + 5))
    
    if [[ -x "$PROJECT_ROOT/scripts/test-claude-autonomy.sh" ]]; then
        echo "   ✓ Quick autonomy test executable"
    else
        echo "   ⚠ Quick autonomy test not executable (run: chmod +x scripts/test-claude-autonomy.sh)"
        # Make it executable
        chmod +x "$PROJECT_ROOT/scripts/test-claude-autonomy.sh" 2>/dev/null || true
    fi
else
    echo "   ✗ Quick autonomy test missing"
fi

# Make test runner executable if not already
if [[ -f "$PROJECT_ROOT/scripts/claude-system-test-runner.sh" ]]; then
    chmod +x "$PROJECT_ROOT/scripts/claude-system-test-runner.sh" 2>/dev/null || true
fi

echo ""

# 2. Configuration Validation (15 points)
echo "2. Test Configuration..."

if [[ -f "$PROJECT_ROOT/tests/config/testing-config.json" ]]; then
    echo "   ✓ Testing configuration file present"
    VALIDATION_SCORE=$((VALIDATION_SCORE + 10))
    
    # Validate JSON syntax
    if python3 -c "import json; json.load(open('$PROJECT_ROOT/tests/config/testing-config.json'))" 2>/dev/null; then
        echo "   ✓ Configuration JSON syntax valid"
        VALIDATION_SCORE=$((VALIDATION_SCORE + 5))
    else
        echo "   ✗ Configuration JSON syntax invalid"
    fi
else
    echo "   ✗ Testing configuration missing"
fi

echo ""

# 3. Directory Structure (10 points)
echo "3. Directory Structure..."

required_dirs=(
    "tests"
    "tests/config"
    "tests/results"
    "scripts"
)

created_dirs=0
for dir in "${required_dirs[@]}"; do
    if [[ -d "$PROJECT_ROOT/$dir" ]]; then
        echo "   ✓ $dir/ directory exists"
        ((created_dirs++))
    else
        echo "   ⚠ $dir/ directory missing - creating..."
        mkdir -p "$PROJECT_ROOT/$dir"
        ((created_dirs++))
    fi
done

VALIDATION_SCORE=$((VALIDATION_SCORE + (created_dirs * 10 / ${#required_dirs[@]})))

echo ""

# 4. Dependencies Validation (15 points)
echo "4. System Dependencies..."

dependencies_score=0

# Check for required commands
if command -v python3 >/dev/null 2>&1; then
    python_version=$(python3 --version 2>&1 | grep -o '[0-9]\+\.[0-9]\+' | head -1)
    echo "   ✓ Python 3 available (version $python_version)"
    dependencies_score=$((dependencies_score + 5))
else
    echo "   ✗ Python 3 not available"
fi

if command -v node >/dev/null 2>&1; then
    node_version=$(node --version 2>&1 | grep -o '[0-9]\+\.[0-9]\+' | head -1)
    echo "   ✓ Node.js available (version $node_version)"
    dependencies_score=$((dependencies_score + 5))
else
    echo "   ✗ Node.js not available"
fi

if command -v jq >/dev/null 2>&1; then
    echo "   ✓ jq available for JSON processing"
    dependencies_score=$((dependencies_score + 3))
else
    echo "   ⚠ jq not available (install: brew install jq or apt-get install jq)"
fi

if command -v bash >/dev/null 2>&1; then
    bash_version=$(bash --version 2>&1 | head -1 | grep -o '[0-9]\+\.[0-9]\+' | head -1)
    echo "   ✓ Bash available (version $bash_version)"
    dependencies_score=$((dependencies_score + 2))
else
    echo "   ✗ Bash not available"
fi

VALIDATION_SCORE=$((VALIDATION_SCORE + dependencies_score))

echo ""

# 5. Core System Validation (25 points)
echo "5. Core CLAUDE System Components..."

core_score=0

# Memory system
if [[ -d "$PROJECT_ROOT/memory" ]]; then
    memory_files=$(find "$PROJECT_ROOT/memory" -name "*.json" | wc -l)
    echo "   ✓ Memory system directory with $memory_files JSON files"
    core_score=$((core_score + 5))
else
    echo "   ✗ Memory system directory missing"
fi

# Agent system
if [[ -d "$PROJECT_ROOT/.claude/agents" ]]; then
    agent_files=$(find "$PROJECT_ROOT/.claude/agents" -name "*.md" | wc -l)
    echo "   ✓ Agent system with $agent_files agent files"
    core_score=$((core_score + 5))
else
    echo "   ✗ Agent system directory missing"
fi

# Index system
if [[ -f "$PROJECT_ROOT/scripts/query-index.sh" ]]; then
    echo "   ✓ Index query system available"
    core_score=$((core_score + 5))
else
    echo "   ✗ Index query system missing"
fi

# WORKFLOWS.md
if [[ -f "$PROJECT_ROOT/context/WORKFLOWS.md" ]]; then
    workflow_count=$(grep -c "^name:" "$PROJECT_ROOT/context/WORKFLOWS.md" 2>/dev/null || echo "0")
    echo "   ✓ Workflow definitions with $workflow_count workflows"
    core_score=$((core_score + 5))
else
    echo "   ✗ Workflow definitions missing"
fi

# CLAUDE_PROCESS.md
if [[ -f "$PROJECT_ROOT/context/CLAUDE_PROCESS.md" ]]; then
    echo "   ✓ CLAUDE process documentation available"
    core_score=$((core_score + 5))
else
    echo "   ✗ CLAUDE process documentation missing"
fi

VALIDATION_SCORE=$((VALIDATION_SCORE + core_score))

echo ""

# 6. Telemetry System (10 points)
echo "6. Telemetry System..."

if [[ -f "$PROJECT_ROOT/memory/telemetry.json" ]]; then
    echo "   ✓ Telemetry file present"
    VALIDATION_SCORE=$((VALIDATION_SCORE + 5))
    
    # Check telemetry structure
    if python3 -c "
import json
try:
    with open('$PROJECT_ROOT/memory/telemetry.json', 'r') as f:
        data = json.load(f)
    if 'sessions' in data:
        print('   ✓ Telemetry structure valid')
        exit(0)
    else:
        print('   ⚠ Telemetry structure incomplete')
        exit(1)
except:
    print('   ✗ Telemetry JSON invalid')
    exit(1)
" 2>/dev/null; then
        VALIDATION_SCORE=$((VALIDATION_SCORE + 5))
    fi
else
    echo "   ⚠ Telemetry file missing - will be created on first test run"
fi

echo ""

# 7. Quick Functionality Test (5 points)
echo "7. Quick Functionality Test..."

if [[ -x "$PROJECT_ROOT/scripts/test-claude-autonomy.sh" ]]; then
    echo "   → Running quick autonomy assessment..."
    if "$PROJECT_ROOT/scripts/test-claude-autonomy.sh" >/dev/null 2>&1; then
        echo "   ✓ Quick autonomy test executed successfully"
        VALIDATION_SCORE=$((VALIDATION_SCORE + 5))
    else
        echo "   ⚠ Quick autonomy test had issues (run manually to diagnose)"
    fi
else
    echo "   ✗ Cannot run quick functionality test - script not executable"
fi

echo ""

# Final Validation Report
echo "=== VALIDATION RESULTS ==="
echo "Score: $VALIDATION_SCORE/$MAX_SCORE points ($(( VALIDATION_SCORE * 100 / MAX_SCORE ))%)"

if (( VALIDATION_SCORE >= 90 )); then
    echo "Status: 🟢 TESTING FRAMEWORK READY"
    echo "Assessment: All components validated, ready for comprehensive testing"
    echo ""
    echo "Next Steps:"
    echo "  1. Run quick assessment: ./scripts/test-claude-autonomy.sh"
    echo "  2. Run foundation tests: ./scripts/claude-system-test-runner.sh autonomy memory"
    echo "  3. Review results in tests/results/"
elif (( VALIDATION_SCORE >= 75 )); then
    echo "Status: 🟡 TESTING FRAMEWORK MOSTLY READY"  
    echo "Assessment: Minor issues detected, framework should work with limitations"
    echo ""
    echo "Recommended Actions:"
    echo "  1. Address missing dependencies (especially jq)"
    echo "  2. Run foundation tests to identify remaining issues"
    echo "  3. Check script permissions"
elif (( VALIDATION_SCORE >= 60 )); then
    echo "Status: 🟠 TESTING FRAMEWORK PARTIALLY READY"
    echo "Assessment: Significant gaps detected, framework may have limited functionality"
    echo ""
    echo "Required Actions:"
    echo "  1. Install missing dependencies (Python 3, Node.js, jq)"
    echo "  2. Verify core CLAUDE system components"
    echo "  3. Fix configuration issues before testing"
else
    echo "Status: 🔴 TESTING FRAMEWORK NOT READY"
    echo "Assessment: Major components missing, framework will not function properly"
    echo ""
    echo "Critical Actions Required:"
    echo "  1. Install all missing dependencies"
    echo "  2. Verify CLAUDE system installation"
    echo "  3. Fix core system issues before attempting tests"
fi

echo ""
echo "Detailed Information:"
echo "  - Test Configuration: tests/config/testing-config.json"
echo "  - Test Documentation: tests/README.md" 
echo "  - Main Test Runner: scripts/claude-system-test-runner.sh"
echo "  - Quick Assessment: scripts/test-claude-autonomy.sh"
echo "  - Results Directory: tests/results/"

exit 0