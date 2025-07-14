# Code Conventions & Standards - SKIIN Swiss Pages

## 📁 File Organization

### Directory Structure
```
src/
├── components/          # Reusable UI components
│   ├── analytics/      # Analytics and tracking components
│   ├── home/          # Homepage-specific sections
│   ├── layout/        # Layout components (Navbar, Footer)
│   ├── physicians/    # Physicians page components
│   └── ui/           # shadcn/ui base components
├── contexts/          # React context providers
├── docs/             # Internal documentation
├── hooks/            # Custom React hooks
├── lib/              # Utility libraries and helpers
├── pages/            # Page-level components
├── routes/           # Routing configuration
├── translations/     # Internationalization content
├── types/            # TypeScript type definitions
└── utils/            # General utility functions
```

### File Naming Conventions

#### Components
- **PascalCase** for component files: `HeroSection.tsx`, `ContactForm.tsx`
- **Descriptive names** that indicate purpose: `AnalyticsProvider.tsx`, `ConversionButton.tsx`
- **Section suffix** for page sections: `FeaturesSection.tsx`, `TestimonialsSection.tsx`

#### Hooks
- **camelCase** starting with "use": `useTranslation.ts`, `useRouteTranslations.ts`
- **Descriptive action**: `useLanguage.ts`, `useMobile.tsx`

#### Utilities
- **camelCase** for utility files: `routeTranslations.ts`, `analytics.ts`
- **Singular names** for single-purpose files: `utils.ts`, `consentManager.ts`

#### Types
- **camelCase** with descriptive names: `analytics.d.ts`
- **Interface suffix** when appropriate: `FormData.ts`, `ApiResponse.ts`

## 🏗️ Component Architecture

### Component Structure Pattern
```typescript
// 1. Imports (grouped logically)
import React from 'react';
import { ComponentProps } from './types';
import { Button } from '@/components/ui/button';
import { useTranslation } from '@/hooks/useTranslation';

// 2. Interface/Props definition
interface ComponentNameProps {
  title: string;
  description?: string;
  onClick?: () => void;
}

// 3. Component implementation
export const ComponentName: React.FC<ComponentNameProps> = ({
  title,
  description,
  onClick
}) => {
  // 4. Hooks and state
  const translations = useTranslation('section');
  
  // 5. Event handlers
  const handleClick = () => {
    onClick?.();
  };
  
  // 6. Render
  return (
    <div className="component-container">
      <h2>{title}</h2>
      {description && <p>{description}</p>}
      <Button onClick={handleClick}>
        {translations.buttonLabel}
      </Button>
    </div>
  );
};
```

### Component Categories

#### 1. Page Components (`src/pages/`)
- **Purpose**: Top-level route components
- **Naming**: Match route name (e.g., `Index.tsx`, `Physicians.tsx`)
- **Responsibility**: Page layout, SEO meta tags, analytics tracking
- **Pattern**: Import and compose section components

#### 2. Section Components (`src/components/home/`, `src/components/physicians/`)
- **Purpose**: Major page sections with specific functionality
- **Naming**: `[Purpose]Section.tsx` (e.g., `HeroSection.tsx`)
- **Responsibility**: Section-specific logic and content
- **Pattern**: Use translation hooks, compose UI components

#### 3. UI Components (`src/components/ui/`)
- **Purpose**: Reusable design system components (shadcn/ui)
- **Naming**: Match shadcn naming (e.g., `button.tsx`, `card.tsx`)
- **Responsibility**: Pure UI rendering with variants
- **Pattern**: Use class-variance-authority for styling variants

#### 4. Layout Components (`src/components/layout/`)
- **Purpose**: Global layout elements
- **Naming**: Descriptive (e.g., `Navbar.tsx`, `Footer.tsx`)
- **Responsibility**: Navigation, global state integration
- **Pattern**: Context integration, responsive design

## 🎨 Styling Conventions

