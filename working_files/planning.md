# Planning Document – SKIIN Switzerland Marketing Website
VERSION: 6.0
LAST UPDATED: 2025-07-29
PROCESS-COMPLIANCE: CLAUDE_PROCESS.md v5.0
PURPOSE: Landing Page Redesign (LPR) based on user feedback + Memory Implementation + Previous phases

This planning document covers the current Landing Page Redesign (LPR) initiative based on user feedback, along with memory implementation and previous phases.

## Current Priority: Eligibility Questionnaire Implementation 🚨 NEW (2025-08-19)

**Phase EQ**: Production-Ready Eligibility Questionnaire System
- **Duration**: 6 months (24 weeks)
- **Budget**: CHF 299,000 (including 15% contingency)
- **Team**: 17.5 FTE across security, regulatory, medical, and development
- **Critical Blockers**: Swissmedic registration, OTP security, PCI DSS compliance

### Expert Panel Assessment Results:
- Swiss Healthcare Regulatory: 75/100 (Missing Swissmedic registration - BLOCKER)
- Database Architecture: 82/100 (Good foundation, optimization needed)
- UX/Accessibility: 87/100 (Excellent, minor improvements)
- Security & Compliance: 68/100 (Critical security gaps - BLOCKER)
- Frontend Architecture: 79/100 (Solid, needs state management)
- Product Management: 76/100 (Good business fit, needs analytics)
- **Overall Confidence**: 77% (after remediation plan implementation)

### Phase 0: Emergency Security Fixes (Week 1) - P0 CRITICAL
- Fix OTP vulnerabilities (rate limiting, expiry, brute force protection)
- Implement secure session management with JWT rotation
- Add CSRF protection and IP-based blocking
- Pass penetration testing before any beta deployment
- **Budget**: CHF 15,000 | **Team**: 2 Senior Security Engineers

### Phase 1: Regulatory Compliance (Weeks 2-13) - P0 CRITICAL  
- Achieve Swissmedic Class IIa medical device registration
- Establish medical professional oversight framework
- Implement ISO 13485 quality management system
- Complete clinical evaluation with 500+ patients
- **Budget**: CHF 85,000 | **Lead**: Regulatory Consultant + Medical Advisor

### Phase 2: Payment Infrastructure (Weeks 6-10, parallel) - P0 CRITICAL
- Achieve PCI DSS Level 1 compliance
- Implement tokenization (zero card storage)
- Integrate Swiss payment provider (Datatrans)
- Enable insurance billing for SWICA, CSS, Helsana, etc.
- **Budget**: CHF 45,000 | **Lead**: Payment Specialist

### Phase 3: Technical Architecture (Weeks 11-16) - P1 HIGH
- Implement Zustand state management for complex forms
- Build comprehensive audit trail for medical compliance
- Optimize database with indexes and Redis caching
- Enhance session security and performance
- **Budget**: CHF 55,000 | **Lead**: Frontend/Backend Architects

### Phase 4: Beta Testing & Validation (Weeks 17-20) - P1 HIGH
- Medical accuracy validation by 3+ cardiologists
- User testing with 50+ medical professionals
- Achieve >60% form completion rate
- Zero critical bugs before production
- **Budget**: CHF 25,000 | **Lead**: Product Manager + Medical Advisor

### Phase 5: Production Deployment (Weeks 21-24) - P1 HIGH
- Gradual rollout: 10% → 25% → 50% → 100%
- 99.9% uptime with monitoring and alerting
- Medical oversight reviewing flagged cases
- Analytics and A/B testing framework
- **Budget**: CHF 35,000 | **Lead**: DevOps + Full Team

## Previous Priority: Repository Conformance Chain 🚨 UPDATED (2025-08-19)

