import React from 'react';
import { ArrowLeft, ArrowRight, Zap, Droplet, Wind } from 'lucide-react';

const TestPackageCard = ({ icon, title, description, price }) => (
  <div className="bg-gray-800/50 border border-gray-700 rounded-2xl p-6 backdrop-blur-sm">
    <div className="flex items-center gap-4 mb-4">
      <div className="w-12 h-12 bg-brand-500/20 rounded-lg flex items-center justify-center text-brand-400">
        {React.createElement(icon, { size: 24 })}
      </div>
      <h3 className="text-xl font-bold text-white">{title}</h3>
    </div>
    <p className="text-gray-400 text-sm mb-6 min-h-[60px]">{description}</p>
    <div className="flex items-center justify-between">
      <span className="text-2xl font-bold text-white">{price}</span>
      <button className="text-sm font-semibold text-brand-400 hover:text-white transition-colors">Chi tiết</button>
    </div>
  </div>
);

const MarathonView: React.FC<{ onBack: () => void; onBook: () => void; }> = ({ onBack, onBook }) => {
  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans">
      <div className="relative min-h-screen flex flex-col justify-between p-8 md:p-12" style={{ backgroundImage: 'url(https://picsum.photos/seed/runner/1920/1080?blur=5)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-gray-900/80 backdrop-blur-sm"></div>
        
        <header className="relative z-10 flex justify-between items-center">
          <button onClick={onBack} className="flex items-center gap-2 text-sm font-semibold text-gray-300 hover:text-white transition-colors">
            <ArrowLeft size={18} />
            <span>Trang chủ</span>
          </button>
          <div className="flex items-center gap-2 text-sm font-bold text-brand-400 bg-brand-500/20 px-3 py-1.5 rounded-full border border-brand-500/30">
              <Zap size={14} />
              <span>VNEXPRESS MARATHON OFFICIAL PARTNER</span>
          </div>
        </header>

        <main className="relative z-10 flex-grow flex flex-col justify-center text-center">
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter leading-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
              CHINH PHỤC ĐƯỜNG ĐUA
            </h1>
            <h2 className="text-5xl md:text-7xl font-extrabold tracking-tighter leading-tight text-brand-400 mb-6">LÀM CHỦ PHỤC HỒI</h2>
            <p className="max-w-2xl mx-auto text-gray-300 mb-10">
              Các gói xét nghiệm chuyên biệt giúp VĐV tối ưu hiệu suất trước giải và đẩy nhanh quá trình phục hồi, tái tạo năng lượng sau khi về đích.
            </p>
            <button onClick={onBook} className="mx-auto bg-brand-500 hover:bg-brand-600 text-white font-bold py-4 px-10 rounded-full text-lg transition-all shadow-[0_0_20px_rgba(236,72,153,0.4)] hover:shadow-[0_0_30px_rgba(236,72,153,0.6)] flex items-center gap-2">
              <span>Đặt gói xét nghiệm ngay</span>
              <ArrowRight size={20} />
            </button>
        </main>
        
        <footer className="relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <TestPackageCard 
              icon={Wind}
              title="Gói Năng Lượng (Pre-race)"
              description="Kiểm tra các chỉ số sắt, vitamin và điện giải thiết yếu để đảm bảo bạn có một vạch xuất phát hoàn hảo."
              price="499.000đ"
            />
            <TestPackageCard 
              icon={Droplet}
              title="Gói Phục Hồi (Post-race)"
              description="Đánh giá mức độ tổn thương cơ, chức năng thận và các chỉ số bù nước, giúp cơ thể phục hồi nhanh chóng."
              price="699.000đ"
            />
            <TestPackageCard 
              icon={Zap}
              title="Gói Toàn Diện (Pro)"
              description="Bao gồm cả hai gói Năng Lượng và Phục Hồi với mức giá ưu đãi, dành cho các VĐV chuyên nghiệp."
              price="999.000đ"
            />
          </div>
        </footer>
      </div>
    </div>
  );
};

export default MarathonView;
