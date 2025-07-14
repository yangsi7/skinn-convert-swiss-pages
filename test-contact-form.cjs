const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  
  try {
    // Set viewport
    await page.setViewport({ width: 1280, height: 800 });
    
    // Navigate to contact page
    console.log('Navigating to contact page...');
    await page.goto('http://localhost:8081/contact', { 
      waitUntil: 'networkidle0',
      timeout: 30000 
    });
    
    // Wait for form to be loaded
    await page.waitForSelector('form', { timeout: 10000 });
    
    // Take initial screenshot
    await page.screenshot({ 
      path: 'contact-form-fixed-initial.png',
      fullPage: true 
    });
    console.log('Initial screenshot saved');
    
    // Check for all form fields
    console.log('\nChecking form fields...');
    
    const fields = [
      { selector: 'input[name="name"]', label: 'Name field' },
      { selector: 'input[name="email"]', label: 'Email field' },
      { selector: 'input[name="phone"]', label: 'Phone field' },
      { selector: 'select[name="role"], button[role="combobox"]', label: 'Role dropdown' },
      { selector: 'textarea[name="message"]', label: 'Message textarea' },
      { selector: 'input[type="checkbox"]', label: 'Consent checkbox' },
      { selector: 'button[type="submit"]', label: 'Submit button' }
    ];
    
    for (const field of fields) {
      const element = await page.$(field.selector);
      if (element) {
        console.log(`✓ ${field.label} found`);
      } else {
        console.log(`✗ ${field.label} NOT found`);
      }
    }
    
    // Fill in the form
    console.log('\nFilling in form fields...');
    
    // Name field
    await page.type('input[name="name"]', 'Test User');
    console.log('✓ Name filled');
    
    // Email field
    await page.type('input[name="email"]', 'test@example.com');
    console.log('✓ Email filled');
    
    // Phone field
    await page.type('input[name="phone"]', '+41 12 345 67 89');
    console.log('✓ Phone filled');
    
    // Role dropdown - check for both select and custom dropdown
    const selectElement = await page.$('select[name="role"]');
    if (selectElement) {
      await page.select('select[name="role"]', 'patient');
      console.log('✓ Role selected (native select)');
    } else {
      // Try custom dropdown
      const dropdownButton = await page.$('button[role="combobox"]');
      if (dropdownButton) {
        await dropdownButton.click();
        await new Promise(resolve => setTimeout(resolve, 500));
        // Click on Patient option using XPath
        const [patientOption] = await page.$x("//div[@role='option' and contains(text(), 'Patient')]");
        if (patientOption) {
          await patientOption.click();
          console.log('✓ Role selected (custom dropdown)');
        } else {
          console.log('⚠️ Could not find Patient option in dropdown');
        }
      } else {
        console.log('⚠️ No role dropdown found');
      }
    }
    
    // Message field
    await page.type('textarea[name="message"]', 'Testing the contact form');
    console.log('✓ Message filled');
    
    // Consent checkbox
    const checkbox = await page.$('input[type="checkbox"]');
    if (checkbox) {
      await checkbox.click();
      console.log('✓ Consent checkbox checked');
    }
    
    // Take screenshot before submission
    await page.screenshot({ 
      path: 'contact-form-fixed-filled.png',
      fullPage: true 
    });
    console.log('\nFilled form screenshot saved');
    
    // Submit the form
    console.log('\nSubmitting form...');
    const submitButton = await page.$('button[type="submit"]');
    if (submitButton) {
      await submitButton.click();
      
      // Wait for success message or form response
      await new Promise(resolve => setTimeout(resolve, 3000));
      
      // Take screenshot after submission
      await page.screenshot({ 
        path: 'contact-form-fixed-submitted.png',
        fullPage: true 
      });
      console.log('Post-submission screenshot saved');
      
      // Check for success message
      const pageContent = await page.content();
      const bodyText = await page.$eval('body', el => el.innerText);
      if (bodyText.includes('success') || bodyText.includes('Thank you') || bodyText.includes('submitted')) {
        console.log('\n✓ Form submission successful!');
      } else {
        console.log('\n⚠️ No clear success message found');
        console.log('Page content includes:', bodyText.substring(0, 200));
      }
    } else {
      console.log('\n✗ Submit button not found');
    }
    
    // Get form HTML structure for analysis
    const formExists = await page.$('form');
    if (formExists) {
      const formHTML = await page.$eval('form', el => el.outerHTML);
      console.log('\nForm HTML preview:', formHTML.substring(0, 300) + '...');
    }
    
  } catch (error) {
    console.error('Error during testing:', error.message);
    await page.screenshot({ 
      path: 'contact-form-fixed-error.png',
      fullPage: true 
    });
  }
  
  await browser.close();
  console.log('\nTest completed. Check the screenshots for visual confirmation.');
})();