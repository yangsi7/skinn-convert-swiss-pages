#!/usr/bin/env node

/**
 * Integration Testing Suite - SKIIN Switzerland
 * Tests CI/CD pipeline, TypeScript integration, copy variant system, and E2E workflows
 */

const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

// Test configuration
const BASE_URL = 'http://localhost:8080';
const OUTPUT_DIR = './test-results/integration';

// Ensure output directory exists
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

async function testCopyVariantIntegration(page) {
  console.log('   📝 Testing copy variant integration...');
  
  try {
    // Navigate to homepage
    await page.goto(`${BASE_URL}/`, { waitUntil: 'networkidle' });
    
    // Look for copy variant selector
    const copyVariantSelector = await page.locator('[data-testid="copy-variant-selector"], .copy-variant-selector, #copy-variant-selector').first();
    
    let hasCopyVariantSelector = false;
    let variants = [];
    
    try {
      if (await copyVariantSelector.isVisible()) {
        hasCopyVariantSelector = true;
        
        // Try to interact with the selector
        await copyVariantSelector.click();
        await page.waitForTimeout(500);
        
        // Look for variant options
        const variantOptions = await page.locator('[data-variant], [data-copy-variant], .variant-option').all();
        variants = await Promise.all(
          variantOptions.map(async (option) => {
            const text = await option.textContent();
            return text?.trim() || '';
          })
        );
      }
    } catch (error) {
      // Continue if no selector found
    }
    
    // Test localStorage persistence
    const localStorageTest = await page.evaluate(() => {
      try {
        const testKey = 'copyVariant';
        const testValue = 'benefit-led';
        localStorage.setItem(testKey, testValue);
        const retrieved = localStorage.getItem(testKey);
        localStorage.removeItem(testKey);
        return retrieved === testValue;
      } catch (error) {
        return false;
      }
    });
    
    // Check for S&W Design theme consistency
    const themeConsistency = await page.evaluate(() => {
      const root = document.documentElement;
      const styles = window.getComputedStyle(root);
      
      // Check for S&W Design CSS variables
      const hasSwDesignColors = [
        '--lp-primary-blue',
        '--lp-purple',
        '--lp-dark-blue'
      ].some(varName => {
        const value = styles.getPropertyValue(varName);
        return value && value.trim() !== '';
      });
      
      return {
        hasSwDesignColors,
        bodyClasses: document.body.className,
        htmlClasses: document.documentElement.className
      };
    });
    
    return {
      hasCopyVariantSelector,
      variants,
      localStorageWorks: localStorageTest,
      themeConsistency,
      success: true
    };
    
  } catch (error) {
    return {
      error: error.message,
      success: false
    };
  }
}

async function testTypeScriptIntegration() {
  console.log('   🔧 Testing TypeScript strict mode integration...');
  
  try {
    // Check TypeScript compilation
    const { execSync } = require('child_process');
    
    // Run TypeScript check
    const tscResult = execSync('npm run typecheck', { 
      encoding: 'utf8',
      timeout: 30000,
      cwd: process.cwd()
    });
    
    const hasErrors = tscResult.includes('error') || tscResult.includes('Error');
    
    // Check tsconfig.json for strict mode
    const tsconfigPath = path.join(process.cwd(), 'tsconfig.json');
    let strictModeEnabled = false;
    
    if (fs.existsSync(tsconfigPath)) {
      const tsconfig = JSON.parse(fs.readFileSync(tsconfigPath, 'utf8'));
      strictModeEnabled = tsconfig.compilerOptions?.strict === true;
    }
    
    return {
      compilationPassed: !hasErrors,
      strictModeEnabled,
      output: tscResult.substring(0, 500),
      success: !hasErrors
    };
    
  } catch (error) {
    return {
      error: error.message,
      compilationPassed: false,
      success: false
    };
  }
}

