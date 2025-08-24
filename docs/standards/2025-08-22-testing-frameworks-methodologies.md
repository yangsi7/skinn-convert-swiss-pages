# Testing Frameworks and Methodologies Standards

**Research ID:** RCC-002-RS-003-A  
**Date:** 2025-08-22  
**Domain:** Testing, Quality & Security - Testing Frameworks  
**Status:** Complete  

## Executive Summary

This document provides comprehensive testing frameworks and methodologies standards for the SKIIN Switzerland healthcare application, focusing on Vitest best practices and configuration, React Testing Library patterns, Playwright end-to-end testing strategies, test coverage requirements (80% services, 70% utilities), test-driven development (TDD) patterns, integration testing approaches, visual regression testing methods, and performance testing frameworks.

## 1. Vitest Configuration and Best Practices

### 1.1 Comprehensive Vitest Setup

```typescript
// vitest.config.ts - Healthcare application optimized configuration
import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react-swc';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  
  test: {
    // Test environment configuration
    environment: 'jsdom',
    setupFiles: ['./src/test/setup.ts'],
    
    // Global test configuration
    globals: true,
    clearMocks: true,
    restoreMocks: true,
    mockReset: true,
    
    // Coverage configuration for healthcare standards
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html', 'lcov'],
      reportsDirectory: './coverage',
      
      // Healthcare-specific coverage thresholds
      thresholds: {
        global: {
          branches: 80,
          functions: 80,
          lines: 80,
          statements: 80
        },
        
        // Enhanced coverage for critical healthcare modules
        './src/services/**: {
          branches: 85,
          functions: 90,
          lines: 85,
          statements: 85
        },
        
        './src/utils/swissHealthcare.ts': {
          branches: 90,
          functions: 95,
          lines: 90,
          statements: 90
        },
        
        './src/components/forms/eligibility/**': {
          branches: 85,
          functions: 85,
          lines: 85,
          statements: 85
        }
      },
      
      // Exclude test files and mock data
      exclude: [
        'node_modules/',
        'src/test/',
        'src/**/*.test.{ts,tsx}',
        'src/**/*.spec.{ts,tsx}',
        'src/mocks/',
        'src/**/*.stories.{ts,tsx}'
      ],
      
      // Include all source files
      include: [
        'src/**/*.{ts,tsx}',
        '!src/**/*.d.ts'
      ]
    },
    
    // Test timeout configuration
    testTimeout: 10000, // 10 seconds for healthcare forms
    hookTimeout: 10000,
    
    // Parallel execution for faster CI/CD
    pool: 'threads',
    poolOptions: {
      threads: {
        singleThread: false,
        isolate: true
      }
    },
    
    // Reporter configuration
    reporter: [
      'verbose',
      'json',
      ['html', { outputFile: './test-results/index.html' }]
    ],
    
    // Watch mode configuration
    watch: {
      exclude: ['node_modules/**', 'coverage/**', 'test-results/**']
    }
  },
  
  // Path resolution for tests
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      '@/test': resolve(__dirname, './src/test'),
      '@/mocks': resolve(__dirname, './src/mocks')
    }
  }
});
```

### 1.2 Test Setup and Utilities

