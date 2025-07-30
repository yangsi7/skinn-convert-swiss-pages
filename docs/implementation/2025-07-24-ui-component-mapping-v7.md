# **UI Component Mapping Copy Spec (Version 7.1):**

**1\. Home Page**

**1.1 Hero Section (Component: `HeroSection`)**

**Copy:** Implement three A/B testing variants. Variant A (default) is Vincent’s “Urgency & Longevity” theme with the badge “MDR Class IIa Certified • Swissmedic Registered,” the headline “Heart Disease Is the \#1 Killer — When Was Your Last Heart Check?”, the subheadline “70 % of arrhythmias show no symptoms. Left undetected, they can cause strokes or heart failure. Now you can screen your heart — safely, easily, from home,” and the emotional subheadline “Longevity means more birthdays — for you, and for those who love you most. Start protecting your heart today.” CTAs are **Start Your Free Assessment** (primary), **Check Insurance Coverage** (secondary) and **Questions? Read our FAQ →** (text link). Variants B and C use the alternate headlines and subheadlines (“Live Longer. Screen Smarter. From Home.” and “Your Heart. Your Family. Your Control.”) with the same badge and CTAs.

**Design notes:** The existing split‑screen hero should be maintained, with the headline and CTAs on the left and a high‑impact image on the right. Update translation files (`home/en.ts`, etc.) to include the new variant strings. Ensure there is room for the emotional subheadline beneath the headline. Use the existing trust badges component for the “MDR Class IIa” badge.

**1.2 Statistics Section (Component: `StatisticsShowcase`)**

**Copy:** Three cards with the following titles and descriptions:

1. **70 %** – **of atrial fibrillation episodes occur without symptoms.**

2. **20–30 %** – **of ischaemic strokes are attributed to atrial fibrillation.**

3. **66 % vs 9 %** – **Detection rate with extended monitoring vs a 24‑hour Holter.**

Include a footnote below the cards: “Clinical evidence shows that extended monitoring detects significantly more arrhythmias than traditional 24‑hour tests” with a link to the Evidence page. If design allows, a fourth card can note that ambulatory blood pressure monitoring (ABPM) is the reference standard for diagnosing hypertension.

**1.3 Problem & Solution Narrative (Component: `ProblemSolutionSection`)**

**Copy:**

*Problem:* “Many heart conditions hide quietly. Up to 70 % of arrhythmias have no symptoms. A single 24‑hour test offers only a brief snapshot, leaving you waiting and wondering. Traditional monitors are uncomfortable and disrupt daily life.”

*Solution:* “SKIIN offers continuous heart‑health monitoring from home. Our 10‑Day Heart Screening catches irregular rhythms that 24‑hour tests miss. The soft, wire‑free garment feels like a second skin—water‑resistant, washable and removable for showers. By combining ECG, blood pressure and sleep analysis, we monitor the Silent Triad (arrhythmia, hypertension and sleep apnoea) that often goes unnoticed.”

*CTA:* **Start Your Free Assessment**

**Design notes:** Use the existing two‑column layout. Add small icons representing the three modalities (heart rhythm, blood pressure, sleep) to reinforce the Silent Triad concept. Provide a link to the Vision page for SKIIN 3X Screening™ as part of the solution narrative.

**1.4 Product Section (Component: new `ProductSection` or merged `FeaturesSection` & `AISection`)**

**Copy:** Present the eight benefits in two rows of four cards (or a responsive grid):

1. **Extended Heart Screening for Deeper Insight** – Replace short, 24–48‑hour tests with extended monitoring (typically 10 days) to catch elusive arrhythmias. Continuous ECG recording provides a richer dataset, enabling cardiologists to detect intermittent events that would otherwise be missed.

2. **Shortened Wait Times & Earlier Detection** – Rapid shipping and same‑day setup mean you begin monitoring quickly. Early detection of arrhythmias and hypertension allows for timely intervention and reduces the risk of stroke or heart failure.

3. **Swift, Seamless Referrals** – Our digital workflow connects you, your GP and specialists without complicated logistics. Referral forms and report sharing are integrated into the MVCP, enabling cardiologists to receive data promptly and act on critical findings.

