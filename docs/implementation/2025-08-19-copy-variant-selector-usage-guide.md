# Copy Variant Selector Usage Guide
**Document ID:** GUIDE-2025-08-19-02
**Created:** 2025-08-19
**Status:** Active
**Type:** Implementation Guide
**Author:** documentation-maintainer-agent

## Overview

The Copy Variant Selector system replaces the previous theme switcher to provide messaging customization while maintaining consistent S&W Design visual identity. This guide covers implementation, usage, and integration patterns for the copy variant system.

## Architecture Overview

### System Components

```
CopyVariantSelector System
├── CopyVariantProvider (Context)
├── CopyVariantSelector (UI Component)
├── CopyVariant Types (TypeScript)
├── Translation Integration
└── LocalStorage Persistence
```

### Core Concepts

**Copy Variants:** Three distinct messaging approaches that maintain the same visual design:
- **Benefit-led:** Emphasizes health outcomes and family benefits
- **Clinical:** Focuses on medical evidence and professional credibility  
- **Urgency:** Highlights immediate action and prevention needs

**Design Consistency:** All variants use identical S&W Design visual system (colors, typography, layout) with only messaging content changes.

## Implementation Details

### 1. Type Definitions

```typescript
// types/copyVariant.ts
export type CopyVariant = 'benefit-led' | 'clinical' | 'urgency';

export interface CopyVariantContextType {
  variant: CopyVariant;
  setVariant: (variant: CopyVariant) => void;
  isLoading: boolean;
}

export interface CopyVariantConfig {
  id: CopyVariant;
  label: string;
  description: string;
  icon: React.ComponentType;
}
```

### 2. Context Provider Implementation

```typescript
// contexts/CopyVariantContext.tsx
export const CopyVariantProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [variant, setVariant] = useState<CopyVariant>('benefit-led');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Load from localStorage on mount
    const savedVariant = localStorage.getItem('copyVariant') as CopyVariant;
    if (savedVariant && ['benefit-led', 'clinical', 'urgency'].includes(savedVariant)) {
      setVariant(savedVariant);
    }
    setIsLoading(false);
  }, []);

  const handleSetVariant = useCallback((newVariant: CopyVariant) => {
    setVariant(newVariant);
    localStorage.setItem('copyVariant', newVariant);
  }, []);

  return (
    <CopyVariantContext.Provider value={{
      variant,
      setVariant: handleSetVariant,
      isLoading
    }}>
      {children}
    </CopyVariantContext.Provider>
  );
};
```

### 3. Selector Component

```typescript
// components/CopyVariantSelector.tsx
export function CopyVariantSelector() {
  const { variant, setVariant } = useCopyVariant();
  
  const variants: CopyVariantConfig[] = [
    {
      id: 'benefit-led',
      label: 'Health Benefits Focus',
      description: 'Emphasizes family health and outcomes',
      icon: Heart
    },
    {
      id: 'clinical',
      label: 'Medical Evidence',
      description: 'Focuses on clinical credibility',
      icon: Stethoscope
    },
    {
      id: 'urgency',
      label: 'Prevention Focus',
      description: 'Highlights immediate action',
      icon: AlertTriangle
    }
  ];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="h-8 w-8 px-0">
          <MessageSquare className="h-4 w-4" />
          <span className="sr-only">Select copy variant</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {variants.map((v) => (
          <DropdownMenuItem
            key={v.id}
            onClick={() => setVariant(v.id)}
            className={variant === v.id ? 'bg-accent' : ''}
          >
            <v.icon className="mr-2 h-4 w-4" />
            <div>
              <div className="font-medium">{v.label}</div>
              <div className="text-xs text-muted-foreground">{v.description}</div>
            </div>
            {variant === v.id && <Check className="ml-auto h-4 w-4" />}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
```

## Integration with Translation System

### Translation Structure

```typescript
// translations/en/home.ts
export const homeTranslations = {
  hero: {
    variants: {
      'benefit-led': {
        badge: 'Your family\'s heart health matters',
        headline: 'Protect what matters most',
        subheadline: 'Early detection for longer, healthier lives',
        cta: 'Start your family\'s heart check'
      },
      'clinical': {
        badge: 'MDR Class IIa Certified • Swissmedic Registered',
        headline: 'Clinically validated heart screening',
        subheadline: 'Evidence-based cardiac monitoring',
        cta: 'Access clinical-grade screening'
      },
      'urgency': {
        badge: 'Silent heart issues affect 1 in 4 adults',
        headline: 'Don\'t wait for symptoms',
        subheadline: 'Early detection saves lives',
        cta: 'Check your heart now'
      }
    }
  }
};
```

### Component Integration Pattern

