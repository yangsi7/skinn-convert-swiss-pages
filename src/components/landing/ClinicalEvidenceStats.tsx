import React from 'react';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { AnimatedCounter } from '@/components/ui/AnimatedCounter';

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
                <motion.div 
                  className="text-center mb-8"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="text-7xl md:text-8xl lg:text-9xl font-bold mb-4">
                    <AnimatedCounter value={83} suffix="%" duration={2.5} />
                  </div>
                  <motion.p 
                    className="text-lg md:text-xl opacity-90"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 0.9, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                  >
                    of U.S. counties are<br />
                    experiencing a primary care<br />
                    shortage
                  </motion.p>
                </motion.div>

                {/* Additional stats */}
                <motion.div 
                  className="space-y-6 pt-8 border-t border-white/20"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8 }}
                >
                  <motion.div 
                    className="flex items-center justify-between"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.9 }}
                  >
                    <span className="text-sm uppercase tracking-wider opacity-70">Detection Rate</span>
                    <span className="text-3xl font-bold">
                      <AnimatedCounter value={75} suffix="%" duration={2} />
                    </span>
                  </motion.div>
                  <motion.div 
                    className="flex items-center justify-between"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1 }}
                  >
                    <span className="text-sm uppercase tracking-wider opacity-70">Silent Arrhythmias</span>
                    <span className="text-3xl font-bold">
                      <AnimatedCounter value={7} suffix="/10" duration={1.8} />
                    </span>
                  </motion.div>
                  <motion.p 
                    className="text-xs opacity-60 pt-4"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 0.6 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1.2 }}
                  >
                    of medical costs are due to<br />
                    chronic preventable conditions<br />
                    like undiagnosed cardiac conditions
                  </motion.p>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};