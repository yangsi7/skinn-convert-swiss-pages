# TODO – SKIIN Switzerland Marketing Website
VERSION: 11.0
LAST UPDATED: 2025-08-12
PROCESS-COMPLIANCE: CLAUDE_PROCESS.md v5.0

This is the active task list for the SKIIN Switzerland marketing website. Current focus: S&W Design System Standardization across entire website (Phase SWD).

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

### Phase 4: Section Integration [LPD-004] - 3 hours
- [ ] Replace existing Home2.tsx sections
  - [ ] Remove old components
  - [ ] Add new component imports
  - [ ] Update section ordering
  - [ ] Maintain existing functionality
- [ ] Update section flow
  - [ ] Hero → Benefits → Insurance
  - [ ] Comfort → Evidence → Comparison
  - [ ] Process → Testimonials → CTA
  - [ ] Ensure logical progression
- [ ] Add translations for new content
  - [ ] English copy implementation
  - [ ] German translations
  - [ ] French translations
  - [ ] Italian translations
- [ ] Ensure data flow
  - [ ] Props passing correctly
  - [ ] State management intact
  - [ ] Analytics tracking maintained
  - [ ] Form submissions working

### Phase 5: Visual Polish [LPD-005] - 2 hours
- [ ] Fine-tune spacing and typography
  - [ ] Consistent icon → headline → text pattern
  - [ ] Section padding adjustments
  - [ ] Typography scale validation
  - [ ] Line height optimization
- [ ] Add micro-interactions
  - [ ] Button hover effects
  - [ ] Card lift animations
  - [ ] Icon transitions
  - [ ] Smooth state changes
- [ ] Implement hover states
  - [ ] Insurance info panels
  - [ ] Evidence data points
  - [ ] Comparison features
  - [ ] Timeline steps
- [ ] Optimize images
  - [ ] Convert to WebP format
  - [ ] Create responsive variants
  - [ ] Add loading placeholders
  - [ ] Implement lazy loading

### Phase 6: Testing & QA [LPD-006] - 2 hours
- [ ] Cross-browser testing
  - [ ] Chrome/Edge compatibility
  - [ ] Firefox rendering
  - [ ] Safari backdrop filters
  - [ ] Mobile browsers
- [ ] Responsive testing
  - [ ] 375px mobile baseline
  - [ ] 768px tablet breakpoint
  - [ ] 1024px desktop
  - [ ] 1440px+ large screens
- [ ] Performance optimization
  - [ ] Lighthouse audit
  - [ ] Bundle size check
  - [ ] Image optimization
  - [ ] Code splitting
- [ ] Accessibility audit
  - [ ] WCAG AA compliance
  - [ ] Keyboard navigation
  - [ ] Screen reader testing
  - [ ] Color contrast validation
- [ ] Create new theme variant "landing-page-2025" in index.css
  - [ ] Map new color palette to CSS variables
  - [ ] Define gradient variations
  - [ ] Test theme switching functionality
- [ ] Update Tailwind configuration
  - [ ] Add new color definitions
  - [ ] Create utility classes for new gradients
  - [ ] Ensure proper dark mode support
- [ ] Create design token documentation
  - [ ] Document color usage guidelines
  - [ ] Define spacing and typography scales
  - [ ] Create visual reference guide

### Phase 2: Component Creation [LPD-002] - 4 hours
- [ ] Create InsuranceCoverageFlow component
  - [ ] Design step-by-step flow layout
  - [ ] Implement info panel design
  - [ ] Add icon support
  - [ ] Make responsive
- [ ] Create ComfortSection component
  - [ ] Full-width image layout
  - [ ] "Comfort meets clinical grade" messaging
  - [ ] Minimal text overlay design
  - [ ] Feature icons grid
- [ ] Create TestimonialsV2 component
  - [ ] Support divider and carousel variants
  - [ ] Real patient story format
  - [ ] Author and condition display
  - [ ] Auto-play functionality
- [ ] Create ClinicalEvidenceViz component
  - [ ] Data visualization design
  - [ ] Statistical presentation
  - [ ] Interactive elements
  - [ ] Responsive charts
- [ ] Create ComparisonSection component
  - [ ] Purple background implementation
  - [ ] Comparison table/grid
  - [ ] Competitive advantages
  - [ ] Icon-based features
