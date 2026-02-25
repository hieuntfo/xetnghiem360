import React, { useState } from 'react';
import { X, Search, FileText, Calendar, User, Activity, AlertTriangle, CheckCircle, ChevronDown, ChevronUp, Share2, Download, Printer, Brain, ArrowRight, ChevronLeft } from 'lucide-react';

interface ResultLookupProps {
  onBack: () => void;
}

// MOCK DATA FOR RESULTS
const MOCK_PATIENT_RESULT = {
  patient: {
    name: "Nguyễn Văn An",
    id: "HOSO-2024-8892",
    dob: "15/08/1988 (36 tuổi)",
    gender: "Nam",
    visitDate: "24/05/2024",
    doctor: "BS.CKI Trần Minh Tâm",
    diagnosis: "Rối loạn chuyển hóa Lipid máu nhẹ / Theo dõi chức năng gan"
  },
  metrics: [
    {
      category: "Sinh hóa máu (Gan - Mật)",
      items: [
        {
          code: "ALT (SGPT)",
          name: "Men gan ALT",
          value: 68,
          unit: "UI/L",
          refRange: "< 50",
          status: "high", // normal, high, low
          interpretation: {
            medical: "Tăng nhẹ. Phản ánh tình trạng hủy hoại tế bào gan.",
            layman: "Gan đang 'kêu cứu' nhẹ. Có vẻ gan phải làm việc quá sức để lọc độc tố (khả năng do rượu bia hoặc thuốc)."
          }
        },
        {
          code: "AST (SGOT)",
          name: "Men gan AST",
          value: 45,
          unit: "UI/L",
          refRange: "< 50",
          status: "normal",
          interpretation: {
            medical: "Trong giới hạn bình thường.",
            layman: "Chỉ số này ổn, gan vẫn kiểm soát được tình hình."
          }
        }
      ]
    },
    {
      category: "Mỡ máu (Lipid)",
      items: [
        {
          code: "Cholesterol TP",
          name: "Cholesterol toàn phần",
          value: 6.2,
          unit: "mmol/L",
          refRange: "3.9 - 5.2",
          status: "high",
          interpretation: {
            medical: "Tăng cao. Nguy cơ xơ vữa động mạch.",
            layman: "Lượng mỡ trong máu đang dư thừa. Giống như ống nước bắt đầu đóng cặn, cần giảm đồ chiên xào ngay."
          }
        },
        {
          code: "Triglyceride",
          name: "Chất béo trung tính",
          value: 2.8,
          unit: "mmol/L",
          refRange: "0.46 - 1.88",
          status: "high",
          interpretation: {
            medical: "Tăng. Liên quan đến chế độ ăn nhiều tinh bột/ngọt.",
            layman: "Đây là 'mỡ năng lượng'. Chỉ số cao chứng tỏ bạn nạp nhiều năng lượng (cơm, ngọt, cồn) nhưng không vận động để đốt cháy hết."
          }
        }
      ]
    },
    {
      category: "Đường huyết",
      items: [
        {
          code: "Glucose (Đói)",
          name: "Đường huyết lúc đói",
          value: 5.4,
          unit: "mmol/L",
          refRange: "3.9 - 6.4",
          status: "normal",
          interpretation: {
            medical: "Bình thường.",
            layman: "Đường huyết đẹp! Bạn không có nguy cơ tiểu đường lúc này."
          }
        }
      ]
    }
  ]
};

