
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FaqSection = () => {
  const faqs = [
    {
      question: "How accurate is the ECG data from SKIIN?",
      answer:
        "SKIIN Smart Garments provide clinical-grade ECG data with accuracy comparable to traditional Holter monitors. Our technology has been validated in clinical studies and meets medical device regulatory requirements.",
    },
    {
      question: "How long can patients wear SKIIN garments?",
      answer:
        "SKIIN Smart Garments can be worn for up to 14 consecutive days, providing extended cardiac monitoring. The garments are designed to be comfortable enough for day and night wear, allowing for truly continuous monitoring.",
    },
    {
      question: "Are SKIIN garments covered by insurance?",
      answer:
        "Many insurance providers and healthcare systems cover SKIIN as a cardiac monitoring solution. Coverage varies by country and provider. We can help verify coverage for your specific situation through our reimbursement support team.",
    },
    {
      question: "How do patients get SKIIN Smart Garments?",
      answer:
        "SKIIN Smart Garments require a prescription from a healthcare provider. Once prescribed, the SKIIN kit is delivered directly to the patient's home with simple instructions for use and care.",
    },
    {
      question: "Can SKIIN detect all types of arrhythmias?",
      answer:
        "SKIIN is designed to detect a wide range of cardiac arrhythmias, including atrial fibrillation, bradycardia, tachycardia, and others. Our AI algorithms continuously analyze the ECG data to identify irregular patterns and alert healthcare providers when necessary.",
    },
    {
      question: "How is patient data protected?",
      answer:
        "SKIIN takes data security seriously. All patient data is encrypted both in transit and at rest. Our systems comply with GDPR, HIPAA, and other regional data protection regulations to ensure patient privacy.",
    },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom max-w-4xl">
        <div className="text-center mb-12">
          <span className="text-primary font-medium">FAQ</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground">
            Find answers to common questions about SKIIN Smart Garments
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left text-lg font-medium">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FaqSection;
