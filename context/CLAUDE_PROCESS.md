# CLAUDE Process – Subagent‑Oriented Lifecycle

This document defines the end‑to‑end lifecycle of the CLAUDE system under the subagent framework for the SKIIN Switzerland marketing website project. It outlines the phases, triggers, steps, outputs, loop conditions and the subagents invoked at each stage. This process emphasises **flexibility**, **context management**, **safety**, and **workflow reuse**. Each phase can loop or be revisited based on new information or requirement changes, and minor updates can be handled through mini‑cycles rather than restarting the entire sequence.

## General Process Characteristics

1. **Phase‑Based Structure:** Eight core phases organise the workflow: Context Gathering, Analysis, Research & Synthesis, Brainstorm & Evaluation, Planning, Execution, Review & Reflection and Delivery. Phases can be entered via predefined workflows or dynamic invocation chains. Subphases or mini‑cycles allow localised updates during Execution.

2. **Workflow Gateway:** Before starting or when receiving a new user task, Claude checks WORKFLOWS.md for a matching workflow. If found, the workflow defines the subagent sequence. Otherwise, the invocation-chain-generator proposes a custom chain. All agent selections are logged.

3. **Think–Act–Observe Loop:** Within each phase and task, the orchestrator follows a ReAct‑style loop: think (analyse current state), act (invoke subagent/tool), observe (interpret results) and reflexion (self‑critique or review invocation) before iterating.

4. **Context & Memory Management:** Context is loaded via the context-manager at each phase start and summarised/pruned by the graph-memory-agent after each phase or when exceeding thresholds. The knowledge graph is the canonical data store; views (plan, tasks, docs) are generated from it.

5. **Safety & Compliance:** External data processing, code execution or operations with side effects require validation. User confirmation is required for side‑effect actions.

6. **Iteration Caps & Timeouts:** Each phase has default iteration limits (e.g. three research iterations per topic, five brainstorming revisions). The orchestrator monitors loops and defers or summarises tasks when limits are reached. Timeouts prevent indefinite waiting on tool calls.

7. **Documentation Lifecycle:** Documents progress through draft → review → approved → delivered → archived states. The documentation-maintainer manages updates, versioning and indexing in doc-ref.md. Superseded documents are archived in docs/archive/YYYY-MM-DD/.

## Phase 1 – Context Gathering

**Goal:** Capture the user's intent and gather all relevant information within the context window.

**Triggers:** Session start; new user request; start of a new project or task; outdated context; after major plan updates.

**Steps:** 
1. **Parse the user's message** to identify explicit and implicit goals. If critical details are missing, ask targeted clarification questions. 
2. **Call the context-manager** to load the latest versions of planning.md, todo.md, conventions.md, event-stream.md, doc-ref.md and any relevant project artefacts. Use the graph-memory-agent to fetch related entities (tasks, phases, files, requirements) from the knowledge graph. 
3. **Summarise the context** into a concise brief tailored to the next subagent. Apply context engineering: select only relevant history, compress long logs and isolate unrelated scratchpads. Persist the brief via the graph-memory-agent and log a KnowledgeCapture event. 
4. **Identify missing information** and prepare follow‑up questions or research requests. If user clarification is needed, pause and ask. 
5. **Log events:** record a UserMessage for the new request, a PhaseChange to Context Gathering, and a KnowledgeCapture for the context summary.

**Outputs:** Problem statement; context summary; updated context files; new entities/relations in the knowledge graph.

**Loop condition:** If goals or context remain unclear, repeat Steps 1–4. Otherwise, transition to Analysis.

**Subagents Invoked:** context-manager, graph-memory-agent.

## Phase 2 – Analysis

**Goal:** Develop a structured understanding of the problem domain.

**Triggers:** Completion of Context Gathering; need to organise knowledge; new entities discovered during later phases.

**Steps:** 
1. **Identify key entities** (requirements, tasks, components, subagents, workflows, user roles) and their relationships (depends_on, belongs_to, implements, uses, assigned_to). 
2. **Invoke tree-of-thought-agent** to construct a Tree‑of‑Thought (ToT) diagram linking entities and showing hierarchies, dependencies and flows. Save to docs/analysis/TOT.md. 
3. **Update the knowledge graph** with new entity and relation nodes using graph-memory-agent. Validate against schema. 
4. **Persist analysis artifacts** to docs/analysis/TOT.md and record a KnowledgeCapture event. 
5. **Log events:** PhaseChange to Analysis; Action for entity mapping; Observation for ToT creation.

