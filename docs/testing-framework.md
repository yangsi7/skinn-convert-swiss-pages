# Testing Framework for Agentic Coding Systems
VERSION: 1.0
CREATED: 2025-11-20
PURPOSE: Define efficient, robust testing protocols for agent-driven development

## 1. Testing Philosophy

### Core Principles
1. **Agent-First Testing**: Tests are triggered by agents using MCP tools, not scripts
2. **Outcome-Focused**: Test what matters - business logic, user flows, security
3. **Ephemeral Results**: Test results are never committed, only analyzed
4. **Minimal Overhead**: No over-engineering, just useful feedback for iterations
5. **Context-Aware**: Tests adapt based on what code was changed

### What We DON'T Do
- ❌ No test scripts in the repository (use MCP tools instead)
- ❌ No test results in version control
- ❌ No 100% coverage obsession
- ❌ No testing for the sake of testing
- ❌ No brittle snapshot tests that break on every change

## 2. Testing Architecture

```
/tests/                     # All test files in ONE location
├── unit/                   # Business logic tests
│   ├── services/          # API, business logic
│   ├── utils/            # Utility functions
│   └── hooks/            # Custom React hooks
├── integration/           # Component integration tests
│   ├── forms/            # Form workflows
│   ├── auth/             # Authentication flows
│   └── data/             # Data fetching
└── config/               # Test configuration
    ├── vitest.config.ts  # Unit test config
    └── setup.ts          # Test environment setup

/archive/tests/            # Archived test artifacts (git-ignored)
└── YYYY-MM-DD/           # Daily archives of test runs
```

## 3. Testing Categories & When to Test

### 3.1 Backend/Business Logic (ALWAYS TEST)

**What to Test:**
- Edge functions
- API endpoints
- Database operations
- Authentication logic
- Payment processing
- Data validation
- Security functions

**How to Test:**
```typescript
// Unit tests with Vitest
describe('OTP Verification', () => {
  it('should rate limit after 5 attempts', async () => {
    // Test rate limiting logic
  });
  
  it('should use bcrypt hashing', async () => {
    // Test security implementation
  });
});
```

**Agent Protocol:**
- Backend-developer writes tests BEFORE implementation (TDD)
- Testing-qa-agent validates after implementation
- Tests run automatically on file changes

### 3.2 Frontend Components (SELECTIVE TESTING)

**What to Test:**
- Critical user flows (eligibility checker, payment)
- Form validation and submission
- Authentication flows
- Error handling
- Accessibility compliance

**What NOT to Test:**
- Static content components
- Pure presentational components
- Theme variations
- Simple display logic

**How to Test:**
```typescript
// Integration tests for critical flows
describe('Eligibility Flow', () => {
  it('completes full eligibility journey', async () => {
    // Test with Puppeteer MCP tool
    await mcp__puppeteer__puppeteer_navigate({ 
      url: 'http://localhost:8080/eligibility' 
    });
    // ... test user journey
  });
});
```

### 3.3 Visual/UI Testing (AGENT-DRIVEN ONLY)

**Protocol:**
- NO visual regression test scripts
- Use Puppeteer MCP tools for on-demand testing
- Agent takes screenshots when needed
- Compare visually during development, not in CI

**Example Agent Invocation:**
```typescript
// Testing-qa-agent uses MCP tools directly
await mcp__puppeteer__puppeteer_navigate({ url: 'http://localhost:8080' });
await mcp__puppeteer__puppeteer_screenshot({ 
  name: 'homepage-check',
  selector: '.hero-section' 
});
```

### 3.4 Performance Testing (PERIODIC)

**When to Test:**
- After major feature additions
- Before production deployments
- When performance issues reported

**How:**
- Use Lighthouse via MCP tools
- Check Core Web Vitals
- No continuous monitoring in dev

## 4. Testing Protocols by Agent

### Frontend-Developer Agent
1. **Before coding**: Check if component needs tests
2. **Critical components only**: Forms, auth, payments
3. **Use Puppeteer MCP**: For interaction testing
4. **No snapshot tests**: They're too brittle

### Backend-Developer Agent
1. **TDD mandatory**: Write test first
2. **Test all endpoints**: 100% API coverage
3. **Security tests**: Rate limiting, validation
4. **Use Vitest**: Fast unit testing

### Testing-QA Agent
1. **Post-implementation**: Validate features
2. **Use MCP tools**: Not scripts
3. **Focus on user journeys**: Not implementation details
4. **Report issues**: Not just pass/fail

### Database-Supabase Agent
1. **Test migrations**: Before applying
2. **Test RLS policies**: Security critical
3. **Test functions**: Business logic
4. **Use SQL test queries**: Not application tests

## 5. Test Execution Strategy

### Unit Tests (Continuous)
```bash
# Run automatically with Vitest
npm run test:unit -- --watch

# Coverage for backend only
npm run test:coverage -- src/services src/utils
```

### Integration Tests (On-Demand)
```typescript
// Agent-triggered via MCP tools
const testResults = await mcp__puppeteer__puppeteer_evaluate({
  script: `
    // Test form submission
    document.querySelector('form').submit();
    return document.querySelector('.success-message') !== null;
  `
});
```

