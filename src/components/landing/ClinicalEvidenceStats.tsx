import React from 'react';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';

interface ClinicalEvidenceStatsProps {
  className?: string;
}

export const ClinicalEvidenceStats: React.FC<ClinicalEvidenceStatsProps> = ({ className }) => {
  return (
    <section className={cn("relative overflow-hidden", className)}>
      {/* Full width blue background */}
      <div className="bg-[#2B5BA8] text-white">
        <div className="container mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Text content */}
            <div className="space-y-8">
              <div>
                <p className="text-sm uppercase tracking-wider opacity-80 mb-4">
                  EXTENDED MONITORING SAVES LIVES
                </p>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  What short tests miss,<br />
                  time reveals.
                </h2>
              </div>
              
              {/* CTA */}
              <button className="
                bg-white 
                text-[#2B5BA8]
                hover:bg-white/90 
                px-8 py-4 
                rounded-lg 
                text-base 
                font-medium 
                transition-all 
                duration-300 
                transform 
                hover:scale-105 
                shadow-lg
                inline-flex items-center gap-2
              ">
                Check your heart from home
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Right side - Stats overlay */}
            <div className="relative">
              {/* Dark card with stats */}
              <div className="bg-[#1A2B4A] rounded-2xl p-8 lg:p-12 shadow-2xl">
                {/* Main stat */}
                <div className="text-center mb-8">
                  <div className="text-7xl md:text-8xl lg:text-9xl font-bold mb-4">
                    83%
                  </div>
                  <p className="text-lg md:text-xl opacity-90">
                    of U.S. counties are<br />
                    experiencing a primary care<br />
                    shortage
                  </p>
                </div>

                {/* Additional stats */}
                <div className="space-y-6 pt-8 border-t border-white/20">
                  <div className="flex items-center justify-between">
                    <span className="text-sm uppercase tracking-wider opacity-70">Older Text</span>
                    <span className="text-3xl font-bold">75%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm uppercase tracking-wider opacity-70">Practice Ratio</span>
                    <span className="text-3xl font-bold">7/10</span>
                  </div>
                  <p className="text-xs opacity-60 pt-4">
                    of medical costs are due to<br />
                    chronic preventable conditions<br />
                    like undiagnosed cardiac conditions
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};