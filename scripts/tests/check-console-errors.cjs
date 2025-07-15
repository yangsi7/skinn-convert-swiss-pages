const puppeteer = require('puppeteer');

(async () => {
  console.log('Checking for console errors...');
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  try {
    const page = await browser.newPage();
    
    // Capture console messages
    page.on('console', msg => console.log('PAGE LOG:', msg.text()));
    page.on('error', err => console.log('PAGE ERROR:', err));
    page.on('pageerror', err => console.log('PAGE JS ERROR:', err));
    
    await page.setViewport({ width: 1920, height: 1080 });
    
    console.log('Navigating to homepage...');
    await page.goto('http://localhost:8084/', {
      waitUntil: 'domcontentloaded',
      timeout: 10000
    });
    
    // Wait a bit for any errors
    await page.waitForTimeout(3000);
    
    // Try to get page content
    const pageContent = await page.content();
    console.log('Page loaded, content length:', pageContent.length);
    
    // Check if React app is mounted
    const hasReactApp = await page.evaluate(() => {
      return document.getElementById('root') !== null;
    });
    console.log('React root found:', hasReactApp);
    
    // Get any error messages
    const bodyText = await page.evaluate(() => document.body.innerText);
    console.log('Body text preview:', bodyText.substring(0, 200));
    
  } catch (error) {
    console.error('Error:', error);
  } finally {
    await browser.close();
  }
})();