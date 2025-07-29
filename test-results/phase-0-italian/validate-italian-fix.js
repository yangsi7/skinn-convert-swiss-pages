import puppeteer from 'puppeteer';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BASE_URL = 'http://localhost:8080';
const SCREENSHOT_DIR = path.join(__dirname);

async function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function validateItalianRoutes() {
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: { width: 1440, height: 900 }
  });

  const page = await browser.newPage();
  
  const testResults = {
    passed: [],
    failed: [],
    errors: []
  };
  
  try {
    console.log('🧪 Testing Italian routing implementation...\n');

    // Test 1: Italian Homepage
    console.log('1️⃣ Testing /it homepage...');
    try {
      await page.goto(`${BASE_URL}/it`, { waitUntil: 'networkidle2' });
      await delay(1500);
      
      const title = await page.title();
      const url = page.url();
      
      if (url.includes('/it') && !title.includes('404')) {
        testResults.passed.push('Italian Homepage (/it)');
        console.log('✅ Italian homepage loads successfully');
      } else {
        testResults.failed.push(`Italian Homepage - URL: ${url}, Title: ${title}`);
        console.log('❌ Italian homepage failed');
      }
      
      await page.screenshot({ 
        path: path.join(SCREENSHOT_DIR, '11-italian-homepage-fixed.png'),
        fullPage: false,
        clip: { x: 0, y: 0, width: 1440, height: 900 }
      });
    } catch (error) {
      testResults.errors.push(`Italian Homepage: ${error.message}`);
      console.log('❌ Error loading Italian homepage:', error.message);
    }

    // Test 2: Italian About Page
    console.log('2️⃣ Testing /it/chi-siamo...');
    try {
      await page.goto(`${BASE_URL}/it/chi-siamo`, { waitUntil: 'networkidle2' });
      await delay(1500);
      
      const title = await page.title();
      const url = page.url();
      
      if (url.includes('/it/chi-siamo') && !title.includes('404')) {
        testResults.passed.push('Italian About Page (/it/chi-siamo)');
        console.log('✅ Italian about page loads successfully');
      } else {
        testResults.failed.push(`Italian About Page - URL: ${url}, Title: ${title}`);
        console.log('❌ Italian about page failed');
      }
      
      await page.screenshot({ 
        path: path.join(SCREENSHOT_DIR, '12-italian-about-fixed.png'),
        fullPage: false,
        clip: { x: 0, y: 0, width: 1440, height: 900 }
      });
    } catch (error) {
      testResults.errors.push(`Italian About Page: ${error.message}`);
      console.log('❌ Error loading Italian about page:', error.message);
    }

    // Test 3: Language Selector IT Button
    console.log('3️⃣ Testing language selector...');
    try {
      await page.goto(`${BASE_URL}`, { waitUntil: 'networkidle2' });
      await delay(1000);
      
      // Look for language selector
      const languageElements = await page.$$('nav button, nav a');
      let itButtonFound = false;
      let itButtonText = '';
      
      for (const element of languageElements) {
        const text = await page.evaluate(el => el.textContent?.trim(), element);
        if (text === 'IT') {
          itButtonFound = true;
          itButtonText = text;
          
          console.log('✅ Found IT button, clicking...');
          await element.click();
          await delay(2000);
          
          const newUrl = page.url();
          if (newUrl.includes('/it')) {
            testResults.passed.push('IT Language Selector Click');
            console.log('✅ IT button redirects to Italian routes');
          } else {
            testResults.failed.push(`IT Button Click - redirected to: ${newUrl}`);
            console.log('❌ IT button did not redirect properly');
          }
          break;
        }
      }
      
      if (!itButtonFound) {
        testResults.failed.push('IT Language Button Not Found');
        console.log('❌ IT language button not found in navigation');
      }
      
      await page.screenshot({ 
        path: path.join(SCREENSHOT_DIR, '13-language-selector-test.png'),
        fullPage: false,
        clip: { x: 0, y: 0, width: 1440, height: 600 }
      });
    } catch (error) {
      testResults.errors.push(`Language Selector: ${error.message}`);
      console.log('❌ Error testing language selector:', error.message);
    }

    // Test 4: Italian Solutions Route
    console.log('4️⃣ Testing Italian solutions route...');
    try {
      await page.goto(`${BASE_URL}/it/soluzioni/holter-10-giorni`, { waitUntil: 'networkidle2' });
      await delay(1500);
      
      const title = await page.title();
      const url = page.url();
      
      if (url.includes('/it/soluzioni') && !title.includes('404')) {
        testResults.passed.push('Italian Solutions Route');
        console.log('✅ Italian solutions route works');
      } else {
        testResults.failed.push(`Italian Solutions Route - URL: ${url}, Title: ${title}`);
        console.log('❌ Italian solutions route failed');
      }
    } catch (error) {
      testResults.errors.push(`Italian Solutions: ${error.message}`);
      console.log('❌ Error testing Italian solutions:', error.message);
    }

  } catch (error) {
    console.error('❌ Critical error during testing:', error);
  } finally {
    await browser.close();
  }

  // Generate Results Report
  console.log('\n📊 VALIDATION RESULTS:');
  console.log('='.repeat(50));
  
  console.log(`✅ PASSED TESTS (${testResults.passed.length}):`);
  testResults.passed.forEach(test => console.log(`   • ${test}`));
  
  console.log(`❌ FAILED TESTS (${testResults.failed.length}):`);
  testResults.failed.forEach(test => console.log(`   • ${test}`));
  
  console.log(`⚠️ ERRORS (${testResults.errors.length}):`);
  testResults.errors.forEach(error => console.log(`   • ${error}`));
  
  const successRate = Math.round((testResults.passed.length / (testResults.passed.length + testResults.failed.length + testResults.errors.length)) * 100);
  console.log(`\n🎯 SUCCESS RATE: ${successRate}%`);
  
  if (testResults.passed.length >= 3) {
    console.log('🎉 ITALIAN ROUTING IMPLEMENTATION: SUCCESS');
  } else {
    console.log('🚨 ITALIAN ROUTING IMPLEMENTATION: NEEDS WORK');
  }
  
  return testResults;
}

// Run the test
validateItalianRoutes().catch(console.error);