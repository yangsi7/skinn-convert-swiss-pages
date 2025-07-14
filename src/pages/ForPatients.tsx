import React from 'react';
import { useTranslation } from '@/hooks/useTranslation';
import { useLanguage } from '@/contexts/LanguageContext';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Link } from 'react-router-dom';
import { ArrowRight, Heart, Calendar, Activity, Smartphone, Shield, Check } from 'lucide-react';

/**
 * For Patients page - comprehensive information for patients about SKIIN Holter monitoring
 * Follows target-specs.md content structure
 */
const ForPatients = () => {
  const t = useTranslation('forPatients');
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
        <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                {t.heroTitle}
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                {t.heroSubtitle}
              </p>
              <Button 
                size="lg" 
                className="bg-[#1A73E8] hover:bg-[#1557B0] text-white"
                asChild
              >
                <a href="#get-started">{t.heroCTA}</a>
              </Button>
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto">
              <p className="text-lg text-gray-700 leading-relaxed">
                {t.overviewText}
              </p>
            </div>
          </div>
        </section>

        {/* Why Choose SKIIN? Benefits Section */}
        <section className="py-20 bg-gray-50">
          <div className="container-custom">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              {t.benefitsTitle}
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Comfort & Ease */}
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-[#1A73E8] rounded-full flex items-center justify-center mb-4">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{t.benefit1Title}</h3>
                  <p className="text-gray-600">{t.benefit1Text}</p>
                </CardContent>
              </Card>

              {/* Peace of Mind */}
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-[#0BB5A2] rounded-full flex items-center justify-center mb-4">
                    <Calendar className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{t.benefit2Title}</h3>
                  <p className="text-gray-600">{t.benefit2Text}</p>
                </CardContent>
              </Card>

              {/* Stay Active */}
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-[#1A73E8] rounded-full flex items-center justify-center mb-4">
                    <Activity className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{t.benefit3Title}</h3>
                  <p className="text-gray-600">{t.benefit3Text}</p>
                </CardContent>
              </Card>

              {/* Easy Setup */}
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-[#0BB5A2] rounded-full flex items-center justify-center mb-4">
                    <Smartphone className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{t.benefit4Title}</h3>
                  <p className="text-gray-600">{t.benefit4Text}</p>
                </CardContent>
              </Card>

              {/* Insurance Coverage */}
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-[#1A73E8] rounded-full flex items-center justify-center mb-4">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{t.benefit5Title}</h3>
                  <p className="text-gray-600">{t.benefit5Text}</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* How Does it Work for You? Section */}
        <section id="get-started" className="py-20 bg-white">
          <div className="container-custom">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              {t.howItWorksTitle}
            </h2>

            <div className="max-w-4xl mx-auto">
              {/* Step 1 */}
              <div className="flex items-start mb-12">
                <div className="flex-shrink-0 w-12 h-12 bg-[#1A73E8] text-white rounded-full flex items-center justify-center font-bold text-lg">
                  1
                </div>
                <div className="ml-6">
                  <h3 className="text-xl font-semibold mb-2">{t.step1Title}</h3>
                  <p className="text-gray-600">{t.step1Text}</p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex items-start mb-12">
                <div className="flex-shrink-0 w-12 h-12 bg-[#1A73E8] text-white rounded-full flex items-center justify-center font-bold text-lg">
                  2
                </div>
                <div className="ml-6">
                  <h3 className="text-xl font-semibold mb-2">{t.step2Title}</h3>
                  <p className="text-gray-600">{t.step2Text}</p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex items-start mb-12">
                <div className="flex-shrink-0 w-12 h-12 bg-[#1A73E8] text-white rounded-full flex items-center justify-center font-bold text-lg">
                  3
                </div>
                <div className="ml-6">
                  <h3 className="text-xl font-semibold mb-2">{t.step3Title}</h3>
                  <p className="text-gray-600">{t.step3Text}</p>
                </div>
              </div>

              {/* Step 4 */}
              <div className="flex items-start mb-12">
                <div className="flex-shrink-0 w-12 h-12 bg-[#1A73E8] text-white rounded-full flex items-center justify-center font-bold text-lg">
                  4
                </div>
                <div className="ml-6">
                  <h3 className="text-xl font-semibold mb-2">{t.step4Title}</h3>
                  <p className="text-gray-600">{t.step4Text}</p>
                </div>
              </div>

              {/* Step 5 */}
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-[#1A73E8] text-white rounded-full flex items-center justify-center font-bold text-lg">
                  5
                </div>
                <div className="ml-6">
                  <h3 className="text-xl font-semibold mb-2">{t.step5Title}</h3>
                  <p className="text-gray-600">{t.step5Text}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Patient Testimonial */}
        <section className="py-20 bg-[#F8F9FA]">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto">
              <div className="bg-white p-8 rounded-lg shadow-lg">
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
              </div>
            </div>
          </div>
        </section>

        {/* Common Questions Section */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              {t.faqTitle}
            </h2>

            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem value="safety" className="bg-gray-50 rounded-lg px-6">
                  <AccordionTrigger className="text-left font-semibold">
                    {t.faq1Question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    {t.faq1Answer}
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="pacemaker" className="bg-gray-50 rounded-lg px-6">
                  <AccordionTrigger className="text-left font-semibold">
                    {t.faq2Question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    <p className="text-red-600 font-semibold mb-2">{t.faq2Warning}</p>
                    {t.faq2Answer}
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="smartphone" className="bg-gray-50 rounded-lg px-6">
                  <AccordionTrigger className="text-left font-semibold">
                    {t.faq3Question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    {t.faq3Answer}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <div className="mt-8 text-center">
                <p className="text-gray-600 mb-4">{t.faqMoreQuestions}</p>
                <Button variant="outline" asChild>
                  <Link to={language === 'en' ? '/faq' : `/${language}/faq`}>
                    {t.faqViewAll} <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-20 bg-gradient-to-r from-[#1A73E8] to-[#1557B0] text-white">
          <div className="container-custom text-center">
            <h2 className="text-3xl font-bold mb-4">
              {t.ctaTitle}
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              {t.ctaText}
            </p>
            <Button 
              size="lg" 
              className="bg-white text-[#1A73E8] hover:bg-gray-100"
              asChild
            >
              <Link to={language === 'en' ? '/contact' : `/${language}/contact`}>
                {t.ctaButton}
              </Link>
            </Button>
          </div>
        </section>
      </div>
      
      <Footer />
    </>
  );
};

export default ForPatients;