# Planning for SKIIN Website Copy Update (v6.0)

This plan outlines the steps required to update the SKIIN Switzerland website copy from version 5.0 to version 6.0 in response to the CEO’s comments and the marketing plan. It leverages the research, tree‑of‑thought mapping and brainstorming evaluations. The plan incorporates feedback from a panel of virtual experts across requirements, architecture, performance, tooling, design/UX, product vision, quality and domain expertise.

## Objectives

1. **Update the copy specification** to incorporate CEO comments and marketing strategy: emphasise preventive urgency and longevity, integrate ABPM and sleep analytics, mention water‑resistant and removable garment, enhance AI analysis description with process flow, update clinical evidence, highlight MDR Class IIa/Swissmedic certification, revise mission/heritage narrative and align features and benefits with the Silent Triad.

2. **Revise the component mapping & gap analysis** to reflect new copy sections, identify new subcomponents (e.g., MVCP submodules) and mark obsolete or redundant components.

3. **Produce an updated change log** that compares v6.0 to v5.0, clearly explaining why each change was made and linking back to the CEO comments or marketing requirements.

4. **Document the research, reasoning and planning** processes in supporting files (RESEARCH.md, TOT.md, BRAINSTORM.md, planning.md, todo.md).

## Expert Panel Perspectives and Feedback

| Expert | Key Feedback |
| :---- | :---- |
| **Requirements Analyst** | Ensure that all user‑specified requirements (e.g., removing the blog, emphasising water resistance, adding ABPM & sleep analytics) are explicitly addressed. Avoid scope creep by not adding unrequested features. |
| **Architect** | Verify that the updated copy maps cleanly onto existing components. Identify where new components or subcomponents (e.g., MVCP visualisers) will be required and flag them for the design/engineering team. |
| **Performance Engineer** | The copy itself has minimal performance impact, but ensure that new statistics or visualisations do not bloat page load. Suggest lazy‑loading heavy visuals if added later. |
| **Tooling Specialist** | Use the GitHub API to inspect current component files (Home2.tsx, partners/\*.tsx, how-it-works/\*.tsx) to confirm mapping. Maintain compatibility with translation files and avoid breaking existing i18n structures. |
| **Design/UX Expert** | The updated copy must remain scannable: use short paragraphs, bullet lists and clear headings. Ensure CTAs stand out and that the narrative flows logically. Provide explicit guidance on CTA placement. |
| **Product Visionary** | The messaging should position SKIIN as a leader in preventive, predictive heart care. Highlight the Silent Triad narrative and align with the “Live younger, longer” brand promise. |
| **Quality & Compliance Expert** | All clinical claims must be supported by peer‑reviewed evidence. Certification and privacy statements must accurately reflect MDR Class IIa, Swissmedic, ISO 13485 and ISO/IEC 27001 compliance. |
| **Domain Specialist (Cardiology)** | Ensure that ABPM and sleep analytics are described accurately and not overstated. Clarify that SKIIN complements standard care and does not replace professional diagnosis. |

The plan below incorporates this feedback to produce a balanced update that meets both strategic and technical requirements.

## Planned Steps

1. **Context Verification & Final Clarifications**

2. Review the CEO comments once more to ensure no detail is missed.

3. Confirm that there are no unresolved questions from the user; if any arise, ask targeted clarifying questions.

4. **Repository Inspection**

5. Use the GitHub API to fetch the latest code for yangsi7/skinn-convert-swiss-pages, focusing on Home2.tsx, partners/\*.tsx, how-it-works/\*, about/\* and translation files.

6. Verify current components, pages and translation keys against the v5.0 mapping document.

7. **Draft Copy Specification v6.0**

8. Use v5.0 as the baseline, modifying sections per the tree‑of‑thought and brainstorming recommendations:

   * Update hero headlines, subheadline and CTAs; emphasise urgency and longevity.

   * Revise problem/solution narratives; integrate Silent Triad messaging and adapt Samantha’s phrases.

   * Add explicit mention of water resistance and removable garment in comfort features and process steps.

   * Expand the AI analysis description with a narrative process flow and note CNN/transformer use and certifications.

   * Integrate ABPM and sleep analysis into both features and technology sections; highlight tri‑modal screening on SKIIN 3X Screening™.

   * Replace the outdated “About Myant Health” with a mission/heritage narrative emphasising Myant’s Canadian origin and Swiss R\&D through Nanoleq.

   * Revise professional pages by merging physician content into partner pages and embedding MVCP details.

   * Remove the blog, heart‑age calculator and protected components from the public‑facing spec.

   * Reinforce CTA placement guidelines throughout the document.

9. Ensure all clinical statistics are properly cited.

10. **Update Component Mapping & Gap Analysis**

11. Cross‑check each updated section with the existing components; note where modifications, additions or removals are needed.

12. Identify any new subcomponents required (e.g., MVCP BP visualisation, symptom logging UI) and highlight them for design/development.

13. Document deprecated files (e.g., physicians page, blog, heart‑age tool) and propose redirects or removal.

14. **Draft Change Log (v5.0 → v6.0)**

15. For each altered section, record the change, the rationale and the source (CEO comment, marketing plan, evidence).

16. Provide page and section references where applicable.

17. **Expert Review Loop**

18. Simulate the expert panel review after drafting the updated documents:

    * Requirements: Check that all CEO comments have been addressed.

    * Architecture: Verify that the copy aligns with available components and note any new component requirements.

    * Design/UX: Ensure readability, CTAs placement and narrative flow.

    * Domain: Confirm medical accuracy.

    * Compliance: Check regulatory language and privacy statements.

19. Refine the documents based on this feedback.

20. **Prepare Supporting Documents**

21. Finalise RESEARCH.md, TOT.md and BRAINSTORM.md based on any adjustments during drafting and review.

22. Update todo.md by marking completed tasks and listing remaining items.

    * Compile and expand the component mapping & gap analysis to include design guidance, new components and code patterns discovered during repository inspection. Ensure the gap analysis is comprehensive and ready for engineers and designers to reference.

    * Create a new, detailed tree‑of‑thought diagram that explicitly maps each copy update to existing or new components and pages, noting architectural modifications (e.g., page removal, subcomponent creation, navigation changes).

23. **Delivery**

24. Sync the updated copy specification, component mapping & gap analysis, change log and supporting files to the user.

25. Provide citations for research used.

## Dependencies and Risks

* **Accurate repository mapping:** Correct mapping depends on the current state of the skinn-convert-swiss-pages repo. If the repository has been updated since v5.0, adjust the gap analysis accordingly.

* **Translation support:** The spec must remain translatable; ensure that any new text can be adapted to German, French and Italian without idiomatic issues.

* **Time constraints:** Comprehensive reviews can extend timelines. Prioritise high‑impact sections first (home page, partners, technology) if time becomes limited.

## Timeline (approximate)

| Step | Duration |
| :---- | :---- |
| Context verification & repository inspection | 1 h |
| Draft copy specification v6.0 | 3 h |
| Update component mapping & gap analysis | 1.5 h |
| Draft change log | 1 h |
| Expert review loop & revisions | 2 h |
| Prepare supporting documents & delivery | 1 h |

Total estimated time: 8.5 hours.

This plan will guide the execution of the tasks to ensure a thorough and compliant update of the SKIIN website copy and related documentation.

---

