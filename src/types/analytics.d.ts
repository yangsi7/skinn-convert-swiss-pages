
// Global analytics objects
interface Window {
  dataLayer?: any[];
  gtag?: (...args: any[]) => void;
  _hsq?: any[];
  hbspt?: {
    forms: {
      create: (config: any) => void;
    };
  };
}
