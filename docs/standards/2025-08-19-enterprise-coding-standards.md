# Enterprise Coding Standards
**Document ID:** STD-2025-08-19-01
**Created:** 2025-08-19
**Status:** Active - Enterprise Grade
**Type:** Technical Standards
**Author:** documentation-maintainer-agent

## Overview

This document establishes enterprise-grade coding standards for the SKIIN Switzerland marketing website, incorporating lessons learned from Repository Conformance Chain Phase 3a implementation and modern TypeScript best practices.

## TypeScript Standards (Mandatory)

### Strict Configuration Requirements

**Compiler Configuration:** `tsconfig.json`
```json
{
  "compilerOptions": {
    "strict": true,
    "noImplicitAny": true,
    "strictNullChecks": true,
    "strictFunctionTypes": true,
    "strictBindCallApply": true,
    "strictPropertyInitialization": true,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true,
    "noUncheckedIndexedAccess": true,
    "exactOptionalPropertyTypes": true,
    "target": "ES2022",
    "module": "ESNext",
    "moduleResolution": "bundler",
    "allowSyntheticDefaultImports": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true
  }
}
```

### Type Safety Enforcement

**Zero Tolerance Policies:**
- No `any` types (use `unknown` for true any type needs)
- No `@ts-ignore` without accompanying GitHub issue
- No implicit function return types for exported functions
- No unsafe assignments or member access

**Type Definition Requirements:**
```typescript
// ✅ Required: Explicit interface definitions
interface ComponentProps {
  title: string;
  description?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

// ✅ Required: Explicit return types for exports
export function formatDate(date: Date): string {
  return date.toISOString().split('T')[0];
}

// ✅ Required: Union types for fixed values
type Theme = 'medical-blue' | 'sw-design' | 'professional-teal';
type CopyVariant = 'benefit-led' | 'clinical' | 'urgency';
```

### Advanced Type Patterns

**Utility Types Usage:**
```typescript
// ✅ Use built-in utility types
type PartialUser = Partial<User>;
type UserEmail = Pick<User, 'email'>;
type CreateUser = Omit<User, 'id' | 'createdAt'>;

// ✅ Custom utility types for domain-specific needs
type ApiResponse<T> = {
  data: T;
  status: 'success' | 'error';
  message?: string;
};

// ✅ Conditional types for complex scenarios
type FormField<T> = T extends string ? StringField : 
                   T extends number ? NumberField : 
                   T extends boolean ? BooleanField : never;
```

## React Component Standards

### Component Structure Requirements

**Functional Components Only:**
```typescript
// ✅ Required: Functional component with explicit interface
interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export function Button({ 
  children, 
  variant = 'primary', 
  size = 'md',
  disabled = false,
  onClick 
}: ButtonProps) {
  return (
    <button
      className={cn(
        'btn',
        `btn-${variant}`,
        `btn-${size}`,
        disabled && 'btn-disabled'
      )}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
```

**Component Constraints:**
- Maximum 50 lines of code per component
- Single responsibility principle
- Props interface must be exported
- Default values for optional props
- Explicit event handler types

### Hooks Standards

**Custom Hooks Requirements:**
```typescript
// ✅ Required: Explicit return type and parameter types
interface UseApiOptions {
  retries?: number;
  timeout?: number;
}

interface UseApiReturn<T> {
  data: T | null;
  loading: boolean;
  error: Error | null;
  refetch: () => Promise<void>;
}

export function useApi<T>(
  url: string, 
  options: UseApiOptions = {}
): UseApiReturn<T> {
  // Implementation
}
```

**Hook Constraints:**
- Prefix with `use`
- Explicit types for parameters and return values
- Error handling with proper typing
- Loading states for async operations

## Error Handling Standards

### Error Types and Patterns

**Error Classification:**
```typescript
// ✅ Required: Typed error hierarchy
abstract class AppError extends Error {
  abstract readonly type: string;
  abstract readonly code: string;
  
  constructor(message: string, public readonly context?: Record<string, unknown>) {
    super(message);
    this.name = this.constructor.name;
  }
}

class ValidationError extends AppError {
  readonly type = 'VALIDATION_ERROR';
  constructor(field: string, value: unknown, code: string) {
    super(`Invalid ${field}: ${String(value)}`);
    this.code = code;
    this.context = { field, value };
  }
}

class ApiError extends AppError {
  readonly type = 'API_ERROR';
  constructor(public readonly code: string, message: string, public readonly status: number) {
    super(message);
    this.context = { status };
  }
}
```

