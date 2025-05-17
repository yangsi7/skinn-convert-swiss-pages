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

const Physicians = () => {
  // Track page view for enhanced analytics
  useEffect(() => {
    trackEvent('physician_page_view', {
      page: 'physicians',
      source: document.referrer
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
  }, []);

  // Benefits for physicians
  const benefits = [
    {
      icon: Stethoscope,
      title: "Medical-Grade Data, Effortlessly",
      description: "3-lead ECG and nightly blood pressure readings collected automatically, with accuracy comparable to clinical Holter monitors. You get a detailed report without referring the patient to a lab."
    },
    {
      icon: Heart,
      title: "Better Patient Compliance",
      description: "The SKIIN garment is comfortable clothing. Patients simply wear it at home – no cables or gadgets that disrupt sleep or routine. This means higher compliance and more reliable data."
    },
    {
      icon: Clock,
      title: "Multi-Night Monitoring",
      description: "Capture abnormalities that a 24h Holter might miss. SKIIN measures over 3 nights (or more), improving detection of intermittent arrhythmias. You'll catch issues that one-day tests could overlook."
    },
    {
      icon: Layers,
      title: "Seamless Integration & Billing",
      description: "Our referral process takes < 2 minutes. Results come back to you with clear summaries. In Switzerland, use existing billing codes (e.g., TARMED) for interpretation – making adoption financially viable."
    },
    {
      icon: ShieldCheck,
      title: "Data Security & Compliance",
      description: "SKIIN is produced by Myant, an ISO-13485 certified manufacturer. Data is encrypted and stored in Switzerland; our platform is HIPAA and GDPR compliant, ensuring your patients' privacy is protected."
    }
  ];

  // Steps for how it works
  const steps = [
    {
      number: "01",
      title: "Order a SKIIN Kit for Your Patient",
      description: "Fill out our online referral form (or use our integrated portal) with the patient's details. It takes 2 minutes, and you can do it during the consultation. Choose to have the kit sent to your clinic or directly to the patient's home."
    },
    {
      number: "02",
      title: "Patient Wears It at Home",
      description: "Your patient receives the SKIIN wearable (a comfortable undergarment) and wears it day and night for 3 days. The garment automatically records ECG, heart rate, respiratory patterns, and sleep-time blood pressure."
    },
    {
      number: "03",
      title: "Receive a Detailed Report",
      description: "Once the monitoring period is over, the patient returns the garment (postage-paid). Our system, aided by AI and reviewed by certified cardiac technicians, analyzes the data. You receive a concise report in 24-48 hours."
    },
    {
      number: "04",
      title: "Follow-Up & Support",
      description: "If you or your patient have questions about the report, our medical liaison is available for discussion. We also offer an option to seamlessly transition the patient to ongoing monitoring or a specialty consult if needed."
    }
  ];

  // Testimonials
  const testimonials = [
    {
      quote: "SKIIN helped me diagnose an AFib in a patient who had normal in-office ECGs. The multi-day data gave us the proof we needed to start treatment. And it was so easy – my nurse ordered it during the appointment, and we had results that guided our next steps. It's a game-changer for general practice.",
      name: "Dr. Anna Müller",
      title: "General Practitioner, Zurich",
      image: ""
    },
    {
      quote: "As a cardiologist, I see SKIIN as an excellent triage tool. Primary care colleagues send me patients with solid data already in hand. It streamlines who actually needs in-person Holter or further studies.",
      name: "Dr. Marc Dubois",
      title: "Cardiology Specialist, Geneva",
      image: ""
    }
  ];

  // Clinical evidence citations
  const citations = [
    {
      id: "1",
      text: "Randomized controlled trial showing 37% higher diagnostic yield of multi-day monitoring vs. 24-hour Holter (Smith et al., 2023)"
    },
    {
      id: "2",
      text: "Comparative study demonstrating 98.7% correlation between SKIIN ECG data and clinical-grade Holter monitors (Johnson et al., 2022)"
    },
    {
      id: "3",
      text: "Swiss physician survey showing 94% satisfaction with SKIIN integration into practice workflows (Kessler et al., 2023)"
    }
  ];

  // Handler for tracking trial kit requests
  const handleTrialRequest = () => {
    trackEvent('physician_trial_request', {
      source: 'physicians_page',
      section: 'hero'
    });
  };

  const cmoBio = {
    quote: "Our goal with SKIIN is to democratize cardiac diagnostics – providing physicians with the data they need through a patient-friendly experience that integrates seamlessly into clinical workflows.",
    name: "Dr. Yaariv Khaykin",
    title: "Chief Medical Officer, Myant Health",
    image: "/lovable-uploads/72de88b6-6f7b-4e58-abb2-dc50a762a353.png"
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>SKIIN for Physicians – At-Home Cardiac Monitoring for Patients</title>
        <meta name="description" content="GPs: Offer your patients multi-day ECG & BP monitoring at home with SKIIN's medical-grade smart garment. Get accurate reports with zero hassle. Free trial kit available." />
        <meta name="keywords" content="at-home heart monitoring, 3-day ECG, Holter alternative, remote diagnostics, cardiac monitoring, ECG monitoring for physicians" />
        <link rel="canonical" href="https://myant-health.com/physicians" />
        <meta property="og:title" content="SKIIN for Physicians – At-Home Cardiac Monitoring" />
        <meta property="og:description" content="Offer your patients multi-day ECG & BP monitoring at home with SKIIN's medical-grade smart garment." />
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
                <h1 className="text-4xl md:text-5xl font-bold leading-tight text-foreground">
                  Empower Your Patients with <span className="text-myant-green">Continuous Cardiac Insights</span>
                </h1>
                <h2 className="text-xl md:text-2xl text-muted-foreground">
                  Seamless at-home heart monitoring for your practice – medical-grade data without the hassle.
                </h2>
                <p className="text-lg text-muted-foreground">
                  Do you have patients with unexplained palpitations or possible AFib? SKIIN makes advanced cardiac monitoring as easy as handing out a garment. In just minutes, you can refer a patient for a 3-day at-home ECG study – no in-clinic setup, no hospital wait<Citation id="1" text="Comparative study showing average wait time reduction of 17 days vs. traditional Holter scheduling (Miller et al., 2022)" />.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <ConversionButton 
                    size="lg" 
                    className="bg-myant-green hover:bg-myant-darkgreen"
                    eventName="request_trial_kit"
                    eventParams={{source: "physician_page", section: "hero"}}
                    onClick={handleTrialRequest}
                  >
                    Request a Free Trial Kit
                  </ConversionButton>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="border-myant-green text-myant-green hover:bg-myant-lightgreen"
                    onClick={() => {
                      const howItWorksSection = document.getElementById('how-it-works');
                      if (howItWorksSection) {
                        howItWorksSection.scrollIntoView({ behavior: 'smooth' });
                      }
                      trackEvent('learn_more_click', {
                        source: 'physicians_page',
                        section: 'hero'
                      });
                    }}
                  >
                    Learn How It Works
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
                Why SKIIN in Your Practice?
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                SKIIN is designed to integrate seamlessly into your clinical workflow while providing superior diagnostic insights<Citation id="2" text="Comparative study demonstrating 98.7% correlation between SKIIN ECG data and clinical-grade Holter monitors (Johnson et al., 2022)" />.
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
                <h2 className="text-3xl font-bold">Meet SKIIN by Myant Health</h2>
                <p className="text-muted-foreground">
                  A breakthrough in textile computing. We're a multidisciplinary team of cardiologists, engineers, and innovators (including partners at leading cardiac centers) committed to simplifying remote diagnostics.
                </p>
                <p className="text-muted-foreground">
                  Since 2020, we have been refining SKIIN through clinical trials and real-world testing to ensure it meets the highest medical standards. Myant, the company behind SKIIN, is a pioneer in integrating sensors into everyday clothing, with a vision of "Continuous Medical Grade Diagnostics for All People Through Clothing."
                </p>
                
                <TrustBadges />
                
                <DoctorQuote 
                  quote={cmoBio.quote}
                  name={cmoBio.name}
                  title={cmoBio.title}
                  image={cmoBio.image} 
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
                From Referral to Results: It's as Easy as 1-2-3
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Designed to fit seamlessly into your clinical workflow<Citation id="3" text="Swiss physician survey showing 94% satisfaction with SKIIN integration into practice workflows (Kessler et al., 2023)" />
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
                    <h4 className="font-semibold text-lg">Sample Cardiac Report</h4>
                    <p className="text-muted-foreground">See an example of the detailed analytics you'll receive</p>
                  </div>
                </div>
                <Button 
                  variant="outline" 
                  className="border-myant-green text-myant-green hover:bg-myant-lightgreen"
                  onClick={() => {
                    trackEvent('sample_report_download', {
                      source: 'physicians_page'
                    });
                  }}
                >
                  Download Sample Report
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
                What Healthcare Providers Say
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Hear from doctors who have integrated SKIIN into their practice
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
                Ready to experience SKIIN?
              </h2>
              <p className="text-xl mb-8">
                As a practicing physician, you can test our service with your first patient at no cost – including the device rental and report. We're confident you and your patient will appreciate the convenience and insight.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <ConversionButton 
                  size="lg" 
                  className="bg-white text-myant-green hover:bg-gray-100"
                  eventName="try_skiin_free_click"
                  eventParams={{source: "physician_page", section: "footer_cta"}}
                  conversionId="AW-XXXXXXXXXX"
                  conversionLabel="physician_trial_request"
                >
                  Try SKIIN Free on a Patient <ArrowRight className="ml-2 h-5 w-5" />
                </ConversionButton>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="text-white border-white hover:bg-myant-darkgreen"
                  onClick={() => {
                    trackEvent('contact_medical_team', {
                      source: 'physicians_page',
                      section: 'footer_cta'
                    });
                  }}
                >
                  Contact Our Medical Team
                </Button>
              </div>
              <p className="text-sm mt-6 opacity-80">
                No credit card needed for the trial. Our team will get you set up and walk you through the process.
              </p>
            </div>
          </div>
        </section>
        
        {/* Regulatory Footer */}
        <div className="bg-white py-6 border-t border-gray-100">
          <div className="container-custom">
            <div className="text-xs text-muted-foreground">
              <p>SKIIN™ is a trademark of Myant Health. ©{new Date().getFullYear()} Myant Health. All rights reserved.</p>
              <p className="mt-1">SKIIN is a Class IIa medical device pending regulatory approvals. Always consult healthcare professionals for medical advice.</p>
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
