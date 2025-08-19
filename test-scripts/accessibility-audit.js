#!/usr/bin/env node

/**
 * Comprehensive Accessibility Audit Script
 * Tests WCAG 2.1 AA compliance across all critical pages and languages
 * Validates color contrast, keyboard navigation, screen reader compatibility
 */

const { chromium } = require('playwright');
const axeCore = require('axe-core');
const fs = require('fs');
const path = require('path');

// Test configuration
const BASE_URL = 'http://localhost:8081';
const OUTPUT_DIR = './test-results/accessibility';

// Critical pages to test (4 languages × key pages)
const PAGES_TO_TEST = [
  // Homepage in all languages
  '/', '/de', '/fr', '/it',
  
  // Solutions pages
  '/solutions/10-day-heart-screening',
  '/de/loesungen/10-tage-herzscreening',
  '/fr/solutions/bilan-cardiaque-10-jours',
  '/it/soluzioni/screening-cardiaco-10-giorni',
  
  // Partners pages
  '/partners/general-practitioners',
  '/de/partner/hausaerzte',
  '/fr/partenaires/medecins-generalistes',
  '/it/partner/medici-famiglia',
  
  // How It Works
  '/how-it-works',
  '/de/wie-es-funktioniert',
  '/fr/comment-ca-marche',
  '/it/come-funziona',
  
  // About
  '/about',
  '/de/ueber-uns',
  '/fr/a-propos',
  '/it/chi-siamo'
];

// WCAG 2.1 AA configuration
const AXE_CONFIG = {
  rules: {
    // Color contrast requirements
    'color-contrast': { enabled: true },
    'color-contrast-enhanced': { enabled: false }, // AA level (4.5:1)
    
    // Keyboard navigation
    'focus-order-semantics': { enabled: true },
    'tabindex': { enabled: true },
    'focusable-content': { enabled: true },
    
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
    'form-field-multiple-labels': { enabled: true },
    
    // Image accessibility
    'image-alt': { enabled: true },
    'image-redundant-alt': { enabled: true }
  },
  tags: ['wcag2a', 'wcag2aa', 'wcag21aa']
};

// Ensure output directory exists
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

async function runAccessibilityAudit() {
  console.log('🔍 Starting Comprehensive Accessibility Audit');
  console.log(`📊 Testing ${PAGES_TO_TEST.length} pages for WCAG 2.1 AA compliance`);
  
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  
  // Inject axe-core into the page
  await page.addInitScript({
    content: axeCore.source
  });
  
  const results = {
    summary: {
      totalPages: PAGES_TO_TEST.length,
      pagesWithViolations: 0,
      totalViolations: 0,
      criticalViolations: 0,
      moderateViolations: 0,
      minorViolations: 0,
      passedChecks: 0
    },
    pages: {},
    aggregatedViolations: {},
    colorContrastResults: [],
    keyboardNavigationResults: [],
    timestamp: new Date().toISOString()
  };
  
  for (const pagePath of PAGES_TO_TEST) {
    try {
      console.log(`\n🔍 Testing: ${pagePath}`);
      
      const url = `${BASE_URL}${pagePath}`;
      await page.goto(url, { waitUntil: 'networkidle' });
      
      // Wait for page to fully load and any animations to complete
      await page.waitForTimeout(2000);
      
      // Run axe-core accessibility scan
      const axeResults = await page.evaluate((config) => {
        return new Promise((resolve) => {
          window.axe.run(document, config, (err, results) => {
            resolve(results);
          });
        });
      }, AXE_CONFIG);
      
      // Process results
      const pageResults = {
        url: url,
        path: pagePath,
        violations: axeResults.violations,
        passes: axeResults.passes,
        incomplete: axeResults.incomplete,
        inapplicable: axeResults.inapplicable,
        violationCount: axeResults.violations.length,
        passCount: axeResults.passes.length,
        timestamp: new Date().toISOString()
      };
      
      // Categorize violations by severity
      pageResults.violationsBySeverity = {
        critical: axeResults.violations.filter(v => v.impact === 'critical').length,
        serious: axeResults.violations.filter(v => v.impact === 'serious').length,
        moderate: axeResults.violations.filter(v => v.impact === 'moderate').length,
        minor: axeResults.violations.filter(v => v.impact === 'minor').length
      };
      
      // Color contrast specific analysis
      const colorContrastViolations = axeResults.violations.filter(v => 
        v.id === 'color-contrast' || v.id === 'color-contrast-enhanced'
      );
      
      if (colorContrastViolations.length > 0) {
        pageResults.colorContrastIssues = colorContrastViolations.map(violation => ({
          description: violation.description,
          nodes: violation.nodes.map(node => ({
            target: node.target,
            html: node.html,
            impact: node.impact,
            failureSummary: node.failureSummary
          }))
        }));
      }
      
      // Update summary
      if (pageResults.violationCount > 0) {
        results.summary.pagesWithViolations++;
      }
      results.summary.totalViolations += pageResults.violationCount;
      results.summary.passedChecks += pageResults.passCount;
      results.summary.criticalViolations += pageResults.violationsBySeverity.critical;
      results.summary.moderateViolations += pageResults.violationsBySeverity.moderate + pageResults.violationsBySeverity.serious;
      results.summary.minorViolations += pageResults.violationsBySeverity.minor;
      
      // Aggregate violations by type
      axeResults.violations.forEach(violation => {
        if (!results.aggregatedViolations[violation.id]) {
          results.aggregatedViolations[violation.id] = {
            id: violation.id,
            description: violation.description,
            impact: violation.impact,
            tags: violation.tags,
            occurrences: 0,
            affectedPages: []
          };
        }
        results.aggregatedViolations[violation.id].occurrences += violation.nodes.length;
        results.aggregatedViolations[violation.id].affectedPages.push(pagePath);
      });
      
      results.pages[pagePath] = pageResults;
      
      console.log(`   ✅ Passed: ${pageResults.passCount} checks`);
      console.log(`   ⚠️  Violations: ${pageResults.violationCount} (${pageResults.violationsBySeverity.critical} critical)`);
      
    } catch (error) {
      console.error(`❌ Error testing ${pagePath}:`, error.message);
      results.pages[pagePath] = {
        error: error.message,
        timestamp: new Date().toISOString()
      };
    }
  }
  
  await browser.close();
  
  // Calculate compliance score
  const totalChecks = results.summary.passedChecks + results.summary.totalViolations;
  results.summary.complianceScore = totalChecks > 0 ? 
    Math.round((results.summary.passedChecks / totalChecks) * 100) : 0;
    
  results.summary.wcagLevel = results.summary.criticalViolations === 0 && 
                              results.summary.moderateViolations === 0 ? 'AA' : 
                              results.summary.criticalViolations === 0 ? 'A' : 'Failed';
  
  // Save detailed results
  const detailedReportPath = path.join(OUTPUT_DIR, 'accessibility-detailed-report.json');
  fs.writeFileSync(detailedReportPath, JSON.stringify(results, null, 2));
  
  // Generate summary report
  const summaryReport = generateSummaryReport(results);
  const summaryReportPath = path.join(OUTPUT_DIR, 'accessibility-summary-report.md');
  fs.writeFileSync(summaryReportPath, summaryReport);
  
  // Generate violation report
  const violationReport = generateViolationReport(results);
  const violationReportPath = path.join(OUTPUT_DIR, 'accessibility-violations-report.md');
  fs.writeFileSync(violationReportPath, violationReport);
  
  // Display results
  console.log('\n📊 ACCESSIBILITY AUDIT RESULTS');
  console.log('================================');
  console.log(`📄 Pages Tested: ${results.summary.totalPages}`);
  console.log(`✅ Compliance Score: ${results.summary.complianceScore}%`);
  console.log(`🏆 WCAG Level: ${results.summary.wcagLevel}`);
  console.log(`⚠️  Total Violations: ${results.summary.totalViolations}`);
  console.log(`🔴 Critical: ${results.summary.criticalViolations}`);
  console.log(`🟠 Moderate: ${results.summary.moderateViolations}`);
  console.log(`🟡 Minor: ${results.summary.minorViolations}`);
  console.log(`📊 Passed Checks: ${results.summary.passedChecks}`);
  
  console.log(`\n📁 Reports saved to: ${OUTPUT_DIR}/`);
  
  return results;
}

