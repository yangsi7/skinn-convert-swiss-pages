
import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTranslation } from "@/hooks/useTranslation";
import { useRouteTranslations } from "@/utils/routeTranslations";
import { Heart, Shield, CheckCircle, ArrowRight, Play } from "lucide-react";

/**
 * Enhanced HeroSection component for patient-focused landing page
 * Implements the comprehensive strategy with emotional hook, credibility, and clear CTAs
 */
const HeroSection = () => {
  const { language } = useLanguage();
  const translations = useTranslation('home');
  const { getRoutePath } = useRouteTranslations();
  
  return (
    <div className="pt-28 pb-16 md:pt-32 md:pb-24 bg-gradient-subtle">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Main Message */}
          <div className="space-y-8 animate-fade-in">
            {/* Trust Badges */}
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline" className="swiss-precision backdrop-blur-sm">
                <Shield className="w-4 h-4 mr-2 text-medical-teal" />
                {language === 'en' ? 'CE Medical Device' : language === 'fr' ? 'Dispositif Médical CE' : 'CE Medizinprodukt'}
              </Badge>
              <Badge variant="outline" className="swiss-precision backdrop-blur-sm">
                <Heart className="w-4 h-4 mr-2 text-swiss-red" />
                {language === 'en' ? 'Swiss Quality' : language === 'fr' ? 'Qualité Suisse' : 'Schweizer Qualität'}
              </Badge>
            </div>

            {/* Main Headline - Emotional Hook */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight text-foreground">
                {translations.hero.title}{" "}
                <span className="bg-gradient-trust bg-clip-text text-transparent">{translations.hero.titleHighlight}</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground font-medium">
                {translations.hero.description}
              </p>
            </div>

            {/* Value Propositions */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-medical-teal flex-shrink-0" />
                <span className="text-foreground">
                  {language === 'en' ? 'No wires, no patches – 14 days of comfortable wear' : 
                   language === 'fr' ? 'Pas de fils, pas de patchs – 14 jours de port confortable' : 
                   'Keine Kabel, keine Pflaster – 14 Tage bequem tragen'}
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-medical-teal flex-shrink-0" />
                <span className="text-foreground">
                  {language === 'en' ? 'Covered by basic insurance' : 
                   language === 'fr' ? 'Couvert par l\'assurance de base' : 
                   'Von der Grundversicherung übernommen'}
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-medical-teal flex-shrink-0" />
                <span className="text-foreground">
                  {language === 'en' ? 'Wear at home, live your life' : 
                   language === 'fr' ? 'Porter à la maison, vivre sa vie' : 
                   'Zuhause tragen, beim Leben dabei sein'}
                </span>
              </div>
            </div>

            {/* Primary CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" variant="cta" className="px-8">
                {language === 'en' ? 'Get Started' : language === 'fr' ? 'Commencer' : 'Jetzt starten'}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
              >
                <Play className="w-5 h-5 mr-2" />
                {language === 'en' ? 'How it works' : language === 'fr' ? 'Comment ça marche' : 'Wie es funktioniert'}
              </Button>
            </div>

            {/* Social Proof Line */}
            <div className="pt-4 border-t border-muted">
              <p className="text-sm text-muted-foreground">
                <strong className="text-medical-teal">
                  {language === 'en' ? '500+ Patients' : language === 'fr' ? '500+ Patients' : '500+ Patienten'}
                </strong>
                {language === 'en' ? ' have already benefited from SKIIN • ' : 
                 language === 'fr' ? ' ont déjà bénéficié de SKIIN • ' : 
                 ' haben bereits von SKIIN profitiert • '}
                <strong className="text-bridge-teal">
                  {language === 'en' ? '94% Compliance' : language === 'fr' ? '94% Compliance' : '94% Compliance'}
                </strong>
                {language === 'en' ? ' Rate' : language === 'fr' ? ' Taux' : ' Rate'}
              </p>
            </div>
          </div>

          {/* Right Column - Visual Impact */}
          <div className="relative animate-slide-in">
            {/* Main Hero Image */}
            <div className="relative z-10">
              <Card className="overflow-hidden border-0 shadow-2xl">
                <CardContent className="p-0">
                  <img
                    src="/lovable-uploads/1f227914-01f4-49cb-9a48-3f39976b4898.png"
                    alt="Patient wearing SKIIN heart monitor comfortably at home"
                    className="w-full h-auto"
                  />
                  {/* Overlay Text */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-white/95 backdrop-blur-sm rounded-lg p-4">
                      <p className="text-sm font-medium text-foreground">
                        {language === 'en' ? '"I almost forgot I was wearing it – so comfortable!"' : 
                         language === 'fr' ? '"J\'ai presque oublié que je le portais – si confortable !"' : 
                         '"Ich habe fast vergessen, dass ich es trage – so bequem!"'}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {language === 'en' ? 'Maria, 58, Zurich' : language === 'fr' ? 'Maria, 58, Zurich' : 'Maria, 58, Zürich'}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Floating Stats Cards */}
            <Card className="absolute -top-4 -left-4 bg-white swiss-precision">
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-medical-teal">14</div>
                <div className="text-xs text-muted-foreground">
                  {language === 'en' ? 'Days Monitoring' : language === 'fr' ? 'Jours Surveillance' : 'Tage Überwachung'}
                </div>
              </CardContent>
            </Card>

            <Card className="absolute -bottom-4 -right-4 bg-white swiss-precision">
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-bridge-teal">7x</div>
                <div className="text-xs text-muted-foreground">
                  {language === 'en' ? 'Better Detection' : language === 'fr' ? 'Meilleure Détection' : 'Bessere Erkennung'}
                </div>
              </CardContent>
            </Card>

            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-card rounded-2xl -z-10"></div>
          </div>
        </div>

        {/* Trust Bar */}
        <div className="mt-16 pt-8 border-t border-muted">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-sm text-muted-foreground">
              {language === 'en' ? 'Trusted by leading Swiss healthcare institutions' : 
               language === 'fr' ? 'Approuvé par les principales institutions de santé suisses' : 
               'Vertraut von führenden Schweizer Gesundheitseinrichtungen'}
            </p>
            <div className="flex items-center space-x-6 opacity-60">
              <div className="text-xs font-medium px-3 py-1 bg-muted rounded">
                {language === 'en' ? 'University Hospital' : language === 'fr' ? 'Hôpital Universitaire' : 'Universitätsspital'}
              </div>
              <div className="text-xs font-medium px-3 py-1 bg-muted rounded">
                {language === 'en' ? 'Family Doctors' : language === 'fr' ? 'Médecins de Famille' : 'Hausärzte'}
              </div>
              <div className="text-xs font-medium px-3 py-1 bg-muted rounded">
                {language === 'en' ? 'Cardiologists' : language === 'fr' ? 'Cardiologues' : 'Kardiologen'}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;