
# SKIIN Modern Design System Specification

## Overview

This document defines the official design system for SKIIN Switzerland, based on the modern homepage implementation. All components and pages must follow these specifications to ensure consistency and maintain the premium, medical-grade aesthetic.

## Core Design Principles

### 1. Progressive Enhancement
- **Scroll-triggered animations** reveal content as users explore
- **Staggered delays** create visual hierarchy (150ms increments)
- **Smooth transitions** (1000ms base duration with ease-out)
- **One-time triggers** for performance (triggerOnce: true)

### 2. Generous Spacing
- **Section padding**: `py-20` (5rem) mobile, `md:py-30` (7.5rem) desktop
- **Container**: `container mx-auto px-6`
- **Card padding**: `p-6` to `p-8`
- **Element gaps**: `gap-8` to `gap-12`

### 3. Medical Precision
- **Clean layouts** with ample white space
- **Trust indicators** (badges, certifications, statistics)
- **Professional imagery** with consistent treatment
- **Accessibility first** (WCAG 2.1 AA compliant)

## Color System

### Primary Palette
```css
--primary: #1E3A5F; /* Deep Navy */
--primary-foreground: white;
--medical-teal: #00796B;
--medical-teal-foreground: white;
```

### Extended Palette
```css
--swiss-red: #FF0000;
--swiss-silver: #C0C0C0;
--success-green: #10B981;
--trust-blue: #3B82F6;
--background: #FFFFFF;
--background-secondary: #F9FAFB;
--muted: #6B7280;
--muted-foreground: #4B5563;
```

### Gradient Presets
```css
/* Hero Gradients */
.gradient-hero {
  background: linear-gradient(to bottom right, 
    rgba(30, 58, 95, 0.08), 
    rgba(0, 121, 107, 0.05)
  );
}

/* Swiss Heritage */
.gradient-swiss {
  background: linear-gradient(to bottom right,
    rgba(255, 0, 0, 0.05),
    rgba(192, 192, 192, 0.05)
  );
}

/* Dark Sections */
.gradient-dark {
  background: linear-gradient(to bottom,
    #0F172A,
    #1E293B
  );
}
```

## Typography

### Font Stack
```css
font-family: 'IBM Plex Sans', Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
```

### Type Scale
```css
/* Display */
.text-display {
  font-size: clamp(3rem, 5vw, 5rem);
  line-height: 1.1;
  font-weight: 700;
}

/* Headings */
.h1 { 
  font-size: clamp(2.5rem, 4vw, 4rem);
  line-height: 1.2;
  font-weight: 700;
}

.h2 {
  font-size: clamp(2rem, 3vw, 3rem);
  line-height: 1.3;
  font-weight: 700;
}

.h3 {
  font-size: clamp(1.5rem, 2vw, 2rem);
  line-height: 1.4;
  font-weight: 600;
}

/* Body */
.text-lg {
  font-size: 1.125rem;
  line-height: 1.75;
}

.text-base {
  font-size: 1rem;
  line-height: 1.5;
}
```

## Component Patterns

### 1. Progressive Section
```tsx
<ProgressiveSection 
  className="py-20 md:py-30" 
  animation="slide"
  dark={false}
>
  <div className="container mx-auto px-6">
    {/* Content */}
  </div>
</ProgressiveSection>
```

### 2. Card Pattern
```tsx
<Card className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
  <CardContent className="p-6">
    {/* Icon */}
    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
      <Icon className="w-8 h-8 text-primary" />
    </div>
    {/* Content */}
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-muted-foreground">{description}</p>
  </CardContent>
</Card>
```

### 3. Statistic Display
```tsx
<div className="text-center">
  <div className="text-6xl md:text-7xl lg:text-8xl font-bold text-primary mb-4">
    {value}
  </div>
  <h3 className="text-xl md:text-2xl font-semibold mb-2">
    {label}
  </h3>
  <p className="text-muted-foreground max-w-md mx-auto">
    {description}
  </p>
</div>
```

### 4. Hero Section
```tsx
<section className="relative min-h-screen bg-gradient-to-br from-primary/8 to-medical-teal/5 flex items-center">
  <div className="container mx-auto px-6">
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      <div className="space-y-8">
        <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
          {badge}
        </Badge>
        <h1 className="text-4xl lg:text-6xl font-bold">
          <span className="text-primary">{primary}</span>{' '}
          <span className="text-muted-foreground">{secondary}</span>
        </h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          {description}
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            {primaryCta}
          </Button>
          <Button size="lg" variant="outline">
            {secondaryCta}
          </Button>
        </div>
      </div>
      <div className="relative">
        {/* Hero Image/Video */}
      </div>
    </div>
  </div>
</section>
```

## Animation Specifications

### Timing Functions
```css
--ease-default: cubic-bezier(0.4, 0, 0.2, 1); /* ease-out */
--ease-in: cubic-bezier(0.4, 0, 1, 1);
--ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
```

### Duration Scale
```css
--duration-instant: 150ms;
--duration-fast: 300ms;
--duration-normal: 500ms;
--duration-slow: 700ms;
--duration-slower: 1000ms;
```

