# SKIIN Switzerland Implementation Guide

## Overview

This guide provides step-by-step instructions for implementing the SKIIN Switzerland website according to NEW-WEBSITE-UPDATE-SPECS.md requirements. Current implementation is 27.5% complete, requiring significant enhancement to meet medical-grade standards.

## Pre-Implementation Checklist

### Required Resources
- [ ] Medical content writer with Swiss healthcare experience
- [ ] UX designer familiar with medical interfaces
- [ ] React developers (2-3 for parallel work)
- [ ] Swiss legal counsel for compliance review
- [ ] Medical advisors (2-3 Swiss physicians)
- [ ] Professional translators (medical DE/FR)
- [ ] Project manager for coordination

### Access Requirements
- [ ] NEW-WEBSITE-UPDATE-SPECS.md (primary reference)
- [ ] Current codebase access
- [ ] Design assets and brand guidelines
- [ ] Swiss insurance database/documentation
- [ ] Medical device compliance guidelines
- [ ] TARMED code reference

## Week 1-2: Foundation & Architecture

### Day 1-2: Fix Critical Issues
```bash
# Priority 1: Fix translation system
# Current issue: All languages show English content
# Files to modify:
- src/hooks/useTranslation.ts
- src/contexts/LanguageContext.tsx
- src/components/layout/Navbar.tsx
```

**Translation Fix Steps:**
1. Debug useTranslation hook's language detection
2. Ensure context updates trigger re-renders
3. Verify translation file imports
4. Test all language switching scenarios

### Day 3-5: Implement Page Architecture
```
# Create missing pages per target architecture
src/pages/
├── solutions/
│   ├── Holter.tsx
│   └── Tritest.tsx
├── partners/
│   ├── GeneralPractitioners.tsx
│   ├── Cardiologists.tsx
│   ├── Telemedicine.tsx
│   └── Corporate.tsx
├── how-it-works/
│   ├── Process.tsx
│   ├── Reimbursement.tsx
│   ├── Technology.tsx
│   └── ClinicalEvidence.tsx
└── about/
    ├── Company.tsx
    ├── MedicalAdvisors.tsx
    ├── Blog.tsx
    ├── Testimonials.tsx
    └── Compliance.tsx
```

### Day 6-10: Design System Enhancement
```typescript
// Create medical-grade components
components/
├── medical/
│   ├── MedicalDisclaimer.tsx
│   ├── CertificationBadge.tsx
│   ├── EvidenceCard.tsx
│   ├── ProcessTimeline.tsx
│   └── InsurancePathway.tsx
├── interactive/
│   ├── EligibilityChecker/
│   ├── CoverageCalculator/
│   └── DemoScheduler/
└── trust/
    ├── TestimonialCard.tsx
    ├── PhysicianProfile.tsx
    └── ComplianceBadge.tsx
```

## Week 3-5: Content Implementation

### Content Creation Process
1. **Medical Writer Briefing**
   - Provide NEW-WEBSITE-UPDATE-SPECS.md
   - Share target word counts per section
   - Emphasize Swiss healthcare context
   - Require evidence-based claims

2. **Content Templates**
```markdown
# Page Template Structure
## Hero Section
- Headline: [Specific from specs]
- Subheadline: [Emotional/functional balance]
- CTA: [Role-appropriate action]

## Problem Context
- Swiss healthcare challenges
- Patient pain points
- Statistical evidence

## Solution Presentation
- SKIIN benefits
- Clinical evidence
- User experience

## Trust Indicators
- Certifications
- Testimonials
- Medical advisors

## Call to Action
- Primary: [Conversion action]
- Secondary: [Information path]
```

3. **Review Cycles**
   - Medical advisor review
   - Legal compliance check
   - Swiss cultural adaptation
   - SEO optimization

## Week 6-7: Interactive Features

### Eligibility Checker Implementation
```typescript
// Component structure
src/components/interactive/EligibilityChecker/
├── index.tsx                 // Main component
├── steps/
│   ├── SymptomsStep.tsx     // Symptom assessment
│   ├── RiskFactorsStep.tsx  // Risk evaluation
│   ├── InsuranceStep.tsx    // Insurance selection
│   ├── CantonStep.tsx       // Location selection
│   └── ResultsStep.tsx      // Recommendations
├── hooks/
│   ├── useEligibility.ts    // Business logic
│   └── useInsuranceRules.ts // Swiss insurance logic
└── utils/
    ├── validation.ts        // Form validation
    └── calculations.ts      // Eligibility logic
```

