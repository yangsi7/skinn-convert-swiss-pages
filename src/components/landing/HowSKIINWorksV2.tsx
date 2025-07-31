import React from 'react';
import { cn } from '@/lib/utils';

interface HowSKIINWorksV2Props {
  className?: string;
}

export const HowSKIINWorksV2: React.FC<HowSKIINWorksV2Props> = ({ className }) => {
  const steps = [
    {
      number: 1,
      title: 'REFERRAL',
      description: 'Get a referral from your doctor or start with our eligibility check',
      image: '/assets/images/doctor-patient.jpeg'
    },
    {
      number: 2,
      title: 'DELIVERY',
      description: 'Receive your SKIIN kit at home within 48 hours',
      image: '/assets/images/product/skiin-holter-kit.png'
    },
    {
      number: 3,
      title: 'WEAR',
      description: 'Simply wear the comfortable band for 10 days',
      image: '/assets/images/product/wear-skiin-man-band-insert-pod.png'
    },
    {
      number: 4,
      title: 'MONITOR',
      description: 'Your heart data is transmitted in real-time',
      image: '/assets/images/app-live-ecg.png'
    },
    {
      number: 5,
      title: 'RESULTS',
      description: 'Receive your comprehensive report within 48 hours',
      image: '/assets/images/optimized/reports/medicalgorythmic-example-report-screenshot-1-full.png'
    }
  ];

  return (
    <section className={cn("py-20 bg-background", className)}>
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-wider text-muted-foreground mb-4">
            SIMPLE PROCESS
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            HOW SKIIN WORKS
          </h2>
        </div>

        {/* Steps */}
        <div className="relative max-w-6xl mx-auto">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-[100px] left-[10%] right-[10%] h-0.5 bg-muted-foreground/20" />
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <div key={step.number} className="relative text-center">
                {/* Number circle */}
                <div className="relative z-10 mx-auto w-20 h-20 mb-6">
                  <div className="absolute inset-0 bg-secondary-foreground rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">{step.number}</span>
                  </div>
                </div>

                {/* Image */}
                <div className="mb-4 bg-muted rounded-lg p-4 h-32 flex items-center justify-center">
                  <img 
                    src={step.image} 
                    alt={step.title}
                    className="h-full w-auto object-contain"
                  />
                </div>

                {/* Content */}
                <h3 className="font-semibold text-foreground mb-2 uppercase text-sm tracking-wide">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};