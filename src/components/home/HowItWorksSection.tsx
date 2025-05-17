
import React from "react";
import ConversionButton from "@/components/analytics/ConversionButton";

const HowItWorksSection = () => {
  const steps = [
    {
      number: "01",
      title: "Prescription",
      description: "Your healthcare provider prescribes SKIIN for continuous cardiac monitoring",
    },
    {
      number: "02",
      title: "Delivery",
      description: "Receive your SKIIN Smart Garment kit directly at your home",
      image: "/lovable-uploads/a94ae42b-2b12-49d8-a6af-965c9691535f.png"
    },
    {
      number: "03",
      title: "Wear",
      description: "Simply wear the comfortable garment as part of your daily routine",
    },
    {
      number: "04",
      title: "Monitor",
      description: "Your heart rhythm is continuously monitored and analyzed",
    },
    {
      number: "05",
      title: "Connect",
      description: "Data is securely shared with your healthcare provider in real-time",
      image: "/lovable-uploads/40ba1015-dfac-4b19-9548-8f3319ffe098.png"
    },
    {
      number: "06",
      title: "Results",
      description: "Get personalized insights and treatment recommendations",
    },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-medium">Simple Process</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
            How SKIIN Works
          </h2>
          <p className="text-lg text-muted-foreground">
            Designed to fit seamlessly into your life while providing clinical-grade cardiac monitoring
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
            Learn More About the Process
          </ConversionButton>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
