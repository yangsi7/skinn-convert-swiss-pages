# Hero Section Redesign Plan

**Date**: 2025-07-29  
**Project**: SKIIN Switzerland Marketing Website  
**Component**: Home2.tsx Hero Section  
**Author**: Claude Code

## Executive Summary

This document outlines the redesign plan for the hero section based on user requirements and modern best practices research. The plan addresses three key changes:
1. Update subheadline text from "Screen Smarter, Live Younger, Longer" to "Screen Smarter, Live Longer"
2. Add eligibility text near the CTA button
3. Implement modern visual hierarchy with subtle box containers

## Research Findings

### Modern Hero Section Best Practices (2024)

#### Visual Hierarchy Principles
- **Headlines**: Maximum 8 words, bold and eye-catching
- **Subheadlines**: Provide supporting context without overwhelming
- **Clear spacing**: Generous white space between elements for processing
- **Size relationships**: Clear hierarchy through type scaling

#### Headline/Subheadline Relationship
Based on analysis of successful SaaS sites (Column, Glide, Pitch):
- Headlines should be the dominant element (48-72px desktop)
- Subheadlines should be substantial but clearly secondary (24-32px desktop)
- **Key Finding**: When headline and subheadline are conceptually equal (like "Live Longer" and "Screen Smarter"), they should be closer in size to show their equal importance

#### CTA Microcopy Placement
Research shows "Take 5 minutes" type microcopy works best:
- **Above the button**: Sets expectations and reduces friction
- **Addresses time concerns**: Critical for busy professionals
- **Builds trust**: Transparency about time commitment

#### Visual Container Patterns
Modern 2024 trends emphasize:
- **Subtle containers**: Border colors only slightly darker than background
- **Shadow-based separation**: Eliminate borders, use shadows for depth
- **Grid-based layouts**: Bento box style organization
- **Breathing room**: White space as a design element

## Proposed Design Changes

### 1. Typography Hierarchy Update

```
Current State → Proposed State

Badge: 14px → 14px (no change)
Headline: 60px → 64px (4xl → 5xl on desktop)
Subheadline: 30px → 48px (3xl → 4xl on desktop) ⭐ Major change
Body text: 20px → 20px (no change)
CTA Button: 18px → 18px (no change)
Eligibility text: N/A → 14px (new addition)
```

**Rationale**: The subheadline "Screen Smarter, Live Longer" is conceptually equal to the headline, not subordinate. Increasing its size creates a powerful dual-message impact.

### 2. Layout & Spacing

```
Badge
↓ 24px
Headline: "Live Younger, Longer."
↓ 12px (reduced from 16px)
Subheadline: "Screen Smarter, Live Longer" (larger size)
↓ 32px
Body text (if using emotional variant)
↓ 16px
Eligibility text: "Take 5 minutes to check your eligibility"
↓ 12px
Primary CTA Button
↓ 24px
Secondary CTA Link
```

### 3. Visual Container Implementation

Add subtle box containers to create visual hierarchy:

```jsx
// Hero section with subtle background
<section className="bg-gradient-to-b from-background to-muted/5">

// Content container with subtle border and shadow
<div className="rounded-2xl border border-border/50 shadow-sm bg-background/50 backdrop-blur-sm p-8">
  {/* Hero content */}
</div>

// Trust bar with distinct background
<div className="bg-muted/30 backdrop-blur-sm border-t">
  {/* Trust indicators */}
</div>
```

### 4. Mobile Responsive Adjustments

```
Mobile (< 768px):
- Headline: 40px (3xl)
- Subheadline: 28px (2xl) 
- Maintain vertical stack
- Reduce container padding

Tablet (768px - 1024px):
- Headline: 56px (4xl)
- Subheadline: 36px (3xl)
- Begin dual-column layout
```

## Implementation Tasks

### Phase 1: Text Updates [30 minutes]
- [ ] Change subheadline from "Screen Smarter, Live Younger, Longer" to "Screen Smarter, Live Longer"
- [ ] Add eligibility text above CTA: "Take 5 minutes to check your eligibility"
- [ ] Update all language variants (en, de, fr, it)

### Phase 2: Typography Hierarchy [1 hour]
- [ ] Increase subheadline size to text-4xl (desktop) / text-2xl (mobile)
- [ ] Adjust spacing between elements per new layout
- [ ] Fine-tune line heights for optimal readability
- [ ] Test with all copy variants

### Phase 3: Visual Containers [1.5 hours]
- [ ] Add subtle gradient background to hero section
- [ ] Implement content container with border and shadow
- [ ] Enhance trust bar visual separation
- [ ] Add subtle dividers between major page sections
- [ ] Ensure theme compatibility (test all 4 themes)

### Phase 4: Polish & Animation [1 hour]
- [ ] Add subtle fade-in animations for text elements
- [ ] Implement hover states for interactive elements
- [ ] Enhance product badge with micro-animation
- [ ] Add loading optimizations

### Phase 5: Testing & Validation [1 hour]
- [ ] Test all responsive breakpoints
- [ ] Verify accessibility (contrast, screen readers)
- [ ] Cross-browser testing
- [ ] Performance impact assessment
- [ ] A/B test variant validation

## Success Metrics

1. **Visual Impact**: Clear hierarchy with equal emphasis on both key messages
2. **User Clarity**: Immediate understanding of time commitment (5 minutes)
3. **Professional Polish**: Subtle containers create sophisticated layout
4. **Performance**: No degradation in LCP or CLS scores
5. **Conversion**: Improved CTA click-through rate

## Risk Mitigation

1. **Theme Compatibility**: Test containers with all 4 theme variations
2. **Copy Length**: Ensure German/French translations fit within new sizing
3. **Mobile Experience**: Verify touch targets remain accessible
4. **Performance**: Monitor impact of gradient backgrounds

## Conclusion

This redesign elevates the hero section to modern 2024 standards while maintaining SKIIN's medical professionalism. The equal visual weight given to "Live Younger, Longer" and "Screen Smarter, Live Longer" creates a powerful dual message that resonates with the target audience's desire for both longevity and smart health management.

The addition of clear time expectations ("Take 5 minutes") and subtle visual containers improves both user experience and aesthetic appeal, following patterns seen in successful SaaS products like Linear, Stripe, and Vercel.