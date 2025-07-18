import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Heart, Shield, Users, Award } from 'lucide-react';
import { ProgressiveSection } from '@/components/ui/progressive-section';
import { ContentSection } from '@/components/ui/content-section';
import { FeatureGrid } from '@/components/ui/feature-grid';
import { SwissHeritage } from '@/components/about/SwissHeritage';
import { LeadershipShowcase } from '@/components/about/LeadershipShowcase';

const Company = () => {
  const qualityFeatures = [
    {
      icon: Shield,
      title: "Medical Device Standards",
      description: "CE-marked and registered for medical use in Switzerland (conforming to Swissmedic requirements). ISO 13485 certified for medical devices."
    },
    {
      icon: Shield,
      title: "Data Protection",
      description: "Full compliance with GDPR and Swiss Data Protection Act. Encrypted data handling with robust security measures and access controls."
    },
    {
      icon: Shield,
      title: "Cultural Respect",
      description: "Patient materials available in formal German (Sie) and French (vous) to respect cultural norms and Swiss healthcare expectations."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <ProgressiveSection className="py-20 md:py-30 bg-gradient-to-br from-primary/8 to-medical-teal/5">
          <div className="container-custom">
            <ContentSection
              title="Company & Mission"
              description="Transforming cardiac care in Switzerland by uniting Swiss-quality medical standards with cutting-edge textile sensor technology"
              align="center"
            />
          </div>
        </ProgressiveSection>

        {/* Mission Statement */}
        <ProgressiveSection className="py-20 md:py-30">
          <div className="container-custom">
            <ContentSection
              badge="Precision Comfort"
              title="Our Mission"
              description="SKIIN is committed to delivering clinical-grade accuracy in heart monitoring without compromising patient comfort and autonomy. We recognize that Swiss healthcare values privacy, quality, and informed decision-making, so we have tailored our service to uphold these values at every step."
              icon={Heart}
              align="center"
            />
          </div>
        </ProgressiveSection>

        {/* Swiss Heritage Section */}
        <SwissHeritage />

        {/* Leadership Showcase */}
        <LeadershipShowcase />

        {/* Our Vision */}
        <ProgressiveSection className="py-20 md:py-30 bg-gradient-to-br from-background to-background-accent">
          <div className="container-custom">
            <ContentSection
              title="Our Vision"
              description="We envision a future where long waits and uncomfortable medical tests are replaced by seamless, patient-friendly solutions that empower individuals and support healthcare providers. By enabling early detection of silent cardiac conditions (like intermittent arrhythmias) and making monitoring accessible from home, we aim to reduce preventable cardiac events."
              align="center"
            />
            <div className="mt-8 max-w-4xl mx-auto text-center space-y-6">
              <p className="text-lg text-muted-foreground">
                This vision is informed by Switzerland's reputation for precision and reliability – 
                traits we embed in our product – and by the need to ease patient anxiety with an 
                approachable, empathetic experience.
              </p>
              <p className="text-lg text-muted-foreground">
                We also aim to support physicians with trustworthy data and easy workflows, 
                strengthening the doctor-patient relationship through better insights.
              </p>
            </div>
          </div>
        </ProgressiveSection>

        {/* Quality and Compliance */}
        <ProgressiveSection className="py-20 md:py-30">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Quality & Compliance</h2>
            <FeatureGrid
              features={qualityFeatures}
              variant="cards"
              columns={3}
            />
          </div>
        </ProgressiveSection>

        {/* Commitment */}
        <ProgressiveSection className="py-20 md:py-30 bg-background-secondary">
          <div className="container-custom">
            <ContentSection
              title="Our Commitment"
              description="SKIIN Switzerland aims not just to introduce a product, but to build trust and credibility in the community. We collaborate with Swiss healthcare providers and incorporate feedback from local cardiologists and GPs in an ongoing process of improvement. By combining a startup's innovation with Switzerland's medical excellence, we strive to set a new standard for heart monitoring that is both high-tech and profoundly human-centered."
              align="center"
            />
          </div>
        </ProgressiveSection>
      </main>
      <Footer />
    </div>
  );
};

export default Company;