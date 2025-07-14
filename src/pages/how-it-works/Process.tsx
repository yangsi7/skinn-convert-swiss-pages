import React, { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  ClipboardList, 
  Package, 
  Clock, 
  Activity, 
  FileText,
  CheckCircle,
  Stethoscope,
  Users,
  ArrowRight,
  Phone,
  Building,
  CreditCard
} from 'lucide-react';

const Process = () => {
  const processSteps = [
    {
      number: "1",
      title: "Prescription & Enrollment",
      icon: <ClipboardList className="h-8 w-8 text-primary" />,
      patient: "You'll first answer a few questions to ensure SKIIN is right for you. SKIIN can coordinate with your doctor or a telemedicine physician to get an official prescription if needed.",
      physician: "Identify patient & provide prescription. SKIIN can supply an order template for easy referral.",
      details: "Under Swiss law, a Holter test requires a physician's order. We make this easy, whether through your own GP or our partner doctors."
    },
    {
      number: "2", 
      title: "Device Delivery",
      icon: <Package className="h-8 w-8 text-primary" />,
      patient: "The SKIIN kit is shipped directly to your home within 1-2 business days. The package includes the garment, sensor pod, charger, and simple instructions.",
      physician: "No action needed - SKIIN handles device provision. Ensure patient has the mobile app installed.",
      details: "Setup is simple with no technician needed. Download the SKIIN app and follow the Quick Start Guide for device pairing."
    },
    {
      number: "3",
      title: "Wearing & Monitoring", 
      icon: <Clock className="h-8 w-8 text-primary" />,
      patient: "Wear the SKIIN band day and night for up to 14 days. Continue your normal activities - work, sleep, exercise. The device is water-resistant and comfortable.",
      physician: "No action required during monitoring. Patient continues normal activities while data is collected continuously.",
      details: "The sensor records every heartbeat silently. If you feel symptoms, mark them in the app to help correlate events in the analysis."
    },
    {
      number: "4",
      title: "Data Analysis",
      icon: <Activity className="h-8 w-8 text-primary" />,
      patient: "Your ECG data is analyzed using advanced AI algorithms, then reviewed by certified cardiologists. All findings are verified by medical professionals.",
      physician: "SKIIN's team analyzes data with AI + human review. You may be contacted for any urgent findings if preferred.",
      details: "We use AI to screen for arrhythmias, but every SKIIN recording gets human expert review before finalizing for accuracy."
    },
    {
      number: "5",
      title: "Report & Follow-Up",
      icon: <FileText className="h-8 w-8 text-primary" />,
      patient: "Your doctor receives a comprehensive report and will discuss the results with you. If urgent issues are found, we expedite notification.",
      physician: "Receive detailed report via secure portal. Review findings and follow up with patient. Full disclosure ECG available if needed.",
      details: "Reports include overview of findings, any detected arrhythmias with timestamps, heart rate trends, and clinical interpretations."
    }
  ];

  const insurancePathways = [
    {
      model: "Standard Insurance",
      icon: <CreditCard className="h-6 w-6 text-primary" />,
      description: "Free choice of doctor",
      process: "Patient → Cardiologist or Telemed → SKIIN → Results to Doctor",
      note: "No gatekeeper required - direct access to specialists"
    },
    {
      model: "GP Model", 
      icon: <Stethoscope className="h-6 w-6 text-primary" />,
      description: "GP gatekeeper required",
      process: "Patient → GP Approval → SKIIN → Results to GP + Cardiologist", 
      note: "Must involve your GP first for insurance coverage"
    },
    {
      model: "HMO",
      icon: <Building className="h-6 w-6 text-primary" />,
      description: "HMO clinic coordination",
      process: "Patient → HMO Clinic → SKIIN → Results to HMO + Cardiologist",
      note: "Coordinate through your HMO physician"
    },
    {
      model: "Telmed",
      icon: <Phone className="h-6 w-6 text-primary" />,
      description: "Telemedicine first",
      process: "Patient → Call Telemed Hotline → SKIIN → Results to Telemed + Cardiologist",
      note: "Call your telemedicine center first as required"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-br from-primary/5 via-background to-primary/10">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="outline" className="mb-4">
                <Users className="h-4 w-4 mr-2" />
                Process Guide
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                The SKIIN Process
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Six simple steps to better cardiac care. Our streamlined process ensures patients get 
                the monitoring they need with minimal hassle, while keeping physicians informed throughout.
              </p>
              <Button size="lg" className="text-lg">
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </section>

        {/* Process Steps */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Step-by-Step Journey
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                From prescription to results - understand what happens at each stage for both patients and healthcare providers.
              </p>
            </div>

            <Tabs defaultValue="patient" className="max-w-6xl mx-auto">
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="patient" className="text-lg">Patient Journey</TabsTrigger>
                <TabsTrigger value="physician" className="text-lg">Physician Workflow</TabsTrigger>
              </TabsList>

              <TabsContent value="patient" className="space-y-8">
                {processSteps.map((step, index) => (
                  <Card key={index} className="relative overflow-hidden">
                    <CardContent className="p-8">
                      <div className="flex items-start gap-6">
                        <div className="flex-shrink-0 w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-xl">
                          {step.number}
                        </div>
                        <div className="flex-grow">
                          <div className="flex items-center gap-4 mb-4">
                            {step.icon}
                            <h3 className="text-2xl font-semibold text-foreground">{step.title}</h3>
                          </div>
                          <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                            {step.patient}
                          </p>
                          <div className="p-4 bg-muted/50 rounded-lg border-l-4 border-primary">
                            <p className="text-sm text-muted-foreground italic">
                              {step.details}
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>

              <TabsContent value="physician" className="space-y-8">
                {processSteps.map((step, index) => (
                  <Card key={index} className="relative overflow-hidden">
                    <CardContent className="p-8">
                      <div className="flex items-start gap-6">
                        <div className="flex-shrink-0 w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-xl">
                          {step.number}
                        </div>
                        <div className="flex-grow">
                          <div className="flex items-center gap-4 mb-4">
                            {step.icon}
                            <h3 className="text-2xl font-semibold text-foreground">{step.title}</h3>
                          </div>
                          <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                            {step.physician}
                          </p>
                          <div className="p-4 bg-muted/50 rounded-lg border-l-4 border-primary">
                            <p className="text-sm text-muted-foreground italic">
                              {step.details}
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Insurance Pathways */}
        <section className="section-padding bg-muted/30">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Coverage Pathways
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Different insurance models have different requirements. Here's what you need to know for each pathway.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {insurancePathways.map((pathway, index) => (
                <Card key={index} className="border-primary/20">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      {pathway.icon}
                      <div>
                        <h3 className="font-semibold text-foreground">{pathway.model}</h3>
                        <p className="text-sm text-muted-foreground">{pathway.description}</p>
                      </div>
                    </div>
                    <div className="mb-4 p-3 bg-muted/50 rounded font-mono text-sm">
                      {pathway.process}
                    </div>
                    <p className="text-sm text-muted-foreground">{pathway.note}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-12 text-center">
              <div className="inline-flex items-center gap-4 p-6 bg-background rounded-lg border border-primary/20">
                <CheckCircle className="h-8 w-8 text-primary" />
                <div className="text-left">
                  <h3 className="font-semibold text-foreground">Bottom Line</h3>
                  <p className="text-muted-foreground">
                    If you follow your insurance's protocol and a doctor orders SKIIN, your basic insurance will cover it
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Process;