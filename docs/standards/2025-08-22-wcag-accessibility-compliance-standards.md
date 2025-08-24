# WCAG 2.1 AA Accessibility Compliance Standards

**Research ID:** RCC-002-RS-002-A  
**Date:** 2025-08-22  
**Domain:** Accessibility & Healthcare Compliance - WCAG 2.1 AA  
**Status:** Complete  

## Executive Summary

This document provides comprehensive WCAG 2.1 AA accessibility compliance guidelines for the SKIIN Switzerland healthcare application, focusing on complete accessibility implementation, screen reader compatibility, keyboard navigation standards, color contrast requirements (4.5:1 minimum), form accessibility patterns, mobile accessibility considerations, and automated compliance checking tools.

## 1. WCAG 2.1 AA Overview and Healthcare Context

### 1.1 Healthcare Accessibility Requirements

```typescript
// Healthcare-specific accessibility requirements
export const HealthcareAccessibilityStandards = {
  // WCAG 2.1 AA Level Requirements
  wcag: {
    level: 'AA',
    version: '2.1',
    guidelines: ['Perceivable', 'Operable', 'Understandable', 'Robust'],
    successCriteria: 50 // Total AA success criteria
  },
  
  // Healthcare-specific enhancements
  healthcare: {
    // Medical information must be accessible to screen readers
    medicalContentAccessibility: true,
    
    // Emergency information must be highly visible
    emergencyInformationContrast: 7.0, // AAA level for critical info
    
    // Forms must support assistive technology
    formAccessibility: 'enhanced',
    
    // Multi-language accessibility for Swiss context
    multiLanguageSupport: ['en', 'de', 'fr', 'it'],
    
    // Elderly and visually impaired user considerations
    enhancedVisibility: true
  },
  
  // Swiss regulatory compliance
  swissCompliance: {
    // Swiss disability rights requirements
    disabilityRightsAct: true,
    
    // Federal accessibility guidelines
    federalGuidelines: 'P028-2022',
    
    // Healthcare sector specific requirements
    healthcareSectorCompliance: true
  }
} as const;
```

### 1.2 Success Criteria Mapping

```typescript
// WCAG 2.1 AA Success Criteria for Healthcare
export const WCAGSuccessCriteria = {
  // Principle 1: Perceivable
  perceivable: {
    // 1.1 Text Alternatives
    '1.1.1': {
      level: 'A',
      title: 'Non-text Content',
      description: 'All medical images, charts, and diagrams must have meaningful alt text',
      healthcareContext: 'Medical device images, anatomical diagrams, test results'
    },
    
    // 1.2 Time-based Media
    '1.2.1': {
      level: 'A',
      title: 'Audio-only and Video-only (Prerecorded)',
      description: 'Educational healthcare videos must have transcripts'
    },
    '1.2.2': {
      level: 'A',
      title: 'Captions (Prerecorded)',
      description: 'Medical instruction videos must include captions'
    },
    
    // 1.3 Adaptable
    '1.3.1': {
      level: 'A',
      title: 'Info and Relationships',
      description: 'Medical forms must maintain meaning when read by screen readers'
    },
    '1.3.2': {
      level: 'A',
      title: 'Meaningful Sequence',
      description: 'Healthcare workflows must follow logical reading order'
    },
    
    // 1.4 Distinguishable
    '1.4.3': {
      level: 'AA',
      title: 'Contrast (Minimum)',
      description: 'Color contrast ratio of at least 4.5:1 for normal text',
      healthcareContext: 'Critical for medical information readability'
    },
    '1.4.4': {
      level: 'AA',
      title: 'Resize text',
      description: 'Text must be resizable up to 200% without loss of functionality'
    },
    '1.4.10': {
      level: 'AA',
      title: 'Reflow',
      description: 'Content must reflow for mobile healthcare access'
    },
    '1.4.11': {
      level: 'AA',
      title: 'Non-text Contrast',
      description: '3:1 contrast for UI components and medical form elements'
    }
  },
  
  // Principle 2: Operable
  operable: {
    // 2.1 Keyboard Accessible
    '2.1.1': {
      level: 'A',
      title: 'Keyboard',
      description: 'All healthcare forms must be fully keyboard accessible'
    },
    '2.1.2': {
      level: 'A',
      title: 'No Keyboard Trap',
      description: 'Users must be able to navigate away from any healthcare form'
    },
    
    // 2.4 Navigable
    '2.4.3': {
      level: 'A',
      title: 'Focus Order',
      description: 'Medical forms must have logical focus order'
    },
    '2.4.6': {
      level: 'AA',
      title: 'Headings and Labels',
      description: 'Medical form fields must have clear, descriptive labels'
    },
    '2.4.7': {
      level: 'AA',
      title: 'Focus Visible',
      description: 'Focus indicators must be clearly visible on medical forms'
    }
  }
};
```

