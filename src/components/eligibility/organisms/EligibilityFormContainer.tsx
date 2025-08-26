import React from 'react';
import { MinimalCard, MinimalCardContent } from '@/components/ui/minimal-card';
import { EligibilityProgressBar } from '../atoms/EligibilityProgressBar';
import { EligibilityFormStep } from './EligibilityFormStep';
import { useEligibility } from '../context/EligibilityContext';
import { useTranslation } from '@/hooks/useTranslation';
import { calculateEligibility } from '../utils/eligibilityCalculator';
import { 
  getSymptomOptions, 
  getRiskFactorOptions, 
  getInsuranceModelOptions,
  SWISS_INSURERS 
} from '../data/swissHealthcareData';
// Import all 6-stage components
import { ContactAccountStage } from '../../forms/eligibility/stages/ContactAccountStage';
import { EligibilityGateStage } from '../../forms/eligibility/stages/EligibilityGateStage';
import { DetailedInfoStage } from '../../forms/eligibility/stages/DetailedInfoStage';
import { InsuredReviewStage } from '../../forms/eligibility/stages/InsuredReviewStage';
import { SelfPayStage } from '../../forms/eligibility/stages/SelfPayStage';
import { CompletionStage } from '../../forms/eligibility/stages/CompletionStage';

export const EligibilityFormContainer: React.FC = () => {
  const { state, dispatch } = useEligibility();
  const t = useTranslation('eligibility');
  
  const options = {
    symptoms: getSymptomOptions(t),
    riskFactors: getRiskFactorOptions(t),
    insuranceModels: getInsuranceModelOptions(t),
    insurers: SWISS_INSURERS
  };

  const handleNext = () => {
    // Updated for 6 stages
    if (state.currentStep < 6) {
      dispatch({ type: 'SET_STEP', payload: state.currentStep + 1 });
    } else {
      const eligibilityResult = calculateEligibility(state.formData, t);
      dispatch({ type: 'SET_RESULT', payload: eligibilityResult });
    }
  };

  const handleBack = () => {
    if (state.currentStep > 0) { // Changed to allow going back from step 0
      dispatch({ type: 'SET_STEP', payload: state.currentStep - 1 });
    }
  };

  const updateFormData = (data: any) => {
    dispatch({ type: 'UPDATE_FORM_DATA', payload: data });
  };

  // Render the appropriate stage based on current step
  const renderCurrentStage = () => {
    switch (state.currentStep) {
      case 0: // Contact & Account
        return (
          <ContactAccountStage
            onStageComplete={(data) => {
              updateFormData(data);
              handleNext();
            }}
            onEmailVerified={(email, verified) => {
              updateFormData({ email, emailVerified: verified });
            }}
            initialData={state.formData}
          />
        );
        
      case 1: // Eligibility Gate
        return (
          <EligibilityGateStage
            data={state.formData}
            onUpdate={updateFormData}
            onNext={handleNext}
            onBack={handleBack}
          />
        );
        
      case 2: // Detailed Information
        return (
          <DetailedInfoStage
            onStageComplete={(data) => {
              updateFormData(data);
              handleNext();
            }}
            symptoms={state.formData.symptoms || []}
            initialData={state.formData.detailedInfo}
            onBack={handleBack}
          />
        );
        
      case 3: // Review & Consents OR Self-Pay
        if (state.formData.pathway === 'self-pay') {
          return (
            <SelfPayStage
              email={state.formData.email}
              onStageComplete={(data) => {
                updateFormData({ selfPayData: data });
                handleNext();
              }}
              onProcessPayment={async (paymentData) => {
                // TODO: Integrate with actual payment processor
                console.log('Processing payment:', paymentData);
                return true; // Mock success
              }}
            />
          );
        } else {
          return (
            <InsuredReviewStage
              insuranceModel={state.formData.insuranceModel}
              onStageComplete={(data) => {
                updateFormData({ reviewData: data });
                handleNext();
              }}
              onDownloadReferral={() => {
                console.log('Downloading referral packet...');
              }}
              onBookTeleconsult={() => {
                window.open('https://medgate.ch/booking', '_blank');
              }}
            />
          );
        }
        
      case 4: // Completion
      case 5: // Final step
        return (
          <CompletionStage
            pathway={state.formData.pathway || 'insured'}
            insuranceModel={state.formData.insuranceModel}
            gpChoice={state.formData.reviewData?.gpChoice}
            email={state.formData.email}
            onDownloadReferral={() => {
              console.log('Downloading referral packet...');
            }}
            onContactSupport={() => {
              window.location.href = 'mailto:support@skiin.ch';
            }}
          />
        );
        
      default:
        return (
          <div className="text-center py-8">
            <p className="text-muted-foreground">Invalid step</p>
          </div>
        );
    }
  };

  // Stage labels for progress bar
  const stageLabels = [
    'Contact',
    'Eligibility',
    'Details',
    state.formData.pathway === 'self-pay' ? 'Payment' : 'Review',
    'Consents',
    'Complete'
  ];

  return (
    <div className="max-w-3xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          {t.title || 'Swiss Holter Monitoring Eligibility'}
        </h2>
        <p className="text-lg text-muted-foreground">
          {t.subtitle || 'Complete this form to check your eligibility'}
        </p>
      </div>

      <EligibilityProgressBar 
        currentStep={state.currentStep}
        totalSteps={6}
        className="mb-8"
      />

      <MinimalCard>
        <MinimalCardContent className="p-8">
          {renderCurrentStage()}
        </MinimalCardContent>
      </MinimalCard>
    </div>
  );
};