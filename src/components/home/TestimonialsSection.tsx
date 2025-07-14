
import React, { useEffect, useRef } from "react";
import { Quote, Star, Heart, Activity } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";

/**
 * Premium TestimonialsSection with elegant design and animations
 */
const TestimonialsSection = () => {
  const translations = useTranslation('home');
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
  
  const testimonials = [
    {
      quote: "I hardly noticed I was wearing the monitor, and it found an issue my 24-hour Holter didn't. SKIIN potentially saved my life.",
      name: "Michael",
      title: "62, Basel",
      role: "Patient",
      image: "/lovable-uploads/2c470df9-6b84-48a2-b3f4-d958760f8b36.png",
      gradient: "from-teal-500 to-teal-700",
      icon: Heart
    },
    {
      quote: "SKIIN provided continuous data that helped me catch an intermittent arrhythmia. The ease of use meant my patient actually kept it on for the full 2 weeks.",
      name: "Dr. Anne Dupont",
      title: "GP, Geneva",
      role: "Physician",
      image: "/lovable-uploads/72de88b6-6f7b-4e58-abb2-dc50a762a353.png",
      gradient: "from-navy-600 to-navy-800",
      icon: Activity
    },
    {
      quote: "The technology is revolutionary. We're seeing detection rates that were simply impossible with traditional monitoring.",
      name: "Prof. Dr. Weber",
      title: "Cardiologist, Zürich",
      role: "Specialist",
      gradient: "from-coral-500 to-coral-600",
      icon: Activity
    }
  ];

  return (
    <section ref={sectionRef} className="relative py-32 bg-gradient-to-b from-navy-50/50 via-white to-white overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-teal-100 rounded-full blur-3xl opacity-20" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-navy-100 rounded-full blur-3xl opacity-20" />
      </div>
      
      <div className="container-custom relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20 animate-on-scroll opacity-0 animate-fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass swiss-quality mb-6">
            <Quote className="w-4 h-4 text-teal-600" />
            <span className="text-sm font-medium text-navy-800">
              Real Stories
            </span>
          </div>
          <h2 className="text-display font-bold text-navy-900 mb-6">
            <span className="block">Trusted by Doctors</span>
            <span className="block text-gradient-reverse">and Patients</span>
          </h2>
          <p className="text-xl text-navy-700 leading-relaxed">
            Hear from those who've experienced the difference SKIIN makes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => {
            const Icon = testimonial.icon;
            return (
              <div
                key={index}
                className={`group animate-on-scroll opacity-0 animate-fade-up delay-${(index + 1) * 100}`}
              >
                <div className="relative h-full">
                  {/* Glow effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${testimonial.gradient} opacity-0 group-hover:opacity-10 rounded-3xl blur-2xl transition-all duration-500`} />
                  
                  <div className="relative glass rounded-3xl p-8 h-full shadow-premium hover-lift transition-all duration-300">
                    {/* Quote icon */}
                    <div className="mb-6">
                      <div className={`w-12 h-12 bg-gradient-to-br ${testimonial.gradient} rounded-2xl flex items-center justify-center shadow-medical`}>
                        <Quote className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    
                    {/* Rating stars */}
                    <div className="flex gap-1 mb-6">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-gold-500 text-gold-500" />
                      ))}
                    </div>
                    
                    {/* Quote text */}
                    <p className="text-navy-800 leading-relaxed mb-8 italic">
                      "{testimonial.quote}"
                    </p>
                    
                    {/* Author info */}
                    <div className="flex items-center">
                      {testimonial.image ? (
                        <div className="relative mr-4">
                          <div className={`absolute inset-0 bg-gradient-to-br ${testimonial.gradient} rounded-full blur-sm`} />
                          <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="relative w-14 h-14 rounded-full object-cover border-2 border-white shadow-premium"
                          />
                        </div>
                      ) : (
                        <div className={`w-14 h-14 bg-gradient-to-br ${testimonial.gradient} rounded-full flex items-center justify-center mr-4 shadow-premium`}>
                          <Icon className="w-7 h-7 text-white" />
                        </div>
                      )}
                      <div>
                        <h4 className="font-bold text-navy-900">{testimonial.name}</h4>
                        <p className="text-sm text-navy-600">{testimonial.title}</p>
                        <p className="text-xs font-medium text-teal-600 uppercase tracking-wider mt-1">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
