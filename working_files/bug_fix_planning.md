# Bug Fix Planning
VERSION: 1.0
LAST UPDATED: 2025-07-25
PURPOSE: Technical approaches and implementation plans for bug fixes

This document outlines the technical approach for fixing bugs tracked in bugs.md. Each entry should include root cause analysis, proposed solution, testing strategy, and rollout plan.

## Active Fix Plans

### BUG-2025-07-25-01: Classic Theme Loads by Default Instead of Modern

**Root Cause Analysis**
- HomePageTabs component defaults to showing Classic theme
- This hides all v7.2 features from users on initial load
- Users must manually click Modern tab to see new implementation

**Proposed Solution**
1. Locate HomePageTabs component in codebase
2. Find defaultTab prop or initial state declaration
3. Change default from "classic" to "modern"
4. Example code change:
   ```typescript
   // Before
   const [activeTab, setActiveTab] = useState<'modern' | 'classic'>('classic');
   
   // After
   const [activeTab, setActiveTab] = useState<'modern' | 'classic'>('modern');
   ```

**Testing Strategy**
- Clear browser cache and localStorage
- Navigate to homepage
- Verify Modern tab is active by default
- Confirm v7.2 components visible without interaction
- Test on multiple browsers
- Verify theme persistence works if implemented

**Rollout Plan**
1. Create branch: fix/modern-theme-default
2. Make code change
3. Test locally
4. Create PR with before/after screenshots
5. Deploy immediately after review (P1 priority)

**Risk Assessment**
- Low risk change
- No data migration needed
- Easy rollback if needed
- Monitor user feedback post-deployment

### BUG-2025-07-25-02: Missing data-testid Attributes on v7.2 Components

**Root Cause Analysis**
- v7.2 components developed without test automation in mind
- No data-testid attributes for Puppeteer/Playwright selection
- Current tests rely on fragile text-based or class selectors

**Proposed Solution**
1. Define test ID naming convention:
   - Section level: data-testid="[section-name]-section"
   - Component level: data-testid="[component]-[variant]"
   - Interactive elements: data-testid="[action]-[element]"
   
2. Add to each component systematically:
   ```typescript
   // HeroSection
   <section data-testid="hero-section">
     <div data-testid={`hero-variant-${variant}`}>
       <h1 data-testid="hero-headline">{headline}</h1>
       <button data-testid="cta-start-assessment">Start Assessment</button>
     </div>
   </section>
   ```

3. Components to update:
   - HeroSection (3 variants)
   - StatisticsShowcase (3 stats)
   - ProblemSolutionSection (3 cards)
   - ProductSection (8 benefits)
   - NumbersSection (4 metrics)
   - ClinicallyProvenTechSection (4 markers)
   - Care360Section (7 features)
   - TechCarousel (5 steps)

**Testing Strategy**
- Add unit test to verify test IDs present
- Update existing E2E tests to use new selectors
- Create test ID documentation
- Run full test suite after changes
- No visual regression expected

**Rollout Plan**
1. Create branch: feat/add-test-ids-v7-2
2. Add test IDs component by component
3. Update test files to use new selectors
4. Document naming convention
5. Can deploy anytime (no user impact)

**Risk Assessment**
- Zero user impact (attributes invisible)
- Improves test stability
- No performance impact
- No rollback needed

<!-- Template for bug fix planning:

### BUG-YYYY-MM-DD-XXX: Brief Description

**Root Cause Analysis**
- What is causing the bug?
- Why did it occur?
- What systems are affected?

**Proposed Solution**
1. Step-by-step fix approach
2. Code changes required
3. Configuration updates needed

**Testing Strategy**
- Unit tests to add/update
- Integration tests required
- Manual testing checklist
- Performance impact assessment

**Rollout Plan**
1. Create feature branch
2. Implement fix
3. Test in development
4. Deploy to staging
5. Monitor for 24 hours
6. Deploy to production

**Risk Assessment**
- Potential side effects
- Rollback strategy
- Monitoring requirements

-->

## Completed Fixes

### BUG-20250726-01: Homepage Renders Blank for All Languages (FIXED 2025-07-26)

**Root Cause Analysis**
- Missing problemSolution sections in German, French, and Italian translation files
- ProblemSolutionSection.tsx required these sections but they were not present
- Home2.tsx line 65 crashed when accessing undefined translation properties
- CSS positioning conflicts between fixed navigation elements also contributed

