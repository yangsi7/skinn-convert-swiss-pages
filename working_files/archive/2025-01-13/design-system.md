# Design System Documentation - SKIIN Swiss Pages

## Overview

This document outlines the comprehensive design system for the SKIIN Swiss Pages application, including visual identity, component patterns, typography, spacing, and interaction design.

## 🎨 Brand Identity

### Brand Colors

#### Primary Palette
```css
/* Myant Brand Colors */
--myant-green: #2A7D71;      /* Primary brand color - Used for CTAs, highlights */
--myant-darkgreen: #1A4A43;  /* Darker variant - Hover states, emphasis */
--myant-lightgreen: #E6F0EE; /* Light backgrounds - Subtle sections */
--myant-gray: #F5F5F5;       /* Neutral backgrounds - Card backgrounds */
--myant-darkgray: #5A5A5A;   /* Text color - Secondary text */
```

#### Extended Palette
```css
/* Tailwind Semantic Colors Used */
--white: #FFFFFF;            /* Primary backgrounds */
--gray-50: #F9FAFB;         /* Light section backgrounds */
--gray-100: #F3F4F6;        /* Card hover states */
--gray-900: #111827;        /* Primary text */
--blue-600: #2563EB;        /* Links and accents */
--green-600: #059669;       /* Success states */
--red-600: #DC2626;         /* Error states */
--amber-500: #F59E0B;       /* Warning states */
```

### Color Usage Guidelines

#### Primary Actions
- **Call-to-Action Buttons**: `myant-green` background with white text
- **Hover States**: `myant-darkgreen` for depth and feedback
- **Focus States**: Ring color using `myant-green` for accessibility

#### Backgrounds
- **Page Background**: White (`#FFFFFF`)
- **Section Alternation**: `myant-lightgreen` for visual rhythm
- **Card Backgrounds**: `myant-gray` with subtle shadows

#### Text Hierarchy
- **Primary Text**: `gray-900` for maximum readability
- **Secondary Text**: `myant-darkgray` for supporting information
- **Tertiary Text**: `gray-600` for captions and meta information

## 📝 Typography

### Font Stack
```css
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
             'Ubuntu', 'Cantarell', 'Open Sans', 'Helvetica Neue', sans-serif;
```

### Typography Scale

#### Headlines
```css
/* H1 - Page Titles */
.text-4xl md:text-5xl lg:text-6xl
font-weight: 700 (bold)
line-height: 1.1
color: gray-900

/* H2 - Section Titles */
.text-3xl md:text-4xl
font-weight: 700 (bold)
line-height: 1.2
color: gray-900

/* H3 - Subsection Titles */
.text-2xl md:text-3xl
font-weight: 600 (semibold)
line-height: 1.3
color: gray-900

/* H4 - Component Titles */
.text-xl md:text-2xl
font-weight: 600 (semibold)
line-height: 1.4
color: gray-900
```

#### Body Text
```css
/* Large Body - Feature descriptions */
.text-lg md:text-xl
font-weight: 400 (normal)
line-height: 1.6
color: gray-700

/* Regular Body - Standard content */
.text-base md:text-lg
font-weight: 400 (normal)
line-height: 1.6
color: gray-700

/* Small Body - Captions, meta */
.text-sm md:text-base
font-weight: 400 (normal)
line-height: 1.5
color: gray-600
```

### Typography Guidelines

#### International Considerations
- **German Text**: Typically 15-20% longer than English - buttons sized accordingly
- **French Text**: Typically 10-15% longer than English - line height adjusted
- **Character Support**: Full UTF-8 support for umlauts (ä,ö,ü,ß) and accents (é,è,à,ç)

#### Accessibility
- **Minimum Contrast**: 4.5:1 for normal text, 3:1 for large text
- **Font Size**: Minimum 16px base size for body text
- **Line Height**: 1.5 minimum for paragraph text

## 📐 Spacing & Layout

