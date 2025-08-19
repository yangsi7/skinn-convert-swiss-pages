# New Project Instructions: Generating CLAUDE Context Files

Use this guide to initialise a fresh Claude Code project. It explains how to generate the core context files (CLAUDE.md, CLAUDE\_PROCESS.md, event‑stream.md, planning.md, todo.md, conventions.md and doc‑ref.md) and how to customise them for your team and domain. Follow these steps at the start of every new project or major initiative.

## 1 Understand the Templates

Claude Code ships with default templates located under /templates/ (or the provided starter package). These include:

* **CLAUDE.md** – Defines the agent’s persona, context files, objectives, guiding principles, module summary and priority rules.

* **CLAUDE\_PROCESS.md** – Describes the universal process: the agent loop, life‑cycle phases, modules, cross‑cutting modules, guardrails and event logging.

* **event‑stream-template.md** – Outlines how to log events (types, categories, examples).

* **planning‑template.md** – Provides a structure for the high‑level plan.

* **todo‑template.md** – Defines the task checklist format.

* **conventions‑template.md** – Establishes baseline coding, design, testing and security conventions.

* **design‑system‑starting‑instructions.md** and **nextjs‑supabase‑starting‑starting‑instructions.md** – Offer guidance for specific stacks or design system creation. Use them if relevant to your project.

Read through each template to familiarise yourself with its purpose. You will customise these files before the first execution phase.

## 2 Copy Templates into @working\_files/

Create a new directory (e.g. @working\_files/) in your repository to store the context files. Copy the templates into this directory and remove the \-template suffixes. For example:

mkdir \-p @working\_files  
cp templates/CLAUDE.md @working\_files/CLAUDE.md  
cp templates/CLAUDE\_PROCESS.md @working\_files/CLAUDE\_PROCESS.md  
cp templates/event-stream-template.md @working\_files/event-stream.md  
cp templates/planning-template.md @working\_files/planning.md  
cp templates/todo-template.md @working\_files/todo.md  
cp templates/conventions-template.md @working\_files/conventions.md  
cp templates/design-system-starting-instructions.md @working\_files/design-system-starting-instructions.md  
cp templates/nextjs-supabase-starting-starting-instructions.md @working\_files/nextjs-supabase-starting-instructions.md  
touch @working\_files/doc-ref.md

Ensure that doc-ref.md exists but is initially empty. It will serve as an index of additional documentation as your project grows.

## 3 Customise CLAUDE.md

Open @working\_files/CLAUDE.md and update the following sections:

* **core\_identity** – Replace the name (e.g. *Agent5meo*) and adjust the persona description to reflect your team’s values and expertise. State the primary language you will use and any domain‑specific strengths (e.g. healthcare, finance, education). Keep the emphasis on research, planning and safe tool usage.

* **context\_files** – Ensure the paths match your working files. Add any additional files that should persist across sessions (e.g. supabase.md, design-system.md). Remove references to unused files.

* **objectives** – Define high‑level goals tailored to your project. List tasks such as “understand user requirements”, “design the system architecture”, “implement features iteratively” and “maintain documentation”.

* **guiding\_principles** – Review and adjust the principles (e.g. research first, iterative decomposition, testing, security). Add any domain‑specific guidelines (e.g. medical device regulation, privacy laws).

* **modules\_summary** – Confirm the modules are relevant. If certain modules are not needed (e.g. performance module), you may omit them. Describe any custom modules you plan to introduce.

* **priority\_rules** – Set rules for prioritising tasks (e.g. unblockers first, regulatory compliance tasks first). Keep them concise.

Save your changes. Remember that CLAUDE.md is loaded first and should reference CLAUDE\_PROCESS.md via the \<reference\_process\> element.

## 4 Customise CLAUDE\_PROCESS.md

Open @working\_files/CLAUDE\_PROCESS.md. This file defines the universal process for the agent. You may:

* **Adjust the version number** or description to reflect your own customisation (e.g. version="1.1").

* **Modify or extend phases** – If your project has unique phases (e.g. *Data Labelling*, *Clinical Trials*), add them between \<agent\_life\_cycle\> tags. Include descriptions, relevant modules and triggers.

* **Create custom modules** – Within \<modules\>, define new modules with \<module name="..."\>, specifying their purpose, inputs, outputs and guidelines. For example, a *compliance\_module* might validate tasks against industry regulations.

* **Update cross‑cutting modules** – Add or remove cross‑cutting modules (e.g. a *legal\_module* or *observability\_module*). Provide guidelines for each.

* **Refine guardrails** – Add domain‑specific guardrails (e.g. rules for patient privacy, financial data handling). Make sure critical safety rules appear here.

* **Extend examples** – Provide examples relevant to your domain to illustrate the agent loop and error handling.

Document any changes in the event stream and summarise rationale in planning.md.

## 5 Set up event‑stream.md

Copy the content from event-stream-template.md into @working\_files/event-stream.md. Do **not** pre‑populate the log. As you begin work, the first entries will record the user’s initial instructions and the agent’s actions. Follow the logging guidelines:

* Include a UTC timestamp in ISO 8601 format for each event.

* Specify the event type and optional category.

* Write concise descriptions.

* Append entries; never edit or remove past events.

* Reference tasks or graph nodes with identifiers when applicable.

Leave the file empty except for an introductory comment if desired.

## 6 Set up planning.md and todo.md

Use planning.md and todo.md to manage your work:

* In planning.md, fill in the overview table with your first phase (likely *Research & Planning*). Describe objectives, stakeholders, dependencies and high‑level tasks. Leave other sections (architecture & design system, success metrics, risks, roadmap) blank until research is complete.

* In todo.md, create an initial set of tasks derived from your objectives. Assign IDs, mark them as incomplete and note any dependencies. You may update this list as you learn more.

Synchronise planning and todo files: tasks referenced in planning.md should exist in todo.md, and vice versa.

## 7 Set up conventions.md

Copy conventions-template.md to @working\_files/conventions.md and customise it:

* Fill in naming conventions specific to your language or framework.

* Populate design system placeholders with your brand’s colours, fonts and spacing. Reference your design‑system guidelines or the design system template if provided.

* Add database or service guidelines (e.g. Supabase, Prisma, Firebase) only if relevant to your stack. Otherwise, leave these sections blank or remove them.

* Update documentation, testing, security and continuous improvement sections to reflect your team’s standards.

Reference conventions.md frequently during development and update it when new patterns or decisions emerge.

## 8 Maintain doc‑ref.md

Create @working\_files/doc-ref.md as an index of additional documents under docs/. Each entry should include the relative path and a brief description. For example:

\- \[docs/design/colour-palette.md\] – Detailed colour palette definitions.  
\- \[docs/specifications/auth-flow.md\] – Specification for the authentication flow.  
\- \[docs/research/rls-policies.md\] – Research notes on Supabase RLS policies.

Update doc-ref.md whenever new documents are added or archived. Use this file to guide your research and keep context discoverable.

## 9 Iterate and Evolve

Once the context files are set up, begin the **Context** phase of the agent life cycle. Claude Code will load these files and start logging events. As you progress through subsequent phases (Analysis, Research, Planning, Execution, Review and Delivery), update the context files accordingly. Use the event stream and knowledge graph to maintain traceability.

Periodically review your context files. As the project scope changes, revise your persona, objectives, conventions and process definitions. Archive obsolete files under docs/archive/YYYY‑MM‑DD/ and update doc-ref.md with the new paths.

By following these steps, you will create a solid foundation for your new Claude Code project. The context files you generate serve as the backbone of collaboration between agents, ensuring consistent processes, transparent decision‑making and comprehensive documentation.

---

