import React, { useState } from 'react';
import { MinimalCard } from '@/components/ui/minimal-card';
import { InsuranceModelSelector } from '../components/InsuranceModelSelector';
import { ContraindicationScreening } from '../components/ContraindicationScreening';
import { SymptomSelector } from '../components/SymptomSelector';
import { FamilyHistoryQuestion } from '../components/FamilyHistoryQuestion';
import { EligibilityStatusAlert } from '../components/EligibilityStatusAlert';
import { StageHeader } from '../components/StageHeader';
import { StageFooter } from '../components/StageFooter';

interface EligibilityGateStageProps {
  data: any;
  onUpdate: (data: any) => void;
  onNext: () => void;
  onBack: () => void;
}

export const EligibilityGateStage: React.FC<EligibilityGateStageProps> = ({
  data,
  onUpdate,
  onNext,
  onBack,
}) => {
  const [hasInsurance, setHasInsurance] = useState(data.hasInsurance ?? true);
  const [insuranceModel, setInsuranceModel] = useState(data.insuranceModel || '');
  const [symptoms, setSymptoms] = useState<string[]>(data.symptoms || []);
  const [familyHistory, setFamilyHistory] = useState(data.familyHistory || '');
  const [contraindications, setContraindications] = useState(data.contraindications || {});
  const [screeningComplete, setScreeningComplete] = useState(false);
  const [eligibilityStatus, setEligibilityStatus] = useState('');
  
  const handleSymptomToggle = (symptom: string) => {
    if (symptom === 'None of the above') {
      setSymptoms(['None of the above']);
    } else {
      const filtered = symptoms.filter(s => s !== 'None of the above');
      if (symptoms.includes(symptom)) {
        setSymptoms(filtered.filter(s => s !== symptom));
      } else {
        setSymptoms([...filtered, symptom]);
      }
    }
  };
  
  const handleContraindicationComplete = (hasContra: boolean, details: any) => {
    setContraindications(details);
    setScreeningComplete(true);
    
    if (hasContra) {
      setEligibilityStatus('contraindicated');
      onUpdate({ 
        eligibilityStatus: 'contraindicated',
        contraindications: details 
      });
    } else {
      evaluateEligibility();
    }
  };
  
  const evaluateEligibility = () => {
    const hasSymptoms = symptoms.length > 0 && !symptoms.includes('None of the above');
    
    if (hasInsurance && hasSymptoms) {
      setEligibilityStatus('eligible-insured');
      onUpdate({
        eligibilityStatus: 'eligible-insured',
        pathway: 'insured',
        hasInsurance,
        insuranceModel,
        symptoms,
        familyHistory
      });
    } else if (hasInsurance && !hasSymptoms) {
      setEligibilityStatus('screening-no-reimbursement');
      onUpdate({
        eligibilityStatus: 'screening-no-reimbursement',
        pathway: 'self-pay-option'
      });
    } else {
      setEligibilityStatus('self-pay');
      onUpdate({
        eligibilityStatus: 'self-pay',
        pathway: 'self-pay',
        hasInsurance: false
      });
    }
  };
  
  const proceedToSelfPay = () => {
    onUpdate({ pathway: 'self-pay', insuranceModel: 'SelfPay' });
    onNext();
  };
  
  const canProceed = screeningComplete && 
    eligibilityStatus && 
    eligibilityStatus !== 'contraindicated' &&
    (hasInsurance ? insuranceModel : true);
  
  return (
    <MinimalCard variant="soft" padding="lg">
      <StageHeader
        title="Eligibility Assessment"
        description="Let's determine your eligibility for Holter monitoring"
      />
      
      <div className="space-y-6">
        <InsuranceModelSelector
          hasInsurance={hasInsurance}
          onInsuranceChange={setHasInsurance}
          model={insuranceModel}
          onModelChange={setInsuranceModel}
        />
        
        <ContraindicationScreening
          onScreeningComplete={handleContraindicationComplete}
        />
        
        {screeningComplete && eligibilityStatus !== 'contraindicated' && (
          <>
            <SymptomSelector
              symptoms={symptoms}
              selectedSymptoms={symptoms}
              onSymptomToggle={handleSymptomToggle}
            />
            
            <FamilyHistoryQuestion
              value={familyHistory}
              onChange={setFamilyHistory}
            />
          </>
        )}
        
        <EligibilityStatusAlert
          status={eligibilityStatus as any}
          onProceedSelfPay={proceedToSelfPay}
          onExit={() => console.log('Exit')}
        />
      </div>
      
      <StageFooter
        onBack={onBack}
        onNext={onNext}
        nextDisabled={!canProceed || eligibilityStatus === 'contraindicated'}
      />
    </MinimalCard>
  );
};