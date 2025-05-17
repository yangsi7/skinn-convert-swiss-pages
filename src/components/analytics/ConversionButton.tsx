
import React from 'react';
import { Button, ButtonProps } from '@/components/ui/button';
import { trackConversion, trackEvent } from '@/lib/analytics';

interface ConversionButtonProps extends ButtonProps {
  conversionId?: string; 
  conversionLabel?: string;
  eventName: string;
  eventValue?: number;
  eventParams?: Record<string, string | number | boolean>;
}

export default function ConversionButton({
  conversionId,
  conversionLabel,
  eventName,
  eventValue,
  eventParams = {},
  children,
  onClick,
  ...props
}: ConversionButtonProps) {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    // Track the event in GA4 and HubSpot
    trackEvent(eventName, {
      value: eventValue,
      ...eventParams
    });
    
    // If Google Ads conversion tracking is provided
    if (conversionId && conversionLabel) {
      trackConversion(conversionId, conversionLabel, eventValue);
    }
    
    // Call the original onClick if provided
    if (onClick) {
      onClick(e);
    }
  };
  
  return (
    <Button onClick={handleClick} {...props}>
      {children}
    </Button>
  );
}
