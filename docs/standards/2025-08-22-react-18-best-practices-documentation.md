# React 18+ Best Practices Documentation

**Research ID:** RCC-002-RS-001-A  
**Date:** 2025-08-22  
**Domain:** Frontend Standards - React 18+ Best Practices  
**Status:** Complete  

## Executive Summary

This document provides comprehensive React 18+ best practices for the SKIIN Switzerland healthcare application, focusing on modern hooks patterns, component composition, state management, performance optimization, and Server Components usage guidelines.

## 1. React 18+ Core Features and Best Practices

### 1.1 Concurrent Features

**Automatic Batching**
```tsx
// ✅ Recommended: React 18+ automatically batches state updates
function handleClick() {
  setCount(c => c + 1);
  setFlag(f => !f);
  // No need for unstable_batchedUpdates
}

// ✅ Use flushSync for synchronous updates when needed
import { flushSync } from 'react-dom';
flushSync(() => {
  setCount(c => c + 1);
});
```

**Suspense and Concurrent Rendering**
```tsx
// ✅ Recommended: Use Suspense for data fetching
function UserProfile({ userId }: { userId: string }) {
  return (
    <Suspense fallback={<UserProfileSkeleton />}>
      <UserData userId={userId} />
      <Suspense fallback={<PostsLoadingSkeleton />}>
        <UserPosts userId={userId} />
      </Suspense>
    </Suspense>
  );
}
```

### 1.2 Modern Hooks Patterns

**useId for Accessibility**
```tsx
// ✅ Recommended: Use useId for stable IDs
import { useId } from 'react';

function FormField({ label, type = 'text' }: FormFieldProps) {
  const id = useId();
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input id={id} type={type} />
    </>
  );
}
```

**useDeferredValue for Performance**
```tsx
// ✅ Recommended: Defer expensive operations
function SearchResults({ query }: { query: string }) {
  const deferredQuery = useDeferredValue(query);
  const results = useMemo(
    () => searchProducts(deferredQuery),
    [deferredQuery]
  );
  
  return <ProductList results={results} />;
}
```

**useTransition for Non-Blocking Updates**
```tsx
// ✅ Recommended: Use transitions for navigation
function TabContainer() {
  const [isPending, startTransition] = useTransition();
  const [tab, setTab] = useState('home');

  function selectTab(nextTab: string) {
    startTransition(() => {
      setTab(nextTab);
    });
  }

  return (
    <>
      <TabList onTabSelect={selectTab} />
      {isPending && <Spinner />}
      <TabContent tab={tab} />
    </>
  );
}
```

### 1.3 Component Composition Guidelines

**Compound Components Pattern**
```tsx
// ✅ Recommended: Use compound components for complex UI
interface TabsContextType {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const TabsContext = createContext<TabsContextType | undefined>(undefined);

function Tabs({ children, defaultTab }: TabsProps) {
  const [activeTab, setActiveTab] = useState(defaultTab);
  
  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab }}>
      <div className="tabs-container">{children}</div>
    </TabsContext.Provider>
  );
}

Tabs.List = function TabsList({ children }: { children: React.ReactNode }) {
  return <div className="tabs-list" role="tablist">{children}</div>;
};

Tabs.Tab = function Tab({ value, children }: TabProps) {
  const context = useContext(TabsContext);
  const isActive = context?.activeTab === value;
  
  return (
    <button
      role="tab"
      aria-selected={isActive}
      onClick={() => context?.setActiveTab(value)}
      className={cn("tab", isActive && "tab-active")}
    >
      {children}
    </button>
  );
};
```

**Render Props Pattern (Modern)**
```tsx
// ✅ Recommended: Custom hooks over render props
function useToggle(initialValue = false) {
  const [value, setValue] = useState(initialValue);
  
  const toggle = useCallback(() => setValue(v => !v), []);
  const setTrue = useCallback(() => setValue(true), []);
  const setFalse = useCallback(() => setValue(false), []);
  
  return { value, toggle, setTrue, setFalse } as const;
}

// Usage
function ToggleComponent() {
  const { value: isOpen, toggle } = useToggle();
  
  return (
    <>
      <button onClick={toggle}>Toggle</button>
      {isOpen && <Panel />}
    </>
  );
}
```

### 1.4 State Management Patterns

**useState with Reducer Pattern**
```tsx
// ✅ Recommended: Use useState with functional updates
function Counter() {
  const [count, setCount] = useState(0);
  
  const increment = useCallback(() => setCount(c => c + 1), []);
  const decrement = useCallback(() => setCount(c => c - 1), []);
  const reset = useCallback(() => setCount(0), []);
  
  return { count, increment, decrement, reset };
}
```

