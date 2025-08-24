# shadcn/ui Integration Guidelines for Swiss Healthcare Eligibility
**Version**: 1.0  
**Created**: 2025-08-22  
**Purpose**: Implementation patterns for shadcn/ui components with S&W Design system  

## Component Mapping Strategy

### Core Form Components
| shadcn/ui Base | Swiss Extension | Purpose |
|---------------|----------------|---------|
| `Input` | `MedicalInput` | Medical form inputs with validation |
| `Button` | `SwissButton` | S&W Design themed buttons |
| `Card` | `FormCard` | Step containers with progress |
| `Dialog` | `EmergencyDialog` | Medical alert modals |
| `Progress` | `FormProgress` | Multi-step progress indicator |
| `RadioGroup` | `InsuranceRadio` | Insurance selection groups |
| `Checkbox` | `ConsentCheckbox` | GDPR consent management |
| `Select` | `RegionSelect` | Swiss region/canton selection |

## Implementation Patterns

### 1. Form Step Container
```typescript
// Base: shadcn/ui Card + S&W Design styling
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface FormStepCardProps {
  title: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
  stepNumber?: number;
  totalSteps?: number;
}

export const FormStepCard = ({ 
  title, 
  description, 
  children, 
  className,
  stepNumber,
  totalSteps 
}: FormStepCardProps) => (
  <Card className={cn(
    "w-full max-w-2xl mx-auto",
    "bg-lp-white border-gray-200",
    "shadow-sm hover:shadow-md transition-shadow",
    className
  )}>
    <CardHeader className="space-y-2">
      {stepNumber && totalSteps && (
        <div className="text-sm text-lp-charcoal/60 font-medium">
          Step {stepNumber} of {totalSteps}
        </div>
      )}
      <CardTitle className="text-2xl font-semibold text-lp-dark-blue">
        {title}
      </CardTitle>
      {description && (
        <p className="text-lp-charcoal leading-relaxed">
          {description}
        </p>
      )}
    </CardHeader>
    <CardContent className="space-y-6">
      {children}
    </CardContent>
  </Card>
);
```

### 2. Medical Input Field
```typescript
// Extends shadcn/ui Input with medical-specific features
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"
import { AlertCircle, CheckCircle, Info } from "lucide-react"

interface MedicalInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  helpText?: string;
  error?: string;
  success?: boolean;
  medicalTerm?: boolean;
  required?: boolean;
}

export const MedicalInput = ({
  label,
  helpText,
  error,
  success,
  medicalTerm,
  required,
  className,
  ...props
}: MedicalInputProps) => (
  <div className="space-y-2">
    <Label className={cn(
      "text-sm font-medium text-lp-charcoal",
      "flex items-center gap-2",
      required && "after:content-['*'] after:text-red-500"
    )}>
      {label}
      {medicalTerm && (
        <Info className="h-4 w-4 text-lp-purple cursor-help" />
      )}
    </Label>
    
    <div className="relative">
      <Input
        className={cn(
          "h-12 px-4 text-base", // Mobile-friendly sizing
          "border-gray-300 focus:border-lp-primary-blue",
          "focus:ring-2 focus:ring-lp-primary-blue/10",
          error && "border-red-500 focus:border-red-500 focus:ring-red-500/10",
          success && "border-green-500 pr-10",
          className
        )}
        {...props}
      />
      
      {/* Status Icons */}
      {success && (
        <CheckCircle className="absolute right-3 top-3 h-5 w-5 text-green-500" />
      )}
      {error && (
        <AlertCircle className="absolute right-3 top-3 h-5 w-5 text-red-500" />
      )}
    </div>
    
    {/* Help Text */}
    {helpText && !error && (
      <p className="text-sm text-gray-600 leading-relaxed">
        {helpText}
      </p>
    )}
    
    {/* Error Message */}
    {error && (
      <p className="text-sm text-red-600 font-medium flex items-center gap-2">
        <AlertCircle className="h-4 w-4" />
        {error}
      </p>
    )}
  </div>
);
```

### 3. Swiss Insurance Radio Group
```typescript
// Extends shadcn/ui RadioGroup for insurance selection
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

interface InsuranceProvider {
  id: string;
  name: string;
  logo: string;
  popular?: boolean;
  regions: string[];
  models: InsuranceModel[];
}

interface InsuranceRadioProps {
  providers: InsuranceProvider[];
  selectedId?: string;
  onSelect: (id: string) => void;
  showRegions?: boolean;
}

export const InsuranceRadio = ({
  providers,
  selectedId,
  onSelect,
  showRegions = false
}: InsuranceRadioProps) => (
  <RadioGroup value={selectedId} onValueChange={onSelect}>
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {providers.map((provider) => (
        <Label
          key={provider.id}
          htmlFor={provider.id}
          className="cursor-pointer"
        >
          <Card className={cn(
            "relative p-4 hover:shadow-md transition-all",
            "border-2 border-transparent",
            selectedId === provider.id && "border-lp-primary-blue bg-lp-primary-blue/5"
          )}>
            <div className="flex items-center space-x-3">
              <RadioGroupItem
                value={provider.id}
                id={provider.id}
                className="mt-1"
              />
              
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <img
                    src={provider.logo}
                    alt={provider.name}
                    className="h-8 w-auto object-contain"
                  />
                  {provider.popular && (
                    <Badge variant="secondary" className="bg-lp-purple/10 text-lp-purple">
                      Popular
                    </Badge>
                  )}
                </div>
                
                <p className="font-medium text-lp-charcoal mt-2">
                  {provider.name}
                </p>
                
                {showRegions && (
                  <p className="text-sm text-gray-600 mt-1">
                    {provider.regions.slice(0, 3).join(", ")}
                    {provider.regions.length > 3 && "..."}
                  </p>
                )}
              </div>
            </div>
          </Card>
        </Label>
      ))}
    </div>
  </RadioGroup>
);
```