```typescript
// src/test/setup.ts - Comprehensive test environment setup
import '@testing-library/jest-dom';
import { vi } from 'vitest';
import { configure } from '@testing-library/react';
import { server } from '@/mocks/server';

// Configure React Testing Library for healthcare UI testing
configure({
  testIdAttribute: 'data-testid',
  asyncUtilTimeout: 5000, // Extended timeout for healthcare forms
  getElementError: (message) => {
    const error = new Error(
      `Healthcare UI Test Error: ${message}\n\n` +
      'Ensure all healthcare form elements have proper accessibility attributes.'
    );
    error.name = 'TestingLibraryElementError';
    return error;
  }
});

// Mock Web APIs commonly used in healthcare applications
const mockGeolocation = {
  getCurrentPosition: vi.fn(),
  watchPosition: vi.fn(),
  clearWatch: vi.fn()
};

const mockNotification = {
  permission: 'default' as NotificationPermission,
  requestPermission: vi.fn().mockResolvedValue('granted' as NotificationPermission)
};

const mockMediaDevices = {
  getUserMedia: vi.fn(),
  enumerateDevices: vi.fn()
};

// Global mocks setup
Object.defineProperty(window, 'navigator', {
  value: {
    ...window.navigator,
    geolocation: mockGeolocation,
    mediaDevices: mockMediaDevices
  },
  writable: true
});

Object.defineProperty(window, 'Notification', {
  value: mockNotification,
  writable: true
});

// Healthcare-specific localStorage mock
const localStorageMock = {
  getItem: vi.fn((key: string) => {
    if (key.startsWith('healthcare_')) {
      return '{"data": "test"}';
    }
    return null;
  }),
  setItem: vi.fn(),
  removeItem: vi.fn(),
  clear: vi.fn(),
  length: 0,
  key: vi.fn()
};

Object.defineProperty(window, 'localStorage', {
  value: localStorageMock
});

// MSW server setup for API mocking
beforeAll(() => {
  server.listen({ onUnhandledRequest: 'warn' });
});

afterEach(() => {
  server.resetHandlers();
  vi.clearAllMocks();
});

afterAll(() => {
  server.close();
});

// Global test utilities
export const TestConstants = {
  // Swiss healthcare test data
  SWISS_TEST_DATA: {
    validInsuranceNumber: '756.1234.5678.90',
    validAHVNumber: '756.1234.5678.97',
    validZipCodes: ['8001', '1201', '3011', '4001'],
    validCantons: ['ZH', 'GE', 'BE', 'BS'],
    testPatientId: 'PAT-TEST-001'
  },
  
  // Test timeouts
  TIMEOUTS: {
    FORM_SUBMISSION: 5000,
    API_RESPONSE: 3000,
    ANIMATION: 1000,
    USER_INTERACTION: 500
  },
  
  // Healthcare form test helpers
  FORM_HELPERS: {
    fillRequiredFields: async (form: HTMLFormElement) => {
      // Implementation for filling required healthcare form fields
    },
    validateFormAccessibility: async (form: HTMLFormElement) => {
      // Implementation for accessibility validation
    }
  }
} as const;
```

### 1.3 Healthcare-Specific Test Patterns

```typescript
// Healthcare domain test utilities
export class HealthcareTestUtils {
  // Swiss insurance validation testing
  static createValidSwissInsurance(): SwissInsuranceData {
    return {
      provider: 'CSS',
      policyNumber: 'CSS-12345678',
      planType: 'basic',
      validFrom: new Date('2024-01-01'),
      validTo: new Date('2024-12-31'),
      coverage: {
        basicCoverage: true,
        supplementaryCoverage: {
          hospitalInsurance: false,
          alternativeMedicine: false,
          dentalCare: false
        }
      }
    };
  }
  
  // Medical form data generators
  static createEligibilityFormData(overrides: Partial<EligibilityFormData> = {}): EligibilityFormData {
    return {
      firstName: 'Test',
      lastName: 'Patient',
      dateOfBirth: '1980-01-01',
      gender: 'male',
      symptoms: ['chest_pain', 'palpitations'],
      riskFactors: ['family_history'],
      duration: '1_week',
      severity: 'moderate',
      insuranceInfo: this.createValidSwissInsurance(),
      ...overrides
    };
  }
  
  // Mock healthcare API responses
  static mockHealthcareAPIResponses() {
    return {
      eligibilityCheck: {
        eligible: true,
        score: 85,
        recommendations: ['medical_consultation', 'ecg_monitoring'],
        contraindications: [],
        insuranceCoverage: {
          covered: true,
          copayAmount: 50,
          deductibleRemaining: 200
        }
      },
      
      symptomAnalysis: {
        riskLevel: 'medium',
        urgency: 'routine',
        suggestedActions: ['monitor_symptoms', 'schedule_appointment'],
        similarCases: 234
      },
      
      insuranceValidation: {
        valid: true,
        provider: 'CSS',
        coverageType: 'basic',
        policyActive: true
      }
    };
  }
  
  // Accessibility test helpers
  static async validateHealthcareFormAccessibility(container: HTMLElement): Promise<AccessibilityTestResult> {
    const results = {
      hasProperLabels: true,
      hasAriaDescriptions: true,
      hasErrorAnnouncements: true,
      keyboardNavigable: true,
      screenReaderFriendly: true,
      violations: [] as AccessibilityViolation[]
    };
    
    // Check for required healthcare form accessibility patterns
    const formFields = container.querySelectorAll('input, select, textarea');
    formFields.forEach(field => {
      if (!field.getAttribute('aria-label') && !field.getAttribute('aria-labelledby')) {
        results.violations.push({
          element: field.tagName,
          rule: 'missing-aria-label',
          severity: 'critical'
        });
      }
    });
    
    return results;
  }
  
  // Performance testing helpers
  static measureHealthcareFormPerformance = {
    async measureEligibilityCalculation(formData: EligibilityFormData): Promise<PerformanceMetrics> {
      const startTime = performance.now();
      
      // Simulate eligibility calculation
      await calculateEligibility(formData);
      
      const endTime = performance.now();
      const calculationTime = endTime - startTime;
      
      return {
        calculationTime,
        meetsHealthcareStandards: calculationTime < 100, // <100ms requirement
        performanceGrade: calculationTime < 50 ? 'A' : calculationTime < 100 ? 'B' : 'C'
      };
    },
    
    async measureFormLoadTime(formComponent: React.ComponentType): Promise<LoadTimeMetrics> {
      const startTime = performance.now();
      
      render(React.createElement(formComponent));
      
      const endTime = performance.now();
      const loadTime = endTime - startTime;
      
      return {
        loadTime,
        meetsStandards: loadTime < 200, // <200ms for form load
        userExperienceRating: loadTime < 100 ? 'excellent' : loadTime < 200 ? 'good' : 'poor'
      };
    }
  };
}
```

