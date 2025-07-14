export const enHowItWorksTranslations = {
  title: "How It Works",
  hero: {
    headline: "How Does SKIIN Work?",
    subtitle: "From the smart garment on the patient to the data on your screen, learn about the journey of an ECG signal through the SKIIN Holter Monitoring Service."
  },
  intro: "It's a combination of hardware, software, and service that ensures a seamless experience.",
  steps: {
    title: "Step-by-Step Walkthrough",
    step1: {
      title: "1. Prescription & Enrollment",
      description: "It starts with a medical decision – a doctor determines long-term ECG monitoring is needed. They choose SKIIN instead of a conventional Holter. The patient's details are entered into our secure system and a SKIIN kit is assigned. This can happen in a clinic visit or via an e-health request. Each kit has a unique ID to tie the data to the patient securely (no personal data is stored on the device itself, only the ID).",
      note: "If a patient comes via our website, we connect them with a partner physician who can authorize the monitoring."
    },
    step2: {
      title: "2. Device Setup",
      description: "The patient receives the SKIIN device. This includes the textile chest band and a small clip-on sensor module. The patient (with guidance from a nurse or via instructions) downloads the SKIIN app (available for iOS/Android) and pairs it with the sensor via Bluetooth.",
      setup: "Once paired, the app runs a quick test to ensure the ECG signal is being captured correctly (the patient might be asked to sit still for a minute during calibration).",
      operation: "The app will then run in the background, requiring no further interaction, except to notify the patient if the sensor is out of range or needs charging.",
      charging: "Charging: The sensor's battery lasts about 3 days on a charge – the patient is instructed to recharge it for 30 minutes every few days (the app will alert when battery is low, ideally at a convenient time). This ensures continuous data capture."
    },
    step3: {
      title: "3. Monitoring Period",
      description: "For the next 14 days (or the prescribed duration), the patient simply wears the SKIIN garment throughout the day and night. They can take it off briefly for showers or as needed, but should wear it as consistently as possible. The garment is washable (we provide two garments in the kit so one can be washed while the other is worn, if needed).",
      recording: "The sensor continuously records a three-lead ECG (covering leads similar to I, II, III) and measures movements and position (using an accelerometer and other sensors).",
      dataSync: "The mobile app securely transmits data to the SKIIN cloud platform whenever the phone is connected to the internet. If the phone is offline (say the patient is out of coverage), data buffers on the sensor and phone until connection is restored.",
      dataVolume: "Data Volume: Over 14 days, a huge amount of data (~ gigabytes of ECG signals) can be recorded – the SKIIN system handles this by compressing and chunking data uploads efficiently. The patient doesn't have to worry about any of this – it's all automatic.",
      symptoms: "If the patient feels a notable symptom (e.g., palpitations or chest flutter), they can press a \"Mark Symptom\" button in the app and optionally type what they felt. This creates a timestamp for the event, which will appear in the clinician's report."
    },
    step4: {
      title: "4. Cloud Analysis",
      description: "Once the data reaches our secure cloud, analysis begins almost in real-time. SKIIN uses a machine learning-based arrhythmia detection algorithm, refined and validated on large ECG datasets, to scan the incoming data for irregular patterns.",
      detection: "This algorithm can identify episodes of atrial fibrillation, pauses, tachycardias, ectopic beats, and more. It's designed to minimize false alarms while catching even brief episodes.",
      analysis: "Suspected events are flagged. For long-term studies, our system can also compile heart rate trends, daily patterns, and activity correlation (e.g., showing if an arrhythmia happened during exercise vs at rest).",
      alerts: "Throughout the monitoring, if any critical arrhythmia is detected (for example, a run of ventricular tachycardia, or high-grade AV block), the system can generate an immediate alert to the medical team (depending on configured protocols). Typically, an alert would be reviewed by a SKIIN cardiac technician who then contacts the physician on record if needed. This ensures urgent findings aren't missed in case they occur early in the monitoring period."
    },
    step5: {
      title: "5. Report Generation",
      description: "After the monitoring period ends, a comprehensive report is finalized. This report includes:",
      includes: {
        summary: "A summary page with key findings (e.g., 'AF detected: Yes – total duration 3 hours, longest episode 5 min'; 'Max HR: 140 bpm; Min HR: 45 bpm'; '# of pauses >2s: 2', etc).",
        trends: "Daily heart rate trend graphs.",
        events: "A table of all significant events (with times and heart rates).",
        strips: "Example ECG strips for representative events (with annotations).",
        symptoms: "Any symptoms noted by patient correlated with heart rhythm at that time.",
        interpretation: "An interpretation or conclusion section (which can be written by a certified cardiac technician or left for the physician to fill, depending on service model)."
      },
      format: "The report format is designed to resemble the familiar Holter reports physicians already know, just with more data. It's delivered as a PDF via our secure portal, and optionally, the raw data or annotated full disclosure can be accessed."
    },
    step6: {
      title: "6. Follow-Up",
      description: "The physician reviews the report with the patient. If arrhythmias were found, appropriate treatment or further diagnostics are planned. If results are normal, the patient has peace of mind.",
      support: "SKIIN's service doesn't end at the report – we collect feedback from physicians and patients to continuously improve. If a physician needs assistance interpreting something or wants a second opinion, our medical advisory team is available. We also handle the sanitization and reset of returned devices, preparing them for the next patient with strict hygiene protocols.",
      reuse: "Since SKIIN devices are reusable hardware, after each use they are thoroughly cleaned, checked, and the next patient gets a fresh garment. Patients do not keep the device; it's a service, not a consumer gadget."
    }
  },
  security: {
    title: "Security & Privacy",
    description: "Throughout the process, data security and patient privacy are paramount. All communications are encrypted (HIPAA/GDPR-grade encryption). Only authorized personnel (your treating doctors and our system technicians) can view the raw data. The patient's identity is protected – the cloud analysis mainly uses device IDs; the link to personal info is kept secure in our database. The system complies with Swiss data protection laws and does not share data with any third parties without consent."
  },
  summary: {
    title: "Summary",
    description: "In short, SKIIN Holter Monitoring Service modernizes a well-known cardiac test by leveraging wearable tech and cloud AI analysis. It preserves what matters (accurate ECG readings) and removes what doesn't (patient discomfort, limited data). The result is a smoother experience for patients and more actionable information for physicians.",
    evidenceLink: "Curious about how SKIIN has performed in trials and real cases? Check out",
    evidenceLinkText: "Evidence",
    evidenceLinkSuffix: "for clinical data and success stories."
  }
};