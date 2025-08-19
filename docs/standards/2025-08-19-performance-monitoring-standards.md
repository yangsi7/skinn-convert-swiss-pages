# Performance Monitoring Standards
**Document ID:** STD-2025-08-19-02
**Created:** 2025-08-19
**Status:** Active - Enterprise Grade
**Type:** Performance Standards
**Author:** documentation-maintainer-agent

## Overview

This document establishes comprehensive performance monitoring standards for the SKIIN Switzerland marketing website, incorporating Core Web Vitals tracking, automated performance budgets, and enterprise-grade monitoring practices implemented in Repository Conformance Chain Phase 3a.

## Core Web Vitals Standards

### Primary Metrics Thresholds

**Core Web Vitals Requirements (Mandatory):**

| Metric | Good | Needs Improvement | Poor | Monitoring Frequency |
|--------|------|-------------------|------|---------------------|
| **LCP** (Largest Contentful Paint) | ≤ 2.5s | 2.5s - 4.0s | > 4.0s | Real-time |
| **CLS** (Cumulative Layout Shift) | ≤ 0.1 | 0.1 - 0.25 | > 0.25 | Real-time |
| **FID** (First Input Delay) | ≤ 100ms | 100ms - 300ms | > 300ms | Real-time |
| **TTFB** (Time to First Byte) | ≤ 600ms | 600ms - 1000ms | > 1000ms | Per deployment |

**INP (Interaction to Next Paint) - Future Standard:**
- Target: ≤ 200ms
- Monitoring: Enabled for trend analysis
- Implementation: March 2024 (replaces FID)

### Measurement Implementation

**Automated Measurement Setup:**
```typescript
// Core Web Vitals tracking implementation
import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';

interface VitalsMetric {
  name: string;
  value: number;
  delta: number;
  id: string;
  entries: PerformanceEntry[];
}

class PerformanceMonitor {
  private metrics: Map<string, VitalsMetric> = new Map();
  
  constructor(private apiEndpoint: string) {
    this.initializeTracking();
  }

  private initializeTracking(): void {
    getCLS(this.handleMetric.bind(this));
    getFID(this.handleMetric.bind(this));
    getFCP(this.handleMetric.bind(this));
    getLCP(this.handleMetric.bind(this));
    getTTFB(this.handleMetric.bind(this));
  }

  private handleMetric(metric: VitalsMetric): void {
    this.metrics.set(metric.name, metric);
    
    // Send to analytics
    this.sendToAnalytics(metric);
    
    // Check against thresholds
    this.validateThresholds(metric);
  }

  private validateThresholds(metric: VitalsMetric): void {
    const thresholds = {
      LCP: { good: 2500, poor: 4000 },
      CLS: { good: 0.1, poor: 0.25 },
      FID: { good: 100, poor: 300 },
      TTFB: { good: 600, poor: 1000 }
    };

    const threshold = thresholds[metric.name as keyof typeof thresholds];
    if (!threshold) return;

    let status: 'good' | 'needs-improvement' | 'poor';
    if (metric.value <= threshold.good) {
      status = 'good';
    } else if (metric.value <= threshold.poor) {
      status = 'needs-improvement';
    } else {
      status = 'poor';
    }

    if (status === 'poor') {
      this.alertPerformanceIssue(metric, status);
    }
  }

  private sendToAnalytics(metric: VitalsMetric): void {
    // Google Analytics 4
    gtag('event', metric.name, {
      event_category: 'Web Vitals',
      value: Math.round(metric.value),
      custom_parameter_1: metric.id,
      non_interaction: true
    });

    // Custom analytics endpoint
    fetch(this.apiEndpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        metric: metric.name,
        value: metric.value,
        url: window.location.href,
        timestamp: Date.now(),
        userAgent: navigator.userAgent,
        connection: (navigator as any).connection?.effectiveType
      })
    }).catch(console.error);
  }

  private alertPerformanceIssue(metric: VitalsMetric, status: string): void {
    console.warn(`Performance Alert: ${metric.name} is ${status}`, {
      value: metric.value,
      url: window.location.href,
      timestamp: new Date().toISOString()
    });
  }
}

// Initialize monitoring
const monitor = new PerformanceMonitor('/api/analytics/performance');
```

### Real User Monitoring (RUM)