function generateSummaryReport(results) {
  return `# Accessibility Audit Summary Report
Generated: ${results.timestamp}

## Executive Summary

- **Total Pages Tested**: ${results.summary.totalPages}
- **Compliance Score**: ${results.summary.complianceScore}%
- **WCAG 2.1 Level**: ${results.summary.wcagLevel}
- **Pages with Violations**: ${results.summary.pagesWithViolations}/${results.summary.totalPages}

## Violation Breakdown

| Severity | Count | Description |
|----------|-------|-------------|
| Critical | ${results.summary.criticalViolations} | Blocks access for users with disabilities |
| Moderate | ${results.summary.moderateViolations} | Significant barriers to accessibility |
| Minor | ${results.summary.minorViolations} | Minor accessibility improvements needed |

## Passed Checks: ${results.summary.passedChecks}

## Medical Device Marketing Compliance

${results.summary.wcagLevel === 'AA' ? 
  '✅ **COMPLIANT**: Meets WCAG 2.1 AA standards for medical device marketing' :
  '❌ **NON-COMPLIANT**: Does not meet WCAG 2.1 AA standards required for medical device marketing'
}

## Critical Action Items

${results.summary.criticalViolations > 0 ? 
  `⚠️ **IMMEDIATE ACTION REQUIRED**: ${results.summary.criticalViolations} critical accessibility violations must be fixed before production deployment.` :
  '✅ No critical violations found.'
}

## Top Violation Types

${Object.entries(results.aggregatedViolations)
  .sort((a, b) => b[1].occurrences - a[1].occurrences)
  .slice(0, 5)
  .map(([id, violation]) => 
    `- **${violation.id}**: ${violation.occurrences} occurrences (${violation.impact}) - ${violation.description}`
  ).join('\n')}
`;
}

function generateViolationReport(results) {
  let report = `# Detailed Accessibility Violations Report
Generated: ${results.timestamp}

`;

  Object.entries(results.aggregatedViolations).forEach(([id, violation]) => {
    report += `## ${violation.id} (${violation.impact.toUpperCase()})

**Description**: ${violation.description}
**Occurrences**: ${violation.occurrences}
**Affected Pages**: ${violation.affectedPages.join(', ')}
**WCAG Tags**: ${violation.tags.join(', ')}

`;
  });

  return report;
}

// Run the audit
runAccessibilityAudit().catch(console.error);