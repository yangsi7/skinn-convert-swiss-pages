# Eligibility Questionnaire Implementation Invocation Chain

**Chain ID**: eligibility-questionnaire-chain  
**Version**: 1.0  
**Created**: 2025-08-19  
**Duration**: 6-8 weeks (with optimized parallelization)  
**Priority**: CRITICAL - Security fixes must complete before any development

## Executive Summary

This invocation chain orchestrates the implementation of the eligibility questionnaire system with critical security fixes prioritized and multiple parallel workstreams for efficiency. The chain follows a 5-phase approach with clear dependencies and validation checkpoints.

## Critical Constraints

1. **Security First**: Phase 0 security fixes MUST complete before any other development
2. **Swiss Compliance**: All medical data handling must comply with Swiss healthcare regulations
3. **Accessibility**: WCAG 2.1 AA compliance required throughout
4. **Performance**: Page load < 3s, form submission < 1s
5. **Data Privacy**: GDPR compliance with explicit consent flows

## Phase 0: Critical Security Fixes (2-3 days) 🚨 BLOCKING

### 0.1 OTP Security Vulnerability Fix
**Agent**: backend-developer  
**Dependencies**: None  
**Duration**: 8 hours  

**Tasks**:
- Replace plain text OTP storage with bcrypt hashing
- Implement rate limiting (3 attempts per 15 minutes)
- Add exponential backoff for failed attempts
- Create OTP expiry enforcement (10 minutes)
- Add IP-based blocking for suspicious activity

**Success Criteria**:
- OTPs stored with bcrypt cost factor 12+
- Rate limiting prevents brute force attacks
- Audit logs capture all OTP attempts
- Unit tests cover all security scenarios

### 0.2 Session Security Enhancement
**Agent**: backend-developer  
**Dependencies**: None (parallel with 0.1)  
**Duration**: 6 hours  

**Tasks**:
- Implement server-side session validation
- Add session expiry (30 minutes inactive, 2 hours absolute)
- Create secure session token generation (cryptographically secure)
- Implement session revocation on logout
- Add device fingerprinting for session binding

**Success Criteria**:
- Sessions validated on every API call
- Expired sessions automatically cleaned
- Session tokens unguessable (256-bit entropy)
- Multiple device sessions tracked separately

### 0.3 Audit Trail Enhancement
**Agent**: database-supabase-agent  
**Dependencies**: None (parallel with 0.1, 0.2)  
**Duration**: 6 hours  

**Tasks**:
- Create comprehensive audit_logs table
- Implement trigger functions for data access logging
- Add patient data access tracking
- Create compliance report views
- Implement data retention policies

**Success Criteria**:
- All medical data access logged with user, timestamp, action
- Audit logs immutable (append-only)
- Compliance reports generatable
- 7-year retention policy implemented

### Phase 0 Validation Checkpoint
**Agent**: testing-qa-agent  
**Duration**: 4 hours  
**Gate**: MUST PASS before proceeding to Phase 1

**Tests**:
- Security penetration testing
- OWASP Top 10 verification
- Session management validation
- Audit trail completeness check

---

## Phase 1: Foundation Setup (1-2 weeks)

### 1.1 Database Schema Implementation
**Agent**: database-supabase-agent  
**Dependencies**: Phase 0 complete  
**Duration**: 16 hours  

**Tasks**:
- Create 14 tables per schema design:
  - users, user_profiles, eligibility_questionnaires
  - questionnaire_responses, conditions, insurance_providers
  - insurance_models, referrals, payments, otp_verifications
  - sessions, audit_logs, feature_flags, analytics_events
- Implement RLS policies for all tables
- Create indexes for performance
- Set up database migrations
- Create seed data for testing

**Success Criteria**:
- All tables created with proper constraints
- RLS policies enforce data isolation
- Query performance < 100ms for common operations
- Migration rollback tested

### 1.2 Supabase Auth Integration (Parallel)
**Agent**: backend-developer  
**Dependencies**: Phase 0 complete  
**Duration**: 12 hours  

**Tasks**:
- Configure Supabase Auth for email/phone OTP
- Implement custom auth hooks
- Create user registration flow
- Set up JWT token management
- Implement refresh token rotation

**Success Criteria**:
- Email and phone OTP working
- Tokens expire and refresh properly
- User sessions persist appropriately
- Auth errors handled gracefully

### 1.3 State Management Architecture (Parallel)
**Agent**: frontend-developer  
**Dependencies**: Phase 0 complete  
**Duration**: 8 hours  

**Tasks**:
- Set up Zustand store for form state
- Implement XState machine for form flow
- Create state persistence layer
- Add state debugging tools
- Implement optimistic updates

**Success Criteria**:
- Form state persists across sessions
- State machine handles all transitions
- Debugging tools integrated
- Performance profiling shows no bottlenecks

### 1.4 Component Library Setup (Parallel)
**Agent**: design-system-architect  
**Dependencies**: Phase 0 complete  
**Duration**: 8 hours  

