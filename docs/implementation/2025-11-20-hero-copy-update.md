# Hero Copy Update - Landing Page V2025
Date: 2025-11-20
Status: Implemented

## Summary
Updated the hero section copy for the new landing page design (LandingPageV2025) based on user feedback.

## Changes

### Previous Copy
- **Headline:** "Most heart issues are silent."
- **Subheadline:** "Today is a good time to check."

### Updated Copy
- **Headline:** "Most heart issues are silent."
- **Subheadline:** "A simple check can make all the difference."

## Rationale
1. **Single Line Display**: The new subheadline is designed to fit on a single line when the browser window is fully expanded horizontally, improving visual hierarchy and readability.
2. **Action-Oriented**: The phrase "A simple check can make all the difference" emphasizes both the ease of the process and its potential impact.
3. **Emotional Connection**: The word "difference" connects to making a meaningful change in one's health outcomes.

## Implementation Details
- Component: `src/components/landing/HeroV2025.tsx`
- Both headline and subheadline use the same font size (text-4xl to text-8xl responsive)
- Subheadline uses accent color (purple in S&W Design theme)
- Animation: fadeInUp with staggered delays

## Visual Specifications
- **Font sizes**: 
  - Mobile (sm): text-4xl
  - Tablet (md): text-6xl  
  - Desktop (lg): text-7xl
  - Large screens (xl): text-8xl
- **Color**: Subheadline uses `text-accent` (theme-dependent)
- **Line height**: `leading-tight` to ensure compact display

## Note
This implementation differs from the original copy specifications in `/docs/implementation/skiin-ch-copy 29072025.md` which contains three A/B test variants. The current implementation represents a fourth variant focused on simplicity and immediate action.