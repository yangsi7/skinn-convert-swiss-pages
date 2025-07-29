import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ProductBenefitProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index?: number;
  className?: string;
}

export function ProductBenefit({ 
  icon: Icon, 
  title, 
  description, 
  index = 0,
  className 
}: ProductBenefitProps) {
  return (
    <Card 
      className={cn(
        "group hover:shadow-xl transition-all duration-300",
        "hover:border-medical-teal hover:-translate-y-1",
        "bg-gradient-to-br from-background to-secondary/5",
        className
      )}
      data-testid={`product-benefit-${index + 1}`}
    >
      <CardContent className="p-6">
        {/* Icon with animated background */}
        <div className="relative mb-4">
          <div className="absolute inset-0 bg-medical-teal/20 rounded-full blur-xl group-hover:scale-150 transition-transform duration-500" />
          <div className="relative w-12 h-12 rounded-full bg-medical-teal/10 flex items-center justify-center group-hover:bg-medical-teal/20 transition-colors">
            <Icon className="w-6 h-6 text-medical-teal" />
          </div>
        </div>
        
        {/* Content */}
        <h3 className="font-semibold text-lg mb-3 text-foreground leading-tight">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {description}
        </p>
      </CardContent>
    </Card>
  );
}