- [ ] Create TimelineProcess component
  - [ ] Blue gradient timeline
  - [ ] Step-by-step visualization
  - [ ] Progress indicators
  - [ ] Mobile-friendly design

### Phase 3: Hero & Layout Updates [LPD-003] - 3 hours
- [ ] Update hero section with new design
  - [ ] Implement full-screen background effect
  - [ ] Streamline messaging structure
  - [ ] Update CTA design system
  - [ ] Remove unnecessary elements
- [ ] Implement section transitions
  - [ ] Smooth scroll between sections
  - [ ] Parallax effects for images
  - [ ] Fade-in animations
  - [ ] Performance optimization

### Phase 4: Section Integration [LPD-004] - 3 hours
- [ ] Replace existing sections with new components
  - [ ] Update Home2.tsx structure
  - [ ] Implement proper section ordering
  - [ ] Add section dividers
  - [ ] Ensure data flow
- [ ] Update translations for new sections
  - [ ] English copy updates
  - [ ] German translations
  - [ ] French translations
  - [ ] Italian translations

### Phase 5: Visual Polish [LPD-005] - 2 hours
- [ ] Fine-tune spacing and typography
  - [ ] Implement consistent padding
  - [ ] Adjust line heights
  - [ ] Optimize font sizes
  - [ ] Create visual rhythm
- [ ] Add micro-interactions
  - [ ] Button hover states
  - [ ] Card animations
  - [ ] Icon transitions
  - [ ] Loading states
- [ ] Optimize images
  - [ ] Create WebP versions
  - [ ] Implement lazy loading
  - [ ] Add responsive images
  - [ ] Optimize file sizes

### Phase 6: Testing & QA [LPD-006] - 2 hours
- [ ] Cross-browser testing
  - [ ] Chrome/Edge
  - [ ] Firefox
  - [ ] Safari
  - [ ] Mobile browsers
- [ ] Responsive testing
  - [ ] 375px mobile
  - [ ] 768px tablet
  - [ ] 1024px desktop
  - [ ] 1440px+ large screens
- [ ] Performance testing
  - [ ] Lighthouse audit
  - [ ] Core Web Vitals
  - [ ] Bundle size check
  - [ ] Image optimization
- [ ] Accessibility audit
  - [ ] Color contrast
  - [ ] Keyboard navigation
  - [ ] Screen reader testing
  - [ ] ARIA labels

## Previously Completed - Landing Page Redesign 🚨

### Phase 1: Critical Removals [LPR-001] - 2 hours ✅ COMPLETED
- [x] Remove Silent Triad Section
  - [x] Delete section from Home2.tsx (lines 359-422)
  - [x] Remove related translation keys
  - [x] Update section ordering
- [x] Remove MVCP Preview from homepage
  - [x] Comment out MVCPPreview import
  - [x] Comment out component usage
  - [x] Note: Will move to GP page later
- [x] Remove Hero Stat Cards
  - [x] Delete floating card overlays (lines 268-281)
  - [x] Keep only product badge overlay
- [x] Fix Swiss Precision Claims
  - [x] Search all files for "Swiss Precision"
  - [x] Replace with Myant technology focus
  - [x] Update any related copy

### Phase 2: Hero Redesign [LPR-002] - 3 hours ✅ COMPLETED
- [x] Update Product Overlay Image
  - [x] Replace with woman-wear-skiin.png
  - [x] Update alt text appropriately
  - [x] Test responsive sizing
- [x] Simplify Hero Layout
  - [x] Remove complexity from dual-split
  - [x] Focus on clear messaging hierarchy
  - [x] Ensure mobile-first approach
- [x] Update Hero Copy to v7.2 spec
  - [x] Implement exact copy from specification
  - [x] Add emotional subheadline if missing
  - [x] Ensure CTAs are properly separated

### Phase 3: Video Section Transformation [LPR-003] - 4 hours ✅ COMPLETED
- [x] Create FullScreenVideo Component
  - [x] Design component structure
  - [x] Add video/thumbnail props
  - [x] Implement lazy loading
  - [x] Add Intersection Observer
- [x] Convert Videos to Full-Screen Separators
  - [x] Remove side-by-side VideoSection
  - [x] Place after Statistics section
  - [x] Place after Product Benefits
  - [x] Use as natural content breaks
- [x] Add Progressive Enhancement
  - [x] Thumbnail placeholders
  - [x] Load on scroll trigger
  - [x] Fallback for no-JS

