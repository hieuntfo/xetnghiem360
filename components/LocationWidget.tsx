import React from 'react';
import { MapPin, Clock, Phone, ArrowRight } from 'lucide-react';

const LocationWidget: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Điểm lấy mẫu xét nghiệm gần bạn</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Hệ thống Xetnghiem360 liên kết với các điểm lấy mẫu uy tín, bao gồm hệ thống nhà thuốc FPT Long Châu trên toàn quốc.
        </p>

        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg flex flex-col md:flex-row overflow-hidden border border-gray-100">
          {/* Fake Map */}
          <div className="md:w-1/2 h-64 md:h-auto bg-gray-200 flex items-center justify-center relative overflow-hidden">
            <img src="https://i.imgur.com/sCbrtWJ.png" alt="Map background" className="absolute inset-0 w-full h-full object-cover opacity-30" referrerPolicy="no-referrer" />
            <div className="relative z-10 flex flex-col items-center">
                <div className="p-4 bg-white rounded-xl shadow-2xl border">
                    <img src="https://i.imgur.com/O1hJk1b.png" alt="Long Chau Pharmacy" className="w-24 h-auto rounded-lg" referrerPolicy="no-referrer" />
                </div>
                <div className="w-12 h-12 bg-brand-500 rounded-full flex items-center justify-center text-white mt-4 shadow-lg border-4 border-white">
                    <MapPin size={24} fill="white" />
                </div>
            </div>
          </div>

          {/* Location Info */}
          <div className="md:w-1/2 p-8 text-left flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold text-accent-600 uppercase bg-accent-500/10 px-2 py-1 rounded-full">
                Điểm gần nhất
              </span>
              <h3 className="text-2xl font-bold text-gray-900 mt-4 mb-2">Nhà thuốc FPT Long Châu</h3>
              <p className="text-gray-500 flex items-center gap-2 mb-4">
                <MapPin size={14} />
                <span>123 Đường ABC, Phường XYZ, Quận 1, TP. HCM</span>
              </p>
              
              <div className="grid grid-cols-2 gap-4 text-sm mb-6">
                <div className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg">
                  <Clock size={16} className="text-brand-500" />
                  <div>
                    <div className="font-semibold text-gray-700">Giờ mở cửa</div>
                    <div className="text-gray-500">7:00 - 22:00</div>
                  </div>
                </div>
                <div className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg">
                  <Phone size={16} className="text-brand-500" />
                  <div>
                    <div className="font-semibold text-gray-700">Hotline</div>
                    <div className="text-gray-500">1800 6928</div>
                  </div>
                </div>
              </div>
            </div>

            <button className="w-full bg-brand-600 text-white font-semibold py-3 rounded-lg hover:bg-brand-700 transition-colors flex items-center justify-center gap-2">
              <span>Xem trên bản đồ</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationWidget;