### Scroll Animation Patterns
```tsx
// Fade In
className={cn(
  "transition-all duration-1000",
  isVisible ? "opacity-100" : "opacity-0"
)}

// Slide Up
className={cn(
  "transition-all duration-1000",
  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
)}

// Scale In
className={cn(
  "transition-all duration-1000",
  isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
)}

// Slide From Side
className={cn(
  "transition-all duration-1000",
  isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
)}
```

### Stagger Pattern
```tsx
{items.map((item, index) => (
  <div
    key={index}
    className={cn(
      "transition-all duration-700",
      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
    )}
    style={{ transitionDelay: `${index * 150}ms` }}
  >
    {/* Item content */}
  </div>
))}
```

## Interactive States

### Hover Effects
```css
/* Cards */
.card-hover {
  @apply hover:shadow-lg hover:-translate-y-2 transition-all duration-300;
}

/* Buttons */
.button-hover {
  @apply hover:bg-primary/90 transition-colors duration-200;
}

/* Links */
.link-hover {
  @apply hover:text-primary transition-colors duration-200;
}
```

### Focus States
```css
.focus-ring {
  @apply focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2;
}
```

## Layout Patterns

### Container Widths
```css
.container-custom {
  @apply container mx-auto px-6;
  max-width: 1280px;
}

.container-narrow {
  @apply container mx-auto px-6;
  max-width: 1024px;
}

.container-wide {
  @apply container mx-auto px-6;
  max-width: 1536px;
}
```

### Grid Systems
```css
/* Feature Grid */
.feature-grid {
  @apply grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8;
}

/* Stats Grid */
.stats-grid {
  @apply grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12;
}

/* Content Grid */
.content-grid {
  @apply grid lg:grid-cols-2 gap-12 items-center;
}
```

## Responsive Breakpoints
```css
/* Mobile First */
sm: 640px   /* Small tablets */
md: 768px   /* Tablets */
lg: 1024px  /* Laptops */
xl: 1280px  /* Desktops */
2xl: 1536px /* Large screens */
```

## Shadow System
```css
--shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
--shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1);
--shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1);
--shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.1);
--shadow-theme: 0 20px 40px -10px var(--primary-rgb, 30 58 95 / 0.15);
```

## Border Radius
```css
--radius-sm: 0.375rem;  /* 6px */
--radius-md: 0.5rem;    /* 8px */
--radius-lg: 0.75rem;   /* 12px */
--radius-xl: 1rem;      /* 16px */
--radius-2xl: 1.5rem;   /* 24px */
--radius-full: 9999px;  /* Full round */
```

## Z-Index Scale
```css
--z-base: 0;
--z-dropdown: 10;
--z-sticky: 20;
--z-overlay: 30;
--z-modal: 40;
--z-popover: 50;
--z-tooltip: 60;
```

## Accessibility Requirements

### Color Contrast
- Normal text: 4.5:1 minimum
- Large text: 3:1 minimum
- Interactive elements: 3:1 minimum

### Focus Management
- All interactive elements must have visible focus states
- Focus trap in modals and overlays
- Skip links for navigation

### Animation Preferences
```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

### Screen Reader Support
- Proper heading hierarchy
- ARIA labels for icons
- Live regions for dynamic content
- Alt text for all images

## Performance Guidelines

### Image Optimization
- Use WebP format with fallbacks
- Implement lazy loading
- Responsive images with srcset
- Maximum file size: 200KB

### Code Splitting
- Route-based splitting
- Component lazy loading
- Dynamic imports for heavy features

### Animation Performance
- Use transform and opacity only
- Avoid animating layout properties
- Use will-change sparingly
- GPU acceleration for complex animations

## Component Library

### Core Components (To Be Created)
1. `ProgressiveCard` - Animated card with hover effects
2. `ImageSection` - Optimized image display
3. `TeamMember` - Profile card for team
4. `FeatureGrid` - Responsive feature layout
5. `StatCard` - Animated statistics
6. `ContentSection` - Generic progressive section
7. `Timeline` - Process flow visualization
8. `Testimonial` - Customer quote card
9. `TrustBadge` - Certification display
10. `VideoPlayer` - Enhanced video component

## Usage Examples

### Page Structure Template
```tsx
const ModernPage = () => {
  return (
    <>
      {/* Hero Section */}
      <ProgressiveSection className="min-h-screen gradient-hero">
        {/* Hero content */}
      </ProgressiveSection>

      {/* Features */}
      <ProgressiveSection className="py-20 md:py-30">
        <FeatureGrid features={features} />
      </ProgressiveSection>

      {/* Statistics */}
      <ProgressiveSection className="py-20 md:py-30 bg-background-secondary">
        <StatisticsShowcase stats={stats} />
      </ProgressiveSection>

      {/* CTA */}
      <ProgressiveSection className="py-20 md:py-30 gradient-dark" dark>
        {/* CTA content */}
      </ProgressiveSection>
    </>
  );
};
```

This specification ensures all pages maintain the modern, premium aesthetic established by the new homepage while providing clear guidelines for developers to follow.
