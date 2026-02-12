import React, { useState } from 'react';
import { User, Activity, ArrowRight, Wine, Cigarette, Sofa, Bike, AlertCircle, FileSearch, Sparkles } from 'lucide-react';

interface QuizState {
  gender: 'male' | 'female';
  ageRange: '18-25' | '26-35' | '36-45' | '46-60' | '>60';
  lifestyle: string[];
}

interface DecisionToolProps {
  onBook?: () => void;
}

const DecisionTool: React.FC<DecisionToolProps> = ({ onBook }) => {
  const [data, setData] = useState<QuizState>({
    gender: 'male',
    ageRange: '36-45', // Default middle range
    lifestyle: []
  });

  const toggleLifestyle = (item: string) => {
    setData(prev => {
      let newLifestyle = [...prev.lifestyle];
      
      // Mutual exclusion logic
      if (item === 'sedentary') {
        newLifestyle = newLifestyle.filter(i => i !== 'active'); // Remove active if sedentary is chosen
      } else if (item === 'active') {
        newLifestyle = newLifestyle.filter(i => i !== 'sedentary'); // Remove sedentary if active is chosen
      }

      // Toggle current item
      if (newLifestyle.includes(item)) {
        newLifestyle = newLifestyle.filter(i => i !== item);
      } else {
        newLifestyle.push(item);
      }

      return { ...prev, lifestyle: newLifestyle };
    });
  };

  const getResult = () => {
    // Logic can be expanded. Here is a simplified version for UI demo.
    if (data.lifestyle.includes('alcohol')) {
        return {
            title: 'Tầm soát Gan & Thận',
            desc: 'Thói quen sử dụng rượu bia thường xuyên là nguyên nhân hàng đầu gây tổn thương tế bào gan và tăng Acid Uric.',
            primaryTest: 'Bộ men gan (AST, ALT, GGT)',
            secondaryTests: ['Acid Uric', 'Tổng phân tích nước tiểu'],
            color: 'bg-orange-50',
            textColor: 'text-orange-900',
            iconColor: 'text-orange-500',
            btnColor: 'bg-orange-600 hover:bg-orange-700'
        }
    }
    if (data.lifestyle.includes('sedentary')) {
         return {
            title: 'Tầm soát Mỡ máu & Cột sống',
            desc: 'Lối sống văn phòng ít vận động tiềm ẩn nguy cơ mỡ máu cao và các bệnh lý về cột sống, thoái hóa khớp.',
            primaryTest: 'Bộ mỡ máu (Lipid máu)',
            secondaryTests: ['Canxi & Vitamin D3', 'Đường huyết (HbA1c)'],
            color: 'bg-blue-50',
            textColor: 'text-blue-900',
            iconColor: 'text-blue-500',
            btnColor: 'bg-blue-600 hover:bg-blue-700'
        }
    }
    if (data.lifestyle.includes('smoking')) {
         return {
            title: 'Tầm soát Phổi & Tim mạch',
            desc: 'Người hút thuốc lá có nguy cơ rất cao mắc các bệnh về phổi và xơ vữa động mạch.',
            primaryTest: 'Chụp X-quang phổi',
            secondaryTests: ['Công thức máu', 'Điện tim (ECG)'],
            color: 'bg-gray-100',
            textColor: 'text-gray-900',
            iconColor: 'text-gray-600',
            btnColor: 'bg-gray-800 hover:bg-black'
        }
    }
    if (data.lifestyle.includes('active')) {
         return {
            title: 'Gói sức khỏe Vận động',
            desc: 'Người vận động cường độ cao cần theo dõi sức khỏe cơ xương khớp và điện giải để tối ưu hiệu suất.',
            primaryTest: 'Điện giải đồ (Ion đồ)',
            secondaryTests: ['CK (Creatine Kinase)', 'Đo mật độ xương'],
            color: 'bg-green-50',
            textColor: 'text-green-900',
            iconColor: 'text-green-600',
            btnColor: 'bg-green-600 hover:bg-green-700'
        }
    }
    
    // Default fallback if logic falls through (though "Wait for input" handles empty lifestyle)
    return {
        title: 'Gói khám Tổng quát',
        desc: 'Kiểm tra sức khỏe định kỳ giúp phát hiện sớm các nguy cơ tiềm ẩn.',
        primaryTest: 'Công thức máu 24 chỉ số',
        secondaryTests: ['Đường huyết', 'Chức năng Gan-Thận'],
        color: 'bg-brand-50',
        textColor: 'text-brand-900',
        iconColor: 'text-brand-600',
        btnColor: 'bg-brand-600 hover:bg-brand-700'
    }
  };

  const hasSufficientData = data.lifestyle.length > 0;
  const result = getResult();

  return (
    <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden flex flex-col md:flex-row min-h-[500px]">
      
      {/* LEFT COLUMN: CONTROLS (INPUT) */}
      <div className="w-full md:w-5/12 p-8 border-r border-gray-100 bg-white z-10 flex flex-col">
        <div className="space-y-8 flex-1">
            
            {/* 1. Gender */}
            <div>
                <label className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3 block">Giới tính</label>
                <div className="flex bg-gray-50 p-1 rounded-xl">
                    <button 
                        onClick={() => setData({...data, gender: 'male'})}
                        className={`flex-1 py-3 rounded-lg text-sm font-semibold transition-all flex justify-center items-center gap-2 ${data.gender === 'male' ? 'bg-white text-brand-600 shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
                    >
                        <User size={18} /> Nam
                    </button>
                    <button 
                        onClick={() => setData({...data, gender: 'female'})}
                        className={`flex-1 py-3 rounded-lg text-sm font-semibold transition-all flex justify-center items-center gap-2 ${data.gender === 'female' ? 'bg-white text-rose-600 shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
                    >
                        <User size={18} /> Nữ
                    </button>
                </div>
            </div>

            {/* 2. Age - More granular */}
            <div>
                 <label className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3 block">Độ tuổi</label>
                 <input 
                    type="range" 
                    min="1" 
                    max="5" 
                    step="1" 
                    value={data.ageRange === '18-25' ? 1 : data.ageRange === '26-35' ? 2 : data.ageRange === '36-45' ? 3 : data.ageRange === '46-60' ? 4 : 5}
                    onChange={(e) => {
                        const val = parseInt(e.target.value);
                        const ranges: QuizState['ageRange'][] = ['18-25', '18-25', '26-35', '36-45', '46-60', '>60'];
                        setData({...data, ageRange: ranges[val] || '36-45'})
                    }}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-brand-600 mb-4"
                 />
                 <div className="flex justify-between text-xs font-medium text-gray-400 relative">
                     {/* Labels */}
                     <span className={`w-10 text-left ${data.ageRange === '18-25' ? 'text-brand-600 font-bold scale-110' : ''}`}>18-25</span>
                     <span className={`w-10 text-center ${data.ageRange === '26-35' ? 'text-brand-600 font-bold scale-110' : ''}`}>26-35</span>
                     <span className={`w-10 text-center ${data.ageRange === '36-45' ? 'text-brand-600 font-bold scale-110' : ''}`}>36-45</span>
                     <span className={`w-10 text-center ${data.ageRange === '46-60' ? 'text-brand-600 font-bold scale-110' : ''}`}>46-60</span>
                     <span className={`w-10 text-right ${data.ageRange === '>60' ? 'text-brand-600 font-bold scale-110' : ''}`}>60+</span>
                 </div>
            </div>

            {/* 3. Lifestyle */}
            <div>
                <label className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3 block">Lối sống (Chọn nhiều)</label>
                <div className="grid grid-cols-2 gap-3">
                    <button 
                        onClick={() => toggleLifestyle('alcohol')}
                        className={`p-3 rounded-xl border text-left flex items-center gap-3 transition-all ${data.lifestyle.includes('alcohol') ? 'border-orange-500 bg-orange-50 text-orange-700' : 'border-gray-200 hover:border-gray-300 text-gray-600'}`}
                    >
                        <Wine size={18} className={data.lifestyle.includes('alcohol') ? 'text-orange-500' : 'text-gray-400'} />
                        <span className="text-sm font-medium">Hay nhậu</span>
                    </button>

                    <button 
                        onClick={() => toggleLifestyle('smoking')}
                        className={`p-3 rounded-xl border text-left flex items-center gap-3 transition-all ${data.lifestyle.includes('smoking') ? 'border-gray-600 bg-gray-100 text-gray-800' : 'border-gray-200 hover:border-gray-300 text-gray-600'}`}
                    >
                        <Cigarette size={18} className={data.lifestyle.includes('smoking') ? 'text-gray-700' : 'text-gray-400'} />
                        <span className="text-sm font-medium">Hút thuốc</span>
                    </button>

                     <button 
                        onClick={() => toggleLifestyle('sedentary')}
                        className={`p-3 rounded-xl border text-left flex items-center gap-3 transition-all ${data.lifestyle.includes('sedentary') ? 'border-blue-500 bg-blue-50 text-blue-700' : 'border-gray-200 hover:border-gray-300 text-gray-600'}`}
                    >
                        <Sofa size={18} className={data.lifestyle.includes('sedentary') ? 'text-blue-500' : 'text-gray-400'} />
                        <span className="text-sm font-medium">Ít vận động</span>
                    </button>

                     <button 
                        onClick={() => toggleLifestyle('active')}
                        className={`p-3 rounded-xl border text-left flex items-center gap-3 transition-all ${data.lifestyle.includes('active') ? 'border-green-500 bg-green-50 text-green-700' : 'border-gray-200 hover:border-gray-300 text-gray-600'}`}
                    >
                        <Bike size={18} className={data.lifestyle.includes('active') ? 'text-green-500' : 'text-gray-400'} />
                        <span className="text-sm font-medium">Vận động cao</span>
                    </button>
                </div>
            </div>
        </div>
        <p className="mt-6 text-[10px] text-gray-400 italic">
          *Dữ liệu được xử lý ẩn danh và không lưu trữ nếu bạn không đăng ký tài khoản.
        </p>
      </div>

      {/* RIGHT COLUMN: RESULT (OUTPUT) */}
      <div className={`w-full md:w-7/12 p-8 md:p-10 transition-colors duration-500 flex flex-col justify-center ${hasSufficientData ? result.color : 'bg-gray-50'}`}>
         
         {!hasSufficientData ? (
             // EMPTY STATE
             <div className="flex flex-col items-center justify-center text-center h-full animate-fadeIn">
                 <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm">
                    <FileSearch size={32} className="text-gray-300" />
                 </div>
                 <h3 className="text-xl font-bold text-gray-800 mb-2">Chờ dữ liệu phân tích...</h3>
                 <p className="text-gray-500 max-w-xs text-sm leading-relaxed">
                     Vui lòng chọn <strong>Lối sống</strong> ở cột bên trái để AI tổng hợp phác đồ phù hợp nhất với bạn.
                 </p>
             </div>
         ) : (
             // RESULT STATE
             <div className="animate-fadeIn">
                <div className="flex items-start gap-4 mb-6">
                    <div className={`p-3 bg-white rounded-2xl shadow-sm ${result.iconColor}`}>
                        <AlertCircle size={32} />
                    </div>
                    <div>
                        <div className="flex items-center gap-2 mb-1">
                            <span className="text-xs font-bold uppercase tracking-wider opacity-60">Kết quả phân tích</span>
                            <span className="bg-white/50 px-2 py-0.5 rounded text-[10px] font-semibold flex items-center gap-1 border border-black/5">
                                <Sparkles size={10} /> AI Suggestion
                            </span>
                        </div>
                        <h3 className={`text-2xl md:text-3xl font-bold ${result.textColor} leading-tight`}>{result.title}</h3>
                    </div>
                </div>

                <p className={`${result.textColor} opacity-80 text-lg leading-relaxed mb-8`}>
                    {result.desc}
                </p>

                <div className="bg-white/60 p-6 rounded-2xl border border-white/50 backdrop-blur-sm mb-8 shadow-sm">
                    <div className="flex flex-col md:flex-row gap-6">
                        <div className="flex-1">
                            <span className="text-[10px] uppercase font-bold text-gray-500 mb-2 block">Chỉ số trọng tâm</span>
                            <div className="flex items-center gap-2 text-lg font-bold text-gray-900 bg-white px-3 py-2 rounded-lg border border-gray-100 shadow-sm">
                                <Activity size={20} className={result.iconColor} />
                                {result.primaryTest}
                            </div>
                        </div>
                        <div className="flex-1">
                            <span className="text-[10px] uppercase font-bold text-gray-500 mb-2 block">Chỉ số bổ sung</span>
                            <div className="flex flex-wrap gap-2">
                                {result.secondaryTests.map((t, i) => (
                                    <span key={i} className="inline-flex items-center px-2.5 py-2 rounded-lg bg-white border border-gray-200 text-xs font-semibold text-gray-600">
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-auto flex gap-4">
                    <button 
                        onClick={onBook}
                        className={`${result.btnColor} text-white px-8 py-3.5 rounded-xl font-bold shadow-lg shadow-brand-500/20 hover:shadow-brand-500/30 transition-all flex items-center gap-2`}
                    >
                        Đặt lịch xét nghiệm <ArrowRight size={18} />
                    </button>
                </div>
             </div>
         )}

      </div>
    </div>
  );
};

export default DecisionTool;