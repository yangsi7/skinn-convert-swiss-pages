# CLAUDE Process – Subagent‑Oriented Lifecycle

This document defines the end‑to‑end lifecycle of the CLAUDE system under the subagent framework. It outlines the phases, triggers, steps, outputs, loop conditions and the subagents invoked at each stage. Unlike the original module‑based design, this process emphasises **flexibility**, **context management**, **safety**, and **workflow reuse**. Each phase can loop or be revisited based on new information or requirement changes, and minor updates can be handled through mini‑cycles rather than restarting the entire sequence.

## General Process Characteristics

1. **Phase‑Based Structure:** Eight core phases organise the workflow: Context Gathering, Analysis, Research & Synthesis, Brainstorm & Evaluation, Planning, Execution, Review & Reflection and Delivery. Phases can be entered via predefined workflows or dynamic invocation chains. Subphases or mini‑cycles allow localised updates during Execution.

2. **Workflow Gateway:** Before starting or when receiving a new user task, Claude checks WORKFLOWS.md for a matching workflow. If found, the workflow defines the subagent sequence. Otherwise, the Invocation‑Chain Generator proposes a custom chain. All agent selections are logged.

3. **Think–Act–Observe Loop:** Within each phase and task, the orchestrator follows a ReAct‑style loop: think (analyse current state), act (invoke subagent/tool), observe (interpret results) and reflexion (self‑critique or review invocation) before iterating.

4. **Context & Memory Management:** Context is loaded via the Context‑Manager at each phase start and summarised/pruned by the Memory‑Manager after each phase or when exceeding thresholds. The knowledge graph is the canonical data store; views (plan, tasks, docs) are generated from it.

5. **Safety & Compliance:** The Safety‑Compliance Agent is invoked whenever external data is processed, code is executed or operations with side effects are planned. It sanitises inputs/outputs, enforces privacy and ensures regulatory compliance. User confirmation is required for side‑effect actions.

6. **Iteration Caps & Timeouts:** Each phase has default iteration limits (e.g. three research iterations per topic, five brainstorming revisions). The orchestrator monitors loops and defers or summarises tasks when limits are reached. Timeouts prevent indefinite waiting on tool calls.

7. **Documentation Lifecycle:** Documents progress through draft → review → approved → delivered → archived states. The Documenter agent manages updates, versioning and indexing in doc-ref.md. Superseded documents are archived in docs/archive/YYYY-MM-DD/.

## Phase 1 – Context Gathering

**Goal:** Capture the user’s intent and gather all relevant information within the context window.

**Triggers:** Session start; new user request; start of a new project or task; outdated context; after major plan updates.

**Steps:** 1\. **Parse the user’s message** to identify explicit and implicit goals. If critical details are missing, ask targeted clarification questions. 2\. **Call the Context‑Manager** to load the latest versions of planning.md, todo.md, conventions.md, event-stream.md, doc-ref.md, RESEARCH.md, TOT.md, BRAINSTORM.md and any relevant project artefacts. Use the Graph‑Manager to fetch related entities (tasks, phases, files, requirements) from the knowledge graph. 3\. **Summarise the context** into a concise brief tailored to the next subagent. Apply context engineering: select only relevant history, compress long logs and isolate unrelated scratchpads. Persist the brief via the Memory‑Manager and log a KnowledgeCapture event. 4\. **Identify missing information** and prepare follow‑up questions or research requests. If user clarification is needed, pause and ask. 5\. **Log events:** record a UserMessage for the new request, a PhaseChange to Context Gathering, and a KnowledgeCapture for the context summary.

**Outputs:** Problem statement; context summary; updated context files; new entities/relations in the knowledge graph.

**Loop condition:** If goals or context remain unclear, repeat Steps 1–4. Otherwise, transition to Analysis.

**Subagents Invoked:** Context‑Manager, Graph‑Manager, Memory‑Manager, Safety‑Compliance Agent (to sanitise user input).

## Phase 2 – Analysis

**Goal:** Develop a structured understanding of the problem domain.

**Triggers:** Completion of Context Gathering; need to organise knowledge; new entities discovered during later phases.

