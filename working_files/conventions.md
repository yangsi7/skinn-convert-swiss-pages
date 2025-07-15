# Project Conventions - SKIIN Switzerland Website

## Technical Architecture Standards

### Tech Stack
- **Framework**: React 18 + TypeScript + Vite
- **Styling**: Tailwind CSS + shadcn/ui components
- **Routing**: React Router DOM with multilingual URL structure
- **State Management**: React Context (LanguageContext)
- **Analytics**: Google Analytics 4 + HubSpot tracking
- **Forms**: React Hook Form with Zod validation

### File Organization
```
src/
├── components/          # Reusable UI components
│   ├── analytics/      # Analytics and tracking
│   ├── home/          # Homepage sections
│   ├── layout/        # Navbar, Footer
│   ├── medical/       # Medical-specific components
│   ├── trust/         # Trust indicators, badges
│   └── ui/           # shadcn/ui base components
├── contexts/          # React context providers
├── hooks/            # Custom React hooks
├── lib/              # Utility libraries
├── pages/            # Page-level components
├── routes/           # Routing configuration
├── translations/     # i18n content by section/language
├── types/            # TypeScript type definitions
└── utils/            # General utilities
```

### Naming Conventions
- **Components**: PascalCase (`HeroSection.tsx`, `ContactForm.tsx`)
- **Hooks**: camelCase with "use" prefix (`useTranslation.ts`)
- **Utilities**: camelCase (`routeTranslations.ts`)
- **Types**: PascalCase interfaces (`ContactFormData`)
- **Files**: Descriptive, purpose-indicating names

### Import Standards
- **Alias**: `@/` maps to `src/` directory
- **Order**: External libs → Internal components → Types → Utils
- **Grouping**: Blank lines between import groups

### Code Quality Standards
- **TypeScript**: Strict mode, complete type coverage
- **Linting**: ESLint for code quality
- **Formatting**: Prettier (if configured)
- **Testing**: >80% coverage for critical paths

## Design System Standards

### Core Principles
1. **Medical Credibility**: Professional tones over "heavenly" aesthetics
2. **Swiss Quality**: Subtle quality indicators throughout
3. **Information Density**: Comprehensive yet breathable layouts

### Color Palette
```scss
// Primary Colors - Professional & Trustworthy
$primary-navy: #1e3a5f;        // Main brand color
$primary-charcoal: #2c3e50;    // Text and headers
$medical-teal: #00796b;        // Healthcare associations

// Action Colors
$action-red: #e74c3c;          // Urgent CTAs
$success-green: #27ae60;       // Positive states

// Swiss Indicators
$swiss-red: #da291c;           // Official Swiss red (sparingly)
$certification-gold: #ffc107;   // Badges/certifications

// AVOID: Light blues, "heavenly" colors that undermine trust
```

### Typography
- **Primary Font**: Inter font family
- **Hierarchy**: 6-level scale (H1-H6 + body)
- **Weights**: Regular (400), Medium (500), Semibold (600), Bold (700)
- **Line Height**: 1.5 for body, 1.2 for headers

### Spacing
- **Grid**: 8px base unit
- **Scale**: 4px, 8px, 16px, 24px, 32px, 48px, 64px, 96px
- **Sections**: 30% more whitespace than typical sites
- **Components**: Generous padding for medical aesthetic

### Component Standards
- **shadcn/ui**: Primary component library
- **Consistency**: Reuse existing patterns before creating new
- **Props**: TypeScript interfaces for all props
- **Variants**: Use variant patterns for different styles

## Content Standards

### Tone of Voice
**For Patients**:
- Warm, reassuring, empowering
- Clear explanations without condescension
- Focus on comfort and peace of mind
- Address common fears and concerns

**For Healthcare Professionals**:
- Professional, evidence-based
- Efficient and practical
- Respect for clinical expertise
- Focus on diagnostic value and workflow

### Writing Style
- **Language**: Formal address (Sie in German, vous in French)
- **Medical Terms**: Precise terminology with patient-friendly explanations
- **Tone Balance**: Swiss professionalism with human warmth
- **Claims**: Evidence-based, referenced where appropriate

