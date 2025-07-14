import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HomePageTabs from '@/components/home/HomePageTabs';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Heart, 
  Shield, 
  Monitor, 
  Award, 
  CheckCircle, 
  Clock, 
  Smartphone,
  Activity,
  Users,
  Star,
  ArrowRight,
  Play
} from 'lucide-react';
import { useTranslation } from '@/hooks/useTranslation';

/**
 * Enhanced Home-2 page utilizing marketing assets and comprehensive content
 */
const Home2 = () => {
  const t = useTranslation('home2');

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <HomePageTabs />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative min-h-screen bg-gradient-to-br from-primary/5 to-secondary/5 flex items-center overflow-hidden">
          <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                {t.hero.badge}
              </Badge>
              
              <div className="space-y-6">
                <h1 className="text-4xl lg:text-6xl font-bold text-foreground">
                  <span className="text-primary">Länger</span>{' '}
                  <span className="text-muted-foreground">jünger leben.</span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  {t.hero.subtitle}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="px-8 py-4 text-lg">
                  {t.hero.cta}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" size="lg" className="px-8 py-4 text-lg">
                  <Play className="mr-2 h-5 w-5" />
                  {t.hero.bookAssessment}
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
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                {t.stats.title}
              </h2>
              <p className="text-xl text-muted-foreground">
                {t.stats.subtitle}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center p-8 hover:shadow-lg transition-all hover:-translate-y-2">
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

              <Card className="text-center p-8 hover:shadow-lg transition-all hover:-translate-y-2">
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

              <Card className="text-center p-8 hover:shadow-lg transition-all hover:-translate-y-2">
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

        {/* Clinical Evidence Section */}
        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                {t.clinicalEvidence.title}
              </h2>
              <p className="text-xl text-muted-foreground">
                {t.clinicalEvidence.subtitle}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {t.clinicalEvidence.items.map((item, index) => (
                <Card key={index} className="text-center p-6 hover:shadow-lg transition-all hover:-translate-y-2">
                  <CardContent className="space-y-4">
                    <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                {t.features.title}
              </h2>
              <p className="text-xl text-primary font-semibold">
                {t.features.subtitle}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {t.features.items.map((feature, index) => {
                const IconComponent = [Monitor, Heart, Shield, Award][index];
                return (
                  <Card key={index} className="text-center p-6 hover:shadow-lg transition-all hover:-translate-y-2">
                    <CardContent className="space-y-4">
                      <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                        <IconComponent className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold text-foreground">{feature.title}</h3>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Technology Section */}
        <section className="py-20 bg-muted/50">
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
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                  {t.technology.title}
                </h2>
                <p className="text-xl text-muted-foreground">
                  {t.technology.subtitle}
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {t.technology.description}
                </p>
                <div className="space-y-4">
                  {t.technology.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
                <Button className="mt-6">
                  Learn More About Technology
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Patient Journey Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                {t.patientJourney.title}
              </h2>
              <p className="text-xl text-muted-foreground">
                {t.patientJourney.subtitle}
              </p>
            </div>

            <div className="grid md:grid-cols-5 gap-8">
              {t.patientJourney.steps.map((step, index) => (
                <div key={index} className="text-center space-y-4">
                  <div className="mx-auto w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold">
                    {step.number}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">{step.description}</p>
                  <Badge variant="outline" className="text-xs">
                    <Clock className="w-3 h-3 mr-1" />
                    {step.duration}
                  </Badge>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Insurance Coverage Section */}
        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                  {t.insurance.title}
                </h2>
                <p className="text-xl text-primary font-semibold">
                  {t.insurance.subtitle}
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {t.insurance.description}
                </p>
                <div className="space-y-3">
                  {t.insurance.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-primary" />
                      <span className="text-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="text-center">
                <img
                  src="/lovable-uploads/5b7bbf12-0524-43d2-8e0d-6bbc2064d4f3.png"
                  alt="Vollständig abgedeckt durch die Schweizer Krankenversicherung"
                  className="w-full max-w-lg mx-auto rounded-2xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Risk Assessment Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                {t.riskAssessment.title}
              </h2>
              <p className="text-xl text-muted-foreground">
                {t.riskAssessment.subtitle}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {t.riskAssessment.risks.map((risk, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-all hover:-translate-y-2">
                  <CardContent className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Activity className="w-8 h-8 text-destructive" />
                      <h3 className="text-xl font-semibold text-foreground">{risk.title}</h3>
                    </div>
                    <p className="text-muted-foreground">{risk.description}</p>
                    <Badge variant="destructive" className="text-xs">
                      {risk.prevalence}
                    </Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-6 text-center">
            <div className="max-w-4xl mx-auto space-y-8">
              <h2 className="text-3xl lg:text-4xl font-bold">
                {t.cta.title}
              </h2>
              <p className="text-xl opacity-90">
                {t.cta.subtitle}
              </p>
              <p className="text-lg opacity-80">
                {t.cta.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                <Button size="lg" variant="secondary" className="px-8 py-4 text-lg">
                  {t.cta.primaryButton}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary px-8 py-4 text-lg">
                  {t.cta.secondaryButton}
                </Button>
              </div>
              
              {/* Trust indicators */}
              <div className="mt-12 flex flex-wrap justify-center items-center gap-8 opacity-80">
                <div className="flex items-center space-x-2">
                  <Star className="w-5 h-5 fill-current" />
                  <span className="text-sm">97% Patient Satisfaction</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="w-5 h-5" />
                  <span className="text-sm">10,000+ Patients Monitored</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Shield className="w-5 h-5" />
                  <span className="text-sm">Medical Grade Certified</span>
                </div>
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