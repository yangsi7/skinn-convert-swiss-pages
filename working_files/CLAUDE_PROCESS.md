# working_files/CLAUDE_PROCESS.md

--------------------------------------------------------------------------------
## <table_of_contents>

1.  Agent Life-Cycle Loop (10 Steps)
2.  Core Modules & Their Rules
3.  Research-First Methodology
4.  Design Best-Practices (Lovable DNA)
5.  Toolbox (MCP) Reference
6.  Documentation Auto-Maintenance
7.  Message, File & Error Handling Rules
8.  Coding & Testing Mandates
9.  Dependency & Security Management
10. Repository Hygiene & Archival
11. Sandbox Environment Spec
12. Important Reminders

</table_of_contents>

--------------------------------------------------------------------------------
## <agent_life_cycle_loop>

> **Mnemonic**: *LOAD → UNDERSTAND → PLAN → ACT → LOG → TEST → REFLECT → DOC → DELIVER → IDLE*

1.  **Load Context**: Read `CLAUDE.md`, then the 5 working files in canonical order.
2.  **Understand**: Parse the latest user request & `event-stream.md`. If architectural or multi-step, invoke the **`<system_understanding_module>`**.
3.  **Plan**: Produce/refresh a numbered plan using the **`<planner_module>`** in `planning.md`; sync tasks to `todo.md`.
4.  **Select Action**: Choose **exactly one** tool, code edit, or research action from the plan.
5.  **Execute**: Run the selected action.
6.  **Log**: Append the `Action` and its `Observation` to `event-stream.md` with a timestamp.
7.  **Test / Verify**: Run automated tests, linters, and visual diffs as relevant, governed by the **`<testing_module>`**.
8.  **Reflect**: Run the **`<expert_reflection_module>`**; revise the plan if insights demand it.
9.  **Document Auto-Update**: Trigger the rules in the **`<documentation_module>`**.
10. **Deliver**: Message the user with results & file paths, then enter a standby state.

> _Any deviation (e.g., unresolvable error) must be reported to the user immediately with options for next steps._

</agent_life_cycle_loop>

--------------------------------------------------------------------------------
## <core_modules_and_rules>

<system_understanding_module>
-   **Purpose**: To build a deep, structural understanding of complex problems before planning.
-   **Trigger**: Any task involving new architecture, cross-cutting changes, or significant ambiguity.
-   **Process**:
    1.  Identify all key entities (components, services, data models, user flows).
    2.  Map the relationships and dependencies between them.
    3.  Create a visual representation (e.g., Mermaid diagram) or a structured outline.
    4.  Save the artifact to `docs/diagrams/` and reference it in `planning.md`.
-   **Rule**: The output of this module must be logged as an `Understanding` event in `event-stream.md`.
</system_understanding_module>

<planner_module>
-   **Purpose**: To create and maintain a clear, actionable implementation plan.
-   **Rules**:
    -   The canonical plan lives in `planning.md`. The actionable checklist lives in `todo.md`.
    -   Plans must follow the **ITERATION-FIRST** principle: always check if an existing component or pattern can be extended before planning to create something new.
    -   Break down work into logical phases where applicable: 1. Foundation (data, types), 2. Backend (logic, APIs), 3. Frontend (UI, state), 4. Testing (unit, integration, E2E).
    -   Log major plan updates as `Plan` events in `event-stream.md`.
</planner_module>

<lovable_design_module>
-   **Purpose**: To enforce high-quality, modern, and robust design and UX practices by default.
-   **Core Principles**:
    1.  **Small, Focused Components**: Components should be ≤ 50 lines, follow atomic design, and live in their own file.
    2.  **Type Safety**: Use TypeScript in `strict` mode everywhere.
    3.  **Component Library First**: ALWAYS use `shadcn/ui` components. Only create a new component if no pre-built primitive exists. NEVER modify the base library; create a wrapper instead.
    4.  **Responsive by Default**: All UI must be responsive, starting from a 375px mobile baseline.
    5.  **Robust State Management**: Use TanStack Query for all server state. Avoid prop drilling; use context or a simple store (Jotai/Zustand) for global UI state.
    6.  **Error Hygiene**: All new UI flows must be wrapped in an Error Boundary. Use toast notifications for non-critical feedback. Log all errors for debugging.
-   **Flexibility**: The user may explicitly request the **`21st.dev`** aesthetic. If so, apply its token set and styles, but continue to adhere to the core principles of structure, state, and error handling above.
</lovable_design_module>

<testing_module>
-   **Purpose**: To ensure code is correct, robust, and visually consistent.
-   **Rules**:
    -   **TDD (Test-Driven Generation)**: For any new logic, generate the failing test first, then write the code to make it pass.
    -   **Unit Tests**: All business logic (hooks, utilities) must have unit tests with >80% coverage.
    -   **Integration Tests**: Key user flows must be covered by integration tests.
    -   **Visual Snapshot Tests**: All UI changes must be verified with a visual testing tool like Puppeteer to catch regressions. Log snapshots and compare them.
    -   **CI Gate**: All tests must pass before code can be considered complete.
</testing_module>

<documentation_module>
-   **Purpose**: To ensure documentation is a living, accurate, and useful reflection of the project.
-   **Rules**:
    1.  **Trigger**: ANY change to code, architecture, conventions, or dependencies **MUST** trigger a documentation update in the *same commit*.
    2.  **Consolidation**: If you find multiple small docs covering the same topic, **fuse** them into a single, canonical document, archive the old ones, and update `doc-ref.md`.
    3.  **Archival Process**:
        -   To archive a file, move it to `docs/archive/YYYY-MM-DD/`.
        -   Update `docs/archive/INDEX.md` with a link to the archived file and the reason for archival.
        -   Remove the old entry from `doc-ref.md` and link to the new canonical doc if one exists.
    4.  **Writing Style**: Follow the `writing_rules`. Use clear headings and structured paragraphs.
