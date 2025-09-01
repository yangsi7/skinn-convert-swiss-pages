# Agent Priming Verification Report
Generated: 2025-08-28T17:59:37.089452

## Overall Statistics
- Total Sessions: 2
- Total Priming Executions: 1
- Priming Compliance Rate: 50.0%
- Total Tokens Saved: 140,000
- Cache Hit Rate: 0

## Agent-Specific Compliance

| Agent | Invocations | Priming Count | Compliance % | Tokens Saved | Last Used |
|-------|-------------|---------------|--------------|--------------|-----------|
| ✅ code-searcher | 1 | 1 | 100.0% | 140,000 | 2025-08-28T15:59:28Z |
| ❌ main | 1 | 0 | 0.0% | 0 | 2025-08-28T15:59:18Z |

## Recent Session Analysis (Last 10)

| Timestamp | Agent | Operation | Priming | Tokens Saved | Cache Hits |
|-----------|-------|-----------|---------|--------------|------------|
| 2025-08-28T15:59:28Z | code-searcher | priming | ✅ | 140,000 | 0 |
| 2025-08-28T15:59:18Z | main | session_start | ❌ | 0 | 0 |

## ⚠️ Compliance Issues Detected

- **main**: 0.0% compliance (1 invocations without priming)

### Recommended Actions:
1. Review agent implementations for self_prime parameter
2. Check if agents are executing query-index.sh
3. Verify telemetry recording is working correctly
4. Run test invocations with explicit priming
