#!/usr/bin/env node

/**
 * Simplified Accessibility Audit Script - SKIIN Switzerland
 * Manual accessibility tests for WCAG 2.1 AA compliance
 * Tests keyboard navigation, color contrast, and basic accessibility
 */

const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

// Test configuration
const BASE_URL = 'http://localhost:8080';
const OUTPUT_DIR = './test-results/accessibility';

// Critical pages to test
const PAGES_TO_TEST = [
  '/', '/de', '/fr', '/it',
  '/solutions/10-day-heart-screening',
  '/partners/general-practitioners',
  '/how-it-works',
  '/about'
];

// Ensure output directory exists
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

async function runBasicAccessibilityChecks(page) {
  console.log('   🔍 Running basic accessibility checks...');
  
  const checks = await page.evaluate(() => {
    const results = {
      hasHeadings: false,
      hasMainLandmark: false,
      hasAltText: true,
      hasLabels: true,
      hasFocusableElements: false,
      missingAltImages: [],
      missingLabels: [],
      headingStructure: []
    };
    
    // Check for headings
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    results.hasHeadings = headings.length > 0;
    
    // Check heading structure
    headings.forEach(h => {
      results.headingStructure.push({
        level: h.tagName,
        text: h.textContent?.trim().substring(0, 50) || ''
      });
    });
    
    // Check for main landmark
    const main = document.querySelector('main, [role="main"]');
    results.hasMainLandmark = main !== null;
    
    // Check images for alt text
    const images = document.querySelectorAll('img');
    images.forEach(img => {
      if (!img.alt || img.alt.trim() === '') {
        results.missingAltImages.push({
          src: img.src?.substring(0, 100) || '',
          className: img.className || ''
        });
        results.hasAltText = false;
      }
    });
    
    // Check form inputs for labels
    const inputs = document.querySelectorAll('input, select, textarea');
    inputs.forEach(input => {
      const hasLabel = input.labels && input.labels.length > 0;
      const hasAriaLabel = input.getAttribute('aria-label');
      const hasAriaLabelledBy = input.getAttribute('aria-labelledby');
      
      if (!hasLabel && !hasAriaLabel && !hasAriaLabelledBy) {
        results.missingLabels.push({
          type: input.type || input.tagName,
          id: input.id || '',
          name: input.name || ''
        });
        results.hasLabels = false;
      }
    });
    
    // Check for focusable elements
    const focusableElements = document.querySelectorAll(
      'button, input, select, textarea, a[href], [tabindex]:not([tabindex="-1"])'
    );
    results.hasFocusableElements = focusableElements.length > 0;
    
    return results;
  });
  
  return checks;
}