</documentation_module>

<expert_reflection_module>
-   **Purpose**: To perform a critical self-review before delivering work.
-   **Checklist**:
    | Lens         | Guiding Question                                     |
    |--------------|------------------------------------------------------|
    | Requirements | Does this solution perfectly match the user's goals? |
    | Architecture | Is it extensible, maintainable, and free of debt?    |
    | Design       | Does it honor the `<lovable_design_module>` rules?   |
    | UX           | Is the flow intuitive, accessible, and delightful?   |
    | Performance  | Are there any avoidable bottlenecks or re-renders?   |
    | Security     | Are all inputs validated and outputs sanitized?      |
    | Quality      | Would a senior FAANG engineer approve this commit?   |
-   **Action**: Log insights as `Reflection` events. If critical issues are found, create new tasks in `todo.md` and fix them before delivery.
</expert_reflection_module>

<rollback_module>
-   **Purpose**: To provide a safe, predictable way to handle failures.
-   **Protocol**:
    1.  **On Failure**: Stop all actions. Log the `Error` in `event-stream.md`.
    2.  **Decision**: If a fix is obvious and low-risk (e.g., typo), attempt it once.
    3.  **Revert**: If the fix fails or the issue is complex, **IMMEDIATELY REVERT** the change. Do not attempt to "fix forward."
    4.  **Post-Mortem**: Document the root cause in `planning.md` and add a regression test to prevent recurrence.
</rollback_module>

</core_modules_and_rules>
--------------------------------------------------------------------------------
## <research_first_methodology>

1.  **Current-State Review**: Scan codebase & docs referenced in `doc-ref.md`.
2.  **Gap Analysis**: Compare requirements vs. existing artifacts.
3.  **Target State Snapshot**: Draft architecture diagram & data flow.
4.  **Source Triage**: Identify authoritative sources (guidelines, APIs, literature).
5.  **Evidence Collection**: Use `brave-search`, `crawl4ai-rag`, or academic APIs; save notes to `docs/research/…`.
6.  **Synthesis**: Distil findings into actionable design choices.

*_No code generation occurs before step 6 is crystallised._*

</research_first_methodology>
--------------------------------------------------------------------------------
## <mcp_toolbox_reference>

| Tool             | Typical when…                                  | API                                                |
| ---------------- | ---------------------------------------------- | -------------------------------------------------- |
| **brave-search** | Need quick factual or tutorial info            | `brave_web_search(q, safesearch=strict)`           |
| **memory** | Persist user preference (“prefers metric units”) | `store(key, chunk) → id` / `recall(key)`           |
| **puppeteer** | Scrape JS-rendered site or take screenshot       | `Maps(url)`, `evaluate(js)`, `screenshot(path)` |
| **crawl4ai-rag** | Crawl whole site & embed for RAG               | `smart_crawl_url(url, depth)` then `perform_rag_query(q)` |
| **calculator** | Quick calc without Python spin-up              | `calculate("3*sqrt(2)")`                           |

*Use these **before** re-implementing their functionality.*

</mcp_toolbox_reference>
--------------------------------------------------------------------------------
## <message_file_error_handling_rules>

* **Status → user** within 60s for long-running tasks (> 15s).
* **Blocking questions** must be singular & explicit.
* **File edits**: prefer in-place; only create a new file if conceptually new.
* **Error loop**: retry once with a variant, then surface to the user with context.
* **`event-stream.md`** is the _single source of truth_ for chronology.

</message_file_error_handling_rules>
--------------------------------------------------------------------------------
## <coding_and_testing_mandates>

* Write code to a file, **never** execute transient shell pipelines.
* Every non-trivial function gets at least one test (unit or integration).
* Visual test for any UI diff: baseline screenshot ± pixel-diff threshold 0.1%.
* Use `// ... keep existing code` only for large untouched blocks.

</coding_and_testing_mandates>
--------------------------------------------------------------------------------
## <dependency_and_security_management>

* **Weekly** `npm audit`; flag highs/criticals in `todo.md`.
* Upgrade path: branch → lock-file update → run full test matrix → PR.
* On major upgrade, add a CHANGELOG digest to `doc-ref.md`.

</dependency_and_security_management>
--------------------------------------------------------------------------------
## <repository_hygiene_and_archival>

* Root dir: only source, config & two top-level docs (`README.md`, `CLAUDE.md`).
* Everything else → `docs/`, `scripts/`, or `working_files/`.
* Archive rule: once superseded & unused for 7 days, move file to
    `docs/archive/YYYY-MM-DD/…` with a README pointer.

</repository_hygiene_and_archival>
--------------------------------------------------------------------------------
## <sandbox_environment_spec>

* **OS**: macOS 13.x (Darwin)
* **Runtime**: Python 3.x, Node.js ≥ 18
* **Global tools**: brew, git, jq, awk, sed, bc
* **VS Code Remote CLI** available for remote editing.

</sandbox_environment_spec>
--------------------------------------------------------------------------------
## <important_reminders>

* Do exactly what the user asks—**no feature-creep**.
* Always sync plan ↔ todo ↔ event-stream.
* Never duplicate functionality; extend instead.
* If stuck, ask—but batch questions.
* Keep responses professional, paragraph-style unless a list is requested.

</important_reminders>
--------------------------------------------------------------------------------

