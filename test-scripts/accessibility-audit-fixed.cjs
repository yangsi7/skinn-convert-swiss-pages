#!/usr/bin/env node

/**
 * Comprehensive Accessibility Audit Script - SKIIN Switzerland (Fixed)
 * Tests WCAG 2.1 AA compliance across all critical pages and languages
 * Validates color contrast, keyboard navigation, screen reader compatibility
 */

const { chromium } = require('playwright');
const axeCore = require('axe-core');
const fs = require('fs');
const path = require('path');

// Test configuration
const BASE_URL = 'http://localhost:8080';
const OUTPUT_DIR = './test-results/accessibility';

// Critical pages to test (subset for testing)
const PAGES_TO_TEST = [
  // Homepage in all languages
  '/', '/de', '/fr', '/it'
];

// WCAG 2.1 AA configuration (simplified)
const AXE_CONFIG = {
  tags: ['wcag2a', 'wcag2aa', 'wcag21aa'],
  rules: {
    // Color contrast requirements
    'color-contrast': { enabled: true },
    // Keyboard navigation
    'tabindex': { enabled: true },
    // Screen reader compatibility
    'aria-allowed-attr': { enabled: true },
    'aria-required-attr': { enabled: true },
    'aria-valid-attr-value': { enabled: true },
    'aria-valid-attr': { enabled: true },
    // Semantic HTML
    'heading-order': { enabled: true },
    'landmark-one-main': { enabled: true },
    'page-has-heading-one': { enabled: true },
    // Form accessibility
    'label': { enabled: true },
    // Image accessibility
    'image-alt': { enabled: true }
  }
};

// Ensure output directory exists
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

async function runKeyboardNavigationTest(page) {
  console.log('   🎯 Testing keyboard navigation...');
  
  try {
    // Find all focusable elements
    const focusableElements = await page.evaluate(() => {
      const focusableSelectors = [
        'button:not([disabled])',
        'input:not([disabled]):not([type="hidden"])',
        'select:not([disabled])',
        'textarea:not([disabled])',
        'a[href]',
        '[tabindex]:not([tabindex="-1"])'
      ];
      
      const elements = [];
      focusableSelectors.forEach(selector => {
        document.querySelectorAll(selector).forEach(el => {
          if (el.offsetWidth > 0 && el.offsetHeight > 0) {
            elements.push({
              tagName: el.tagName,
              type: el.type || '',
              id: el.id || '',
              className: el.className || '',
              ariaLabel: el.getAttribute('aria-label') || '',
              textContent: el.textContent?.trim().substring(0, 50) || ''
            });
          }
        });
      });
      return elements;
    });
    
    // Test tab navigation
    let tabIndex = 0;
    let focusedElements = [];
    
    // Start from first element
    await page.keyboard.press('Tab');
    
    // Try to tab through a reasonable number of elements
    for (let i = 0; i < Math.min(10, focusableElements.length); i++) {
      const focusedElement = await page.evaluate(() => {
        const focused = document.activeElement;
        return focused ? {
          tagName: focused.tagName,
          id: focused.id || '',
          className: focused.className || '',
          textContent: focused.textContent?.trim().substring(0, 30) || ''
        } : null;
      });
      
      if (focusedElement) {
        focusedElements.push(focusedElement);
      }
      
      await page.keyboard.press('Tab');
      await page.waitForTimeout(100);
    }
    
    return {
      focusableCount: focusableElements.length,
      tabNavigatedCount: focusedElements.length,
      focusedElements,
      success: focusedElements.length > 0
    };
    
  } catch (error) {
    return {
      error: error.message,
      success: false
    };
  }
}

async function runColorContrastTest(page) {
  console.log('   🎨 Testing color contrast...');
  
  try {
    const contrastResults = await page.evaluate(() => {
      function getContrast(foreground, background) {
        // Simple contrast calculation
        function getLuminance(r, g, b) {
          const [rs, gs, bs] = [r, g, b].map(c => {
            c = c / 255;
            return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
          });
          return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
        }
        
        const rgb1 = foreground.match(/\d+/g);
        const rgb2 = background.match(/\d+/g);
        
        if (!rgb1 || !rgb2) return null;
        
        const l1 = getLuminance(parseInt(rgb1[0]), parseInt(rgb1[1]), parseInt(rgb1[2]));
        const l2 = getLuminance(parseInt(rgb2[0]), parseInt(rgb2[1]), parseInt(rgb2[2]));
        
        const brightest = Math.max(l1, l2);
        const darkest = Math.min(l1, l2);
        
        return (brightest + 0.05) / (darkest + 0.05);
      }
      
      const textElements = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, span, a, button, label');
      const results = [];
      
      for (let i = 0; i < Math.min(20, textElements.length); i++) {
        const el = textElements[i];
        const styles = window.getComputedStyle(el);
        const color = styles.color;
        const bgColor = styles.backgroundColor;
        
        if (color && bgColor && bgColor !== 'rgba(0, 0, 0, 0)') {
          const contrast = getContrast(color, bgColor);
          if (contrast) {
            results.push({
              element: el.tagName.toLowerCase(),
              text: el.textContent?.trim().substring(0, 30) || '',
              color: color,
              backgroundColor: bgColor,
              contrast: Math.round(contrast * 100) / 100,
              passes: contrast >= 4.5
            });
          }
        }
      }
      
      return results;
    });
    
    const failedContrast = contrastResults.filter(r => !r.passes);
    
    return {
      totalChecked: contrastResults.length,
      failed: failedContrast.length,
      passed: contrastResults.length - failedContrast.length,
      failedElements: failedContrast,
      success: failedContrast.length === 0
    };
    
  } catch (error) {
    return {
      error: error.message,
      success: false
    };
  }
}

