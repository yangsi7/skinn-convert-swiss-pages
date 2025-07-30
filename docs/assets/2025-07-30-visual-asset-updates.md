# Visual Asset Updates - Component Consolidation
VERSION: 1.0
CREATED: 2025-07-30
PURPOSE: Document visual asset changes during component consolidation

## Assets Used in Updated Components

### Care360Technology Component
1. **Primary Image**: `/assets/images/40ba1015-d4f2-4e38-a22e-d479e1c983f6.png`
   - Description: Doctor consultation showing cardiac assessment
   - Usage: Main visual showcase for home Holter study
   - Position: Right side of main content grid

2. **Secondary Image**: `/assets/images/app-live-ecg.png`
   - Description: SKIIN App real-time monitoring
   - Usage: Floating preview showing app interface
   - Position: Bottom-left overlay on primary image (desktop only)

### SKIINAdvantage Component (Existing)
1. `/assets/images/product/smart-textile-knitting-electrodes.jpg`
   - Revolutionary Myant Technology section
   
2. `/assets/images/product/wear-skiin-man-band-insert-pod.png`
   - Why SKIIN Leads section
   
3. `/assets/images/product/skiin-your-second-skin.png`
   - Comfort That Changes Everything section

### Hero Section (Preserved)
- Real-time ECG badge remains in place (lines 180-186)
- Uses Activity icon from lucide-react
- Gradient background with violet colors

## Component Status

### Active Components
- SKIINAdvantage - Fully functional with 3 product images
- Care360Technology - Redesigned with home Holter focus
- Real-time ECG badge - Preserved in hero section

### Commented Out Components
- ComfortShowcase - Content merged into SKIINAdvantage
- TechCarousel - Technology covered in Care360Technology
- MVCPPreview - Removed from homepage per requirements

## Notes
- All images use lazy loading
- No hardcoded pixel values or colors
- Proper alt text provided for accessibility
- Images optimized for web performance