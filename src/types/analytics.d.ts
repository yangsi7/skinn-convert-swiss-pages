
// Global type definitions for analytics scripts

interface Window {
  // Google Analytics / Tag Manager
  dataLayer?: any[];
  gtag?: (...args: any[]) => void;
  
  // HubSpot
  _hsq?: any[];
  hbspt?: {
    forms: {
      create: (options: any) => void;
    };
  };
}