## 2. Screen Reader Compatibility Requirements

### 2.1 Screen Reader Testing Strategy

```typescript
// Screen reader compatibility configuration
export const ScreenReaderCompatibility = {
  // Primary screen readers to support
  primaryReaders: [
    'NVDA', // Most common free option
    'JAWS', // Professional environments
    'VoiceOver', // macOS/iOS users
    'TalkBack' // Android users
  ],
  
  // Testing requirements
  testing: {
    // Test with each major screen reader
    coverage: 'comprehensive',
    
    // Key healthcare workflows to test
    criticalFlows: [
      'eligibility-assessment',
      'insurance-verification',
      'symptom-reporting',
      'appointment-booking',
      'emergency-contact'
    ],
    
    // Performance requirements
    performance: {
      announcementDelay: 100, // ms
      navigationSpeed: 'natural',
      contentOrder: 'logical'
    }
  }
};

// ARIA implementation for healthcare components
interface HealthcareARIAProps {
  role?: string;
  'aria-label'?: string;
  'aria-labelledby'?: string;
  'aria-describedby'?: string;
  'aria-required'?: boolean;
  'aria-invalid'?: boolean;
  'aria-expanded'?: boolean;
  'aria-live'?: 'polite' | 'assertive' | 'off';
  'aria-atomic'?: boolean;
}

// ✅ Recommended: Medical form field with comprehensive ARIA
export function MedicalFormField({
  id,
  label,
  description,
  error,
  required = false,
  ...props
}: MedicalFormFieldProps) {
  const fieldId = useId();
  const descriptionId = useId();
  const errorId = useId();
  
  return (
    <div className="medical-form-field">
      <label 
        htmlFor={fieldId}
        className={cn(
          "medical-form-label",
          required && "medical-form-label-required"
        )}
      >
        {label}
        {required && (
          <span aria-label="required field" className="text-red-500 ml-1">
            *
          </span>
        )}
      </label>
      
      {description && (
        <p id={descriptionId} className="medical-form-description">
          {description}
        </p>
      )}
      
      <input
        id={fieldId}
        aria-required={required}
        aria-invalid={!!error}
        aria-describedby={cn(
          description && descriptionId,
          error && errorId
        )}
        className={cn(
          "medical-form-input",
          error && "medical-form-input-error"
        )}
        {...props}
      />
      
      {error && (
        <div
          id={errorId}
          role="alert"
          aria-live="polite"
          className="medical-form-error"
        >
          <span className="sr-only">Error: </span>
          {error}
        </div>
      )}
    </div>
  );
}
```

### 2.2 Screen Reader Optimized Components

