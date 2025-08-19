# Eligibility Questionnaire Implementation Quick Reference
VERSION: 1.0
DATE: 2025-08-19
PURPOSE: Key implementation details and task breakdown

## Architecture Overview

### 5-Stage Form Flow
1. **Stage 0**: Contact & Account (Email OTP + DOB)
2. **Stage 1**: Eligibility Gate (Insurance + Symptoms + Contraindications)
3. **Stage 2**: Detailed Medical History
4. **Stage 3**: Review & Consents (Insurance-specific)
5. **Stage 3-Alt**: Payment & Consents (Self-pay)

### Key Technical Components
- **State Management**: XState or Context API with reducer
- **Authentication**: Supabase with OTP for email/phone
- **Payments**: Stripe integration for self-pay users
- **Form Handling**: React Hook Form + Zod validation
- **UI**: shadcn/ui components with S&W Design theme
- **Storage**: Supabase database with session management

## Priority Development Tasks

### Phase 1 (Foundation) - Week 1
- [ ] Create FormContext with TypeScript interfaces
- [ ] Set up Supabase database schema
- [ ] Build OTPVerification component
- [ ] Create ProgressStepper component
- [ ] Implement state machine logic

### Phase 2 (Core Stages) - Week 2  
- [ ] ContactStage with email OTP
- [ ] EligibilityGateStage with conditional branching
- [ ] DetailedInformationStage with file upload
- [ ] ReviewConsentsStage with insurance logic

### Phase 3 (Payment) - Week 3
- [ ] SelfPayStage with phone OTP
- [ ] Stripe payment integration
- [ ] GP referral PDF generation
- [ ] Payment confirmation flow

## Key Files to Create

### Core Components
```
src/components/eligibility/
├── EligibilityQuestionnaire.tsx      # Main container
├── FormStage.tsx                     # Stage wrapper
├── ProgressStepper.tsx               # Progress indicator
├── OTPVerification.tsx               # Email/phone OTP
├── ConditionalBranching.tsx          # Insurance logic
└── stages/
    ├── ContactStage.tsx              # Stage 0
    ├── EligibilityGateStage.tsx      # Stage 1
    ├── DetailedInformationStage.tsx  # Stage 2
    ├── ReviewConsentsStage.tsx       # Stage 3 (insured)
    └── SelfPayStage.tsx              # Stage 3 (self-pay)
```

### Services & Context
```
src/contexts/EligibilityFormContext.tsx
src/services/eligibility-form.service.ts
src/services/supabase-auth.service.ts
src/types/eligibility-form.types.ts
src/schemas/eligibility-validation.ts
```

## Database Schema (Supabase)

```sql
-- Core form submissions
CREATE TABLE eligibility_submissions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  session_id VARCHAR(255) UNIQUE,
  user_id UUID REFERENCES auth.users(id),
  current_stage VARCHAR(50),
  form_data JSONB,
  is_complete BOOLEAN DEFAULT FALSE,
  eligibility_status VARCHAR(50),
  insurance_model VARCHAR(50),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- OTP verification tracking
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

## State Management Interface

```typescript
interface EligibilityFormState {
  // Current form state
  currentStage: FormStage;
  sessionId: string;
  
  // User data by stage
  contact: {
    email: string;
    dateOfBirth: Date;
    emailVerified: boolean;
  };
  
  eligibility: {
    hasInsurance: boolean;
    insuranceModel: 'Standard' | 'HMO' | 'Telmed' | 'SelfPay';
    contraindications: boolean[];
    symptoms: string[];
    familyHistory: boolean;
  };
  
  medical: {
    symptomDetails?: SymptomDetails;
    priorArrhythmia?: string;
    medications?: string;
    uploadedFiles?: File[];
  };
  
  insurance?: {
    gpDetails?: GPDetails;
    consents: boolean[];
  };
  
  payment?: {
    phone: string;
    phoneVerified: boolean;
    address: Address;
    paymentComplete: boolean;
  };
  
  // Computed flags
  isEligible: boolean;
  requiresPayment: boolean;
  canProceed: boolean;
}
```

## Integration Requirements

### Dependencies to Add
```bash
npm install xstate @xstate/react
npm install @stripe/stripe-js @stripe/react-stripe-js
npm install @react-pdf/renderer
npm install libphonenumber-js
```

### Environment Variables
```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
VITE_STRIPE_PUBLISHABLE_KEY=your_stripe_key
```

## Testing Strategy

### Unit Tests
- Form validation logic
- State management transitions
- Component rendering
- OTP verification flow

### Integration Tests  
- Complete form submission flow
- Payment processing
- Email/SMS delivery
- File upload handling

### E2E Tests
- Full user journeys (insured vs self-pay)
- Cross-browser compatibility
- Mobile responsiveness
- Resume functionality

## Performance Considerations

- **Bundle Splitting**: Lazy load payment components
- **State Persistence**: Auto-save every 30 seconds
- **File Upload**: Chunked upload for large files
- **Caching**: Cache form validation schemas
- **Analytics**: Track drop-off points by stage

## Security & Compliance

- **Data Encryption**: Encrypt sensitive form data
- **GDPR**: Implement data deletion and export
- **PCI Compliance**: Use Stripe for payment security  
- **Access Control**: Row-level security in Supabase
- **Audit Logging**: Log all form interactions

## Success Metrics

- **Form Completion Rate**: Target >60%
- **Stage Drop-off**: Track by stage for optimization
- **Payment Success**: >95% for valid cards
- **OTP Delivery**: >99% success rate
- **Performance**: <2s load time, >90 Lighthouse score

## Next Steps

1. Review and approve implementation plan
2. Set up development environment and dependencies
3. Create database schema in Supabase
4. Begin Phase 1 development with core architecture
5. Implement stages incrementally with testing
6. Deploy MVP for internal testing
7. Conduct user testing and iterate
8. Production deployment with monitoring

This implementation will significantly enhance the conversion funnel and provide a professional, compliant solution for Swiss healthcare requirements.