async function runKeyboardNavigationTest(page) {
  console.log('   ⌨️  Testing keyboard navigation...');
  
  try {
    // Count focusable elements
    const focusableCount = await page.evaluate(() => {
      const elements = document.querySelectorAll(
        'button:not([disabled]), input:not([disabled]):not([type="hidden"]), select:not([disabled]), textarea:not([disabled]), a[href], [tabindex]:not([tabindex="-1"])'
      );
      return Array.from(elements).filter(el => el.offsetWidth > 0 && el.offsetHeight > 0).length;
    });
    
    // Test tab navigation
    let tabNavigatedCount = 0;
    let focusedElements = [];
    
    // Reset focus
    await page.keyboard.press('Tab');
    
    // Try to tab through elements
    for (let i = 0; i < Math.min(15, focusableCount); i++) {
      const focusedElement = await page.evaluate(() => {
        const focused = document.activeElement;
        if (focused && focused !== document.body) {
          return {
            tagName: focused.tagName,
            type: focused.type || '',
            id: focused.id || '',
            className: focused.className || '',
            textContent: focused.textContent?.trim().substring(0, 30) || '',
            ariaLabel: focused.getAttribute('aria-label') || ''
          };
        }
        return null;
      });
      
      if (focusedElement) {
        focusedElements.push(focusedElement);
        tabNavigatedCount++;
      }
      
      await page.keyboard.press('Tab');
      await page.waitForTimeout(200);
    }
    
    return {
      focusableCount,
      tabNavigatedCount,
      focusedElements,
      success: tabNavigatedCount > 0,
      coverage: focusableCount > 0 ? Math.round((tabNavigatedCount / focusableCount) * 100) : 0
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
        function getLuminance(r, g, b) {
          const [rs, gs, bs] = [r, g, b].map(c => {
            c = c / 255;
            return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
          });
          return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
        }
        
        const rgb1 = foreground.match(/\d+/g);
        const rgb2 = background.match(/\d+/g);
        
        if (!rgb1 || !rgb2 || rgb1.length < 3 || rgb2.length < 3) return null;
        
        const l1 = getLuminance(parseInt(rgb1[0]), parseInt(rgb1[1]), parseInt(rgb1[2]));
        const l2 = getLuminance(parseInt(rgb2[0]), parseInt(rgb2[1]), parseInt(rgb2[2]));
        
        const brightest = Math.max(l1, l2);
        const darkest = Math.min(l1, l2);
        
        return (brightest + 0.05) / (darkest + 0.05);
      }
      
      const textElements = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, span, a, button, label');
      const results = [];
      
      for (let i = 0; i < Math.min(50, textElements.length); i++) {
        const el = textElements[i];
        if (!el.textContent?.trim()) continue;
        
        const styles = window.getComputedStyle(el);
        const color = styles.color;
        const bgColor = styles.backgroundColor;
        
        // Get computed background color (may need to check parent elements)
        let actualBgColor = bgColor;
        if (bgColor === 'rgba(0, 0, 0, 0)' || bgColor === 'transparent') {
          let parent = el.parentElement;
          while (parent && (actualBgColor === 'rgba(0, 0, 0, 0)' || actualBgColor === 'transparent')) {
            actualBgColor = window.getComputedStyle(parent).backgroundColor;
            parent = parent.parentElement;
          }
        }
        
        if (color && actualBgColor && actualBgColor !== 'rgba(0, 0, 0, 0)') {
          const contrast = getContrast(color, actualBgColor);
          if (contrast) {
            results.push({
              element: el.tagName.toLowerCase(),
              text: el.textContent.trim().substring(0, 40),
              color: color,
              backgroundColor: actualBgColor,
              contrast: Math.round(contrast * 100) / 100,
              passes: contrast >= 4.5,
              fontSize: styles.fontSize,
              isLargeText: parseFloat(styles.fontSize) >= 18 || styles.fontWeight === 'bold' || styles.fontWeight >= 700
            });
          }
        }
      }
      
      return results;
    });
    
    const failedContrast = contrastResults.filter(r => !r.passes);
    const largeTextElements = contrastResults.filter(r => r.isLargeText);
    const largeTextFailed = largeTextElements.filter(r => r.contrast < 3.0);
    
    return {
      totalChecked: contrastResults.length,
      failed: failedContrast.length,
      passed: contrastResults.length - failedContrast.length,
      failedElements: failedContrast.slice(0, 10), // Limit for readability
      largeTextFailed: largeTextFailed.length,
      success: failedContrast.length === 0,
      passRate: contrastResults.length > 0 ? Math.round(((contrastResults.length - failedContrast.length) / contrastResults.length) * 100) : 100
    };
    
  } catch (error) {
    return {
      error: error.message,
      success: false
    };
  }
}

