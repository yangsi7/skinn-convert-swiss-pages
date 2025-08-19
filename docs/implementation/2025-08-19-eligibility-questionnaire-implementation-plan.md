# Multi-Step Eligibility Questionnaire Implementation Plan
VERSION: 1.0
LAST UPDATED: 2025-08-19
PURPOSE: Comprehensive implementation plan for sophisticated multi-step eligibility questionnaire form
PROCESS-COMPLIANCE: CLAUDE_PROCESS.md v5.0

## Executive Summary

This document provides a comprehensive implementation plan for developing a sophisticated 5-stage eligibility questionnaire form for the SKIIN Switzerland marketing website. The form implements an eligibility-first approach with Swiss insurance integration, Supabase authentication, resume functionality, and GDPR compliance.

The questionnaire acts as the primary conversion funnel from website CTAs and includes advanced features like conditional branching, OTP verification, GP referral processing, and payment collection for self-pay users.

## Current State Analysis

### Existing Infrastructure
- **Tech Stack**: React 18 + TypeScript 5 + Vite + Tailwind CSS + shadcn/ui
- **State Management**: TanStack Query for server state, Context API for global state
- **Forms**: Zod + React Hook Form for validation
- **UI Components**: 50+ shadcn/ui components available
- **Theme System**: S&W Design as default with multiple theme support
- **Internationalization**: 4 languages (EN, DE, FR, IT) with translation system
- **Existing Form**: Basic EligibilityChecker.tsx with 4-step flow (limited functionality)

### Requirements Gap Analysis
Current EligibilityChecker.tsx provides basic symptom and insurance model checking but lacks:
- Multi-stage architecture with session management
- OTP verification system
- Conditional branching logic
- Supabase integration
- Payment processing
- GP referral system
- GDPR compliance features
- Resume functionality

## Implementation Phases

## Phase 1: Technical Architecture & Foundation (12-16 hours)

### 1.1 State Management Architecture (4 hours)
**Objective**: Design and implement robust state management system for complex form flow

**Tasks**:
- Create FormContext with TypeScript interfaces for all form stages
- Implement state machine logic using XState or custom reducer for branching
- Design session management for resume functionality
- Create form validation schemas using Zod
- Implement local storage persistence for form state

**Deliverables**:
- `src/contexts/EligibilityFormContext.tsx` 
- `src/types/eligibility-form.types.ts`
- `src/utils/form-state-machine.ts`
- `src/schemas/eligibility-validation.ts`

### 1.2 Supabase Integration Setup (4 hours)
**Objective**: Configure Supabase for authentication, data storage, and OTP verification

**Tasks**:
- Set up Supabase database schema for form submissions
- Configure OTP authentication for email and phone verification
- Implement user session management with resume tokens
- Create database policies for GDPR compliance
- Set up file upload handling for ECG documents

**Deliverables**:
- Database migration files for form tables
- `src/services/supabase-auth.service.ts`
- `src/services/form-submission.service.ts`
- Row Level Security (RLS) policies
- File storage bucket configuration

### 1.3 Core Form Components Architecture (4-6 hours)
**Objective**: Create reusable component library for form stages

**Tasks**:
- Design FormStage wrapper component with progress tracking
- Create OTPVerification component for email/phone
- Build ConditionalBranching component for insurance logic
- Implement ProgressStepper component with accessibility
- Create FormNavigation component with back/forward logic

**Deliverables**:
- `src/components/eligibility/FormStage.tsx`
- `src/components/eligibility/OTPVerification.tsx`
- `src/components/eligibility/ConditionalBranching.tsx`
- `src/components/eligibility/ProgressStepper.tsx`
- `src/components/eligibility/FormNavigation.tsx`

## Phase 2: Form Stage Implementation (16-20 hours)

### 2.1 Stage 0: Contact & Account (4 hours)
**Objective**: Implement contact collection with OTP verification

**Tasks**:
- Build email input with real-time validation
- Integrate OTP verification flow with Supabase
- Create date of birth picker with age validation (18+ requirement)
- Implement account creation/lookup logic
- Add "Save & Continue Later" functionality