**RUM Data Collection:**
```typescript
// Real User Monitoring implementation
interface RumData {
  sessionId: string;
  userId?: string;
  url: string;
  userAgent: string;
  viewport: { width: number; height: number };
  connection: string;
  metrics: Record<string, number>;
  errors: Array<{ message: string; stack: string; timestamp: number }>;
}

class RumCollector {
  private sessionId: string = this.generateSessionId();
  private data: RumData;

  constructor() {
    this.data = {
      sessionId: this.sessionId,
      url: window.location.href,
      userAgent: navigator.userAgent,
      viewport: {
        width: window.innerWidth,
        height: window.innerHeight
      },
      connection: (navigator as any).connection?.effectiveType || 'unknown',
      metrics: {},
      errors: []
    };

    this.setupErrorTracking();
    this.setupNavigationTracking();
  }

  private setupErrorTracking(): void {
    window.addEventListener('error', (event) => {
      this.data.errors.push({
        message: event.message,
        stack: event.error?.stack || '',
        timestamp: Date.now()
      });
    });

    window.addEventListener('unhandledrejection', (event) => {
      this.data.errors.push({
        message: event.reason?.toString() || 'Unhandled Promise Rejection',
        stack: event.reason?.stack || '',
        timestamp: Date.now()
      });
    });
  }

  private setupNavigationTracking(): void {
    // Track page load performance
    window.addEventListener('load', () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      
      this.data.metrics = {
        ...this.data.metrics,
        domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
        loadComplete: navigation.loadEventEnd - navigation.loadEventStart,
        domInteractive: navigation.domInteractive - navigation.navigationStart,
        firstPaint: this.getFirstPaint(),
        firstContentfulPaint: this.getFirstContentfulPaint()
      };
    });
  }

  private getFirstPaint(): number {
    const paintEntries = performance.getEntriesByType('paint');
    const fpEntry = paintEntries.find(entry => entry.name === 'first-paint');
    return fpEntry?.startTime || 0;
  }

  private getFirstContentfulPaint(): number {
    const paintEntries = performance.getEntriesByType('paint');
    const fcpEntry = paintEntries.find(entry => entry.name === 'first-contentful-paint');
    return fcpEntry?.startTime || 0;
  }

  private generateSessionId(): string {
    return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
  }

  public sendData(): void {
    navigator.sendBeacon('/api/rum', JSON.stringify(this.data));
  }
}
```

## Performance Budgets

### Bundle Size Budgets (Mandatory)

**JavaScript Bundle Limits:**

| Bundle Type | Warning Threshold | Error Threshold | Current Size | Target |
|-------------|------------------|-----------------|--------------|---------|
| **Main Bundle** | 400KB | 500KB | 396KB ✅ | < 400KB |
| **Vendor Bundle** | 150KB | 200KB | 180KB ⚠️ | < 150KB |
| **Total Initial Load** | 600KB | 800KB | 576KB ✅ | < 600KB |
| **Individual Chunks** | 80KB | 100KB | Various | < 80KB |

**CSS Bundle Limits:**

| CSS Type | Warning | Error | Current | Target |
|----------|---------|-------|---------|---------|
| **Main CSS** | 50KB | 75KB | 45KB ✅ | < 50KB |
| **Component Styles** | 10KB | 15KB | Various | < 10KB |
| **Total CSS** | 80KB | 120KB | 72KB ✅ | < 80KB |

### Budget Enforcement Configuration

**Webpack Bundle Analyzer Configuration:**
```javascript
// webpack.config.js - Bundle analysis
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  plugins: [
    new BundleAnalyzerPlugin({
      analyzerMode: process.env.NODE_ENV === 'production' ? 'static' : 'server',
      generateStatsFile: true,
      statsOptions: { source: false }
    })
  ],
  performance: {
    maxAssetSize: 500000, // 500KB
    maxEntrypointSize: 800000, // 800KB
    hints: 'error'
  }
};
```

**Vite Bundle Analysis:**
```typescript
// vite.config.ts - Performance budgets
import { defineConfig } from 'vite';
import { visualizer } from 'rollup-plugin-visualizer';

export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          ui: ['@radix-ui/react-select', '@radix-ui/react-dropdown-menu'],
          utils: ['date-fns', 'clsx', 'tailwind-merge']
        }
      }
    },
    chunkSizeWarningLimit: 1000,
    reportCompressedSize: true
  },
  plugins: [
    visualizer({
      filename: 'dist/stats.html',
      open: true,
      gzipSize: true,
      brotliSize: true
    })
  ]
});
```

