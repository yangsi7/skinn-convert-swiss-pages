# SKIIN Switzerland Design System

## Core Design Principles

### 1. Medical Credibility Over "Heavenly" Aesthetics
Based on user feedback, we avoid light blues and "heavenly" color schemes that undermine trust in medical contexts. Instead, we use deep, professional tones that convey expertise and reliability.

### 2. Swiss Quality Indicators
Incorporate subtle Swiss design elements and quality markers throughout the experience to reinforce local trust and premium positioning.

### 3. Information Density with Breathing Room
Medical professionals expect comprehensive information, while patients need clarity. We achieve both through progressive disclosure and generous whitespace.

## Color System

### Primary Palette

```scss
// Core Brand Colors - Professional & Trustworthy
$primary-navy: #1e3a5f;        // Deep professional blue (main brand color)
$primary-charcoal: #2c3e50;    // Rich charcoal for text and headers
$primary-white: #ffffff;       // Clean white for backgrounds

// Medical & Action Colors
$medical-teal: #00796b;        // Medical/healthcare associations
$action-red: #e74c3c;          // Urgent CTAs and important notices
$success-green: #27ae60;       // Positive states and confirmations

// Swiss Trust Indicators
$swiss-red: #da291c;           // Official Swiss red (use sparingly)
$certification-gold: #ffc107;   // For badges and certifications
```

### Neutral Palette

```scss
// Grays for UI Elements
$gray-50: #f8f9fa;    // Light backgrounds
$gray-100: #f1f3f5;   // Alternate sections
$gray-200: #e9ecef;   // Borders
$gray-300: #dee2e6;   // Disabled states
$gray-400: #ced4da;   // Input borders
$gray-500: #adb5bd;   // Placeholder text
$gray-600: #6c757d;   // Secondary text
$gray-700: #495057;   // Body text
$gray-800: #343a40;   // Headers
$gray-900: #212529;   // Primary text
```

### Semantic Colors

```scss
// State Colors
$error: #dc3545;        // Error messages
$warning: #ffc107;      // Warnings
$info: #17a2b8;        // Information
$success: #28a745;      // Success messages

// NOT USING (Too "Heavenly")
// $sky-blue: #87CEEB;  
// $baby-blue: #89CFF0;
// $powder-blue: #B0E0E6;
```

## Typography

### Font Stack

```scss
// Primary Font - Clean & Professional
$font-primary: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif;

// Display Font - For Large Headers
$font-display: 'Inter', 'Helvetica Neue', Arial, sans-serif;

// Monospace - For Technical Data
$font-mono: 'IBM Plex Mono', 'Courier New', monospace;
```

### Type Scale

```scss
// Desktop Sizes
$h1-desktop: 48px;      // Page titles
$h2-desktop: 36px;      // Section headers
$h3-desktop: 28px;      // Subsections
$h4-desktop: 22px;      // Card headers
$h5-desktop: 18px;      // Small headers
$body-desktop: 16px;    // Body text
$small-desktop: 14px;   // Captions

// Mobile Sizes (scales down ~20%)
$h1-mobile: 36px;
$h2-mobile: 28px;
$h3-mobile: 22px;
$h4-mobile: 18px;
$h5-mobile: 16px;
$body-mobile: 16px;
$small-mobile: 14px;
```

### Font Weights

```scss
$font-light: 300;
$font-regular: 400;
$font-medium: 500;
$font-semibold: 600;
$font-bold: 700;
```

## Spacing System

Based on 8px grid for consistency:

```scss
$space-1: 4px;
$space-2: 8px;
$space-3: 16px;
$space-4: 24px;
$space-5: 32px;
$space-6: 48px;
$space-7: 64px;
$space-8: 96px;
$space-9: 128px;
```

## Component Patterns

### Buttons

```scss
// Primary Button - High Contrast
.btn-primary {
  background: $primary-navy;
  color: white;
  padding: $space-3 $space-5;
  font-weight: $font-semibold;
  border-radius: 6px;
  
  &:hover {
    background: darken($primary-navy, 10%);
  }
}

// Secondary Button - Outlined
.btn-secondary {
  background: transparent;
  color: $primary-navy;
  border: 2px solid $primary-navy;
  padding: $space-3 $space-5;
  
  &:hover {
    background: $primary-navy;
    color: white;
  }
}

// Urgent CTA - Red
.btn-urgent {
  background: $action-red;
  color: white;
  
  &:hover {
    background: darken($action-red, 10%);
  }
}
```

### Cards

```scss
.card {
  background: white;
  border: 1px solid $gray-200;
  border-radius: 8px;
  padding: $space-5;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
  
  &:hover {
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  }
}

.card-medical {
  border-left: 4px solid $medical-teal;
}

.card-evidence {
  border-top: 3px solid $certification-gold;
}
```

### Trust Indicators

