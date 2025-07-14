const puppeteer = require('puppeteer');

(async () => {
  console.log('Launching browser...');
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
    
    // Wait for content to load
    await page.waitForSelector('h1', { timeout: 10000 });
    
    // Wait a bit for any animations to complete
    await page.waitForTimeout(2000);
    
    console.log('Taking full-page screenshot...');
    await page.screenshot({
      path: 'enhanced-homepage-swiss-copy.png',
      fullPage: true
    });
    
    console.log('Screenshot saved as enhanced-homepage-swiss-copy.png');
    
  } catch (error) {
    console.error('Error:', error);
  } finally {
    await browser.close();
  }
})();
