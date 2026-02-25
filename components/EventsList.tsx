import React from 'react';
import { ArrowLeft, Calendar, MapPin, Users } from 'lucide-react';
import { appEvents } from '../data/events';

interface EventsListProps {
  onBack: () => void;
}

const EventsList: React.FC<EventsListProps> = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm sticky top-0 z-40">
        <div className="container mx-auto px-4 h-16 flex items-center">
          <button onClick={onBack} className="p-2 -ml-2 mr-4 text-gray-600 hover:bg-gray-100 rounded-full">
            <ArrowLeft size={24} />
          </button>
          <h1 className="text-xl font-bold text-gray-800">Sự kiện Sức khỏe</h1>
        </div>
      </header>

      <main className="container mx-auto p-4 md:p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {appEvents.map(event => (
            <div key={event.id} className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden group">
              <img src={event.imageUrl} alt={event.title} className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300" referrerPolicy="no-referrer" />
              <div className="p-5">
                <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${event.type === 'online' ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'}`}>
                  {event.type === 'online' ? 'Online' : 'Offline'}
                </span>
                <h2 className="text-md font-bold text-gray-800 mt-2 mb-2 truncate">{event.title}</h2>
                <div className="text-sm text-gray-500 space-y-1.5">
                    <p className="flex items-center gap-2"><Calendar size={14} /> {event.date}</p>
                    <p className="flex items-center gap-2"><MapPin size={14} /> {event.location}</p>
                    <p className="flex items-center gap-2"><Users size={14} /> {event.organizer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default EventsList;
