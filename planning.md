# Planning Document - SKIIN Landing Page Component Consolidation

## PR Structure
**PR: Landing Page Component Consolidation**
- Branch: `feature/landing-page-consolidation`
- Target: 3 commits total
- Estimated completion: 3 hours

## Implementation Plan

### Phase 1: Analysis & Preparation (30 min)
**Commit 1: Fix visibility issues and analyze components**
1. Investigate why "Why SKIIN Leads" section is not visible
2. Audit all redundant sections for content to preserve
3. Map visual assets to new component structure
4. Document Real-time ECG badge implementation
5. Run directory structure audit
6. Update documentation tree if needed

### Phase 2: Component Design (45 min)
**Commit 2: Implement consolidated components**
1. Design "SKIIN Advantage" consolidated component
   - Merge technology, comfort, and quality benefits
   - Create interactive layout with visual focus
   - Implement hover/click reveals
   
2. Redesign Care360 as "Home Holter Study" component
   - Focus on convenience and process
   - Integrate clinical workflow visuals
   - Write new copy emphasizing home-based care

### Phase 3: Implementation (60 min)
**Commit 2 continued:**
1. Create new SKIINAdvantage component
2. Update Care360Technology component
3. Remove/comment out redundant sections
4. Fix visibility issues
5. Preserve Real-time ECG badge

### Phase 4: Testing & Polish (30 min)
**Commit 3: Test, document, and polish**
1. Run all standard tests:
   - Design system compliance check
   - Test all 4 language versions
   - Update visual asset inventory
   - Performance testing
   - Accessibility verification
2. Screenshot documentation
3. Update event-stream.md
4. Update component documentation

## Technical Approach

### Component 1: SKIIN Advantage
```
Structure:
- Container with gradient background
- Left side: Product showcase (rotating images)
- Right side: 3 key benefit areas
  - Superior Technology (knitted electrodes)
  - Ultimate Comfort (second skin feel)
  - Medical Excellence (quality & precision)
- Interactive: Hover reveals detailed benefits
```

### Component 2: Home Holter Study
```
Structure:
- Full-width section with clinical feel
- Process flow visualization
- Key points:
  - Order from home
  - Kit delivered to door
  - Automatic data upload
  - AI-powered analysis
  - Specialist review
  - Medical report delivery
- Visual: Use consultation and report images
```

## Content Migration Map

### From Multiple Sections → To SKIIN Advantage:
- "Extended Heart Screening" → Technology benefit
- "Comfortable Textile-Based Band" → Comfort benefit
- "AI-Powered Precision" → Technology benefit
- "Proven Technology" → Excellence benefit
- "Swiss medical" claims → Medical Excellence
- Knitted electrodes → Technology innovation

### From Care360 → To Home Holter Study:
- Order process → Convenience flow
- Clinical integration → Professional workflow
- Report delivery → Results section

## Risk Mitigation
1. Backup existing components before removal
2. Test color contrast for visibility
3. Ensure no content is lost in consolidation
4. Maintain SEO-relevant content