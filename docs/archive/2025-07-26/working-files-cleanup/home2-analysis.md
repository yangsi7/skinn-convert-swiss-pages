# Home2 Component Analysis for v7.2 Integration

**Date**: 2025-07-25
**Component**: src/pages/Home2.tsx
**Purpose**: Map current structure to v7.2 requirements

## Current Home2 Structure

### 1. Hero Section (Lines 45-93)
**Current Content**:
- Badge: Uses `t.hero.badge` translation
- Title: Theme-based with primary/secondary split
- Subtitle: Theme content
- CTAs: 
  - Primary: Navigate to contact (theme CTA text)
  - Secondary: "Book Assessment" with play icon
- Visual: 1e3b8979-f9b0-405d-9117-c8f3c4115930.png (Länger jünger leben)

**v7.2 Requirements**:
- [ ] Add A/B variant support (Urgency/Comfort/Family)
- [ ] Update badge to "MDR Class IIa Certified • Swissmedic Registered"
- [ ] Add emotional subtitle
- [ ] Update CTAs to: "Start Free Assessment", "Check Coverage", "FAQ"

### 2. Statistics Section (Lines 95-145)
**Current Content**:
- Title: "Why Early Detection is Critical"
- 3 visual cards with images:
  - 70% unnoticed (25b8354d...png)
  - 30% stroke risk (b74365b1...png)
  - 50% more with 14-day (4ad65a99...png) ← NEEDS 10-DAY UPDATE

**v7.2 Requirements**:
- [ ] Update to evidence-based claims
- [ ] 70% → 70% of AF episodes are silent
- [ ] 30% → 20-30% of strokes caused by AF
- [ ] 50% with 14-day → 66% vs 9% detection comparison with 10-day
- [ ] Add clinical evidence citations

### 3. Video Education Section (Line 148)
**Current Content**: VideoSection component

**v7.2 Requirements**:
- [ ] Review if this aligns with Silent Triad narrative
- [ ] Consider integration points for ECG + ABPM + Sleep

### 4. Statistics Showcase (Line 151)
**Current Content**: StatisticsShowcase component (likely duplicate stats)

**v7.2 Requirements**:
- [ ] May need to merge with or replace statistics section
- [ ] Ensure no duplication of claims

### 5. Clinical Evidence Section (Lines 153-179)
**Current Content**:
- 4 cards with checkmark icons
- Generic clinical evidence items

**v7.2 Requirements**:
- [ ] Update with specific v7.2 evidence points
- [ ] Add proper citations
- [ ] Link to evidence page

### 6. Features Section (Lines 181-210)
**Current Content**:
- Title: "Why Choose SKIIN"
- 4 feature cards with icons

**v7.2 Requirements**:
- [ ] Update to align with 8 benefit cards from ProductSection
- [ ] Ensure 10-day messaging throughout

### 7. Technology Section (Lines 212-251)
**Current Content**:
- Image: 6e47298b-0a4d-4e21-92ed-0b25c0e34c4c.png (Holter-EKG)
- Technology description
- Feature list
- Learn More button

**v7.2 Requirements**:
- [ ] Integrate Care360 messaging
- [ ] Update feature list for v7.2
- [ ] Ensure 10-day references

### 8. Process Flow (Line 254)
**Current Content**: ProcessFlow component

**v7.2 Requirements**:
- [ ] Already updated in previous work
- [ ] Verify "AI Analysis & Cardiologist Review" in step 4

### 9. MVCP Portal Section (Line 257)
**Current Content**: MvcpSection component

**v7.2 Requirements**:
- [ ] REMOVE from homepage
- [ ] This should only be on GP page

### 10. Enhanced Comparison (Line 260)
**Current Content**: EnhancedComparison component

**v7.2 Requirements**:
- [ ] Update all 14-day references to 10-day
- [ ] Ensure comparison highlights v7.2 benefits

### 11. Insurance Coverage Section (Lines 262-294)
**Current Content**:
- Insurance benefits
- Visual: 5b7bbf12...png

**v7.2 Requirements**:
- [ ] Update with v7.2 insurance messaging
- [ ] Ensure 100% coverage claim is accurate

### 12. Risk Assessment Section (Lines 296-325)
**Current Content**:
- 3 risk cards with Activity icons

**v7.2 Requirements**:
- [ ] Consider Silent Triad integration here
- [ ] Update risk statistics with v7.2 claims

### 13. CTA Section (Lines 327-377)
**Current Content**:
- Primary/secondary CTAs
- Trust indicators (97% satisfaction, 10,000+ patients, certified)

**v7.2 Requirements**:
- [ ] Update CTAs to v7.2 standards
- [ ] Verify trust indicator accuracy

## Translation Keys Used

- `home2` namespace exists in home/en.ts starting at line 217
- Theme content from `useThemeContent` hook
- Current translations partially updated (10-day in some places, not v7.2 compliant)

### Key Translation Updates Needed:
1. Hero badge: "Certified by BAG" → "MDR Class IIa Certified • Swissmedic Registered"
2. Stats items: 
   - 70% → "70% of AF episodes are silent"
   - 30% → "20-30% of strokes are caused by AF"
   - 50% → "66% vs 9% - 10-day monitoring detects 7x more"
3. Clinical evidence: Update to match v7.2 claims
4. Add A/B variant support for hero

## Missing v7.2 Sections

Based on comparison with HomeV7, these v7.2 sections are missing from Home2:
1. **ProblemSolutionSection** - Silent Triad narrative
2. **ProductSection** - 8 benefit cards
3. **NumbersSection** - 95%, 10 Days, 100%, 24/7
4. **ClinicallyProvenTechSection** - 4 trust markers
5. **TechCarousel** - 5-step data flow

## Integration Strategy

### Option 1: Minimal Updates
- Update existing sections with v7.2 copy
- Remove MVCP section
- Add missing critical sections only

### Option 2: Full Integration
- Keep Home2 visual structure
- Replace content sections with v7.2 components where applicable
- Preserve visual assets

### Option 3: Hybrid Approach (RECOMMENDED)
- Keep Home2's visual appeal and assets
- Update copy to v7.2 standards
- Add missing v7.2 sections strategically
- Remove MVCP from homepage

## Next Steps

1. Check translation files for home2 namespace
2. Decide on integration strategy
3. Create section-by-section implementation plan
4. Begin with highest impact changes (hero, statistics, MVCP removal)