### Spacing Scale
```css
/* 8px base unit system */
--space-1: 0.25rem;  /* 4px */
--space-2: 0.5rem;   /* 8px */
--space-3: 0.75rem;  /* 12px */
--space-4: 1rem;     /* 16px */
--space-5: 1.25rem;  /* 20px */
--space-6: 1.5rem;   /* 24px */
--space-8: 2rem;     /* 32px */
--space-10: 2.5rem;  /* 40px */
--space-12: 3rem;    /* 48px */
--space-16: 4rem;    /* 64px */
--space-20: 5rem;    /* 80px */
--space-24: 6rem;    /* 96px */
--space-32: 8rem;    /* 128px */
```

### Layout Containers
```css
/* Custom container */
.container-custom {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

@media (min-width: 640px) {
  .container-custom {
    padding: 0 2rem;
  }
}

@media (min-width: 1024px) {
  .container-custom {
    padding: 0 3rem;
  }
}
```

### Section Spacing
```css
/* Standard section padding */
.section-padding {
  padding-top: 4rem;    /* 64px */
  padding-bottom: 4rem; /* 64px */
}

@media (min-width: 768px) {
  .section-padding {
    padding-top: 6rem;    /* 96px */
    padding-bottom: 6rem; /* 96px */
  }
}

@media (min-width: 1024px) {
  .section-padding {
    padding-top: 8rem;    /* 128px */
    padding-bottom: 8rem; /* 128px */
  }
}
```

## 🧩 Component Patterns

### Button System

#### Primary Button
```css
.btn-primary {
  background: myant-green;
  color: white;
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: 600;
  transition: all 0.2s;
}

.btn-primary:hover {
  background: myant-darkgreen;
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(42, 125, 113, 0.4);
}
```

#### Secondary Button
```css
.btn-secondary {
  border: 2px solid myant-green;
  color: myant-green;
  background: transparent;
  padding: 10px 22px;
  border-radius: 8px;
  font-weight: 600;
  transition: all 0.2s;
}

.btn-secondary:hover {
  background: myant-green;
  color: white;
}
```

### Card System

#### Standard Card
```css
.card {
  background: white;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  transition: all 0.2s;
}

.card:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  transform: translateY(-2px);
}
```

#### Feature Card
```css
.feature-card {
  background: white;
  border-radius: 16px;
  padding: 32px 24px;
  text-align: center;
  border: 1px solid #F3F4F6;
  transition: all 0.3s;
}

.feature-card:hover {
  border-color: myant-green;
  box-shadow: 0 8px 24px rgba(42, 125, 113, 0.1);
}
```

### Form Elements

#### Input Fields
```css
.form-input {
  width: 100%;
  padding: 12px 16px;
  border: 2px solid #E5E7EB;
  border-radius: 8px;
  font-size: 16px;
  transition: border-color 0.2s;
}

.form-input:focus {
  border-color: myant-green;
  outline: none;
  box-shadow: 0 0 0 3px rgba(42, 125, 113, 0.1);
}
```

#### Labels
```css
.form-label {
  display: block;
  font-weight: 600;
  color: gray-700;
  margin-bottom: 6px;
  font-size: 14px;
}
```

## 📱 Responsive Design

### Breakpoint System
```css
/* Mobile First Approach */
/* Default: 320px - 639px (Mobile) */

/* sm: 640px - 767px (Large Mobile) */
@media (min-width: 640px) { }

/* md: 768px - 1023px (Tablet) */
@media (min-width: 768px) { }

/* lg: 1024px - 1279px (Desktop) */
@media (min-width: 1024px) { }

/* xl: 1280px+ (Large Desktop) */
@media (min-width: 1280px) { }
```

### Grid System

#### Feature Grid
```css
/* Mobile: 1 column */
.feature-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
}

/* Tablet: 2 columns */
@media (min-width: 768px) {
  .feature-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 32px;
  }
}

/* Desktop: 3 columns */
@media (min-width: 1024px) {
  .feature-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 40px;
  }
}
```