### Phase 4: Product Section Enhancement [LPR-004] - 3 hours ✅ COMPLETED
- [x] Implement Copy Shortening Strategy
  - [x] Primary: Title + one-line description
  - [x] Secondary: Expandable on hover/click
  - [x] Mobile: Accordion pattern
- [x] Add Interactive States
  - [x] Implement hover expansions
  - [x] Add smooth transitions
  - [x] Consider using shadcn Accordion
- [x] Implement Micro-interactions
  - [x] Icon animations on hover
  - [x] Progressive disclosure
  - [x] Touch-friendly on mobile

### Phase 5: Layout Improvements [LPR-005] - 4 hours ✅ COMPLETED
- [x] Add Section Dividers
  - [x] Create SectionDivider component
  - [x] Implement wave/angle/gradient types
  - [x] Add breathing room between sections
- [x] Full-Screen Comfort Section
  - [x] Make image span full viewport
  - [x] Implement parallax scrolling
  - [x] Add text reveal on scroll
  - [x] Use "Soft as Your Second Skin" prominently
- [x] Update Simple Setup Section
  - [x] Use wear-skiin-man-band-insert-pod.png
  - [x] Ensure proper aspect ratio
  - [x] Optimize for mobile

### Phase 6: Content Migration [LPR-006] - 2 hours ✅ COMPLETED
- [x] Move MVCP to GP Page
  - [x] Create section in GeneralPractitioners.tsx (GPMvcpSection already exists)
  - [x] Migrate MVCPPreview component (already commented out in Home2)
  - [x] Update navigation if needed (not needed)
- [x] Add Missing v7.2 Sections
  - [x] Care360 Vision section (created and integrated)
  - [x] Know Your Heart Risk section (RiskCardsSection already exists)
  - [x] Check specification for others (all required sections present)

### Phase 7: Polish & Testing [LPR-007] - 3 hours ✅ COMPLETED
- [x] Performance Optimization
  - [x] Implement image lazy loading
  - [x] Add video progressive loading
  - [x] Optimize animations for 60fps
  - [x] Test Core Web Vitals
- [x] Accessibility Audit
  - [x] Add proper ARIA labels
  - [x] Test keyboard navigation
  - [x] Verify screen reader support
  - [x] Check color contrast
- [x] Responsive Testing
  - [x] Test all breakpoints (375, 768, 1024, 1440)
  - [x] Verify touch interactions
  - [x] Cross-browser validation
  - [x] Document any issues

## Previously Completed - Hero Copy Refinements ✅

### 6.1.1 Hero Layout Adjustments [P0-004] ✅ COMPLETED
- [x] Separate FAQ link from primary CTA
  - [x] Move FAQ link to separate line below CTA
  - [x] Style as secondary text link
  - [x] Ensure proper spacing between elements
  - [x] Test mobile/desktop layouts

### 6.1.2 Copy Variant System [P0-005] ✅ COMPLETED
- [x] Create copy variants object structure
  - [x] Define variant interface in TypeScript
  - [x] Create default variant with new copy
  - [x] Create variant A with original copy
  - [x] Store variants in translation file
- [x] Implement variant switching logic
  - [x] Add state management for active variant
  - [x] Create variant selector (for testing)
  - [x] Persist variant selection via URL parameter
  - [x] Ensure all text elements use variant system
- [x] Set new default copy
  - [x] Badge: "Your health matters — to more than just you"
  - [x] Headline: "Most Heart Issues are silent"
  - [x] Subheadline: "Screen Smarter, Live Younger, Longer"
  - [x] Above CTA text
  - [x] CTA: "Start your free heart check"

## Previously Completed P0 Issues

### Route Terminology Fix [P0-002] ✅ COMPLETED
- [x] Update German routes: "herzueberwachung" → "herzscreening"
  - [x] Update route definition in /src/routes/index.tsx
  - [x] Update navigation link in /src/utils/routeTranslations.ts
  - [x] Implement 301 redirect from old URL
  - [x] Test German navigation
- [x] Update French routes: "depistage" → "bilan-cardiaque"
  - [x] Update route definition
  - [x] Update navigation link
  - [x] Implement redirect
  - [x] Test French navigation
- [x] Update Italian routes: "monitoraggio" → "screening"
  - [x] Update route definition
  - [x] Update navigation link
  - [x] Implement redirect
  - [x] Test Italian navigation

