import puppeteer from 'puppeteer';

async function testMvcpSection() {
  console.log('Testing MVCP section specifically...');
  
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  try {
    const page = await browser.newPage();
    await page.setViewport({ width: 1280, height: 800 });

    await page.goto('http://localhost:8080/', { waitUntil: 'networkidle2' });
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Search for MVCP text in the entire page
    const mvcpText = await page.evaluate(() => {
      const body = document.body.innerText;
      return body.includes('Myant Virtual Clinic Portal') || body.includes('MVCP');
    });
    console.log('MVCP text found in page:', mvcpText);

    // Try to find the section by class
    const mvcpSection = await page.$('.bg-slate-900');
    console.log('Dark section found:', !!mvcpSection);

    // Scroll through the entire page
    const pageHeight = await page.evaluate(() => document.body.scrollHeight);
    console.log('Page height:', pageHeight);

    // Scroll in chunks
    for (let i = 0; i < pageHeight; i += 500) {
      await page.evaluate((scrollTo) => window.scrollTo(0, scrollTo), i);
      await new Promise(resolve => setTimeout(resolve, 500));
      
      // Check if MVCP is visible now
      const mvcpVisible = await page.evaluate(() => {
        const headings = Array.from(document.querySelectorAll('h2'));
        const mvcp = headings.find(h => h.textContent.includes('Myant Virtual Clinic Portal'));
        if (mvcp) {
          const rect = mvcp.getBoundingClientRect();
          return rect.top >= 0 && rect.bottom <= window.innerHeight;
        }
        return false;
      });
      
      if (mvcpVisible) {
        console.log(`MVCP section found at scroll position ${i}`);
        await page.screenshot({ 
          path: 'test-results/screenshots/mvcp-found.png',
          fullPage: false 
        });
        break;
      }
    }

    // Check all h2 elements
    const allH2s = await page.$$eval('h2', elements => 
      elements.map(el => el.textContent.trim())
    );
    console.log('\nAll H2 headings found:', allH2s);

    // Check for ProcessFlow
    const processFlow = await page.evaluate(() => {
      const headings = Array.from(document.querySelectorAll('h2'));
      return headings.find(h => h.textContent.includes('How It Works') || h.textContent.includes('Simple Steps'));
    });
    console.log('ProcessFlow section:', processFlow ? 'Found' : 'Not found');

    // Check for comparison
    const comparison = await page.evaluate(() => {
      return !!document.querySelector('table');
    });
    console.log('Comparison table:', comparison ? 'Found' : 'Not found');

  } catch (error) {
    console.error('Error:', error);
  } finally {
    await browser.close();
  }
}

testMvcpSection();