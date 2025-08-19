# Enterprise Coding Standards
VERSION: 1.0  
CREATED: 2025-08-19
PURPOSE: Enterprise-grade coding standards for SKIIN Switzerland repository conformance
COMPLIANCE: Modern TypeScript, React, and Web Standards

## TypeScript Configuration Standards

### Strict Configuration Requirements
All projects must use the following TypeScript configuration as the minimum baseline:

```json
{
  "compilerOptions": {
    "strict": true,
    "noImplicitAny": true,
    "strictNullChecks": true,
    "strictFunctionTypes": true,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true,
    "noUncheckedIndexedAccess": true,
    "exactOptionalPropertyTypes": true,
    "noImplicitOverride": true,
    "allowUnusedLabels": false,
    "allowUnreachableCode": false,
    "noImplicitThis": true,
    "alwaysStrict": true
  }
}
```

### Type Safety Requirements
- **Zero `any` Types**: 0% tolerance for `any` types in production code
- **Explicit Return Types**: All exported functions must have explicit return types
- **Null Safety**: All nullable values must be properly typed with union types
- **Type Guards**: Use type guards for runtime type checking
- **Generic Constraints**: Use proper generic constraints for reusable components

### Code Examples

#### ✅ Correct Implementation
```typescript
// Explicit types and proper error handling
interface UserProfile {
  readonly id: string;
  name: string;
  email: string;
  lastLogin: Date | null;
}

const fetchUserProfile = async (userId: string): Promise<UserProfile | null> => {
  try {
    const response = await api.get(`/users/${userId}`);
    return response.data;
  } catch (error) {
    console.error('Failed to fetch user profile:', error);
    return null;
  }
};

// Type guards for runtime safety
const isValidUserProfile = (data: unknown): data is UserProfile => {
  return (
    typeof data === 'object' &&
    data !== null &&
    'id' in data &&
    'name' in data &&
    'email' in data
  );
};
```

#### ❌ Avoid These Patterns
```typescript
// Never use any types
const fetchData = async (url: string): Promise<any> => { // ❌
  return fetch(url).then(res => res.json());
};

// Implicit return types
function processUser(user) { // ❌ - no types
  return user.name.toUpperCase(); // ❌ - potential runtime error
}

// Unsafe null handling
const getUserName = (user: User) => {
  return user.profile.name; // ❌ - profile might be null
};
```

## React Component Standards

### Component Architecture
- **Atomic Design**: Components ≤50 lines, single responsibility
- **Functional Components**: Only functional components with hooks
- **TypeScript Props**: All props must be properly typed with interfaces
- **Default Props**: Use TypeScript default parameters instead of defaultProps
- **Error Boundaries**: Critical components must have error boundaries

### Component Implementation Standards

#### ✅ Correct Component Implementation
```typescript
interface ButtonProps {
  readonly variant?: 'primary' | 'secondary' | 'outline';
  readonly size?: 'sm' | 'md' | 'lg';
  readonly disabled?: boolean;
  readonly loading?: boolean;
  readonly children: React.ReactNode;
  readonly onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  readonly className?: string;
}

const Button = ({
  variant = 'primary',
  size = 'md',
  disabled = false,
  loading = false,
  children,
  onClick,
  className,
}: ButtonProps): JSX.Element => {
  const baseClasses = 'inline-flex items-center justify-center font-medium rounded-lg';
  const variantClasses = {
    primary: 'bg-primary text-primary-foreground hover:bg-primary/90',
    secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
    outline: 'border border-input bg-background hover:bg-accent',
  };
  const sizeClasses = {
    sm: 'h-8 px-3 text-sm',
    md: 'h-10 px-4',
    lg: 'h-12 px-6 text-lg',
  };

  return (
    <button
      type="button"
      disabled={disabled || loading}
      onClick={onClick}
      className={cn(
        baseClasses,
        variantClasses[variant],
        sizeClasses[size],
        { 'opacity-50 cursor-not-allowed': disabled || loading },
        className
      )}
    >
      {loading ? <LoadingSpinner className="mr-2" /> : null}
      {children}
    </button>
  );
};

export { Button };
export type { ButtonProps };
```

