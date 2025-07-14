import React from 'react';
import { useTranslation } from '@/hooks/useTranslation';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

/**
 * About page - company background and mission
 */
const About = () => {
  const t = useTranslation('about');

  return (
    <>
      <Helmet>
        <title>{t.pageTitle}</title>
        <meta name="description" content={t.pageDescription} />
      </Helmet>
      
      <Navbar />
      
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                {t.heroTitle}
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                {t.heroSubtitle}
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  {t.missionTitle}
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  {t.missionDescription}
                </p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <span>{t.missionPoint1}</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <span>{t.missionPoint2}</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <span>{t.missionPoint3}</span>
                  </div>
                </div>
              </div>
              <div>
                <img 
                  src="/src/assets/marketing/swiss-insurance-coverage.png" 
                  alt="Swiss healthcare innovation"
                  className="w-full rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Company Story */}
        <section className="py-20 bg-gray-50">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  {t.storyTitle}
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  {t.storyDescription}
                </p>
                <p className="text-lg text-gray-600">
                  {t.companyInfo}
                </p>
              </div>

              <div className="space-y-8">
                <div className="bg-white rounded-lg p-8">
                  <div className="flex items-center mb-4">
                    <div className="w-3 h-3 bg-blue-500 rounded-full mr-4"></div>
                    <h3 className="text-xl font-semibold">{t.timeline1Year}</h3>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">{t.timeline1Title}</h4>
                  <p className="text-gray-600">{t.timeline1Description}</p>
                </div>

                <div className="bg-white rounded-lg p-8">
                  <div className="flex items-center mb-4">
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-4"></div>
                    <h3 className="text-xl font-semibold">{t.timeline2Year}</h3>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">{t.timeline2Title}</h4>
                  <p className="text-gray-600">{t.timeline2Description}</p>
                </div>

                <div className="bg-white rounded-lg p-8">
                  <div className="flex items-center mb-4">
                    <div className="w-3 h-3 bg-purple-500 rounded-full mr-4"></div>
                    <h3 className="text-xl font-semibold">{t.timeline3Year}</h3>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">{t.timeline3Title}</h4>
                  <p className="text-gray-600">{t.timeline3Description}</p>
                </div>

                <div className="bg-white rounded-lg p-8 border-2 border-blue-200">
                  <div className="flex items-center mb-4">
                    <div className="w-3 h-3 bg-red-500 rounded-full mr-4"></div>
                    <h3 className="text-xl font-semibold">{t.timeline4Year}</h3>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">{t.timeline4Title}</h4>
                  <p className="text-gray-600">{t.timeline4Description}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Leadership Team */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {t.teamTitle}
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                {t.teamDescription}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-32 h-32 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-4xl">👨‍💼</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{t.leader1Name}</h3>
                <p className="text-blue-600 font-medium mb-2">{t.leader1Role}</p>
                <p className="text-gray-600 text-sm">{t.leader1Bio}</p>
              </div>

              <div className="text-center">
                <div className="w-32 h-32 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-4xl">👩‍⚕️</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{t.leader2Name}</h3>
                <p className="text-blue-600 font-medium mb-2">{t.leader2Role}</p>
                <p className="text-gray-600 text-sm">{t.leader2Bio}</p>
              </div>

              <div className="text-center">
                <div className="w-32 h-32 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-4xl">👨‍💻</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{t.leader3Name}</h3>
                <p className="text-blue-600 font-medium mb-2">{t.leader3Role}</p>
                <p className="text-gray-600 text-sm">{t.leader3Bio}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Partners & Supporters */}
        <section className="py-20 bg-blue-50">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {t.partnersTitle}
              </h2>
              <p className="text-lg text-gray-600">
                {t.partnersDescription}
              </p>
            </div>
          </div>
        </section>

        {/* Why Switzerland */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                {t.swissTitle}
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                {t.swissDescription}
              </p>
            </div>
          </div>
        </section>

        {/* Quick Facts */}
        <section className="py-20 bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {t.quickFactsTitle}
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
              <div className="bg-white rounded-lg p-6 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🏢</span>
                </div>
                <p className="text-gray-700">{t.fact1}</p>
              </div>
              <div className="bg-white rounded-lg p-6 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📅</span>
                </div>
                <p className="text-gray-700">{t.fact2}</p>
              </div>
              <div className="bg-white rounded-lg p-6 text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">👥</span>
                </div>
                <p className="text-gray-700">{t.fact3}</p>
              </div>
              <div className="bg-white rounded-lg p-6 text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🏆</span>
                </div>
                <p className="text-gray-700">{t.fact4}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
          <div className="container-custom text-center">
            <h2 className="text-3xl font-bold mb-4">
              {t.ctaTitle}
            </h2>
            <p className="text-xl mb-8 opacity-90">
              {t.ctaSubtitle}
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              {t.ctaButton}
            </button>
          </div>
        </section>
      </div>
      
      <Footer />
    </>
  );
};

export default About;