**Phase RC**: Repository Conformance Implementation with Comprehensive Testing Integration
- **Phase 1a**: Current State Analysis ✅ COMPLETED (75% conformance, 5 critical issues identified)
- **Phase 1b**: Research & Best Practices ✅ COMPLETED (Modern standards analysis)
- **Phase 2a**: Master Implementation Planning ✅ COMPLETED (3-phase plan, 86 hours, 12 weeks)
- **Phase 2b**: Documentation Update & Governance ✅ COMPLETED (Standards established)
- **Phase 3a**: Critical Infrastructure Implementation ✅ COMPLETED (TypeScript strict, Solutions page fixed, theme switcher replaced, CI/CD enhanced)
- **Phase 3b**: Documentation Maintenance ✅ COMPLETED (Implementation docs, standards, validation procedures)
- **Phase 3.5**: Comprehensive Testing Validation 🆕 NEXT (24-32 hours, testing-qa-agent execution)
- **Phase 4**: Architecture Enhancement (Deferred - pending testing validation)
- **Phase 5**: S&W Design System Standardization (Deferred - pending architecture)

**Phase 3a Implementation Results (✅ COMPLETED):**
- TypeScript strict mode enabled across entire codebase with ES2022 target
- Solutions page critical bug fixed (missing Shirt icon import resolved)
- Theme switcher replaced with copy variant selector (benefit-led, clinical, urgency)
- S&W Design established as default and only theme
- CI/CD pipeline enhanced with Core Web Vitals monitoring and automated testing
- ESLint v9 flat config implemented with enterprise standards
- Code quality enforcement established with comprehensive validation

**Phase 3b Documentation Maintenance (✅ COMPLETED):**
- Updated context files with Phase 3a implementation results
- Created comprehensive implementation documentation
- Updated technical standards documentation  
- Maintained architecture documentation
- Created validation documentation
- Prepared Phase 2 documentation foundation

**Phase 3.5 Comprehensive Testing Validation (🆕 NEXT - CRITICAL):**
- **Duration**: 3-4 days (24-32 hours)
- **Resource**: testing-qa-agent (primary), planning-task-agent (coordination)
- **Scope**: Complete validation of all Phase 3a implementations
- **Testing Areas**:
  - Functional Testing: 98 routes × 4 languages, copy variants, TypeScript strict
  - Visual Testing: 5 breakpoints × 4 browsers, S&W Design validation
  - Performance Testing: Core Web Vitals, bundle analysis, runtime metrics
  - Accessibility Testing: WCAG 2.1 AA, screen readers, keyboard navigation
  - Integration Testing: CI/CD pipeline, E2E workflows, API validation
  - Security Testing: Vulnerability scanning, medical compliance
- **Success Criteria**: 95%+ test pass rate, all critical issues resolved
- **Deliverables**: Test report, issue register, validation certificates

**Previous Priority**: S&W Design System Standardization (Phase SWD) - DEFERRED
- Establish S&W Design as the default design system across entire website
- Replace theme switcher with copy variant selector  
- Align all pages (Solutions, Partners, How It Works, About) with S&W Design
- Progress: 5% complete - will resume after Repository Conformance

**Key Requirements:**
- S&W Design is the default and only design system for the website
- Remove palette theme switcher, replace with messaging/copy variant selector
- All pages must follow S&W Design principles:
  - Colors: #5298F2 (primary blue), #5549A6 (purple), #004C96 (dark blue), #475259 (charcoal)
  - Spacing: py-20 mobile, md:py-30 desktop
  - Animations: scroll-triggered with staggered delays
  - Typography: IBM Plex Sans with defined scale
  - Card patterns with hover effects
  - Consistent section layouts

**Current Issues Found:**
- Solutions page (/solutions/10-day-heart-screening) appears blank
- Partners, How It Works, and About pages use inconsistent styling
- Theme switcher allows changing to non-S&W designs
- No copy variant system implemented

**Previous Priorities:**
- Memory & Knowledge Graph Implementation (Phase M) - BLOCKED (MCP unavailable)
- Hero Section Redesign (HR) - COMPLETED ✅ (2025-07-29)
- Landing Page Redesign (LPR) - COMPLETED ✅

