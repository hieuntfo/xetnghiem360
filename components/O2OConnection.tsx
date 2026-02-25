import React from 'react';
import { ArrowRight, Calendar, MapPin, Zap } from 'lucide-react';

const O2OCard = ({ icon, title, description, buttonText, bgColor, iconColor }) => (
  <div className={`flex-1 bg-white p-8 rounded-2xl shadow-lg border border-gray-100 flex flex-col text-left transition-all duration-300 hover:shadow-2xl hover:-translate-y-2`}>
    <div className={`w-14 h-14 ${bgColor} rounded-xl flex items-center justify-center mb-6`}>
      {React.createElement(icon, { size: 28, className: iconColor })}
    </div>
    <h3 className="text-2xl font-bold text-gray-900 mb-3">{title}</h3>
    <p className="text-gray-500 mb-8 flex-grow">{description}</p>
    <button className="w-full bg-gray-900 text-white font-semibold py-3 rounded-lg hover:bg-black transition-colors flex items-center justify-center gap-2">
      <span>{buttonText}</span>
      <ArrowRight size={16} />
    </button>
  </div>
);

const O2OConnection: React.FC<{ onBook: () => void; onViewPrices: () => void; }> = ({ onBook, onViewPrices }) => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-brand-600 font-bold tracking-wider text-sm uppercase mb-2 block">KẾT NỐI O2O & SỰ KIỆN</span>
          <h2 className="text-[40px] leading-tight font-bold text-gray-900">Từ Trực Tuyến đến Trải Nghiệm Thực Tế</h2>
          <p className="text-gray-500 mt-4 max-w-3xl mx-auto">
            Tham gia các sự kiện sức khỏe độc quyền, nhận ưu đãi và tìm kiếm điểm xét nghiệm FPT Long Châu gần bạn nhất một cách dễ dàng.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <O2OCard 
            icon={Calendar}
            title="Cổng Sự kiện & Talkshow"
            description="Đăng ký xem Livestream cùng chuyên gia, nhận QR Code ưu đãi xét nghiệm trực tiếp tại chuỗi nhà thuốc."
            buttonText="Khám phá sự kiện"
            bgColor="bg-blue-100"
            iconColor="text-blue-600"
          />
          <O2OCard 
            icon={Zap}
            title="Trạm Marathon (VnExpress)"
            description="Trang dành riêng cho Runners đăng ký các gói test phục hồi, điện giải tại các giải chạy VM Marathon."
            buttonText="Dành cho Runner"
            bgColor="bg-orange-100"
            iconColor="text-orange-600"
          />
          <O2OCard 
            icon={MapPin}
            title="Bản đồ Mạng lưới Long Châu"
            description="Lọc điểm xét nghiệm theo dịch vụ, xem giờ làm việc và đặt lịch hoặc gọi trực tiếp đến nhà thuốc gần nhất."
            buttonText="Tìm điểm gần bạn"
            bgColor="bg-emerald-100"
            iconColor="text-emerald-600"
          />
        </div>
      </div>
    </section>
  );
};

export default O2OConnection;
