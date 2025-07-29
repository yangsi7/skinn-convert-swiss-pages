# Home2 v7.2 Implementation Plan

**Date**: 2025-07-25
**Priority**: P0 - CRITICAL
**Approach**: Hybrid - Keep Home2 visual structure, update with v7.2 content

## Implementation Strategy

### Core Principle
Preserve Home2's visual appeal and smartholter.netlify.app assets while integrating v7.2 copy requirements.

## Phase 3 Implementation Tasks

### 1. Hero Section Updates (HIGH PRIORITY)
**File**: src/pages/Home2.tsx (lines 45-93)

#### 1.1 Add A/B Variant Support
```typescript
// Add state for variant
const [variant, setVariant] = useState<'A' | 'B' | 'C'>('A');
const searchParams = new URLSearchParams(window.location.search);
const urlVariant = searchParams.get('variant')?.toUpperCase() as 'A' | 'B' | 'C';

// Update hero content based on variant
const heroContent = t.hero.variants?.[variant] || t.hero;
```

#### 1.2 Update Translations
**File**: src/translations/home/en.ts (line 217+)
```typescript
hero: {
  badge: "MDR Class IIa Certified • Swissmedic Registered",
  variantA: {
    headline: "Heart Disease Is the #1 Killer — When Was Your Last Heart Check?",
    emotionalSubtitle: "Longevity means more birthdays — for you, and for those who love you most. Start protecting your heart today."
  },
  variantB: {
    headline: "Monitor Your Heart from the Comfort of Home",
    emotionalSubtitle: "No wires. No hospital visits. Just peace of mind delivered to your door."
  },
  variantC: {
    headline: "Be There for Every Milestone",
    emotionalSubtitle: "Your family needs you healthy. Take control of your heart health today."
  },
  ctas: {
    primary: "Start Your Free Assessment",
    secondary: "Check Insurance Coverage",
    tertiary: "Questions? Read our FAQ →"
  }
}
```

### 2. Statistics Section Updates (HIGH PRIORITY)
**File**: src/pages/Home2.tsx (lines 95-145)

#### 2.1 Update Visual Assets Alt Text
- Keep existing images but update alt text to match v7.2
- Consider adding evidence citations below each stat

#### 2.2 Update Translations
**File**: src/translations/home/en.ts
```typescript
stats: {
  title: "Clinical Evidence Shows Extended Monitoring Works",
  subtitle: "Traditional 24-hour monitoring misses critical heart events",
  items: [
    { 
      number: "70%", 
      text: "of atrial fibrillation episodes are completely silent¹",
      citation: "1. Hindricks G, et al. Eur Heart J. 2021"
    },
    { 
      number: "20-30%", 
      text: "of all strokes are caused by undetected AF²",
      citation: "2. Wolf PA, et al. Stroke. 1991"
    },
    { 
      number: "66% vs 9%", 
      text: "10-day monitoring detects 7x more arrhythmias³",
      citation: "3. Engdahl J, et al. Circulation. 2013"
    }
  ]
}
```

### 3. Remove MVCP Section (CRITICAL)
**File**: src/pages/Home2.tsx (line 257)
- Comment out or remove `<MvcpSection />`
- This content belongs only on GP page

### 4. Add Silent Triad Section (NEW)
**Location**: After Video Section, before Clinical Evidence

Create new section or update existing to include:
- Problem: Hidden cardiac risks
- Solution: Comprehensive monitoring
- Three cards: ECG Analysis, Blood Pressure Trends, Sleep Quality

### 5. Update Process Flow
**Component**: ProcessFlow (already updated in previous work)
- Verify Step 4 mentions "AI Analysis & Cardiologist Review"

### 6. Update Technology Section
**File**: src/pages/Home2.tsx (lines 212-251)
- Keep existing Holter-EKG image
- Update copy to emphasize 10-day monitoring
- Add Care360 messaging

### 7. Update Insurance Section
**File**: src/pages/Home2.tsx (lines 262-294)
- Ensure 100% coverage claim is accurate
- Update any 14-day references

### 8. Update CTA Section
**File**: src/pages/Home2.tsx (lines 327-377)
- Primary CTA: "Start Your Free Assessment"
- Secondary: "Check Insurance Coverage"
- Update trust indicators if needed

### 9. Global 14-day → 10-day Updates
Search and replace throughout:
- All translation files
- Component text
- Image alt attributes

### 10. Add Missing v7.2 Components (OPTIONAL - Phase 2)
Consider adding these if gaps exist:
- NumbersSection (95%, 10 Days, 100%, 24/7)
- Enhanced benefit cards
- Trust markers section

## Implementation Order

1. **Immediate (Today)**:
   - [ ] Remove MVCP section
   - [ ] Update hero translations with v7.2 copy
   - [ ] Update statistics translations
   - [ ] Add A/B variant logic to hero

2. **Tomorrow Morning**:
   - [ ] Global 14→10 day replacements
   - [ ] Update clinical evidence section
   - [ ] Update technology section copy
   - [ ] Update insurance section

3. **Tomorrow Afternoon**:
   - [ ] Add Silent Triad narrative (new section or integrate)
   - [ ] Update all CTAs
   - [ ] Visual validation with Puppeteer

## Testing Checklist

- [ ] A/B variants work via URL parameter
- [ ] All stats show v7.2 claims
- [ ] No MVCP on homepage
- [ ] All 10-day references (no 14-day)
- [ ] Visual assets preserved
- [ ] Mobile responsive
- [ ] Translations work for all languages

## Success Metrics

1. Home2 maintains visual appeal
2. All v7.2 copy requirements met
3. smartholter.netlify.app assets preserved
4. A/B testing functional
5. MVCP removed from homepage
6. Evidence-based claims with citations