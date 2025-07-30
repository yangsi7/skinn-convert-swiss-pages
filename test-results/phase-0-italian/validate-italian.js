import puppeteer from 'puppeteer';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BASE_URL = 'http://localhost:8081';
const SCREENSHOT_DIR = path.join(__dirname);

async function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function captureScreenshots() {
  const browser = await puppeteer.launch({
    headless: false, // Set to true for headless mode
    defaultViewport: { width: 1440, height: 900 }
  });

  const page = await browser.newPage();
  
  try {
    console.log('Starting Italian language validation...\n');

    // 1. Homepage in Italian
    console.log('1. Capturing Italian homepage...');
    await page.goto(`${BASE_URL}/it`, { waitUntil: 'networkidle2' });
    await delay(2000); // Wait for any animations
    await page.screenshot({ 
      path: path.join(SCREENSHOT_DIR, '01-homepage-italian.png'),
      fullPage: true
    });
    console.log('✓ Italian homepage captured');

    // 2. Language switcher dropdown
    console.log('2. Capturing language switcher...');
    await page.goto(`${BASE_URL}`, { waitUntil: 'networkidle2' });
    await delay(1000);
    
    // Look for language selector and click it
    const languageSelectors = [
      '[data-testid="language-selector"]',
      '.language-selector',
      'button[aria-label*="language"]',
      'button[aria-label*="Language"]',
      'select[name="language"]',
      '[role="button"]:has-text("EN")',
      'button:has-text("EN")',
      '.flag-icon'
    ];
    
    let languageSelectorFound = false;
    for (const selector of languageSelectors) {
      try {
        await page.waitForSelector(selector, { timeout: 1000 });
        await page.click(selector);
        languageSelectorFound = true;
        console.log(`Found language selector: ${selector}`);
        break;
      } catch (e) {
        // Continue to next selector
      }
    }
    
    if (languageSelectorFound) {
      await delay(500);
      await page.screenshot({ 
        path: path.join(SCREENSHOT_DIR, '02-language-dropdown-open.png'),
        fullPage: false
      });
      console.log('✓ Language dropdown captured');
    } else {
      console.log('⚠ Language selector not found - capturing current state');
      await page.screenshot({ 
        path: path.join(SCREENSHOT_DIR, '02-no-language-selector.png'),
        fullPage: false
      });
    }

    // 3. Test language switching from English to Italian
    console.log('3. Testing language switch EN → IT...');
    await page.goto(`${BASE_URL}`, { waitUntil: 'networkidle2' });
    await delay(1000);
    
    // Try to find and click Italian option
    const italianSelectors = [
      'a[href*="/it"]',
      'button[data-lang="it"]',
      'option[value="it"]',
      'li:has-text("Italiano")',
      'li:has-text("IT")',
      '.flag-it',
      '[data-testid="language-it"]'
    ];
    
    let italianFound = false;
    for (const selector of italianSelectors) {
      try {
        const element = await page.$(selector);
        if (element) {
          await element.click();
          italianFound = true;
          console.log(`Clicked Italian option: ${selector}`);
          break;
        }
      } catch (e) {
        // Continue
      }
    }
    
    if (!italianFound) {
      // Manually navigate to Italian
      await page.goto(`${BASE_URL}/it`, { waitUntil: 'networkidle2' });
    }
    
    await delay(2000);
    await page.screenshot({ 
      path: path.join(SCREENSHOT_DIR, '03-after-language-switch.png'),
      fullPage: true
    });
    console.log('✓ Language switch result captured');

    // 4. About page in Italian
    console.log('4. Capturing About page in Italian...');
    await page.goto(`${BASE_URL}/it/chi-siamo`, { waitUntil: 'networkidle2' });
    await delay(2000);
    await page.screenshot({ 
      path: path.join(SCREENSHOT_DIR, '04-about-page-italian.png'),
      fullPage: true
    });
    console.log('✓ Italian About page captured');

    // 5. Check navigation links
    console.log('5. Testing navigation links...');
    await page.goto(`${BASE_URL}/it`, { waitUntil: 'networkidle2' });
    await delay(1000);
    
    // Look for navigation links
    const navLinks = await page.$$eval('nav a, .nav a, [role="navigation"] a', links => 
      links.map(link => ({ href: link.href, text: link.textContent.trim() }))
    );
    
    console.log('Found navigation links:', navLinks.slice(0, 5)); // Show first 5
    
    await page.screenshot({ 
      path: path.join(SCREENSHOT_DIR, '05-navigation-italian.png'),
      fullPage: false,
      clip: { x: 0, y: 0, width: 1440, height: 400 } // Top portion with nav
    });
    console.log('✓ Italian navigation captured');

    // 6. Check for translation issues
    console.log('6. Checking for translation issues...');
    const pageText = await page.evaluate(() => document.body.innerText);
    
    // Look for common translation issues
    const issues = [];
    if (pageText.includes('{{') || pageText.includes('}}')) {
      issues.push('Template variables not resolved');
    }
    if (pageText.includes('translation.')) {
      issues.push('Translation keys not resolved');
    }
    if (pageText.includes('[object Object]')) {
      issues.push('Object rendering issues');
    }
    
    const report = {
      timestamp: new Date().toISOString(),
      url: page.url(),
      issues: issues,
      hasItalianContent: pageText.includes('SKIIN') && (
        pageText.includes('Cardiovascolare') || 
        pageText.includes('Salute') || 
        pageText.includes('Italiano') ||
        pageText.includes('Svizzera')
      ),
      sampleText: pageText.substring(0, 200) + '...'
    };
    
    await fs.promises.writeFile(
      path.join(SCREENSHOT_DIR, '06-translation-report.json'),
      JSON.stringify(report, null, 2)
    );
    
    console.log('✓ Translation analysis complete');
    console.log('Issues found:', issues.length > 0 ? issues : 'None');

    // 7. Footer and key sections
    console.log('7. Capturing footer and key sections...');
    await page.goto(`${BASE_URL}/it`, { waitUntil: 'networkidle2' });
    await delay(1000);
    
    // Scroll to footer
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await delay(1000);
    
    await page.screenshot({ 
      path: path.join(SCREENSHOT_DIR, '07-footer-italian.png'),
      fullPage: false,
      clip: { x: 0, y: 600, width: 1440, height: 300 }
    });
    console.log('✓ Italian footer captured');

  } catch (error) {
    console.error('Error during screenshot capture:', error);
  } finally {
    await browser.close();
  }

  console.log('\n=== Italian Validation Complete ===');
  console.log(`Screenshots saved to: ${SCREENSHOT_DIR}`);
  console.log('Files created:');
  const files = await fs.promises.readdir(SCREENSHOT_DIR);
  files.forEach(file => console.log(`  - ${file}`));
}

// Run the validation
captureScreenshots().catch(console.error);