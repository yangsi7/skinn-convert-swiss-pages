import React from 'react';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';
import { MinimalButton } from '@/components/ui/minimal-button';
import { CheckCircle, Info, AlertTriangle } from 'lucide-react';

interface EligibilityStatusAlertProps {
  status: 'eligible-insured' | 'screening-no-reimbursement' | 'self-pay' | 'contraindicated' | '';
  onProceedSelfPay?: () => void;
  onExit?: () => void;
}

export const EligibilityStatusAlert: React.FC<EligibilityStatusAlertProps> = ({
  status,
  onProceedSelfPay,
  onExit,
}) => {
  if (!status) return null;

  if (status === 'eligible-insured') {
    return (
      <Alert className="bg-green-50 border-green-300">
        <CheckCircle className="h-5 w-5 text-green-600" />
        <AlertTitle className="text-green-800 font-ibm-plex-sans font-semibold">
          You may be eligible for reimbursement
        </AlertTitle>
        <AlertDescription className="text-green-700 font-ibm-plex-sans">
          Based on your insurance and symptoms, your Holter monitoring may be covered.
        </AlertDescription>
      </Alert>
    );
  }

  if (status === 'screening-no-reimbursement') {
    return (
      <Alert className="bg-amber-50 border-amber-300">
        <Info className="h-5 w-5 text-amber-600" />
        <AlertTitle className="text-amber-800 font-ibm-plex-sans font-semibold">
          Screening without symptoms
        </AlertTitle>
        <AlertDescription className="text-amber-700 font-ibm-plex-sans">
          <p className="mb-4">
            Preventive screening is typically not reimbursed. Would you like to proceed as self-pay?
          </p>
          <div className="flex gap-3">
            <MinimalButton size="sm" onClick={onProceedSelfPay}>
              Yes, proceed as self-pay
            </MinimalButton>
            <MinimalButton size="sm" variant="secondary" onClick={onExit}>
              No, exit
            </MinimalButton>
          </div>
        </AlertDescription>
      </Alert>
    );
  }

  if (status === 'self-pay') {
    return (
      <Alert className="bg-[#EEE8E1] border-[#004C96]/20">
        <Info className="h-5 w-5 text-[#004C96]" />
        <AlertTitle className="text-[#004C96] font-ibm-plex-sans font-semibold">
          Self-Pay Option
        </AlertTitle>
        <AlertDescription className="text-[#475259] font-ibm-plex-sans">
          You'll proceed with the self-pay option for Holter monitoring.
        </AlertDescription>
      </Alert>
    );
  }

  if (status === 'contraindicated') {
    return (
      <Alert className="bg-red-50 border-red-300">
        <AlertTriangle className="h-5 w-5 text-red-600" />
        <AlertTitle className="text-red-800 font-ibm-plex-sans font-semibold">
          Medical Review Required
        </AlertTitle>
        <AlertDescription className="text-red-700 font-ibm-plex-sans">
          Based on your responses, please consult with a healthcare provider before proceeding.
        </AlertDescription>
      </Alert>
    );
  }

  return null;
};