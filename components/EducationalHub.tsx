import React from 'react';
import { CheckCircle2, ArrowUpRight, Activity, Baby, HeartPulse, Brain } from 'lucide-react';

const EducationalHub: React.FC = () => {
  return (
    <section className="py-24 bg-white border-b border-gray-100">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-10 border-b border-gray-100 pb-6">
          <div className="flex items-center gap-4">
             {/* Removed Icon Container */}
             <div>
                <h2 className="text-[40px] leading-tight font-bold text-gray-900">Minh triết sức khoẻ</h2>
                <p className="text-gray-500 mt-2">Dữ liệu y khoa từ chuyên gia VnExpress & Hội đồng cố vấn.</p>
             </div>
          </div>
          <a href="#" className="flex items-center gap-2 text-sm font-bold text-brand-600 hover:text-brand-700 bg-brand-50 px-4 py-2 rounded-full transition-colors mt-4 md:mt-0">
            Xem toàn bộ thư viện <ArrowUpRight size={16} />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          
          {/* --- ZONE 1: RUNNER & VẬN ĐỘNG --- */}
          <div className="group flex flex-col h-[400px] bg-white rounded-2xl border border-gray-200 hover:border-orange-200 hover:shadow-xl hover:shadow-orange-100/50 transition-all duration-300 relative overflow-hidden">
            <div className="h-1.5 w-full bg-orange-500"></div>
            
            {/* HEADER AREA */}
            <div className="p-6 pb-0 flex-shrink-0 h-[140px]">
               <div className="flex items-center gap-2 mb-2 text-orange-600 font-bold uppercase text-xs tracking-wider">
                <Activity size={16} />
                <span>Góc Runner</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-orange-600 transition-colors leading-tight line-clamp-2">
                Chạy 42km: Khi nào cơ thể cần bù điện giải?
              </h3>
              <p className="text-gray-500 text-sm mt-2 leading-snug line-clamp-2">
                Phân tích sự sụt giảm Natri và Kali qua từng cột mốc Marathon.
              </p>
            </div>
            
            {/* WIDGET AREA */}
            <div className="px-6 py-2 flex-shrink-0 h-[170px] flex flex-col justify-center">
              <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 relative group-hover:bg-orange-50/30 transition-colors h-full flex flex-col justify-end">
                <div className="flex justify-between items-end gap-2 h-20 border-b border-gray-200 pb-2 px-1">
                  <div className="w-1/4 h-full flex flex-col justify-end gap-1 group/bar">
                     <div className="w-full bg-blue-200 h-full rounded-t relative transition-all duration-500 group-hover:bg-blue-300">
                        <span className="absolute -top-4 left-1/2 -translate-x-1/2 text-[9px] font-bold text-gray-600">100%</span>
                     </div>
                  </div>
                  <div className="w-1/4 h-3/4 flex flex-col justify-end gap-1 group/bar">
                     <div className="w-full bg-blue-300 h-full rounded-t relative transition-all duration-500 group-hover:bg-blue-400"></div>
                  </div>
                  <div className="w-1/4 h-1/2 flex flex-col justify-end gap-1 group/bar">
                     <div className="w-full bg-orange-400 h-full rounded-t relative transition-all duration-500 group-hover:bg-orange-500">
                        <span className="absolute -top-4 left-1/2 -translate-x-1/2 text-[9px] font-bold text-orange-600">Warn</span>
                     </div>
                  </div>
                  <div className="w-1/4 h-1/4 flex flex-col justify-end gap-1 group/bar">
                     <div className="w-full bg-red-500 h-full rounded-t relative animate-pulse"></div>
                  </div>
                </div>
                <div className="flex justify-between text-[9px] font-bold text-gray-400 mt-2 px-1 uppercase tracking-wide">
                  <span>Km 0</span>
                  <span>Km 21</span>
                  <span>Km 42</span>
                </div>
              </div>
            </div>

            <div className="px-6 pb-4 pt-0 mt-auto">
              <button className="w-full py-2.5 text-center rounded-lg border border-gray-200 text-sm font-bold text-gray-600 hover:bg-orange-600 hover:text-white hover:border-orange-600 transition-all">
                Đọc phân tích
              </button>
            </div>
          </div>

          {/* --- ZONE 2: CHA MẸ & BÉ --- */}
           <div className="group flex flex-col h-[400px] bg-white rounded-2xl border border-gray-200 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-100/50 transition-all duration-300 relative overflow-hidden">
            <div className="h-1.5 w-full bg-blue-500"></div>
            
            {/* HEADER AREA */}
            <div className="p-6 pb-0 flex-shrink-0 h-[140px]">
               <div className="flex items-center gap-2 mb-2 text-blue-500 font-bold uppercase text-xs tracking-wider">
                <Baby size={16} />
                <span>Góc Cha Mẹ</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors leading-tight line-clamp-2">
                Con biếng ăn: Thiếu vi chất hay do tâm lý?
              </h3>
               <p className="text-gray-500 text-sm mt-2 leading-snug line-clamp-2">
                Checklist các dấu hiệu lâm sàng giúp ba mẹ phân biệt nhanh tình trạng.
              </p>
            </div>

            {/* WIDGET AREA */}
            <div className="px-6 py-2 flex-shrink-0 h-[170px] flex flex-col justify-center">
              <div className="bg-blue-50/50 p-4 rounded-xl border border-blue-100 relative h-full flex flex-col">
                <div className="absolute top-2 right-2 p-2 opacity-10">
                    <CheckCircle2 size={40} />
                </div>
                <div className="text-xs font-bold text-blue-800 mb-2 uppercase tracking-wider border-b border-blue-200 pb-2">Checklist Vi Chất</div>
                <ul className="space-y-2 flex-1 overflow-hidden">
                  <li className="flex items-start gap-2 text-sm text-gray-700">
                    <CheckCircle2 size={14} className="text-green-500 fill-green-100 mt-0.5 flex-shrink-0" />
                    <span className="leading-snug text-xs"><strong>Kẽm:</strong> Móng tay có đốm trắng.</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-700">
                    <CheckCircle2 size={14} className="text-green-500 fill-green-100 mt-0.5 flex-shrink-0" />
                    <span className="leading-snug text-xs"><strong>Sắt:</strong> Da xanh xao, hay mệt.</span>
                  </li>
                   <li className="flex items-start gap-2 text-sm text-gray-400">
                    <div className="w-3.5 h-3.5 rounded-full border-2 border-gray-300 mt-0.5 flex-shrink-0"></div>
                    <span className="leading-snug text-xs"><strong>D3:</strong> Đổ mồ hôi trộm.</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="px-6 pb-4 pt-0 mt-auto">
              <button className="w-full py-2.5 text-center rounded-lg border border-gray-200 text-sm font-bold text-gray-600 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all">
                Tải cẩm nang
              </button>
            </div>
          </div>

          {/* --- ZONE 3: TUỔI TRUNG NIÊN --- */}
           <div className="group flex flex-col h-[400px] bg-white rounded-2xl border border-gray-200 hover:border-emerald-200 hover:shadow-xl hover:shadow-emerald-100/50 transition-all duration-300 relative overflow-hidden">
            <div className="h-1.5 w-full bg-emerald-500"></div>
            
            {/* HEADER AREA */}
            <div className="p-6 pb-0 flex-shrink-0 h-[140px]">
               <div className="flex items-center gap-2 mb-2 text-emerald-600 font-bold uppercase text-xs tracking-wider">
                <HeartPulse size={16} />
                <span>Tuổi 40+</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-emerald-600 transition-colors leading-tight line-clamp-2">
                Mỡ máu: Khi nào là 'đèn vàng', khi nào 'đèn đỏ'?
              </h3>
              <p className="text-gray-500 text-sm mt-2 leading-snug line-clamp-2">
                Hướng dẫn đọc hiểu chỉ số LDL-Cholesterol để phòng ngừa đột quỵ.
              </p>
            </div>

            {/* WIDGET AREA */}
            <div className="px-6 py-2 flex-shrink-0 h-[170px] flex flex-col justify-center">
              <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm relative overflow-hidden h-full flex flex-col justify-center">
                 <div className="flex items-center justify-between mb-2 border-b border-gray-100 pb-2">
                  <span className="font-bold text-gray-800 text-xs">LDL-Cholesterol</span>
                  <span className="text-[9px] text-gray-400 font-mono">mg/dL</span>
                </div>
                <div className="space-y-1.5 relative z-10">
                  <div className="flex items-center justify-between opacity-50">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-green-500"></div>
                      <span className="text-xs text-gray-600 font-medium">An toàn</span>
                    </div>
                    <span className="text-xs font-mono text-gray-400">&lt; 100</span>
                  </div>
                  
                  <div className="flex items-center justify-between bg-yellow-50 p-2 rounded-lg border border-yellow-100 -mx-2 shadow-sm">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse"></div>
                      <span className="text-xs text-gray-900 font-bold">Cảnh báo</span>
                    </div>
                    <span className="text-xs font-mono font-bold text-yellow-700">130-159</span>
                  </div>

                  <div className="flex items-center justify-between opacity-50">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-red-500"></div>
                      <span className="text-xs text-gray-600 font-medium">Nguy hiểm</span>
                    </div>
                    <span className="text-xs font-mono text-gray-400">&ge; 160</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="px-6 pb-4 pt-0 mt-auto">
                <button className="w-full py-2.5 text-center rounded-lg border border-gray-200 text-sm font-bold text-gray-600 hover:bg-emerald-600 hover:text-white hover:border-emerald-600 transition-all">
                  Tra cứu chỉ số
                </button>
            </div>
          </div>

          {/* --- ZONE 4: DÂN VĂN PHÒNG --- */}
          <div className="group flex flex-col h-[400px] bg-white rounded-2xl border border-gray-200 hover:border-purple-200 hover:shadow-xl hover:shadow-purple-100/50 transition-all duration-300 relative overflow-hidden">
            <div className="h-1.5 w-full bg-purple-500"></div>
            
            {/* HEADER AREA */}
            <div className="p-6 pb-0 flex-shrink-0 h-[140px]">
               <div className="flex items-center gap-2 mb-2 text-purple-600 font-bold uppercase text-xs tracking-wider">
                <Brain size={16} />
                <span>Góc Văn Phòng</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-purple-600 transition-colors leading-tight line-clamp-2">
                Stress & Cortisol: Sát thủ thầm lặng
              </h3>
              <p className="text-gray-500 text-sm mt-2 leading-snug line-clamp-2">
                Tại sao bạn luôn mệt mỏi dù ngủ đủ? Mối liên hệ giữa Stress và tích mỡ bụng.
              </p>
            </div>

            {/* WIDGET AREA */}
            <div className="px-6 py-2 flex-shrink-0 h-[170px] flex flex-col justify-center">
              <div className="bg-purple-50 p-4 rounded-xl border border-purple-100 relative h-full flex flex-col justify-center">
                <div className="flex justify-between items-center mb-3">
                    <span className="text-xs font-bold text-purple-900">Mức độ Stress</span>
                    <span className="text-[10px] bg-white px-2 py-0.5 rounded border border-purple-200 text-purple-600 font-bold">Cao</span>
                </div>
                
                <div className="relative h-3 bg-white rounded-full overflow-hidden shadow-inner mb-2">
                    <div className="absolute top-0 left-0 h-full w-[80%] bg-gradient-to-r from-green-400 via-yellow-400 to-red-500 rounded-full"></div>
                    {/* Indicator */}
                    <div className="absolute top-0 bottom-0 w-1 bg-black/30 backdrop-blur-sm border-l border-white/50 left-[80%]"></div>
                </div>
                <div className="flex justify-between text-[9px] text-gray-400 uppercase font-bold">
                    <span>Thư giãn</span>
                    <span>Báo động</span>
                </div>

                <div className="mt-4 pt-3 border-t border-purple-200/50">
                    <div className="flex items-center justify-between text-xs mb-1">
                        <span className="text-gray-600">Chỉ số Cortisol</span>
                        <span className="font-bold text-red-500">25 ug/dL</span>
                    </div>
                    <p className="text-[9px] text-gray-500 italic">Mức bình thường: 6-23 ug/dL</p>
                </div>
              </div>
            </div>

            <div className="px-6 pb-4 pt-0 mt-auto">
                <button className="w-full py-2.5 text-center rounded-lg border border-gray-200 text-sm font-bold text-gray-600 hover:bg-purple-600 hover:text-white hover:border-purple-600 transition-all">
                  Kiểm tra Stress
                </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default EducationalHub;