```typescript
// ✅ Recommended: Healthcare status announcements
export function HealthcareStatusAnnouncer({ 
  status, 
  message, 
  priority = 'polite' 
}: HealthcareStatusAnnouncerProps) {
  const [announcement, setAnnouncement] = useState<string>('');
  
  useEffect(() => {
    if (status && message) {
      const healthcareAnnouncement = `Health status update: ${status}. ${message}`;
      setAnnouncement(healthcareAnnouncement);
      
      // Clear after announcement to allow re-announcements
      const timer = setTimeout(() => setAnnouncement(''), 1000);
      return () => clearTimeout(timer);
    }
  }, [status, message]);
  
  return (
    <div
      role="status"
      aria-live={priority}
      aria-atomic="true"
      className="sr-only"
    >
      {announcement}
    </div>
  );
}

// ✅ Recommended: Medical data table with screen reader support
export function MedicalDataTable({ 
  data, 
  columns, 
  caption 
}: MedicalDataTableProps) {
  return (
    <div role="region" aria-labelledby="table-caption" tabIndex={0}>
      <table 
        className="medical-data-table"
        role="table"
        aria-rowcount={data.length + 1} // +1 for header
      >
        <caption id="table-caption" className="medical-table-caption">
          {caption}
        </caption>
        
        <thead>
          <tr role="row" aria-rowindex={1}>
            {columns.map((column, index) => (
              <th
                key={column.key}
                role="columnheader"
                aria-colindex={index + 1}
                scope="col"
                className={cn(
                  "medical-table-header",
                  column.sortable && "medical-table-sortable"
                )}
              >
                {column.title}
                {column.required && (
                  <span aria-label="required information" className="ml-1">
                    *
                  </span>
                )}
              </th>
            ))}
          </tr>
        </thead>
        
        <tbody>
          {data.map((row, rowIndex) => (
            <tr
              key={row.id}
              role="row"
              aria-rowindex={rowIndex + 2}
            >
              {columns.map((column, colIndex) => (
                <td
                  key={`${row.id}-${column.key}`}
                  role="cell"
                  aria-colindex={colIndex + 1}
                  className="medical-table-cell"
                >
                  {formatMedicalValue(row[column.key], column.type)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
```

## 3. Keyboard Navigation Standards

### 3.1 Keyboard Navigation Implementation

```typescript
// Keyboard navigation configuration for healthcare forms
export const KeyboardNavigationStandards = {
  // Focus management requirements
  focusManagement: {
    // Visible focus indicators required
    focusVisible: true,
    
    // Focus order must be logical
    focusOrder: 'logical',
    
    // No keyboard traps
    noTraps: true,
    
    // Skip links for complex forms
    skipLinks: true,
    
    // Focus restoration after modals
    focusRestoration: true
  },
  
  // Healthcare-specific keyboard shortcuts
  shortcuts: {
    // Emergency contact shortcut
    'Alt+E': 'emergency-contact',
    
    // Skip to main content
    'Alt+S': 'skip-to-content',
    
    // Quick symptom entry
    'Alt+Q': 'quick-symptom-entry',
    
    // Save form progress
    'Ctrl+S': 'save-progress'
  },
  
  // Navigation patterns
  patterns: {
    // Tab order should follow reading order
    tabOrder: 'reading-order',
    
    // Arrow keys for related options
    arrowKeys: 'group-navigation',
    
    // Enter/Space for activation
    activation: 'standard',
    
    // Escape to close/cancel
    escape: 'close-cancel'
  }
};

// ✅ Recommended: Keyboard accessible healthcare form
export function KeyboardAccessibleHealthForm() {
  const [currentSection, setCurrentSection] = useState(0);
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);
  
  // Skip link implementation
  const skipToSection = (sectionIndex: number) => {
    setCurrentSection(sectionIndex);
    sectionRefs.current[sectionIndex]?.focus();
  };
  
  // Keyboard shortcut handler
  useEffect(() => {
    const handleKeyboardShortcuts = (event: KeyboardEvent) => {
      // Alt+S: Skip to content
      if (event.altKey && event.key === 's') {
        event.preventDefault();
        skipToSection(0);
        return;
      }
      
      // Alt+E: Emergency contact
      if (event.altKey && event.key === 'e') {
        event.preventDefault();
        window.location.href = 'tel:+41844000144';
        return;
      }
      
      // Ctrl+S: Save progress
      if (event.ctrlKey && event.key === 's') {
        event.preventDefault();
        saveFormProgress();
        return;
      }
    };
    
    document.addEventListener('keydown', handleKeyboardShortcuts);
    return () => document.removeEventListener('keydown', handleKeyboardShortcuts);
  }, []);
  
  return (
    <div className="healthcare-form">
      {/* Skip links */}
      <div className="skip-links">
        <a
          href="#main-content"
          className="skip-link"
          onFocus={() => skipToSection(0)}
        >
          Skip to main content
        </a>
        <a
          href="#emergency-info"
          className="skip-link"
          onFocus={() => skipToSection(1)}
        >
          Skip to emergency information
        </a>
      </div>
      
      {/* Main form content with proper focus management */}
      <main
        id="main-content"
        ref={el => sectionRefs.current[0] = el}
        tabIndex={-1}
        className="healthcare-form-main"
      >
        <h1>Health Assessment Form</h1>
        {/* Form sections */}
      </main>
      
      {/* Emergency contact section */}
      <aside
        id="emergency-info"
        ref={el => sectionRefs.current[1] = el}
        tabIndex={-1}
        className="emergency-contact"
      >
        <h2>Emergency Contact</h2>
        <p>For medical emergencies, call <a href="tel:144">144</a></p>
      </aside>
    </div>
  );
}
```