## Executive Summary

Current active initiatives:

**Phase LPD**: Landing Page Design Implementation (0% complete) 🆕
- Phase 1: Design System Setup (new theme, colors, gradients)
- Phase 2: Component Creation (6 new components)
- Phase 3: Hero & Layout Updates (new messaging, full-screen bg)
- Phase 4: Section Integration (replace existing sections)
- Phase 5: Visual Polish (spacing, animations, hover states)
- Phase 6: Testing & QA (cross-browser, mobile, performance)

**Phase LPR**: Landing Page Redesign (100% complete) ✅ COMPLETED
- Phase 1: Critical Removals (Silent Triad, MVCP, stat cards, Swiss claims)
- Phase 2: Hero Redesign (product image, layout simplification, copy update)
- Phase 3: Video Transformation (full-screen separators, lazy loading)
- Phase 4: Product Enhancement (shortened copy, interactive states)
- Phase 5: Layout Improvements (dividers, full-screen comfort, setup image)
- Phase 6: Content Migration (MVCP to GP page, add missing sections)
- Phase 7: Polish & Testing (performance, accessibility, responsive)

**Phase C**: Working Files Organization (✅ COMPLETE)
- Working file format corrections (event-stream.md one-line format) ✓
- Documentation inventory and categorization ✓
- Navigation structure documentation ✓
- Documentation cleanup and lifecycle process ✓
- Clear separation of specifications vs implementation docs ✓

**Phase D**: Landing Page v7.2 Implementation (85% complete)
- Research & Gap Analysis ✓
- Core Component Development ✓
- Component Integration ✓
- Visual Asset Integration (80% complete)
- Critical v7.2 Requirements ✓
- Performance & Polish (pending)

**Phase E**: Visual Testing & Language Integration (0% complete)
- Alternative visual testing strategies (without puppeteer)
- Navigation testing approach
- German translation integration (v7.2 spec)
- French translation integration (v7.2 spec)
- Italian translation integration (v7.2 spec)
- Multi-language routing verification

**Phase 6**: Landing Page Improvement (80% complete) 🆕
- Critical P0 blockers fixed ✅
- Hero redesign with dual-split layout ✅
- Hero copy refinements ✅
- Statistics consolidation ✅
- Product section enhancement ✅
- Trust signals implementation ✅
- Content cleanup - PENDING
- Performance optimization - PENDING
- Testing & QA - PENDING

**Phase M**: Memory & Knowledge Graph (40% complete) 🆕 IMMEDIATE PRIORITY
- Codebase tree of thought analysis ✅
- Memory implementation plan created ✅
- CLAUDE.md memory integration sections added ✅
- CLAUDE_PROCESS.md memory module enhanced ✅
- Memory implementation documentation ready ✅
- Core memory entries creation - BLOCKED (MCP unavailable)
- Knowledge graph structure building - BLOCKED (MCP unavailable)
- Integration with development workflow - DOCUMENTED
- Automated memory patterns - DOCUMENTED

## URGENT: Landing Page Copy Alignment Required 🚨

A comprehensive review of the landing page against the official copy specification (`/docs/implementation/skiin-ch-copy 29072025.md`) has revealed significant gaps that must be addressed immediately:

### Critical Issues Found:
1. **Silent Triad on Homepage** - Must be removed (only for Solutions pages)
2. **Missing Sections** - Care360 Vision, Know Your Heart Risk
3. **Non-Spec Content** - Video section, MVCP Preview, generic features
4. **Copy Misalignment** - Hero variants don't match specification

### Implementation Priority:
This takes precedence over all other Phase 6 work. The copy specification document is the authoritative source and must be followed exactly.

## Current State Analysis

### Phase C Status
1. **event-stream.md**: Fixed to one-line format ✓
2. **planning.md**: Updated with current plans ✓
3. **conventions.md**: Added navigation structure ✓
4. **doc-ref.md**: Categorized and updated to v3.2 ✓
5. **todo.md**: Active tasks properly tracked ✓

