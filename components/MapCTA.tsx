import React from 'react';
import { ArrowRight, MapPin } from 'lucide-react';

const MapCTA: React.FC<{ onOpenMap: () => void; }> = ({ onOpenMap }) => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden flex flex-col md:flex-row">
            {/* Left: Content */}
            <div className="md:w-1/2 p-12 flex flex-col justify-center text-left">
                <span className="text-brand-600 font-bold tracking-wider text-sm uppercase mb-2 block">Điểm đến cuối cùng</span>
                <h2 className="text-[40px] leading-tight font-bold text-gray-900 mb-4">Gần bạn có 12 điểm Long Châu</h2>
                <p className="text-gray-500 mb-8 max-w-md">
                    Hệ thống vừa quét và tìm thấy 3 nhà thuốc có trung tâm xét nghiệm và 9 nhà thuốc hỗ trợ lấy mẫu tại nhà trong bán kính 5km.
                </p>
                <button onClick={onOpenMap} className="self-start bg-brand-600 hover:bg-brand-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors flex items-center gap-2">
                    <span>Tìm kiếm trên bản đồ</span>
                    <ArrowRight size={16} />
                </button>
            </div>
            {/* Right: Visual */}
            <div className="md:w-1/2 min-h-[300px] md:min-h-0 bg-brand-50 flex items-center justify-center relative overflow-hidden">
                <div className="absolute -inset-4 bg-brand-100/50 rounded-full blur-3xl"></div>
                <div className="relative w-24 h-24 bg-brand-600 rounded-full flex items-center justify-center text-white shadow-lg">
                    <MapPin size={48} strokeWidth={1.5} />
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default MapCTA;
