import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { useTranslation } from '@/hooks/useTranslation';
import { cn } from '@/lib/utils';

interface MedicalAdvisorsProps {
  className?: string;
}

/**
 * Medical Advisors Showcase Component
 * Displays the board of medical advisors with their credentials
 */
export function MedicalAdvisors({ className }: MedicalAdvisorsProps) {
  const t = useTranslation('home');

  const advisors = [
    {
      name: 'Prof. Dr. Frank Ruschitzka',
      title: 'Chairman of Cardiology',
      institution: 'University Hospital Zurich',
      image: '/assets/images/team/dr-frank-ruschitzka-faceshot.jpeg',
      specialty: 'Heart Failure & Transplantation',
      bio: 'Leading authority in cardiovascular medicine and heart failure management',
    },
    {
      name: 'PD Dr. med. Mehdi Namdar',
      title: 'Senior Cardiologist',
      institution: 'University Hospital Geneva',
      image: '/assets/images/team/pd-dr-med-mehdi-namdar-faceshot.jpg',
      specialty: 'Cardiac Imaging & Electrophysiology',
      bio: 'Expert in advanced cardiac imaging techniques and arrhythmia management',
    },
    {
      name: 'PD Dr. med. Patrick Badertscher',
      title: 'Associate Professor & Senior Cardiologist',
      institution: 'University Hospital Basel',
      image: '/assets/images/team/Badertscher-Patrick.jpg',
      specialty: 'Cardiac Electrophysiology & Digital Health',
      bio: 'Pioneer of the "Wearable Clinic" initiative, with 200+ publications on digital cardiac',
    },
    {
      name: 'Dr. Michiel Winter',
      title: 'Cardiologist & Digital Health Pioneer',
      institution: 'Amsterdam University Medical Center, Netherlands',
      image: '/assets/images/team/dr-michiel-winter-faceshot.jpg',
      specialty: 'Digital Cardiology & Remote Patient Monitoring',
      bio: 'Head of Board for Cardiologie Centra Nederland, leading 12 outpatient clinics in digital transformation of cardiac care',
    },
  ];

  return (
    <section
      className={cn('section-padding bg-gradient-to-b from-background to-secondary/5', className)}
      data-testid="medical-advisors-section"
    >
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Trusted by Leading Cardiologists
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our medical advisory board includes Switzerland's most respected cardiac specialists,
            ensuring SKIIN meets the highest standards of clinical excellence
          </p>
        </div>

        {/* Advisors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {advisors.map((advisor, index) => (
            <Card
              key={index}
              className="overflow-hidden group hover:shadow-lg transition-all duration-300"
              data-testid={`medical-advisor-${index + 1}`}
            >
              <div className="aspect-square relative overflow-hidden bg-secondary/10">
                <img
                  src={advisor.image}
                  alt={advisor.name}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-lg text-foreground mb-1">{advisor.name}</h3>
                <p className="text-sm text-medical-teal font-medium mb-2">{advisor.title}</p>
                <p className="text-xs text-muted-foreground mb-1">{advisor.institution}</p>
                <p className="text-xs text-muted-foreground italic mb-2">{advisor.specialty}</p>
                {advisor.bio && (
                  <p className="text-xs text-muted-foreground/80 mt-3 pt-3 border-t border-gray-100">
                    {advisor.bio}
                  </p>
                )}
              </div>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button variant="outline" className="group" data-testid="view-team-button">
            View Full Medical Team
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        {/* Partner Institutions */}
        <div className="mt-16">
          <h3 className="text-center text-lg font-semibold text-muted-foreground mb-8">
            Partner Institutions
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {/* USZ Logo */}
            <div className="group relative">
              <div className="w-32 h-16 md:w-40 md:h-20 flex items-center justify-center bg-white/80 backdrop-blur-sm rounded-lg px-4 py-2 transition-all duration-300 hover:shadow-lg hover:bg-white">
                <img
                  src="/assets/images/hospitals/Logo-usz.png"
                  alt="University Hospital Zurich"
                  className="w-full h-full object-contain"
                  loading="lazy"
                />
              </div>
            </div>

            {/* HUG Logo */}
            <div className="group relative">
              <div className="w-32 h-16 md:w-40 md:h-20 flex items-center justify-center bg-white/80 backdrop-blur-sm rounded-lg px-4 py-2 transition-all duration-300 hover:shadow-lg hover:bg-white">
                <img
                  src="/assets/images/hospitals/hug-logo-notext.png"
                  alt="Geneva University Hospitals"
                  className="w-full h-full object-contain"
                  loading="lazy"
                />
              </div>
            </div>

            {/* USB Logo */}
            <div className="group relative">
              <div className="w-32 h-16 md:w-40 md:h-20 flex items-center justify-center bg-white/80 backdrop-blur-sm rounded-lg px-4 py-2 transition-all duration-300 hover:shadow-lg hover:bg-white">
                <img
                  src="/assets/images/hospitals/logo-usb-text.svg"
                  alt="University Hospital Basel"
                  className="w-full h-full object-contain"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Amsterdam UMC Logo */}
            <div className="group relative">
              <div className="w-36 h-16 md:w-44 md:h-20 flex items-center justify-center bg-white/80 backdrop-blur-sm rounded-lg px-4 py-2 transition-all duration-300 hover:shadow-lg hover:bg-white">
                <img
                  src="/assets/images/hospitals/amsterdam-umc-logo.png"
                  alt="Amsterdam University Medical Center"
                  className="w-full h-full object-contain"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Trust Indicator */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 text-sm text-muted-foreground">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span>Endorsed by 50+ Swiss cardiologists nationwide</span>
          </div>
        </div>
      </div>
    </section>
  );
}
