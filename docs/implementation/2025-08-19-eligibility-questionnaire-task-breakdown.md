# Eligibility Questionnaire System - Detailed Task Breakdown
**Version:** 1.0  
**Date:** 2025-08-19  
**Status:** DRAFT  
**Purpose:** Detailed implementation tasks with technical specifications

## Phase 0: Emergency Security Fixes - Detailed Tasks

### T0.1: Implement OTP Rate Limiting (2 days)

**Technical Specification:**
```typescript
// Supabase Edge Function for OTP rate limiting
interface OTPAttempt {
  user_id: string;
  email: string;
  attempts: number;
  window_start: Date;
  blocked_until?: Date;
}

// Rate limiting rules
const RATE_LIMITS = {
  MAX_ATTEMPTS_PER_HOUR: 3,
  MAX_ATTEMPTS_PER_DAY: 10,
  BLOCK_DURATION_MINUTES: 60,
  WINDOW_SIZE_MINUTES: 60
};
```

**Implementation Steps:**
1. Create `otp_attempts` table in Supabase
2. Implement rate limiting middleware
3. Add Redis cache for performance
4. Create monitoring alerts
5. Test with automated scripts

**Acceptance Criteria:**
- [ ] Users limited to 3 OTP attempts per hour
- [ ] Automatic blocking after threshold exceeded
- [ ] Clear error messages to users
- [ ] Admin dashboard shows blocked users
- [ ] Metrics tracked in analytics

### T0.2: Add OTP Expiry (1 day)

**Technical Specification:**
```sql
-- Update OTP table structure
ALTER TABLE auth.otp_codes
ADD COLUMN expires_at TIMESTAMP NOT NULL DEFAULT NOW() + INTERVAL '5 minutes',
ADD COLUMN used_at TIMESTAMP,
ADD COLUMN is_valid BOOLEAN DEFAULT TRUE;

-- Create cleanup job
CREATE OR REPLACE FUNCTION cleanup_expired_otps()
RETURNS void AS $$
BEGIN
  DELETE FROM auth.otp_codes
  WHERE expires_at < NOW() OR used_at IS NOT NULL;
END;
$$ LANGUAGE plpgsql;
```

**Implementation Steps:**
1. Update database schema
2. Modify OTP generation logic
3. Add expiry validation
4. Create cleanup cron job
5. Update error messages

### T0.3: Implement Brute Force Protection (2 days)

**Technical Specification:**
```typescript
// IP-based protection service
class BruteForceProtection {
  private readonly ipAttempts = new Map<string, AttemptRecord>();
  
  async checkIP(ip: string): Promise<boolean> {
    const record = this.ipAttempts.get(ip);
    
    if (record && record.isBlocked()) {
      await this.logSuspiciousActivity(ip);
      return false;
    }
    
    if (record && record.attempts > THRESHOLDS.SUSPICIOUS) {
      await this.triggerSecurityAlert(ip);
    }
    
    return true;
  }
  
  async recordFailedAttempt(ip: string, userId?: string): Promise<void> {
    // Implementation
  }
}
```

**Implementation Steps:**
1. Implement IP tracking service
2. Create suspicious activity database
3. Add Cloudflare/AWS WAF rules
4. Implement CAPTCHA after 3 failures
5. Create security dashboard

### T0.4: Add IP-based Blocking (2 days)

**Technical Specification:**
```yaml
# Cloudflare WAF Rules
rules:
  - name: "Block Suspicious IPs"
    expression: |
      (ip.src in $suspicious_ips) or
      (rate.limit > 100 and http.request.uri.path contains "/api/auth")
    action: block
    
  - name: "Geographic Restrictions"
    expression: |
      (ip.geoip.country not in {"CH" "DE" "FR" "IT" "AT"})
      and (http.request.uri.path contains "/api/eligibility")
    action: challenge
```

