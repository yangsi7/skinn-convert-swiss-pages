import React from 'react';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';

interface SymptomSelectorProps {
  symptoms: string[];
  selectedSymptoms: string[];
  onSymptomToggle: (symptom: string) => void;
}

const SYMPTOM_LIST = [
  'Palpitations or racing heart',
  'Dizziness or light-headedness',
  'Fainting or loss of consciousness',
  'Chest pain or discomfort',
  'Shortness of breath',
  'Other',
  'None of the above'
];

export const SymptomSelector: React.FC<SymptomSelectorProps> = ({
  selectedSymptoms,
  onSymptomToggle,
}) => {
  const isDisabled = (symptom: string) => {
    return symptom !== 'None of the above' && selectedSymptoms.includes('None of the above');
  };

  return (
    <div className="space-y-4">
      <Label className="text-base font-ibm-plex-sans font-semibold text-[#004C96]">
        Are you experiencing any of these symptoms?
      </Label>
      <div className="space-y-3">
        {SYMPTOM_LIST.map(symptom => (
          <div key={symptom} className="flex items-center space-x-3">
            <Checkbox
              id={symptom}
              checked={selectedSymptoms.includes(symptom)}
              onCheckedChange={() => onSymptomToggle(symptom)}
              disabled={isDisabled(symptom)}
              className="border-[#004C96]/30 data-[state=checked]:bg-[#004C96]"
            />
            <Label 
              htmlFor={symptom} 
              className="text-base font-ibm-plex-sans text-[#0D0D0D] cursor-pointer"
            >
              {symptom}
            </Label>
          </div>
        ))}
      </div>
    </div>
  );
};