**Steps:** 1\. **Identify key entities** (requirements, tasks, components, subagents, workflows, user roles) and their relationships (depends\_on, belongs\_to, implements, uses, assigned\_to). 2\. **Construct a Tree‑of‑Thought (ToT) diagram** linking entities and showing hierarchies, dependencies and flows. Use text outlines or Mermaid diagrams; save to docs/TOT.md. 3\. **Update the knowledge graph** with new entity and relation nodes. Validate against graph-schema.md using the Memory‑Manager. 4\. **Persist analysis artifacts** to docs/TOT.md and record a KnowledgeCapture event. Optionally snapshot the event log or graph state for traceability. 5\. **Log events:** PhaseChange to Analysis; Action for entity mapping; Observation for ToT creation.

**Outputs:** Comprehensive entity‑relation map (ToT diagram); enriched knowledge graph.

**Loop condition:** If new entities or relations arise later (e.g. during research or planning), revisit Analysis to update the ToT and graph. Otherwise, move to Research & Synthesis.

**Subagents Invoked:** Analysis Agent, Graph‑Manager, Memory‑Manager.

## Phase 3 – Research & Synthesis

**Goal:** Gather evidence, examples and best practices from authoritative sources to inform design decisions.

**Triggers:** Open questions or uncertainties identified during Analysis; domain knowledge gaps; new concepts requiring validation.

**Steps:** 1\. **Define research topics** based on entities and gaps (e.g. best practices for multi‑agent orchestration, design system implementation, testing frameworks). Prioritise by importance and uncertainty. 2\. **For each topic, iterate up to three times:** a. **Invoke the Research Agent** to perform searches via browser tools, library connectors and documentation lookups. Always pass external sources through the Safety‑Compliance Agent for verification and sanitisation. b. **Cross‑validate information** from at least two reputable sources. Note discrepancies and decide whether further research is needed or a clarifying question should be asked. c. **Extract relevant facts, guidelines and examples**; note their provenance (tether IDs, URLs) and map them to entities in the knowledge graph. d. **Summarise findings** in docs/RESEARCH.md under appropriate headings (Overview, Workflows, APIs, Best practices, Risks, Gaps) with citations. 3\. **Prioritise information** by relevance, authority and impact; mark critical findings for use in planning. 4\. **Log events:** record Action for each research query; Observation for research results; KnowledgeCapture for summaries; PlanUpdate if new requirements or constraints are discovered.

**Outputs:** Updated research report with citations; knowledge graph entries linking facts to entities; list of open questions (if any).

**Loop condition:** Continue researching until all critical topics have been addressed or iteration caps reached. Unresolved questions become tasks for future investigation. Then proceed to Brainstorm & Evaluation.

**Subagents Invoked:** Research Agent, Safety‑Compliance Agent, Memory‑Manager, Graph‑Manager.

## Phase 4 – Brainstorm & Evaluation

**Goal:** Generate and evaluate creative solution components or approaches based on research and analysis.

**Triggers:** Completion of Research & Synthesis; requirement changes introducing new design space.

**Steps:** 1\. **Invoke the Brainstorm Agent** with the ToT diagram and research highlights. Encourage divergent thinking to propose multiple architectures, workflows, agents or features. 2\. **Evaluate each idea** for feasibility, impact, alignment with goals and elegance. Score ideas (e.g. 1–10) and capture pros/cons and prerequisites. 3\. **Record the ranked list** of ideas and rationales in docs/BRAINSTORM.md. Represent ideas as entities in the knowledge graph (type Concept) and link them to relevant requirements or tasks. 4\. **Select top ideas** to carry forward into planning. Document justification and tag alternatives as optional enhancements. 5\. **Log events:** Action for brainstorming session; Observation for idea scores; KnowledgeCapture for recorded insights.

**Outputs:** Ranked solution ideas with evaluations; updated brainstorm document; new concept entities and relations.

**Loop condition:** If the brainstorming session surfaces new questions or if none of the ideas meet constraints, revisit Research or Analysis. Otherwise, move to Planning.

**Subagents Invoked:** Brainstorm Agent, Memory‑Manager, Graph‑Manager.

## Phase 5 – Planning

**Goal:** Formulate an actionable project plan with tasks, timeline and responsibilities.

**Triggers:** Selection of one or more approaches in Brainstorm & Evaluation; requirement changes requiring re‑planning.

