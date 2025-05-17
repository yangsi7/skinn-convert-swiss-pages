
import React, { useEffect } from 'react';

interface AnalyticsScriptsProps {
  googleAnalyticsId?: string;
  googleAdsId?: string;
  hubspotId?: string;
}

export default function AnalyticsScripts({ 
  googleAnalyticsId = "G-XXXXXXXXXX", // Replace with actual GA4 measurement ID
  googleAdsId = "AW-XXXXXXXXXX", // Replace with actual Google Ads ID
  hubspotId = "XXXXXXXX" // Replace with actual HubSpot tracking code
}: AnalyticsScriptsProps) {

  useEffect(() => {
    // Google Tag Manager
    const injectGTMScript = () => {
      const script = document.createElement('script');
      script.id = "gtm-script";
      script.innerHTML = `
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-XXXXXXX'); // Replace with actual GTM ID
      `;
      document.head.appendChild(script);
    };

    // Google Analytics 4
    const injectGA4Script = () => {
      const script = document.createElement('script');
      script.id = "ga4-script";
      script.src = `https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`;
      script.async = true;
      document.head.appendChild(script);
      
      const configScript = document.createElement('script');
      configScript.id = "ga4-config";
      configScript.innerHTML = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${googleAnalyticsId}', {
          page_path: window.location.pathname,
          cookie_flags: 'SameSite=None; Secure'
        });
        gtag('config', '${googleAdsId}');
      `;
      document.head.appendChild(configScript);
    };

    // HubSpot Tracking Code
    const injectHubspotScript = () => {
      const script = document.createElement('script');
      script.id = "hubspot-script";
      script.innerHTML = `
        (function(d,s,i,r) {
          if (d.getElementById(i)){return;}
          var n=d.createElement(s),e=d.getElementsByTagName(s)[0];
          n.id=i;n.src='//js.hs-scripts.com/${hubspotId}.js';
          e.parentNode.insertBefore(n,e);
        })(document,"script","hs-script");
      `;
      document.head.appendChild(script);
    };

    // HubSpot Forms
    const injectHubspotFormsScript = () => {
      const script = document.createElement('script');
      script.id = "hubspot-forms";
      script.src = "//js.hsforms.net/forms/embed/v2.js";
      script.async = true;
      document.head.appendChild(script);
    };

    // Inject all scripts
    injectGTMScript();
    injectGA4Script();
    
    // Load HubSpot scripts with a slight delay to prioritize GTM and GA4
    setTimeout(() => {
      injectHubspotScript();
      injectHubspotFormsScript();
    }, 2000);

    // Cleanup function to remove scripts when component unmounts
    return () => {
      const scriptsToRemove = [
        "gtm-script", 
        "ga4-script", 
        "ga4-config", 
        "hubspot-script", 
        "hubspot-forms"
      ];
      
      scriptsToRemove.forEach(id => {
        const script = document.getElementById(id);
        if (script) {
          script.remove();
        }
      });
    };
  }, [googleAnalyticsId, googleAdsId, hubspotId]);

  return (
    <>
      {/* Google Tag Manager noscript (for when JavaScript is disabled) */}
      <noscript>
        <iframe 
          src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXXX" 
          height="0" 
          width="0" 
          style={{ display: 'none', visibility: 'hidden' }}
        />
      </noscript>
    </>
  );
}
