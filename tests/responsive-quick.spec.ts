import { test, expect } from '@playwright/test';

const BASE_URL = 'http://localhost:8080';
const BREAKPOINTS = [
  { name: 'mobile', width: 375, height: 667 },
  { name: 'tablet', width: 768, height: 1024 },
  { name: 'desktop', width: 1920, height: 1080 }
];

test.describe('Responsive Design Validation', () => {
  for (const breakpoint of BREAKPOINTS) {
    test(`Homepage responsive at ${breakpoint.name} (${breakpoint.width}x${breakpoint.height})`, async ({ page }) => {
      // Set viewport
      await page.setViewportSize({ 
        width: breakpoint.width, 
        height: breakpoint.height 
      });

      // Navigate to homepage
      await page.goto(BASE_URL);
      await page.waitForLoadState('networkidle');
      await page.waitForTimeout(2000);

      // Take screenshot
      await expect(page).toHaveScreenshot(`homepage-${breakpoint.name}.png`, {
        fullPage: true,
        animations: 'disabled'
      });

      // Verify critical elements are visible
      await expect(page.locator('h1')).toBeVisible();
      await expect(page.locator('nav').first()).toBeVisible();
      
      // Check CTA buttons are present
      const ctaButtons = page.locator('button, a').filter({ hasText: /start|begin|check/i });
      expect(await ctaButtons.count()).toBeGreaterThan(0);
    });
  }

  test('Multi-language navigation works correctly', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    
    const languages = [
      { path: '/', lang: 'English' },
      { path: '/de', lang: 'German' },
      { path: '/fr', lang: 'French' },
      { path: '/it', lang: 'Italian' }
    ];

    for (const { path, lang } of languages) {
      await page.goto(`${BASE_URL}${path}`);
      await page.waitForLoadState('networkidle');
      
      // Verify page loads without errors
      await expect(page.locator('h1')).toBeVisible();
      
      // Take screenshot for documentation
      await expect(page).toHaveScreenshot(`language-${lang.toLowerCase()}.png`, {
        clip: { x: 0, y: 0, width: 1200, height: 800 },
        animations: 'disabled'
      });
    }
  });
});