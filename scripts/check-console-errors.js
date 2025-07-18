import puppeteer from 'puppeteer';

async function checkConsoleErrors() {
  console.log('Checking for console errors...');
  
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  try {
    const page = await browser.newPage();
    
    // Capture console messages
    const consoleMessages = [];
    page.on('console', msg => {
      consoleMessages.push({
        type: msg.type(),
        text: msg.text()
      });
    });

    // Capture page errors
    const pageErrors = [];
    page.on('pageerror', error => {
      pageErrors.push(error.toString());
    });

    // Navigate to the page
    await page.goto('http://localhost:8080/', { 
      waitUntil: 'domcontentloaded',
      timeout: 10000 
    });

    // Wait a bit for any async errors
    await new Promise(resolve => setTimeout(resolve, 3000));

    // Check if page has content
    const bodyContent = await page.evaluate(() => document.body.innerHTML);
    const hasContent = bodyContent.length > 100;

    // Report findings
    console.log('\n=== Console Messages ===');
    consoleMessages.forEach(msg => {
      console.log(`[${msg.type}] ${msg.text}`);
    });

    console.log('\n=== Page Errors ===');
    if (pageErrors.length > 0) {
      pageErrors.forEach(error => console.log(error));
    } else {
      console.log('No page errors detected');
    }

    console.log('\n=== Page Content ===');
    console.log('Has content:', hasContent);
    console.log('Body length:', bodyContent.length);

    // Try to find specific elements
    const hasRoot = await page.$('#root');
    const rootContent = hasRoot ? await page.evaluate(() => document.getElementById('root').innerHTML) : null;
    
    console.log('\n=== Root Element ===');
    console.log('Has root:', !!hasRoot);
    console.log('Root content length:', rootContent ? rootContent.length : 0);
    
    if (rootContent && rootContent.length < 500) {
      console.log('Root content:', rootContent);
    }

  } catch (error) {
    console.error('Error during check:', error);
  } finally {
    await browser.close();
  }
}

checkConsoleErrors();