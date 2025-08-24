# Next.js/Vite Performance Optimization Standards

**Research ID:** RCC-002-RS-001-C  
**Date:** 2025-08-22  
**Domain:** Frontend Standards - Performance Optimization  
**Status:** Complete  

## Executive Summary

This document provides comprehensive performance optimization standards for the SKIIN Switzerland healthcare application, focusing on Vite bundle optimization, code splitting patterns, Core Web Vitals targets (LCP <2.5s, CLS <0.1, FID <100ms), caching strategies, and development vs production configurations for optimal healthcare application performance.

## 1. Core Web Vitals Targets and Monitoring

### 1.1 Performance Targets

```typescript
// Performance budget configuration
export const PERFORMANCE_BUDGETS = {
  // Core Web Vitals - Healthcare application targets
  LCP_TARGET: 2500, // Largest Contentful Paint < 2.5s
  FID_TARGET: 100,  // First Input Delay < 100ms 
  CLS_TARGET: 0.1,  // Cumulative Layout Shift < 0.1
  FCP_TARGET: 1800, // First Contentful Paint < 1.8s
  TTFB_TARGET: 800, // Time to First Byte < 800ms
  
  // Bundle size limits
  MAIN_BUNDLE_MAX: 250000,    // 250KB main bundle
  VENDOR_BUNDLE_MAX: 500000,  // 500KB vendor bundle
  CHUNK_SIZE_WARNING: 100000, // 100KB chunk warning
  
  // Healthcare-specific targets
  FORM_INTERACTION_MAX: 50,   // Form responsiveness < 50ms
  ELIGIBILITY_CALC_MAX: 100,  // Eligibility calculation < 100ms
  PAGE_TRANSITION_MAX: 300    // Page transitions < 300ms
} as const;
```

### 1.2 Web Vitals Monitoring

```typescript
// Web Vitals measurement setup
import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';

interface PerformanceMetrics {
  name: string;
  value: number;
  rating: 'good' | 'needs-improvement' | 'poor';
  timestamp: number;
  url: string;
  userAgent: string;
}

function sendToAnalytics(metric: PerformanceMetrics) {
  // Healthcare-compliant analytics
  if (process.env.NODE_ENV === 'production') {
    // Send to monitoring service
    fetch('/api/analytics/performance', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(metric)
    });
  }
}

// Core Web Vitals monitoring
export function initPerformanceMonitoring() {
  getCLS(sendToAnalytics);
  getFID(sendToAnalytics);
  getFCP(sendToAnalytics);
  getLCP(sendToAnalytics);
  getTTFB(sendToAnalytics);
}
```

## 2. Vite Bundle Optimization

### 2.1 Vite Configuration for Performance

```typescript
// vite.config.ts - Optimized for healthcare application
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { splitVendorChunkPlugin } from 'vite';
import { visualizer } from 'rollup-plugin-visualizer';

export default defineConfig({
  plugins: [
    react(),
    splitVendorChunkPlugin(),
    visualizer({
      filename: 'dist/stats.html',
      open: true,
      gzipSize: true
    })
  ],
  
  build: {
    // Performance optimizations
    target: 'es2022',
    minify: 'esbuild',
    cssMinify: true,
    sourcemap: process.env.NODE_ENV === 'development',
    
    // Bundle splitting strategy
    rollupOptions: {
      output: {
        manualChunks: {
          // Healthcare-specific chunking
          'healthcare-forms': [
            './src/components/forms/EligibilityChecker',
            './src/components/forms/InsuranceForm',
            './src/components/forms/PatientForm'
          ],
          'ui-components': [
            './src/components/ui/button',
            './src/components/ui/input',
            './src/components/ui/card',
            './src/components/ui/dialog'
          ],
          'utils': [
            './src/utils/validation',
            './src/utils/formatting',
            './src/utils/calculations'
          ],
          'swiss-healthcare': [
            './src/services/swissHealthcare',
            './src/data/swissInsurance',
            './src/types/swiss-healthcare'
          ]
        },
        
        // Chunk naming for better caching
        chunkFileNames: (chunkInfo) => {
          const facadeModuleId = chunkInfo.facadeModuleId
            ? chunkInfo.facadeModuleId.split('/').pop()?.replace('.tsx', '').replace('.ts', '')
            : 'unknown';
          return `js/${facadeModuleId}-[hash].js`;
        },
        
        assetFileNames: (assetInfo) => {
          const extType = assetInfo.name?.split('.').at(-1) || '';
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
            return `images/[name]-[hash][extname]`;
          }
          if (/css/i.test(extType)) {
            return `css/[name]-[hash][extname]`;
          }
          return `assets/[name]-[hash][extname]`;
        }
      }
    },
    
    // Optimization settings
    chunkSizeWarningLimit: PERFORMANCE_BUDGETS.CHUNK_SIZE_WARNING / 1000 // Convert to KB
  },
  
  // Development optimizations
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react-router-dom',
      '@tanstack/react-query'
    ],
    exclude: ['@vite/client', '@vite/env']
  },
  
  server: {
    host: true,
    port: 8080,
    strictPort: true
  }
});
```

