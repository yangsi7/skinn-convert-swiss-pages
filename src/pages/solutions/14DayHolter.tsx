import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Heart, Clock, Shield, Activity, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

const Solutions14DayHolter = () => {
  const { language } = useLanguage();

  const content = {
    en: {
      title: "14-Day Holter ECG",
      subtitle: "Clinical-grade heart rhythm monitoring from the comfort of home",
      description: "SKIIN's 14-day Holter service combines breakthrough textile technology with clinical expertise to deliver the most comprehensive cardiac monitoring solution available.",
      
      hero: {
        statTitle: "Detection Rate",
        statValue: "3x Higher",
        statDesc: "vs 24h Holter"
      },
      
      features: {
        title: "Why Choose SKIIN's 14-Day Holter?",
        items: [
          {
            icon: Clock,
            title: "Extended Monitoring",
            description: "14 continuous days of ECG data capture intermittent arrhythmias that shorter monitoring periods miss"
          },
          {
            icon: Heart,
            title: "Textile Comfort",
            description: "Soft, breathable chest band with invisible sensors - no wires, adhesives, or skin irritation"
          },
          {
            icon: Activity,
            title: "AI-Powered Analysis",
            description: "Advanced algorithms detect arrhythmias in real-time, reviewed by certified cardiologists"
          },
          {
            icon: Shield,
            title: "Clinical Validation",
            description: "CE-marked medical device with accuracy validated against traditional Holter monitors"
          }
        ]
      },
      
      comparison: {
        title: "SKIIN vs Traditional Holter",
        skiin: "SKIIN 14-Day",
        traditional: "24h Holter",
        features: [
          { feature: "Monitoring Duration", skiin: "Up to 14 days", traditional: "24-48 hours" },
          { feature: "Comfort", skiin: "Textile, wire-free", traditional: "Wires & adhesives" },
          { feature: "Daily Activities", skiin: "Normal life", traditional: "Restricted" },
          { feature: "Detection Rate", skiin: "Higher", traditional: "Limited" },
          { feature: "Patient Compliance", skiin: "97%", traditional: "65%" }
        ]
      },
      
      process: {
        title: "How It Works",
        steps: [
          "Doctor prescribes SKIIN",
          "Device delivered to home",
          "Wear for up to 14 days",
          "Automatic data upload",
          "Cardiologist review",
          "Report to your doctor"
        ]
      },
      
      cta: {
        title: "Ready for Advanced Heart Monitoring?",
        description: "Experience the next generation of cardiac monitoring with SKIIN's 14-day Holter service.",
        button: "Check Eligibility"
      }
    },
    de: {
      title: "14-Tage Holter EKG",
      subtitle: "Klinisch-präzise Herzrhythmus-Überwachung bequem von zu Hause",
      description: "SKIINs 14-Tage Holter-Service kombiniert innovative Textiltechnologie mit klinischer Expertise für die umfassendste verfügbare Herzüberwachungslösung.",
      
      hero: {
        statTitle: "Entdeckungsrate",
        statValue: "3x höher",
        statDesc: "vs 24h Holter"
      },
      
      features: {
        title: "Warum SKIINs 14-Tage Holter wählen?",
        items: [
          {
            icon: Clock,
            title: "Erweiterte Überwachung",
            description: "14 kontinuierliche Tage EKG-Daten erfassen intermittierende Arrhythmien, die kürzere Überwachungszeiten verpassen"
          },
          {
            icon: Heart,
            title: "Textiler Komfort",
            description: "Weiches, atmungsaktives Brustband mit unsichtbaren Sensoren - keine Kabel, Pflaster oder Hautreizungen"
          },
          {
            icon: Activity,
            title: "KI-gestützte Analyse",
            description: "Fortschrittliche Algorithmen erkennen Arrhythmien in Echtzeit, überprüft von zertifizierten Kardiologen"
          },
          {
            icon: Shield,
            title: "Klinische Validierung",
            description: "CE-zertifiziertes Medizinprodukt mit validierter Genauigkeit gegenüber traditionellen Holter-Monitoren"
          }
        ]
      },
      
      comparison: {
        title: "SKIIN vs Traditioneller Holter",
        skiin: "SKIIN 14-Tage",
        traditional: "24h Holter",
        features: [
          { feature: "Überwachungsdauer", skiin: "Bis zu 14 Tage", traditional: "24-48 Stunden" },
          { feature: "Komfort", skiin: "Textil, kabelfrei", traditional: "Kabel & Pflaster" },
          { feature: "Tägliche Aktivitäten", skiin: "Normales Leben", traditional: "Eingeschränkt" },
          { feature: "Entdeckungsrate", skiin: "Höher", traditional: "Begrenzt" },
          { feature: "Patientencompliance", skiin: "97%", traditional: "65%" }
        ]
      },
      
      process: {
        title: "So funktioniert es",
        steps: [
          "Arzt verschreibt SKIIN",
          "Gerät nach Hause geliefert",
          "Bis zu 14 Tage tragen",
          "Automatischer Datenupload",
          "Kardiologen-Überprüfung",
          "Bericht an Ihren Arzt"
        ]
      },
      
      cta: {
        title: "Bereit für fortschrittliche Herzüberwachung?",
        description: "Erleben Sie die nächste Generation der Herzüberwachung mit SKIINs 14-Tage Holter-Service.",
        button: "Berechtigung prüfen"
      }
    },
    fr: {
      title: "Holter ECG 14 Jours",
      subtitle: "Surveillance du rythme cardiaque de qualité clinique depuis chez vous",
      description: "Le service Holter 14 jours de SKIIN combine une technologie textile révolutionnaire avec une expertise clinique pour offrir la solution de surveillance cardiaque la plus complète disponible.",
      
      hero: {
        statTitle: "Taux de détection",
        statValue: "3x plus élevé",
        statDesc: "vs Holter 24h"
      },
      
      features: {
        title: "Pourquoi choisir le Holter 14 jours de SKIIN?",
        items: [
          {
            icon: Clock,
            title: "Surveillance prolongée",
            description: "14 jours continus de données ECG capturent les arythmies intermittentes que les courtes périodes manquent"
          },
          {
            icon: Heart,
            title: "Confort textile",
            description: "Bande thoracique douce et respirante avec capteurs invisibles - pas de fils, adhésifs ou irritation cutanée"
          },
          {
            icon: Activity,
            title: "Analyse par IA",
            description: "Algorithmes avancés détectent les arythmies en temps réel, examinées par des cardiologues certifiés"
          },
          {
            icon: Shield,
            title: "Validation clinique",
            description: "Dispositif médical marqué CE avec précision validée contre les moniteurs Holter traditionnels"
          }
        ]
      },
      
      comparison: {
        title: "SKIIN vs Holter traditionnel",
        skiin: "SKIIN 14 jours",
        traditional: "Holter 24h",
        features: [
          { feature: "Durée de surveillance", skiin: "Jusqu'à 14 jours", traditional: "24-48 heures" },
          { feature: "Confort", skiin: "Textile, sans fil", traditional: "Fils et adhésifs" },
          { feature: "Activités quotidiennes", skiin: "Vie normale", traditional: "Restreinte" },
          { feature: "Taux de détection", skiin: "Plus élevé", traditional: "Limité" },
          { feature: "Compliance patient", skiin: "97%", traditional: "65%" }
        ]
      },
      
      process: {
        title: "Comment ça marche",
        steps: [
          "Le médecin prescrit SKIIN",
          "Appareil livré à domicile",
          "Porter jusqu'à 14 jours",
          "Upload automatique des données",
          "Examen par cardiologue",
          "Rapport à votre médecin"
        ]
      },
      
      cta: {
        title: "Prêt pour une surveillance cardiaque avancée?",
        description: "Découvrez la nouvelle génération de surveillance cardiaque avec le service Holter 14 jours de SKIIN.",
        button: "Vérifier l'éligibilité"
      }
    }
  };

  const t = content[language] || content.en;

  const getEligibilityPath = () => {
    if (language === 'de') return '/de/wie-es-funktioniert';
    if (language === 'fr') return '/fr/comment-ca-marche';
    return '/how-it-works';
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-br from-background via-secondary/20 to-accent/30 pt-24">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <Badge variant="secondary" className="w-fit">
                  <Heart className="w-4 h-4 mr-2" />
                  CE Certified Medical Device
                </Badge>
                
                <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                  {t.title}
                </h1>
                
                <p className="text-xl text-muted-foreground">
                  {t.subtitle}
                </p>
                
                <p className="text-muted-foreground">
                  {t.description}
                </p>
                
                <Button size="lg" asChild>
                  <Link to={getEligibilityPath()}>
                    {t.cta.button}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>
              
              <div className="relative">
                <Card className="p-8 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">{t.hero.statValue}</div>
                  <div className="text-sm text-muted-foreground mb-1">{t.hero.statTitle}</div>
                  <div className="text-xs text-muted-foreground">{t.hero.statDesc}</div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
              {t.features.title}
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {t.features.items.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <Card key={index} className="group hover:shadow-lg transition-shadow">
                    <CardContent className="p-6 text-center">
                      <IconComponent className="w-12 h-12 text-primary mx-auto mb-4" />
                      <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Comparison Section */}
        <section className="section-padding bg-muted/30">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
              {t.comparison.title}
            </h2>
            
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left p-6 font-semibold text-foreground">Feature</th>
                        <th className="text-center p-6 font-semibold text-primary">{t.comparison.skiin}</th>
                        <th className="text-center p-6 font-semibold text-muted-foreground">{t.comparison.traditional}</th>
                      </tr>
                    </thead>
                    <tbody>
                      {t.comparison.features.map((item, index) => (
                        <tr key={index} className="border-b last:border-b-0">
                          <td className="p-6 text-foreground">{item.feature}</td>
                          <td className="p-6 text-center">
                            <div className="flex items-center justify-center gap-2">
                              <CheckCircle className="w-4 h-4 text-primary" />
                              <span className="text-foreground">{item.skiin}</span>
                            </div>
                          </td>
                          <td className="p-6 text-center text-muted-foreground">{item.traditional}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Process Section */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
              {t.process.title}
            </h2>
            
            <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
              {t.process.steps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                    {index + 1}
                  </div>
                  <p className="text-sm text-foreground">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-primary">
          <div className="container-custom text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              {t.cta.title}
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              {t.cta.description}
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link to={getEligibilityPath()}>
                {t.cta.button}
              </Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Solutions14DayHolter;