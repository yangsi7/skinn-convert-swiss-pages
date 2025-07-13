import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Building, TrendingUp, Users, ShieldCheck, BarChart, Target } from 'lucide-react';

const Corporate = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-subtle">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl font-bold mb-6">
                Für <span className="text-primary">Unternehmen & Versicherer</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Revolutionieren Sie Ihre Mitarbeitergesundheit und Präventionsprogramme. 
                SKIIN bietet skalierbare Herzgesundheits-Screenings mit nachweisbarem ROI.
              </p>
              <Button size="lg" className="mr-4">
                Pilot-Programm starten
              </Button>
              <Button variant="outline" size="lg">
                ROI-Analyse anfordern
              </Button>
            </div>
          </div>
        </section>

        {/* Population Health Benefits */}
        <section className="py-16">
          <div className="container-custom">
            <h2 className="text-3xl font-bold text-center mb-12">
              Population Health & ROI
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <TrendingUp className="h-10 w-10 text-primary mb-4" />
                  <CardTitle>Früherkennung spart Kosten</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Vorhofflimmern früh erkennen kann Schlaganfälle verhindern. 
                    Ein verhinderte Schlaganfall spart durchschnittlich CHF 200'000 
                    an Behandlungskosten.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Users className="h-10 w-10 text-primary mb-4" />
                  <CardTitle>Skalierbare Implementierung</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Von 50 bis 50'000 Mitarbeitern - SKIIN kann mit Ihrem Unternehmen 
                    wachsen. Keine Hardware-Investitionen oder Personalschulung nötig.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <BarChart className="h-10 w-10 text-primary mb-4" />
                  <CardTitle>Messbare Ergebnisse</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Detaillierte Berichte über Screening-Ergebnisse, Kostenersparnis 
                    und Gesundheits-ROI für Ihre Stakeholder und Compliance.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Corporate Solutions */}
        <section className="py-16 bg-muted/30">
          <div className="container-custom">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">
                Unternehmens-Lösungen
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <Building className="h-10 w-10 text-primary mb-4" />
                    <CardTitle>Für Unternehmen</CardTitle>
                    <CardDescription>
                      Mitarbeitergesundheit und Produktivität steigern
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Executive Health Checks</h4>
                      <p className="text-sm text-muted-foreground">
                        Umfassende Herzgesundheits-Screenings für Führungskräfte als Teil 
                        des Executive Health Programms.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-2">Mitarbeiter-Wellness</h4>
                      <p className="text-sm text-muted-foreground">
                        Präventive Herzscreenings für alle Mitarbeiter ab 40+ oder bei 
                        Risikofaktoren wie Bluthochdruck, Diabetes.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-2">Stress-Monitoring</h4>
                      <p className="text-sm text-muted-foreground">
                        Identifizierung von arbeitsbedingtem Stress durch Herzfrequenz-Variabilität 
                        und Arrhythmie-Patterns.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <ShieldCheck className="h-10 w-10 text-primary mb-4" />
                    <CardTitle>Für Versicherer</CardTitle>
                    <CardDescription>
                      Risikomanagement und Kostenkontrolle
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Risiko-Stratifikation</h4>
                      <p className="text-sm text-muted-foreground">
                        Identifizieren Sie Hochrisiko-Versicherte früh und bieten Sie 
                        präventive Interventionen an.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-2">Präventions-Programme</h4>
                      <p className="text-sm text-muted-foreground">
                        Integrieren Sie SKIIN in bestehende Gesundheitsförderungs- und 
                        Präventionsprogramme.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-2">Value-Based Care</h4>
                      <p className="text-sm text-muted-foreground">
                        Unterstützen Sie Value-Based Care Modelle mit datengestützten 
                        Gesundheits-Outcomes.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Implementation Models */}
        <section className="py-16">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">
                Implementierungs-Modelle
              </h2>
              
              <div className="space-y-8">
                <Card>
                  <CardHeader>
                    <Target className="h-10 w-10 text-primary mb-4" />
                    <CardTitle>Pilot-Programm (50-200 Teilnehmer)</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold mb-2">Phase 1: Baseline</h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• Risiko-Assessment</li>
                          <li>• Teilnehmer-Auswahl</li>
                          <li>• Erste SKIIN-Screenings</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Phase 2: Auswertung</h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• Detektionsrate messen</li>
                          <li>• Kostenersparnis berechnen</li>
                          <li>• ROI-Analyse erstellen</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <Building className="h-10 w-10 text-primary mb-4" />
                    <CardTitle>Vollständige Integration</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary mb-2">1-3 Monate</div>
                        <p className="text-sm text-muted-foreground">Setup & Onboarding</p>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary mb-2">3-12 Monate</div>
                        <p className="text-sm text-muted-foreground">Rollout & Monitoring</p>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary mb-2">12+ Monate</div>
                        <p className="text-sm text-muted-foreground">Optimierung & Expansion</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Success Metrics */}
        <section className="py-16 bg-muted/30">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">
                Erfolgs-Kennzahlen
              </h2>
              
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">3-5%</div>
                  <p className="text-sm text-muted-foreground">Erwartete AFib-Detektionsrate bei Risiko-Populationen</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">15-25%</div>
                  <p className="text-sm text-muted-foreground">Reduktion kardiovakulärer Ereignisse</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">3:1</div>
                  <p className="text-sm text-muted-foreground">Erwarteter ROI durch Präventions-Screenings</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">90%+</div>
                  <p className="text-sm text-muted-foreground">Teilnehmer-Zufriedenheit und Compliance</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container-custom text-center">
            <h2 className="text-4xl font-bold mb-6">
              Bereit für Innovation in der Mitarbeitergesundheit?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Starten Sie noch heute ein Pilot-Programm oder fordern Sie eine ROI-Analyse an
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary">
                Pilot-Programm starten
              </Button>
              <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Enterprise-Demo vereinbaren
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Corporate;