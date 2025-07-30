# V2.0 Copy to Component Mapping Guide

## Executive Summary

This document maps the V2.0 copy sections from SKIIN_WEBSITE_COPY_ENGLISH_v2.md to the actual React components in the codebase. It identifies which components need updates, new components to create, and translation files requiring changes.

## Status Overview

- **Total Pages**: 25+ 
- **Components Using Translations**: ~12 (out of 80+)
- **Components with Hardcoded Text**: ~68
- **Translation Coverage**: Partial (missing many v2.0 sections)
- **Primary Homepage**: `/src/pages/Home2Enhanced.tsx` (currently in German, hardcoded)

## Important Discoveries

1. **Home2Enhanced is the Active Homepage** - This page has extensive hardcoded German content
2. **Multiple Homepage Variants Exist**: `Index.tsx`, `Home2.tsx`, `Home2Enhanced.tsx`
3. **Component Reuse is Limited** - Home2Enhanced directly implements sections instead of using components
4. **Translation System Partially Bypassed** - Many sections have inline text instead of using translations

## Mapping Structure

### 1. Homepage (/)

#### Hero Section
**V2.0 Copy Location**: Lines 102-122 (3 A/B variants)
**Component**: `/src/components/home/HeroSection.tsx`
**Status**: ❌ Needs Update
**Changes Required**:
- Currently uses partial translations from `home.hero`
- Missing v2.0 variants (Urgency-Driven, Empowerment-Focused, Benefit-Led)
- Missing badge text from v2.0
- CTAs need updating to match v2.0 copy

**Translation Updates**:
```typescript
// Add to /src/translations/home/en.ts
hero: {
  badge: "Certified by the Federal Office of Public Health (BAG)",
  variants: {
    urgency: {
      title: "Heart Disease Is the #1 Killer — When Was Your Last Check?",
      subtitle: "70% of dangerous heart rhythms have no symptoms..."
    },
    empowerment: {
      title: "Your Heart. Your Future. Your Control.",
      subtitle: "Join thousands of Swiss families..."
    },
    benefit: {
      title: "Live Longer. Live Better. Live Assured.",
      subtitle: "Detect silent heart issues early..."
    }
  },
  ctas: {
    primary: "Start Your Free Heart Assessment",
    secondary: "Check Insurance Coverage",
    micro: "Questions? Chat with us"
  }
}
```

#### Statistics Section
**V2.0 Copy Location**: Lines 123-133
**Component**: `/src/components/home/StatisticsShowcase.tsx`
**Status**: ⚠️ Partially Implemented
**Changes Required**:
- Update statistics to match v2.0 values
- Add title and subtitle from v2.0

#### Clinical Evidence Section
**V2.0 Copy Location**: Lines 134-153
**Component**: ❌ **NEW COMPONENT NEEDED**
**File to Create**: `/src/components/home/ClinicalEvidenceSection.tsx`
**Translation Key**: `home.clinicalEvidence`

#### Problem/Solution Section 2.0
**V2.0 Copy Location**: Lines 154-195
**Component**: `/src/components/home/ProblemSolutionSection.tsx`
**Status**: ❌ Needs Complete Rewrite
**Changes Required**:
- Current component has different structure
- Needs emotional enhancement from v2.0
- Add "Who's Really at Risk?" section

#### Features Section
**V2.0 Copy Location**: Lines 196-206
**Component**: `/src/components/home/FeaturesSection.tsx`
**Status**: ⚠️ Structure exists, content differs
**Changes Required**:
- Update to "AI-Measured, Cardiologist-Evaluated" theme
- Add insurance coverage emphasis

#### Process Section
**V2.0 Copy Location**: Lines 207-227
**Component**: `/src/components/home/ProcessFlow.tsx` or `/src/components/home/HowItWorksSection.tsx`
**Status**: ⚠️ Multiple components exist
**Changes Required**:
- Consolidate to single component
- Update to 5-step process from v2.0
- Add time durations

#### Insurance Section
**V2.0 Copy Location**: Lines 228-248
**Component**: `/src/components/home/InsuranceSection.tsx`
**Status**: ✅ Exists
**Changes Required**:
- Update self-pay pricing tiers
- Add emojis for each model