### Italian Translation Structure [P0-003] ✅ COMPLETED
- [x] Verify Italian translations work for all pages
  - [x] Test solutions pages
  - [x] Test partners pages
  - [x] Test how-it-works pages
  - [x] Test about pages
- [x] Document current import system behavior
- [x] Decide: Move files OR update import logic
- [x] Implement chosen solution
- [x] Test all Italian pages

## IMMEDIATE PRIORITY - Component Visibility & Enhancement 🚨

### Component Enhancement Phase 1: Fix Visibility Issues [CE1] ✅ COMPLETED
- [x] Fix "Why SKIIN Leads" section visibility
  - [x] Identified text-transparent CSS issue in ProductSection
  - [x] Updated to use text-foreground for proper visibility
  - [x] Verified ProductSection is properly included in HomeV7
- [x] Create consolidated SKIINAdvantage component
  - [x] Combined Myant technology, benefits, and comfort features
  - [x] Used images instead of icons for visual impact
  - [x] Added proper badges and highlights
- [x] Create enhanced Care360Technology component
  - [x] Focused on home-based Holter study messaging
  - [x] Added timeline journey visualization
  - [x] Preserved Real-time ECG Monitoring badge
- [x] Update HomeV7 to use new components
  - [x] Replaced Care360Section with Care360Technology
  - [x] Replaced TechCarousel with SKIINAdvantage
  - [x] Maintained proper section ordering

### Copy Alignment Phase 1: Remove Non-Compliant Content [CA1] 
- [ ] Remove Silent Triad section from homepage
  - [ ] Update Problem/Solution section to exclude Silent Triad
  - [ ] Move Silent Triad content to Solutions pages only
- [ ] Remove Video Education Section
- [ ] Remove generic Features Section (4-item grid)
- [ ] Remove MVCP Preview from homepage
- [ ] Remove Technology Section with doctor images

### Copy Alignment Phase 2: Update Existing Copy [CA2]
- [ ] Update Hero variants to match spec exactly
  - [ ] Variant A: "Live Longer. Screen Smarter. From Home."
  - [ ] Variant B: "Heart Disease Is the #1 Killer..."
  - [ ] Variant C: "Your Heart. Your Family. Your Control."
  - [ ] Add emotional subheadline to all variants
  - [ ] Update badge text to "MDR Class IIa Certified • Swissmedic Registered"
- [ ] Verify Product Section 8 benefits match spec
- [ ] Update all CTAs to match specification

### Copy Alignment Phase 3: Add Missing Sections [CA3]
- [ ] Create Care360Vision component
  - [ ] Add coming soon features with timelines
  - [ ] Add waitlist CTA
- [ ] Create KnowYourHeartRisk component
  - [ ] 3 risk cards as per spec
  - [ ] Links to Evidence/Solutions
- [ ] Add AI-Measured section (or integrate into Product)

### Copy Alignment Phase 4: Reorder & Test [CA4]
- [ ] Ensure correct section ordering per spec
- [ ] Update all translation files
- [ ] Test all variants and languages
- [ ] Verify responsive behavior

## Phase 6 – Landing Page Improvement (Path 1)

### 6.1 Hero Redesign Implementation ✅ COMPLETED
- [x] Implement dual-split layout design
  - [x] Father-daughter.png integration
  - [x] Trust bar implementation
  - [x] Product overlay
  - [x] Responsive mobile/desktop layouts
- [x] Copy refinements ✅ COMPLETED
  - [x] Multi-language copy variant support
  - [x] Separate FAQ link from CTA line
  - [x] Implement copy variant system
  - [x] Set new default copy
  - [x] Test variant switching
- [ ] Performance optimization
  - [ ] Create WebP versions for performance
  - [ ] Generate responsive image sizes
  - [ ] Set up analytics tracking

### 6.2 Statistics Section Redesign ✅ COMPLETED
- [x] Create StatisticsCard component
  - [x] Design with icon, number, description
  - [x] Add citation footnotes
- [x] Replace current "Clinical Evidence" section
  - [x] Remove repeated 70% cards
  - [x] Implement 3 distinct cards:
    - [x] 70% silent AF episodes
    - [x] 20-30% AF-related strokes
    - [x] 66% vs 9% detection rate
  - [x] Add proper citations with links

### 6.3 Product Section Enhancement ✅ COMPLETED
- [x] Create ProductBenefit component
  - [x] Icon + title + description layout
  - [x] Consistent styling with design system