### Content Organization
- **Progressive Disclosure**: Overview → Details → Deep dive
- **Scannable**: Headers, bullets, callouts for key info
- **Translation Ready**: Consider text expansion (German ~30% longer)
- **SEO Optimized**: Natural keyword integration

### Translation Standards
- **Primary**: English (MVP implementation)
- **Secondary**: German (formal Sie), French (formal vous)
- **Consistency**: Standardized medical terminology
- **Cultural**: Swiss-specific insurance and regulatory context

## Quality Standards

### Performance Requirements
- **Load Time**: <3 seconds on 3G connection
- **Core Web Vitals**: Green scores across all metrics
- **Bundle Size**: Monitor and optimize regularly
- **Images**: WebP format, lazy loading, responsive

### Accessibility Standards
- **Compliance**: WCAG 2.1 AA minimum
- **Color Contrast**: 4.5:1 for normal text, 3:1 for large text
- **Navigation**: Full keyboard accessibility
- **Screen Readers**: Proper ARIA labels and semantic markup
- **Focus Management**: Clear focus indicators

### Testing Standards
- **Unit Tests**: Critical components and utilities
- **Integration Tests**: User flows and form submissions
- **Visual Tests**: Puppeteer for frontend validation
- **Cross-Browser**: Chrome, Firefox, Safari, Edge
- **Mobile**: iOS Safari, Chrome Android

### Security Standards
- **Dependencies**: Regular security audits
- **Data Handling**: GDPR/Swiss DSG compliance
- **Forms**: Input validation and sanitization
- **Analytics**: Consent-based tracking only

## Swiss Medical Device Compliance

### Regulatory Requirements
- **Medical Device Status**: Class IIa device disclaimers
- **Swissmedic**: Registration notices where required
- **Data Protection**: Swiss DSG + GDPR compliance
- **Medical Claims**: Evidence-based, validated statements

### Content Requirements
- **Disclaimers**: "Prescription required" notices
- **Warnings**: Contraindications (e.g., pacemaker patients)
- **Usage**: "Not for emergency use" clarifications
- **Professional Oversight**: "Consult physician" guidance

### Legal Pages
- **Impressum**: Swiss company registration details
- **Privacy Policy**: DSG-compliant data handling
- **Terms of Use**: Medical device service terms
- **Medical Disclaimer**: Professional consultation requirements

## Development Workflow

### Process Standards
- **Iteration First**: Extend existing before creating new
- **Documentation**: Update working files after changes
- **Testing**: Verify changes before deployment
- **Review**: Code review for standards compliance

### File Management
- **Working Files**: Always current and authoritative
- **Documentation**: Reference detailed docs in /docs/
- **Archives**: Organized by date, with README context
- **Updates**: Immediate update after significant changes

### Quality Gates
- **Before Implementation**: Verify alignment with conventions
- **During Development**: Follow established patterns
- **After Changes**: Update documentation, run tests
- **Before Deployment**: Full quality checklist review

## Repository Organization

### Directory Structure
Follow strict organization defined in `working_files/repository-conventions.md`:
- **Root**: Only config files, CLAUDE.md, README.md, LICENSE
- **src/**: All source code with proper subdirectories
- **docs/**: All documentation, reports, specifications
- **scripts/**: Test scripts, utilities, build scripts
- **test-results/**: Temporary test outputs (gitignored)
- **working_files/**: The 5 core working files + archives

### File Placement Rules
- Documentation → `docs/` (never in root)
- Test scripts → `scripts/tests/`
- Screenshots → `test-results/` or archive
- Reports → `docs/reports/`
- Archives → `docs/archive/YYYY-MM-DD/`

## Reference Documentation
- **Repository Organization**: working_files/repository-conventions.md
- **Detailed Design System**: docs/design-system/
- **Content Guidelines**: docs/content-guidelines/
- **Compliance Details**: docs/compliance/
- **Architecture Specs**: docs/specifications/
- **Implementation Guides**: docs/implementation/

---

**Note**: These conventions are living standards. Update this file when architectural decisions, design patterns, or content standards change. Always reference the most current version before starting work.