import puppeteer from 'puppeteer';
import { promises as fs } from 'fs';

async function testHomepageVisual() {
  console.log('Starting visual test of homepage...');
  
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  try {
    const page = await browser.newPage();
    
    // Set a smaller viewport to avoid large screenshots
    await page.setViewport({ width: 1280, height: 800 });

    // Navigate to homepage
    console.log('\n1. Loading homepage...');
    await page.goto('http://localhost:8080/', { waitUntil: 'networkidle2' });
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Take viewport screenshot (not full page)
    await page.screenshot({ 
      path: 'test-results/screenshots/homepage-visual/01-hero-section.png',
      fullPage: false 
    });

    // Check for key elements
    console.log('\n2. Checking for key elements...');
    
    // Check for hero section
    const heroSection = await page.$('.min-h-screen.bg-gradient-to-br');
    console.log('Hero section:', heroSection ? '✓ Found' : '✗ Not found');

    // Check for VideoSection
    const videoElements = await page.$$('video');
    console.log('Video elements:', videoElements.length > 0 ? `✓ Found ${videoElements.length}` : '✗ Not found');

    // Scroll to video section
    if (videoElements.length > 0) {
      await page.evaluate(() => {
        const videos = document.querySelectorAll('video');
        if (videos[0]) videos[0].scrollIntoView({ behavior: 'smooth' });
      });
      await new Promise(resolve => setTimeout(resolve, 1000));
      await page.screenshot({ 
        path: 'test-results/screenshots/homepage-visual/02-video-section.png',
        fullPage: false 
      });
    }

    // Check for statistics
    console.log('\n3. Checking for statistics...');
    const statistics = await page.$$eval('.text-6xl, .text-7xl, .text-8xl', elements => 
      elements.map(el => el.textContent.trim())
    );
    console.log('Statistics found:', statistics);

    // Scroll to statistics if found
    if (statistics.length > 0) {
      await page.evaluate(() => {
        const stats = document.querySelector('.text-6xl, .text-7xl, .text-8xl');
        if (stats) stats.scrollIntoView({ behavior: 'smooth' });
      });
      await new Promise(resolve => setTimeout(resolve, 1000));
      await page.screenshot({ 
        path: 'test-results/screenshots/homepage-visual/03-statistics.png',
        fullPage: false 
      });
    }

    // Check for 5-step process
    console.log('\n4. Checking for 5-step process...');
    await page.evaluate(() => window.scrollBy(0, 500));
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const processImages = await page.$$eval('img[alt*="Referral"], img[alt*="Delivery"], img[alt*="Wear"], img[alt*="Monitor"], img[alt*="Results"]', elements => elements.length);
    console.log('Process step images:', processImages > 0 ? `✓ Found ${processImages}` : '✗ Not found');

    // Check for MVCP section
    console.log('\n5. Checking for MVCP section...');
    const mvcpHeading = await page.evaluate(() => {
      const headings = Array.from(document.querySelectorAll('h2'));
      return headings.find(h => h.textContent.includes('Myant Virtual Clinic Portal'));
    });
    console.log('MVCP section:', mvcpHeading ? '✓ Found' : '✗ Not found');

    // Scroll to MVCP if found
    if (mvcpHeading) {
      await page.evaluate(() => {
        const heading = Array.from(document.querySelectorAll('h2')).find(h => h.textContent.includes('Myant Virtual Clinic Portal'));
        if (heading) heading.scrollIntoView({ behavior: 'smooth' });
      });
      await new Promise(resolve => setTimeout(resolve, 1000));
      await page.screenshot({ 
        path: 'test-results/screenshots/homepage-visual/04-mvcp-section.png',
        fullPage: false 
      });
    }

    // Check for comparison table
    console.log('\n6. Checking for comparison table...');
    const comparisonTable = await page.$('table');
    console.log('Comparison table:', comparisonTable ? '✓ Found' : '✗ Not found');

    // Test mobile view
    console.log('\n7. Testing mobile view...');
    await page.setViewport({ width: 375, height: 667 });
    await page.goto('http://localhost:8080/', { waitUntil: 'networkidle2' });
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    await page.screenshot({ 
      path: 'test-results/screenshots/homepage-visual/05-mobile-hero.png',
      fullPage: false 
    });

    // Check for progressive animations
    console.log('\n8. Checking animations...');
    const animatedElements = await page.$$eval('[class*="transition-all"], [class*="animate-"]', elements => elements.length);
    console.log('Animated elements:', animatedElements > 0 ? `✓ Found ${animatedElements}` : '✗ Not found');

    // Summary
    console.log('\n=== SUMMARY ===');
    console.log('Hero section:', heroSection ? '✓' : '✗');
    console.log('Videos:', videoElements.length > 0 ? '✓' : '✗');
    console.log('Statistics:', statistics.length > 0 ? '✓' : '✗');
    console.log('Process steps:', processImages > 0 ? '✓' : '✗');
    console.log('MVCP section:', mvcpHeading ? '✓' : '✗');
    console.log('Comparison table:', comparisonTable ? '✓' : '✗');
    console.log('Animations:', animatedElements > 0 ? '✓' : '✗');

    console.log('\n✓ Visual test completed!');
    console.log('Screenshots saved to: test-results/screenshots/homepage-visual/');

  } catch (error) {
    console.error('Error during testing:', error);
  } finally {
    await browser.close();
  }
}

// Create directory
async function ensureDirectory() {
  try {
    await fs.mkdir('test-results/screenshots/homepage-visual', { recursive: true });
  } catch (error) {
    // Directory exists
  }
}

ensureDirectory().then(() => testHomepageVisual());