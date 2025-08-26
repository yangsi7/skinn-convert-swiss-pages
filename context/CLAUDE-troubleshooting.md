# CLAUDE-troubleshooting.md
<!-- Common issues and proven solutions for SKIIN Switzerland -->

## Authentication Issues

### Problem: OTP verification fails
**Symptoms:** User doesn't receive OTP or verification fails
**Solutions:**
1. Check Supabase auth settings and email templates
2. Verify rate limiting isn't blocking (5 attempts/10 min)
3. Check `otp_verifications` table for attempts
4. Ensure edge function `send-otp-email` is deployed
```typescript
// Reset rate limit for testing
await supabase.rpc('reset_otp_attempts', { email });
```

### Problem: Session management issues
**Symptoms:** Users logged out unexpectedly
**Solutions:**
1. Check session expiry settings in Supabase
2. Verify cookie settings in authService.ts
3. Ensure RLS policies allow session queries
```typescript
// Force session refresh
const { data: { session } } = await supabase.auth.refreshSession();
```

## UI/Component Issues

### Problem: Components exceed 50-line limit
**Symptoms:** Build warnings or review failures
**Solutions:**
1. Extract logic into custom hooks
2. Split into smaller sub-components
3. Move business logic to utils/services
```typescript
// Extract complex logic
const useEligibilityLogic = () => {
  // Complex logic here
  return { methods, state };
};
```

### Problem: Tailwind classes not applying
**Symptoms:** Styles not rendering correctly
**Solutions:**
1. Check for class name conflicts with tailwind-merge
2. Ensure proper import of globals.css
3. Verify Tailwind config includes all paths
```typescript
// Use cn() helper for conditional classes
import { cn } from '@/lib/utils';
className={cn('base-class', conditional && 'conditional-class')}
```

## Testing Issues

### Problem: Tests fail with "Cannot find module"
**Symptoms:** Import errors in test files
**Solutions:**
1. Check vitest.config.ts path aliases
2. Ensure test setup file is loaded
3. Mock external dependencies properly
```typescript
// vitest.config.ts
resolve: {
  alias: {
    '@': path.resolve(__dirname, './src'),
  },
}
```

### Problem: E2E tests timeout
**Symptoms:** Playwright tests exceed timeout
**Solutions:**
1. Increase timeout in playwright.config.ts
2. Use proper wait strategies
3. Check if dev server is running
```typescript
// Wait for specific elements
await page.waitForSelector('[data-testid="form"]', { 
  timeout: 30000 
});
```

## Database Issues

### Problem: RLS policies blocking queries
**Symptoms:** Queries return empty or error
**Solutions:**
1. Check RLS policies on affected tables
2. Verify auth.uid() is available
3. Use service role key for admin operations
```sql
-- Debug RLS policies
SELECT * FROM users WHERE auth.uid() = id;
```

### Problem: Migration failures
**Symptoms:** Database schema out of sync
**Solutions:**
1. Check migration order and dependencies
2. Verify no conflicting migrations
3. Use `supabase db reset` for local dev
```bash
# Apply specific migration
supabase migration up --file 011_otp_functions.sql
```

## Build/Deploy Issues

### Problem: Build exceeds size limit
**Symptoms:** Deployment fails with size error
**Solutions:**
1. Check for accidentally included node_modules
2. Optimize images and assets
3. Enable code splitting for large components
```typescript
// Lazy load heavy components
const Dashboard = lazy(() => import('./Dashboard'));
```

### Problem: Environment variables not loading
**Symptoms:** API calls fail, features don't work
**Solutions:**
1. Check .env.local file exists
2. Verify VITE_ prefix for client vars
3. Restart dev server after changes
```typescript
// Access env variables correctly
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
```

## Performance Issues

### Problem: Slow initial page load
**Symptoms:** LCP > 2.5s
**Solutions:**
1. Implement code splitting
2. Optimize images (WebP, lazy loading)
3. Reduce bundle size
4. Check for render-blocking resources
```typescript
// Optimize images
<img loading="lazy" src={optimizedSrc} alt={alt} />
```

### Problem: Memory leaks in components
**Symptoms:** Page becomes sluggish over time
**Solutions:**
1. Clean up event listeners in useEffect
2. Cancel async operations on unmount
3. Avoid storing large objects in state
```typescript
useEffect(() => {
  const handler = () => {};
  window.addEventListener('resize', handler);
  return () => window.removeEventListener('resize', handler);
}, []);
```

## Multi-language Issues

### Problem: Missing translations
**Symptoms:** Keys showing instead of text
**Solutions:**
1. Check all 4 language files (en, de, fr, it)
2. Verify translation key paths
3. Ensure fallback language configured
```typescript
// Add fallback for missing translations
const { t } = useTranslation('en', { 
  useSuspense: false 
});
```

### Problem: Route language mismatch
**Symptoms:** Wrong language after navigation
**Solutions:**
1. Check route parameters extraction
2. Verify language context provider
3. Ensure consistent URL structure
```typescript
// Correct route structure
const languageRoutes = '/:lang(en|de|fr|it)/*';
```

## Agent System Issues

### Problem: Agent fails to self-prime
**Symptoms:** Agent lacks project context, generic responses
**Solutions:**
1. Check agent frontmatter has `self_prime: true`
2. Verify agent file follows standardized pattern
3. Ensure memory bank files exist in context/
```yaml
# Required in agent frontmatter
self_prime: true
request_id: string
```

