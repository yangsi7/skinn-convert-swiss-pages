# TODO – SKIIN Switzerland Marketing Website
VERSION: 7.0
LAST UPDATED: 2025-07-28
PROCESS-COMPLIANCE: CLAUDE_PROCESS.md v5.0

This is the active task list for the SKIIN Switzerland marketing website. Current focus: Phase C.3 Documentation Cleanup & Lifecycle Management (IMMEDIATE PRIORITY). Phase 6 tasks 6.1-6.7 COMPLETED ✅.

## IMMEDIATE PRIORITY - Hero Copy Refinements 🆕

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

## Phase 6 – Landing Page Improvement (Path 1)

### 6.1 Hero Redesign Implementation 🚧 IN PROGRESS
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

## Memory & Knowledge Graph
- [x] Store hero design decisions ✅
- [ ] Create document entities in graph
- [ ] Link document relationships
- [ ] Store cleanup plan execution
- [ ] Archive superseded documentation

---

Priority Order (Updated 2025-07-28):
1. Phase C.3 Documentation Cleanup ✅ COMPLETED (took ~30 minutes)
2. Continue Phase 6 remaining tasks (6.8 Content Cleanup, Performance) - NEXT
3. Phase E Visual Testing & Language Integration
4. Phase D.6 Performance & Polish
5. Archive completed work and update metrics

Estimated Timeline: 
- Documentation Cleanup: ✅ DONE
- Remaining Phase 6: 1 day
- Total before launch: 1-2 days