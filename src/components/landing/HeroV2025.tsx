import React from 'react';
import { cn } from '@/lib/utils';

interface HeroV2025Props {
  className?: string;
}

export const HeroV2025: React.FC<HeroV2025Props> = ({ className }) => {
  return (
    <section className={cn("min-h-screen bg-muted flex items-center", className)}>
      <div className="container mx-auto px-6">
        <div className="text-center max-w-6xl mx-auto">
          {/* Tagline */}
          <p className="text-sm uppercase tracking-widest text-muted-foreground mb-8 font-medium animate-fadeIn">
            LIVE WELL. START WITH YOUR HEART.
          </p>

          {/* Main Headline - Two lines for better layout */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-8 leading-tight animate-fadeInUp animation-delay-100">
            <span className="block text-foreground">Most heart issues</span>
            <span className="block text-foreground">show no signs.</span>
          </h1>

          {/* Subheadline - Purple accent */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-accent mb-12 leading-snug animate-fadeInUp animation-delay-200">
            A simple check can make all the difference.
          </h2>

          {/* CTA Button */}
          <button className="
            bg-secondary-foreground 
            hover:bg-secondary-foreground/90 
            text-white 
            px-10 py-5 
            rounded-lg 
            text-lg 
            font-medium 
            transition-all 
            duration-300 
            transform 
            hover:scale-105 
            shadow-lg
            hover:shadow-xl
            animate-fadeInUp 
            animation-delay-300
          ">
            Check your heart from home →
          </button>

          {/* Trust Line */}
          <div className="mt-20 pt-8 border-t border-muted-foreground/10 animate-fadeIn animation-delay-400">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
              <span className="text-xs uppercase tracking-wider text-muted-foreground/70">
                Certified by BAG
              </span>
              <span className="hidden sm:block text-muted-foreground/30">•</span>
              <span className="text-xs uppercase tracking-wider text-muted-foreground/70">
                Covered by Insurance
              </span>
              <span className="hidden sm:block text-muted-foreground/30">•</span>
              <span className="text-xs uppercase tracking-wider text-muted-foreground/70">
                Delivered to Your Home
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};