### 2.2 Tree Shaking and Dead Code Elimination

```typescript
// ✅ Recommended: Optimal imports for tree shaking
// Good - Named imports
import { Button } from '@/components/ui/button';
import { validateEmail, formatPhoneNumber } from '@/utils/validation';

// Good - Direct imports
import Button from '@/components/ui/button/Button';

// ❌ Avoid - Default imports from barrel files
import * as utils from '@/utils'; // Imports everything

// ✅ Healthcare-specific tree shaking
// utils/swiss-healthcare.ts
export const validateAHVNumber = (ahv: string): boolean => {
  // Implementation
  return true;
};

export const formatSwissPhoneNumber = (phone: string): string => {
  // Implementation
  return phone;
};

export const getCantonFromZip = (zip: string): string => {
  // Implementation
  return 'ZH';
};

// Component using tree-shaken utilities
import { validateAHVNumber } from '@/utils/swiss-healthcare';
// Only validateAHVNumber is bundled, other functions are tree-shaken
```

### 2.3 Bundle Analysis and Monitoring

```typescript
// Bundle analysis configuration
export const bundleAnalysisConfig = {
  // Size limits for different chunk types
  limits: {
    vendor: PERFORMANCE_BUDGETS.VENDOR_BUNDLE_MAX,
    main: PERFORMANCE_BUDGETS.MAIN_BUNDLE_MAX,
    chunks: PERFORMANCE_BUDGETS.CHUNK_SIZE_WARNING
  },
  
  // Monitor these dependencies for size changes
  watchDependencies: [
    'react',
    'react-dom',
    'react-router-dom',
    '@tanstack/react-query',
    'framer-motion',
    'date-fns',
    'zod'
  ],
  
  // Bundle size reporting
  reportThreshold: 10000 // Report chunks > 10KB
};

// CI/CD bundle size check
export function checkBundleSizes(buildStats: any) {
  const oversizedChunks = buildStats.chunks.filter(
    chunk => chunk.size > bundleAnalysisConfig.limits.chunks
  );
  
  if (oversizedChunks.length > 0) {
    console.warn('Oversized chunks detected:', oversizedChunks);
    process.exit(1);
  }
}
```

## 3. Code Splitting Patterns

### 3.1 Route-Based Code Splitting

