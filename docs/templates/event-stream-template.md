# Event‑Stream Template

The event stream is a chronological log of everything that happens during a Claude Code project. It provides a verifiable audit trail and serves as a key context source for future sessions. Do **not** edit or remove existing entries; instead, append new events at the end. Each entry must include a timestamp in ISO 8601 UTC format, an event type (and optional category) and a concise description. Avoid logging private chain‑of‑thought or sensitive information.

## Purpose

* Capture every significant action, observation, plan update, reflection, bug, performance result and review comment.

* Provide transparency into the agent’s decisions and state changes.

* Align event logs with the knowledge graph by referencing node or relation identifiers when possible.

* Serve as the single source of truth for reconstructing project history.

## Event Categories

The logging module defines a core set of **event types** (UserMessage, PhaseChange, ModuleSelection, Action, Observation, PlanUpdate, KnowledgeCapture, Error, Delivery). For additional clarity, you may tag events with one of the following **categories**. Categories are optional and can be combined with the core types (e.g. PlanUpdate/Bug).

| Category | Description |
| :---- | :---- |
| **Action** | A tool call, code edit or command execution. |
| **Observation** | Output received from a tool call, script or execution. |
| **Plan** | Creation, modification or completion of a plan or task. |
| **Reflection** | Expert review comments or internal analysis of decisions and outcomes. |
| **Bug** | Discovery of a defect, including error messages and reproduction steps. |
| **PerfTest** | Results of performance, load or accessibility tests (e.g. page load times, API latency, Lighthouse audits). |
| **Review** | Code review comments, design critiques, UX feedback or usability insights. |
| **GraphUpdate** | Creation or modification of nodes or relations in the knowledge graph. |
| **MemoryStore** | A call to memory.store capturing summarised research, plans or observations. |

You can extend categories if your project requires more granularity, but keep the list concise and document any additions in conventions.md.

## Logging Guidelines

1. **Timestamp** – Prefix every entry with an ISO 8601 UTC timestamp (e.g. 2025‑08‑13T14:05:00Z).

2. **Event type and category** – Specify the core event type and optionally a category (e.g. Action/Plan).

3. **Description** – Write a concise, one‑line summary of what occurred and why. Include enough context for someone unfamiliar with the session to understand the event. For actions and observations, mention the tool or file involved; for plan updates, reference task IDs; for knowledge captures, summarise the insight and cite the source.

4. **Append only** – Do not modify or delete existing entries. The event stream is immutable.

5. **Align with the knowledge graph** – When referring to tasks, files or nodes, include their identifiers in square brackets (e.g. \[Task:T3\], \[File:database.ts\]) to facilitate graph linking.

6. **Avoid private reasoning** – Summarise decisions without revealing internal chain‑of‑thought or sensitive data.

7. **Use categories appropriately** – Tag events with categories when they add clarity; otherwise rely on the core event types.

## Example Entries

| Timestamp (UTC) | Event Type & Category | Description |
| :---- | :---- | :---- |
| 2025‑08‑04T10:15:32Z | Action | Invoked grep to search the codebase for AuthService occurrences. |
| 2025‑08‑04T10:15:33Z | Observation | Returned auth.service.ts:123 – found export class AuthService {. |
| 2025‑08‑04T10:17:00Z | Plan/PlanUpdate | Updated planning.md with new phase breakdown; created tasks T3 and T4 in todo.md. |
| 2025‑08‑04T10:20:12Z | GraphUpdate | Added nodes Task:T3 and Task:T4; linked them to Phase:Backend and File:database.ts. |
| 2025‑08‑04T10:25:45Z | Reflection | Architecture review noted missing error handling on authentication endpoints; flagged as a risk. |
| 2025‑08‑04T10:30:12Z | MemoryStore | Stored research summary on RLS policies in memory with key research-rls-20250804. |

Use these examples as guidance. Adjust descriptions to fit your project’s context and maintain a consistent, concise style.

---

