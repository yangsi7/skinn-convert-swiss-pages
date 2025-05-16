
import React from "react";
import { Heart, Clock, Activity, Shield, Flower, Link } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: <Heart className="w-6 h-6 text-primary" />,
      title: "Continuous ECG",
      description: "Clinical-grade ECG monitoring for up to 14 days without interruption",
    },
    {
      icon: <Shield className="w-6 h-6 text-primary" />,
      title: "Comfortable Design",
      description: "Soft, breathable fabric with invisible sensors – no wires or adhesives",
    },
    {
      icon: <Activity className="w-6 h-6 text-primary" />,
      title: "Arrhythmia Detection",
      description: "Advanced algorithms to detect and alert on irregular heartbeats",
    },
    {
      icon: <Clock className="w-6 h-6 text-primary" />,
      title: "Real-time Analysis",
      description: "Instant data transmission to physicians for timely intervention",
    },
    {
      icon: <Flower className="w-6 h-6 text-primary" />,
      title: "Everyday Usability",
      description: "Washable, reusable, and designed to be part of daily life",
    },
    {
      icon: <Link className="w-6 h-6 text-primary" />,
      title: "Doctor Connected",
      description: "Seamlessly integrated with clinical workflows and EHR systems",
    },
  ];

  return (
    <section className="section-padding bg-myant-lightgreen">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            A New Standard in Cardiac Monitoring
          </h2>
          <p className="text-lg text-muted-foreground">
            SKIIN combines breakthrough textile computing with clinical expertise to deliver
            unparalleled cardiac care
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="bg-secondary/50 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
