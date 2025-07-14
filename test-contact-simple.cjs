const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  
  try {
    await page.setViewport({ width: 1280, height: 800 });
    
    console.log('Navigating to contact page...');
    await page.goto('http://localhost:8081/contact', { 
      waitUntil: 'networkidle0',
      timeout: 30000 
    });
    
    // Take initial screenshot
    await page.screenshot({ 
      path: 'contact-form-fixed-initial.png',
      fullPage: true 
    });
    console.log('✓ Initial screenshot saved');
    
    // Check if form exists
    const formExists = await page.$('form');
    if (!formExists) {
      console.log('✗ No form found on the page!');
      await browser.close();
      return;
    }
    
    console.log('✓ Form found on the page');
    
    // Try to fill in the basic fields
    try {
      // Name
      const nameField = await page.$('input[name="name"]');
      if (nameField) {
        await page.type('input[name="name"]', 'Test User');
        console.log('✓ Name field filled');
      } else {
        console.log('✗ Name field not found');
      }
      
      // Email
      const emailField = await page.$('input[name="email"]');
      if (emailField) {
        await page.type('input[name="email"]', 'test@example.com');
        console.log('✓ Email field filled');
      } else {
        console.log('✗ Email field not found');
      }
      
      // Phone
      const phoneField = await page.$('input[name="phone"]');
      if (phoneField) {
        await page.type('input[name="phone"]', '+41 12 345 67 89');
        console.log('✓ Phone field filled');
      } else {
        console.log('✗ Phone field not found');
      }
      
      // Message
      const messageField = await page.$('textarea[name="message"]');
      if (messageField) {
        await page.type('textarea[name="message"]', 'Testing the contact form functionality');
        console.log('✓ Message field filled');
      } else {
        console.log('✗ Message field not found');
      }
      
      // Try to handle role selection
      const selectElement = await page.$('select[name="role"]');
      if (selectElement) {
        await page.select('select[name="role"]', 'patient');
        console.log('✓ Role selected');
      } else {
        console.log('⚠️ Role select not found (might be custom dropdown)');
      }
      
      // Checkbox
      const checkbox = await page.$('input[type="checkbox"]');
      if (checkbox) {
        await page.click('input[type="checkbox"]');
        console.log('✓ Consent checkbox checked');
      } else {
        console.log('✗ Consent checkbox not found');
      }
      
    } catch (fillError) {
      console.log('Error filling form:', fillError.message);
    }
    
    // Take screenshot after filling
    await page.screenshot({ 
      path: 'contact-form-fixed-filled.png',
      fullPage: true 
    });
    console.log('✓ Filled form screenshot saved');
    
    // Try to submit
    const submitButton = await page.$('button[type="submit"]');
    if (submitButton) {
      console.log('✓ Submit button found');
      
      // Click submit
      await submitButton.click();
      console.log('✓ Submit button clicked');
      
      // Wait for response
      await new Promise(resolve => setTimeout(resolve, 3000));
      
      // Take final screenshot
      await page.screenshot({ 
        path: 'contact-form-fixed-submitted.png',
        fullPage: true 
      });
      console.log('✓ Post-submission screenshot saved');
      
      // Check page content for success indicators
      const pageText = await page.evaluate(() => document.body.innerText);
      console.log('\n--- Page content preview ---');
      console.log(pageText.substring(0, 300) + '...');
      
      if (pageText.toLowerCase().includes('success') || 
          pageText.toLowerCase().includes('thank you') ||
          pageText.toLowerCase().includes('submitted')) {
        console.log('\n✅ SUCCESS: Form appears to have been submitted successfully!');
      } else {
        console.log('\n⚠️ WARNING: No clear success message found after submission');
      }
      
    } else {
      console.log('✗ Submit button not found');
    }
    
  } catch (error) {
    console.error('\nFatal error:', error.message);
    await page.screenshot({ 
      path: 'contact-form-fixed-error.png',
      fullPage: true 
    });
  }
  
  await browser.close();
  console.log('\n✅ Test completed. Check screenshots for visual confirmation.');
})();