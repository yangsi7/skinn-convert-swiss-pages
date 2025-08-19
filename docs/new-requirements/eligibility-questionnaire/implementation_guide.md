# Implementation Guide for Holter Eligibility Multistep Form

This guide outlines how to integrate the eligibility‑first questionnaire into the existing website (`https://smartholter.netlify.app/`) using **shadcn/ui** components and Tailwind CSS.  It covers component selection, state management, routing, backend integration and visual design.

## 1. Project Setup

1. Ensure the repository has `shadcn/ui` installed and configured (already present in `components.json`【759525849851615†L1-L18】).  If not, run:
   ```bash
   npx shadcn-ui@latest init
   ```
2. Confirm Tailwind CSS is set up with the provided configuration (`tailwind.config.ts`) and that CSS variables are defined for colours【674948646015101†L25-L40】.  Import the global styles in `_app.tsx` if using Next.js.
3. If not already installed, add dependencies for OTP sending (e.g., Supabase client), payment integration (Stripe/Square) and PDF generation (e.g., `pdf-lib` or serverless functions).

## 2. Routing & Page Structure

* **Create a new route**: `/eligibility` using Next.js pages or app router.  This page will host the multistep form.
* **Protect contact step**: use server actions or API routes to send OTP codes and verify them.  Once verified, store partial submission in Supabase with a unique `sessionId` and send a resume link via email.
* **Use a wizard/stepper pattern**: import `Stepper` (custom or from `@/components/ui/stepper` if available) and define steps: Contact, Eligibility, Details, Review/Consents, Complete.  Render each step conditionally based on the current index.

## 3. State Management

1. Create a **FormContext** using React `createContext` to store form data and the current step.  Provide methods to update fields, navigate steps and reset.
2. Persist partial data in local storage or Supabase after each step.  Use `useEffect` to sync context with storage.  For resume functionality, retrieve data by `sessionId` in a `getServerSideProps` or server action.
3. Implement validation using `zod` schemas for each step.  Integrate with `react-hook-form` for form control and error handling.

## 4. Step Implementation

### 4.1 Contact Step (Step 0)

* Use a `Card` component with `CardHeader` (“Contact Information”) and `CardContent` containing only two fields:
  - `Input` for **email** with an **OTP button** that triggers a Supabase function to send a one‑time code.  After the code is sent, render a small `Input` for the code and verify it using a backend call.  Show success/error `Alert` as needed.
  - `Input` type “date” for **date of birth**; implement an age check on blur; show an error message if the user is under 18.  Do **not** collect the phone number in this step; it will be requested later from self‑pay users.
* Use a `Button` for “Continue” that is disabled until the email OTP is verified and DOB is valid.  Provide a “Save & continue later” link in `CardFooter` that triggers an email with a resume link.  Store a partial record in Supabase associated with the email so the user can resume from any device.

### 4.2 Eligibility Gate (Step 1)

* **Insurance status & model:** Ask first whether the user has health insurance coverage in Switzerland using a `RadioGroup` with options **Yes** and **No**.  If **Yes**, reveal a `Select` dropdown to choose the **insurance model** (Standard/Flex, HMO/Hausarzt, Telmed).  If **No**, automatically set `insuranceModel='SelfPay'` and hide the dropdown.
* **Contraindications:** Present a vertical list of three yes/no `RadioGroup` components (pregnancy, pacemaker/ICD, recent cardiac hospitalisation).  If any answer is **Yes**, set a flag and show a red `Alert` advising the user to consult their GP or emergency services; disable the continue button.
* **Symptoms:** Present the symptom checklist inside a `FormField` with multiple `Checkbox` items (palpitations, dizziness, fainting, chest pain, shortness of breath, other, none).  Trigger high‑risk follow‑up `Dialog` modals when appropriate (e.g., fainting with injury, severe chest pain).  If “None of the above” is selected, deselect other options.
* **Family history:** Include an optional yes/no question using a `Switch` or `RadioGroup`: “Has a close relative experienced sudden cardiac death or been diagnosed with an arrhythmia?”  This does not block progress.

After all questions are answered, implement the eligibility logic:
1. If any contraindication is **Yes**, stop progression and display the emergency alert (handled above).
2. If the user has insurance **and** has at least one symptom selected (excluding “None”), set a state `earlyEligible = true` and display a green `Alert` informing them that they may be eligible for reimbursement.  Allow the user to proceed to Stage 2.
3. If the user has insurance but **no** symptoms selected, show a neutral `Alert` explaining that screening without symptoms is typically not reimbursed.  Ask if they wish to proceed as self‑pay using Yes/No buttons.  If **Yes**, set `insuranceModel='SelfPay'` and continue to Stage 2; if **No**, exit the flow with a thank‑you message.
4. If the user does **not** have insurance, proceed as self‑pay to Stage 2 directly (this sets `insuranceModel='SelfPay'`).