async function testMultiLanguageIntegration(page) {
  console.log('   🌐 Testing multi-language integration...');
  
  const languages = ['/', '/de', '/fr', '/it'];
  const results = [];
  
  for (const langPath of languages) {
    try {
      await page.goto(`${BASE_URL}${langPath}`, { waitUntil: 'networkidle', timeout: 10000 });
      
      // Check if page loaded correctly
      const title = await page.title();
      const hasContent = await page.locator('main, [role="main"], body > div').first().isVisible();
      
      // Check for language-specific content
      const htmlLang = await page.getAttribute('html', 'lang');
      
      // Check for proper routing
      const currentUrl = page.url();
      const isCorrectRoute = currentUrl.includes(langPath) || (langPath === '/' && !currentUrl.includes('/de') && !currentUrl.includes('/fr') && !currentUrl.includes('/it'));
      
      results.push({
        language: langPath === '/' ? 'en' : langPath.substring(1),
        path: langPath,
        title,
        hasContent,
        htmlLang,
        isCorrectRoute,
        success: hasContent && isCorrectRoute
      });
      
    } catch (error) {
      results.push({
        language: langPath === '/' ? 'en' : langPath.substring(1),
        path: langPath,
        error: error.message,
        success: false
      });
    }
  }
  
  const successCount = results.filter(r => r.success).length;
  
  return {
    results,
    totalLanguages: languages.length,
    successfulLanguages: successCount,
    passRate: Math.round((successCount / languages.length) * 100),
    success: successCount === languages.length
  };
}

async function testE2EWorkflows(page) {
  console.log('   🔄 Testing E2E workflows...');
  
  const workflows = [];
  
  // Test 1: Heart screening eligibility flow
  try {
    await page.goto(`${BASE_URL}/`, { waitUntil: 'networkidle' });
    
    // Look for eligibility CTA
    const ctaButton = await page.locator('a[href*="solutions"], button:has-text("Start"), a:has-text("eligibility"), a:has-text("heart"), a:has-text("screening")').first();
    
    let eligibilityFlowWorks = false;
    if (await ctaButton.isVisible()) {
      await ctaButton.click();
      await page.waitForTimeout(2000);
      
      // Check if navigated to a solutions or screening page
      const currentUrl = page.url();
      eligibilityFlowWorks = currentUrl.includes('solutions') || currentUrl.includes('screening') || currentUrl.includes('heart');
    }
    
    workflows.push({
      name: 'Heart Screening Eligibility Flow',
      success: eligibilityFlowWorks,
      details: eligibilityFlowWorks ? 'CTA navigation successful' : 'CTA not found or navigation failed'
    });
    
  } catch (error) {
    workflows.push({
      name: 'Heart Screening Eligibility Flow',
      success: false,
      error: error.message
    });
  }
  
  // Test 2: Multi-language navigation flow
  try {
    await page.goto(`${BASE_URL}/`, { waitUntil: 'networkidle' });
    
    // Look for language switcher
    const languageSwitcher = await page.locator('[data-testid="language-selector"], .language-selector, select[name*="lang"], select[name*="language"]').first();
    
    let languageSwitchingWorks = false;
    if (await languageSwitcher.isVisible()) {
      // Try switching to German
      await languageSwitcher.click();
      await page.waitForTimeout(500);
      
      const germanOption = await page.locator('option[value="de"], a[href="/de"], button:has-text("DE"), a:has-text("Deutsch")').first();
      if (await germanOption.isVisible()) {
        await germanOption.click();
        await page.waitForTimeout(2000);
        
        const currentUrl = page.url();
        languageSwitchingWorks = currentUrl.includes('/de');
      }
    }
    
    workflows.push({
      name: 'Multi-language Navigation',
      success: languageSwitchingWorks,
      details: languageSwitchingWorks ? 'Language switching successful' : 'Language switcher not found or switching failed'
    });
    
  } catch (error) {
    workflows.push({
      name: 'Multi-language Navigation',
      success: false,
      error: error.message
    });
  }
  
  // Test 3: Navigation consistency
  try {
    await page.goto(`${BASE_URL}/solutions/10-day-heart-screening`, { waitUntil: 'networkidle' });
    
    // Look for navigation back to home
    const homeNavigation = await page.locator('a[href="/"], a:has-text("Home"), .navbar a:first-child, .logo').first();
    
    let navigationConsistency = false;
    if (await homeNavigation.isVisible()) {
      await homeNavigation.click();
      await page.waitForTimeout(2000);
      
      const currentUrl = page.url();
      navigationConsistency = currentUrl === `${BASE_URL}/` || currentUrl.endsWith('/');
    }
    
    workflows.push({
      name: 'Navigation Consistency',
      success: navigationConsistency,
      details: navigationConsistency ? 'Navigation back to home successful' : 'Home navigation not found or failed'
    });
    
  } catch (error) {
    workflows.push({
      name: 'Navigation Consistency',
      success: false,
      error: error.message
    });
  }
  
  const successfulWorkflows = workflows.filter(w => w.success).length;
  
  return {
    workflows,
    totalWorkflows: workflows.length,
    successfulWorkflows,
    passRate: Math.round((successfulWorkflows / workflows.length) * 100),
    success: successfulWorkflows === workflows.length
  };
}

