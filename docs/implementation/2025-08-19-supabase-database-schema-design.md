# Supabase Database Schema Design for Eligibility Questionnaire

**VERSION:** 1.0  
**CREATED:** 2025-08-19  
**PURPOSE:** Comprehensive database schema documentation for the SKIIN eligibility questionnaire system  
**COMPLIANCE:** Swiss healthcare regulations, GDPR, Supabase best practices  

## Executive Summary

This document outlines the complete Supabase database architecture for the SKIIN Switzerland eligibility questionnaire system. The design addresses all core requirements including anonymous user flow, OTP verification, Swiss insurance integration, payment processing, file uploads, and GDPR compliance.

### Key Features Implemented
- **Anonymous → Authenticated Flow:** Users start anonymously, provide email/phone, verify via OTP, become authenticated
- **Session Resume:** Secure token-based resume functionality across devices
- **Swiss Insurance Integration:** Complete provider/model system with GP referral logic
- **Payment Processing:** Stripe integration with Swiss compliance
- **File Management:** Supabase Storage integration with security policies
- **GDPR Compliance:** Audit logging, data retention, right to deletion
- **Medical Compliance:** Contraindication system with safety alerts

## Architecture Overview

### Database Structure
```
├── User Management
│   ├── user_profiles (extends auth.users)
│   ├── user_insurance
│   └── gdpr_requests
│
├── Session Management  
│   ├── questionnaire_sessions
│   ├── form_submissions
│   └── otp_verifications
│
├── Swiss Healthcare System
│   ├── insurance_providers
│   ├── insurance_models
│   ├── gp_referrals
│   └── contraindications
│
├── Payment System
│   └── payment_transactions
│
├── File Management
│   └── user_documents
│
└── Compliance & Audit
    ├── audit_logs
    └── data_retention_policies
```

### Core User Journey Flow
1. **Anonymous Session Creation** → Session token generated, 30-day expiry
2. **Form Progression** → Stage-by-stage persistence (0-4 stages)
3. **OTP Verification** → Email/phone verification with rate limiting
4. **User Account Creation** → Automatic profile creation post-verification
5. **Insurance Check** → Swiss provider validation or self-pay flow
6. **Payment Processing** → Stripe integration for self-pay users
7. **Document Upload** → Medical records via Supabase Storage
8. **GP Referral** → Automated referral letter generation

## Database Tables

### Core Tables

#### `user_profiles` - Extended User Data
Extends Supabase's built-in `auth.users` table with healthcare-specific information.

