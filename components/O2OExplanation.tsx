import React from 'react';
import { ArrowRight, Video, Zap } from 'lucide-react';

const O2OCard = ({ visual, title, description, buttonText, onClick, primary }) => (
    <div className={`rounded-2xl shadow-xl border border-gray-100 overflow-hidden flex flex-col ${primary ? 'bg-gray-900 text-white' : 'bg-white'}`}>
        <div className="min-h-[300px] flex items-center justify-center relative overflow-hidden p-8 bg-gray-50">
            {visual}
        </div>
        <div className="p-8 flex flex-col flex-grow">
            <h3 className={`text-2xl font-bold mb-3 ${primary ? 'text-white' : 'text-gray-900'}`}>{title}</h3>
            <p className={`mb-8 flex-grow ${primary ? 'text-gray-300' : 'text-gray-500'}`}>{description}</p>
            <button onClick={onClick} className={`self-start flex items-center gap-2 font-semibold py-3 px-6 rounded-lg transition-colors ${primary ? 'bg-brand-500 hover:bg-brand-600 text-white' : 'bg-brand-600 hover:bg-brand-700 text-white'}`}>
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
                title="Xem Talkshow, Hiểu Sức Khỏe"
                description="Theo dõi các buổi tư vấn độc quyền với chuyên gia y tế hàng đầu để hiểu rõ các chỉ số sức khỏe và nhận mã ưu đãi."
                buttonText="Xem tất cả sự kiện"
                onClick={onOpenEvents}
                primary={false}
            />
            <O2OCard 
                 visual={
                    <div className="relative w-48 h-48 bg-brand-500 rounded-full flex items-center justify-center text-white shadow-2xl">
                        <Zap size={80} strokeWidth={1.5} />
                    </div>
                }
                title="Giải chạy Long Châu Vì Sức Khỏe"
                description="Quét mã QR tại các giải chạy VnExpress Marathon, kết quả xét nghiệm sẽ được đẩy thẳng về tài khoản sức khỏe số của bạn."
                buttonText="Dành cho Runners"
                onClick={onOpenMarathon}
                primary={true}
            />
        </div>
      </div>
    </section>
  );
};

export default O2OExplanation;
