import React from 'react';
import { useTranslation } from '@/hooks/useTranslation';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

/**
 * Evidence page - clinical evidence and validation
 */
const Evidence = () => {
  const t = useTranslation('evidence');

  return (
    <>
      <Helmet>
        <title>{t.pageTitle}</title>
        <meta name="description" content={t.pageDescription} />
      </Helmet>
      
      <Navbar />
      
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-green-50 to-blue-50 py-20">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                {t.heroTitle}
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                {t.heroSubtitle}
              </p>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                {t.introText}
              </p>
            </div>
          </div>
        </section>

        {/* Clinical Studies Section */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {t.clinicalStudiesTitle}
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                {t.clinicalStudiesDescription}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div className="bg-blue-50 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-blue-800 mb-4">
                  {t.study1Title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {t.study1Description}
                </p>
                <p className="text-gray-700 italic mb-4">
                  {t.study1Result}
                </p>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{t.study1Metric1}</span>
                    <span className="text-2xl font-bold text-blue-600">95%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{t.study1Metric2}</span>
                    <span className="text-2xl font-bold text-blue-600">14d</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{t.study1Metric3}</span>
                    <span className="text-2xl font-bold text-blue-600">50%</span>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-green-800 mb-4">
                  {t.study2Title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {t.study2Description}
                </p>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{t.study2Metric1}</span>
                    <span className="text-2xl font-bold text-green-600">89%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{t.study2Metric2}</span>
                    <span className="text-2xl font-bold text-green-600">7x</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{t.study2Metric3}</span>
                    <span className="text-2xl font-bold text-green-600">24/7</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Technical Validation */}
            <div className="bg-purple-50 rounded-lg p-8 mt-8">
              <h3 className="text-2xl font-bold text-purple-800 mb-4">
                {t.techValidationTitle}
              </h3>
              <p className="text-gray-700">
                {t.techValidationDescription}
              </p>
            </div>

            {/* Comparative Analysis */}
            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                {t.comparisonTitle}
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <h4 className="font-semibold text-gray-700 mb-2">{t.traditionalHolter}</h4>
                  <div className="text-3xl font-bold text-red-500 mb-2">24h</div>
                  <p className="text-sm text-gray-600">{t.traditionalLimitations}</p>
                </div>
                <div className="text-center">
                  <h4 className="font-semibold text-gray-700 mb-2">{t.eventRecorder}</h4>
                  <div className="text-3xl font-bold text-orange-500 mb-2">30d</div>
                  <p className="text-sm text-gray-600">{t.eventLimitations}</p>
                </div>
                <div className="text-center">
                  <h4 className="font-semibold text-gray-700 mb-2">{t.skiinSolution}</h4>
                  <div className="text-3xl font-bold text-green-500 mb-2">14d</div>
                  <p className="text-sm text-gray-600">{t.skiinAdvantages}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Patient Success Stories */}
        <section className="py-20 bg-blue-50">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {t.successStoriesTitle}
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                {t.successStoriesDescription}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg p-8">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-2xl">👩</span>
                  </div>
                  <div>
                    <h3 className="font-semibold">{t.case1Patient}</h3>
                    <p className="text-gray-600 text-sm">{t.case1Age}</p>
                  </div>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">{t.case1Title}</h4>
                <p className="text-gray-600 mb-4">{t.case1Description}</p>
                <div className="bg-blue-50 rounded-lg p-4">
                  <h5 className="font-semibold text-blue-800 mb-2">{t.case1OutcomeTitle}</h5>
                  <p className="text-blue-700 text-sm">{t.case1Outcome}</p>
                </div>
              </div>

              <div className="bg-white rounded-lg p-8">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-2xl">👨</span>
                  </div>
                  <div>
                    <h3 className="font-semibold">{t.case2Patient}</h3>
                    <p className="text-gray-600 text-sm">{t.case2Age}</p>
                  </div>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">{t.case2Title}</h4>
                <p className="text-gray-600 mb-4">{t.case2Description}</p>
                <div className="bg-green-50 rounded-lg p-4">
                  <h5 className="font-semibold text-green-800 mb-2">{t.case2OutcomeTitle}</h5>
                  <p className="text-green-700 text-sm">{t.case2Outcome}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {t.testimonialsTitle}
              </h2>
            </div>

            <div className="space-y-8">
              {/* Patient Testimonial */}
              <div className="bg-gray-50 rounded-lg p-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-4">
                    <span className="text-4xl text-blue-500">"</span>
                  </div>
                  <div>
                    <p className="text-lg text-gray-700 mb-4 italic">
                      {t.patientTestimonial1}
                    </p>
                    <p className="text-gray-600 font-semibold">— {t.patientTestimonial1Author}</p>
                  </div>
                </div>
              </div>

              {/* Doctor Testimonial */}
              <div className="bg-gray-50 rounded-lg p-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-4">
                    <span className="text-4xl text-green-500">"</span>
                  </div>
                  <div>
                    <p className="text-lg text-gray-700 mb-4 italic">
                      {t.doctorTestimonial1}
                    </p>
                    <p className="text-gray-600 font-semibold">— {t.doctorTestimonial1Author}</p>
                  </div>
                </div>
              </div>

              {/* Researcher Testimonial */}
              <div className="bg-gray-50 rounded-lg p-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-4">
                    <span className="text-4xl text-purple-500">"</span>
                  </div>
                  <div>
                    <p className="text-lg text-gray-700 mb-4 italic">
                      {t.researcherTestimonial}
                    </p>
                    <p className="text-gray-600 font-semibold">— {t.researcherTestimonialAuthor}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Regulatory Compliance */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {t.regulatoryTitle}
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                {t.regulatoryDescription}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-8 bg-gray-50 rounded-lg">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">✅</span>
                </div>
                <h3 className="text-xl font-semibold mb-4">{t.ceMarkingTitle}</h3>
                <p className="text-gray-600">{t.ceMarkingDescription}</p>
              </div>

              <div className="text-center p-8 bg-gray-50 rounded-lg">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🔒</span>
                </div>
                <h3 className="text-xl font-semibold mb-4">{t.dataProtectionTitle}</h3>
                <p className="text-gray-600">{t.dataProtectionDescription}</p>
              </div>

              <div className="text-center p-8 bg-gray-50 rounded-lg">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🏥</span>
                </div>
                <h3 className="text-xl font-semibold mb-4">{t.clinicalValidationTitle}</h3>
                <p className="text-gray-600">{t.clinicalValidationDescription}</p>
              </div>
            </div>

            {/* Swiss Medical Standards */}
            <div className="mt-8 text-center p-8 bg-gray-50 rounded-lg">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🇨🇭</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">{t.swissMedicalTitle}</h3>
              <p className="text-gray-600">{t.swissMedicalDescription}</p>
            </div>
          </div>
        </section>

        {/* Publications & Research */}
        <section className="py-20 bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {t.publicationsTitle}
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                {t.publicationsDescription}
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 border-l-4 border-blue-500">
                <h3 className="font-semibold text-gray-900 mb-2">{t.publication1Title}</h3>
                <p className="text-gray-600 text-sm mb-2">{t.publication1Authors}</p>
                <p className="text-gray-700">{t.publication1Summary}</p>
              </div>

              <div className="bg-white rounded-lg p-6 border-l-4 border-green-500">
                <h3 className="font-semibold text-gray-900 mb-2">{t.publication2Title}</h3>
                <p className="text-gray-600 text-sm mb-2">{t.publication2Authors}</p>
                <p className="text-gray-700">{t.publication2Summary}</p>
              </div>

              <div className="bg-white rounded-lg p-6 border-l-4 border-purple-500">
                <h3 className="font-semibold text-gray-900 mb-2">{t.publication3Title}</h3>
                <p className="text-gray-600 text-sm mb-2">{t.publication3Authors}</p>
                <p className="text-gray-700">{t.publication3Summary}</p>
              </div>
            </div>

            {/* Awards Section */}
            <div className="mt-16 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">{t.awardsTitle}</h3>
              <div className="flex flex-col md:flex-row gap-6 justify-center">
                <div className="bg-yellow-50 rounded-lg p-6 border-2 border-yellow-200">
                  <span className="text-3xl mb-2">🏆</span>
                  <p className="font-semibold text-gray-800">{t.award1}</p>
                </div>
                <div className="bg-yellow-50 rounded-lg p-6 border-2 border-yellow-200">
                  <span className="text-3xl mb-2">🥈</span>
                  <p className="font-semibold text-gray-800">{t.award2}</p>
                </div>
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
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                {t.ctaEvidence}
              </button>
              <button className="bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold border border-blue-500 hover:bg-blue-600 transition-colors">
                {t.ctaContact}
              </button>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </>
  );
};

export default Evidence;