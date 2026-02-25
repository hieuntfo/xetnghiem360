import React, { useState, useMemo } from 'react';
import { MedicalIndex, ReferenceRange } from '../types';
import { ArrowLeft, ChevronDown, Info, Apple, Zap, Repeat, FlaskConical } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { clsx } from 'clsx';

interface IndexDetailPageProps {
  index: MedicalIndex;
  onBack: () => void;
}

const Accordion: React.FC<{ title: string; children: React.ReactNode; defaultOpen?: boolean }> = ({ title, children, defaultOpen = false }) => {
    const [isOpen, setIsOpen] = useState(defaultOpen);
    return (
        <div className="border-b border-gray-200">
            <button onClick={() => setIsOpen(!isOpen)} className="w-full flex justify-between items-center py-4 text-left font-semibold text-gray-700">
                <span>{title}</span>
                <ChevronDown size={20} className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
            </button>
            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        key="content"
                        initial="collapsed"
                        animate="open"
                        exit="collapsed"
                        variants={{
                            open: { opacity: 1, height: 'auto' },
                            collapsed: { opacity: 0, height: 0 },
                        }}
                        transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                        className="overflow-hidden"
                    >
                        <div className="pb-4 text-gray-600">
                            {children}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const IndexDetailPage: React.FC<IndexDetailPageProps> = ({ index, onBack }) => {
  const [userValue, setUserValue] = useState<string>('');
  const [gender, setGender] = useState<'male' | 'female'>('male');

  const activeReferenceRange = useMemo(() => {
    return index.referenceRanges.find(r => r.gender === gender || r.gender === 'any');
  }, [index, gender]);

  const getStatus = (value: number, range: ReferenceRange | undefined) => {
      if (!range) return { level: 'unknown', label: 'Không có dữ liệu' };
      if (value < range.range[0]) return { level: 'low', label: 'Thấp' };
      if (value > range.range[1]) return { level: 'high', label: 'Cao' };
      if (range.warningRange && (value > range.warningRange[0] && value < range.warningRange[1])) return { level: 'warning', label: 'Lưu ý' };
      return { level: 'normal', label: 'Bình thường' };
  }

  const parsedValue = parseFloat(userValue);
  const status = getStatus(parsedValue, activeReferenceRange);

  const getIndicatorPosition = () => {
    if (!activeReferenceRange || isNaN(parsedValue)) return '0%';
    const [min, max] = activeReferenceRange.range;
    const totalRange = (max - min) * 2; // Extend range for visual buffer
    const valuePosition = parsedValue - (min - (max-min)/2);
    const percentage = (valuePosition / totalRange) * 100;
    return `${Math.max(0, Math.min(100, percentage))}%`;
  };

  return (
    <div className="min-h-screen bg-gray-50">
       <header className="bg-white shadow-sm sticky top-0 z-40">
        <div className="container mx-auto px-4 h-16 flex items-center">
          <button onClick={onBack} className="p-2 -ml-2 mr-4 text-gray-600 hover:bg-gray-100 rounded-full">
            <ArrowLeft size={24} />
          </button>
          <div className='truncate'>
            <h1 className="text-xl font-bold text-gray-800 truncate">{index.abbreviation}</h1>
            <p className='text-xs text-gray-500 truncate'>{index.name}</p>
          </div>
        </div>
      </header>
      <main className="container mx-auto p-4 md:p-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
            {/* Header */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <h2 className="text-4xl font-bold text-brand-900">{index.name} ({index.abbreviation})</h2>
                <p className="mt-3 text-base text-gray-600 leading-relaxed">{index.definition}</p>
            </div>

            {/* Interactive Gauge */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <div className="flex flex-col md:flex-row justify-between md:items-center mb-5">
                    <h3 className="text-xl font-bold text-gray-800 mb-3 md:mb-0">Thước đo tương tác</h3>
                    <div className="flex items-center gap-2 bg-gray-100 p-1 rounded-full">
                        <button onClick={() => setGender('male')} className={clsx('px-3 py-1 rounded-full text-sm font-semibold', { 'bg-white shadow': gender === 'male', 'text-gray-600': gender !== 'male' })}>Nam</button>
                        <button onClick={() => setGender('female')} className={clsx('px-3 py-1 rounded-full text-sm font-semibold', { 'bg-white shadow': gender === 'female', 'text-gray-600': gender !== 'female' })}>Nữ</button>
                    </div>
                </div>

                <div className='space-y-4'>
                    <div className="relative h-10 w-full bg-gray-100 rounded-full overflow-hidden">
                        <div className="absolute inset-0 flex">
                            <div className="w-1/4 bg-blue-200"></div>
                            <div className="w-1/2 bg-green-200"></div>
                            <div className="w-1/4 bg-red-200"></div>
                        </div>
                         <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 text-xs font-bold text-blue-700">THẤP</div>
                         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-xs font-bold text-green-800">BÌNH THƯỜNG</div>
                         <div className="absolute top-1/2 left-3/4 -translate-x-1/2 -translate-y-1/2 text-xs font-bold text-red-700">CAO</div>
                        
                        <AnimatePresence>
                        {!isNaN(parsedValue) && (
                            <motion.div 
                                className="absolute top-0 h-full flex items-center justify-center"
                                initial={{ left: '0%' }}
                                animate={{ left: getIndicatorPosition() }}
                                transition={{ type: 'spring', stiffness: 100, damping: 15 }}
                            >
                                <div className='relative flex flex-col items-center'>
                                    <span className={clsx('px-3 py-1 text-white rounded-full text-sm font-bold shadow-lg', {
                                        'bg-red-500': status.level === 'high',
                                        'bg-blue-500': status.level === 'low',
                                        'bg-yellow-500': status.level === 'warning',
                                        'bg-green-600': status.level === 'normal',
                                    })}>{status.label}</span>
                                    <div className="w-1 h-3 bg-gray-800"></div>
                                </div>
                            </motion.div>
                        )}
                        </AnimatePresence>
                    </div>
                    <div className="flex items-center gap-3">
                        <input 
                            type="number"
                            value={userValue}
                            onChange={(e) => setUserValue(e.target.value)}
                            placeholder={`Nhập chỉ số của bạn...`}
                            className="flex-grow px-4 py-3 border border-gray-200 rounded-lg text-lg font-bold text-center focus:ring-2 focus:ring-brand-500 focus:outline-none"
                        />
                        <div className='text-lg font-semibold text-gray-500'>{activeReferenceRange?.unit}</div>
                    </div>
                </div>
            </div>

            {/* Details */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                 <Accordion title="Chỉ số Tăng cao báo hiệu điều gì?" defaultOpen>
                    <ul className="list-disc pl-5 space-y-2">
                        {index.causes.high.map((cause, i) => <li key={i}>{cause}</li>)}
                    </ul>
                 </Accordion>
                 <Accordion title="Chỉ số Giảm thấp báo hiệu điều gì?">
                     <ul className="list-disc pl-5 space-y-2">
                        {index.causes.low.map((cause, i) => <li key={i}>{cause}</li>)}
                    </ul>
                 </Accordion>
            </div>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1 space-y-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2"><Info size={20} className="text-brand-500"/> Khoảng tham chiếu</h3>
                <div className="text-sm text-gray-600 space-y-2">
                    <p><strong>Bình thường:</strong> {activeReferenceRange?.range.join(' - ')} {activeReferenceRange?.unit}</p>
                    {activeReferenceRange?.warningRange && <p><strong>Cần lưu ý:</strong> {activeReferenceRange.warningRange.join(' - ')} {activeReferenceRange.unit}</p>}
                    <p className='text-xs text-gray-400 pt-2'>*Khoảng tham chiếu có thể thay đổi tùy thuộc vào phòng xét nghiệm và phương pháp định lượng.</p>
                </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2"><Apple size={20} className="text-green-500"/> Dinh dưỡng & Lối sống</h3>
                <ul className="list-disc pl-5 space-y-2 text-sm text-gray-600">
                    {index.recommendations.diet.map((rec, i) => <li key={i}>{rec}</li>)}
                    {index.recommendations.lifestyle.map((rec, i) => <li key={i}>{rec}</li>)}
                </ul>
            </div>

             <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2"><Repeat size={20} className="text-blue-500"/> Theo dõi & Tái khám</h3>
                <p className="text-sm text-gray-600">{index.recommendations.followUp}</p>
            </div>

            {index.linkedPackage && (
                <div className="bg-brand-50 p-6 rounded-2xl border-2 border-brand-500/50">
                    <FlaskConical size={24} className="text-brand-600 mb-3" />
                    <h3 className="text-base font-bold text-brand-900">{index.linkedPackage.name}</h3>
                    <p className="text-sm text-brand-900/80 mt-1 mb-4">{index.linkedPackage.description}</p>
                    <button className="w-full bg-brand-600 text-white font-semibold py-2.5 rounded-lg hover:bg-brand-700 transition-colors">Xem chi tiết gói</button>
                </div>
            )}
        </div>
      </main>
    </div>
  );
};

export default IndexDetailPage;