## 2. React Testing Library Patterns

### 2.1 Healthcare Component Testing Patterns

```typescript
// Healthcare form component testing example
describe('EligibilityChecker Component', () => {
  // Test data setup
  const mockEligibilityData = HealthcareTestUtils.createEligibilityFormData();
  const mockApiResponses = HealthcareTestUtils.mockHealthcareAPIResponses();
  
  beforeEach(() => {
    // Reset all mocks before each test
    vi.clearAllMocks();
    
    // Setup MSW handlers for this component
    server.use(
      rest.post('/api/eligibility/check', (req, res, ctx) => {
        return res(ctx.json(mockApiResponses.eligibilityCheck));
      })
    );
  });
  
  describe('Accessibility Requirements', () => {
    test('should meet WCAG 2.1 AA standards', async () => {
      const { container } = render(
        <EligibilityChecker onSubmit={vi.fn()} />
      );
      
      // Validate accessibility
      const accessibilityResults = await HealthcareTestUtils.validateHealthcareFormAccessibility(container);
      
      expect(accessibilityResults.violations).toHaveLength(0);
      expect(accessibilityResults.hasProperLabels).toBe(true);
      expect(accessibilityResults.keyboardNavigable).toBe(true);
    });
    
    test('should be fully keyboard navigable', async () => {
      const { container } = render(
        <EligibilityChecker onSubmit={vi.fn()} />
      );
      
      const formFields = container.querySelectorAll('input, select, button');
      
      // Tab through all form fields
      for (const field of formFields) {
        field.focus();
        expect(field).toHaveFocus();
        
        // Ensure focus is visible
        expect(field).toHaveClass(/focus-visible|focus:ring/);
      }
    });
    
    test('should announce form validation errors to screen readers', async () => {
      const user = userEvent.setup();
      
      render(<EligibilityChecker onSubmit={vi.fn()} />);
      
      // Submit form without required fields
      const submitButton = screen.getByRole('button', { name: /submit/i });
      await user.click(submitButton);
      
      // Check for ARIA live region announcements
      const errorAnnouncement = await screen.findByRole('alert');
      expect(errorAnnouncement).toBeInTheDocument();
      expect(errorAnnouncement).toHaveAttribute('aria-live', 'polite');
    });
  });
  
  describe('Swiss Healthcare Integration', () => {
    test('should validate Swiss insurance numbers correctly', async () => {
      const user = userEvent.setup();
      
      render(<EligibilityChecker onSubmit={vi.fn()} />);
      
      const insuranceField = screen.getByLabelText(/insurance number/i);
      
      // Test valid Swiss insurance number
      await user.type(insuranceField, '756.1234.5678.90');
      await user.tab(); // Trigger validation
      
      expect(screen.queryByText(/invalid insurance number/i)).not.toBeInTheDocument();
    });
    
    test('should handle Swiss canton-specific logic', async () => {
      const user = userEvent.setup();
      
      render(<EligibilityChecker onSubmit={vi.fn()} />);
      
      const zipCodeField = screen.getByLabelText(/postal code/i);
      await user.type(zipCodeField, '8001'); // Zurich
      
      // Should automatically populate canton
      const cantonField = screen.getByDisplayValue('ZH');
      expect(cantonField).toBeInTheDocument();
    });
    
    test('should support all four Swiss languages', async () => {
      const languages = ['en', 'de', 'fr', 'it'];
      
      for (const lang of languages) {
        const { rerender } = render(
          <I18nProvider locale={lang}>
            <EligibilityChecker onSubmit={vi.fn()} />
          </I18nProvider>
        );
        
        // Check that form labels are translated
        const submitButton = screen.getByRole('button');
        expect(submitButton).toHaveTextContent(getExpectedTranslation('submit', lang));
        
        rerender(<div />); // Clean up before next iteration
      }
    });
  });
  
  describe('Healthcare Form Validation', () => {
    test('should validate medical symptom selections', async () => {
      const user = userEvent.setup();
      const onSubmit = vi.fn();
      
      render(<EligibilityChecker onSubmit={onSubmit} />);
      
      // Fill required fields
      await user.type(screen.getByLabelText(/first name/i), 'John');
      await user.type(screen.getByLabelText(/last name/i), 'Doe');
      await user.type(screen.getByLabelText(/date of birth/i), '1980-01-01');
      
      // Select symptoms
      const chestPainCheckbox = screen.getByLabelText(/chest pain/i);
      await user.click(chestPainCheckbox);
      
      const submitButton = screen.getByRole('button', { name: /submit/i });
      await user.click(submitButton);
      
      // Should successfully submit with valid symptoms
      await waitFor(() => {
        expect(onSubmit).toHaveBeenCalledWith(
          expect.objectContaining({
            symptoms: expect.arrayContaining(['chest_pain'])
          })
        );
      });
    });
    
    test('should prevent submission with contraindications', async () => {
      const user = userEvent.setup();
      const onSubmit = vi.fn();
      
      // Mock API to return contraindications
      server.use(
        rest.post('/api/eligibility/check', (req, res, ctx) => {
          return res(ctx.json({
            eligible: false,
            contraindications: ['pacemaker', 'recent_surgery'],
            message: 'Patient has contraindications for monitoring'
          }));
        })
      );
      
      render(<EligibilityChecker onSubmit={onSubmit} />);
      
      // Fill form with contraindicated conditions
      await user.type(screen.getByLabelText(/first name/i), 'Jane');
      await user.click(screen.getByLabelText(/pacemaker/i));
      
      const submitButton = screen.getByRole('button', { name: /submit/i });
      await user.click(submitButton);
      
      // Should show contraindication warning
      const warningMessage = await screen.findByText(/contraindications/i);
      expect(warningMessage).toBeInTheDocument();
      expect(onSubmit).not.toHaveBeenCalled();
    });
  });
  
  describe('Performance Requirements', () => {
    test('should calculate eligibility within 100ms', async () => {
      const performanceResult = await HealthcareTestUtils.measureHealthcareFormPerformance
        .measureEligibilityCalculation(mockEligibilityData);
      
      expect(performanceResult.meetsHealthcareStandards).toBe(true);
      expect(performanceResult.calculationTime).toBeLessThan(100);
    });
    
    test('should load form components within 200ms', async () => {
      const loadTimeResult = await HealthcareTestUtils.measureHealthcareFormPerformance
        .measureFormLoadTime(EligibilityChecker);
      
      expect(loadTimeResult.meetsStandards).toBe(true);
      expect(loadTimeResult.userExperienceRating).toMatch(/excellent|good/);
    });
  });
  
  describe('Error Handling', () => {
    test('should gracefully handle API failures', async () => {
      const user = userEvent.setup();
      
      // Mock API failure
      server.use(
        rest.post('/api/eligibility/check', (req, res, ctx) => {
          return res(ctx.status(500), ctx.json({ error: 'Server error' }));
        })
      );
      
      render(<EligibilityChecker onSubmit={vi.fn()} />);
      
      // Fill and submit form
      await user.type(screen.getByLabelText(/first name/i), 'John');
      await user.click(screen.getByRole('button', { name: /submit/i }));
      
      // Should show user-friendly error message
      const errorMessage = await screen.findByText(/unable to process/i);
      expect(errorMessage).toBeInTheDocument();
      
      // Should maintain form state
      expect(screen.getByDisplayValue('John')).toBeInTheDocument();
    });
    
    test('should handle network timeout gracefully', async () => {
      const user = userEvent.setup();
      
      // Mock slow API response
      server.use(
        rest.post('/api/eligibility/check', (req, res, ctx) => {
          return res(ctx.delay(6000), ctx.json(mockApiResponses.eligibilityCheck));
        })
      );
      
      render(<EligibilityChecker onSubmit={vi.fn()} />);
      
      await user.type(screen.getByLabelText(/first name/i), 'John');
      await user.click(screen.getByRole('button', { name: /submit/i }));
      
      // Should show loading state
      expect(screen.getByText(/processing/i)).toBeInTheDocument();
      
      // Should timeout and show appropriate message
      const timeoutMessage = await screen.findByText(/request timed out/i, {}, { timeout: 8000 });
      expect(timeoutMessage).toBeInTheDocument();
    });
  });
});
```