#### Hero Patient Stories
**V2.0 Copy Location**: Lines 249-262
**Component**: ❌ **NEW COMPONENT NEEDED**
**File to Create**: `/src/components/home/PatientStoriesSection.tsx`
**Translation Key**: `home.patientStories`

#### Swiss Doctor Testimonials
**V2.0 Copy Location**: Lines 263-270
**Component**: `/src/components/home/TestimonialsSection.tsx`
**Status**: ⚠️ Generic testimonials exist
**Changes Required**:
- Update with specific Swiss doctors from v2.0

#### Final CTA Section
**V2.0 Copy Location**: Lines 271-281
**Component**: `/src/components/home/CtaSection.tsx`
**Status**: ✅ Exists
**Changes Required**:
- Update copy to match v2.0 emotional messaging

### 2. About Section

#### About Overview (/about)
**V2.0 Copy Location**: Lines 285-325
**Component**: `/src/pages/about/Overview.tsx`
**Status**: ⚠️ Basic structure exists
**Translation Key**: `about.overview`
**Changes Required**:
- Add Swiss Heritage section
- Update mission statement
- Add values section

#### Medical Advisory Board (/about/medical-board)
**V2.0 Copy Location**: Lines 326-363
**Component**: `/src/pages/about/MedicalBoard.tsx`
**Status**: ⚠️ Empty page exists
**Translation Key**: `about.medicalBoard`
**Changes Required**:
- Implement board member cards
- Add credentials and quotes

#### Company Page (/about/company)
**V2.0 Copy Location**: Lines 364-391
**Component**: `/src/pages/about/Company.tsx`
**Status**: ✅ Recently updated
**Translation Key**: `about.company`
**Changes Required**:
- Verify alignment with v2.0 copy

#### Contact Page (/about/contact)
**V2.0 Copy Location**: Lines 392-414
**Component**: `/src/pages/about/Contact.tsx`
**Status**: ⚠️ Basic page exists
**Translation Key**: `about.contact`
**Changes Required**:
- Add specialized contact methods
- Add response time commitments

### 3. How It Works Section

#### Process Page (/how-it-works/process)
**V2.0 Copy Location**: Lines 418-472
**Component**: `/src/pages/how-it-works/Process.tsx`
**Status**: ✅ Recently updated
**Translation Key**: `howItWorks.process`
**Changes Required**:
- Add insurance model pathways

#### Technology Page (/how-it-works/technology)
**V2.0 Copy Location**: Lines 473-500+
**Component**: `/src/pages/how-it-works/Technology.tsx`
**Status**: ⚠️ Basic page exists
**Translation Key**: `howItWorks.technology`
**Changes Required**:
- Add Carbon Electrode Story
- Add technology highlights

### 4. Protected Components (Not in v2.0 but required)

These components are mentioned in CLAUDE.md as protected:

1. **HeartBalanceRing**
   - Location: `/src/components/protected/HeartBalanceRing.tsx`
   - Status: ✅ Exists but empty
   - Action: Needs implementation

2. **ContributingFactorCards**
   - Location: `/src/components/protected/ContributingFactorCards.tsx`
   - Status: ✅ Exists but empty
   - Action: Needs implementation

3. **TabNavigation**
   - Location: `/src/components/protected/TabNavigation.tsx`
   - Status: ✅ Exists but empty
   - Action: Needs implementation

4. **TodayTab**
   - Location: `/src/components/protected/TodayTab.tsx`
   - Status: ✅ Exists but empty
   - Action: Needs implementation

## Translation File Updates Required

### 1. Home Translations (`/src/translations/home/[en|de|fr].ts`)
**Missing Sections**:
- Clinical Evidence
- Enhanced Problem/Solution
- Patient Stories
- Updated CTAs with urgency
- A/B test variants

### 2. About Translations (`/src/translations/about/[en|de|fr].ts`)
**Missing Sections**:
- Swiss Heritage
- Medical Board members
- Values
- Specialized contacts

### 3. How It Works Translations (`/src/translations/howItWorks/[en|de|fr].ts`)
**Missing Sections**:
- Insurance pathways
- Technology details
- Carbon electrode story

### 4. UI Translations (`/src/translations/ui/[en|de|fr].ts`)
**Status**: ✅ Files exist
**Needs**: Common UI elements from v2.0

## New Components to Create