4. **Comfortable Textile‑Based SKIIN Band** – A soft, adhesive‑free band is shipped directly to your home. It feels like everyday clothing, is water‑resistant and hypoallergenic, and can be removed briefly for showers or exercise. This improves compliance and user experience.

5. **AI‑Powered Precision** – Data are processed by advanced software trained on millions of ECGs. MediCalgorithmics’ DeepRhythm Platform combines convolutional neural networks and transformer models to flag irregular events with high accuracy and generates clear, concise reports that include arrhythmia classification, heart‑rate variability and event timelines.

6. **Fast Turnaround** – Most results are returned within 24–48 hours after study completion. Cardiologists review AI‑flagged events and provide personalised recommendations, ensuring you receive actionable insights quickly.

7. **Proven Technology** – Thousands of studies have been completed using SKIIN’s platform, trusted by leading clinics and dozens of respected cardiologists. The system delivers medical‑grade accuracy while maintaining comfort and convenience.

8. **Health Canada Licensed** – In addition to MDR Class IIa certification and Swissmedic registration, SKIIN technology is licensed by Health Canada, meeting rigorous North American medical standards.

End the section with: “Data flows securely from the SKIIN app to our ISO/IEC 27001‑certified cloud, where AI and Swiss cardiologists work together to deliver clear, actionable reports.”

**Design notes:** Use icons corresponding to each benefit. Incorporate a carousel or graphic illustrating the sensor→app→cloud→AI→cardiologist pipeline (similar to the Oxa tech page). Consider using the “Your Second Skin” collage image for visual interest at the top of this section.

**1.5 Process Section (Component: `ProcessFlow`)**

**Copy:**

1. **Take the Free Assessment** – Complete a quick online form to check eligibility and insurance coverage. We coordinate with your doctor to get a prescription if needed.

2. **Receive Your SKIIN Kit** – We ship the SKIIN garment, ABPM cuff (if prescribed) and sleep sensor to your home. A simple app guides you through setup.

3. **Wear & Monitor** – Wear the garment for 10 days (or 3/5 days if self‑pay). The textile band records every heartbeat, the cuff measures blood pressure and the sensor tracks sleep metrics. You can remove the garment to shower, then put it back on.

4. **AI Analysis & Cardiologist Review** – Data stream securely to our cloud. MediCalgorithmics’ DeepRhythm algorithms detect arrhythmias and anomalies. Certified Swiss cardiologists review your recordings and create a personalised report.

5. **Get Your Results** – Your results arrive within 48 hours after your study. Discuss them with your doctor; if issues are detected, they will recommend next steps. Enjoy peace of mind knowing your heart has been thoroughly checked.

**Design notes:** Reuse the existing five‑step flow with numbered icons. Update the captions to match the copy above. In the final step, mention AI analysis and cardiologist review explicitly.

**1.6 SKIIN by the Numbers (Component: new `NumbersSection`)**

**Copy:** Four metrics displayed prominently:

| Metric | Description |
| ----- | ----- |
| **95 % Detection Accuracy** | Industry‑leading arrhythmia detection, powered by AI and validated by Swiss cardiologists. |
| **10 Days Continuous Monitoring** | Extended monitoring for comprehensive cardiac insights; our 10‑day service captures events that shorter studies miss. |
| **100 % Insurance Coverage** | When medically prescribed, SKIIN is fully covered by Swiss health insurance. |
| **24/7 Real‑Time Analysis** | Data are analysed continuously, providing instant alerts and rapid reporting. |

**Design notes:** Use a row or grid layout with large numbers and concise descriptions. A subtitle (“SKIIN by the Numbers”) can introduce the section. Link each number to the Evidence page via a tooltip or footnote.

**1.7 Clinically Proven Technology (Component: `ClinicallyProvenTechSection`)**

**Copy:**

Present SKIIN’s scientific credibility through four concise trust markers:

1. **98.6 % Accuracy Rate:** Clinical validation shows SKIIN matches the accuracy of traditional Holter monitors while providing superior comfort. Extended monitoring detects more arrhythmias than 24‑hour tests.

2. **Published Research:** SKIIN’s technology has been validated in multiple peer‑reviewed studies and clinical trials, demonstrating reliability across diverse populations.