### 2.2 Custom Testing Hooks and Utilities

```typescript
// Custom React hooks testing patterns
export const HealthcareHookTestUtils = {
  // Test custom healthcare hooks
  renderHealthcareHook: <T extends any[], R>(
    hook: (...args: T) => R,
    args: T,
    options?: {
      wrapper?: React.ComponentType<any>;
      initialProps?: any;
    }
  ) => {
    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <HealthcareTestProvider>
        {options?.wrapper ? (
          <options.wrapper {...options.initialProps}>
            {children}
          </options.wrapper>
        ) : (
          children
        )}
      </HealthcareTestProvider>
    );
    
    return renderHook(() => hook(...args), { wrapper });
  },
  
  // Test healthcare data fetching hooks
  testDataFetchingHook: async <T>(
    hookResult: { current: { data?: T; isLoading: boolean; error?: Error } }
  ): Promise<DataFetchingTestResult<T>> => {
    // Initial loading state
    expect(hookResult.current.isLoading).toBe(true);
    expect(hookResult.current.data).toBeUndefined();
    
    // Wait for data loading
    await waitFor(() => {
      expect(hookResult.current.isLoading).toBe(false);
    });
    
    return {
      dataLoaded: !!hookResult.current.data,
      hasError: !!hookResult.current.error,
      loadingHandledCorrectly: true,
      data: hookResult.current.data
    };
  }
};

// Example: Testing useEligibilityCheck hook
describe('useEligibilityCheck Hook', () => {
  test('should handle eligibility calculation correctly', async () => {
    const eligibilityData = HealthcareTestUtils.createEligibilityFormData();
    
    const { result } = HealthcareHookTestUtils.renderHealthcareHook(
      useEligibilityCheck,
      [eligibilityData]
    );
    
    const testResult = await HealthcareHookTestUtils.testDataFetchingHook(result);
    
    expect(testResult.dataLoaded).toBe(true);
    expect(testResult.hasError).toBe(false);
    expect(result.current.data?.eligible).toBeDefined();
  });
  
  test('should handle Swiss insurance validation', async () => {
    const invalidInsuranceData = {
      ...HealthcareTestUtils.createEligibilityFormData(),
      insuranceInfo: {
        ...HealthcareTestUtils.createValidSwissInsurance(),
        policyNumber: 'INVALID'
      }
    };
    
    const { result } = HealthcareHookTestUtils.renderHealthcareHook(
      useEligibilityCheck,
      [invalidInsuranceData]
    );
    
    await waitFor(() => {
      expect(result.current.error?.message).toContain('invalid insurance');
    });
  });
});
```

