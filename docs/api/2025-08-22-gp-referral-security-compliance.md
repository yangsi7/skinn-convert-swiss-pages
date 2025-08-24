# GP Referral System - Security & Compliance Specification
VERSION: 1.0
CREATED: 2025-08-22
PURPOSE: Comprehensive security and compliance requirements for Swiss GP referral system

## 1. Swiss Healthcare Regulatory Framework

### Legal Requirements Compliance

#### 1.1 Medical Confidentiality (Article 321 StGB)
- **Patient Data Protection**: All patient data encrypted at rest and in transit
- **Access Control**: Strict role-based access control with doctor verification
- **Audit Trail**: Complete logging of all data access and modifications
- **Data Retention**: Automatic deletion after legal retention periods

#### 1.2 Federal Data Protection Act (FADP)
- **Lawful Basis**: Patient consent required for data processing
- **Purpose Limitation**: Data used only for referral purposes
- **Data Minimization**: Only necessary data collected and shared
- **Right to Erasure**: Patients can request data deletion

#### 1.3 Swiss Health Insurance Law (KVG)
- **Insurance Provider Integration**: Secure API connections with Swiss insurers
- **Coverage Verification**: Real-time validation of insurance coverage
- **Billing Transparency**: Clear documentation of costs and coverage

#### 1.4 Swiss Medical Professional Requirements
- **HIN Integration**: Support for Swiss Health Info Network credentials
- **Professional Verification**: Doctor identity validation before access
- **Practice Registration**: Verification of medical practice credentials

## 2. Critical Security Requirements (P0 Fixes)

### 2.1 OTP Security Enhancement
```typescript
// BEFORE: Insecure OTP handling
class InsecureOTPService {
  generateOTP(): string {
    return Math.floor(100000 + Math.random() * 900000).toString(); // Plain text storage
  }
  
  validateOTP(provided: string, stored: string): boolean {
    return provided === stored; // No rate limiting, plain comparison
  }
}

// AFTER: Secure OTP implementation
class SecureOTPService {
  private static readonly OTP_EXPIRY_MINUTES = 10;
  private static readonly MAX_ATTEMPTS = 5;
  private static readonly LOCKOUT_DURATION_MINUTES = 15;
  
  async generateOTP(identifier: string): Promise<{success: boolean, error?: string}> {
    // Check rate limiting
    const rateLimitKey = `otp_generation:${identifier}`;
    const attempts = await this.redis.get(rateLimitKey);
    
    if (attempts && parseInt(attempts) >= 3) {
      return {
        success: false,
        error: 'Too many OTP requests. Try again in 15 minutes.'
      };
    }
    
    // Generate cryptographically secure OTP
    const otp = crypto.randomInt(100000, 999999).toString();
    const otpHash = await bcrypt.hash(otp, 12);
    
    // Store hashed OTP with expiration
    await this.supabase.from('otp_codes').insert({
      identifier,
      otp_hash: otpHash,
      attempts_remaining: this.MAX_ATTEMPTS,
      expires_at: new Date(Date.now() + this.OTP_EXPIRY_MINUTES * 60000),
      created_at: new Date()
    });
    
    // Update rate limiting
    await this.redis.setex(rateLimitKey, 15 * 60, (parseInt(attempts || '0') + 1).toString());
    
    // Send OTP (implementation depends on delivery method)
    await this.sendOTP(identifier, otp);
    
    return { success: true };
  }
  
  async validateOTP(identifier: string, providedOTP: string, clientIP: string): Promise<{
    success: boolean,
    userId?: string,
    error?: string,
    remainingAttempts?: number
  }> {
    // Fetch OTP record
    const { data: otpRecord } = await this.supabase
      .from('otp_codes')
      .select('*')
      .eq('identifier', identifier)
      .eq('used', false)
      .gte('expires_at', new Date().toISOString())
      .single();
    
    if (!otpRecord) {
      await this.logSecurityEvent('OTP_NOT_FOUND', { identifier, clientIP });
      return { success: false, error: 'Invalid or expired OTP' };
    }
    
    // Check attempts remaining
    if (otpRecord.attempts_remaining <= 0) {
      await this.logSecurityEvent('OTP_MAX_ATTEMPTS', { identifier, clientIP });
      return { success: false, error: 'Maximum attempts exceeded' };
    }
    
    // Validate OTP with bcrypt
    const isValid = await bcrypt.compare(providedOTP, otpRecord.otp_hash);
    
    if (!isValid) {
      // Decrement attempts
      await this.supabase
        .from('otp_codes')
        .update({
          attempts_remaining: otpRecord.attempts_remaining - 1,
          last_attempt_at: new Date(),
          last_attempt_ip: clientIP
        })
        .eq('id', otpRecord.id);
      
      await this.logSecurityEvent('OTP_INVALID', { identifier, clientIP });
      
      return {
        success: false,
        error: 'Invalid OTP',
        remainingAttempts: otpRecord.attempts_remaining - 1
      };
    }
    
    // Mark OTP as used
    await this.supabase
      .from('otp_codes')
      .update({
        used: true,
        used_at: new Date(),
        used_ip: clientIP
      })
      .eq('id', otpRecord.id);
    
    await this.logSecurityEvent('OTP_SUCCESS', { identifier, clientIP });
    
    return { success: true, userId: otpRecord.user_id };
  }
  
  private async logSecurityEvent(event: string, data: any): Promise<void> {
    await this.supabase.from('security_audit_log').insert({
      event_type: event,
      event_data: data,
      timestamp: new Date(),
      severity: this.getEventSeverity(event)
    });
  }
  
  private getEventSeverity(event: string): 'low' | 'medium' | 'high' | 'critical' {
    const severityMap = {
      'OTP_SUCCESS': 'low',
      'OTP_INVALID': 'medium',
      'OTP_NOT_FOUND': 'medium',
      'OTP_MAX_ATTEMPTS': 'high'
    };
    return severityMap[event] || 'medium';
  }
}
```

