# Phase 6 - Landing Page Improvement Plan
VERSION: 1.0
CREATED: 2025-07-26
STATUS: Planning
PROCESS-COMPLIANCE: CLAUDE_PROCESS.md v5.0

## Executive Summary

This document outlines Phase 6 of the SKIIN Switzerland marketing website project, focusing on landing page improvements based on the comprehensive improvement plan provided. This phase follows the completion of Phase D (85% complete) and runs in parallel with Phase E (Visual Testing & Language Integration).

## Current State Analysis

### Critical Issues to Address First
1. **Homepage Blank Page Bug** (P0) - All language homepages show blank
2. **Route Discrepancies** - German/French routes don't match v7.2 spec
3. **Italian Translation** - Incomplete, showing English content
4. **Performance Impact** - 20+ unoptimized images affecting load times

### Completed Assets
- 8 new v7.2 components implemented
- 20+ visual assets integrated (80%)
- Modern theme now default
- Core messaging and CTAs aligned with v7.2

### Available New Assets
- Mother-daughter lifestyle photo
- Father-daughter lifestyle photo  
- Man inserting pod product photo
- Woman wearing band product photo

## Improvement Paths (Ranked by Impact & Feasibility)

### Path 1: Lifestyle + Product Overlay (RECOMMENDED)
**Score: 9.5/10**
- **Hero Design**: Full-bleed lifestyle image with product overlay badge
- **Variant A1**: Mother-daughter background + man inserting pod badge
- **Variant A2**: Father-daughter background + woman wearing band badge
- **Implementation**: Modify HeroSection.tsx to support background image and overlay
- **Effort**: Medium (4-6 hours)
- **Impact**: Highest emotional connection + product clarity

### Path 2: Split Hero & Product Section Upgrade
**Score: 8/10**
- **Hero Design**: Split layout with copy left, blended image right
- **Implementation**: Reuse existing split structure
- **Effort**: Low (2-4 hours)
- **Impact**: Good balance, familiar layout

### Path 3: Stacked Hero & Minimal Change
**Score: 7/10**
- **Hero Design**: Lifestyle background with product strip below
- **Implementation**: CSS modifications only
- **Effort**: Lowest (1-2 hours)
- **Impact**: Quick win, less dynamic

### Path 4: Carousel Hero (Not Recommended)
**Score: 5/10**
- **Complexity**: High development effort
- **Performance**: Potential conversion loss
- **Accessibility**: Challenges for screen readers

### Path 5: Minimal Update
**Score: 4/10**
- **Quick fix but misses opportunity for impact**

## Implementation Tasks (Prioritized)

### Phase 6.1: Critical Bug Fixes (IMMEDIATE)
```
- [ ] Fix homepage blank page rendering [P0-001]
  - [ ] Debug translation key mismatches
  - [ ] Ensure hero variant structures exist
  - [ ] Test all language homepages
- [ ] Resolve route discrepancies [P0-002]
  - [ ] Align with v7.2 specification
  - [ ] Update navigation mappings
  - [ ] Test all 98 routes
```

### Phase 6.2: Hero Redesign (Path 1)
```
- [ ] Select hero images [P1-001]
  - [ ] Create A/B test variants (A1, A2)
  - [ ] Prepare image assets (optimize, crop)
  - [ ] Design overlay badge placement
- [ ] Implement hero component updates [P1-002]
  - [ ] Modify HeroSection.tsx for background image
  - [ ] Add semi-transparent overlay
  - [ ] Position product badge
  - [ ] Update translation keys
- [ ] A/B testing setup [P1-003]
  - [ ] Implement variant switching
  - [ ] Track conversion metrics
```

### Phase 6.3: Statistics & Evidence Update
```
- [ ] Create StatisticsCard component [P2-001]
  - [ ] 70% silent AF episodes
  - [ ] 20-30% AF-related strokes
  - [ ] 66% vs 9% detection rate
  - [ ] Add citation footnotes
- [ ] Remove redundant statistics [P2-002]
  - [ ] Delete repeated 70% cards
  - [ ] Clean up German text
```

