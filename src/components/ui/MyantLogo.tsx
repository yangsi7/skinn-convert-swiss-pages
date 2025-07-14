import React from 'react';
interface MyantLogoProps {
  className?: string;
}
const MyantLogo: React.FC<MyantLogoProps> = ({
  className = ""
}) => {
  return <div className={`flex items-center ${className}`}>
      <img alt="Skiin Logo" className="h-10 w-auto mr-2" src="/lovable-uploads/5cc0811e-7cbf-4686-a9fd-c4d65fa7a410.png" />
      <div className="flex flex-col">
        <span className="font-bold text-lg leading-tight text-primary">MYANT</span>
        <span className="text-xs font-semibold text-accent tracking-wide">HEALTH</span>
      </div>
    </div>;
};
export default MyantLogo;