**Error Handling Patterns:**
```typescript
// ✅ Required: Result pattern for error-prone operations
type Result<T, E = Error> = 
  | { success: true; data: T }
  | { success: false; error: E };

async function fetchUser(id: string): Promise<Result<User, ApiError>> {
  try {
    const response = await api.get(`/users/${id}`);
    return { success: true, data: response.data };
  } catch (error) {
    return { 
      success: false, 
      error: new ApiError('USER_FETCH_FAILED', error.message, error.status) 
    };
  }
}
```

### Error Boundaries

**Component Error Boundaries:**
```typescript
interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
}

export class ErrorBoundary extends Component<
  PropsWithChildren<{}>, 
  ErrorBoundaryState
> {
  constructor(props: PropsWithChildren<{}>) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error: Error): Partial<ErrorBoundaryState> {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({ errorInfo });
    
    // Log to monitoring service
    console.error('Error Boundary Caught:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <ErrorFallback error={this.state.error} />;
    }

    return this.props.children;
  }
}
```

## Performance Standards

### Code Splitting Requirements

**Route-Level Splitting:**
```typescript
// ✅ Required: Lazy loading for routes
const HomePage = lazy(() => import('../pages/HomePage'));
const SolutionsPage = lazy(() => import('../pages/SolutionsPage'));

// ✅ Required: Suspense boundaries
function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <Suspense fallback={<PageSkeleton />}>
            <HomePage />
          </Suspense>
        } />
      </Routes>
    </Router>
  );
}
```

**Component-Level Optimization:**
```typescript
// ✅ Required: Memoization for expensive calculations
const ExpensiveComponent = React.memo(({ data }: { data: ComplexData }) => {
  const processedData = useMemo(() => 
    expensiveCalculation(data), 
    [data]
  );
  
  return <div>{processedData.result}</div>;
});

// ✅ Required: Callback memoization
function ParentComponent() {
  const handleClick = useCallback((id: string) => {
    onItemClick(id);
  }, [onItemClick]);
  
  return <ChildComponent onClick={handleClick} />;
}
```

### Bundle Size Management

**Import Optimization:**
```typescript
// ✅ Required: Tree-shakable imports
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

// ❌ Forbidden: Barrel imports that prevent tree-shaking
import * as UI from '@/components/ui';
```

**Dynamic Imports:**
```typescript
// ✅ Required: Dynamic imports for large dependencies
async function loadChartLibrary() {
  const { Chart } = await import('chart.js');
  return Chart;
}
```

## Accessibility Standards

### WCAG 2.1 AA Compliance

**Required Accessibility Patterns:**
```typescript
// ✅ Required: Semantic HTML and ARIA
interface ButtonProps {
  'aria-label'?: string;
  'aria-describedby'?: string;
  'aria-pressed'?: boolean;
}

export function IconButton({ 
  'aria-label': ariaLabel,
  onClick,
  children 
}: ButtonProps) {
  return (
    <button
      type="button"
      aria-label={ariaLabel}
      onClick={onClick}
      className="icon-button"
    >
      {children}
    </button>
  );
}
```

**Focus Management:**
```typescript
// ✅ Required: Proper focus management
export function Modal({ isOpen, onClose, children }: ModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (isOpen && modalRef.current) {
      modalRef.current.focus();
    }
  }, [isOpen]);

  return (
    <div
      ref={modalRef}
      role="dialog"
      aria-modal="true"
      tabIndex={-1}
      className={cn('modal', isOpen && 'modal-open')}
    >
      {children}
    </div>
  );
}
```

### Keyboard Navigation

