import React from 'react';
import { useTranslation } from '@/hooks/useTranslation';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

/**
 * FAQ page - frequently asked questions organized by sections
 * Uses content from target-specs.md
 */
const FAQ = () => {
  const t = useTranslation('faq');

  return (
    <>
      <Helmet>
        <title>{t.pageTitle}</title>
        <meta name="description" content={t.pageDescription} />
      </Helmet>
      
      <div className="min-h-screen bg-white">
        <Navbar />
        
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                {t.heroTitle}
              </h1>
              <p className="text-xl text-gray-600">
                {t.heroSubtitle}
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Content */}
        <section className="py-20">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              
              {/* General Questions */}
              <div className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">
                  {t.generalTitle}
                </h2>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="general-1">
                    <AccordionTrigger className="text-left">
                      {t.generalQ1}
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="text-gray-600">{t.generalA1}</p>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="general-2">
                    <AccordionTrigger className="text-left">
                      {t.generalQ2}
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="text-gray-600">{t.generalA2}</p>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="general-3">
                    <AccordionTrigger className="text-left">
                      {t.generalQ3}
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="text-gray-600">{t.generalA3}</p>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>

              {/* Patient Questions */}
              <div className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">
                  {t.patientTitle}
                </h2>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="patient-1">
                    <AccordionTrigger className="text-left">
                      {t.patientQ1}
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="text-gray-600">{t.patientA1}</p>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="patient-2">
                    <AccordionTrigger className="text-left">
                      {t.patientQ2}
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="text-gray-600">{t.patientA2}</p>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="patient-3">
                    <AccordionTrigger className="text-left">
                      {t.patientQ3}
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="text-gray-600">{t.patientA3}</p>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="patient-4">
                    <AccordionTrigger className="text-left">
                      {t.patientQ4}
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="text-gray-600">{t.patientA4}</p>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="patient-5">
                    <AccordionTrigger className="text-left">
                      {t.patientQ5}
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="text-gray-600">{t.patientA5}</p>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="patient-6">
                    <AccordionTrigger className="text-left">
                      {t.patientQ6}
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="text-gray-600">{t.patientA6}</p>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>

              {/* Physician Questions */}
              <div className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">
                  {t.physicianTitle}
                </h2>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="physician-1">
                    <AccordionTrigger className="text-left">
                      {t.physicianQ1}
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="text-gray-600">{t.physicianA1}</p>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="physician-2">
                    <AccordionTrigger className="text-left">
                      {t.physicianQ2}
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="text-gray-600">{t.physicianA2}</p>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="physician-3">
                    <AccordionTrigger className="text-left">
                      {t.physicianQ3}
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="text-gray-600">{t.physicianA3}</p>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="physician-4">
                    <AccordionTrigger className="text-left">
                      {t.physicianQ4}
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="text-gray-600">{t.physicianA4}</p>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="physician-5">
                    <AccordionTrigger className="text-left">
                      {t.physicianQ5}
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="text-gray-600">{t.physicianA5}</p>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="physician-6">
                    <AccordionTrigger className="text-left">
                      {t.physicianQ6}
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="text-gray-600">{t.physicianA6}</p>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="physician-7">
                    <AccordionTrigger className="text-left">
                      {t.physicianQ7}
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="text-gray-600">{t.physicianA7}</p>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>

              {/* Conclusion */}
              <div className="text-center mt-12 p-8 bg-gray-50 rounded-lg">
                <p className="text-lg text-gray-700">
                  {t.conclusionText}{' '}
                  <Link to="/contact" className="text-blue-600 hover:underline font-semibold">
                    {t.contactLink}
                  </Link>{' '}
                  {t.contactLinkText}
                </p>
              </div>
            </div>
          </div>
        </section>
        
        <Footer />
      </div>
    </>
  );
};

export default FAQ;