**Steps:** 1\. **Synthesize inputs** from context, research, brainstorm results and user goals into a coherent execution plan. 2\. **Break the project into phases and tasks,** grouped by lifecycle stage (foundation, backend, frontend, testing, documentation, deployment). Define acceptance criteria, dependencies and responsible subagents for each task. 3\. **Write the plan** to context/planning.md with numbered steps and narrative rationale. Generate context/todo.md as a hierarchical checklist of tasks with statuses (\[ \] pending, \[\~\] in progress, \[x\] complete). Link tasks to entities in the knowledge graph using the Memory‑Manager. 4\. **Design invocation chains:** For complex features or multi‑agent flows, invoke the Invocation‑Chain Generator to produce an ordered list of subagent calls with parallelism and conditions. Document chains in docs/invocation-chains/\<chain-name\>.md or within planning.md. 5\. **Simulate expert panel review:** Internally (or via the Multi‑Panel Review Agent), evaluate the plan from the perspectives of requirements, architecture, performance, tooling, design/UX, product vision and domain constraints. Adjust tasks based on feedback and document the rationale in planning.md. 6\. **Persist the plan and tasks** in the knowledge graph; snapshot the event stream or graph state for traceability. 7\. **Log events:** PlanUpdate for each significant change; KnowledgeCapture for expert feedback notes.

**Outputs:** Finalised plan and task list; invocation chain designs; updated knowledge graph with task entities and relations.

**Loop condition:** Revisit Planning when requirements change, major design flaws are found in Review, or new tasks emerge during execution. Mini‑planning cycles can adjust the plan locally without restarting earlier phases.

**Subagents Invoked:** Planning‑Task Agent, Invocation‑Chain Generator, Memory‑Manager, Graph‑Manager, Multi‑Panel Review Agent.

## Phase 6 – Execution

**Goal:** Implement the tasks according to the plan while maintaining quality, security and context fidelity.

**Triggers:** Approved plan with pending tasks; resumption after a pause; arrival of new tasks during execution.

**Steps:** 1\. **Iterate through tasks** in context/todo.md from highest priority or first in sequence. For each task: a. **Determine the workflow:** check WORKFLOWS.md to see if the task matches a known workflow. If yes, invoke that workflow. If no, use the Invocation‑Chain Generator to suggest an optimal subagent sequence. For simple tasks, invoke the appropriate subagent directly. b. **Invoke the appropriate subagent(s)** for the task. For example, call Developer‑Frontend for UI implementation, Developer‑Backend for API logic, Database‑Supabase for schema changes, Testing‑QA for running tests, Design‑Accessibility for UI compliance, Documentation Agent for docs updates. Each subagent should log its action and observation and update the knowledge graph. c. **Follow cross‑cutting best practices** within each subagent invocation: enforce the design system and conventions, adhere to coding standards (naming, style, pure functions), validate inputs and outputs for security, write tests first (TDD) and run all relevant tests. When updating documentation or code comments, follow the lifecycle and structure defined in docs/documentation-guidelines.md: create or modify documents in the appropriate category, increment version numbers, log the change in event-stream.md and update context/doc-ref.md. d. **If failures occur** (e.g. tests fail, security issues), log an Error event, attempt a fix and re‑run tests. Only proceed when the task’s acceptance criteria are satisfied. e. **Update context:** mark the task as complete in todo.md, update the plan as needed, link the implemented component or document to the task in the knowledge graph. Log a PlanUpdate event. 2\. **Synchronise context**: after each task, update planning and knowledge graph. Add any new tasks discovered during execution to todo.md and plan mini‑cycles if needed. 3\. **Log events** continuously: Action (tool usage), Observation (outcomes), PlanUpdate (status changes), KnowledgeCapture (new insights).

**Outputs:** Implemented code or configuration; passing tests; updated docs and design artefacts; completed tasks; knowledge graph reflecting new entities and relations.

**Loop condition:** Continue until all tasks in todo.md for the current project or milestone are completed. If a contradiction or missing piece of information blocks execution, pause and return to Research or Planning as needed.

**Subagents Invoked:** Execution Agent (which further invokes domain‑specific agents), Safety‑Compliance Agent, Memory‑Manager, Graph‑Manager, Micro‑compact Manager, Design‑Accessibility Agent, Testing‑QA Agent, Documentation Agent.

## Phase 7 – Review & Reflection

**Goal:** Assess and refine the solution using expert feedback and self‑critique.

**Triggers:** Completion of all tasks; interim reviews during execution; after major milestones.

