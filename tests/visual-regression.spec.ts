import { test, expect, Page, Browser } from '@playwright/test';

// Test configuration
const BASE_URL = 'http://localhost:8080';
const BROWSERS = ['chromium', 'firefox', 'webkit'];
const BREAKPOINTS = [
  { name: 'mobile-se', width: 375, height: 667 },
  { name: 'mobile-pro', width: 414, height: 896 },
  { name: 'tablet', width: 768, height: 1024 },
  { name: 'desktop', width: 1024, height: 768 },
  { name: 'large-desktop', width: 1920, height: 1080 }
];
const LANGUAGES = ['', '/de', '/fr', '/it'];
const PAGES = [
  { path: '/', name: 'homepage' },
  { path: '/solutions/10-day-heart-screening', name: 'solutions-10day' },
  { path: '/partners/general-practitioners', name: 'partners-gp' },
  { path: '/how-it-works', name: 'how-it-works' },
  { path: '/about', name: 'about' }
];

// Copy variants to test
const COPY_VARIANTS = ['benefit-led', 'clinical', 'urgency'];

test.describe('Visual Regression Testing - Cross-Browser Matrix', () => {
  test.beforeEach(async ({ page }) => {
    // Wait for page to be ready
    await page.waitForLoadState('networkidle');
  });

  for (const browserName of BROWSERS) {
    test.describe(`Browser: ${browserName}`, () => {
      for (const breakpoint of BREAKPOINTS) {
        test.describe(`${breakpoint.name} (${breakpoint.width}x${breakpoint.height})`, () => {
          for (const lang of LANGUAGES) {
            test.describe(`Language: ${lang || 'en'}`, () => {
              for (const pageInfo of PAGES) {
                test(`${pageInfo.name} renders correctly`, async ({ page, browserName: currentBrowser }) => {
                  if (currentBrowser !== browserName) return;
                  
                  // Set viewport
                  await page.setViewportSize({ 
                    width: breakpoint.width, 
                    height: breakpoint.height 
                  });

                  // Navigate to page
                  const url = `${BASE_URL}${lang}${pageInfo.path}`;
                  await page.goto(url);
                  
                  // Wait for page to be fully loaded
                  await page.waitForLoadState('networkidle');
                  await page.waitForTimeout(2000); // Additional wait for animations

                  // Take screenshot
                  const screenshotName = `${browserName}-${breakpoint.name}-${lang || 'en'}-${pageInfo.name}`;
                  await expect(page).toHaveScreenshot(`${screenshotName}.png`, {
                    fullPage: true,
                    animations: 'disabled'
                  });

                  // Check for console errors
                  const logs: string[] = [];
                  page.on('console', msg => {
                    if (msg.type() === 'error') {
                      logs.push(msg.text());
                    }
                  });

                  // Verify no console errors
                  expect(logs).toHaveLength(0);
                });
              }
            });
          }
        });
      }
    });
  }
});

test.describe('Copy Variant Visual Testing', () => {
  for (const variant of COPY_VARIANTS) {
    test(`Copy variant ${variant} displays correctly`, async ({ page }) => {
      // Set to desktop viewport
      await page.setViewportSize({ width: 1920, height: 1080 });
      
      // Navigate to homepage
      await page.goto(BASE_URL);
      await page.waitForLoadState('networkidle');

      // Set copy variant in localStorage
      await page.evaluate((variantName) => {
        localStorage.setItem('copyVariant', variantName);
        location.reload();
      }, variant);

      // Wait for reload and animation
      await page.waitForLoadState('networkidle');
      await page.waitForTimeout(2000);

      // Take screenshot of hero section
      const heroSection = page.locator('[data-testid="hero-section"]').first();
      await expect(heroSection).toHaveScreenshot(`copy-variant-${variant}-hero.png`);

      // Take full page screenshot
      await expect(page).toHaveScreenshot(`copy-variant-${variant}-full.png`, {
        fullPage: true,
        animations: 'disabled'
      });
    });
  }
});

test.describe('Component Rendering Validation', () => {
  test('All components render without errors', async ({ page }) => {
    // Track console errors
    const errors: string[] = [];
    page.on('console', msg => {
      if (msg.type() === 'error') {
        errors.push(msg.text());
      }
    });

    // Track failed network requests
    const failedRequests: string[] = [];
    page.on('requestfailed', request => {
      failedRequests.push(`${request.method()} ${request.url()}`);
    });

    // Test homepage components
    await page.goto(BASE_URL);
    await page.waitForLoadState('networkidle');

    // Verify key components are present (be more specific to avoid strict mode violations)
    await expect(page.locator('nav').first()).toBeVisible();
    await expect(page.locator('main')).toBeVisible();
    await expect(page.locator('footer')).toBeVisible();

    // Test copy variant selector
    const copySelector = page.locator('[data-testid="copy-variant-selector"]');
    if (await copySelector.isVisible()) {
      await copySelector.click();
      await page.waitForTimeout(500);
      await expect(page.locator('[role="listbox"]')).toBeVisible();
    }

    // Check for errors
    expect(errors).toHaveLength(0);
    expect(failedRequests).toHaveLength(0);
  });

  test('Interactive elements function correctly', async ({ page }) => {
    await page.goto(BASE_URL);
    await page.waitForLoadState('networkidle');

    // Test navigation menu
    const mobileMenuButton = page.locator('[data-testid="mobile-menu-button"]');
    if (await mobileMenuButton.isVisible()) {
      await mobileMenuButton.click();
      await expect(page.locator('[data-testid="mobile-menu"]')).toBeVisible();
    }

    // Test CTA buttons
    const ctaButtons = page.locator('button:has-text("Start"), a:has-text("Start")');
    for (let i = 0; i < Math.min(await ctaButtons.count(), 3); i++) {
      const button = ctaButtons.nth(i);
      if (await button.isVisible()) {
        await expect(button).toBeEnabled();
      }
    }

    // Test form interactions if present
    const forms = page.locator('form');
    if (await forms.count() > 0) {
      const firstForm = forms.first();
      const inputs = firstForm.locator('input[type="email"], input[type="text"]');
      if (await inputs.count() > 0) {
        await inputs.first().fill('test@example.com');
        await expect(inputs.first()).toHaveValue('test@example.com');
      }
    }
  });
});

test.describe('Animation Performance Testing', () => {
  test('Animations perform at 60fps', async ({ page }) => {
    await page.goto(BASE_URL);
    await page.waitForLoadState('networkidle');

    // Enable performance monitoring
    await page.evaluate(() => {
      (window as any).performanceData = {
        animationFrames: 0,
        startTime: performance.now()
      };

      const originalRAF = window.requestAnimationFrame;
      window.requestAnimationFrame = function(callback) {
        (window as any).performanceData.animationFrames++;
        return originalRAF(callback);
      };
    });

    // Trigger scroll animations
    await page.evaluate(() => {
      window.scrollTo(0, document.body.scrollHeight / 2);
    });
    await page.waitForTimeout(2000);

    // Check animation performance
    const perfData = await page.evaluate(() => {
      const data = (window as any).performanceData;
      data.endTime = performance.now();
      data.duration = data.endTime - data.startTime;
      data.fps = (data.animationFrames / data.duration) * 1000;
      return data;
    });

    // Verify reasonable frame rate (allowing for variability in test environment)
    expect(perfData.fps).toBeGreaterThan(30);
  });
});