**Components**:
- `ContactStage.tsx` with email OTP flow
- Age validation with clear error messaging
- Session token generation for resume links

### 2.2 Stage 1: Eligibility Gate (5-6 hours)
**Objective**: Implement eligibility screening with conditional branching

**Tasks**:
- Create insurance status RadioGroup with model selection
- Build contraindications screening with emergency alerts
- Implement symptom checklist with dialog modals for severe symptoms
- Add family history optional question
- Create eligibility decision engine with branching logic

**Components**:
- `EligibilityGateStage.tsx` with complex conditional logic
- Emergency alert dialogs for severe symptoms
- Insurance model selection with descriptions
- Early eligibility notification system

### 2.3 Stage 2: Detailed Information (4-5 hours)
**Objective**: Collect comprehensive medical history

**Tasks**:
- Build collapsible symptom details section
- Create prior arrhythmia/procedure input
- Implement medication list textarea with guidance
- Add file upload component for ECG documents
- Implement progressive disclosure for better UX

**Components**:
- `DetailedInformationStage.tsx` with collapsible sections
- File upload with validation (PDF, JPG, PNG, 10MB limit)
- Medical history form with guided inputs

### 2.4 Stage 3: Review & Consents (3-4 hours)
**Objective**: Implement insurance-specific review and consent collection

**Tasks**:
- Create dynamic review based on insurance model
- Build GP details collection for Standard/Flex/HMO
- Implement Telmed hotline information display
- Create consent checkbox system with required validation
- Add form submission with confirmation

**Components**:
- `ReviewConsentsStage.tsx` with insurance-specific flows
- GP information collection forms
- Comprehensive consent management system

## Phase 3: Payment & Self-Pay Integration (10-12 hours)

### 3.1 Self-Pay Flow Implementation (4-5 hours)
**Objective**: Create complete self-pay user journey

**Tasks**:
- Build phone number collection with OTP verification
- Create shipping address form
- Implement payment summary calculation
- Add self-pay specific consent collection
- Create confirmation flow for self-pay users

**Components**:
- `SelfPayStage.tsx` with phone OTP
- Address collection with validation
- Payment summary display

### 3.2 Payment Processing Integration (4-5 hours)
**Objective**: Integrate secure payment processing

**Tasks**:
- Integrate Stripe payment processing
- Create payment form with security compliance
- Implement payment success/failure handling
- Add payment confirmation emails
- Create payment receipt generation

**Components**:
- `PaymentForm.tsx` with Stripe integration
- Payment processing service layer
- Email notification system

### 3.3 GP Referral System (2-3 hours)
**Objective**: Generate GP referral packets and manage referral flow

**Tasks**:
- Create PDF generation for referral packets
- Implement GP detail validation
- Build referral packet download system
- Create Medgate partner GP integration
- Add referral tracking system

**Components**:
- PDF generation service
- Referral packet templates
- Partner GP booking integration

## Phase 4: UI/UX & Design System Integration (8-10 hours)

### 4.1 Design System Compliance (3-4 hours)
**Objective**: Ensure consistent design with S&W Design system

**Tasks**:
- Apply S&W Design color palette to all components
- Implement consistent spacing and typography
- Create mobile-responsive layouts for all stages
- Add loading states and micro-interactions
- Implement accessibility features (WCAG 2.1 AA)

**Deliverables**:
- Mobile-first responsive design
- Consistent component styling
- Loading and error states

### 4.2 Advanced UI Features (3-4 hours)
**Objective**: Implement sophisticated UI interactions

**Tasks**:
- Create animated progress transitions
- Add form validation feedback animations
- Implement smooth stage transitions
- Create contextual help tooltips
- Add form auto-save indicators

**Components**:
- Animated progress stepper
- Form feedback system
- Contextual help overlays

### 4.3 Multi-language Support (2-3 hours)
**Objective**: Implement complete internationalization

**Tasks**:
- Create translation files for all form content
- Implement dynamic content translation
- Add locale-specific validation messages
- Create language-specific formatting (dates, phone numbers)
- Test all languages for form flow

**Deliverables**:
- Complete translation files for DE, FR, IT
- Locale-aware validation
- Multi-language testing