**Implementation Steps:**
1. Configure WAF rules
2. Implement IP reputation checking
3. Add geographic restrictions
4. Create allowlist/blocklist management
5. Set up real-time alerts

### T0.5: Implement Secure Session Management (2 days)

**Technical Specification:**
```typescript
// JWT with refresh token rotation
interface SessionConfig {
  accessTokenTTL: 15 * 60; // 15 minutes
  refreshTokenTTL: 7 * 24 * 60 * 60; // 7 days
  sessionTimeout: 30 * 60; // 30 minutes idle
  rotateRefreshToken: true;
  enforceOneSessionPerUser: false;
}

// Session security headers
const SECURITY_HEADERS = {
  'Strict-Transport-Security': 'max-age=31536000; includeSubDomains',
  'X-Frame-Options': 'DENY',
  'X-Content-Type-Options': 'nosniff',
  'X-XSS-Protection': '1; mode=block',
  'Content-Security-Policy': "default-src 'self'"
};
```

**Implementation Steps:**
1. Implement JWT with refresh tokens
2. Add session fingerprinting
3. Implement idle timeout
4. Add concurrent session management
5. Configure security headers

## Phase 1: Regulatory Compliance - Detailed Tasks

### T1.2: Prepare Technical Documentation (3 weeks)

**Required Documents:**
```markdown
1. Software Requirements Specification (SRS)
   - Functional requirements
   - Performance requirements
   - Interface requirements
   - Safety requirements
   
2. Software Design Specification (SDS)
   - Architecture overview
   - Component design
   - Database design
   - Security design
   
3. Software Verification and Validation Plan
   - Test strategy
   - Test cases
   - Validation protocols
   - Clinical validation
   
4. Risk Analysis (ISO 14971)
   - Hazard identification
   - Risk evaluation
   - Risk control measures
   - Residual risk assessment
```

**Documentation Structure:**
```
/docs/regulatory/
├── technical-file/
│   ├── SRS-v1.0.md
│   ├── SDS-v1.0.md
│   ├── V&V-Plan-v1.0.md
│   └── risk-analysis/
├── clinical-evaluation/
│   ├── clinical-evaluation-report.md
│   ├── literature-review.md
│   └── clinical-data.xlsx
├── quality-management/
│   ├── QMS-manual.md
│   ├── SOPs/
│   └── work-instructions/
└── submission/
    ├── cover-letter.md
    ├── device-description.md
    └── declaration-conformity.md
```

### T1.3: Clinical Evaluation Report (4 weeks)

**Clinical Validation Requirements:**
```typescript
interface ClinicalValidation {
  // Sensitivity and Specificity
  sensitivity: number; // Target > 95%
  specificity: number; // Target > 90%
  
  // Validation cohort
  sampleSize: 500; // Minimum patients
  demographics: {
    ageRange: [18, 85];
    genderDistribution: 'balanced';
    riskFactors: string[];
  };
  
  // Comparison with gold standard
  goldStandard: 'Cardiologist assessment';
  concordanceRate: number; // Target > 90%
}
```

**Validation Protocol:**
1. Recruit 500 patients across risk categories
2. Complete questionnaire + cardiologist assessment
3. Calculate sensitivity/specificity
4. Document edge cases
5. Prepare clinical evidence dossier

### T1.7: Medical Professional Review Process (2 weeks)

**Review Workflow Design:**
```typescript
interface MedicalReviewProcess {
  triggers: {
    highRiskScore: boolean;
    redFlags: string[];
    uncertainResults: boolean;
    patientRequest: boolean;
  };
  
  workflow: {
    assignmentLogic: 'round-robin' | 'specialty-based';
    reviewSLA: 24; // hours
    escalationPath: string[];
  };
  
  documentation: {
    reviewNotes: string;
    recommendations: string[];
    followUpRequired: boolean;
  };
}
```

**Implementation Components:**
1. Medical review dashboard
2. Case assignment algorithm
3. Review tracking system
4. Communication templates
5. Quality assurance process