## 3. Playwright End-to-End Testing Strategies

### 3.1 Healthcare E2E Testing Framework

```typescript
// playwright.config.ts - Healthcare E2E configuration
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests/e2e',
  
  // Test execution configuration
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  
  // Reporter configuration
  reporter: [
    ['html', { outputFolder: 'test-results/e2e-report' }],
    ['json', { outputFile: 'test-results/e2e-results.json' }],
    ['junit', { outputFile: 'test-results/e2e-junit.xml' }]
  ],
  
  // Global test configuration
  use: {
    baseURL: 'http://localhost:8080',
    
    // Trace and screenshot configuration
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    
    // Healthcare-specific settings
    actionTimeout: 10000, // Extended timeout for healthcare forms
    navigationTimeout: 15000, // Extended for complex healthcare workflows
    
    // Accessibility testing
    colorScheme: 'no-preference'
  },
  
  // Test projects for different browsers and scenarios
  projects: [
    // Desktop browsers
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] }
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] }
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] }
    },
    
    // Mobile devices (important for healthcare accessibility)
    {
      name: 'Mobile Chrome',
      use: { ...devices['Pixel 5'] }
    },
    {
      name: 'Mobile Safari',
      use: { ...devices['iPhone 12'] }
    },
    
    // Accessibility testing project
    {
      name: 'accessibility',
      use: { ...devices['Desktop Chrome'] },
      testMatch: /.*\.accessibility\.spec\.ts/
    }
  ],
  
  // Web server configuration
  webServer: {
    command: 'npm run dev',
    url: 'http://localhost:8080',
    reuseExistingServer: !process.env.CI,
    timeout: 120000
  }
});
```

