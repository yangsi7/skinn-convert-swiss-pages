# working_files/conventions.md

> **VERSION**: 2.0 - Enhanced with concrete examples, setup guides, and forbidden patterns
> **LAST UPDATED**: 2025-07-17
> **PURPOSE**: Project-specific conventions and patterns for consistent, high-quality development

## Project Setup Guides

### New Project Initialization

#### NextJS + Supabase + shadcn/ui
```bash
# 1. Create NextJS app
npx create-next-app@latest project-name \
  --typescript \
  --tailwind \
  --app \
  --src-dir \
  --import-alias "@/*"

# 2. Install core dependencies
cd project-name
npm install @supabase/supabase-js @supabase/auth-helpers-nextjs
npm install @tanstack/react-query zod react-hook-form
npm install -D @types/node

# 3. Setup shadcn/ui
npx shadcn-ui@latest init

# 4. Create environment files
echo "NEXT_PUBLIC_SUPABASE_URL=your-url" > .env.local
echo "NEXT_PUBLIC_SUPABASE_ANON_KEY=your-key" >> .env.local
cp .env.local .env.example

# 5. Generate Supabase types
npx supabase gen types typescript --project-id "your-project" > types/database.ts
```

#### Vite + React + TypeScript
```bash
# 1. Create Vite app
npm create vite@latest project-name -- --template react-ts

# 2. Setup Tailwind CSS
cd project-name
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

# 3. Configure Tailwind
echo '@tailwind base;\n@tailwind components;\n@tailwind utilities;' > src/index.css

# 4. Install essential packages
npm install react-router-dom @tanstack/react-query axios
npm install zod react-hook-form @hookform/resolvers
npm install -D @types/react @types/react-dom
```

### Project Structure Template

```
project-root/
├── .claude/                    # Claude-specific configurations
│   └── CLAUDE.md              # Project context for Claude
├── working_files/             # Development artifacts
│   ├── CLAUDE_PROCESS.md      # Import universal methodology
│   ├── todo.md                # Task tracking
│   ├── planning.md            # Technical planning
│   ├── conventions.md         # This file
│   ├── event-stream.md        # Development log
│   └── doc-ref.md            # Documentation index
├── docs/                      # All documentation
│   ├── architecture/          # System design docs
│   ├── discovery/             # Research and analysis
│   ├── patterns/              # Reusable patterns
│   ├── decisions/             # ADRs
│   └── archive/               # Obsolete docs
├── src/                       # Source code
└── tests/                     # Test files
```

## Coding Conventions

### TypeScript Best Practices

```typescript
// ✅ GOOD: Explicit types, interfaces, proper naming
interface UserProfile {
  id: string;
  email: string;
  createdAt: Date;
  metadata?: Record<string, unknown>;
}

async function fetchUserProfile(userId: string): Promise<UserProfile> {
  // Implementation
}

// ❌ BAD: Any types, unclear naming, missing types
async function getData(id) {
  // Don't do this
}
```

### React Component Patterns

```tsx
// ✅ GOOD: Typed props, clear structure, ≤50 LOC
interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
}

export default function Button({ 
  variant = 'primary',
  size = 'md',
  isLoading = false,
  onClick,
  children 
}: ButtonProps) {
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center',
        variants[variant],
        sizes[size],
        isLoading && 'opacity-50 cursor-not-allowed'
      )}
      onClick={onClick}
      disabled={isLoading}
    >
      {isLoading ? <Spinner /> : children}
    </button>
  );
}

// ❌ BAD: Untyped, too long, mixed concerns
function MyComponent(props) {
  // 200 lines of mixed logic, UI, and side effects
}
```

### State Management Patterns

```tsx
// ✅ GOOD: Server state with TanStack Query
function useUserProfile(userId: string) {
  return useQuery({
    queryKey: ['user', userId],
    queryFn: () => fetchUserProfile(userId),
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
}

// ✅ GOOD: Local state with clear purpose
function SearchInput() {
  const [query, setQuery] = useState('');
  const debouncedQuery = useDebounce(query, 300);
  
  // Use debouncedQuery for API calls
}

// ❌ BAD: Prop drilling, unnecessary global state
function App() {
  const [user, setUser] = useState();
  // Passing user through 5 levels of components
}
```

