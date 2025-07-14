
import React, { useEffect, useRef } from "react";
import { Heart, Clock, Activity, Shield, Smartphone, Database } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";

/**
 * Premium FeaturesSection with Apple-level animations and medical aesthetics
 */
const FeaturesSection = () => {
  const translations = useTranslation('home');
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
  
  // Premium icons with gradient backgrounds
  const featureData = [
    {
      icon: Heart,
      gradient: "from-coral-400 to-coral-600",
      title: "Klinisch präzise",
      description: "SKIIN's Textilsensoren erfassen 3-Kanal-EKG-Signale mit klinischer Präzision – validiert gegen traditionelle Holter-Monitore."
    },
    {
      icon: Shield,
      gradient: "from-teal-500 to-teal-700",
      title: "Von Krankenkasse übernommen",
      description: "Bei ärztlicher Verordnung übernimmt die Schweizer Grundversicherung die Kosten – genau wie bei einem normalen Holter."
    },
    {
      icon: Activity,
      gradient: "from-navy-600 to-navy-800",
      title: "Ohne Kabel oder Pflaster",
      description: "Weiches, atmungsaktives Textilband das Sie unter Ihrer Kleidung tragen. Kein Juckreiz oder Hautirritationen."
    },
    {
      icon: Clock,
      gradient: "from-gold-500 to-gold-600",
      title: "14 Tage = Höhere Entdeckungsrate",
      description: "Kontinuierliche Aufzeichnung für bis zu zwei Wochen erkennt intermittierende Arrhythmien, die 24h-Tests verpassen."
    },
    {
      icon: Smartphone,
      gradient: "from-teal-600 to-navy-700",
      title: "Von zu Hause aus",
      description: "Überspringen Sie das Wartezimmer – jederzeit von zu Hause testen. Einfache App synchronisiert Ihre Daten sicher."
    },
    {
      icon: Database,
      gradient: "from-navy-700 to-teal-600",
      title: "94% Patienten-Compliance",
      description: "Dank außergewöhnlichem Komfort tragen Patienten SKIIN zuverlässig – für vollständige Daten und bessere Diagnosen."
    }
  ];

  return (
    <section ref={sectionRef} className="relative py-32 bg-white overflow-hidden">
      {/* Premium background pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-mesh opacity-5" />
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-navy-200 to-transparent" />
      </div>
      
      <div className="container-custom relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20 animate-on-scroll opacity-0 animate-fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass swiss-quality mb-6">
            <Activity className="w-4 h-4 text-teal-600 animate-pulse-soft" />
            <span className="text-sm font-medium text-navy-800">
              Advanced Features
            </span>
          </div>
          <h2 className="text-display font-bold text-navy-900 mb-6">
            <span className="block">Die SKIIN Vorteile</span>
            <span className="block text-gradient-reverse">für Schweizer Patienten</span>
          </h2>
          <p className="text-xl text-navy-700 leading-relaxed">
            Endlich eine Herzüberwachung, die Sie gerne tragen – mit Schweizer Präzision und Komfort
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featureData.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group animate-on-scroll opacity-0 animate-fade-up"
                style={{ animationDelay: `${(index + 1) * 100}ms` }}
              >
                <div className="relative h-full">
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-teal-400/0 to-navy-600/0 group-hover:from-teal-400/10 group-hover:to-navy-600/10 rounded-3xl blur-xl transition-all duration-500" />
                  
                  <div className="relative glass rounded-3xl p-8 h-full shadow-premium hover-lift transition-all duration-300">
                    {/* Icon with gradient background */}
                    <div className="mb-6 relative">
                      <div className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center shadow-medical group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      {/* Shimmer effect */}
                      <div className="absolute inset-0 rounded-2xl overflow-hidden">
                        <div className="absolute inset-0 bg-shimmer animate-shimmer" />
                      </div>
                    </div>
                    
                    {/* Content */}
                    <h3 className="text-xl font-bold text-navy-900 mb-3 group-hover:text-gradient transition-all duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-navy-700 leading-relaxed">
                      {feature.description}
                    </p>
                    
                    {/* Learn more link (subtle) */}
                    <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-sm font-medium text-teal-600 flex items-center gap-1">
                        Learn more
                        <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
