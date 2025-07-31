# Component Mapping Analysis - New Landing Page Design

VERSION: 1.0  
CREATED: 2025-07-30  
STATUS: Active  
AUTHOR: Claude Code  

## Overview

This document maps the 15 design mockups to specific components and implementation requirements for the new landing page design.

## Mockup Analysis

### Mockup 1-2: Hero Section
**Component:** Enhanced Hero  
**Key Features:**
- Full-screen Mother-daughter-HQ.jpg background
- Benefit-led headline messaging
- Single prominent CTA
- Minimal text overlay with gradient

**Implementation Notes:**
- Use CSS background-attachment: fixed for parallax
- Apply gradient overlay for text readability
- Mobile: Stack content vertically

### Mockup 3: Color Palette
**Component:** Design System Update  
**Colors Mapped:**
```
Primary Blue: #5298F2 → --lp-primary-blue
Dark Blue: #004C96 → --lp-dark-blue  
Charcoal: #475259 → --lp-charcoal
Black: #0D0D0D → --lp-black
Purple: #5549A6 → --lp-purple
Light Purple: #BCA2F2 → --lp-purple-light
Off White: #F2F2F2 → --lp-white
Cream: #EEE8E1 → --lp-cream
```

### Mockup 4: Component Layouts
**Pattern:** Icon → Headline → Text  
**Components Affected:**
- ProductBenefit cards
- Insurance steps
- Process timeline items

**Implementation:**
```tsx
<div className="component-card">
  <Icon className="mb-4" />
  <h3 className="text-xl font-semibold mb-2">Headline</h3>
  <p className="text-base text-muted">Description text</p>
</div>
```

### Mockup 5: Insurance Coverage Flow
**Component:** InsuranceCoverageFlow  
**Features:**
- 4-step process visualization
- Interactive info panels
- "Learn more" expandable sections
- Progress indicators

**Structure:**
1. Check eligibility
2. Submit documentation  
3. Get approval
4. Start monitoring

### Mockup 6: Comfort Section
**Component:** ComfortSection  
**Layout:**
- Split-screen design
- Left: "Comfort meets clinical grade" messaging
- Right: Product comfort imagery
- Emphasis on skin-friendly materials

### Mockup 7: Testimonials
**Component:** TestimonialsV2  
**Variants:**
1. Full-width divider with background image
2. Carousel for multiple testimonials
3. Quote marks and attribution styling

### Mockup 8: CTA Design
**Component:** Button System Update  
**States:**
```css
/* Default */
background: #5298F2;
color: white;

/* Hover */
transform: scale(1.05);
box-shadow: 0 4px 12px rgba(82, 152, 242, 0.3);

/* Active */
transform: scale(0.98);

/* Loading */
opacity: 0.7;
cursor: wait;
```

### Mockup 9: Clinical Evidence
**Component:** ClinicalEvidenceViz  
**Features:**
- Interactive data points
- Animated number counters
- Source citations
- Hover tooltips

### Mockup 10: Comparison Section
**Component:** ComparisonSection  
**Design:**
- Purple background (#5549A6)
- Feature comparison grid
- SKIIN vs traditional monitoring
- Check/cross visual indicators

### Mockup 11: Timeline Process
**Component:** TimelineProcess  
**Visualization:**
- Blue gradient background
- Step-by-step progression
- Connected timeline dots
- Mobile: Horizontal scroll

### Mockups 12-15: Additional Elements
**Various Updates:**
- Section dividers with wave patterns
- Image optimization requirements
- Mobile-specific layouts
- Micro-interaction details

## Component Priority Matrix

| Component | Priority | Complexity | Dependencies |
|-----------|----------|------------|--------------|
| Design System | HIGH | LOW | None |
| Hero Update | HIGH | MEDIUM | Design System |
| InsuranceCoverageFlow | HIGH | HIGH | Translations |
| ComfortSection | MEDIUM | LOW | Images |
| TestimonialsV2 | MEDIUM | MEDIUM | Content |
| ClinicalEvidenceViz | HIGH | HIGH | Data |
| ComparisonSection | MEDIUM | MEDIUM | Content |
| TimelineProcess | MEDIUM | HIGH | Design System |

## Mobile Considerations

### Breakpoint Strategy
- 375px: Single column, stacked content
- 768px: Some side-by-side elements
- 1024px: Full desktop layout
- 1440px+: Maximum width containers

### Touch Optimizations
- Minimum 44x44px touch targets
- Swipeable carousels
- Expandable accordions for complex content
- Horizontal scroll for timeline on mobile

## Performance Requirements

### Image Optimization
- Convert all images to WebP
- Implement responsive image sizes
- Use lazy loading for below-fold images
- Add blur-up placeholders

### Bundle Optimization
- Code split new components
- Tree shake unused utilities
- Minimize CSS with PurgeCSS
- Implement dynamic imports

## Accessibility Checklist

- [ ] All interactive elements have focus states
- [ ] Color contrast meets WCAG AA (4.5:1)
- [ ] Images have descriptive alt text
- [ ] Animations respect prefers-reduced-motion
- [ ] Keyboard navigation works throughout
- [ ] Screen reader announces all content properly
- [ ] Form inputs have proper labels
- [ ] Error states are clearly communicated

## Translation Requirements

All new components need translations for:
- English (en)
- German (de) 
- French (fr)
- Italian (it)

Key translation areas:
- Insurance flow steps
- Comfort messaging
- Comparison features
- Timeline descriptions
- CTA buttons

## Testing Strategy

### Visual Testing
- Screenshot comparisons with mockups
- Cross-browser rendering checks
- Responsive layout validation
- Animation performance testing

### Functional Testing
- Interactive element functionality
- Form submissions
- Navigation flows
- Data loading states

### Performance Testing
- Lighthouse audits
- Core Web Vitals monitoring
- Bundle size analysis
- Network waterfall optimization

## Implementation Order

1. **Foundation** - Design system and color palette
2. **Structure** - Hero and basic layout updates
3. **Core Features** - Insurance flow, clinical evidence
4. **Enhancement** - Comfort section, testimonials
5. **Comparison** - Purple comparison section
6. **Process** - Timeline visualization
7. **Polish** - Animations and micro-interactions
8. **Optimization** - Performance and accessibility

---

This mapping provides clear guidance for implementing each mockup requirement while maintaining code quality and user experience standards.