### 2.2 PCI DSS Compliance for Payment Forms
```typescript
// Secure payment form implementation
class PCIDSSCompliantPaymentService {
  private stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: '2023-10-16'
  });
  
  async createPaymentIntent(amount: number, currency: string = 'CHF', metadata: any): Promise<{
    clientSecret: string,
    paymentIntentId: string
  }> {
    try {
      // Create payment intent with PCI DSS compliance
      const paymentIntent = await this.stripe.paymentIntents.create({
        amount: Math.round(amount * 100), // Convert to cents
        currency: currency.toLowerCase(),
        metadata: {
          ...metadata,
          compliance: 'PCI_DSS_Level_1',
          swiss_vat: 'included'
        },
        // Enable 3D Secure authentication
        payment_method_options: {
          card: {
            request_three_d_secure: 'automatic'
          }
        },
        // Capture method
        capture_method: 'automatic',
        confirmation_method: 'manual'
      });
      
      return {
        clientSecret: paymentIntent.client_secret!,
        paymentIntentId: paymentIntent.id
      };
    } catch (error) {
      await this.logSecurityEvent('PAYMENT_INTENT_CREATION_FAILED', {
        error: error.message,
        amount,
        currency
      });
      throw error;
    }
  }
  
  // Secure card validation messaging
  getCardValidationMessages(): Record<string, string> {
    return {
      incomplete_number: 'Your card number is incomplete.',
      invalid_number: 'Your card number is invalid.',
      incomplete_cvc: 'Your card\'s security code is incomplete.',
      invalid_cvc: 'Your card\'s security code is invalid.',
      incomplete_expiry: 'Your card\'s expiration date is incomplete.',
      invalid_expiry: 'Your card\'s expiration date is invalid.',
      card_declined: 'Your card was declined.',
      processing_error: 'An error occurred while processing your card.'
    };
  }
  
  // PCI DSS compliant logging (no sensitive data)
  private async logPaymentEvent(event: string, data: any): Promise<void> {
    const sanitizedData = {
      ...data,
      // Remove sensitive fields
      card_number: '[REDACTED]',
      cvc: '[REDACTED]',
      exp_month: '[REDACTED]',
      exp_year: '[REDACTED]'
    };
    
    await this.supabase.from('payment_audit_log').insert({
      event_type: event,
      event_data: sanitizedData,
      timestamp: new Date(),
      compliance_level: 'PCI_DSS_L1'
    });
  }
}
```