**Required Navigation Patterns:**
```typescript
// ✅ Required: Keyboard event handling
function DropdownMenu() {
  const handleKeyDown = (event: React.KeyboardEvent) => {
    switch (event.key) {
      case 'Escape':
        closeMenu();
        break;
      case 'ArrowDown':
        event.preventDefault();
        focusNextItem();
        break;
      case 'ArrowUp':
        event.preventDefault();
        focusPreviousItem();
        break;
      case 'Enter':
      case ' ':
        event.preventDefault();
        selectCurrentItem();
        break;
    }
  };

  return (
    <div
      role="menu"
      onKeyDown={handleKeyDown}
      className="dropdown-menu"
    >
      {/* Menu items */}
    </div>
  );
}
```

## Testing Standards

### Test Coverage Requirements

**Minimum Coverage Thresholds:**
- Lines: 80%
- Functions: 85%
- Branches: 75%
- Statements: 80%

**Critical Path Coverage:** 95%
- Authentication flows
- Payment processing
- Data submission
- Error boundaries

### Test Categories

**Unit Tests (Required):**
```typescript
// ✅ Required: Component unit tests
describe('Button Component', () => {
  it('should render with correct variant class', () => {
    render(<Button variant="primary">Test</Button>);
    expect(screen.getByRole('button')).toHaveClass('btn-primary');
  });

  it('should handle click events', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Test</Button>);
    
    fireEvent.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalledOnce();
  });

  it('should be disabled when disabled prop is true', () => {
    render(<Button disabled>Test</Button>);
    expect(screen.getByRole('button')).toBeDisabled();
  });
});
```

**Integration Tests (Required):**
```typescript
// ✅ Required: Integration tests for user flows
describe('User Registration Flow', () => {
  it('should complete registration with valid data', async () => {
    render(<RegistrationForm />);
    
    await userEvent.type(screen.getByLabelText(/email/i), 'user@example.com');
    await userEvent.type(screen.getByLabelText(/password/i), 'SecurePass123!');
    await userEvent.click(screen.getByRole('button', { name: /register/i }));
    
    expect(await screen.findByText(/welcome/i)).toBeInTheDocument();
  });
});
```

**Accessibility Tests (Required):**
```typescript
// ✅ Required: Automated accessibility testing
import { axe, toHaveNoViolations } from 'jest-axe';

expect.extend(toHaveNoViolations);

describe('Accessibility', () => {
  it('should not have accessibility violations', async () => {
    const { container } = render(<HomePage />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
```

## Security Standards

### Input Validation

**Required Validation Patterns:**
```typescript
// ✅ Required: Zod schema validation
import { z } from 'zod';

const UserSchema = z.object({
  email: z.string().email('Invalid email format'),
  password: z.string()
    .min(8, 'Password must be at least 8 characters')
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/, 'Password must contain uppercase, lowercase, and number'),
  age: z.number().int().min(18, 'Must be at least 18 years old')
});

type User = z.infer<typeof UserSchema>;

// ✅ Required: Validation in components
function UserForm() {
  const form = useForm<User>({
    resolver: zodResolver(UserSchema)
  });

  return (
    <form onSubmit={form.handleSubmit(onSubmit)}>
      {/* Form fields */}
    </form>
  );
}
```

### XSS Prevention

**Required Sanitization:**
```typescript
// ✅ Required: Content sanitization
import DOMPurify from 'isomorphic-dompurify';

interface SafeHtmlProps {
  content: string;
  className?: string;
}

export function SafeHtml({ content, className }: SafeHtmlProps) {
  const sanitizedContent = DOMPurify.sanitize(content);
  
  return (
    <div 
      className={className}
      dangerouslySetInnerHTML={{ __html: sanitizedContent }}
    />
  );
}
```

### Environment Variables

**Required Security Practices:**
```typescript
// ✅ Required: Environment variable validation
const EnvSchema = z.object({
  VITE_API_URL: z.string().url(),
  VITE_APP_ENV: z.enum(['development', 'staging', 'production']),
  VITE_ANALYTICS_ID: z.string().optional()
});

export const env = EnvSchema.parse(import.meta.env);

// ❌ Forbidden: Direct environment variable access
const apiUrl = import.meta.env.VITE_API_URL; // No validation
```

## Code Organization Standards

### File and Directory Structure

