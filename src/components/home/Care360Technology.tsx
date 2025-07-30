import React from 'react';
import { useTranslation } from '@/hooks/useTranslation';
import { Home, Heart, Smartphone, Brain, FileCheck, Clock } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

/**
 * Enhanced Care360 Technology component focused on home-based Holter study
 * Emphasizes the convenience and medical-grade quality of at-home monitoring
 */
export function Care360Technology() {
  const t = useTranslation('home');
  
  const features = [
    {
      icon: Home,
      title: "Complete from Home",
      description: "No hospital visits required. Your comprehensive cardiac assessment happens in the comfort of your own home."
    },
    {
      icon: Heart,
      title: "Medical-Grade Monitoring",
      description: "Hospital-quality ECG data capture with the convenience of a wearable garment."
    },
    {
      icon: Smartphone,
      title: "Real-Time Data Sync",
      description: "Continuous transmission to our secure cloud ensures no data is lost and enables timely intervention."
    },
    {
      icon: Brain,
      title: "AI-Powered Analysis",
      description: "Advanced algorithms trained on millions of ECGs detect patterns human eyes might miss."
    },
    {
      icon: FileCheck,
      title: "Cardiologist Validated",
      description: "Every report is reviewed and validated by Swiss cardiologists for accuracy and actionable insights."
    },
    {
      icon: Clock,
      title: "Fast Results",
      description: "Receive your comprehensive cardiac report within 24-48 hours of completing your study."
    }
  ];

  return (
    <section className="section-padding bg-gradient-to-b from-secondary/10 to-background relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-medical-teal rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-professional-teal rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <Badge className="mb-4" variant="outline">
            Home-Based Holter Study
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Revolutionary Care360° Technology
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground">
            Experience the future of cardiac monitoring - comprehensive, comfortable, and completely from home
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left: Features Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-medical-teal/20 to-professional-teal/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      <feature.icon className="w-6 h-6 text-medical-teal" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Right: Visual Showcase */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/assets/images/app-live-ecg.png"
                alt="SKIIN App showing real-time ECG monitoring"
                className="w-full h-auto"
                loading="lazy"
              />
              {/* Floating Badge */}
              <div className="absolute bottom-4 right-4">
                <Badge 
                  className="bg-gradient-to-r from-medical-teal to-professional-teal text-white px-4 py-2 text-sm font-semibold shadow-lg"
                >
                  Real-time ECG Monitoring
                </Badge>
              </div>
            </div>
          </div>
        </div>

        {/* How It Works Timeline */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-center mb-12">
            Your Home-Based Holter Study Journey
          </h3>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-medical-teal to-professional-teal hidden md:block" />
              
              {/* Timeline Steps */}
              <div className="space-y-8">
                {[
                  {
                    step: "1",
                    title: "Medical Referral",
                    description: "Get a referral from your GP or complete our free eligibility assessment"
                  },
                  {
                    step: "2",
                    title: "Home Delivery",
                    description: "Receive your SKIIN kit within 24-48 hours, complete with easy instructions"
                  },
                  {
                    step: "3",
                    title: "10-Day Monitoring",
                    description: "Wear the comfortable garment while living your normal life"
                  },
                  {
                    step: "4",
                    title: "Automatic Analysis",
                    description: "AI analyzes your data in real-time, flagging any irregularities"
                  },
                  {
                    step: "5",
                    title: "Expert Review",
                    description: "Swiss cardiologists validate findings and create your personalized report"
                  }
                ].map((item, index) => (
                  <div key={index} className="relative flex items-start gap-6">
                    {/* Step Number */}
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-medical-teal to-professional-teal text-white flex items-center justify-center font-bold text-lg shrink-0 z-10">
                      {item.step}
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 pt-2">
                      <h4 className="font-semibold text-lg mb-1">{item.title}</h4>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            Join the thousands who have already experienced the convenience and accuracy of home-based cardiac monitoring
          </p>
          <a 
            href="/eligibility" 
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-medical-teal to-professional-teal text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5"
          >
            Start Your Home-Based Holter Study
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}