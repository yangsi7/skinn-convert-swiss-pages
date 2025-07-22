# **CLAUDE.md** (Project-Specific Playbook)

This version is the project-specific entrypoint for Claude Code to help Claude understand how to run, develop and pull information and documentation from this project

--------------------------------------------------------------------------------
🔰 **LOAD-ORDER GUARANTEE**

1.  **Always read this file first.**
2.  **THEN** load the universal process file embedded below
    (`@working_files/CLAUDE_PROCESS.md`).
3.  **THEN** read the five working files in the order shown in
    **§ 2 Working-File Canon**.

The rest of this document is organised as follows »

1.  Project snapshot & context
2.  Working-file canon (the five files)
3.  Critical principles & guard-rails
4.  Development commands & tech stack
5.  Road-map & success metrics
6.  Design system in depth
7.  Protected artefacts & DON’Ts
8.  File-naming & archival conventions
9.  Reference glossary

--------------------------------------------------------------------------------
## 1  Project snapshot & context
| Item                      | Value                                                                                |
| ------------------------- | ------------------------------------------------------------------------------------ |
| **Project name** | *SKIIN Switzerland - Multilingual Medical Marketing Site* |
| **Primary goal** | Launch a tri-lingual, medically trustworthy marketing website with interactive calculators |
| **Current state** | **27%** complete - Phase 1 (English MVP) at 40%                                     |
| **Live environment** | Vercel Preview → Netlify Prod (DNS TBD)                                            |
| **Local dev URL** | http://localhost:8080                                                               |
| **Key metrics** | 80+ components built, 69 routes configured, 0/4 protected components               |

--------------------------------------------------------------------------------
## 2  Working-File Canon  *(never bypass)*

| File                             | Role                                     | ALWAYS read…                   |
| -------------------------------- | ---------------------------------------- | ------------------------------ |
| **`@working_files/todo.md`** | Task checklist / sprint board            | first for “What next?”         |
| **`@working_files/planning.md`** | Technical blueprint & phase status       | to know “Why?” and “How?”      |
| **`@working_files/conventions.md`** | Coding, naming, design & content rules   | to stay consistent             |
| **`@working_files/event-stream.md`** | Time-stamped log of every action & reflection | to avoid duplicated effort     |
| **`@working_files/doc-ref.md`** | Index into deeper docs (`docs/…`)        | for any deep dive              |

> **One in/one out** — if you need additional scratch space, create a
> `docs/` artefact _and link to it from `doc-ref.md`_.
> Never proliferate ad-hoc files inside `working_files/`.

--------------------------------------------------------------------------------
## 3  Critical principles & guard-rails

1.  **Iteration > Creation**
    *Search, extend, parameterise, only then create.*
