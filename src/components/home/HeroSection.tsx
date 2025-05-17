
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTranslation } from "@/hooks/useTranslation";

const HeroSection = () => {
  const { language } = useLanguage();
  
  const buttonTexts = useTranslation(
    { forPatients: "For Patients", forPhysicians: "For Physicians" },
    { forPatients: "Für Patienten", forPhysicians: "Für Ärzte" },
    { forPatients: "Pour les Patients", forPhysicians: "Pour les Médecins" }
  );
  
  // Get the correct path based on language
  const getPhysiciansPath = () => {
    switch(language) {
      case 'de':
        return '/de/arzt';
      case 'fr':
        return '/fr/medecin';
      default:
        return '/physicians';
    }
  };

  return (
    <div className="pt-28 pb-16 md:pt-32 md:pb-24">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-foreground text-balance">
              Continuous Cardiac Monitoring{" "}
              <span className="text-primary">Without Compromising Comfort</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-lg">
              SKIIN Smart Garments are revolutionizing how we monitor and manage heart health, providing clinical-grade ECG without wires, adhesives, or discomfort.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-myant-green hover:bg-myant-darkgreen">
                {buttonTexts.forPatients}
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-myant-green text-myant-green hover:bg-myant-lightgreen"
                asChild
              >
                <Link to={getPhysiciansPath()}>
                  {buttonTexts.forPhysicians}
                </Link>
              </Button>
            </div>
            <div className="pt-4">
              <div className="flex items-center space-x-4">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-blue-100 border border-white flex items-center justify-center text-xs font-medium">CE</div>
                  <div className="w-8 h-8 rounded-full bg-blue-100 border border-white flex items-center justify-center text-xs font-medium">MD</div>
                  <div className="w-8 h-8 rounded-full bg-blue-100 border border-white flex items-center justify-center text-xs font-medium">HD</div>
                </div>
                <p className="text-sm text-muted-foreground">
                  Certified medical device, clinically tested and validated
                </p>
              </div>
            </div>
          </div>

          <div className="relative animate-slide-in">
            <div className="bg-myant-lightgreen rounded-2xl p-6 relative z-10">
              <img
                src="/lovable-uploads/1f227914-01f4-49cb-9a48-3f39976b4898.png"
                alt="SKIIN Smart Garment worn by model"
                className="w-full h-auto rounded-xl"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-white rounded-lg p-4 shadow-lg max-w-xs">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 p-1 bg-green-100 rounded-full">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M8 1L10 5L14 6L11 9L12 13L8 11L4 13L5 9L2 6L6 5L8 1Z" fill="#2A7D71" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium">
                    "Finally, cardiac monitoring that my patients actually want to wear!"
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Dr. Sarah Klein, Cardiologist
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