### 3.2 Focus Management Patterns

```typescript
// ✅ Recommended: Healthcare modal with focus management
export function HealthcareModal({ 
  isOpen, 
  onClose, 
  title, 
  children,
  priority = 'normal'
}: HealthcareModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);
  const [focusTrapEnabled, setFocusTrapEnabled] = useState(false);
  
  useEffect(() => {
    if (isOpen) {
      // Store previously focused element
      previousFocusRef.current = document.activeElement as HTMLElement;
      
      // Focus modal when opened
      setTimeout(() => {
        modalRef.current?.focus();
        setFocusTrapEnabled(true);
      }, 100);
      
      // Handle escape key
      const handleEscape = (event: KeyboardEvent) => {
        if (event.key === 'Escape') {
          onClose();
        }
      };
      
      document.addEventListener('keydown', handleEscape);
      return () => document.removeEventListener('keydown', handleEscape);
    } else {
      // Restore focus when closed
      if (previousFocusRef.current) {
        previousFocusRef.current.focus();
      }
      setFocusTrapEnabled(false);
    }
  }, [isOpen, onClose]);
  
  // Focus trap implementation
  const handleKeyDown = (event: KeyboardEvent) => {
    if (!focusTrapEnabled) return;
    
    if (event.key === 'Tab') {
      const focusableElements = modalRef.current?.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      
      if (!focusableElements?.length) return;
      
      const firstElement = focusableElements[0] as HTMLElement;
      const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;
      
      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    }
  };
  
  if (!isOpen) return null;
  
  return (
    <div
      className="healthcare-modal-overlay"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      aria-live={priority === 'urgent' ? 'assertive' : 'polite'}
    >
      <div
        ref={modalRef}
        className="healthcare-modal-content"
        tabIndex={-1}
        onKeyDown={handleKeyDown}
      >
        <header className="healthcare-modal-header">
          <h2 id="modal-title" className="healthcare-modal-title">
            {title}
          </h2>
          <button
            type="button"
            className="healthcare-modal-close"
            onClick={onClose}
            aria-label="Close modal"
          >
            ×
          </button>
        </header>
        
        <div className="healthcare-modal-body">
          {children}
        </div>
      </div>
    </div>
  );
}
```

## 4. Color Contrast and Visual Design Requirements

### 4.1 Color Contrast Standards