```typescript
// ✅ Recommended: Strategic route splitting
import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

// Lazy load major routes
const HomePage = lazy(() => import('@/pages/HomePage'));
const EligibilityFlow = lazy(() => import('@/pages/EligibilityFlow'));
const PatientDashboard = lazy(() => import('@/pages/PatientDashboard'));
const InsuranceInfo = lazy(() => import('@/pages/InsuranceInfo'));

// Loading components for better UX
const RouteLoader = ({ children }: { children: string }) => (
  <div className="flex items-center justify-center min-h-[400px]">
    <div className="flex flex-col items-center gap-4">
      <div className="animate-spin h-8 w-8 border-2 border-primary border-t-transparent rounded-full" />
      <p className="text-muted-foreground">Loading {children}...</p>
    </div>
  </div>
);

export function AppRouter() {
  return (
    <Routes>
      <Route 
        path="/" 
        element={
          <Suspense fallback={<RouteLoader>Home</RouteLoader>}>
            <HomePage />
          </Suspense>
        } 
      />
      <Route 
        path="/eligibility" 
        element={
          <Suspense fallback={<RouteLoader>Eligibility Check</RouteLoader>}>
            <EligibilityFlow />
          </Suspense>
        } 
      />
      <Route 
        path="/dashboard" 
        element={
          <Suspense fallback={<RouteLoader>Dashboard</RouteLoader>}>
            <PatientDashboard />
          </Suspense>
        } 
      />
    </Routes>
  );
}
```

### 3.2 Feature-Based Code Splitting

```typescript
// ✅ Recommended: Split by features, not just routes
import { lazy } from 'react';

// Healthcare-specific feature splitting
const EligibilityChecker = lazy(() => 
  import('@/components/forms/EligibilityChecker').then(module => ({
    default: module.EligibilityChecker
  }))
);

const InsuranceValidator = lazy(() =>
  import('@/components/insurance/InsuranceValidator')
);

const SymptomTracker = lazy(() =>
  import('@/components/medical/SymptomTracker')
);

// Conditional loading based on user type
function PatientDashboard({ userType }: { userType: 'patient' | 'doctor' }) {
  return (
    <div>
      <h1>Dashboard</h1>
      
      {/* Only load for patients */}
      {userType === 'patient' && (
        <Suspense fallback={<div>Loading eligibility checker...</div>}>
          <EligibilityChecker />
        </Suspense>
      )}
      
      {/* Only load when needed */}
      <Suspense fallback={<div>Loading insurance tools...</div>}>
        <InsuranceValidator />
      </Suspense>
    </div>
  );
}
```

### 3.3 Dynamic Imports for Heavy Libraries

```typescript
// ✅ Recommended: Dynamic imports for optional features
async function loadChartLibrary() {
  const { Chart, registerables } = await import('chart.js');
  Chart.register(...registerables);
  return Chart;
}

async function loadDatePicker() {
  const [
    { default: DatePicker },
    { registerLocale }
  ] = await Promise.all([
    import('react-datepicker'),
    import('react-datepicker/dist/locale')
  ]);
  
  // Register Swiss locales
  registerLocale('de-CH', (await import('date-fns/locale/de')).default);
  registerLocale('fr-CH', (await import('date-fns/locale/fr')).default);
  registerLocale('it-CH', (await import('date-fns/locale/it')).default);
  
  return DatePicker;
}

// Component using dynamic imports
function HealthMetricsChart() {
  const [Chart, setChart] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);
  
  const loadChart = async () => {
    setIsLoading(true);
    try {
      const ChartClass = await loadChartLibrary();
      setChart(ChartClass);
    } catch (error) {
      console.error('Failed to load chart library:', error);
    } finally {
      setIsLoading(false);
    }
  };
  
  if (!Chart) {
    return (
      <div className="chart-placeholder">
        <button onClick={loadChart} disabled={isLoading}>
          {isLoading ? 'Loading Chart...' : 'Load Health Metrics'}
        </button>
      </div>
    );
  }
  
  return <canvas ref={chartRef} />;
}
```

## 4. Caching Strategies

### 4.1 Browser Caching Configuration