3. **MDR Class IIa & CE Certified:** The device meets the highest medical‑device standards for safety and efficacy, is registered with Swissmedic and is also licensed by Health Canada.

4. **Cardiologist Endorsed:** Recommended by leading Swiss cardiologists and electrophysiologists who trust the system’s accuracy and comfort for outpatient monitoring.

**Design notes:** Present these markers as a grid or vertical list with icons (e.g., shield for accuracy, book for research, certificate for certification, stethoscope for cardiologist endorsement). Link each marker to the Evidence page for more details. If space allows, include a short footnote pointing to the Clinical Evidence page.

**1.8 AI‑Measured & Cardiologist‑Evaluated (Component: `AISection` or integrate into ProductSection)**

**Copy:**

If retained as a standalone section, emphasise six pillars that reassure visitors that SKIIN combines cutting‑edge technology with expert oversight and patient convenience:

1. **Comfortable Monitoring:** Perform continuous ECG monitoring from the comfort of home with our textile band – no wires, no adhesives. The carbon‑fibre electrodes are soft, water‑resistant, washable and can be removed briefly for showers or exercise.

2. **AI‑Powered Precision:** MediCalgorithmics’ **DeepRhythm Platform** is a cloud‑based ECG reporting system powered by deep neural networks (CNNs and transformer models). It analyses millions of heartbeats, flags irregular events with high accuracy and generates clear reports including arrhythmia classification, heart‑rate variability and event timelines. Workflow automation prioritises critical findings and shortens review times.

3. **Cardiology Expertise:** Swiss cardiologists and trained technicians evaluate every report, ensuring clinical accuracy and personalised recommendations. They verify AI‑flagged events and provide actionable guidance for patients and physicians.

4. **Swift, Seamless Referrals:** Our digital workflow connects GPs, cardiologists and telemedicine providers through the MVCP. Patients receive referrals and follow‑up care without complicated logistics, and clinicians can manage studies and reports efficiently.

5. **Fast Turnaround:** Most results are returned within 24–48 hours after study completion, enabling timely intervention. Thousands of studies have been completed, trusted by leading Swiss clinics and cardiologists.

6. **Insurance Coverage & Self‑Pay Options:** Monitoring is fully covered by basic Swiss insurance when prescribed. For those seeking peace of mind without symptoms, affordable self‑pay packages (3‑, 5‑ and 10‑day screenings) are available.

Alternatively, these pillars can be integrated into the Product Section and the separate AI section removed to streamline the home page. If integrated, ensure the six points are represented in the eight benefit cards or combined with the Care360 and Technology narratives.

**1.9 Myant Care360 Technology (Component: `Care360Section`)**

**Copy:** A split layout pairing visual storytelling with bullet points:

* **10‑Day continuous monitoring:** Capture irregular heart rhythms, blood‑pressure fluctuations and sleep metrics across multiple days.

* **Real‑time AI analysis:** Advanced algorithms process data continuously, enabling early detection and triage.

* **Swiss cardiologist validation:** Each report is reviewed by a certified Swiss cardiologist.

* **Medical‑grade accuracy:** The system matches the accuracy of hospital‑grade devices while offering unrivalled comfort.

* **Seamless data transmission:** Encrypted data flow from the SKIIN app to our ISO/IEC 27001‑certified cloud.

* **Proven technology:** Thousands of studies have been completed using SKIIN technology, trusted by top clinics and dozens of respected cardiologists. The system delivers medical‑grade accuracy while maintaining comfort and convenience.

* **Health Canada Licensed:** In addition to MDR Class IIa certification and Swissmedic registration, SKIIN’s monitoring system is licensed by Health Canada, meeting rigorous North American medical standards. This international recognition underscores the safety and efficacy of the platform.

**Design notes:** Replace the original MVCP section on the home page with this Care360 summary. Include an illustration or carousel showing the SKIIN band, smartphone app and AI analysis. Use the product collage image to visualise different garments (e.g., bra, boxers, vest, sports bra) and emphasise that SKIIN is a “second skin.”

**1.10 Know Your Heart Risk (Component: `RiskCardsSection`)**

