import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Activity, Brain, Database, Award, Stethoscope, BarChart } from 'lucide-react';

const Cardiologists = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-subtle">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl font-bold mb-6">
                Für <span className="text-primary">Kardiologen</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Verpassen Sie nie wieder eine Arrhythmie. SKIIN's 14-Tage-EKG erweitert Ihre 
                diagnostischen Fähigkeiten und bietet Ihnen umfassendere Patientendaten.
              </p>
              <Button size="lg" className="mr-4">
                Klinische Evidenz ansehen
              </Button>
              <Button variant="outline" size="lg">
                Demo anfordern
              </Button>
            </div>
          </div>
        </section>

        {/* Diagnostic Superiority */}
        <section className="py-16">
          <div className="container-custom">
            <h2 className="text-3xl font-bold text-center mb-12">
              Diagnostische Überlegenheit
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <Activity className="h-10 w-10 text-primary mb-4" />
                  <CardTitle>14 vs. 24 Stunden</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Erfassen Sie Vorhofflimmern-Episoden, die kurze Holter übersehen. 
                    Studien zeigen bis zu 400% höhere Detektionsraten bei intermittierenden Arrhythmien.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Database className="h-10 w-10 text-primary mb-4" />
                  <CardTitle>Klinisch validierte Daten</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Hospital-grade EKG-Qualität mit CE-Zertifizierung als Medizinprodukt. 
                    Validiert gegen Standard-Holter für Genauigkeit und Zuverlässigkeit.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Brain className="h-10 w-10 text-primary mb-4" />
                  <CardTitle>KI-gestützte Analyse</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Machine-Learning-Algorithmen markieren potenzielle Ereignisse, die dann 
                    von Kardiologen überprüft werden. Mehr Signal, weniger Rauschen.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Practice Integration */}
        <section className="py-16 bg-muted/30">
          <div className="container-custom">
            <h2 className="text-3xl font-bold text-center mb-12">
              Praxisintegration & Effizienz
            </h2>
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold mb-6">Für Ihre Klinik</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mt-1">
                      <Stethoscope className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Direkte Verschreibung</h4>
                      <p className="text-muted-foreground text-sm">
                        Verwenden Sie SKIIN als Ihren Standard-Holter. Patienten erhalten das Gerät 
                        zu Hause, ohne Klinikbesuche für Anbringung/Entfernung.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mt-1">
                      <Database className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Sichere Datenübertragung</h4>
                      <p className="text-muted-foreground text-sm">
                        Zugang zu Patientendaten über unser sicheres Ärzte-Portal. 
                        Real-time Monitoring oder finale Berichte - Sie entscheiden.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-6">Überweisungen von Hausärzten</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mt-1">
                      <BarChart className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Mehr qualifizierte Überweisungen</h4>
                      <p className="text-muted-foreground text-sm">
                        Hausärzte können mit SKIIN früher erkennen, wer eine kardiologische 
                        Betreuung benötigt - mit umfassenden 14-Tage-Daten.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mt-1">
                      <Award className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Telekardiologie</h4>
                      <p className="text-muted-foreground text-sm">
                        Überwachen Sie Langzeit-EKGs remote und konsultieren Sie Patienten 
                        via Telemedizin - erweitern Sie Ihr Serviceangebot digital.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Clinical Evidence */}
        <section className="py-16">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">
                Klinische Evidenz & Innovation
              </h2>
              
              <Card className="mb-8">
                <CardHeader>
                  <Award className="h-10 w-10 text-primary mb-4" />
                  <CardTitle>International anerkannt</CardTitle>
                  <CardDescription>
                    SKIIN's Technologie wurde international ausgezeichnet
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-muted/50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">CES 2025 Health Award</h4>
                      <p className="text-sm text-muted-foreground">
                        Ausgezeichnet für Innovation in der digitalen Gesundheitstechnologie
                      </p>
                    </div>
                    <div className="bg-muted/50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">CE-Zertifizierung</h4>
                      <p className="text-sm text-muted-foreground">
                        Zugelassen als Medizinprodukt Klasse IIa nach EU-Standards
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="bg-primary/5 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Fallstudie</h3>
                <p className="text-muted-foreground">
                  <strong>Patient:</strong> 58-jährige Patientin mit gelegentlichem Schwindel.<br/>
                  <strong>24h-Holter:</strong> Normalbefund<br/>
                  <strong>SKIIN 14-Tage:</strong> AV-Block Grad II an Tag 7 entdeckt<br/>
                  <strong>Ergebnis:</strong> Rechtzeitige Schrittmacher-Implantation, Schlaganfall-Prävention
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Peer Testimonial */}
        <section className="py-16 bg-muted/30">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <blockquote className="text-xl italic mb-6">
                "Die 14-Tage-Daten von SKIIN halfen mir, eine Arrhythmie zu diagnostizieren, 
                die wir sonst vielleicht übersehen hätten. Der kontinuierliche Datenstrom 
                ist ein Game-Changer für die Arrhythmie-Diagnostik."
              </blockquote>
              <cite className="text-muted-foreground">
                Dr. Müller, Kardiologe am Universitätsspital
              </cite>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container-custom text-center">
            <h2 className="text-4xl font-bold mb-6">
              Bereit für die nächste Generation der Holter-Diagnostik?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Werden Sie Teil unseres kardiologischen Netzwerks
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary">
                Netzwerk beitreten
              </Button>
              <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Demo-Kit anfordern
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Cardiologists;