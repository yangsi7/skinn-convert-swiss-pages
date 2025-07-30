#!/usr/bin/env node

import puppeteer from 'puppeteer';
import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Performance thresholds
const THRESHOLDS = {
  LCP: 2500, // 2.5 seconds
  CLS: 0.1,  // Cumulative Layout Shift
  FID: 100,  // First Input Delay (100ms)
  TTFB: 600, // Time to First Byte (600ms)
  pageWeight: 2 * 1024 * 1024, // 2MB
};

async function runLighthouseTest(url) {
  console.log(`\n🔍 Testing: ${url}`);
  
  const browser = await puppeteer.launch({ 
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  
  try {
    const page = await browser.newPage();
    
    // Set up performance observer
    await page.evaluateOnNewDocument(() => {
      window.performanceMetrics = {
        LCP: 0,
        CLS: 0,
        FID: 0,
        FCP: 0,
        TTFB: 0,
        resources: []
      };
      
      // Observe LCP
      new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        window.performanceMetrics.LCP = lastEntry.startTime;
      }).observe({ entryTypes: ['largest-contentful-paint'] });
      
      // Observe CLS
      let clsValue = 0;
      new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
          }
        }
        window.performanceMetrics.CLS = clsValue;
      }).observe({ entryTypes: ['layout-shift'] });
      
      // Observe FCP
      new PerformanceObserver((list) => {
        const entries = list.getEntries();
        for (const entry of entries) {
          if (entry.name === 'first-contentful-paint') {
            window.performanceMetrics.FCP = entry.startTime;
          }
        }
      }).observe({ entryTypes: ['paint'] });
    });
    
    // Navigate to page
    await page.goto(url, { 
      waitUntil: 'networkidle0',
      timeout: 30000 
    });
    
    // Wait for metrics to stabilize
    await page.waitForTimeout(5000);
    
    // Collect metrics
    const metrics = await page.evaluate(() => {
      const navigation = performance.getEntriesByType('navigation')[0];
      const resources = performance.getEntriesByType('resource');
      
      // Calculate page weight
      let totalSize = 0;
      let imageCount = 0;
      let imageSize = 0;
      const largeImages = [];
      
      resources.forEach(resource => {
        const size = resource.transferSize || 0;
        totalSize += size;
        
        if (resource.name.match(/\.(jpg|jpeg|png|gif|webp)$/i)) {
          imageCount++;
          imageSize += size;
          
          if (size > 500 * 1024) { // Images larger than 500KB
            largeImages.push({
              url: resource.name,
              size: size
            });
          }
        }
      });
      
      return {
        ...window.performanceMetrics,
        TTFB: navigation.responseStart - navigation.requestStart,
        pageWeight: totalSize,
        imageCount,
        imageSize,
        largeImages,
        resourceCount: resources.length
      };
    });
    
    // Analyze results
    const results = {
      url,
      timestamp: new Date().toISOString(),
      metrics,
      passed: true,
      issues: []
    };
    
    // Check thresholds
    if (metrics.LCP > THRESHOLDS.LCP) {
      results.passed = false;
      results.issues.push(`LCP: ${metrics.LCP.toFixed(0)}ms exceeds ${THRESHOLDS.LCP}ms threshold`);
    }
    
    if (metrics.CLS > THRESHOLDS.CLS) {
      results.passed = false;
      results.issues.push(`CLS: ${metrics.CLS.toFixed(3)} exceeds ${THRESHOLDS.CLS} threshold`);
    }
    
    if (metrics.TTFB > THRESHOLDS.TTFB) {
      results.passed = false;
      results.issues.push(`TTFB: ${metrics.TTFB.toFixed(0)}ms exceeds ${THRESHOLDS.TTFB}ms threshold`);
    }
    
    if (metrics.pageWeight > THRESHOLDS.pageWeight) {
      results.passed = false;
      results.issues.push(`Page weight: ${(metrics.pageWeight / 1024 / 1024).toFixed(2)}MB exceeds 2MB threshold`);
    }
    
    // Check for unoptimized images
    if (metrics.largeImages.length > 0) {
      results.issues.push(`Found ${metrics.largeImages.length} images larger than 500KB`);
      metrics.largeImages.forEach(img => {
        console.log(`  ⚠️  ${img.url.split('/').pop()}: ${(img.size / 1024).toFixed(0)}KB`);
      });
    }
    
    // Log results
    console.log(`\n📊 Results for ${url}:`);
    console.log(`  LCP: ${metrics.LCP.toFixed(0)}ms ${metrics.LCP <= THRESHOLDS.LCP ? '✅' : '❌'}`);
    console.log(`  CLS: ${metrics.CLS.toFixed(3)} ${metrics.CLS <= THRESHOLDS.CLS ? '✅' : '❌'}`);
    console.log(`  FCP: ${metrics.FCP.toFixed(0)}ms`);
    console.log(`  TTFB: ${metrics.TTFB.toFixed(0)}ms ${metrics.TTFB <= THRESHOLDS.TTFB ? '✅' : '❌'}`);
    console.log(`  Page Weight: ${(metrics.pageWeight / 1024 / 1024).toFixed(2)}MB ${metrics.pageWeight <= THRESHOLDS.pageWeight ? '✅' : '❌'}`);
    console.log(`  Images: ${metrics.imageCount} (${(metrics.imageSize / 1024 / 1024).toFixed(2)}MB)`);
    
    await browser.close();
    return results;
    
  } catch (error) {
    await browser.close();
    throw error;
  }
}

async function main() {
  console.log('🚀 SKIIN Performance Testing\n');
  console.log('Performance Thresholds:');
  console.log(`  LCP: < ${THRESHOLDS.LCP}ms`);
  console.log(`  CLS: < ${THRESHOLDS.CLS}`);
  console.log(`  TTFB: < ${THRESHOLDS.TTFB}ms`);
  console.log(`  Page Weight: < ${(THRESHOLDS.pageWeight / 1024 / 1024).toFixed(0)}MB`);
  
  const urls = [
    'http://localhost:8080',
    'http://localhost:8080/de',
    'http://localhost:8080/fr',
    'http://localhost:8080/it'
  ];
  
  const allResults = [];
  let allPassed = true;
  
  for (const url of urls) {
    try {
      const results = await runLighthouseTest(url);
      allResults.push(results);
      if (!results.passed) {
        allPassed = false;
      }
    } catch (error) {
      console.error(`\n❌ Error testing ${url}:`, error.message);
      allPassed = false;
    }
  }
  
  // Generate summary report
  const report = {
    timestamp: new Date().toISOString(),
    allPassed,
    thresholds: THRESHOLDS,
    results: allResults
  };
  
  // Save report
  const reportPath = path.join(__dirname, '../docs/performance/lighthouse-report.json');
  await fs.mkdir(path.dirname(reportPath), { recursive: true });
  await fs.writeFile(reportPath, JSON.stringify(report, null, 2));
  
  console.log('\n' + '='.repeat(50));
  console.log(allPassed ? '✅ All performance tests passed!' : '❌ Some performance tests failed.');
  console.log(`\nDetailed report saved to: ${reportPath}`);
  
  // Exit with appropriate code
  process.exit(allPassed ? 0 : 1);
}

main().catch(console.error);