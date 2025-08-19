## Comprehensive Documentation Guidelines

This guide defines how to create, organise and maintain documentation in our subagent‑driven project. It aims to balance thoroughness with elegance—ensuring that everything written serves a clear purpose without generating unnecessary overhead. Documentation is a first‑class citizen of the system and is tightly integrated with our context management and knowledge graph.

### Principles

1. **Single Source of Truth** – Each document lives in exactly one location. Avoid duplicating information; instead, reference and link existing documents. Keep the context/doc-ref.md index current.

2. **Lifecycle Awareness** – Documents move through stages: **Draft → Review → Approved → Delivered → Archived**. Stage transitions are recorded in context/event-stream.md and reflected in context/doc-ref.md.

3. **Phase Alignment** – Documents are categorised by the phase they support. Discovery docs capture context and competitive landscape; requirements docs formalise needs and criteria; architecture docs design the solution; implementation docs guide development; validation docs cover testing; operational docs support deployment and maintenance; deliverables summarise final outputs.

4. **Versioning & Naming** – Use semantic versioning: major.minor.patch (e.g., 1.0, 1.1.2). Drafts include the suffix \-draft-v\[N\]. Approved working documents live in docs/\[category\]/\[name\]-v\[N\].md. Final deliverables are stored under deliverables/ with uppercase names (e.g., ARCHITECTURE\_SPEC.md). Archived files are moved to docs/archive/YYYY-MM-DD/ retaining their original name.

5. **Linked Knowledge** – Each document is represented as an entity in the knowledge graph. The Documenter updates relations between documents, tasks, subagents and phases. When a doc is archived, its relations are updated or marked superseded.

6. **Conciseness & Clarity** – Write for readers unfamiliar with the project. Use clear headings, concise language and diagrams where beneficial. Include tables of contents for documents over 3 pages.

7. **Continuous Maintenance** – Update documentation as you implement—never leave it to the end. During each phase transition, review and prune docs, archiving obsolete versions.

### Directory Structure

project-root/  
├── docs/                       \# Working documentation (living documents)  
│   ├── discovery/              \# Context & research  
│   │   ├── context-analysis-v\[N\].md  
│   │   ├── competitive-analysis-v\[N\].md  
│   │   ├── technical-audit-v\[N\].md  
│   │   ├── user-research-v\[N\].md  
│   │   ├── synthesis-v\[N\].md  
│   │   └── patterns/           \# Identified reusable patterns  
│   │       └── \[...\].md  
│   ├── requirements/           \# Requirements specification  
│   │   ├── feature-\[slug\]-spec-v\[N\].md  
│   │   ├── ambiguity-log-v\[N\].md  
│   │   └── risk-analysis-v\[N\].md  
│   ├── architecture/           \# System and component designs  
│   │   ├── architecture-overview-v\[N\].md  
│   │   ├── component-architecture-v\[N\].md  
│   │   ├── data-models-v\[N\].md  
│   │   └── diagrams/           \# Visual diagrams (Mermaid, images)  
│   │       └── \[...\].md  
│   ├── implementation/         \# Development guides  
│   │   ├── repository-structure-v\[N\].md  
│   │   ├── coding-guidelines-v\[N\].md  
│   │   ├── integration-guides/   \# e.g., Supabase, payments  
│   │   │   └── supabase-integration-v\[N\].md  
│   │   └── patterns/           \# Implementation patterns & libraries  
│   ├── validation/             \# Testing & QA  
│   │   ├── test-plan-v\[N\].md  
│   │   ├── qa-checklist-v\[N\].md  
│   │   └── test-results-v\[N\].md  
│   ├── operations/             \# Deployment & maintenance  
│   │   ├── deployment-guide-v\[N\].md  
│   │   ├── monitoring-plan-v\[N\].md  
│   │   └── runbooks/           \# Operational procedures  
│   │       └── incident-response-v\[N\].md  
│   ├── post-mortems/           \# Lessons learned after incidents or releases  
│   │   └── feature-\[slug\]-post-mortem-v\[N\].md  
│   ├── glossary-v\[N\].md        \# Domain terms and definitions  
│   └── archive/                \# Obsolete versions, dated directories  
│       └── YYYY-MM-DD/  
│           └── \[archived-docs\].md  
├── deliverables/               \# Final outputs for each phase  
│   ├── discovery/              \# e.g., CONTEXT\_ANALYSIS.md  
│   ├── requirements/           \# e.g., REQUIREMENTS.md  
│   ├── architecture/           \# e.g., ARCHITECTURE\_SPEC.md  
│   ├── implementation/         \# e.g., REPOSITORY\_STRUCTURE.md  
│   ├── validation/             \# e.g., TEST\_PLAN.md  
│   └── operations/             \# e.g., DEPLOYMENT\_GUIDE.md  
└── context/                    \# Process tracking (always loaded)  
    ├── planning.md  
    ├── todo.md  
    ├── conventions.md  
    ├── doc-ref.md  
    └── event-stream.md

### Documentation by Phase

#### *Discovery & Research*

* **Purpose**: Understand the problem space, context and external landscape.

* **Key docs**: context-analysis-v\[N\].md, competitive-analysis-v\[N\].md, technical-audit-v\[N\].md, user-research-v\[N\].md, synthesis-v\[N\].md. Use these to summarise internal and external research. Patterns discovered should be stored in docs/discovery/patterns/ and recorded in the knowledge graph.