## GP Referral System Issues

### Problem: Referral code generation fails
**Symptoms:** API returns 500 error, code not created
**Solutions:**
1. Check Supabase edge function deployment
2. Verify RESEND_API_KEY environment variable
3. Test database connection and RLS policies
4. Check collision detection logic in generate_referral_code()
```typescript
// Test code generation manually
const { data, error } = await supabase.rpc('generate_referral_code', {
  p_form_session_id: 'test-session',
  p_patient_name: 'Test Patient'
});
console.log({ data, error });
```

### Problem: HIN email validation fails
**Symptoms:** Valid HIN emails rejected
**Solutions:**
1. Check regex pattern: `/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]*\.hin\.ch$/`
2. Verify Swiss HIN domain variations
3. Test with known valid HIN addresses
4. Check for whitespace or formatting issues
```typescript
// Debug HIN validation
const testEmail = 'doctor@clinic.hin.ch';
const isValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]*\.hin\.ch$/.test(testEmail);
console.log(`${testEmail} is ${isValid ? 'valid' : 'invalid'}`);
```

### Problem: File upload size limit exceeded
**Symptoms:** 413 error, upload fails for large files
**Solutions:**
1. Verify client-side validation (10MB limit)
2. Check Supabase storage bucket policies
3. Implement file compression for large PDFs
4. Add progress indicator for upload status
```typescript
// File size validation
const MAX_SIZE = 10 * 1024 * 1024; // 10MB
if (file.size > MAX_SIZE) {
  throw new Error('File size must be less than 10MB');
}
```

### Problem: QR code not displaying
**Symptoms:** Empty space where QR should appear
**Solutions:**
1. Check react-qr-code library installation
2. Verify SVG rendering in browser
3. Test with simple string value
4. Check CSS z-index conflicts
```typescript
// Simple QR test
<QRCodeSVG
  value="TEST123"
  size={128}
  bgColor="#ffffff"
  fgColor="#000000"
/>
```

### Problem: Multi-step wizard navigation issues
**Symptoms:** Steps not advancing, progress bar stuck
**Solutions:**
1. Check step validation logic
2. Verify state management in wizard context
3. Test form submission handlers
4. Debug step transition functions
```typescript
// Debug wizard state
const { currentStep, totalSteps, progress } = useStepProgress();
console.log({ currentStep, totalSteps, progress });
```

### Problem: Request tracking missing
**Symptoms:** Cannot debug multi-agent workflows
**Solutions:**
1. Check agent has request_id in frontmatter
2. Verify request tracking in agent responses
3. Update agent with automation script if needed
```bash
# Fix missing request tracking
python scripts/add_request_id.py
```

### Problem: Agent standardization inconsistent
**Symptoms:** Different agent frontmatter patterns
**Solutions:**
1. Run standardization automation scripts
2. Verify all 20 agents have consistent patterns
3. Update CLAUDE-patterns.md with new patterns
```bash
# Standardize all agents
python scripts/add_self_prime.py
python scripts/add_request_id.py
```

## Common Development Gotchas

### File Organization Violations
**Issue:** Files in wrong locations
**Fix:** Run `./scripts/auto-file-mover.sh`

### Missing Indexes
**Issue:** PROJECT_INDEX.json outdated
**Fix:** Run `./scripts/generate-indexes.sh`

### Context Overflow
**Issue:** Context exceeds 100KB limit
**Fix:** Use selective loading from indexes

### Uncommitted Event Stream
**Issue:** event-stream.md has changes
**Fix:** Commit regularly with descriptive messages

### Backup File Clutter
**Issue:** .bak files accumulating in codebase
**Fix:** Clean periodically - they're auto-generated backups
```bash
# Clean all .bak files
find . -name "*.bak" -type f -delete
```

### GP Referral Database Issues
**Issue:** RLS policies blocking referral queries
**Fix:** Verify auth.uid() context and policy conditions
```sql
-- Debug referral RLS policies
SELECT * FROM referral_codes WHERE auth.uid() = doctor_id;
SELECT * FROM doctor_referrals WHERE auth.uid() = doctor_id;
```

### Email Delivery Failures
**Issue:** Resend emails not sending
**Fix:** Check API key, rate limits, and email templates
```bash
# Test Resend API
curl -X POST 'https://api.resend.com/emails' \
  -H 'Authorization: Bearer $RESEND_API_KEY' \
  -H 'Content-Type: application/json'
```

### Hook Directory Creation
**Issue:** Scripts creating unwanted directories
**Fix:** Check and fix automation scripts like update-event-stream.py

## Quick Fixes Reference

```bash
# Regenerate all indexes
./scripts/generate-indexes.sh

# Check file organization
./scripts/file-organization-scanner.sh

# Fix file locations
./scripts/auto-file-mover.sh

# Clear build cache
rm -rf node_modules/.vite

# Reset local database
supabase db reset

# Run all quality checks
npm run check:all
```

## Emergency Contacts

- **Supabase Status:** https://status.supabase.com
- **GitHub Issues:** Project repository issues
- **Team Slack:** #skiin-dev channel

---
*Last updated: 2025-08-25 | Add new issues and solutions as discovered*