**Outputs:** Comprehensive entity‑relation map (ToT diagram); enriched knowledge graph.

**Loop condition:** If new entities or relations arise later (e.g. during research or planning), revisit Analysis to update the ToT and graph. Otherwise, move to Research & Synthesis.

**Subagents Invoked:** tree-of-thought-agent, graph-memory-agent.

## Phase 3 – Research & Synthesis

**Goal:** Gather evidence, examples and best practices from authoritative sources to inform design decisions.

**Triggers:** Open questions or uncertainties identified during Analysis; domain knowledge gaps; new concepts requiring validation.

**Steps:** 
1. **Define research topics** based on entities and gaps (e.g. React patterns, TypeScript best practices, Tailwind utilities). Prioritise by importance and uncertainty. 
2. **For each topic, iterate up to three times:** 
   a. **Invoke the researcher** to perform searches via browser tools and documentation lookups. 
   b. **Cross‑validate information** from at least two reputable sources. Note discrepancies and decide whether further research is needed. 
   c. **Extract relevant facts, guidelines and examples**; note their provenance and map them to entities in the knowledge graph. 
   d. **Summarise findings** in docs/research/RESEARCH.md under appropriate headings with citations. 
3. **Prioritise information** by relevance, authority and impact; mark critical findings for use in planning. 
4. **Log events:** record Action for each research query; Observation for research results; KnowledgeCapture for summaries; PlanUpdate if new requirements or constraints are discovered.

**Outputs:** Updated research report with citations; knowledge graph entries linking facts to entities; list of open questions (if any).

**Loop condition:** Continue researching until all critical topics have been addressed or iteration caps reached. Unresolved questions become tasks for future investigation. Then proceed to Brainstorm & Evaluation.

**Subagents Invoked:** researcher, graph-memory-agent.

## Phase 4 – Brainstorm & Evaluation

**Goal:** Generate and evaluate creative solution components or approaches based on research and analysis.

**Triggers:** Completion of Research & Synthesis; requirement changes introducing new design space.

**Steps:** 
1. **Invoke the brainstormer** with the ToT diagram and research highlights. Encourage divergent thinking to propose multiple architectures, workflows, agents or features. 
2. **Evaluate each idea** for feasibility, impact, alignment with goals and elegance. Score ideas (e.g. 1–10) and capture pros/cons and prerequisites. 
3. **Record the ranked list** of ideas and rationales in docs/brainstorm/BRAINSTORM.md. Represent ideas as entities in the knowledge graph (type Concept) and link them to relevant requirements or tasks. 
4. **Select top ideas** to carry forward into planning. Document justification and tag alternatives as optional enhancements. 
5. **Log events:** Action for brainstorming session; Observation for idea scores; KnowledgeCapture for recorded insights.

**Outputs:** Ranked solution ideas with evaluations; updated brainstorm document; new concept entities and relations.

**Loop condition:** If the brainstorming session surfaces new questions or if none of the ideas meet constraints, revisit Research or Analysis. Otherwise, move to Planning.

**Subagents Invoked:** brainstormer, graph-memory-agent.

## Phase 5 – Planning

**Goal:** Formulate an actionable project plan with tasks, timeline and responsibilities.

**Triggers:** Selection of one or more approaches in Brainstorm & Evaluation; requirement changes requiring re‑planning.