### Phase D Status
1. **Components Created**: 8 new components (100%)
2. **Visual Assets**: 20+ images integrated (80%)
3. **v7.2 Requirements**: All critical requirements met
4. **P2 Bug**: data-testid attributes added (80%)
5. **Remaining**: Performance optimization, final polish

## Phase C – Working Files Cleanup & Documentation Organization

### C.1 Working File Format Corrections ✅ COMPLETE

**Completed**:
1. Fixed event-stream.md format ✓
   - Converted multi-line entries to single-line format
   - Standardized timestamp format: [YYYY-MM-DD HH:MM]
   - Used consistent event types per v5.0
   - Archived verbose historical entries
2. Cleaned planning.md ✓
   - Moved completed phases to archive section
   - Kept only active Phase C & D content
   - Removed emergency fix references
3. Updated todo.md ✓
   - Archived completed Phase A & B tasks
   - Created new Phase C & D task structure
   - Added proper task IDs and priorities

### C.2 Documentation Inventory & Categorization ✅ COMPLETE

**Completed**:
1. Documentation audit ✓
   - Listed all files in /docs/ with categories
   - Separated specifications from implementations
   - Identified outdated or duplicate docs
2. Updated doc-ref.md structure ✓
   - Created clear sections: Specs / Implementation / Reports / Archive
   - Added status for each doc: Active / Review / Archived
   - Included last-modified dates
3. Created documentation inventory ✓
   - Comprehensive inventory in docs/inventory/
   - Final audit report consolidating all inventories

### C.3 Documentation Cleanup & Lifecycle Management 🚧 IN PROGRESS

**Comprehensive Audit Results (2025-07-28)**:
- Total documentation files: 153 (138 markdown, 5 PDF)
- Files in correct locations: 73 active docs in /docs/
- Misplaced files in root: 14 markdown files
- Missing master copy documents: English, German, French
- Documentation gaps: compliance, asset inventory, Italian copy

**Cleanup Actions Planned**:
1. Archive v6.1 files from root (7 files) → /docs/archive/2025-07-28/root-cleanup/
2. Move v7.2 files to proper locations (7 files) → /docs/research/ or /docs/specs/
3. Create master copy documents in /docs/content/
4. Update doc-ref.md to v4.0 with new locations
5. Add component inventory to CLAUDE.md
6. Create asset inventory document

**Documentation Lifecycle Process**:
- Creation: ISO-date prefix, proper categorization
- Indexing: Immediate update to doc-ref.md
- Updating: In-commit documentation updates
- Archival: 7-day rule to /docs/archive/YYYY-MM-DD/
- Memory: Store summaries via memory.store
- Graph: Create entities and relations in context7

## Phase D – Landing Page v7.2 Implementation

### D.1-D.3 Core Implementation ✅ COMPLETE

**Completed Components**:
1. ProductSection with visual assets
2. NumbersSection with 4 metrics
3. TechCarousel with 5-step flow
4. MedicalAdvisors showcase
5. EnhancedTestimonials with Maria feature
6. EnhancedFAQ with categories
7. ComfortShowcase section
8. MVCPPreview for professionals

### D.4-D.5 Advanced Requirements ✅ NEARLY COMPLETE

**Visual Assets Integration** (80%):
- Hero image variants implemented ✓
- Doctor consultation images added ✓
- Manufacturing images integrated ✓
- Product showcase enhanced ✓
- Care360 product collage pending

**Critical v7.2 Requirements** (100%):
- RiskCardsSection created ✓
- Insurance/Pricing split ✓
- Testimonials updated ✓
- CTA title changed ✓
- Process copy updated ✓

**P2 Bug Fix** (80%):
- Added data-testid to Hero, Statistics, Product, Numbers, Clinical, TechCarousel ✓
- Remaining: ProblemSolution and Care360 sections

### D.6 Performance & Polish 🚧 PENDING