## Design System Conventions

### Theme-Aware Components

```tsx
// ✅ GOOD: Using CSS variables for theming
const Card = ({ children }: CardProps) => (
  <div className="bg-background border-border text-foreground rounded-lg p-6">
    {children}
  </div>
);

// ❌ BAD: Hardcoded colors
const Card = ({ children }) => (
  <div className="bg-white border-gray-200 text-black">
    {children}
  </div>
);
```

### Responsive Design

```tsx
// ✅ GOOD: Mobile-first responsive design
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  {items.map(item => (
    <Card key={item.id}>
      <h3 className="text-lg md:text-xl lg:text-2xl">{item.title}</h3>
    </Card>
  ))}
</div>

// ❌ BAD: Desktop-only design
<div style={{ display: 'flex', width: '1200px' }}>
  {/* Fixed width, no responsive behavior */}
</div>
```

### Animation Patterns

```tsx
// ✅ GOOD: Performance-optimized animations
const fadeIn = {
  initial: { opacity: 0, transform: 'translateY(20px)' },
  animate: { opacity: 1, transform: 'translateY(0)' },
  transition: { duration: 0.6, ease: 'easeOut' }
};

// ❌ BAD: Layout-shifting animations
const badAnimation = {
  initial: { height: 0 },
  animate: { height: 'auto' }, // Causes reflow
};
```

## File Organization

### Feature-Based Structure

```
src/
├── features/
│   ├── auth/
│   │   ├── components/
│   │   │   ├── LoginForm.tsx
│   │   │   └── RegisterForm.tsx
│   │   ├── hooks/
│   │   │   └── useAuth.ts
│   │   ├── services/
│   │   │   └── auth.service.ts
│   │   └── types/
│   │       └── auth.types.ts
│   └── dashboard/
│       ├── components/
│       ├── hooks/
│       └── services/
```

### Import Organization

```typescript
// ✅ GOOD: Organized imports
// 1. React/Next
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

// 2. External libraries
import { useQuery } from '@tanstack/react-query';
import { z } from 'zod';

// 3. Internal - absolute paths
import { Button } from '@/components/ui/button';
import { useAuth } from '@/hooks/useAuth';

// 4. Internal - relative paths
import { formatDate } from './utils';

// 5. Types
import type { User } from '@/types';

// ❌ BAD: Mixed, unorganized imports
import { Button } from '../../../components/ui/button';
import React from 'react';
import './styles.css';
import { useState } from 'react';
```

## Testing Conventions

### Component Testing

```tsx
// ✅ GOOD: Comprehensive component test
describe('Button', () => {
  it('renders with correct text', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByRole('button')).toHaveTextContent('Click me');
  });

  it('calls onClick when clicked', async () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
    
    await userEvent.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('shows loading state', () => {
    render(<Button isLoading>Submit</Button>);
    expect(screen.getByRole('button')).toBeDisabled();
  });
});
```

### Hook Testing

```tsx
// ✅ GOOD: Hook test with renderHook
describe('useAuth', () => {
  it('returns user when authenticated', () => {
    const { result } = renderHook(() => useAuth());
    
    act(() => {
      result.current.login({ email: 'test@example.com', password: 'password' });
    });
    
    expect(result.current.user).toBeDefined();
    expect(result.current.isAuthenticated).toBe(true);
  });
});
```

## Forbidden Patterns

### ❌ NEVER DO THESE

1. **Never commit secrets**
   ```typescript
   // ❌ FORBIDDEN
   const API_KEY = 'sk_live_abcd1234';
   
   // ✅ Use environment variables
   const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
   ```

2. **Never use any type**
   ```typescript
   // ❌ FORBIDDEN
   function processData(data: any) { }
   
   // ✅ Define proper types
   function processData(data: UserData) { }
   ```

3. **Never ignore errors**
   ```typescript
   // ❌ FORBIDDEN
   try {
     await riskyOperation();
   } catch (e) {
     // Silent fail
   }
   
   // ✅ Handle errors properly
   try {
     await riskyOperation();
   } catch (error) {
     console.error('Operation failed:', error);
     toast.error('Something went wrong');
   }
   ```

