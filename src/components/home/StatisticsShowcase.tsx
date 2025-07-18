import React from 'react';
import { ScrollRevealStatistic } from '@/components/ui/scroll-reveal-statistic';
import { ProgressiveSection } from '@/components/ui/progressive-section';

export function StatisticsShowcase() {
  const statistics = [
    {
      value: "95%",
      label: "Detection Accuracy",
      description: "Industry-leading arrhythmia detection powered by AI"
    },
    {
      value: "14",
      label: "Days Continuous Monitoring",
      description: "Extended monitoring for comprehensive cardiac insights"
    },
    {
      value: "100%",
      label: "Insurance Coverage",
      description: "Fully covered by Swiss health insurance providers"
    },
    {
      value: "24/7",
      label: "Real-Time Analysis",
      description: "Continuous ECG monitoring with instant alerts"
    }
  ];

  return (
    <ProgressiveSection className="py-20 md:py-30 bg-gradient-to-br from-primary/5 to-medical-teal/5">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            SKIIN by the Numbers
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Trusted by thousands of patients and healthcare providers across Switzerland
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {statistics.map((stat, index) => (
            <ScrollRevealStatistic
              key={index}
              value={stat.value}
              label={stat.label}
              description={stat.description}
              delay={index * 200}
            />
          ))}
        </div>
      </div>
    </ProgressiveSection>
  );
}