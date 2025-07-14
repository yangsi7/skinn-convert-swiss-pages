import puppeteer from 'puppeteer';
import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration
const BASE_URL = 'http://localhost:8081';
const SCREENSHOT_DIR = path.join(__dirname, 'visual-testing-baseline');
const VIEWPORTS = [
  { name: 'desktop', width: 1920, height: 1080 },
  { name: 'laptop', width: 1366, height: 768 },
  { name: 'tablet', width: 768, height: 1024 },
  { name: 'mobile', width: 375, height: 667 }
];

// Test pages with their routes in all languages
const PAGES = [
  // Homepage
  { name: 'home', paths: { en: '/', de: '/de', fr: '/fr' } },
  // About page
  { name: 'about', paths: { en: '/about', de: '/de/uber-uns', fr: '/fr/a-propos' } },
  // Solutions page
  { name: 'solutions', paths: { en: '/solutions', de: '/de/losungen', fr: '/fr/solutions' } },
  // How it works
  { name: 'how-it-works', paths: { en: '/how-it-works', de: '/de/wie-es-funktioniert', fr: '/fr/comment-ca-marche' } },
  // Evidence page
  { name: 'evidence', paths: { en: '/evidence', de: '/de/nachweise', fr: '/fr/preuves' } },
  // Partners page
  { name: 'partners', paths: { en: '/partners', de: '/de/partner', fr: '/fr/partenaires' } },
  // FAQ page
  { name: 'faq', paths: { en: '/faq', de: '/de/faq', fr: '/fr/faq' } },
  // Contact page
  { name: 'contact', paths: { en: '/contact', de: '/de/kontakt', fr: '/fr/contact' } }
];

// Test results storage
const testResults = {
  timestamp: new Date().toISOString(),
  baseUrl: BASE_URL,
  pages: {},
  languageSwitching: {},
  navigation: {},
  responsiveness: {},
  issues: []
};

async function createScreenshotDir() {
  try {
    await fs.mkdir(SCREENSHOT_DIR, { recursive: true });
    for (const viewport of VIEWPORTS) {
      await fs.mkdir(path.join(SCREENSHOT_DIR, viewport.name), { recursive: true });
    }
  } catch (error) {
    console.error('Error creating screenshot directories:', error);
  }
}

async function testPage(browser, page, pageConfig, viewport, lang) {
  const url = `${BASE_URL}${pageConfig.paths[lang]}`;
  const screenshotName = `${pageConfig.name}-${lang}-${viewport.name}.png`;
  const screenshotPath = path.join(SCREENSHOT_DIR, viewport.name, screenshotName);
  
  console.log(`Testing ${pageConfig.name} (${lang}) at ${viewport.name} viewport...`);
  
  const pageResults = {
    url,
    viewport: viewport.name,
    language: lang,
    timestamp: new Date().toISOString(),
    issues: [],
    metrics: {}
  };
  
  try {
    // Navigate to page
    const response = await page.goto(url, { 
      waitUntil: 'networkidle0',
      timeout: 30000 
    });
    
    pageResults.statusCode = response.status();
    
    if (response.status() !== 200) {
      pageResults.issues.push(`HTTP ${response.status()} error`);
      testResults.issues.push({
        page: pageConfig.name,
        language: lang,
        viewport: viewport.name,
        issue: `HTTP ${response.status()} error`,
        severity: 'high'
      });
    }
    
    // Wait for content to load
    await page.waitForTimeout(2000);
    
    // Check for console errors
    page.on('console', msg => {
      if (msg.type() === 'error') {
        pageResults.issues.push(`Console error: ${msg.text()}`);
      }
    });
    
    // Take screenshot
    await page.screenshot({ 
      path: screenshotPath, 
      fullPage: true 
    });
    
    // Test page-specific elements
    const pageTests = await page.evaluate(() => {
      const results = {
        hasNavbar: !!document.querySelector('nav'),
        hasFooter: !!document.querySelector('footer'),
        hasLanguageSwitcher: !!document.querySelector('[class*="language"]'),
        pageTitle: document.title,
        headings: Array.from(document.querySelectorAll('h1, h2')).map(h => ({
          tag: h.tagName,
          text: h.textContent.trim()
        })),
        images: Array.from(document.querySelectorAll('img')).map(img => ({
          src: img.src,
          alt: img.alt,
          hasAlt: !!img.alt
        })),
        links: Array.from(document.querySelectorAll('a')).map(a => ({
          href: a.href,
          text: a.textContent.trim()
        })),
        forms: Array.from(document.querySelectorAll('form')).length,
        buttons: Array.from(document.querySelectorAll('button')).length
      };
      
      // Check for broken images
      results.brokenImages = results.images.filter(img => !img.src || img.src.includes('undefined'));
      
      // Check for missing alt text
      results.missingAltText = results.images.filter(img => !img.hasAlt).length;
      
      return results;
    });
    
    pageResults.elements = pageTests;
    
    // Check for visual issues
    if (pageTests.brokenImages.length > 0) {
      pageResults.issues.push(`${pageTests.brokenImages.length} broken images found`);
    }
    
    if (pageTests.missingAltText > 0) {
      pageResults.issues.push(`${pageTests.missingAltText} images missing alt text`);
    }
    
    if (!pageTests.hasNavbar) {
      pageResults.issues.push('Navigation bar not found');
    }
    
    if (!pageTests.hasFooter) {
      pageResults.issues.push('Footer not found');
    }
    
    // Test language switching
    if (pageTests.hasLanguageSwitcher && viewport.name !== 'mobile') {
      console.log('  Testing language switching...');
      const languageSwitchResults = await testLanguageSwitching(page, pageConfig, lang);
      pageResults.languageSwitching = languageSwitchResults;
    }
    
    // Performance metrics
    const metrics = await page.metrics();
    pageResults.metrics = {
      timestamp: metrics.Timestamp,
      layoutDuration: metrics.LayoutDuration,
      scriptDuration: metrics.ScriptDuration,
      taskDuration: metrics.TaskDuration
    };
    
  } catch (error) {
    console.error(`Error testing ${pageConfig.name} (${lang}):`, error.message);
    pageResults.error = error.message;
    pageResults.issues.push(`Page error: ${error.message}`);
    testResults.issues.push({
      page: pageConfig.name,
      language: lang,
      viewport: viewport.name,
      issue: error.message,
      severity: 'critical'
    });
  }
  
  return pageResults;
}

