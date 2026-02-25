import React, { useState } from 'react';
import { ArrowLeft, Search, MapPin, Clock, Phone, ListFilter, Navigation, Microscope, Home, Zap, PhoneCall, Calendar } from 'lucide-react';

const allLocations = [
  { id: 1, name: 'Nhà thuốc FPT Long Châu #123', address: '123 Đường ABC, Phường XYZ, Quận 1, TP. HCM', distance: '1.2km', open: '7:00 - 22:00', phone: '1800 6928', services: ['booth', 'at_home'], crowdLevel: 'low' },
  { id: 2, name: 'Phòng xét nghiệm LabPro', address: '234 Đường GHI, Phường JKL, Quận 1, TP. HCM', distance: '1.8km', open: '8:00 - 17:00', phone: '1900 1234', services: ['lab'], crowdLevel: 'medium' },
  { id: 3, name: 'Nhà thuốc FPT Long Châu #456', address: '456 Đường DEF, Phường UVW, Quận 3, TP. HCM', distance: '2.5km', open: '8:00 - 21:00', phone: '1800 6928', services: ['booth'], crowdLevel: 'high' },
  { id: 4, name: 'Nhà thuốc FPT Long Châu #789', address: '789 Đường GHI, Phường JKL, Quận 5, TP. HCM', distance: '4.1km', open: '7:30 - 22:00', phone: '1800 6928', services: ['at_home'], crowdLevel: 'low' },
  { id: 5, name: 'Nhà thuốc FPT Long Châu #101', address: '101 Đường MNO, Phường PQR, Quận 7, TP. HCM', distance: '5.0km', open: '7:00 - 22:00', phone: '1800 6928', services: ['booth', 'at_home'], crowdLevel: 'medium' },
];

const crowdInfo = {
    low: { text: 'Vắng', color: 'text-green-600', bgColor: 'bg-green-100' },
    medium: { text: 'Trung bình', color: 'text-amber-600', bgColor: 'bg-amber-100' },
    high: { text: 'Đông', color: 'text-red-600', bgColor: 'bg-red-100' },
}

const LocationCard = ({ location, active }) => (
  <div className={`p-4 rounded-xl border ${active ? 'bg-brand-50 border-brand-300 shadow-md' : 'bg-white border-gray-200'} cursor-pointer hover:border-brand-300 hover:bg-brand-50 transition-all`}>
    <div className="flex justify-between items-start mb-2">
        <h3 className="font-bold text-gray-900 pr-4">{location.name}</h3>
        <span className={`text-xs font-bold ${active ? 'text-brand-600' : 'text-gray-500'} whitespace-nowrap`}>{location.distance}</span>
    </div>
    <p className="text-xs text-gray-500 mt-1 flex items-center gap-1.5"><MapPin size={12} /> {location.address}</p>
    <div className="flex items-center justify-between text-xs text-gray-500 mt-3">
      <span className="flex items-center gap-1.5"><Clock size={12} /> {location.open}</span>
      <span className={`flex items-center gap-1.5 font-semibold px-2 py-0.5 rounded-full ${crowdInfo[location.crowdLevel].bgColor} ${crowdInfo[location.crowdLevel].color}`}>
          <div className={`w-1.5 h-1.5 rounded-full ${crowdInfo[location.crowdLevel].bgColor.replace('100', '500')} mr-1`}></div>
          {crowdInfo[location.crowdLevel].text}
      </span>
    </div>
    <div className="mt-4 pt-4 border-t border-gray-100 flex items-center gap-2">
        <button className="flex-1 flex items-center justify-center gap-2 bg-brand-50 text-brand-600 h-10 rounded-lg text-sm font-semibold hover:bg-brand-100 transition-colors">
            <PhoneCall size={16} />
            <span>Gọi điện</span>
        </button>
        <button className="flex-1 flex items-center justify-center gap-2 bg-brand-600 text-white h-10 rounded-lg text-sm font-semibold hover:bg-brand-700 transition-colors">
            <Calendar size={16} />
            <span>Đặt lịch</span>
        </button>
    </div>
  </div>
);

const FilterButton = ({ icon, label, active, onClick }) => (
    <button onClick={onClick} className={`px-4 py-2 flex items-center gap-2 rounded-lg text-sm font-semibold border transition-colors ${active ? 'bg-brand-600 text-white border-brand-600' : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-100'}`}>
        {React.createElement(icon, { size: 16 })}
        <span>{label}</span>
    </button>
)

const MapView: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredLocations = allLocations.filter(loc => {
      if (activeFilter === 'all') return true;
      return loc.services.includes(activeFilter);
  });

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <button onClick={onBack} className="flex items-center gap-2 text-sm font-semibold text-gray-600 hover:text-brand-600 transition-colors">
            <ArrowLeft size={18} />
            <span>Trang chủ</span>
          </button>
          <div className="text-lg font-bold text-gray-900">Tìm điểm xét nghiệm</div>
          <div className="w-24"></div> {/* Spacer */}
        </div>
      </header>

      <main className="flex-grow flex flex-col md:flex-row">
        {/* Left Panel: Search, Filters, List */}
        <div className="w-full md:w-[450px] bg-white border-r border-gray-200 flex-shrink-0 flex flex-col">
          <div className="p-4 border-b border-gray-200 space-y-4">
            <div className="relative">
              <Search size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input type="text" placeholder="Tìm kiếm theo địa chỉ, quận..." className="w-full h-12 pl-10 pr-4 bg-gray-100 border-transparent rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition" />
            </div>
            <div className="flex items-center gap-2">
                <FilterButton icon={ListFilter} label="Tất cả" active={activeFilter === 'all'} onClick={() => setActiveFilter('all')} />
                <FilterButton icon={Microscope} label="Chuyên sâu" active={activeFilter === 'lab'} onClick={() => setActiveFilter('lab')} />
                <FilterButton icon={Zap} label="Đo nhanh" active={activeFilter === 'booth'} onClick={() => setActiveFilter('booth')} />
                <FilterButton icon={Home} label="Tại nhà" active={activeFilter === 'at_home'} onClick={() => setActiveFilter('at_home')} />
            </div>
          </div>
          <div className="p-4 border-b border-gray-200">
             <span className="text-sm font-semibold text-gray-700">{filteredLocations.length} kết quả gần bạn</span>
          </div>
          <div className="flex-grow overflow-y-auto p-4 space-y-3 bg-gray-50/50">
            {filteredLocations.map((loc, index) => (
              <LocationCard key={loc.id} location={loc} active={index === 0} />
            ))}
          </div>
        </div>

        {/* Right Panel: Map */}
        <div className="flex-grow bg-gray-200 relative">
          <div className="absolute inset-0 bg-gray-300 flex items-center justify-center text-gray-500">
            <img src="https://i.imgur.com/sCbrtWJ.png" alt="Map background" className="absolute inset-0 w-full h-full object-cover" referrerPolicy="no-referrer" />
            <div className="absolute inset-0 bg-gradient-to-t from-white/50 to-transparent"></div>
             <span className="z-10 text-lg font-semibold p-4 bg-white/80 rounded-lg backdrop-blur-sm shadow-md">Map Area</span>
          </div>
           <button className="absolute bottom-6 right-6 w-14 h-14 bg-brand-600 rounded-full flex items-center justify-center text-white shadow-lg hover:bg-brand-700 transition-transform hover:scale-110">
              <Navigation size={24} />
            </button>
        </div>
      </main>
    </div>
  );
};

export default MapView;
