# Visual Inspection Plan - v7.2 Implementation

DATE: 2025-07-25
PURPOSE: Comprehensive visual validation of all v7.2 features using Puppeteer

## Inspection Checklist

### 1. Homepage Components
- [ ] Hero Section - All 3 variants (A, B, C)
  - [ ] Variant A: Urgency messaging
  - [ ] Variant B: Comfort messaging  
  - [ ] Variant C: Family messaging
  - [ ] Badge text: "MDR Class IIa Certified • Swissmedic Registered"
  - [ ] CTAs: Start Free Assessment, Check Coverage, FAQ
  - [ ] Emotional subtitles present
- [ ] StatisticsShowcase
  - [ ] 70% silent AF statistic
  - [ ] 20-30% stroke risk
  - [ ] 66% vs 9% detection comparison
  - [ ] Clinical evidence footnotes
- [ ] ProblemSolutionSection
  - [ ] Silent Triad narrative
  - [ ] ECG, ABPM, Sleep cards
  - [ ] Icons and descriptions
- [ ] ProductSection
  - [ ] 8 benefit cards in 2x4 grid
  - [ ] All icons rendering
- [ ] NumbersSection
  - [ ] 95% accuracy
  - [ ] 10 days monitoring
  - [ ] 100% coverage
  - [ ] 24/7 analysis
- [ ] ClinicallyProvenTechSection
  - [ ] 4 trust markers
  - [ ] Evidence links
- [ ] Care360Section
  - [ ] Split layout
  - [ ] 7 feature points
  - [ ] Image placeholder
- [ ] TechCarousel
  - [ ] 5-step flow
  - [ ] Mobile responsiveness
- [ ] ProcessFlow
  - [ ] AI & Cardiologist mention in step 4

### 2. Partner Pages
- [ ] General Practitioners (/partners/general-practitioners)
  - [ ] MVCP section present
  - [ ] 6 MVCP features
  - [ ] Security badges
  - [ ] Professional CTAs
- [ ] Cardiologists (/partners/cardiologists)
  - [ ] 10-day messaging (not 14-day)
  - [ ] Professional CTAs
  - [ ] Case study section
- [ ] Telemedicine providers
  - [ ] API integration section
  - [ ] Professional focus
- [ ] Corporate/Healthcare orgs
  - [ ] Wellness packages
  - [ ] ROI metrics

### 3. Navigation & Routing
- [ ] Language switcher (EN/DE/FR/IT)
- [ ] All main navigation links work
- [ ] /10-day-heart-screening route (not /14-day-holter)
- [ ] Professional partner routes

### 4. Interactions & CTAs
- [ ] All buttons clickable
- [ ] Hover states working
- [ ] Links navigate correctly
- [ ] Form inputs (if any)

### 5. Responsive Design
- [ ] Mobile (375px)
- [ ] Tablet (768px)
- [ ] Desktop (1280px)
- [ ] Large screens (1536px)

### 6. Performance Observations
- [ ] Page load times
- [ ] Animation smoothness
- [ ] Image loading
- [ ] Component rendering speed

### 7. Accessibility Checks
- [ ] Focus states visible
- [ ] Keyboard navigation
- [ ] Alt text present
- [ ] Color contrast

### 8. Theme Compliance
- [ ] Medical teal color usage
- [ ] Deep navy backgrounds
- [ ] Consistent spacing
- [ ] Typography hierarchy

## Testing Approach

1. Navigate to each page/section
2. Take screenshots at multiple breakpoints
3. Test all interactive elements
4. Document any issues found
5. Measure basic performance metrics

## Output Structure
- Screenshots: /test-results/visual-inspection-v7-2-full/
- Report: visual-inspection-report-full.md
- Issues log: issues-found.md
- Performance metrics: performance-observations.md