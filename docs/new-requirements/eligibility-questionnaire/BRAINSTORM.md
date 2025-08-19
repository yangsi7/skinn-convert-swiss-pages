# Brainstorming & Evaluation: Insurance‑First Flow Components

This document compiles potential elements for the updated questionnaire that prioritises the insurance question and defers phone collection.  Each item is scored for **relevance** and **impact** (1–10).  The final column gives the combined priority.

| # | Component / Idea | Description | Relevance | Impact | Rationale | Priority |
|---|-----------------|-------------|-----------|--------|-----------|----------|
| 1 | **Email + DOB first** | Collect only email (OTP) and date of birth in Step 0.  Allows saving progress via email login and reduces friction by deferring phone. | 10 | 9 | Satisfies new requirement to reduce initial friction and enable resumption. | **19** |
| 2 | **Insurance provider & model question** | Ask whether the user has Swiss health insurance; if yes, which model (Standard/Flex, HMO/Hausarzt, Telmed).  Branch early into self‑pay vs insured. | 10 | 9 | Central to new flow; enables early segmentation and appropriate path selection. | **19** |
| 3 | **Contraindication triage after insurance** | Screen for pregnancy, pacemaker/ICD and recent hospitalisation.  Stop flow if any yes. | 9 | 9 | Ensures safety; critical for all users. | **18** |
| 4 | **Symptom checklist & family history** | Present a concise list of symptoms and one family‑history yes/no.  Use the answers to determine eligibility. | 9 | 8 | Necessary to assess clinical relevance; family history adds slight nuance. | **17** |
| 5 | **Eligibility reward message** | Show “You are likely eligible” when insured users have ≥ 1 symptom and no contraindications.  Use positive tone and colour. | 8 | 9 | Motivates users to continue; key to conversion. | **17** |
| 6 | **Self‑pay screening message** | If insured user has no symptoms, inform them that screening is not reimbursed and offer self‑pay. | 7 | 8 | Prevents confusion and ensures transparency. | 15 |
| 7 | **Phone & shipping later (self‑pay)** | Collect phone (OTP), shipping address and payment only when the user has committed to self‑pay. | 8 | 8 | Reduces initial friction and aligns with user’s priority to get contact later. | 16 |
| 8 | **Supabase resume via email/phone** | Implement login via OTP on email/phone to allow resuming the questionnaire at any stage. | 7 | 7 | Improves UX; important for longer forms. | 14 |
| 9 | **Single family‑history question** | Ask if a close relative has had sudden cardiac death or arrhythmia (Yes/No).  Optional. | 5 | 5 | Adds depth without complexity. | 10 |
| 10 | **Progress bar** | Display steps (“Contact”, “Eligibility”, “Details”, “Review/Consents”, “Complete”).  | 6 | 7 | Provides clarity and reduces anxiety; helps with long forms. | 13 |
| 11 | **GP vs partner GP choice** | For insured users (Standard/Flex), let them choose own GP or partner GP.  For HMO, only own GP; for Telmed, hotline instructions. | 8 | 8 | Core to referral process; avoids confusion. | 16 |
| 12 | **Deferred phone collection** | Move phone input and OTP to self‑pay stage; maintain email verification only initially. | 7 | 6 | Addresses friction but introduces risk if email is not accessible; balanced importance. | 13 |
| 13 | **Family‑history toggle** | Use a simple switch rather than a complex form to ask about family history. | 4 | 4 | Minor enhancement; easily implemented. | 8 |

### Ranked Priorities

The highest priority components based on combined scores:
1. **Email + DOB first** (19)
2. **Insurance provider & model question** (19)
3. **Contraindication triage** (18)
4. **Symptom checklist & family history** (17)
5. **Eligibility reward message** (17)
6. **Phone & shipping later (self‑pay)** (16)
7. **GP vs partner GP choice** (16)

These items form the backbone of the revised flow and should be emphasised in the specifications and implementation.