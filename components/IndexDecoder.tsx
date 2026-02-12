import React, { useState } from 'react';
import { X, Search, ChevronDown, ChevronUp, AlertTriangle, CheckCircle, Info, Stethoscope, PartyPopper, ArrowRight, Activity, Thermometer, ChevronLeft, Menu } from 'lucide-react';

interface IndexDecoderProps {
  onBack: () => void;
  onBook?: () => void;
}

type Tone = 'fun' | 'serious';

interface ContentVariant {
  fun: string;
  serious: string;
}

interface IndexData {
  id: string;
  code: string;
  name: string;
  category: string;
  overview: ContentVariant;
  ranges: {
    min: number;
    max: number;
    unit: string;
    interpretation: {
      normal: ContentVariant;
      warning: ContentVariant;
      danger: ContentVariant;
    };
  };
  causes: ContentVariant[]; // List of causes
  relatedTests: string[];
  faq: { q: string; a: ContentVariant }[];
  cta: ContentVariant;
}

// MOCK DATA
const INDICES_DB: IndexData[] = [
  {
    id: 'alt',
    code: 'ALT (SGPT)',
    name: 'Men gan',
    category: 'Gan mật',
    overview: {
      fun: "Hãy tưởng tượng gan là 'nhà máy lọc hóa dầu' của cơ thể. ALT là nhân viên chăm chỉ làm việc bên trong. Khi 'nhà máy' bị phá hoại (do rượu bia, virus), nhân viên ALT sẽ chạy tán loạn ra ngoài máu. ALT trong máu càng cao, chứng tỏ gan đang 'kêu cứu' càng to!",
      serious: "Alanine Aminotransferase (ALT) là một loại enzym được tìm thấy chủ yếu trong tế bào gan. Khi tế bào gan bị tổn thương hoặc viêm nhiễm, enzyme này sẽ được giải phóng vào máu. Xét nghiệm ALT là chỉ số đặc hiệu nhất để đánh giá tổn thương tế bào gan."
    },
    ranges: {
      min: 0,
      max: 100, // Visual scale max
      unit: 'UI/L',
      interpretation: {
        normal: {
          fun: "Gan đang 'chill', mọi thứ vẫn ổn áp. Cứ tiếp tục lối sống lành mạnh nhé!",
          serious: "Chỉ số nằm trong giới hạn bình thường (< 35 UI/L nữ, < 50 UI/L nam). Chức năng gan ổn định."
        },
        warning: {
          fun: "Gan bắt đầu 'nhăn nhó' rồi đấy. Có phải dạo này hơi quá chén hay thức khuya cày phim không?",
          serious: "Chỉ số tăng nhẹ (gấp 1-2 lần). Cảnh báo sớm về tình trạng gan nhiễm mỡ, viêm gan do rượu hoặc tác dụng phụ của thuốc."
        },
        danger: {
          fun: "Báo động đỏ! Gan đang 'biểu tình' dữ dội. Dừng ngay cuộc vui và đi gặp bác sĩ gấp!",
          serious: "Chỉ số tăng cao (> 100 UI/L). Dấu hiệu của viêm gan cấp, viêm gan virus hoặc tổn thương gan nghiêm trọng cần can thiệp y tế ngay."
        }
      }
    },
    causes: [
      { fun: "Uống bia như uống nước lọc 🍺", serious: "Lạm dụng rượu bia thường xuyên" },
      { fun: "Team 'Cú đêm', ăn mì tôm trừ bữa 🍜", serious: "Chế độ sinh hoạt không điều độ, thực phẩm nhiều dầu mỡ" },
      { fun: "Uống thuốc giảm đau vô tội vạ 💊", serious: "Sử dụng thuốc tây dài ngày (Paracetamol, kháng sinh...)" }
    ],
    relatedTests: ['AST (SGOT)', 'GGT', 'HbsAg (Viêm gan B)'],
    faq: [
      {
        q: "Chỉ số cao có phải là ung thư không?",
        a: {
          fun: "Bình tĩnh nào! Đừng tự dọa mình. ALT cao giống như xe báo lỗi động cơ thôi, chưa chắc xe đã hỏng hoàn toàn. Đi khám để thợ (bác sĩ) check nhé.",
          serious: "Không hẳn. ALT tăng cao chủ yếu phản ánh tình trạng viêm hoặc hoại tử tế bào gan. Để chẩn đoán ung thư cần kết hợp AFP, siêu âm và sinh thiết."
        }
      }
    ],
    cta: {
      fun: "Đừng để gan 'hờn dỗi'. Đặt lịch kiểm tra ngay để còn yên tâm 'quẩy' tiếp!",
      serious: "Đừng chủ quan với sức khỏe lá gan. Đặt lịch tư vấn với chuyên gia ngay hôm nay."
    }
  },
  {
    id: 'hba1c',
    code: 'HbA1c',
    name: 'Đường huyết 3 tháng',
    category: 'Tiểu đường',
    overview: {
      fun: "Nếu đường huyết đói là 'tấm ảnh selfie' chụp ngay lúc đó, thì HbA1c là 'camera hành trình' ghi lại lịch sử ăn ngọt của bạn trong 3 tháng qua. Không thể chối cãi việc lén uống trà sữa được đâu nha!",
      serious: "HbA1c phản ánh tình trạng gắn kết của đường trên Hemoglobin (tế bào hồng cầu). Chỉ số này cho biết mức đường huyết trung bình của bạn trong 2-3 tháng gần nhất, có giá trị chẩn đoán cao hơn đường huyết lúc đói."
    },
    ranges: {
      min: 0,
      max: 12,
      unit: '%',
      interpretation: {
        normal: {
          fun: "Quá đỉnh! Bạn đang kiểm soát cơn thèm ngọt cực tốt. Body này không sợ tiểu đường ghé thăm.",
          serious: "Bình thường (< 5.7%). Nguy cơ mắc bệnh tiểu đường thấp."
        },
        warning: {
          fun: "Cẩn thận nha, bạn đang đứng ở 'ngã ba đường'. Bớt trà sữa, thêm rau xanh nếu không muốn gia nhập hội 'người ngọt ngào'.",
          serious: "Tiền tiểu đường (5.7% - 6.4%). Cần điều chỉnh chế độ ăn và vận động để tránh tiến triển thành bệnh."
        },
        danger: {
          fun: "Báo động! Đường trong máu đang mở tiệc. Cần gặp bác sĩ để 'giải tán' bữa tiệc này ngay.",
          serious: "Tiểu đường (>= 6.5%). Cần tuân thủ phác đồ điều trị của bác sĩ chuyên khoa nội tiết."
        }
      }
    },
    causes: [
      { fun: "Đạo trà sữa, fan cuồng bánh ngọt 🍰", serious: "Chế độ ăn nhiều Carbohydrate và đường đơn" },
      { fun: "Lười vận động, ngồi lì một chỗ 🛋️", serious: "Lối sống ít vận động, thừa cân béo phì" },
      { fun: "Gen di truyền từ gia đình 🧬", serious: "Yếu tố di truyền gia đình" }
    ],
    relatedTests: ['Glucose đói', 'Insulin', 'Tổng phân tích nước tiểu'],
    faq: [
      {
        q: "Nhịn ăn sáng thì HbA1c có giảm không?",
        a: {
          fun: "Không hề nhé! Nó là 'camera hành trình' 3 tháng mà. Nhịn 1 bữa ăn thua gì, phải 'tu tâm dưỡng tính' dài dài.",
          serious: "Không. HbA1c không phụ thuộc vào bữa ăn gần nhất mà phụ thuộc vào nồng độ đường trong máu suốt 3 tháng qua."
        }
      }
    ],
    cta: {
      fun: "Muốn biết mình có 'ngọt ngào' quá mức không? Check ngay!",
      serious: "Tầm soát tiểu đường sớm là chìa khóa bảo vệ sức khỏe tim mạch và thận."
    }
  }
];