## Phase 2: Payment Infrastructure - Detailed Tasks

### T2.2: Implement Tokenization (2 weeks)

**Tokenization Architecture:**
```typescript
// Stripe/Datatrans integration
class PaymentTokenization {
  async tokenizeCard(cardDetails: CardInput): Promise<Token> {
    // Never touch card data directly
    const token = await stripe.tokens.create({
      card: {
        number: cardDetails.number,
        exp_month: cardDetails.expMonth,
        exp_year: cardDetails.expYear,
        cvc: cardDetails.cvc
      }
    });
    
    // Store only token reference
    await this.saveTokenReference({
      userId: cardDetails.userId,
      tokenId: token.id,
      last4: token.card.last4,
      brand: token.card.brand,
      expiryDate: `${token.card.exp_month}/${token.card.exp_year}`
    });
    
    return token;
  }
}
```

**Security Requirements:**
1. No card data in logs
2. No card data in database
3. PCI-compliant frontend
4. Secure token storage
5. Token expiry handling

### T2.3: Swiss Payment Provider Integration (1 week)

**Datatrans Configuration:**
```json
{
  "merchantId": "{{MERCHANT_ID}}",
  "sign": "{{HMAC_KEY}}",
  "paymentMethods": [
    "VIS", "ECA", "AMX", "DIN", "TWI", "PSC", "PFC"
  ],
  "3DSecure": {
    "enabled": true,
    "required": true,
    "version": "2.0"
  },
  "currencies": ["CHF", "EUR"],
  "language": ["de", "fr", "it", "en"]
}
```

**Integration Steps:**
1. Create Datatrans merchant account
2. Configure payment methods
3. Implement webhook handlers
4. Add 3D Secure flow
5. Test with sandbox

### T2.7: Insurance Billing Integration (3 weeks)

**Swiss Insurance API Structure:**
```typescript
interface InsuranceClaim {
  patient: {
    insuranceNumber: string;
    dateOfBirth: Date;
    canton: string;
  };
  
  service: {
    tariffCode: string; // TARMED code
    serviceDate: Date;
    provider: {
      GLN: string; // Global Location Number
      ZSR: string; // Zahlstellenregister
    };
  };
  
  billing: {
    amount: number;
    currency: 'CHF';
    invoiceNumber: string;
    dueDate: Date;
  };
}
```

**Insurance Providers to Integrate:**
1. SWICA
2. CSS
3. Helsana
4. Concordia
5. Sanitas

## Phase 3: Technical Architecture - Detailed Tasks

### T3.1: Implement Zustand State Management (2 weeks)

**State Architecture:**
```typescript
// Zustand store structure
interface EligibilityStore {
  // Form state
  currentStep: number;
  formData: Partial<EligibilityData>;
  validationErrors: ValidationError[];
  
  // Session state
  sessionId: string;
  startedAt: Date;
  lastActivity: Date;
  
  // Actions
  updateField: (field: string, value: any) => void;
  validateStep: (step: number) => Promise<boolean>;
  saveProgress: () => Promise<void>;
  submitForm: () => Promise<EligibilityResult>;
  
  // Persistence
  persist: {
    name: 'eligibility-store';
    storage: createJSONStorage(() => sessionStorage);
    partialize: (state) => ({ formData: state.formData });
  };
}
```

**Implementation Components:**
1. Create Zustand stores
2. Add persistence layer
3. Implement validation middleware
4. Add DevTools integration
5. Create testing utilities

### T3.3: Build Comprehensive Audit Trail (3 weeks)