**Copy:** Introduce visitors to common cardiac risks and motivate them to take action through three concise cards:

1. **Silent Atrial Fibrillation:** Often asymptomatic but increases stroke risk five‑fold; one in four adults over 40 are affected. Early detection through extended monitoring saves lives.

2. **Cardiac Arrhythmias:** Irregular heartbeats that can be life‑threatening if undetected. Millions of adults live with undiagnosed arrhythmias; continuous ECG monitoring uncovers these hidden events.

3. **Heart Disease Prevention:** Early detection enables preventive treatment and lifestyle changes. Heart disease remains the leading cause of death worldwide, but proactive screening and management can reduce risk and improve longevity.

**Design notes:** Each card should include an icon (e.g., pulse/heartbeat for AF, irregular heartbeat for arrhythmias, shield or heart for prevention). Place this section before the insurance and pricing information to encourage readers to evaluate their own risk. Consider linking each card to relevant sections (e.g., Evidence page or Solutions pages) for visitors seeking more detail.

**1.11 Insurance Coverage & Pricing (Component: split `InsuranceSection` and `PricingSection`)**

**Copy:**

Break the section into two parts—Insurance Coverage and Pricing—to improve readability and clarity:

*Insurance Coverage:* Explain that SKIIN is recognised and fully covered by basic Swiss health insurance when medically prescribed. Use bullet points to reassure visitors:

* **Covered by basic insurance when prescribed** – The monitoring kit and analysis are reimbursed under mandatory health insurance, with no out‑of‑pocket costs for qualifying patients.

* **Reimbursement support included** – Our team assists with paperwork and reimbursement claims, ensuring a smooth process.

* **Direct billing available** – We simplify payment by invoicing insurers directly, so patients do not need to pay up front.

* **Four pathways to coverage** – Standard (free choice), Hausarztmodell/GP model, HMO model and Telmed (telemedicine) model. Clarify that GPs bill only for consultation and patient onboarding (equipment setup), while cardiologists bill for interpretation and reporting.

*Pricing Table:* For individuals who wish to self‑screen without a prescription, offer clear pricing for flexible durations:

| Duration | Price (CHF) | Ideal for |
| ----- | ----- | ----- |
| **3‑Day Screening** | **149** | Quick heart check to detect immediate issues |
| **5‑Day Screening** | **249** | Comprehensive monitoring to catch intermittent arrhythmias |
| **10‑Day Screening** ⭐ | **349** | **Gold standard** – Maximum detection rate and longest monitoring window |

Include a note: “If you have **no symptoms but still want to be checked**, the **10‑Day Screening** offers the most comprehensive insight and the highest detection rate. Extended monitoring catches intermittent arrhythmias that may go unnoticed in shorter tests.”

**Design notes:** Separate the insurance explanation from the pricing table with distinct headings and spacing. Use call‑outs or icons to emphasise the reassurance of coverage. Place CTAs (“Check Insurance Coverage” and “Start Your Free Assessment”) after the pricing table. Consider a highlight or badge on the 10‑Day Screening row to draw attention to the gold standard option.

**1.12 Testimonials Section (Component: `TestimonialsSection`)**

**Copy:**

1. **The Holter Veteran:** “After years of awkward Holter monitors, I forgot I was wearing SKIIN. Ten days went by, and my cardiologist finally found the arrhythmia that caused my dizziness.”

2. **A Daughter’s Gift:** “My father never complains, so I ordered SKIIN for him. The assessment was free, and the report uncovered high blood pressure at night. We changed his medication before anything serious happened.”

3. **Sensitive Skin & Peace of Mind:** “Adhesive patches always irritated my skin. SKIIN’s soft band was a relief. I wore it through daily life—even during yoga—and the report reassured me.”

**Design notes:** Use a carousel or grid layout; include placeholders for photos until real testimonials are available. Add icons or quotes for readability. Position this section before the final CTA.

**1.13 Final CTA Section (Component: `CtaSection`)**

**Copy:**

**Headline:** “Take Control of Your Heart Health Today”

**Subtitle:** “Join Swiss families already benefiting from comfortable, comprehensive cardiac screening.”

**Description:** “Every heartbeat echoes in someone else’s heart. Protect yours—for yourself and for those who need you.”

