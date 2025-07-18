import React from 'react';
interface MyantLogoProps {
  className?: string;
}
const MyantLogo: React.FC<MyantLogoProps> = ({
  className = ""
}) => {
  return <div className={`flex items-center ${className}`}>
      <img alt="Skiin Logo" className="h-10 w-auto mr-2" src="/assets/images/4eaa19d0-ba50-4e2f-92e2-6be21d254e06.png" />
      
    </div>;
};
export default MyantLogo;