**Audit System Design:**
```sql
-- Audit trail schema
CREATE TABLE audit_log (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  event_type VARCHAR(50) NOT NULL,
  entity_type VARCHAR(50) NOT NULL,
  entity_id UUID NOT NULL,
  user_id UUID,
  session_id UUID,
  ip_address INET,
  user_agent TEXT,
  
  -- Change tracking
  old_value JSONB,
  new_value JSONB,
  changed_fields TEXT[],
  
  -- Medical compliance
  medical_data BOOLEAN DEFAULT FALSE,
  requires_review BOOLEAN DEFAULT FALSE,
  reviewed_by UUID,
  reviewed_at TIMESTAMP,
  
  -- Metadata
  created_at TIMESTAMP NOT NULL DEFAULT NOW(),
  correlation_id UUID,
  
  -- Indexes for performance
  INDEX idx_audit_entity (entity_type, entity_id),
  INDEX idx_audit_user (user_id),
  INDEX idx_audit_medical (medical_data, requires_review),
  INDEX idx_audit_created (created_at DESC)
);

-- Audit trigger function
CREATE OR REPLACE FUNCTION audit_trigger()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO audit_log (
    event_type,
    entity_type,
    entity_id,
    old_value,
    new_value,
    changed_fields,
    medical_data
  ) VALUES (
    TG_OP,
    TG_TABLE_NAME,
    NEW.id,
    to_jsonb(OLD),
    to_jsonb(NEW),
    akeys(hstore(NEW) - hstore(OLD)),
    TRUE
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;
```

**Audit Events to Track:**
1. Form field changes
2. Validation failures
3. Step completion
4. Session events
5. Payment attempts
6. Medical reviews
7. Data exports
8. System errors

### T3.7: Implement Redis Caching (2 weeks)

**Caching Strategy:**
```typescript
// Redis caching configuration
interface CacheConfig {
  layers: {
    session: {
      ttl: 30 * 60; // 30 minutes
      prefix: 'session:';
    };
    eligibility: {
      ttl: 24 * 60 * 60; // 24 hours
      prefix: 'eligibility:';
    };
    reference: {
      ttl: 7 * 24 * 60 * 60; // 7 days
      prefix: 'ref:';
    };
  };
  
  strategies: {
    writeThrough: ['session', 'eligibility'];
    writeBehind: ['analytics'];
    refresh: ['reference'];
  };
}
```

**Cache Implementation:**
1. Set up Redis cluster
2. Implement cache service
3. Add cache warming
4. Monitor hit rates
5. Implement cache invalidation

## Phase 4: Beta Testing - Detailed Tasks

### T4.3: Medical Accuracy Validation (2 weeks)

**Validation Protocol:**
```typescript
interface MedicalValidation {
  validators: {
    cardiologists: 3;
    generalPractitioners: 2;
    nurses: 2;
  };
  
  testCases: {
    lowRisk: 20;
    mediumRisk: 30;
    highRisk: 30;
    edgeCases: 20;
  };
  
  metrics: {
    accuracy: number; // Target > 95%
    falsePositives: number; // Target < 5%
    falseNegatives: number; // Target < 2%
    interRaterReliability: number; // Target > 0.8
  };
}
```

**Validation Steps:**
1. Prepare test cases
2. Medical professional review
3. Compare with gold standard
4. Document discrepancies
5. Adjust algorithms

### T4.5: Conversion Funnel Analysis (2 weeks)

**Analytics Implementation:**
```typescript
// Funnel tracking events
const FUNNEL_EVENTS = {
  'eligibility.started': {
    step: 1,
    properties: ['source', 'campaign', 'device']
  },
  'eligibility.step_completed': {
    step: 2,
    properties: ['stepNumber', 'timeSpent', 'errors']
  },
  'eligibility.abandoned': {
    step: 3,
    properties: ['lastStep', 'reason', 'timeOnPage']
  },
  'eligibility.completed': {
    step: 4,
    properties: ['result', 'totalTime', 'corrections']
  },
  'booking.initiated': {
    step: 5,
    properties: ['eligibilityId', 'timeToConvert']
  }
};
```