**CTAs:**

* **Start Your Free Assessment** – Primary patient CTA (opens the eligibility/coverage form).

* **Talk to a Heart‑Health Specialist** – Secondary patient CTA for those seeking personalised guidance.

* **Book a Demo** – Professional CTA for healthcare providers (visible when a user indicates they are a professional).

**CEO Quote:** Place the following below the CTAs in small type: “We’ve normalised waiting until it’s too late to care for our health and our hearts. Our mission is to change that. With Care360, we’re making cardiac screening as routine as dental check‑ups, empowering people to take control of their health, and offering real support to loved ones before a crisis strikes.” – **Tony Chahine**, Founder & CEO of Myant.

## **Design notes: Use a contrasting background and a clear call‑to‑action button style. Ensure the CEO quote is visually separated but still part of the CTA area.**

**2\. Solutions Pages**

**2.1 10‑Day Heart Screening (Component: `SolutionPage`)**

* **Hero:** Badge (“MDR Class IIa Certified • Swissmedic Registered”), headline “10‑Day Heart Screening,” subheadline “Continuous ECG monitoring for maximum arrhythmia detection,” and CTA “Start Your Free Assessment.”

* **Description:** Explain that extended monitoring captures intermittent arrhythmias, eliminating wires and adhesives. Mention the soft SKIIN band and the ability to live normally while monitoring.

* **Why 10 Days:** Reference studies showing that extended monitoring detects arrhythmias in 66 % vs 9 % with 24‑hour Holter. Emphasise comfort and detection benefits.

* **Who Should Consider This:** People over 50, those with family history or symptoms, diagnosed arrhythmia patients requiring follow‑up, pre‑operative assessments, and prevention‑minded individuals.

* **CTA:** Start Your Free Assessment.

**2.2 Ambulatory Blood Pressure Monitoring (Component: `SolutionPage`)**

* **Hero:** Badge (“Swissmedic Registered”), headline “Ambulatory Blood Pressure Monitoring,” subheadline “The gold standard for diagnosing hypertension,” CTA “Start Your Free Assessment.”

* **Description:** Describe how the cuff measures blood pressure every 15–30 minutes by day and 30–60 minutes at night, detecting masked and nocturnal hypertension. Explain why ABPM is the reference standard for hypertension diagnosis.

* **Benefits:** Reference guidelines recommending ABPM for accurate diagnosis, detection of white‑coat and masked hypertension, nocturnal dipping and morning surges. Highlight convenience and actionable insights.

* **CTA:** Start Your Free Assessment.

**2.3 Silent Triad Screening (SKIIN 3X Screening™) (Component: `SolutionPage` – Coming Soon)**

* **Hero:** Badge (“Coming Soon”), headline “SKIIN 3X Screening™,” subheadline “Triple protection for your heart: ECG, blood pressure and sleep analysis,” CTA “Join the Waitlist.”

* **Description:** Explain that tri‑modal screening will provide the most comprehensive picture of heart health by capturing interactions between heart rhythm, blood pressure and sleep patterns. Note that the service is under development and invite users to sign up for updates.

* **Features (Anticipated):** One kit with band, cuff and sleep sensor; synchronised data; sleep insights; clinical oversight by Swiss cardiologists. Encourage visitors to join the waitlist.

---

**3\. Partners Pages**

**3.1 General Practitioners (Component: `PartnerGPSection`)**

**Copy:**

* **Value Proposition:**

  * **Detect More, Sooner:** Extended monitoring (3–10 days) identifies intermittent arrhythmias that short Holter tests miss. ABPM reveals masked hypertension, and sleep analysis uncovers nocturnal arrhythmias.

  * **Streamlined Workflow:** SKIIN fits into the GP model. Onboard patients in minutes via our secure app. No equipment investment—Myant supplies and maintains devices.

  * **Reimbursable Care:** GPs can bill for patient setup and onboarding using existing Swiss codes (e.g., TARMED). Interpretation and diagnostic report billing remain with the cardiologist. Basic insurance covers SKIIN when prescribed.

  * **Effortless Follow‑Up:** Receive annotated reports within 48 hours. Decide whether to manage the patient yourself or refer to a cardiologist.

