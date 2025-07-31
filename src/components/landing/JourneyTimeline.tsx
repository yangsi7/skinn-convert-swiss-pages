import React from 'react';
import { cn } from '@/lib/utils';
import { CheckCircle2, Clock, Package, Heart, FileText } from 'lucide-react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface JourneyTimelineProps {
  className?: string;
}

export const JourneyTimeline: React.FC<JourneyTimelineProps> = ({ className }) => {
  const milestones = [
    {
      icon: CheckCircle2,
      title: 'Eligibility Check',
      time: '5 minutes',
      description: 'Quick online assessment to confirm coverage',
      status: 'completed' as const
    },
    {
      icon: Package,
      title: 'Device Delivery',
      time: '48 hours',
      description: 'SKIIN kit arrives at your home',
      status: 'active' as const
    },
    {
      icon: Heart,
      title: 'Heart Monitoring',
      time: '10 days',
      description: 'Continuous 24/7 monitoring while you live normally',
      status: 'upcoming' as const
    },
    {
      icon: FileText,
      title: 'Results Review',
      time: '2 days',
      description: 'Comprehensive report from certified cardiologists',
      status: 'upcoming' as const
    }
  ];

  return (
    <section className={cn("py-20 bg-background", className)}>
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-wider text-muted-foreground mb-4">
            YOUR JOURNEY
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            From Check to Care in 2 Weeks
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A simple, insurance-covered path to comprehensive heart health insights
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-5xl mx-auto">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-secondary via-secondary-foreground to-muted-foreground/20" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {milestones.map((milestone, index) => {
              const Icon = milestone.icon;
              return (
                <motion.div 
                  key={milestone.title} 
                  className="relative"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.15,
                    type: "spring",
                    stiffness: 100
                  }}
                >
                  {/* Timeline dot for mobile */}
                  <motion.div 
                    className="lg:hidden absolute left-12 top-12 w-3 h-3 bg-secondary-foreground rounded-full"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 + 0.3 }}
                  />
                  
                  <motion.div 
                    className={cn(
                      "relative p-6 rounded-xl cursor-pointer",
                      milestone.status === 'completed' && "bg-secondary/10 border-2 border-secondary",
                      milestone.status === 'active' && "bg-secondary-foreground/10 border-2 border-secondary-foreground shadow-lg",
                      milestone.status === 'upcoming' && "bg-muted/50 border-2 border-muted"
                    )}
                    whileHover={{ 
                      y: -8,
                      boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                      scale: milestone.status === 'active' ? 1.05 : 1.02
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Icon */}
                    <motion.div 
                      className={cn(
                        "w-12 h-12 rounded-full flex items-center justify-center mb-4",
                        milestone.status === 'completed' && "bg-secondary text-white",
                        milestone.status === 'active' && "bg-secondary-foreground text-white",
                        milestone.status === 'upcoming' && "bg-muted text-muted-foreground"
                      )}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Icon className="w-6 h-6" />
                    </motion.div>

                    {/* Content */}
                    <h3 className="font-semibold text-foreground mb-2">
                      {milestone.title}
                    </h3>
                    <div className="flex items-center gap-2 mb-3">
                      <Clock className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm font-medium text-secondary-foreground">
                        {milestone.time}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {milestone.description}
                    </p>

                    {/* Status indicator */}
                    {milestone.status === 'active' && (
                      <motion.div 
                        className="absolute -top-3 -right-3 bg-secondary-foreground text-white text-xs px-3 py-1 rounded-full font-medium"
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ delay: 0.5, type: "spring" }}
                      >
                        Current Step
                      </motion.div>
                    )}
                  </motion.div>
                </motion.div>
              );
            })}
          </div>

          {/* Total timeline summary */}
          <motion.div 
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
          >
            <motion.div 
              className="inline-flex items-center gap-2 bg-secondary/10 px-6 py-3 rounded-full"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Clock className="w-5 h-5 text-secondary-foreground" />
              <span className="text-foreground font-medium">
                Total journey: <motion.span 
                  className="text-secondary-foreground"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                >14 days</motion.span> from start to results
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};