**Tasks**:
- Configure shadcn/ui components
- Create custom form components
- Set up component documentation
- Implement theme integration
- Create component testing setup

**Success Criteria**:
- All 8 form components scaffolded
- Theme variables properly integrated
- Storybook documentation created
- Component tests configured

### Phase 1 Validation Checkpoint
**Agent**: testing-qa-agent  
**Duration**: 4 hours  

**Tests**:
- Database schema validation
- Auth flow end-to-end test
- State management verification
- Component rendering tests

---

## Phase 2: Core Development (3-4 weeks)

### 2.1 Form Component Development
**Agent**: frontend-developer  
**Dependencies**: Phase 1 complete  
**Duration**: 24 hours  

**Parallel Track A - Basic Components**:
- StepIndicator with progress tracking
- EligibilityCard with condition selection
- InsuranceSelector with provider/model dropdowns
- PhoneInput with international formats

**Parallel Track B - Complex Components**:
- ConsentCheckbox with legal text display
- DatePicker with age validation
- RadioGroup with conditional rendering
- ProgressiveDisclosure for dynamic sections

**Success Criteria**:
- All components fully accessible (WCAG AA)
- Mobile responsive (375px baseline)
- Form validation working
- Error states clearly displayed

### 2.2 API Endpoint Implementation (Parallel)
**Agent**: backend-developer  
**Dependencies**: Phase 1 complete  
**Duration**: 20 hours  

**Tasks**:
- Create eligibility check endpoint
- Implement questionnaire submission API
- Build insurance verification service
- Create GP referral endpoint
- Implement payment initiation API

**Success Criteria**:
- All endpoints documented with OpenAPI
- Response times < 500ms
- Error handling comprehensive
- Rate limiting applied

### 2.3 Swiss Insurance Integration (Parallel)
**Agent**: backend-developer  
**Dependencies**: Phase 1 complete  
**Duration**: 16 hours  

**Tasks**:
- Integrate with insurance provider APIs
- Implement coverage verification
- Create eligibility rules engine
- Build model compatibility checker
- Add fallback mechanisms

**Success Criteria**:
- 9 major insurers integrated
- Real-time coverage verification
- Fallback to manual verification
- Error messages user-friendly

### 2.4 Form Flow Implementation
**Agent**: frontend-developer  
**Dependencies**: 2.1 complete  
**Duration**: 16 hours  

**Tasks**:
- Implement 5-stage form flow
- Add conditional branching logic
- Create save/resume functionality
- Implement progress persistence
- Add abandon recovery

**Success Criteria**:
- All paths through form tested
- Save/resume working across devices
- Abandonment recovery functional
- Analytics tracking implemented

### Phase 2 Validation Checkpoint
**Agent**: testing-qa-agent  
**Duration**: 8 hours  

**Tests**:
- Component integration tests
- API endpoint testing
- Insurance integration verification
- Form flow end-to-end tests

---

## Phase 3: Integration & Testing (1-2 weeks)

### 3.1 Payment Processing Integration
**Agent**: backend-developer  
**Dependencies**: Phase 2 complete  
**Duration**: 12 hours  

**Tasks**:
- Integrate Stripe payment gateway
- Implement payment intent creation
- Add webhook handlers
- Create refund mechanisms
- Implement invoice generation

**Success Criteria**:
- PCI compliance maintained
- Payment success rate > 95%
- Refunds processed automatically
- Invoices generated with Swiss VAT

### 3.2 End-to-End Testing (Parallel)
**Agent**: testing-qa-agent  
**Dependencies**: Phase 2 complete  
**Duration**: 16 hours  

**Tasks**:
- Create E2E test suite with Playwright
- Test all user journeys
- Verify error scenarios
- Test payment flows
- Validate data persistence

**Success Criteria**:
- 100% critical path coverage
- All error states tested
- Payment scenarios validated
- Cross-browser testing complete

### 3.3 Security Audit (Parallel)
**Agent**: testing-qa-agent  
**Dependencies**: Phase 2 complete  
**Duration**: 12 hours  

**Tasks**:
- Perform penetration testing
- Validate OWASP compliance
- Check GDPR compliance
- Verify Swiss healthcare compliance
- Audit data encryption

**Success Criteria**:
- No critical vulnerabilities
- GDPR compliance certified
- Swiss regulations met
- Encryption validated

### 3.4 Accessibility Audit (Parallel)
**Agent**: design-system-architect  
**Dependencies**: Phase 2 complete  
**Duration**: 8 hours  

**Tasks**:
- WCAG 2.1 AA audit
- Screen reader testing
- Keyboard navigation verification
- Color contrast validation
- Focus management testing

**Success Criteria**:
- WCAG AA compliant
- Screen readers fully supported
- Keyboard-only navigation works
- No accessibility errors

### Phase 3 Validation Checkpoint
**Agent**: testing-qa-agent  
**Duration**: 4 hours  

**Tests**:
- Integration test suite execution
- Security scan results review
- Accessibility report validation
- Performance benchmarking

---

## Phase 4: Finalization (1 week)

