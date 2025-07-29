import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle2, Heart, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ComfortShowcaseProps {
  className?: string;
}

/**
 * Comfort Showcase Component
 * Features Maria's testimonial with comfort-focused messaging
 */
export function ComfortShowcase({ className }: ComfortShowcaseProps) {
  const comfortFeatures = [
    "No wires or adhesive patches",
    "Soft, breathable medical textile",
    "Machine washable and reusable",
    "Hypoallergenic for sensitive skin",
    "Wear during sleep and daily activities",
    "Water-resistant for showering"
  ];

  return (
    <section 
      className={cn("section-padding bg-gradient-to-b from-background to-secondary/5", className)}
      data-testid="comfort-showcase-section"
    >
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Visual and Testimonial */}
          <div className="space-y-6">
            <div className="relative">
              <img 
                src="/assets/images/1f227914-01f4-49cb-9a48-3f39976b4898.png"
                alt="Maria wearing SKIIN - comfort testimonial"
                className="rounded-2xl shadow-xl w-full"
                loading="lazy"
                data-testid="maria-comfort-image"
              />
              <Card className="absolute -bottom-6 -right-6 lg:-right-12 p-6 max-w-sm shadow-lg bg-white/95 backdrop-blur">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-full bg-medical-teal/10">
                    <Heart className="w-5 h-5 text-medical-teal" />
                  </div>
                  <div>
                    <p className="text-lg font-medium italic text-foreground mb-2">
                      "I almost forgot I was wearing it – so comfortable!"
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Maria, 58, Zurich
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Right: Content */}
          <div className="space-y-6">
            <div>
              <span className="text-medical-teal font-medium flex items-center gap-2 mb-4">
                <Sparkles className="w-4 h-4" />
                Comfort Redefined
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Your Second Skin for Heart Monitoring
              </h2>
              <p className="text-lg text-muted-foreground">
                Traditional heart monitors use sticky patches and tangled wires that irritate skin and disrupt sleep. 
                SKIIN changes everything with soft, textile-based monitoring that feels like your favorite underwear.
              </p>
            </div>

            {/* Comfort Features */}
            <div className="space-y-3">
              {comfortFeatures.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-medical-teal flex-shrink-0" />
                  <span className="text-foreground">{feature}</span>
                </div>
              ))}
            </div>

            {/* Sensitive Skin Focus */}
            <Card className="p-6 bg-medical-teal/5 border-medical-teal/20">
              <h3 className="font-semibold text-lg mb-2">Perfect for Sensitive Skin</h3>
              <p className="text-muted-foreground text-sm">
                Developed with dermatologists, SKIIN uses medical-grade textiles that are gentle on even the most 
                sensitive skin. No latex, no adhesives, no irritation – just comfortable, continuous monitoring.
              </p>
            </Card>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="default" 
                size="lg"
                onClick={() => window.location.href = '/about/contact'}
                data-testid="comfort-cta-primary"
              >
                Experience SKIIN Comfort
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => window.location.href = '/solutions/10-day-heart-screening'}
                data-testid="comfort-cta-secondary"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>

        {/* Additional Comfort Images */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="relative group overflow-hidden rounded-lg">
            <img 
              src="/assets/images/32de0ca4-a556-4e60-bfaf-fc48bf4bd27c.png"
              alt="Person comfortably wearing SKIIN band"
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="absolute bottom-4 left-4 text-white">
                <p className="text-sm font-medium">Daily Comfort</p>
              </div>
            </div>
          </div>
          
          <div className="relative group overflow-hidden rounded-lg">
            <img 
              src="/assets/images/product/skiin-kit.webp"
              alt="SKIIN complete kit"
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="absolute bottom-4 left-4 text-white">
                <p className="text-sm font-medium">Complete Kit</p>
              </div>
            </div>
          </div>

          <div className="relative group overflow-hidden rounded-lg">
            <img 
              src="/assets/images/product/visual-compar-skiin-medical-wearable.png"
              alt="SKIIN vs traditional monitors comparison"
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="absolute bottom-4 left-4 text-white">
                <p className="text-sm font-medium">Superior Comfort</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}