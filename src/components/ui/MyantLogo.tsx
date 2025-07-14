
import React from 'react';

interface MyantLogoProps {
  className?: string;
}

const MyantLogo: React.FC<MyantLogoProps> = ({ className = "" }) => {
  return (
    <div className={`flex items-center ${className}`}>
      {/* Hexagonal Logo with Mountain Design */}
      <div className="relative mr-3">
        <svg
          width="40"
          height="36"
          viewBox="0 0 40 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="transition-all duration-300"
        >
          {/* Hexagon Background */}
          <path
            d="M10 2.5L30 2.5L36 18L30 33.5L10 33.5L4 18L10 2.5Z"
            fill="hsl(var(--primary-charcoal))"
            className="transition-colors duration-300"
          />
          
          {/* Mountain Design - Left Peak */}
          <path
            d="M8 22L14 12L20 18L8 28V22Z"
            fill="hsl(var(--medical-teal))"
            className="transition-colors duration-300"
          />
          
          {/* Mountain Design - Right Peak */}
          <path
            d="M20 18L26 10L32 20L20 30V18Z"
            fill="hsl(var(--bridge-teal))"
            className="transition-colors duration-300"
          />
          
          {/* Gradient Overlay for Modern Touch */}
          <defs>
            <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(var(--medical-teal))" stopOpacity="0.1" />
              <stop offset="100%" stopColor="hsl(var(--bridge-teal))" stopOpacity="0.2" />
            </linearGradient>
          </defs>
          <path
            d="M10 2.5L30 2.5L36 18L30 33.5L10 33.5L4 18L10 2.5Z"
            fill="url(#logoGradient)"
          />
        </svg>
      </div>
      
      {/* Typography - Integrated with Design System */}
      <div className="flex flex-col">
        <span className="font-display font-bold text-lg leading-tight text-foreground tracking-wide">
          MYANT
        </span>
        <span className="font-sans text-xs font-medium text-medical-teal tracking-widest">
          HEALTH
        </span>
      </div>
    </div>
  );
};

export default MyantLogo;