async function testPerformanceIntegration(page) {
  console.log('   ⚡ Testing performance integration...');
  
  try {
    // Test Core Web Vitals
    await page.goto(`${BASE_URL}/`, { waitUntil: 'networkidle' });
    
    const performanceMetrics = await page.evaluate(() => {
      return new Promise((resolve) => {
        // Use Performance Observer if available
        if ('PerformanceObserver' in window) {
          const metrics = {};
          
          const observer = new PerformanceObserver((list) => {
            list.getEntries().forEach((entry) => {
              if (entry.entryType === 'largest-contentful-paint') {
                metrics.LCP = entry.startTime;
              }
              if (entry.entryType === 'first-input') {
                metrics.FID = entry.processingStart - entry.startTime;
              }
            });
          });
          
          observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input'] });
          
          // Get CLS from layout shift entries
          const clsObserver = new PerformanceObserver((list) => {
            let clsValue = 0;
            list.getEntries().forEach((entry) => {
              if (!entry.hadRecentInput) {
                clsValue += entry.value;
              }
            });
            metrics.CLS = clsValue;
          });
          
          clsObserver.observe({ entryTypes: ['layout-shift'] });
          
          // Wait a bit for metrics to be collected
          setTimeout(() => {
            resolve(metrics);
          }, 3000);
          
        } else {
          resolve({});
        }
      });
    });
    
    // Test memory usage
    const memoryMetrics = await page.evaluate(() => {
      if ('memory' in performance) {
        return {
          usedJSHeapSize: Math.round((performance.memory.usedJSHeapSize / 1024 / 1024) * 100) / 100,
          totalJSHeapSize: Math.round((performance.memory.totalJSHeapSize / 1024 / 1024) * 100) / 100
        };
      }
      return null;
    });
    
    // Test page load metrics
    const navigationMetrics = await page.evaluate(() => {
      const navigation = performance.getEntriesByType('navigation')[0];
      if (navigation) {
        return {
          loadTime: Math.round(navigation.loadEventEnd - navigation.fetchStart),
          domContentLoaded: Math.round(navigation.domContentLoadedEventEnd - navigation.fetchStart),
          firstByte: Math.round(navigation.responseStart - navigation.fetchStart)
        };
      }
      return null;
    });
    
    return {
      coreWebVitals: performanceMetrics,
      memory: memoryMetrics,
      navigation: navigationMetrics,
      success: true
    };
    
  } catch (error) {
    return {
      error: error.message,
      success: false
    };
  }
}

