import React, { useState, useMemo } from 'react';
import { medicalIndices } from '../data/medicalIndices';
import { MedicalIndex, BodySystem } from '../types';
import { ArrowLeft, Search, Heart, Shield, Droplets, GitMerge, Activity, Bone } from 'lucide-react';

const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

const bodySystemIcons: Record<BodySystem, React.ReactNode> = {
    'Gan': <Activity size={24} className="text-red-500" />,
    'Thận': <Shield size={24} className="text-blue-500" />,
    'Tim mạch': <Heart size={24} className="text-pink-500" />,
    'Nội tiết tố': <GitMerge size={24} className="text-purple-500" />,
    'Máu': <Droplets size={24} className="text-red-700" />,
    'Tiêu hoá': <Bone size={24} className="text-yellow-600" />
};

const allBodySystems: BodySystem[] = ['Gan', 'Thận', 'Tim mạch', 'Nội tiết tố', 'Máu', 'Tiêu hoá'];

interface IndexBrowserProps {
  onBack: () => void;
  onSelectIndex: (indexId: string) => void;
}

const IndexBrowser: React.FC<IndexBrowserProps> = ({ onBack, onSelectIndex }) => {
  const [filterType, setFilterType] = useState<'az' | 'system'>('az');
  const [selectedLetter, setSelectedLetter] = useState<string>('A');
  const [selectedSystem, setSelectedSystem] = useState<BodySystem | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredIndices = useMemo(() => {
    let indices = medicalIndices;

    if (searchTerm) {
        indices = indices.filter(index => 
            index.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            index.abbreviation.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }

    if (filterType === 'az') {
        return indices.filter(index => index.abbreviation.toUpperCase().startsWith(selectedLetter));
    } 
    if (filterType === 'system' && selectedSystem) {
        return indices.filter(index => index.bodySystems.includes(selectedSystem));
    }

    return indices;
  }, [selectedLetter, selectedSystem, filterType, searchTerm]);

  const handleSystemSelect = (system: BodySystem) => {
    setSelectedSystem(system);
    setFilterType('system');
  }

  const handleLetterSelect = (letter: string) => {
    setSelectedLetter(letter);
    setFilterType('az');
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm sticky top-0 z-40">
        <div className="container mx-auto px-4 h-16 flex items-center">
          <button onClick={onBack} className="p-2 -ml-2 mr-4 text-gray-600 hover:bg-gray-100 rounded-full">
            <ArrowLeft size={24} />
          </button>
          <h1 className="text-xl font-bold text-gray-800">Thư viện chỉ số xét nghiệm</h1>
        </div>
      </header>

      <main className="container mx-auto p-4 md:p-6">
        {/* Search and Filter Toggle */}
        <div className="mb-6">
            <div className="relative mb-4">
                <Search size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                <input 
                    type="text"
                    placeholder="Tìm tên chỉ số (ví dụ: ALT, Glucose)..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-full bg-white text-base focus:ring-2 focus:ring-brand-500 focus:outline-none transition"
                />
            </div>

            <div className="flex items-center justify-center bg-gray-100 p-1 rounded-full w-full max-w-sm mx-auto">
                <button 
                    onClick={() => setFilterType('az')}
                    className={`px-4 py-2 w-1/2 rounded-full font-semibold text-sm transition-all duration-300 ${filterType === 'az' ? 'bg-white shadow' : 'text-gray-600'}`}>
                    Tìm theo A-Z
                </button>
                <button 
                    onClick={() => setFilterType('system')}
                    className={`px-4 py-2 w-1/2 rounded-full font-semibold text-sm transition-all duration-300 ${filterType === 'system' ? 'bg-white shadow' : 'text-gray-600'}`}>
                    Tìm theo Nhóm cơ quan
                </button>
            </div>
        </div>

        {/* A-Z Filter */}
        {filterType === 'az' && (
            <div className="flex flex-wrap justify-center gap-1 md:gap-2 mb-6 bg-white p-3 rounded-xl shadow-sm border">
                {alphabet.map(letter => (
                    <button 
                        key={letter}
                        onClick={() => handleLetterSelect(letter)}
                        className={`w-8 h-8 md:w-9 md:h-9 rounded-md text-sm font-bold transition-colors ${selectedLetter === letter ? 'bg-brand-600 text-white' : 'text-gray-600 hover:bg-brand-50'}`}>
                        {letter}
                    </button>
                ))}
            </div>
        )}

        {/* Body System Filter */}
        {filterType === 'system' && (
             <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4 mb-6">
                {allBodySystems.map(system => (
                    <button 
                        key={system}
                        onClick={() => handleSystemSelect(system)}
                        className={`flex flex-col items-center justify-center gap-2 p-4 bg-white rounded-xl border-2 transition-all duration-200 text-center ${selectedSystem === system ? 'border-brand-500 shadow-lg scale-105' : 'border-gray-100 hover:border-gray-200 hover:shadow-md'}`}>
                        {bodySystemIcons[system]}
                        <span className="font-semibold text-sm text-gray-700">{system}</span>
                    </button>
                ))}
            </div>
        )}

        {/* Results List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredIndices.length > 0 ? filteredIndices.map(index => (
                <div key={index.id} 
                    onClick={() => onSelectIndex(index.id)}
                    className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm hover:shadow-lg hover:border-brand-500 cursor-pointer transition-all duration-200">
                    <div className="flex justify-between items-start">
                        <span className="text-2xl font-bold text-brand-900">{index.abbreviation}</span>
                        <div className="text-right">
                            {index.bodySystems.map(bs => (
                                <span key={bs} className="text-[10px] bg-gray-100 text-gray-600 font-semibold px-2 py-0.5 rounded-full ml-1">{bs}</span>
                            ))}
                        </div>
                    </div>
                    <p className="text-sm text-gray-600 mt-1 font-medium">{index.name}</p>
                </div>
            )) : (
                <div className="md:col-span-2 lg:col-span-3 text-center py-12 bg-white rounded-xl border border-dashed">
                    <p className="text-gray-500">Không tìm thấy chỉ số nào phù hợp.</p>
                </div>
            )}
        </div>
      </main>
    </div>
  );
};

export default IndexBrowser;
