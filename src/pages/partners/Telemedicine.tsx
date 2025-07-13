import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Phone, Zap, Globe, Shield, Clock, CheckCircle } from 'lucide-react';

const Telemedicine = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-subtle">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl font-bold mb-6">
                Für <span className="text-primary">Telemedizin-Anbieter</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Erweitern Sie Ihre telemedizinischen Fähigkeiten mit SKIIN. 
                Verschreiben Sie fortschrittliche Herzüberwachung per Telefon oder Video - 
                ganz ohne Praxisbesuch.
              </p>
              <Button size="lg" className="mr-4">
                Partnership anfragen
              </Button>
              <Button variant="outline" size="lg">
                Integration besprechen
              </Button>
            </div>
          </div>
        </section>

        {/* Telehealth Alignment */}
        <section className="py-16">
          <div className="container-custom">
            <h2 className="text-3xl font-bold text-center mb-12">
              Perfekt für die Telemedizin
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <Phone className="h-10 w-10 text-primary mb-4" />
                  <CardTitle>Remote-Verschreibung</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Verschreiben Sie SKIIN während eines Telefon- oder Video-Konsults. 
                    Kein Praxisbesuch nötig - das Gerät wird direkt zum Patienten geliefert.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Zap className="h-10 w-10 text-primary mb-4" />
                  <CardTitle>Schnelle Triage</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Entscheiden Sie besser, ob ein Patient zum Kardiologen oder in die Notaufnahme muss. 
                    14 Tage Daten statt Vermutungen.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Globe className="h-10 w-10 text-primary mb-4" />
                  <CardTitle>Skalierbare Lösung</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Kein Geräte-Inventar bei Ihnen nötig. SKIIN übernimmt Logistik, 
                    Lieferung und Rückholung - Sie erhalten nur die Ergebnisse.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Telmed Compatibility */}
        <section className="py-16 bg-muted/30">
          <div className="container-custom">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">
                Telmed-Modell Kompatibilität
              </h2>
              
              <Card className="mb-8">
                <CardHeader>
                  <Shield className="h-10 w-10 text-primary mb-4" />
                  <CardTitle>Versicherungskonform</CardTitle>
                  <CardDescription>
                    SKIIN erfüllt alle Anforderungen des Schweizer Telmed-Systems
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3">Telmed-Workflow</h4>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-primary" />
                          <span className="text-sm">Patient ruft Telmed-Hotline an</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-primary" />
                          <span className="text-sm">Telemediziner verschreibt SKIIN</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-primary" />
                          <span className="text-sm">Erfüllt Überweisungsanforderung</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-primary" />
                          <span className="text-sm">Von Grundversicherung übernommen</span>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-3">Vorteile für Telmed</h4>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• Patient bleibt im Telmed-System</li>
                        <li>• Keine physischen Kliniken nötig</li>
                        <li>• Unnötige Überweisungen vermeiden</li>
                        <li>• Kosteneinsparungen für Versicherer</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Use Case Scenario */}
        <section className="py-16">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">
                Anwendungsfall: Schwindel-Patient
              </h2>
              
              <div className="bg-primary/5 p-8 rounded-lg">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                      1
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Anruf beim Telmed</h3>
                      <p className="text-muted-foreground">
                        Patient mit Telmed-Versicherung ruft wegen gelegentlichem Schwindel an
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                      2
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">SKIIN statt Notfall</h3>
                      <p className="text-muted-foreground">
                        Statt sofortiger Kardiologen-Überweisung verschreibt der Telemediziner SKIIN
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                      3
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Datenbasierte Entscheidung</h3>
                      <p className="text-muted-foreground">
                        Nach 14 Tagen: AV-Block entdeckt → sofortige Kardiologie-Überweisung mit Daten
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-success text-success-foreground rounded-full flex items-center justify-center text-sm font-bold">
                      ✓
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Optimales Ergebnis</h3>
                      <p className="text-muted-foreground">
                        Rechtzeitige Behandlung mit vollständigen Daten - oder Beruhigung bei Normalbefund
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Integration Options */}
        <section className="py-16 bg-muted/30">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">
                Integration & Compliance
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <Clock className="h-10 w-10 text-primary mb-4" />
                    <CardTitle>Flexible Interpretation</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Wählen Sie, wer die Holter-Daten interpretiert:
                    </p>
                    <ul className="space-y-2 text-sm">
                      <li>• SKIIN's Kardiologen-Netzwerk</li>
                      <li>• Ihre eigenen Fachärzte</li>
                      <li>• Hybrid-Modell je nach Fall</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <Globe className="h-10 w-10 text-primary mb-4" />
                    <CardTitle>System-Integration</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Nahtlose Integration in Ihre IT-Infrastruktur:
                    </p>
                    <ul className="space-y-2 text-sm">
                      <li>• API-Anbindung möglich</li>
                      <li>• Sichere E-Mail-Integration</li>
                      <li>• Web-Portal für Ihre Ärzte</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container-custom text-center">
            <h2 className="text-4xl font-bold mb-6">
              Erweitern Sie Ihre telemedizinischen Fähigkeiten
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Kontaktieren Sie unser Partnership-Team für eine maßgeschneiderte Integration
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary">
                Partnership besprechen
              </Button>
              <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Integration planen
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Telemedicine;