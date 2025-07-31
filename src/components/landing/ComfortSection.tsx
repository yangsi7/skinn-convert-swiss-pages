import React from 'react';
import { Check, Heart, Feather, Shield } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ComfortFeature {
  icon: React.ElementType;
  title: string;
  description: string;
}

const features: ComfortFeature[] = [
  {
    icon: Feather,
    title: "Ultra-Soft Fabric",
    description: "Medical-grade textile that feels like your softest t-shirt"
  },
  {
    icon: Shield,
    title: "Hypoallergenic",
    description: "Dermatologically tested for sensitive skin"
  },
  {
    icon: Heart,
    title: "Breathable Design",
    description: "Moisture-wicking technology keeps you comfortable 24/7"
  }
];

export const ComfortSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-lp-cream" />
      
      <div className="relative container mx-auto px-6 py-20 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-lp-dark-blue mb-4">
                Comfort meets
                <span className="block text-lp-primary-blue">clinical grade</span>
              </h2>
              <p className="text-lg text-lp-charcoal">
                Designed for continuous wear without compromising on accuracy. 
                Our patented textile technology ensures medical-grade monitoring 
                while feeling like your everyday clothing.
              </p>
            </div>

            {/* Features */}
            <div className="space-y-6">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="flex items-start space-x-4 group">
                    <div className="flex-shrink-0 w-12 h-12 bg-white rounded-lg shadow-sm flex items-center justify-center group-hover:shadow-md transition-shadow">
                      <Icon className="w-6 h-6 text-lp-primary-blue" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lp-dark-blue mb-1">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-lp-charcoal">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Certification Badge */}
            <div className="flex items-center space-x-3 pt-4">
              <div className="flex items-center space-x-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-sm">
                <Check className="w-5 h-5 text-green-600" />
                <span className="text-sm font-medium text-lp-dark-blue">
                  Dermatologically Tested
                </span>
              </div>
              <div className="flex items-center space-x-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-sm">
                <Check className="w-5 h-5 text-green-600" />
                <span className="text-sm font-medium text-lp-dark-blue">
                  CE Certified
                </span>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            {/* Main Image Container */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/assets/images/woman-wearing-skiin-vertical.jpeg"
                alt="Woman wearing SKIIN device comfortably"
                className="w-full h-auto"
                loading="lazy"
              />
              
              {/* Overlay Card */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-lp-dark-blue">
                      Wear Time
                    </p>
                    <p className="text-2xl font-bold text-lp-primary-blue">
                      10 Days
                    </p>
                  </div>
                  <div className="h-12 w-px bg-gray-200" />
                  <div>
                    <p className="text-sm font-medium text-lp-dark-blue">
                      Battery Life
                    </p>
                    <p className="text-2xl font-bold text-lp-primary-blue">
                      14+ Days
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-lp-primary-blue/10 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-lp-cream rounded-full blur-3xl" />
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-lg font-medium text-lp-dark-blue mb-4">
            Experience the difference of medical technology designed for real life
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-lp-primary-blue text-white rounded-lg hover:bg-lp-dark-blue transition-colors">
              Learn More About Comfort
            </button>
            <button className="px-8 py-3 border-2 border-lp-primary-blue text-lp-primary-blue rounded-lg hover:bg-lp-primary-blue hover:text-white transition-colors">
              View Specifications
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};