## Phase 5: Backend Integration & Data Management (8-10 hours)

### 5.1 Database Schema & API Development (4-5 hours)
**Objective**: Complete backend integration for form processing

**Tasks**:
- Finalize Supabase database schema
- Create form submission API endpoints
- Implement data validation on server side
- Add audit logging for GDPR compliance
- Create data export/deletion endpoints

**Deliverables**:
- Complete database schema
- RESTful API endpoints
- Data management procedures

### 5.2 Email & Notification System (2-3 hours)
**Objective**: Implement comprehensive notification system

**Tasks**:
- Set up email templates for different stages
- Implement OTP email/SMS delivery
- Create confirmation and follow-up emails
- Add resume link email functionality
- Implement notification preferences

**Components**:
- Email service integration
- Template management system
- Notification scheduling

### 5.3 GDPR Compliance Implementation (2-3 hours)
**Objective**: Ensure complete GDPR compliance

**Tasks**:
- Implement data consent tracking
- Create data deletion workflows
- Add data export functionality
- Implement audit logging
- Create privacy policy integration

**Deliverables**:
- GDPR compliance framework
- Data management tools
- Privacy controls

## Phase 6: Testing & Quality Assurance (10-12 hours)

### 6.1 Unit & Integration Testing (4-5 hours)
**Objective**: Comprehensive test coverage for form functionality

**Tasks**:
- Write unit tests for all form components
- Create integration tests for form flow
- Test conditional branching logic
- Validate form submission processes
- Test OTP verification flows

**Test Coverage**:
- Form validation logic
- State management
- API integration
- User journey flows

### 6.2 End-to-End Testing (3-4 hours)
**Objective**: Test complete user journeys

**Tasks**:
- Create E2E tests for all user paths
- Test insurance vs self-pay flows
- Validate payment processing
- Test resume functionality
- Cross-browser compatibility testing

**Test Scenarios**:
- Complete insured user journey
- Self-pay user flow
- Form resume functionality
- Error handling scenarios

### 6.3 Accessibility & Performance Testing (2-3 hours)
**Objective**: Ensure accessibility compliance and optimal performance

**Tasks**:
- Run accessibility audits (axe-core)
- Test keyboard navigation
- Validate screen reader compatibility
- Performance testing with Lighthouse
- Mobile usability testing

**Quality Gates**:
- WCAG 2.1 AA compliance
- Performance score >90
- Mobile-friendly validation

## Phase 7: Deployment & Monitoring (6-8 hours)

### 7.1 Production Deployment (3-4 hours)
**Objective**: Deploy form to production environment

**Tasks**:
- Configure production Supabase environment
- Set up payment processing in production
- Deploy form to production URL
- Configure monitoring and analytics
- Set up error tracking (Sentry)

**Deliverables**:
- Production deployment
- Monitoring dashboard
- Error tracking system

### 7.2 Analytics & Optimization (2-3 hours)
**Objective**: Implement comprehensive analytics tracking

**Tasks**:
- Add form completion analytics
- Track drop-off points by stage
- Implement A/B testing framework
- Create conversion funnel analysis
- Set up automated alerts for issues

**Analytics Events**:
- Stage completion rates
- Drop-off analysis
- Error frequency tracking
- Conversion optimization

### 7.3 Documentation & Handoff (1-2 hours)
**Objective**: Create comprehensive documentation

**Tasks**:
- Create user documentation
- Write technical documentation
- Create troubleshooting guides
- Document API endpoints
- Create maintenance procedures

**Documentation**:
- User guide for form
- Technical implementation docs
- Troubleshooting procedures

## Technical Specifications

### State Management Structure
```typescript
interface EligibilityFormState {
  currentStage: FormStage;
  userData: {
    contact: ContactData;
    eligibility: EligibilityData;
    medical: MedicalData;
    insurance: InsuranceData;
    payment?: PaymentData;
  };
  metadata: {
    sessionId: string;
    startTime: Date;
    lastSaved: Date;
    completionStage: FormStage;
  };
  flags: {
    isEligible: boolean;
    requiresPayment: boolean;
    hasContraindications: boolean;
    insuranceModel: InsuranceModel;
  };
}
```

