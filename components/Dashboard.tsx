import React from 'react';
import { ChevronLeft, Calendar, FileText, Activity, Clock, ChevronRight, User, Droplet, Ruler, Weight, LogOut, ArrowUpRight } from 'lucide-react';
import HealthChart from './HealthChart';

interface DashboardProps {
  onBack: () => void;
  onLogout: () => void;
  onBook?: () => void;
}

const HISTORY_DATA = [
  { id: 1, date: '24/05/2024', title: 'Khám sức khỏe tổng quát', location: 'FPT Long Châu - Cầu Giấy', status: 'Hoàn thành' },
  { id: 2, date: '12/01/2024', title: 'Xét nghiệm Men gan & Mỡ máu', location: 'Tại nhà', status: 'Hoàn thành' },
  { id: 3, date: '15/08/2023', title: 'Tầm soát Ung thư (Gói cơ bản)', location: 'Bệnh viện Đại học Y', status: 'Hoàn thành' },
];

const Dashboard: React.FC<DashboardProps> = ({ onBack, onLogout, onBook }) => {
  return (
    <div className="min-h-screen bg-gray-50 animate-fadeIn font-sans">
      
      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-100 h-16 flex items-center justify-between px-4 lg:px-8">
         <div className="flex items-center gap-4">
             <button onClick={onBack} className="p-2 -ml-2 hover:bg-gray-100 rounded-full transition-colors text-gray-500">
                <ChevronLeft size={24} />
             </button>
             <h1 className="text-lg font-bold text-gray-900">Hồ sơ sức khỏe số</h1>
         </div>
         <div className="flex items-center gap-3">
             <div className="hidden md:flex flex-col items-end">
                <span className="text-sm font-bold text-gray-900">Nguyễn Văn An</span>
                <span className="text-[10px] text-gray-500">Mã: HOSO-8892</span>
             </div>
             <div className="w-9 h-9 bg-brand-100 text-brand-600 rounded-full flex items-center justify-center font-bold border border-brand-200">
                A
             </div>
             <button 
                onClick={onLogout}
                className="ml-2 p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                title="Đăng xuất"
             >
                <LogOut size={20} />
             </button>
         </div>
      </header>

      <main className="container mx-auto max-w-6xl px-4 py-8">
        
        {/* WELCOME SECTION */}
        <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900">Tổng quan sức khỏe</h2>
            <p className="text-gray-500">Dữ liệu được cập nhật lần cuối vào ngày 24/05/2024</p>
        </div>

        {/* VITALS CARDS */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm flex flex-col items-center justify-center text-center hover:border-brand-200 transition-colors">
                <div className="w-10 h-10 rounded-full bg-red-50 text-red-500 flex items-center justify-center mb-2">
                    <Droplet size={20} />
                </div>
                <div className="text-sm text-gray-500 font-medium">Nhóm máu</div>
                <div className="text-xl font-bold text-gray-900">A+</div>
            </div>
            <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm flex flex-col items-center justify-center text-center hover:border-brand-200 transition-colors">
                <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-500 flex items-center justify-center mb-2">
                    <Ruler size={20} />
                </div>
                <div className="text-sm text-gray-500 font-medium">Chiều cao</div>
                <div className="text-xl font-bold text-gray-900">172 <span className="text-xs font-normal text-gray-400">cm</span></div>
            </div>
            <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm flex flex-col items-center justify-center text-center hover:border-brand-200 transition-colors">
                <div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-500 flex items-center justify-center mb-2">
                    <Weight size={20} />
                </div>
                <div className="text-sm text-gray-500 font-medium">Cân nặng</div>
                <div className="text-xl font-bold text-gray-900">68 <span className="text-xs font-normal text-gray-400">kg</span></div>
            </div>
            <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm flex flex-col items-center justify-center text-center hover:border-brand-200 transition-colors">
                <div className="w-10 h-10 rounded-full bg-purple-50 text-purple-500 flex items-center justify-center mb-2">
                    <Activity size={20} />
                </div>
                <div className="text-sm text-gray-500 font-medium">BMI</div>
                <div className="text-xl font-bold text-gray-900">23.0 <span className="text-xs font-normal text-green-500 bg-green-50 px-1.5 py-0.5 rounded">Tốt</span></div>
            </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* LEFT COLUMN: CHARTS */}
            <div className="lg:col-span-2 space-y-8">
                {/* Health Trends */}
                <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
                    <div className="p-6 border-b border-gray-100 flex justify-between items-center">
                        <div className="flex items-center gap-2">
                            <Activity className="text-brand-600" size={20} />
                            <h3 className="font-bold text-gray-900">Biểu đồ chỉ số</h3>
                        </div>
                        <select className="text-sm border-none bg-gray-50 rounded-lg px-3 py-1.5 text-gray-600 font-medium focus:ring-0 cursor-pointer">
                            <option>Cholesterol</option>
                            <option>Glucose (Đường huyết)</option>
                            <option>Men gan (ALT)</option>
                            <option>Acid Uric</option>
                        </select>
                    </div>
                    <div className="p-4 h-[350px]">
                        <HealthChart />
                    </div>
                </div>

                {/* Recommendations */}
                <div className="bg-gradient-to-r from-brand-50 to-white border border-brand-100 rounded-2xl p-6">
                    <h3 className="font-bold text-brand-900 mb-2 flex items-center gap-2">
                        <ArrowUpRight size={20} /> Đề xuất từ hệ thống
                    </h3>
                    <p className="text-brand-700 text-sm mb-4">
                        Dựa trên kết quả khám gần nhất, chỉ số Cholesterol của bạn đang ở mức biên giới cao.
                    </p>
                    <div className="flex gap-3">
                        <button className="bg-white text-brand-600 border border-brand-200 px-4 py-2 rounded-lg text-sm font-bold shadow-sm hover:bg-brand-50 transition-colors">
                            Xem chế độ ăn gợi ý
                        </button>
                        <button 
                            onClick={onBook}
                            className="bg-brand-600 text-white px-4 py-2 rounded-lg text-sm font-bold shadow-md hover:bg-brand-700 transition-colors"
                        >
                            Đặt lịch xét nghiệm
                        </button>
                    </div>
                </div>
            </div>

            {/* RIGHT COLUMN: HISTORY */}
            <div className="lg:col-span-1">
                <div className="bg-white rounded-2xl border border-gray-200 shadow-sm h-full flex flex-col">
                    <div className="p-6 border-b border-gray-100">
                         <h3 className="font-bold text-gray-900 flex items-center gap-2">
                            <Clock size={20} className="text-gray-400" /> Lịch sử khám
                        </h3>
                    </div>
                    <div className="flex-1 overflow-y-auto p-4 space-y-4">
                        {HISTORY_DATA.map((item) => (
                            <div key={item.id} className="group p-4 rounded-xl border border-gray-100 hover:border-brand-200 hover:bg-brand-50/30 transition-all cursor-pointer">
                                <div className="flex justify-between items-start mb-2">
                                    <div className="text-xs font-bold text-brand-600 bg-brand-50 px-2 py-1 rounded-md flex items-center gap-1">
                                        <Calendar size={12} /> {item.date}
                                    </div>
                                    <ChevronRight size={16} className="text-gray-300 group-hover:text-brand-500 transition-colors" />
                                </div>
                                <h4 className="font-bold text-gray-900 text-sm mb-1">{item.title}</h4>
                                <div className="text-xs text-gray-500 mb-2">{item.location}</div>
                                <div className="flex items-center gap-2">
                                     <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                                     <span className="text-[10px] font-medium text-gray-500 uppercase">{item.status}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="p-4 border-t border-gray-100 bg-gray-50/50 rounded-b-2xl">
                        <button className="w-full py-2 text-sm font-bold text-brand-600 hover:text-brand-700 transition-colors">
                            Xem tất cả hồ sơ cũ
                        </button>
                    </div>
                </div>
            </div>

        </div>
      </main>
    </div>
  );
};

export default Dashboard;