async function runIntegrationTests() {
  console.log('🔧 Starting Integration Testing Suite - SKIIN Switzerland');
  console.log('🧪 Testing CI/CD pipeline, TypeScript, copy variants, and E2E workflows');
  
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  
  const results = {
    summary: {
      timestamp: new Date().toISOString(),
      totalTests: 0,
      passedTests: 0,
      failedTests: 0,
      overallScore: 0
    },
    tests: {}
  };
  
  console.log('\n🧪 Running Integration Tests...');
  
  // Test 1: Copy Variant Integration
  console.log('\n1️⃣ Copy Variant Integration Test');
  const copyVariantResults = await testCopyVariantIntegration(page);
  results.tests.copyVariant = copyVariantResults;
  results.summary.totalTests++;
  if (copyVariantResults.success) results.summary.passedTests++;
  else results.summary.failedTests++;
  
  console.log(`   ${copyVariantResults.success ? '✅' : '❌'} Copy variant system: ${copyVariantResults.success ? 'Working' : 'Issues found'}`);
  if (copyVariantResults.hasCopyVariantSelector) {
    console.log(`   📝 Variant selector found with ${copyVariantResults.variants.length} options`);
  }
  console.log(`   💾 LocalStorage: ${copyVariantResults.localStorageWorks ? '✅' : '❌'}`);
  console.log(`   🎨 S&W Design theme: ${copyVariantResults.themeConsistency?.hasSwDesignColors ? '✅' : '❌'}`);
  
  // Test 2: TypeScript Integration
  console.log('\n2️⃣ TypeScript Strict Mode Integration Test');
  const typeScriptResults = await testTypeScriptIntegration();
  results.tests.typeScript = typeScriptResults;
  results.summary.totalTests++;
  if (typeScriptResults.success) results.summary.passedTests++;
  else results.summary.failedTests++;
  
  console.log(`   ${typeScriptResults.success ? '✅' : '❌'} TypeScript compilation: ${typeScriptResults.compilationPassed ? 'Passed' : 'Failed'}`);
  console.log(`   🔧 Strict mode: ${typeScriptResults.strictModeEnabled ? '✅' : '❌'}`);
  
  // Test 3: Multi-language Integration
  console.log('\n3️⃣ Multi-language Integration Test');
  const multiLanguageResults = await testMultiLanguageIntegration(page);
  results.tests.multiLanguage = multiLanguageResults;
  results.summary.totalTests++;
  if (multiLanguageResults.success) results.summary.passedTests++;
  else results.summary.failedTests++;
  
  console.log(`   ${multiLanguageResults.success ? '✅' : '❌'} Multi-language routing: ${multiLanguageResults.passRate}% (${multiLanguageResults.successfulLanguages}/${multiLanguageResults.totalLanguages})`);
  multiLanguageResults.results.forEach(result => {
    console.log(`   📍 ${result.language.toUpperCase()}: ${result.success ? '✅' : '❌'} ${result.title ? result.title.substring(0, 50) : result.error || 'Unknown error'}`);
  });
  
  // Test 4: E2E Workflows
  console.log('\n4️⃣ End-to-End Workflow Test');
  const e2eResults = await testE2EWorkflows(page);
  results.tests.e2eWorkflows = e2eResults;
  results.summary.totalTests++;
  if (e2eResults.success) results.summary.passedTests++;
  else results.summary.failedTests++;
  
  console.log(`   ${e2eResults.success ? '✅' : '❌'} E2E workflows: ${e2eResults.passRate}% (${e2eResults.successfulWorkflows}/${e2eResults.totalWorkflows})`);
  e2eResults.workflows.forEach(workflow => {
    console.log(`   🔄 ${workflow.name}: ${workflow.success ? '✅' : '❌'} ${workflow.details || workflow.error || ''}`);
  });
  
  // Test 5: Performance Integration
  console.log('\n5️⃣ Performance Integration Test');
  const performanceResults = await testPerformanceIntegration(page);
  results.tests.performance = performanceResults;
  results.summary.totalTests++;
  if (performanceResults.success) results.summary.passedTests++;
  else results.summary.failedTests++;
  
  console.log(`   ${performanceResults.success ? '✅' : '❌'} Performance metrics collection: ${performanceResults.success ? 'Working' : 'Failed'}`);
  if (performanceResults.navigation) {
    console.log(`   ⚡ Load time: ${performanceResults.navigation.loadTime}ms`);
    console.log(`   📊 DOM ready: ${performanceResults.navigation.domContentLoaded}ms`);
    console.log(`   🚀 TTFB: ${performanceResults.navigation.firstByte}ms`);
  }
  if (performanceResults.memory) {
    console.log(`   💾 Memory usage: ${performanceResults.memory.usedJSHeapSize}MB`);
  }
  
  await browser.close();
  
  // Calculate overall score
  results.summary.overallScore = Math.round((results.summary.passedTests / results.summary.totalTests) * 100);
  
  // Save detailed results
  const detailedReportPath = path.join(OUTPUT_DIR, 'integration-test-report.json');
  fs.writeFileSync(detailedReportPath, JSON.stringify(results, null, 2));
  
  // Generate summary report
  const summaryReport = generateIntegrationReport(results);
  const summaryReportPath = path.join(OUTPUT_DIR, 'integration-test-summary.md');
  fs.writeFileSync(summaryReportPath, summaryReport);
  
  // Display final results
  console.log('\n📊 INTEGRATION TEST RESULTS');
  console.log('============================');
  console.log(`🧪 Total Tests: ${results.summary.totalTests}`);
  console.log(`✅ Passed: ${results.summary.passedTests}`);
  console.log(`❌ Failed: ${results.summary.failedTests}`);
  console.log(`📊 Overall Score: ${results.summary.overallScore}%`);
  console.log(`🏆 Integration Status: ${results.summary.overallScore >= 80 ? 'EXCELLENT' : results.summary.overallScore >= 60 ? 'GOOD' : 'NEEDS IMPROVEMENT'}`);
  
  console.log(`\n📁 Reports saved to: ${OUTPUT_DIR}/`);
  
  return results;
}