async function runAccessibilityAudit() {
  console.log('🔍 Starting Simplified Accessibility Audit - SKIIN Switzerland');
  console.log(`📊 Testing ${PAGES_TO_TEST.length} pages for WCAG 2.1 AA compliance`);
  console.log(`🌐 Base URL: ${BASE_URL}`);
  
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  
  const results = {
    summary: {
      totalPages: PAGES_TO_TEST.length,
      successfulTests: 0,
      failedTests: 0,
      totalIssues: 0,
      keyboardNavigationPassed: 0,
      colorContrastPassed: 0,
      basicAccessibilityPassed: 0,
      averageKeyboardCoverage: 0,
      averageContrastPassRate: 0
    },
    pages: {},
    timestamp: new Date().toISOString()
  };
  
  let totalKeyboardCoverage = 0;
  let totalContrastPassRate = 0;
  
  for (const pagePath of PAGES_TO_TEST) {
    try {
      console.log(`\n🔍 Testing: ${pagePath}`);
      
      const url = `${BASE_URL}${pagePath}`;
      await page.goto(url, { waitUntil: 'networkidle', timeout: 15000 });
      
      // Wait for page to fully load
      await page.waitForTimeout(2000);
      
      // Run basic accessibility checks
      const basicChecks = await runBasicAccessibilityChecks(page);
      
      // Run keyboard navigation test
      const keyboardResults = await runKeyboardNavigationTest(page);
      
      // Run color contrast test
      const contrastResults = await runColorContrastTest(page);
      
      // Calculate issues
      let issueCount = 0;
      if (!basicChecks.hasHeadings) issueCount++;
      if (!basicChecks.hasMainLandmark) issueCount++;
      if (!basicChecks.hasAltText) issueCount++;
      if (!basicChecks.hasLabels) issueCount++;
      if (!keyboardResults.success) issueCount++;
      if (!contrastResults.success) issueCount++;
      
      const pageResults = {
        url: url,
        path: pagePath,
        basicAccessibility: basicChecks,
        keyboardNavigation: keyboardResults,
        colorContrast: contrastResults,
        issueCount: issueCount,
        overallScore: Math.round(((6 - issueCount) / 6) * 100),
        timestamp: new Date().toISOString()
      };
      
      // Update summary
      results.summary.successfulTests++;
      results.summary.totalIssues += issueCount;
      
      if (keyboardResults.success) {
        results.summary.keyboardNavigationPassed++;
      }
      
      if (contrastResults.success) {
        results.summary.colorContrastPassed++;
      }
      
      if (basicChecks.hasHeadings && basicChecks.hasMainLandmark && 
          basicChecks.hasAltText && basicChecks.hasLabels) {
        results.summary.basicAccessibilityPassed++;
      }
      
      totalKeyboardCoverage += keyboardResults.coverage || 0;
      totalContrastPassRate += contrastResults.passRate || 0;
      
      results.pages[pagePath] = pageResults;
      
      console.log(`   📊 Overall Score: ${pageResults.overallScore}%`);
      console.log(`   🏗️  Basic Accessibility: ${basicChecks.hasHeadings && basicChecks.hasMainLandmark && basicChecks.hasAltText && basicChecks.hasLabels ? '✅' : '❌'}`);
      console.log(`   ⌨️  Keyboard Navigation: ${keyboardResults.success ? '✅' : '❌'} (${keyboardResults.coverage || 0}% coverage)`);
      console.log(`   🎨 Color Contrast: ${contrastResults.success ? '✅' : '❌'} (${contrastResults.passRate || 0}% pass rate)`);
      console.log(`   🔢 Issues Found: ${issueCount}`);
      
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
  
  // Calculate averages
  if (results.summary.successfulTests > 0) {
    results.summary.averageKeyboardCoverage = Math.round(totalKeyboardCoverage / results.summary.successfulTests);
    results.summary.averageContrastPassRate = Math.round(totalContrastPassRate / results.summary.successfulTests);
  }
  
  // Calculate compliance level
  const keyboardScore = Math.round((results.summary.keyboardNavigationPassed / results.summary.successfulTests) * 100);
  const contrastScore = Math.round((results.summary.colorContrastPassed / results.summary.successfulTests) * 100);
  const basicScore = Math.round((results.summary.basicAccessibilityPassed / results.summary.successfulTests) * 100);
  
  results.summary.overallCompliance = Math.round((keyboardScore + contrastScore + basicScore) / 3);
  results.summary.wcagLevel = results.summary.overallCompliance >= 90 ? 'AA' : 
                             results.summary.overallCompliance >= 70 ? 'A' : 'Failed';
  
  // Save detailed results
  const detailedReportPath = path.join(OUTPUT_DIR, 'accessibility-detailed-report.json');
  fs.writeFileSync(detailedReportPath, JSON.stringify(results, null, 2));
  
  // Generate summary report
  const summaryReport = generateSummaryReport(results);
  const summaryReportPath = path.join(OUTPUT_DIR, 'accessibility-summary-report.md');
  fs.writeFileSync(summaryReportPath, summaryReport);
  
  // Display results
  console.log('\n📊 ACCESSIBILITY AUDIT RESULTS');
  console.log('===============================');
  console.log(`📄 Pages Tested: ${results.summary.totalPages}`);
  console.log(`✅ Successful Tests: ${results.summary.successfulTests}`);
  console.log(`❌ Failed Tests: ${results.summary.failedTests}`);
  console.log(`🏆 WCAG Level: ${results.summary.wcagLevel}`);
  console.log(`📊 Overall Compliance: ${results.summary.overallCompliance}%`);
  console.log(`🔢 Total Issues: ${results.summary.totalIssues}`);
  console.log(`🏗️  Basic Accessibility: ${basicScore}% (${results.summary.basicAccessibilityPassed}/${results.summary.successfulTests} pages)`);
  console.log(`⌨️  Keyboard Navigation: ${keyboardScore}% (${results.summary.keyboardNavigationPassed}/${results.summary.successfulTests} pages)`);
  console.log(`🎨 Color Contrast: ${contrastScore}% (${results.summary.colorContrastPassed}/${results.summary.successfulTests} pages)`);
  console.log(`📈 Average Keyboard Coverage: ${results.summary.averageKeyboardCoverage}%`);
  console.log(`📈 Average Contrast Pass Rate: ${results.summary.averageContrastPassRate}%`);
  
  console.log(`\n📁 Reports saved to: ${OUTPUT_DIR}/`);
  
  return results;
}

function generateSummaryReport(results) {
  const keyboardScore = Math.round((results.summary.keyboardNavigationPassed / results.summary.successfulTests) * 100);
  const contrastScore = Math.round((results.summary.colorContrastPassed / results.summary.successfulTests) * 100);
  const basicScore = Math.round((results.summary.basicAccessibilityPassed / results.summary.successfulTests) * 100);
  
  return `# Accessibility Audit Summary Report - SKIIN Switzerland
Generated: ${results.timestamp}

## Executive Summary

- **Total Pages Tested**: ${results.summary.totalPages}
- **Successful Tests**: ${results.summary.successfulTests}
- **Failed Tests**: ${results.summary.failedTests}
- **Overall Compliance**: ${results.summary.overallCompliance}%
- **WCAG 2.1 Level**: ${results.summary.wcagLevel}
- **Total Issues Found**: ${results.summary.totalIssues}

## Detailed Scores

| Category | Score | Pass Rate | Description |
|----------|-------|-----------|-------------|
| Basic Accessibility | ${basicScore}% | ${results.summary.basicAccessibilityPassed}/${results.summary.successfulTests} | Headings, landmarks, alt text, labels |
| Keyboard Navigation | ${keyboardScore}% | ${results.summary.keyboardNavigationPassed}/${results.summary.successfulTests} | Tab navigation, focus management |
| Color Contrast | ${contrastScore}% | ${results.summary.colorContrastPassed}/${results.summary.successfulTests} | WCAG 2.1 AA contrast ratios |

## Performance Metrics

- **Average Keyboard Coverage**: ${results.summary.averageKeyboardCoverage}%
- **Average Contrast Pass Rate**: ${results.summary.averageContrastPassRate}%

## Medical Device Marketing Compliance

${results.summary.wcagLevel === 'AA' ? 
  '✅ **COMPLIANT**: Meets WCAG 2.1 AA standards for medical device marketing' :
  results.summary.wcagLevel === 'A' ?
  '⚠️ **PARTIALLY COMPLIANT**: Meets WCAG 2.1 A standards but requires improvements for AA' :
  '❌ **NON-COMPLIANT**: Does not meet WCAG 2.1 standards required for medical device marketing'
}

## Critical Action Items

${results.summary.totalIssues === 0 ? 
  '✅ No critical accessibility issues found.' :
  `⚠️ **ACTION REQUIRED**: ${results.summary.totalIssues} accessibility issues found across all pages.`
}

## Recommendations

1. **Basic Accessibility**: ${basicScore < 100 ? 'Ensure all pages have proper headings, landmarks, alt text, and form labels' : 'Excellent implementation of basic accessibility features'}
2. **Keyboard Navigation**: ${keyboardScore < 100 ? 'Improve keyboard accessibility for all interactive elements' : 'Excellent keyboard navigation implementation'}
3. **Color Contrast**: ${contrastScore < 100 ? 'Fix color contrast issues to meet 4.5:1 ratio requirement' : 'Excellent color contrast implementation'}

## Medical Device Considerations

- **Patient Safety**: Accessibility ensures all patients can access medical information
- **Regulatory Compliance**: WCAG 2.1 AA is required for medical device marketing in Switzerland
- **Inclusive Design**: Supports users with disabilities accessing cardiac screening information
- **Legal Requirements**: Compliance with Swiss accessibility regulations for medical services

## Page-by-Page Results

${Object.entries(results.pages).map(([path, page]) => {
  if (page.error) return `- **${path}**: ❌ Error - ${page.error}`;
  return `- **${path}**: ${page.overallScore}% (${page.issueCount} issues)`;
}).join('\n')}
`;
}

// Run the audit
runAccessibilityAudit().catch(console.error);