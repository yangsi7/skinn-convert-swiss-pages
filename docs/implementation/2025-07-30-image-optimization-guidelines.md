# Image Optimization Guidelines
VERSION: 1.0
CREATED: 2025-07-30
STATUS: Active

## Overview

This document provides comprehensive guidelines for optimizing images in the SKIIN Switzerland marketing website to achieve performance targets while maintaining visual quality.

## Performance Targets

- **LCP (Largest Contentful Paint)**: < 2.5s
- **Total Page Weight**: < 2MB
- **Image Formats**: WebP with fallback to original format
- **Responsive Sizes**: 375px, 768px, 1024px, 1440px, 1920px

## Image Optimization Process

### 1. Running the Optimization Script

```bash
npm run optimize:images
```

This script:
- Generates WebP versions of all images
- Creates responsive sizes for each image
- Maintains original format as fallback
- Outputs to `/public/assets/images/optimized/`

### 2. Using the ResponsiveImage Component

For standard images:
```tsx
import { ResponsiveImage } from '@/components/ui/responsive-image';

<ResponsiveImage
  src="/assets/images/your-image.jpg"
  alt="Descriptive alt text"
  loading="lazy"
  sizes="(max-width: 768px) 100vw, 50vw"
/>
```

For hero/above-fold images:
```tsx
import { HeroImage } from '@/components/ui/responsive-image';

<HeroImage
  src="/assets/images/hero-image.jpg"
  alt="Hero image description"
  sizes="(max-width: 768px) 100vw, 50vw"
/>
```

### 3. Image Loading Strategies

#### Eager Loading (Above the Fold)
- Hero images
- Product badges in hero section
- First visible statistics card
- Navigation logos

#### Lazy Loading (Below the Fold)
- Statistics section images
- Product section images
- Testimonial images
- Process flow images
- All other content images

### 4. Size Guidelines

| Image Type | Max Dimensions | Quality | Format |
|------------|----------------|---------|---------|
| Hero Images | 1920x1080 | 85% | WebP/JPG |
| Product Images | 800x800 | 85% | WebP/PNG |
| Icons/Logos | 200x200 | 90% | WebP/PNG |
| Thumbnails | 400x400 | 85% | WebP/JPG |
| Team Photos | 600x600 | 85% | WebP/JPG |

### 5. Responsive Breakpoints

```css
/* Mobile First Approach */
375px  - Mobile phones
768px  - Tablets
1024px - Small laptops
1440px - Desktops
1920px - Large screens
```

### 6. Performance Monitoring

Run performance tests regularly:
```bash
npm run perf:measure
```

This generates a report at `/public/assets/images/optimized/performance-report.json`

## Best Practices

### DO:
- ✅ Always provide descriptive alt text
- ✅ Use appropriate `sizes` attribute for responsive images
- ✅ Optimize images before adding to repository
- ✅ Use `loading="lazy"` for below-fold images
- ✅ Test on slow 3G connections
- ✅ Provide aspect ratio to prevent layout shifts

### DON'T:
- ❌ Use images larger than 2MB
- ❌ Forget WebP fallbacks
- ❌ Use inline base64 for large images
- ❌ Load all images eagerly
- ❌ Ignore Core Web Vitals impact

## Implementation Checklist

- [ ] Run optimization script on new images
- [ ] Replace `<img>` tags with `<ResponsiveImage>`
- [ ] Set appropriate loading strategy
- [ ] Define sizes attribute correctly
- [ ] Test on multiple devices
- [ ] Verify WebP support
- [ ] Check performance metrics
- [ ] Update image inventory

## Gradient Optimization

To reduce paint complexity:

1. **Simplify gradients**: Use 2-color gradients instead of multi-stop
2. **Use CSS transforms**: For hover effects instead of changing gradients
3. **Add will-change**: Only for elements that will animate
4. **Avoid gradient animations**: Use opacity transitions instead

Example:
```css
/* Good - Simple gradient */
.card {
  background: linear-gradient(135deg, var(--primary), var(--accent));
  transition: transform 300ms ease;
}

.card:hover {
  transform: translateY(-2px);
}

/* Avoid - Complex animated gradient */
.card {
  background: linear-gradient(
    135deg,
    var(--color1) 0%,
    var(--color2) 25%,
    var(--color3) 50%,
    var(--color4) 75%,
    var(--color5) 100%
  );
  animation: gradient-shift 3s infinite;
}
```

## Monitoring Tools

1. **Chrome DevTools**:
   - Network tab for image sizes
   - Performance tab for LCP
   - Coverage tab for unused CSS

2. **Lighthouse**:
   - Run via DevTools or CLI
   - Focus on Performance score
   - Check Opportunities section

3. **WebPageTest**:
   - Test from different locations
   - Verify image optimization
   - Check repeat view performance

## Troubleshooting

### Images not loading
- Check if optimization script was run
- Verify file paths in ResponsiveImage component
- Check browser console for 404 errors

### Poor LCP scores
- Ensure hero images use `loading="eager"`
- Preload critical images
- Reduce hero image file size

### Layout shifts
- Add aspect ratio to images
- Use skeleton loaders
- Define image dimensions

## Future Improvements

1. **CDN Integration**: Serve optimized images from CDN
2. **AVIF Support**: Add next-gen format when browser support improves
3. **Smart Cropping**: Implement face detection for better mobile crops
4. **Progressive Enhancement**: Add blur-up placeholders

## Resources

- [Web.dev Image Optimization](https://web.dev/fast/#optimize-your-images)
- [Core Web Vitals](https://web.dev/vitals/)
- [Responsive Images Guide](https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images)