### 2.3 Component Refactoring (≤50 Lines Rule)
```typescript
// BEFORE: Monolithic 851-line EligibilityChecker component
// AFTER: Atomic components following S&W Design principles

// 1. Main form orchestrator (≤50 lines)
export const EligibilityForm: React.FC = () => {
  const { currentStep, formData, nextStep, previousStep } = useEligibilityFlow();
  
  return (
    <FormProvider value={{ formData, nextStep, previousStep }}>
      <div className="max-w-2xl mx-auto p-6">
        <ProgressIndicator currentStep={currentStep} totalSteps={5} />
        <StepRenderer step={currentStep} />
        <NavigationButtons 
          canGoBack={currentStep > 0}
          canGoNext={isStepValid(currentStep, formData)}
          onBack={previousStep}
          onNext={nextStep}
        />
      </div>
    </FormProvider>
  );
};

// 2. Step renderer (≤50 lines)
const StepRenderer: React.FC<{ step: number }> = ({ step }) => {
  const steps = [
    ContactStep,
    EligibilityGateStep,
    DetailedInfoStep,
    ReviewStep,
    CompletionStep
  ];
  
  const CurrentStepComponent = steps[step];
  return <CurrentStepComponent />;
};

// 3. Individual step components (each ≤50 lines)
const ContactStep: React.FC = () => {
  const { formData, updateFormData } = useFormContext();
  const [otpSent, setOtpSent] = useState(false);
  
  const handleSendOTP = async (contactMethod: 'email' | 'phone') => {
    try {
      await authService.sendOTP(formData[contactMethod]);
      setOtpSent(true);
    } catch (error) {
      toast.error('Failed to send verification code');
    }
  };
  
  return (
    <Card className="space-y-6">
      <CardHeader>
        <h2 className="text-xl font-semibold">Contact Information</h2>
      </CardHeader>
      <CardContent>
        <ContactMethodSelector 
          selectedMethod={formData.contactMethod}
          onMethodChange={(method) => updateFormData({ contactMethod: method })}
        />
        {!otpSent ? (
          <ContactForm onSubmit={handleSendOTP} />
        ) : (
          <OTPVerificationForm 
            contactMethod={formData.contactMethod}
            contactValue={formData[formData.contactMethod]}
            onVerified={() => updateFormData({ verified: true })}
          />
        )}
      </CardContent>
    </Card>
  );
};

// 4. Reusable UI components (each ≤50 lines)
const ContactMethodSelector: React.FC<{
  selectedMethod: 'email' | 'phone';
  onMethodChange: (method: 'email' | 'phone') => void;
}> = ({ selectedMethod, onMethodChange }) => {
  return (
    <div className="flex space-x-4">
      <button
        type="button"
        onClick={() => onMethodChange('email')}
        className={cn(
          'flex-1 p-4 rounded-lg border transition-colors',
          selectedMethod === 'email' 
            ? 'border-lp-primary-blue bg-lp-primary-blue/10'
            : 'border-gray-300 hover:border-lp-primary-blue'
        )}
      >
        <Mail className="w-5 h-5 mx-auto mb-2" />
        <span className="block text-sm font-medium">Email</span>
      </button>
      <button
        type="button"
        onClick={() => onMethodChange('phone')}
        className={cn(
          'flex-1 p-4 rounded-lg border transition-colors',
          selectedMethod === 'phone'
            ? 'border-lp-primary-blue bg-lp-primary-blue/10'
            : 'border-gray-300 hover:border-lp-primary-blue'
        )}
      >
        <Phone className="w-5 h-5 mx-auto mb-2" />
        <span className="block text-sm font-medium">SMS</span>
      </button>
    </div>
  );
};
```

## 3. Data Encryption and Storage Security

### 3.1 Encryption at Rest and in Transit
```typescript
// Advanced encryption service for medical data
class MedicalDataEncryption {
  private static readonly ALGORITHM = 'aes-256-gcm';
  private static readonly KEY_DERIVATION_ITERATIONS = 100000;
  
  // Encrypt sensitive medical data
  static async encryptMedicalData(data: any, patientId: string): Promise<string> {
    const salt = crypto.randomBytes(32);
    const iv = crypto.randomBytes(16);
    
    // Derive key using PBKDF2
    const key = crypto.pbkdf2Sync(
      process.env.MASTER_ENCRYPTION_KEY!,
      salt,
      this.KEY_DERIVATION_ITERATIONS,
      32,
      'sha256'
    );
    
    const cipher = crypto.createCipher(this.ALGORITHM, key);
    cipher.setAAD(Buffer.from(patientId)); // Additional authenticated data
    
    let encrypted = cipher.update(JSON.stringify(data), 'utf8', 'hex');
    encrypted += cipher.final('hex');
    
    const authTag = cipher.getAuthTag();
    
    // Combine salt + iv + authTag + encrypted data
    const combined = Buffer.concat([
      salt,
      iv,
      authTag,
      Buffer.from(encrypted, 'hex')
    ]);
    
    return combined.toString('base64');
  }
  
  // Decrypt sensitive medical data
  static async decryptMedicalData(encryptedData: string, patientId: string): Promise<any> {
    const combined = Buffer.from(encryptedData, 'base64');
    
    const salt = combined.slice(0, 32);
    const iv = combined.slice(32, 48);
    const authTag = combined.slice(48, 64);
    const encrypted = combined.slice(64);
    
    // Derive same key
    const key = crypto.pbkdf2Sync(
      process.env.MASTER_ENCRYPTION_KEY!,
      salt,
      this.KEY_DERIVATION_ITERATIONS,
      32,
      'sha256'
    );
    
    const decipher = crypto.createDecipher(this.ALGORITHM, key);
    decipher.setAAD(Buffer.from(patientId));
    decipher.setAuthTag(authTag);
    
    let decrypted = decipher.update(encrypted, 'binary', 'utf8');
    decrypted += decipher.final('utf8');
    
    return JSON.parse(decrypted);
  }
}
```