### Phase 6.4: Product Section Enhancement
```
- [ ] Transform to 8-benefit list [P2-003]
  - [ ] Extended monitoring
  - [ ] Shortened wait times
  - [ ] Seamless referrals
  - [ ] Comfortable band
  - [ ] AI precision
  - [ ] Fast turnaround
  - [ ] Proven technology
  - [ ] Health Canada license
- [ ] Remove Silent Triad cards [P2-004]
```

### Phase 6.5: Trust & Social Proof
```
- [ ] Implement TestimonialsSlider [P2-005]
  - [ ] Lukas (Geneva)
  - [ ] Elena (Basel)
  - [ ] Janine (Zurich)
- [ ] Add Medical Advisors photos [P2-006]
  - [ ] Prof. Frank Ruschitzka
  - [ ] PD Dr. Mehdi Namdar
  - [ ] Dr. Mathias Wilhelm
  - [ ] Dr. Michiel Winter
- [ ] Insert CEO quote [P2-007]
```

### Phase 6.6: Process & Insurance Updates
```
- [ ] Update process flow copy [P3-001]
  - [ ] Highlight removability
  - [ ] AI + cardiologist review
  - [ ] 24-48 hour turnaround
- [ ] Split insurance/pricing sections [P3-002]
  - [ ] InsuranceSection component
  - [ ] PricingTable component
  - [ ] Add "no symptoms" note
```

### Phase 6.7: Content Cleanup
```
- [ ] Remove MVCP from homepage [P3-003]
- [ ] Consolidate educational videos [P3-004]
- [ ] Update final CTA section [P3-005]
```

### Phase 6.8: Performance & Testing
```
- [ ] Image optimization [P3-006]
  - [ ] Compress all images
  - [ ] Convert to WebP
  - [ ] Implement lazy loading
- [ ] Accessibility audit [P3-007]
  - [ ] WCAG AA compliance
  - [ ] Keyboard navigation
  - [ ] Screen reader testing
- [ ] Mobile responsiveness [P3-008]
  - [ ] Test 375px, 768px, 1024px
  - [ ] Fix layout issues
```

## Memory & Knowledge Graph Updates

```typescript
// Store improvement plan
await memory.store('landing-page-improvement-v6', {
  selectedPath: 'Path 1 - Lifestyle + Product Overlay',
  heroVariants: ['A1-mother-daughter', 'A2-father-daughter'],
  componentsToUpdate: ['HeroSection', 'StatisticsCard', 'ProductSection'],
  estimatedEffort: '20-30 hours',
  priority: 'HIGH'
});

// Create graph entities
await context7.create_entities([
  { id: 'phase:6', type: 'Phase', name: 'Landing Page Improvement' },
  { id: 'component:HeroSection-v6', type: 'Component', name: 'Enhanced Hero' },
  { id: 'asset:mother-daughter', type: 'Asset', name: 'Mother-Daughter Photo' }
]);

// Create relationships
await context7.create_relations([
  { from: 'phase:6', to: 'component:HeroSection-v6', type: 'implements' },
  { from: 'component:HeroSection-v6', to: 'asset:mother-daughter', type: 'uses' }
]);
```

## Success Metrics

1. **Performance**
   - LCP < 2.5s
   - CLS < 0.1
   - Bundle size < 700KB

2. **Conversion**
   - Hero engagement rate > 60%
   - CTA click-through > 5%
   - Form completion > 30%

3. **Quality**
   - WCAG AA compliance
   - All tests passing
   - 0 console errors

## Risk Mitigation

1. **Homepage Bug**: Fix before ANY other work
2. **Image Performance**: Optimize aggressively
3. **Mobile Experience**: Test early and often
4. **Translation Sync**: Ensure all languages updated

## Timeline

- **Week 1**: Bug fixes + Hero implementation (20h)
- **Week 2**: Component updates + Trust signals (20h)
- **Week 3**: Performance + Testing + Launch (15h)

Total: ~55 hours (7-8 days)

## Next Steps

1. Fix critical homepage rendering bug
2. Get stakeholder approval on hero concept
3. Begin Path 1 implementation
4. Set up A/B testing framework
5. Coordinate with Phase E language integration

---

This plan aligns with CLAUDE_PROCESS.md v5.0 requirements for research-first methodology, performance optimization, accessibility testing, and comprehensive documentation.