### Component Architecture
- **FormProvider**: Context provider for form state
- **StageContainer**: Wrapper for each form stage
- **ConditionalRender**: Handles branching logic
- **FormValidation**: Centralized validation system
- **ProgressTracker**: Visual progress indication
- **SessionManager**: Handles resume functionality

### Database Schema (Supabase)
```sql
-- Form submissions table
CREATE TABLE eligibility_submissions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES auth.users(id),
  session_id VARCHAR(255) UNIQUE,
  stage VARCHAR(50),
  form_data JSONB,
  is_complete BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- OTP verifications table
CREATE TABLE otp_verifications (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  email VARCHAR(255),
  phone VARCHAR(20),
  otp_code VARCHAR(10),
  verified BOOLEAN DEFAULT FALSE,
  expires_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

## Dependencies & Integration Points

### Required Dependencies
- **XState**: State machine management (`npm install xstate @xstate/react`)
- **React Hook Form**: Advanced form handling (`npm install react-hook-form @hookform/resolvers`)
- **Zod**: Schema validation (already installed)
- **Supabase**: Backend services (already installed)
- **Stripe**: Payment processing (`npm install @stripe/stripe-js @stripe/react-stripe-js`)
- **React PDF**: PDF generation (`npm install @react-pdf/renderer`)
- **libphonenumber-js**: Phone number validation (`npm install libphonenumber-js`)

### Integration Requirements
- **Supabase Configuration**: Database tables, RLS policies, file storage
- **Stripe Setup**: Payment processing configuration
- **Email Service**: Transactional email setup (Supabase Auth or SendGrid)
- **SMS Service**: OTP delivery for phone verification
- **PDF Generation**: Referral packet templates

## Risk Assessment & Mitigation

### Technical Risks
1. **Complex State Management**: Mitigate with XState for predictable state transitions
2. **Payment Processing Security**: Use Stripe's secure payment handling
3. **Data Privacy Compliance**: Implement GDPR-compliant data handling from start
4. **Form Abandonment**: Add auto-save and resume functionality

### User Experience Risks
1. **Form Length**: Mitigate with progress indication and save functionality
2. **Conditional Logic Confusion**: Clear messaging and help text
3. **Mobile Usability**: Mobile-first design approach
4. **Language Barriers**: Complete internationalization

## Success Metrics

### Technical Metrics
- Form completion rate >60%
- Page load time <2 seconds
- Error rate <1%
- Accessibility score 100%
- Performance score >90%

### Business Metrics
- Eligibility conversion rate
- Insurance vs self-pay distribution
- GP referral completion rate
- Payment success rate (self-pay)
- User drop-off analysis by stage

## Timeline & Resource Allocation

### Estimated Timeline: 6-8 weeks
- **Week 1-2**: Phase 1 (Architecture) + Phase 2 (Form Stages)
- **Week 3**: Phase 3 (Payment Integration)
- **Week 4**: Phase 4 (UI/UX) + Phase 5 (Backend)
- **Week 5**: Phase 6 (Testing & QA)
- **Week 6**: Phase 7 (Deployment) + Buffer

### Resource Requirements
- **Frontend Developer**: Full-time (React/TypeScript expertise)
- **Backend Developer**: Part-time (Supabase/API development)
- **UI/UX Designer**: Part-time (Design system compliance)
- **QA Engineer**: Part-time (Testing and validation)

## Conclusion

This implementation plan provides a comprehensive roadmap for developing a sophisticated multi-step eligibility questionnaire that meets all specified requirements. The phased approach ensures systematic development with proper testing and quality assurance at each stage.

The solution leverages existing infrastructure while adding advanced features like OTP verification, payment processing, and GDPR compliance. The modular architecture allows for future enhancements and maintenance.

Key success factors include:
- Robust state management for complex conditional logic
- Seamless integration with existing design system
- Comprehensive testing coverage
- GDPR-compliant data handling
- Mobile-first responsive design
- Multi-language support

The estimated 6-8 week timeline provides adequate buffer for thorough testing and quality assurance while delivering a production-ready solution that will significantly improve the user experience and conversion rates.