### 3.2 Database Row-Level Security (RLS) Policies
```sql
-- Enhanced RLS policies for medical data protection
CREATE POLICY "gp_referrals_patient_access" ON public.gp_referrals
    FOR SELECT 
    USING (
        auth.uid() = user_id 
        AND status != 'deleted'
        AND expires_at > CURRENT_TIMESTAMP
    );

CREATE POLICY "gp_referrals_doctor_access" ON public.gp_referrals
    FOR SELECT 
    USING (
        -- Doctor can access if they have valid access token
        EXISTS (
            SELECT 1 FROM public.doctor_access_tokens 
            WHERE referral_id = gp_referrals.id 
            AND token_hash = encode(digest(current_setting('request.headers')::json->>'authorization', 'sha256'), 'hex')
            AND expires_at > CURRENT_TIMESTAMP
        )
    );

CREATE POLICY "gp_referrals_service_access" ON public.gp_referrals
    FOR ALL 
    USING (
        -- Service role has full access for system operations
        auth.jwt() ->> 'role' = 'service_role'
    );

-- Audit trail access policy
CREATE POLICY "security_audit_access" ON public.security_audit_log
    FOR SELECT 
    USING (
        auth.jwt() ->> 'role' = 'service_role'
        OR (
            auth.uid()::text = event_data->>'user_id'
            AND event_type NOT IN ('ADMIN_ACCESS', 'SYSTEM_EVENT')
        )
    );
```

## 4. Access Control and Authentication