* **Myant Virtual Clinic Portal (MVCP):**

  * **Real‑Time Monitoring:** View live ECG, BP and sleep data. Automated alerts highlight critical events.

  * **Comprehensive Analysis Tools:** Zoom in on ECG strips, examine BP trends and review sleep metrics. Annotate findings and export to your EMR.

  * **Patient Management Dashboard:** Filter patients by risk level, status or custom criteria. Manage large populations efficiently.

  * **One‑Click Reporting:** Generate professional reports and share them with patients or specialists. The MVCP integrates with HL7/FHIR‑compatible systems for seamless documentation.

  * **Security & Compliance:** End‑to‑end encryption, Swiss data residency, MDR Class IIa compliance, ISO 13485 quality management and ISO/IEC 27001 certified cloud infrastructure.

**CTAs:** **Join Our GP Network**, **Book a Demo**

**3.2 Cardiologists (Component: `PartnerCardiologistSection`)**

**Copy:**

* **Comprehensive Data:** Receive extended ECG, BP and sleep data sets for your referred patients. Detect arrhythmias, hypertension and sleep‑breathing disorders that may not appear in clinic.

* **AI‑Powered & Human‑Reviewed:** MediCalgorithmics’ algorithms pre‑analyse data; cardiologists make final interpretations. Reports highlight irregular events and trends.

* **Efficient Workflows:** The MVCP allows you to review multiple patients, annotate strips, generate reports and communicate results quickly.

* **Collaborative Care:** Work seamlessly with GPs and telemedicine providers to manage patient follow‑up.

**CTAs:** **Book a Demo**, **Integrate SKIIN**

**3.3 Telemedicine Providers (Component: `PartnerTelemedSection`)**

**Copy:**

* **Complete Vital Signs from Afar:** Provide patients with SKIIN kits for home use. Monitor ECG, BP and sleep remotely and respond to alerts in real time.

* **Scalable Platform:** Manage large patient populations through the MVCP. Integrate data into your telemedicine platform via APIs.

* **Drive Engagement:** Offer preventive cardiac screening as part of your telemedicine services to attract and retain clients.

**CTAs:** **Integrate SKIIN**, **Book a Demo**

**3.4 Corporate (Employers & Insurers) (Component: `PartnerCorporateSection`)**

**Copy:**

* **Preventive Wellness Programmes:** Offer SKIIN screenings as part of corporate wellness benefits. Early detection reduces absenteeism and long‑term healthcare costs.

* **Flexible Packages:** Tailor programmes for small teams or large enterprises. Volume discounts available.

* **Data‑Driven Insights:** Aggregate anonymised data to understand workforce health trends without compromising individual privacy.

## **CTAs: Get a Corporate Quote, Book a Demo**

**4\. How It Works**

**4.1 Process Page (Components: `ProcessFlow`, `ClinicianDataFlow`)**

Reuse the patient journey from the home page. Add a **Clinician Data Flow** subsection explaining: SKIIN device → Bluetooth → smartphone app → encrypted cloud → Myant Virtual Clinic Portal (MVCP) → electronic medical record (EMR). Emphasise compliance and security: MDR Class IIa, ISO 13485, ISO/IEC 27001, GDPR & Swiss DPA. Explain clinician workflow (onboarding, real‑time monitoring with AI event detection and customisable alerts, analysis tools with automated reporting and trend analysis, report generation with one‑click summaries and integration with EMR/billing codes).

**4.2 Reimbursement Page (Component: `ReimbursementSection`)**

Explain the insurance pathways (Standard, Hausarztmodell/GP, HMO, Telmed) and self‑pay options. Include the pricing table and note that the 10‑Day Screening is recommended even for asymptomatic individuals seeking peace of mind. Clarify that GPs bill only for consultation/setup; cardiologists bill for interpretation.

**4.3 Technology Page (Component: `TechnologySection`)**

Replace the bullet outline with full narrative paragraphs:

* **Carbon‑Electrode Technology:** Flexible carbon‑fibre electrodes knitted into fabric create the first piece of textile designed to diagnose your heart. The band is soft, hypoallergenic and breathable, feeling like everyday clothing. It remains functional after ≥50 wash cycles and can be removed for showers or exercise.

