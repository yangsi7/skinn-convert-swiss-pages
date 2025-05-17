import React, { useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from "@/components/ui/button";
import { Check, Download, ArrowRight, Stethoscope, Heart, Clock, Layers, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import ConversionButton from "@/components/analytics/ConversionButton";
import TrustBadges from '@/components/physicians/TrustBadges';
import TestimonialCard from '@/components/physicians/TestimonialCard';
import DoctorQuote from '@/components/physicians/DoctorQuote';
import BenefitItem from '@/components/physicians/BenefitItem';
import Citation from '@/components/physicians/Citation';
import { trackEvent } from '@/lib/analytics';
import { useTranslation } from '@/hooks/useTranslation';
import { physiciansContent as enContent } from '@/translations/physicians/en';
import { physiciansContent as deContent } from '@/translations/physicians/de';
import { physiciansContent as frContent } from '@/translations/physicians/fr';
import { useLanguage } from '@/contexts/LanguageContext';

const Physicians = () => {
  const content = useTranslation(enContent, deContent, frContent);
  const { language } = useLanguage();

  // Track page view for enhanced analytics
  useEffect(() => {
    trackEvent('physician_page_view', {
      page: 'physicians',
      source: document.referrer,
      language
    });
    
    // Fade-in animation for sections on scroll
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });
    
    document.querySelectorAll('.animate-on-scroll').forEach(section => {
      observer.observe(section);
    });
    
    return () => observer.disconnect();
  }, [language]);

  // Benefits for physicians
  const benefits = [
    {
      icon: Stethoscope,
      title: content.benefits.items[0].title,
      description: content.benefits.items[0].description
    },
    {
      icon: Heart,
      title: content.benefits.items[1].title,
      description: content.benefits.items[1].description
    },
    {
      icon: Clock,
      title: content.benefits.items[2].title,
      description: content.benefits.items[2].description
    },
    {
      icon: Layers,
      title: content.benefits.items[3].title,
      description: content.benefits.items[3].description
    },
    {
      icon: ShieldCheck,
      title: content.benefits.items[4].title,
      description: content.benefits.items[4].description
    }
  ];

  // Steps for how it works
  const steps = content.howItWorks.steps;

  // Testimonials
  const testimonials = content.testimonials.items;

  // Clinical evidence citations
  const citations = content.citations;

  // Handler for tracking trial kit requests
  const handleTrialRequest = () => {
    trackEvent('physician_trial_request', {
      source: 'physicians_page',
      section: 'hero',
      language
    });
  };

  // Handler for tracking patient referrals
  const handlePatientReferral = () => {
    trackEvent('physician_patient_referral', {
      source: 'physicians_page',
      section: 'hero',
      language
    });
  };

  const cmoBio = content.cmoBio;

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>{content.meta.title}</title>
        <meta name="description" content={content.meta.description} />
        <meta name="keywords" content="at-home heart monitoring, 3-day ECG, Holter alternative, remote diagnostics, cardiac monitoring, ECG monitoring for physicians" />
        <link rel="canonical" href={`https://myant-health.com${language === 'en' ? '/physicians' : language === 'de' ? '/de/arzt' : '/fr/medecin'}`} />
        <meta property="og:title" content={content.meta.title} />
        <meta property="og:description" content={content.meta.description} />
        <meta property="og:type" content="website" />
        {/* Multilingual support */}
        <link rel="alternate" hrefLang="en" href="https://myant-health.com/physicians" />
        <link rel="alternate" hrefLang="de" href="https://myant-health.com/de/arzt" />
        <link rel="alternate" hrefLang="fr" href="https://myant-health.com/fr/medecin" />
        <link rel="alternate" hrefLang="x-default" href="https://myant-health.com/physicians" />
      </Helmet>
      
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section id="overview" className="pt-32 pb-20 bg-gradient-to-b from-white to-myant-lightgreen/10 relative overflow-hidden">
          {/* ECG line background decoration */}
          <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
            <svg width="100%" height="100%" viewBox="0 0 1200 600" preserveAspectRatio="none">
              <path d="M0,100 L100,100 L150,20 L200,180 L250,100 L300,100 L350,100 L400,100 L450,20 L500,180 L550,100 L600,100 L650,100 L700,100 L750,20 L800,180 L850,100 L900,100 L950,100 L1000,100 L1050,20 L1100,180 L1150,100 L1200,100" 
                    fill="none" 
                    stroke="#2A7D71" 
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeDasharray="1200"
                    strokeDashoffset="1200">
                <animate attributeName="stroke-dashoffset" 
                         from="1200" 
                         to="0" 
                         dur="3s" 
                         begin="0s" 
                         fill="freeze" />
              </path>
            </svg>
          </div>
          
          <div className="container-custom relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center animate-on-scroll">
              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl font-bold leading-tight text-foreground" 
                    dangerouslySetInnerHTML={{ __html: content.hero.title }} />
                <h2 className="text-xl md:text-2xl text-muted-foreground">
                  {content.hero.subtitle}
                </h2>
                <p className="text-lg text-muted-foreground">
                  {content.hero.description}
                  <Citation id="1" text={citations[0].text} />
                </p>
                <div className="flex flex-col sm:flex-row gap-4 flex-wrap">
                  <ConversionButton 
                    size="lg" 
                    className="bg-myant-green hover:bg-myant-darkgreen"
                    eventName="request_trial_kit"
                    eventParams={{source: "physician_page", section: "hero", language}}
                    onClick={handleTrialRequest}
                    href="https://meetings-eu1.hubspot.com/peter-wood"
                    external={true}
                  >
                    {content.hero.primaryCta}
                  </ConversionButton>
                  
                  <ConversionButton 
                    size="lg" 
                    variant="outline" 
                    className="border-myant-green text-myant-green hover:bg-myant-lightgreen"
                    eventName="refer_patient_holter"
                    eventParams={{source: "physician_page", section: "hero", language}}
                    onClick={handlePatientReferral}
                    href="https://myant-care360.com"
                    external={true}
                  >
                    {content.hero.tertiaryCta}
                  </ConversionButton>
                  
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="border-gray-300 text-gray-700 hover:bg-gray-100"
                    onClick={() => {
                      const howItWorksSection = document.getElementById('how-it-works');
                      if (howItWorksSection) {
                        howItWorksSection.scrollIntoView({ behavior: 'smooth' });
                      }
                      trackEvent('learn_more_click', {
                        source: 'physicians_page',
                        section: 'hero',
                        language
                      });
                    }}
                  >
                    {content.hero.secondaryCta}
                  </Button>
                </div>
              </div>
              <div className="relative">
                <div className="bg-myant-lightgreen rounded-2xl p-6 relative shadow-lg transform transition-transform hover:scale-[1.02] duration-500">
                  <img
                    src="/lovable-uploads/32de0ca4-a556-4e60-bfaf-fc48bf4bd27c.png"
                    alt="Doctor consulting with patient about SKIIN at-home cardiac monitoring solution"
                    className="w-full h-auto rounded-xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section id="benefits" className="py-20 bg-white animate-on-scroll">
          <div className="container-custom">
            <div className="text-center mb-12">
              <span className="text-primary font-medium">For Medical Professionals</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
                {content.benefits.title}
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                {content.benefits.subtitle}
                <Citation id="2" text={citations[1].text} />
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => (
                <BenefitItem 
                  key={index}
                  title={benefit.title}
                  description={benefit.description}
                  icon={benefit.icon}
                />
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-myant-lightgreen/20 animate-on-scroll">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="mb-8 bg-white p-6 rounded-xl shadow-sm">
                  <img
                    src="/lovable-uploads/40ba1015-dfac-4b19-9548-8f3319ffe098.png"
                    alt="SKIIN Smart Garment with embedded sensors for continuous cardiac monitoring"
                    className="w-full h-auto rounded-lg"
                  />
                </div>
              </div>
              <div className="space-y-6">
                <span className="text-primary font-medium">Who We Are</span>
                <h2 className="text-3xl font-bold">{content.about.title}</h2>
                <p className="text-muted-foreground">
                  {content.about.description1}
                </p>
                <p className="text-muted-foreground">
                  {content.about.description2}
                </p>
                
                <TrustBadges />
                
                <DoctorQuote 
                  quote={cmoBio.quote}
                  name={cmoBio.name}
                  title={cmoBio.title}
                  image="/lovable-uploads/72de88b6-6f7b-4e58-abb2-dc50a762a353.png" 
                />
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section id="how-it-works" className="py-20 bg-white animate-on-scroll">
          <div className="container-custom">
            <div className="text-center mb-12">
              <span className="text-primary font-medium">Simple Process</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
                {content.howItWorks.title}
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                {content.howItWorks.subtitle}
                <Citation id="3" text={citations[2].text} />
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              {steps.map((step, index) => (
                <div key={index} className="relative group">
                  <div className="mb-6 h-20 bg-myant-lightgreen rounded-xl flex items-center justify-center group-hover:bg-myant-lightgreen/80 transition-colors">
                    <span className="text-4xl font-bold text-myant-green">{step.number}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                  
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-10 -right-4 w-8 h-2 bg-myant-lightgreen"></div>
                  )}
                </div>
              ))}
            </div>

            <div className="bg-myant-green/5 border border-myant-green/20 p-6 rounded-xl hover:shadow-md transition-shadow">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-center">
                  <div className="bg-myant-lightgreen p-3 rounded-full mr-4">
                    <Download className="h-6 w-6 text-myant-green" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">{content.howItWorks.sampleReport.title}</h4>
                    <p className="text-muted-foreground">{content.howItWorks.sampleReport.description}</p>
                  </div>
                </div>
                <Button 
                  variant="outline" 
                  className="border-myant-green text-myant-green hover:bg-myant-lightgreen"
                  onClick={() => {
                    trackEvent('sample_report_download', {
                      source: 'physicians_page',
                      language
                    });
                  }}
                >
                  {content.howItWorks.sampleReport.buttonText}
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section id="testimonials" className="py-20 bg-gradient-to-b from-white to-myant-lightgreen/20 animate-on-scroll">
          <div className="container-custom">
            <div className="text-center mb-12">
              <span className="text-primary font-medium">Testimonials</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
                {content.testimonials.title}
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                {content.testimonials.subtitle}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <TestimonialCard key={index} testimonial={testimonial} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="get-started" className="py-20 bg-myant-green animate-on-scroll">
          <div className="container-custom">
            <div className="text-center text-white max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                {content.cta.title}
              </h2>
              <p className="text-xl mb-8">
                {content.cta.description}
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <ConversionButton 
                  size="lg" 
                  className="bg-white text-myant-green hover:bg-gray-100"
                  eventName="try_skiin_free_click"
                  eventParams={{source: "physician_page", section: "footer_cta", language}}
                  conversionId="AW-XXXXXXXXXX"
                  conversionLabel="physician_trial_request"
                  href="https://meetings-eu1.hubspot.com/peter-wood"
                  external={true}
                >
                  {content.cta.primaryButton} <ArrowRight className="ml-2 h-5 w-5" />
                </ConversionButton>
                
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="text-white border-white hover:bg-myant-darkgreen"
                  onClick={() => {
                    trackEvent('contact_medical_team', {
                      source: 'physicians_page',
                      section: 'footer_cta',
                      language
                    });
                  }}
                >
                  {content.cta.secondaryButton}
                </Button>
                
                <ConversionButton 
                  size="lg" 
                  variant="outline" 
                  className="text-white border-white hover:bg-myant-darkgreen"
                  eventName="refer_patient_holter_footer"
                  eventParams={{source: "physician_page", section: "footer_cta", language}}
                  href="https://myant-care360.com"
                  external={true}
                >
                  {content.cta.tertiaryButton}
                </ConversionButton>
              </div>
              <p className="text-sm mt-6 opacity-80">
                {content.cta.note}
              </p>
            </div>
          </div>
        </section>
        
        {/* Regulatory Footer */}
        <div className="bg-white py-6 border-t border-gray-100">
          <div className="container-custom">
            <div className="text-xs text-muted-foreground">
              <p>{content.footer.copyright}</p>
              <p className="mt-1">{content.footer.disclaimer}</p>
              <p className="mt-1">
                <span className="font-medium">References: </span>
                {citations.map((citation, index) => (
                  <span key={index} className="mr-4">[{citation.id}] {citation.text}</span>
                ))}
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Physicians;