**Steps:** 
1. **Synthesize inputs** from context, research, brainstorm results and user goals into a coherent execution plan. 
2. **Invoke planning-task-agent** to break the project into phases and tasks, grouped by lifecycle stage (foundation, backend, frontend, testing, documentation, deployment). Define acceptance criteria, dependencies and responsible subagents for each task. 
3. **Write the plan** to context/planning.md with numbered steps and narrative rationale. Generate context/todo.md as a hierarchical checklist of tasks with statuses ([ ] pending, [~] in progress, [x] complete). Link tasks to entities in the knowledge graph using the graph-memory-agent. 
4. **Design invocation chains:** For complex features or multi‑agent flows, invoke the invocation-chain-generator to produce an ordered list of subagent calls with parallelism and conditions. Document chains in docs/invocation-chains/<chain-name>.md or within planning.md. 
5. **Simulate expert panel review:** Internally (or via the reflection-agent), evaluate the plan from the perspectives of requirements, architecture, performance, tooling, design/UX, product vision and domain constraints. Adjust tasks based on feedback and document the rationale in planning.md. 
6. **Persist the plan and tasks** in the knowledge graph; snapshot the event stream or graph state for traceability. 
7. **Log events:** PlanUpdate for each significant change; KnowledgeCapture for expert feedback notes.

**Outputs:** Finalised plan and task list; invocation chain designs; updated knowledge graph with task entities and relations.

**Loop condition:** Revisit Planning when requirements change, major design flaws are found in Review, or new tasks emerge during execution. Mini‑planning cycles can adjust the plan locally without restarting earlier phases.

**Subagents Invoked:** planning-task-agent, invocation-chain-generator, graph-memory-agent, reflection-agent.

## Phase 6 – Execution

**Goal:** Implement the tasks according to the plan while maintaining quality, security and context fidelity.

**Triggers:** Approved plan with pending tasks; resumption after a pause; arrival of new tasks during execution.

**Steps:** 
1. **Iterate through tasks** in context/todo.md from highest priority or first in sequence. For each task: 
   a. **Determine the workflow:** check WORKFLOWS.md to see if the task matches a known workflow. If yes, invoke that workflow. If no, use the invocation-chain-generator to suggest an optimal subagent sequence. For simple tasks, invoke the appropriate subagent directly. 
   b. **Invoke the appropriate subagent(s)** for the task. For example: 
      - Call frontend-developer for UI implementation
      - Call backend-developer for API logic
      - Call database-supabase-agent for schema changes
      - Call testing-qa-agent for running tests
      - Call design-system-architect for UI compliance
      - Call documentation-maintainer for docs updates
   c. **Follow cross‑cutting best practices** within each subagent invocation: 
      - Enforce the S&W Design system and conventions
      - Adhere to coding standards (TypeScript strict, atomic components)
      - Validate inputs and outputs for security
      - Write tests first (TDD) and run all relevant tests
      - Use Serena MCP tools for precise code manipulation
   d. **If failures occur** (e.g. tests fail, accessibility issues), log an Error event, attempt a fix and re‑run tests. Only proceed when the task's acceptance criteria are satisfied. 
   e. **Update context:** mark the task as complete in todo.md, update the plan as needed, link the implemented component or document to the task in the knowledge graph. Log a PlanUpdate event. 
2. **Synchronise context**: after each task, update planning and knowledge graph. Add any new tasks discovered during execution to todo.md and plan mini‑cycles if needed. 
3. **Log events** continuously: Action (tool usage), Observation (outcomes), PlanUpdate (status changes), KnowledgeCapture (new insights).

**Outputs:** Implemented code or configuration; passing tests; updated docs and design artefacts; completed tasks; knowledge graph reflecting new entities and relations.

**Loop condition:** Continue until all tasks in todo.md for the current project or milestone are completed. If a contradiction or missing piece of information blocks execution, pause and return to Research or Planning as needed.

**Subagents Invoked:** frontend-developer, backend-developer, database-supabase-agent, testing-qa-agent, design-system-architect, documentation-maintainer, graph-memory-agent.

## Phase 7 – Review & Reflection

**Goal:** Assess and refine the solution using expert feedback and self‑critique.

**Triggers:** Completion of all tasks; interim reviews during execution; after major milestones.

**Steps:** 
1. **Gather a review panel** via the reflection-agent. Define the scope (e.g. feature implementation, overall project) and retrieve deliverables (code, tests, docs, plans). 
2. **Simulate expert perspectives** (requirements, architecture, performance, design/UX, tooling, product vision, domain): 
   - Evaluate whether deliverables meet acceptance criteria
   - Adhere to S&W Design system and coding standards
   - Scale and perform well (LCP < 2.5s, CLS < 0.1)
   - Respect accessibility guidelines (WCAG 2.1 AA)
   - Align with product goals and medical compliance
