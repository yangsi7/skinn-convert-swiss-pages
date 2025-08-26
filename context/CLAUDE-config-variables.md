# CLAUDE-config-variables.md
<!-- Configuration variables and environment reference for SKIIN Switzerland -->

## Environment Variables

### Vite/Client Variables (VITE_ prefix required)
```bash
# Supabase Configuration
VITE_SUPABASE_URL=https://[project-ref].supabase.co
VITE_SUPABASE_ANON_KEY=[anon-key]

# Application URLs
VITE_APP_URL=http://localhost:5173  # Development
VITE_APP_URL=https://skiin.ch       # Production

# Feature Flags
VITE_ENABLE_ANALYTICS=true
VITE_ENABLE_ERROR_TRACKING=false
VITE_MAINTENANCE_MODE=false

# API Configuration
VITE_API_TIMEOUT=30000              # 30 seconds
VITE_MAX_RETRY_ATTEMPTS=3
VITE_RETRY_DELAY=1000               # 1 second
```

### Server/Build Variables
```bash
# Node Environment
NODE_ENV=development|production|test

# Build Configuration
BUILD_PATH=dist
PUBLIC_URL=/
GENERATE_SOURCEMAP=false

# TypeScript Configuration
TSC_COMPILE_ON_ERROR=false
DISABLE_ESLINT_PLUGIN=false
```

## Swiss Market Configuration

### Language Settings
```typescript
// Supported languages
export const LANGUAGES = ['en', 'de', 'fr', 'it'] as const;
export const DEFAULT_LANGUAGE = 'de';
export const FALLBACK_LANGUAGE = 'en';

// Language routes
export const LANGUAGE_ROUTES = {
  en: '/en',
  de: '/de',
  fr: '/fr',
  it: '/it'
};
```

### Insurance Providers
```typescript
// Swiss insurance providers (9 total)
export const INSURANCE_PROVIDERS = [
  { id: 'css', name: 'CSS Versicherung' },
  { id: 'helsana', name: 'Helsana' },
  { id: 'swica', name: 'SWICA' },
  { id: 'sanitas', name: 'Sanitas' },
  { id: 'concordia', name: 'Concordia' },
  { id: 'visana', name: 'Visana' },
  { id: 'groupe-mutuel', name: 'Groupe Mutuel' },
  { id: 'assura', name: 'Assura' },
  { id: 'kpt', name: 'KPT/CPT' }
];
```

### Canton Configuration
```typescript
// Swiss cantons (26 total)
export const SWISS_CANTONS = [
  'AG', 'AI', 'AR', 'BE', 'BL', 'BS', 
  'FR', 'GE', 'GL', 'GR', 'JU', 'LU',
  'NE', 'NW', 'OW', 'SG', 'SH', 'SO',
  'SZ', 'TG', 'TI', 'UR', 'VD', 'VS',
  'ZG', 'ZH'
] as const;
```

### Compliance Settings
```typescript
// Swiss VAT
export const VAT_RATE = 0.077;  // 7.7%

// Age restrictions
export const MIN_AGE = 18;
export const MAX_AGE = 120;

// Data retention (GDPR/Swiss DPA)
export const DATA_RETENTION_DAYS = 90;
export const AUDIT_LOG_RETENTION_DAYS = 365;
```

## Authentication Configuration

### OTP Settings
```typescript
// OTP verification
export const OTP_CONFIG = {
  expiryMinutes: 10,
  maxAttempts: 5,
  cooldownMinutes: 10,
  tokenLength: 6
};

// Session configuration
export const SESSION_CONFIG = {
  expiryHours: 24,
  refreshThreshold: 0.25, // Refresh when 25% time remaining
  cookieName: 'skiin-session',
  cookieOptions: {
    httpOnly: true,
    secure: true,
    sameSite: 'lax'
  }
};
```

### Rate Limiting
```typescript
// API rate limits
export const RATE_LIMITS = {
  otp: {
    requests: 5,
    windowMinutes: 10
  },
  api: {
    requests: 100,
    windowMinutes: 1
  },
  submission: {
    requests: 10,
    windowMinutes: 60
  }
};
```

## Performance Targets

### Core Web Vitals
```typescript
export const PERFORMANCE_TARGETS = {
  LCP: 2500,    // Largest Contentful Paint < 2.5s
  FID: 100,     // First Input Delay < 100ms
  CLS: 0.1,     // Cumulative Layout Shift < 0.1
  TTFB: 800,    // Time to First Byte < 800ms
  FCP: 1800     // First Contentful Paint < 1.8s
};
```

### Bundle Size Limits
```typescript
export const BUNDLE_LIMITS = {
  main: 200000,        // 200KB main bundle
  vendor: 500000,      // 500KB vendor bundle
  total: 1000000,      // 1MB total
  imageMax: 100000,    // 100KB per image
  lazyChunk: 50000     // 50KB lazy chunks
};
```

## Testing Configuration

### Test Coverage Thresholds
```typescript
export const COVERAGE_THRESHOLDS = {
  branches: 70,
  functions: 70,
  lines: 80,
  statements: 80,
  
  // Component-specific
  services: 80,
  utilities: 70,
  components: 60
};
```

### Test Timeouts
```typescript
export const TEST_TIMEOUTS = {
  unit: 5000,          // 5 seconds
  integration: 10000,  // 10 seconds
  e2e: 30000,         // 30 seconds
  setup: 60000        // 60 seconds for test setup
};
```

## Database Configuration

