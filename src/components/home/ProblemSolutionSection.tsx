import React from 'react';
import { X, Check, Clock, Zap, Activity, Heart } from 'lucide-react';
import { useTranslation } from '@/hooks/useTranslation';

const ProblemSolutionSection = () => {
  const t = useTranslation('home');

  const problemIcons = [X, Clock, Zap];
  const solutionIcons = [Check, Activity, Heart];

  return (
    <section className="section-padding bg-muted/30">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t.problemSolution.title}
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Problems */}
          <div className="space-y-6">
            <div className="text-center lg:text-left">
              <h3 className="text-xl font-semibold text-destructive mb-6 flex items-center gap-2 justify-center lg:justify-start">
                <X className="w-5 h-5" />
                {t.problemSolution.problems.title}
              </h3>
            </div>
            
            <div className="space-y-4">
              {t.problemSolution.problems.items.map((problem, index) => {
                const IconComponent = problemIcons[index] || X;
                return (
                  <div key={index} className="bg-destructive/5 border border-destructive/20 rounded-lg p-6">
                    <div className="flex items-start gap-4">
                      <IconComponent className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">{problem.title}</h4>
                        <p className="text-muted-foreground text-sm">{problem.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Solutions */}
          <div className="space-y-6">
            <div className="text-center lg:text-left">
              <h3 className="text-xl font-semibold text-primary mb-6 flex items-center gap-2 justify-center lg:justify-start">
                <Check className="w-5 h-5" />
                {t.problemSolution.solutions.title}
              </h3>
            </div>
            
            <div className="space-y-4">
              {t.problemSolution.solutions.items.map((solution, index) => {
                const IconComponent = solutionIcons[index] || Check;
                return (
                  <div key={index} className="bg-primary/5 border border-primary/20 rounded-lg p-6">
                    <div className="flex items-start gap-4">
                      <IconComponent className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">{solution.title}</h4>
                        <p className="text-muted-foreground text-sm">{solution.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolutionSection;