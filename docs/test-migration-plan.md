# Test Migration & Cleanup Plan
VERSION: 1.0
CREATED: 2025-11-20
STATUS: READY FOR EXECUTION
PURPOSE: Archive current test chaos and establish clean testing structure

## Current Test Chaos Inventory

### Files to Archive

#### Root Directory Mess (11 files)
```
accessibility-audit-script.cjs
accessibility-color-fixes.json
accessibility-contrast-audit.json
accessibility-fix-calculator.cjs
accessibility-verification-audit.cjs
accessibility-verification-report.json
multilingual-audit-report.md
homepage-accessibility-*.png files
```

#### test-scripts/ Directory (14 files)
```
All .cjs and .js files for manual testing
These will be replaced by MCP tool usage
```

#### test-results/ Directory (ALL)
```
Entire directory with all subdirectories
These are ephemeral and should never be committed
```

#### scripts/ Test Files
```
scripts/check-console-errors.js
scripts/debug-*.js
scripts/lighthouse-test.js
scripts/measure-performance.js
scripts/test-*.js
scripts/visual-*.js
scripts/v7-2-text-verification.js
scripts/validate-translations.js
```

### Files to Keep & Reorganize

#### Legitimate Test Files
```
e2e/accessibility.spec.ts → tests/integration/accessibility.test.ts
tests/performance.spec.ts → tests/integration/performance.test.ts
tests/responsive-quick.spec.ts → ARCHIVE (visual regression not needed)
tests/visual-regression.spec.ts → ARCHIVE (use MCP tools instead)
src/components/forms/ContactForm.test.tsx → tests/unit/components/ContactForm.test.tsx
src/hooks/useTranslation.test.ts → tests/unit/hooks/useTranslation.test.ts
src/example.test.ts → ARCHIVE (example not needed)
src/test/setup.ts → tests/config/setup.ts
```

## Migration Steps

### Step 1: Create Archive Structure
```bash
mkdir -p archive/2025-11-20/test-cleanup
mkdir -p archive/2025-11-20/test-cleanup/root-test-files
mkdir -p archive/2025-11-20/test-cleanup/test-scripts
mkdir -p archive/2025-11-20/test-cleanup/test-results
mkdir -p archive/2025-11-20/test-cleanup/scripts
mkdir -p archive/2025-11-20/test-cleanup/visual-tests
```

### Step 2: Archive Test Files
```bash
# Archive root test files
mv accessibility-*.cjs archive/2025-11-20/test-cleanup/root-test-files/
mv accessibility-*.json archive/2025-11-20/test-cleanup/root-test-files/
mv homepage-*.png archive/2025-11-20/test-cleanup/root-test-files/
mv multilingual-audit-report.md archive/2025-11-20/test-cleanup/root-test-files/

# Archive test-scripts directory
mv test-scripts/* archive/2025-11-20/test-cleanup/test-scripts/
rmdir test-scripts

# Archive test-results directory
mv test-results/* archive/2025-11-20/test-cleanup/test-results/
rmdir test-results

# Archive script test files
mv scripts/*test*.js archive/2025-11-20/test-cleanup/scripts/
mv scripts/debug-*.js archive/2025-11-20/test-cleanup/scripts/
mv scripts/visual-*.js archive/2025-11-20/test-cleanup/scripts/
mv scripts/check-console-errors.js archive/2025-11-20/test-cleanup/scripts/
mv scripts/measure-performance.js archive/2025-11-20/test-cleanup/scripts/
mv scripts/lighthouse-test.js archive/2025-11-20/test-cleanup/scripts/
mv scripts/validate-translations.js archive/2025-11-20/test-cleanup/scripts/
mv scripts/v7-2-text-verification.js archive/2025-11-20/test-cleanup/scripts/
```

### Step 3: Create New Test Structure
```bash
# Create clean test structure
mkdir -p tests/unit/services
mkdir -p tests/unit/utils
mkdir -p tests/unit/hooks
mkdir -p tests/unit/components
mkdir -p tests/integration/forms
mkdir -p tests/integration/auth
mkdir -p tests/integration/flows
mkdir -p tests/config

# Move legitimate test files
mv src/test/setup.ts tests/config/setup.ts
mv src/components/forms/ContactForm.test.tsx tests/unit/components/
mv src/hooks/useTranslation.test.ts tests/unit/hooks/
mv e2e/accessibility.spec.ts tests/integration/accessibility.test.ts

# Archive visual regression tests (replaced by MCP tools)
mv tests/responsive-quick.spec.ts archive/2025-11-20/test-cleanup/visual-tests/
mv tests/visual-regression.spec.ts archive/2025-11-20/test-cleanup/visual-tests/
mv tests/responsive-quick.spec.ts-snapshots archive/2025-11-20/test-cleanup/visual-tests/

# Remove example test
rm src/example.test.ts

# Clean up e2e directory
rmdir e2e
```