### CSS Class Naming
```typescript
// Use Tailwind utility classes primarily
<div className="container-custom section-padding">
  <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
    {title}
  </h1>
</div>

// Custom classes for reusable patterns
.container-custom {
  @apply max-w-7xl mx-auto px-4 sm:px-6 lg:px-8;
}

.section-padding {
  @apply py-16 md:py-24 lg:py-32;
}
```

### Design System Classes
```css
/* Brand Colors */
.text-myant-green { color: #2A7D71; }
.bg-myant-green { background-color: #2A7D71; }
.border-myant-green { border-color: #2A7D71; }

/* Custom Animations */
.animate-fade-in { animation: fade-in 0.6s ease-out; }
.animate-slide-in { animation: slide-in 0.8s ease-out; }
```

### Responsive Design Patterns
```typescript
// Mobile-first responsive classes
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {/* Content */}
</div>

// Responsive typography
<h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
  {title}
</h1>

// Responsive spacing
<section className="py-12 md:py-16 lg:py-24">
  {/* Section content */}
</section>
```

## 📝 TypeScript Standards

### Interface Definitions
```typescript
// Use descriptive interface names
interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  role: 'patient' | 'physician' | 'admin' | 'other';
  message: string;
  consent: boolean;
}

// Export types for reuse
export type LanguageType = 'en' | 'de' | 'fr';

// Use generic types appropriately
interface ApiResponse<T> {
  data: T;
  status: number;
  message?: string;
}
```

### Component Props
```typescript
// Use React.FC for function components
interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  disabled = false,
  children,
  onClick
}) => {
  // Implementation
};
```

### Hook Types
```typescript
// Custom hook return types
interface UseTranslationReturn {
  t: (key: string) => string;
  language: LanguageType;
  setLanguage: (lang: LanguageType) => void;
}

export const useTranslation = (): UseTranslationReturn => {
  // Implementation
};
```

## 🌐 Internationalization Patterns

### Translation File Structure
```typescript
// src/translations/[section]/[language].ts
export const homeTranslations = {
  hero: {
    title: "Smart Cardiac Monitoring",
    subtitle: "Comfortable 14-day ECG monitoring...",
    ctaPrimary: "For Patients",
    ctaSecondary: "For Physicians"
  },
  features: {
    comfort: {
      title: "Maximum Comfort",
      description: "No wires, no patches..."
    }
  }
};
```

### Translation Hook Usage
```typescript
// Section-based translations (preferred)
const translations = useTranslation('home');
<h1>{translations.hero.title}</h1>

// Direct content translations (for dynamic content)
const title = useTranslation(
  "English title",
  "German title", 
  "French title"
);
```

### Route Localization
```typescript
// src/utils/routeTranslations.ts
export const routeTranslations = {
  physicians: {
    en: '/physicians',
    de: '/de/arzt', 
    fr: '/fr/medecin'
  }
};

// Usage in components
const routeTranslations = useRouteTranslations();
<Link to={routeTranslations.physicians}>
  {translations.navigation.physicians}
</Link>
```

## 📊 Analytics Conventions

### Event Naming
```typescript
// Use descriptive, hierarchical event names
trackEvent('page_view', {
  page_title: 'Homepage',
  language: 'en'
});

trackEvent('button_click', {
  button_name: 'cta_primary',
  section: 'hero',
  destination: '/contact'
});

trackEvent('form_submission', {
  form_name: 'contact_form',
  user_type: 'patient'
});
```

### Analytics Component Pattern
```typescript
// Use ConversionButton for trackable actions
<ConversionButton
  eventName="trial_request"
  eventParams={{ user_type: 'physician' }}
  conversionId="AW-123456789"
  conversionLabel="trial_conversion"
>
  Request Trial Kit
</ConversionButton>
```

## 🔧 State Management

