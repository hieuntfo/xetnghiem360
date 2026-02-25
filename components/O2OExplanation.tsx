import React from 'react';
import { ArrowRight, Video, Zap, Footprints } from 'lucide-react';

const O2OCard = ({ visual, title, metadata, description, buttonText, onClick, primary }) => (
    <div className={`rounded-2xl shadow-xl border border-gray-100 overflow-hidden flex flex-col ${primary ? 'bg-brand-600 text-white' : 'bg-white'}`}>
        <div className="min-h-[300px] flex items-center justify-center relative overflow-hidden p-8 bg-gray-50">
            {visual}
        </div>
        <div className="p-8 flex flex-col flex-grow">
            <h3 className={`text-2xl font-bold mb-3 ${primary ? 'text-white' : 'text-gray-900'}`}>{title}</h3>
            {metadata && <div className={`text-sm mb-4 ${primary ? 'text-brand-200' : 'text-gray-500'}`}>{metadata}</div>}
            <p className={`mb-8 flex-grow ${primary ? 'text-brand-100' : 'text-gray-500'}`}>{description}</p>
            <button onClick={onClick} className={`self-start flex items-center gap-2 font-semibold py-3 px-6 rounded-lg transition-colors ${primary ? 'bg-white hover:bg-brand-50 text-brand-600' : 'bg-brand-600 hover:bg-brand-700 text-white'}`}>
                <span>{buttonText}</span>
                <ArrowRight size={16} />
            </button>
        </div>
    </div>
);

const O2OExplanation: React.FC<{ onOpenEvents: () => void; onOpenMarathon: () => void; }> = ({ onOpenEvents, onOpenMarathon }) => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
         <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-[40px] leading-tight font-bold text-gray-900">Từ Online đến Offline, một hành trình liền mạch</h2>
            <p className="text-gray-500 mt-4">
                VnExpress đồng hành cùng Nhà thuốc Long Châu mang đến những sự kiện sức khỏe giá trị và trải nghiệm y tế tiện lợi.
            </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            <O2OCard 
                visual={
                    <div className="relative w-48 h-80 bg-gray-100 rounded-2xl shadow-inner flex items-center justify-center">
                         <div className="w-20 h-20 bg-brand-600 rounded-full flex items-center justify-center text-white">
                            <Video size={40} />
                        </div>
                    </div>
                }
                title="Talkshow #3: Giải mã chỉ số Mỡ máu"
                metadata="Phát sóng lúc 20:00, 28/02/2026"
                description="Cùng BS.CKII Nguyễn Thị Thu Hằng, Trưởng khoa Khám bệnh, Bệnh viện Đa khoa Tâm Anh, tìm hiểu về Cholesterol và Triglyceride."
                buttonText="Xem tất cả sự kiện"
                onClick={onOpenEvents}
                primary={false}
            />
            <O2OCard 
                 visual={
                    <div className="relative w-48 h-80 bg-gray-100 rounded-2xl shadow-inner flex items-center justify-center">
                         <div className="w-20 h-20 bg-brand-600 rounded-full flex items-center justify-center text-white">
                            <Footprints size={40} />
                        </div>
                    </div>
                }
                title="VnExpress Marathon Imperial Huế 2026"
                metadata="Sự kiện đã diễn ra: 21/02/2026"
                description="Đã tham gia giải chạy? Quét mã QR tại booth Long Châu để đối chiếu chỉ số phục hồi và nhận kết quả về tài khoản sức khỏe số."
                buttonText="Dành cho Runners"
                onClick={onOpenMarathon}
                primary={false}
            />
        </div>
      </div>
    </section>
  );
};

export default O2OExplanation;