```typescript
// HTTP cache headers configuration
export const cacheHeaders = {
  // Static assets - long cache
  static: {
    'Cache-Control': 'public, max-age=31536000, immutable', // 1 year
    'Expires': new Date(Date.now() + 31536000000).toUTCString()
  },
  
  // HTML - short cache with validation
  html: {
    'Cache-Control': 'public, max-age=300, must-revalidate', // 5 minutes
    'ETag': 'generated-etag'
  },
  
  // API responses - strategic caching
  api: {
    // Swiss insurance data - cache for 1 hour
    insurance: {
      'Cache-Control': 'public, max-age=3600, stale-while-revalidate=86400'
    },
    
    // Patient data - no cache
    patient: {
      'Cache-Control': 'no-store, must-revalidate',
      'Pragma': 'no-cache'
    },
    
    // Eligibility rules - cache for 6 hours
    eligibility: {
      'Cache-Control': 'public, max-age=21600, stale-while-revalidate=43200'
    }
  }
};
```

### 4.2 Service Worker Caching

```typescript
// sw.ts - Service worker for healthcare app
const CACHE_NAME = 'skiin-healthcare-v1';
const RUNTIME_CACHE = 'skiin-runtime-v1';

// Critical resources to cache immediately
const PRECACHE_RESOURCES = [
  '/',
  '/manifest.json',
  '/offline.html',
  // Critical CSS and JS
  ...self.__WB_MANIFEST // Workbox will populate this
];

// Cache strategies for different resource types
const cacheStrategies = {
  // HTML pages - Network first with cache fallback
  pages: {
    strategy: 'NetworkFirst',
    options: {
      cacheName: 'pages-cache',
      networkTimeoutSeconds: 3,
      cacheKeyWillBeUsed: async ({ request }) => {
        // Remove query params for caching
        const url = new URL(request.url);
        url.search = '';
        return url.href;
      }
    }
  },
  
  // Static assets - Cache first
  static: {
    strategy: 'CacheFirst',
    options: {
      cacheName: 'static-cache',
      expiration: {
        maxEntries: 100,
        maxAgeSeconds: 30 * 24 * 60 * 60 // 30 days
      }
    }
  },
  
  // API calls - Network first with strategic caching
  api: {
    strategy: 'NetworkFirst',
    options: {
      cacheName: 'api-cache',
      networkTimeoutSeconds: 2,
      expiration: {
        maxEntries: 50,
        maxAgeSeconds: 5 * 60 // 5 minutes
      }
    }
  }
};

// Healthcare-specific offline handling
self.addEventListener('fetch', event => {
  const { request } = event;
  
  // Handle healthcare form submissions offline
  if (request.method === 'POST' && request.url.includes('/api/eligibility')) {
    event.respondWith(handleOfflineFormSubmission(request));
    return;
  }
  
  // Apply appropriate caching strategy
  if (request.destination === 'document') {
    event.respondWith(handlePageRequest(request));
  } else if (request.url.includes('/api/')) {
    event.respondWith(handleApiRequest(request));
  } else {
    event.respondWith(handleStaticRequest(request));
  }
});
```

### 4.3 Memory Caching and State Management

```typescript
// ✅ Recommended: React Query for intelligent caching
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // Healthcare-specific cache configuration
      staleTime: 5 * 60 * 1000, // 5 minutes
      cacheTime: 30 * 60 * 1000, // 30 minutes
      retry: (failureCount, error) => {
        // Don't retry on authentication errors
        if (error instanceof Error && error.message.includes('401')) {
          return false;
        }
        return failureCount < 3;
      },
      refetchOnWindowFocus: false,
      refetchOnReconnect: true
    },
    mutations: {
      retry: false // Don't retry mutations by default
    }
  }
});

// Healthcare-specific query keys
export const queryKeys = {
  all: ['skiin'] as const,
  eligibility: () => [...queryKeys.all, 'eligibility'] as const,
  insurance: (providerId: string) => [...queryKeys.all, 'insurance', providerId] as const,
  patient: (patientId: string) => [...queryKeys.all, 'patient', patientId] as const,
  symptoms: () => [...queryKeys.all, 'symptoms'] as const,
  riskFactors: () => [...queryKeys.all, 'risk-factors'] as const
};

// Cached queries with appropriate strategies
export function useEligibilityData(patientId: string) {
  return useQuery({
    queryKey: [...queryKeys.eligibility(), patientId],
    queryFn: () => fetchEligibilityData(patientId),
    staleTime: 2 * 60 * 1000, // 2 minutes (eligibility changes quickly)
    cacheTime: 5 * 60 * 1000,  // 5 minutes
    enabled: !!patientId
  });
}

export function useSwissInsuranceProviders() {
  return useQuery({
    queryKey: [...queryKeys.insurance('providers')],
    queryFn: fetchSwissInsuranceProviders,
    staleTime: 24 * 60 * 60 * 1000, // 24 hours (static data)
    cacheTime: 7 * 24 * 60 * 60 * 1000 // 7 days
  });
}
```