**useReducer for Complex State**
```tsx
// ✅ Recommended: Use useReducer for complex state logic
type FormState = {
  fields: Record<string, string>;
  errors: Record<string, string>;
  isSubmitting: boolean;
  isDirty: boolean;
};

type FormAction = 
  | { type: 'SET_FIELD'; field: string; value: string }
  | { type: 'SET_ERROR'; field: string; error: string }
  | { type: 'START_SUBMIT' }
  | { type: 'SUBMIT_SUCCESS' }
  | { type: 'SUBMIT_ERROR'; errors: Record<string, string> };

function formReducer(state: FormState, action: FormAction): FormState {
  switch (action.type) {
    case 'SET_FIELD':
      return {
        ...state,
        fields: { ...state.fields, [action.field]: action.value },
        isDirty: true,
        errors: { ...state.errors, [action.field]: '' }
      };
    case 'START_SUBMIT':
      return { ...state, isSubmitting: true };
    case 'SUBMIT_SUCCESS':
      return {
        ...state,
        isSubmitting: false,
        isDirty: false,
        errors: {}
      };
    default:
      return state;
  }
}
```

## 2. Performance Optimization Techniques

### 2.1 Memoization Strategies

**React.memo with Comparison Function**
```tsx
// ✅ Recommended: Use memo with proper comparison
const UserCard = React.memo(function UserCard({ user, onSelect }: UserCardProps) {
  return (
    <div className="user-card">
      <img src={user.avatar} alt={user.name} />
      <h3>{user.name}</h3>
      <button onClick={() => onSelect(user.id)}>Select</button>
    </div>
  );
}, (prevProps, nextProps) => {
  return prevProps.user.id === nextProps.user.id &&
         prevProps.user.name === nextProps.user.name;
});
```

**useMemo for Expensive Calculations**
```tsx
// ✅ Recommended: Memoize expensive calculations
function ProductList({ products, filters }: ProductListProps) {
  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      return filters.category ? product.category === filters.category : true;
    }).sort((a, b) => {
      return filters.sortBy === 'price' 
        ? a.price - b.price 
        : a.name.localeCompare(b.name);
    });
  }, [products, filters.category, filters.sortBy]);
  
  return (
    <div>
      {filteredProducts.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
```

### 2.2 Code Splitting and Lazy Loading

**Route-based Code Splitting**
```tsx
// ✅ Recommended: Lazy load routes
const HomePage = lazy(() => import('../pages/HomePage'));
const ProductPage = lazy(() => import('../pages/ProductPage'));
const AboutPage = lazy(() => import('../pages/AboutPage'));

function App() {
  return (
    <Router>
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </Suspense>
    </Router>
  );
}
```

**Component-based Lazy Loading**
```tsx
// ✅ Recommended: Lazy load heavy components
const HeavyChart = lazy(() => import('./HeavyChart'));

function Dashboard() {
  const [showChart, setShowChart] = useState(false);
  
  return (
    <div>
      <h1>Dashboard</h1>
      <button onClick={() => setShowChart(true)}>
        Show Chart
      </button>
      {showChart && (
        <Suspense fallback={<ChartSkeleton />}>
          <HeavyChart />
        </Suspense>
      )}
    </div>
  );
}
```

### 2.3 Virtual Scrolling for Large Lists

```tsx
// ✅ Recommended: Use virtualization for large datasets
import { FixedSizeList as List } from 'react-window';

function VirtualizedList({ items }: { items: any[] }) {
  const Row = ({ index, style }: { index: number; style: React.CSSProperties }) => (
    <div style={style}>
      <ItemComponent item={items[index]} />
    </div>
  );

  return (
    <List
      height={600}
      itemCount={items.length}
      itemSize={80}
      overscanCount={10}
    >
      {Row}
    </List>
  );
}
```

## 3. Server Components Usage Guidelines

### 3.1 Server Component Patterns

**Data Fetching in Server Components**
```tsx
// ✅ Recommended: Fetch data in Server Components
async function UserProfile({ userId }: { userId: string }) {
  const user = await getUserById(userId);
  const posts = await getUserPosts(userId);
  
  return (
    <div>
      <UserInfo user={user} />
      <Suspense fallback={<PostsSkeleton />}>
        <UserPosts posts={posts} />
      </Suspense>
    </div>
  );
}
```

**Client Component Boundaries**
```tsx
// server-component.tsx (Server Component)
import ClientInteractiveForm from './client-interactive-form';

async function ServerPage() {
  const data = await fetchData();
  
  return (
    <div>
      <h1>Server Rendered Content</h1>
      <StaticContent data={data} />
      {/* Client boundary */}
      <ClientInteractiveForm initialData={data} />
    </div>
  );
}

// client-interactive-form.tsx (Client Component)
'use client';

function ClientInteractiveForm({ initialData }: { initialData: any }) {
  const [formData, setFormData] = useState(initialData);
  
  return (
    <form onSubmit={handleSubmit}>
      {/* Interactive form elements */}
    </form>
  );
}
```