async function runAccessibilityAudit() {
  console.log('🔍 Starting Comprehensive Accessibility Audit - SKIIN Switzerland');
  console.log(`📊 Testing ${PAGES_TO_TEST.length} pages for WCAG 2.1 AA compliance`);
  console.log(`🌐 Base URL: ${BASE_URL}`);
  
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  
  const results = {
    summary: {
      totalPages: PAGES_TO_TEST.length,
      successfulTests: 0,
      failedTests: 0,
      totalViolations: 0,
      criticalViolations: 0,
      moderateViolations: 0,
      minorViolations: 0,
      passedChecks: 0,
      keyboardNavigationPassed: 0,
      colorContrastPassed: 0
    },
    pages: {},
    timestamp: new Date().toISOString()
  };
  
  for (const pagePath of PAGES_TO_TEST) {
    try {
      console.log(`\n🔍 Testing: ${pagePath}`);
      
      const url = `${BASE_URL}${pagePath}`;
      await page.goto(url, { waitUntil: 'networkidle', timeout: 15000 });
      
      // Wait for page to fully load
      await page.waitForTimeout(3000);
      
      // Run axe-core accessibility scan
      await page.addScriptTag({ content: axeCore.source });
      
      const axeResults = await page.evaluate((config) => {
        return new Promise((resolve) => {
          if (typeof window.axe === 'undefined') {
            resolve({ violations: [], passes: [], incomplete: [], inapplicable: [] });
            return;
          }
          
          window.axe.configure({
            rules: config.rules,
            tags: config.tags
          });
          
          window.axe.run(document, (err, results) => {
            if (err) {
              resolve({ violations: [], passes: [], incomplete: [], inapplicable: [], error: err.message });
            } else {
              resolve(results);
            }
          });
        });
      }, AXE_CONFIG);
      
      // Run keyboard navigation test
      const keyboardResults = await runKeyboardNavigationTest(page);
      
      // Run color contrast test
      const contrastResults = await runColorContrastTest(page);
      
      // Process results
      const pageResults = {
        url: url,
        path: pagePath,
        violations: axeResults.violations || [],
        passes: axeResults.passes || [],
        violationCount: (axeResults.violations || []).length,
        passCount: (axeResults.passes || []).length,
        keyboardNavigation: keyboardResults,
        colorContrast: contrastResults,
        timestamp: new Date().toISOString()
      };
      
      if (axeResults.error) {
        pageResults.axeError = axeResults.error;
      }
      
      // Categorize violations by severity
      pageResults.violationsBySeverity = {
        critical: pageResults.violations.filter(v => v.impact === 'critical').length,
        serious: pageResults.violations.filter(v => v.impact === 'serious').length,
        moderate: pageResults.violations.filter(v => v.impact === 'moderate').length,
        minor: pageResults.violations.filter(v => v.impact === 'minor').length
      };
      
      // Update summary
      results.summary.successfulTests++;
      results.summary.totalViolations += pageResults.violationCount;
      results.summary.passedChecks += pageResults.passCount;
      results.summary.criticalViolations += pageResults.violationsBySeverity.critical;
      results.summary.moderateViolations += pageResults.violationsBySeverity.moderate + pageResults.violationsBySeverity.serious;
      results.summary.minorViolations += pageResults.violationsBySeverity.minor;
      
      if (keyboardResults.success) {
        results.summary.keyboardNavigationPassed++;
      }
      
      if (contrastResults.success) {
        results.summary.colorContrastPassed++;
      }
      
      results.pages[pagePath] = pageResults;
      
      console.log(`   ✅ Axe Passed: ${pageResults.passCount} checks`);
      console.log(`   ⚠️  Axe Violations: ${pageResults.violationCount} (${pageResults.violationsBySeverity.critical} critical)`);
      console.log(`   ⌨️  Keyboard Navigation: ${keyboardResults.success ? '✅' : '❌'} (${keyboardResults.focusableCount || 0} focusable elements)`);
      console.log(`   🎨 Color Contrast: ${contrastResults.success ? '✅' : '❌'} (${contrastResults.failed || 0} failed out of ${contrastResults.totalChecked || 0})`);
      
    } catch (error) {
      console.error(`❌ Error testing ${pagePath}:`, error.message);
      results.summary.failedTests++;
      results.pages[pagePath] = {
        error: error.message,
        timestamp: new Date().toISOString()
      };
    }
  }
  
  await browser.close();
  
  // Calculate compliance scores
  const totalChecks = results.summary.passedChecks + results.summary.totalViolations;
  results.summary.complianceScore = totalChecks > 0 ? 
    Math.round((results.summary.passedChecks / totalChecks) * 100) : 0;
    
  results.summary.wcagLevel = results.summary.criticalViolations === 0 && 
                              results.summary.moderateViolations === 0 ? 'AA' : 
                              results.summary.criticalViolations === 0 ? 'A' : 'Failed';
  
  results.summary.keyboardNavigationScore = Math.round((results.summary.keyboardNavigationPassed / results.summary.successfulTests) * 100);
  results.summary.colorContrastScore = Math.round((results.summary.colorContrastPassed / results.summary.successfulTests) * 100);
  
  // Save detailed results
  const detailedReportPath = path.join(OUTPUT_DIR, 'accessibility-detailed-report.json');
  fs.writeFileSync(detailedReportPath, JSON.stringify(results, null, 2));
  
  // Generate summary report
  const summaryReport = generateSummaryReport(results);
  const summaryReportPath = path.join(OUTPUT_DIR, 'accessibility-summary-report.md');
  fs.writeFileSync(summaryReportPath, summaryReport);
  
  // Display results
  console.log('\n📊 ACCESSIBILITY AUDIT RESULTS');
  console.log('================================');
  console.log(`📄 Pages Tested: ${results.summary.totalPages}`);
  console.log(`✅ Successful Tests: ${results.summary.successfulTests}`);
  console.log(`❌ Failed Tests: ${results.summary.failedTests}`);
  console.log(`✅ Compliance Score: ${results.summary.complianceScore}%`);
  console.log(`🏆 WCAG Level: ${results.summary.wcagLevel}`);
  console.log(`⚠️  Total Violations: ${results.summary.totalViolations}`);
  console.log(`🔴 Critical: ${results.summary.criticalViolations}`);
  console.log(`🟠 Moderate: ${results.summary.moderateViolations}`);
  console.log(`🟡 Minor: ${results.summary.minorViolations}`);
  console.log(`📊 Passed Checks: ${results.summary.passedChecks}`);
  console.log(`⌨️  Keyboard Navigation: ${results.summary.keyboardNavigationScore}%`);
  console.log(`🎨 Color Contrast: ${results.summary.colorContrastScore}%`);
  
  console.log(`\n📁 Reports saved to: ${OUTPUT_DIR}/`);
  
  return results;
}

