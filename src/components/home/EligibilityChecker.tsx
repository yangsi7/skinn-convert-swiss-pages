import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { CheckCircle, Heart, Shield, AlertCircle, ArrowRight, Phone } from 'lucide-react';

interface EligibilityResult {
  eligible: boolean;
  coverage: 'covered' | 'self-pay' | 'consult-first';
  nextSteps: string[];
  insuranceInfo?: string;
}

const EligibilityChecker = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    symptoms: '',
    riskFactors: '',
    insuranceModel: '',
    insurer: ''
  });
  const [result, setResult] = useState<EligibilityResult | null>(null);

  const symptoms = [
    { value: 'palpitations', label: 'Herzrasen oder unregelmäßiger Herzschlag' },
    { value: 'dizziness', label: 'Schwindel oder Ohnmacht' },
    { value: 'chest-pain', label: 'Brustschmerzen' },
    { value: 'shortness', label: 'Atemnot bei Anstrengung' },
    { value: 'none', label: 'Keine Symptome (Vorsorge)' }
  ];

  const riskFactors = [
    { value: 'family-history', label: 'Familiengeschichte von Herzerkrankungen' },
    { value: 'hypertension', label: 'Bluthochdruck' },
    { value: 'diabetes', label: 'Diabetes' },
    { value: 'age-over-50', label: 'Über 50 Jahre alt' },
    { value: 'none', label: 'Keine Risikofaktoren' }
  ];

  const insuranceModels = [
    { value: 'standard', label: 'Standard (freie Arztwahl)' },
    { value: 'gp-model', label: 'Hausarztmodell' },
    { value: 'hmo', label: 'HMO' },
    { value: 'telmed', label: 'Telmed' },
    { value: 'unsure', label: 'Unsicher' }
  ];

  const calculateEligibility = (): EligibilityResult => {
    const hasSymptoms = formData.symptoms !== 'none';
    const hasRiskFactors = formData.riskFactors !== 'none';
    
    if (hasSymptoms || hasRiskFactors) {
      // Eligible for coverage
      let coverage: 'covered' | 'self-pay' | 'consult-first' = 'covered';
      let nextSteps: string[] = [];
      let insuranceInfo = '';

      switch (formData.insuranceModel) {
        case 'standard':
          nextSteps = [
            'Sprechen Sie mit Ihrem Hausarzt oder Kardiologen',
            'Arzt verschreibt SKIIN-Überwachung', 
            'SKIIN wird von der Grundversicherung übernommen'
          ];
          insuranceInfo = 'Bei Standard-Versicherung: Direkt zum Arzt, keine Einschränkungen';
          break;
        case 'gp-model':
          coverage = 'consult-first';
          nextSteps = [
            'Kontaktieren Sie zuerst Ihren Hausarzt',
            'Hausarzt beurteilt und überweist bei Bedarf',
            'SKIIN wird nach Überweisung übernommen'
          ];
          insuranceInfo = 'Hausarztmodell: Zuerst zum GP, dann Überweisung zu SKIIN';
          break;
        case 'hmo':
          coverage = 'consult-first';
          nextSteps = [
            'Wenden Sie sich an Ihr HMO-Zentrum',
            'HMO-Arzt beurteilt und überweist',
            'SKIIN wird nach HMO-Genehmigung übernommen'
          ];
          insuranceInfo = 'HMO: Zuerst HMO-Zentrum kontaktieren';
          break;
        case 'telmed':
          nextSteps = [
            'Rufen Sie Ihre Telmed-Hotline an',
            'Telmed-Arzt kann SKIIN direkt verschreiben',
            'Perfekt für Remote-Überwachung'
          ];
          insuranceInfo = 'Telmed: Ideal für SKIIN - Remote-Verschreibung möglich';
          break;
        default:
          nextSteps = [
            'Prüfen Sie Ihr Versicherungsmodell',
            'Kontaktieren Sie uns für Beratung',
            'Wir helfen beim richtigen Vorgehen'
          ];
      }

      return {
        eligible: true,
        coverage,
        nextSteps,
        insuranceInfo
      };
    } else {
      // No symptoms or risk factors - likely self-pay
      return {
        eligible: true,
        coverage: 'self-pay',
        nextSteps: [
          'SKIIN als Vorsorge-Screening verfügbar',
          'Kosten: ca. CHF 399 (Selbstzahler)',
          'Termin für Beratung vereinbaren'
        ],
        insuranceInfo: 'Ohne Symptome/Risiken: Meist Selbstzahler, aber wertvolle Vorsorge'
      };
    }
  };

  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    } else {
      const eligibilityResult = calculateEligibility();
      setResult(eligibilityResult);
    }
  };

  const handleRestart = () => {
    setCurrentStep(1);
    setFormData({ symptoms: '', riskFactors: '', insuranceModel: '', insurer: '' });
    setResult(null);
  };

  if (result) {
    return (
      <div className="bg-muted/20 py-16">
        <div className="container-custom">
          <Card className="max-w-4xl mx-auto">
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                {result.coverage === 'covered' ? (
                  <CheckCircle className="w-16 h-16 text-primary" />
                ) : result.coverage === 'consult-first' ? (
                  <Phone className="w-16 h-16 text-primary" />
                ) : (
                  <Heart className="w-16 h-16 text-primary" />
                )}
              </div>
              <CardTitle className="text-3xl mb-4">
                {result.coverage === 'covered' 
                  ? 'Sehr gut! SKIIN wird übernommen' 
                  : result.coverage === 'consult-first'
                  ? 'SKIIN ist möglich - Arzt zuerst kontaktieren'
                  : 'SKIIN als Vorsorge verfügbar'}
              </CardTitle>
              <Badge variant={result.coverage === 'covered' ? 'default' : 'secondary'} className="text-base px-4 py-2">
                {result.coverage === 'covered' 
                  ? 'Grundversicherung übernimmt' 
                  : result.coverage === 'consult-first'
                  ? 'Arztbesuch erforderlich'
                  : 'Selbstzahler-Option'}
              </Badge>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-lg mb-4">Ihre nächsten Schritte:</h3>
                  <div className="space-y-3">
                    {result.nextSteps.map((step, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                          {index + 1}
                        </div>
                        <p className="text-foreground">{step}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {result.insuranceInfo && (
                  <div className="bg-muted/30 p-4 rounded-lg">
                    <div className="flex items-start space-x-3">
                      <Shield className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-foreground">{result.insuranceInfo}</p>
                    </div>
                  </div>
                )}

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button size="lg" className="bg-primary hover:bg-primary/90">
                    {result.coverage === 'self-pay' ? 'Beratungstermin buchen' : 'Mehr erfahren'}
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                  <Button size="lg" variant="outline" onClick={handleRestart}>
                    Neue Prüfung starten
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-muted/20 py-16">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Kostenübernahme prüfen
            </h2>
            <p className="text-lg text-muted-foreground">
              Finden Sie in 4 einfachen Schritten heraus, ob SKIIN von Ihrer Versicherung übernommen wird
            </p>
          </div>

          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-muted-foreground">Schritt {currentStep} von 4</span>
              <span className="text-sm text-muted-foreground">{Math.round((currentStep / 4) * 100)}%</span>
            </div>
            <div className="w-full bg-muted rounded-full h-2">
              <div 
                className="bg-primary h-2 rounded-full transition-all duration-300"
                style={{ width: `${(currentStep / 4) * 100}%` }}
              ></div>
            </div>
          </div>

          <Card>
            <CardContent className="p-8">
              {currentStep === 1 && (
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold">Haben Sie eines dieser Symptome?</h3>
                  <RadioGroup value={formData.symptoms} onValueChange={(value) => setFormData({...formData, symptoms: value})}>
                    {symptoms.map((symptom) => (
                      <div key={symptom.value} className="flex items-center space-x-2">
                        <RadioGroupItem value={symptom.value} id={symptom.value} />
                        <Label htmlFor={symptom.value} className="cursor-pointer">{symptom.label}</Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>
              )}

              {currentStep === 2 && (
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold">Haben Sie Risikofaktoren?</h3>
                  <RadioGroup value={formData.riskFactors} onValueChange={(value) => setFormData({...formData, riskFactors: value})}>
                    {riskFactors.map((factor) => (
                      <div key={factor.value} className="flex items-center space-x-2">
                        <RadioGroupItem value={factor.value} id={factor.value} />
                        <Label htmlFor={factor.value} className="cursor-pointer">{factor.label}</Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>
              )}

              {currentStep === 3 && (
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold">Welches Versicherungsmodell haben Sie?</h3>
                  <RadioGroup value={formData.insuranceModel} onValueChange={(value) => setFormData({...formData, insuranceModel: value})}>
                    {insuranceModels.map((model) => (
                      <div key={model.value} className="flex items-center space-x-2">
                        <RadioGroupItem value={model.value} id={model.value} />
                        <Label htmlFor={model.value} className="cursor-pointer">{model.label}</Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>
              )}

              {currentStep === 4 && (
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold">Bei welcher Krankenkasse sind Sie versichert? (Optional)</h3>
                  <Select value={formData.insurer} onValueChange={(value) => setFormData({...formData, insurer: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Krankenkasse wählen" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="css">CSS</SelectItem>
                      <SelectItem value="helsana">Helsana</SelectItem>
                      <SelectItem value="swica">SWICA</SelectItem>
                      <SelectItem value="sanitas">Sanitas</SelectItem>
                      <SelectItem value="groupe-mutuel">Groupe Mutuel</SelectItem>
                      <SelectItem value="other">Andere</SelectItem>
                    </SelectContent>
                  </Select>
                  <p className="text-sm text-muted-foreground">
                    Diese Information hilft uns, spezifische Hinweise zu geben.
                  </p>
                </div>
              )}

              <div className="flex justify-between pt-8">
                <Button 
                  variant="outline" 
                  onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
                  disabled={currentStep === 1}
                >
                  Zurück
                </Button>
                <Button 
                  onClick={handleNext}
                  disabled={
                    (currentStep === 1 && !formData.symptoms) ||
                    (currentStep === 2 && !formData.riskFactors) ||
                    (currentStep === 3 && !formData.insuranceModel)
                  }
                  className="bg-primary hover:bg-primary/90"
                >
                  {currentStep === 4 ? 'Ergebnis anzeigen' : 'Weiter'}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default EligibilityChecker;