```typescript
// Color contrast requirements for healthcare application
export const ColorContrastStandards = {
  // WCAG 2.1 AA minimum requirements
  minimumContrast: {
    normalText: 4.5, // 4.5:1 for normal text
    largeText: 3.0,  // 3:1 for large text (18pt+ or 14pt+ bold)
    uiComponents: 3.0, // 3:1 for UI components and graphics
    nonTextContent: 3.0 // 3:1 for meaningful non-text content
  },
  
  // Enhanced requirements for healthcare context
  healthcareEnhanced: {
    criticalInformation: 7.0, // AAA level for critical medical info
    emergencyContent: 7.0,    // AAA level for emergency information
    medicalData: 4.5,         // AA level minimum for medical data
    formFields: 4.5,          // AA level for form interactions
    statusIndicators: 4.5     // AA level for health status indicators
  },
  
  // Swiss healthcare brand colors with compliant variants
  brandColors: {
    primary: {
      main: '#5298F2',      // Primary blue - 4.51:1 on white
      accessible: '#2563EB', // Enhanced contrast version - 7.37:1
      light: '#93C5FD',     // Light variant - 3.06:1 on white (large text only)
      dark: '#1E3A8A'       // Dark variant - 12.63:1 on white
    },
    
    secondary: {
      main: '#5549A6',      // Purple - 6.89:1 on white
      accessible: '#4338CA', // Enhanced version - 9.24:1
      light: '#A78BFA',     // Light variant - 3.91:1 (large text only)  
      dark: '#312E81'       // Dark variant - 15.35:1
    },
    
    semantic: {
      success: '#059669',   // Success green - 5.77:1
      warning: '#D97706',   // Warning orange - 4.52:1  
      error: '#DC2626',     // Error red - 5.90:1
      info: '#0284C7'       // Info blue - 6.94:1
    }
  }
};

// ✅ Recommended: Accessible color utility functions
export function getAccessibleColor(
  baseColor: string,
  background: string = '#FFFFFF',
  level: 'AA' | 'AAA' = 'AA'
) {
  const requiredContrast = level === 'AAA' ? 7.0 : 4.5;
  const currentContrast = calculateContrast(baseColor, background);
  
  if (currentContrast >= requiredContrast) {
    return baseColor;
  }
  
  // Adjust color to meet contrast requirements
  return adjustColorForContrast(baseColor, background, requiredContrast);
}

// Color contrast checking component
export function ContrastChecker({ 
  foreground, 
  background, 
  text,
  level = 'AA'
}: ContrastCheckerProps) {
  const contrast = calculateContrast(foreground, background);
  const requiredContrast = level === 'AAA' ? 7.0 : 4.5;
  const passes = contrast >= requiredContrast;
  
  return (
    <div
      className="contrast-checker"
      style={{ color: foreground, backgroundColor: background }}
    >
      <span>{text}</span>
      <div className="contrast-info">
        <span>Contrast: {contrast.toFixed(2)}:1</span>
        <span className={passes ? 'text-green-600' : 'text-red-600'}>
          {passes ? '✓ PASS' : '✗ FAIL'} {level}
        </span>
      </div>
    </div>
  );
}
```

### 4.2 Visual Design Accessibility

```typescript
// ✅ Recommended: Accessible healthcare status indicators
export function HealthcareStatusIndicator({ 
  status, 
  label,
  size = 'medium' 
}: HealthcareStatusIndicatorProps) {
  const statusConfig = {
    healthy: {
      color: ColorContrastStandards.semantic.success,
      icon: '✓',
      ariaLabel: 'Health status: Good'
    },
    warning: {
      color: ColorContrastStandards.semantic.warning,
      icon: '⚠',
      ariaLabel: 'Health status: Attention needed'
    },
    critical: {
      color: ColorContrastStandards.semantic.error,
      icon: '⚠',
      ariaLabel: 'Health status: Critical'
    }
  };
  
  const config = statusConfig[status];
  
  return (
    <div
      className={cn(
        "healthcare-status-indicator",
        `healthcare-status-${status}`,
        `healthcare-status-${size}`
      )}
      role="img"
      aria-label={config.ariaLabel}
    >
      {/* Visual indicator */}
      <span
        className="status-icon"
        style={{ color: config.color }}
        aria-hidden="true"
      >
        {config.icon}
      </span>
      
      {/* Text label */}
      <span className="status-label">
        {label}
      </span>
      
      {/* Hidden text for screen readers */}
      <span className="sr-only">
        {config.ariaLabel}
      </span>
    </div>
  );
}

// ✅ Recommended: Accessible color-coded medical charts
export function AccessibleMedicalChart({ 
  data, 
  type = 'line' 
}: AccessibleMedicalChartProps) {
  const chartId = useId();
  const tableId = useId();
  
  return (
    <div className="accessible-medical-chart">
      {/* Visual chart */}
      <div
        id={chartId}
        role="img"
        aria-labelledby={`${chartId}-title`}
        aria-describedby={`${chartId}-description`}
      >
        <h3 id={`${chartId}-title`}>Medical Data Chart</h3>
        <p id={`${chartId}-description`}>
          Chart showing medical data over time. 
          Detailed data available in table below.
        </p>
        
        {/* Chart implementation with high contrast colors */}
        <Chart
          data={data}
          options={{
            plugins: {
              legend: {
                labels: {
                  generateLabels: (chart) => {
                    // Ensure legend labels meet contrast requirements
                    return generateAccessibleLegendLabels(chart);
                  }
                }
              }
            },
            elements: {
              line: {
                borderWidth: 3, // Thicker lines for better visibility
              },
              point: {
                radius: 6, // Larger points for better visibility
                borderWidth: 2
              }
            }
          }}
        />
      </div>
      
      {/* Data table alternative for screen readers */}
      <details className="chart-data-table">
        <summary>View chart data in table format</summary>
        <table id={tableId} className="medical-data-table">
          <caption>Medical data shown in chart above</caption>
          <thead>
            <tr>
              <th scope="col">Date</th>
              <th scope="col">Value</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td>{formatDate(item.date)}</td>
                <td>{item.value}</td>
                <td>{item.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </details>
    </div>
  );
}
```