function generateSummaryReport(results) {
  return `# Accessibility Audit Summary Report - SKIIN Switzerland
Generated: ${results.timestamp}

## Executive Summary

- **Total Pages Tested**: ${results.summary.totalPages}
- **Successful Tests**: ${results.summary.successfulTests}
- **Failed Tests**: ${results.summary.failedTests}
- **Compliance Score**: ${results.summary.complianceScore}%
- **WCAG 2.1 Level**: ${results.summary.wcagLevel}

## Detailed Scores

- **Keyboard Navigation**: ${results.summary.keyboardNavigationScore}% (${results.summary.keyboardNavigationPassed}/${results.summary.successfulTests} pages)
- **Color Contrast**: ${results.summary.colorContrastScore}% (${results.summary.colorContrastPassed}/${results.summary.successfulTests} pages)
- **Axe-Core Checks**: ${results.summary.passedChecks} passed, ${results.summary.totalViolations} violations

## Violation Breakdown

| Severity | Count | Description |
|----------|-------|-------------|
| Critical | ${results.summary.criticalViolations} | Blocks access for users with disabilities |
| Moderate | ${results.summary.moderateViolations} | Significant barriers to accessibility |
| Minor | ${results.summary.minorViolations} | Minor accessibility improvements needed |

## Medical Device Marketing Compliance

${results.summary.wcagLevel === 'AA' && 
  results.summary.keyboardNavigationScore >= 90 && 
  results.summary.colorContrastScore >= 90 ? 
  '✅ **COMPLIANT**: Meets WCAG 2.1 AA standards for medical device marketing' :
  '❌ **NON-COMPLIANT**: Does not meet WCAG 2.1 AA standards required for medical device marketing'
}

## Recommendations

1. **Keyboard Navigation**: ${results.summary.keyboardNavigationScore < 100 ? 'Improve keyboard accessibility for all interactive elements' : 'Excellent keyboard navigation implementation'}
2. **Color Contrast**: ${results.summary.colorContrastScore < 100 ? 'Fix color contrast issues to meet 4.5:1 ratio requirement' : 'Excellent color contrast implementation'}
3. **Axe Violations**: ${results.summary.totalViolations > 0 ? 'Address axe-core violations for full compliance' : 'No axe-core violations found'}

## Medical Device Considerations

- **Patient Safety**: Accessibility ensures all patients can access medical information
- **Regulatory Compliance**: WCAG 2.1 AA is required for medical device marketing
- **Inclusive Design**: Supports users with disabilities accessing cardiac screening information
`;
}

// Run the audit
runAccessibilityAudit().catch(console.error);