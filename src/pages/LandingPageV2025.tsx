import React, { useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { HeroV2025 } from '@/components/landing/HeroV2025';
import { FullScreenQuote } from '@/components/landing/FullScreenQuote';
import { SwissHealthInsurance } from '@/components/landing/SwissHealthInsurance';
import { InsuranceCoverageFlow } from '@/components/landing/InsuranceCoverageFlow';
import { ComfortSection } from '@/components/landing/ComfortSection';
import { TestimonialsV2 } from '@/components/landing/TestimonialsV2';
import { ClinicalEvidenceViz } from '@/components/landing/ClinicalEvidenceViz';
import { ClinicalEvidenceStats } from '@/components/landing/ClinicalEvidenceStats';
import { ComparisonSection } from '@/components/landing/ComparisonSection';
import { HowSKIINCompares } from '@/components/landing/HowSKIINCompares';
import { TimelineProcess } from '@/components/landing/TimelineProcess';
import { MedicalAdvisors } from '@/components/home/MedicalAdvisors';
import FullScreenVideo from '@/components/ui/FullScreenVideo';
import { ProcessFlow } from '@/components/home/ProcessFlow';
import { HowSKIINWorks } from '@/components/landing/HowSKIINWorks';
import { HowSKIINWorksV2 } from '@/components/landing/HowSKIINWorksV2';
import { JourneyTimeline } from '@/components/landing/JourneyTimeline';
import { useTheme } from '@/contexts/ThemeContext';

const LandingPageV2025: React.FC = () => {
  const { setTheme } = useTheme();

  useEffect(() => {
    // Use the S&W Design theme for consistent styling
    setTheme('sw-design');
  }, [setTheme]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section with Two-Line Headline */}
        <HeroV2025 />
        
        {/* Full Screen Quote with Mother-Daughter Image */}
        <FullScreenQuote />
        
        {/* Swiss Health Insurance Coverage */}
        <SwissHealthInsurance />

        {/* Benefits Summary Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Swiss Families Choose SKIIN
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Medical-grade heart monitoring that fits seamlessly into your daily life
            </p>
          </div>
          
          {/* Quick benefit cards */}
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center p-6 rounded-xl bg-secondary">
              <div className="w-16 h-16 mx-auto mb-4 bg-secondary-foreground rounded-full flex items-center justify-center">
                <span className="text-2xl font-bold text-white">10</span>
              </div>
              <h3 className="font-semibold text-foreground mb-2">Days of Monitoring</h3>
              <p className="text-sm text-muted-foreground">Continuous tracking catches what 24-hour tests miss</p>
            </div>
            <div className="text-center p-6 rounded-xl bg-secondary">
              <div className="w-16 h-16 mx-auto mb-4 bg-secondary-foreground rounded-full flex items-center justify-center">
                <span className="text-2xl font-bold text-white">48h</span>
              </div>
              <h3 className="font-semibold text-foreground mb-2">Fast Results</h3>
              <p className="text-sm text-muted-foreground">Get your comprehensive report in just 2 days</p>
            </div>
            <div className="text-center p-6 rounded-xl bg-secondary">
              <div className="w-16 h-16 mx-auto mb-4 bg-secondary-foreground rounded-full flex items-center justify-center">
                <span className="text-2xl font-bold text-white">0.-</span>
              </div>
              <h3 className="font-semibold text-foreground mb-2">Fully Covered</h3>
              <p className="text-sm text-muted-foreground">Swiss insurance covers 100% of costs</p>
            </div>
          </div>
        </div>
        </section>

        {/* Full Screen Video Divider */}
        <FullScreenVideo
          src="/assets/videos/Myant-EU-video-70-percent-of-arrythmia-are-silent.mp4"
          thumbnail="/assets/images/25b8354d-c321-4439-8a41-5dcafe49836e.png"
          title="Silent Arrhythmias"
        />

        {/* Insurance Coverage Flow */}
        <section className="py-20 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Simple Insurance Process
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              From eligibility check to monitoring - we handle everything with your insurance
            </p>
          </div>
          <InsuranceCoverageFlow />
        </div>
        </section>

        {/* Comfort Section */}
        <ComfortSection />

        {/* Clinical Evidence - New Stats Design */}
        <ClinicalEvidenceStats />

        {/* Medical Advisors - Trusted by Leading Cardiologists */}
        <section className="py-20 bg-muted/30">
          <MedicalAdvisors />
        </section>

        {/* Testimonials - Divider Variant */}
        <TestimonialsV2 variant="divider" />

        {/* Full Screen Video - Before Testimonials */}
        <FullScreenVideo
          src="/assets/videos/Myant-EU-cardiac-health-assesement-at-home.mp4"
          thumbnail="/assets/images/40ba1015-d4f2-4e38-a22e-d479e1c983f6.png"
          title="Heart Assessment at Home"
        />

        {/* How SKIIN Works - New 5-Step Visual Style */}
        <HowSKIINWorksV2 />

        {/* Comparison Section with Purple Background */}
        <HowSKIINCompares />

        {/* Timeline Process */}
        <TimelineProcess />

        {/* Journey Timeline - Clear Path from Start to Finish */}
        <JourneyTimeline />

        {/* Final CTA Section */}
        <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Take Control of Your Heart Health Today
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join thousands of Swiss families who've discovered peace of mind with SKIIN
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-secondary-foreground text-white font-semibold rounded-lg hover:bg-secondary-foreground/90 transition-all duration-300 transform hover:scale-105 shadow-lg">
                Start Your Free Heart Check
              </button>
              <button className="px-8 py-4 border-2 border-secondary-foreground text-secondary-foreground font-semibold rounded-lg hover:bg-secondary-foreground hover:text-white transition-all duration-300">
                Talk to Your Doctor
              </button>
            </div>
            <p className="mt-6 text-sm text-muted-foreground">
              No commitment required • Results in 48 hours • 100% insurance coverage
            </p>
          </div>
        </div>
      </section>
      </main>
      <Footer />
    </div>
  );
};

export default LandingPageV2025;