## 5. Form Accessibility Patterns

### 5.1 Healthcare Form Accessibility

```typescript
// ✅ Recommended: Comprehensive healthcare form accessibility
export function AccessibleHealthcareForm({ 
  onSubmit,
  initialData 
}: AccessibleHealthcareFormProps) {
  const [formData, setFormData] = useState(initialData);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Form validation with accessibility considerations
  const validateField = (name: string, value: any): string => {
    const validationRules = {
      firstName: (val: string) => {
        if (!val.trim()) return 'First name is required';
        if (val.length < 2) return 'First name must be at least 2 characters';
        return '';
      },
      
      dateOfBirth: (val: string) => {
        if (!val) return 'Date of birth is required';
        const age = calculateAge(new Date(val));
        if (age < 0) return 'Date of birth cannot be in the future';
        if (age > 150) return 'Please verify date of birth';
        return '';
      },
      
      insuranceNumber: (val: string) => {
        if (!val.trim()) return 'Insurance number is required';
        if (!validateSwissInsuranceNumber(val)) {
          return 'Please enter a valid Swiss insurance number';
        }
        return '';
      }
    };
    
    return validationRules[name]?.(value) || '';
  };
  
  // Handle form submission with accessibility feedback
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    
    // Announce form submission to screen readers
    const statusAnnouncer = document.getElementById('form-status');
    if (statusAnnouncer) {
      statusAnnouncer.textContent = 'Submitting form...';
    }
    
    setIsSubmitting(true);
    
    try {
      await onSubmit(formData);
      
      // Success announcement
      if (statusAnnouncer) {
        statusAnnouncer.textContent = 'Form submitted successfully!';
      }
      
      // Focus success message
      const successMessage = document.getElementById('form-success');
      successMessage?.focus();
      
    } catch (error) {
      // Error announcement
      if (statusAnnouncer) {
        statusAnnouncer.textContent = 'Form submission failed. Please review errors below.';
      }
      
      // Focus first error field
      const firstErrorField = document.querySelector('[aria-invalid="true"]') as HTMLElement;
      firstErrorField?.focus();
      
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <div className="accessible-healthcare-form">
      {/* Form status announcer */}
      <div
        id="form-status"
        role="status"
        aria-live="polite"
        aria-atomic="true"
        className="sr-only"
      />
      
      {/* Form title and description */}
      <div className="form-header">
        <h2 id="form-title">Healthcare Information Form</h2>
        <p id="form-description">
          Please provide your healthcare information. 
          Required fields are marked with an asterisk (*).
        </p>
      </div>
      
      <form
        onSubmit={handleSubmit}
        aria-labelledby="form-title"
        aria-describedby="form-description"
        noValidate
      >
        {/* Personal Information Section */}
        <fieldset className="form-section">
          <legend className="form-section-title">
            Personal Information
          </legend>
          
          <MedicalFormField
            id="firstName"
            label="First Name"
            type="text"
            value={formData.firstName}
            error={errors.firstName}
            required
            onChange={(value) => {
              setFormData(prev => ({ ...prev, firstName: value }));
              setErrors(prev => ({ ...prev, firstName: validateField('firstName', value) }));
            }}
          />
          
          <MedicalFormField
            id="lastName"
            label="Last Name"
            type="text"
            value={formData.lastName}
            required
            onChange={(value) => {
              setFormData(prev => ({ ...prev, lastName: value }));
            }}
          />
          
          <MedicalFormField
            id="dateOfBirth"
            label="Date of Birth"
            type="date"
            value={formData.dateOfBirth}
            description="Format: DD/MM/YYYY"
            error={errors.dateOfBirth}
            required
            onChange={(value) => {
              setFormData(prev => ({ ...prev, dateOfBirth: value }));
              setErrors(prev => ({ ...prev, dateOfBirth: validateField('dateOfBirth', value) }));
            }}
          />
        </fieldset>
        
        {/* Insurance Information Section */}
        <fieldset className="form-section">
          <legend className="form-section-title">
            Swiss Insurance Information
          </legend>
          
          <MedicalFormField
            id="insuranceProvider"
            label="Insurance Provider"
            type="select"
            value={formData.insuranceProvider}
            options={SWISS_INSURANCE_PROVIDERS}
            required
            onChange={(value) => {
              setFormData(prev => ({ ...prev, insuranceProvider: value }));
            }}
          />
          
          <MedicalFormField
            id="insuranceNumber"
            label="Insurance Number"
            type="text"
            value={formData.insuranceNumber}
            error={errors.insuranceNumber}
            description="Your Swiss health insurance card number"
            required
            onChange={(value) => {
              setFormData(prev => ({ ...prev, insuranceNumber: value }));
              setErrors(prev => ({ ...prev, insuranceNumber: validateField('insuranceNumber', value) }));
            }}
          />
        </fieldset>
        
        {/* Form Actions */}
        <div className="form-actions">
          <button
            type="submit"
            disabled={isSubmitting}
            className="btn-primary"
            aria-describedby="submit-help"
          >
            {isSubmitting ? 'Submitting...' : 'Submit Healthcare Form'}
          </button>
          
          <p id="submit-help" className="form-help">
            By submitting this form, you confirm that the information provided is accurate.
          </p>
        </div>
      </form>
      
      {/* Success message (initially hidden) */}
      <div
        id="form-success"
        role="alert"
        tabIndex={-1}
        className="form-success hidden"
      >
        <h3>Form Submitted Successfully</h3>
        <p>Your healthcare information has been received and will be processed shortly.</p>
      </div>
    </div>
  );
}
```