4. **Never modify shadcn/ui components directly**
   ```typescript
   // ❌ FORBIDDEN: Editing node_modules or ui/ components
   
   // ✅ Create wrapper components
   export function CustomButton(props: ButtonProps) {
     return <Button {...props} className={cn('custom-styles', props.className)} />;
   }
   ```

5. **Never create files without proper structure**
   ```typescript
   // ❌ FORBIDDEN: Random files in root
   /utils.js
   /helpers.tsx
   /stuff.ts
   
   // ✅ Organized structure
   /src/utils/date.utils.ts
   /src/helpers/validation.helpers.ts
   ```

## Performance Guidelines

### Image Optimization

```tsx
// ✅ GOOD: Optimized images
import Image from 'next/image';

<Image
  src="/hero.jpg"
  alt="Hero image"
  width={1200}
  height={600}
  priority
  placeholder="blur"
  blurDataURL={blurDataUrl}
/>

// ❌ BAD: Unoptimized images
<img src="/huge-image.jpg" />
```

### Bundle Size Management

```typescript
// ✅ GOOD: Dynamic imports for large libraries
const Chart = dynamic(() => import('recharts').then(mod => mod.LineChart), {
  ssr: false,
  loading: () => <Skeleton className="h-64" />
});

// ❌ BAD: Importing entire libraries
import * as Recharts from 'recharts';
```

## Documentation Standards

### Component Documentation

```tsx
/**
 * Button component with multiple variants and sizes
 * 
 * @example
 * ```tsx
 * <Button variant="primary" size="lg" onClick={handleClick}>
 *   Click me
 * </Button>
 * ```
 */
```

### Function Documentation

```typescript
/**
 * Formats a date to a human-readable string
 * 
 * @param date - The date to format
 * @param options - Formatting options
 * @returns Formatted date string
 * 
 * @example
 * formatDate(new Date(), { style: 'short' }) // "Jan 1, 2024"
 */
function formatDate(date: Date, options?: FormatOptions): string {
  // Implementation
}
```

## Git Conventions

### Branch Naming

```bash
# ✅ GOOD
feature/user-authentication
fix/navigation-mobile-menu
chore/update-dependencies

# ❌ BAD
my-branch
fix-stuff
johns-work
```

### Commit Messages

```bash
# ✅ GOOD
feat: Add user authentication flow

- Implement login/logout functionality  
- Add JWT token management
- Create auth context provider

# ❌ BAD
"fixed stuff"
"WIP"
"asdfasdf"
```

## Security Checklist

- [ ] All user inputs are validated with Zod
- [ ] API routes check authentication
- [ ] Environment variables are properly typed
- [ ] No secrets in code or git history
- [ ] Content Security Policy headers set
- [ ] CORS properly configured
- [ ] Rate limiting on API routes
- [ ] SQL injection prevention (parameterized queries)

## Quick Reference

### Common Commands

```bash
# Development
npm run dev              # Start dev server
npm run build           # Build for production
npm run lint            # Run ESLint
npm run type-check      # Run TypeScript compiler

# Testing
npm test                # Run unit tests
npm run test:e2e        # Run E2E tests
npm run test:coverage   # Generate coverage report

# Database (Supabase)
npx supabase gen types  # Generate TypeScript types
npx supabase db reset   # Reset database

# Code Quality
npx prettier --write .  # Format code
npx eslint . --fix      # Fix linting issues
```

### Useful Snippets

```typescript
// React component template
import { cn } from '@/lib/utils';

interface ComponentNameProps {
  className?: string;
  children?: React.ReactNode;
}

export default function ComponentName({ 
  className,
  children 
}: ComponentNameProps) {
  return (
    <div className={cn('', className)}>
      {children}
    </div>
  );
}

// Custom hook template
export function useHookName() {
  const [state, setState] = useState();
  
  useEffect(() => {
    // Effect logic
  }, []);
  
  return { state };
}

// API route template (Next.js)
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  try {
    // Logic here
    return NextResponse.json({ data });
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
```

---

Remember: These conventions are living guidelines. Update them as the project evolves, but always maintain consistency across the codebase.