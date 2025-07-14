# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Process Methodology
🚨 **CRITICAL: ALWAYS FOLLOW THE UNIVERSAL AGENT PROCESS**

**Step 1:** Read this file (CLAUDE.md) for project context
**Step 2:** Execute the Universal Agent Process in @working_files/CLAUDE_PROCESS.md

The process will guide you to:
- Read the 5 working files systematically
- Understand the request and plan the required research
- perform extensive research on internal documentation and any external documentation or info required to gather all necessary context
- Analyze the request in the context of the gathered context and plan your approach
- Execute with maximum autonomy
- Maintain quality and documentation

**The 5 Working Files** (read by the process):
1. **todo.md** - Active tasks and priorities
2. **planning.md** - Current state + Target specs + Implementation plan  
3. **conventions.md** - All standards (tech, design, content, quality)
4. **event-stream.md** - Development history and context
5. **doc-ref.md** - Navigation to detailed documentation

**Remember:** The Universal Agent Process handles all edge cases, decision trees, and quality assurance. Follow it systematically for every task.

### Core Development Principles (NEVER VIOLATE)
1. **ITERATION OVER CREATION** - Always extend existing components rather than creating new ones
2. **FOLLOW THE DESIGN SYSTEM** - Use established patterns and color scheme (deep navy, medical teal)
3. **RESPECT CONVENTIONS** - Follow established file structure and naming patterns
4. **CHECK WORKING FILES FIRST** - Always read all working files before starting any task
5. **NO DUPLICATION** - Never duplicate functionality that already exists
6. **ENGLISH-FIRST APPROACH** - Implement English content first, then translations
7. **PROFESSIONAL AESTHETICS** - Avoid light blues and "heavenly" colors that undermine trust

## Streamlined Working Files Structure (Updated Jan 14, 2025):

### Core Working Files (Always Read First)
- `@working_files/todo.md` - Active tasks and current priorities
- `@working_files/planning.md` - Current state (27.5% complete) + Target specs + Implementation plan
- `@working_files/conventions.md` - All standards (tech, design, content, quality)
- `@working_files/event-stream.md` - Development history and context
- `@working_files/doc-ref.md` - Navigation to detailed documentation

### Process Reference
- `@working_files/CLAUDE_PROCESS.md` - Agent methodology and agentic loop rules

### Detailed Documentation (Via doc-ref.md)
- **Specifications**: Target architecture, content requirements, compliance standards
- **Implementation**: Step-by-step guides, roadmaps, production copy
- **Analysis**: Gap analysis, current state assessment, CEO summaries
- **Archives**: Previous working files preserved in working_files/archive/2025-01-13/


## Development Commands

- `npm run dev` - Start development server on port 8080
- `npm run build` - Build for production
- `npm run build:dev` - Build with development mode
- `npm run lint` - Run ESLint for code quality checks
- `npm run preview` - Preview production build locally

## Tech Stack

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS with shadcn/ui components
- **Routing**: React Router DOM with multilingual URL structure
- **State Management**: React Context (LanguageContext)
- **Analytics**: Google Analytics 4 + HubSpot tracking
- **Forms**: React Hook Form with Zod validation

## Architecture

This is a multilingual marketing website supporting English, German, and French. The application follows a component-based architecture with feature-organized directories.

### Key Systems

**Multi-Language System**: 
- Currently broken - fix or use English-only workaround for MVP
- Supports 3 languages with URL-based routing (`/`, `/de/*`, `/fr/*`)
- Translation files organized by section in `src/translations/{section}/{language}.ts`
- Uses `useTranslation` hook for content translation and `useLanguage` context for state

**Design System**:
- Professional medical aesthetic (deep navy #1e3a5f, medical teal #00796b)
- Avoid light blues and "heavenly" colors
- Swiss quality indicators throughout
- 30% more whitespace than typical sites

**Component Structure**:
- `src/components/home/` - Home page sections
- `src/components/physicians/` - Physicians page components  
- `src/components/analytics/` - Analytics and tracking components
- `src/components/ui/` - shadcn/ui reusable components
- `src/pages/` - Page-level components used by router

### Import Aliases

The `@` alias maps to `src/` directory. All imports should use this alias for consistency.

## Implementation Strategy

### Week 1: English MVP (Current Focus)
1. Fix translation system or implement workaround
2. Deploy all 14,000 words of English copy
3. Use German visual assets across all languages
4. Professional design system (no "heavenly" colors)
5. CEO review by end of week

### Weeks 2-3: Multilingual
- Professional German/French translations
- Cultural adaptations

### Weeks 4-5: Interactive Features
- Eligibility checker
- Coverage calculator

### Week 6: Launch
- Compliance review
- Production deployment

## Critical Issues Status

### 🚨 P0 Blockers
1. **Translation System Broken** - All languages show English (workaround planned)
2. **Missing Core Pages** - Need to create 13+ pages with medical content
3. **No Interactive Features** - Eligibility checker and calculator not started

### ⚠️ Design Requirements
- Must avoid "heavenly blue" colors (user feedback)
- Use deep professional tones for medical credibility
- German visual assets to be used for all languages initially

## Success Metrics

### Week 1 MVP
- All English copy deployed (14,000 words)
- Professional design implemented
- Mobile responsive
- <3 second load times
- Ready for CEO review

### Full Launch (Week 6)
- Multilingual support working
- Interactive tools functional
- Swiss compliance achieved
- 95%+ uptime

---

**Remember: Always read the 5 core working files first for complete context. Use doc-ref.md to navigate to detailed specifications when needed. The gap between current (27.5%) and target (100%) requires systematic execution following the streamlined process.**