### 5.2 Error Handling and Validation

```typescript
// ✅ Recommended: Accessible error handling
export function AccessibleFormValidation() {
  const [validationSummary, setValidationSummary] = useState<ValidationError[]>([]);
  
  // Generate validation summary for screen readers
  const generateValidationSummary = (errors: Record<string, string>) => {
    const summary = Object.entries(errors)
      .filter(([_, error]) => error)
      .map(([field, error]) => ({
        field,
        error,
        fieldLabel: getFieldLabel(field)
      }));
      
    setValidationSummary(summary);
    return summary;
  };
  
  return (
    <>
      {/* Error summary for screen readers */}
      {validationSummary.length > 0 && (
        <div
          role="alert"
          aria-labelledby="error-summary-title"
          className="error-summary"
          tabIndex={-1}
        >
          <h3 id="error-summary-title" className="error-summary-title">
            There {validationSummary.length === 1 ? 'is' : 'are'} {validationSummary.length} error
            {validationSummary.length === 1 ? '' : 's'} in this form:
          </h3>
          
          <ul className="error-summary-list">
            {validationSummary.map(({ field, error, fieldLabel }, index) => (
              <li key={field}>
                <a
                  href={`#${field}`}
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById(field)?.focus();
                  }}
                  className="error-summary-link"
                >
                  {fieldLabel}: {error}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
```

## 6. Mobile Accessibility Considerations

### 6.1 Mobile Healthcare Accessibility

```typescript
// Mobile accessibility configuration for healthcare
export const MobileAccessibilityStandards = {
  // Touch target requirements
  touchTargets: {
    minimumSize: 44, // 44x44px minimum (iOS guideline)
    recommendedSize: 48, // 48x48px recommended (Android guideline)
    spacing: 8, // 8px minimum spacing between targets
    healthcareEnhanced: 56 // 56x56px for critical healthcare interactions
  },
  
  // Viewport and responsive requirements
  viewport: {
    minimumWidth: 320, // Support down to iPhone 5
    scalable: true, // Allow zoom up to 200%
    initialScale: 1.0,
    maximumScale: 5.0 // Allow significant zoom for visually impaired
  },
  
  // Mobile-specific interactions
  interactions: {
    // Swipe gestures should have alternatives
    swipeAlternatives: true,
    
    // Support for voice input
    voiceInput: true,
    
    // Haptic feedback for healthcare actions
    hapticFeedback: true,
    
    // Orientation support
    orientation: 'both' // Support both portrait and landscape
  }
};