## Performance Standards

### Core Web Vitals Requirements
- **LCP (Largest Contentful Paint)**: < 2.5s (target: < 2.0s)
- **CLS (Cumulative Layout Shift)**: < 0.1 (target: < 0.05)
- **FID (First Input Delay)**: < 100ms (target: < 50ms)
- **TTI (Time to Interactive)**: < 2s (target: < 1.5s)

### Bundle Size Requirements
- **Main Bundle**: < 200KB gzipped
- **Vendor Bundle**: < 500KB gzipped
- **Total Bundle**: < 1MB gzipped
- **Code Splitting**: Required for routes and heavy components

### Performance Implementation Standards

#### ✅ Correct Performance Patterns
```typescript
// Lazy loading for routes
const SolutionsPage = lazy(() => import('./pages/Solutions'));
const PartnersPage = lazy(() => import('./pages/Partners'));

// Memoization for expensive calculations
const ExpensiveComponent = memo(({ data }: { data: ComplexData }) => {
  const processedData = useMemo(() => {
    return complexCalculation(data);
  }, [data]);

  return <div>{processedData.result}</div>;
});

// Optimized image loading
const OptimizedImage = ({ src, alt, ...props }: ImageProps) => (
  <img
    src={src}
    alt={alt}
    loading="lazy"
    decoding="async"
    {...props}
  />
);
```

## Testing Standards

### Coverage Requirements
- **Unit Tests**: >80% line coverage for business logic
- **Integration Tests**: >95% coverage for critical user paths
- **Component Tests**: All UI components must have render tests
- **Accessibility Tests**: All interactive components must pass axe-core tests

### Testing Implementation Standards

#### ✅ Correct Testing Patterns
```typescript
// Unit test example
describe('validateEmail', () => {
  it('should return true for valid email addresses', () => {
    expect(validateEmail('user@example.com')).toBe(true);
    expect(validateEmail('test.email+tag@domain.co.uk')).toBe(true);
  });

  it('should return false for invalid email addresses', () => {
    expect(validateEmail('invalid-email')).toBe(false);
    expect(validateEmail('')).toBe(false);
    expect(validateEmail(null)).toBe(false);
  });
});

// Component test example
describe('Button', () => {
  it('renders with correct text and handles clicks', async () => {
    const handleClick = jest.fn();
    render(
      <Button onClick={handleClick}>
        Click me
      </Button>
    );

    const button = screen.getByRole('button', { name: /click me/i });
    expect(button).toBeInTheDocument();

    await user.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('meets accessibility standards', async () => {
    const { container } = render(<Button>Accessible Button</Button>);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
```

## Accessibility Standards

### WCAG 2.1 AA Compliance Requirements
- **Color Contrast**: Minimum 4.5:1 ratio for normal text, 3:1 for large text
- **Keyboard Navigation**: All interactive elements must be keyboard accessible
- **Screen Reader Support**: Proper ARIA labels and semantic HTML
- **Focus Management**: Visible focus indicators and logical tab order

### Accessibility Implementation Standards

#### ✅ Correct Accessibility Patterns
```typescript
// Proper semantic HTML and ARIA
const NavigationMenu = () => (
  <nav aria-label="Main navigation">
    <ul role="list">
      {menuItems.map((item) => (
        <li key={item.id} role="listitem">
          <Link
            to={item.href}
            aria-current={isCurrentPage(item.href) ? 'page' : undefined}
          >
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  </nav>
);

// Form accessibility
const ContactForm = () => (
  <form>
    <div>
      <label htmlFor="email" className="sr-only">
        Email Address
      </label>
      <input
        id="email"
        type="email"
        placeholder="Enter your email"
        aria-describedby="email-error"
        aria-invalid={hasEmailError}
        required
      />
      {hasEmailError && (
        <div id="email-error" role="alert" className="text-red-600">
          Please enter a valid email address
        </div>
      )}
    </div>
  </form>
);
```

