import puppeteer from 'puppeteer';

async function debugV7Page() {
  const browser = await puppeteer.launch({
    headless: false,
    devtools: true,
    defaultViewport: { width: 1920, height: 1080 }
  });
  
  const page = await browser.newPage();
  
  // Log console messages
  page.on('console', msg => {
    console.log('PAGE LOG:', msg.type(), msg.text());
  });
  
  // Log errors
  page.on('pageerror', error => {
    console.error('PAGE ERROR:', error.message);
  });
  
  // Log requests that fail
  page.on('requestfailed', request => {
    console.error('REQUEST FAILED:', request.url(), request.failure().errorText);
  });
  
  console.log('Navigating to HomeV7 page...');
  await page.goto('http://localhost:8080/', { 
    waitUntil: 'networkidle0',
    timeout: 30000 
  });
  
  // Wait a bit for React to render
  await new Promise(resolve => setTimeout(resolve, 5000));
  
  // Check what's rendered
  const pageContent = await page.evaluate(() => {
    const root = document.getElementById('root');
    return {
      hasRoot: !!root,
      rootHTML: root ? root.innerHTML.substring(0, 500) : 'NO ROOT',
      bodyClasses: document.body.className,
      title: document.title,
      hasNavbar: !!document.querySelector('nav'),
      hasHero: !!document.querySelector('[class*="hero"]'),
      allH1s: Array.from(document.querySelectorAll('h1')).map(h => h.textContent),
      allH2s: Array.from(document.querySelectorAll('h2')).map(h => h.textContent),
      componentsFound: {
        navbar: !!document.querySelector('nav'),
        footer: !!document.querySelector('footer'),
        sections: document.querySelectorAll('section').length,
        cards: document.querySelectorAll('[class*="card"]').length
      }
    };
  });
  
  console.log('\n=== Page Debug Info ===');
  console.log(JSON.stringify(pageContent, null, 2));
  
  // Keep browser open for manual inspection
  console.log('\nBrowser will stay open for manual inspection. Press Ctrl+C to exit.');
}

debugV7Page().catch(console.error);