import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function captureScreenshots() {
  const browser = await puppeteer.launch({
    headless: true,
    defaultViewport: { width: 1920, height: 1080 }
  });
  
  const page = await browser.newPage();
  const resultsDir = path.join(__dirname, '..', 'test-results', 'visual-inspection-v7-2');
  
  // Helper function to capture screenshot
  async function capture(url, filename, waitFor = 2000) {
    try {
      console.log(`Capturing ${filename}...`);
      await page.goto(`http://localhost:8080${url}`, { waitUntil: 'networkidle2' });
      await new Promise(resolve => setTimeout(resolve, waitFor));
      await page.screenshot({ 
        path: path.join(resultsDir, filename), 
        fullPage: true 
      });
      console.log(`✓ Captured ${filename}`);
    } catch (error) {
      console.error(`✗ Failed to capture ${filename}: ${error.message}`);
    }
  }
  
  // Helper function to scroll to element and capture
  async function captureSection(selector, filename, waitFor = 1000) {
    try {
      console.log(`Capturing section ${filename}...`);
      await page.evaluate((sel) => {
        const element = document.querySelector(sel);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, selector);
      await new Promise(resolve => setTimeout(resolve, waitFor));
      await page.screenshot({ 
        path: path.join(resultsDir, filename), 
        fullPage: false 
      });
      console.log(`✓ Captured section ${filename}`);
    } catch (error) {
      console.error(`✗ Failed to capture section ${filename}: ${error.message}`);
    }
  }
  
  // 1. Homepage with different hero variants
  console.log('\n=== Capturing Hero Variants ===');
  await capture('/?variant=A', '01-hero-variant-A.png');
  await capture('/?variant=B', '02-hero-variant-B.png');
  await capture('/?variant=C', '03-hero-variant-C.png');
  
  // 2. Homepage sections
  console.log('\n=== Capturing Homepage Sections ===');
  await page.goto('http://localhost:8080/', { waitUntil: 'networkidle2' });
  await new Promise(resolve => setTimeout(resolve, 2000));
  
  // Full homepage
  await page.screenshot({ 
    path: path.join(resultsDir, '04-homepage-full.png'), 
    fullPage: true 
  });
  
  // Individual sections
  await captureSection('[data-testid="statistics-showcase"]', '05-statistics-showcase.png');
  await captureSection('[data-testid="problem-solution"]', '06-problem-solution-section.png');
  await captureSection('[data-testid="product-section"]', '07-product-section.png');
  await captureSection('[data-testid="numbers-section"]', '08-numbers-section.png');
  await captureSection('[data-testid="clinically-proven"]', '09-clinically-proven-tech.png');
  await captureSection('[data-testid="care360-section"]', '10-care360-section.png');
  await captureSection('[data-testid="tech-carousel"]', '11-tech-carousel.png');
  await captureSection('[data-testid="process-flow"]', '12-process-flow.png');
  
  // 3. GP page to verify MVCP section
  console.log('\n=== Capturing GP Page ===');
  await capture('/partners/general-practitioners', '13-gp-page-full.png', 3000);
  
  // Try to capture MVCP section specifically
  await page.goto('http://localhost:8080/partners/general-practitioners', { waitUntil: 'networkidle2' });
  await new Promise(resolve => setTimeout(resolve, 2000));
  await captureSection('[data-testid="mvcp-section"]', '14-mvcp-section.png');
  
  // 4. Mobile views
  console.log('\n=== Capturing Mobile Views ===');
  await page.setViewport({ width: 375, height: 812 }); // iPhone X size
  await capture('/', '15-mobile-homepage.png');
  await capture('/partners/general-practitioners', '16-mobile-gp-page.png');
  
  // 5. Check for missing components or visual issues
  console.log('\n=== Checking for Visual Issues ===');
  await page.setViewport({ width: 1920, height: 1080 });
  await page.goto('http://localhost:8080/', { waitUntil: 'networkidle2' });
  
  // Check for console errors
  const consoleErrors = [];
  page.on('console', msg => {
    if (msg.type() === 'error') {
      consoleErrors.push(msg.text());
    }
  });
  
  // Check for missing images
  const missingImages = await page.evaluate(() => {
    const images = Array.from(document.querySelectorAll('img'));
    return images
      .filter(img => !img.complete || img.naturalHeight === 0)
      .map(img => img.src);
  });
  
  // Generate report
  const report = {
    timestamp: new Date().toISOString(),
    screenshotsCaptured: fs.readdirSync(resultsDir).filter(f => f.endsWith('.png')).length,
    consoleErrors,
    missingImages,
    v72Requirements: {
      heroVariants: {
        status: 'TO_VERIFY',
        notes: 'Check screenshots 01-03 for A/B/C variants with emotional subtitles'
      },
      statistics: {
        required: ['70%', '20-30%', '66% vs 9%'],
        status: 'TO_VERIFY',
        notes: 'Check screenshot 05 for correct statistics'
      },
      silentTriad: {
        status: 'TO_VERIFY',
        notes: 'Check screenshot 06 for ECG + ABPM + Sleep narrative'
      },
      productSection: {
        required: '8 benefit cards',
        status: 'TO_VERIFY',
        notes: 'Check screenshot 07 for 2x4 grid layout'
      },
      mvcp: {
        required: 'Should be on GP page, not homepage',
        status: 'TO_VERIFY',
        notes: 'Check screenshots 13-14 for MVCP section on GP page'
      }
    }
  };
  
  fs.writeFileSync(
    path.join(resultsDir, 'inspection-report.json'),
    JSON.stringify(report, null, 2)
  );
  
  console.log('\n=== Visual Inspection Complete ===');
  console.log(`Screenshots saved to: ${resultsDir}`);
  console.log(`Total screenshots: ${report.screenshotsCaptured}`);
  console.log(`Console errors: ${consoleErrors.length}`);
  console.log(`Missing images: ${missingImages.length}`);
  
  await browser.close();
}

// Run the inspection
captureScreenshots().catch(console.error);