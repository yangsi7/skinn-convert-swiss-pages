# Todo Template

This file defines the **task checklist** used by Claude Code projects. It provides a structured format for tracking all work items derived from your high‑level plan. Each entry should correspond to a discrete deliverable or step. Do **not** delete tasks when they are done—mark them as completed to preserve history. Use this template as a starting point and customise the phases, tasks and assignees for your project.

## Usage Guidelines

1. **Structure** – Group tasks by phase or feature. Use nested checkboxes to represent sub‑tasks. Assign each task a **unique identifier** (e.g. T1, T1.1) so you can reference it in planning.md, event‑stream.md and the knowledge graph.

2. **Status** – Mark tasks as incomplete (\[ \]) or complete (\[x\]). Do **not** remove tasks; completed tasks serve as an audit trail. Use strikethrough for cancelled tasks and note why they were removed.

3. **Dependencies** – Note any tasks or phases that must be completed first (e.g. depends on T1). Use these dependencies to prioritise execution and avoid blockers.

4. **Assignment** – Optionally include who is responsible for each task (e.g. @research‑agent). This is useful when multiple agents or team members collaborate.

5. **Updates** – When a task evolves due to new information, update its description but keep the original ID. Add notes explaining the rationale for changes. If new tasks arise, assign them new IDs and add them to the appropriate phase.

6. **Graph Persistence** – Mirror tasks as nodes in the knowledge graph using context7’s memory tools. Relate them to phases, files or components (e.g. depends\_on relations) so the graph can help with dependency analysis and reporting.

## Example Structure

Below is a sample checklist for a hypothetical project. Adapt the phases, tasks and details to your own needs.

\#\#\# Phase 1 – Research & Planning  
\- \[ \] \*\*T1\*\*: Survey existing authentication solutions  
  \- \*\*Details\*\*: Evaluate Auth0, Supabase Auth and custom JWT; note pros and cons.  
  \- \*\*Dependencies\*\*: None  
  \- \*\*Assignee\*\*: @research‑agent  
\- \[ \] \*\*T2\*\*: Draft high‑level architecture diagram  
  \- \*\*Details\*\*: Outline services, databases and API gateways.  
  \- \*\*Dependencies\*\*: T1  
  \- \*\*Assignee\*\*: @planning‑agent

\#\#\# Phase 2 – Backend Implementation  
\- \[ \] \*\*T3\*\*: Create database schema  
  \- \*\*Details\*\*: Define tables for users, sessions and roles; ensure referential integrity.  
  \- \*\*Dependencies\*\*: T2  
  \- \*\*Assignee\*\*: @backend‑agent  
\- \[ \] \*\*T4\*\*: Implement authentication endpoints  
  \- \*\*Details\*\*: Build login, signup and password‑reset handlers.  Validate input with Zod and enforce RLS policies.  
  \- \*\*Dependencies\*\*: T3  
  \- \*\*Assignee\*\*: @backend‑agent

\#\#\# Phase 3 – Frontend Implementation  
\- \[ \] \*\*T5\*\*: Scaffold UI components for login flow  
  \- \*\*Details\*\*: Build responsive forms using the design system; include accessibility considerations.  
  \- \*\*Dependencies\*\*: T4  
  \- \*\*Assignee\*\*: @frontend‑agent  
\- \[ \] \*\*T6\*\*: Write unit and integration tests for login flow  
  \- \*\*Details\*\*: Use Vitest and Playwright to cover API and UI flows.  Add accessibility checks with Axe.  
  \- \*\*Dependencies\*\*: T5  
  \- \*\*Assignee\*\*: @qa‑agent

Use this structure as a guide, not a prescription. Expand or collapse phases as required, ensure tasks are atomic and unambiguous, and cross‑link them in your planning and event‑stream documents.

---

