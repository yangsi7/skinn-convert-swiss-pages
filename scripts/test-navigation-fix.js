import puppeteer from 'puppeteer';

async function testNavigationFix() {
  console.log('Testing navigation fix...');
  
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  try {
    const page = await browser.newPage();
    await page.setViewport({ width: 1280, height: 800 });

    // Test 1: Load homepage
    console.log('\n1. Loading homepage...');
    await page.goto('http://localhost:8080/', { waitUntil: 'networkidle2' });
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Check for HomePageTabs
    const tabs = await page.$('.fixed.top-20');
    console.log('Tabs component found:', !!tabs);

    // Get current tab value
    const activeTab = await page.evaluate(() => {
      const activeButton = document.querySelector('[data-state="active"]');
      return activeButton ? activeButton.textContent : null;
    });
    console.log('Active tab:', activeTab);

    // Test 2: Click on Classic tab
    console.log('\n2. Clicking on Classic tab...');
    const classicTab = await page.evaluateHandle(() => {
      const buttons = Array.from(document.querySelectorAll('button'));
      return buttons.find(btn => btn.textContent.includes('Classic') || btn.textContent.includes('Klassisch'));
    });
    
    if (classicTab) {
      await classicTab.click();
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      const newUrl = page.url();
      console.log('URL after clicking Classic:', newUrl);
      console.log('Navigation to /home-old:', newUrl.includes('/home-old') ? '✓ Success' : '✗ Failed');

      // Check if old home page loaded
      const hasOldHome = await page.evaluate(() => {
        return document.body.textContent.includes('Revolutionäre Herzüberwachung') || 
               document.body.textContent.includes('Revolutionary Heart Monitoring');
      });
      console.log('Old home page loaded:', hasOldHome ? '✓' : '✗');
    } else {
      console.log('Could not find Classic tab');
    }

    // Test 3: Navigate back to Modern
    console.log('\n3. Clicking on Modern tab...');
    const modernTab = await page.evaluateHandle(() => {
      const buttons = Array.from(document.querySelectorAll('button'));
      return buttons.find(btn => btn.textContent.includes('Modern') || btn.textContent.includes('Moderne'));
    });
    
    if (modernTab) {
      await modernTab.click();
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      const finalUrl = page.url();
      console.log('URL after clicking Modern:', finalUrl);
      console.log('Navigation back to /:', finalUrl.endsWith('/') || finalUrl.endsWith('8080') ? '✓ Success' : '✗ Failed');

      // Check for modern home elements
      const hasModernHome = await page.evaluate(() => {
        return !!document.querySelector('video');
      });
      console.log('Modern home page loaded (has videos):', hasModernHome ? '✓' : '✗');
    }

    // Test 4: Test language navigation
    console.log('\n4. Testing with German language...');
    await page.goto('http://localhost:8080/de', { waitUntil: 'networkidle2' });
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const germanUrl = page.url();
    console.log('German URL:', germanUrl);
    
    // Test German navigation
    const germanClassicTab = await page.evaluateHandle(() => {
      const buttons = Array.from(document.querySelectorAll('button'));
      return buttons.find(btn => btn.textContent === 'Klassisch');
    });
    
    if (germanClassicTab) {
      await germanClassicTab.click();
      await new Promise(resolve => setTimeout(resolve, 1000));
      const germanClassicUrl = page.url();
      console.log('German Classic URL:', germanClassicUrl);
      console.log('German navigation works:', germanClassicUrl.includes('/de/home-old') ? '✓' : '✗');
    }

    console.log('\n✓ Navigation test completed!');

  } catch (error) {
    console.error('Error during testing:', error);
  } finally {
    await browser.close();
  }
}

testNavigationFix();