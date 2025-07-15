const puppeteer = require('puppeteer');

(async () => {
  console.log('Testing scrolling behavior...');
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  try {
    const page = await browser.newPage();
    
    // Set viewport to desktop size
    await page.setViewport({ width: 1920, height: 1080 });
    
    console.log('Navigating to homepage...');
    await page.goto('http://localhost:8084/', {
      waitUntil: 'networkidle0',
      timeout: 30000
    });
    
    // Wait for initial content - wait for navbar to be loaded
    await page.waitForSelector('header', { timeout: 10000 });
    await new Promise(resolve => setTimeout(resolve, 2000)); // Wait for animations
    
    console.log('Taking initial screenshot...');
    await page.screenshot({
      path: 'design-system-initial.png',
      fullPage: false
    });
    
    // Test scrolling behavior
    console.log('Testing scroll behavior...');
    
    // Scroll down 500px
    await page.evaluate(() => window.scrollBy(0, 500));
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    await page.screenshot({
      path: 'design-system-scrolled-500.png',
      fullPage: false
    });
    
    // Scroll to first section
    await page.evaluate(() => {
      const sections = document.querySelectorAll('section');
      if (sections[1]) sections[1].scrollIntoView({ behavior: 'smooth' });
    });
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    await page.screenshot({
      path: 'design-system-section-1.png',
      fullPage: false
    });
    
    // Check if navbar is still visible and on top
    const navbarVisible = await page.evaluate(() => {
      const navbar = document.querySelector('header');
      if (!navbar) return false;
      const rect = navbar.getBoundingClientRect();
      const styles = window.getComputedStyle(navbar);
      return rect.top === 0 && styles.position === 'fixed' && styles.zIndex === '9999';
    });
    
    console.log('Navbar visibility check:', navbarVisible ? 'PASS' : 'FAIL');
    
    // Check for overflow issues
    const hasOverflow = await page.evaluate(() => {
      return document.documentElement.scrollWidth > document.documentElement.clientWidth;
    });
    
    console.log('Horizontal overflow check:', hasOverflow ? 'FAIL - Has overflow' : 'PASS - No overflow');
    
    // Take full page screenshot
    console.log('Taking full page screenshot...');
    await page.screenshot({
      path: 'design-system-full-page.png',
      fullPage: true
    });
    
    console.log('Test complete!');
    console.log('Screenshots saved:');
    console.log('- design-system-initial.png');
    console.log('- design-system-scrolled-500.png');
    console.log('- design-system-section-1.png');
    console.log('- design-system-full-page.png');
    
  } catch (error) {
    console.error('Error:', error);
  } finally {
    await browser.close();
  }
})();