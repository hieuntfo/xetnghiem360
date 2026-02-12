import React from 'react';
import { X, Check, Shield, Activity, Baby } from 'lucide-react';

interface PriceListModalProps {
  isOpen: boolean;
  onClose: () => void;
  onBook: () => void;
}

const PACKAGES = [
    {
        name: "Tổng quát Cơ bản",
        price: "1.290.000đ",
        desc: "Đánh giá chức năng gan, thận, mỡ máu, đường huyết.",
        icon: <Activity size={24}/>,
        color: "text-blue-600 bg-blue-50",
        features: ["Công thức máu (24 chỉ số)", "Đường huyết (Glucose, HbA1c)", "Chức năng Gan (AST, ALT)", "Chức năng Thận (Ure, Crea)", "Mỡ máu (4 chỉ số)"]
    },
    {
        name: "Tầm soát Ung thư",
        price: "2.850.000đ",
        desc: "Phát hiện sớm các dấu ấn ung thư phổ biến (Gan, Phổi, Dạ dày...)",
        icon: <Shield size={24}/>,
        color: "text-red-600 bg-red-50",
        popular: true,
        features: ["Gói cơ bản +", "AFP (Gan)", "CEA (Đại trực tràng)", "CA 19-9 (Tụy)", "Cyfra 21-1 (Phổi)", "PSA (Tiền liệt tuyến - Nam)"]
    },
    {
        name: "Mẹ & Bé (Vi chất)",
        price: "950.000đ",
        desc: "Kiểm tra thiếu hụt vi chất cho trẻ em và phụ nữ.",
        icon: <Baby size={24}/>,
        color: "text-emerald-600 bg-emerald-50",
        features: ["Sắt huyết thanh", "Ferritin (Dự trữ sắt)", "Canxi toàn phần", "Vitamin D3", "Kẽm", "Magie"]
    }
];

const PriceListModal: React.FC<PriceListModalProps> = ({ isOpen, onClose, onBook }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-gray-900/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white w-full max-w-4xl rounded-2xl shadow-2xl overflow-hidden animate-fadeInUp flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-gray-50/50 sticky top-0">
            <div>
                <h2 className="text-xl font-bold text-gray-900">Bảng giá Xét nghiệm</h2>
                <p className="text-sm text-gray-500">Áp dụng cho dịch vụ lấy mẫu tại nhà & tại phòng khám.</p>
            </div>
            <button onClick={onClose} className="p-2 hover:bg-gray-200 rounded-full transition-colors text-gray-500">
                <X size={24} />
            </button>
        </div>

        {/* Body */}
        <div className="p-6 overflow-y-auto bg-gray-50/30">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {PACKAGES.map((pkg, idx) => (
                    <div key={idx} className={`bg-white rounded-2xl border p-6 flex flex-col relative transition-all hover:shadow-lg ${pkg.popular ? 'border-brand-500 shadow-brand-100 ring-1 ring-brand-100' : 'border-gray-200 shadow-sm'}`}>
                        {pkg.popular && (
                            <div className="absolute top-0 right-0 bg-brand-500 text-white text-[10px] font-bold px-3 py-1 rounded-bl-xl rounded-tr-xl">
                                PHỔ BIẾN NHẤT
                            </div>
                        )}
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${pkg.color}`}>
                            {pkg.icon}
                        </div>
                        <h3 className="font-bold text-gray-900 text-lg">{pkg.name}</h3>
                        <p className="text-sm text-gray-500 min-h-[40px] mb-4">{pkg.desc}</p>
                        <div className="text-2xl font-extrabold text-gray-900 mb-6">{pkg.price}</div>
                        
                        <ul className="space-y-3 mb-8 flex-1">
                            {pkg.features.map((feat, i) => (
                                <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                                    <Check size={16} className="text-green-500 mt-0.5 flex-shrink-0" />
                                    <span>{feat}</span>
                                </li>
                            ))}
                        </ul>

                        <button 
                            onClick={() => { onClose(); onBook(); }}
                            className={`w-full py-3 rounded-xl font-bold transition-colors ${pkg.popular ? 'bg-brand-600 hover:bg-brand-700 text-white' : 'bg-gray-100 hover:bg-gray-200 text-gray-800'}`}
                        >
                            Chọn gói này
                        </button>
                    </div>
                ))}
            </div>
            
            <div className="mt-8 p-4 bg-blue-50 rounded-xl border border-blue-100 text-center">
                <p className="text-sm text-blue-800">
                    <strong>Lưu ý:</strong> Giá trên đã bao gồm phí lấy mẫu và tư vấn kết quả. Không phát sinh thêm chi phí.
                </p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default PriceListModal;