* **Ambulatory Blood Pressure & Sleep Analysis:** A lightweight cuff measures blood pressure every 15–30 minutes by day and 30–60 minutes at night, detecting masked hypertension and nocturnal dipping. A sleep sensor tracks breathing patterns, heart‑rate variability and nocturnal blood‑pressure dips. Research shows that nocturnal arrhythmia prevalence rises from 53 % in people without sleep‑breathing disorders to 92 % in those with severe sleep apnoea.

* **AI Analysis with MediCalgorithmics:** Data flow securely from the device to the smartphone app, then to our ISO/IEC 27001‑certified cloud. MediCalgorithmics’ DeepRhythm Platform analyses every heartbeat using convolutional neural networks and transformer models. AI flags events, constructs event timelines and prioritises critical findings for cardiologist review. Swiss cardiologists provide final interpretations.

* **Security & Compliance:** SKIIN is an MDR Class IIa device registered with Swissmedic and certified under ISO 13485\. Our cloud infrastructure meets ISO/IEC 27001 standards and complies with GDPR and the Swiss Data Protection Act. All data are encrypted end‑to‑end (AES‑256) and stored in Swiss data centres.

* **Looking Ahead:** We envision preventing heart disease by monitoring the Silent Triad and chronic conditions over time. SKIIN 3X Screening™ is under development; sign up on our Vision page to be notified when it launches. Regular screening—even without symptoms—is the key to longevity and quality of life.

**Design notes:** Use a carousel with images representing each sensor (textile band, cuff, sleep sensor), the app and the cloud. Integrate the SKIIN vs Wearables comparison graphic (multimodality, continuous, passive, natural form factor vs single modality, episodic, obtrusive, artificial form factor) to illustrate SKIIN’s advantage.

**4.4 Clinical Evidence Page (Component: `EvidenceSection`)**

Provide summaries of key studies:

1. **Detection Superiority:** Extended monitoring detects arrhythmias in 66 % of patients vs 9 % with a 24‑hour Holter.

2. **Patient Comfort:** 93.7 % of patients prefer patch monitors over traditional Holters.

3. **Silent AF & Stroke Risk:** Up to 70 % of AF episodes are asymptomatic; AF causes 20–30 % of ischaemic strokes.

4. **ABPM Efficacy:** ABPM is the reference standard for diagnosing hypertension; it detects masked hypertension and nocturnal dipping.

5. **Sleep Apnoea & Arrhythmia:** Nocturnal arrhythmia prevalence increases dramatically with severe obstructive sleep apnoea.

6. **Durability:** Carbon‑fibre electrodes maintain ECG quality after ≥50 wash cycles.

Invite clinicians to request a full evidence dossier via a contact form. Use a simple layout with study titles, key findings and citations (tether IDs).

**4.5 FAQ Page (Component: `FaqSection`)**

Group questions into three categories:

* **Getting Started:** Eligibility, ordering, prescription requirements.

* **Wearing SKIIN:** Showering and exercising with the device, comfort for sensitive skin, ease of setup.

* **Results & Data:** Turnaround time, data privacy (who sees my data?), what happens if an issue is found. Include the CTA: “Still have questions? Contact us →”.

---

**5\. About Us**

**5.1 Company & Mission (Component: `CompanyPage`)**

Tell the founder’s story: Tony Chahine caring for his father inspired the vision of weaving health into textiles. Explain that Myant developed clinical‑grade textile sensors in Canada and acquired Nanoleq (ETH Zurich spin‑off) in 2024 to establish a Swiss R\&D hub. State the mission (“We empower people and their physicians to detect cardiac issues early by providing comfortable, continuous monitoring from home”) and vision (“We aim to reduce preventable cardiac events by 50 % in the next decade by making cardiac screening as routine as dental check‑ups”). List the values (Longevity & Compassion; Swiss Excellence; Local Partnership; Innovation with Purpose).

**5.2 Our Team & Medical Advisors (Component: `TeamPage`)**

Provide bios of key leaders and advisors. Include a quote from a Swiss cardiologist (“For active patients, SKIIN offers clinical‑grade monitoring without interrupting training or competition,” etc.). Use headshots and concise bios.

