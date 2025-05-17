
import React, { createContext, useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { trackPageView, storeUtmParams } from '@/lib/analytics';
import AnalyticsScripts from './AnalyticsScripts';

interface AnalyticsContextType {
  trackPageView: (url: string, title: string) => void;
}

const AnalyticsContext = createContext<AnalyticsContextType>({
  trackPageView: () => {},
});

export const useAnalytics = () => useContext(AnalyticsContext);

export function AnalyticsProvider({ 
  children,
  googleAnalyticsId,
  googleAdsId,
  hubspotId,
}: { 
  children: React.ReactNode;
  googleAnalyticsId?: string;
  googleAdsId?: string;
  hubspotId?: string;
}) {
  const location = useLocation();
  
  // Track page views when route changes
  useEffect(() => {
    // Store UTM parameters on initial load
    storeUtmParams();
    
    const pageTitle = document.title;
    trackPageView(window.location.href, pageTitle);
  }, [location]);
  
  // Expose analytics functions to components
  const value = {
    trackPageView: (url: string, title: string) => {
      trackPageView(url, title);
    }
  };

  return (
    <AnalyticsContext.Provider value={value}>
      <AnalyticsScripts
        googleAnalyticsId={googleAnalyticsId}
        googleAdsId={googleAdsId}
        hubspotId={hubspotId}
      />
      {children}
    </AnalyticsContext.Provider>
  );
}