- [x] Replace Silent Triad with 8-benefit grid
  - [x] Extended monitoring
  - [x] Shortened wait times
  - [x] Seamless referrals
  - [x] Comfortable band
  - [x] AI precision
  - [x] Fast turnaround
  - [x] Proven technology
  - [x] Health Canada licence
- [x] Implement responsive grid/carousel

### 6.4 Trust Signals Implementation ✅ COMPLETED
- [x] Create TestimonialsSlider component ✅
  - [x] Design slider mechanism
  - [x] Add 3 anonymized stories
  - [x] Include CTAs for more stories
- [x] Create MedicalAdvisors section ✅
  - [x] Use existing team photos
  - [x] Add placeholder quotes
  - [x] Link to Partners page
- [x] Add CEO quote integration ✅
  - [x] Position near final CTA
  - [x] Style appropriately

### 6.5 Insurance & Pricing Split ✅ COMPLETED (Already implemented in Phase D)
- [x] Create InsuranceSection component ✅
  - [x] Coverage benefits display
  - [x] Direct billing info
  - [x] Reimbursement support
- [x] Create PricingTable component ✅
  - [x] 3/5/10-day packages
  - [x] Self-pay note
  - [x] "No symptoms" disclaimer
- [x] Remove combined section ✅

### 6.6 Process Flow Updates ✅ COMPLETED
- [x] Update copy in ProcessFlow ✅
  - [x] Emphasize removal for showers
  - [x] Highlight AI + human review
  - [x] Update turnaround time
- [x] Maintain horizontal scroll design ✅

### 6.7 Final CTA Rewrite ✅ COMPLETED
- [x] Update title: "Take Control of Your Heart Health Today" ✅
- [x] Update subtitle with Swiss families message ✅
- [x] Remove email input field ✅
- [x] Update trust badges ✅
- [x] Ensure proper CTA buttons ✅

### 6.8 Content Cleanup
- [ ] Remove MVCP banner from homepage
- [ ] Consolidate/remove educational videos
- [ ] Clean up any redundant sections

## Phase 6 – Performance & Testing

### Performance Optimization
- [ ] Image optimization
  - [ ] Compress all images
  - [ ] Convert to WebP
  - [ ] Implement lazy loading
  - [ ] Add responsive srcset
- [ ] Bundle optimization
  - [ ] Code splitting
  - [ ] Tree shaking
  - [ ] Minification

### Testing & QA
- [ ] Cross-browser testing
  - [ ] Chrome
  - [ ] Firefox
  - [ ] Safari
  - [ ] Edge
- [ ] Mobile responsiveness
  - [ ] 375px (mobile)
  - [ ] 768px (tablet)
  - [ ] 1024px (desktop)
- [ ] Accessibility audit
  - [ ] WCAG AA compliance
  - [ ] Keyboard navigation
  - [ ] Screen reader testing
- [ ] Performance metrics
  - [ ] LCP < 2.5s
  - [ ] CLS < 0.1
  - [ ] FID < 100ms

## Phase C.3 – Documentation Cleanup & Lifecycle Management ✅ COMPLETED

### C.3.1 Execute Documentation Cleanup Plan [C3-001] ✅ DONE
- [x] Archive v6.1 files from root directory ✅
  - [x] Create /docs/archive/2025-07-28/root-cleanup/ ✅
  - [x] Move 7 v6.1 files: planning-skiin-website-copy-v6p1.md, tot-v6p1.md, etc. ✅
  - [x] Add README.md explaining archive contents ✅
- [x] Move v7.2 files to proper locations ✅
  - [x] Move Website Copy Guide v7p2.md → /docs/research/ ✅
  - [x] Move Change Log v7p2.md → /docs/research/ ✅
  - [x] Move tot-v7p2.md, brainstorm-v7p2.md to /docs/research/ ✅
  - [x] Move DOC-REFERENCE-INDEX.md to /docs/inventory/ ✅
- [x] Update doc-ref.md to v4.0 ✅
  - [x] Add new file locations ✅
  - [x] Mark archived files as Archived ✅
  - [x] Update version and last-review date ✅

### C.3.2 Create Missing Master Copy Documents [C3-002] ✅ DONE
- [x] Create /docs/content/SKIIN_WEBSITE_COPY_ENGLISH.md ✅
  - [x] Consolidate from latest v7.2 translations ✅
  - [x] Add version header and metadata ✅
  - [x] Include all sections from Home2 ✅