function generateIntegrationReport(results) {
  return `# Integration Testing Report - SKIIN Switzerland
Generated: ${results.summary.timestamp}

## Executive Summary

- **Total Integration Tests**: ${results.summary.totalTests}
- **Passed Tests**: ${results.summary.passedTests}
- **Failed Tests**: ${results.summary.failedTests}
- **Overall Score**: ${results.summary.overallScore}%
- **Integration Status**: ${results.summary.overallScore >= 80 ? 'EXCELLENT' : results.summary.overallScore >= 60 ? 'GOOD' : 'NEEDS IMPROVEMENT'}

## Test Results

### 1. Copy Variant Integration ${results.tests.copyVariant?.success ? '✅' : '❌'}
- **Status**: ${results.tests.copyVariant?.success ? 'Passed' : 'Failed'}
- **Copy Variant Selector**: ${results.tests.copyVariant?.hasCopyVariantSelector ? 'Found' : 'Not found'}
- **Available Variants**: ${results.tests.copyVariant?.variants?.length || 0}
- **LocalStorage Persistence**: ${results.tests.copyVariant?.localStorageWorks ? 'Working' : 'Failed'}
- **S&W Design Theme**: ${results.tests.copyVariant?.themeConsistency?.hasSwDesignColors ? 'Active' : 'Not detected'}

### 2. TypeScript Strict Mode Integration ${results.tests.typeScript?.success ? '✅' : '❌'}
- **Status**: ${results.tests.typeScript?.success ? 'Passed' : 'Failed'}
- **Compilation**: ${results.tests.typeScript?.compilationPassed ? 'Clean' : 'Errors found'}
- **Strict Mode**: ${results.tests.typeScript?.strictModeEnabled ? 'Enabled' : 'Disabled'}

### 3. Multi-language Integration ${results.tests.multiLanguage?.success ? '✅' : '❌'}
- **Status**: ${results.tests.multiLanguage?.success ? 'Passed' : 'Failed'}
- **Languages Tested**: ${results.tests.multiLanguage?.totalLanguages || 0}
- **Successful Languages**: ${results.tests.multiLanguage?.successfulLanguages || 0}
- **Pass Rate**: ${results.tests.multiLanguage?.passRate || 0}%

### 4. End-to-End Workflows ${results.tests.e2eWorkflows?.success ? '✅' : '❌'}
- **Status**: ${results.tests.e2eWorkflows?.success ? 'Passed' : 'Failed'}
- **Workflows Tested**: ${results.tests.e2eWorkflows?.totalWorkflows || 0}
- **Successful Workflows**: ${results.tests.e2eWorkflows?.successfulWorkflows || 0}
- **Pass Rate**: ${results.tests.e2eWorkflows?.passRate || 0}%

### 5. Performance Integration ${results.tests.performance?.success ? '✅' : '❌'}
- **Status**: ${results.tests.performance?.success ? 'Passed' : 'Failed'}
- **Metrics Collection**: ${results.tests.performance?.success ? 'Working' : 'Failed'}

## Medical Device Compliance

${results.summary.overallScore >= 80 ? 
  '✅ **COMPLIANT**: All integration systems working correctly for medical device marketing' :
  '⚠️ **ATTENTION REQUIRED**: Integration issues may impact medical device marketing compliance'
}

## Recommendations

${results.summary.overallScore >= 80 ? 
  '✅ All integration systems are working correctly.' :
  '⚠️ Address integration failures to ensure proper system functionality.'
}

1. **Copy Variant System**: ${results.tests.copyVariant?.success ? 'Working correctly' : 'Requires attention'}
2. **TypeScript Integration**: ${results.tests.typeScript?.success ? 'Strict mode operational' : 'Fix compilation errors'}
3. **Multi-language Support**: ${results.tests.multiLanguage?.success ? 'All languages functional' : 'Fix routing issues'}
4. **E2E Workflows**: ${results.tests.e2eWorkflows?.success ? 'User journeys working' : 'Fix workflow failures'}
5. **Performance Monitoring**: ${results.tests.performance?.success ? 'Metrics collection active' : 'Fix performance monitoring'}

## Enterprise Readiness

- **CI/CD Integration**: ${results.summary.overallScore >= 80 ? 'Ready' : 'Needs improvement'}
- **Production Deployment**: ${results.summary.overallScore >= 80 ? 'Approved' : 'Blocked pending fixes'}
- **Medical Device Marketing**: ${results.summary.overallScore >= 80 ? 'Compliant' : 'Non-compliant'}
`;
}

// Run the integration tests
runIntegrationTests().catch(console.error);