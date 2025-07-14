# Interactive Features Specification - SKIIN Switzerland

## 1. Eligibility Checker

### Purpose
Multi-step form wizard that determines if a user qualifies for insurance-covered SKIIN monitoring and guides them to appropriate next steps.

### User Flow
```
Step 1: Symptoms Assessment
├── Do you experience any of these symptoms?
│   ├── Palpitations/irregular heartbeat
│   ├── Dizziness or fainting
│   ├── Shortness of breath
│   ├── Chest discomfort
│   └── None of the above
│
Step 2: Risk Factors
├── Do any of these apply to you?
│   ├── Previous heart condition
│   ├── Family history of heart disease
│   ├── High blood pressure
│   ├── Diabetes
│   ├── Age over 65
│   └── None of the above
│
Step 3: Insurance Type
├── Select your insurance model:
│   ├── Standard (free choice of doctor)
│   ├── GP Model (Hausarztmodell)
│   ├── HMO Model
│   ├── Telmed Model
│   └── No insurance/Self-pay
│
Step 4: Canton Selection
├── Where do you live?
│   └── [Dropdown of all Swiss cantons]
│
Step 5: Results & Recommendations
├── Eligible (with symptoms/risk factors)
│   ├── Shows pathway for their insurance type
│   ├── Next steps clearly outlined
│   └── CTA: "Start Your SKIIN Journey"
├── Not Eligible (no symptoms/risk)
│   ├── Explains self-pay option
│   ├── Preventive screening benefits
│   └── CTA: "Learn About Self-Pay Options"
└── Needs Physician Consultation
    ├── Explains why consultation needed
    └── CTA: "Find a SKIIN Partner Doctor"
```

### Technical Requirements
- Progressive form validation
- Data persistence between steps
- Back navigation capability
- Progress indicator
- Mobile-optimized interface
- Results saved to CRM with segmentation

### UI Components
- Radio buttons for single-select
- Checkboxes for multi-select
- Dropdown for canton selection
- Progress bar showing steps
- Clear CTAs on each step
- Results screen with personalized content

## 2. Coverage Calculator

### Purpose
Helps users understand exact costs and coverage for SKIIN based on their specific insurance situation.

### Input Fields
1. **Insurance Provider**
   - Dropdown with major Swiss insurers:
     - CSS
     - Helsana
     - SWICA
     - Sanitas
     - Groupe Mutuel
     - Concordia
     - Others...

2. **Insurance Model**
   - Standard
   - GP Model
   - HMO
   - Telmed
   - Supplementary only

3. **Annual Deductible (Franchise)**
   - CHF 300
   - CHF 500
   - CHF 1,000
   - CHF 1,500
   - CHF 2,000
   - CHF 2,500

4. **Current Deductible Status**
   - Already met this year
   - Partially met (enter amount)
   - Not yet met

5. **Prescription Status**
   - Have prescription from GP
   - Have prescription from specialist
   - Need prescription

### Output/Results
```
Your Coverage Estimate:
├── SKIIN Service Cost: CHF 450
├── Covered by Insurance: CHF 405 (90%)
├── Your Cost:
│   ├── Deductible portion: CHF XX
│   ├── Co-payment (10%): CHF 45
│   └── Total out-of-pocket: CHF XX
├── Insurance Pathway:
│   └── [Specific steps for their model]
└── Important Notes:
    └── [Any model-specific requirements]
```

### Additional Features
- Explanatory tooltips for terms
- Link to detailed reimbursement guide
- Option to save/email results
- Disclaimer about estimates

## 3. Demo Request System (Physicians)

### Purpose
Allows healthcare professionals to schedule product demonstrations or consultations.

### Form Fields
1. **Professional Information**
   - Full name*
   - Title (Dr., Prof., etc.)
   - Specialty (dropdown)
   - Clinic/Practice name*
   - Role (GP, Cardiologist, Admin, etc.)

2. **Contact Details**
   - Email*
   - Phone*
   - Preferred contact method
   - Preferred language (DE/FR/EN)

3. **Demo Preferences**
   - Demo type:
     - Virtual demo (30 min)
     - In-person consultation
     - Trial kit request
   - Preferred dates/times (calendar picker)
   - Number of providers in practice
   - Current Holter volume/month

4. **Specific Interests**
   - [ ] Clinical evidence
   - [ ] Integration process
   - [ ] Billing/reimbursement
   - [ ] Patient workflow
   - [ ] Technical specifications

### Workflow
1. Form submission → CRM (HubSpot)
2. Auto-confirmation email
3. Sales team notification
4. Calendar integration for scheduling
5. Follow-up automation

## 4. Newsletter Signup with Segmentation

### Purpose
Capture leads with role-based segmentation for targeted communication.

### Implementation
```
Newsletter Signup:
├── Email field
├── Role selection:
│   ├── Patient/General Public
│   ├── General Practitioner
│   ├── Cardiologist
│   ├── Healthcare Administrator
│   └── Other Healthcare Professional
├── Interest areas (optional):
│   ├── Clinical updates
│   ├── Patient stories
│   ├── Technology news
│   └── Events/webinars
├── Language preference:
│   ├── Deutsch
│   ├── Français
│   └── English
└── Consent checkbox with privacy link
```

### Integration
- HubSpot lists based on role
- Automated welcome series
- Role-specific content delivery
- Preference center link

## 5. Support Widget Integration

### Options to Consider
1. **Live Chat** (business hours)
   - Multilingual support
   - Queue management
   - Physician priority queue

2. **FAQ Bot**
   - Common questions
   - Intelligent routing
   - Escalation to human

3. **Callback Request**
   - Schedule callback
   - Topic selection
   - Preferred time slots

### Implementation Considerations
- GDPR/Swiss privacy compliance
- Secure handling of medical questions
- Clear disclaimer about medical advice
- Integration with support ticket system

## 6. Physician Portal (Future Phase)

### Basic Framework
```
Secure Login Area:
├── Authentication system
├── Dashboard:
│   ├── Patient overview
│   ├── Pending reports
│   ├── Billing summary
│   └── Resources
├── Features:
│   ├── Order SKIIN kits
│   ├── Track patient status
│   ├── Access reports
│   ├── Download resources
│   └── Training materials
└── Security:
    ├── 2FA required
    ├── Session management
    └── Audit logging
```

## Technical Architecture

### Frontend Components
- React + TypeScript
- Form validation (Zod/React Hook Form)
- State management for multi-step forms
- API integration layer
- Error handling and recovery

### Backend Requirements
- RESTful API endpoints
- Data validation
- CRM integration (HubSpot)
- Email automation triggers
- Analytics event tracking

### Data Flow
1. User input → Client validation
2. API submission → Server validation
3. CRM update → Segmentation
4. Automation triggers → Follow-up
5. Analytics tracking → Conversion metrics

## Analytics & Tracking

### Key Events
- Eligibility checker starts/completes
- Coverage calculator usage
- Demo requests submitted
- Newsletter signups by role
- Tool abandonment points

### Conversion Optimization
- A/B testing on CTAs
- Form field optimization
- Results page variations
- Follow-up email testing