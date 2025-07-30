# Landing Page Redesign Implementation Plan

VERSION: 1.0  
CREATED: 2025-07-29  
PURPOSE: Detailed implementation plan for landing page redesign

## Overview

This plan addresses both copy alignment requirements and design improvements based on user feedback. It supersedes the previous copy alignment plan with comprehensive redesign tasks.

## Implementation Phases

### Phase 1: Critical Removals (2 hours)

**Priority: IMMEDIATE**

1. **Remove Silent Triad Section**
   - Delete section from Home2.tsx (lines 359-422)
   - Remove related translations
   - Update section ordering

2. **Remove MVCP Preview**
   - Comment out MVCPPreview import and usage
   - Prepare to move to GP page later

3. **Remove Hero Stat Cards**
   - Delete floating card overlays (lines 268-281)
   - Keep only product badge overlay

4. **Fix Swiss Precision Claims**
   - Search and replace all "Swiss Precision" text
   - Update to focus on Myant technology

### Phase 2: Hero Redesign (3 hours)

**Priority: HIGH**

1. **Update Product Overlay Image**
   ```tsx
   // Replace line 256
   src="/assets/images/woman-wear-skiin.png"
   alt="Woman wearing SKIIN heart monitoring band"
   ```

2. **Simplify Hero Layout**
   - Remove complexity from dual-split
   - Focus on clear messaging hierarchy
   - Ensure mobile-first approach

3. **Update Hero Copy**
   - Implement v7.2 copy specification
   - Add emotional subheadline
   - Separate CTAs properly

### Phase 3: Video Section Transformation (4 hours)

**Priority: HIGH**

1. **Create FullScreenVideo Component**
   ```tsx
   interface FullScreenVideoProps {
     videoSrc: string;
     thumbnailSrc: string;
     title?: string;
     autoplay?: boolean;
   }
   ```

2. **Implement Video Separators**
   - After Statistics section
   - After Product Benefits
   - Use as natural content breaks

3. **Add Intersection Observer**
   - Trigger video load on scroll
   - Progressive enhancement

### Phase 4: Product Section Enhancement (3 hours)

**Priority: HIGH**

1. **Shorten Copy Implementation**
   - Primary: Title + one-line description
   - Secondary: Expandable on hover/click
   - Mobile: Accordion pattern

2. **Add Interactive States**
   ```tsx
   // Use shadcn Accordion or custom hover cards
   <Accordion type="single" collapsible>
     {benefits.map((benefit) => (
       <AccordionItem key={benefit.id}>
         <AccordionTrigger>{benefit.title}</AccordionTrigger>
         <AccordionContent>{benefit.details}</AccordionContent>
       </AccordionItem>
     ))}
   </Accordion>
   ```

3. **Implement Micro-interactions**
   - Smooth hover transitions
   - Icon animations
   - Progressive disclosure

### Phase 5: Layout Improvements (4 hours)

**Priority: HIGH**

1. **Add Section Dividers**
   ```tsx
   // Create SectionDivider component
   const SectionDivider = ({ type = 'wave' }) => {
     // Implement subtle visual separators
   }
   ```

2. **Full-Screen Comfort Section**
   - Implement parallax scrolling
   - Text reveal on scroll
   - Full viewport height

3. **Update Simple Setup Image**
   - Use wear-skiin-man-band-insert-pod.png
   - Proper aspect ratio
   - Mobile optimization

### Phase 6: Content Migration (2 hours)

**Priority: MEDIUM**

1. **Move MVCP to GP Page**
   - Create section in GeneralPractitioners.tsx
   - Migrate MVCPPreview component
   - Update navigation

2. **Add Missing Sections**
   - Care360 Vision
   - Know Your Heart Risk
   - Per v7.2 specification

### Phase 7: Polish & Testing (3 hours)

**Priority: MEDIUM**

1. **Performance Optimization**
   - Image lazy loading
   - Video progressive loading
   - Animation performance

2. **Accessibility Audit**
   - ARIA labels
   - Keyboard navigation
   - Screen reader testing

3. **Responsive Testing**
   - All breakpoints
   - Device testing
   - Cross-browser validation

## Component Specifications

### FullScreenVideo Component

```tsx
// New component structure
<FullScreenVideo
  videoSrc="/assets/videos/cardiac-assessment.mp4"
  thumbnailSrc="/assets/images/video-thumbnail.jpg"
  title="Understanding Cardiac Assessment"
  height="100vh"
  parallax={true}
/>
```

### Enhanced Product Card

```tsx
// Interactive benefit card
<ProductBenefitCard
  icon={<Heart />}
  title="Continuous Monitoring"
  shortDesc="24/7 heart rhythm tracking"
  fullDesc="Advanced algorithms detect irregularities..."
  interactive={true}
/>
```

### Section Divider Patterns

```tsx
// Divider variations
<SectionDivider type="wave" color="subtle" />
<SectionDivider type="angle" direction="down" />
<SectionDivider type="gradient" opacity={0.1} />
```

## Visual Design Guidelines

### Spacing System
- Section padding: 80px (desktop), 60px (tablet), 40px (mobile)
- Content gaps: 48px between major elements
- Card spacing: 24px grid gap

### Color Usage
- Remove light blue "heavenly" tones
- Use medical-blue (#1E3A5F) as primary
- Teal (#00796B) as secondary
- Neutral grays for text

### Typography
- Headlines: Bold, high contrast
- Body: Regular weight, optimal line-height
- CTAs: Medium weight, clear hierarchy

## Success Metrics

1. **Copy Compliance**
   - 100% match with v7.2 specification
   - All sections in correct order
   - No unauthorized content

2. **Performance**
   - LCP < 2.5s
   - CLS < 0.1
   - FID < 100ms

3. **Accessibility**
   - WCAG AA compliance
   - Keyboard navigable
   - Screen reader friendly

4. **User Experience**
   - Clear visual hierarchy
   - Smooth interactions
   - Mobile-optimized

## Risk Mitigation

1. **Copy Accuracy**
   - Double-check against specification
   - Test all translations
   - Validate with stakeholders

2. **Performance Impact**
   - Monitor metrics during development
   - Optimize assets before deployment
   - Use progressive enhancement

3. **Browser Compatibility**
   - Test in all major browsers
   - Provide fallbacks
   - Document known issues

## Timeline

- **Day 1:** Phases 1-2 (Critical removals, Hero redesign)
- **Day 2:** Phases 3-4 (Videos, Product section)
- **Day 3:** Phases 5-6 (Layout, Content migration)
- **Day 4:** Phase 7 (Polish, Testing, Documentation)

Total estimated time: 21 hours

## Dependencies

1. **Assets Required:**
   - woman-wear-skiin.png (available)
   - wear-skiin-man-band-insert-pod.png (available)
   - Video files (existing)
   - New divider graphics (to create)

2. **Component Libraries:**
   - shadcn/ui (installed)
   - Framer Motion (for animations)
   - Intersection Observer polyfill

3. **Tools:**
   - Puppeteer (for testing)
   - Lighthouse (for performance)
   - axe-core (for accessibility)

## Next Steps

1. Get approval on this plan
2. Create feature branch
3. Begin Phase 1 implementation
4. Regular progress updates
5. Stakeholder review at Phase 4