1. **ClinicalEvidenceSection**
   - Purpose: Show 98.6% accuracy, research, certifications
   - Location: `/src/components/home/ClinicalEvidenceSection.tsx`

2. **PatientStoriesSection**
   - Purpose: Display hero patient stories (Executive, Mountain Guide, Family)
   - Location: `/src/components/home/PatientStoriesSection.tsx`

3. **InsurancePathways**
   - Purpose: Visual representation of insurance model pathways
   - Location: `/src/components/home/InsurancePathways.tsx`

4. **MedicalBoardCard**
   - Purpose: Reusable component for board member display
   - Location: `/src/components/about/MedicalBoardCard.tsx`

## Components Requiring Major Updates

1. **HeroSection**: Add A/B variants, update CTAs
2. **ProblemSolutionSection**: Complete rewrite for v2.0 emotional messaging
3. **TestimonialsSection**: Add specific Swiss doctors
4. **MvcpSection**: Update to match v2.0 physician messaging
5. **ProcessFlow**: Consolidate with HowItWorksSection

## Implementation Priority

### Phase 1: Critical Homepage Updates
1. Update HeroSection with v2.0 variants
2. Create ClinicalEvidenceSection
3. Rewrite ProblemSolutionSection
4. Create PatientStoriesSection
5. Update all homepage translations

### Phase 2: About Section
1. Implement MedicalBoard page
2. Update Overview with Swiss Heritage
3. Complete Contact page
4. Update about translations

### Phase 3: How It Works
1. Update Technology page
2. Add insurance pathways
3. Update process translations

### Phase 4: Protected Components
1. Implement all 4 protected components
2. Ensure regulatory compliance

## Development Guidelines

1. **Always use translations**: Never hardcode text
2. **Component structure**: Keep components under 50 LOC
3. **Translation keys**: Use nested structure matching page hierarchy
4. **Testing**: Test all language switches
5. **Responsive**: Ensure mobile-first design

## Special Considerations for Home2Enhanced

The current Home2Enhanced page needs major refactoring:

1. **Extract Inline Sections to Components**:
   - Hero section (lines 45-118)
   - Statistics section (lines 120-164)
   - Patient testimonials (lines 166-234)
   - Insurance coverage (lines 239-293)
   - Doctor testimonials (lines 295-349)
   - Clinical evidence (lines 363-425)
   - Bottom CTA (lines 427-456)

2. **Remove Hardcoded German Text**:
   - All German text must be moved to translation files
   - Use `useTranslation` hook consistently
   - Support language switching properly

3. **Implement V2.0 Copy Structure**:
   - Replace current content with v2.0 copy
   - Add missing sections (Patient Stories, Clinical Evidence as separate component)
   - Update CTAs to match v2.0 urgency messaging

## Verification Checklist

- [ ] All v2.0 copy sections mapped to components
- [ ] Translation files updated with v2.0 content
- [ ] New components created for missing sections
- [ ] Existing components updated to match v2.0
- [ ] All hardcoded text removed from Home2Enhanced
- [ ] Language switching works on all pages
- [ ] Protected components implemented
- [ ] A/B testing variants configured
- [ ] Home2Enhanced refactored to use components

## Quick Start Implementation Guide

### Step 1: Update Translation Files
```bash
# Update home translations with v2.0 content
src/translations/home/en.ts  # Add all v2.0 homepage copy
src/translations/home/de.ts  # German translations
src/translations/home/fr.ts  # French translations
```

### Step 2: Create Missing Components
```bash
# New components needed
src/components/home/ClinicalEvidenceSection.tsx
src/components/home/PatientStoriesSection.tsx
src/components/home/SwissDoctorTestimonials.tsx
src/components/home/HeroSectionV2.tsx  # With A/B variants
```

### Step 3: Refactor Home2Enhanced
```typescript
// Replace hardcoded sections with components
import HeroSectionV2 from '@/components/home/HeroSectionV2';
import ClinicalEvidenceSection from '@/components/home/ClinicalEvidenceSection';
import PatientStoriesSection from '@/components/home/PatientStoriesSection';
// etc...
```

### Step 4: Implement Protected Components
```bash
# Complete these empty components
src/components/protected/HeartBalanceRing.tsx
src/components/protected/ContributingFactorCards.tsx
src/components/protected/TabNavigation.tsx
src/components/protected/TodayTab.tsx
```