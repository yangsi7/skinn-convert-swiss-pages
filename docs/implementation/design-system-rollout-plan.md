# Design System Rollout Plan

## Executive Summary

This document outlines the systematic rollout of the progressive design system from Home2 across the entire SKIIN Switzerland website. The plan follows a phased approach to ensure consistency, maintainability, and optimal user experience.

## Current State Analysis

### Design System Status
- **Home2**: Fully implemented with progressive animations, modern components
- **Other Pages**: Using legacy design patterns, minimal visual assets
- **Navigation Issue**: Home2 link broken in HomePageTabs

### Available Assets
- Team photos (6 leadership images)
- MVCP screenshots (3 portal views)
- Process images (5 step illustrations)
- Educational videos (2 cardiac health videos)

## Implementation Strategy

### Phase 1: Foundation & Navigation Fix (Day 1)

#### 1.1 Fix Home2 Navigation
```typescript
// Update HomePageTabs to remove broken link
// OR add /home-2 route as alias to Home2
```

#### 1.2 Create Core Progressive Components
- `ProgressiveCard` - Reusable card with hover animations
- `ImageSection` - Standardized image display with lazy loading
- `TeamMember` - Profile card for team photos
- `FeatureGrid` - Modern grid for feature lists
- `StatCard` - Animated statistic display

#### 1.3 Extract Common Patterns
- Section spacing utilities
- Animation timing constants
- Gradient background presets
- Shadow and hover effect mixins

### Phase 2: High-Priority Page Updates (Days 2-3)

#### 2.1 Physicians Page
- Add `MvcpSection` showcase
- Integrate MVCP screenshots
- Add progressive scroll animations
- Update to use new card components

#### 2.2 Solutions Pages (14-Day Holter & Tritest)
- Replace hero sections with Home2 style
- Add `ProcessFlow` for patient journey
- Integrate product images
- Add `StatisticsShowcase` for clinical data

#### 2.3 About/Company Page
- Add `SwissHeritage` section
- Integrate `LeadershipShowcase`
- Add team photos with progressive reveal
- Include Myant acquisition story

### Phase 3: Content-Rich Pages (Days 4-5)

#### 3.1 Partner Pages
- Create partner-specific value propositions
- Use `FeatureGrid` for benefits
- Add trust indicators
- Include relevant MVCP features

#### 3.2 How It Works Section
- Expand `ProcessFlow` with detailed steps
- Add video integration
- Create interactive timeline
- Include visual process images

#### 3.3 About Section Completion
- Testimonials with `ScrollRevealStatistic`
- Medical board with team photos
- Compliance with trust badges
- Contact with enhanced form

### Phase 4: Polish & Optimization (Day 6)

#### 4.1 Performance
- Implement image lazy loading
- Add loading skeletons
- Optimize bundle size
- Preload critical assets

#### 4.2 Consistency Check
- Audit all animations
- Verify responsive behavior
- Check theme consistency
- Test language switching

#### 4.3 Accessibility
- Add ARIA labels
- Test keyboard navigation
- Verify color contrast
- Add skip links

## Component Migration Map

### From Legacy → To Progressive

| Legacy Component | Progressive Replacement | Key Changes |
|-----------------|------------------------|-------------|
| `HeroSection` | Home2 Hero Pattern | Gradients, badges, modern CTAs |
| `ComparisonSection` | `EnhancedComparison` | Animated table, hover effects |
| `HowItWorksSection` | `ProcessFlow` | Image integration, timeline |
| `TestimonialsSection` | Progressive testimonials | Scroll animations, modern cards |
| `CtaSection` | Enhanced CTA | Trust badges, animations |

## Visual Asset Allocation

### Team Photos
- **About/Company**: All team photos
- **About/Medical Board**: Medical advisors
- **Footer**: Leadership mini-profiles

### MVCP Screenshots
- **Physicians Page**: Primary showcase
- **Partners Pages**: Feature highlights
- **Solutions Pages**: Integration examples

### Process Images
- **How It Works**: Full journey
- **Home**: 5-step preview
- **Solutions**: Product-specific steps

## Design Tokens

### Spacing System
```css
--space-section: 5rem; /* py-20 */
--space-section-lg: 7.5rem; /* py-30 */
--space-card: 1.5rem; /* p-6 */
--space-element: 1rem; /* gap-4 */
```

### Animation Timings
```css
--duration-base: 1000ms;
--duration-fast: 300ms;
--duration-stagger: 150ms;
--easing-default: ease-out;
```

### Gradient Presets
```css
--gradient-hero: from-primary/8 to-medical-teal/5;
--gradient-swiss: from-swiss-red/5 to-swiss-silver/5;
--gradient-dark: from-slate-900 to-slate-800;
```

## Success Metrics

1. **Visual Consistency**: All pages use progressive design system
2. **Performance**: <3s load time, 60fps animations
3. **Engagement**: Increased time on site, lower bounce rate
4. **Accessibility**: WCAG 2.1 AA compliance
5. **Developer Experience**: Reusable component library

## Risk Mitigation

1. **Incremental Rollout**: Page-by-page updates
2. **Visual Testing**: Puppeteer snapshots for regression
3. **Feature Flags**: Toggle new designs if needed
4. **Rollback Plan**: Git tags at each phase completion

## Next Steps

1. Fix Home2 navigation immediately
2. Create foundation components
3. Begin with Physicians page update
4. Daily visual testing and documentation updates