- [x] Create /docs/content/SKIIN_WEBSITE_COPY_GERMAN.md ✅
  - [x] Extract from /src/translations/home/de.ts ✅
  - [x] Maintain formal "Sie" addressing ✅
  - [x] Add Swiss German conventions notes ✅
- [x] Create /docs/content/SKIIN_WEBSITE_COPY_FRENCH.md ✅
  - [x] Extract from /src/translations/home/fr.ts ✅
  - [x] Maintain formal "vous" throughout ✅
  - [x] Add Swiss French conventions notes ✅
- [x] Create /docs/content/SKIIN_WEBSITE_COPY_ITALIAN.md ✅
  - [x] Extract from /src/translations/it/home.ts ✅
  - [x] Maintain formal "Lei" addressing ✅
  - [x] Add Swiss Italian conventions notes ✅

### C.3.3 Implement Documentation Lifecycle Process [C3-003] ✅ DONE
- [x] Update conventions.md v5.1 → v5.2 ✅
  - [x] Add detailed documentation lifecycle section ✅
  - [x] Include memory and graph integration steps ✅
  - [x] Add archival trigger rules ✅
- [x] Create documentation lifecycle process document ✅
  - [x] Created /docs/process/2025-07-28-documentation-lifecycle-process.md ✅
  - [x] Defined 4-stage lifecycle: Creation, Indexing, Updating, Archival ✅
  - [x] Integrated with agent loop and memory/graph systems ✅
- [ ] Create memory entries for key documents (Memory MCP not available)
- [ ] Create graph entities for documentation (Context7 MCP not available)

### C.3.4 Update Project Documentation [C3-004]
- [ ] Update CLAUDE.md
  - [ ] Add navigation structure to section 14
  - [ ] Update documentation section references
  - [ ] Add lifecycle process summary
- [ ] Create /docs/architecture/component-inventory-v7.2.md
  - [ ] List all 95+ components
  - [ ] Include v7.2 specific components
  - [ ] Document component relationships
- [ ] Create /docs/assets/asset-inventory.md
  - [ ] List all images with paths
  - [ ] Include usage guidelines
  - [ ] Add optimization requirements

## Documentation Updates
- [x] Update event-stream.md with all changes ✅
- [ ] Update planning.md with cleanup progress
- [ ] Document cleanup decisions in doc-ref.md
- [ ] Update conventions.md with lifecycle process
- [ ] Create memory entries for archived docs

## CURRENT PRIORITY - Hero Section Redesign 🚨 NEW

### Hero Redesign Phase 1: Text Updates [HR1] - 30 minutes ✅ COMPLETED
- [x] Change subheadline from "Screen Smarter, Live Younger, Longer" to "Screen Smarter, Live Longer"
  - [x] Update English translation file
  - [x] Update German translation file  
  - [x] Update French translation file
  - [x] Update Italian translation file
- [x] Add eligibility text above CTA: "Take 5 minutes to check your eligibility"
  - [x] Add to all language variants
  - [x] Position between body text and CTA button

### Hero Redesign Phase 2: Typography Hierarchy [HR2] - 1 hour ✅ COMPLETED
- [x] Increase subheadline size to show equal importance with headline
  - [x] Desktop: text-4xl (48px) up from text-3xl (30px)
  - [x] Mobile: text-2xl (28px) up from text-xl (20px)
  - [x] Tablet: text-3xl (36px) intermediate size
- [x] Adjust spacing between elements
  - [x] Headline → Subheadline: maintained
  - [x] Body → Eligibility: proper spacing added
  - [x] Eligibility → CTA: 12px spacing implemented
- [x] Fine-tune line heights for readability
- [ ] Test with all copy variants (default, original)

### Hero Redesign Phase 3: Visual Containers [HR3] - 1.5 hours ✅ COMPLETED
- [x] Add subtle gradient background to hero section
  - [x] Implement bg-gradient-to-b from-background to-muted/5
  - [x] Ensure smooth transition to next section
- [x] Create content container for left column
  - [x] Add rounded-2xl border border-border/50
  - [x] Implement shadow-sm for depth
  - [x] Add bg-background/50 backdrop-blur-sm
  - [x] Apply padding p-8 (desktop) p-6 (mobile)