**Required Directory Organization:**
```
src/
├── components/
│   ├── ui/              # Base components (shadcn/ui)
│   ├── features/        # Feature-specific components
│   ├── layout/          # Layout components
│   └── forms/           # Form components
├── pages/               # Route components
├── hooks/               # Custom hooks
├── services/            # API and business logic
├── types/               # TypeScript type definitions
├── utils/               # Utility functions
├── contexts/            # React contexts
├── constants/           # Application constants
└── __tests__/           # Test files
```

**Required Naming Conventions:**
- Components: PascalCase (`UserProfile.tsx`)
- Hooks: camelCase with `use` prefix (`useAuth.ts`)
- Services: camelCase with `.service` suffix (`auth.service.ts`)
- Types: PascalCase interfaces (`User.ts`)
- Constants: SCREAMING_SNAKE_CASE (`API_ENDPOINTS.ts`)

### Import Organization

**Required Import Order:**
```typescript
// 1. Node modules
import React, { useState, useEffect } from 'react';
import { useRouter } from 'react-router-dom';

// 2. Internal modules (absolute imports)
import { Button } from '@/components/ui/button';
import { useAuth } from '@/hooks/useAuth';
import { User } from '@/types/User';

// 3. Relative imports
import './Component.styles.css';
import { helperFunction } from '../utils/helpers';
```

## Documentation Standards

### Code Documentation

**Required JSDoc Comments:**
```typescript
/**
 * Custom hook for managing user authentication state and operations.
 * 
 * @example
 * ```tsx
 * function LoginForm() {
 *   const { user, login, logout, isLoading } = useAuth();
 *   
 *   if (isLoading) return <Spinner />;
 *   
 *   return user ? <Profile user={user} /> : <LoginButton onClick={login} />;
 * }
 * ```
 * 
 * @returns Authentication state and operations
 */
export function useAuth(): UseAuthReturn {
  // Implementation
}
```

**Required Interface Documentation:**
```typescript
/**
 * Configuration options for the API client.
 */
interface ApiClientConfig {
  /** Base URL for API requests */
  baseUrl: string;
  /** Timeout in milliseconds (default: 5000) */
  timeout?: number;
  /** Default headers to include with requests */
  defaultHeaders?: Record<string, string>;
  /** Number of retry attempts for failed requests (default: 3) */
  retries?: number;
}
```

## Quality Assurance

### Code Review Checklist

**Required Review Points:**
- [ ] TypeScript strict mode compliance
- [ ] No `any` types or `@ts-ignore` usage
- [ ] Proper error handling with typed errors
- [ ] Component size ≤ 50 lines
- [ ] Accessibility requirements met
- [ ] Performance considerations addressed
- [ ] Security best practices followed
- [ ] Test coverage ≥ 80%
- [ ] Documentation provided for complex logic

### Automated Quality Gates

**Pre-commit Hooks:**
```json
{
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged",
      "commit-msg": "commitlint -E HUSKY_GIT_PARAMS"
    }
  },
  "lint-staged": {
    "*.{ts,tsx}": [
      "eslint --fix",
      "prettier --write",
      "tsc --noEmit",
      "jest --findRelatedTests --passWithNoTests"
    ]
  }
}
```

**CI/CD Quality Gates:**
- TypeScript compilation: 0 errors
- ESLint: 0 errors, ≤ 5 warnings
- Test coverage: ≥ 80%
- Bundle size: ≤ 500KB gzipped
- Accessibility: 0 violations
- Security: 0 high/critical vulnerabilities

## Conclusion

These enterprise coding standards establish a foundation for maintainable, secure, and performant code. Adherence to these standards is mandatory for all code contributions to the SKIIN Switzerland marketing website.

**Enforcement:**
- Automated validation through CI/CD pipeline
- Code review requirements
- Quality gates prevent non-compliant code from reaching production
- Regular audits and standard updates

**Benefits:**
- Improved code quality and maintainability
- Reduced technical debt and bugs
- Enhanced security and performance
- Better developer experience and productivity

---
**Related Documents:**
- TypeScript Strict Mode Migration Guide
- CI/CD Pipeline Enhancement Guide
- Component Development Guidelines
- Security Best Practices