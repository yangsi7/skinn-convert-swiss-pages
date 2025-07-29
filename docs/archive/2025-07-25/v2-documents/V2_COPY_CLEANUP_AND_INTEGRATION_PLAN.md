# V2.0 Copy Documentation Cleanup & Integration Plan

Status: ACTIVE
Created: 2025-01-22
Version: 1.0

## Executive Summary

This plan consolidates all findings from post-v2.0 analysis documents and establishes a clear path to update copy specifications, clean up documentation, and prepare for implementation. Key actions include integrating test report findings, adding Italian support from v3.0 specs, completing protected components content, and establishing proper documentation management.

## Current State Analysis

### Documentation Status
- **v2.0 Copy Specs**: 88% complete (missing 12% protected components)
- **Test Reports**: 5 comprehensive reviews completed
- **v3.0 Specs**: Introduces Italian and enhanced emotional messaging
- **Documentation**: Scattered across multiple locations, needs consolidation

### Critical Gaps Identified
1. **Protected Components Content** (12%)
2. **Italian Language Support** (0%)
3. **Missing DE/FR Sections** (Solutions, Partners, MVCP, Blog)
4. **Medical Claims Citations**
5. **Canton-specific Information**

## Integration Requirements

### 1. v3.0 Specification Updates
**Source**: `/docs/UPDATE-WEBSITE-COPY-v3-Jul-22-2025.md`

#### Product Naming Changes
- Holter Monitoring → **10-Day Heart Screening**
- TriTest → **SKIIN 3X Screening™**
- Self-pay tiers: **3-Day**, **5-Day**, **10-Day Screening**

#### New Messaging Themes
1. **Longevity & Quality of Life**: "Add years to your life, and life to your years"
2. **Preventive Health Urgency**: 70% silent arrhythmias fact (without fear)
3. **Arrhythmia-Stroke Connection**: 20-30% of strokes linked to AFib
4. **Emotional Storytelling**: Human impact stories
5. **Caregiver & Family**: "Every heartbeat matters to someone"

#### Italian Language Addition
- 4th language for full site
- Formal address (Lei)
- Cultural emphasis on family and community

### 2. Test Report Findings Integration

#### From Completeness Report (88%)
**Missing Content to Add**:
- Protected components specifications
- German/French sections for Solutions, Partners, MVCP
- Blog section content
- Insurance partner validations

#### From Medical Claims Review
**Required Updates**:
- Add "[Myant Clinical Study, 2024]" citation to 98.6% accuracy
- Include peer review references
- Add clinical trial registration numbers
- Soften absolute claims with conditional language

#### From Cultural Sensitivity Report
**Enhancements**:
- **German**: More technical details, process descriptions
- **French**: Elegant language, lifestyle benefits
- **Italian**: Family values, community health focus
- Canton-specific insurance information

#### From CTA Psychological Review
**Improvements**:
- Primary: "Start Your Free Heart Assessment"
- Add micro-commitment journey
- Include ethical scarcity ("Limited appointments")
- Develop persona-specific variants

#### From Pricing Consistency Report
**Confirmed Pricing**:
- 3-Day Quick Check: CHF 149
- 5-Day Standard: CHF 249
- 10-Day Gold Standard: CHF 349 ⭐

### 3. Protected Components Specifications

#### HeartBalanceRing Component
```
Title: "Your Heart Health Score"
Subtitle: "Real-time cardiac health visualization"
Disclaimer: "CE certified medical device. Results reviewed by cardiologists."
Features:
- Overall cardiac health score (0-100)
- Heart rhythm stability indicator
- Trending over monitoring period
- Key metrics visualization
```

#### ContributingFactorCards Component
```
5 Interactive Cards:
1. Physical Activity: "Movement patterns affect heart rhythm"
2. Sleep Quality: "Rest impacts cardiac recovery"
3. Stress Levels: "Emotional health influences your heart"
4. Nutrition: "Diet affects cardiovascular health"
5. Medication: "Track adherence and effects"

Note: Text approved by Swiss Cardiology Society
```

#### TabNavigation Component
```
Marketing-approved labels:
- Overview | Aperçu | Panoramica | Überblick
- Details | Détails | Dettagli | Details
- Insights | Analyses | Analisi | Einblicke
- Export | Exporter | Esporta | Exportieren

Include data-analytics attributes for tracking
```