### 3.2 Healthcare User Journey Tests

```typescript
// tests/e2e/healthcare-user-journeys.spec.ts
import { test, expect, Page } from '@playwright/test';

class HealthcarePageObjects {
  constructor(private page: Page) {}
  
  // Swiss healthcare eligibility flow
  async completeEligibilityFlow(patientData: PatientTestData) {
    // Navigate to eligibility checker
    await this.page.goto('/eligibility');
    
    // Fill personal information
    await this.page.fill('[data-testid="first-name"]', patientData.firstName);
    await this.page.fill('[data-testid="last-name"]', patientData.lastName);
    await this.page.fill('[data-testid="date-of-birth"]', patientData.dateOfBirth);
    
    // Select Swiss insurance provider
    await this.page.selectOption('[data-testid="insurance-provider"]', patientData.insuranceProvider);
    await this.page.fill('[data-testid="insurance-number"]', patientData.insuranceNumber);
    
    // Fill symptoms and risk factors
    for (const symptom of patientData.symptoms) {
      await this.page.check(`[data-testid="symptom-${symptom}"]`);
    }
    
    // Submit form
    await this.page.click('[data-testid="submit-eligibility"]');
    
    // Wait for eligibility results
    await this.page.waitForSelector('[data-testid="eligibility-results"]', { timeout: 10000 });
  }
  
  // Swiss insurance validation flow
  async validateSwissInsurance(insuranceData: SwissInsuranceData) {
    await this.page.goto('/insurance-validation');
    
    await this.page.fill('[data-testid="policy-number"]', insuranceData.policyNumber);
    await this.page.selectOption('[data-testid="insurance-provider"]', insuranceData.provider);
    
    await this.page.click('[data-testid="validate-insurance"]');
    
    return await this.page.waitForSelector('[data-testid="validation-result"]');
  }
  
  // Multi-language navigation test
  async testLanguageSwitching() {
    const languages = ['en', 'de', 'fr', 'it'];
    const results = [];
    
    for (const lang of languages) {
      await this.page.goto(`/${lang}`);
      
      // Check language-specific elements
      const title = await this.page.textContent('h1');
      const navigation = await this.page.textContent('[data-testid="main-navigation"]');
      
      results.push({
        language: lang,
        title,
        navigation,
        isTranslated: !title?.includes('TRANSLATION_MISSING')
      });
    }
    
    return results;
  }
}

describe('Healthcare User Journeys', () => {
  let healthcarePage: HealthcarePageObjects;
  
  test.beforeEach(async ({ page }) => {
    healthcarePage = new HealthcarePageObjects(page);
  });
  
  test('Complete eligibility assessment flow', async ({ page }) => {
    const testPatient: PatientTestData = {
      firstName: 'Maria',
      lastName: 'Müller',
      dateOfBirth: '1985-03-15',
      insuranceProvider: 'CSS',
      insuranceNumber: '756.1234.5678.90',
      symptoms: ['chest_pain', 'palpitations'],
      riskFactors: ['family_history']
    };
    
    await healthcarePage.completeEligibilityFlow(testPatient);
    
    // Verify eligibility results
    const resultsSection = page.locator('[data-testid="eligibility-results"]');
    await expect(resultsSection).toBeVisible();
    
    // Check for Swiss-specific elements
    const insuranceCoverage = page.locator('[data-testid="insurance-coverage"]');
    await expect(insuranceCoverage).toContainText('Coverage confirmed');
    
    const nextSteps = page.locator('[data-testid="next-steps"]');
    await expect(nextSteps).toBeVisible();
  });
  
  test('Swiss insurance validation workflow', async ({ page }) => {
    const validInsurance: SwissInsuranceData = {
      provider: 'Helsana',
      policyNumber: 'HEL-987654321',
      planType: 'supplementary'
    };
    
    const validationResult = await healthcarePage.validateSwissInsurance(validInsurance);
    
    // Verify validation success
    await expect(validationResult).toContainText('Valid insurance');
    
    // Check coverage details
    const coverageDetails = page.locator('[data-testid="coverage-details"]');
    await expect(coverageDetails).toBeVisible();
    await expect(coverageDetails).toContainText('Helsana');
  });
  
  test('Multi-language support across healthcare flows', async ({ page }) => {
    const languageResults = await healthcarePage.testLanguageSwitching();
    
    // Verify all languages are properly supported
    for (const result of languageResults) {
      expect(result.isTranslated).toBe(true);
      expect(result.title).toBeTruthy();
      expect(result.navigation).toBeTruthy();
    }
    
    // Test language-specific healthcare content
    await page.goto('/de');
    await expect(page.locator('h1')).toContainText('Gesundheitsbewertung');
    
    await page.goto('/fr');
    await expect(page.locator('h1')).toContainText('Évaluation de santé');
    
    await page.goto('/it');
    await expect(page.locator('h1')).toContainText('Valutazione sanitaria');
  });
  
  test('Healthcare form accessibility compliance', async ({ page }) => {
    await page.goto('/eligibility');
    
    // Test keyboard navigation
    await page.keyboard.press('Tab');
    let focusedElement = await page.evaluate(() => document.activeElement?.tagName);
    expect(['INPUT', 'BUTTON', 'SELECT']).toContain(focusedElement);
    
    // Test screen reader compatibility
    const formLabels = await page.locator('label').count();
    const formInputs = await page.locator('input').count();
    expect(formLabels).toBeGreaterThanOrEqual(formInputs); // All inputs should have labels
    
    // Test ARIA attributes
    const requiredFields = page.locator('[aria-required="true"]');
    await expect(requiredFields).toHaveCount(3); // Expecting 3 required fields
    
    // Test error announcement
    await page.click('[data-testid="submit-eligibility"]'); // Submit without filling
    const errorAlert = page.locator('[role="alert"]');
    await expect(errorAlert).toBeVisible();
  });
  
  test('Healthcare data privacy compliance', async ({ page }) => {
    await page.goto('/eligibility');
    
    // Verify privacy notice is displayed
    const privacyNotice = page.locator('[data-testid="privacy-notice"]');
    await expect(privacyNotice).toBeVisible();
    await expect(privacyNotice).toContainText('Swiss Federal Act on Data Protection');
    
    // Test consent management
    const consentCheckbox = page.locator('[data-testid="data-processing-consent"]');
    await expect(consentCheckbox).toBeVisible();
    
    // Verify form cannot be submitted without consent
    await page.fill('[data-testid="first-name"]', 'Test');
    await page.click('[data-testid="submit-eligibility"]');
    
    const consentError = page.locator('[data-testid="consent-error"]');
    await expect(consentError).toContainText('consent is required');
  });
  
  test('Performance benchmarks for healthcare forms', async ({ page }) => {
    // Measure page load time
    const startTime = Date.now();
    await page.goto('/eligibility');
    await page.waitForLoadState('networkidle');
    const loadTime = Date.now() - startTime;
    
    expect(loadTime).toBeLessThan(3000); // Should load within 3 seconds
    
    // Measure form interaction responsiveness
    const interactionStart = Date.now();
    await page.fill('[data-testid="first-name"]', 'Performance Test');
    const interactionTime = Date.now() - interactionStart;
    
    expect(interactionTime).toBeLessThan(100); // Should respond within 100ms
    
    // Measure eligibility calculation time
    await page.fill('[data-testid="first-name"]', 'Speed');
    await page.fill('[data-testid="last-name"]', 'Test');
    await page.fill('[data-testid="date-of-birth"]', '1990-01-01');
    await page.check('[data-testid="data-processing-consent"]');
    
    const calculationStart = Date.now();
    await page.click('[data-testid="submit-eligibility"]');
    await page.waitForSelector('[data-testid="eligibility-results"]');
    const calculationTime = Date.now() - calculationStart;
    
    expect(calculationTime).toBeLessThan(2000); // Should calculate within 2 seconds
  });
});
```

