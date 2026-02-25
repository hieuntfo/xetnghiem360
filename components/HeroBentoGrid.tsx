import React from 'react';
import MediaPlaceholder from './MediaPlaceholder';
import { Home } from 'lucide-react';

const HeroBentoGrid: React.FC = () => {
  return (
    <div className="lg:w-1/2 w-full relative pl-0 lg:pl-10">
      <div className="grid grid-cols-3 grid-rows-3 gap-4 h-[450px]">
        {/* Main Lifestyle Image - Runner */}
        <div className="col-span-2 row-span-2">
           <MediaPlaceholder 
            type="image" 
            height="h-full" 
            bgColor="bg-orange-100" 
            label="Runner / Vận động" 
            className="rounded-2xl shadow-lg" 
          />
        </div>

        {/* Secondary Image */}
        <div className="col-span-1 row-span-1">
          <MediaPlaceholder 
            type="video" 
            height="h-full" 
            bgColor="bg-blue-100" 
            label="Gia đình" 
            className="rounded-2xl shadow-lg" 
          />
        </div>

        {/* HERO WIDGET (UPDATED) */}
        <div className="col-span-1 row-span-1 bg-white p-4 rounded-2xl shadow-lg border border-gray-100 flex items-center gap-3">
          <div className="bg-blue-100 p-2 rounded-full text-blue-600">
            <Home size={20} />
          </div>
          <div>
            <div className="text-xs text-gray-500">Dịch vụ tại nhà</div>
            <div className="text-sm font-bold text-gray-900">Lấy mẫu trong 30p</div>
          </div>
        </div>

        {/* Tertiary Image */}
        <div className="col-span-2 row-span-1">
          <MediaPlaceholder 
            type="image" 
            height="h-full" 
            bgColor="bg-gray-200" 
            label="Chuyên gia tư vấn" 
            className="rounded-2xl shadow-lg" 
          />
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/2 left-0 -z-10 w-[120%] h-[120%] bg-gradient-to-tr from-brand-100/40 to-transparent blur-3xl rounded-full"></div>
    </div>
  );
};

export default HeroBentoGrid;
