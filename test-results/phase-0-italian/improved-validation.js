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

async function testLanguageSelector() {
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: { width: 1440, height: 900 }
  });

  const page = await browser.newPage();
  
  try {
    console.log('Testing language selector functionality...\n');

    // Start with English homepage
    await page.goto(`${BASE_URL}`, { waitUntil: 'networkidle2' });
    await delay(1000);
    
    // Take screenshot of initial state
    await page.screenshot({ 
      path: path.join(SCREENSHOT_DIR, '08-initial-english.png'),
      fullPage: false,
      clip: { x: 0, y: 0, width: 1440, height: 500 }
    });

    // Try to click IT language selector
    try {
      const itButton = await page.$('button:has-text("IT"), a:has-text("IT"), [data-lang="it"]');
      if (itButton) {
        console.log('Found IT button, clicking...');
        await itButton.click();
        await delay(2000);
        
        // Take screenshot after clicking IT
        await page.screenshot({ 
          path: path.join(SCREENSHOT_DIR, '09-after-clicking-it.png'),
          fullPage: true
        });
        
        console.log('Current URL after IT click:', page.url());
      } else {
        console.log('IT button not found via selectors');
        // Try direct navigation
        await page.goto(`${BASE_URL}/it`, { waitUntil: 'networkidle2' });
        await delay(1000);
        
        await page.screenshot({ 
          path: path.join(SCREENSHOT_DIR, '09-direct-it-navigation.png'),
          fullPage: true
        });
      }
    } catch (error) {
      console.log('Error with IT selector:', error.message);
    }

    // Test German language selector to verify it works
    await page.goto(`${BASE_URL}`, { waitUntil: 'networkidle2' });
    await delay(1000);
    
    try {
      // Look for DE button more specifically
      const deElements = await page.$$('button, a, span');
      let deButton = null;
      
      for (const element of deElements) {
        const text = await page.evaluate(el => el.textContent?.trim(), element);
        if (text === 'DE') {
          deButton = element;
          break;
        }
      }
      
      if (deButton) {
        console.log('Found DE button, clicking...');
        await deButton.click();
        await delay(2000);
        
        await page.screenshot({ 
          path: path.join(SCREENSHOT_DIR, '10-after-clicking-de.png'),
          fullPage: true
        });
        
        console.log('Current URL after DE click:', page.url());
      }
    } catch (error) {
      console.log('Error with DE selector:', error.message);
    }

  } catch (error) {
    console.error('Error during language selector test:', error);
  } finally {
    await browser.close();
  }
}

// Run the test
testLanguageSelector().catch(console.error);