### 4.1 Role-Based Access Control (RBAC)
```typescript
// Enhanced RBAC system
enum UserRole {
  PATIENT = 'patient',
  DOCTOR = 'doctor',
  ADMIN = 'admin',
  SYSTEM = 'system'
}

interface UserPermissions {
  role: UserRole;
  permissions: Permission[];
  restrictions?: AccessRestriction[];
}

interface Permission {
  resource: string;
  actions: ('create' | 'read' | 'update' | 'delete')[];
  conditions?: PermissionCondition[];
}

interface AccessRestriction {
  type: 'time_based' | 'location_based' | 'device_based';
  parameters: Record<string, any>;
}

class RBACService {
  private static permissions: Record<UserRole, Permission[]> = {
    [UserRole.PATIENT]: [
      {
        resource: 'gp_referrals',
        actions: ['create', 'read'],
        conditions: [{ type: 'owner_only' }]
      },
      {
        resource: 'user_profiles',
        actions: ['read', 'update'],
        conditions: [{ type: 'owner_only' }]
      }
    ],
    [UserRole.DOCTOR]: [
      {
        resource: 'gp_referrals',
        actions: ['read', 'update'],
        conditions: [{ type: 'valid_access_token' }]
      },
      {
        resource: 'doctor_responses',
        actions: ['create', 'read', 'update'],
        conditions: [{ type: 'assigned_referrals_only' }]
      }
    ],
    [UserRole.ADMIN]: [
      {
        resource: '*',
        actions: ['create', 'read', 'update', 'delete'],
        conditions: [{ type: 'audit_logged' }]
      }
    ],
    [UserRole.SYSTEM]: [
      {
        resource: '*',
        actions: ['create', 'read', 'update', 'delete']
      }
    ]
  };
  
  static async checkPermission(
    userId: string,
    resource: string,
    action: string,
    context?: any
  ): Promise<{ allowed: boolean; reason?: string }> {
    try {
      // Get user role and permissions
      const { data: user } = await supabase
        .from('user_profiles')
        .select('role, permissions, restrictions')
        .eq('id', userId)
        .single();
      
      if (!user) {
        return { allowed: false, reason: 'User not found' };
      }
      
      const userPermissions = this.permissions[user.role as UserRole];
      
      // Check if user has permission for this resource and action
      const hasPermission = userPermissions.some(permission => {
        const resourceMatch = permission.resource === '*' || permission.resource === resource;
        const actionMatch = permission.actions.includes(action as any);
        
        if (resourceMatch && actionMatch) {
          // Check conditions if present
          if (permission.conditions) {
            return this.checkConditions(permission.conditions, userId, context);
          }
          return true;
        }
        return false;
      });
      
      if (!hasPermission) {
        await this.logAccessDenied(userId, resource, action, 'Insufficient permissions');
        return { allowed: false, reason: 'Insufficient permissions' };
      }
      
      // Check restrictions
      if (user.restrictions) {
        const restrictionCheck = await this.checkRestrictions(user.restrictions, context);
        if (!restrictionCheck.allowed) {
          await this.logAccessDenied(userId, resource, action, restrictionCheck.reason);
          return restrictionCheck;
        }
      }
      
      return { allowed: true };
    } catch (error) {
      await this.logAccessError(userId, resource, action, error);
      return { allowed: false, reason: 'Access check failed' };
    }
  }
  
  private static checkConditions(conditions: PermissionCondition[], userId: string, context: any): boolean {
    return conditions.every(condition => {
      switch (condition.type) {
        case 'owner_only':
          return context?.ownerId === userId;
        case 'valid_access_token':
          return context?.accessToken && this.validateAccessToken(context.accessToken);
        case 'assigned_referrals_only':
          return this.checkDoctorAssignment(userId, context?.referralId);
        default:
          return false;
      }
    });
  }
}
```

### 4.2 HIN (Swiss Health Info Network) Integration
```typescript
// Swiss HIN verification service
class HINVerificationService {
  private static readonly HIN_API_BASE = 'https://api.hin.ch';
  
  static async verifyHINCredentials(hinNumber: string, email: string): Promise<{
    valid: boolean;
    doctorInfo?: DoctorInfo;
    error?: string;
  }> {
    try {
      // Call HIN API for credential verification
      const response = await fetch(`${this.HIN_API_BASE}/verify`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${process.env.HIN_API_KEY}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          hin_number: hinNumber,
          email: email,
          verification_type: 'medical_professional'
        })
      });
      
      if (!response.ok) {
        throw new Error(`HIN API error: ${response.statusText}`);
      }
      
      const result = await response.json();
      
      if (result.verified) {
        return {
          valid: true,
          doctorInfo: {
            hinNumber: result.hin_number,
            firstName: result.first_name,
            lastName: result.last_name,
            specialties: result.specialties,
            practiceAddress: result.practice_address,
            licenseStatus: result.license_status,
            verifiedAt: new Date()
          }
        };
      } else {
        return {
          valid: false,
          error: result.reason || 'HIN verification failed'
        };
      }
    } catch (error) {
      await this.logHINVerificationError(hinNumber, email, error);
      return {
        valid: false,
        error: 'HIN verification service unavailable'
      };
    }
  }
  
  static async createDoctorProfile(hinNumber: string, doctorInfo: DoctorInfo): Promise<string> {
    const { data: profile, error } = await supabase
      .from('doctor_profiles')
      .insert({
        hin_number: hinNumber,
        email: doctorInfo.email,
        first_name: doctorInfo.firstName,
        last_name: doctorInfo.lastName,
        specialties: doctorInfo.specialties,
        practice_info: doctorInfo.practiceAddress,
        license_status: doctorInfo.licenseStatus,
        hin_verified: true,
        hin_verified_at: new Date(),
        created_at: new Date()
      })
      .select('id')
      .single();
      
    if (error) {
      throw new Error(`Failed to create doctor profile: ${error.message}`);
    }
    
    return profile.id;
  }
}
```

## 5. Audit Trail and Compliance Monitoring