```scss
.trust-badge {
  display: inline-flex;
  align-items: center;
  padding: $space-2 $space-3;
  background: $gray-50;
  border: 1px solid $gray-200;
  border-radius: 4px;
  
  .icon {
    color: $certification-gold;
    margin-right: $space-2;
  }
}

.swiss-quality {
  position: relative;
  
  &::after {
    content: '🇨🇭';
    position: absolute;
    top: -$space-1;
    right: -$space-2;
    font-size: 12px;
  }
}
```

## Layout Patterns

### Container Widths

```scss
$container-sm: 640px;   // Text-heavy content
$container-md: 768px;   // Forms and narrow layouts
$container-lg: 1024px;  // Standard content
$container-xl: 1280px;  // Full-width sections
```

### Section Spacing

```scss
// Generous spacing for "aerated" feel
.section {
  padding-top: $space-8;    // 96px
  padding-bottom: $space-8;  // 96px
  
  @media (max-width: 768px) {
    padding-top: $space-6;   // 48px
    padding-bottom: $space-6; // 48px
  }
}
```

## Visual Elements

### Images

```scss
.hero-image {
  width: 100%;
  height: 500px;
  object-fit: cover;
  border-radius: 0;
}

.content-image {
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}

.german-asset {
  // Temporary class for German images used across languages
  filter: none; // Ensure no color adjustments
}
```

### Icons

Using consistent icon library (Lucide or Heroicons):
- Line weight: 2px
- Size: 24px standard, 20px small, 32px large
- Color: Inherit from parent or $gray-600

## Responsive Breakpoints

```scss
$mobile: 375px;
$tablet: 768px;
$desktop: 1024px;
$wide: 1440px;

// Mobile-first approach
@mixin tablet-up {
  @media (min-width: #{$tablet}) {
    @content;
  }
}

@mixin desktop-up {
  @media (min-width: #{$desktop}) {
    @content;
  }
}
```

## Accessibility

### Color Contrast Ratios
- Normal text: 4.5:1 minimum
- Large text: 3:1 minimum
- All primary/white combinations: >7:1

### Focus States

```scss
:focus-visible {
  outline: 3px solid $medical-teal;
  outline-offset: 2px;
}
```

### Touch Targets
- Minimum 44x44px on mobile
- 8px spacing between interactive elements

## Animation

Subtle, professional animations only:

```scss
$ease-out: cubic-bezier(0.215, 0.61, 0.355, 1);
$duration-fast: 150ms;
$duration-base: 250ms;
$duration-slow: 350ms;

.transition-all {
  transition: all $duration-base $ease-out;
}
```

## Medical-Specific Components

### Clinical Data Display

```scss
.clinical-stat {
  font-size: $h1-desktop;
  font-weight: $font-bold;
  color: $primary-navy;
  
  .unit {
    font-size: $h4-desktop;
    font-weight: $font-regular;
    color: $gray-600;
  }
  
  .source {
    font-size: $small-desktop;
    color: $gray-500;
    font-style: italic;
  }
}
```

### Insurance Information

```scss
.insurance-card {
  background: lighten($medical-teal, 45%);
  border: 1px solid lighten($medical-teal, 30%);
  border-radius: 8px;
  padding: $space-4;
  
  .coverage-amount {
    color: $success-green;
    font-weight: $font-bold;
  }
}
```

## Implementation Notes

### CSS Variables Setup

```css
:root {
  /* Colors */
  --color-primary-navy: #1e3a5f;
  --color-primary-charcoal: #2c3e50;
  --color-medical-teal: #00796b;
  --color-action-red: #e74c3c;
  
  /* Spacing */
  --space-unit: 8px;
  
  /* Typography */
  --font-primary: 'Inter', -apple-system, sans-serif;
  
  /* Shadows */
  --shadow-sm: 0 2px 4px rgba(0,0,0,0.05);
  --shadow-md: 0 4px 12px rgba(0,0,0,0.1);
  --shadow-lg: 0 8px 24px rgba(0,0,0,0.15);
}
```

### Tailwind Config Extension

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        'primary': {
          'navy': '#1e3a5f',
          'charcoal': '#2c3e50',
        },
        'medical': {
          'teal': '#00796b',
        },
        'action': {
          'red': '#e74c3c',
        },
        'swiss': {
          'red': '#da291c',
        },
      },
      fontFamily: {
        'sans': ['Inter', ...defaultTheme.fontFamily.sans],
      },
    },
  },
}
```

## Usage Guidelines

### Do's
- ✅ Use primary-navy for headers and important UI elements
- ✅ Apply medical-teal for healthcare-related accents
- ✅ Include trust badges on every page
- ✅ Maintain generous whitespace (30%+ of page)
- ✅ Use real patient photos when available

### Don'ts
- ❌ Use light blues or "heavenly" colors
- ❌ Create cluttered layouts
- ❌ Use generic stock healthcare photos
- ❌ Apply Swiss red to large areas
- ❌ Make text smaller than 14px

This design system ensures SKIIN maintains medical credibility while providing a modern, trustworthy user experience that resonates with Swiss quality expectations.