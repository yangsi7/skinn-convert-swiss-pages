
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
    <div className="pt-28 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-background via-myant-lightgreen/10 to-myant-green/5">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Main Message */}
          <div className="space-y-8 animate-fade-in">
            {/* Trust Badges */}
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline" className="bg-white/80 backdrop-blur-sm">
                <Shield className="w-4 h-4 mr-2 text-myant-green" />
                CE Medizinprodukt
              </Badge>
              <Badge variant="outline" className="bg-white/80 backdrop-blur-sm">
                <Heart className="w-4 h-4 mr-2 text-myant-green" />
                Schweizer Qualität
              </Badge>
            </div>

            {/* Main Headline - Emotional Hook */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight text-foreground">
                Herzüberwachung, die sich{" "}
                <span className="text-myant-green">Ihrem Leben anpasst</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground font-medium">
                Klinisch präzise, außergewöhnlich komfortabel – SKIIN revolutioniert die Herzdiagnostik zu Hause
              </p>
            </div>

            {/* Value Propositions */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-myant-green flex-shrink-0" />
                <span className="text-foreground">Keine Kabel, keine Pflaster – 14 Tage bequem tragen</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-myant-green flex-shrink-0" />
                <span className="text-foreground">Von der Grundversicherung übernommen</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-myant-green flex-shrink-0" />
                <span className="text-foreground">Zuhause tragen, beim Leben dabei sein</span>
              </div>
            </div>

            {/* Primary CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-myant-green hover:bg-myant-darkgreen text-white px-8">
                Jetzt starten
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-myant-green text-myant-green hover:bg-myant-lightgreen"
              >
                <Play className="w-5 h-5 mr-2" />
                Wie es funktioniert
              </Button>
            </div>

            {/* Social Proof Line */}
            <div className="pt-4 border-t border-muted">
              <p className="text-sm text-muted-foreground">
                <strong className="text-myant-green">500+ Patienten</strong> haben bereits von SKIIN profitiert • 
                <strong className="text-myant-green"> 94% Compliance</strong> Rate
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
                        "Ich habe fast vergessen, dass ich es trage – so bequem!"
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Maria, 58, Zürich
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Floating Stats Cards */}
            <Card className="absolute -top-4 -left-4 bg-white shadow-lg border-myant-green/20">
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-myant-green">14</div>
                <div className="text-xs text-muted-foreground">Tage Überwachung</div>
              </CardContent>
            </Card>

            <Card className="absolute -bottom-4 -right-4 bg-white shadow-lg border-myant-green/20">
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-myant-green">7x</div>
                <div className="text-xs text-muted-foreground">Bessere Erkennung</div>
              </CardContent>
            </Card>

            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-myant-lightgreen/20 to-transparent rounded-2xl -z-10"></div>
          </div>
        </div>

        {/* Trust Bar */}
        <div className="mt-16 pt-8 border-t border-muted">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-sm text-muted-foreground">
              Vertraut von führenden Schweizer Gesundheitseinrichtungen
            </p>
            <div className="flex items-center space-x-6 opacity-60">
              <div className="text-xs font-medium px-3 py-1 bg-muted rounded">Universitätsspital</div>
              <div className="text-xs font-medium px-3 py-1 bg-muted rounded">Hausärzte</div>
              <div className="text-xs font-medium px-3 py-1 bg-muted rounded">Kardiologen</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;