import React from 'react';
import { useTranslation } from '@/hooks/useTranslation';
import { useLanguage } from '@/contexts/LanguageContext';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { ArrowRight, Activity, BarChart3, Users, Zap, FileText, Shield } from 'lucide-react';

/**
 * For Physicians page - comprehensive information for healthcare professionals
 * Follows target-specs.md content structure
 */
const ForPhysicians = () => {
  const t = useTranslation('forPhysicians');
  const { language } = useLanguage();

  return (
    <>
      <Helmet>
        <title>{t.pageTitle}</title>
        <meta name="description" content={t.pageDescription} />
      </Helmet>
      
      <Navbar />
      
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#1A73E8] to-[#1557B0] text-white py-20">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                {t.heroTitle}
              </h1>
              <p className="text-xl opacity-90 mb-8">
                {t.heroSubtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-white text-[#1A73E8] hover:bg-gray-100"
                  asChild
                >
                  <Link to={language === 'en' ? '/contact' : `/${language}/contact`}>
                    {t.heroCTA}
                  </Link>
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-white text-white hover:bg-white/10"
                  asChild
                >
                  <a href="#evidence">{t.heroSecondCTA}</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-lg text-gray-700 leading-relaxed">
                {t.overviewText}
              </p>
            </div>
          </div>
        </section>

        {/* Clinical Efficacy Section */}
        <section id="evidence" className="py-20 bg-gray-50">
          <div className="container-custom">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              {t.clinicalEfficacyTitle}
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {/* Detection Rate */}
              <Card className="border-0 shadow-lg text-center">
                <CardContent className="p-8">
                  <BarChart3 className="w-16 h-16 text-[#1A73E8] mx-auto mb-4" />
                  <h3 className="text-4xl font-bold text-[#1A73E8] mb-2">{t.stat1Number}</h3>
                  <p className="text-lg font-semibold mb-2">{t.stat1Title}</p>
                  <p className="text-gray-600">{t.stat1Text}</p>
                </CardContent>
              </Card>

              {/* Signal Reliability */}
              <Card className="border-0 shadow-lg text-center">
                <CardContent className="p-8">
                  <Activity className="w-16 h-16 text-[#0BB5A2] mx-auto mb-4" />
                  <h3 className="text-4xl font-bold text-[#0BB5A2] mb-2">{t.stat2Number}</h3>
                  <p className="text-lg font-semibold mb-2">{t.stat2Title}</p>
                  <p className="text-gray-600">{t.stat2Text}</p>
                </CardContent>
              </Card>

              {/* Patient Compliance */}
              <Card className="border-0 shadow-lg text-center">
                <CardContent className="p-8">
                  <Users className="w-16 h-16 text-[#1A73E8] mx-auto mb-4" />
                  <h3 className="text-4xl font-bold text-[#1A73E8] mb-2">{t.stat3Number}</h3>
                  <p className="text-lg font-semibold mb-2">{t.stat3Title}</p>
                  <p className="text-gray-600">{t.stat3Text}</p>
                </CardContent>
              </Card>
            </div>

            <div className="max-w-3xl mx-auto">
              <p className="text-gray-700 text-center">
                {t.clinicalTrialNote}
              </p>
            </div>
          </div>
        </section>

        {/* How It Works for Providers */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              {t.howItWorksTitle}
            </h2>

            <div className="max-w-4xl mx-auto space-y-12">
              {/* Step 1: Ordering */}
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-[#1A73E8] text-white rounded-full flex items-center justify-center font-bold text-lg mr-6">
                  1
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-3">{t.step1Title}</h3>
                  <p className="text-gray-600">{t.step1Text}</p>
                </div>
              </div>

              {/* Step 2: During Monitoring */}
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-[#1A73E8] text-white rounded-full flex items-center justify-center font-bold text-lg mr-6">
                  2
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-3">{t.step2Title}</h3>
                  <p className="text-gray-600">{t.step2Text}</p>
                </div>
              </div>

              {/* Step 3: Analysis */}
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-[#1A73E8] text-white rounded-full flex items-center justify-center font-bold text-lg mr-6">
                  3
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-3">{t.step3Title}</h3>
                  <p className="text-gray-600">{t.step3Text}</p>
                  <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                    <Zap className="w-5 h-5 text-[#1A73E8] inline mr-2" />
                    <span className="text-[#1A73E8] font-semibold">{t.aiNote}</span>
                  </div>
                </div>
              </div>

              {/* Step 4: Report & Follow-up */}
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-[#1A73E8] text-white rounded-full flex items-center justify-center font-bold text-lg mr-6">
                  4
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-3">{t.step4Title}</h3>
                  <p className="text-gray-600">{t.step4Text}</p>
                </div>
              </div>

              {/* Step 5: Billing */}
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-[#1A73E8] text-white rounded-full flex items-center justify-center font-bold text-lg mr-6">
                  5
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-3">{t.step5Title}</h3>
                  <p className="text-gray-600">{t.step5Text}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technology & Compatibility */}
        <section className="py-20 bg-[#F8F9FA]">
          <div className="container-custom">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              {t.technologyTitle}
            </h2>

            <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Device Details */}
              <div>
                <h3 className="text-2xl font-semibold mb-4 flex items-center">
                  <Activity className="w-6 h-6 text-[#1A73E8] mr-3" />
                  {t.deviceTitle}
                </h3>
                <p className="text-gray-700 mb-4">{t.deviceText}</p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Shield className="w-5 h-5 text-[#0BB5A2] mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">{t.compliance}</span>
                  </li>
                  <li className="flex items-start">
                    <Shield className="w-5 h-5 text-[#0BB5A2] mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">{t.certification}</span>
                  </li>
                </ul>
              </div>

              {/* Integration */}
              <div>
                <h3 className="text-2xl font-semibold mb-4 flex items-center">
                  <FileText className="w-6 h-6 text-[#1A73E8] mr-3" />
                  {t.integrationTitle}
                </h3>
                <p className="text-gray-700">{t.integrationText}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Physician Testimonial */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto">
              <Card className="border-0 shadow-xl bg-gradient-to-br from-blue-50 to-indigo-50">
                <CardContent className="p-8">
                  <div className="mb-6">
                    <svg className="w-12 h-12 text-[#1A73E8] opacity-20" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>
                  <p className="text-lg text-gray-700 italic mb-6">
                    {t.testimonialText}
                  </p>
                  <p className="text-gray-600 font-semibold">
                    {t.testimonialAuthor}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-gradient-to-r from-[#1A73E8] to-[#1557B0] text-white">
          <div className="container-custom text-center">
            <h2 className="text-3xl font-bold mb-4">
              {t.ctaTitle}
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              {t.ctaText}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-[#1A73E8] hover:bg-gray-100"
                asChild
              >
                <Link to={language === 'en' ? '/contact' : `/${language}/contact`}>
                  {t.ctaButton}
                </Link>
              </Button>
              <p className="text-white/80 flex items-center justify-center">
                {t.ctaPhoneText}
                <a href="tel:+41XXXXXXXX" className="ml-2 underline">
                  {t.ctaPhone}
                </a>
              </p>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </>
  );
};

export default ForPhysicians;