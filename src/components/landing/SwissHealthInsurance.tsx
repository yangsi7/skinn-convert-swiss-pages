import React from 'react';
import { cn } from '@/lib/utils';

interface SwissHealthInsuranceProps {
  className?: string;
}

export const SwissHealthInsurance: React.FC<SwissHealthInsuranceProps> = ({ className }) => {
  const features = [
    '100% coverage through basic insurance',
    'No out-of-pocket costs for qualifying users',
    'Direct billing support',
    'Reimbursement assistance available'
  ];

  return (
    <section className={cn("py-20 bg-muted", className)}>
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Covered by Swiss Health<br />
              Insurance
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Skiin is reimbursed under basic Swiss insurance when medically prescribed with no extra cost for eligible patients.
            </p>
          </div>

          {/* Right Side - Image with Feature Card */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-xl">
              <img
                src="/assets/images/woman-wearing-skiin-vertical.jpeg"
                alt="Woman wearing SKIIN device"
                className="w-full h-auto object-cover"
                style={{ height: '500px', objectPosition: 'center 20%' }}
                loading="lazy"
                decoding="async"
              />
              {/* Blue overlay for image tone to match mockup */}
              <div className="absolute inset-0 bg-primary/20" />
            </div>
            
            {/* Feature Card Overlay */}
            <div className="absolute bottom-8 right-8 bg-secondary rounded-xl p-6 max-w-xs shadow-lg">
              <h3 className="font-semibold text-foreground mb-4">What's included:</h3>
              <ul className="space-y-3">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-5 h-5 rounded-full bg-primary flex-shrink-0 mt-0.5" />
                    <span className="ml-3 text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Insurance Logos */}
        <div className="mt-16 py-8">
          <div className="text-center mb-6">
            <p className="text-sm text-muted-foreground uppercase tracking-wider">Trusted by major Swiss insurers</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm">
              <span className="text-foreground font-semibold text-xl">SWICA</span>
            </div>
            <div className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm">
              <span className="text-foreground font-semibold text-xl">CSS</span>
            </div>
            <div className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm">
              <span className="text-foreground font-semibold text-xl">Helsana</span>
            </div>
            <div className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm">
              <span className="text-foreground font-semibold text-xl">Concordia</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};