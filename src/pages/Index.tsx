
import React from 'react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTranslation } from "@/hooks/useTranslation";
import { Heart, Shield, ArrowRight, Play, CheckCircle } from "lucide-react";
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import FeaturesSection from '@/components/home/FeaturesSection';
import HowItWorksSection from '@/components/home/HowItWorksSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import ComparisonSection from '@/components/home/ComparisonSection';
import InsuranceSection from '@/components/home/InsuranceSection';
import CtaSection from '@/components/home/CtaSection';
import FaqSection from '@/components/home/FaqSection';
import ContactSection from '@/components/home/ContactSection';

/**
 * Enhanced Home page with clean, modern design matching the reference
 */
const Index = () => {
  const { language } = useLanguage();
  const translations = useTranslation('home');
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section - Redesigned */}
        <section className="pt-28 pb-16 md:pt-32 md:pb-24 bg-gradient-subtle overflow-hidden">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Column - Content */}
              <div className="space-y-8 animate-fade-in">
                {/* Trust Badges */}
                <div className="flex flex-wrap gap-3">
                  <Badge variant="outline" className="swiss-precision backdrop-blur-sm">
                    <Shield className="w-4 h-4 mr-2 text-medical-teal" />
                    {language === 'en' ? 'CE Medical Device' : language === 'fr' ? 'Dispositif Médical CE' : 'CE Medizinprodukt'}
                  </Badge>
                  <Badge variant="outline" className="swiss-precision backdrop-blur-sm">
                    <Heart className="w-4 h-4 mr-2 text-swiss-red" />
                    {language === 'en' ? 'Swiss Quality' : language === 'fr' ? 'Qualité Suisse' : 'Schweizer Qualität'}
                  </Badge>
                </div>

                {/* Main Headline */}
                <div className="space-y-6">
                  <h1 className="text-5xl md:text-7xl font-bold leading-tight text-foreground">
                    <span className="text-primary-charcoal">Continuous</span>
                    <br />
                    <span className="bg-gradient-trust bg-clip-text text-transparent">Cardiac</span>
                    <br />
                    <span className="text-primary-charcoal">Monitoring</span>
                  </h1>
                  <p className="text-xl md:text-2xl text-muted-foreground font-medium max-w-lg">
                    {language === 'en' ? 'SKIIN Smart Garments redefine comfort and compliance for better cardiac health insights.' : 
                     language === 'fr' ? 'Les vêtements intelligents SKIIN redéfinissent le confort et la conformité pour de meilleures perspectives de santé cardiaque.' : 
                     'SKIIN Smart Garments definieren Komfort und Compliance für bessere kardiale Gesundheitseinblicke neu.'}
                  </p>
                </div>

                {/* Value Propositions */}
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-medical-teal flex-shrink-0" />
                    <span className="text-foreground">
                      {language === 'en' ? '14 days of continuous monitoring without interruption' : 
                       language === 'fr' ? '14 jours de surveillance continue sans interruption' : 
                       '14 Tage kontinuierliche Überwachung ohne Unterbrechung'}
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-medical-teal flex-shrink-0" />
                    <span className="text-foreground">
                      {language === 'en' ? 'Covered by Swiss basic health insurance' : 
                       language === 'fr' ? 'Couvert par l\'assurance maladie de base suisse' : 
                       'Von der Schweizer Grundversicherung abgedeckt'}
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-medical-teal flex-shrink-0" />
                    <span className="text-foreground">
                      {language === 'en' ? 'Comfortable smart garment technology' : 
                       language === 'fr' ? 'Technologie de vêtements intelligents confortable' : 
                       'Komfortable Smart-Garment-Technologie'}
                    </span>
                  </div>
                </div>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button size="lg" variant="cta" className="px-8">
                    {language === 'en' ? 'Learn More' : language === 'fr' ? 'En savoir plus' : 'Mehr erfahren'}
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                  <Button size="lg" variant="outline">
                    <Play className="w-5 h-5 mr-2" />
                    {language === 'en' ? 'Watch Demo' : language === 'fr' ? 'Voir la démo' : 'Demo ansehen'}
                  </Button>
                </div>
              </div>

              {/* Right Column - Visual Design */}
              <div className="relative animate-slide-in">
                {/* Geometric Design inspired by the reference */}
                <div className="relative h-96 md:h-[500px]">
                  {/* Large Background Shape */}
                  <div className="absolute inset-0 bg-gradient-trust rounded-3xl transform rotate-6 opacity-20"></div>
                  <div className="absolute inset-4 bg-gradient-hero rounded-2xl transform -rotate-3 opacity-30"></div>
                  
                  {/* Main Content Card */}
                  <Card className="relative z-10 h-full swiss-precision">
                    <CardContent className="p-8 h-full flex flex-col justify-center">
                      <div className="text-center space-y-6">
                        <div className="w-24 h-24 mx-auto bg-gradient-trust rounded-full flex items-center justify-center">
                          <Heart className="w-12 h-12 text-white" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-foreground mb-2">
                            {language === 'en' ? '94% Compliance' : language === 'fr' ? '94% Conformité' : '94% Compliance'}
                          </h3>
                          <p className="text-muted-foreground">
                            {language === 'en' ? 'Highest patient adherence in cardiac monitoring' : 
                             language === 'fr' ? 'La plus haute adhésion des patients en surveillance cardiaque' : 
                             'Höchste Patientenadhärenz in der Herzüberwachung'}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="mt-16 pt-8 border-t border-muted">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <p className="text-sm text-muted-foreground">
                  {language === 'en' ? 'Trusted by leading Swiss healthcare providers' : 
                   language === 'fr' ? 'Approuvé par les principaux fournisseurs de soins de santé suisses' : 
                   'Vertraut von führenden Schweizer Gesundheitsanbietern'}
                </p>
                <div className="flex items-center space-x-6 opacity-60">
                  <div className="text-xs font-medium px-3 py-1 bg-muted rounded">
                    {language === 'en' ? 'University Hospitals' : language === 'fr' ? 'Hôpitaux Universitaires' : 'Universitätsspitäler'}
                  </div>
                  <div className="text-xs font-medium px-3 py-1 bg-muted rounded">
                    {language === 'en' ? 'Cardiologists' : language === 'fr' ? 'Cardiologues' : 'Kardiologen'}
                  </div>
                  <div className="text-xs font-medium px-3 py-1 bg-muted rounded">
                    {language === 'en' ? 'Family Doctors' : language === 'fr' ? 'Médecins de Famille' : 'Hausärzte'}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Existing Sections */}
        <FeaturesSection />
        <HowItWorksSection />
        <TestimonialsSection />
        <ComparisonSection />
        <InsuranceSection />
        <CtaSection />
        <FaqSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;