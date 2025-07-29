# CRITICAL Homepage Fix Plan - v7.2 Implementation

**Date**: 2025-07-25
**Priority**: P0 - CRITICAL
**Issue**: Wrong homepage is being used for v7.2 implementation

## Problem Summary

1. **Current State**: 
   - Route `/` → HomeV7 (wrong page without smartholter.netlify.app assets)
   - All v7.2 work was done on HomeV7
   
2. **Correct State Should Be**:
   - Route `/` → Home2 (smartholter.netlify.app page with visual assets)
   - Home2 contains the correct visual assets:
     - 6e47298b-0a4d-4e21-92ed-0b25c0e34c4c.png (Holter-EKG Technology)
     - 1e3b8979-f9b0-405d-9117-c8f3c4115930.png (Länger jünger leben hero)
     - 4ad65a99-4268-46c4-986f-d04c9ac055f4.png (50% more detection)

## Research Phase

### 1. Understand Home2 Structure
- [x] Hero section with "Länger jünger leben" messaging
- [x] Statistics section with 3 visual cards (70%, 30%, 50%)
- [ ] Video education section
- [ ] Clinical evidence section
- [ ] Features section
- [ ] Technology section with Holter-EKG image
- [ ] Process flow
- [ ] MVCP section
- [ ] Enhanced comparison
- [ ] Insurance coverage section
- [ ] Risk assessment section
- [ ] CTA section

### 2. Compare with v7.2 Requirements
- [ ] Evidence-based messaging (70% silent AF, 20-30% strokes, 66% vs 9% detection)
- [ ] Silent Triad narrative (ECG + ABPM + Sleep)
- [ ] 10-day screening (not 14-day)
- [ ] MVCP only on GP page (not homepage)
- [ ] Professional CTAs on partner pages only
- [ ] A/B testing for hero variants

## Implementation Plan

### Phase 1: Immediate Actions (1 hour)
1. [ ] Update routing to make Home2 the default homepage
2. [ ] Move HomeV7 to a different route (e.g., /home-v7-archive)
3. [ ] Test that Home2 loads at root URL
4. [ ] Document the routing change

### Phase 2: Analysis & Planning (2 hours)
1. [ ] Analyze Home2 component structure
2. [ ] Map v7.2 requirements to Home2 sections
3. [ ] Identify which sections need updates
4. [ ] Create detailed implementation checklist
5. [ ] Estimate effort for each section

### Phase 3: v7.2 Copy Integration (1-2 days)
1. [ ] Update hero section with v7.2 copy and A/B variants
2. [ ] Fix statistics section (70% → evidence-based claims)
3. [ ] Update 14-day → 10-day throughout
4. [ ] Remove/relocate MVCP section to GP page
5. [ ] Add Silent Triad narrative where appropriate
6. [ ] Update CTAs to v7.2 standards
7. [ ] Add missing v7.2 sections if needed

### Phase 4: Visual Validation (2-4 hours)
1. [ ] Use Puppeteer to capture all sections
2. [ ] Compare with smartholter.netlify.app
3. [ ] Verify all visual assets load correctly
4. [ ] Test responsive design
5. [ ] Validate theme compliance

### Phase 5: Quality Assurance (4 hours)
1. [ ] Test all interactive elements
2. [ ] Verify translations work
3. [ ] Performance testing
4. [ ] Accessibility audit
5. [ ] Final review against v7.2 spec

## Success Criteria

1. Home2 is the default homepage at `/`
2. All v7.2 copy requirements implemented
3. Visual assets from smartholter.netlify.app preserved
4. 10-day messaging throughout (no 14-day references)
5. MVCP only on GP page
6. A/B testing functional
7. Mobile responsive
8. Performance optimized

## Risk Mitigation

1. **Backup Current State**: Create git branch before changes
2. **Preserve HomeV7**: Archive it instead of deleting
3. **Test Incrementally**: Update section by section
4. **Visual Regression**: Screenshot before/after each change
5. **Rollback Plan**: Keep original Home2 code accessible

## Timeline

- Phase 1: Immediate (next 1 hour)
- Phase 2: Today (2 hours)
- Phase 3: Tomorrow (1-2 days)
- Phase 4: Day 3 (2-4 hours)
- Phase 5: Day 3-4 (4 hours)

**Total Estimate**: 3-4 days to complete properly

## Next Steps

1. STOP all work on HomeV7
2. Update routing immediately
3. Begin systematic analysis of Home2
4. Follow CLAUDE_PROCESS.md for implementation