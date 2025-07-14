
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "@/hooks/useTranslation";
import { ArrowRight, Heart, Activity, Shield, ChevronRight } from "lucide-react";

/**
 * Premium CTA Section with dramatic impact
 */
const CtaSection = () => {
  const translations = useTranslation('home');
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('cta-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);
  
  return (
    <section id="cta-section" className="relative py-32 gradient-premium overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-mesh opacity-20" />
        <div className="absolute inset-0 bg-hero-pattern opacity-[0.02]" />
        
        {/* Floating orbs */}
        <div className="absolute top-20 left-20 w-64 h-64 bg-teal-400/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-float delay-200" />
      </div>
      
      {/* Animated ECG line */}
      <svg className="absolute top-1/2 left-0 w-full h-64 -translate-y-1/2 opacity-10" viewBox="0 0 1200 200">
        <path
          d="M0,100 L200,100 L220,60 L240,140 L260,20 L280,180 L300,100 L1200,100"
          stroke="white"
          strokeWidth="2"
          fill="none"
          className="animate-ecg-line"
          strokeDasharray="1000"
        />
      </svg>
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className={`space-y-8 animate-in ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
            {/* Trust badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-dark swiss-quality">
              <Shield className="w-4 h-4 text-teal-400" />
              <span className="text-sm font-medium text-white/90">
                Join Leading Swiss Healthcare Providers
              </span>
            </div>
            
            <h2 className="text-hero font-bold text-white">
              <span className="block">Bereit für die Zukunft der</span>
              <span className="block bg-gradient-to-r from-teal-300 to-teal-100 bg-clip-text text-transparent">
                Herzüberwachung?
              </span>
            </h2>
            
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-xl">
              Ob Sie ein Patient sind oder ein Arzt – SKIIN ist bereit, die Herzversorgung in der Schweiz zu verbessern.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="group bg-white text-navy-900 hover:bg-teal-50 px-8 py-6 text-lg font-medium shadow-premium hover-lift"
              >
                Jetzt beginnen
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="group border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm px-8 py-6 text-lg font-medium hover-lift"
              >
                Demo vereinbaren
                <Heart className="ml-2 h-5 w-5 text-teal-300 transition-transform group-hover:scale-110" />
              </Button>
            </div>
            
            {/* Stats */}
            <div className="flex items-center gap-8 pt-4">
              <div>
                <div className="text-3xl font-bold text-white">14 Tage</div>
                <div className="text-sm text-white/70">Kontinuierliche Überwachung</div>
              </div>
              <div className="h-12 w-px bg-white/20" />
              <div>
                <div className="text-3xl font-bold text-white">94%</div>
                <div className="text-sm text-white/70">Patienten-Compliance</div>
              </div>
              <div className="h-12 w-px bg-white/20" />
              <div>
                <div className="text-3xl font-bold text-white">KK</div>
                <div className="text-sm text-white/70">Versichert</div>
              </div>
            </div>
          </div>
          
          <div className={`relative animate-in delay-200 ${isVisible ? 'animate-scale-in' : 'opacity-0 scale-95'}`}>
            {/* Main device showcase */}
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-radial from-teal-400/30 to-transparent blur-3xl" />
              
              {/* Glass card container */}
              <div className="relative glass-dark rounded-3xl p-8 shadow-premium">
                {/* Floating elements */}
                <div className="absolute -top-6 -right-6 glass-dark rounded-2xl p-4 shadow-premium animate-float">
                  <Activity className="w-8 h-8 text-teal-400" />
                </div>
                
                {/* Main image */}
                <img 
                  src="/lovable-uploads/32de0ca4-a556-4e60-bfaf-fc48bf4bd27c.png" 
                  alt="SKIIN Smart Textile ECG Monitor" 
                  className="w-full h-auto rounded-2xl relative z-10"
                />
                
                {/* Live data visualization overlay */}
                <div className="absolute top-8 left-8 glass-dark rounded-xl p-4 shadow-premium animate-float delay-300">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <div className="w-12 h-12 bg-gradient-to-br from-teal-400 to-teal-600 rounded-lg flex items-center justify-center">
                        <Heart className="w-6 h-6 text-white animate-pulse-soft" />
                      </div>
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 uppercase tracking-wider">Live ECG</p>
                      <p className="text-2xl font-bold text-white">Normaler Sinus</p>
                    </div>
                  </div>
                  
                  {/* Mini ECG wave */}
                  <svg className="w-full h-12 mt-3" viewBox="0 0 200 50">
                    <path
                      d="M0,25 L40,25 L45,15 L50,35 L55,5 L60,45 L65,25 L200,25"
                      stroke="#5EEAD4"
                      strokeWidth="2"
                      fill="none"
                      className="animate-ecg-line"
                    />
                  </svg>
                </div>
                
                {/* Success metric */}
                <div className="absolute bottom-8 right-8 glass-dark rounded-xl p-6 shadow-premium backdrop-blur-xl">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-teal-400 mb-1">98%</div>
                    <p className="text-sm text-white/80">Patientenzufriedenheit</p>
                    <div className="flex gap-1 mt-2 justify-center">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className="w-1.5 h-8 bg-teal-400/30 rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-to-t from-teal-400 to-teal-300" style={{height: `${i < 4 ? '100%' : '80%'}`}} />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
