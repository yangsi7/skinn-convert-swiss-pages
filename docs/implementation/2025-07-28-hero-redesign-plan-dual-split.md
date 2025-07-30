# Hero Section Redesign Plan - Dual Split Layout

**Date**: 2025-07-28
**Status**: 🚧 IN PLANNING
**Objective**: Rework hero section with Father-daughter.png image using dual-split layout

## Executive Summary

Based on user feedback, the current hero section needs improvement. This plan evaluates multiple design approaches and recommends implementing a dual-split hero layout with the Father-daughter.png image, incorporating best practices from healthcare landing pages and modern design patterns.

## Copy Requirements (Provided by User)

```
Badge: Certified Medical Device • Swiss Quality
Headline: "Live Younger, Longer."
Subheadline: "Screen Smarter, from Home"
Emotional Subheadline: Detect silent heart issues before they steal precious moments. Protect yourself and those who love you.
CTA Primary: Start Your Free Heart Check — Opens the eligibility and coverage form.
Text Link: Questions? Read our FAQ → — Links to the FAQ page.
```

## Design Approaches Evaluation

### Path 1: Dual-Split Hero (RECOMMENDED)
**Score: 9.2/10**

**Pros:**
- Clear visual hierarchy with 50/50 split on desktop
- Image gets equal prominence with content
- Works well with portrait-oriented images like Father-daughter.png
- Proven conversion rates in healthcare sector
- Natural eye flow from left content to right visual
- Mobile-friendly (stacks naturally)

**Cons:**
- Less immersive than full-bleed
- Requires careful balance of content and image

**Implementation:**
- Left: All text content, badge, CTAs
- Right: Father-daughter image with product inset
- Mobile: Stack with image on top

### Path 2: Full-Bleed Background
**Score: 7.5/10**

**Pros:**
- Highly immersive and emotional
- Maximizes image impact
- Works well for lifestyle photography

**Cons:**
- Text readability challenges
- Requires heavy gradient overlays
- Father-daughter image may not work well as background
- Mobile cropping issues

### Path 3: Asymmetric Split (70/30)
**Score: 8.0/10**

**Pros:**
- More content space
- Modern, dynamic feel
- Good for content-heavy sections

**Cons:**
- Image may feel secondary
- Less balanced visually
- Harder to implement responsively

### Path 4: Hero Carousel
**Score: 6.0/10**

**Pros:**
- Multiple messages/images
- A/B testing built-in
- Dynamic engagement

**Cons:**
- Carousel blindness issue
- Performance overhead
- Complex implementation
- Lower conversion rates

### Path 5: Floating Card Over Image
**Score: 7.0/10**

**Pros:**
- Modern, layered design
- Good depth perception
- Flexible positioning

**Cons:**
- Can feel disconnected
- Shadow/contrast issues
- Complex responsive behavior

## Selected Approach: Dual-Split Hero

Based on evaluation, the dual-split layout offers the best balance of:
1. **Visual Impact**: Equal prominence for lifestyle image
2. **Conversion Focus**: Clear CTA placement and hierarchy
3. **Responsive Design**: Natural mobile stacking
4. **Healthcare Best Practices**: Trust-building through clear layout
5. **Implementation Simplicity**: Using shadcn/ui components

## Technical Implementation Plan

### 1. Layout Structure
```tsx
<section className="hero-section">
  <div className="container">
    <div className="grid grid-cols-1 lg:grid-cols-2">
      {/* Left: Content */}
      <div className="content-column">
        <Badge />
        <Headline />
        <Subheadline />
        <EmotionalText />
        <CTAButtons />
      </div>
      
      {/* Right: Visual */}
      <div className="visual-column">
        <LifestyleImage />
        <ProductInset />
      </div>
    </div>
  </div>
  
  {/* Trust Bar */}
  <TrustBar />
</section>
```

### 2. Component Usage (shadcn/ui)
- **Badge**: For certification display
- **Button**: Primary CTA with size="lg"
- **Link**: For FAQ text link
- **Card**: For product inset overlay
- **Separator**: Between hero and trust bar

### 3. Responsive Breakpoints
- **Mobile (< 768px)**: Stack vertically, image first
- **Tablet (768px - 1024px)**: Maintain split, adjust proportions
- **Desktop (> 1024px)**: Full 50/50 split

### 4. Visual Enhancements
- Subtle parallax on scroll for depth
- Hover animation on product inset
- Micro-interactions on CTAs
- Smooth transitions between breakpoints

### 5. Performance Optimizations
- Optimize Father-daughter.png to < 500KB
- Implement srcset for responsive images
- Use loading="eager" for above-fold
- Consider WebP with fallback

## Design Mockup Specification

### Desktop Layout (1440px)
```
|---------------------|---------------------|
|    Trust Badge      |                     |
|                     |    Father &         |
|  "Live Younger,     |    Daughter         |
|   Longer."          |    Image            |
|                     |                     |
|  "Screen Smarter,   |    [Product         |
|   from Home"        |     Badge]          |
|                     |                     |
|  Emotional text...  |                     |
|                     |                     |
|  [Start Check] FAQ→ |                     |
|---------------------|---------------------|
|        MDR Certified • Swiss Quality       |
|---------------------------------------------|
```

### Mobile Layout (375px)
```
|--------------------------|
|    Father & Daughter     |
|         Image            |
|      [Product Badge]     |
|--------------------------|
|     Trust Badge          |
|                          |
|   "Live Younger,         |
|    Longer."              |
|                          |
|   "Screen Smarter,       |
|    from Home"            |
|                          |
|   Emotional text...      |
|                          |
|   [Start Your Check]     |
|   Questions? FAQ →       |
|--------------------------|
|   MDR • Swiss Quality    |
|--------------------------|
```

## Success Metrics

1. **Engagement**: Time on page > 30s
2. **CTA Click Rate**: > 5% 
3. **Scroll Depth**: > 60% reach trust bar
4. **Mobile Performance**: LCP < 2.5s
5. **Accessibility**: WCAG AA compliant

## Implementation Steps

1. Create new dual-split component structure
2. Integrate Father-daughter.png with optimization
3. Add product badge overlay with positioning
4. Implement responsive behavior
5. Add trust bar below hero
6. Test across devices
7. Measure performance impact
8. Conduct A/B testing vs current version

## Risk Mitigation

- **Image Quality**: Ensure Father-daughter.png is high-res for retina displays
- **Text Contrast**: Test readability on all devices
- **Loading Performance**: Implement progressive enhancement
- **Browser Compatibility**: Test on major browsers

## Conclusion

The dual-split hero layout provides the optimal balance between emotional storytelling and conversion-focused design. It leverages the Father-daughter.png image effectively while maintaining clear visual hierarchy and excellent responsive behavior.