**Steps:** 1\. **Gather a review panel** via the Review‑Reflection Agent (or Multi‑Panel Review Agent). Define the scope (e.g. feature implementation, overall project) and retrieve deliverables (code, tests, docs, plans). 2\. **Simulate expert perspectives** (requirements, architecture, performance, design/UX, tooling, product vision, domain): evaluate whether deliverables meet acceptance criteria, adhere to design and coding standards, scale and perform well, respect accessibility and security guidelines, and align with product goals. 3\. **Aggregate feedback**: identify critical issues (must be fixed) and minor suggestions (defer or archive). Create new tasks in todo.md and update the plan accordingly. Log a PlanUpdate event. 4\. **Implement fixes**: for critical issues, return to Execution to address them. After fixes, re‑run tests and audits via Testing‑QA and Design‑Accessibility agents. 5\. **Reflect on the process**: capture lessons learned and patterns observed as KnowledgeCapture events. Update conventions.md if new standards emerge. 6\. **Update documents**: ensure planning.md and todo.md reflect changes; add notes to docs/reviews/ or a reflections section in planning.md.

**Outputs:** Review report; prioritised issues and improvement tasks; updated plan and todo list; reflection notes captured in the knowledge graph.

**Loop condition:** Repeat review cycles until all critical issues are addressed and deliverables meet quality thresholds. Then proceed to Delivery.

**Subagents Invoked:** Review‑Reflection Agent, Multi‑Panel Review Agent, Safety‑Compliance Agent, Testing‑QA Agent, Design‑Accessibility Agent, Documentation Agent.

## Phase 8 – Delivery

**Goal:** Present final outputs to the user and ensure closure of the project.

**Triggers:** All phases complete; user asks for results; all tasks and critical issues resolved.

**Steps:** 1\. **Verify task completion**: ensure that every item in todo.md is marked complete and all acceptance criteria are met. Confirm that planning.md is up to date. 2\. **Gather deliverables**: updated CLAUDE.md, CLAUDE\_PROCESS.md, subagent prompts, RESEARCH.md, TOT.md, BRAINSTORM.md, planning.md, todo.md, any code or configuration files required by the user. Include test results or simulation analyses if relevant. 3\. **Attach deliverables**: use computer.sync\_file to send files to the user. Provide direct links (file identifiers) and reference them in the final message. 4\. **Compose final summary**: explain what was accomplished, highlight key decisions and trade‑offs, and confirm that all objectives were met. Do not expose internal chain‑of‑thought or sensitive information. 5\. **Log a Delivery event** in the event stream with a timestamp and summary of delivered items. 6\. **Transition to standby**: await new user instructions. Do not perform further actions until a new user message arrives.

**Outputs:** Final deliverables sent to user; closing report/summary; system enters idle state.

**Subagents Invoked:** Delivery Agent, Documentation Agent (to ensure docs are finalised), Safety‑Compliance Agent (to double‑check deliverables for sensitive content).

## Continuous & Cross‑Cutting Activities

Throughout all phases, several continuous activities occur:

* **Safety & Compliance:** The Safety‑Compliance Agent sanitises all external inputs, verifies information, secures secrets and enforces user confirmation for side‑effect operations.

* **Logging:** Claude appends structured events to event-stream.md after every user input, agent selection, tool call, observation, plan update, knowledge capture, error and delivery. Logging is centralised and always uses the standard event schema.

* **Memory & Knowledge Graph Management:** The Memory‑Manager and Graph‑Manager persist new entities/relations and ensure schema compliance. Summarisation and archival occur when context or memory thresholds are exceeded.

* **Documentation & Conventions:** The Documentation Agent updates relevant docs whenever code, plans or standards change. Conventions are enforced through the Design‑Accessibility, Testing‑QA and Safety‑Compliance agents and by referencing conventions.md.

* **Context Engineering:** The Context‑Manager applies write/select/compress/isolate techniques for each agent call. Summaries and context briefs are stored in memory and attached to entities.

* **Workflow Maintenance:** Workflows and invocation chains are updated or added when new patterns emerge. The workflow gateway uses these to streamline common tasks.

By following this process, the CLAUDE system leverages specialised subagents to deliver high‑quality outcomes while maintaining flexibility, safety, documentation integrity and adherence to standards. The orchestrator coordinates subagents through transparent workflows, manages context and memory effectively, and adapts to changing requirements without sacrificing structure or traceability.

---

