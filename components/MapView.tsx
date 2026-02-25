import React from 'react';
import { ArrowLeft, Search, MapPin, Clock, Phone, ListFilter, Navigation } from 'lucide-react';

const locations = [
  { id: 1, name: 'Nhà thuốc FPT Long Châu #123', address: '123 Đường ABC, Phường XYZ, Quận 1, TP. HCM', distance: '1.2km', open: '7:00 - 22:00', phone: '1800 6928', services: ['Đo tại booth', 'Lấy máu tại nhà'] },
  { id: 2, name: 'Nhà thuốc FPT Long Châu #456', address: '456 Đường DEF, Phường UVW, Quận 3, TP. HCM', distance: '2.5km', open: '8:00 - 21:00', phone: '1800 6928', services: ['Đo tại booth'] },
  { id: 3, name: 'Nhà thuốc FPT Long Châu #789', address: '789 Đường GHI, Phường JKL, Quận 5, TP. HCM', distance: '4.1km', open: '7:30 - 22:00', phone: '1800 6928', services: ['Lấy máu tại nhà'] },
  { id: 4, name: 'Nhà thuốc FPT Long Châu #101', address: '101 Đường MNO, Phường PQR, Quận 7, TP. HCM', distance: '5.0km', open: '7:00 - 22:00', phone: '1800 6928', services: ['Đo tại booth', 'Lấy máu tại nhà'] },
];

const LocationCard = ({ location, active }) => (
  <div className={`p-4 rounded-xl border ${active ? 'bg-brand-50 border-brand-300' : 'bg-white border-gray-200'} cursor-pointer hover:border-brand-300 hover:bg-brand-50 transition-all`}>
    <div className="flex justify-between items-start">
      <h3 className="font-bold text-gray-900 pr-4">{location.name}</h3>
      <span className={`text-xs font-bold ${active ? 'text-brand-600' : 'text-gray-500'} whitespace-nowrap`}>{location.distance}</span>
    </div>
    <p className="text-xs text-gray-500 mt-1 flex items-center gap-1.5"><MapPin size={12} /> {location.address}</p>
    <div className="flex items-center gap-4 text-xs text-gray-500 mt-3">
      <span className="flex items-center gap-1.5"><Clock size={12} /> {location.open}</span>
      <span className="flex items-center gap-1.5"><Phone size={12} /> {location.phone}</span>
    </div>
    <div className="mt-3 flex flex-wrap gap-2">
      {location.services.map(service => (
        <span key={service} className={`text-[10px] font-medium px-2 py-0.5 rounded-full ${service === 'Đo tại booth' ? 'bg-blue-100 text-blue-700' : 'bg-emerald-100 text-emerald-700'}`}>{service}</span>
      ))}
    </div>
  </div>
);

const MapView: React.FC<{ onBack: () => void }> = ({ onBack }) => {
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
          <div className="p-4 border-b border-gray-200">
            <div className="relative">
              <Search size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input type="text" placeholder="Tìm kiếm theo địa chỉ, quận..." className="w-full h-12 pl-10 pr-4 bg-gray-100 border-transparent rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition" />
            </div>
            <div className="mt-4 flex items-center justify-between">
              <span className="text-sm font-semibold text-gray-700">4 kết quả gần bạn</span>
              <button className="flex items-center gap-2 text-sm text-brand-600 font-semibold p-2 hover:bg-brand-50 rounded-lg">
                <ListFilter size={16} />
                <span>Lọc dịch vụ</span>
              </button>
            </div>
          </div>
          <div className="flex-grow overflow-y-auto p-4 space-y-3">
            {locations.map((loc, index) => (
              <LocationCard key={loc.id} location={loc} active={index === 0} />
            ))}
          </div>
        </div>

        {/* Right Panel: Map */}
        <div className="flex-grow bg-gray-200 relative">
          {/* Placeholder for actual map library */}
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