### 5.1 Comprehensive Audit Logging
```typescript
// Enhanced audit service for Swiss compliance
class AuditService {
  static async logEvent(event: AuditEvent): Promise<void> {
    const auditRecord = {
      event_id: crypto.randomUUID(),
      event_type: event.type,
      event_category: event.category,
      user_id: event.userId,
      resource_type: event.resourceType,
      resource_id: event.resourceId,
      action: event.action,
      outcome: event.outcome,
      timestamp: new Date(),
      
      // Technical details
      ip_address: event.ipAddress,
      user_agent: event.userAgent,
      session_id: event.sessionId,
      
      // Swiss compliance fields
      data_classification: event.dataClassification,
      retention_period_years: event.retentionPeriod,
      legal_basis: event.legalBasis,
      
      // Event-specific data (sanitized)
      event_data: this.sanitizeEventData(event.data),
      
      // Security context
      risk_score: await this.calculateRiskScore(event),
      anomaly_detected: await this.detectAnomalies(event),
      
      // Compliance tags
      gdpr_relevant: this.isGDPRRelevant(event),
      medical_data_involved: this.involvesMedicalData(event),
      cross_border_transfer: this.isCrossBorderTransfer(event)
    };
    
    // Store in audit log
    await supabase.from('comprehensive_audit_log').insert(auditRecord);
    
    // Real-time alerting for high-risk events
    if (auditRecord.risk_score >= 7 || auditRecord.anomaly_detected) {
      await this.sendSecurityAlert(auditRecord);
    }
    
    // Compliance reporting
    if (auditRecord.gdpr_relevant || auditRecord.medical_data_involved) {
      await this.updateComplianceMetrics(auditRecord);
    }
  }
  
  private static sanitizeEventData(data: any): any {
    const sensitiveFields = [
      'password', 'token', 'access_code', 'otp', 'hin_number',
      'patient_name', 'date_of_birth', 'insurance_number',
      'credit_card', 'bank_account', 'ssn'
    ];
    
    const sanitized = JSON.parse(JSON.stringify(data));
    
    const sanitizeObject = (obj: any) => {
      for (const key in obj) {
        if (typeof obj[key] === 'object' && obj[key] !== null) {
          sanitizeObject(obj[key]);
        } else if (sensitiveFields.some(field => key.toLowerCase().includes(field))) {
          obj[key] = '[REDACTED]';
        }
      }
    };
    
    sanitizeObject(sanitized);
    return sanitized;
  }
  
  private static async calculateRiskScore(event: AuditEvent): Promise<number> {
    let score = 0;
    
    // Base score by event type
    const riskMap = {
      'AUTHENTICATION_FAILED': 3,
      'DATA_ACCESS': 2,
      'DATA_MODIFICATION': 4,
      'ADMIN_ACCESS': 6,
      'SYSTEM_ERROR': 3,
      'SECURITY_VIOLATION': 8,
      'COMPLIANCE_BREACH': 9,
      'DATA_EXPORT': 5
    };
    
    score += riskMap[event.type] || 1;
    
    // Increase score for medical data
    if (this.involvesMedicalData(event)) {
      score += 2;
    }
    
    // Increase score for off-hours access
    const hour = new Date().getHours();
    if (hour < 6 || hour > 22) {
      score += 1;
    }
    
    // Increase score for unusual IP/location
    const isUnusualLocation = await this.checkUnusualLocation(event.ipAddress, event.userId);
    if (isUnusualLocation) {
      score += 2;
    }
    
    return Math.min(score, 10);
  }
}

// Audit event types for Swiss healthcare
enum AuditEventType {
  // Authentication
  LOGIN_SUCCESS = 'LOGIN_SUCCESS',
  LOGIN_FAILED = 'LOGIN_FAILED',
  LOGOUT = 'LOGOUT',
  TOKEN_REFRESH = 'TOKEN_REFRESH',
  
  // Data Access
  PATIENT_DATA_ACCESS = 'PATIENT_DATA_ACCESS',
  REFERRAL_GENERATED = 'REFERRAL_GENERATED',
  REFERRAL_ACCESSED = 'REFERRAL_ACCESSED',
  MEDICAL_RECORD_VIEW = 'MEDICAL_RECORD_VIEW',
  
  // Data Modification
  PATIENT_DATA_UPDATED = 'PATIENT_DATA_UPDATED',
  REFERRAL_MODIFIED = 'REFERRAL_MODIFIED',
  CONSENT_CHANGED = 'CONSENT_CHANGED',
  
  // Compliance
  GDPR_DATA_EXPORT = 'GDPR_DATA_EXPORT',
  GDPR_DATA_DELETION = 'GDPR_DATA_DELETION',
  RETENTION_POLICY_APPLIED = 'RETENTION_POLICY_APPLIED',
  
  // Security
  SUSPICIOUS_ACTIVITY = 'SUSPICIOUS_ACTIVITY',
  RATE_LIMIT_EXCEEDED = 'RATE_LIMIT_EXCEEDED',
  ACCESS_DENIED = 'ACCESS_DENIED',
  SECURITY_BREACH_DETECTED = 'SECURITY_BREACH_DETECTED'
}
```