### Accessibility Tests (Pre-Commit)
```typescript
// Using MCP tools, not scripts
await mcp__puppeteer__puppeteer_navigate({ url: 'http://localhost:8080' });
// Use browser's built-in accessibility tree
const a11y = await mcp__puppeteer__puppeteer_evaluate({
  script: 'return document.body.innerHTML'
});
// Analyze with AI, not automated tools
```

## 6. Test Data Management

### Principles
- Use factories for test data generation
- Never use production data
- Reset database between test runs
- Mock external services

### Test Data Factory
```typescript
// tests/factories/user.factory.ts
export const createTestUser = (overrides = {}) => ({
  email: 'test@example.com',
  dateOfBirth: '1990-01-01',
  insuranceProvider: 'CSS',
  ...overrides
});
```

## 7. What NOT to Test

### Skip These
- Generated code (shadcn/ui components)
- Third-party libraries
- Configuration files
- Type definitions
- Translation files
- Static assets

### Why Skip?
- Low value, high maintenance
- Already tested by library authors
- Changes frequently without bugs
- Better caught by TypeScript

## 8. Test Result Management

### Archive Strategy
```bash
# Test results go to archive (git-ignored)
/archive/tests/YYYY-MM-DD/
├── unit-test-results.json
├── coverage-report.html
├── screenshots/
└── performance-metrics.json

# Automatic cleanup after 7 days
find archive/tests -type d -mtime +7 -exec rm -rf {} \;
```

### .gitignore Updates
```gitignore
# Test artifacts
/archive/tests/
/test-results/
*.test-results.json
coverage/
.nyc_output/
playwright-report/
test-screenshots/
```

## 9. Agent Testing Workflow

### Step 1: Determine If Testing Needed
```typescript
// Agent asks: Is this...
// - Business logic? → YES, test it
// - Security related? → YES, test it  
// - Critical user flow? → YES, test it
// - UI component? → MAYBE, if critical
// - Static content? → NO, skip it
```

### Step 2: Choose Testing Method
```typescript
// For Frontend:
if (criticalUserFlow) {
  // Use Puppeteer MCP tools
  await mcp__puppeteer__puppeteer_navigate(...);
} else {
  // Skip or minimal smoke test
}

// For Backend:
if (businessLogic || api) {
  // Write Vitest unit tests
  // Test BEFORE implementation (TDD)
}
```

### Step 3: Execute Tests
```typescript
// Agents use tools, not scripts
// No test:e2e scripts needed
// Tests run via MCP tools or Vitest watch mode
```

### Step 4: Analyze Results
```typescript
// AI interprets results
// No need for detailed reports
// Focus on: Does it work? Is it secure? Is it accessible?
```

## 10. Migration from Current Chaos

### Phase 1: Archive Everything (Immediate)
1. Move all test-scripts/ to archive/
2. Move all test-results/ to archive/
3. Move scattered .cjs files to archive/
4. Update .gitignore

### Phase 2: Setup Clean Structure (Day 1)
1. Create /tests/unit/ for Vitest tests
2. Create /tests/integration/ for critical flows
3. Configure Vitest for unit tests only
4. Remove Playwright config (use MCP instead)

### Phase 3: Establish Protocols (Day 2)
1. Update CLAUDE.md with testing guidelines
2. Update conventions.md with test requirements
3. Train agents on new testing approach
4. Document in CLAUDE_PROCESS.md

## 11. Success Metrics

### Good Testing
- ✅ Fast feedback (< 1 minute)
- ✅ Useful error messages
- ✅ Tests that catch real bugs
- ✅ Low maintenance burden
- ✅ Clear what failed and why

### Bad Testing
- ❌ Slow test suites (> 5 minutes)
- ❌ Flaky tests that randomly fail
- ❌ Tests that never catch bugs
- ❌ More time fixing tests than code
- ❌ Unclear failure messages

## 12. Quick Reference

### When to Write Tests
| Code Type | Test? | Method |
|-----------|-------|---------|
| API Endpoint | ✅ Always | Vitest unit test |
| Database Operation | ✅ Always | SQL test + Vitest |
| Auth Logic | ✅ Always | Vitest + Integration |
| Payment Flow | ✅ Always | Integration + Unit |
| Form Validation | ✅ Always | Vitest unit test |
| Critical UI Flow | ✅ Yes | Puppeteer MCP |
| Display Component | ❌ No | TypeScript is enough |
| Static Content | ❌ No | Not needed |
| Theme Variant | ❌ No | Visual check only |

### Test Commands
```bash
# Unit tests (keep these)
npm run test:unit        # Run once
npm run test:unit:watch  # Watch mode
npm run test:coverage    # Coverage report

# Remove these scripts
# npm run test:e2e ❌
# npm run test:visual ❌  
# npm run test:lighthouse ❌

# Use MCP tools instead
mcp__puppeteer__* for UI testing
```

## Summary

This testing framework prioritizes:
1. **Efficiency** - Test what matters, skip the rest
2. **Agent-First** - MCP tools over scripts
3. **Maintainability** - Less tests, better tests
4. **Clarity** - Know what failed and why
5. **Speed** - Fast feedback loops

Remember: The goal is to ship quality software, not to have perfect test coverage. Test the critical paths, trust TypeScript for the rest, and use agent intelligence for validation.