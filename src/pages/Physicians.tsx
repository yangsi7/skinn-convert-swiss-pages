
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Check, Download, FileText, Heart, Shield, Video } from 'lucide-react';

const Physicians = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="pt-28 pb-16 md:pt-32 md:pb-24 bg-myant-lightgreen">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 animate-fade-in">
                <span className="text-primary font-medium">For Healthcare Providers</span>
                <h1 className="text-4xl md:text-5xl font-bold leading-tight text-foreground text-balance">
                  Transforming Cardiac Monitoring for Your Practice
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground max-w-lg">
                  SKIIN offers a new standard in cardiac monitoring that's simple to prescribe, comfortable for patients, and delivers higher quality, continuous data.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-myant-green hover:bg-myant-darkgreen">
                    Request Demo
                  </Button>
                  <Button size="lg" variant="outline" className="border-myant-green text-myant-green hover:bg-myant-lightgreen">
                    Download Studies
                  </Button>
                </div>
              </div>

              <div className="relative animate-slide-in">
                <img
                  src="/lovable-uploads/40ba1015-dfac-4b19-9548-8f3319ffe098.png"
                  alt="Doctor examining SKIIN data with patient on video call"
                  className="w-full h-auto rounded-xl shadow-lg"
                />
                <div className="absolute -bottom-8 -left-8 max-w-xs">
                  <Card className="p-4 shadow-lg">
                    <div className="flex items-start space-x-3">
                      <div className="bg-myant-lightgreen p-2 rounded-full">
                        <Check className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">Clinically Validated</p>
                        <p className="text-sm text-muted-foreground mt-1">
                          SKIIN meets all regulatory standards for cardiac monitoring devices
                        </p>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-primary font-medium">Clinical Benefits</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
                Why Physicians Choose SKIIN
              </h2>
              <p className="text-lg text-muted-foreground">
                Designed with healthcare providers in mind to improve clinical workflows and patient outcomes
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="p-6 border-none shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-myant-lightgreen p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                  <Heart className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Superior Data Quality</h3>
                <p className="text-muted-foreground">
                  Continuous 14-day monitoring provides richer data than traditional 24-48 hour Holter monitors, increasing arrhythmia detection rates by up to 67%.
                </p>
              </Card>

              <Card className="p-6 border-none shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-myant-lightgreen p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                  <Shield className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Improved Adherence</h3>
                <p className="text-muted-foreground">
                  The comfortable design means patients actually wear it as prescribed. Our studies show 94% wear compliance throughout the monitoring period.
                </p>
              </Card>

              <Card className="p-6 border-none shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-myant-lightgreen p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                  <FileText className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Streamlined Workflow</h3>
                <p className="text-muted-foreground">
                  Integrate seamlessly with your EHR system. Automated reporting and AI analysis save time while still giving you access to the full raw data.
                </p>
              </Card>
            </div>

            <div className="mt-16 text-center">
              <Button size="lg" className="bg-myant-green hover:bg-myant-darkgreen">
                See All Clinical Benefits
              </Button>
            </div>
          </div>
        </section>

        {/* Evidence Section */}
        <section className="section-padding bg-myant-gray/30">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-primary font-medium">Clinical Evidence</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
                Research-Backed Results
              </h2>
              <p className="text-lg text-muted-foreground">
                SKIIN has been validated through rigorous clinical testing
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="p-6 border-none shadow-sm hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold">Multi-Center Validation Study</h3>
                  <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                    <Download className="h-4 w-4" />
                    <span className="sr-only">Download</span>
                  </Button>
                </div>
                <p className="text-muted-foreground mb-4">
                  Comparison of SKIIN vs. traditional Holter monitors across 500 patients in 5 European centers.
                </p>
                <div className="flex items-center text-sm text-muted-foreground">
                  <span className="font-medium">Published:</span>
                  <span className="ml-1">European Heart Journal, 2024</span>
                </div>
              </Card>

              <Card className="p-6 border-none shadow-sm hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold">Patient Compliance Study</h3>
                  <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                    <Download className="h-4 w-4" />
                    <span className="sr-only">Download</span>
                  </Button>
                </div>
                <p className="text-muted-foreground mb-4">
                  Assessment of comfort and compliance rates comparing SKIIN garments to traditional monitoring methods.
                </p>
                <div className="flex items-center text-sm text-muted-foreground">
                  <span className="font-medium">Published:</span>
                  <span className="ml-1">Journal of Digital Health, 2023</span>
                </div>
              </Card>

              <Card className="p-6 border-none shadow-sm hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold">AI Detection Algorithm Validation</h3>
                  <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                    <Download className="h-4 w-4" />
                    <span className="sr-only">Download</span>
                  </Button>
                </div>
                <p className="text-muted-foreground mb-4">
                  Evaluation of SKIIN's AI-powered arrhythmia detection algorithm against expert cardiologist analysis.
                </p>
                <div className="flex items-center text-sm text-muted-foreground">
                  <span className="font-medium">Published:</span>
                  <span className="ml-1">NPJ Digital Medicine, 2024</span>
                </div>
              </Card>
            </div>

            <div className="mt-10 text-center">
              <Button variant="outline" className="border-myant-green text-myant-green hover:bg-myant-lightgreen">
                View All Clinical Research
              </Button>
            </div>
          </div>
        </section>

        {/* Integration Section */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-primary font-medium">Seamless Integration</span>
                <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">
                  Fits Into Your Clinical Workflow
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  SKIIN was designed to integrate easily into existing clinical practices, with minimal disruption to you and your team.
                </p>
                
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start">
                    <div className="mr-4 bg-myant-lightgreen p-1 rounded-full">
                      <Check className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">EHR Integration</p>
                      <p className="text-muted-foreground text-sm">
                        Connects with major electronic health record systems
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-4 bg-myant-lightgreen p-1 rounded-full">
                      <Check className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Simple Prescription Process</p>
                      <p className="text-muted-foreground text-sm">
                        Prescribe and order directly within your existing systems
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-4 bg-myant-lightgreen p-1 rounded-full">
                      <Check className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">No Special Equipment Needed</p>
                      <p className="text-muted-foreground text-sm">
                        All technical components are included in the patient kit
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-4 bg-myant-lightgreen p-1 rounded-full">
                      <Check className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Comprehensive Support</p>
                      <p className="text-muted-foreground text-sm">
                        Dedicated clinical support team available for you and your patients
                      </p>
                    </div>
                  </li>
                </ul>

                <Button className="bg-myant-green hover:bg-myant-darkgreen">
                  Schedule Integration Demo
                </Button>
              </div>

              <div className="bg-myant-lightgreen p-6 rounded-xl grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card className="p-4 border-none">
                  <Video className="h-10 w-10 text-primary mb-3" />
                  <h3 className="font-semibold mb-1">Watch Demo</h3>
                  <p className="text-sm text-muted-foreground">See how easy it is to prescribe SKIIN</p>
                </Card>
                <Card className="p-4 border-none">
                  <FileText className="h-10 w-10 text-primary mb-3" />
                  <h3 className="font-semibold mb-1">Documentation</h3>
                  <p className="text-sm text-muted-foreground">Technical and clinical integration guides</p>
                </Card>
                <Card className="p-4 border-none">
                  <Download className="h-10 w-10 text-primary mb-3" />
                  <h3 className="font-semibold mb-1">EHR Templates</h3>
                  <p className="text-sm text-muted-foreground">Ready-made templates for major EHR systems</p>
                </Card>
                <Card className="p-4 border-none">
                  <Shield className="h-10 w-10 text-primary mb-3" />
                  <h3 className="font-semibold mb-1">Compliance</h3>
                  <p className="text-sm text-muted-foreground">Regulatory and security documentation</p>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-myant-green text-white">
          <div className="container-custom text-center max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to elevate your cardiac care?
            </h2>
            <p className="text-lg opacity-90 mb-8">
              Join leading cardiologists and primary care physicians who have already integrated SKIIN into their practice.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="bg-white text-myant-green hover:bg-myant-lightgreen">
                Request Demo
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-myant-darkgreen">
                Contact Clinical Specialist
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Physicians;
