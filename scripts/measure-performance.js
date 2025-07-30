#!/usr/bin/env node

const puppeteer = require('puppeteer');
const fs = require('fs').promises;
const path = require('path');

const URLS = [
  'http://localhost:8080',
  'http://localhost:8080/de',
  'http://localhost:8080/fr',
  'http://localhost:8080/it',
];

const DEVICE_CONFIGS = {
  mobile: {
    name: 'Mobile',
    viewport: { width: 375, height: 812 },
    userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 14_0 like Mac OS X) AppleWebKit/605.1.15',
  },
  tablet: {
    name: 'Tablet',
    viewport: { width: 768, height: 1024 },
    userAgent: 'Mozilla/5.0 (iPad; CPU OS 14_0 like Mac OS X) AppleWebKit/605.1.15',
  },
  desktop: {
    name: 'Desktop',
    viewport: { width: 1440, height: 900 },
    userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36',
  },
};

async function measurePerformance(browser, url, device) {
  const page = await browser.newPage();
  
  // Set viewport and user agent
  await page.setViewport(device.viewport);
  await page.setUserAgent(device.userAgent);
  
  // Enable CPU and Network throttling for more realistic mobile performance
  if (device.name === 'Mobile') {
    const client = await page.target().createCDPSession();
    await client.send('Network.emulateNetworkConditions', {
      offline: false,
      downloadThroughput: 1.5 * 1024 * 1024 / 8, // 1.5 Mbps
      uploadThroughput: 750 * 1024 / 8, // 750 Kbps
      latency: 40, // 40ms
    });
    await client.send('Emulation.setCPUThrottlingRate', { rate: 4 });
  }
  
  // Navigate and wait for load
  await page.goto(url, { waitUntil: 'networkidle0' });
  
  // Wait a bit for any lazy-loaded content
  await page.waitForTimeout(2000);
  
  // Collect performance metrics
  const metrics = await page.evaluate(() => {
    const navigation = performance.getEntriesByType('navigation')[0];
    const paintEntries = performance.getEntriesByType('paint');
    const resources = performance.getEntriesByType('resource');
    
    // Calculate total page weight
    let totalSize = 0;
    let imageSize = 0;
    let jsSize = 0;
    let cssSize = 0;
    
    resources.forEach(resource => {
      const size = resource.transferSize || 0;
      totalSize += size;
      
      if (resource.name.match(/\.(jpg|jpeg|png|gif|webp)$/i)) {
        imageSize += size;
      } else if (resource.name.match(/\.js$/i)) {
        jsSize += size;
      } else if (resource.name.match(/\.css$/i)) {
        cssSize += size;
      }
    });
    
    // Get paint metrics
    const fcp = paintEntries.find(entry => entry.name === 'first-contentful-paint');
    const lcp = performance.getEntriesByType('largest-contentful-paint').slice(-1)[0];
    
    return {
      // Navigation timing
      ttfb: navigation.responseStart - navigation.requestStart,
      domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
      loadComplete: navigation.loadEventEnd - navigation.loadEventStart,
      
      // Paint timing
      fcp: fcp ? fcp.startTime : null,
      lcp: lcp ? lcp.startTime : null,
      
      // Resource metrics
      totalPageWeight: totalSize,
      imageWeight: imageSize,
      jsWeight: jsSize,
      cssWeight: cssSize,
      resourceCount: resources.length,
      
      // Additional metrics
      domNodes: document.getElementsByTagName('*').length,
    };
  });
  
  // Get CLS score
  const cls = await page.evaluate(() => {
    return new Promise((resolve) => {
      let clsValue = 0;
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
          }
        }
      });
      observer.observe({ entryTypes: ['layout-shift'] });
      
      setTimeout(() => {
        observer.disconnect();
        resolve(clsValue);
      }, 5000);
    });
  });
  
  await page.close();
  
  return { ...metrics, cls };
}