### Coverage Calculator Development
```typescript
// Key functions to implement
interface CoverageCalculatorProps {
  insuranceProvider: string;
  insuranceModel: 'standard' | 'gp' | 'hmo' | 'telmed';
  annualDeductible: number;
  currentDeductibleMet: number;
  hasPrescrtiption: boolean;
}

function calculateCoverage(props: CoverageCalculatorProps): CoverageResult {
  // Swiss insurance calculation logic
  const baseCost = 450; // CHF
  const coveragePercent = 0.9; // 90% after deductible
  
  // Complex calculation based on Swiss system
  return {
    totalCost: baseCost,
    coveredAmount: calculateCovered(props),
    patientCost: calculatePatientCost(props),
    pathway: determinePathway(props)
  };
}
```

## Week 8-9: Compliance Implementation

### Medical Device Disclaimers
```typescript
// Global disclaimer component
const MedicalDisclaimer = () => (
  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
    <p className="text-sm">
      <strong>Medical Device Notice:</strong> SKIIN is a Class IIa medical 
      device (CE ##### | Swissmedic CH-#####) requiring prescription by a 
      licensed healthcare professional. Not for emergency use.
    </p>
  </div>
);

// Add to every page layout
```

### Legal Pages Creation
1. **Privacy Policy**
   - Swiss DSG compliance
   - GDPR alignment
   - Health data specifics
   - Cross-border transfers

2. **Terms of Use**
   - Service limitations
   - Medical disclaimers
   - User responsibilities
   - Swiss law governance

3. **Impressum**
```html
<div className="impressum">
  <h2>Impressum</h2>
  <p>
    <strong>Company:</strong> Myant Switzerland AG<br/>
    <strong>Address:</strong> [Full address]<br/>
    <strong>Commercial Register:</strong> CHE-###.###.###<br/>
    <strong>Responsible Person:</strong> [Name], CEO<br/>
    <strong>Medical Device Registration:</strong> Swissmedic CH-#####
  </p>
</div>
```

## Week 10-11: Translation & Testing

### Translation Process
1. **Export Content**
   ```bash
   # Create translation files
   translations/
   ├── en/
   │   └── full-content.json
   ├── de/
   │   └── full-content.json
   └── fr/
       └── full-content.json
   ```

2. **Translation Guidelines**
   - Medical terminology consistency
   - Formal address (Sie/vous)
   - Swiss German variations
   - Cultural adaptations

3. **Integration Testing**
   - Language switching
   - Text overflow handling
   - Character encoding
   - RTL support (if needed)

### Quality Assurance Checklist
- [ ] All 25+ pages load correctly
- [ ] Translation system works
- [ ] Interactive tools function
- [ ] Forms submit properly
- [ ] Analytics tracking active
- [ ] SEO meta tags present
- [ ] Accessibility compliance
- [ ] Mobile responsiveness
- [ ] Performance metrics met

## Week 12: Launch Preparation

### Pre-Launch Tasks
1. **Stakeholder Reviews**
   - Medical advisor sign-off
   - Legal compliance approval
   - Marketing team review
   - Executive approval

2. **Technical Preparation**
   - Performance optimization
   - Security audit
   - Backup procedures
   - Monitoring setup

3. **Content Freeze**
   - Final proofreading
   - Link verification
   - Image optimization
   - Meta tag review

### Launch Checklist
- [ ] DNS configuration
- [ ] SSL certificates
- [ ] CDN setup
- [ ] Analytics verified
- [ ] Forms tested
- [ ] Redirects configured
- [ ] Sitemap submitted
- [ ] Robots.txt updated

## Post-Launch

### Monitoring
- User behavior analytics
- Conversion funnel tracking
- Error monitoring
- Performance metrics

### Optimization
- A/B testing plan
- Content updates
- Feature enhancements
- Feedback integration

### Maintenance
- Security updates
- Content refresh
- Compliance updates
- Feature additions

## Common Pitfalls to Avoid

1. **Content Issues**
   - Don't use generic healthcare copy
   - Avoid unsubstantiated claims
   - Don't skip medical review

2. **Technical Mistakes**
   - Not testing all languages
   - Ignoring mobile users
   - Poor form validation

3. **Compliance Errors**
   - Missing disclaimers
   - Incorrect billing codes
   - Inadequate privacy notices

4. **UX Problems**
   - Complex navigation
   - Unclear CTAs
   - Hidden important info

## Success Metrics

### Launch Targets
- 100% page completion
- 0 critical bugs
- <3s page load time
- 95%+ uptime

### 30-Day Goals
- 1000+ eligibility checks
- 500+ coverage calculations
- 50+ demo requests
- 10% conversion rate

### Long-term KPIs
- Organic traffic growth
- Lead quality improvement
- Physician adoption rate
- Patient satisfaction score