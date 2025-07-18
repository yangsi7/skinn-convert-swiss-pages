import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { CheckCircle, Heart, Shield, AlertCircle, ArrowRight, Phone } from 'lucide-react';
import { useTranslation } from '@/hooks/useTranslation';

interface EligibilityResult {
  eligible: boolean;
  coverage: 'covered' | 'self-pay' | 'consult-first';
  nextSteps: string[];
  insuranceInfo?: string;
}

const EligibilityChecker = () => {
  const t = useTranslation('eligibility');
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    symptoms: '',
    riskFactors: '',
    insuranceModel: '',
    insurer: ''
  });
  const [result, setResult] = useState<EligibilityResult | null>(null);

  const symptoms = [
    { value: 'palpitations', label: t.symptoms.palpitations },
    { value: 'dizziness', label: t.symptoms.dizziness },
    { value: 'chest-pain', label: t.symptoms.chestPain },
    { value: 'shortness', label: t.symptoms.shortness },
    { value: 'none', label: t.symptoms.none }
  ];

  const riskFactors = [
    { value: 'family-history', label: t.riskFactors.familyHistory },
    { value: 'hypertension', label: t.riskFactors.hypertension },
    { value: 'diabetes', label: t.riskFactors.diabetes },
    { value: 'age-over-50', label: t.riskFactors.ageOver50 },
    { value: 'none', label: t.riskFactors.none }
  ];

  const insuranceModels = [
    { value: 'standard', label: t.insuranceModels.standard },
    { value: 'gp-model', label: t.insuranceModels.gpModel },
    { value: 'hmo', label: t.insuranceModels.hmo },
    { value: 'telmed', label: t.insuranceModels.telmed },
    { value: 'unsure', label: t.insuranceModels.unsure }
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
            t.nextSteps.standard.step1,
            t.nextSteps.standard.step2, 
            t.nextSteps.standard.step3
          ];
          insuranceInfo = t.nextSteps.standard.info;
          break;
        case 'gp-model':
          coverage = 'consult-first';
          nextSteps = [
            t.nextSteps.gpModel.step1,
            t.nextSteps.gpModel.step2,
            t.nextSteps.gpModel.step3
          ];
          insuranceInfo = t.nextSteps.gpModel.info;
          break;
        case 'hmo':
          coverage = 'consult-first';
          nextSteps = [
            t.nextSteps.hmo.step1,
            t.nextSteps.hmo.step2,
            t.nextSteps.hmo.step3
          ];
          insuranceInfo = t.nextSteps.hmo.info;
          break;
        case 'telmed':
          nextSteps = [
            t.nextSteps.telmed.step1,
            t.nextSteps.telmed.step2,
            t.nextSteps.telmed.step3
          ];
          insuranceInfo = t.nextSteps.telmed.info;
          break;
        default:
          nextSteps = [
            t.nextSteps.unsure.step1,
            t.nextSteps.unsure.step2,
            t.nextSteps.unsure.step3
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
          t.nextSteps.selfPay.step1,
          t.nextSteps.selfPay.step2,
          t.nextSteps.selfPay.step3
        ],
        insuranceInfo: t.nextSteps.selfPay.info
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
                  ? t.results.covered.title 
                  : result.coverage === 'consult-first'
                  ? t.results.consultFirst.title
                  : t.results.selfPay.title}
              </CardTitle>
              <Badge variant={result.coverage === 'covered' ? 'default' : 'secondary'} className="text-base px-4 py-2">
                {result.coverage === 'covered' 
                  ? t.results.covered.badge 
                  : result.coverage === 'consult-first'
                  ? t.results.consultFirst.badge
                  : t.results.selfPay.badge}
              </Badge>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-lg mb-4">{t.results.covered.nextStepsTitle}</h3>
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
                    {result.coverage === 'self-pay' ? t.bookConsultation : t.learnMore}
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                  <Button size="lg" variant="outline" onClick={handleRestart}>
                    {t.startNewCheck}
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
              {t.title}
            </h2>
            <p className="text-lg text-muted-foreground">
              {t.subtitle}
            </p>
          </div>

          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-muted-foreground">{t.step} {currentStep} {t.of} 4</span>
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
                  <h3 className="text-xl font-semibold">{t.symptomsQuestion}</h3>
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
                  <h3 className="text-xl font-semibold">{t.riskFactorsQuestion}</h3>
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
                  <h3 className="text-xl font-semibold">{t.insuranceModelQuestion}</h3>
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
                  <h3 className="text-xl font-semibold">{t.insurerQuestion}</h3>
                  <Select value={formData.insurer} onValueChange={(value) => setFormData({...formData, insurer: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder={t.insurerPlaceholder} />
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
                    {t.insurerHelp}
                  </p>
                </div>
              )}

              <div className="flex justify-between pt-8">
                <Button 
                  variant="outline" 
                  onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
                  disabled={currentStep === 1}
                >
                  {t.back}
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
                  {currentStep === 4 ? t.showResult : t.next}
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