### 4.3 Detailed Information (Stage 2)

* Use collapsible `Accordion` components for Symptom Details, Prior Arrhythmia/Procedure, Medications and File Uploads.  Each section should be optional and clearly labelled.
* Use `Input` (date) for onset, `Select` for frequency, `Slider` for severity.  Tie these to context.
* The arrhythmia/procedure question uses a yes/no `RadioGroup`; when yes, show a `Textarea` for description.
* Use the shadcn/ui `FileUpload` component or a custom drop zone for uploads.  Limit file size and types.
* Provide navigation buttons at the bottom: a “Back” button to return to Step 1 and a “Continue” button to proceed.  Disable “Continue” until required fields (if any) are valid.

### 4.4 Review & Consents (Stage 3 – insured)

* Display a summary of previous answers in a `Card` using a definition list or two‑column layout.  Provide an “Edit” link for each section that navigates back to the corresponding step.
* Show the insurance model and, if applicable, a `Select` or radio choice for own GP vs partner GP (Standard/Flex).  When own GP is chosen, display `Input` fields for GP name, practice, HIN email and phone.  Validate required fields.
* For Telmed, show a static card with instructions and hotline number.
* Display the consent checkboxes.  Use `Checkbox` components with descriptive labels and link to the privacy policy.
* The “Submit” button sends a POST request to a serverless function that stores data, generates a referral packet (if needed) and triggers next steps.  Show a loading spinner while processing.

### 4.5 Payment & Consents (Self‑Pay Stage 3)

For self‑pay users, Stage 3 collects additional fields and processes payment:

* **Phone verification:** Prompt the user for their phone number using a `PhoneInput` or `Input`.  Send an OTP via Supabase and verify it before continuing.  Use this to send SMS notifications and two‑factor authentication.
* **Shipping address:** Group `Input` fields inside a `Card` for street, postal code and city.  Validate that all fields are completed.
* **Payment:** Display a secure payment form (e.g., Stripe card element) within a `Card`.  Collect billing details and handle payment completion with appropriate loading and error states.  Persist the payment status in the database.
* **Consents:** After payment, present the standard consent checkboxes (truthfulness, emergency acknowledgement, telemedicine/data processing) using `Checkbox` components.  All must be selected before submission.
* **Confirmation:** Upon completion, show a confirmation card with the message “Thank you for your payment.  Your Holter kit will be shipped to you shortly.  We will contact you via email and SMS with tracking information.”  Provide links to support and next steps if needed.

### 4.6 Completion Screen

* Use a `Card` with a success icon and clear headings summarising next steps.  Include call‑to‑action buttons or links (e.g., “Download referral packet”, “Book teleconsultation”, “Track your kit”).  Provide contact details for support.

## 5. Backend Integration

1. **OTP & account creation**: Use Supabase’s `auth` module to send magic links/OTP to email and phone.  On verification, create or update a user record in the `users` table.
2. **Form submission**: Create an API route `/api/holter/submit` that accepts the full questionnaire payload.  Validate data server‑side using `zod`.  Insert into a `holter_submissions` table.
3. **Referral packet generation**: Implement a serverless function that uses a template (Markdown or HTML) and `pdf-lib` to generate a PDF.  Include user data and instructions for the GP.  Store the PDF in cloud storage (Supabase Storage or S3) and return a download URL.
4. **Payment processing**: Integrate with Stripe or Square.  Use client‑side payment elements to capture payment token and call a secure endpoint to confirm the payment.  Update the submission record with payment status.
5. **Email notifications**: Use a transactional email service (SendGrid/Mailgun) via Supabase edge functions to send resume links, referral packet links, confirmation emails and shipping notifications.

## 6. Deployment & Testing

* Deploy the updated site to Netlify or Vercel.  Configure environment variables for Supabase keys, payment gateway credentials and email service keys.
* Test all flows (insured with symptoms, insured without symptoms, uninsured self‑pay, high‑risk contraindication) on desktop and mobile.
* Verify accessibility compliance (WCAG 2.1 AA), including keyboard navigation and screen reader support.
* Instrument analytics to measure drop‑off by step and perform iterative improvements based on data.

## 7. Maintenance & Future Enhancements

* **A/B testing:** Experiment with messaging and step order to optimise conversion.  Use feature flags to roll out changes incrementally.
* **GP directory integration:** In a later phase, integrate a GP search API to auto‑populate GP details and reduce typing.
* **Chat interface:** Consider implementing an AI‑driven conversational form using the same backend endpoints; reuse validation schemas and branching logic.

With this guide, engineers can implement the multistep eligibility questionnaire that adheres to the updated flow, leverages existing design systems and backend infrastructure, and provides a user‑friendly experience that maximises conversion.