async function testLanguageSwitching(page, pageConfig, currentLang) {
  const results = {
    currentLanguage: currentLang,
    switchTests: {}
  };
  
  try {
    // Find language switcher
    const languageSwitcher = await page.$('[class*="language"]');
    if (!languageSwitcher) {
      results.error = 'Language switcher not found';
      return results;
    }
    
    // Get current URL
    const currentUrl = page.url();
    
    // Test switching to each language
    for (const targetLang of ['en', 'de', 'fr']) {
      if (targetLang === currentLang) continue;
      
      try {
        // Click language switcher
        await languageSwitcher.click();
        await page.waitForTimeout(500);
        
        // Find and click target language
        const langOption = await page.$(`[data-lang="${targetLang}"], a[href*="/${targetLang}"]`);
        if (langOption) {
          await langOption.click();
          await page.waitForTimeout(2000);
          
          const newUrl = page.url();
          const expectedUrl = `${BASE_URL}${pageConfig.paths[targetLang]}`;
          
          results.switchTests[targetLang] = {
            success: newUrl === expectedUrl,
            expectedUrl,
            actualUrl: newUrl
          };
          
          // Switch back
          await page.goto(currentUrl);
          await page.waitForTimeout(1000);
        } else {
          results.switchTests[targetLang] = {
            success: false,
            error: 'Language option not found'
          };
        }
      } catch (error) {
        results.switchTests[targetLang] = {
          success: false,
          error: error.message
        };
      }
    }
  } catch (error) {
    results.error = error.message;
  }
  
  return results;
}

async function testNavigation(browser, page) {
  console.log('Testing navigation functionality...');
  
  const navResults = {
    desktop: {},
    mobile: {}
  };
  
  // Test desktop navigation
  await page.setViewport(VIEWPORTS[0]);
  await page.goto(BASE_URL, { waitUntil: 'networkidle0' });
  
  try {
    const navLinks = await page.evaluate(() => {
      const links = Array.from(document.querySelectorAll('nav a'));
      return links.map(link => ({
        text: link.textContent.trim(),
        href: link.href,
        isVisible: link.offsetParent !== null
      }));
    });
    
    navResults.desktop.linkCount = navLinks.length;
    navResults.desktop.links = navLinks;
    navResults.desktop.visibleLinks = navLinks.filter(l => l.isVisible).length;
    
    // Test clicking each nav link
    for (const link of navLinks) {
      if (link.isVisible && !link.href.includes('#')) {
        try {
          await page.goto(link.href, { waitUntil: 'networkidle0', timeout: 10000 });
          const status = page.url() === link.href ? 'success' : 'redirect';
          navResults.desktop[link.text] = { status, finalUrl: page.url() };
        } catch (error) {
          navResults.desktop[link.text] = { status: 'error', error: error.message };
        }
      }
    }
  } catch (error) {
    navResults.desktop.error = error.message;
  }
  
  // Test mobile navigation
  await page.setViewport(VIEWPORTS[3]);
  await page.goto(BASE_URL, { waitUntil: 'networkidle0' });
  
  try {
    // Look for hamburger menu
    const hamburger = await page.$('[class*="hamburger"], [class*="menu-button"], button[aria-label*="menu"]');
    if (hamburger) {
      navResults.mobile.hasHamburgerMenu = true;
      
      // Click hamburger
      await hamburger.click();
      await page.waitForTimeout(1000);
      
      // Check if menu opened
      const mobileMenuVisible = await page.evaluate(() => {
        const menu = document.querySelector('[class*="mobile-menu"], nav[class*="open"]');
        return menu && menu.offsetParent !== null;
      });
      
      navResults.mobile.menuOpens = mobileMenuVisible;
    } else {
      navResults.mobile.hasHamburgerMenu = false;
    }
  } catch (error) {
    navResults.mobile.error = error.message;
  }
  
  return navResults;
}