### 3.3 Visual Regression Testing

```typescript
// tests/e2e/visual-regression.spec.ts
import { test, expect } from '@playwright/test';

describe('Healthcare Visual Regression Tests', () => {
  test.beforeEach(async ({ page }) => {
    // Set consistent viewport for visual tests
    await page.setViewportSize({ width: 1200, height: 800 });
  });
  
  test('Homepage visual consistency across languages', async ({ page }) => {
    const languages = ['en', 'de', 'fr', 'it'];
    
    for (const lang of languages) {
      await page.goto(`/${lang}`);
      await page.waitForLoadState('networkidle');
      
      // Take full page screenshot
      await expect(page).toHaveScreenshot(`homepage-${lang}.png`, {
        fullPage: true,
        threshold: 0.2, // Allow 20% pixel difference for text changes
        animations: 'disabled'
      });
    }
  });
  
  test('Eligibility form visual consistency', async ({ page }) => {
    await page.goto('/eligibility');
    await page.waitForLoadState('networkidle');
    
    // Screenshot of initial form state
    await expect(page.locator('[data-testid="eligibility-form"]')).toHaveScreenshot(
      'eligibility-form-initial.png'
    );
    
    // Fill some fields and screenshot
    await page.fill('[data-testid="first-name"]', 'Visual');
    await page.fill('[data-testid="last-name"]', 'Test');
    await page.check('[data-testid="symptom-chest-pain"]');
    
    await expect(page.locator('[data-testid="eligibility-form"]')).toHaveScreenshot(
      'eligibility-form-filled.png'
    );
    
    // Error state screenshot
    await page.click('[data-testid="submit-eligibility"]');
    await page.waitForSelector('[role="alert"]');
    
    await expect(page.locator('[data-testid="eligibility-form"]')).toHaveScreenshot(
      'eligibility-form-errors.png'
    );
  });
  
  test('Mobile responsive design visual tests', async ({ page }) => {
    // Test mobile viewport
    await page.setViewportSize({ width: 375, height: 667 }); // iPhone SE
    
    await page.goto('/eligibility');
    await page.waitForLoadState('networkidle');
    
    await expect(page).toHaveScreenshot('eligibility-mobile.png', {
      fullPage: true
    });
    
    // Test tablet viewport
    await page.setViewportSize({ width: 768, height: 1024 }); // iPad
    
    await expect(page).toHaveScreenshot('eligibility-tablet.png', {
      fullPage: true
    });
  });
  
  test('Dark mode healthcare interface', async ({ page }) => {
    // Enable dark mode
    await page.emulateMedia({ colorScheme: 'dark' });
    
    await page.goto('/eligibility');
    await page.waitForLoadState('networkidle');
    
    await expect(page).toHaveScreenshot('eligibility-dark-mode.png', {
      fullPage: true
    });
    
    // Verify accessibility in dark mode
    const backgroundColor = await page.locator('body').evaluate(
      el => getComputedStyle(el).backgroundColor
    );
    
    // Should have dark background
    expect(backgroundColor).toMatch(/rgb\(.*,.*,.*\)/);
  });
});
```

