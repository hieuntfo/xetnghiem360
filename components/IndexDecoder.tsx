import React, { useState } from 'react';
import { ArrowLeft, HelpCircle } from 'lucide-react';

const IndexDecoder: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  const [code, setCode] = useState('');
  const [result, setResult] = useState('');

  const handleDecode = () => {
    // Mock decoding logic
    if (code.toUpperCase() === 'HBA1C') {
      setResult('Đây là chỉ số đường huyết trung bình trong 3 tháng, dùng để chẩn đoán và theo dõi bệnh tiểu đường.');
    } else if (code.toUpperCase() === 'CHOL') {
      setResult('Đây là chỉ số Cholesterol toàn phần, một loại mỡ trong máu. Mức độ cao có thể tăng nguy cơ bệnh tim mạch.');
    } else {
      setResult('Không tìm thấy thông tin cho mã chỉ số này. Vui lòng thử lại.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <button onClick={onBack} className="flex items-center gap-2 text-sm font-semibold text-gray-600 hover:text-brand-600 transition-colors">
            <ArrowLeft size={18} />
            <span>Trang chủ</span>
          </button>
          <div className="text-lg font-bold text-gray-900">Giải mã chỉ số</div>
          <div className="w-24"></div> {/* Spacer */}
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-12 flex items-center justify-center">
        <div className="w-full max-w-lg">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 text-center">
                <div className="w-16 h-16 bg-brand-50 text-brand-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <HelpCircle size={32} />
                </div>
                <h1 className="text-2xl font-bold text-gray-900 mb-2">Bạn chưa hiểu chỉ số xét nghiệm?</h1>
                <p className="text-gray-500 mb-8">Nhập mã hoặc tên viết tắt của chỉ số vào ô dưới đây để nhận giải thích chi tiết.</p>
                
                <div className="flex gap-2">
                    <input 
                        type="text"
                        value={code}
                        onChange={(e) => setCode(e.target.value)}
                        placeholder="Ví dụ: HBA1C, CHOL,..."
                        className="flex-grow h-12 px-4 bg-gray-100 border-transparent rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition"
                    />
                    <button 
                        onClick={handleDecode}
                        className="h-12 bg-brand-600 text-white font-semibold px-6 rounded-lg hover:bg-brand-700 transition-colors"
                    >
                        Giải mã
                    </button>
                </div>

                {result && (
                    <div className="mt-6 p-4 bg-blue-50 text-blue-800 border border-blue-200 rounded-lg text-left">
                        <p>{result}</p>
                    </div>
                )}
            </div>
        </div>
      </main>
    </div>
  );
};

export default IndexDecoder;
