
import React, { useEffect, useRef } from 'react';
import { getStoredUtmParams } from '@/lib/analytics';

interface HubSpotFormProps {
  formId: string;
  portalId: string;
  className?: string;
  onFormSubmit?: (data: any) => void;
  region?: string;
}

export default function HubSpotForm({
  formId,
  portalId,
  className = '',
  onFormSubmit,
  region = 'eu1'
}: HubSpotFormProps) {
  const formContainerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Make sure the script is loaded
    if (!window.hbspt) {
      console.warn('[HubSpotForm] HubSpot form script not loaded yet');
      return;
    }
    
    const utmParams = getStoredUtmParams();
    
    // Create the form
    if (formContainerRef.current) {
      // @ts-ignore - hbspt is globally available from HubSpot script
      window.hbspt.forms.create({
        region,
        portalId,
        formId,
        target: `#${formContainerRef.current.id}`,
        formInstanceId: `form-${formId}`,
        inlineMessage: true,
        onFormSubmit: (data: any) => {
          if (onFormSubmit) onFormSubmit(data);
        },
        onFormReady: (form: any) => {
          // Add UTM parameters as hidden fields
          Object.entries(utmParams).forEach(([key, value]) => {
            const hiddenField = document.createElement('input');
            hiddenField.type = 'hidden';
            hiddenField.name = key;
            hiddenField.value = value;
            form.appendChild(hiddenField);
          });
        }
      });
    }
    
    return () => {
      // Clean up the form when component unmounts
      if (formContainerRef.current) {
        formContainerRef.current.innerHTML = '';
      }
    };
  }, [formId, portalId, onFormSubmit, region]);

  const uniqueId = `hubspot-form-${formId}`;
  
  return (
    <div id={uniqueId} ref={formContainerRef} className={className}>
      <div className="text-center p-4">
        <div className="animate-pulse flex space-x-4 justify-center">
          <div className="h-5 w-5 bg-myant-green/20 rounded-full"></div>
          <div className="h-5 w-5 bg-myant-green/30 rounded-full"></div>
          <div className="h-5 w-5 bg-myant-green/40 rounded-full"></div>
        </div>
        <p className="text-muted-foreground mt-2">Loading form...</p>
      </div>
    </div>
  );
}