### 4. Emergency Alert Dialog
```typescript
// Extends shadcn/ui Dialog for medical emergencies
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { AlertTriangle, Phone, Users } from "lucide-react"
import { cn } from "@/lib/utils"

interface EmergencyDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  variant: "critical" | "warning" | "info";
  title: string;
  description: string;
  contraindication?: string;
  onEmergencyCall: () => void;
  onContactGP: () => void;
  onContactSupport: () => void;
}

export const EmergencyDialog = ({
  open,
  onOpenChange,
  variant,
  title,
  description,
  contraindication,
  onEmergencyCall,
  onContactGP,
  onContactSupport
}: EmergencyDialogProps) => (
  <Dialog open={open} onOpenChange={onOpenChange}>
    <DialogContent className={cn(
      "max-w-md mx-4",
      variant === "critical" && "border-red-500",
      variant === "warning" && "border-amber-500",
      variant === "info" && "border-lp-primary-blue"
    )}>
      <DialogHeader className="text-center space-y-4">
        <div className={cn(
          "mx-auto w-12 h-12 rounded-full flex items-center justify-center",
          variant === "critical" && "bg-red-100",
          variant === "warning" && "bg-amber-100", 
          variant === "info" && "bg-blue-100"
        )}>
          <AlertTriangle className={cn(
            "h-6 w-6",
            variant === "critical" && "text-red-600",
            variant === "warning" && "text-amber-600",
            variant === "info" && "text-blue-600"
          )} />
        </div>
        
        <DialogTitle className="text-xl font-semibold text-lp-dark-blue">
          {title}
        </DialogTitle>
        
        <DialogDescription className="text-lp-charcoal leading-relaxed">
          {description}
        </DialogDescription>
        
        {contraindication && (
          <div className="p-3 bg-red-50 border border-red-200 rounded-md">
            <p className="text-sm font-medium text-red-800">
              Detected: {contraindication}
            </p>
          </div>
        )}
      </DialogHeader>
      
      <div className="space-y-3 mt-6">
        {variant === "critical" && (
          <Button
            onClick={onEmergencyCall}
            className="w-full bg-red-600 hover:bg-red-700 text-white"
            size="lg"
          >
            <Phone className="h-4 w-4 mr-2" />
            Call Emergency (144)
          </Button>
        )}
        
        <Button
          onClick={onContactGP}
          variant="outline"
          className="w-full"
          size="lg"
        >
          <Users className="h-4 w-4 mr-2" />
          Contact Your GP
        </Button>
        
        <Button
          onClick={onContactSupport}
          variant="outline"
          className="w-full"
          size="lg"
        >
          SKIIN Medical Support
        </Button>
      </div>
    </DialogContent>
  </Dialog>
);
```

### 5. Multi-Step Progress Indicator
```typescript
// Custom progress component for multi-step forms
import { Progress } from "@/components/ui/progress"
import { CheckCircle } from "lucide-react"
import { cn } from "@/lib/utils"

interface FormStep {
  id: string;
  label: string;
  status: "completed" | "active" | "upcoming";
}

interface FormProgressProps {
  steps: FormStep[];
  currentStep: number;
  variant?: "horizontal" | "vertical";
}

export const FormProgress = ({
  steps,
  currentStep,
  variant = "horizontal"
}: FormProgressProps) => {
  const progressPercentage = (currentStep / (steps.length - 1)) * 100;
  
  if (variant === "vertical") {
    return (
      <div className="space-y-4">
        {steps.map((step, index) => (
          <div key={step.id} className="flex items-center space-x-3">
            <div className={cn(
              "w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium",
              step.status === "completed" && "bg-green-500 text-white",
              step.status === "active" && "bg-lp-primary-blue text-white",
              step.status === "upcoming" && "bg-gray-200 text-gray-600"
            )}>
              {step.status === "completed" ? (
                <CheckCircle className="h-4 w-4" />
              ) : (
                index + 1
              )}
            </div>
            
            <div className="flex-1">
              <p className={cn(
                "font-medium",
                step.status === "active" && "text-lp-primary-blue",
                step.status === "completed" && "text-green-600",
                step.status === "upcoming" && "text-gray-500"
              )}>
                {step.label}
              </p>
            </div>
          </div>
        ))}
      </div>
    );
  }
  
  return (
    <div className="w-full space-y-4">
      <Progress 
        value={progressPercentage} 
        className="h-2 bg-gray-200"
      />
      
      <div className="flex justify-between">
        {steps.map((step, index) => (
          <div key={step.id} className="flex flex-col items-center space-y-2">
            <div className={cn(
              "w-6 h-6 rounded-full flex items-center justify-center text-xs font-medium",
              step.status === "completed" && "bg-green-500 text-white",
              step.status === "active" && "bg-lp-primary-blue text-white", 
              step.status === "upcoming" && "bg-gray-200 text-gray-600"
            )}>
              {step.status === "completed" ? (
                <CheckCircle className="h-3 w-3" />
              ) : (
                index + 1
              )}
            </div>
            
            <span className={cn(
              "text-xs text-center max-w-20",
              step.status === "active" && "text-lp-primary-blue font-medium",
              step.status === "completed" && "text-green-600",
              step.status === "upcoming" && "text-gray-500"
            )}>
              {step.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
```

