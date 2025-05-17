
import React from 'react';

interface MyantLogoProps {
  className?: string;
}

const MyantLogo: React.FC<MyantLogoProps> = ({ className = "" }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <img 
        src="/lovable-uploads/21284932-ea0e-4aef-b6ba-99d0199e8fa2.png" 
        alt="Skiin Logo" 
        className="h-10 w-auto mr-2"
      />
      <div className="flex flex-col">
        <span className="font-bold text-lg leading-tight">MYANT</span>
        <span className="text-xs font-medium text-myant-green">•HEALTH•</span>
      </div>
    </div>
  );
};

export default MyantLogo;
