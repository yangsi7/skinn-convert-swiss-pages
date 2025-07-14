
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTranslation } from "@/hooks/useTranslation";
import { useRouteTranslations } from "@/utils/routeTranslations";
import { ArrowRight, Heart, Shield, Activity } from "lucide-react";

/**
 * Premium HeroSection with Apple-level design quality
 * Medical-grade aesthetics with Swiss precision
 */
const HeroSection = () => {
  const { language } = useLanguage();
  const translations = useTranslation('home');
  const { getRoutePath } = useRouteTranslations();
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);
  
  return (
    <section className="section relative min-h-[100vh] flex items-center overflow-hidden">
      {/* Premium gradient background with mesh overlay */}
      <div className="absolute inset-0 bg-gradient-medical">
        <div className="absolute inset-0 gradient-mesh-overlay" />
        <div className="absolute inset-0 bg-hero-pattern opacity-[0.02]" />
      </div>
      
      {/* Animated ECG line */}
      <svg className="absolute top-1/2 left-0 w-full h-64 -translate-y-1/2 opacity-10" viewBox="0 0 1200 200">
        <path
          d="M0,100 L200,100 L220,60 L240,140 L260,20 L280,180 L300,100 L1200,100"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          className="text-teal-600 animate-ecg-line"
          strokeDasharray="1000"
        />
      </svg>
      
      <div className="container-default relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content Side */}
          <div className="space-y-8">
            {/* Swiss Quality Badge */}
            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full glass swiss-quality animate-in ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
              <Shield className="w-4 h-4 text-teal-600" />
              <span className="text-sm font-medium text-navy-800">
                Swiss Medical Excellence
              </span>
            </div>
            
            {/* Main Heading */}
            <h1 className={`text-hero font-bold text-navy-900 animate-in delay-100 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
              <span className="block">Next-Generation</span>
              <span className="block text-gradient-reverse">Heart Monitoring</span>
            </h1>
            
            {/* Subtitle */}
            <p className={`text-xl md:text-2xl text-navy-600 leading-relaxed max-w-xl animate-in delay-200 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
              {translations.hero.description}
            </p>
            
            {/* CTAs */}
            <div className={`flex flex-col sm:flex-row gap-4 animate-in delay-300 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
              <Button
                size="lg"
                className="group bg-gradient-to-r from-navy-900 to-navy-800 hover:from-navy-800 hover:to-navy-700 text-white px-8 py-6 text-lg font-medium shadow-premium hover-lift"
                asChild
              >
                <Link to={language === 'en' ? '/solutions' : `/${language}/${language === 'de' ? 'losungen' : 'solutions'}`}>
                  {translations.hero.buttons.solutions}
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="group border-2 border-navy-200 text-navy-900 hover:bg-navy-50 hover:border-navy-300 px-8 py-6 text-lg font-medium backdrop-blur-sm bg-white/50 hover-lift"
                asChild
              >
                <Link to={language === 'en' ? '/partners' : `/${language}/${language === 'de' ? 'partner' : 'partenaires'}`}>
                  {translations.hero.buttons.partners}
                  <Heart className="ml-2 h-5 w-5 text-teal-600 transition-transform group-hover:scale-110" />
                </Link>
              </Button>
            </div>
            
            {/* Trust Indicators */}
            <div className={`flex flex-wrap items-center gap-6 pt-4 animate-in delay-300 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  <div className="w-10 h-10 rounded-full glass-dark flex items-center justify-center text-xs font-bold text-white shadow-premium">
                    CE
                  </div>
                  <div className="w-10 h-10 rounded-full glass-dark flex items-center justify-center text-xs font-bold text-white shadow-premium">
                    IIa
                  </div>
                  <div className="w-10 h-10 rounded-full glass-dark flex items-center justify-center text-xs font-bold text-white shadow-premium">
                    HD
                  </div>
                </div>
                <p className="text-sm font-medium text-navy-700">
                  {translations.hero.certification}
                </p>
              </div>
              
              <div className="h-8 w-px bg-navy-200" />
              
              <div className="flex items-center gap-2">
                <Activity className="w-5 h-5 text-teal-600 animate-pulse-soft" />
                <span className="text-sm font-medium text-navy-700">
                  14-Day Continuous Monitoring
                </span>
              </div>
            </div>
          </div>
          
          {/* Visual Side */}
          <div className={`relative animate-in delay-200 ${isVisible ? 'animate-scale-in' : 'opacity-0 scale-95'}`}>
            {/* Main Device Image Container */}
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-radial from-teal-400/20 to-transparent blur-3xl" />
              
              {/* Glass Card Background */}
              <div className="relative glass rounded-3xl p-8 shadow-premium">
                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-teal-400 to-teal-600 rounded-2xl shadow-medical animate-float" />
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-navy-600 to-navy-800 rounded-xl shadow-medical animate-float delay-200" />
                
                {/* Device Image */}
                <img
                  src="/lovable-uploads/1f227914-01f4-49cb-9a48-3f39976b4898.png"
                  alt="SKIIN Smart Textile ECG Monitor"
                  className="w-full h-auto rounded-2xl shadow-medical relative z-10"
                />
                
                {/* Floating Data Visualization */}
                <div className="absolute top-8 right-8 glass-dark rounded-xl p-4 shadow-premium animate-float delay-300">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-teal-400 to-teal-600 rounded-lg flex items-center justify-center">
                      <Heart className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 uppercase tracking-wider">Heart Rate</p>
                      <p className="text-2xl font-bold text-white">72 <span className="text-sm font-normal">bpm</span></p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Testimonial Card */}
              <div className="absolute -bottom-6 -right-6 max-w-xs glass rounded-2xl p-6 shadow-premium animate-in delay-300 hover-lift">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-teal-400 to-teal-600 rounded-full flex items-center justify-center shadow-medical">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-navy-800 leading-relaxed">
                      "{translations.hero.testimonial.quote}"
                    </p>
                    <p className="text-xs text-navy-600 mt-2 font-medium">
                      {translations.hero.testimonial.author}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-navy-300 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-navy-300 rounded-full mt-2 animate-pulse-soft" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
