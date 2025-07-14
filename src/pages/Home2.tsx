import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HomePageTabs from '@/components/home/HomePageTabs';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Heart, Shield, Monitor, Users, Clock, Award } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

/**
 * Alternative home page with improved design and utilizing marketing assets
 */
const Home2 = () => {
  const { language } = useLanguage();

  const getContent = () => {
    switch (language) {
      case 'de':
        return {
          hero: {
            badge: "Zertifiziert vom Bundesamt für Gesundheit (BAG)",
            title: "Länger jünger leben.",
            subtitle: "Revolutionäre Herzgesundheit durch KI-gestützte 14-Tage-Monitoring",
            cta: "Jetzt anmelden",
            bookAssessment: "Termin buchen"
          },
          stats: {
            title: "Warum Früherkennung entscheidend ist",
            items: [
              { number: "70%", text: "der Herzrhythmusstörungen bleiben unbemerkt" },
              { number: "30%", text: "der Menschen mit Vorhofflimmern erleiden einen Schlaganfall" },
              { number: "50%", text: "mehr Herzrhythmusstörungen durch 14-Tage-Monitoring erkannt" }
            ]
          },
          features: {
            title: "Von KI gemessen, von Kardiologen ausgewertet",
            subtitle: "Vollständig abgedeckt durch die Schweizer Krankenversicherung",
            items: [
              {
                icon: Monitor,
                title: "Bequemes Monitoring",
                description: "Machen Sie ein Holter-EKG bequem von zu Hause aus mit unserem SKIIN-Gerät"
              },
              {
                icon: Heart,
                title: "KI-Analyse",
                description: "Fortschrittliche KI-Algorithmen analysieren Ihre Herzrhythmusdaten kontinuierlich"
              },
              {
                icon: Shield,
                title: "Kardiologie-Expertise",
                description: "Schweizer Kardiologen bewerten Ihre Ergebnisse und erstellen detaillierte Berichte"
              },
              {
                icon: Award,
                title: "Versicherungsschutz",
                description: "Von Schweizer Versicherungen anerkannt und vollständig abgedeckt"
              }
            ]
          },
          process: {
            title: "5 einfache Schritte zu Ihrer Herzgesundheit",
            steps: [
              { number: "1", title: "Formular ausfüllen", description: "Füllen Sie das Selbstauskunfts-Formular aus" },
              { number: "2", title: "Band erhalten", description: "Wir liefern das SKIIN Holter-EKG an Ihre Tür" },
              { number: "3", title: "Tragen & Überwachen", description: "Tragen Sie das Band 14 Tage lang bequem" },
              { number: "4", title: "Daten analysieren", description: "KI und Kardiologen analysieren Ihre Herzgesundheit" },
              { number: "5", title: "Ergebnisse erhalten", description: "Erhalten Sie einen detaillierten Bericht und Empfehlungen" }
            ]
          }
        };
      case 'fr':
        return {
          hero: {
            badge: "Certifié par l'Office fédéral de la santé publique (OFSP)",
            title: "Vivre plus longtemps, plus jeune.",
            subtitle: "Santé cardiaque révolutionnaire grâce au monitoring IA de 14 jours",
            cta: "S'inscrire maintenant",
            bookAssessment: "Réserver un rendez-vous"
          },
          stats: {
            title: "Pourquoi la détection précoce est cruciale",
            items: [
              { number: "70%", text: "des troubles du rythme cardiaque passent inaperçus" },
              { number: "30%", text: "des personnes avec fibrillation auriculaire subissent un AVC" },
              { number: "50%", text: "plus de troubles détectés avec monitoring 14 jours" }
            ]
          },
          features: {
            title: "Mesuré par IA, évalué par des cardiologues",
            subtitle: "Entièrement couvert par l'assurance maladie suisse",
            items: [
              {
                icon: Monitor,
                title: "Monitoring Confortable",
                description: "Effectuez un Holter-ECG confortablement depuis chez vous avec SKIIN"
              },
              {
                icon: Heart,
                title: "Analyse IA",
                description: "Des algorithmes IA avancés analysent vos données cardiaques en continu"
              },
              {
                icon: Shield,
                title: "Expertise Cardiologique",
                description: "Des cardiologues suisses évaluent vos résultats et créent des rapports détaillés"
              },
              {
                icon: Award,
                title: "Couverture Assurance",
                description: "Reconnu et entièrement couvert par les assurances suisses"
              }
            ]
          },
          process: {
            title: "5 étapes simples vers votre santé cardiaque",
            steps: [
              { number: "1", title: "Remplir le formulaire", description: "Complétez le formulaire d'auto-évaluation" },
              { number: "2", title: "Recevoir le dispositif", description: "Nous livrons le Holter-ECG SKIIN à votre porte" },
              { number: "3", title: "Porter et surveiller", description: "Portez le dispositif confortablement pendant 14 jours" },
              { number: "4", title: "Analyser les données", description: "IA et cardiologues analysent votre santé cardiaque" },
              { number: "5", title: "Obtenir les résultats", description: "Recevez un rapport détaillé et des recommandations" }
            ]
          }
        };
      default:
        return {
          hero: {
            badge: "Certified by the Federal Office of Public Health (BAG)",
            title: "Live longer, younger.",
            subtitle: "Revolutionary heart health through AI-powered 14-day monitoring",
            cta: "Get Started Now",
            bookAssessment: "Book Assessment"
          },
          stats: {
            title: "Why Early Detection is Critical",
            items: [
              { number: "70%", text: "of heart rhythm disorders go unnoticed" },
              { number: "30%", text: "of people with atrial fibrillation suffer a stroke" },
              { number: "50%", text: "more heart rhythm disorders detected with 14-day monitoring" }
            ]
          },
          features: {
            title: "AI-Measured, Cardiologist-Evaluated",
            subtitle: "Fully covered by Swiss health insurance",
            items: [
              {
                icon: Monitor,
                title: "Comfortable Monitoring",
                description: "Perform a Holter ECG comfortably from home with our SKIIN device"
              },
              {
                icon: Heart,
                title: "AI Analysis",
                description: "Advanced AI algorithms continuously analyze your heart rhythm data"
              },
              {
                icon: Shield,
                title: "Cardiology Expertise",
                description: "Swiss cardiologists evaluate your results and create detailed reports"
              },
              {
                icon: Award,
                title: "Insurance Coverage",
                description: "Recognized and fully covered by Swiss insurance providers"
              }
            ]
          },
          process: {
            title: "5 Simple Steps to Heart Health",
            steps: [
              { number: "1", title: "Complete Form", description: "Fill out the self-referral form" },
              { number: "2", title: "Receive Device", description: "We deliver the SKIIN Holter ECG to your door" },
              { number: "3", title: "Wear & Monitor", description: "Wear the device comfortably for 14 days" },
              { number: "4", title: "Analyze Data", description: "AI and cardiologists analyze your heart health" },
              { number: "5", title: "Get Results", description: "Receive a detailed report and recommendations" }
            ]
          }
        };
    }
  };

  const content = getContent();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <HomePageTabs />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50 flex items-center overflow-hidden">
          <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Badge variant="secondary" className="bg-blue-100 text-blue-800 hover:bg-blue-200">
                {content.hero.badge}
              </Badge>
              
              <div className="space-y-6">
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900">
                  <span className="text-blue-600">Länger</span>{' '}
                  <span className="text-gray-800">jünger leben.</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  {content.hero.subtitle}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg">
                  {content.hero.cta}
                </Button>
                <Button variant="outline" size="lg" className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg">
                  {content.hero.bookAssessment}
                </Button>
              </div>
            </div>

            <div className="relative">
              <img
                src="/lovable-uploads/b91519c3-7e46-4722-a4f8-1a8ca54cb7c7.png"
                alt="Myant Health - Länger jünger leben"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </section>

        {/* Statistics Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                {content.stats.title}
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Stat 1 */}
              <Card className="text-center p-8 hover:shadow-lg transition-shadow">
                <CardContent className="space-y-4">
                  <div className="relative">
                    <img
                      src="/lovable-uploads/25b8354d-c321-4439-8a41-5dcafe49836e.png"
                      alt="70% der Herzrhythmusstörungen bleiben unbemerkt"
                      className="w-full h-auto rounded-xl"
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Stat 2 */}
              <Card className="text-center p-8 hover:shadow-lg transition-shadow">
                <CardContent className="space-y-4">
                  <div className="relative">
                    <img
                      src="/lovable-uploads/b74365b1-b855-4522-a9d7-f05b3e2ee15e.png"
                      alt="30% der Menschen mit Vorhofflimmern erleiden einen Schlaganfall"
                      className="w-full h-auto rounded-xl"
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Stat 3 */}
              <Card className="text-center p-8 hover:shadow-lg transition-shadow">
                <CardContent className="space-y-4">
                  <div className="relative">
                    <img
                      src="/lovable-uploads/4ad65a99-4268-46c4-986f-d04c9ac055f4.png"
                      alt="50% mehr Herzrhythmusstörungen durch 14-Tage-Monitoring erkannt"
                      className="w-full h-auto rounded-xl"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                {content.features.title}
              </h2>
              <p className="text-xl text-blue-600 font-semibold">
                {content.features.subtitle}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {content.features.items.map((feature, index) => (
                <Card key={index} className="text-center p-6 hover:shadow-lg transition-all hover:-translate-y-2">
                  <CardContent className="space-y-4">
                    <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                      <feature.icon className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Technology Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <img
                  src="/lovable-uploads/6e47298b-0a4d-4e21-92ed-0b25c0e34c4c.png"
                  alt="Holter-EKG Technology"
                  className="w-full h-auto rounded-2xl shadow-xl"
                />
              </div>
              <div className="space-y-6">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                  Neueste Myant Care360 Technologie
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Erleben Sie die Zukunft der Herzgesundheit mit unserem revolutionären 360°-Überwachungssystem, 
                  das kontinuierliche Datenerfassung mit KI-gestützter Analyse kombiniert.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-gray-700">14-Tage kontinuierliches Monitoring</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-gray-700">KI-gestützte Echtzeit-Analyse</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-gray-700">Von Schweizer Kardiologen validiert</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                {content.process.title}
              </h2>
            </div>

            <div className="grid md:grid-cols-5 gap-8">
              {content.process.steps.map((step, index) => (
                <div key={index} className="text-center space-y-4">
                  <div className="mx-auto w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                    {step.number}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <img
                src="/lovable-uploads/5b7bbf12-0524-43d2-8e0d-6bbc2064d4f3.png"
                alt="Vollständig abgedeckt durch die Schweizer Krankenversicherung"
                className="w-full max-w-3xl mx-auto rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-blue-600 text-white">
          <div className="container mx-auto px-6 text-center">
            <div className="max-w-3xl mx-auto space-y-8">
              <h2 className="text-3xl lg:text-4xl font-bold">
                Beginnen Sie noch heute Ihre Herzgesundheits-Reise
              </h2>
              <p className="text-xl opacity-90">
                Schließen Sie sich Tausenden von Schweizern an, die bereits von unserem 
                fortschrittlichen Herzmonitoring profitieren.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg">
                  Kostenlose Beratung buchen
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg">
                  Mehr erfahren
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home2;