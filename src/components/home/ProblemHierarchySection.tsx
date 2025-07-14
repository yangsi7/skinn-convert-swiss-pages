import React from 'react';
import { useTranslation } from '@/hooks/useTranslation';

/**
 * Problem Hierarchy Section - addresses the key problems SKIIN solves
 * Uses the German marketing assets to highlight silent arrhythmias, stroke risk, and detection improvement
 */
const ProblemHierarchySection = () => {
  const t = useTranslation('home');

  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t.problemsTitle || 'The Hidden Cardiac Health Crisis'}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t.problemsSubtitle || 'Traditional cardiac monitoring misses critical heart rhythm disorders that put patients at risk. SKIIN addresses these gaps with advanced 14-day monitoring technology.'}
          </p>
        </div>

        {/* Problem Statistics Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Problem 1: Silent Arrhythmias */}
          <div className="text-center group hover:transform hover:scale-105 transition-transform duration-300">
            <div className="relative overflow-hidden rounded-xl shadow-lg mb-6">
              <img 
                src="/src/assets/marketing/silent-arrhythmias-70-percent.png" 
                alt="70% of heart rhythm disorders remain unnoticed"
                className="w-full h-auto group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">
              {t.problem1Title || 'Silent Heart Rhythm Disorders'}
            </h3>
            <p className="text-gray-600">
              {t.problem1Description || 'Over 70% of arrhythmias go undetected with traditional monitoring, leaving patients unaware of serious cardiac risks.'}
            </p>
          </div>

          {/* Problem 2: Stroke Risk */}
          <div className="text-center group hover:transform hover:scale-105 transition-transform duration-300">
            <div className="relative overflow-hidden rounded-xl shadow-lg mb-6">
              <img 
                src="/src/assets/marketing/stroke-risk-30-percent.png" 
                alt="30% of people with atrial fibrillation suffer a stroke"
                className="w-full h-auto group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">
              {t.problem2Title || 'Preventable Stroke Risk'}
            </h3>
            <p className="text-gray-600">
              {t.problem2Description || '30% of people with undiagnosed atrial fibrillation will suffer a stroke that could have been prevented with early detection.'}
            </p>
          </div>

          {/* Problem 3: Limited Detection */}
          <div className="text-center group hover:transform hover:scale-105 transition-transform duration-300">
            <div className="relative overflow-hidden rounded-xl shadow-lg mb-6">
              <img 
                src="/src/assets/marketing/improved-detection-50-percent.png" 
                alt="14-day monitoring detects up to 50% more arrhythmias"
                className="w-full h-auto group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">
              {t.problem3Title || 'Extended Monitoring Advantage'}
            </h3>
            <p className="text-gray-600">
              {t.problem3Description || '14-day monitoring with SKIIN detects up to 50% more heart rhythm disorders compared to traditional 24-hour Holter monitors.'}
            </p>
          </div>
        </div>

        {/* Solution Introduction */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                {t.solutionIntroTitle || 'SKIIN: The Solution to Silent Heart Risk'}
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                {t.solutionIntroDescription || 'Our comfortable, textile-based cardiac monitor provides continuous 14-day ECG recording, dramatically improving arrhythmia detection while allowing patients to maintain their normal activities.'}
              </p>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-gray-700">{t.solutionBenefit1 || 'Comfortable 14-day continuous monitoring'}</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-gray-700">{t.solutionBenefit2 || 'AI-powered analysis by certified cardiologists'}</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-gray-700">{t.solutionBenefit3 || 'Fully covered by Swiss health insurance'}</span>
                </li>
              </ul>
            </div>
            <div className="order-first md:order-last">
              <img 
                src="/src/assets/marketing/myant-care360-app.png" 
                alt="Myant Care360 comprehensive cardiac monitoring solution"
                className="w-full rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">
            {t.problemsCtaTitle || 'Take Control of Your Heart Health'}
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            {t.problemsCtaDescription || 'Don\'t wait for symptoms to appear. Ask your doctor about SKIIN cardiac monitoring today.'}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              {t.problemsCtaPatient || 'I am a Patient'}
            </button>
            <button className="bg-white text-blue-600 border-2 border-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
              {t.problemsCtaPhysician || 'I am a Physician'}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemHierarchySection;