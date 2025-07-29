# Planning Document – SKIIN Switzerland Marketing Website
VERSION: 5.2
LAST UPDATED: 2025-07-28
PROCESS-COMPLIANCE: CLAUDE_PROCESS.md v5.0
PURPOSE: Phase C cleanup + Phase D Landing Page v7.2 Implementation + Phase E Visual Testing & Language Integration + Phase 6 Landing Page Improvement

This planning document now covers Phase C (working files cleanup), Phase D (Landing Page v7.2 implementation), Phase E (Visual Testing & Language Integration), and the newly added Phase 6 (Landing Page Improvement) based on comprehensive competitor analysis and best practices research.

## Executive Summary

Following successful completion of Phase A (Documentation Cleanup) and Phase B (v7.2 Copy Integration), we are executing:

**Phase C**: Working Files Organization (50% complete)
- Working file format corrections (event-stream.md one-line format) ✓
- Documentation inventory and categorization ✓
- Navigation structure documentation ✓
- Component and asset inventory updates (pending)
- Clear separation of specifications vs implementation docs ✓

**Phase D**: Landing Page v7.2 Implementation (85% complete)
- Research & Gap Analysis ✓
- Core Component Development ✓
- Component Integration ✓
- Visual Asset Integration (80% complete)
- Critical v7.2 Requirements ✓
- Performance & Polish (pending)

**Phase E**: Visual Testing & Language Integration (0% complete) 🆕
- Alternative visual testing strategies (without puppeteer)
- Navigation testing approach
- German translation integration (v7.2 spec)
- French translation integration (v7.2 spec)
- Italian translation integration (v7.2 spec)
- Multi-language routing verification

**Phase 6**: Landing Page Improvement (35% complete) 🆕
- Critical P0 blockers fixed ✅
- Hero redesign with dual-split layout COMPLETED ✅
  - Father-daughter.png image implemented
  - New copy: "Live Younger, Longer. Screen Smarter, from Home"
  - Trust bar with certifications
  - Product badge overlay
- Hero copy refinements COMPLETED ✅
  - Separated FAQ link from primary CTA
  - Implemented copy variant system (default/original)
  - Multi-language support for copy variants ✅
- Statistics consolidation (3 key metrics) - NEXT
- Product section enhancement (8 benefits)
- Trust signals (testimonials, advisors, CEO quote)
- Performance optimization
- A/B testing framework

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

## Implementation Timeline (Updated)

### Immediate (Week 1)
1. **Critical Fixes** (8h)
   - Fix homepage rendering bug
   - Resolve route discrepancies
   - Complete Italian translations

2. **Hero Implementation** (12h)
   - Image optimization
   - Component updates
   - A/B test setup

### Week 2
3. **Content Updates** (20h)
   - Statistics cards
   - Product benefits
   - Trust signals
   - Insurance/pricing split

### Week 3
4. **Polish & Launch** (15h)
   - Performance optimization
   - Accessibility audit
   - Cross-browser testing
   - Final QA

**Total Phase 6: ~55 hours (7-8 days)**

## Updated Priority Order

### Immediate (P0) - Hero Copy Refinements 🆕
1. Separate FAQ link from primary CTA line
2. Implement copy variant switching mechanism
3. Set new default copy with silent heart issues messaging
4. Test variant switching functionality

### High (P1) - Core improvements
5. Create statistics cards (3 metrics)
6. Build 8-benefit product section
7. Add testimonials & advisors

### Medium (P2) - Enhancement
8. Split insurance/pricing sections
9. Update process flow copy
10. Performance optimization
11. Remove MVCP/consolidate videos

### Low (P3) - Polish
12. Complete Phase C documentation
13. Finish data-testid attributes
14. Create component inventory

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