## 🎭 Animation System

### Custom Animations
```css
/* Fade In */
@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Slide In */
@keyframes slide-in {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Accordion animations */
@keyframes accordion-down {
  from {
    height: 0;
  }
  to {
    height: var(--radix-accordion-content-height);
  }
}

@keyframes accordion-up {
  from {
    height: var(--radix-accordion-content-height);
  }
  to {
    height: 0;
  }
}
```

### Animation Classes
```css
.animate-fade-in {
  animation: fade-in 0.6s ease-out;
}

.animate-slide-in {
  animation: slide-in 0.8s ease-out;
}

.animate-accordion-down {
  animation: accordion-down 0.2s ease-out;
}

.animate-accordion-up {
  animation: accordion-up 0.2s ease-out;
}
```

## 🖼️ Imagery Guidelines

### Image Treatment
- **Hero Images**: Full-width with subtle overlay (opacity: 0.1-0.3)
- **Content Images**: Rounded corners (8px-12px)
- **Testimonial Images**: Circular crop (rounded-full)
- **Feature Icons**: Consistent style (outline or filled)

### Image Specifications
- **Hero**: 1920x1080px minimum, WebP format preferred
- **Cards**: 400x300px, 4:3 aspect ratio
- **Testimonials**: 150x150px, square format
- **Icons**: 48x48px, SVG format

### Alt Text Standards
- **Descriptive**: What is shown in the image
- **Contextual**: How it relates to surrounding content
- **Concise**: Maximum 125 characters
- **Actionable**: For buttons/links, describe the action

## ♿ Accessibility Standards

### WCAG 2.1 AA Compliance

#### Color Contrast
- **Normal Text**: Minimum 4.5:1 contrast ratio
- **Large Text**: Minimum 3:1 contrast ratio
- **UI Elements**: Minimum 3:1 contrast ratio

#### Focus Management
- **Visible Focus**: Clear focus indicators on all interactive elements
- **Focus Order**: Logical tab sequence through page content
- **Skip Links**: Allow keyboard users to skip repetitive navigation

#### Semantic HTML
- **Headings**: Proper heading hierarchy (H1-H6)
- **Landmarks**: nav, main, aside, footer elements
- **Lists**: Proper ul/ol structure for grouped content
- **Forms**: Associated labels and error messages

### Screen Reader Support
- **ARIA Labels**: Descriptive labels for complex interactions
- **ARIA Roles**: Proper roles for custom components
- **Live Regions**: For dynamic content updates
- **Image Alt Text**: Meaningful descriptions for all images

## 🌐 Internationalization

### Text Expansion
- **German**: Plan for 15-20% text expansion
- **French**: Plan for 10-15% text expansion
- **Buttons**: Flexible width to accommodate longer text
- **Navigation**: Adaptive menu design for varying text lengths

### Cultural Considerations
- **Medical Terminology**: Consistent professional language
- **Date Formats**: DD.MM.YYYY for Switzerland
- **Currency**: CHF (Swiss Francs) formatting
- **Phone Numbers**: +41 (Swiss) format

### Right-to-Left Support
- While not currently needed for DE/FR, design patterns support future RTL languages
- Flexbox and Grid layouts adapt automatically
- Icon placement considerations for future expansion

## 📊 Performance Guidelines

### Loading States
- **Skeleton Screens**: For content loading
- **Progressive Enhancement**: Core content loads first
- **Image Optimization**: WebP with JPEG fallbacks
- **Critical CSS**: Inline critical styles

### Animation Performance
- **Transform over Position**: Use transform for animations
- **Opacity over Visibility**: For fade effects
- **Will-Change**: Optimize for known animations
- **Reduced Motion**: Respect user preferences

This design system ensures consistent, accessible, and scalable design patterns throughout the SKIIN Swiss Pages application, supporting the multilingual healthcare market requirements.