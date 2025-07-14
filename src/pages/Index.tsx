
import React from 'react';
import PageLayout from '@/components/layout/PageLayout';
import HeroSection from '@/components/home/HeroSection';
import ProblemsAndSolutionSection from '@/components/home/ProblemsAndSolutionSection';
import FeaturesSection from '@/components/home/FeaturesSection';
import HowItWorksSection from '@/components/home/HowItWorksSection';
import SwissInsuranceSection from '@/components/home/SwissInsuranceSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import ComparisonSection from '@/components/home/ComparisonSection';
import CtaSection from '@/components/home/CtaSection';
import FaqSection from '@/components/home/FaqSection';
import ContactSection from '@/components/home/ContactSection';

/**
 * Home page composed of multiple marketing sections. Each section uses the
 * translation hooks so text is rendered in the currently selected language.
 * Updated to include problem hierarchy and Swiss insurance coverage sections.
 */
const Index = () => {
  return (
    <PageLayout>
      <HeroSection />
      <ProblemsAndSolutionSection />
      <FeaturesSection />
      <HowItWorksSection />
      <SwissInsuranceSection />
      <TestimonialsSection />
      <ComparisonSection />
      <CtaSection />
      <FaqSection />
      <ContactSection />
    </PageLayout>
  );
};

export default Index;