## 5. Image and Asset Optimization

### 5.1 Image Optimization Strategy

```typescript
// Image optimization configuration
export const imageOptimization = {
  // Supported formats in order of preference
  formats: ['avif', 'webp', 'png', 'jpg'],
  
  // Responsive breakpoints for healthcare UI
  breakpoints: {
    mobile: 375,
    tablet: 768,
    desktop: 1200,
    xl: 1440
  },
  
  // Quality settings
  quality: {
    avif: 50,
    webp: 75,
    jpg: 80,
    png: 90
  },
  
  // Healthcare-specific image categories
  categories: {
    // Medical illustrations
    medical: {
      sizes: [400, 800, 1200],
      quality: 90, // High quality for medical content
      format: ['webp', 'png']
    },
    
    // Team photos
    team: {
      sizes: [150, 300, 600],
      quality: 80,
      format: ['avif', 'webp', 'jpg']
    },
    
    // UI graphics
    ui: {
      sizes: [100, 200, 400],
      quality: 75,
      format: ['avif', 'webp', 'svg']
    }
  }
};

// Responsive image component
interface ResponsiveImageProps {
  src: string;
  alt: string;
  category: keyof typeof imageOptimization.categories;
  className?: string;
  priority?: boolean;
}

export function ResponsiveImage({ 
  src, 
  alt, 
  category, 
  className,
  priority = false 
}: ResponsiveImageProps) {
  const { sizes, format } = imageOptimization.categories[category];
  
  const generateSrcSet = (fmt: string) => {
    return sizes
      .map(size => `${src}?f=${fmt}&w=${size} ${size}w`)
      .join(', ');
  };
  
  return (
    <picture>
      {format.map(fmt => (
        <source
          key={fmt}
          type={`image/${fmt}`}
          srcSet={generateSrcSet(fmt)}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      ))}
      <img
        src={`${src}?f=jpg&w=${sizes[0]}`}
        alt={alt}
        className={className}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
      />
    </picture>
  );
}
```

### 5.2 Asset Preloading Strategy

```typescript
// Critical resource preloading
export function preloadCriticalAssets() {
  const criticalAssets = [
    // Fonts
    { href: '/fonts/IBMPlexSans-Regular.woff2', as: 'font', type: 'font/woff2' },
    { href: '/fonts/IBMPlexSans-Medium.woff2', as: 'font', type: 'font/woff2' },
    
    // Critical images
    { href: '/images/hero-medical-device.avif', as: 'image', type: 'image/avif' },
    { href: '/images/swiss-flag.svg', as: 'image', type: 'image/svg+xml' },
    
    // Critical scripts
    { href: '/js/healthcare-forms-[hash].js', as: 'script' }
  ];
  
  criticalAssets.forEach(asset => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = asset.href;
    link.as = asset.as;
    if (asset.type) link.type = asset.type;
    if (asset.as === 'font') link.crossOrigin = 'anonymous';
    document.head.appendChild(link);
  });
}

// DNS prefetching for external services
export function prefetchDNS() {
  const domains = [
    'https://api.stripe.com',
    'https://fonts.googleapis.com',
    'https://www.google-analytics.com'
  ];
  
  domains.forEach(domain => {
    const link = document.createElement('link');
    link.rel = 'dns-prefetch';
    link.href = domain;
    document.head.appendChild(link);
  });
}
```

