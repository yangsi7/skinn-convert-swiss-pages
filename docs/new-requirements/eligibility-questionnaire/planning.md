# Planning Document: Insurance‑First Questionnaire Redesign

## Objectives

1. **Redesign the eligibility questionnaire** to collect **email and date of birth** first, ask about **insurance coverage and model** immediately, then check **contraindications, symptoms** and a brief **family history question** to determine early eligibility.  Provide a “You may be eligible” reward for insured symptomatic users, or offer self‑pay.  
2. **Defer phone collection and payment** to the self‑pay stage to reduce initial friction.  Ensure insured users receive appropriate instructions (own GP/partner GP/Telmed) and consents.
3. **Support resume at any point** via Supabase Auth with OTP on email or phone.
4. **Align with shadcn/ui design system** and existing Tailwind theme.
5. **Produce updated documentation** including research summary, tree‑of‑thought, brainstorming, planning, todo list, updated questionnaire spec and implementation guide.

## Task Breakdown

### 1. Update Research (Done)
* Summarise the new flow and requirements.  Include clinical justification and design considerations.  Added to `RESEARCH.md`.

### 2. Update Tree‑of‑Thought (Done)
* Reflect new stage order and relationships: Step 0 (Email & DOB), Step 1 (insurance, contraindications, symptoms, family history), Stage 2 (details), Stage 3 (insured review/consents), Self‑pay Stage 3 (phone/payment), Completion.

### 3. Update Brainstorming (Done)
* Evaluate components specific to the new flow: early insurance question, deferring phone, Supabase resume, etc.

### 4. Detailed Planning & Design
* **4.1 Define question flow** reflecting updated steps and branching logic:
  - **Step 0:** Collect email (OTP) and date of birth.  Defer phone number to the self‑pay stage.
  - **Step 1:** Ask whether the user has health insurance coverage in Switzerland and, if so, which model (Standard/Flex, HMO/Hausarzt, Telmed).  Then ask contraindications, present a short symptom list and a single family‑history question.  Apply early eligibility logic: contraindications stop the flow; insured symptomatic users receive a reward message; insured users without symptoms may self‑pay or exit; uninsured users are routed to self‑pay.
  - Stage 2: Detailed symptom and medical history (only selected symptoms to avoid repetition).
  - Stage 3 (insured): GP/partner selection based on model; consents.
  - Stage 3 (self‑pay): Phone (OTP), shipping address, payment; consents.
  - Completion: next steps based on path.
* **4.2 Map UI components**: choose `Input`, `RadioGroup`, `Select`, `Checkbox`, `Slider`, `Textarea`, `Card`, `Dialog`, `Stepper` from shadcn/ui for each question.  Use a progress bar with clear step names.
* **4.3 Draft copy**: write questions and messages (e.g., insurance prompt, symptom list, eligibility reward, non‑reimbursed notice).  Use plain language with tooltips for medical terms.
* **4.4 Specify conditional logic rules**: 
  - **Contraindication** → immediate exit (alert and referral to GP/ER).
  - **Insured & ≥1 symptom** → eligibility reward (“You may be eligible for reimbursement”).
  - **Insured & 0 symptoms** → not reimbursed; ask if they want to proceed as self‑pay.
  - **Uninsured** → automatically self‑pay.
* **4.5 Plan resumability**: design session management using Supabase Auth; store partial form state keyed by email/phone.  Outline APIs required.
* **4.6 Outline backend integration**: update endpoints for OTP, data storage, referral packet generation, payment, and email notifications.  Ensure phone is not required until self‑pay stage.
* **4.7 Update GP referral process**: emphasise the referral packet approach and booking link for partner GP; Telmed hotline instructions.
* **4.8 Draft technical implementation guide**: describe component hierarchy, state management, validation and user flow control.
* **4.9 Define analytics instrumentation**: plan events to track drop‑off at each step; propose tests for messaging and order.

### 5. Expert Review & Adjustments
* Gather feedback from domain experts (cardiology), design/UX experts (ease of use), backend architects (Supabase session handling), and product stakeholders.  Incorporate feedback into the specification and implementation guide.

### 6. Execution & Documentation
* **Update specification**: create a new `updated_questionnaire_spec.md` reflecting the revised flow and fields.  Include tables for each step, required status, validation and design notes.
* **Write implementation guide**: update `implementation_guide.md` to reflect the new step ordering, deferred phone field, insurance prompt and resume functionality.
* **Update todo list**: revise tasks and mark previous tasks as obsolete or completed.
* **Prepare flowchart**: adjust the mermaid diagram to match the new flow (insurance asked before medical questions).  Save as `flowchart.mmd`.

### 7. Finalise & Deliver
* Perform a self‑review and simulated expert review.  Resolve any discrepancies.  
* Sync the final research, TOT, brainstorming, planning, todo, specification, implementation guide and flowchart.  Create a zipped archive for download.
* Provide a concise final message summarising deliverables and attach the files.

## Timeline & Dependencies

| Step | Description | Dependency |
|-----|-------------|-----------|
| 4.1 | Define flow & questions | Updated research & TOT |
| 4.2 | Map UI components | Flow definition |
| 4.3 | Draft copy | Flow definition |
| 4.4 | Conditional logic rules | Flow definition |
| 4.5 | Resumability design | Supabase Auth docs |
| 4.6 | Backend integration | Architecture review |
| 4.7 | Referral process update | Domain expert input |
| 4.8 | Implementation guide | Flow, design, integration |
| 4.9 | Analytics plan | Performance expert input |

## Risks & Mitigations

* **Complex branching** – Maintain clear state management and thorough testing to avoid logic errors.
* **User confusion** – Provide concise explanations and tooltips; ensure progress indicator is visible.
* **Session persistence** – Use robust authentication and storage; handle token expiration gracefully.
* **Compliance** – Validate data handling with legal and medical stakeholders.

## Next Steps

Begin execution of tasks in the todo list: update specification, guide, todo list, and flowchart based on this plan.