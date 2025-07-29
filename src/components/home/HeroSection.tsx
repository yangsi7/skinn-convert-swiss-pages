
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Link, useSearchParams } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTranslation } from "@/hooks/useTranslation";
import { useRouteTranslations } from "@/utils/routeTranslations";
import { Heart, Shield, CheckCircle, ArrowRight, FileText } from "lucide-react";

type HeroVariant = 'A' | 'B' | 'C';

/**
 * Enhanced HeroSection component with A/B testing support for v7.2 copy
 * Implements evidence-based messaging with three variants
 */
const HeroSection = () => {
  const { language } = useLanguage();
  const translations = useTranslation('home');
  const { getRoutePath } = useRouteTranslations();
  const [searchParams] = useSearchParams();
  
  // Get variant from URL parameter or default to A
  const [variant, setVariant] = useState<HeroVariant>('A');
  
  useEffect(() => {
    const urlVariant = searchParams.get('variant')?.toUpperCase() as HeroVariant;
    if (urlVariant && ['A', 'B', 'C'].includes(urlVariant)) {
      setVariant(urlVariant);
    }
  }, [searchParams]);
  
  // Get the appropriate variant content
  const variantKey = `variant${variant}` as 'variantA' | 'variantB' | 'variantC';
  const heroContent = translations.hero[variantKey] || translations.hero.variantA;
  
  // Hero image variants for A/B testing
  const heroImages = {
    A: '/assets/images/product/Mother-daughter-HQ.jpg',
    B: '/assets/images/32de0ca4-a556-4e60-bfaf-fc48bf4bd27c.png',
    C: '/assets/images/product/Mother-daughter-HQ.jpg' // Default to A for now
  };

  const currentHeroImage = heroImages[variant] || heroImages.A;

  return (
    <div className="relative min-h-[85vh] md:min-h-[90vh] flex items-center overflow-hidden">
      {/* Full-bleed background image */}
      <div className="absolute inset-0 z-0">
        <img
          src={currentHeroImage}
          alt="Lifestyle image showing comfort and trust"
          className="w-full h-full object-cover object-center"
        />
        {/* Semi-transparent overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40"></div>
      </div>

      {/* Content container */}
      <div className="container-custom relative z-10 pt-28 pb-16 md:pt-32 md:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Main Message */}
          <div className="space-y-8 animate-fade-in max-w-2xl">
            {/* Trust Badge - Updated for v7.2 */}
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline" className="bg-white/80 backdrop-blur-sm px-4 py-2">
                <Shield className="w-4 h-4 mr-2 text-medical-teal" />
                {translations.hero.badge}
              </Badge>
            </div>

            {/* Main Headline and Subheadlines - v7.2 Variants */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground">
                {heroContent.headline}
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground">
                {heroContent.subheadline}
              </p>
              <p className="text-base md:text-lg text-foreground font-medium italic">
                {heroContent.emotionalSubheadline}
              </p>
            </div>

            {/* Value Propositions - Updated to 10-day */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-medical-teal flex-shrink-0" />
                <span className="text-foreground">
                  {translations.hero.valueProps.comfort}
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-medical-teal flex-shrink-0" />
                <span className="text-foreground">
                  {translations.hero.valueProps.insurance}
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-medical-teal flex-shrink-0" />
                <span className="text-foreground">
                  {translations.hero.valueProps.lifestyle}
                </span>
              </div>
            </div>

            {/* v7.2 Standard CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to={getRoutePath('/assessment', language)}>
                <Button size="lg" variant="medical" className="px-8 w-full sm:w-auto">
                  <Heart className="w-5 h-5 mr-2" />
                  {translations.hero.cta.primary}
                </Button>
              </Link>
              <Link to={getRoutePath('/insurance', language)}>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-trust-blue text-trust-blue hover:bg-trust-blue/10 w-full sm:w-auto"
                >
                  <Shield className="w-5 h-5 mr-2" />
                  {translations.hero.cta.secondary}
                </Button>
              </Link>
            </div>
            
            {/* Tertiary CTA as text link */}
            <div className="mt-2">
              <Link 
                to={getRoutePath('/how-it-works/faq', language)}
                className="text-trust-blue hover:text-trust-blue-dark underline-offset-4 hover:underline inline-flex items-center gap-1"
              >
                {translations.hero.cta.tertiary}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Social Proof Line */}
            <div className="pt-4 border-t border-muted">
              <p className="text-sm text-muted-foreground">
                <strong className="text-medical-teal">
                  {translations.hero.socialProof.patients}
                </strong>
                {' '}{translations.hero.socialProof.patientsText}{' • '}
                <strong className="text-trust-blue">
                  {translations.hero.socialProof.compliance}
                </strong>
                {' '}{translations.hero.socialProof.complianceText}
              </p>
            </div>
          </div>

          {/* Right Column - Product Badge Overlay */}
          <div className="relative animate-slide-in flex justify-center lg:justify-end">
            {/* Product Badge */}
            <div className="relative">
              <img
                src="/assets/images/product/wear-skiin-man-band-insert-pod.png"
                alt="SKIIN heart monitoring device"
                className="w-full max-w-md h-auto drop-shadow-2xl"
                data-testid="hero-product-badge"
              />
              
              {/* Floating Stats Cards - Updated for v7.2 */}
              <Card className="absolute top-0 -left-8 bg-white/95 backdrop-blur-sm shadow-medical border-medical-teal/20">
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-medical-teal">{translations.hero.statsCards.monitoring.value}</div>
                  <div className="text-xs text-muted-foreground">
                    {translations.hero.statsCards.monitoring.label}
                  </div>
                </CardContent>
              </Card>

              <Card className="absolute bottom-8 -right-8 bg-white/95 backdrop-blur-sm shadow-trust border-trust-blue/20">
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-trust-blue">{translations.hero.statsCards.detection.value}</div>
                  <div className="text-xs text-muted-foreground">
                    {translations.hero.statsCards.detection.label}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Trust Bar */}
        <div className="mt-16 pt-8 border-t border-white/20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-sm text-foreground/80">
              {language === 'en' ? 'Trusted by leading Swiss healthcare institutions' : 
               language === 'fr' ? 'Approuvé par les principales institutions de santé suisses' : 
               language === 'it' ? 'Approvato dalle principali istituzioni sanitarie svizzere' :
               'Vertraut von führenden Schweizer Gesundheitseinrichtungen'}
            </p>
            <div className="flex items-center space-x-6">
              <div className="text-xs font-medium px-3 py-1 bg-white/10 backdrop-blur-sm rounded">
                {language === 'en' ? 'University Hospital' : 
                 language === 'fr' ? 'Hôpital Universitaire' : 
                 language === 'it' ? 'Ospedale Universitario' :
                 'Universitätsspital'}
              </div>
              <div className="text-xs font-medium px-3 py-1 bg-white/10 backdrop-blur-sm rounded">
                {language === 'en' ? 'Family Doctors' : 
                 language === 'fr' ? 'Médecins de Famille' : 
                 language === 'it' ? 'Medici di Famiglia' :
                 'Hausärzte'}
              </div>
              <div className="text-xs font-medium px-3 py-1 bg-white/10 backdrop-blur-sm rounded">
                {language === 'en' ? 'Cardiologists' : 
                 language === 'fr' ? 'Cardiologues' : 
                 language === 'it' ? 'Cardiologi' :
                 'Kardiologen'}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;