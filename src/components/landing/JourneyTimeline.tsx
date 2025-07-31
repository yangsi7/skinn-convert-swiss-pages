import React from 'react';
import { cn } from '@/lib/utils';
import { CheckCircle2, Clock, Package, Heart, FileText } from 'lucide-react';

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
                <div key={milestone.title} className="relative">
                  {/* Timeline dot for mobile */}
                  <div className="lg:hidden absolute left-12 top-12 w-3 h-3 bg-secondary-foreground rounded-full" />
                  
                  <div className={cn(
                    "relative p-6 rounded-xl transition-all duration-300",
                    milestone.status === 'completed' && "bg-secondary/10 border-2 border-secondary",
                    milestone.status === 'active' && "bg-secondary-foreground/10 border-2 border-secondary-foreground shadow-lg scale-105",
                    milestone.status === 'upcoming' && "bg-muted/50 border-2 border-muted"
                  )}>
                    {/* Icon */}
                    <div className={cn(
                      "w-12 h-12 rounded-full flex items-center justify-center mb-4",
                      milestone.status === 'completed' && "bg-secondary text-white",
                      milestone.status === 'active' && "bg-secondary-foreground text-white",
                      milestone.status === 'upcoming' && "bg-muted text-muted-foreground"
                    )}>
                      <Icon className="w-6 h-6" />
                    </div>

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
                      <div className="absolute -top-3 -right-3 bg-secondary-foreground text-white text-xs px-3 py-1 rounded-full font-medium">
                        Current Step
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Total timeline summary */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-2 bg-secondary/10 px-6 py-3 rounded-full">
              <Clock className="w-5 h-5 text-secondary-foreground" />
              <span className="text-foreground font-medium">
                Total journey: <span className="text-secondary-foreground">14 days</span> from start to results
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};