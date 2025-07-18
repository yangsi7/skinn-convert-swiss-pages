import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ProgressiveSection } from '@/components/ui/progressive-section';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { cn } from '@/lib/utils';
import { Award, Building2, Users, Microscope } from 'lucide-react';

export function SwissHeritage() {
  const [ref, isVisible] = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: true
  });

  const highlights = [
    {
      icon: Building2,
      title: "ETH Zurich Heritage",
      description: "Born from prestigious Swiss Federal Institute of Technology"
    },
    {
      icon: Award,
      title: "Swiss Precision",
      description: "Engineered with legendary Swiss quality standards"
    },
    {
      icon: Users,
      title: "European Leadership",
      description: "Serving Switzerland, Germany, and Austria"
    },
    {
      icon: Microscope,
      title: "Innovation Hub",
      description: "R&D center in the heart of Zurich"
    }
  ];

  return (
    <ProgressiveSection className="py-20 md:py-30 bg-gradient-to-br from-swiss-red/5 to-swiss-silver/5">
      <div className="container-custom">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-swiss-red text-swiss-red">
            Swiss Innovation
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Swiss Excellence, Global Impact
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Myant Europe, headquartered in Zurich, combines Swiss precision with 
            cutting-edge cardiac monitoring technology
          </p>
        </div>

        <div ref={ref} className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Story Content */}
          <div className={cn(
            "space-y-6 transition-all duration-1000",
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
          )}>
            <h3 className="text-3xl font-bold">From ETH Zurich to Global Innovation</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Nanoleq, a spin-off from the prestigious ETH Zurich, was founded with a vision 
              to revolutionize cardiac monitoring. Our Swiss roots run deep, bringing together 
              the nation's tradition of precision engineering with breakthrough medical technology.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              In 2023, Myant Corporation recognized our potential and acquired Nanoleq, 
              establishing Myant Europe as the center of excellence for cardiac monitoring 
              innovation in the DACH region.
            </p>
            
            {/* Highlights Grid */}
            <div className="grid sm:grid-cols-2 gap-4 mt-8">
              {highlights.map((highlight, index) => (
                <div
                  key={index}
                  className={cn(
                    "flex items-start space-x-3 transition-all duration-700",
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  )}
                  style={{ transitionDelay: `${300 + index * 100}ms` }}
                >
                  <div className="w-10 h-10 bg-swiss-red/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <highlight.icon className="w-5 h-5 text-swiss-red" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">{highlight.title}</h4>
                    <p className="text-sm text-muted-foreground">{highlight.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Leadership Photo */}
          <div className={cn(
            "transition-all duration-1000",
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
          )} style={{ transitionDelay: "400ms" }}>
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <img 
                  src="/assets/images/team/Team-CH.jpg"
                  alt="Nanoleq Founders - Vincent Martinez, Flurin Stauffer, and Serge Weydert"
                  className="w-full h-auto"
                />
              </CardContent>
            </Card>
            <p className="text-center text-sm text-muted-foreground mt-4">
              Nanoleq Founders: Vincent Martinez, Flurin Stauffer, and Serge Weydert
            </p>
          </div>
        </div>

        {/* Swiss Cross Symbol */}
        <div className="flex justify-center my-16">
          <div className="w-24 h-24 bg-swiss-red rounded-lg flex items-center justify-center">
            <div className="w-16 h-16 relative">
              <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-4 bg-white"></div>
              <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-4 bg-white"></div>
            </div>
          </div>
        </div>

        {/* Location Emphasis */}
        <div className={cn(
          "text-center transition-all duration-1000",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )} style={{ transitionDelay: "600ms" }}>
          <h3 className="text-2xl font-bold mb-4">Proudly Based in Zurich</h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our headquarters in the heart of Switzerland positions us at the intersection 
            of medical innovation, regulatory excellence, and access to world-class talent.
          </p>
        </div>
      </div>
    </ProgressiveSection>
  );
}