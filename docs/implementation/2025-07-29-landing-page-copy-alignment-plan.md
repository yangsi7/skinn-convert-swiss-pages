# Landing Page Copy Alignment Implementation Plan
VERSION: 1.0
CREATED: 2025-07-29
PURPOSE: Plan to align landing page with official copy specification

## Overview

This plan outlines the steps to align our landing page (Home2.tsx) with the official copy specification document `/docs/implementation/skiin-ch-copy 29072025.md`. The goal is to ensure 100% compliance with the approved copy while maintaining the existing design system and component architecture.

## Copy Specification File

**AUTHORITATIVE DOCUMENT**: `/docs/implementation/skiin-ch-copy 29072025.md`

This is the single source of truth for all landing page copy. All changes must reference this document.

## Implementation Phases

### Phase 1: Content Removal (Priority: IMMEDIATE)

#### 1.1 Remove Silent Triad from Homepage
- **File**: `src/pages/Home2.tsx`
- **Action**: Remove the entire Silent Triad section (lines ~359-422)
- **Reason**: Silent Triad is only for Solutions pages, not homepage
- **Replace with**: Keep only the Problem/Solution narrative without Silent Triad

#### 1.2 Remove Non-Spec Sections
- **Remove**: Video Education Section (`<VideoSection />`)
- **Remove**: Generic Features Section (lines ~467-496)
- **Remove**: MVCP Preview (`<MVCPPreview />`)
- **Remove**: Technology Section with doctor images (lines ~498-555)

### Phase 2: Copy Updates (Priority: HIGH)

#### 2.1 Hero Section Updates
Update hero variants to match specification exactly:

**Variant A (Default)**:
```typescript
{
  badge: "MDR Class IIa Certified • Swissmedic Registered",
  headline: "Live Longer. Screen Smarter. From Home.",
  subheadline: "Detect silent heart issues before they steal precious moments",
  emotionalSubheadline: "Protect yourself and those who love you.",
  ctaPrimary: "Start Your Free Heart Check",
  ctaSecondary: "Questions? Read our FAQ →"
}
```

**Variant B**:
```typescript
{
  badge: "MDR Class IIa Certified • Swissmedic Registered",
  headline: "Heart Disease Is the #1 Killer — When Was Your Last Heart Check?",
  subheadline: "70% of arrhythmias show no symptoms. Left undetected, they can cause strokes or heart failure. With SKIIN, you can screen your heart from home — comfortably, easily and safely.",
  emotionalSubheadline: "Protect yourself and those who love you.",
  ctaPrimary: "Start Your Free Heart Check",
  ctaSecondary: "Questions? Read our FAQ →"
}
```

**Variant C**:
```typescript
{
  badge: "Trusted by Swiss Cardiologists",
  headline: "Your Heart. Your Family. Your Control.",
  subheadline: "Protect yourself and those who love you. Detect silent heart issues before they steal precious moments.",
  emotionalSubheadline: "Protect yourself and those who love you.",
  ctaPrimary: "Start Your Free Heart Check",
  ctaSecondary: "Questions? Read our FAQ →"
}
```

#### 2.2 Problem & Solution Update
- Update to remove any reference to Silent Triad
- Use exact copy from specification section 1.3

#### 2.3 Product Section Verification
- Verify all 8 benefits match specification exactly
- Update any discrepancies

### Phase 3: Add Missing Sections (Priority: HIGH)

#### 3.1 Create Care360 Vision Component
```typescript
// src/components/home/Care360Vision.tsx
export function Care360Vision() {
  // Implementation per spec section 1.9
}
```

Features to include:
- Virtual cardiometabolic assessments
- ABPM (early 2026)
- Ongoing arrhythmia monitoring
- Sleep apnoea screening (late 2026)
- Personalised coaching
- Virtual wellness programmes

#### 3.2 Create Know Your Heart Risk Component
```typescript
// src/components/home/KnowYourHeartRisk.tsx
export function KnowYourHeartRisk() {
  // Implementation per spec section 1.10
}
```

Three cards:
1. Silent Atrial Fibrillation
2. Cardiac Arrhythmias
3. Heart Disease Prevention

#### 3.3 Add AI-Measured Section
Either create standalone or integrate into Product Section

### Phase 4: Section Reordering

Ensure sections appear in this exact order:
1. Hero
2. Statistics
3. Problem & Solution
4. Product (8 benefits)
5. Process (5 steps)
6. Numbers
7. Clinically Proven
8. AI-Measured (if standalone)
9. Care360 Vision
10. Know Your Heart Risk
11. Insurance Coverage
12. Pricing
13. Testimonials
14. Medical Advisors
15. CEO Quote
16. Final CTA

## Translation Updates

All changes must be reflected in:
- `/src/translations/home/en.ts`
- `/src/translations/home/de.ts`
- `/src/translations/home/fr.ts`
- `/src/translations/it/home.ts`

## Testing Requirements

1. Visual regression testing
2. Copy accuracy verification
3. Responsive behavior
4. A/B variant functionality
5. Multi-language support

## Success Criteria

- [ ] All non-spec content removed
- [ ] All copy matches specification exactly
- [ ] All missing sections added
- [ ] Correct section ordering
- [ ] All translations updated
- [ ] Tests passing

## Timeline

- Phase 1: 2 hours
- Phase 2: 3 hours
- Phase 3: 3 hours
- Phase 4: 2 hours
- Testing: 2 hours

**Total: 12 hours**

## Risk Mitigation

1. Create backup of current implementation
2. Test each phase independently
3. Maintain git history for rollback
4. Document all changes in event-stream.md

## Next Steps

1. Get approval for this plan
2. Create detailed tasks in todo.md
3. Begin Phase 1 implementation
4. Update documentation as we progress