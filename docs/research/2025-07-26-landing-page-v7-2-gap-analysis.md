# Landing Page v7.2 Gap Analysis & Visual Assets Strategy
DATE: 2025-07-26
STATUS: ACTIVE
PURPOSE: Analyze current Home2 implementation against v7.2 requirements and plan visual asset integration

## Executive Summary

The current Home2 landing page has been partially updated with v7.2 copy but is missing several critical components and visual asset integration opportunities. This analysis identifies gaps, proposes component reuse from classic theme, and provides a comprehensive visual asset placement strategy.

## Current State Analysis

### What's Already Implemented ✅
1. **Hero Section**: 
   - A/B variant support (working with ?variant=A/B/C)
   - Emotional subtitles
   - v7.2 CTAs (Assessment, Insurance, FAQ)
   - MDR Class IIa badge
   - Using marketing asset 1e3b8979 (Länger jünger leben)

2. **Statistics Section**:
   - Evidence-based claims (70%, 20-30%, 66% vs 9%)
   - Visual assets integrated (25b8354d, b74365b1, 4ad65a99)
   - Clinical evidence link

3. **Silent Triad Section**:
   - Problem/Solution narrative
   - Three modality cards (ECG, ABPM, Sleep)
   - Icons for each modality

4. **Clinical Evidence Section**:
   - v7.2 trust markers
   - 98.6% accuracy, MDR certified, etc.

5. **Technology Section**:
   - Care360 messaging implemented
   - Using asset 6e47298b (Holter-EKG Technology)

### What's Missing ❌

According to the UI Component Mapping v7.2, the following components are missing from Home2:

1. **ProductSection** - 8 benefit cards showcasing key features
2. **NumbersSection** - 4 key metrics (95%, 10 Days, 100%, 24/7)
3. **TechCarousel** - Data flow visualization (Sensor→App→Cloud→AI→Cardio)
4. **Testimonials Section** - Should be merged from classic theme
5. **FAQ Section** - Should be expanded from classic theme
6. **Medical Advisors Section** - Board of doctors showcase
7. **Comfort Showcase** - With Maria testimonial image
8. **MVCP Preview** - For GP credibility (without full section)

### Component Reuse Opportunities from Classic Theme

1. **Testimonials Component**
   - Exists in classic theme with "Trusted by Doctors and Patients"
   - Should be enhanced with real Swiss testimonials
   - Integrate doctor images and patient comfort testimonial

2. **FAQ Component**
   - Classic theme has basic FAQ
   - Should be expanded with v7.2 medical questions
   - Add evidence-based answers

3. **CTA Section "Ready to transform cardiac monitoring?"**
   - Classic theme has good structure
   - Update copy to v7.2 messaging
   - Add trust indicators

## Visual Asset Integration Strategy

### Hero Section Enhancement
- **Current**: Using 1e3b8979 (Länger jünger leben)
- **Add**: 32de0ca4 (person wearing SKIIN) as alternate or A/B test variant
- **Benefit**: Shows actual product usage, more relatable

### Product Benefits Section (Missing)
Create ProductSection with 8 cards using:
- **skiin-your-second-skin.png**: "Second Skin Comfort" benefit
- **wear-skiin-man-band-insert-pod.png**: "Easy Setup" benefit
- **smart-textile-knitting-electrodes.jpg**: "Swiss Textile Innovation" benefit
- **app-live-ecg.png**: "Real-time Monitoring" benefit

### Testimonials Section Enhancement
- **1f227914 (Maria, 58, Zurich)**: Perfect for comfort testimonial
- **doctor-patient.jpeg**: Doctor endorsement visual
- **40ba1015**: Another doctor consultation image for variety

### Medical Credibility Section
**Doctor Board Showcase**:
- dr-frank-ruschitzka-faceshot.jpeg
- pd-dr-med-mehdi-namdar-faceshot.jpg
- dr-mathias-wilhelm-faceshot.jpg
- dr-michiel-winter-faceshot.jpg

**Medical Reports Section**:
- medicalgorythmic screenshots: Show professional reporting
- ABPM report screenshot: Demonstrate comprehensive analysis
- visual-compar-skiin-medical-wearable.png: Comparison infographic

### Technology/MVCP Preview
- MVCP screenshots: Brief preview without full section
- consultation-mvcp.jpg: Doctor using portal

## Implementation Plan

### Phase 1: Core Components (4 hours)
1. Create ProductSection component with 8 benefit cards
2. Create NumbersSection with 4 metrics
3. Create TechCarousel for data flow
4. Add medical advisors showcase

### Phase 2: Component Integration (3 hours)
1. Import and adapt Testimonials from classic
2. Import and enhance FAQ from classic
3. Update CTA section with v7.2 messaging
4. Add comfort showcase with Maria testimonial

### Phase 3: Visual Assets (2 hours)
1. Integrate all doctor images in advisors section
2. Add product images to benefits
3. Add medical reports preview
4. Optimize image loading and responsive display

### Phase 4: Polish & Testing (2 hours)
1. Ensure all v7.2 copy requirements met
2. Test A/B variants
3. Verify mobile responsiveness
4. Performance optimization

## Priority Actions

### Immediate (P0)
1. Create missing ProductSection with visual assets
2. Create NumbersSection for key metrics
3. Add medical advisors showcase with images

### High Priority (P1)
1. Integrate testimonials with comfort image
2. Add TechCarousel component
3. Create medical reports preview section

### Medium Priority (P2)
1. Enhance FAQ with medical questions
2. Add MVCP preview (not full section)
3. Optimize visual asset loading

## Success Metrics
- All v7.2 required sections present
- All provided visual assets strategically placed
- Improved conversion through visual proof
- Professional medical credibility established
- Comfort and ease of use visually demonstrated

## Next Steps
1. Update planning.md with implementation phases
2. Create tasks in todo.md for each component
3. Begin implementation following priority order
4. Test each section against v7.2 specifications