## Styling Conventions

### 1. Color Usage Patterns
```scss
// S&W Design color applications
.form-primary {
  @apply bg-lp-primary-blue text-white;
  @apply hover:bg-lp-primary-blue/90;
  @apply focus:ring-2 focus:ring-lp-primary-blue/20;
}

.form-secondary {
  @apply bg-lp-purple text-white;
  @apply hover:bg-lp-purple/90;
}

.form-success {
  @apply bg-green-500 text-white;
  @apply border-green-500;
}

.form-error {
  @apply bg-red-50 border-red-500 text-red-700;
}

.form-warning {
  @apply bg-amber-50 border-amber-500 text-amber-700;
}
```

### 2. Responsive Breakpoint Usage
```scss
// Mobile-first responsive patterns
.form-container {
  @apply w-full max-w-2xl mx-auto;
  @apply p-4 md:p-6 lg:p-8;
}

.form-grid {
  @apply grid gap-4;
  @apply grid-cols-1 md:grid-cols-2;
}

.form-input {
  @apply h-12 px-4 text-base;
  @apply md:h-10 md:text-sm; // Smaller on desktop
}

.form-button {
  @apply h-12 px-6 text-base font-medium;
  @apply md:h-10 md:px-4 md:text-sm;
}
```

### 3. Animation Classes
```scss
// Form-specific animations
.form-slide-in {
  @apply animate-slide-in;
}

.form-error-shake {
  animation: shake 0.5s ease-in-out;
}

.form-success-pulse {
  @apply animate-pulse-soft;
}

@keyframes shake {
  0%, 100% { transform: translateX(0); }
  25% { transform: translateX(-8px); }
  75% { transform: translateX(8px); }
}
```

## Accessibility Implementation

### Focus Management
```typescript
// Focus trap for modals
import { useFocusTrap } from "@/hooks/useFocusTrap";

export const AccessibleModal = ({ children, open }: ModalProps) => {
  const focusTrapRef = useFocusTrap(open);
  
  return (
    <Dialog open={open}>
      <DialogContent ref={focusTrapRef}>
        {children}
      </DialogContent>
    </Dialog>
  );
};
```

### Screen Reader Support
```typescript
// Live region for form announcements
export const FormAnnouncer = ({ message }: { message: string }) => (
  <div
    role="status"
    aria-live="polite"
    aria-atomic="true"
    className="sr-only"
  >
    {message}
  </div>
);
```

## Testing Patterns

### Component Testing
```typescript
import { render, screen, fireEvent } from "@testing-library/react";
import { MedicalInput } from "./MedicalInput";

describe("MedicalInput", () => {
  it("displays error state correctly", () => {
    render(
      <MedicalInput
        label="Medical History"
        error="This field is required"
        required
      />
    );
    
    expect(screen.getByRole("textbox")).toHaveClass("border-red-500");
    expect(screen.getByText("This field is required")).toBeVisible();
  });
  
  it("supports keyboard navigation", () => {
    render(<MedicalInput label="Test" />);
    
    const input = screen.getByRole("textbox");
    input.focus();
    
    expect(input).toHaveFocus();
    expect(input).toHaveClass("focus:ring-2");
  });
});
```

## Performance Optimizations

### Component Memoization
```typescript
import { memo } from "react";

export const MedicalInput = memo(function MedicalInput(props: MedicalInputProps) {
  // Component implementation
});

export const FormStepCard = memo(function FormStepCard(props: FormStepCardProps) {
  // Component implementation
});
```

### Lazy Loading
```typescript
// Lazy load heavy form components
const InsuranceSelector = lazy(() => import("./InsuranceSelector"));
const PaymentForm = lazy(() => import("./PaymentForm"));

export const EligibilityForm = () => (
  <Suspense fallback={<FormSkeleton />}>
    <Routes>
      <Route path="/insurance" element={<InsuranceSelector />} />
      <Route path="/payment" element={<PaymentForm />} />
    </Routes>
  </Suspense>
);
```

This integration guide ensures seamless compatibility between shadcn/ui components and the S&W Design system while maintaining Swiss healthcare-specific requirements and accessibility standards.