# Planning & Specifications - SKIIN Switzerland Website

## Current State Assessment (27.5% Complete)

### ✅ What We Have (Implemented)
1. **Technical Foundation**
   - React 18 + TypeScript + Vite
   - Tailwind CSS + shadcn/ui components (45+ components)
   - Multilingual routing (EN/DE/FR) - currently broken
   - Google Analytics + HubSpot integration
   - Basic pages: Home, Solutions, Partners, How It Works, About, FAQ, Contact, Evidence

2. **Working Systems**
   - Component library with layout components
   - Basic responsive design
   - Navigation structure (simplified)

### 🚨 Critical Gaps Requiring Immediate Attention

#### Content Gap (85% missing)
- **Current**: ~2,000 words basic marketing copy
- **Required**: 14,000+ words medical-grade content
- Missing: Swiss insurance pathways, regulatory compliance, physician content

#### Feature Gap (95% missing)
- ❌ Eligibility Checker (multi-step form)
- ❌ Coverage Calculator (insurance-specific)
- ❌ Physician Portal login
- ❌ Demo scheduling system
- ❌ Advanced contact form with segmentation

#### Technical Issues (Blocking)
1. **Translation system broken** - all languages show English
2. **Contact form** - basic fields only, no routing
3. **SEO** - generic titles, missing meta descriptions

#### Compliance Gap (80% missing)
- ❌ Medical device disclaimers
- ❌ Swissmedic registration notices
- ❌ TARMED billing codes
- ❌ Swiss insurance canton variations
- ❌ Proper Impressum format

## Target Specifications

### Site Architecture
```
SKIIN Switzerland (Medical-Grade Platform)
├── Home (Patient-focused landing with insurance pathways)
├── Solutions
│   ├── Holter (14-Day Heart Screening)
│   └── Tritest (SKIIN 3X Screening - Coming Q1 2026)
├── Partners
│   ├── General Practitioners
│   ├── Cardiologists  
│   ├── Telemedicine Providers
│   └── Corporate (Employers & Insurers)
├── How It Works
│   ├── Process (5-Step Journey)
│   ├── Reimbursement (Insurance Details)
│   ├── Technology (Device & Data)
│   └── Clinical Evidence
├── About Us
│   ├── Company & Mission
│   ├── Medical Advisors
│   ├── Blog & Resources
│   ├── Testimonials
│   ├── Compliance & Legal
│   └── Contact
└── Support (External link)
```

### Content Requirements
- **Total**: 14,000+ words medical-grade content
- **Home**: 3,000 words (hero, problem/solution, insurance, testimonials)
- **For Patients**: 2,500 words (empathetic, reassuring)
- **For Healthcare Professionals**: 2,500 words (evidence-based)
- **How It Works**: 2,000 words (detailed process)
- **Clinical Evidence**: 2,000 words (studies, validation)
- **About Us**: 1,500 words (Swiss quality emphasis)
- **Supporting pages**: 500 words each (FAQ, Contact, etc.)

### Technical Specifications
- **Performance**: <3s load time
- **Languages**: English (MVP), German, French
- **Compliance**: Swiss medical device standards, GDPR/DSG
- **Analytics**: GA4, Google Ads, HubSpot tracking
- **Accessibility**: WCAG 2.1 AA compliance

### Design Requirements
- **Colors**: Deep navy (#1e3a5f), medical teal (#00796b) - NO "heavenly" blues
- **Typography**: Professional medical aesthetic
- **Layout**: 30% more whitespace than typical sites
- **Assets**: German visual assets for all languages initially

## Implementation Plan

### Phase 1: English MVP (Week 1) - CURRENT FOCUS
**Timeline**: 5 days accelerated sprint
**Goal**: CEO review-ready English website

#### Day 1-2: Foundation Fixes
- [ ] Fix translation system or implement English-only workaround
- [ ] Configure professional color scheme (navy/teal)
- [ ] Set up German assets structure
- [ ] Update navigation to match target architecture

#### Day 3-4: Core Content Implementation
- [ ] Deploy homepage with 3,000 words English copy
- [ ] Implement Solutions pages (Holter + Tritest)
- [ ] Create Partners pages (GP, Cardiologist, Telemed, Corporate)
- [ ] Enhance How It Works with detailed process

#### Day 5: Polish & Review Prep
- [ ] Complete About Us and supporting pages
- [ ] Cross-browser testing
- [ ] Performance optimization
- [ ] CEO review package preparation

**Week 1 Success Criteria:**
- ✓ 14,000 words English copy deployed
- ✓ Professional design implemented
- ✓ German assets integrated
- ✓ Mobile responsive
- ✓ <3 second load times

### Phase 2: Multilingual Expansion (Weeks 2-3)
- Professional German/French translations
- Cultural adaptations per market
- Language-specific asset creation

### Phase 3: Interactive Features (Weeks 4-5)
- Eligibility checker implementation
- Coverage calculator development
- Physician portal framework
- Advanced contact forms

### Phase 4: Compliance & Launch (Week 6)
- Swiss medical device compliance
- Regulatory review and approval
- Production deployment
- Monitoring and optimization

## Risk Assessment & Mitigation

### High-Risk Items
1. **Translation System Complexity** - may require significant debugging
   - *Mitigation*: English-only workaround as fallback
2. **Content Volume** - 14,000 words requires careful planning
   - *Mitigation*: Production-ready copy already prepared
3. **Swiss Compliance** - medical device regulations complex
   - *Mitigation*: Legal review scheduled for Week 6

### Critical Dependencies
- Medical content review by Swiss physicians
- German visual assets availability
- Backend integration for interactive tools
- Swiss legal compliance verification

## Success Metrics

### Week 1 MVP Targets
- All English copy deployed (14,000 words)
- Professional design implemented (navy/teal scheme)
- Mobile responsive across all devices
- Performance: <3 second load times
- Ready for CEO review and approval

### Final Launch Targets (Week 6)
- Multilingual support (EN/DE/FR)
- Interactive tools functional
- Swiss compliance achieved
- 95%+ uptime performance

## Next Immediate Actions
1. **Fix translation system** - blocking all multilingual content
2. **Implement navigation architecture** - align with target specs
3. **Deploy English content** - 14,000 words production-ready copy
4. **Configure design system** - professional navy/teal scheme