**Remaining Tasks**:
1. **Image Optimization**:
   - Implement lazy loading
   - Convert to WebP format
   - Add responsive srcset
   
2. **Performance Testing**:
   - Measure LCP < 2.5s
   - Check CLS < 0.1
   - Optimize bundle size
   
3. **Theme Compliance**:
   - Test all 4 themes
   - Fix any hardcoded colors
   - Verify contrast ratios
   
4. **Accessibility**:
   - WCAG 2.1 AA compliance
   - Keyboard navigation
   - Screen reader testing

## Implementation Timeline

### Phase C Schedule (50% Complete)
- C.1 Working File Corrections: ✓ DONE (1 hour)
- C.2 Documentation Inventory: ✓ DONE (2 hours)  
- C.3 Navigation & Components: 2-3 hours remaining
- Total Phase C: ~0.5 day remaining

### Phase D Schedule (85% Complete)
- D.1 Research: ✓ DONE (1 hour)
- D.2 Core Components: ✓ DONE (2 hours)
- D.3 Integration: ✓ DONE (2 hours)
- D.4 Visual Assets: 80% DONE (0.5 hours)
- D.5 Critical Requirements: ✓ DONE (2 hours)
- D.6 Performance & Polish: 0% (2 hours remaining)
- Total Phase D: ~2.5 hours remaining

### Priority Order (Updated 2025-07-28)
1. **Immediate**: Complete C.3 Documentation Cleanup (~3 hours)
   - Archive misplaced files from root
   - Create missing master copy documents
   - Update doc-ref.md and CLAUDE.md
   - Establish documentation lifecycle process
2. **High**: Continue Phase 6 Landing Page tasks (6.2-6.7)
3. **Medium**: Complete Care360 product collage
4. **Medium**: D.6 Performance optimization
5. **Low**: Complete remaining data-testid attributes

## Success Metrics

### Phase C Metrics
- ✅ Working files compliant with v5.0
- ✅ Documentation properly categorized
- ✅ Navigation documented
- ⏳ Component inventory complete

### Phase D Metrics
- ✅ All v7.2 required sections present
- ✅ 20+ visual assets strategically placed
- ✅ Professional medical credibility established
- ✅ Improved conversion through visual proof
- ✅ Comfort and ease of use visually demonstrated
- ⏳ Performance budgets maintained
- ⏳ Mobile-first responsive design verified
- ⏳ Accessibility audit passed

## Key Accomplishments

### Components Created/Enhanced
1. **ProductSection**: 8 benefits with visual assets
2. **NumbersSection**: 4 key metrics
3. **TechCarousel**: 5-step data flow
4. **MedicalAdvisors**: 4 doctor showcase
5. **EnhancedTestimonials**: Maria feature + Swiss patients
6. **EnhancedFAQ**: Categorized medical questions
7. **ComfortShowcase**: Sensitive skin focus
8. **MVCPPreview**: Healthcare professional tools
9. **RiskCardsSection**: 3 cardiac risk education cards
10. **InsuranceCoverageSection**: 4 pathway explanations
11. **PricingSection**: 3-tier self-pay with gold standard

### Visual Assets Integrated
- Product images: 4 integrated
- Doctor images: 6 integrated
- MVCP screenshots: 4 integrated
- Manufacturing images: 2 integrated
- Comparison graphic: 1 integrated
- Hero variants: 2 implemented
- Total: ~20 images strategically placed

## Risk Mitigation

### Identified Risks
1. **Performance Impact**: Large number of images
2. **Theme Compatibility**: Multiple custom components
3. **Mobile Experience**: Complex layouts

### Mitigation Strategies
1. Implement progressive loading and WebP conversion
2. Test each component in all 4 themes
3. Mobile-first development approach

## Completed Phases Archive

### Phase A (Documentation Cleanup) ✅ COMPLETED 2025-07-25
- Successfully aligned all working files to v5.0
- Archived 19 obsolete files
- Created knowledge graph entities
- Total time: ~1 day

