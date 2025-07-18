const puppeteer = require('puppeteer');
const fs = require('fs').promises;
const path = require('path');

const BASE_URL = 'http://localhost:8080';
const SCREENSHOT_DIR = path.join(__dirname, '../test-results/quick-visual-test');

async function ensureDir(dir) {
  try {
    await fs.mkdir(dir, { recursive: true });
  } catch (e) {
    // Directory exists
  }
}

async function runQuickTest() {
  console.log('Starting quick visual test...');
  await ensureDir(SCREENSHOT_DIR);
  
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: { width: 1920, height: 1080 }
  });
  
  try {
    const page = await browser.newPage();
    
    // Test 1: Homepage with default theme
    console.log('Testing homepage...');
    await page.goto(BASE_URL);
    await page.waitForTimeout(2000);
    await page.screenshot({ 
      path: path.join(SCREENSHOT_DIR, '01-homepage-default.png'), 
      fullPage: true 
    });
    
    // Test 2: Check IBM Plex Sans font
    const fontFamily = await page.evaluate(() => {
      return window.getComputedStyle(document.body).fontFamily;
    });
    console.log('Font family:', fontFamily);
    
    // Test 3: Check theme switching
    console.log('Testing theme switcher...');
    await page.click('[aria-label="Toggle theme"]');
    await page.waitForTimeout(500);
    await page.screenshot({ 
      path: path.join(SCREENSHOT_DIR, '02-theme-switcher-open.png'), 
      fullPage: false 
    });
    
    // Test 4: Check 5-step process
    console.log('Scrolling to How It Works section...');
    await page.evaluate(() => {
      const section = document.querySelector('.section-padding');
      if (section) section.scrollIntoView();
    });
    await page.waitForTimeout(1000);
    await page.screenshot({ 
      path: path.join(SCREENSHOT_DIR, '03-how-it-works-5-steps.png'), 
      fullPage: false 
    });
    
    // Test 5: TriTest Report with theme
    console.log('Testing TriTest Report...');
    await page.goto(`${BASE_URL}/tritest`);
    await page.waitForTimeout(2000);
    await page.screenshot({ 
      path: path.join(SCREENSHOT_DIR, '04-tritest-report-themed.png'), 
      fullPage: true 
    });
    
    // Test 6: EligibilityChecker in German
    console.log('Testing EligibilityChecker in German...');
    await page.goto(`${BASE_URL}/de`);
    await page.waitForTimeout(2000);
    await page.evaluate(() => {
      const elem = document.querySelector('h2');
      if (elem && elem.textContent.includes('Kostenübernahme')) {
        elem.scrollIntoView();
      }
    });
    await page.waitForTimeout(1000);
    await page.screenshot({ 
      path: path.join(SCREENSHOT_DIR, '05-eligibility-german.png'), 
      fullPage: false 
    });
    
    console.log('\n✅ Quick visual test completed!');
    console.log(`Screenshots saved to: ${SCREENSHOT_DIR}`);
    
  } catch (error) {
    console.error('Error during testing:', error);
  } finally {
    await browser.close();
  }
}

runQuickTest().catch(console.error);