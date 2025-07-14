# Target Architecture - SKIIN Switzerland Website

Based on NEW-WEBSITE-UPDATE-SPECS.md comprehensive requirements.

## Site Structure

### Primary Navigation
```
SKIIN Switzerland
├── Home (Patient-focused landing)
├── Solutions
│   ├── Holter (14-Day Heart Screening)
│   └── Tritest (SKIIN 3X Screening - Coming Soon)
├── Partners
│   ├── General Practitioners (GPs)
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
│   ├── Our Team & Medical Advisors
│   ├── Blog & Resources
│   ├── Testimonials
│   ├── Compliance & Legal
│   └── Contact
└── Support (External link to support.skiin.ch)
```

### Footer Structure
```
Column 1: SKIIN Service
- About Us
- How It Works
- Clinical Evidence
- FAQ

Column 2: For Patients
- Get Started
- Insurance Coverage
- Patient Stories
- Support

Column 3: For Professionals
- GP Resources
- Cardiologist Portal
- Request Demo
- TARMED Codes

Column 4: Company
- Contact
- Blog
- Careers
- Press

Legal Links:
- Privacy Policy | Terms of Use | Medical Disclaimer | Impressum | Cookie Settings
```

## Page-Level Architecture

### 1. Home Page (Patient Landing)
**Sections:**
1. Hero with emotional hook
2. Problem/Solution highlights
3. How it works (5-step preview)
4. Insurance coverage overview
5. Key features (icon grid)
6. Patient testimonials
7. Physician endorsement
8. Interactive eligibility checker
9. Final CTA section

**Interactive Elements:**
- Eligibility Checker (multi-step form)
- Coverage Calculator 
- Language selector (DE/FR/EN)
- Cookie consent banner

### 2. Solutions Section
#### 2.1 Holter (14-Day Monitoring)
- Problem framing (silent arrhythmias)
- Solution overview
- Features & benefits (with icons)
- Technology details
- Clinical evidence preview
- Cost/coverage information
- Patient journey visualization
- CTA: "Get Started" / "Talk to Doctor"

#### 2.2 Tritest (Coming Q1 2026)
- Innovation announcement
- 3-in-1 screening concept
- Silent triad explanation
- Timeline and availability
- Waitlist signup form
- Future vision content

### 3. Partners Section
**Shared Elements Across All Partner Pages:**
- Role-specific value proposition
- Clinical benefits
- Workflow integration
- Reimbursement/billing guidance
- Testimonials/endorsements
- Resources/downloads
- Demo request form

#### 3.1 General Practitioners
- Higher diagnostic yield messaging
- Patient compliance benefits (94%)
- Streamlined workflow
- TARMED billing codes
- Peer GP testimonials
- Integration guidance

#### 3.2 Cardiologists  
- Diagnostic superiority data
- Clinical evidence focus
- Practice efficiency benefits
- Telecardiology capabilities
- Technology specifications
- Research collaboration options

#### 3.3 Telemedicine Providers
- Remote-first workflow
- Managed care compatibility
- Scalability benefits
- API/integration options
- Telemed case examples
- Partnership opportunities

#### 3.4 Corporate Partners
- Population health benefits
- Cost-saving potential
- Pilot program options
- Employee wellness integration
- Bulk pricing models
- ROI projections

### 4. How It Works Section
#### 4.1 Process (Patient & Physician Views)
- 5-step visual timeline
- Dual-track content (toggle view)
- Insurance pathway flowchart
- Device setup instructions
- Data flow visualization

#### 4.2 Reimbursement
- Insurance model tabs (Standard/GP/HMO/Telmed)
- Coverage requirements
- TARMED codes reference
- Self-pay options
- Canton-specific notes

#### 4.3 Technology
- Device specifications
- ECG technology details
- Data security measures
- AI analysis explanation
- Regulatory certifications

#### 4.4 Clinical Evidence
- Research summary
- Comparative studies
- Detection metrics
- Case studies
- White paper downloads
- Medical advisory board

### 5. About Us Section
#### 5.1 Company & Mission
- Swiss presence emphasis
- Precision Comfort vision
- Quality standards
- Team overview

#### 5.2 Medical Advisors
- Board member profiles
- Swiss physician network
- Clinical oversight

#### 5.3 Blog & Resources
- Heart health education
- Industry insights
- Patient stories
- Physician perspectives
- Multilingual content

#### 5.4 Testimonials
- Patient success stories
- Physician endorsements
- Video testimonials
- Outcome statistics

#### 5.5 Compliance
- Privacy Policy
- Terms of Use
- Medical Disclaimer
- Impressum
- Regulatory notices
- Accessibility statement

#### 5.6 Contact
- Contact form with routing
- Phone numbers (multilingual)
- Office address
- Support links
- Demo scheduling

## Technical Requirements

### Interactive Features
1. **Eligibility Checker**
   - Multi-step form wizard
   - Symptoms assessment
   - Risk factor evaluation
   - Insurance type selection
   - Personalized recommendations

2. **Coverage Calculator**
   - Insurance provider dropdown
   - Model selection (GP/HMO/Telmed)
   - Canton selection
   - Cost estimation
   - Coverage explanation

3. **Physician Portal**
   - Secure login area
   - Patient management
   - Report access
   - Billing resources
   - Training materials

4. **Lead Generation**
   - Role-based forms
   - CRM integration (HubSpot)
   - Automated follow-up
   - Conversion tracking

### Compliance Features
- Cookie consent management
- Data processing agreements
- Medical device notices
- Age verification (18+)
- Terms acceptance tracking

### Performance Requirements
- Page load <3s
- Mobile-first responsive
- Accessibility WCAG 2.1 AA
- SEO optimized
- Multi-language support