## Security Standards

### Input Validation Requirements
- **All Inputs**: Validate and sanitize all user inputs
- **API Endpoints**: Use Zod or similar schema validation
- **XSS Prevention**: Proper output encoding and CSP headers
- **SQL Injection**: Use parameterized queries only

### Security Implementation Standards

#### ✅ Correct Security Patterns
```typescript
// Input validation with Zod
const UserSchema = z.object({
  email: z.string().email('Invalid email format'),
  name: z.string().min(1, 'Name is required').max(100, 'Name too long'),
  age: z.number().int().min(0).max(150).optional(),
});

const validateUserInput = (input: unknown) => {
  try {
    return UserSchema.parse(input);
  } catch (error) {
    throw new ValidationError('Invalid user data', error);
  }
};

// Secure API endpoint
const createUser = async (req: Request, res: Response) => {
  try {
    const validatedData = validateUserInput(req.body);
    const user = await userService.create(validatedData);
    res.json({ success: true, user });
  } catch (error) {
    if (error instanceof ValidationError) {
      res.status(400).json({ error: error.message });
    } else {
      res.status(500).json({ error: 'Internal server error' });
    }
  }
};
```

## Documentation Standards

### Code Documentation Requirements
- **Function Documentation**: All exported functions must have JSDoc comments
- **Complex Logic**: Inline comments for non-obvious implementations
- **API Documentation**: OpenAPI/Swagger specs for all endpoints
- **README Files**: Comprehensive setup and usage instructions

### Documentation Implementation Standards

#### ✅ Correct Documentation Patterns
```typescript
/**
 * Calculates the monthly payment for a loan
 * @param principal - The principal amount of the loan
 * @param interestRate - Annual interest rate as a decimal (e.g., 0.05 for 5%)
 * @param termInMonths - The loan term in months
 * @returns The monthly payment amount
 * @throws {Error} When input parameters are invalid
 * @example
 * ```typescript
 * const payment = calculateMonthlyPayment(100000, 0.05, 360);
 * console.log(payment); // 536.82
 * ```
 */
const calculateMonthlyPayment = (
  principal: number,
  interestRate: number,
  termInMonths: number
): number => {
  if (principal <= 0 || interestRate < 0 || termInMonths <= 0) {
    throw new Error('Invalid loan parameters');
  }

  const monthlyRate = interestRate / 12;
  const payment = principal * 
    (monthlyRate * Math.pow(1 + monthlyRate, termInMonths)) /
    (Math.pow(1 + monthlyRate, termInMonths) - 1);

  return Math.round(payment * 100) / 100;
};
```

## Enforcement and Compliance

### Automated Enforcement
- **ESLint Rules**: Strict ESLint configuration with TypeScript rules
- **Prettier**: Consistent code formatting
- **Husky**: Pre-commit hooks for quality gates
- **CI/CD Checks**: All standards enforced in CI pipeline

### Quality Gates
- **Code Review**: All code must pass peer review
- **Testing**: All tests must pass with required coverage
- **Performance**: Performance budgets must be met
- **Accessibility**: Accessibility tests must pass
- **Security**: Security scans must show no high/critical issues

### Continuous Improvement
- **Monthly Reviews**: Regular review of standards and practices
- **Training**: Ongoing training on best practices
- **Tooling Updates**: Regular updates to linting and testing tools
- **Metrics Tracking**: Track compliance metrics and improvement trends

## Conclusion

These enterprise coding standards ensure high-quality, maintainable, and secure code across the SKIIN Switzerland project. All team members must follow these standards, and compliance is enforced through automated tooling and code review processes.

Regular review and updates of these standards ensure they remain current with industry best practices and project needs.