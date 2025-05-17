
import React from 'react';
import { Info } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

interface CitationProps {
  id: string;
  text: string;
}

const Citation: React.FC<CitationProps> = ({ id, text }) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <sup className="cursor-help text-myant-green font-medium ml-0.5">
            <span className="inline-flex items-center justify-center rounded-full h-4 w-4 bg-myant-lightgreen text-myant-green text-[10px]">
              {id}
            </span>
          </sup>
        </TooltipTrigger>
        <TooltipContent className="max-w-xs">
          <p className="text-xs">{text}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default Citation;