### Supabase Settings
```typescript
// Database pools
export const DB_CONFIG = {
  maxConnections: 100,
  connectionTimeout: 30000,
  idleTimeout: 60000,
  statementTimeout: 30000
};

// RLS policies
export const RLS_ENABLED_TABLES = [
  'users',
  'insurance_providers',
  'eligibility_submissions',
  'otp_verifications',
  'sessions',
  'audit_logs',
  'appointments',
  'feedback',
  'questionnaires',
  'questionnaire_responses',
  'notifications',
  'referrals',
  'documents',
  'analytics_events'
];
```

## Build & Deploy Configuration

### Vite Config Overrides
```javascript
// vite.config.ts settings
export default {
  build: {
    target: 'es2020',
    minify: 'terser',
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          ui: ['@radix-ui', '@tanstack'],
          utils: ['lodash', 'date-fns']
        }
      }
    }
  },
  optimizeDeps: {
    include: ['react', 'react-dom']
  }
};
```

### CI/CD Variables
```bash
# GitHub Actions
CI=true
GITHUB_TOKEN=${{ secrets.GITHUB_TOKEN }}
CODECOV_TOKEN=${{ secrets.CODECOV_TOKEN }}

# Deployment
DEPLOY_URL=https://skiin.ch
DEPLOY_PREVIEW_URL=https://preview.skiin.ch
DEPLOY_BRANCH=main
```

## Development Tools Configuration

### ESLint Settings
```json
{
  "rules": {
    "no-console": "warn",
    "no-debugger": "error",
    "no-unused-vars": "error",
    "@typescript-eslint/no-explicit-any": "error",
    "@typescript-eslint/explicit-return-type": "warn"
  }
}
```

### Prettier Settings
```json
{
  "semi": true,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "es5",
  "printWidth": 80,
  "bracketSpacing": true
}
```

## Agent System Configuration

### Agent Standards (v2.1)
```typescript
// All 20 agents must include these in frontmatter
export const AGENT_REQUIREMENTS = {
  self_prime: true,           // Autonomous initialization required
  request_id: 'string',       // Request tracking required
  description: 'string',      // With usage examples
  tools: ['array'],           // Available tools list
  model: 'sonnet',           // Default model
  color: 'string'            // UI theme color
};

// Agent system status
export const AGENT_SYSTEM_STATUS = {
  total_agents: 20,
  standardized_agents: 20,
  self_priming_enabled: 20,
  request_tracking_enabled: 20,
  autonomous: true,
  manual_intervention_required: false
};
```

### Memory Bank Configuration
```typescript
export const MEMORY_BANK_FILES = {
  'CLAUDE-activeContext.md': 'Current session state',
  'CLAUDE-patterns.md': 'Code patterns & conventions', 
  'CLAUDE-decisions.md': 'Architecture decisions',
  'CLAUDE-troubleshooting.md': 'Common issues & solutions',
  'CLAUDE-config-variables.md': 'This file - configuration reference',
  'CLAUDE-planning.md': 'Active planning document',
  'CLAUDE-todo.md': 'Task tracking (TodoWrite sync)',
  'CLAUDE-temp.md': 'Temporary scratch work',
  'CLAUDE_PROCESS.md': 'Agent workflow process',
  'WORKFLOWS.md': 'Workflow detection system'
};
```

## Feature Flags

### Current Feature Toggles
```typescript
export const FEATURE_FLAGS = {
  // Core features
  ENABLE_ELIGIBILITY_FORM: true,
  ENABLE_GP_REFERRAL: true,
  ENABLE_APPOINTMENTS: false,
  
  // Payment features
  ENABLE_STRIPE_PAYMENTS: false,
  ENABLE_INVOICE_GENERATION: false,
  
  // Communication
  ENABLE_EMAIL_NOTIFICATIONS: true,
  ENABLE_SMS_NOTIFICATIONS: false,
  ENABLE_PUSH_NOTIFICATIONS: false,
  
  // Analytics
  ENABLE_GOOGLE_ANALYTICS: true,
  ENABLE_HOTJAR: false,
  ENABLE_SENTRY: true,
  
  // Experimental
  ENABLE_DARK_MODE: false,
  ENABLE_PWA: false,
  ENABLE_OFFLINE_MODE: false,
  
  // System features
  ENABLE_AGENT_SELF_PRIMING: true,
  ENABLE_REQUEST_TRACKING: true,
  ENABLE_MEMORY_BANK_AUTO_SYNC: true,
  ENABLE_WORKFLOW_DETECTION: true
};
```

## API Endpoints

### External Services
```typescript
// Third-party APIs
export const EXTERNAL_APIS = {
  stripe: {
    baseUrl: 'https://api.stripe.com/v1',
    publicKey: process.env.VITE_STRIPE_PUBLIC_KEY
  },
  sendgrid: {
    baseUrl: 'https://api.sendgrid.com/v3',
    apiKey: process.env.SENDGRID_API_KEY
  },
  twilio: {
    baseUrl: 'https://api.twilio.com',
    accountSid: process.env.TWILIO_ACCOUNT_SID
  }
};
```

### Internal Endpoints
```typescript
// Supabase Edge Functions
export const EDGE_FUNCTIONS = {
  sendOtpEmail: '/functions/v1/send-otp-email',
  processPayment: '/functions/v1/process-payment',
  generateReport: '/functions/v1/generate-report',
  syncCalendar: '/functions/v1/sync-calendar'
};
```

## Monitoring & Logging

### Log Levels
```typescript
export const LOG_LEVELS = {
  development: 'debug',
  staging: 'info',
  production: 'error'
};

// Sentry configuration
export const SENTRY_CONFIG = {
  dsn: process.env.VITE_SENTRY_DSN,
  environment: process.env.NODE_ENV,
  tracesSampleRate: 0.1,
  replaysSessionSampleRate: 0.1
};
```

---
*Last updated: 2025-08-25 | Update when configuration changes*