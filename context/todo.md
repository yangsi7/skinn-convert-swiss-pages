# TODO – SKIIN Switzerland Marketing Website
VERSION: 11.1
LAST UPDATED: 2025-08-19
PROCESS-COMPLIANCE: CLAUDE_PROCESS.md v5.0

This is the active task list for the SKIIN Switzerland marketing website. Current focus: Multi-Panel Expert Review of Eligibility Questionnaire System.

## CURRENT PRIORITY - Multi-Panel Expert Review of Eligibility Questionnaire System 🆕 [MPR-001]

### Phase 1: Expert Panel Review [MPR-001] - 4 hours ✅ IN PROGRESS
- [~] Conduct Swiss Healthcare Regulatory Expert assessment
- [~] Perform Database Architecture Expert review  
- [~] Execute UX/Accessibility Expert evaluation
- [~] Complete Security & Compliance Officer audit
- [~] Conduct Frontend Architecture Expert analysis
- [~] Perform Product Manager business requirements review
- [ ] Synthesize findings and create consolidated report
- [ ] Identify critical issues with severity ratings
- [ ] Provide go/no-go recommendation with rationale

### Phase 2: Risk Assessment & Mitigation [MPR-002] - 2 hours
- [ ] Categorize identified risks by impact and likelihood
- [ ] Develop mitigation strategies for high-priority issues
- [ ] Create implementation priority recommendations
- [ ] Document regulatory compliance gaps
- [ ] Establish quality assurance checkpoints

### Phase 3: Implementation Guidance [MPR-003] - 1 hour
- [ ] Create implementation roadmap based on findings
- [ ] Define acceptance criteria for critical components
- [ ] Establish testing requirements and validation protocols
- [ ] Document architecture approval conditions
- [ ] Provide next steps and handoff documentation

## NEW PRIORITY - Eligibility Questionnaire Implementation 🆕 [EQ-001]

### Phase 1: Technical Architecture & Foundation [EQ-001] - 12-16 hours
- [ ] Create FormContext with TypeScript interfaces for all form stages
- [ ] Implement state machine logic using XState or custom reducer
- [ ] Set up Supabase database schema for form submissions and OTP
- [ ] Configure OTP authentication for email and phone verification
- [ ] Design FormStage wrapper component with progress tracking
- [ ] Create OTPVerification component for email/phone
- [ ] Build ProgressStepper component with accessibility
- [ ] Implement session management for resume functionality

### Phase 2: Form Stage Implementation [EQ-002] - 16-20 hours
- [ ] Stage 0: Contact & Account with OTP verification
- [ ] Stage 1: Eligibility Gate with conditional branching
- [ ] Stage 2: Detailed Information with file uploads
- [ ] Stage 3: Review & Consents (insurance-specific)
- [ ] Implement emergency alert system for contraindications
- [ ] Add Swiss insurance model logic and GP referral system

### Phase 3: Payment & Self-Pay Integration [EQ-003] - 10-12 hours
- [ ] Create self-pay user journey with phone OTP
- [ ] Integrate Stripe payment processing
- [ ] Build GP referral packet PDF generation
- [ ] Implement payment confirmation and receipt system
- [ ] Add shipping address collection and validation

## IMMEDIATE PRIORITY - S&W Design System Standardization 🚨 NEW

### Phase 1: Theme Switcher Replacement [SWD-001] - 2 hours
- [ ] Create CopyVariantSelector component
  - [ ] Design dropdown with messaging options (benefit-led, clinical, urgency)
  - [ ] Implement variant switching logic
  - [ ] Store selection in localStorage
- [ ] Remove ThemeSwitcher from Navbar
  - [ ] Delete palette icon button
  - [ ] Replace with copy variant selector
- [ ] Update ThemeContext to always use 'sw-design'
  - [ ] Remove theme switching logic
  - [ ] Keep only copy variant logic
- [ ] Test copy variant switching

### Phase 2: Fix Critical Issues [SWD-002] - 3 hours
- [ ] Debug Solutions page blank rendering
  - [ ] Check route configuration
  - [ ] Verify component imports
  - [ ] Fix rendering issues
- [ ] Ensure all pages load correctly
  - [ ] Test all Solutions sub-pages
  - [ ] Test all Partners sub-pages
  - [ ] Test How It Works pages
  - [ ] Test About pages

### Phase 3: Design System Alignment - Solutions Pages [SWD-003] - 4 hours
- [ ] Update /solutions/10-day-heart-screening
  - [ ] Apply S&W Design hero pattern
  - [ ] Fix color scheme (remove hardcoded colors)
  - [ ] Add scroll animations
  - [ ] Update button styles
  - [ ] Fix spacing (py-20/md:py-30)
- [ ] Update /solutions/3x-screening
  - [ ] Apply consistent design
  - [ ] Add hover effects
  - [ ] Update typography

### Phase 4: Design System Alignment - Partners Pages [SWD-004] - 4 hours
- [ ] Update /partners/general-practitioners
  - [ ] Apply S&W Design principles
  - [ ] Add animated sections
  - [ ] Fix color consistency
- [ ] Update /partners/cardiologists
  - [ ] Same design updates
- [ ] Update /partners/telemedicine
  - [ ] Same design updates
- [ ] Update /partners/corporate
  - [ ] Same design updates

### Phase 5: Design System Alignment - How It Works [SWD-005] - 3 hours
- [ ] Update main How It Works page
  - [ ] Apply S&W Design hero
  - [ ] Add process visualization
  - [ ] Implement animations
