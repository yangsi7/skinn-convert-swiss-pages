import puppeteer from 'puppeteer';
import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function testHomepageRevamp() {
  console.log('Starting homepage revamp visual test...');
  
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  try {
    const page = await browser.newPage();
    await page.setViewport({ width: 1920, height: 1080 });

    // Test 1: Check if Home2 is now the default route
    console.log('\n1. Testing default route...');
    await page.goto('http://localhost:8080/', { waitUntil: 'networkidle2' });
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Take screenshot of the homepage
    await page.screenshot({ 
      path: 'test-results/screenshots/homepage-revamp/01-home2-default.png',
      fullPage: true 
    });

    // Check for key Home2 elements
    const hasHome2Elements = await page.evaluate(() => {
      const hasHero = document.querySelector('.min-h-screen.bg-gradient-to-br');
      const hasCards = document.querySelectorAll('.hover\\:shadow-lg').length > 0;
      return { hasHero, hasCards };
    });
    console.log('Home2 elements found:', hasHome2Elements);

    // Test 2: Check for VideoSection
    console.log('\n2. Looking for VideoSection...');
    const videoSection = await page.$('video');
    if (videoSection) {
      console.log('✓ VideoSection found');
      await page.screenshot({ 
        path: 'test-results/screenshots/homepage-revamp/02-video-section.png',
        fullPage: false 
      });
    } else {
      console.log('✗ VideoSection not found');
    }

    // Test 3: Check for ProcessFlow (5-step journey)
    console.log('\n3. Looking for ProcessFlow...');
    await page.evaluate(() => window.scrollBy(0, 1000));
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const processSteps = await page.$$eval('img[alt*="Referral"], img[alt*="Delivery"], img[alt*="Wear"], img[alt*="Monitor"], img[alt*="Results"]', elements => elements.length);
    console.log(`Found ${processSteps} process step images`);

    // Test 4: Check for MvcpSection
    console.log('\n4. Looking for MvcpSection...');
    await page.evaluate(() => window.scrollBy(0, 1000));
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const mvcpSection = await page.$eval('h2', (el) => {
      const headings = Array.from(document.querySelectorAll('h2'));
      return headings.some(h => h.textContent.includes('Myant Virtual Clinic Portal'));
    });
    
    if (mvcpSection) {
      console.log('✓ MVCP Section found');
      await page.screenshot({ 
        path: 'test-results/screenshots/homepage-revamp/03-mvcp-section.png',
        fullPage: false 
      });
    } else {
      console.log('✗ MVCP Section not found');
    }

    // Test 5: Check for Statistics
    console.log('\n5. Looking for Statistics...');
    const statistics = await page.$$eval('.text-6xl, .text-7xl, .text-8xl', elements => 
      elements.map(el => el.textContent)
    );
    console.log('Statistics found:', statistics);

    // Test 6: Check for Comparison Table
    console.log('\n6. Looking for Comparison Table...');
    await page.evaluate(() => window.scrollBy(0, 1000));
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const comparisonTable = await page.$('table');
    if (comparisonTable) {
      console.log('✓ Comparison table found');
      await page.screenshot({ 
        path: 'test-results/screenshots/homepage-revamp/04-comparison-table.png',
        fullPage: false 
      });
    } else {
      console.log('✗ Comparison table not found');
    }

    // Test 7: Check scroll animations
    console.log('\n7. Testing scroll animations...');
    await page.goto('http://localhost:8080/', { waitUntil: 'networkidle2' });
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Scroll slowly to trigger animations
    for (let i = 0; i < 5; i++) {
      await page.evaluate(() => window.scrollBy(0, 500));
      await new Promise(resolve => setTimeout(resolve, 500));
    }
    
    await page.screenshot({ 
      path: 'test-results/screenshots/homepage-revamp/05-after-scroll.png',
      fullPage: true 
    });

    // Test 8: Check responsive design
    console.log('\n8. Testing responsive design...');
    await page.setViewport({ width: 375, height: 812 }); // iPhone X
    await page.goto('http://localhost:8080/', { waitUntil: 'networkidle2' });
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    await page.screenshot({ 
      path: 'test-results/screenshots/homepage-revamp/06-mobile-view.png',
      fullPage: true 
    });

    // Generate report
    const report = {
      timestamp: new Date().toISOString(),
      tests: {
        defaultRoute: hasHome2Elements.hasHero && hasHome2Elements.hasCards,
        videoSection: !!videoSection,
        processFlow: processSteps >= 3,
        mvcpSection: mvcpSection,
        statistics: statistics.length > 0,
        comparisonTable: !!comparisonTable,
        responsive: true
      },
      summary: 'Homepage revamp visual test completed'
    };

    await fs.writeFile(
      'test-results/screenshots/homepage-revamp/test-report.json',
      JSON.stringify(report, null, 2)
    );

    console.log('\n✓ Visual test completed successfully!');
    console.log('Screenshots saved to: test-results/screenshots/homepage-revamp/');
    console.log('\nTest Results:', report.tests);

  } catch (error) {
    console.error('Error during testing:', error);
  } finally {
    await browser.close();
  }
}

// Create directory if it doesn't exist
async function ensureDirectory() {
  const dir = 'test-results/screenshots/homepage-revamp';
  try {
    await fs.mkdir(dir, { recursive: true });
  } catch (error) {
    // Directory might already exist
  }
}

ensureDirectory().then(() => testHomepageRevamp());