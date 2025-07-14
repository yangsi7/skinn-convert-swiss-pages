
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HomePageTabs from '@/components/home/HomePageTabs';
import HeroSection from '@/components/home/HeroSection';
import ProblemSolutionSection from '@/components/home/ProblemSolutionSection';
import FeaturesSection from '@/components/home/FeaturesSection';
import HowItWorksSection from '@/components/home/HowItWorksSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import ComparisonSection from '@/components/home/ComparisonSection';
import InsuranceSection from '@/components/home/InsuranceSection';
import CtaSection from '@/components/home/CtaSection';
import FaqSection from '@/components/home/FaqSection';
import ContactSection from '@/components/home/ContactSection';

/**
 * Home page composed of multiple marketing sections. Each section uses the
 * translation hooks so text is rendered in the currently selected language.
 */
const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <HomePageTabs />
      <main className="flex-grow">
        <HeroSection />
        <ProblemSolutionSection />
        <FeaturesSection />
        <HowItWorksSection />
        <TestimonialsSection />
        <ComparisonSection />
        <InsuranceSection />
        <CtaSection />
        <FaqSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
