# Theme System Implementation Guide

Generated: 2025-01-15

## Overview

The SKIIN Switzerland site implements a multi-theme design system allowing users to switch between 4 distinct visual themes. This guide explains how to properly implement theme-aware components.

## Available Themes

1. **Medical Blue** (Default)
   - Professional medical aesthetic
   - Deep blues and clinical whites
   - Trust-focused color palette

2. **Professional Teal**
   - Modern healthcare feel
   - Teal and mint accents
   - Fresh, innovative appearance

3. **Swiss Innovation**
   - Swiss flag inspired
   - Red accents with neutral grays
   - National identity focus

4. **Soft Blue Teal**
   - Gentle, approachable colors
   - Light blues and soft teals
   - Patient-friendly aesthetic

## Implementation Rules

### 1. Always Use CSS Variables

❌ **Don't use hardcoded colors:**
```tsx
<div className="text-blue-600 bg-blue-100">
```

✅ **Do use theme variables:**
```tsx
<div className="text-primary bg-background-secondary">
```

### 2. Theme-Aware Color Classes

The system provides these semantic color classes:

```css
/* Text Colors */
.text-primary          /* Main brand color */
.text-primary-dark     /* Darker variant */
.text-secondary        /* Secondary brand color */
.text-accent           /* Accent color for CTAs */
.text-muted            /* Muted text */
.text-muted-foreground /* Even more muted */

/* Background Colors */
.bg-background         /* Main background */
.bg-background-secondary /* Secondary bg */
.bg-background-accent  /* Accent background */
.bg-card               /* Card backgrounds */

/* Border Colors */
.border-border         /* Default borders */
.border-input          /* Form input borders */
.border-ring           /* Focus ring color */

/* Special Purpose */
.bg-gradient-primary   /* Primary gradient */
.bg-gradient-secondary /* Secondary gradient */
.shadow-theme          /* Theme-aware shadows */
```

### 3. Component Patterns

#### Buttons
```tsx
// Use the theme-aware variants
<Button variant="theme-primary">Primary Action</Button>
<Button variant="theme-secondary">Secondary Action</Button>
<Button variant="theme-accent">Special CTA</Button>

// Avoid hardcoded variants
<Button variant="medical">❌ Don't use</Button>
```

#### Cards
```tsx
<Card className="bg-card border-border shadow-theme">
  <CardHeader className="border-b border-border">
    <CardTitle className="text-primary">Title</CardTitle>
  </CardHeader>
  <CardContent className="text-foreground">
    Content here
  </CardContent>
</Card>
```

#### Forms
```tsx
<Input className="border-input focus:ring-ring" />
<Label className="text-foreground" />
```

### 4. Theme-Aware Content

Use the `useThemeContent` hook for content that changes with theme:

```tsx
import { useThemeContent } from '@/hooks/useThemeContent';

function HeroSection() {
  const content = useThemeContent();
  
  return (
    <h1>{content.heroTitle}</h1>
    <p>{content.heroSubtitle}</p>
    <Button>{content.ctaText}</Button>
  );
}
```

### 5. Protected Components

Protected components must maintain theme adaptability while preserving their core structure:

```tsx
// HeartBalanceRing example
function HeartBalanceRing() {
  return (
    <div className="border-2 border-primary rounded-full">
      <svg className="text-accent fill-current">
        {/* SVG content */}
      </svg>
    </div>
  );
}
```

## Migration Checklist

When updating a component to be theme-aware:

1. [ ] Replace all hardcoded color classes with theme variables
2. [ ] Update button variants to theme-aware versions
3. [ ] Test component in all 4 themes
4. [ ] Ensure proper contrast ratios (4.5:1 minimum)
5. [ ] Update any inline styles to use CSS variables
6. [ ] Add theme-specific content if needed via useThemeContent

## Components Requiring Updates

### High Priority (User Journey Critical)
- [ ] EligibilityChecker
- [ ] ContactForm
- [ ] TriTestReport
- [ ] CookieConsent

### Medium Priority (Main Content)
- [ ] All homepage sections
- [ ] Navigation components
- [ ] Footer
- [ ] Cards and containers

### Low Priority (Supporting Elements)
- [ ] Badges
- [ ] Icons
- [ ] Tooltips
- [ ] Breadcrumbs

## Testing Themes

1. Use the theme switcher in the navbar
2. Verify all text remains readable
3. Check interactive states (hover, focus)
4. Ensure forms maintain usability
5. Test on both light backgrounds

## CSS Variable Reference

```css
/* Core Palette */
--primary: /* Main brand color */
--primary-dark: /* Darker variant */
--secondary: /* Secondary color */
--accent: /* CTA/highlight color */

/* Backgrounds */
--background: /* Page background */
--background-secondary: /* Alt background */
--background-accent: /* Special sections */

/* Text */
--foreground: /* Main text */
--muted: /* Secondary text */
--muted-foreground: /* Tertiary text */

/* UI Elements */
--card: /* Card backgrounds */
--border: /* Border color */
--input: /* Input borders */
--ring: /* Focus rings */

/* Gradients */
--gradient-primary: /* Primary gradient */
--gradient-secondary: /* Secondary gradient */
```

## Common Mistakes to Avoid

1. **Using Tailwind's default colors**: `text-blue-600`, `bg-red-500`
2. **Inline styles with hex colors**: `style={{ color: '#1E3A5F' }}`
3. **Creating new color utilities**: Stick to the provided system
4. **Forgetting hover/focus states**: These need theme colors too
5. **Ignoring contrast requirements**: Always test readability

## Questions?

Refer to:
- `/src/contexts/ThemeContext.tsx` - Theme implementation
- `/src/styles/index.css` - CSS variable definitions
- `/src/components/ui/theme-switcher.tsx` - Theme switcher component