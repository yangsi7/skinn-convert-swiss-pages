
import React from 'react';

const TrustBadges = () => {
  return (
    <div className="flex flex-wrap gap-4 pt-4">
      <div className="flex items-center px-4 py-2 bg-white rounded-lg shadow-sm">
        <div className="w-9 h-9 rounded-full bg-blue-100 flex items-center justify-center text-xs font-medium mr-3">ISO</div>
        <span className="text-sm font-medium">ISO-13485 Certified</span>
      </div>
      <div className="flex items-center px-4 py-2 bg-white rounded-lg shadow-sm">
        <div className="w-9 h-9 rounded-full bg-blue-100 flex items-center justify-center text-xs font-medium mr-3">CE</div>
        <span className="text-sm font-medium">CE Medical Device</span>
      </div>
      <div className="flex items-center px-4 py-2 bg-white rounded-lg shadow-sm">
        <div className="w-9 h-9 rounded-full bg-blue-100 flex items-center justify-center text-xs font-medium mr-3">CT</div>
        <span className="text-sm font-medium">Clinically Tested</span>
      </div>
      <div className="flex items-center px-4 py-2 bg-white rounded-lg shadow-sm">
        <div className="w-9 h-9 rounded-full bg-blue-100 flex items-center justify-center text-xs font-medium mr-3">CH</div>
        <span className="text-sm font-medium">Swiss Data Hosting</span>
      </div>
    </div>
  );
};

export default TrustBadges;