**Optimization Targets:**
1. Step 1→2: > 80% (Start to first question)
2. Step 2→3: > 70% (Complete demographics)
3. Step 3→4: > 65% (Complete medical history)
4. Step 4→5: > 60% (Submit form)
5. Step 5→6: > 5% (Book screening)

## Phase 5: Production Deployment - Detailed Tasks

### T5.4: Gradual Rollout Plan (2 weeks)

**Rollout Strategy:**
```typescript
interface RolloutPhase {
  percentage: number;
  criteria: {
    minUsers: number;
    minDays: number;
    maxErrorRate: number;
    minConversion: number;
  };
  rollback: {
    automatic: boolean;
    conditions: string[];
  };
}

const ROLLOUT_PHASES: RolloutPhase[] = [
  {
    percentage: 10,
    criteria: {
      minUsers: 100,
      minDays: 3,
      maxErrorRate: 0.01,
      minConversion: 0.5
    }
  },
  {
    percentage: 25,
    criteria: {
      minUsers: 500,
      minDays: 5,
      maxErrorRate: 0.005,
      minConversion: 0.55
    }
  },
  {
    percentage: 50,
    criteria: {
      minUsers: 2000,
      minDays: 7,
      maxErrorRate: 0.001,
      minConversion: 0.6
    }
  },
  {
    percentage: 100,
    criteria: {
      minUsers: 5000,
      minDays: 14,
      maxErrorRate: 0.001,
      minConversion: 0.6
    }
  }
];
```

### T5.7: Analytics Implementation (1 week)

**Analytics Architecture:**
```typescript
// Multi-layer analytics
class AnalyticsService {
  private providers = {
    mixpanel: new MixpanelClient(),
    ga4: new GoogleAnalytics4(),
    custom: new CustomAnalytics()
  };
  
  async track(event: AnalyticsEvent): Promise<void> {
    // GDPR consent check
    if (!this.hasConsent(event.userId)) {
      return this.trackAnonymous(event);
    }
    
    // Send to all providers
    await Promise.all([
      this.providers.mixpanel.track(event),
      this.providers.ga4.track(event),
      this.providers.custom.track(event)
    ]);
    
    // Store for compliance
    await this.storeForCompliance(event);
  }
}
```

**Key Metrics to Track:**
1. User behavior flow
2. Form field interactions
3. Error occurrences
4. Performance metrics
5. Conversion events
6. Medical review triggers
7. Payment success/failure

## Testing Specifications

### Unit Test Coverage Requirements

```typescript
// Test coverage targets by module
const COVERAGE_TARGETS = {
  'eligibility-form': {
    statements: 95,
    branches: 90,
    functions: 95,
    lines: 95
  },
  'payment-processing': {
    statements: 100,
    branches: 100,
    functions: 100,
    lines: 100
  },
  'medical-validation': {
    statements: 98,
    branches: 95,
    functions: 98,
    lines: 98
  },
  'security-modules': {
    statements: 100,
    branches: 98,
    functions: 100,
    lines: 100
  }
};
```

### Integration Test Scenarios

```typescript
// Critical user journeys to test
const INTEGRATION_TESTS = [
  {
    name: 'Complete eligibility flow',
    steps: [
      'Navigate to questionnaire',
      'Complete all steps',
      'Submit form',
      'Receive result',
      'Book screening'
    ],
    variants: ['insurance', 'self-pay', 'high-risk', 'low-risk']
  },
  {
    name: 'Payment processing',
    steps: [
      'Select payment method',
      'Enter card details',
      'Complete 3D Secure',
      'Process payment',
      'Receive confirmation'
    ],
    variants: ['visa', 'mastercard', 'amex', 'twint']
  },
  {
    name: 'Medical review trigger',
    steps: [
      'Submit high-risk form',
      'Trigger medical review',
      'Assign to physician',
      'Complete review',
      'Notify patient'
    ],
    variants: ['urgent', 'standard', 'complex']
  }
];
```

### Performance Test Specifications