- [ ] Update sub-pages
  - [ ] Process details
  - [ ] FAQ section
  - [ ] Technology explanation

### Phase 6: Design System Alignment - About Pages [SWD-006] - 3 hours
- [ ] Update About Myant Health page
  - [ ] Apply S&W Design
  - [ ] Add team section animations
  - [ ] Fix typography and spacing
- [ ] Update company info pages
  - [ ] Mission/vision styling
  - [ ] Team member cards
  - [ ] Contact information

### Phase 7: Component Library Creation [SWD-007] - 4 hours
- [ ] Create ProgressiveSection component
  - [ ] Scroll-triggered animations
  - [ ] Configurable animation types
  - [ ] Dark mode support
- [ ] Create ProgressiveCard component
  - [ ] Hover effects
  - [ ] Icon support
  - [ ] Consistent padding
- [ ] Create StatCard component
  - [ ] Animated counters
  - [ ] Gradient backgrounds
- [ ] Create FeatureGrid component
  - [ ] Responsive grid
  - [ ] Staggered animations
- [ ] Document component usage

### Phase 8: Documentation & Enforcement [SWD-008] - 2 hours
- [ ] Update conventions.md
  - [ ] Set S&W Design as default
  - [ ] Remove theme switching references
  - [ ] Add copy variant documentation
- [ ] Update CLAUDE.md
  - [ ] Document S&W Design requirement
  - [ ] Add component patterns
- [ ] Create migration guide
  - [ ] Step-by-step conversion
  - [ ] Common pitfalls
  - [ ] Testing checklist

## Previously Completed - Landing Page Design Implementation 🚨

### Phase 1: Design System Setup [LPD-001] - 2 hours ✅ COMPLETED
- [x] Create new theme variant "landing-page-2025"
  - [x] Add to ThemeContext.tsx theme options
  - [x] Define color mappings for new palette
  - [x] Test theme switching functionality
- [x] Map new color palette to CSS variables
  - [x] --lp-primary-blue: #5298F2 (Light Blue - CTAs)
  - [x] --lp-dark-blue: #004C96 (Dark Blue - Headlines)
  - [x] --lp-charcoal: #475259 (Charcoal - Body text)
  - [x] --lp-black: #0D0D0D (Near Black)
  - [x] --lp-purple: #5549A6 (Purple - Comparison)
  - [x] --lp-purple-light: #BCA2F2 (Light Purple)
  - [x] --lp-white: #F2F2F2 (Off White)
  - [x] --lp-cream: #EEE8E1 (Cream - Backgrounds)
- [x] Update Tailwind configuration
  - [x] Add custom color utilities
  - [x] Create gradient utilities for timeline
  - [x] Add backdrop utilities for overlays
- [x] Create design token documentation
  - [x] Document color usage guidelines
  - [x] Create visual reference sheet
  - [x] Update conventions.md

### Phase 2: Component Creation [LPD-002] - 4 hours ✅ COMPLETED
- [x] Create InsuranceCoverageFlow component
  - [x] Step-by-step flow with icons
  - [x] Info panel on hover/click
  - [x] Mobile-friendly accordion variant
  - [x] Add translations for all steps
- [x] Create ComfortSection component
  - [x] "Comfort meets clinical grade" messaging
  - [x] Split-screen layout design
  - [x] Image showcase integration
  - [x] Responsive behavior
- [x] Create TestimonialsV2 component
  - [x] Full-width divider variant
  - [x] Carousel option for mobile
  - [x] Quote styling with attribution
  - [x] Animation on scroll
- [x] Create ClinicalEvidenceViz component
  - [x] Data visualization for statistics
  - [x] Interactive hover states
  - [x] Source citations
  - [x] Mobile-optimized layout
- [x] Create ComparisonSection component
  - [x] Purple background (#5549A6)
  - [x] "How SKIIN Compares" table
  - [x] Feature comparison grid
  - [x] Check/cross icons
- [x] Create TimelineProcess component
  - [x] Blue gradient visualization
  - [x] Step-by-step process flow
  - [x] Progress indicators
  - [x] Mobile horizontal scroll

### Phase 3: Hero & Layout Updates [LPD-003] - 3 hours ✅ COMPLETED
- [x] Implement full-screen background effect
  - [x] Use Mother-daughter-HQ.jpg
  - [x] Parallax scrolling effect (gradient overlay)
  - [x] Gradient overlay for text readability
  - [x] Lazy loading optimization (eager for hero)
- [x] Streamline hero messaging
  - [x] "One clear message" principle
  - [x] Benefit-led headline
  - [x] Simplified subheadline
  - [x] Single primary CTA
- [x] Update CTA design system
  - [x] Primary state: #5298F2 background
  - [x] Hover state with scale effect
  - [x] Active state feedback
  - [x] Loading state animation
- [x] Add section transitions
  - [x] Smooth scroll behavior
  - [x] Fade-in animations
  - [x] Section dividers
  - [x] Consistent spacing

---

Priority Order (Updated 2025-08-19):
1. Multi-Panel Expert Review of Eligibility Questionnaire System - IMMEDIATE
2. Eligibility Questionnaire Implementation based on review findings - HIGH
3. S&W Design System Standardization - HIGH
4. Repository Conformance Chain completion - MEDIUM
5. Performance optimization and testing - LOW

Estimated Timeline: 
- Multi-Panel Expert Review: 4-6 hours
- Risk Assessment & Implementation Guidance: 3 hours
- Eligibility Questionnaire Implementation: 6-8 weeks
- S&W Design System Standardization: 3-4 weeks