# Documentation Reference Guide

## Quick Navigation to Detailed Documentation

### 📋 Core Specifications
- **Target Architecture**: docs/specifications/target-architecture.md (25+ pages structure)
- **Content Requirements**: docs/specifications/content-requirements.md (14,000+ words breakdown)
- **Implementation Guide**: docs/specifications/IMPLEMENTATION_GUIDE.md (step-by-step process)
- **Master Specifications**: docs/NEW-WEBSITE-UPDATE-SPECS.md (615 lines comprehensive requirements)

### 🎨 Design & UX
- **Design System Details**: working_files/design-system.md (colors, typography, components)
- **Visual Asset Review**: docs/VISUAL_ASSET_REVIEW.md (asset requirements and analysis)
- **Component Library**: Components documented in codebase (src/components/)

### 📝 Content & Copy
- **Production Copy**: working_files/WEBSITE_COPY_PRODUCTION.md (all 14,000 words ready)
- **Content Guidelines**: Tone and style covered in working_files/conventions.md
- **Translation Files**: src/translations/ (organized by section and language)

### ⚖️ Compliance & Legal
- **Compliance Requirements**: working_files/compliance-requirements.md (Swiss medical device)
- **Swiss Regulations**: docs/compliance/ (if detailed docs exist)
- **Medical Device Standards**: Requirements embedded in target specifications

### 🏗️ Architecture & Implementation
- **Current State Analysis**: working_files/current-state-analysis.md (27.5% completion status)
- **Gap Analysis**: docs/GAP_ANALYSIS_REPORT.md (detailed compliance assessment)
- **Interactive Features**: working_files/interactive-features-spec.md (eligibility checker, calculator)

### 📊 Analysis & Reports
- **Comprehensive Analysis**: docs/COMPREHENSIVE_ANALYSIS_REPORT.md (full project assessment)
- **CEO Review Summary**: working_files/CEO_REVIEW_SUMMARY.md (executive overview)
- **Implementation Roadmap**: working_files/implementation-roadmap.md (6-week timeline)

### 🏃‍♂️ Quick Start References
- **Next Steps**: working_files/next-steps.md (immediate action items)
- **English-First Plan**: working_files/implementation-plan-english-first.md (MVP strategy)
- **Project Overview**: working_files/project-overview.md (mission and timeline)

## 📚 Archives & Historical Context

### Recent Archives (2025-01-13)
- **Previous Working Files**: working_files/archive/2025-01-13/
  - planning.md (previous implementation plan)
  - todo.md (previous task list)
  - conventions.md (previous code standards)
  - design-system.md (previous design standards)
  - latest-specs.md (previous implementation status)

### Documentation Archive
- **Historical Docs**: docs/archive/2025-01-13/ (if exists)
- **Superseded Specs**: Any replaced specifications with timestamps

## 🔄 When to Reference These Documents

### Daily Development
- **Always Read First**: working_files/ (5 core files for complete context)
- **When Implementing**: Reference detailed specs in docs/specifications/
- **When Styling**: Check design-system.md for exact colors/spacing
- **When Writing Copy**: Use production copy from WEBSITE_COPY_PRODUCTION.md

### Specific Tasks
- **New Components**: Check conventions.md for patterns, search existing components
- **Compliance Issues**: Reference compliance-requirements.md and Swiss regulations
- **Content Updates**: Use content-requirements.md for word counts and distribution
- **Performance Issues**: Check implementation guide for optimization standards

### Problem Solving
- **Translation Issues**: Check current vs target specs, examine translation files
- **Design Questions**: Reference design-system.md and visual asset reviews
- **Architecture Decisions**: Review target-architecture.md and gap analysis
- **Process Questions**: Check CLAUDE_PROCESS.md for agent methodology

## 📝 Documentation Maintenance

### Update Triggers
- **After Implementation**: Update planning.md with new completion status
- **Design Changes**: Update conventions.md design standards
- **New Requirements**: Update target specifications or create new docs
- **Major Changes**: Archive superseded docs with timestamps

### Archive Rules
- **Immediate**: When implementation replaces specification
- **Weekly**: Unused experiment files >7 days old
- **Never Archive**: Current working files, referenced specifications, recent files (<7 days)

### File Relationships
```
working_files/ (current context)
    ↓ references
docs/ (detailed specifications)
    ↓ archives to
docs/archive/[date]/ (historical context)
```

## 🎯 Quick Lookup by Task Type

| Task Type | Primary References | Supporting Docs |
|-----------|-------------------|-----------------|
| **Bug Fixing** | event-stream.md, planning.md | Implementation guide, conventions |
| **New Features** | target-architecture.md, conventions.md | Design system, content requirements |
| **Content Updates** | WEBSITE_COPY_PRODUCTION.md | Content requirements, translation files |
| **Design Changes** | design-system.md, conventions.md | Visual asset review, target specs |
| **Compliance** | compliance-requirements.md | Swiss regulations, medical device standards |
| **Performance** | conventions.md (quality standards) | Implementation guide, current state analysis |

---

**Remember**: Working files provide current context and navigation. Detailed docs provide comprehensive specifications. Always start with working files, then drill down to detailed docs only when needed.