2.  **Design-system fidelity**
    Deep navy (#1E3A5F) + medical teal (#00796B) ± neutrals.
    Light-blue “heavenly” hues **forbidden**.
3.  **Atomic components**
    New UI component → new file, ≤ 50 LOC, Tailwind + shadcn/ui.
4.  **English-first** content pipeline.
    Place-holders OK for other locales; translation is Phase 2.
5.  **Protected artefacts** (unchangeable without written CEO sign-off) →
    *HeartBalanceRing*, *ContributingFactorCards*, *TabNavigation*, *TodayTab*.
6.  **Documentation integrity**
    Code ≠ done until `event-stream.md` & `planning.md` are updated.

--------------------------------------------------------------------------------
## 4  Dev commands & tech stack

```text
npm run dev       # Vite dev server :8080
npm run build     # Production build
npm run build:dev # Dev-mode build (debug)
npm run preview   # Preview a prod build locally
npm run lint      # ESLint (React 18 + TypeScript 5)
````

**Major libraries**

  * React 18 + TypeScript 5 + Vite
  * Tailwind CSS 3 + shadcn/ui
  * React Router DOM 6
  * TanStack React-Query 5 (object syntax only)
  * Zod 3 + React-Hook-Form 7
  * Lucide-React icons
  * Recharts (charts)
  * Sonner & Radix Toasts for notifications

-----

## 5  High-level road-map

| Week | Milestone         | Exit criteria                                     |
| ---- | ----------------- | ------------------------------------------------- |
| 1    | English MVP       | 14,000 English words live, CEO green-light on design |
| 2–3  | German & French   | Pixel-perfect, culturally localised content       |
| 4–5  | Interactive tools | Eligibility checker & coverage calculator pass QA |
| 6    | Launch & compliance | Swiss Med-Law checklist ✓, uptime ≥ 95%           |

*Progress & burndown charts live in `planning.md`.*

-----

## 6  Design system — extended spec

  * **Multi-Theme System**: 4 themes (Medical Blue, Professional Teal, Swiss Innovation, Soft Blue Teal)
    - See `/docs/implementation/theme-system-guide.md` for implementation
    - Component inventory: `/docs/implementation/theme-aware-components-inventory.md`
    - ALWAYS use CSS variables, NEVER hardcode colors
  * **Spacing**: base unit 4px; major sections 8 × base.
  * **Typography**: IBM Plex Sans (400/600/700); headings use optical sizing.
    Clamp-based fluid sizing (`clamp(1rem, 2vw + 1rem, 1.5rem)`).
  * **Break-points** (same as Tailwind defaults):
    `sm` 640px, `md` 768px, `lg` 1024px, `xl` 1280px, `2xl` 1536px.
  * **Component states**: `hover` ≥ 150ms fade; focus rings `focus:outline-offset-4`.
  * **Accessibility**: minimum colour-contrast ratio 4.5:1; toast auto-close 6s.

-----

## 7  Protected artefacts & absolute DON’Ts

| Artefact              | Why protected                   | Allowed?           |
| --------------------- | ------------------------------- | ------------------ |
| HeartBalanceRing      | Clinical accuracy & CE marking  | Read-only          |
| ContributingFactorCards | Regulatory copy approved        | Text only          |
| TabNavigation         | Used by marketing ops           | Style override only |
| TodayTab              | Licensed algorithm              | No structural edits |

*Never rename or relocate these without explicit CEO slack message.*

-----

## 8  File-naming & archival conventions

  * All new docs in `docs/` must start with ISO date, e.g.
    `2025-07-14-eligibility-algo-adr.md`.
  * Any file superseded → move to `docs/archive/YYYY-MM-DD/`.
  * Keep root directory ultra-clean: source code, `README.md`, `CLAUDE.md`,
    package/config files only.

-----

## 9  Copy Document Synchronization

### Core Copy Documents
- **English**: `/docs/content/SKIIN_WEBSITE_COPY_ENGLISH.md`
- **German**: `/docs/content/SKIIN_WEBSITE_COPY_GERMAN.md`
- **French**: `/docs/content/SKIIN_WEBSITE_COPY_FRENCH.md`
- **Review**: `/docs/content/COPY_DOCUMENTS_REVIEW.md`

### Synchronization Rules
1. **Any text change in code MUST be reflected in copy documents within 24 hours**
2. **Translation sync**: Changes in one language must be propagated to all three within 48 hours
3. **Version tracking**: Update version number and date on any change
4. **Review cycle**: Monthly review documented in review file

### Update Triggers
- New page creation
- Component text changes
- Translation file updates
- Legal/medical disclaimer changes
- CTA modifications
- Error message updates

### Enforcement
**CRITICAL**: Before marking any text-related task as complete, verify:
- [ ] Copy document updated
- [ ] All three languages synchronized
- [ ] Version number incremented
- [ ] Review document notes added

### Iteration Process
When making iterative changes to copy:

1. **Create iteration folder**: `/docs/content/iterations/YYYY-MM-DD-iteration-name/`
2. **Copy current documents** to iteration folder before changes
3. **Make changes** in the main copy documents
4. **Document changes** in `/docs/content/iterations/YYYY-MM-DD-iteration-name/CHANGES.md`
5. **Update version** in main documents (e.g., 1.0 → 1.1)
6. **Sync all languages** within 48 hours

#### Iteration folder structure:
```
/docs/content/iterations/2025-01-21-initial-completion/
├── CHANGES.md                    # What changed and why
├── SKIIN_WEBSITE_COPY_ENGLISH_v1.0.md    # Previous version
├── SKIIN_WEBSITE_COPY_GERMAN_v1.0.md     # Previous version
└── SKIIN_WEBSITE_COPY_FRENCH_v1.0.md     # Previous version
```

-----

## 10  Visual Asset Inventory

### Process & Product Images
| Asset | Path | Description | Usage |
| ----- | ---- | ----------- | ----- |
| Telehealth Consultation | `/assets/images/40ba1015-dfac-4b19-9548-8f3319ffe098.png` | Doctor consultation via video | Step 1: Referral |
| Device Delivery | `/assets/images/a94ae42b-2b12-49d8-a6af-965c9691535f.png` | Package delivery illustration | Step 2: Delivery |
| Heart Monitor | `/assets/images/32de0ca4-a556-4e60-bfaf-fc48bf4bd27c.png` | Person wearing SKIIN device | Step 3: Wear |
| App Live ECG | `/assets/images/app-live-ecg.png` | SKIIN app showing ECG data | Step 4: Monitor |
| Doctor-Patient | `/assets/images/doctor-patient.jpeg` | Healthcare provider with patient | Step 5: Results |

### Videos
| Asset | Path | Description | Theme |
| ----- | ---- | ----------- | ----- |
| Cardiac Assessment | `/assets/videos/Myant-EU-cardiac-health-assesement-at-home.mp4` | Home cardiac monitoring | Education |
| Silent Arrhythmias | `/assets/videos/Myant-EU-video-70-percent-of-arrythmia-are-silent.mp4` | 70% arrhythmias are silent | Awareness |

### MVCP (Myant Virtual Clinic Portal)
| Asset | Path | Description | Usage |
| ----- | ---- | ----------- | ----- |
| Consultation View | `/assets/images/mvcp/consultation-mvcp.jpg` | Doctor using MVCP during consultation | Physician section |
| ECG Review | `/assets/images/mvcp/MVCP 2025-06-24 at 10.37.54.png` | ECG strip review interface | Features showcase |
| Dashboard | `/assets/images/mvcp/MVCP 2025-06-24 at 10.36.25.png` | MVCP dashboard view | Portal overview |

### Team Photos
| Asset | Path | Description | Role |
| ----- | ---- | ----------- | ---- |
| Vincent Martinez | `/assets/images/team/vincent-martinez-official-headshot.jpg` | CEO Nanoleq, Head of Europe | Leadership |
| Swiss Founders | `/assets/images/team/Team-CH.jpg` | Martinez, Stauffer, Weydert | Founding team |
| Product Leaders | `/assets/images/team/Team-CH2.png` | Simon Yang & Vincent Martinez | Product leadership |
| Pablo Doerig | `/assets/images/team/Pablo-Doerig.jpeg` | COO Europe | Operations |
| Myant Team | `/assets/images/team/Myant-Team.png` | Full team at HQ | Company culture |
| Tony Chahine | `/assets/images/team/tony-chahine-official-headshot-myant-corp.jpg` | CEO Myant Corp | Parent company |

### Medical Advisors
| Asset | Path | Description | Role |
| ----- | ---- | ----------- | ---- |
| Prof. Dr. Frank Ruschitzka | `/assets/images/team/dr-frank-ruschitzka-faceshot.jpeg` | Director Cardiology USZ | Medical Advisor |
| PD Dr. Mehdi Namdar | `/assets/images/team/pd-dr-med-mehdi-namdar-faceshot.jpg` | Chief Nuclear Cardiology | Medical Advisor |
| Dr. Mathias Wilhelm | `/assets/images/team/dr-mathias-wilhelm-faceshot.jpg` | Head Preventive Cardiology | Medical Advisor |
| Dr. Michiel Winter | `/assets/images/team/dr-michiel-winter-faceshot.jpg` | Lead Cardiologist Hirslanden | Medical Advisor |

### Design References
| Asset | Path | Description | Design Element |
| ----- | ---- | ----------- | -------------- |
| Progressive Stats | `/assets/images/design-examples/example-progressive-scrolling-1of4.png` | Large percentage displays | Scroll animations |
| Stat Layout | `/assets/images/design-examples/example-progressive-scrolling-2of4.png` | Stacked statistics | Visual hierarchy |
| Dark Section | `/assets/images/design-examples/example-progressive-scrolling-3of4.png` | Dark bg with comparison | Section contrast |
| Comparison Table | `/assets/images/design-examples/example-progressive-scrolling-4of4.png` | Feature comparison | Data visualization |

-----

## 11  Glossary (quick reference)

| Term            | Meaning                                                        |
| --------------- | -------------------------------------------------------------- |
| MCP             | Modular Capability Provider: remote tool service (search, memory, etc.) |
| TDG             | Test-Driven Generation – AI-assisted TDD loop                  |
| Atomic component| React component ≤ 50 LOC, single responsibility              |
| LOE             | Level Of Effort estimate                                       |
| P0              | Highest urgency/severity level                                 |

-----

## 12  Current Implementation Status

### Completed ✅
- **Component Architecture**: 80+ React components with atomic design
- **Routing System**: 69 routes across 3 languages (en/de/fr)
- **Design System**: shadcn/ui with medical theme colors
- **State Management**: Context API + TanStack Query setup
- **Analytics Framework**: GA4, Google Ads, HubSpot ready (needs IDs)
- **Form Infrastructure**: React Hook Form + Zod validation

### In Progress ⚠️
- **Homepage Content**: Components exist, need real content
- **Translations**: File structure ready, content missing
- **Analytics Connection**: Code ready, awaiting configuration

### Not Started ❌
- **Protected Components**: HeartBalanceRing, ContributingFactorCards, TabNavigation, TodayTab
- **Interactive Calculators**: Eligibility checker UI exists, needs backend
- **Medical Content**: Clinical evidence, compliance docs, testimonials
- **Content Management**: No CMS or content loading system
- **IBM Plex Sans**: Font not loaded yet

### Critical Paths
1. **Week 1**: Protected components, homepage content, analytics setup
2. **Week 2-3**: German/French translations, medical content
3. **Week 4-5**: Calculator implementations, insurance mappings
4. **Week 6**: Compliance review, performance optimization, launch

-----

EOF — remember to read the embedded process below before doing anything

\<process\_embed\>
@include(working\_files/CLAUDE\_PROCESS.md)
\</process\_embed\>