// ✅ Recommended: Mobile-accessible healthcare button
export function MobileHealthcareButton({
  children,
  onClick,
  variant = 'primary',
  critical = false,
  ...props
}: MobileHealthcareButtonProps) {
  const buttonSize = critical 
    ? MobileAccessibilityStandards.touchTargets.healthcareEnhanced
    : MobileAccessibilityStandards.touchTargets.recommendedSize;
    
  return (
    <button
      className={cn(
        'mobile-healthcare-button',
        `mobile-healthcare-button-${variant}`,
        critical && 'mobile-healthcare-button-critical'
      )}
      style={{
        minHeight: `${buttonSize}px`,
        minWidth: `${buttonSize}px`,
        padding: '12px 16px'
      }}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
}
```

### 6.2 Responsive Healthcare Forms

```typescript
// ✅ Recommended: Mobile-responsive healthcare form
export function MobileHealthcareForm() {
  const [viewport, setViewport] = useState(getViewportSize());
  
  useEffect(() => {
    const handleResize = () => setViewport(getViewportSize());
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  const isMobile = viewport.width < 768;
  const isSmallMobile = viewport.width < 375;
  
  return (
    <div
      className={cn(
        'mobile-healthcare-form',
        isMobile && 'mobile-healthcare-form-mobile',
        isSmallMobile && 'mobile-healthcare-form-small'
      )}
    >
      {/* Large touch targets for mobile */}
      <div className="form-section">
        {isMobile ? (
          // Single column layout for mobile
          <div className="mobile-single-column">
            <MobileFormField label="Symptoms" type="multiselect" />
            <MobileFormField label="Duration" type="select" />
          </div>
        ) : (
          // Multi-column layout for desktop
          <div className="desktop-multi-column">
            <MobileFormField label="Symptoms" type="multiselect" />
            <MobileFormField label="Duration" type="select" />
          </div>
        )}
      </div>
      
      {/* Mobile-optimized submit button */}
      <div className="form-actions-mobile">
        <MobileHealthcareButton
          critical={true}
          variant="primary"
          className="w-full"
        >
          Submit Health Assessment
        </MobileHealthcareButton>
      </div>
    </div>
  );
}
```

## Implementation Guidelines

### Phase 1: Foundation Setup (Week 1)
1. **ARIA Implementation**: Add comprehensive ARIA attributes to all components
2. **Keyboard Navigation**: Implement full keyboard accessibility
3. **Color Contrast**: Audit and fix all contrast issues
4. **Screen Reader Testing**: Test with NVDA, JAWS, and VoiceOver

### Phase 2: Form Accessibility (Week 2)
1. **Healthcare Forms**: Implement accessible form patterns
2. **Error Handling**: Add comprehensive error announcements
3. **Progress Indicators**: Make multi-step forms accessible
4. **Mobile Optimization**: Ensure touch target compliance

### Phase 3: Advanced Features (Week 3)
1. **Data Visualization**: Make charts and graphs accessible
2. **Modal Management**: Implement proper focus trapping
3. **Live Regions**: Add dynamic content announcements
4. **Voice Navigation**: Add voice input support

### Quality Gates
- 100% WCAG 2.1 AA compliance
- Screen reader compatibility across all major readers
- All interactive elements keyboard accessible
- Color contrast ratios meet healthcare requirements
- Mobile accessibility compliance on all devices

### Success Metrics
- Zero accessibility violations in automated testing
- Screen reader navigation time < 20% longer than visual navigation
- 95% of users can complete healthcare forms using keyboard only
- Color contrast ratios exceed minimum requirements by 20%
- Mobile touch targets meet enhanced healthcare standards

---

**Status:** ✅ Complete  
**Next Steps:** Integration with Swiss healthcare regulatory compliance requirements