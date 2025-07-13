import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Clock, Heart, Shield, Users, FileText } from 'lucide-react';

const GeneralPractitioners = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-subtle">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl font-bold mb-6">
                Für <span className="text-primary">Hausärzte</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Als Hausarzt wollen Sie Ihren Patienten die beste Versorgung und Früherkennung bieten. 
                SKIIN hilft Ihnen dabei, Herzprobleme früher zu erkennen, ohne Ihren Praxisablauf zu belasten.
              </p>
              <Button size="lg" className="mr-4">
                Demo anfordern
              </Button>
              <Button variant="outline" size="lg">
                Mehr erfahren
              </Button>
            </div>
          </div>
        </section>

        {/* Clinical Benefits */}
        <section className="py-16">
          <div className="container-custom">
            <h2 className="text-3xl font-bold text-center mb-12">
              Klinische Vorteile für Ihre Praxis
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <Heart className="h-10 w-10 text-primary mb-4" />
                  <CardTitle>Höhere Diagnostikausbeute</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    14-Tage-EKG kann Herzrhythmusstörungen erfassen, die ein Standard-24h-Holter 
                    übersehen würde. In einer Schweizer Studie mit 500 Patienten führte die 
                    verlängerte Überwachung zu präziseren Diagnosen.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Users className="h-10 w-10 text-primary mb-4" />
                  <CardTitle>94% Patientencompliance</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Patienten tragen das Gerät deutlich öfter und länger, weil es bequem und 
                    problemlos ist. Sie erhalten vollständige 14-Tage-Daten statt fragmentierter 
                    Aufzeichnungen.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <FileText className="h-10 w-10 text-primary mb-4" />
                  <CardTitle>Optimierter Workflow</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Einfache Integration: Sie identifizieren den Patienten, wir kümmern uns um 
                    Lieferung, Schulung und Datensammlung. Sie erhalten einen umfassenden 
                    kardiologischen Bericht.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* How It Works for GPs */}
        <section className="py-16 bg-muted/30">
          <div className="container-custom">
            <h2 className="text-3xl font-bold text-center mb-12">
              So funktioniert es für Ihre Praxis
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="space-y-8">
                <div className="flex items-center gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Patient identifizieren</h3>
                    <p className="text-muted-foreground">
                      Sie identifizieren einen Patienten mit Verdacht auf Arrhythmie, Palpitationen oder andere Herzprobleme.
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">SKIIN-Überweisung</h3>
                    <p className="text-muted-foreground">
                      Überweisung über unser Online-Portal oder Papierformular - so einfach wie eine normale Holter-Verschreibung.
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">SKIIN übernimmt alles</h3>
                    <p className="text-muted-foreground">
                      Wir liefern das Gerät zum Patienten, schulen ihn und sammeln die Daten. Kein Aufwand für Ihre Praxis.
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg">
                    4
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Umfassender Bericht</h3>
                    <p className="text-muted-foreground">
                      Sie erhalten einen detaillierten, von Kardiologen unterzeichneten Bericht als PDF für Ihre Patientenakte.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Reimbursement */}
        <section className="py-16">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">
                Abrechnung & TARMED-Codes
              </h2>
              
              <Card>
                <CardHeader>
                  <Shield className="h-10 w-10 text-primary mb-4" />
                  <CardTitle>Einfache Abrechnung</CardTitle>
                  <CardDescription>
                    Verwenden Sie die üblichen TARMED-Codes für Holter-EKG
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <p className="font-semibold mb-2">TARMED 70.0010</p>
                    <p className="text-sm text-muted-foreground">
                      Für die Verschreibung eines Langzeit-EKGs
                    </p>
                  </div>
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <p className="font-semibold mb-2">Nachbesprechung</p>
                    <p className="text-sm text-muted-foreground">
                      Normale Konsultationsabrechnung für Besprechung der Ergebnisse
                    </p>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Die SKIIN-Dienstleistung selbst wird über die Krankenversicherung des Patienten abgerechnet. 
                    Keine zusätzliche Belastung für Ihre Praxis.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Testimonial */}
        <section className="py-16 bg-muted/30">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <blockquote className="text-xl italic mb-6">
                "SKIIN ist fantastisch - ich kann meinen Patienten einen Holter anbieten, 
                ohne sie sofort zum Kardiologen zu schicken. Der Prozess ist reibungslos und 
                die Ergebnisse sehr detailliert. Ein Patient entdeckte Vorhofflimmern, das wir 
                bei einem Standard-24h-Test sicher übersehen hätten."
              </blockquote>
              <cite className="text-muted-foreground">
                Dr. Meier, Hausärztin in Zürich
              </cite>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container-custom text-center">
            <h2 className="text-4xl font-bold mb-6">
              Bereit, SKIIN Ihren Patienten anzubieten?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Vereinbaren Sie einen 15-minütigen Anruf mit unserem medizinischen Direktor
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary">
                Demo vereinbaren
              </Button>
              <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Partner werden
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default GeneralPractitioners;