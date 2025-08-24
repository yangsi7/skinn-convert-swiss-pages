# Database Schema Diagram v2.0

## Entity Relationship Diagram

```mermaid
erDiagram
    auth_users ||--o| user_profiles : "extends"
    auth_users ||--o{ form_sessions : "owns"
    auth_users ||--o{ payments : "makes"
    auth_users ||--o{ documents : "has"
    auth_users ||--o{ audit_events : "generates"
    
    form_sessions ||--o{ payments : "triggers"
    form_sessions ||--o{ documents : "generates"
    
    auth_users {
        uuid id PK
        string email
        jsonb raw_user_meta_data
        timestamptz created_at
        timestamptz updated_at
    }
    
    user_profiles {
        uuid id PK,FK
        string phone
        date date_of_birth
        boolean consent_given
        timestamptz consent_given_at
        timestamptz data_retention_until
        timestamptz deletion_requested_at
        integer otp_requests_count
        timestamptz otp_requests_reset_at
        timestamptz created_at
        timestamptz updated_at
    }
    
    form_sessions {
        uuid id PK
        uuid user_id FK
        jsonb form_data
        integer current_step
        string status
        jsonb eligibility_result
        string session_token
        timestamptz expires_at
        timestamptz last_activity_at
        timestamptz submitted_at
        integer completion_time_seconds
        timestamptz created_at
        timestamptz updated_at
    }
    
    payments {
        uuid id PK
        uuid user_id FK
        uuid form_session_id FK
        string stripe_payment_intent_id
        string stripe_session_id
        string idempotency_key
        integer amount_cents
        string currency
        string status
        jsonb billing_address
        boolean vat_included
        string invoice_number
        string payment_method
        timestamptz processed_at
        string failure_reason
        timestamptz created_at
        timestamptz updated_at
    }
    
    documents {
        uuid id PK
        uuid user_id FK
        uuid form_session_id FK
        string filename
        string file_path
        integer file_size_bytes
        string mime_type
        string document_type
        string template_used
        jsonb generation_parameters
        boolean is_public
        timestamptz access_expires_at
        timestamptz created_at
        timestamptz updated_at
    }
    
    audit_events {
        uuid id PK
        uuid user_id FK
        string event_type
        string entity_type
        uuid entity_id
        jsonb event_data
        jsonb old_values
        jsonb new_values
        inet ip_address
        string user_agent
        string session_id
        timestamptz created_at
    }
```

## Schema Overview

### Core Design Principles

1. **Simplicity**: 5 core tables vs. 20+ in v1.0
2. **Supabase Integration**: Extends built-in `auth.users`
3. **Flexibility**: JSONB for dynamic form data
4. **Compliance**: Full GDPR and Swiss DPA support

### Table Relationships

```mermaid
graph TD
    A[auth.users] --> B[user_profiles]
    A --> C[form_sessions]
    A --> D[payments] 
    A --> E[documents]
    A --> F[audit_events]
    
    C --> D
    C --> E
    
    subgraph "Supabase Built-in"
        A
    end
    
    subgraph "Core Business Logic"
        B
        C
    end
    
    subgraph "Integrations"
        D
        E
    end
    
    subgraph "Compliance"
        F
    end
```

## Data Flow Patterns

### Form Submission Flow

```mermaid
sequenceDiagram
    participant U as User
    participant FS as form_sessions
    participant AE as audit_events
    participant P as payments
    participant D as documents
    
    U->>FS: Start form (create session)
    FS->>AE: Log form_started
    
    loop Form Steps
        U->>FS: Save progress (JSONB update)
        FS->>AE: Log step_completed
    end
    
    U->>FS: Submit form
    FS->>AE: Log form_submitted
    
    opt Self-pay pathway
        FS->>P: Create payment
        P->>AE: Log payment_created
        P->>D: Generate invoice
        D->>AE: Log document_created
    end
    
    opt Insured pathway
        FS->>D: Generate referral
        D->>AE: Log referral_created
    end
    
    FS->>FS: Mark as completed
    FS->>AE: Log form_completed
```

### GDPR Compliance Flow

```mermaid
sequenceDiagram
    participant U as User
    participant UP as user_profiles
    participant AE as audit_events
    participant Fn as Functions
    
    U->>UP: Request data export
    UP->>AE: Log export_requested
    Fn->>Fn: export_user_data()
    Fn->>AE: Log export_completed
    Fn-->>U: Return data package
    
    opt Data deletion request
        U->>UP: Request deletion
        UP->>UP: Set deletion_requested_at
        UP->>AE: Log deletion_requested
        Fn->>Fn: Process deletion (after retention period)
        Fn->>AE: Log deletion_completed
    end
```

## Storage Strategy

### JSONB Usage

```json
// form_sessions.form_data example
{
  "step0": {
    "email": "user@example.com",
    "dateOfBirth": "1990-01-01"
  },
  "step1": {
    "insuranceModel": "basic",
    "hasSymptoms": true,
    "symptoms": ["chest_pain", "shortness_of_breath"],
    "contraindications": []
  },
  "step2": {
    "medicalHistory": {
      "conditions": ["hypertension"],
      "medications": ["lisinopril"],
      "allergies": []
    }
  }
}
```

```json
// form_sessions.eligibility_result example
{
  "eligible": true,
  "pathway": "insured",
  "reason": "Basic insurance with relevant symptoms",
  "riskLevel": "low",
  "requiresGpReferral": true,
  "estimatedCoverage": 80
}
```

