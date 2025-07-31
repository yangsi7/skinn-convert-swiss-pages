# Hero Animation Implementation

## Overview
Implemented a sophisticated entrance animation for the hero section with the following sequence:

### Animation Sequence

1. **Tagline (0ms delay, 1.2s duration)**
   - "LIVE WELL. START WITH YOUR HEART."
   - Fades in first with a gentle upward movement
   - Longer duration for emphasis

2. **Main Headlines (staggered at 200ms intervals)**
   - "Most heart issues are silent." (200ms delay)
   - "A simple check can make all the difference." (400ms delay)
   - Both fade in with subtle upward movement
   - 800ms duration each

3. **CTA Button (800ms delay)**
   - Appears after headlines are visible
   - Shorter fade with minimal movement

4. **Trust Line (1.2s delay)**
   - Final element to appear
   - Subtle fade without movement

### Technical Implementation

#### Using Framer Motion
- **Staggered children**: Container orchestrates child animations
- **Professional easing**: `[0.25, 0.46, 0.45, 0.94]` (ease-out-quad)
- **Total sequence**: ~2 seconds from start to finish
- **GPU optimized**: Uses transform and opacity only

#### Key Features
1. **Component state trigger**: Animations start after mount
2. **Accessibility**: Respects `prefers-reduced-motion`
3. **Performance**: Hardware-accelerated transforms
4. **Smooth sequencing**: Natural reading flow

### Animation Variants

```javascript
// Tagline - Extended fade for emphasis
const taglineVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 1.2,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
};

// Headlines - Standard fade up
const fadeInUpVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
};
```

### User Experience
- Creates visual hierarchy through timing
- Draws attention to tagline first
- Builds anticipation for main message
- Professional, medical-grade feel
- No jarring movements or flashes

### Browser Support
- Works in all modern browsers
- Graceful fallback for older browsers
- Reduced motion support built-in
- Mobile-optimized performance