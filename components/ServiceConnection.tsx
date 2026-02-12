import React from 'react';
import { ShieldCheck, Calendar, MapPin, ArrowRight, UserCheck, Stethoscope } from 'lucide-react';
import MediaPlaceholder from './MediaPlaceholder';

interface ServiceConnectionProps {
  onBook?: () => void;
  onViewPrices?: () => void;
}

const ServiceConnection: React.FC<ServiceConnectionProps> = ({ onBook, onViewPrices }) => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-blue-50/30 overflow-hidden relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* LEFT: CONTENT (Conversion) */}
          <div className="lg:w-7/12 w-full order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider mb-6">
               <Stethoscope size={14} /> Dịch vụ O2O
            </div>
            
            <h2 className="text-[40px] leading-tight font-extrabold text-gray-900 mb-6">
              Xét nghiệm tại nhà <br/>
              <span className="text-brand-600">Kết quả trên tay.</span>
            </h2>
            
            <p className="text-lg text-gray-600 mb-10 leading-relaxed max-w-xl">
              Bạn đã hiểu cơ thể cần gì. Giờ là lúc hành động. 
              Đặt lịch lấy mẫu ngay tại nhà với đội ngũ điều dưỡng chuyên nghiệp, 
              kết quả được trả về ứng dụng bảo mật tuyệt đối.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
               <div className="flex items-start gap-4 p-4 rounded-xl bg-white shadow-sm border border-gray-100 hover:border-blue-200 transition-colors">
                  <div className="bg-blue-50 p-3 rounded-lg text-blue-600">
                     <Calendar size={24} />
                  </div>
                  <div>
                     <h4 className="font-bold text-gray-900">Đặt lịch chủ động</h4>
                     <p className="text-sm text-gray-500 mt-1">Chọn khung giờ chính xác, không chờ đợi.</p>
                  </div>
               </div>

               <div className="flex items-start gap-4 p-4 rounded-xl bg-white shadow-sm border border-gray-100 hover:border-blue-200 transition-colors">
                  <div className="bg-emerald-50 p-3 rounded-lg text-emerald-600">
                     <ShieldCheck size={24} />
                  </div>
                  <div>
                     <h4 className="font-bold text-gray-900">Bảo mật chuẩn HIPAA</h4>
                     <p className="text-sm text-gray-500 mt-1">Dữ liệu riêng tư, đặc biệt với các gói nhạy cảm.</p>
                  </div>
               </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
               <button 
                  onClick={onBook}
                  className="flex-1 bg-brand-600 hover:bg-brand-700 text-white text-lg font-bold py-4 rounded-xl shadow-lg shadow-brand-200 hover:shadow-brand-300 transition-all flex items-center justify-center gap-2"
               >
                  Đặt lịch xét nghiệm <ArrowRight size={20} />
               </button>
               <button 
                  onClick={onViewPrices}
                  className="px-8 py-4 rounded-xl border border-gray-200 font-bold text-gray-700 hover:bg-white hover:border-gray-300 transition-all bg-white/50"
               >
                  Xem bảng giá
               </button>
            </div>
            
            <div className="mt-6 flex items-center gap-2 text-sm text-gray-500">
               <UserCheck size={16} className="text-green-500" />
               <span>15,000+ lượt lấy mẫu thành công tháng này</span>
            </div>
          </div>

          {/* RIGHT: VISUAL (Medical Staff Mockup) */}
          <div className="lg:w-5/12 w-full relative order-1 lg:order-2">
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-4 border-white transform hover:scale-[1.02] transition-transform duration-500">
               <MediaPlaceholder 
                  type="image" 
                  height="h-[450px]" 
                  bgColor="bg-blue-100" 
                  label="Đội ngũ Y tế chuyên nghiệp" 
                  className="w-full object-cover"
               />
               
               {/* Overlay Badge: Long Chau Operated */}
               <div className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md p-4 border-t border-gray-100">
                  <div className="flex items-center gap-3">
                     <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-lg">LC</div>
                     <div>
                        <div className="text-[10px] text-gray-500 uppercase font-semibold tracking-wider">Vận hành bởi</div>
                        <div className="text-sm font-bold text-gray-900">FPT Long Châu</div>
                     </div>
                  </div>
               </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-200/50 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-brand-200/50 rounded-full blur-3xl"></div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ServiceConnection;