## 4. Error Handling Best Practices

### 4.1 Error Boundaries

```tsx
// ✅ Recommended: Use Error Boundaries for production
class ErrorBoundary extends React.Component<
  { children: React.ReactNode; fallback?: React.ReactNode },
  { hasError: boolean; error?: Error }
> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
    // Log to error reporting service
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback || <ErrorFallback error={this.state.error} />;
    }

    return this.props.children;
  }
}
```

### 4.2 Async Error Handling

```tsx
// ✅ Recommended: Handle async errors with useErrorBoundary
import { useErrorBoundary } from 'react-error-boundary';

function AsyncComponent() {
  const { showBoundary } = useErrorBoundary();
  
  const handleAsyncOperation = async () => {
    try {
      await riskyAsyncOperation();
    } catch (error) {
      showBoundary(error);
    }
  };
  
  return <button onClick={handleAsyncOperation}>Risky Operation</button>;
}
```

## 5. Testing Best Practices

### 5.1 Component Testing

```tsx
// ✅ Recommended: Test component behavior, not implementation
import { render, screen, fireEvent } from '@testing-library/react';
import { expect, test } from 'vitest';

test('Counter increments when button is clicked', async () => {
  render(<Counter initialValue={0} />);
  
  const incrementButton = screen.getByRole('button', { name: /increment/i });
  const counter = screen.getByTestId('counter-value');
  
  expect(counter).toHaveTextContent('0');
  
  await fireEvent.click(incrementButton);
  
  expect(counter).toHaveTextContent('1');
});
```

### 5.2 Hook Testing

```tsx
// ✅ Recommended: Test custom hooks with renderHook
import { renderHook, act } from '@testing-library/react';

test('useCounter hook', () => {
  const { result } = renderHook(() => useCounter(0));
  
  expect(result.current.count).toBe(0);
  
  act(() => {
    result.current.increment();
  });
  
  expect(result.current.count).toBe(1);
});
```

## 6. Healthcare-Specific Considerations

### 6.1 Data Privacy and Security

```tsx
// ✅ Recommended: Sanitize sensitive data
function PatientForm({ patient }: { patient: PatientData }) {
  // Never log sensitive data
  const handleSubmit = (data: FormData) => {
    // Sanitize before API calls
    const sanitizedData = sanitizeHealthcareData(data);
    submitPatientData(sanitizedData);
  };
  
  return (
    <form onSubmit={handleSubmit}>
      {/* Healthcare form fields */}
    </form>
  );
}
```

### 6.2 Accessibility for Healthcare Applications

```tsx
// ✅ Recommended: Enhanced accessibility for medical interfaces
function MedicalAlert({ severity, message }: MedicalAlertProps) {
  const alertId = useId();
  
  return (
    <div
      role="alert"
      aria-describedby={alertId}
      className={cn(
        'medical-alert',
        severity === 'critical' && 'medical-alert-critical'
      )}
    >
      <h2 id={alertId}>{message}</h2>
      <button 
        aria-label="Acknowledge medical alert"
        onClick={handleAcknowledge}
      >
        Acknowledge
      </button>
    </div>
  );
}
```

## 7. Swiss Localization Considerations

### 7.1 Multi-language Support

```tsx
// ✅ Recommended: Use proper i18n patterns
function LocalizedComponent() {
  const { t, locale } = useTranslation();
  
  const formatMedicalDate = (date: Date) => {
    return new Intl.DateTimeFormat(locale, {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }).format(date);
  };
  
  return (
    <div>
      <h1>{t('medical.title')}</h1>
      <p>{t('appointment.date', { date: formatMedicalDate(appointmentDate) })}</p>
    </div>
  );
}
```

## Implementation Guidelines

### Immediate Actions
1. **Update Development Standards**: Adopt React 18+ patterns in new components
2. **Refactor Legacy Code**: Gradually migrate class components to functional components with hooks
3. **Performance Audit**: Identify components that would benefit from React.memo and useMemo
4. **Error Boundary Implementation**: Add error boundaries around major feature areas
5. **Testing Enhancement**: Ensure all new components follow testing best practices

### Quality Gates
- All new components must use React 18+ patterns
- Performance improvements must be measurable
- Error boundaries required for all major features
- Test coverage minimum 80% for new components
- Accessibility compliance verified for all healthcare interfaces

### Success Metrics
- Bundle size reduction through code splitting
- Improved Core Web Vitals scores
- Reduced error rates in production
- Enhanced user experience for healthcare workflows
- Full Swiss multi-language support maintained

---

**Status:** ✅ Complete  
**Next Steps:** Integration with TypeScript strict mode standards and performance optimization guidelines