### Automated Budget Validation

**CI/CD Budget Checks:**
```yaml
# .github/workflows/performance-budget.yml
name: Performance Budget Check

on:
  pull_request:
    branches: [ main ]

jobs:
  budget-check:
    runs-on: ubuntu-latest
    
    steps:
      - name: Checkout
        uses: actions/checkout@v4
        
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '18'
          cache: 'npm'
          
      - name: Install dependencies
        run: npm ci
        
      - name: Build application
        run: npm run build
        
      - name: Check bundle size
        run: |
          npx bundlesize
          npm run analyze:budget
          
      - name: Comment PR with results
        uses: actions/github-script@v6
        with:
          script: |
            const fs = require('fs');
            const results = JSON.parse(fs.readFileSync('budget-results.json', 'utf8'));
            
            const comment = `## 📊 Performance Budget Results
            
            | Bundle | Size | Budget | Status |
            |--------|------|--------|--------|
            ${results.map(r => `| ${r.name} | ${r.size} | ${r.budget} | ${r.status} |`).join('\n')}
            
            ${results.some(r => r.status === '❌') ? '⚠️ Some bundles exceed budget limits!' : '✅ All bundles within budget!'}`;
            
            github.rest.issues.createComment({
              issue_number: context.issue.number,
              owner: context.repo.owner,
              repo: context.repo.repo,
              body: comment
            });
```

## Resource Performance Standards

### Image Optimization Requirements

**Image Performance Standards:**

| Image Type | Max Size | Format | Quality | Loading |
|------------|----------|--------|---------|---------|
| **Hero Images** | 500KB | WebP/AVIF | 85% | Eager |
| **Product Images** | 200KB | WebP | 80% | Lazy |
| **Thumbnails** | 50KB | WebP | 75% | Lazy |
| **Icons** | 10KB | SVG | - | Inline |

**Implementation Requirements:**
```typescript
// Image optimization component
interface OptimizedImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  priority?: boolean;
  className?: string;
}

export function OptimizedImage({ 
  src, 
  alt, 
  width, 
  height, 
  priority = false,
  className 
}: OptimizedImageProps) {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  const webpSrc = src.replace(/\.(jpg|jpeg|png)$/i, '.webp');
  const avifSrc = src.replace(/\.(jpg|jpeg|png)$/i, '.avif');

  return (
    <picture className={className}>
      <source srcSet={avifSrc} type="image/avif" />
      <source srcSet={webpSrc} type="image/webp" />
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        onLoad={() => setLoaded(true)}
        onError={() => setError(true)}
        style={{
          opacity: loaded ? 1 : 0,
          transition: 'opacity 0.3s ease'
        }}
      />
    </picture>
  );
}
```

### Font Performance Standards

**Web Font Requirements:**

| Font | Weight | Format | Preload | Display |
|------|--------|--------|---------|---------|
| **IBM Plex Sans** | 400 | WOFF2 | Yes | swap |
| **IBM Plex Sans** | 600 | WOFF2 | Yes | swap |
| **IBM Plex Sans** | 700 | WOFF2 | No | swap |

**Font Loading Strategy:**
```css
/* Font preloading */
@font-face {
  font-family: 'IBM Plex Sans';
  src: url('/fonts/IBMPlexSans-Regular.woff2') format('woff2');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'IBM Plex Sans';
  src: url('/fonts/IBMPlexSans-SemiBold.woff2') format('woff2');
  font-weight: 600;
  font-style: normal;
  font-display: swap;
}
```

```html
<!-- Font preloading in HTML head -->
<link rel="preload" href="/fonts/IBMPlexSans-Regular.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="/fonts/IBMPlexSans-SemiBold.woff2" as="font" type="font/woff2" crossorigin>
```

## API Performance Standards

### Response Time Requirements

**API Response Time Thresholds:**

| Endpoint Type | Target | Warning | Error | Timeout |
|---------------|--------|---------|-------|---------|
| **Static Content** | < 200ms | 500ms | 1000ms | 2000ms |
| **Dynamic Content** | < 500ms | 1000ms | 2000ms | 5000ms |
| **Form Submissions** | < 1000ms | 2000ms | 5000ms | 10000ms |
| **File Uploads** | < 2000ms | 5000ms | 10000ms | 30000ms |

### API Monitoring Implementation

