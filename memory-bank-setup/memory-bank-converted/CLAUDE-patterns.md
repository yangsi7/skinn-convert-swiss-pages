# CLAUDE-patterns.md
<!-- Established code patterns and conventions -->

## React Component Patterns

### Atomic Design Structure
```typescript
// Atoms: ≤50 lines
export const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return <button className="..." {...props}>{children}</button>;
};

// Molecules: Compose atoms
export const FormField = ({ label, error, children }) => (
  <div className="space-y-2">
    <Label>{label}</Label>
    {children}
    {error && <ErrorMessage>{error}</ErrorMessage>}
  </div>
);

// Organisms: Business logic
export const EligibilityForm = () => {
  const { control, handleSubmit } = useForm();
  // Complex logic here
};
```

### State Management
```typescript
// Context for global state
const AppContext = createContext<AppState>({});

// TanStack Query for server state
const { data, isLoading } = useQuery({
  queryKey: ['users'],
  queryFn: fetchUsers
});

// Local state for UI
const [isOpen, setIsOpen] = useState(false);
```

## TypeScript Patterns

### Strict Type Safety
```typescript
// Always use strict mode
"strict": true,
"noImplicitAny": true,

// Discriminated unions
type Result<T> = 
  | { success: true; data: T }
  | { success: false; error: string };

// Type guards
function isError(result: Result<any>): result is { success: false; error: string } {
  return !result.success;
}
```

### Zod Validation
```typescript
const UserSchema = z.object({
  email: z.string().email(),
  age: z.number().min(18).max(120)
});

type User = z.infer<typeof UserSchema>;
```

## Tailwind CSS Patterns

### Design Tokens Usage
```css
/* Use semantic colors */
.button-primary {
  @apply bg-lp-primary-blue hover:bg-lp-dark-blue text-white;
}

/* Consistent spacing */
.section {
  @apply py-8 md:py-12 lg:py-16;
}

/* Responsive design */
.container {
  @apply px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto;
}
```

## File Organization

### Component Structure
```
src/components/
├── ui/           # Base shadcn/ui components
├── features/     # Feature-specific components
│   └── eligibility/
│       ├── atoms/
│       ├── molecules/
│       └── organisms/
├── layout/       # Layout components
└── progressive/  # Animated components
```

### Service Layer
```typescript
// services/api.ts
export class ApiService {
  private client = createClient();
  
  async fetchData<T>(endpoint: string): Promise<T> {
    // Error handling, retry logic
  }
}
```

## Testing Patterns

### Component Testing
```typescript
// Vitest for unit tests
describe('Button', () => {
  it('renders children', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });
});

// Puppeteer for E2E
await page.goto('http://localhost:8080');
await page.click('[data-testid="submit-button"]');
```

## Error Handling

### Consistent Error Boundaries
```typescript
class ErrorBoundary extends Component {
  componentDidCatch(error: Error, info: ErrorInfo) {
    logError(error, info);
  }
  
  render() {
    if (this.state.hasError) {
      return <ErrorFallback />;
    }
    return this.props.children;
  }
}
```

### API Error Handling
```typescript
try {
  const data = await apiCall();
} catch (error) {
  if (error instanceof NetworkError) {
    // Handle network issues
  } else if (error instanceof ValidationError) {
    // Handle validation
  } else {
    // Generic error handling
  }
}
```

## Performance Patterns

### Code Splitting
```typescript
const LazyComponent = lazy(() => import('./HeavyComponent'));

<Suspense fallback={<Loading />}>
  <LazyComponent />
</Suspense>
```

### Memoization
```typescript
const MemoizedComponent = memo(({ data }) => {
  const processedData = useMemo(() => 
    expensiveOperation(data), [data]
  );
  
  return <div>{processedData}</div>;
});
```

## Accessibility Patterns

### ARIA Labels
```tsx
<button 
  aria-label="Close dialog"
  onClick={onClose}
>
  <X className="h-4 w-4" />
</button>
```

### Focus Management
```typescript
useEffect(() => {
  if (isOpen) {
    firstFocusableElement?.focus();
  }
}, [isOpen]);
```

## i18n Patterns

### Translation Keys
```typescript
const translations = {
  en: {
    welcome: "Welcome to SKIIN",
    eligibility: {
      title: "Check Your Eligibility"
    }
  },
  de: {
    welcome: "Willkommen bei SKIIN",
    eligibility: {
      title: "Prüfen Sie Ihre Berechtigung"
    }
  }
};
```

### Dynamic Language Routing
```typescript
<Route path="/:lang/home" element={<Home />} />
```

## Security Patterns

### Input Sanitization
```typescript
const sanitizedInput = DOMPurify.sanitize(userInput);
```

### Secure API Calls
```typescript
const headers = {
  'Content-Type': 'application/json',
  'X-CSRF-Token': csrfToken
};
```

## Documentation Patterns

### Component Documentation
```typescript
/**
 * Button component with multiple variants
 * @param variant - Visual style variant
 * @param size - Button size
 * @example
 * <Button variant="primary" size="lg">Click me</Button>
 */
```

### README Structure
```markdown
# Component Name
## Overview
## Installation
## Usage
## Props
## Examples
```

---
*These patterns ensure consistency, maintainability, and quality across the SKIIN Switzerland codebase.*