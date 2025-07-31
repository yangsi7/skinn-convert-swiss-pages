# Planning Document - SKIIN Landing Page Design Implementation (LPD-2025)

## Current Priority: Landing Page Redesign per Mockups 🚨

### Executive Summary
User has provided 15 design mockups for new landing page (`/landing-2025`) with specific requirements:
1. Fix Hero section to match Image #1 (two-line headline layout)
2. Add components from Home2: fullscreen video, trusted by cardiologists, how SKIIN works, Swiss insurance
3. Update design system with new color palette
4. Ensure performance optimization for desktop and mobile

### Color Palette Update Required
- **Myant Classic colors**: #5298F2, #004C96, #475259, #0D0D0D
- **New soft neutrals**: #5549A6 (purple), #BCA2F2 (light purple), #F2F2F2 (off-white), #EEE8E1 (cream)

## PR Structure
**PR: Landing Page 2025 Design Implementation**
- Branch: `feature/landing-2025-redesign`
- Target: 4 commits total
- Estimated completion: 6 hours

## Gap Analysis

### Current State (LandingPageV2025.tsx)
1. **Hero Section**: Using HeroMinimal - doesn't match Image #1 mockup
   - Current: Single-line headline, centered layout
   - Required: Two-line headline with better spacing
   
2. **Missing Components from Home2**:
   - ✅ FullScreenVideo (already imported but need more instances)
   - ❌ Trusted by Leading Cardiologists (MedicalAdvisors)
   - ❌ How SKIIN Works (ProcessFlow - needs new visual style per Image #2)
   - ✅ Swiss Insurance (SwissHealthInsurance exists but needs styling update)

3. **Design System Issues**:
   - Hardcoded colors throughout (#004C96, #475259, etc.)
   - Not using landing-page-2025 theme (commented out)
   - Need to integrate new color palette properly

## Implementation Plan

### Phase 1: Design System Update (1 hour)
**Commit 1: Update design system with new colors**
1. Update CSS variables for landing-page-2025 theme
2. Add new color utilities to Tailwind config
3. Create color mapping for gradients and accents
4. Test theme switching functionality
5. Document new color usage patterns

### Phase 2: Hero Section Redesign (1.5 hours)
**Commit 2: Redesign hero to match mockup**
1. Create new HeroV2025 component matching Image #1
   - Two-line headline layout
   - Proper font sizing for expansion
   - Updated spacing and padding
   - Mobile-first responsive design
2. Update button styling with new colors
3. Add gradient effects where shown in mockup
4. Ensure performance optimization

### Phase 3: Component Migration & Integration (2 hours)
**Commit 3: Add Home2 components with new styling**
1. Import and integrate MedicalAdvisors component
   - Update styling to match new design
   - Position after clinical evidence section
2. Transform ProcessFlow into new "How SKIIN Works" style
   - Match visual style from Image #2
   - Update colors and spacing
   - Add new animations/interactions
3. Add more FullScreenVideo dividers
   - After benefits section
   - Before testimonials
   - Strategic content breaks
4. Update SwissHealthInsurance styling
   - Apply new color palette
   - Match mockup visual style

### Phase 4: Testing & Polish (1.5 hours)
**Commit 4: Test, optimize, and document**
1. Performance optimization
   - Lazy loading for videos/images
   - Bundle size analysis
   - Core Web Vitals check
2. Cross-browser testing
3. Mobile responsiveness verification
4. Accessibility audit
5. Documentation updates

## Technical Implementation Details

### Hero V2025 Structure
```tsx
- Container with max-width constraint
- Tagline (small, uppercase)
- Headline (two lines, responsive sizing)
  - Line 1: Dark color (#0D0D0D)
  - Line 2: Can wrap naturally
- Subheadline (purple #5549A6)
- CTA button (new styling)
- Trust indicators bar
```

### ProcessFlow Transformation
```tsx
- From: Standard step-by-step layout
- To: Visual cards with icons (per Image #2)
- Color scheme: Using new palette
- Layout: Grid or carousel based on viewport
- Animations: Subtle hover effects
```

### Color Usage Guidelines
```css
Primary actions: #004C96
Secondary actions: #5298F2
Text primary: #0D0D0D
Text secondary: #475259
Accent purple: #5549A6
Backgrounds: #F2F2F2, #EEE8E1
```

## Success Metrics
- Hero matches mockup exactly ✓
- All requested components integrated ✓
- New color palette applied consistently ✓
- Performance: LCP < 2.5s, CLS < 0.1 ✓
- Mobile-first responsive design ✓
- Accessibility: WCAG AA compliant ✓

## Risk Mitigation
1. Create component backups before major changes
2. Test each integration in isolation
3. Verify no regressions in other pages
4. Maintain backward compatibility
5. Document all breaking changes