### 4.1 Performance Optimization
**Agent**: frontend-developer  
**Dependencies**: Phase 3 complete  
**Duration**: 8 hours  

**Tasks**:
- Implement code splitting
- Optimize bundle sizes
- Add lazy loading
- Implement caching strategies
- Optimize API calls

**Success Criteria**:
- Page load < 3s on 3G
- Bundle size < 200KB
- TTI < 2s
- 95+ Lighthouse score

### 4.2 Documentation Completion (Parallel)
**Agent**: documentation-maintainer  
**Dependencies**: Phase 3 complete  
**Duration**: 12 hours  

**Tasks**:
- Create user documentation
- Write API documentation
- Document compliance measures
- Create deployment guide
- Write troubleshooting guide

**Success Criteria**:
- All features documented
- API docs auto-generated
- Compliance docs complete
- Deployment automated

### 4.3 Compliance Verification (Parallel)
**Agent**: testing-qa-agent  
**Dependencies**: Phase 3 complete  
**Duration**: 8 hours  

**Tasks**:
- Final GDPR audit
- Swiss healthcare compliance check
- Accessibility revalidation
- Security final scan
- Performance final check

**Success Criteria**:
- All compliance checks passed
- Certificates obtained
- Audit trail complete
- Sign-offs received

### 4.4 Deployment Preparation
**Agent**: backend-developer  
**Dependencies**: 4.1, 4.2, 4.3 complete  
**Duration**: 8 hours  

**Tasks**:
- Create deployment scripts
- Set up monitoring
- Configure alerts
- Prepare rollback plan
- Create launch checklist

**Success Criteria**:
- One-click deployment ready
- Monitoring dashboards live
- Alerts configured
- Rollback tested

### Final Validation Gate
**Agent**: reflection-agent  
**Duration**: 4 hours  

**Review**:
- All requirements met
- Security validated
- Performance confirmed
- Documentation complete
- Ready for production

---

## Parallelization Matrix

```
Phase 0: [0.1 ∥ 0.2 ∥ 0.3] → Validation
Phase 1: [1.1 ∥ 1.2 ∥ 1.3 ∥ 1.4] → Validation
Phase 2: [2.1 ∥ 2.2 ∥ 2.3] → 2.4 → Validation
Phase 3: [3.1 ∥ 3.2 ∥ 3.3 ∥ 3.4] → Validation
Phase 4: [4.1 ∥ 4.2 ∥ 4.3] → 4.4 → Final Gate
```

## Resource Allocation

### Agent Utilization
- **backend-developer**: 40% (critical path)
- **frontend-developer**: 30% 
- **database-supabase-agent**: 10%
- **testing-qa-agent**: 15%
- **design-system-architect**: 5%
- **documentation-maintainer**: 5%

### Critical Path
Phase 0 → Phase 1.1/1.2 → Phase 2.1/2.4 → Phase 3.1 → Phase 4.4

### Parallel Opportunities
- Phase 0: All security fixes in parallel (saves 1 day)
- Phase 1: All foundation tasks in parallel (saves 3 days)
- Phase 2: Backend/Frontend parallel development (saves 1 week)
- Phase 3: All testing in parallel (saves 3 days)
- Phase 4: Documentation parallel with optimization (saves 2 days)

**Total Time Saved**: ~2.5 weeks through parallelization

## Risk Mitigation

### High-Risk Items
1. **Swiss Insurance API Integration**: May require manual fallbacks
2. **Payment Processing**: Stripe compliance in Switzerland
3. **GP Referral System**: Integration complexity with providers
4. **Session Management**: Balancing security with UX

### Mitigation Strategies
1. Early API integration testing with mock data
2. Stripe Swiss entity setup in advance
3. Partner directly with 2-3 GP networks initially
4. Progressive session timeout with warnings

## Success Metrics

### Phase Metrics
- Phase 0: 100% security vulnerabilities fixed
- Phase 1: Foundation 100% complete, all tests passing
- Phase 2: 80% code coverage, all components functional
- Phase 3: 0 critical bugs, 100% compliance
- Phase 4: 95+ Lighthouse, < 3s load time

### Overall Metrics
- Implementation time: 6-8 weeks (vs 12 weeks sequential)
- Test coverage: > 80%
- Security score: A+ 
- Accessibility: WCAG AA compliant
- Performance: Core Web Vitals green

## Handoff Points

### Phase Transitions
1. **Phase 0 → 1**: Security assessment report
2. **Phase 1 → 2**: Database schema, auth system, component library
3. **Phase 2 → 3**: Functional application, API documentation
4. **Phase 3 → 4**: Test reports, compliance certificates
5. **Phase 4 → Production**: Deployment package, monitoring setup

### Documentation Deliverables
- Technical architecture document
- API reference documentation
- User guide and help documentation
- Compliance and audit reports
- Deployment and operations guide

## Continuous Activities

Throughout all phases:
- **Daily**: Code reviews, security scanning
- **Weekly**: Progress reviews, risk assessment
- **Per Phase**: Stakeholder demos, feedback incorporation
- **Continuous**: Documentation updates, knowledge graph updates