**5.3 Testimonials (Component: `TestimonialsPage`)**

Reuse the three patient stories from the home page and include extended versions or additional stories as they become available.

**5.4 Compliance & Legal (Component: `CompliancePage`)**

Summarise certifications (MDR Class IIa, Swissmedic registration, ISO 13485, ISO/IEC 27001), data protection (GDPR, Swiss DPA), insurance & billing guidelines and user rights. Provide standard privacy, medical and insurance notices.

**5.5 Contact (Component: `ContactPage`)**

List contact channels: phone numbers, email addresses (general enquiries, patient support, physician liaison, technical support, privacy), and response commitments (urgent medical support within 2–4 hours, general enquiries within one business day, technical and partnership enquiries within two business days).

**5.6 Support (Component: `SupportPage`)**

**Copy:** Provide a brief statement directing users to **support.skiin.ch**, where they can access troubleshooting guides, frequently asked questions and live chat support. Emphasise that all customer interactions are handled by Swiss‑based representatives.

**Design notes:** Keep this page simple. Use a headline (“Support”), a short paragraph describing the available resources and a prominent link or button to **support.skiin.ch**. Include contact icons and clarify that support is available in German, French and Italian.

---

**6\. Common UI & Terminology (Global Guidelines)**

While not a specific page, developers should maintain a glossary of terms and common UI elements to ensure consistency across translations and development. These definitions are part of the copy spec and must be respected throughout the website:

* **MDR Class IIa:** European medical device classification indicating SKIIN’s risk class and regulatory compliance. Use this term (not CE/BAG) when referring to the device’s certification.

* **Swissmedic Registered:** Registered with the Swiss authority responsible for authorising medical devices. Reference this badge in the hero section and product messaging.

* **Self‑Pay Packages:** 3‑day, 5‑day and 10‑day options available without a prescription. Emphasise that the 10‑day package provides the highest detection rate.

* **MVCP:** Myant Virtual Clinic Portal—a secure dashboard for clinicians. Always define the abbreviation on first use and avoid using the acronym alone.

* **Silent Triad:** The combination of arrhythmia, hypertension and sleep apnoea—often asymptomatic but dangerous when left undetected.

* **Eligibility/Free Assessment Form:** The primary conversion funnel where patients check their insurance coverage and request screening.

* **Study:** The monitoring period during which the patient wears the SKIIN devices (e.g., 3, 5 or 10 days).

Developers should also adhere to the brand’s translation strategy: use translation keys (`home.en.ts`, etc.) for all copy elements, ensure formal address (Sie/Vous/Lei) in non‑English languages and avoid altering the meaning or tone of this copy without CEO approval.

---

---

**7\. Additional Components & Assets**

**6.1 New Components Required**

1. **ProductSection** – 2×4 grid of benefit cards with icons.

2. **NumbersSection** – Four‑metric call‑out bar.

3. **RiskCardsSection** – Three risk cards summarising who needs screening.

4. **PricingSection** – Self‑pay pricing table with a note for asymptomatic users.

5. **Care360Section** – Split layout summarising continuous monitoring and AI analysis; could replace the MVCP section on the home page.

6. **TechCarousel** – Visual depiction of sensor→app→cloud→AI→cardiologist pipeline; optional but recommended.

7. **ComparisonGraphic** – Use the “SKIIN vs Wearables” image to compare natural, passive multimodal monitoring vs single‑modality, episodic devices. Place near the technology page or a comparison table.

**6.2 Design Considerations**

* Maintain the existing colour palette and typography for brand consistency.

* Use simple icons (e.g., heart, cuff, cloud, doctor) to illustrate benefits and processes.

* Ensure all sections are mobile‑responsive; consider stacking cards vertically on narrow screens.

* Provide alt text for images and ensure that language translation keys are available for each copy element.

---

**8\. Conclusion**

This UI component mapping transforms the CEO‑aligned Version 7.1 copy into actionable design directives. It identifies where existing components can be reused, where modifications are necessary and where new components must be created. By following this mapping, developers and designers can iterate on the current website to align with the latest messaging while preserving the established UI aesthetic and conversion flow.