```typescript
// components/Hero.tsx
export function Hero() {
  const { variant } = useCopyVariant();
  const { t } = useTranslation();
  
  // Get variant-specific translations
  const heroContent = t('hero.variants.' + variant);
  
  return (
    <section className="hero-section">
      <div className="hero-badge">
        {heroContent.badge}
      </div>
      <h1 className="hero-headline">
        {heroContent.headline}
      </h1>
      <p className="hero-subheadline">
        {heroContent.subheadline}
      </p>
      <Button size="lg">
        {heroContent.cta}
      </Button>
    </section>
  );
}
```

## Usage Patterns

### 1. Basic Usage in Components

```typescript
// Simple variant-aware component
function ProductBenefit() {
  const { variant } = useCopyVariant();
  const { t } = useTranslation();
  
  const content = t(`product.benefits.${variant}`);
  
  return (
    <div className="product-benefit">
      <h3>{content.title}</h3>
      <p>{content.description}</p>
    </div>
  );
}
```

### 2. Conditional Content Rendering

```typescript
// Variant-specific content sections
function TestimonialsSection() {
  const { variant } = useCopyVariant();
  
  return (
    <section>
      {variant === 'clinical' && (
        <MedicalAdvisorsSection />
      )}
      {variant === 'benefit-led' && (
        <PatientStoriesSection />
      )}
      {variant === 'urgency' && (
        <UrgentCasesSection />
      )}
    </section>
  );
}
```

### 3. Advanced Variant Handling

```typescript
// Complex variant logic with fallbacks
function CallToAction() {
  const { variant } = useCopyVariant();
  const { t } = useTranslation();
  
  const getCtaConfig = (variant: CopyVariant) => {
    switch (variant) {
      case 'benefit-led':
        return {
          style: 'warm',
          urgency: 'low',
          emphasis: 'outcome'
        };
      case 'clinical':
        return {
          style: 'professional',
          urgency: 'medium',
          emphasis: 'credibility'
        };
      case 'urgency':
        return {
          style: 'bold',
          urgency: 'high',
          emphasis: 'action'
        };
      default:
        return {
          style: 'warm',
          urgency: 'low',
          emphasis: 'outcome'
        };
    }
  };
  
  const config = getCtaConfig(variant);
  
  return (
    <Button 
      className={cn(
        'cta-button',
        config.style === 'warm' && 'bg-gradient-warm',
        config.style === 'professional' && 'bg-gradient-professional',
        config.style === 'bold' && 'bg-gradient-bold'
      )}
    >
      {t(`cta.${variant}`)}
    </Button>
  );
}
```

## Configuration and Customization

### 1. Adding New Variants

To add a new copy variant:

```typescript
// 1. Update type definition
type CopyVariant = 'benefit-led' | 'clinical' | 'urgency' | 'new-variant';

// 2. Add to variant configs
const variants: CopyVariantConfig[] = [
  // existing variants...
  {
    id: 'new-variant',
    label: 'New Approach',
    description: 'Description of new messaging approach',
    icon: NewIcon
  }
];

// 3. Add translations for all languages
export const homeTranslations = {
  hero: {
    variants: {
      // existing variants...
      'new-variant': {
        badge: 'New variant badge text',
        headline: 'New variant headline',
        subheadline: 'New variant subheadline',
        cta: 'New variant CTA'
      }
    }
  }
};
```

### 2. Variant-Specific Styling

While maintaining S&W Design consistency, subtle styling variations can be applied:

```typescript
// utils/variantStyles.ts
export const getVariantStyles = (variant: CopyVariant) => {
  const baseStyles = 'font-ibm-plex'; // S&W Design consistency
  
  switch (variant) {
    case 'clinical':
      return cn(baseStyles, 'font-weight-600'); // Slightly bolder for credibility
    case 'urgency':
      return cn(baseStyles, 'tracking-tight'); // Tighter spacing for urgency
    default:
      return baseStyles;
  }
};
```

### 3. Analytics Integration

```typescript
// hooks/useVariantAnalytics.ts
export function useVariantAnalytics() {
  const { variant } = useCopyVariant();
  
  useEffect(() => {
    // Track variant selection
    analytics.track('copy_variant_selected', {
      variant,
      timestamp: new Date().toISOString(),
      page: window.location.pathname
    });
  }, [variant]);
  
  const trackVariantInteraction = useCallback((action: string, element: string) => {
    analytics.track('variant_interaction', {
      variant,
      action,
      element,
      timestamp: new Date().toISOString()
    });
  }, [variant]);
  
  return { trackVariantInteraction };
}
```

## Testing Strategies

### 1. Unit Testing

```typescript
// __tests__/CopyVariantSelector.test.tsx
describe('CopyVariantSelector', () => {
  it('should render all variant options', () => {
    render(
      <CopyVariantProvider>
        <CopyVariantSelector />
      </CopyVariantProvider>
    );
    
    // Test implementation
  });
  
  it('should persist variant selection to localStorage', () => {
    const { getByText } = render(
      <CopyVariantProvider>
        <CopyVariantSelector />
      </CopyVariantProvider>
    );
    
    fireEvent.click(getByText('Medical Evidence'));
    
    expect(localStorage.getItem('copyVariant')).toBe('clinical');
  });
});
```

