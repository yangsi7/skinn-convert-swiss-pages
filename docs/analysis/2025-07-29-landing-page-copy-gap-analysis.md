# Landing Page Copy Gap Analysis
VERSION: 1.0
CREATED: 2025-07-29
PURPOSE: Analyze gaps between current implementation and v7.2 copy specification

## Executive Summary

This analysis compares the current landing page implementation (Home2.tsx) against the official copy specification document `/docs/implementation/skiin-ch-copy 29072025.md`. Several significant gaps have been identified that need to be addressed to ensure compliance with the approved copy.

## Key Findings

### 1. Silent Triad - MUST BE REMOVED ❌
**Current**: The landing page includes a "Silent Triad" section with arrhythmia, blood pressure, and sleep monitoring
**Spec**: The Silent Triad is only mentioned in Solutions pages and as "Coming Soon" features
**Action**: Remove the entire Silent Triad section from the homepage

### 2. Hero Copy Variants - NEEDS UPDATE ⚠️
**Current**: Using custom copy variants not aligned with spec
**Spec**: Three specific variants provided (A, B, C) with exact copy
**Action**: Update to use the exact copy from specification

### 3. Statistics Section - COMPLIANT ✅
**Current**: Correctly shows 3 key statistics
**Spec**: Matches specification with proper cards

### 4. Product Section - NEEDS REFINEMENT ⚠️
**Current**: Has 8 benefits but copy may not match exactly
**Spec**: Specific copy provided for each of the 8 benefits
**Action**: Verify and update copy to match specification

### 5. Missing Sections ❌
The following sections from the spec are missing:
- Care360 Vision - Coming Soon
- Know Your Heart Risk (3 risk cards)

### 6. Extra Sections to Remove ❌
The following sections are NOT in the spec and should be removed:
- Video Education Section
- Features Section (the generic one with 4 items)
- MVCP Preview (should only be on partner pages)

## Detailed Gap Analysis

### Hero Section

| Element | Current | Specification | Status |
|---------|---------|---------------|--------|
| Badge | "Certified Medical Device • Swiss Quality" | "MDR Class IIa Certified • Swissmedic Registered" | ❌ |
| Headline | Custom variants | 3 specific variants (A/B/C) | ❌ |
| Emotional Subheadline | Missing | "Protect yourself and those who love you." | ❌ |
| CTAs | Has primary/secondary | Matches spec | ✅ |

### Section Order per Specification

1. **Hero Section** ✅ (needs copy updates)
2. **Statistics Section** ✅
3. **Problem & Solution Narrative** ⚠️ (has Silent Triad which should be removed)
4. **Product Section - 8 Benefits** ✅ (verify copy)
5. **Process Section - 5 Steps** ✅
6. **SKIIN by the Numbers** ✅
7. **Clinically Proven Technology** ✅
8. **AI-Measured & Cardiologist-Evaluated** ❌ (missing or merged)
9. **Care360 Vision** ❌ (missing)
10. **Know Your Heart Risk** ❌ (missing)
11. **Insurance Coverage & Pricing** ✅
12. **Testimonials & Stories** ✅
13. **Medical Advisors** ✅
14. **Swiss Doctor Testimonials** ⚠️ (may be merged)
15. **Final CTA & CEO's Message** ✅

### Content to Remove

1. **Silent Triad Section** - Move to Solutions pages only
2. **Video Education Section** - Not in homepage spec
3. **Generic Features Section** - Redundant with Product Section
4. **MVCP Preview** - Only for partner pages
5. **Technology Section with Doctor Images** - Not specified for homepage

### Content to Add

1. **Care360 Vision Section**
   - Title: "Care360 is Just the Beginning"
   - Coming soon features with timelines
   - Join waitlist CTA

2. **Know Your Heart Risk Section**
   - 3 cards: Silent AF, Cardiac Arrhythmias, Heart Disease Prevention
   - Links to Evidence/Solutions pages

3. **AI-Measured & Cardiologist-Evaluated**
   - 6 pillars of reassurance
   - Or integrate into Product Section

## Recommended Implementation Plan

### Phase 1: Remove Non-Compliant Content (2 hours)
1. Remove Silent Triad from Problem/Solution section
2. Remove Video Education Section
3. Remove generic Features Section
4. Remove MVCP Preview
5. Remove Technology Section with doctor images

### Phase 2: Update Existing Content (3 hours)
1. Update Hero copy to match spec variants
2. Add emotional subheadline
3. Verify Product Section copy matches spec exactly
4. Update badge text to spec
5. Ensure all CTAs match specification

### Phase 3: Add Missing Content (3 hours)
1. Add Care360 Vision section
2. Add Know Your Heart Risk section
3. Add AI-Measured section (or integrate into Product)
4. Ensure proper section ordering

### Phase 4: Quality Assurance (2 hours)
1. Verify all copy matches specification
2. Test responsive behavior
3. Ensure proper data-testid attributes
4. Multi-language support verification

## Copy Specification Reference

The authoritative copy document is:
`/docs/implementation/skiin-ch-copy 29072025.md`

This document should be the single source of truth for all landing page copy. Any deviations must be explicitly approved and documented.

## Next Steps

1. Create tasks in todo.md for each phase
2. Update component implementations
3. Update translation files
4. Test thoroughly
5. Document completion in event-stream.md