### Step 4: Update Configuration Files

#### Update vitest.config.ts
```typescript
import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './tests/config/setup.ts',
    include: ['tests/unit/**/*.{test,spec}.{ts,tsx}'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      reportsDirectory: './archive/tests/coverage',
      exclude: [
        'node_modules/',
        'tests/',
        '*.config.ts',
        'src/components/ui/**', // shadcn components
        'src/types/**',
      ],
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
```

#### Remove playwright.config.ts
```bash
rm playwright.config.ts
rm -rf playwright-report
```

#### Update package.json scripts
```json
{
  "scripts": {
    "test": "vitest",
    "test:unit": "vitest run tests/unit",
    "test:unit:watch": "vitest watch tests/unit",
    "test:coverage": "vitest run --coverage tests/unit",
    "test:integration": "echo 'Use MCP puppeteer tools for integration testing'",
    // Remove these:
    // "test:e2e": "playwright test",
    // "test:e2e:ui": "playwright test --ui",
    // "test:a11y": "playwright test e2e/accessibility.spec.ts",
    // "test:lighthouse": "lhci autorun",
  }
}
```

### Step 5: Update .gitignore
```gitignore
# Test artifacts (never commit these)
/archive/tests/
/test-results/
/test-scripts/
*.test-results.json
coverage/
.nyc_output/
playwright-report/
playwright/.cache/
test-screenshots/
*.png.tmp
*.spec.ts-snapshots/
lighthouse-report/
.lighthouseci/

# Old test files (archived)
accessibility-*.cjs
accessibility-*.json
*-audit-*.png
```

## Files to Create

### tests/README.md
```markdown
# Test Suite

## Structure
- `unit/` - Business logic and utility tests (Vitest)
- `integration/` - Critical user flow tests (MCP Puppeteer)
- `config/` - Test configuration and setup

## Running Tests
- `npm run test:unit` - Run unit tests
- `npm run test:unit:watch` - Watch mode for TDD
- `npm run test:coverage` - Coverage for backend code

## Integration Testing
Use MCP Puppeteer tools via testing-qa-agent, not scripts.

## Important
- Test results are ephemeral - never commit them
- Focus on business logic, not UI details
- Use TypeScript for type safety, not tests
```

### tests/unit/services/otp.test.ts (Example)
```typescript
import { describe, it, expect } from 'vitest';
import { verifyOTP, generateOTP } from '@/services/otp';

describe('OTP Service', () => {
  describe('generateOTP', () => {
    it('generates 6-digit OTP', () => {
      const otp = generateOTP();
      expect(otp).toMatch(/^\d{6}$/);
    });
  });

  describe('verifyOTP', () => {
    it('implements rate limiting after 5 attempts', async () => {
      const email = 'test@example.com';
      const wrongOTP = '000000';
      
      // First 5 attempts should be allowed
      for (let i = 0; i < 5; i++) {
        const result = await verifyOTP(email, wrongOTP);
        expect(result.attemptsRemaining).toBe(4 - i);
      }
      
      // 6th attempt should be rate limited
      await expect(verifyOTP(email, wrongOTP)).rejects.toThrow('Rate limited');
    });

    it('uses bcrypt for OTP hashing', async () => {
      // Test that OTP is hashed, not stored in plain text
      const otp = '123456';
      const hashedOTP = await hashOTP(otp);
      expect(hashedOTP).not.toBe(otp);
      expect(hashedOTP).toMatch(/^\$2[ayb]\$.{56}$/); // bcrypt format
    });
  });
});
```

## Verification Checklist

After migration:
- [ ] No test files in root directory
- [ ] No test-scripts/ directory exists
- [ ] No test-results/ directory exists
- [ ] tests/ directory has clean structure
- [ ] package.json scripts updated
- [ ] .gitignore updated
- [ ] vitest.config.ts configured
- [ ] playwright files removed
- [ ] Archive directory created and ignored
- [ ] All test artifacts archived

## Benefits After Migration

1. **Cleaner Repository**: No test clutter in root
2. **Faster Development**: No maintaining brittle tests
3. **Agent-Friendly**: MCP tools instead of scripts
4. **Focused Testing**: Only test what matters
5. **Zero Test Debt**: Ephemeral results, no accumulation