### Phase B (v7.2 Copy Integration) ✅ COMPLETED 2025-07-25
- Implemented all v7.2 components
- Fixed critical homepage routing issue
- Updated all copy to evidence-based messaging
- Total time: ~1 day

### Phase C (Working Files Organization) 🛠️ IN PROGRESS
- Fixed event-stream.md format ✓
- Updated doc-ref.md categorization ✓
- Added navigation documentation to conventions.md ✓
- Component inventory pending
- Progress: 50% complete

### Phase D (Landing Page v7.2 Implementation) 🛠️ IN PROGRESS
- Gap analysis complete ✓
- 8 new components created ✓
- All components integrated ✓
- Visual assets 80% integrated
- Critical v7.2 requirements met ✓
- Progress: 85% complete

## Phase E – Visual Testing & Language Integration (NEW)

### E.1 Alternative Visual Testing Strategies
Since puppeteer MCP tool is not available, we'll implement:

1. **Manual Visual Testing Script**:
   - Create Node.js script using local puppeteer installation
   - Capture screenshots of all pages in all languages
   - Test navigation flow between pages
   - Verify responsive breakpoints (375px, 768px, 1024px, 1536px)

2. **React Testing Library**:
   - Write integration tests for navigation components
   - Test language switching functionality
   - Verify route parameters work correctly
   - Test protected page navigation

3. **Browser DevTools Testing**:
   - Document manual testing checklist
   - Use Chrome DevTools device emulation
   - Test network conditions
   - Verify console errors

### E.2 Navigation Testing Approach

1. **Route Verification**:
   - Test all 98 configured routes
   - Verify language prefixes work correctly
   - Test fallback routes
   - Check 404 handling

2. **Language Switching**:
   - Verify current page preserved when switching languages
   - Test all 4 language variants
   - Check URL structure consistency
   - Verify hreflang tags

3. **Mobile Navigation**:
   - Test hamburger menu functionality
   - Verify touch targets (min 44x44px)
   - Test scroll behavior
   - Check z-index issues

### E.3 German Translation Integration

Based on `/docs/implementation/025-07-24-ui-component-mapping-v7-DE.md`:

1. **Translation Files**:
   - Update `/src/translations/home/de.ts`
   - Implement formal "Sie" addressing
   - Use Swiss German conventions
   - Maintain medical terminology accuracy

2. **Key CTAs**:
   - "Starten Sie Ihre kostenlose Einschätzung"
   - "Versicherungsdeckung prüfen"
   - "Fragen? Lesen Sie unsere FAQ →"

3. **Content Sections**:
   - Hero variants A, B, C
   - Statistics section
   - Product benefits
   - Process steps
   - Testimonials

### E.4 French Translation Integration

Based on `/docs/implementation/025-07-24-ui-component-mapping-v7-FR.md`:

1. **Translation Files**:
   - Update `/src/translations/home/fr.ts`
   - Use formal "vous" throughout
   - Maintain Swiss French conventions
   - Medical precision required

2. **Key CTAs**:
   - "Commencez votre évaluation gratuite"
   - "Vérifiez votre couverture d'assurance"
   - "Des questions ? Consultez notre FAQ →"

3. **Content Sections**:
   - All hero variants
   - Statistical evidence
   - Solution narrative
   - Insurance coverage
   - Medical advisors

### E.5 Italian Translation Integration

Based on `/docs/implementation/025-07-24-ui-component-mapping-v7-IT.md`:

1. **Translation Files**:
   - Create `/src/translations/home/it.ts`
   - Use formal "Lei" addressing
   - Swiss Italian conventions
   - Medical terminology precision

2. **Key CTAs**:
   - "Inizi la Sua valutazione gratuita"
   - "Verifichi la copertura assicurativa"
   - "Domande? Legga le nostre FAQ →"

3. **Content Sections**:
   - Complete homepage content
   - All components
   - Professional pages
   - Support sections

### E.6 Multi-language Verification

