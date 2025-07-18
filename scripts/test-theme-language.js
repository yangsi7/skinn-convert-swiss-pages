const puppeteer = require('puppeteer');
const fs = require('fs').promises;
const path = require('path');

// Test configuration
const BASE_URL = 'http://localhost:8080';
const THEMES = ['medical-blue', 'professional-teal', 'swiss-innovation', 'soft-blue-teal'];
const LANGUAGES = ['en', 'de', 'fr'];
const TEST_PAGES = [
  { path: '/', name: 'homepage' },
  { path: '/tritest', name: 'tritest' }
];

const SCREENSHOT_DIR = path.join(__dirname, '../test-results/theme-language-tests');

async function ensureDir(dir) {
  try {
    await fs.mkdir(dir, { recursive: true });
  } catch (e) {
    // Directory exists
  }
}

async function switchTheme(page, theme) {
  // Click theme switcher button
  await page.waitForSelector('[aria-label="Toggle theme"]', { timeout: 5000 });
  await page.click('[aria-label="Toggle theme"]');
  
  // Wait for dropdown to appear
  await page.waitForSelector('[role="menu"]', { timeout: 2000 });
  
  // Click the specific theme
  const themeSelector = `[role="menuitem"]:has-text("${theme.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}")`;
  await page.waitForSelector(themeSelector, { timeout: 2000 });
  await page.click(themeSelector);
  
  // Wait for theme to apply
  await page.waitForTimeout(500);
}

async function switchLanguage(page, language) {
  // Navigate to language-specific URL
  const currentUrl = page.url();
  const url = new URL(currentUrl);
  
  // Update path for language
  if (language === 'en') {
    // Remove language prefix for English
    url.pathname = url.pathname.replace(/^\/(de|fr)/, '');
  } else {
    // Add or replace language prefix
    if (url.pathname.match(/^\/(de|fr)/)) {
      url.pathname = url.pathname.replace(/^\/(de|fr)/, `/${language}`);
    } else {
      url.pathname = `/${language}${url.pathname}`;
    }
  }
  
  await page.goto(url.toString());
  await page.waitForTimeout(1000);
}

async function takeScreenshot(page, name) {
  const screenshotPath = path.join(SCREENSHOT_DIR, `${name}.png`);
  await page.screenshot({ 
    path: screenshotPath, 
    fullPage: true 
  });
  console.log(`Screenshot saved: ${name}.png`);
}

async function runTests() {
  console.log('Starting theme and language tests...');
  
  // Ensure screenshot directory exists
  await ensureDir(SCREENSHOT_DIR);
  
  const browser = await puppeteer.launch({
    headless: false, // Set to true for CI
    defaultViewport: { width: 1920, height: 1080 }
  });
  
  try {
    const page = await browser.newPage();
    
    // Test theme switching on homepage
    console.log('\n=== Testing Theme Switching ===');
    await page.goto(BASE_URL);
    await page.waitForTimeout(2000);
    
    for (const theme of THEMES) {
      console.log(`Testing theme: ${theme}`);
      await switchTheme(page, theme);
      await takeScreenshot(page, `theme-${theme}-homepage`);
    }
    
    // Test theme switching on TriTest page
    await page.goto(`${BASE_URL}/tritest`);
    await page.waitForTimeout(2000);
    
    for (const theme of THEMES) {
      console.log(`Testing theme on TriTest: ${theme}`);
      await switchTheme(page, theme);
      await takeScreenshot(page, `theme-${theme}-tritest`);
    }
    
    // Test language switching
    console.log('\n=== Testing Language Switching ===');
    
    // Reset to default theme
    await page.goto(BASE_URL);
    await switchTheme(page, 'medical-blue');
    
    for (const lang of LANGUAGES) {
      console.log(`Testing language: ${lang}`);
      await switchLanguage(page, lang);
      await takeScreenshot(page, `language-${lang}-homepage`);
      
      // Test EligibilityChecker in different languages
      await page.evaluate(() => {
        window.scrollTo(0, document.body.scrollHeight);
      });
      await page.waitForTimeout(1000);
      await takeScreenshot(page, `language-${lang}-eligibility`);
    }
    
    // Test combined theme + language
    console.log('\n=== Testing Combined Theme + Language ===');
    
    for (const theme of ['medical-blue', 'swiss-innovation']) {
      for (const lang of ['de', 'fr']) {
        console.log(`Testing ${theme} + ${lang}`);
        await switchLanguage(page, lang);
        await switchTheme(page, theme);
        await takeScreenshot(page, `combined-${theme}-${lang}`);
      }
    }
    
    console.log('\n✅ All tests completed!');
    console.log(`Screenshots saved to: ${SCREENSHOT_DIR}`);
    
  } catch (error) {
    console.error('Error during testing:', error);
  } finally {
    await browser.close();
  }
}

// Run the tests
runTests().catch(console.error);