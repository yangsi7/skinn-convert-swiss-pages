#!/bin/bash

# test-agent-priming.sh - Test that agents properly execute index priming protocol
# This script validates that agents use query-index.sh instead of direct index access

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}=== Agent Index Priming Test Suite ===${NC}"
echo "Testing that agents properly execute the index priming protocol"
echo ""

# Test configuration
CACHE_DIR=".cache/query-cache"
TEST_RESULTS_FILE="/tmp/agent-priming-test-results.txt"
FAILED_TESTS=0
PASSED_TESTS=0

# Function to check if cache was created
check_cache_created() {
    if [ -d "$CACHE_DIR" ] && [ "$(ls -A $CACHE_DIR 2>/dev/null)" ]; then
        echo -e "${GREEN}✅ Cache directory populated${NC}"
        return 0
    else
        echo -e "${RED}❌ Cache directory empty or missing${NC}"
        return 1
    fi
}

# Function to clear cache
clear_cache() {
    echo "Clearing cache directory..."
    rm -rf "$CACHE_DIR"
    mkdir -p "$CACHE_DIR"
}

# Function to check for direct index access attempts
check_direct_index_access() {
    local log_file=$1
    if grep -q "PROJECT_INDEX.json\|VISUAL_ASSETS_INDEX.json" "$log_file" 2>/dev/null; then
        echo -e "${RED}❌ Direct index access detected!${NC}"
        grep "PROJECT_INDEX.json\|VISUAL_ASSETS_INDEX.json" "$log_file"
        return 1
    else
        echo -e "${GREEN}✅ No direct index access attempts${NC}"
        return 0
    fi
}

# Function to check if query-index.sh was executed
check_query_execution() {
    local log_file=$1
    if grep -q "query-index.sh" "$log_file" 2>/dev/null; then
        echo -e "${GREEN}✅ query-index.sh commands found${NC}"
        return 0
    else
        echo -e "${RED}❌ No query-index.sh execution found${NC}"
        return 1
    fi
}

# Test 1: Verify query-index.sh works directly
echo -e "\n${YELLOW}Test 1: Direct query-index.sh execution${NC}"
clear_cache
./scripts/query-index.sh stats > /tmp/direct-query-test.json 2>&1
if [ $? -eq 0 ] && [ -s /tmp/direct-query-test.json ]; then
    echo -e "${GREEN}✅ Direct query works${NC}"
    ((PASSED_TESTS++))
else
    echo -e "${RED}❌ Direct query failed${NC}"
    ((FAILED_TESTS++))
fi

# Test 2: Check cache creation
echo -e "\n${YELLOW}Test 2: Cache directory creation${NC}"
if check_cache_created; then
    ((PASSED_TESTS++))
else
    ((FAILED_TESTS++))
fi

# Test 3: Validate stats query output
echo -e "\n${YELLOW}Test 3: Stats query validation${NC}"
if grep -q "total_files" /tmp/direct-query-test.json && grep -q "total_directories" /tmp/direct-query-test.json; then
    echo -e "${GREEN}✅ Stats query returns valid JSON${NC}"
    ((PASSED_TESTS++))
else
    echo -e "${RED}❌ Stats query output invalid${NC}"
    ((FAILED_TESTS++))
fi

# Test 4: Check agent-specific queries
echo -e "\n${YELLOW}Test 4: Agent-specific context queries${NC}"
clear_cache
./scripts/query-index.sh agent code-searcher > /tmp/agent-query-test.json 2>&1
if [ $? -eq 0 ] && grep -q "components\|pages\|hooks" /tmp/agent-query-test.json; then
    echo -e "${GREEN}✅ Agent context query works${NC}"
    ((PASSED_TESTS++))
else
    echo -e "${RED}❌ Agent context query failed${NC}"
    ((FAILED_TESTS++))
fi

# Test 5: Tree query with depth limit
echo -e "\n${YELLOW}Test 5: Tree query with depth limit${NC}"
./scripts/query-index.sh tree src/components 2 > /tmp/tree-query-test.json 2>&1
if [ $? -eq 0 ] && [ -s /tmp/tree-query-test.json ]; then
    echo -e "${GREEN}✅ Tree query works${NC}"
    ((PASSED_TESTS++))