1. **Routing Tests**:
   ```
   /en/solutions/10-day-heart-screening
   /de/loesungen/10-tage-herzscreening
   /fr/solutions/bilan-cardiaque-10-jours
   /it/soluzioni/screening-cardiaco-10-giorni
   ```

2. **Content Consistency**:
   - Verify all statistics match
   - Check medical claims accuracy
   - Ensure CTAs align
   - Test form validations

3. **SEO Requirements**:
   - Hreflang tags implementation
   - Meta descriptions per language
   - Canonical URLs
   - Sitemap generation

## Phase E Implementation Timeline

### E.1 Visual Testing Setup (4 hours)
- Create testing scripts
- Document manual procedures
- Set up screenshot comparison
- Configure test environments

### E.2 Navigation Testing (3 hours)
- Test all routes
- Verify language switching
- Mobile navigation testing
- Document findings

### E.3-E.5 Language Integration (6 hours)
- German: 2 hours
- French: 2 hours
- Italian: 2 hours

### E.6 Multi-language Verification (3 hours)
- Cross-language testing
- SEO verification
- Final validation

**Total Phase E: ~2 days (16 hours)**

## Updated Priority Order

1. **Immediate**: P1 Theme default bug fix (Phase D)
2. **High**: Visual testing script creation (Phase E)
3. **High**: German translation integration (Phase E)
4. **High**: French translation integration (Phase E)
5. **High**: Italian translation integration (Phase E)
6. **Medium**: Navigation testing (Phase E)
7. **Medium**: Complete Care360 product collage (Phase D)
8. **Medium**: Finish C.3 navigation documentation (Phase C)
9. **Low**: D.6 Performance optimization (Phase D)
10. **Low**: Complete remaining data-testid attributes (Phase D)

## Phase 6 – Landing Page Improvement (NEW)

### 6.1 Critical Issue Resolution ✅ COMPLETED 2025-07-28
**Fixed critical blockers:**
1. Homepage blank page rendering bug (P0) ✅ FIXED
   - Added missing problemSolution sections to all translation files
   - Fixed CSS positioning conflicts (HomePageTabs top-24, main pt-32)
   - All 4 language homepages now render correctly
2. Route terminology discrepancies ✅ FIXED
   - Updated all routes to match v7.2 spec
   - Implemented 301 redirects from old URLs
3. Italian translation completion ✅ FIXED
   - Homepage works correctly
   - Solutions pages now have full Italian translations

### 6.2 Hero Redesign Implementation 🚧 IN PROGRESS 2025-07-28
**Selected Approach: Dual-Split Layout with Father-daughter.png**

**Current Status:**
- Dual-split layout implemented ✅
- Father-daughter.png integrated ✅
- Trust bar and product overlay added ✅
- **Remaining Tasks:**
  - Separate FAQ link from primary CTA line
  - Implement copy variant switching system
  - Set new default copy per user specifications

**Copy Variants to Implement:**
1. **Default (NEW):**
   - Badge: "Your health matters — to more than just you"
   - Headline: "Most Heart Issues are silent"
   - Subheadline: "Screen Smarter, Live Younger, Longer"
   - Above CTA: "Take 5 minutes to check your eligibility for our reinvented heart screening experience, from home."
   - CTA: "Start your free heart check"

2. **Variant A (Original):**
   - Badge: "Certified Medical Device • Swiss Quality"
   - Headline: "Live Younger, Longer."
   - Subheadline: "Screen Smarter, from Home"
   - Emotional: "Detect silent heart issues before they steal precious moments..."
   - CTA: "Start Your Free Heart Check"

### 6.3 Content Improvements
1. **Statistics Section**: Consolidate to 3 key metrics with citations
2. **Product Section**: Transform to 8-benefit grid (replacing Silent Triad)
3. **Trust Signals**: Add testimonials slider + medical advisors
4. **Insurance/Pricing**: Split into separate sections
5. **Process Flow**: Update copy for clarity
6. **Remove**: MVCP banner, redundant videos

