import React, { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface SectionProps {
  children: ReactNode;
  className?: string;
  background?: 'white' | 'gradient' | 'medical' | 'dark';
  spacing?: 'default' | 'compact' | 'large';
  container?: 'default' | 'narrow' | 'wide' | 'full';
  id?: string;
}

/**
 * Unified Section component for consistent spacing and styling across all pages
 * Part of the SKIIN Design System
 */
const Section: React.FC<SectionProps> = ({
  children,
  className = '',
  background = 'white',
  spacing = 'default',
  container = 'default',
  id
}) => {
  const backgroundClasses = {
    white: 'bg-white',
    gradient: 'bg-gradient-secondary',
    medical: 'bg-gradient-medical',
    dark: 'bg-gradient-primary text-white'
  };

  const spacingClasses = {
    default: 'section',
    compact: 'section-compact',
    large: 'py-24 md:py-32 lg:py-40'
  };

  const containerClasses = {
    default: 'container-default',
    narrow: 'container-narrow',
    wide: 'container-wide',
    full: 'w-full'
  };

  return (
    <section 
      id={id}
      className={cn(
        'relative overflow-hidden',
        spacingClasses[spacing],
        backgroundClasses[background],
        className
      )}
    >
      {container === 'full' ? (
        children
      ) : (
        <div className={cn(containerClasses[container], 'relative z-10')}>
          {children}
        </div>
      )}
    </section>
  );
};

export default Section;