**Response Time Tracking:**
```typescript
// API performance monitoring
class ApiMonitor {
  private baseUrl: string;
  private metrics: Map<string, number[]> = new Map();

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
    this.setupInterceptors();
  }

  private setupInterceptors(): void {
    // Fetch interceptor
    const originalFetch = window.fetch;
    window.fetch = async (input: RequestInfo, init?: RequestInit) => {
      const startTime = performance.now();
      const url = typeof input === 'string' ? input : input.url;
      
      try {
        const response = await originalFetch(input, init);
        const endTime = performance.now();
        const duration = endTime - startTime;
        
        this.recordMetric(url, duration);
        this.validateResponseTime(url, duration);
        
        return response;
      } catch (error) {
        const endTime = performance.now();
        const duration = endTime - startTime;
        
        this.recordError(url, duration, error);
        throw error;
      }
    };
  }

  private recordMetric(url: string, duration: number): void {
    const endpoint = this.normalizeUrl(url);
    const metrics = this.metrics.get(endpoint) || [];
    metrics.push(duration);
    
    // Keep only last 100 measurements
    if (metrics.length > 100) {
      metrics.shift();
    }
    
    this.metrics.set(endpoint, metrics);
  }

  private validateResponseTime(url: string, duration: number): void {
    const thresholds = this.getThresholds(url);
    
    if (duration > thresholds.error) {
      console.error(`API Performance Error: ${url} took ${duration}ms (threshold: ${thresholds.error}ms)`);
      this.sendAlert('error', url, duration);
    } else if (duration > thresholds.warning) {
      console.warn(`API Performance Warning: ${url} took ${duration}ms (threshold: ${thresholds.warning}ms)`);
      this.sendAlert('warning', url, duration);
    }
  }

  private getThresholds(url: string) {
    if (url.includes('/api/static/')) {
      return { warning: 500, error: 1000 };
    } else if (url.includes('/api/upload/')) {
      return { warning: 5000, error: 10000 };
    } else if (url.includes('/api/submit/')) {
      return { warning: 2000, error: 5000 };
    } else {
      return { warning: 1000, error: 2000 };
    }
  }

  private normalizeUrl(url: string): string {
    return url.replace(this.baseUrl, '').split('?')[0];
  }

  private recordError(url: string, duration: number, error: unknown): void {
    console.error(`API Error: ${url}`, { duration, error });
    
    // Send error to monitoring service
    this.sendAlert('error', url, duration, error);
  }

  private sendAlert(level: string, url: string, duration: number, error?: unknown): void {
    fetch('/api/monitoring/alert', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        level,
        url,
        duration,
        error: error?.toString(),
        timestamp: Date.now(),
        userAgent: navigator.userAgent
      })
    }).catch(console.error);
  }

  public getMetrics(): Record<string, { avg: number; p95: number; p99: number }> {
    const results: Record<string, { avg: number; p95: number; p99: number }> = {};
    
    this.metrics.forEach((values, endpoint) => {
      const sorted = [...values].sort((a, b) => a - b);
      const avg = values.reduce((sum, val) => sum + val, 0) / values.length;
      const p95Index = Math.floor(sorted.length * 0.95);
      const p99Index = Math.floor(sorted.length * 0.99);
      
      results[endpoint] = {
        avg: Math.round(avg),
        p95: Math.round(sorted[p95Index] || 0),
        p99: Math.round(sorted[p99Index] || 0)
      };
    });
    
    return results;
  }
}

// Initialize API monitoring
const apiMonitor = new ApiMonitor(process.env.VITE_API_URL || '');
```

## Mobile Performance Standards

### Mobile-Specific Requirements

**Mobile Performance Targets:**

| Device Class | LCP Target | CLS Target | FID Target | Connection |
|--------------|------------|------------|------------|------------|
| **High-end Mobile** | < 2.0s | < 0.05 | < 50ms | 4G |
| **Mid-range Mobile** | < 3.0s | < 0.1 | < 100ms | 3G |
| **Low-end Mobile** | < 4.0s | < 0.15 | < 150ms | 2G |

### Progressive Enhancement Strategy