### 6.4 Performance Optimization
- Image compression and WebP conversion
- Lazy loading implementation
- Bundle size optimization
- LCP < 2.5s target

### 6.5 Success Metrics
- Hero engagement > 60%
- CTA click-through > 5%
- Page load time < 3s
- WCAG AA compliance

## Implementation Timeline (Updated - Repository Conformance Chain)

### Week 1 (Current - Testing Phase)
1. **Days 1-2**: Phase 3a Infrastructure ✅ COMPLETED
   - TypeScript strict mode migration
   - Solutions page bug fix
   - Copy variant selector implementation
   - CI/CD pipeline enhancement

2. **Days 3-4**: Phase 3.5 Testing Validation 🆕 CURRENT
   - Day 3: Functional & Visual testing (18h)
   - Day 4: Performance & Accessibility testing (14h)
   
3. **Day 5**: Issue Remediation
   - Critical bug fixes
   - Performance optimizations
   - Documentation updates

### Week 2 (Architecture Enhancement)
1. **Days 1-3**: Phase 4 Architecture (24h)
   - Component standardization
   - State management optimization
   - Build system enhancement
   
2. **Days 4-5**: Component Migration (16h)
   - Atomic design implementation
   - Shared component library
   - Documentation generation

### Week 3 (S&W Design Standardization)
1. **Days 1-5**: Phase 5 S&W Design (40h)
   - All pages alignment
   - Animation implementation
   - Visual polish
   - Final testing

### Week 4 (Finalization)
1. **Days 1-2**: Final Validation (16h)
   - Comprehensive testing
   - Performance verification
   - Security audit
   
2. **Days 3-5**: Documentation & Handoff (24h)
   - Complete documentation
   - Training materials
   - Deployment guide
   - Knowledge transfer

**Total Repository Conformance: ~150 hours (4 weeks)**

## Updated Priority Order

### Immediate (P0) - Memory & Knowledge Graph Implementation 🆕
1. Create core project memory entries (project overview, architecture, conventions)
2. Build knowledge graph entities for Project, Phases, Components, Features
3. Implement memory recall patterns for development workflow
4. Document memory usage procedures

### High (P1) - Complete Phase 6 Remaining Tasks
5. Content cleanup (remove MVCP banner, consolidate videos)
6. Performance optimization (image compression, lazy loading, bundle optimization)
7. Cross-browser and mobile testing
8. Accessibility audit and fixes

### Medium (P2) - Phase E Visual Testing & Languages
9. Create visual testing scripts (alternative to puppeteer MCP)
10. Complete German translation integration
11. Complete French translation integration
12. Complete Italian translation integration
13. Multi-language routing verification

### Low (P3) - Polish & Documentation
14. Complete remaining data-testid attributes
15. Finish component inventory documentation
16. Update CLAUDE.md with latest changes
17. Archive completed phase documentation

---

This plan is a living document covering current Phase C, D, E, and 6 work. Phase 6 was added based on comprehensive competitor analysis and landing page improvement recommendations. Always log changes in event-stream.md using the one-line format.

## Documentation Lifecycle Process (NEW - v5.0)

### Creation
- Use ISO date prefix: YYYY-MM-DD-descriptive-name.md
- Place in appropriate category folder under /docs/
- Update doc-ref.md immediately with path, description, and status

### Updating
- Document changes in same commit as code changes
- Update version numbers in document headers
- Log significant updates in event-stream.md
- Store summaries via memory.store

### Archival
- Move superseded docs after 7 days of non-use
- Create /docs/archive/YYYY-MM-DD/ folder
- Include README.md explaining archive contents
- Update doc-ref.md with new location and Archived status

### Memory & Graph Integration
- Store document summaries: memory.store('doc-[name]-v[n]', summary)
- Create graph entities: context7.create_entities with type 'document'
- Link relationships: document → supersedes → old-document
- Add observations for significant changes