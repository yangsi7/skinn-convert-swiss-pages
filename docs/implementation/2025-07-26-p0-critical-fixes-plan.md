# P0 Critical Fixes Implementation Plan
VERSION: 1.0
CREATED: 2025-07-26
STATUS: In Progress
PROCESS-COMPLIANCE: CLAUDE_PROCESS.md v5.0

## Executive Summary

This document outlines the step-by-step plan to fix three P0 critical blockers that are preventing the SKIIN Switzerland website from functioning. These must be fixed immediately before any other work can proceed.

## Critical Issues (P0)

1. **Homepage Blank Page Bug** - All homepages show blank due to missing Italian translations
2. **Route Discrepancies** - German/French routes don't match v7.2 specification
3. **Italian Translation Structure** - Incomplete and incorrectly structured

## Implementation Plan

### Phase 1: Fix Homepage Rendering (1 hour)

#### 1.1 Update useTranslation Hook
```typescript
// Add Italian imports to useTranslation.ts
import * as itHome from '/translations/it/home';
import * as itCommon from '/translations/it/common';
// ... other Italian imports

// Add Italian case to switch statements
case 'it':
  translations = {
    home: itHome.homeTranslations,
    common: itCommon.commonTranslations,
    // ... other modules
  };
  break;

// Add defensive coding
const safeTranslations = translations || {};
return (key: string) => safeTranslations[key] || {};
```

#### 1.2 Add Missing Hero Variants
- Add hero.variantA/B/C structure to German translations
- Add hero.variantA/B/C structure to French translations
- Ensure Italian has complete hero structure

### Phase 2: Fix Route Terminology (30 minutes)

#### 2.1 Update German Routes
```typescript
// Change in routes/index.tsx
// FROM: /de/loesungen/herzueberwachung
// TO: /de/loesungen/herzscreening

// FROM: /de/loesungen/14-tage-herzueberwachung  
// TO: /de/loesungen/10-tage-herzscreening
```

#### 2.2 Update French Routes
```typescript
// Verify and update if needed:
// FROM: /fr/solutions/depistage-cardiaque
// TO: /fr/solutions/bilan-cardiaque-10-jours
```

#### 2.3 Update Italian Routes
```typescript
// FROM: /it/soluzioni/monitoraggio-cardiaco
// TO: /it/soluzioni/screening-cardiaco-10-giorni
```

### Phase 3: Complete Italian Translations (1 hour)

#### 3.1 Standardize File Structure
Option A: Move Italian files to match other languages
- Move `/translations/it/home.ts` → `/translations/home/it.ts`
- Update all Italian translation files

Option B: Update import logic in useTranslation
- Keep current structure but fix imports

#### 3.2 Complete Translation Content
- Add all v7.2 hero variants
- Add all section translations
- Ensure parity with English version

## Testing Protocol

### 1. Local Testing (After each fix)
```bash
npm run dev
# Test each language homepage
# Verify no console errors
# Check all routes work
```

### 2. Puppeteer Verification
- Navigate to all language homepages
- Take screenshots
- Verify content renders
- Test language switching
- Test route navigation

### 3. Success Criteria
- [ ] All homepages render without errors
- [ ] All language content displays correctly
- [ ] Routes match v7.2 specification
- [ ] No TypeScript errors
- [ ] No console errors
- [ ] Language switching works
- [ ] Mobile responsive

## Risk Mitigation

1. **Backup Current State**: Create git branch before changes
2. **Test Incrementally**: Fix and test one issue at a time
3. **Rollback Plan**: Keep original files for quick revert
4. **Documentation**: Update all docs as we fix

## Timeline

- **Hour 1**: Fix homepage rendering + test
- **Hour 2**: Fix routes + complete Italian translations
- **Hour 3**: Full testing and verification

Total: 3 hours to restore full functionality

---

This plan follows CLAUDE_PROCESS.md v5.0 with emphasis on:
- Research-first methodology ✓
- Incremental testing ✓
- Documentation updates ✓
- Visual verification with Puppeteer ✓