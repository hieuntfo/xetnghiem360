import React, { useState } from 'react';
import { ArrowLeft, MapPin, Clock, Phone } from 'lucide-react';
import { testCenters } from '../data/testCenters';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

interface TestCenterMapProps {
  onBack: () => void;
}

const TestCenterMap: React.FC<TestCenterMapProps> = ({ onBack }) => {
  const [selectedCenter, setSelectedCenter] = useState(testCenters[0]);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <header className="bg-white shadow-sm sticky top-0 z-40">
        <div className="container mx-auto px-4 h-16 flex items-center">
          <button onClick={onBack} className="p-2 -ml-2 mr-4 text-gray-600 hover:bg-gray-100 rounded-full">
            <ArrowLeft size={24} />
          </button>
          <h1 className="text-xl font-bold text-gray-800">Bản đồ điểm xét nghiệm</h1>
        </div>
      </header>

      <main className="container mx-auto p-4 md:p-6 flex-grow grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-1 h-[calc(100vh-150px)] overflow-y-auto space-y-3 pr-2">
            {testCenters.map(center => (
                <div 
                    key={center.id} 
                    onClick={() => setSelectedCenter(center)}
                    className={`bg-white p-4 rounded-xl border-2 cursor-pointer transition-all ${selectedCenter.id === center.id ? 'border-brand-500 shadow-md' : 'border-gray-200 hover:border-brand-300'}`}>
                    <h3 className="font-bold text-brand-900">{center.name}</h3>
                    <p className="text-sm text-gray-600 mt-1 flex items-start gap-2"><MapPin size={16} className='flex-shrink-0 mt-0.5'/> {center.address}</p>
                    <div className="text-xs text-gray-500 mt-2 flex items-center justify-between">
                        <span className="flex items-center gap-1.5"><Clock size={12}/> {center.hours}</span>
                        <span className="flex items-center gap-1.5"><Phone size={12}/> {center.phone}</span>
                    </div>
                </div>
            ))}
        </div>
        <div className="md:col-span-2 rounded-xl h-[calc(100vh-150px)] overflow-hidden z-10">
            <MapContainer center={selectedCenter.position} zoom={15} scrollWheelZoom={false} style={{ height: '100%', width: '100%' }}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {testCenters.map(center => (
                    <Marker key={center.id} position={center.position}>
                        <Popup>
                            <strong>{center.name}</strong><br/>{center.address}
                        </Popup>
                    </Marker>
                ))}
            </MapContainer>
        </div>
      </main>
    </div>
  );
};

export default TestCenterMap;