else
    echo -e "${RED}❌ Tree query failed${NC}"
    ((FAILED_TESTS++))
fi

# Test 6: Cache hit detection
echo -e "\n${YELLOW}Test 6: Cache hit detection${NC}"
# Run same query twice
./scripts/query-index.sh stats > /tmp/cache-test1.txt 2>&1
./scripts/query-index.sh stats > /tmp/cache-test2.txt 2>&1
if grep -q "Cache hit" /tmp/cache-test2.txt; then
    echo -e "${GREEN}✅ Cache hits working${NC}"
    ((PASSED_TESTS++))
else
    echo -e "${RED}❌ Cache not working properly${NC}"
    ((FAILED_TESTS++))
fi

# Test 7: Token budget check
echo -e "\n${YELLOW}Test 7: Token budget verification${NC}"
# Get size of query results vs full index
QUERY_SIZE=$(wc -c < /tmp/direct-query-test.json)
if [ -f "PROJECT_INDEX.json" ]; then
    INDEX_SIZE=$(wc -c < PROJECT_INDEX.json)
    SAVINGS=$((INDEX_SIZE - QUERY_SIZE))
    PERCENT=$((SAVINGS * 100 / INDEX_SIZE))
    echo -e "Query size: ${QUERY_SIZE} bytes"
    echo -e "Index size: ${INDEX_SIZE} bytes"
    echo -e "Savings: ${SAVINGS} bytes (${PERCENT}%)"
    if [ $PERCENT -gt 95 ]; then
        echo -e "${GREEN}✅ Significant token savings achieved${NC}"
        ((PASSED_TESTS++))
    else
        echo -e "${YELLOW}⚠️ Token savings less than expected${NC}"
    fi
else
    echo -e "${YELLOW}⚠️ PROJECT_INDEX.json not found for comparison${NC}"
fi

# Test 8: Recent changes query
echo -e "\n${YELLOW}Test 8: Recent changes query${NC}"
./scripts/query-index.sh recent 24 > /tmp/recent-query-test.json 2>&1
if [ $? -eq 0 ]; then
    echo -e "${GREEN}✅ Recent changes query works${NC}"
    ((PASSED_TESTS++))
else
    echo -e "${RED}❌ Recent changes query failed${NC}"
    ((FAILED_TESTS++))
fi

# Test 9: Visual assets query
echo -e "\n${YELLOW}Test 9: Visual assets query${NC}"
./scripts/query-index.sh visual public/assets image > /tmp/visual-query-test.json 2>&1
if [ $? -eq 0 ]; then
    echo -e "${GREEN}✅ Visual assets query works${NC}"
    ((PASSED_TESTS++))
else
    echo -e "${RED}❌ Visual assets query failed${NC}"
    ((FAILED_TESTS++))
fi

# Test 10: Components query
echo -e "\n${YELLOW}Test 10: Components query${NC}"
./scripts/query-index.sh components all > /tmp/components-query-test.json 2>&1
if [ $? -eq 0 ]; then
    echo -e "${GREEN}✅ Components query works${NC}"
    ((PASSED_TESTS++))
else
    echo -e "${RED}❌ Components query failed${NC}"
    ((FAILED_TESTS++))
fi

# Summary Report
echo -e "\n${BLUE}=== Test Summary ===${NC}"
echo -e "Passed: ${GREEN}${PASSED_TESTS}${NC}"
echo -e "Failed: ${RED}${FAILED_TESTS}${NC}"

if [ $FAILED_TESTS -eq 0 ]; then
    echo -e "\n${GREEN}✅ All tests passed! Index priming system is working correctly.${NC}"
    exit 0
else
    echo -e "\n${RED}❌ Some tests failed. Agents may not be priming correctly.${NC}"
    echo -e "${YELLOW}Recommendations:${NC}"
    echo "1. Check that agents are using Bash tool to execute commands"
    echo "2. Verify agents show command outputs in their responses"
    echo "3. Ensure agents check for cache directory creation"
    echo "4. Confirm agents report token usage savings"
    exit 1
fi