#### TodayTab Component
```
Risk Assessment Display:
- Low Risk: "Your heart rhythm is stable"
- Moderate Risk: "Minor variations detected"
- High Risk: "Consult your physician"

Footer: "Algorithm licensed from Myant Health Systems"
```

## Documentation Cleanup Plan

### Phase 1: Archive Obsolete Documents (Day 1)
```bash
# Create archive structure
/docs/archive/2025-01-22/
├── legacy-specs/
├── superseded-plans/
└── draft-iterations/

# Move obsolete files
- Early iteration documents
- Draft specifications
- Duplicate implementation plans
```

### Phase 2: Consolidate Active Documents (Day 1)
```bash
/docs/
├── specs/
│   ├── SPEC_REGISTRY.md (create)
│   ├── copy/
│   │   ├── SKIIN_WEBSITE_COPY_ENGLISH_v3.md (update)
│   │   ├── SKIIN_WEBSITE_COPY_GERMAN_v3.md (update)
│   │   ├── SKIIN_WEBSITE_COPY_FRENCH_v3.md (update)
│   │   └── SKIIN_WEBSITE_COPY_ITALIAN_v3.md (create)
│   └── protected-components/
│       └── PROTECTED_COMPONENTS_SPEC_v1.md (create)
├── reports/
│   └── 2025-01-22-test-reports/ (keep all)
└── implementation/
    ├── V2_COPY_TO_COMPONENT_MAPPING.md (keep)
    └── IMPLEMENTATION_ROADMAP_v3.md (create)
```

### Phase 3: Update Working Files (Day 1)
1. **planning.md**: Update with v3.0 implementation phases
2. **todo.md**: Add specific tasks for each gap
3. **event-stream.md**: Log all cleanup actions
4. **doc-ref.md**: Update with new structure

## Implementation Roadmap

### Week 1: Documentation & Copy Completion
**Day 1: Cleanup & Organization**
- [ ] Archive obsolete documents
- [ ] Create new directory structure
- [ ] Update SPEC_REGISTRY.md

**Day 2-3: Copy Updates**
- [ ] Integrate v3.0 changes into English copy
- [ ] Complete protected components specifications
- [ ] Add medical claims citations
- [ ] Create Italian base copy document

**Day 4-5: Translation Completion**
- [ ] Update German copy with v3.0 changes
- [ ] Update French copy with v3.0 changes
- [ ] Complete missing DE/FR sections
- [ ] Professional Italian translation

### Week 2: Implementation Preparation
- [ ] Update component mapping with v3.0 changes
- [ ] Create translation files structure
- [ ] Implement Italian language support
- [ ] Visual validation with Puppeteer

### Success Metrics
1. **100% Copy Coverage**: All sections specified
2. **4 Languages Complete**: EN/DE/FR/IT fully translated
3. **Clean Documentation**: Single source of truth established
4. **Implementation Ready**: All specs mapped to components

## Risk Mitigation

| Risk | Impact | Mitigation |
|------|--------|------------|
| Translation delays | High | Start with professional translators immediately |
| Protected component complexity | Medium | Get CEO approval on specifications first |
| Italian routing issues | Medium | Test infrastructure before content |
| Medical claims compliance | High | Legal review before publication |

## Next Steps

1. **Immediate (Today)**:
   - Execute Phase 1-3 of cleanup plan
   - Create PROTECTED_COMPONENTS_SPEC_v1.md
   - Update planning.md and todo.md

2. **Tomorrow**:
   - Begin v3.0 copy integration
   - Start Italian translation process
   - Complete missing sections

3. **This Week**:
   - Finalize all copy documents
   - Map to implementation
   - Begin development

## Appendix: Key Documents Reference

### Active Specifications
- `/docs/UPDATE-WEBSITE-COPY-v3-Jul-22-2025.md` - Latest spec with Italian
- `/docs/content/iterations/2025-01-22-copy-update-v2/` - All test reports
- `/docs/V2_COPY_TO_COMPONENT_MAPPING.md` - Implementation guide

### Process Documents
- `/docs/process-review/PROCESS_IMPROVEMENT_ANALYSIS.md`
- `/working_files/CLAUDE_PROCESS.md` - Development methodology

### Archive Location
- `/docs/archive/2025-01-22/` - All superseded documents

---

This plan provides a clear path from current scattered documentation to a clean, integrated v3.0 copy specification ready for implementation.