### Document Storage

```json
// documents.generation_parameters example
{
  "template": "swiss_gp_referral_v2",
  "language": "de-CH",
  "urgent": false,
  "includeSymptoms": true,
  "includeHistory": true,
  "gpInfo": {
    "name": "Dr. Hans Müller",
    "address": "Hauptstrasse 1, 8001 Zürich",
    "phone": "+41 44 123 4567"
  }
}
```

## Performance Optimization

### Index Strategy

```mermaid
graph LR
    A[User Queries] --> B[user_profiles.phone]
    A --> C[form_sessions.user_id]
    A --> D[form_sessions.status]
    
    E[Session Queries] --> F[form_sessions.session_token]
    E --> G[form_sessions.expires_at]
    
    H[Payment Queries] --> I[payments.stripe_payment_intent_id]
    H --> J[payments.user_id]
    
    K[Audit Queries] --> L[audit_events.user_id]
    K --> M[audit_events.event_type]
    K --> N[audit_events.created_at]
```

### Query Patterns

```sql
-- Most common queries optimized with indexes

-- 1. User session lookup (< 10ms)
SELECT * FROM form_sessions 
WHERE session_token = ? AND expires_at > NOW();

-- 2. Form progress save (< 50ms)
UPDATE form_sessions 
SET form_data = ?, current_step = ?, updated_at = NOW()
WHERE id = ? AND user_id = ?;

-- 3. Payment status check (< 20ms)
SELECT status, amount_cents FROM payments
WHERE stripe_payment_intent_id = ?;

-- 4. User data export (< 500ms)
SELECT export_user_data(?);
```

## Security Model

### Row Level Security

```mermaid
graph TD
    A[User Request] --> B{Authenticated?}
    B -->|No| C[Denied]
    B -->|Yes| D{RLS Policy Check}
    
    D --> E[user_profiles: auth.uid() = id]
    D --> F[form_sessions: auth.uid() = user_id]
    D --> G[payments: auth.uid() = user_id]
    D --> H[documents: auth.uid() = user_id]
    D --> I[audit_events: auth.uid() = user_id]
    
    E --> J[Allow/Deny]
    F --> J
    G --> J
    H --> J
    I --> J
```

### Data Classification

```mermaid
graph LR
    subgraph "Personal Data (GDPR)"
        A[user_profiles.email]
        B[user_profiles.phone]
        C[user_profiles.date_of_birth]
        D[form_sessions.form_data]
    end
    
    subgraph "Financial Data (PCI DSS)"
        E[payments.stripe_payment_intent_id]
        F[payments.billing_address]
        G[payments.amount_cents]
    end
    
    subgraph "Health Data (Swiss DPA)"
        H[form_sessions.form_data.symptoms]
        I[form_sessions.form_data.medicalHistory]
        J[documents - referrals]
    end
    
    subgraph "Audit Data (Immutable)"
        K[audit_events.*]
    end
```

## Backup and Recovery

### Backup Strategy

```mermaid
graph TD
    A[Production DB] --> B[Continuous WAL Archiving]
    A --> C[Daily Full Backup]
    A --> D[Hourly Incremental]
    
    B --> E[Point-in-Time Recovery]
    C --> F[Disaster Recovery]
    D --> G[Recent Changes Recovery]
    
    subgraph "Retention Policy"
        H[7 days - Hourly backups]
        I[30 days - Daily backups]
        J[1 year - Weekly backups]
        K[7 years - Monthly backups]
    end
```

### Recovery Scenarios

| Scenario | Recovery Method | RTO | RPO |
|----------|----------------|-----|-----|
| Hardware failure | Supabase automatic failover | < 5 min | < 1 min |
| Data corruption | Point-in-time recovery | < 30 min | < 15 min |
| Accidental deletion | Full backup restore | < 2 hours | < 24 hours |
| Regional disaster | Cross-region replica | < 4 hours | < 1 hour |

## Monitoring and Alerting

### Key Metrics

```mermaid
graph TD
    A[Database Health] --> B[Connection count]
    A --> C[Query performance]
    A --> D[Storage utilization]
    
    E[Business Metrics] --> F[Form completion rate]
    E --> G[Payment success rate]
    E --> H[Session abandonment]
    
    I[Security Events] --> J[Failed login attempts]
    I --> K[RLS policy violations]
    I --> L[Unusual data access patterns]
    
    M[Compliance] --> N[Audit event volume]
    M --> O[GDPR request processing]
    M --> P[Data retention compliance]
```

### Alert Thresholds

| Metric | Warning | Critical |
|--------|---------|----------|
| Connection count | > 80% | > 95% |
| Query response time | > 1s | > 5s |
| Form abandonment rate | > 30% | > 50% |
| Payment failure rate | > 5% | > 10% |
| Audit log gaps | > 1 min | > 5 min |

## Conclusion

The v2.0 database schema provides a clean, efficient, and compliant foundation for the Myant Europe Eligibility Form system. The simplified design reduces operational complexity while maintaining full functionality and regulatory compliance.

**Key Advantages:**
- **Performance**: Optimized for common query patterns
- **Scalability**: Supports high concurrent load
- **Compliance**: Full GDPR and Swiss DPA compliance
- **Maintainability**: Simple, well-documented structure
- **Security**: Comprehensive access controls and audit trails