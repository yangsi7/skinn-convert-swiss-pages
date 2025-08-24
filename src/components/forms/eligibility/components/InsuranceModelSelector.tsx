import React from 'react';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Info } from 'lucide-react';

interface InsuranceModelSelectorProps {
  hasInsurance: boolean;
  onInsuranceChange: (hasInsurance: boolean) => void;
  model: string;
  onModelChange: (model: string) => void;
}

export const InsuranceModelSelector: React.FC<InsuranceModelSelectorProps> = ({
  hasInsurance,
  onInsuranceChange,
  model,
  onModelChange,
}) => {
  return (
    <div className="space-y-4">
      <div>
        <Label className="text-base font-semibold mb-3 block">
          Do you have health insurance coverage in Switzerland?
        </Label>
        <RadioGroup 
          value={hasInsurance ? 'yes' : 'no'} 
          onValueChange={(v) => onInsuranceChange(v === 'yes')}
        >
          <div className="flex space-x-6">
            <div className="flex items-center">
              <RadioGroupItem value="yes" id="ins-yes" />
              <Label htmlFor="ins-yes" className="ml-2">Yes</Label>
            </div>
            <div className="flex items-center">
              <RadioGroupItem value="no" id="ins-no" />
              <Label htmlFor="ins-no" className="ml-2">No</Label>
            </div>
          </div>
        </RadioGroup>
      </div>

      {hasInsurance && (
        <div>
          <Label htmlFor="model" className="mb-2 block">
            Select your insurance model
          </Label>
          <Select value={model} onValueChange={onModelChange}>
            <SelectTrigger id="model">
              <SelectValue placeholder="Choose your insurance model" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="standard">
                <div>
                  <div className="font-medium">Standard/Flex</div>
                  <div className="text-xs text-muted-foreground">
                    Free choice of doctor
                  </div>
                </div>
              </SelectItem>
              <SelectItem value="hmo">
                <div>
                  <div className="font-medium">HMO/Hausarzt</div>
                  <div className="text-xs text-muted-foreground">
                    Assigned family doctor
                  </div>
                </div>
              </SelectItem>
              <SelectItem value="telmed">
                <div>
                  <div className="font-medium">Telmed</div>
                  <div className="text-xs text-muted-foreground">
                    Call hotline first
                  </div>
                </div>
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
      )}

      {!hasInsurance && (
        <div className="bg-blue-50 p-3 rounded-lg flex items-start space-x-2">
          <Info className="h-4 w-4 text-blue-600 mt-0.5" />
          <p className="text-sm text-blue-900">
            You will proceed with self-pay option
          </p>
        </div>
      )}
    </div>
  );
};