## Implementation Guidelines

### Phase 1: Testing Foundation (Week 1)
1. **Vitest Setup**: Configure comprehensive test environment
2. **RTL Patterns**: Implement healthcare-specific testing patterns  
3. **Test Utilities**: Create Swiss healthcare test utilities
4. **Coverage Targets**: Establish and enforce coverage thresholds

### Phase 2: E2E Testing (Week 2)
1. **Playwright Configuration**: Set up cross-browser testing
2. **User Journey Tests**: Implement critical healthcare flows
3. **Accessibility Testing**: Add WCAG compliance validation
4. **Visual Regression**: Establish screenshot-based testing

### Phase 3: Advanced Testing (Week 3)
1. **Performance Testing**: Add performance benchmark tests
2. **Security Testing**: Implement data privacy compliance tests
3. **Integration Testing**: Create comprehensive API testing
4. **CI/CD Integration**: Automate all testing in pipeline

### Quality Gates
- 80% test coverage for services, 70% for utilities
- All critical healthcare flows covered by E2E tests
- 100% accessibility compliance in tests  
- Visual regression tests for all major components
- Performance benchmarks met in all tests

### Success Metrics
- Zero untested critical healthcare functionality
- All tests run in under 10 minutes in CI/CD
- 95% test stability (non-flaky tests)
- Healthcare compliance validated through testing
- Multi-language support verified through automation

---

**Status:** ✅ Complete  
**Next Steps:** Integration with code quality metrics and security standards