### Context Pattern
```typescript
// Context definition
interface LanguageContextType {
  language: LanguageType;
  setLanguage: (lang: LanguageType) => void;
}

const LanguageContext = createContext<LanguageContextType>({
  language: 'en',
  setLanguage: () => {}
});

// Provider pattern
export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ 
  children 
}) => {
  const [language, setLanguage] = useState<LanguageType>('en');
  
  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Hook pattern
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};
```

## 📱 Form Handling

### Form Validation Pattern
```typescript
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

// Schema definition
const contactFormSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().optional(),
  role: z.enum(['patient', 'physician', 'admin', 'other']),
  message: z.string().min(10, 'Message must be at least 10 characters'),
  consent: z.boolean().refine(val => val === true, 'Consent is required')
});

type ContactFormData = z.infer<typeof contactFormSchema>;

// Form component
export const ContactForm: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema)
  });
  
  const onSubmit = (data: ContactFormData) => {
    // Handle form submission
  };
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* Form fields */}
    </form>
  );
};
```

## 🎯 Performance Conventions

### Import Optimization
```typescript
// Prefer named imports to reduce bundle size
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

// Use dynamic imports for large components
const HeavyComponent = lazy(() => import('./HeavyComponent'));

// Import aliases for cleaner code
import { cn } from '@/lib/utils';
```

### Component Optimization
```typescript
// Use React.memo for components that don't change frequently
export const ExpensiveComponent = React.memo<Props>(({ data }) => {
  return <div>{/* Render logic */}</div>;
});

// Use callback optimization for event handlers
const memoizedCallback = useCallback(() => {
  // Handler logic
}, [dependency]);
```

## 📚 Documentation Standards

### Component Documentation
```typescript
/**
 * ContactForm - Lead generation form for patient and physician inquiries
 * 
 * Features:
 * - Multi-language support (EN/DE/FR)
 * - Zod validation with error handling
 * - GDPR-compliant consent management
 * - Analytics tracking for form submissions
 * 
 * @example
 * <ContactForm 
 *   onSubmit={(data) => handleSubmission(data)}
 *   className="max-w-md mx-auto"
 * />
 */
export const ContactForm: React.FC<ContactFormProps> = (props) => {
  // Implementation
};
```

### Hook Documentation
```typescript
/**
 * useTranslation - Hook for content localization
 * 
 * Supports two usage patterns:
 * 1. Section-based: useTranslation('home') 
 * 2. Direct content: useTranslation(en, de, fr)
 * 
 * @param section - Translation section key or direct content
 * @returns Translated content for current language
 */
export function useTranslation(section: string): TranslationObject;
```

## 🚀 Deployment Conventions

### Environment Variables
```typescript
// Environment variable naming
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
VITE_GOOGLE_ADS_ID=AW-XXXXXXXXX  
VITE_HUBSPOT_ID=XXXXXXXX
VITE_API_BASE_URL=https://api.example.com

// Access pattern
const gaId = import.meta.env.VITE_GA_MEASUREMENT_ID;
```

### Build Configuration
```typescript
// vite.config.ts patterns
export default defineConfig({
  plugins: [react(), componentTagger()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          ui: ['@radix-ui/react-accordion', '@radix-ui/react-alert-dialog']
        }
      }
    }
  }
});
```

## 🧪 Testing Conventions

### Test File Organization
```
src/
├── components/
│   ├── ContactForm.tsx
│   └── __tests__/
│       └── ContactForm.test.tsx
├── hooks/
│   ├── useTranslation.ts
│   └── __tests__/
│       └── useTranslation.test.ts
```

### Test Naming
```typescript
// Descriptive test names
describe('ContactForm', () => {
  it('should render all form fields', () => {});
  it('should validate required fields', () => {});
  it('should submit form with valid data', () => {});
  it('should display localized error messages', () => {});
});
```

This conventions document ensures consistency across the codebase and provides clear guidelines for extending and maintaining the SKIIN Swiss Pages application.