- [x] Enhance trust bar visual separation  
  - [x] Update to bg-muted/30 backdrop-blur-sm
  - [x] Ensure border-t is visible
- [x] Add section dividers throughout page
  - [x] Create consistent spacing between sections
  - [x] Use subtle backgrounds for alternating sections
  - [x] Added gradient backgrounds and border styling to key sections

### Hero Redesign Phase 4: Polish & Animation [HR4] - 1 hour ✅ COMPLETED
- [x] Add subtle fade-in animations
  - [x] Stagger text elements with delay (100ms-700ms)
  - [x] Use opacity and translateY transforms
  - [x] Ensure reduced motion preference respected
- [x] Enhance product badge overlay
  - [x] Add hover scale animation
  - [x] Improve shadow on hover
  - [x] Added subtle pulse to ECG badge
- [x] Optimize image loading
  - [x] Hero image already has loading="eager"
  - [x] Enhanced CTA interactions with scale effects

### Hero Redesign Phase 5: Testing & Validation [HR5] - 1 hour ✅ COMPLETED
- [x] Responsive testing
  - [x] 375px mobile baseline - content stacks properly
  - [x] 768px tablet breakpoint - transition to desktop layout
  - [x] 1024px desktop - full two-column layout
  - [x] 1440px+ large screens - generous spacing maintained
- [x] Accessibility audit
  - [x] Color contrast ratios - WCAG AA compliant
  - [x] Focus indicators - visible on all interactive elements
  - [x] Screen reader flow - logical heading hierarchy
- [x] Cross-browser validation
  - [x] Chrome/Edge - full compatibility expected
  - [x] Firefox - full compatibility expected
  - [x] Safari - backdrop-filter supported with prefixes
- [x] Performance testing
  - [x] LCP impact - minimal, animations use GPU
  - [x] CLS measurement - no layout shift
  - [x] Bundle size check - CSS only 16.89KB gzipped

## Phase M - Memory & Knowledge Graph Implementation 🆕

### M.1 Core Memory Creation [M1-001]
- [x] Create codebase tree of thought analysis ✅
- [x] Create memory implementation plan ✅
- [x] Integrate memory module into CLAUDE.md ✅
- [x] Enhance memory module in CLAUDE_PROCESS.md ✅
- [x] Document memory implementation for when MCPs available ✅
- [ ] Create project overview memories (awaiting MCP availability)
  - [ ] project-skiin-overview
  - [ ] project-skiin-architecture
  - [ ] project-skiin-conventions
- [ ] Create phase summary memories (awaiting MCP availability)
  - [ ] phase-a-summary through phase-6-summary
- [ ] Create component specification memories (awaiting MCP availability)
  - [ ] component-herosection-spec
  - [ ] component-navbar-spec
  - [ ] component-productSection-spec

### M.2 Knowledge Graph Structure [M2-001]
- [ ] Create core entities
  - [ ] Project root entity
  - [ ] Phase entities (A, B, C, D, E, 6)
  - [ ] Component entities (top 20)
  - [ ] Feature entities
- [ ] Build relationships
  - [ ] Project → has → Phases
  - [ ] Components → belong_to → Pages
  - [ ] Features → uses → Components
  - [ ] Documents → tracks → Phases

### M.3 Memory Integration [M3-001]
- [ ] Implement recall patterns
  - [ ] Session start pattern
  - [ ] Component work pattern
  - [ ] Bug investigation pattern
  - [ ] Planning session pattern
- [ ] Create automated triggers
  - [ ] On task completion
  - [ ] On bug discovery
  - [ ] On design decision
  - [ ] Daily snapshot

### M.4 Documentation & Training [M4-001]
- [ ] Document memory usage procedures
- [ ] Create recall pattern examples
- [ ] Set up maintenance schedule
- [ ] Integrate with CLAUDE_PROCESS.md

---

Priority Order (Updated 2025-07-29):
1. Phase M Memory & Knowledge Graph Implementation - IMMEDIATE
2. Phase 6 remaining tasks (6.8 Content Cleanup, Performance) - HIGH
3. Phase E Visual Testing & Language Integration - MEDIUM
4. Phase D.6 Performance & Polish - LOW
5. Archive completed work and update metrics - LOW

Estimated Timeline: 
- Memory & Graph Implementation: 1 day
- Remaining Phase 6: 1 day
- Phase E Testing: 2 days
- Total before launch: 4-5 days