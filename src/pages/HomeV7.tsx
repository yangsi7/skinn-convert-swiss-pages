import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HomePageTabs from '@/components/home/HomePageTabs';
import HeroSection from '@/components/home/HeroSection';
import { StatisticsShowcase } from '@/components/home/StatisticsShowcase';
import ProblemSolutionSection from '@/components/home/ProblemSolutionSection';
import { ProductSection } from '@/components/home/ProductSection';
import { NumbersSection } from '@/components/home/NumbersSection';
import { ClinicallyProvenTechSection } from '@/components/home/ClinicallyProvenTechSection';
import { Care360Section } from '@/components/home/Care360Section';
import { TechCarousel } from '@/components/home/TechCarousel';
import { ProcessFlow } from '@/components/home/ProcessFlow';
import InsuranceSection from '@/components/home/InsuranceSection';
import CtaSection from '@/components/home/CtaSection';
import FaqSection from '@/components/home/FaqSection';
import ContactSection from '@/components/home/ContactSection';

/**
 * Version 7.2 homepage with all the new components
 * This page implements the comprehensive v7.2 copy and design updates
 */
const HomeV7 = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <HomePageTabs />
      <main className="flex-grow">
        {/* Hero with A/B variants and emotional messaging */}
        <HeroSection />
        
        {/* Statistics: 70%, 20-30%, 66% vs 9% */}
        <StatisticsShowcase />
        
        {/* Silent Triad: ECG + ABPM + Sleep */}
        <ProblemSolutionSection />
        
        {/* 8 benefit cards in 2x4 grid */}
        <ProductSection />
        
        {/* 4 key metrics */}
        <NumbersSection />
        
        {/* Clinical evidence and trust markers */}
        <ClinicallyProvenTechSection />
        
        {/* 360° Care overview */}
        <Care360Section />
        
        {/* Technology data flow visualization */}
        <TechCarousel />
        
        {/* 5-step process with AI & cardiologist mention */}
        <ProcessFlow />
        
        {/* Insurance coverage information */}
        <InsuranceSection />
        
        {/* Call-to-action section */}
        <CtaSection />
        
        {/* FAQ section */}
        <FaqSection />
        
        {/* Contact form */}
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default HomeV7;