const ResultLookupPage: React.FC<ResultLookupProps> = ({ onBack }) => {
  const [step, setStep] = useState<'input' | 'loading' | 'result'>('input');
  const [code, setCode] = useState('');
  const [expandedItems, setExpandedItems] = useState<string[]>([]);

  const handleLookup = () => {
    if (!code.trim()) return;
    setStep('loading');
    setTimeout(() => {
      setStep('result');
    }, 1500);
  };

  const toggleExpand = (code: string) => {
    setExpandedItems(prev => 
      prev.includes(code) ? prev.filter(c => c !== code) : [...prev, code]
    );
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'high': return 'text-red-600 bg-red-50 border-red-100';
      case 'low': return 'text-yellow-600 bg-yellow-50 border-yellow-100';
      default: return 'text-green-600 bg-green-50 border-green-100';
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'high': return 'Cao';
      case 'low': return 'Thấp';
      default: return 'Bình thường';
    }
  };

  return (
    <div className="min-h-screen bg-white animate-fadeIn">
      
      {/* --- PAGE HEADER (COMMON) --- */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-100 h-16 flex items-center justify-between px-4 lg:px-8">
         <div className="flex items-center gap-4">
             <button onClick={onBack} className="p-2 -ml-2 hover:bg-gray-100 rounded-full transition-colors text-gray-500">
                <ChevronLeft size={24} />
             </button>
             <h1 className="text-lg font-bold text-gray-900">Tra cứu kết quả</h1>
         </div>
         <div className="flex items-center gap-2">
             <div className="w-8 h-8 bg-brand-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">X</div>
         </div>
      </header>

      {/* --- STEP 1: INPUT FORM (CENTERED PAGE) --- */}
      {step === 'input' && (
        <div className="flex flex-col items-center justify-center min-h-[calc(100vh-64px)] p-4 bg-gray-50">
           <div className="bg-white w-full max-w-lg rounded-3xl shadow-xl p-8 md:p-12 border border-gray-100">
             <div className="text-center mb-8">
                <div className="w-20 h-20 bg-brand-50 rounded-full flex items-center justify-center mx-auto mb-6 text-brand-600">
                    <FileText size={40} />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Nhập mã hồ sơ y tế</h2>
                <p className="text-gray-500">Mã hồ sơ được in trên phiếu hẹn, tin nhắn SMS hoặc trong ứng dụng đặt lịch (VD: HOSO-1234).</p>
             </div>
             
             <div className="space-y-4">
                <input 
                    type="text"
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    placeholder="Nhập mã hồ sơ..."
                    className="w-full px-4 py-4 rounded-xl border border-gray-300 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none transition-all text-center font-mono text-xl uppercase placeholder:normal-case placeholder:font-sans"
                />
                <button 
                    onClick={handleLookup}
                    className="w-full bg-brand-600 hover:bg-brand-700 text-white font-bold py-4 rounded-xl transition-colors shadow-lg shadow-brand-200 text-lg"
                >
                    Xem kết quả
                </button>
             </div>
           </div>
           <p className="mt-8 text-sm text-gray-400">Được bảo mật bởi tiêu chuẩn HIPAA & FPT Long Châu.</p>
        </div>
      )}

      {/* --- STEP 2: LOADING (CENTERED PAGE) --- */}
      {step === 'loading' && (
         <div className="flex flex-col items-center justify-center min-h-[calc(100vh-64px)] bg-white">
            <div className="w-16 h-16 border-4 border-brand-100 border-t-brand-600 rounded-full animate-spin mb-6"></div>
            <h3 className="text-xl font-bold text-gray-900">Đang tải dữ liệu y khoa...</h3>
            <p className="text-gray-500 mt-2">Hệ thống AI đang phân tích và giải mã các chỉ số...</p>
         </div>
      )}

      {/* --- STEP 3: RESULT DASHBOARD (FULL PAGE) --- */}
      {step === 'result' && (
        <div className="min-h-screen bg-gray-50 pb-20">
          
          {/* Patient Info Bar */}
          <div className="bg-gray-900 text-white py-6 px-4 lg:px-8 shadow-lg">
             <div className="container mx-auto max-w-5xl flex flex-col md:flex-row md:items-center justify-between gap-4">
                 <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white/80"><User size={24} /></div>
                    <div>
                        <h2 className="font-bold text-2xl leading-none mb-1">{MOCK_PATIENT_RESULT.patient.name}</h2>
                        <div className="flex items-center gap-4 text-sm text-gray-400 font-mono">
                            <span>ID: {MOCK_PATIENT_RESULT.patient.id}</span>
                            <span className="w-1 h-1 bg-gray-600 rounded-full"></span>
                            <span>{MOCK_PATIENT_RESULT.patient.dob}</span>
                        </div>
                    </div>
                 </div>
                 <div className="flex items-center gap-3">
                    <button className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-sm font-medium transition-colors">
                        <Printer size={16} /> <span className="hidden sm:inline">In kết quả</span>
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 bg-brand-600 hover:bg-brand-500 rounded-lg text-sm font-medium transition-colors shadow-lg">
                        <Download size={16} /> <span className="hidden sm:inline">Tải PDF</span>
                    </button>
                 </div>
             </div>
          </div>

          <div className="container mx-auto max-w-5xl px-4 lg:px-8 mt-8">
             
             {/* Patient Summary Card */}
             <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 mb-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-sm">
                    <div>
                        <span className="text-gray-400 block text-xs uppercase font-bold mb-1">Ngày khám</span>
                        <div className="font-medium flex items-center gap-2 text-gray-900"><Calendar size={16}/> {MOCK_PATIENT_RESULT.patient.visitDate}</div>
                    </div>
                    <div>
                         <span className="text-gray-400 block text-xs uppercase font-bold mb-1">Bác sĩ chỉ định</span>
                         <div className="font-medium text-gray-900">{MOCK_PATIENT_RESULT.patient.doctor}</div>
                    </div>
                    <div className="md:col-span-2">
                         <span className="text-gray-400 block text-xs uppercase font-bold mb-1">Chẩn đoán sơ bộ</span>
                         <div className="font-bold text-gray-900 text-base">{MOCK_PATIENT_RESULT.patient.diagnosis}</div>
                    </div>
                </div>
             </div>

             {/* ALERT / SUMMARY */}
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                 <div className="bg-red-50 border border-red-100 rounded-2xl p-6 flex items-start gap-4 shadow-sm">
                    <div className="bg-white p-3 rounded-full text-red-600 shadow-sm border border-red-50"><AlertTriangle size={24} /></div>
                    <div>
                        <h4 className="font-bold text-red-900 text-lg">Chỉ số cần lưu ý</h4>
                        <p className="text-red-700 mt-1 leading-relaxed">Phát hiện 3 chỉ số vượt ngưỡng: <strong>ALT, Cholesterol, Triglyceride</strong>. Cần điều chỉnh chế độ ăn uống.</p>
                    </div>
                 </div>
                 <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6 flex items-start gap-4 shadow-sm">
                    <div className="bg-white p-3 rounded-full text-blue-600 shadow-sm border border-blue-50"><Brain size={24} /></div>
                    <div>
                        <h4 className="font-bold text-blue-900 text-lg">AI Trợ lý phân tích</h4>
                        <p className="text-blue-700 mt-1 leading-relaxed">Kết quả gợi ý tình trạng gan nhiễm mỡ độ nhẹ và rối loạn lipid máu. Nên hạn chế đồ ngọt và vận động ít nhất 30p/ngày.</p>
                    </div>
                 </div>
             </div>

             {/* DETAILED RESULTS */}
             <div className="space-y-8">
                {MOCK_PATIENT_RESULT.metrics.map((category, idx) => (
                    <div key={idx} className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
                        <div className="bg-gray-50/80 px-8 py-5 border-b border-gray-100 flex items-center justify-between">
                            <h3 className="font-bold text-gray-900 text-xl flex items-center gap-2">
                                <Activity size={20} className="text-brand-600" />
                                {category.category}
                            </h3>
                        </div>
                        
                        <div className="divide-y divide-gray-100">
                            {category.items.map((item, i) => {
                                const isExpanded = expandedItems.includes(item.code);
                                return (
                                    <div key={i} className={`transition-colors ${isExpanded ? 'bg-brand-50/30' : 'hover:bg-gray-50'}`}>
                                        <div 
                                            className="p-6 md:p-8 cursor-pointer"
                                            onClick={() => toggleExpand(item.code)}
                                        >
                                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 md:gap-12">
                                                {/* Left: Info */}
                                                <div className="flex-1 min-w-[200px]">
                                                    <div className="flex items-center gap-3 mb-1">
                                                        <span className="font-bold text-gray-900 text-lg">{item.code}</span>
                                                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded uppercase border ${getStatusColor(item.status)}`}>
                                                            {getStatusLabel(item.status)}
                                                        </span>
                                                    </div>
                                                    <div className="text-sm text-gray-500">{item.name}</div>
                                                </div>

                                                {/* Middle: Visual Bar */}
                                                <div className="flex-[2]">
                                                    <div className="flex items-end gap-2 mb-2">
                                                        <span className={`text-2xl font-bold ${item.status === 'high' ? 'text-red-600' : 'text-gray-900'}`}>{item.value}</span>
                                                        <span className="text-sm text-gray-400 font-mono mb-1">{item.unit}</span>
                                                    </div>
                                                    {/* Visual bar */}
                                                    <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden relative">
                                                        <div 
                                                            className={`h-full rounded-full ${item.status === 'high' ? 'bg-red-500' : 'bg-green-500'}`} 
                                                            style={{ width: item.status === 'high' ? '85%' : '45%' }}
                                                        ></div>
                                                    </div>
                                                    <div className="text-[10px] text-gray-400 mt-1 font-mono">
                                                        Ref: {item.refRange}
                                                    </div>
                                                </div>

                                                {/* Right: Toggle */}
                                                <div className="hidden md:block">
                                                     <div className={`p-2 rounded-full ${isExpanded ? 'bg-brand-100 text-brand-600' : 'bg-gray-100 text-gray-400'}`}>
                                                        {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                                                     </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* EXPANDED EXPLANATION */}
                                        {isExpanded && (
                                            <div className="px-6 pb-8 md:px-8 animate-fadeIn">
                                                <div className="bg-white rounded-xl border border-blue-100 p-6 shadow-sm">
                                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                                        {/* Medical View */}
                                                        <div>
                                                            <h5 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                                                                <FileText size={16} /> Ý nghĩa y khoa
                                                            </h5>
                                                            <p className="text-base text-gray-700 leading-relaxed">
                                                                {item.interpretation.medical}
                                                            </p>
                                                        </div>
                                                        {/* Layman View */}
                                                        <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
                                                            <h5 className="text-xs font-bold text-brand-600 uppercase tracking-wider mb-3 flex items-center gap-2">
                                                                <Brain size={16} /> Giải thích dễ hiểu
                                                            </h5>
                                                            <p className="text-base text-gray-700 leading-relaxed italic">
                                                                "{item.interpretation.layman}"
                                                            </p>
                                                        </div>
                                                    </div>
                                                    {item.status !== 'normal' && (
                                                        <div className="mt-6 pt-6 border-t border-gray-100 flex justify-end">
                                                            <button className="text-sm font-bold text-brand-600 hover:text-brand-700 flex items-center gap-2 bg-brand-50 px-4 py-2 rounded-lg transition-colors">
                                                                Đặt lịch tư vấn chỉ số này <ArrowRight size={16} />
                                                            </button>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                ))}
             </div>

             <div className="mt-12 text-center text-sm text-gray-400 pb-12">
                Hệ thống xác thực bởi FPT Long Châu. Kết quả này có giá trị pháp lý tương đương bản giấy.
             </div>

          </div>
        </div>
      )}
    </div>
  );
};

export default ResultLookupPage;