async function generateReport(results) {
  const timestamp = new Date().toISOString();
  const report = {
    timestamp,
    results,
    summary: {
      averageLCP: 0,
      averageFCP: 0,
      averageCLS: 0,
      averagePageWeight: 0,
      issues: [],
    },
  };
  
  // Calculate averages and identify issues
  let totalLCP = 0;
  let totalFCP = 0;
  let totalCLS = 0;
  let totalWeight = 0;
  let count = 0;
  
  results.forEach(result => {
    if (result.metrics.lcp) {
      totalLCP += result.metrics.lcp;
      if (result.metrics.lcp > 2500) {
        report.summary.issues.push(`${result.url} on ${result.device}: LCP ${result.metrics.lcp.toFixed(0)}ms exceeds 2500ms target`);
      }
    }
    if (result.metrics.fcp) {
      totalFCP += result.metrics.fcp;
    }
    if (result.metrics.cls !== undefined) {
      totalCLS += result.metrics.cls;
      if (result.metrics.cls > 0.1) {
        report.summary.issues.push(`${result.url} on ${result.device}: CLS ${result.metrics.cls.toFixed(3)} exceeds 0.1 target`);
      }
    }
    totalWeight += result.metrics.totalPageWeight;
    if (result.metrics.totalPageWeight > 2 * 1024 * 1024) {
      report.summary.issues.push(`${result.url} on ${result.device}: Page weight ${(result.metrics.totalPageWeight / 1024 / 1024).toFixed(2)}MB exceeds 2MB target`);
    }
    count++;
  });
  
  report.summary.averageLCP = totalLCP / count;
  report.summary.averageFCP = totalFCP / count;
  report.summary.averageCLS = totalCLS / count;
  report.summary.averagePageWeight = totalWeight / count;
  
  // Save report
  const reportPath = path.join(__dirname, '../public/assets/images/optimized/performance-report.json');
  await fs.writeFile(reportPath, JSON.stringify(report, null, 2));
  
  return report;
}

async function main() {
  console.log('🚀 Starting performance measurement...\n');
  
  const browser = await puppeteer.launch({ headless: true });
  const results = [];
  
  try {
    for (const url of URLS) {
      for (const [key, device] of Object.entries(DEVICE_CONFIGS)) {
        console.log(`📊 Measuring ${url} on ${device.name}...`);
        
        try {
          const metrics = await measurePerformance(browser, url, device);
          results.push({
            url,
            device: device.name,
            metrics,
          });
          
          // Log key metrics
          console.log(`  ✓ LCP: ${metrics.lcp?.toFixed(0)}ms ${metrics.lcp < 2500 ? '✅' : '⚠️'}`);
          console.log(`  ✓ FCP: ${metrics.fcp?.toFixed(0)}ms`);
          console.log(`  ✓ CLS: ${metrics.cls?.toFixed(3)} ${metrics.cls < 0.1 ? '✅' : '⚠️'}`);
          console.log(`  ✓ Page Weight: ${(metrics.totalPageWeight / 1024 / 1024).toFixed(2)}MB ${metrics.totalPageWeight < 2 * 1024 * 1024 ? '✅' : '⚠️'}`);
          console.log('');
        } catch (error) {
          console.error(`  ✗ Error measuring ${url} on ${device.name}:`, error.message);
        }
      }
    }
    
    // Generate report
    const report = await generateReport(results);
    
    console.log('\n📋 Performance Summary:');
    console.log(`Average LCP: ${report.summary.averageLCP.toFixed(0)}ms ${report.summary.averageLCP < 2500 ? '✅' : '⚠️'}`);
    console.log(`Average FCP: ${report.summary.averageFCP.toFixed(0)}ms`);
    console.log(`Average CLS: ${report.summary.averageCLS.toFixed(3)} ${report.summary.averageCLS < 0.1 ? '✅' : '⚠️'}`);
    console.log(`Average Page Weight: ${(report.summary.averagePageWeight / 1024 / 1024).toFixed(2)}MB ${report.summary.averagePageWeight < 2 * 1024 * 1024 ? '✅' : '⚠️'}`);
    
    if (report.summary.issues.length > 0) {
      console.log('\n⚠️  Issues Found:');
      report.summary.issues.forEach(issue => console.log(`  - ${issue}`));
    } else {
      console.log('\n✅ All performance targets met!');
    }
    
  } finally {
    await browser.close();
  }
}

// Run if called directly
if (require.main === module) {
  main().catch(console.error);
}

module.exports = { measurePerformance, generateReport };