const IndexDecoder: React.FC<IndexDecoderProps> = ({ onBack, onBook }) => {
  const [tone, setTone] = useState<Tone>('fun');
  const [selectedIndex, setSelectedIndex] = useState<IndexData>(INDICES_DB[0]);
  const [searchTerm, setSearchTerm] = useState('');
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const filteredIndices = INDICES_DB.filter(item => 
    item.code.toLowerCase().includes(searchTerm.toLowerCase()) || 
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-white animate-fadeIn flex flex-col">
      
      {/* HEADER */}
      <div className="bg-white border-b border-gray-100 flex items-center justify-between px-4 py-3 sticky top-0 z-30">
          <div className="flex items-center gap-3">
             <button onClick={onBack} className="p-2 -ml-2 hover:bg-gray-100 rounded-full transition-colors text-gray-500">
               <ChevronLeft size={24} />
             </button>
             <div>
                <h2 className="text-xl font-bold text-gray-900 leading-none">Giải mã chỉ số</h2>
                <span className="text-[10px] text-gray-400 font-medium">Thư viện y khoa 4.0</span>
             </div>
          </div>
          
          <div className="flex items-center gap-3">
            {/* TONE SWITCHER (Desktop) */}
            <div className="hidden md:flex bg-gray-100 p-1 rounded-lg items-center relative">
                <button 
                    onClick={() => setTone('fun')}
                    className={`relative z-10 px-3 py-1.5 rounded-md text-xs font-bold transition-all flex items-center gap-1.5 ${tone === 'fun' ? 'bg-white text-orange-600 shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
                >
                    <PartyPopper size={14} /> Vui nhộn
                </button>
                <button 
                    onClick={() => setTone('serious')}
                    className={`relative z-10 px-3 py-1.5 rounded-md text-xs font-bold transition-all flex items-center gap-1.5 ${tone === 'serious' ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
                >
                    <Stethoscope size={14} /> Nghiêm túc
                </button>
            </div>

            {/* Mobile Menu Toggle */}
             <button onClick={() => setShowMobileMenu(!showMobileMenu)} className="md:hidden p-2 bg-gray-50 rounded-lg">
                <Menu size={20} />
             </button>
          </div>
      </div>

      {/* TONE SWITCHER (Mobile) */}
      <div className="md:hidden px-4 py-3 bg-white border-b border-gray-100 sticky top-[60px] z-20">
         <div className="bg-gray-100 p-1 rounded-lg flex items-center relative w-full">
                <button 
                    onClick={() => setTone('fun')}
                    className={`flex-1 relative z-10 px-3 py-2 rounded-md text-xs font-bold transition-all flex justify-center items-center gap-1.5 ${tone === 'fun' ? 'bg-white text-orange-600 shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
                >
                    <PartyPopper size={14} /> Vui nhộn
                </button>
                <button 
                    onClick={() => setTone('serious')}
                    className={`flex-1 relative z-10 px-3 py-2 rounded-md text-xs font-bold transition-all flex justify-center items-center gap-1.5 ${tone === 'serious' ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
                >
                    <Stethoscope size={14} /> Nghiêm túc
                </button>
         </div>
      </div>

      {/* BODY */}
      <div className="flex-1 flex overflow-hidden">
          
          {/* SIDEBAR LIST (Desktop: Sticky, Mobile: Hidden unless toggled) */}
          <div className={`${showMobileMenu ? 'fixed inset-0 z-40 bg-white' : 'hidden'} md:block md:w-80 md:border-r border-gray-100 bg-gray-50/50 md:sticky md:top-16 md:h-[calc(100vh-64px)] flex flex-col`}>
             {/* Mobile Close Button */}
             <div className="md:hidden p-4 flex justify-between items-center border-b border-gray-100">
                <h3 className="font-bold">Danh sách chỉ số</h3>
                <button onClick={() => setShowMobileMenu(false)}><X size={24}/></button>
             </div>

            <div className="p-4 border-b border-gray-100 bg-white sticky top-0">
                <div className="relative">
                    <Search size={16} className="absolute left-3 top-3 text-gray-400" />
                    <input 
                        type="text" 
                        placeholder="Tìm chỉ số (VD: HbA1c)..." 
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-9 pr-4 py-2.5 bg-gray-100 border-none rounded-lg text-sm focus:ring-2 focus:ring-brand-500 outline-none"
                    />
                </div>
            </div>
            <div className="flex-1 overflow-y-auto p-2 space-y-1">
                {filteredIndices.map((idx) => (
                    <button
                        key={idx.id}
                        onClick={() => {
                            setSelectedIndex(idx);
                            setShowMobileMenu(false);
                            // Scroll to top on mobile
                            window.scrollTo(0, 0);
                        }}
                        className={`w-full text-left p-3 rounded-lg text-sm transition-all flex items-center justify-between group ${selectedIndex.id === idx.id ? 'bg-white shadow-md border border-gray-100 ring-1 ring-brand-100' : 'hover:bg-gray-100'}`}
                    >
                        <div>
                            <div className={`font-bold ${selectedIndex.id === idx.id ? 'text-brand-700' : 'text-gray-800'}`}>{idx.code}</div>
                            <div className="text-xs text-gray-500">{idx.name}</div>
                        </div>
                        {selectedIndex.id === idx.id && <div className="w-1.5 h-1.5 rounded-full bg-brand-500"></div>}
                    </button>
                ))}
            </div>
          </div>

          {/* MAIN CONTENT AREA */}
          <div className="flex-1 w-full md:overflow-y-auto">
            <div className="max-w-4xl mx-auto p-4 md:p-8 lg:p-12 pb-20">
             
             {/* Title Block */}
             <div className="mb-10 text-center md:text-left">
                 <div className="inline-flex items-center gap-2 mb-3 bg-gray-100 px-3 py-1 rounded-full">
                    <span className="text-[10px] font-bold text-gray-600 uppercase tracking-wider">{selectedIndex.category}</span>
                 </div>
                 <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-2">{selectedIndex.code}</h1>
                 <p className="text-xl text-gray-500 font-medium">{selectedIndex.name}</p>
             </div>

             {/* 1. Overview (WHAT IS IT?) */}
             <section className="mb-10">
                 <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4 flex items-center gap-2">
                    <Info size={16} className="text-brand-500"/> 
                    {tone === 'fun' ? 'Nó nói gì về tui?' : 'Ý nghĩa lâm sàng'}
                 </h3>
                 <div className={`p-6 md:p-8 rounded-3xl leading-relaxed text-lg text-gray-700 border shadow-sm ${tone === 'fun' ? 'bg-orange-50 border-orange-100' : 'bg-blue-50 border-blue-100'}`}>
                    {selectedIndex.overview[tone]}
                 </div>
             </section>

             {/* 2. Reference Ranges (VISUAL) */}
             <section className="mb-10">
                <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4 flex items-center gap-2">
                    <Activity size={16} className="text-brand-500"/> 
                    {tone === 'fun' ? 'Đo xem đang ở đâu?' : 'Khoảng tham chiếu'}
                </h3>
                
                {/* Visual Bar */}
                <div className="relative h-6 bg-gray-100 rounded-full mb-8 flex overflow-hidden shadow-inner">
                    <div className="w-1/3 bg-green-400 h-full relative group cursor-help">
                         <span className="hidden group-hover:block absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded whitespace-nowrap">Bình thường</span>
                    </div>
                    <div className="w-1/3 bg-yellow-400 h-full relative group cursor-help">
                         <span className="hidden group-hover:block absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded whitespace-nowrap">Cảnh báo</span>
                    </div>
                    <div className="w-1/3 bg-red-500 h-full relative group cursor-help">
                         <span className="hidden group-hover:block absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded whitespace-nowrap">Nguy hiểm</span>
                    </div>
                </div>

                <div className="space-y-4">
                    {/* Normal */}
                    <div className="flex gap-4 items-start p-4 rounded-xl border border-transparent hover:border-gray-100 hover:bg-gray-50 transition-colors">
                        <div className="w-4 h-4 rounded-full bg-green-500 mt-1 flex-shrink-0"></div>
                        <div>
                            <div className="text-xs font-bold text-green-700 uppercase mb-1">Bình thường</div>
                            <p className="text-base text-gray-600 leading-relaxed">{selectedIndex.ranges.interpretation.normal[tone]}</p>
                        </div>
                    </div>
                     {/* Warning */}
                     <div className="flex gap-4 items-start p-4 rounded-xl border border-transparent hover:border-gray-100 hover:bg-gray-50 transition-colors">
                        <div className="w-4 h-4 rounded-full bg-yellow-400 mt-1 flex-shrink-0"></div>
                        <div>
                            <div className="text-xs font-bold text-yellow-700 uppercase mb-1">Cảnh báo / Tăng nhẹ</div>
                            <p className="text-base text-gray-600 leading-relaxed">{selectedIndex.ranges.interpretation.warning[tone]}</p>
                        </div>
                    </div>
                     {/* Danger */}
                     <div className="flex gap-4 items-start p-4 rounded-xl border border-transparent hover:border-gray-100 hover:bg-gray-50 transition-colors">
                        <div className="w-4 h-4 rounded-full bg-red-500 mt-1 flex-shrink-0"></div>
                        <div>
                            <div className="text-xs font-bold text-red-700 uppercase mb-1">Nguy hiểm / Tăng cao</div>
                            <p className="text-base text-gray-600 leading-relaxed">{selectedIndex.ranges.interpretation.danger[tone]}</p>
                        </div>
                    </div>
                </div>
             </section>

             <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-10">
                 {/* 3. Causes */}
                 <section>
                    <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4 flex items-center gap-2">
                        <AlertTriangle size={16} className="text-brand-500"/> 
                        {tone === 'fun' ? 'Tại sao lại bị dính?' : 'Nguyên nhân thường gặp'}
                    </h3>
                    <ul className="grid grid-cols-1 gap-3">
                        {selectedIndex.causes.map((cause, idx) => (
                            <li key={idx} className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl border border-gray-100">
                                <div className="w-2 h-2 bg-gray-400 rounded-full mt-2"></div>
                                <span className="text-sm text-gray-700 leading-relaxed">{cause[tone]}</span>
                            </li>
                        ))}
                    </ul>
                 </section>

                 {/* 4. Related Tests & FAQ */}
                 <section>
                     <div className="mb-8">
                        <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4 flex items-center gap-2">
                            <Thermometer size={16} className="text-brand-500"/> 
                            {tone === 'fun' ? 'Làm thêm gì cho chắc?' : 'Xét nghiệm liên quan'}
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {selectedIndex.relatedTests.map((test, i) => (
                                <span key={i} className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-600 shadow-sm">
                                    {test}
                                </span>
                            ))}
                        </div>
                     </div>

                     <div>
                         <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4 flex items-center gap-2">
                            <CheckCircle size={16} className="text-brand-500"/> FAQ
                        </h3>
                        <div className="space-y-6">
                            {selectedIndex.faq.map((item, i) => (
                                <div key={i}>
                                    <div className="text-sm font-bold text-gray-900 mb-2">Q: {item.q}</div>
                                    <div className="text-sm text-gray-600 italic bg-gray-50 p-3 rounded-lg border-l-4 border-brand-200">" {item.a[tone]} "</div>
                                </div>
                            ))}
                        </div>
                     </div>
                 </section>
             </div>

             {/* 5. CTA */}
             <div className="mt-12 p-8 bg-gradient-to-r from-brand-600 to-brand-500 rounded-3xl text-white shadow-xl shadow-brand-200 transform hover:scale-[1.01] transition-transform">
                 <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                     <div>
                         <h4 className="font-bold text-xl mb-2">{tone === 'fun' ? 'Chốt đơn!' : 'Bước tiếp theo'}</h4>
                         <p className="text-brand-100 text-lg opacity-90">{selectedIndex.cta[tone]}</p>
                     </div>
                     <button 
                        onClick={onBook}
                        className="whitespace-nowrap bg-white text-brand-600 px-8 py-4 rounded-xl font-bold text-base hover:bg-brand-50 transition-colors flex items-center gap-2 shadow-lg"
                     >
                         Đặt lịch xét nghiệm <ArrowRight size={20} />
                     </button>
                 </div>
             </div>

            </div>
          </div>
      </div>
    </div>
  );
};

export default IndexDecoder;