### 2. Integration Testing

```typescript
// __tests__/VariantIntegration.test.tsx
describe('Copy Variant Integration', () => {
  it('should update content across components when variant changes', () => {
    const TestApp = () => (
      <CopyVariantProvider>
        <CopyVariantSelector />
        <Hero />
        <ProductSection />
      </CopyVariantProvider>
    );
    
    render(<TestApp />);
    
    // Test cross-component integration
  });
});
```

### 3. Visual Regression Testing

```typescript
// __tests__/VariantVisuals.test.tsx
describe('Copy Variant Visual Consistency', () => {
  ['benefit-led', 'clinical', 'urgency'].forEach(variant => {
    it(`should maintain S&W Design consistency in ${variant} variant`, async () => {
      const component = render(
        <CopyVariantProvider value={{ variant }}>
          <HomePage />
        </CopyVariantProvider>
      );
      
      // Visual regression test implementation
      expect(await component.screenshot()).toMatchImageSnapshot({
        threshold: 0.1,
        customSnapshotIdentifier: `homepage-${variant}`
      });
    });
  });
});
```

## Performance Considerations

### 1. Lazy Loading Variant Content

```typescript
// Lazy load variant-specific content
const VariantSpecificSection = React.lazy(() => 
  import(`./sections/${variant}Section`)
);

function DynamicSection() {
  const { variant } = useCopyVariant();
  
  return (
    <Suspense fallback={<SectionSkeleton />}>
      <VariantSpecificSection />
    </Suspense>
  );
}
```

### 2. Translation Bundle Optimization

```typescript
// Load only necessary translations
const loadVariantTranslations = async (variant: CopyVariant) => {
  const translations = await import(`../translations/variants/${variant}.ts`);
  return translations.default;
};
```

### 3. Memoization for Performance

```typescript
// Memoize expensive variant calculations
const VariantContent = React.memo(({ variant }: { variant: CopyVariant }) => {
  const content = useMemo(() => 
    generateVariantContent(variant), 
    [variant]
  );
  
  return <div>{content}</div>;
});
```

## Migration Guide

### From Theme Switcher to Copy Variants

**Step 1: Remove Theme Dependencies**
```typescript
// Remove theme-specific styling
- className={`theme-${theme}`}
+ className="sw-design-base"
```

**Step 2: Update Component Logic**
```typescript
// Replace theme checks with variant checks
- if (theme === 'medical-blue') {
+ if (variant === 'clinical') {
```

**Step 3: Update Translation Keys**
```typescript
// Update translation key structure
- t('hero.headline')
+ t(`hero.variants.${variant}.headline`)
```

## Troubleshooting

### Common Issues

**Issue 1: Variant Not Persisting**
```typescript
// Ensure localStorage is available
const setVariant = (newVariant: CopyVariant) => {
  if (typeof window !== 'undefined' && window.localStorage) {
    localStorage.setItem('copyVariant', newVariant);
  }
  setState(newVariant);
};
```

**Issue 2: Translation Keys Missing**
```typescript
// Add fallback translation logic
const getTranslation = (key: string, variant: CopyVariant) => {
  const variantKey = `${key}.variants.${variant}`;
  const fallbackKey = `${key}.variants.benefit-led`; // Default fallback
  
  return t(variantKey) || t(fallbackKey) || key;
};
```

**Issue 3: Hydration Mismatch**
```typescript
// Handle SSR/CSR hydration
const [isHydrated, setIsHydrated] = useState(false);

useEffect(() => {
  setIsHydrated(true);
}, []);

if (!isHydrated) {
  return <VariantSkeleton />;
}
```

## Best Practices

### Development Guidelines
1. **Consistency:** Maintain S&W Design visual consistency across all variants
2. **Fallbacks:** Always provide fallback content for missing variant translations
3. **Performance:** Use memoization for expensive variant calculations
4. **Testing:** Test all variants in isolation and integration scenarios
5. **Analytics:** Track variant usage for optimization insights

### Content Guidelines
1. **Voice Consistency:** Maintain professional medical tone across variants
2. **Accuracy:** Ensure medical claims remain accurate across all variants
3. **Compliance:** Verify regulatory compliance for all variant messaging
4. **Localization:** Adapt variants appropriately for different languages/cultures

## Conclusion

The Copy Variant Selector system provides flexible messaging customization while maintaining strict S&W Design consistency. This approach enables personalized user experiences without compromising visual brand identity or technical complexity.

**Key Benefits:**
- Simplified theme management (single S&W Design theme)
- Flexible messaging without visual inconsistency
- Improved user experience through personalization
- Maintained brand consistency and compliance

**Next Steps:**
- Monitor variant usage analytics
- Optimize performance based on usage patterns
- Expand variant options based on user feedback
- Integrate with A/B testing framework

---
**Related Documents:**
- S&W Design System Documentation
- Translation System Guide
- Component Development Standards
- User Experience Guidelines