async function generateReport() {
  const reportPath = path.join(SCREENSHOT_DIR, 'visual-baseline-report.json');
  await fs.writeFile(reportPath, JSON.stringify(testResults, null, 2));
  
  // Generate markdown report
  const markdownReport = `# Visual Testing Baseline Report

**Generated**: ${testResults.timestamp}
**Base URL**: ${testResults.baseUrl}

## Summary

- **Total Pages Tested**: ${PAGES.length}
- **Languages Tested**: EN, DE, FR
- **Viewports Tested**: ${VIEWPORTS.map(v => v.name).join(', ')}
- **Total Issues Found**: ${testResults.issues.length}

## Critical Issues

${testResults.issues.filter(i => i.severity === 'critical').map(issue => 
  `- **${issue.page}** (${issue.language}, ${issue.viewport}): ${issue.issue}`
).join('\n') || 'No critical issues found.'}

## High Priority Issues

${testResults.issues.filter(i => i.severity === 'high').map(issue => 
  `- **${issue.page}** (${issue.language}, ${issue.viewport}): ${issue.issue}`
).join('\n') || 'No high priority issues found.'}

## Page-by-Page Results

${Object.entries(testResults.pages).map(([pageKey, pageData]) => {
  const [pageName, lang, viewport] = pageKey.split('-');
  return `
### ${pageName} (${lang}) - ${viewport}

- **URL**: ${pageData.url}
- **Status**: ${pageData.statusCode || 'N/A'}
- **Issues**: ${pageData.issues.length > 0 ? pageData.issues.join(', ') : 'None'}
- **Elements**:
  - Navbar: ${pageData.elements?.hasNavbar ? '✓' : '✗'}
  - Footer: ${pageData.elements?.hasFooter ? '✓' : '✗'}
  - Language Switcher: ${pageData.elements?.hasLanguageSwitcher ? '✓' : '✗'}
  - Forms: ${pageData.elements?.forms || 0}
  - Buttons: ${pageData.elements?.buttons || 0}
`;
}).join('\n')}

## Navigation Test Results

### Desktop Navigation
- **Total Links**: ${testResults.navigation.desktop?.linkCount || 0}
- **Visible Links**: ${testResults.navigation.desktop?.visibleLinks || 0}

### Mobile Navigation
- **Has Hamburger Menu**: ${testResults.navigation.mobile?.hasHamburgerMenu ? '✓' : '✗'}
- **Menu Opens**: ${testResults.navigation.mobile?.menuOpens ? '✓' : '✗'}

## Screenshots

All screenshots have been saved to: \`${SCREENSHOT_DIR}\`

Organized by viewport:
- \`desktop/\` - 1920x1080
- \`laptop/\` - 1366x768
- \`tablet/\` - 768x1024
- \`mobile/\` - 375x667
`;
  
  const markdownPath = path.join(SCREENSHOT_DIR, 'VISUAL_BASELINE_REPORT.md');
  await fs.writeFile(markdownPath, markdownReport);
  
  console.log(`\nReports generated:`);
  console.log(`- JSON: ${reportPath}`);
  console.log(`- Markdown: ${markdownPath}`);
}

async function runVisualTests() {
  console.log('Starting visual baseline testing...\n');
  
  await createScreenshotDir();
  
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  
  try {
    // Test each page in each language at each viewport
    for (const viewport of VIEWPORTS) {
      const page = await browser.newPage();
      await page.setViewport(viewport);
      
      for (const pageConfig of PAGES) {
        for (const lang of ['en', 'de', 'fr']) {
          const results = await testPage(browser, page, pageConfig, viewport, lang);
          const key = `${pageConfig.name}-${lang}-${viewport.name}`;
          testResults.pages[key] = results;
        }
      }
      
      await page.close();
    }
    
    // Test navigation
    const navPage = await browser.newPage();
    testResults.navigation = await testNavigation(browser, navPage);
    await navPage.close();
    
  } catch (error) {
    console.error('Error during testing:', error);
    testResults.fatalError = error.message;
  } finally {
    await browser.close();
  }
  
  // Generate report
  await generateReport();
  
  console.log('\nVisual testing complete!');
  console.log(`Total issues found: ${testResults.issues.length}`);
}

// Run the tests
runVisualTests().catch(console.error);