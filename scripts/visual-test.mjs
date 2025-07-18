import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function testPages() {
  const browser = await puppeteer.launch({ 
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  
  const pages = [
    { name: 'home', url: 'http://localhost:8080/' },
    { name: 'physicians', url: 'http://localhost:8080/physicians' },
    { name: '14dayholter', url: 'http://localhost:8080/solutions/14-day-holter' },
    { name: 'company', url: 'http://localhost:8080/about/company' }
  ];

  const screenshotDir = path.join(__dirname, '../test-screenshots');
  if (!fs.existsSync(screenshotDir)) {
    fs.mkdirSync(screenshotDir, { recursive: true });
  }

  for (const pageInfo of pages) {
    const page = await browser.newPage();
    await page.setViewport({ width: 1280, height: 800 });
    
    try {
      console.log(`Testing ${pageInfo.name}...`);
      
      // Navigate and wait for page to load
      await page.goto(pageInfo.url, { 
        waitUntil: 'networkidle2',
        timeout: 30000 
      });
      
      // Wait for any animations to complete
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Check for console errors
      const errors = [];
      page.on('console', msg => {
        if (msg.type() === 'error') {
          errors.push(msg.text());
        }
      });
      
      // Take screenshot
      const screenshotPath = path.join(screenshotDir, `${pageInfo.name}.png`);
      await page.screenshot({ 
        path: screenshotPath,
        fullPage: false
      });
      
      // Scroll to middle of page and take another screenshot
      await page.evaluate(() => window.scrollTo(0, 1000));
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const scrolledPath = path.join(screenshotDir, `${pageInfo.name}-scrolled.png`);
      await page.screenshot({ 
        path: scrolledPath,
        fullPage: false
      });
      
      if (errors.length > 0) {
        console.log(`❌ ${pageInfo.name}: Console errors found:`);
        errors.forEach(err => console.log(`   - ${err}`));
      } else {
        console.log(`✅ ${pageInfo.name}: No console errors`);
      }
      
    } catch (error) {
      console.error(`❌ ${pageInfo.name}: Failed to load - ${error.message}`);
    }
    
    await page.close();
  }
  
  await browser.close();
  console.log(`\nScreenshots saved to: ${screenshotDir}`);
}

testPages().catch(console.error);