```sql
CREATE TABLE public.user_profiles (
    id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
    email TEXT,
    phone TEXT,
    first_name TEXT,
    last_name TEXT,
    date_of_birth DATE,
    gender TEXT CHECK (gender IN ('male', 'female', 'other', 'prefer_not_to_say')),
    
    -- Swiss address fields
    street_address TEXT,
    city TEXT,
    postal_code TEXT,
    canton TEXT CHECK (canton IN ('AG', 'AI', 'AR', 'BE', 'BL', 'BS', 'FR', 'GE', 'GL', 'GR', 'JU', 'LU', 'NE', 'NW', 'OW', 'SG', 'SH', 'SO', 'SZ', 'TG', 'TI', 'UR', 'VD', 'VS', 'ZG', 'ZH')),
    country TEXT DEFAULT 'CH',
    
    language_preference TEXT DEFAULT 'de' CHECK (language_preference IN ('de', 'fr', 'it', 'en')),
    marketing_consent BOOLEAN DEFAULT FALSE,
    data_processing_consent BOOLEAN NOT NULL DEFAULT TRUE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

**Key Features:**
- Swiss canton validation (all 26 cantons)
- Multi-language support (German, French, Italian, English)
- GDPR consent tracking
- Automatic timestamps

#### `questionnaire_sessions` - Session Management
Central table managing user sessions from anonymous through completion.

```sql
CREATE TABLE public.questionnaire_sessions (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES public.user_profiles(id) ON DELETE CASCADE, -- NULL for anonymous
    email TEXT, -- For anonymous users
    phone TEXT,
    
    session_token UUID DEFAULT uuid_generate_v4(), -- Resume functionality
    current_stage INTEGER DEFAULT 0 CHECK (current_stage >= 0 AND current_stage <= 4),
    stage_completion_status BOOLEAN[] DEFAULT ARRAY[false, false, false, false, false],
    
    email_verified BOOLEAN DEFAULT FALSE,
    phone_verified BOOLEAN DEFAULT FALSE,
    
    -- Analytics & tracking
    ip_address INET,
    user_agent TEXT,
    referrer TEXT,
    utm_source TEXT,
    utm_medium TEXT,
    utm_campaign TEXT,
    
    status TEXT DEFAULT 'in_progress' CHECK (status IN ('in_progress', 'completed', 'abandoned', 'expired')),
    expires_at TIMESTAMP WITH TIME ZONE DEFAULT (NOW() + INTERVAL '30 days'),
    
    started_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    last_activity TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    completed_at TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

**Key Features:**
- Anonymous user support (user_id can be NULL)
- Secure session tokens for resume functionality
- Stage-by-stage completion tracking
- UTM parameter tracking for analytics
- 30-day automatic expiry

#### `form_submissions` - Stage Data Storage
Stores form data for each stage with encryption support for sensitive medical data.

```sql
CREATE TABLE public.form_submissions (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    session_id UUID REFERENCES public.questionnaire_sessions(id) ON DELETE CASCADE,
    stage_number INTEGER NOT NULL CHECK (stage_number >= 0 AND stage_number <= 4),
    
    form_data JSONB NOT NULL, -- General form data
    encrypted_medical_data TEXT, -- pgp_sym_encrypt() for sensitive data
    encryption_key_hint TEXT,
    
    is_valid BOOLEAN DEFAULT TRUE,
    validation_errors JSONB,
    
    submitted_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    
    UNIQUE(session_id, stage_number) -- One submission per stage per session
);
```

**Key Features:**
- JSONB for flexible form data storage
- Encrypted storage for sensitive medical information
- Validation error tracking
- Unique constraint prevents duplicate stage submissions

### Swiss Healthcare System Tables

#### `insurance_providers` - Swiss Insurance Companies
Reference data for all major Swiss health insurance providers.

```sql
CREATE TABLE public.insurance_providers (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name TEXT NOT NULL, -- "CSS Versicherung", "Helsana", etc.
    short_name TEXT NOT NULL, -- "CSS", "HELS", "SWIC"
    is_active BOOLEAN DEFAULT TRUE,
    contact_info JSONB, -- {"website": "css.ch", "phone": "058 277 11 11"}
    regions TEXT[], -- Cantons where active: ['AG', 'BL', 'BS']
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

**Populated with:** CSS, Helsana, SWICA, Concordia, Groupe Mutuel, KPT, Sanitas, Sympany, Visana

#### `insurance_models` - Insurance Model Types
Different insurance models offered by providers (Standard, HMO, Hausarzt, etc.).

```sql
CREATE TABLE public.insurance_models (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    provider_id UUID REFERENCES public.insurance_providers(id) ON DELETE CASCADE,
    model_type TEXT NOT NULL CHECK (model_type IN ('standard', 'flex', 'hmo', 'hausarzt', 'telmed')),
    model_name TEXT NOT NULL, -- "HMO Modell", "Hausarzt Modell"
    description TEXT,
    requires_gp_referral BOOLEAN NOT NULL DEFAULT FALSE,
    deductible_options INTEGER[], -- [300, 500, 1000, 1500, 2000, 2500]
    coverage_percentage DECIMAL(3,2) DEFAULT 0.90,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

**Key Features:**
- Links to insurance providers
- GP referral requirement tracking
- Standard Swiss deductible amounts
- Coverage percentage for calculations

#### `contraindications` - Medical Safety System
Conditions that may prevent or require special handling for ECG monitoring.

```sql
CREATE TABLE public.contraindications (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    condition_name TEXT NOT NULL,
    severity TEXT NOT NULL CHECK (severity IN ('absolute', 'relative', 'caution')),
    description TEXT,
    alert_message TEXT, -- Message shown to user
    requires_gp_clearance BOOLEAN DEFAULT FALSE,
    is_active BOOLEAN DEFAULT TRUE
);
```

**Pre-populated conditions:**
- Active Pacemaker (absolute)
- Pregnancy (relative)
- Recent Heart Surgery (relative)
- Severe Skin Conditions (caution)
- Age Under 18 (absolute)
- Age Over 85 (relative)

### Payment & Transaction System

#### `payment_transactions` - Stripe Integration
Tracks all payment transactions with full Stripe integration.

```sql
CREATE TABLE public.payment_transactions (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    session_id UUID REFERENCES public.questionnaire_sessions(id) ON DELETE CASCADE,
    user_id UUID REFERENCES public.user_profiles(id) ON DELETE CASCADE,
    
    -- Stripe integration fields
    stripe_payment_intent_id TEXT UNIQUE,
    stripe_customer_id TEXT,
    stripe_payment_method_id TEXT,
    
    -- Payment details
    amount_cents INTEGER NOT NULL, -- Swiss Rappen (1 CHF = 100 Rappen)
    currency TEXT DEFAULT 'CHF',
    payment_type TEXT NOT NULL CHECK (payment_type IN ('self_pay', 'insurance_copay', 'deductible')),
    
    package_type TEXT NOT NULL CHECK (package_type IN ('3_day', '5_day', '10_day')),
    package_price_cents INTEGER NOT NULL,
    
    status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'processing', 'succeeded', 'failed', 'canceled', 'refunded')),
    failure_reason TEXT,
    
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    paid_at TIMESTAMP WITH TIME ZONE,
    refunded_at TIMESTAMP WITH TIME ZONE
);
```

**Pricing Structure:**
- 3-day package: 120.00 CHF (12000 Rappen)
- 5-day package: 150.00 CHF (15000 Rappen)
- 10-day package: 180.00 CHF (18000 Rappen)

### File Management System

#### `user_documents` - Document Storage
Tracks files uploaded to Supabase Storage with metadata and access controls.

```sql
CREATE TABLE public.user_documents (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    session_id UUID REFERENCES public.questionnaire_sessions(id) ON DELETE CASCADE,
    user_id UUID REFERENCES public.user_profiles(id) ON DELETE CASCADE,
    
    document_type TEXT NOT NULL CHECK (document_type IN ('ecg_report', 'gp_referral', 'insurance_card', 'id_document', 'medical_report', 'other')),
    file_name TEXT NOT NULL,
    file_size INTEGER,
    mime_type TEXT,
    
    -- Supabase Storage integration
    bucket_name TEXT DEFAULT 'user-documents',
    file_path TEXT NOT NULL, -- Path in Supabase Storage
    
    upload_status TEXT DEFAULT 'uploaded' CHECK (upload_status IN ('uploading', 'uploaded', 'processing', 'processed', 'failed')),
    processing_result JSONB, -- OCR results, validation, etc.
    
    -- Access control
    is_encrypted BOOLEAN DEFAULT TRUE,
    access_level TEXT DEFAULT 'private' CHECK (access_level IN ('private', 'shared_with_gp', 'shared_with_provider')),
    
    -- GDPR compliance
    retention_until TIMESTAMP WITH TIME ZONE DEFAULT (NOW() + INTERVAL '7 years'),
    deletion_requested BOOLEAN DEFAULT FALSE,
    deleted_at TIMESTAMP WITH TIME ZONE,
    
    uploaded_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    processed_at TIMESTAMP WITH TIME ZONE
);
```

**Storage Buckets:**
- `user-documents`: Private, 10MB limit, medical file types
- `gp-referrals`: Private, 5MB limit, PDF only
- `temp-uploads`: Processing, 20MB limit, auto-cleanup 24h
- `public-assets`: Public, 2MB limit, generated documents

## Row Level Security (RLS) Policies

### Security Principles
1. **Users can only access their own data**
2. **Anonymous users have limited session-based access**
3. **Healthcare providers can access shared documents**
4. **Admins have full access with audit logging**
5. **Reference data is publicly readable**

### Key Policies

#### User Profile Security
```sql
-- Users can only view/update their own profile
CREATE POLICY "Users can view own profile" ON public.user_profiles
    FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Users can update own profile" ON public.user_profiles
    FOR UPDATE USING (auth.uid() = id);
```

#### Session-Based Access (for anonymous users)
```sql
-- Anonymous users can access sessions via email or token
CREATE POLICY "Users can view own sessions" ON public.questionnaire_sessions
    FOR SELECT USING (
        auth.uid() = user_id OR 
        (user_id IS NULL AND auth.jwt() ->> 'email' = email)
    );
```

#### Healthcare Provider Access
```sql
-- GPs can view documents shared with them
CREATE POLICY "Healthcare providers can view shared documents" ON public.user_documents
    FOR SELECT USING (
        access_level IN ('shared_with_gp', 'shared_with_provider') AND
        (auth.jwt() -> 'user_metadata' ->> 'role')::text = 'healthcare_provider'
    );
```

## Core Functions

### Session Management

#### `create_anonymous_session()`
Creates a new session for anonymous users starting the questionnaire.

**Parameters:**
- `email_input`: Optional email
- `phone_input`: Optional phone
- UTM parameters for tracking

**Returns:**
- `session_id`: UUID
- `session_token`: UUID for resume
- `expires_at`: 30 days from creation

#### `resume_session_with_token()`
Resumes an existing session using token and email verification.

**Parameters:**
- `token_input`: Session token
- `email_input`: Email verification

**Security:** Validates token, email match, and session not expired

### OTP Verification System

#### `send_email_otp()`
Generates and sends OTP to email with comprehensive rate limiting.

**Rate Limits:**
- 1 minute between requests
- 5 OTPs per email per day
- 3 attempts per OTP (10-minute expiry)

**Security Features:**
- Email format validation
- Hashed OTP storage
- IP and User-Agent logging

#### `verify_otp()`
Validates OTP code and creates user account if verification successful.

**Process:**
1. Validate session and OTP format
2. Check attempts and expiry
3. Verify hashed OTP
4. Create user profile if email verified
5. Link session to authenticated user

### Payment Processing

#### `create_payment_intent()`
Creates Stripe payment intent for self-pay users.

**Swiss Compliance:**
- CHF currency only
- Amount validation (50-500 CHF)
- Consumer protection disclosures
- Medical service classification

#### `handle_stripe_webhook()`
Processes Stripe webhook events for payment status updates.

**Supported Events:**
- `payment_intent.succeeded`
- `payment_intent.payment_failed`
- `payment_intent.canceled`

## Storage Configuration

### Bucket Structure
```
user-documents/       # Private, encrypted user files
├── {user_id}/
│   ├── ecg_reports/
│   ├── referrals/
│   └── insurance/

gp-referrals/        # Generated referral documents
├── {user_id}/
│   ├── referral_letter.pdf
│   └── patient_summary.pdf

temp-uploads/        # Processing area (24h auto-cleanup)
└── {user_id}/
    └── processing/
```

### Storage Policies
- Users can only access their own folder
- Healthcare providers can access shared documents
- System can manage all buckets via service role
- File type and size validation enforced

## GDPR Compliance

### Data Retention
- **Medical data**: 7 years (Swiss requirement)
- **Audit logs**: 10 years (compliance)
- **Session data**: 2 years (anonymized)
- **OTP records**: 30 days (hard delete)

### Right to Deletion
- `gdpr_requests` table tracks data subject requests
- `delete_user_files()` function removes all user data
- Audit trail maintained for deleted records

### Data Export
- `list_user_files()` provides complete file inventory
- Form data export via API endpoints
- Structured JSON format for portability

## Performance Optimization

### Critical Indexes
```sql
-- Session management
CREATE INDEX idx_questionnaire_sessions_token ON questionnaire_sessions(session_token);
CREATE INDEX idx_questionnaire_sessions_email ON questionnaire_sessions(email);

-- RLS policy performance
CREATE INDEX idx_user_profiles_id ON user_profiles(id);
CREATE INDEX idx_form_submissions_session_id ON form_submissions(session_id);

-- Audit performance
CREATE INDEX idx_audit_logs_user_id_timestamp ON audit_logs(user_id, timestamp);
```

### Query Optimization
- Partial indexes on active records
- JSONB GIN indexes for form data searches
- Foreign key indexes for join performance

## Migration Strategy

### Migration Files
1. `001_initial_schema.sql` - Core tables and reference data
2. `002_rls_policies.sql` - Security policies and audit system
3. `003_functions_and_storage.sql` - Business logic and file management

### Deployment Process
1. **Development**: Apply migrations to local Supabase
2. **Staging**: Test with sample data
3. **Production**: Apply with transaction safety
4. **Rollback**: Each migration includes rollback procedures

### Version Control
- Migration history tracked in `migration_history` table
- Each migration checks if already applied
- Idempotent operations where possible

## Security Considerations

### Data Protection
- All sensitive data encrypted at rest
- TLS encryption for data in transit
- Hashed OTP storage (never plain text)
- IP address logging for security monitoring

### Access Control
- RLS policies on all tables
- Role-based access (admin, healthcare_provider)
- Session token validation
- JWT claim verification

### Audit Trail
- All data changes logged
- User action tracking
- Security event monitoring
- GDPR compliance logging

## Backup & Disaster Recovery

### Backup Strategy
- Automated daily backups via Supabase
- Point-in-time recovery capability
- Cross-region replication for HA
- Medical data retention compliance

### Disaster Recovery
- RTO: 4 hours (business hours)
- RPO: 1 hour (data loss tolerance)
- Automated failover procedures
- Regular disaster recovery testing

## Monitoring & Alerting

### Health Checks
- Database connection monitoring
- Query performance metrics
- Storage usage tracking
- Function execution monitoring

### Security Alerts
- Failed authentication attempts
- Suspicious OTP activity
- Unusual payment patterns
- GDPR request monitoring

### Performance Metrics
- Average session duration
- Conversion funnel tracking
- Payment success rates
- File upload performance

## Conclusion

This Supabase database schema provides a robust, secure, and scalable foundation for the SKIIN eligibility questionnaire system. The design balances user experience, security, compliance, and operational requirements while maintaining the flexibility to evolve with changing business needs.

### Key Strengths
- **Swiss Healthcare Compliance**: Complete insurance system integration
- **GDPR Compliance**: Comprehensive audit and deletion capabilities
- **Security**: Multi-layered RLS policies and encryption
- **Scalability**: Efficient indexing and query optimization
- **Maintainability**: Clear migration strategy and documentation

### Next Steps
1. Deploy to staging environment
2. Integration testing with frontend
3. Load testing with realistic data volumes
4. Security penetration testing
5. Compliance audit and certification

---

**Document Status:** FINAL  
**Last Updated:** 2025-08-19  
**Next Review:** 2025-09-19  
**Stakeholders:** Database & Supabase Agent, Backend Developer, Guardrails Agent