# Theme-Aware Components Inventory

Generated: 2025-01-15

## Component Theme Compatibility Status

### ✅ Fully Theme-Aware Components

1. **ThemeSwitcher** (`/src/components/ui/theme-switcher.tsx`)
   - Properly integrated with ThemeContext
   - Shows all 4 theme options with descriptions

2. **Home2** (`/src/pages/Home2.tsx`)
   - Uses `useThemeContent` hook
   - Adapts hero content based on theme

3. **Button** (`/src/components/ui/button.tsx`)
   - Has theme-primary and theme-accent variants
   - CSS properly uses theme variables

### ⚠️ Partially Theme-Aware Components

1. **Navbar** (`/src/components/layout/Navbar.tsx`)
   - Uses some theme classes but needs updates
   - Mobile menu needs theme adaptation

2. **Footer** (`/src/components/layout/Footer.tsx`)
   - Basic theme support but could be improved

3. **Card Components** (`/src/components/ui/card.tsx`)
   - Base structure supports themes
   - Some variants still hardcoded

### ❌ Components Requiring Theme Updates

#### Critical Components (Affecting User Journey)

1. **TriTestReport** (`/src/components/tritest/TriTestReport.tsx`)
   - **Issues**: Extensive hardcoded blue colors throughout
   - **Colors to fix**: `text-blue-600`, `text-blue-800`, `bg-blue-500`, `bg-blue-50`
   - **Priority**: HIGH - Main product feature

2. **EligibilityChecker** (`/src/components/home/EligibilityChecker.tsx`)
   - **Issues**: Hardcoded colors and German text
   - **Colors to fix**: Blue color classes
   - **Priority**: HIGH - Conversion critical

3. **ContactForm** (`/src/components/home/ContactForm.tsx`)
   - **Issues**: May have hardcoded form styling
   - **Priority**: HIGH - Lead generation

4. **CookieConsent** (`/src/components/analytics/CookieConsent.tsx`)
   - **Issues**: Hardcoded styling and text
   - **Priority**: HIGH - Legal requirement

#### Homepage Components

5. **HeroSection** (`/src/components/home/HeroSection.tsx`)
   - **Issues**: May use fixed brand colors
   - **Priority**: MEDIUM

6. **FeaturesSection** (`/src/components/home/FeaturesSection.tsx`)
   - **Issues**: Icon colors may be hardcoded
   - **Priority**: MEDIUM

7. **TestimonialsSection** (`/src/components/home/TestimonialsSection.tsx`)
   - **Issues**: Quote styling may be fixed
   - **Priority**: MEDIUM

8. **All other home components**
   - ProblemSolutionSection
   - HowItWorksSection
   - ComparisonSection
   - InsuranceSection
   - CtaSection
   - FaqSection

#### Physician Components

9. **TrustBadges** (`/src/components/physicians/TrustBadges.tsx`)
   - **Issues**: Likely uses fixed trust colors
   - **Priority**: MEDIUM

10. **All physician components**
    - BenefitItem
    - Citation
    - DoctorQuote
    - TestimonialCard

### 🔧 Protected Components (Not Yet Implemented)

These need to be built with theme support from the start:

1. **HeartBalanceRing** - Must adapt ring colors to theme
2. **ContributingFactorCards** - Card styling must follow theme
3. **TabNavigation** - Navigation states must use theme colors
4. **TodayTab** - Interface must be theme-aware

## Color Mapping Guide

When updating components, replace these colors:

### Text Colors
- `text-blue-*` → `text-primary`
- `text-gray-*` → `text-muted` or `text-foreground`
- `text-green-*` → `text-accent`
- `text-red-*` → `text-destructive`

### Background Colors
- `bg-blue-*` → `bg-primary` or `bg-background-accent`
- `bg-gray-*` → `bg-background` or `bg-background-secondary`
- `bg-white` → `bg-card` or `bg-background`

### Border Colors
- `border-blue-*` → `border-primary`
- `border-gray-*` → `border-border`

### Special Cases
- Chart colors → Use theme gradient variables
- Icon fills → Use `fill-current` with text color classes
- Shadows → Use `shadow-theme`

## Implementation Priority

### Phase 1: Critical Path (Week 1)
1. TriTestReport - Main product showcase
2. EligibilityChecker - Conversion funnel
3. ContactForm - Lead capture
4. CookieConsent - Legal compliance

### Phase 2: Main Content (Week 1-2)
5. All homepage sections
6. Navigation components
7. Footer enhancements

### Phase 3: Supporting Elements (Week 2)
8. Physician components
9. Partner pages
10. About/How-it-works sections

## Testing Checklist

For each component update:

- [ ] Replace all hardcoded colors
- [ ] Test in all 4 themes using ThemeSwitcher
- [ ] Verify text contrast (4.5:1 minimum)
- [ ] Check hover/focus states
- [ ] Test responsive breakpoints
- [ ] Update component documentation
- [ ] Add to completed list

## Tracking Progress

Components updated: 3/50+ (~6%)
Priority components updated: 0/4 (0%)

Last updated: 2025-01-15