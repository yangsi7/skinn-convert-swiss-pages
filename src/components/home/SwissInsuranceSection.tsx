import React from 'react';
import { useTranslation } from '@/hooks/useTranslation';

/**
 * Swiss Insurance Section - highlights full coverage by Swiss health insurance
 * Uses the Swiss marketing assets to showcase coverage and call to action
 */
const SwissInsuranceSection = () => {
  const t = useTranslation('home');

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-green-50">
      <div className="container-custom">
        {/* Swiss Coverage Hero */}
        <div className="text-center mb-16">
          <img 
            src="/src/assets/marketing/swiss-insurance-coverage.png" 
            alt="Fully covered by Swiss health insurance"
            className="w-full max-w-4xl mx-auto rounded-2xl shadow-2xl mb-8"
          />
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t.insuranceTitle || 'Vollständig von der Schweizer Krankenversicherung abgedeckt'}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t.insuranceDescription || 'SKIIN cardiac monitoring is recognized and fully covered by all major Swiss health insurance providers, making advanced heart health monitoring accessible to everyone.'}
          </p>
        </div>

        {/* Coverage Benefits Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center p-8 bg-white rounded-xl shadow-lg border border-gray-100">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">✅</span>
            </div>
            <h3 className="text-xl font-semibold mb-4 text-gray-900">
              {t.coverageBenefit1Title || 'No Out-of-Pocket Costs'}
            </h3>
            <p className="text-gray-600">
              {t.coverageBenefit1Description || 'Complete coverage means patients pay nothing extra for this advanced cardiac monitoring service.'}
            </p>
          </div>

          <div className="text-center p-8 bg-white rounded-xl shadow-lg border border-gray-100">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">🏥</span>
            </div>
            <h3 className="text-xl font-semibold mb-4 text-gray-900">
              {t.coverageBenefit2Title || 'All Major Insurers'}
            </h3>
            <p className="text-gray-600">
              {t.coverageBenefit2Description || 'Accepted by CSS, Helsana, Swica, Sanitas, and all other Swiss health insurance providers.'}
            </p>
          </div>

          <div className="text-center p-8 bg-white rounded-xl shadow-lg border border-gray-100">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">📋</span>
            </div>
            <h3 className="text-xl font-semibold mb-4 text-gray-900">
              {t.coverageBenefit3Title || 'Simple Process'}
            </h3>
            <p className="text-gray-600">
              {t.coverageBenefit3Description || 'Your doctor prescribes SKIIN monitoring, and your insurance handles the rest automatically.'}
            </p>
          </div>
        </div>

        {/* Comprehensive Service Overview */}
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-gray-100 mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              {t.serviceOverviewTitle || 'Comprehensive Cardiac Care Service'}
            </h3>
            <p className="text-lg text-gray-600">
              {t.serviceOverviewDescription || 'From prescription to final report, SKIIN provides a complete cardiac monitoring solution covered by your insurance.'}
            </p>
          </div>
          
          <img 
            src="/src/assets/marketing/comprehensive-holter-service.png" 
            alt="Complete SKIIN service from home Holter-EKG to AI analysis by cardiologists"
            className="w-full rounded-xl shadow-lg"
          />
        </div>

        {/* Live Longer, Younger CTA */}
        <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 md:p-12 text-white">
          <div className="relative z-10">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  {t.liveLongerTitle || 'Länger jünger leben.'}
                </h3>
                <p className="text-lg mb-6 opacity-90">
                  {t.liveLongerDescription || 'Take control of your heart health with SKIIN\'s advanced monitoring technology. Early detection saves lives.'}
                </p>
                <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors">
                  {t.liveLongerCta || 'Jetzt anmelden'}
                </button>
              </div>
              <div className="order-first md:order-last">
                <img 
                  src="/src/assets/marketing/cta-live-longer-younger.png" 
                  alt="Live longer, younger - Register now"
                  className="w-full rounded-lg"
                />
              </div>
            </div>
          </div>
          
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-40 h-40 bg-white rounded-full -translate-x-20 -translate-y-20"></div>
            <div className="absolute bottom-0 right-0 w-60 h-60 bg-white rounded-full translate-x-30 translate-y-30"></div>
          </div>
        </div>

        {/* Insurance Partner Logos (Placeholder) */}
        <div className="mt-16 text-center">
          <h4 className="text-lg font-semibold text-gray-700 mb-8">
            {t.insurancePartnersTitle || 'Trusted by Switzerland\'s Leading Health Insurance Providers'}
          </h4>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center opacity-60">
            {/* Placeholder for insurance logos */}
            <div className="text-center">
              <div className="h-12 bg-gray-200 rounded flex items-center justify-center mb-2">
                <span className="font-semibold text-gray-600">CSS</span>
              </div>
            </div>
            <div className="text-center">
              <div className="h-12 bg-gray-200 rounded flex items-center justify-center mb-2">
                <span className="font-semibold text-gray-600">Helsana</span>
              </div>
            </div>
            <div className="text-center">
              <div className="h-12 bg-gray-200 rounded flex items-center justify-center mb-2">
                <span className="font-semibold text-gray-600">Swica</span>
              </div>
            </div>
            <div className="text-center">
              <div className="h-12 bg-gray-200 rounded flex items-center justify-center mb-2">
                <span className="font-semibold text-gray-600">Sanitas</span>
              </div>
            </div>
            <div className="text-center">
              <div className="h-12 bg-gray-200 rounded flex items-center justify-center mb-2">
                <span className="font-semibold text-gray-600">Concordia</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SwissInsuranceSection;