### 5.2 GDPR Compliance Implementation
```typescript
// GDPR compliance service
class GDPRComplianceService {
  // Data portability - export all user data
  static async exportUserData(userId: string, requestedBy: string): Promise<{
    success: boolean;
    exportId?: string;
    error?: string;
  }> {
    try {
      await AuditService.logEvent({
        type: AuditEventType.GDPR_DATA_EXPORT,
        category: 'COMPLIANCE',
        userId,
        action: 'EXPORT_REQUESTED',
        outcome: 'STARTED',
        legalBasis: 'GDPR_ARTICLE_20',
        dataClassification: 'PERSONAL_DATA'
      });
      
      // Collect all user data from various tables
      const userData = await this.collectAllUserData(userId);
      
      // Create encrypted export package
      const exportPackage = {
        metadata: {
          userId,
          exportDate: new Date().toISOString(),
          requestedBy,
          dataController: 'SKIIN Switzerland',
          legalBasis: 'GDPR Article 20 - Right to Data Portability'
        },
        personalData: userData.personal,
        medicalData: userData.medical,
        auditTrail: userData.auditTrail,
        consentHistory: userData.consent,
        communicationHistory: userData.communications
      };
      
      // Encrypt export package
      const encryptedPackage = await DataEncryption.encrypt(exportPackage, userId);
      
      // Store export request
      const { data: exportRecord } = await supabase
        .from('gdpr_export_requests')
        .insert({
          user_id: userId,
          requested_by: requestedBy,
          status: 'completed',
          export_data_encrypted: encryptedPackage,
          expires_at: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // 30 days
          created_at: new Date()
        })
        .select('id')
        .single();
      
      await AuditService.logEvent({
        type: AuditEventType.GDPR_DATA_EXPORT,
        category: 'COMPLIANCE',
        userId,
        action: 'EXPORT_COMPLETED',
        outcome: 'SUCCESS',
        legalBasis: 'GDPR_ARTICLE_20'
      });
      
      return {
        success: true,
        exportId: exportRecord.id
      };
    } catch (error) {
      await AuditService.logEvent({
        type: AuditEventType.GDPR_DATA_EXPORT,
        category: 'COMPLIANCE',
        userId,
        action: 'EXPORT_FAILED',
        outcome: 'ERROR',
        data: { error: error.message }
      });
      
      return {
        success: false,
        error: 'Data export failed'
      };
    }
  }
  
  // Right to erasure - delete all user data
  static async deleteUserData(userId: string, reason: string): Promise<{
    success: boolean;
    deletionId?: string;
    error?: string;
  }> {
    try {
      // Check if deletion is legally allowed
      const canDelete = await this.checkDeletionEligibility(userId);
      if (!canDelete.allowed) {
        return {
          success: false,
          error: canDelete.reason
        };
      }
      
      await AuditService.logEvent({
        type: AuditEventType.GDPR_DATA_DELETION,
        category: 'COMPLIANCE',
        userId,
        action: 'DELETION_STARTED',
        outcome: 'STARTED',
        legalBasis: 'GDPR_ARTICLE_17'
      });
      
      // Create deletion record before deleting data
      const { data: deletionRecord } = await supabase
        .from('gdpr_deletion_requests')
        .insert({
          user_id: userId,
          reason,
          status: 'in_progress',
          started_at: new Date()
        })
        .select('id')
        .single();
      
      // Perform cascading deletion
      await this.performCascadingDeletion(userId);
      
      // Update deletion record
      await supabase
        .from('gdpr_deletion_requests')
        .update({
          status: 'completed',
          completed_at: new Date()
        })
        .eq('id', deletionRecord.id);
      
      await AuditService.logEvent({
        type: AuditEventType.GDPR_DATA_DELETION,
        category: 'COMPLIANCE',
        userId: null, // User no longer exists
        action: 'DELETION_COMPLETED',
        outcome: 'SUCCESS',
        legalBasis: 'GDPR_ARTICLE_17',
        data: { deletionId: deletionRecord.id }
      });
      
      return {
        success: true,
        deletionId: deletionRecord.id
      };
    } catch (error) {
      await AuditService.logEvent({
        type: AuditEventType.GDPR_DATA_DELETION,
        category: 'COMPLIANCE',
        userId,
        action: 'DELETION_FAILED',
        outcome: 'ERROR',
        data: { error: error.message }
      });
      
      return {
        success: false,
        error: 'Data deletion failed'
      };
    }
  }
  
  private static async performCascadingDeletion(userId: string): Promise<void> {
    // Define deletion order (dependencies first)
    const deletionOrder = [
      'referral_access_logs',
      'gp_referrals',
      'payments',
      'user_insurance',
      'form_sessions',
      'documents',
      'security_audit_log',
      'user_profiles' // Last
    ];
    
    for (const table of deletionOrder) {
      await supabase
        .from(table)
        .delete()
        .eq('user_id', userId);
    }
    
    // Delete from auth.users (Supabase Auth)
    const { error } = await supabase.auth.admin.deleteUser(userId);
    if (error) {
      throw new Error(`Failed to delete user from auth: ${error.message}`);
    }
  }
}
```

