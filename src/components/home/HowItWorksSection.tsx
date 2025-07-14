
import React from "react";
import ConversionButton from "@/components/analytics/ConversionButton";
import { useTranslation } from "@/hooks/useTranslation";

const HowItWorksSection = () => {
  const translations = useTranslation('home');
  
  const steps = translations.howItWorks.steps.map((step, index) => ({
    ...step,
    // Add images to specific steps
    ...(index === 1 && { image: "/lovable-uploads/a94ae42b-2b12-49d8-a6af-965c9691535f.png" }),
    ...(index === 2 && { image: "/lovable-uploads/40ba1015-dfac-4b19-9548-8f3319ffe098.png" })
  }));

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-medium">{translations.howItWorks.tagline}</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
            {translations.howItWorks.title}
          </h2>
          <p className="text-lg text-muted-foreground">
            {translations.howItWorks.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-12">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {step.image ? (
                <div className="mb-6 rounded-xl overflow-hidden">
                  <img src={step.image} alt={step.title} className="w-full h-auto object-cover" />
                </div>
              ) : (
                <div className="mb-6 h-48 bg-myant-gray rounded-xl flex items-center justify-center">
                  <span className="text-5xl font-bold text-myant-green opacity-30">{step.number}</span>
                </div>
              )}
              <h3 className="text-xl font-semibold mb-2 flex items-center">
                <span className="text-primary mr-2">{step.number}</span> {step.title}
              </h3>
              <p className="text-muted-foreground">{step.description}</p>
              
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-24 -right-5 w-10 border-t-2 border-dashed border-myant-green opacity-30"></div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center">
          <ConversionButton 
            size="lg" 
            className="bg-myant-green hover:bg-myant-darkgreen"
            eventName="learn_more_process"
            eventParams={{ section: "how_it_works", page: "home" }}
          >
            {translations.howItWorks.cta}
          </ConversionButton>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