## 6. Development vs Production Configurations

### 6.1 Environment-Specific Optimizations

```typescript
// Development configuration
const developmentConfig = {
  // Fast refresh and HMR
  hmr: {
    port: 8081,
    host: 'localhost'
  },
  
  // Source maps for debugging
  sourcemap: 'eval-source-map',
  
  // Minimal optimizations for speed
  minify: false,
  cssMinify: false,
  
  // Bundle analysis in development
  analyze: process.env.ANALYZE_BUNDLE === 'true',
  
  // Development-only features
  devtools: true,
  reactStrictMode: true,
  
  // Fast dependency optimization
  optimizeDeps: {
    force: true // Force pre-bundle in development
  }
};

// Production configuration
const productionConfig = {
  // Full optimization
  minify: 'esbuild',
  cssMinify: 'esbuild',
  
  // Source maps for monitoring
  sourcemap: 'hidden',
  
  // Bundle splitting and optimization
  rollupOptions: {
    output: {
      manualChunks: productionChunks,
      chunkFileNames: 'js/[name]-[hash].js',
      assetFileNames: 'assets/[name]-[hash].[ext]'
    }
  },
  
  // Production-only optimizations
  terserOptions: {
    compress: {
      drop_console: true,
      drop_debugger: true,
      pure_funcs: ['console.log', 'console.info']
    }
  },
  
  // Asset optimization
  assetsInlineLimit: 4096,
  
  // Performance budgets enforcement
  chunkSizeWarningLimit: PERFORMANCE_BUDGETS.CHUNK_SIZE_WARNING / 1000
};
```

### 6.2 Build Pipeline Optimization

```typescript
// CI/CD optimized build script
export async function optimizedBuild() {
  const startTime = Date.now();
  
  console.log('🏗️  Starting optimized build for healthcare app...');
  
  // Step 1: Clean previous builds
  await cleanBuildDirectory();
  
  // Step 2: Build with production config
  const buildResult = await build(productionConfig);
  
  // Step 3: Analyze bundle
  const bundleStats = await analyzeBundleSize(buildResult);
  
  // Step 4: Performance validation
  await validatePerformanceBudgets(bundleStats);
  
  // Step 5: Generate performance report
  await generatePerformanceReport({
    buildTime: Date.now() - startTime,
    bundleStats,
    optimizations: appliedOptimizations
  });
  
  console.log('✅ Build completed successfully');
}

// Performance budget validation
async function validatePerformanceBudgets(stats: BuildStats) {
  const failures = [];
  
  if (stats.mainBundle > PERFORMANCE_BUDGETS.MAIN_BUNDLE_MAX) {
    failures.push(`Main bundle size ${stats.mainBundle} exceeds limit ${PERFORMANCE_BUDGETS.MAIN_BUNDLE_MAX}`);
  }
  
  if (stats.vendorBundle > PERFORMANCE_BUDGETS.VENDOR_BUNDLE_MAX) {
    failures.push(`Vendor bundle size ${stats.vendorBundle} exceeds limit ${PERFORMANCE_BUDGETS.VENDOR_BUNDLE_MAX}`);
  }
  
  const oversizedChunks = stats.chunks.filter(
    chunk => chunk.size > PERFORMANCE_BUDGETS.CHUNK_SIZE_WARNING
  );
  
  if (oversizedChunks.length > 0) {
    failures.push(`${oversizedChunks.length} chunks exceed size warning threshold`);
  }
  
  if (failures.length > 0) {
    console.error('❌ Performance budget violations:', failures);
    process.exit(1);
  }
  
  console.log('✅ All performance budgets met');
}
```

## 7. Healthcare-Specific Performance Considerations

### 7.1 Medical Form Performance