## 6. Performance and Monitoring

### 6.1 Security Monitoring Dashboard
```typescript
// Real-time security monitoring
class SecurityMonitoringService {
  static async getSecurityMetrics(): Promise<SecurityMetrics> {
    const last24Hours = new Date(Date.now() - 24 * 60 * 60 * 1000);
    
    // Failed authentication attempts
    const { data: failedLogins } = await supabase
      .from('comprehensive_audit_log')
      .select('count')
      .eq('event_type', 'LOGIN_FAILED')
      .gte('timestamp', last24Hours.toISOString());
    
    // Suspicious activities
    const { data: suspiciousActivities } = await supabase
      .from('comprehensive_audit_log')
      .select('*')
      .gte('risk_score', 7)
      .gte('timestamp', last24Hours.toISOString());
    
    // Rate limiting violations
    const { data: rateLimitViolations } = await supabase
      .from('rate_limits')
      .select('count')
      .is_not('blocked_until', null);
    
    // Data access anomalies
    const { data: accessAnomalies } = await supabase
      .from('comprehensive_audit_log')
      .select('*')
      .eq('anomaly_detected', true)
      .gte('timestamp', last24Hours.toISOString());
    
    return {
      failedLoginAttempts: failedLogins?.length || 0,
      suspiciousActivities: suspiciousActivities?.length || 0,
      rateLimitViolations: rateLimitViolations?.length || 0,
      accessAnomalies: accessAnomalies?.length || 0,
      lastUpdated: new Date()
    };
  }
  
  static async generateComplianceReport(): Promise<ComplianceReport> {
    const last30Days = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000);
    
    // GDPR requests handled
    const { data: gdprExports } = await supabase
      .from('gdpr_export_requests')
      .select('count')
      .gte('created_at', last30Days.toISOString());
    
    const { data: gdprDeletions } = await supabase
      .from('gdpr_deletion_requests')
      .select('count')
      .gte('created_at', last30Days.toISOString());
    
    // Data retention compliance
    const { data: expiredReferrals } = await supabase
      .from('gp_referrals')
      .select('count')
      .lt('expires_at', new Date().toISOString())
      .eq('status', 'expired');
    
    // Security incident count
    const { data: securityIncidents } = await supabase
      .from('comprehensive_audit_log')
      .select('count')
      .eq('event_type', 'SECURITY_BREACH_DETECTED')
      .gte('timestamp', last30Days.toISOString());
    
    return {
      period: { from: last30Days, to: new Date() },
      gdprExportRequests: gdprExports?.length || 0,
      gdprDeletionRequests: gdprDeletions?.length || 0,
      expiredReferralsCount: expiredReferrals?.length || 0,
      securityIncidents: securityIncidents?.length || 0,
      complianceScore: this.calculateComplianceScore({
        gdprExports: gdprExports?.length || 0,
        gdprDeletions: gdprDeletions?.length || 0,
        securityIncidents: securityIncidents?.length || 0
      })
    };
  }
}
```

This comprehensive security and compliance specification ensures the GP referral system meets all Swiss healthcare regulatory requirements while maintaining the highest security standards. The implementation addresses the critical P0 security gaps identified in the multi-panel review and provides a robust foundation for handling sensitive medical data in compliance with Swiss law.