3. **Aggregate feedback**: identify critical issues (must be fixed) and minor suggestions (defer or archive). Create new tasks in todo.md and update the plan accordingly. Log a PlanUpdate event. 
4. **Implement fixes**: for critical issues, return to Execution to address them. After fixes, re‑run tests and audits via testing-qa-agent and design-system-architect. 
5. **Reflect on the process**: capture lessons learned and patterns observed as KnowledgeCapture events. Update conventions.md if new standards emerge. 
6. **Update documents**: ensure planning.md and todo.md reflect changes; add notes to docs/reviews/ or a reflections section in planning.md.

**Outputs:** Review report; prioritised issues and improvement tasks; updated plan and todo list; reflection notes captured in the knowledge graph.

**Loop condition:** Repeat review cycles until all critical issues are addressed and deliverables meet quality thresholds. Then proceed to Delivery.

**Subagents Invoked:** reflection-agent, testing-qa-agent, design-system-architect, documentation-maintainer.

## Phase 8 – Delivery

**Goal:** Present final outputs to the user and ensure closure of the project.

**Triggers:** All phases complete; user asks for results; all tasks and critical issues resolved.

**Steps:** 
1. **Verify task completion**: ensure that every item in todo.md is marked complete and all acceptance criteria are met. Confirm that planning.md is up to date. 
2. **Gather deliverables**: updated CLAUDE.md, CLAUDE_PROCESS.md, context files, any code or configuration files required by the user. Include test results or performance metrics if relevant. 
3. **Compose final summary**: explain what was accomplished, highlight key decisions and trade‑offs, and confirm that all objectives were met. Do not expose internal chain‑of‑thought or sensitive information. 
4. **Log a Delivery event** in the event stream with a timestamp and summary of delivered items. 
5. **Transition to standby**: await new user instructions. Do not perform further actions until a new user message arrives.

**Outputs:** Final deliverables sent to user; closing report/summary; system enters idle state.

**Subagents Invoked:** documentation-maintainer, graph-memory-agent.

## Continuous & Cross‑Cutting Activities

Throughout all phases, several continuous activities occur:

* **Safety & Compliance:** Sanitise all external inputs, verify information, secure secrets and enforce user confirmation for side‑effect operations.

* **Logging:** Claude appends structured events to event-stream.md after every user input, agent selection, tool call, observation, plan update, knowledge capture, error and delivery. Logging is centralised and always uses the standard event schema.

* **Memory & Knowledge Graph Management:** The graph-memory-agent persists new entities/relations and ensures schema compliance. Summarisation and archival occur when context or memory thresholds are exceeded.

* **Documentation & Conventions:** The documentation-maintainer updates relevant docs whenever code, plans or standards change. Conventions are enforced through the design-system-architect, testing-qa-agent and by referencing conventions.md.

* **Context Engineering:** The context-manager applies write/select/compress/isolate techniques for each agent call. Summaries and context briefs are stored in memory and attached to entities.

* **Workflow Maintenance:** Workflows and invocation chains are updated or added when new patterns emerge. The workflow gateway uses these to streamline common tasks.

## Project-Specific Workflows

### Frontend Feature Workflow
1. planning-task-agent → design-system-architect → frontend-developer → testing-qa-agent → documentation-maintainer

### Backend API Workflow
1. planning-task-agent → backend-developer → database-supabase-agent → testing-qa-agent → documentation-maintainer

### Full Stack Feature Workflow
1. planning-task-agent → requirements-spec-agent → database-supabase-agent → backend-developer → frontend-developer → testing-qa-agent → documentation-maintainer

### Bug Fix Workflow
1. context-manager → tree-of-thought-agent → (frontend-developer OR backend-developer) → testing-qa-agent → git-agent → documentation-maintainer

### Design System Update Workflow
1. design-system-architect → frontend-developer (for all affected components) → testing-qa-agent → documentation-maintainer

By following this process, the CLAUDE system leverages specialised subagents to deliver high‑quality outcomes while maintaining flexibility, safety, documentation integrity and adherence to the S&W Design system standards. The orchestrator coordinates subagents through transparent workflows, manages context and memory effectively, and adapts to changing requirements without sacrificing structure or traceability.