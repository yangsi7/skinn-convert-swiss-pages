import React from 'react';
import { useTranslation } from '@/hooks/useTranslation';
import { Helmet } from 'react-helmet-async';
import ContactForm from '@/components/home/ContactForm';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

/**
 * Contact page - contact information and form
 */
const Contact = () => {
  const t = useTranslation('contact');

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
                {t.hero.title}
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                {t.hero.subtitle}
              </p>
            </div>
          </div>
        </section>

        {/* Contact Content */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Contact Information */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-8">
                  {t.contactInfo.title}
                </h2>
                
                <div className="space-y-8">
                  {/* General Contact */}
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">{t.contactInfo.generalContact.title}</h3>
                      <p className="text-gray-600 mb-2">{t.contactInfo.generalContact.description}</p>
                      <a href={`mailto:${t.contactInfo.generalContact.email}`} className="text-blue-600 hover:text-blue-700">
                        {t.contactInfo.generalContact.email}
                      </a>
                    </div>
                  </div>

                  {/* Phone Support */}
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">{t.contactInfo.phoneSupport.title}</h3>
                      <p className="text-gray-600 mb-2">{t.contactInfo.phoneSupport.description}</p>
                      <a href={`tel:${t.contactInfo.phoneSupport.number.replace(/\s/g, '')}`} className="text-blue-600 hover:text-blue-700">
                        {t.contactInfo.phoneSupport.number}
                      </a>
                      <p className="text-sm text-gray-500 mt-1">{t.contactInfo.phoneSupport.hours}</p>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-6 w-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">{t.contactInfo.address.title}</h3>
                      <p className="text-gray-600">
                        {t.contactInfo.address.line1}<br />
                        {t.contactInfo.address.line2}<br />
                        {t.contactInfo.address.line3}<br />
                        {t.contactInfo.address.line4}
                      </p>
                      <p className="text-sm text-gray-500 mt-1">{t.contactInfo.address.description}</p>
                    </div>
                  </div>

                  {/* Business Hours */}
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="h-6 w-6 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">{t.contactInfo.businessHours.title}</h3>
                      <div className="text-gray-600 space-y-1">
                        <p>{t.contactInfo.businessHours.weekdays}</p>
                        <p>{t.contactInfo.businessHours.weekend}</p>
                        <p className="text-sm text-gray-500">{t.contactInfo.businessHours.holidays}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="mt-12">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {t.contactInfo.subtitle}
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <button className="bg-blue-600 text-white px-6 py-4 rounded-lg hover:bg-blue-700 transition-colors">
                      <div className="font-semibold mb-1">{t.contactInfo.quickActions.patient.title}</div>
                      <div className="text-sm opacity-90">{t.contactInfo.quickActions.patient.description}</div>
                      <div className="mt-2 text-sm font-semibold">{t.contactInfo.quickActions.patient.button} →</div>
                    </button>
                    <button className="bg-green-600 text-white px-6 py-4 rounded-lg hover:bg-green-700 transition-colors">
                      <div className="font-semibold mb-1">{t.contactInfo.quickActions.physician.title}</div>
                      <div className="text-sm opacity-90">{t.contactInfo.quickActions.physician.description}</div>
                      <div className="mt-2 text-sm font-semibold">{t.contactInfo.quickActions.physician.button} →</div>
                    </button>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  {t.form.title}
                </h2>
                <p className="text-gray-600 mb-8">
                  {t.form.subtitle}
                </p>
                <div className="bg-gray-50 rounded-lg p-8">
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Emergency Contact */}
        <section className="py-16 bg-red-50">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-2xl font-bold text-red-800 mb-2">
                {t.emergencyContact.title}
              </h2>
              <p className="text-lg text-red-700 mb-6">
                {t.emergencyContact.subtitle}
              </p>
              <div className="bg-white rounded-lg p-8 border-2 border-red-200 max-w-md mx-auto mb-6">
                <p className="text-4xl font-bold text-red-600 mb-2">{t.emergencyContact.emergencyNumber}</p>
                <p className="text-red-800">{t.emergencyContact.description}</p>
              </div>
              <p className="text-sm text-red-600">
                {t.emergencyContact.note}
              </p>
            </div>
          </div>
        </section>

        {/* Coverage Information */}
        <section className="py-20 bg-blue-50">
          <div className="container-custom text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {t.coverage.title}
            </h2>
            <p className="text-xl text-gray-600 mb-12">
              {t.coverage.subtitle}
            </p>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="text-blue-600 mb-4">
                  <MapPin className="h-12 w-12 mx-auto" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Coverage</h3>
                <p className="text-gray-600">{t.coverage.cantons}</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="text-blue-600 mb-4">
                  <Mail className="h-12 w-12 mx-auto" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Languages</h3>
                <p className="text-gray-600">{t.coverage.languages}</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="text-blue-600 mb-4">
                  <Phone className="h-12 w-12 mx-auto" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Delivery</h3>
                <p className="text-gray-600">{t.coverage.delivery}</p>
              </div>
            </div>
            <img 
              src="/src/assets/marketing/swiss-insurance-coverage.png" 
              alt="Swiss insurance coverage information"
              className="w-full max-w-3xl mx-auto rounded-lg shadow-lg mt-12"
            />
          </div>
        </section>
      </div>
      
      <Footer />
    </>
  );
};

export default Contact;