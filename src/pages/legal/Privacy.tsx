import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Shield } from 'lucide-react';
import { ProgressiveSection } from '@/components/ui/progressive-section';
import { ContentSection } from '@/components/ui/content-section';

const Privacy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <ProgressiveSection className="py-20 bg-gradient-primary text-white">
          <ContentSection
            title="Privacy Policy"
            subtitle="Your Privacy Matters to Us"
            description="Learn how SKIIN protects and manages your personal health information"
            icon={Shield}
            iconClassName="text-white"
            center
            dark
          />
        </ProgressiveSection>

        <ProgressiveSection className="py-20">
          <div className="container-custom">
            <Card className="max-w-4xl mx-auto">
              <CardContent className="p-8">
                <h2 className="text-2xl font-semibold mb-6">Privacy Policy</h2>
                
                <div className="prose prose-lg max-w-none">
                  <p className="text-muted-foreground mb-4">
                    Last updated: {new Date().toLocaleDateString()}
                  </p>
                  
                  <section className="mb-8">
                    <h3 className="text-xl font-semibold mb-4">1. Information We Collect</h3>
                    <p className="text-muted-foreground mb-4">
                      We collect information you provide directly to us, such as when you create an account,
                      use our services, or contact us for support.
                    </p>
                  </section>

                  <section className="mb-8">
                    <h3 className="text-xl font-semibold mb-4">2. How We Use Your Information</h3>
                    <p className="text-muted-foreground mb-4">
                      We use the information we collect to provide, maintain, and improve our services,
                      process transactions, and communicate with you.
                    </p>
                  </section>

                  <section className="mb-8">
                    <h3 className="text-xl font-semibold mb-4">3. Data Security</h3>
                    <p className="text-muted-foreground mb-4">
                      We implement appropriate technical and organizational measures to protect your
                      personal information against unauthorized access, alteration, disclosure, or destruction.
                    </p>
                  </section>

                  <section className="mb-8">
                    <h3 className="text-xl font-semibold mb-4">4. Contact Us</h3>
                    <p className="text-muted-foreground">
                      If you have any questions about this Privacy Policy, please contact us at:
                      <br />
                      Email: privacy@myant.ca
                      <br />
                      Phone: +41 44 XXX XX XX
                    </p>
                  </section>

                  <p className="text-sm text-muted-foreground mt-8">
                    This is a placeholder privacy policy. The complete privacy policy will be provided
                    by the legal team before launch.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </ProgressiveSection>
      </main>

      <Footer />
    </div>
  );
};

export default Privacy;