* **Artifacts**: RESEARCH.md, TOT.md and BRAINSTORM.md are *temporary artefacts* generated during the process; they live in docs/ and are archived after their insights are integrated into formal docs.

#### *Requirements & Analysis*

* **Purpose**: Formalise what needs to be built and why. Capture user stories, acceptance criteria, assumptions and risks.

* **Key docs**: feature-\[slug\]-spec-v\[N\].md, ambiguity-log-v\[N\].md, risk-analysis-v\[N\].md. Use the requirements matrix and evaluation frameworks. Update docs when clarifications are resolved.

#### *Architecture & Design*

* **Purpose**: Describe how the system will meet requirements. Define high‑level and component architectures, data models and interactions.

* **Key docs**: architecture-overview-v\[N\].md, component-architecture-v\[N\].md, data-models-v\[N\].md. Include diagrams in docs/architecture/diagrams/. Each version should reflect the latest design decisions.

#### *Implementation & Integration*

* **Purpose**: Provide guidance for developers. Document repository structure, coding standards and integration steps for external services.

* **Key docs**: repository-structure-v\[N\].md, coding-guidelines-v\[N\].md, integration-guides/ (e.g., supabase-integration-v\[N\].md for database integration). Record patterns and best practices in docs/implementation/patterns/.

#### *Validation & Testing*

* **Purpose**: Define how the system will be tested and validated. Ensure quality, performance and compliance.

* **Key docs**: test-plan-v\[N\].md, qa-checklist-v\[N\].md, test-results-v\[N\].md. Include details on unit, integration, E2E and visual tests. Align with testing standards in context/conventions.md.

#### *Operations & Maintenance*

* **Purpose**: Support deployment, monitoring and incident response.

* **Key docs**: deployment-guide-v\[N\].md, monitoring-plan-v\[N\].md, runbooks such as incident-response-v\[N\].md. Update these as infrastructure evolves.

#### *Post‑Mortems & Continuous Improvement*

* **Purpose**: Capture lessons learned after releases or incidents.

* **Key docs**: feature-\[slug\]-post-mortem-v\[N\].md. Include root cause analysis, timelines, impact, remediation and action items. Feed insights back into conventions and patterns.

### Document Lifecycle

1. **Draft** – A document begins in docs/\[category\]/draft/ as name-draft-v\[N\].md. Drafts are not listed in doc-ref.md until ready for review.

2. **Review** – Once content is stable, move the draft up one level to docs/\[category\]/name-v\[N\].md and increment the minor version. Add an entry in doc-ref.md under status *Review*. Solicit feedback from the Review‑Reflection Agent and relevant experts.

3. **Approved** – After review, update the status in doc-ref.md to *Approved* and increment the version if changes were made. Approved docs are the canonical reference during active work.

4. **Delivered** – When a phase completes, copy or consolidate approved docs into deliverables/\[phase\]/ using uppercase names (e.g. CONTEXT\_ANALYSIS.md). These are client‑ready outputs. Update doc-ref.md status to *Delivered* and log the transition in event-stream.md.

5. **Archived** – When a document is superseded (e.g. new architecture version), move the old version to docs/archive/YYYY-MM-DD/ preserving its name. Update doc-ref.md status to *Archived* and maintain a link to the replacement. The Documenter ensures archived docs remain accessible but are not referenced in new work.

### Roles & Responsibilities

* **Documenter Subagent** – Oversees documentation lifecycle. Ensures docs adhere to these guidelines, updates doc-ref.md, coordinates with other subagents to create or update docs, and archives outdated versions. Automatically includes the latest conventions and doc guidelines in its context.

* **Other Subagents** – Contribute to documentation relevant to their roles (e.g. Researcher summarises findings into discovery docs, Planner produces plans and test plans, Developers update coding guides when patterns change). Always collaborate with the Documenter to ensure proper indexing and versioning.

* **Orchestrator** – Ensures that documentation tasks are scheduled and completed within each phase. Triggers the Documenter to audit docs during phase transitions.

### Maintenance Routine

1. **Phase Transitions** – At the end of each phase (Discovery, Requirements, etc.), the Documenter reviews all related docs, updates statuses, archives superseded drafts and ensures deliverables are compiled.

2. **Weekly Audit** – The Documenter runs a weekly check for broken references, outdated versions and unlinked docs. Use automation scripts under scripts/docs/ to validate structure and generate reports.

3. **Event Logging** – All significant document events (creation, review, approval, archival) must be logged to context/event-stream.md with timestamps and descriptions. Use categories like Documentation, Archival or Delivery.

4. **Knowledge Graph Synchronisation** – Represent documents, versions and relationships in the knowledge graph using memory.create\_entities and memory.create\_relations. This facilitates retrieval of documentation by semantic queries.

### Integration with Artefacts

Temporary artefacts such as RESEARCH.md, TOT.md and BRAINSTORM.md are not part of the long‑term context. They live in docs/ during an iteration and are archived once their insights have been distilled into formal docs (e.g. discovery synthesis or requirements spec). The Documenter ensures that these artefacts are referenced in event-stream.md and archived accordingly. They should not be loaded by default in context unless explicitly needed.

### Conclusion

These guidelines provide a structured yet flexible approach to documentation. By aligning documents with phases, tracking versions and lifecycles, and integrating with our knowledge graph and context files, we ensure that information is always reliable, accessible and minimal. Use this document as the standard for all current and future projects.

---

