#!/usr/bin/env node

/**
 * Debug script to test homepage rendering issues
 * Run this script to verify that the homepage components are rendering correctly
 */

const puppeteer = require('puppeteer');

async function debugHomepage() {
  const browser = await puppeteer.launch({
    headless: false,
    devtools: true
  });
  
  const page = await browser.newPage();
  
  console.log('Navigating to homepage...');
  await page.goto('http://localhost:8081', { waitUntil: 'networkidle0' });
  
  // Wait for the main components to load
  await page.waitForTimeout(2000);
  
  // Check if HomePageTabs exists
  const hasHomeTabs = await page.evaluate(() => {
    return document.querySelector('[data-radix-collection-item]') !== null;
  });
  console.log('HomePageTabs found:', hasHomeTabs);
  
  // Check if hero section exists
  const hasHeroSection = await page.evaluate(() => {
    return document.querySelector('[data-testid="hero-section"]') !== null;
  });
  console.log('Hero section found:', hasHeroSection);
  
  // Get page dimensions
  const dimensions = await page.evaluate(() => {
    return {
      bodyHeight: document.body.scrollHeight,
      viewportHeight: window.innerHeight,
      mainContent: document.querySelector('main')?.offsetTop
    };
  });
  console.log('Page dimensions:', dimensions);
  
  // Check for any error messages
  const errors = await page.evaluate(() => {
    const errorElements = document.querySelectorAll('.error, [data-error]');
    return Array.from(errorElements).map(el => el.textContent);
  });
  if (errors.length > 0) {
    console.log('Errors found:', errors);
  }
  
  // Scroll down to check if content is below fold
  await page.evaluate(() => window.scrollTo(0, 500));
  await page.waitForTimeout(1000);
  
  // Take a screenshot
  await page.screenshot({ path: 'homepage-debug.png', fullPage: true });
  console.log('Screenshot saved as homepage-debug.png');
  
  // Don't close browser to allow manual inspection
  console.log('Browser will remain open for manual inspection. Press Ctrl+C to exit.');
}

debugHomepage().catch(console.error);