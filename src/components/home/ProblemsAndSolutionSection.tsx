import React, { useEffect, useRef } from 'react';
import { useTranslation } from '@/hooks/useTranslation';
import { Activity, Clock, CheckCircle2, Zap, Shield, Heart } from 'lucide-react';

/**
 * Premium Problems & Solution Section with Apple-level design quality
 * Features sophisticated animations and medical-grade aesthetics
 */
const ProblemsAndSolutionSection = () => {
  const t = useTranslation('home');
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="section bg-gradient-secondary overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal-100 rounded-full blur-3xl opacity-20" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-navy-100 rounded-full blur-3xl opacity-20" />
      </div>
      
      <div className="container-default relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-on-scroll opacity-0 animate-fade-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass swiss-quality mb-6">
              <Shield className="w-4 h-4 text-teal-600" />
              <span className="text-sm font-medium text-navy-800">
                Medical Innovation
              </span>
            </div>
            <h2 className="text-display font-bold text-navy-900 mb-4">
              <span className="block">Finally, a Heart Monitor</span>
              <span className="block text-gradient-reverse">Without the Hassle</span>
            </h2>
          </div>

          {/* Main Problem & Solution Paragraph */}
          <div className="glass rounded-3xl p-10 md:p-12 shadow-premium mb-16 animate-on-scroll opacity-0 animate-fade-up hover-lift" style={{ animationDelay: '100ms' }}>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-navy-900 mb-4">
                  The Old Way
                </h3>
                <p className="text-lg text-navy-700 leading-relaxed">
                  Traditional Holter monitors are cumbersome: sticky electrodes that irritate skin, tangled wires that restrict movement, bulky devices to carry, and typically only 24-48 hours of recording that often miss intermittent issues.
                </p>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-teal-400/10 to-transparent rounded-2xl" />
                <div className="relative bg-white/50 backdrop-blur-sm rounded-2xl p-8 border border-teal-100">
                  <h3 className="text-2xl font-bold text-gradient mb-4">
                    The SKIIN Way
                  </h3>
                  <p className="text-lg text-navy-700 leading-relaxed">
                    A simple, comfortable garment that feels like regular clothing. No wires, no patches, no hassle - just 14 days of continuous, clinical-grade heart monitoring while you live your life.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Key Benefits Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="group animate-on-scroll opacity-0 animate-fade-up" style={{ animationDelay: '200ms' }}>
              <div className="glass rounded-2xl p-8 h-full shadow-premium hover-lift transition-all duration-300">
                <div className="mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-teal-400 to-teal-600 rounded-2xl flex items-center justify-center shadow-medical group-hover:scale-110 transition-transform duration-300">
                    <Zap className="w-7 h-7 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-navy-900 mb-3">
                  No Wires or Sticky Pads
                </h3>
                <p className="text-navy-700 leading-relaxed">
                  Just a comfortable textile band that feels like regular clothing. No skin irritation, no tangled wires, no restrictions.
                </p>
              </div>
            </div>

            <div className="group animate-on-scroll opacity-0 animate-fade-up" style={{ animationDelay: '300ms' }}>
              <div className="glass rounded-2xl p-8 h-full shadow-premium hover-lift transition-all duration-300">
                <div className="mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-navy-600 to-navy-800 rounded-2xl flex items-center justify-center shadow-medical group-hover:scale-110 transition-transform duration-300">
                    <Clock className="w-7 h-7 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-navy-900 mb-3">
                  14-Day Continuous ECG
                </h3>
                <p className="text-navy-700 leading-relaxed">
                  Extended monitoring captures intermittent arrhythmias that 24-48 hour tests often miss. More data, better diagnosis.
                </p>
              </div>
            </div>

            <div className="group animate-on-scroll opacity-0 animate-fade-up" style={{ animationDelay: '400ms' }}>
              <div className="glass rounded-2xl p-8 h-full shadow-premium hover-lift transition-all duration-300">
                <div className="mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-coral-500 to-coral-600 rounded-2xl flex items-center justify-center shadow-medical group-hover:scale-110 transition-transform duration-300">
                    <CheckCircle2 className="w-7 h-7 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-navy-900 mb-3">
                  Clinical-Grade Accuracy
                </h3>
                <p className="text-navy-700 leading-relaxed">
                  CE-marked medical device matching traditional Holter precision while being significantly more comfortable.
                </p>
              </div>
            </div>
          </div>

          {/* Statistics Section */}
          <div className="relative">
            <div className="text-center mb-12 animate-on-scroll opacity-0 animate-fade-up">
              <h3 className="text-2xl font-bold text-navy-900 mb-2">
                The Numbers That Matter
              </h3>
              <p className="text-lg text-navy-700">
                Why extended monitoring makes a critical difference
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="group animate-on-scroll opacity-0 animate-scale-in" style={{ animationDelay: '100ms' }}>
                <div className="relative overflow-hidden rounded-3xl shadow-premium hover-lift">
                  <div className="absolute inset-0 bg-gradient-to-br from-coral-500 to-coral-600" />
                  <div className="relative p-8 text-white text-center">
                    <div className="mb-4">
                      <Heart className="w-12 h-12 mx-auto opacity-50" />
                    </div>
                    <div className="text-5xl font-bold mb-2">70%</div>
                    <p className="text-lg font-medium leading-snug">
                      of arrhythmias remain undetected with short-term monitoring
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="group animate-on-scroll opacity-0 animate-scale-in" style={{ animationDelay: '200ms' }}>
                <div className="relative overflow-hidden rounded-3xl shadow-premium hover-lift">
                  <div className="absolute inset-0 bg-gradient-to-br from-navy-700 to-navy-900" />
                  <div className="relative p-8 text-white text-center">
                    <div className="mb-4">
                      <Activity className="w-12 h-12 mx-auto opacity-50" />
                    </div>
                    <div className="text-5xl font-bold mb-2">5x</div>
                    <p className="text-lg font-medium leading-snug">
                      higher stroke risk with undiagnosed atrial fibrillation
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="group animate-on-scroll opacity-0 animate-scale-in" style={{ animationDelay: '300ms' }}>
                <div className="relative overflow-hidden rounded-3xl shadow-premium hover-lift">
                  <div className="absolute inset-0 bg-gradient-to-br from-teal-500 to-teal-700" />
                  <div className="relative p-8 text-white text-center">
                    <div className="mb-4">
                      <CheckCircle2 className="w-12 h-12 mx-auto opacity-50" />
                    </div>
                    <div className="text-5xl font-bold mb-2">14</div>
                    <p className="text-lg font-medium leading-snug">
                      days of continuous monitoring with SKIIN for better detection
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemsAndSolutionSection;