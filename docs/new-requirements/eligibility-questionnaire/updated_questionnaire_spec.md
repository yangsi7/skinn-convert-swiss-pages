# Swiss Holter‑Monitoring Eligibility Questionnaire – Eligibility‑First

This specification defines a multistep, interactive form for assessing a patient’s eligibility for a Holter monitor study in Switzerland.  The form prioritises collecting contact details, checking contraindications and symptoms, confirming insurance status and providing an early eligibility message.  Detailed medical questions are deferred until after eligibility is established.  The design aligns with the existing site (https://smartholter.netlify.app/) using **shadcn/ui** components and the project’s Tailwind theme【674948646015101†L25-L40】.

## Overview of Steps

1. **Step 0 – Contact & Account**  
   Capture **email** and **date of birth** with OTP verification.  Phone number is collected later only for self‑pay users to reduce friction.
2. **Step 1 – Eligibility Gate**  
   Begin by asking about **health insurance coverage in Switzerland** and, if applicable, the **insurance model**.  Then screen for **contraindications**, present a concise **symptom checklist** and a single **family history** question.  Based on these answers, determine early eligibility and branch into the insured or self‑pay path.
3. **Stage 2 – Detailed Information**  
   Collect detailed symptom and medical history for all users who pass the eligibility gate or opt for self‑pay.
4. **Stage 3 – Review & Consents (insured)**  
   For insured users, confirm insurance model and ask for GP or partner GP details (depending on the model).  Collect final consents and provide referral packet instructions.
5. **Self‑Pay Stage 3 – Payment & Consents**  
   For self‑pay users, collect **phone number** via OTP, shipping address and payment details, then gather final consents.
6. **Completion**  
   Present next steps based on the user’s path (e.g., referral packet download and GP booking instructions for insured users, kit shipment confirmation for self‑pay).

### Progress Indicator
Use the shadcn/ui `Stepper` component to display five steps (“Contact”, “Eligibility Gate”, “Details”, “Review/Consents”, “Complete”).  A “Save & continue later” link should appear after Step 0; clicking it sends a resume link to the verified email address.

## Step 0 – Contact & Account

| Field | Component (shadcn/ui) | Required? | Validation | Notes |
|------|----------------------|-----------|-----------|------|
| **Email address** | `Input` with OTP verification | Yes | Valid email format; send OTP; require correct OTP before proceeding | Used to create an account, send resume link and verify identity.
| **Date of birth** | `Input` (date picker) | Yes | Must be ≥ 18 years; calculate age on blur | Ensures the patient is an adult.

> **Note:** Phone number is **not** collected at this stage to reduce friction.  It will be requested later from self‑pay users for shipping and SMS notifications.

Upon successful verification, store a partial record in the database and enable a “Save & continue later” option.

## Step 1 – Eligibility Gate

### 1.1 Insurance Status & Model
Begin by asking: **“Do you have health insurance coverage in Switzerland?”**  Render a `RadioGroup` with options **Yes** and **No**.  
* If **Yes**, reveal a `Select` component to choose the **insurance model**: **Standard/Flex**, **HMO/Hausarzt** or **Telmed**.  
* If **No**, automatically set `insuranceModel = 'SelfPay'` and hide the model selection.

### 1.2 Contraindications
Display a group of three yes/no questions using `RadioGroup`.  If **Yes** to any, show a red `Alert` component: “Based on your answers, you may not be eligible for a Holter monitor.  Please consult your GP or call emergency services.”  Prevent further progression.  Allow the user to exit or return to edit.

| Question | Options | Required? | Notes |
|---------|---------|-----------|------|
| **Are you currently pregnant?** | Yes / No | Yes | Pregnancy is not an absolute contraindication but requires caution; flagged for review. |
| **Do you have a pacemaker or implantable cardioverter‑defibrillator (ICD)?** | Yes / No | Yes | Flagged for cardiologist review. |
| **Have you been hospitalised for a cardiac condition in the past 30 days?** | Yes / No | Yes | Flagged for review. |

### 1.3 Symptom Presence
Use a `Checkbox` list inside a `Card` titled **“Symptoms”**.  At least one symptom indicates presence; leaving all unchecked indicates no symptoms.  Include the following options:

| Symptom option | Notes |
|---------------|------|
| Palpitations or racing heart |  |
| Dizziness or light‑headedness |  |
| Fainting or loss of consciousness | If selected, open a `Dialog` asking: “Did you lose consciousness and sustain injuries or require medical attention?” (Yes/No).  If Yes, show emergency advice and require acknowledgement before continuing. |
| Chest pain or discomfort | If selected, open a `Dialog` asking: “Is your chest pain severe (≥ 7/10) or occurring at rest?” (Yes/No).  If Yes, show emergency advice. |
| Shortness of breath |  |
| Other (free text) | Show a `Textarea` when selected. |
| None of the above | Checkable.  If selected, disable other checkboxes. |

### 1.4 Family History (optional)
Ask a single yes/no question using a `Switch` or `RadioGroup`: 
**“Has a close relative (parent or sibling) experienced sudden cardiac death or been diagnosed with an arrhythmia?”**  
This field is optional and does not block progress.

### 1.5 Eligibility Decision
After the user answers the questions above, apply the following logic:

1. **Contraindications:** If any contraindication is **Yes**, present an alert and stop the flow.  The user is advised to consult a GP or emergency services.
2. **Insurance & symptoms:** If the user has health insurance **and** selected at least one symptom (excluding “None”), display a positive `Alert` (e.g., green) stating **“You may be eligible for reimbursement”** and proceed to Stage 2.
3. **Insured & no symptoms:** If the user has insurance but selected **no** symptoms, display a neutral `Alert` explaining that screening without symptoms is typically not reimbursed.  Ask: “Would you like to proceed as self‑pay?”  Provide **Yes/No** buttons:
   - **Yes:** set `insuranceModel = 'SelfPay'` and continue to Stage 2.
   - **No:** finish the flow with a thank‑you message and do not collect more data.
4. **Uninsured (Self‑pay):** If the user does **not** have insurance, automatically assign `insuranceModel = 'SelfPay'` and proceed to Stage 2.

Store all answers for reference.  Users who meet the criteria continue to Stage 2.

## Stage 2 – Detailed Symptom and Medical History

This stage is presented to users who (a) have insurance and ≥ 1 symptom or (b) choose to self‑pay (insured with no symptoms or uninsured).  Use collapsible sections to avoid overwhelming users.

### 2.1 Symptom Details (optional but recommended)
| Field | Component | Required? | Notes |
|------|----------|-----------|------|
| **When did your symptoms begin?** | `Input` (date) | Optional | Show if at least one symptom selected. |
| **How frequently do you experience symptoms?** | `Select` (Daily, Weekly, Monthly, Sporadic) | Optional | |
| **How severe are your symptoms?** | `Slider` (1–10) | Optional | Label extremes (1 = minimal, 10 = unbearable). |

### 2.2 Prior Arrhythmia or Procedure
| Field | Component | Required? | Notes |
|------|----------|-----------|------|
| **Have you been diagnosed with a heart rhythm problem or had a recent cardiac procedure?** | `RadioGroup` (Yes/No) | Optional | If Yes, show a `Textarea` for a brief description and date. |

### 2.3 Medications
| Field | Component | Required? | Notes |
|------|----------|-----------|------|
| **Please list any cardiac medications you are currently taking.** | `Textarea` | Optional | Encourage users to provide medication names and doses if available. |

### 2.4 File Uploads
| Field | Component | Required? | Notes |
|------|----------|-----------|------|
| **Upload previous ECGs or referral letters (optional).** | `FileUpload` | Optional | Accept up to 10 MB; file types: PDF, JPG, PNG. |

After completing Stage 2, route the user to Stage 3 based on `insuranceModel`.  For self‑pay users, skip Stage 3 (insured) and proceed to Self‑Pay Stage 3.

## Stage 3 – Review & Consents (Insured)

Only users with insurance (Standard/Flex, HMO/Hausarzt, Telmed) reach this stage.  Present a summary of their answers, allow them to edit previous steps, and collect final details specific to their model.

### 3.1 Insurance Model Confirmation
Reconfirm the model selected.  Provide a short description of each model:

* **Standard/Flex:** Choose between your **own GP** or a **partner GP** (Medgate).  
* **HMO/Hausarzt:** You must use your assigned GP; partner GPs are not allowed.  
* **Telmed:** You are required to call a triage hotline (provided by your insurer) before obtaining specialist care.

### 3.2 GP & Referral Details

**For Standard/Flex:**
* **Own GP:** Collect **GP name**, **practice name**, **HIN email**, and **phone number** using `Input` components.  On submission, provide the user with a downloadable referral packet (PDF) containing a cover letter, information sheet and pre‑filled referral form.  Instruct them to deliver this packet to their GP.
* **Partner GP:** Display a `Button` linking to the Medgate booking portal.  Once clicked, record that the referral will be handled via teleconsultation.

**For HMO/Hausarzt:**
* Collect the **assigned GP** details (as above).  Provide the referral packet upon submission.  Remind users that partner GPs are not permitted.

**For Telmed:**
* Provide a `Card` with hotline details.  The Telmed clinician will perform triage and issue a referral if appropriate.  No GP details are collected here.

### 3.3 Consents
Display a list of required checkboxes using `Checkbox` components:
* **Truthfulness declaration:** “I confirm that the information provided is accurate and complete.”
* **Emergency acknowledgement:** “I understand that Holter monitoring does not replace emergency medical evaluation.  If I develop severe symptoms, I will seek immediate care.”
* **Telemedicine & data processing consent:** “I agree to telemedicine services and the privacy policy.”  Provide links.

After all checkboxes are selected, show a `Submit` button to finalise the submission.  On success, display a confirmation screen with next steps:

* **Standard/Flex (own GP):** “Download your referral packet and deliver it to your GP.  We will ship your Holter kit once we receive the signed referral via HIN or fax.”
* **Standard/Flex (partner GP):** “Your teleconsultation will generate a referral.  You will receive an email once your kit is ready to ship.”
* **HMO/Hausarzt:** “Download your referral packet and deliver it to your GP.  Partner GPs are not available for this insurance model.”
* **Telmed:** “Call the Telmed hotline at [number] to complete triage.  Follow their instructions to obtain a referral.”

## Self‑Pay Stage 3 – Payment & Consents

Users who are uninsured or who choose self‑pay reach this stage.  This is the first time a phone number is requested: collect **phone** using an `Input` with OTP verification to ensure the user can receive SMS updates.  Then ask for the **shipping address** (street, postal code, city) in a grouped `Card`.  Present a summary of all previous answers and collect payment via a secure payment component (e.g., `PaymentForm`).  After payment succeeds, gather the same consents listed above (truthfulness, emergency acknowledgement, data processing) using checkboxes.  Finally, display a confirmation message:

* “Thank you for your payment.  Your Holter kit will be shipped to you shortly.  We will contact you via email and SMS with tracking information.”

## Completion

All paths converge on a completion screen that summarises the user’s next steps.  Use `Card` components with icons and clear headings.  Include contact information for support.

## Validation & Branching Rules

1. **Age requirement:** Users must be ≥ 18 years old (calculated from DOB) to proceed beyond Step 0.
2. **Contraindications:** Answering **Yes** to any contraindication stops the flow; users are advised to contact a GP or emergency services.
3. **Symptom presence:** At least one symptom must be selected for insured users to qualify for reimbursement.  If no symptoms, the user is informed that screening is not reimbursed and may choose self‑pay.
4. **Insurance status:** If the user lacks Swiss insurance, they follow the self‑pay path by default.
5. **Insurance model:** Determines which branch of Stage 3 is presented (Standard/Flex → own GP or partner GP; HMO → own GP only; Telmed → hotline instructions).
6. **Consents:** All required checkboxes must be selected before submission (no partial acceptance).

## Copy & Tone

* Use clear, plain language.  Avoid medical jargon unless supplemented with tooltips.
* Highlight benefits (“You may be eligible for reimbursement”) in a positive, motivational tone.
* Provide concise explanations for why certain information is needed (e.g., “We ask about recent hospitalisations to ensure Holter monitoring is safe for you”).
* Emergency advice should be in a red `Alert` with bold text and an icon to draw attention.

## Design Specifications

* **Colours & Typography:** Inherit primary and secondary colours from the site’s Tailwind configuration (e.g., `text-primary`, `bg-card`, `border-border`)【674948646015101†L25-L40】.  Use the default sans font (IBM Plex Sans).
* **Spacing:** Use consistent `space-y-4` between form sections and `space-y-2` between fields.
* **Cards & Containers:** Wrap each step’s content in a `Card` component with a `CardHeader` (title) and `CardContent` (fields).  Use `CardFooter` for navigation buttons (“Back”, “Continue”).
* **Buttons:** Use `Button` with variant `primary` for progression, `secondary` for back navigation, and `destructive` for cancel/exit actions.
* **Progress Indicator:** Position a horizontal stepper at the top of the form on desktop and convert to a vertical sidebar on mobile if space is limited.  Steps should be labelled and highlight the current step.
* **Modals & Alerts:** Use `Dialog` for emergency follow‑ups and `Alert` for eligibility and error messages.  Ensure modals cannot be dismissed without acknowledging the message when high‑risk conditions are present.
* **Accessibility:** Label all inputs, ensure sufficient colour contrast and support keyboard navigation.  Use `aria-live` regions for dynamic messages (e.g., eligibility reward).

## Integration Notes

* **Framework:** The site is built with React and Next.js; leverage shadcn/ui components.  Manage form state using React context or a state machine (e.g., XState) to handle branching logic and maintain data across steps.
* **Backend:** Use Supabase or existing backend to send OTP codes, store partial and final submissions, and generate referral packet PDFs.  Payment integration can use Stripe or Square; handle payment events server‑side.
* **Routing:** The CTA on https://smartholter.netlify.app/ should link to `/eligibility` or similar, which loads the multistep form.  Use client‑side routing to avoid page reloads.
* **Analytics:** Instrument each step with events (e.g., `eligibility_step_completed`, `contraindication_flagged`) to measure drop‑off.  Consider A/B testing copy or step order.

This specification can be used by designers and developers to implement the new questionnaire within the existing site, ensuring consistency with the design system and providing a user‑friendly, eligibility‑first flow.