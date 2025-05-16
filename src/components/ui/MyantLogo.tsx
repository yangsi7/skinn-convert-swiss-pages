
import React from 'react';

interface MyantLogoProps {
  className?: string;
}

const MyantLogo: React.FC<MyantLogoProps> = ({ className = "" }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <svg 
        width="40" 
        height="40" 
        viewBox="0 0 60 60" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="mr-2"
      >
        <rect width="60" height="60" rx="5" fill="#2A7D71" />
        <path d="M18 22L30 34L42 22" stroke="white" strokeWidth="3" />
        <path d="M18 30L30 42L42 30" stroke="white" strokeWidth="3" />
      </svg>
      <div className="flex flex-col">
        <span className="font-bold text-lg leading-tight">MYANT</span>
        <span className="text-xs font-medium text-myant-green">•HEALTH•</span>
      </div>
    </div>
  );
};

export default MyantLogo;