```typescript
// Optimized form performance for healthcare
export function useOptimizedFormPerformance() {
  // Debounced validation for better UX
  const debouncedValidation = useCallback(
    debounce((field: string, value: any) => {
      validateField(field, value);
    }, 300),
    []
  );
  
  // Memoized form state to prevent unnecessary re-renders
  const formState = useMemo(() => ({
    fields,
    errors,
    isValid,
    isDirty
  }), [fields, errors, isValid, isDirty]);
  
  // Virtual scrolling for long forms
  const virtualizeOptions = useMemo(() => ({
    height: 600,
    itemHeight: 60,
    overscan: 5
  }), []);
  
  return {
    formState,
    debouncedValidation,
    virtualizeOptions
  };
}

// Performance-optimized eligibility calculation
export function useEligibilityCalculation(
  symptoms: Symptom[],
  riskFactors: RiskFactor[]
) {
  const calculation = useMemo(() => {
    const startTime = performance.now();
    
    const result = calculateEligibility(symptoms, riskFactors);
    
    const endTime = performance.now();
    const calculationTime = endTime - startTime;
    
    // Log performance for monitoring
    if (calculationTime > PERFORMANCE_BUDGETS.ELIGIBILITY_CALC_MAX) {
      console.warn(`Eligibility calculation took ${calculationTime}ms (target: ${PERFORMANCE_BUDGETS.ELIGIBILITY_CALC_MAX}ms)`);
    }
    
    return result;
  }, [symptoms, riskFactors]);
  
  return calculation;
}
```

### 7.2 Swiss Healthcare Data Loading

```typescript
// Optimized Swiss insurance data loading
export function useSwissHealthcareData() {
  // Progressive loading of Swiss healthcare data
  const { data: cantons } = useQuery({
    queryKey: ['swiss-cantons'],
    queryFn: () => import('@/data/swiss-cantons.json'),
    staleTime: Infinity, // Static data
    cacheTime: Infinity
  });
  
  const { data: insuranceProviders } = useQuery({
    queryKey: ['swiss-insurance-providers'],
    queryFn: () => import('@/data/swiss-insurance-providers.json'),
    staleTime: 24 * 60 * 60 * 1000, // 24 hours
    enabled: !!cantons // Load after cantons
  });
  
  const { data: medicalCodes } = useQuery({
    queryKey: ['swiss-medical-codes'],
    queryFn: () => import('@/data/swiss-medical-codes.json'),
    staleTime: 7 * 24 * 60 * 60 * 1000, // 7 days
    enabled: !!insuranceProviders
  });
  
  return {
    cantons,
    insuranceProviders,
    medicalCodes,
    isLoading: !cantons || !insuranceProviders || !medicalCodes
  };
}
```

## Implementation Guidelines

### Phase 1: Performance Foundation (Week 1)
1. **Core Web Vitals Setup**: Implement monitoring and measurement
2. **Bundle Optimization**: Configure Vite for optimal chunking
3. **Critical Path**: Identify and optimize critical rendering path
4. **Performance Budgets**: Enforce size limits in CI/CD

### Phase 2: Caching Strategy (Week 2)
1. **Browser Caching**: Implement HTTP cache headers
2. **Service Worker**: Deploy caching strategies
3. **React Query**: Optimize data fetching and caching
4. **Asset Optimization**: Implement responsive images and preloading

### Phase 3: Advanced Optimizations (Week 3)
1. **Code Splitting**: Implement feature-based splitting
2. **Dynamic Imports**: Add conditional loading
3. **Healthcare Forms**: Optimize medical form performance
4. **Swiss Data**: Optimize Swiss healthcare data loading

### Quality Gates
- LCP < 2.5s on 3G connection
- CLS < 0.1 across all pages
- FID < 100ms for form interactions
- Main bundle < 250KB compressed
- All Core Web Vitals in "good" range

### Success Metrics
- 95th percentile LCP < 2.5s
- Healthcare form responsiveness < 50ms
- Bundle size reduction > 30%
- Cache hit rate > 80%
- Zero performance budget violations

---

**Status:** ✅ Complete  
**Next Steps:** Integration with accessibility standards and healthcare compliance requirements