**Actual Solution Implemented**
1. Added missing problemSolution section to Italian translation file:
   ```typescript
   problemSolution: {
     title: "La Triade Silenziosa: Tre Minacce Nascoste per il Suo Cuore",
     problem: { title, description },
     solution: { title, description },
     silentTriad: { title, items: [...] },
     cta, linkText, comingSoon
   }
   ```

2. Fixed hero variant access in Home2.tsx:
   ```typescript
   const variantKey = `variant${variant}` as 'variantA' | 'variantB' | 'variantC';
   const heroContent = tHome.hero[variantKey] || tHome.hero.variantA;
   ```

3. Fixed CSS positioning conflicts:
   - HomePageTabs: Changed from top-20 to top-24
   - Main content: Added pt-32 padding

**Testing Results**
- Tested all 4 homepages with puppeteer
- English: ✅ Working correctly
- German: ✅ Working correctly  
- French: ✅ Working correctly
- Italian: ✅ Working correctly (was blank, now fixed)
- All hero variants accessible
- Navigation functional

**Rollout Status**
- Fix implemented directly in codebase
- No branch created (emergency fix)
- All languages verified working
- Screenshots captured as evidence

**Risk Assessment**
- Fix was successful with no side effects
- All languages now render correctly
- CSS positioning improved for all viewports
- No regression observed

### BUG-20250726-02: Route URLs Don't Match v7.2 Specification

**Root Cause Analysis**
- Routes were implemented before v7.2 spec was finalized
- German: "herzueberwachung" should be "herzscreening"
- French: needs verification against spec
- Italian: needs proper translation of routes

**Proposed Solution**
1. Update routes in src/routes/index.tsx:
   ```typescript
   // German - UPDATE
   <Route path="/de/loesungen/10-tage-herzscreening" element={<Solutions10DayHeartScreening />} />
   
   // French - VERIFY
   <Route path="/fr/solutions/screening-cardiaque-10-jours" element={<Solutions10DayHeartScreening />} />
   
   // Italian - ADD
   <Route path="/it/soluzioni/screening-cardiaco-10-giorni" element={<Solutions10DayHeartScreening />} />
   ```

2. Create redirect map for old URLs:
   ```typescript
   const redirects = {
     '/de/loesungen/10-tage-herzueberwachung': '/de/loesungen/10-tage-herzscreening',
     // Add all old URLs
   };
   ```

3. Update routeTranslations.ts to match

**Testing Strategy**
- Test all 98 routes systematically
- Verify old URLs redirect properly
- Check navigation menu links
- Test language switching preserves correct URL

**Rollout Plan**
1. Create branch: fix/route-v7-2-alignment
2. Update all route definitions
3. Implement redirect logic
4. Update navigation components
5. Test with marketing team
6. Deploy with monitoring

**Risk Assessment**
- High SEO impact if not done properly
- Need 301 redirects for old URLs
- Coordinate with marketing on timing
- Monitor 404 errors post-deployment

### BUG-20250726-03: Italian Translation Structure Incompatible

**Root Cause Analysis**
- Italian translations in /translations/it/ folder
- Other languages in /translations/[feature]/[lang].ts
- Import system expects consistent structure
- Two different organizational patterns clash

**Proposed Solution - Option A (Recommended)**
Move Italian files to match other languages:
1. Create /translations/home/it.ts from /translations/it/home.ts
2. Create /translations/solutions/it.ts from /translations/it/solutions.ts
3. Continue for all features
4. Delete /translations/it/ folder

**Proposed Solution - Option B**
Update import logic to handle both structures:
1. Try primary path first
2. Fall back to Italian-specific path
3. More complex but preserves current structure

**Testing Strategy**
- Verify all Italian translations load
- Check every page in Italian
- Test fallback to English for missing keys
- Ensure no TypeScript errors

**Rollout Plan**
1. Create branch: fix/italian-translation-structure
2. Choose Option A or B based on team preference
3. Implement file moves or import updates
4. Update all import statements
5. Full regression test
6. Deploy with Italian launch

**Risk Assessment**
- File moves are safer than complex import logic
- Need to update all import statements
- Test build process for import errors
- Verify no translations lost in move

<!-- Move completed fix plans here with resolution notes -->

## Lessons Learned

<!-- Document patterns and insights from bug fixes to prevent future occurrences -->