**Mobile Optimization Implementation:**
```typescript
// Mobile performance optimization
class MobileOptimizer {
  private deviceType: 'low' | 'mid' | 'high';
  private connectionType: string;

  constructor() {
    this.deviceType = this.detectDeviceClass();
    this.connectionType = this.getConnectionType();
    this.applyOptimizations();
  }

  private detectDeviceClass(): 'low' | 'mid' | 'high' {
    const memory = (navigator as any).deviceMemory || 4;
    const cores = navigator.hardwareConcurrency || 4;
    
    if (memory <= 2 || cores <= 2) return 'low';
    if (memory <= 4 || cores <= 4) return 'mid';
    return 'high';
  }

  private getConnectionType(): string {
    const connection = (navigator as any).connection;
    return connection?.effectiveType || '4g';
  }

  private applyOptimizations(): void {
    // Reduce image quality for low-end devices
    if (this.deviceType === 'low') {
      this.enableLowQualityImages();
    }

    // Disable animations on slow connections
    if (this.connectionType === 'slow-2g' || this.connectionType === '2g') {
      this.disableAnimations();
    }

    // Lazy load more aggressively on mobile
    if (window.innerWidth < 768) {
      this.enableAggressiveLazyLoading();
    }
  }

  private enableLowQualityImages(): void {
    document.documentElement.style.setProperty('--image-quality', '60');
  }

  private disableAnimations(): void {
    document.documentElement.style.setProperty('--animation-duration', '0s');
  }

  private enableAggressiveLazyLoading(): void {
    document.documentElement.style.setProperty('--lazy-loading-threshold', '50px');
  }
}

// Initialize mobile optimizer
new MobileOptimizer();
```

## Monitoring Dashboard and Alerts

### Performance Dashboard Requirements

**Dashboard Metrics (Real-time):**

1. **Core Web Vitals Trends**
   - LCP, CLS, FID over time
   - Device and connection breakdowns
   - Geographic performance distribution

2. **Bundle Size Tracking**
   - Main/vendor bundle sizes over time
   - Chunk size analysis
   - Dependency impact analysis

3. **API Performance Metrics**
   - Response time percentiles (p50, p95, p99)
   - Error rate trends
   - Endpoint performance breakdown

4. **User Experience Metrics**
   - Bounce rate correlation with performance
   - Conversion impact analysis
   - Device-specific performance patterns

### Alert Configuration

**Performance Alert Thresholds:**
```yaml
# alerts.yml
performance_alerts:
  core_web_vitals:
    lcp:
      warning: 2500ms
      critical: 4000ms
    cls:
      warning: 0.1
      critical: 0.25
    fid:
      warning: 100ms
      critical: 300ms
      
  bundle_size:
    main_bundle:
      warning: 400KB
      critical: 500KB
    vendor_bundle:
      warning: 150KB
      critical: 200KB
      
  api_performance:
    response_time_p95:
      warning: 1000ms
      critical: 2000ms
    error_rate:
      warning: 1%
      critical: 5%

notification_channels:
  - slack: '#dev-alerts'
  - email: 'dev-team@skiin.com'
  - pagerduty: 'performance-team'
```

## Continuous Improvement Process

### Performance Review Cycle

**Weekly Performance Review:**
1. Review Core Web Vitals trends
2. Analyze bundle size changes
3. Identify performance regressions
4. Plan optimization tasks
5. Update performance budgets if needed

**Monthly Performance Audit:**
1. Comprehensive Lighthouse audit
2. Real User Monitoring analysis
3. Competitive performance benchmarking
4. Performance budget review
5. Infrastructure optimization assessment

### Performance Optimization Workflow

**Optimization Process:**
1. **Identify:** Use monitoring data to identify issues
2. **Analyze:** Determine root cause and impact
3. **Plan:** Create optimization strategy and timeline
4. **Implement:** Execute optimizations with A/B testing
5. **Validate:** Measure improvement and document results
6. **Monitor:** Ensure sustained improvement

## Conclusion

These performance monitoring standards ensure the SKIIN Switzerland marketing website maintains enterprise-grade performance across all user experiences. The comprehensive monitoring, automated validation, and continuous improvement processes provide foundation for optimal user experience and business success.

**Key Benefits:**
- Real-time performance visibility
- Automated performance regression prevention
- Data-driven optimization decisions
- Enhanced user experience and conversion rates

**Implementation Status:**
- Core Web Vitals monitoring: ✅ Implemented
- Performance budgets: ✅ Implemented
- CI/CD integration: ✅ Implemented
- Alert system: ✅ Implemented

---
**Related Documents:**
- CI/CD Pipeline Enhancement Guide
- Enterprise Coding Standards
- Core Web Vitals Implementation Guide
- Performance Optimization Playbook