
import React from 'react';
import Script from 'next/script';

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
  return (
    <>
      {/* Google Tag Manager */}
      <Script
        id="gtm-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-XXXXXXX'); // Replace with actual GTM ID
          `
        }}
      />
      
      {/* Google Analytics 4 */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`}
        strategy="afterInteractive"
        id="ga4-script"
      />
      
      <Script
        id="ga4-config"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${googleAnalyticsId}', {
            page_path: window.location.pathname,
            cookie_flags: 'SameSite=None; Secure'
          });
          gtag('config', '${googleAdsId}');
          `
        }}
      />
      
      {/* HubSpot Tracking Code */}
      <Script
        id="hubspot-script"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html: `
          (function(d,s,i,r) {
            if (d.getElementById(i)){return;}
            var n=d.createElement(s),e=d.getElementsByTagName(s)[0];
            n.id=i;n.src='//js.hs-scripts.com/${hubspotId}.js';
            e.parentNode.insertBefore(n,e);
          })(document,"script","hs-script");
          `
        }}
      />
      
      {/* HubSpot Forms */}
      <Script
        id="hubspot-forms"
        strategy="lazyOnload"
        src="//js.hsforms.net/forms/embed/v2.js"
      />
    </>
  );
}
