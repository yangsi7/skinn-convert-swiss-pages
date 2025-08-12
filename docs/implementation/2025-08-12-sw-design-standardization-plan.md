# S&W Design System Standardization Plan

## Executive Summary

This document outlines the comprehensive plan to standardize the SKIIN Switzerland website to exclusively use the S&W Design system, replacing the current multi-theme approach with a single, consistent design language and introducing a copy variant selector for messaging flexibility.

## Current State Analysis

### What's Working Well
- **Homepage (/)**: Successfully implements S&W Design with:
  - Proper color palette (#5298F2, #5549A6, #004C96, #475259)
  - Scroll-triggered animations with staggered delays
  - Consistent spacing (py-20 mobile, md:py-30 desktop)
  - Interactive components with hover states
  - Clean, modern aesthetic

### Critical Issues Found

1. **Solutions Pages**
   - `/solutions/10-day-heart-screening`: Renders blank page (CRITICAL BUG)
   - `/solutions/3x-screening`: Unknown state (needs investigation)
   - Missing S&W Design implementation

2. **Partners Pages**
   - `/partners/general-practitioners`: Loads but uses old design
   - `/partners/cardiologists`: Inconsistent styling
   - `/partners/telemedicine`: Needs design update
   - `/partners/corporate`: Not aligned with S&W Design

3. **How It Works Pages**
   - Main page loads but lacks animations
   - Sub-pages need design alignment
   - Missing interactive elements

4. **About Pages**
   - Basic styling only
   - No scroll animations
   - Inconsistent with homepage quality

5. **Theme Switcher Issue**
   - Currently allows 6 different themes
   - Should be replaced with copy variant selector
   - Confuses design consistency

## Implementation Strategy

### Phase 1: Theme System Refactoring (Priority: CRITICAL)

**Goal**: Replace theme switcher with copy variant selector

**Tasks**:
1. Create `CopyVariantSelector` component
   - Messaging options: Benefit-led, Clinical, Urgency-based
   - Store selection in localStorage
   - Apply to hero and key CTAs

2. Modify `ThemeContext`
   - Lock theme to 'sw-design'
   - Add copy variant management
   - Remove theme switching logic

3. Update Navbar
   - Remove palette icon
   - Add copy variant selector
   - Position in same location

### Phase 2: Critical Bug Fixes (Priority: HIGH)

**Goal**: Ensure all pages render correctly

**Tasks**:
1. Debug Solutions page blank rendering
2. Check route configurations
3. Verify component imports
4. Test all page loads

### Phase 3: Design System Components (Priority: HIGH)

**Goal**: Create reusable S&W Design components

**Components to Create**:
```typescript
// ProgressiveSection.tsx
interface ProgressiveSectionProps {
  animation: 'fade' | 'slide' | 'scale' | 'blur';
  delay?: number;
  dark?: boolean;
  className?: string;
  children: React.ReactNode;
}

// ProgressiveCard.tsx
interface ProgressiveCardProps {
  icon?: React.ReactNode;
  title: string;
  description: string;
  hoverable?: boolean;
  delay?: number;
}

// StatCard.tsx
interface StatCardProps {
  value: number;
  unit: string;
  label: string;
  description?: string;
  animated?: boolean;
}

// FeatureGrid.tsx
interface FeatureGridProps {
  features: Feature[];
  columns?: 2 | 3 | 4;
  animated?: boolean;
}
```

### Phase 4: Page-by-Page Migration (Priority: MEDIUM)

**Conversion Template for Each Page**:

1. **Hero Section**
   ```tsx
   <section className="relative min-h-screen bg-gradient-to-br from-[#5298F2]/8 to-[#5549A6]/5">
     <!-- Content -->
   </section>
   ```

2. **Content Sections**
   ```tsx
   <ProgressiveSection className="py-20 md:py-30" animation="fadeUp">
     <div className="container mx-auto px-6">
       <!-- Content -->
     </div>
   </ProgressiveSection>
   ```

3. **Cards**
   ```tsx
   <ProgressiveCard
     icon={<Icon />}
     title="Title"
     description="Description"
     hoverable
     delay={index * 150}
   />
   ```

### Phase 5: Quality Assurance (Priority: MEDIUM)

**Testing Checklist**:
- [ ] All pages load without errors
- [ ] Animations trigger on scroll
- [ ] Hover states work correctly
- [ ] Mobile responsive (375px+)
- [ ] Tablet responsive (768px+)
- [ ] Desktop responsive (1024px+)
- [ ] Multilanguage routing works
- [ ] Copy variants apply correctly
- [ ] Performance metrics met (LCP < 2.5s)

## S&W Design Tokens Reference

### Colors
```css
--sw-primary-blue: #5298F2;
--sw-purple: #5549A6;
--sw-dark-blue: #004C96;
--sw-charcoal: #475259;
--sw-black: #0D0D0D;
--sw-light-purple: #BCA2F2;
--sw-white: #F2F2F2;
--sw-cream: #EEE8E1;
```

### Spacing
```css
--spacing-section-mobile: 5rem;  /* py-20 */
--spacing-section-desktop: 7.5rem; /* md:py-30 */
--spacing-container: 1.5rem; /* px-6 */
--spacing-card: 2rem; /* p-8 */
--spacing-gap: 2rem; /* gap-8 */
```

### Animation Timing
```css
--duration-fast: 300ms;
--duration-normal: 500ms;
--duration-slow: 700ms;
--duration-slower: 1000ms;
--delay-stagger: 150ms;
```

### Typography Scale
```css
--text-display: clamp(3rem, 5vw, 5rem);
--text-h1: clamp(2.5rem, 4vw, 4rem);
--text-h2: clamp(2rem, 3vw, 3rem);
--text-h3: clamp(1.5rem, 2vw, 2rem);
--text-body-lg: 1.125rem;
--text-body: 1rem;
```

## Copy Variant System

### Variant Options

1. **Benefit-Led** (Default)
   - Focus: Personal benefits and peace of mind
   - Tone: Warm, reassuring
   - Example: "Most heart issues are silent. A simple check can make all the difference."

2. **Clinical Authority**
   - Focus: Medical credibility and statistics
   - Tone: Professional, evidence-based
   - Example: "70% of arrhythmias show no symptoms. Clinical-grade monitoring detects what others miss."

3. **Urgency-Based**
   - Focus: Time sensitivity and prevention
   - Tone: Action-oriented, preventative
   - Example: "Every day matters for your heart. Start monitoring before symptoms appear."

### Implementation
```typescript
interface CopyVariant {
  id: 'benefit' | 'clinical' | 'urgency';
  name: string;
  hero: {
    badge: string;
    headline: string;
    subheadline: string;
    cta: string;
  };
  // ... other copy sections
}
```

## Priority Order

1. **Week 1 (Immediate)**
   - Fix Solutions page bug
   - Replace theme switcher
   - Create core components

2. **Week 2**
   - Migrate Solutions pages
   - Migrate Partners pages
   - Test thoroughly

3. **Week 3**
   - Migrate How It Works
   - Migrate About pages
   - Polish and optimize

4. **Week 4**
   - Documentation
   - Team training
   - Final QA

## Success Metrics

- All pages use S&W Design exclusively
- Theme switcher replaced with copy variants
- Page load time < 3s
- Lighthouse score > 90
- Zero console errors
- 100% mobile responsive
- WCAG AA compliant

## Risk Mitigation

1. **Blank Page Bug**: Debug immediately, may affect other pages
2. **Performance Impact**: Monitor bundle size, lazy load components
3. **Breaking Changes**: Test all routes after each migration
4. **Copy Confusion**: Clear labeling of variant options

## Conclusion

The S&W Design standardization will create a consistent, professional experience across the entire SKIIN Switzerland website. By replacing the theme switcher with copy variants, we maintain design consistency while allowing messaging flexibility for different audiences.