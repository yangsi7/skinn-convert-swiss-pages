# Landing Page Redesign Research & Analysis

VERSION: 1.0  
CREATED: 2025-07-29  
PURPOSE: Comprehensive research for landing page redesign based on user feedback

## Executive Summary

This document analyzes the current landing page implementation against user requirements and best practices. Key findings:

1. **Major Issues Identified:**
   - Silent Triad section present (must be removed)
   - Videos are side-by-side instead of full-screen separators
   - Hero has stat cards that should be removed
   - Product section copy is too verbose
   - MVCP section exists on homepage (should move to GP page)
   - "Swiss Precision" claim used incorrectly (product is by Myant)

2. **Components to Update:**
   - Hero section (remove stat cards, update product image)
   - Video sections (full-screen separators)
   - Product section (shorten copy, add interactions)
   - Comfort section (full-screen image)
   - Simple Setup section (use correct image)

## Detailed Analysis by Section

### 1. Hero Section

**Current Issues:**
- Floating stat card showing "70% Silent Arrhythmias Undetected" (line 270-280)
- Using wrong product image overlay
- Complex dual-split layout may not follow best practices

**Required Changes:**
- Remove all floating stat cards
- Replace product overlay with `woman-wear-skiin.png`
- Simplify layout for better visual hierarchy
- Keep dual-split but optimize for clarity

**Best Practices:**
- Clear visual hierarchy
- Single primary CTA focus
- Immediate value proposition
- Mobile-first responsive design

### 2. Video Sections

**Current Implementation:**
- VideoSection component renders videos side-by-side
- Located after Statistics section (line 357)

**Required Changes:**
- Convert to full-screen video separators
- Use as content dividers between related sections
- Pattern: Content 1 → Video 1 → Content 2 → Video 2

**Best Practices:**
- Videos should enhance narrative flow
- Use progressive loading
- Provide fallback images
- Consider autoplay on scroll (muted)

### 3. Silent Triad Section

**Current Implementation:**
- Full section from lines 359-422
- Shows "The Silent Triad: Three Hidden Threats to Your Heart"

**Required Action:**
- **REMOVE ENTIRELY** - not in copy specification
- This content may belong on a different page

### 4. Product Section (Features)

**Current Issues:**
- Called "Features Section" (line 467) but maps to Product benefits
- Copy appears to be generic, not from v7.2 spec
- May be too verbose for 8 benefits

**Required Changes:**
- Map to ProductSection component benefits
- Implement hover states or expandable cards for details
- Layer information to avoid clutter
- Use micro-interactions for engagement

### 5. Technology Section

**Current Issues:**
- Contains "Swiss Precision Technology" claim (line 498)
- This is incorrect - SKIIN is made by Myant, not Swiss

**Required Changes:**
- Remove all "Swiss Precision" references
- Focus on Myant's innovation
- Update copy to reflect actual manufacturing

### 6. Comfort Showcase

**Required Changes:**
- Make image span full screen or two rows
- Consider progressive reveal on scroll
- "Soft as Your Second Skin" should be prominent

### 7. MVCP Section

**Current Implementation:**
- MVCPPreview component on homepage

**Required Action:**
- Move entire section to General Practitioners page
- Remove from homepage entirely

### 8. Missing Visual Assets Analysis

**Available Assets:**
- `/public/assets/images/woman-wear-skiin.png` - For hero overlay ✓
- `/public/assets/images/wear-skiin-man-band-insert-pod.png` - For Simple Setup ✓
- Multiple process and benefit images available

**Missing/Needed:**
- Full-screen comfort showcase image
- Updated video thumbnails
- Divider/separator graphics

## Component Evaluation

### Current Component Usage

1. **Hero Section**
   - Uses custom implementation
   - Should consider shadcn Hero component patterns

2. **Cards**
   - Using shadcn Card correctly
   - Good hover states and transitions

3. **Buttons**
   - Proper shadcn Button usage
   - Good size and variant choices

### Recommended Component Updates

1. **Hero:**
   - Simplify to shadcn Hero pattern
   - Remove custom floating elements
   - Use standard image overlay patterns

2. **Video Separators:**
   - Create new FullScreenVideo component
   - Use Intersection Observer for scroll triggers
   - Implement lazy loading

3. **Product Benefits:**
   - Use shadcn Accordion or Tabs for info layers
   - Add hover state expansions
   - Implement smooth micro-interactions

4. **Comfort Section:**
   - Use shadcn AspectRatio for image
   - Implement parallax scrolling
   - Add text reveal animations

## Layout Style Analysis

**Principles to Apply:**
1. **Breathing Room:** Add subtle dividers between sections
2. **Visual Hierarchy:** Clear content separation
3. **Progressive Disclosure:** Reveal content as user scrolls
4. **Consistent Spacing:** Use 8pt grid system throughout

**Recommended Dividers:**
- Subtle gradient transitions
- Geometric shapes (waves, angles)
- Full-width images as breaks
- Video content as natural separators

## Updated Task List

### Phase 1: Remove Non-Compliant Content (IMMEDIATE)
1. Remove Silent Triad section entirely
2. Remove MVCP Preview from homepage
3. Remove floating stat cards from hero
4. Remove "Swiss Precision" claims

### Phase 2: Update Existing Components (HIGH)
1. Replace hero product image with woman-wear-skiin.png
2. Convert videos to full-screen separators
3. Shorten Product section copy
4. Update Simple Setup image

### Phase 3: Implement New Patterns (HIGH)
1. Add subtle section dividers
2. Implement full-screen Comfort showcase
3. Add hover states to Product benefits
4. Create progressive content reveals

### Phase 4: Polish & Optimize (MEDIUM)
1. Add micro-interactions
2. Implement lazy loading
3. Optimize image sizes
4. Test all responsive breakpoints

## Performance Considerations

1. **Image Optimization:**
   - Convert to WebP format
   - Implement responsive images
   - Use lazy loading for below-fold

2. **Video Loading:**
   - Progressive enhancement
   - Thumbnail placeholders
   - Intersection Observer triggers

3. **Animation Performance:**
   - CSS transforms only
   - GPU acceleration
   - Reduce motion preferences

## Accessibility Improvements

1. **Content Structure:**
   - Clear heading hierarchy
   - Proper ARIA labels
   - Keyboard navigation support

2. **Visual Design:**
   - Maintain contrast ratios
   - Clear focus indicators
   - Alt text for all images

3. **Interactive Elements:**
   - Clear hover/focus states
   - Adequate touch targets
   - Screen reader support

## Next Steps

1. Create updated component specifications
2. Build new FullScreenVideo component
3. Refactor Hero section
4. Implement content layering for Product section
5. Test across all breakpoints
6. Validate against copy specification

## References

- Copy Specification: `/docs/implementation/skiin-ch-copy 29072025.md`
- Current Implementation: `/src/pages/Home2.tsx`
- Visual Assets: `/public/assets/images/`
- Component Library: shadcn/ui