```yaml
# K6 performance test configuration
scenarios:
  baseline:
    executor: 'constant-vus'
    vus: 10
    duration: '10m'
    
  stress:
    executor: 'ramping-vus'
    stages:
      - duration: '5m', target: 100
      - duration: '10m', target: 100
      - duration: '5m', target: 200
      - duration: '10m', target: 200
      - duration: '5m', target: 0
      
  spike:
    executor: 'ramping-vus'
    stages:
      - duration: '1m', target: 100
      - duration: '30s', target: 1000
      - duration: '3m', target: 1000
      - duration: '30s', target: 100
      - duration: '2m', target: 0

thresholds:
  http_req_duration: ['p(95)<2000', 'p(99)<3000']
  http_req_failed: ['rate<0.01']
  http_reqs: ['rate>100']
```

## Monitoring & Alerting Configuration

### Monitoring Stack

```yaml
# Prometheus metrics
metrics:
  - name: eligibility_form_completions
    type: counter
    labels: [result, duration, step_count]
    
  - name: payment_transactions
    type: counter
    labels: [status, method, amount_range]
    
  - name: medical_reviews
    type: histogram
    buckets: [0.5, 1, 2, 4, 8, 16, 32]
    labels: [priority, reviewer, outcome]
    
  - name: api_response_time
    type: histogram
    buckets: [0.01, 0.05, 0.1, 0.25, 0.5, 1, 2.5, 5]
    labels: [endpoint, method, status]
```

### Alert Rules

```yaml
# Critical alerts
alerts:
  - name: SecurityBreach
    expr: security_incidents > 0
    for: 1m
    severity: critical
    action: page_on_call
    
  - name: PaymentFailureRate
    expr: rate(payment_failures[5m]) > 0.1
    for: 5m
    severity: critical
    action: page_payment_team
    
  - name: MedicalReviewBacklog
    expr: pending_medical_reviews > 10
    for: 30m
    severity: warning
    action: notify_medical_team
    
  - name: HighErrorRate
    expr: rate(http_errors[5m]) > 0.05
    for: 5m
    severity: critical
    action: page_on_call
```

## Documentation Requirements

### Technical Documentation

1. **API Documentation** (OpenAPI 3.0)
2. **Database Schema** (ERD + migrations)
3. **Architecture Diagrams** (C4 model)
4. **Security Documentation** (threat model)
5. **Deployment Guide** (step-by-step)
6. **Operational Runbook** (incident response)
7. **Medical Validation** (clinical evidence)
8. **Compliance Package** (GDPR, PCI, Swissmedic)

### User Documentation

1. **Patient User Guide** (4 languages)
2. **Medical Professional Guide**
3. **Support Team Playbook**
4. **FAQ Documentation**
5. **Video Tutorials**
6. **Accessibility Guide**

## Success Criteria Summary

### Phase 0 Success
- [ ] Zero critical security vulnerabilities
- [ ] OTP attack prevention validated
- [ ] Session security hardened
- [ ] Penetration test passed

### Phase 1 Success
- [ ] Swissmedic registration obtained
- [ ] Medical oversight operational
- [ ] GDPR compliance certified
- [ ] ISO 13485 achieved

### Phase 2 Success
- [ ] PCI DSS compliance certified
- [ ] Payment processing live
- [ ] Insurance billing functional
- [ ] Fraud detection active

### Phase 3 Success
- [ ] State management robust
- [ ] Audit trail complete
- [ ] Performance targets met
- [ ] Security enhanced

### Phase 4 Success
- [ ] Medical accuracy validated
- [ ] User satisfaction > 4.0/5
- [ ] Conversion rate > 60%
- [ ] Zero critical bugs

### Phase 5 Success
- [ ] 99.9% uptime achieved
- [ ] All metrics green
- [ ] Smooth rollout completed
- [ ] Team trained

---

**Document Status:** DRAFT  
**Next Review:** 2025-08-26  
**Owner:** Technical Project Manager