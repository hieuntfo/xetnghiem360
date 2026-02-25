import React from 'react';
import { ArrowLeft, ArrowRight, Video, Mic, QrCode } from 'lucide-react';

const events = [
  {
    type: 'Livestream',
    title: 'Talkshow: Giải mã chỉ số mỡ máu & nguy cơ tim mạch',
    expert: 'BS. Nguyễn Văn A, Trưởng khoa Tim mạch, Bệnh viện ABC',
    date: '20:00, Thứ Bảy, 28/12/2024',
    tags: ['Mỡ máu', 'Tim mạch', 'Dinh dưỡng'],
    icon: Video,
    image: 'https://picsum.photos/seed/expert1/600/400'
  },
  {
    type: 'Talkshow Offline',
    title: 'Tầm soát sức khỏe định kỳ: Cần và Đủ',
    expert: 'PGS.TS. Trần Thị B, Chuyên gia Nội tiết',
    date: '9:00, Chủ Nhật, 12/01/2025',
    tags: ['Tầm soát', 'Sức khỏe tổng quát'],
    icon: Mic,
    image: 'https://picsum.photos/seed/expert2/600/400'
  },
];

const EventCard = ({ event }) => (
  <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200 flex flex-col md:flex-row transition-shadow hover:shadow-xl">
    <div className="md:w-1/3 h-48 md:h-auto relative">
      <img src={event.image} alt={event.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
      <div className="absolute top-4 left-4 bg-brand-600 text-white text-xs font-bold uppercase px-3 py-1 rounded-full flex items-center gap-1.5">
        {React.createElement(event.icon, { size: 14 })}
        <span>{event.type}</span>
      </div>
    </div>
    <div className="md:w-2/3 p-6 flex flex-col">
      <h3 className="text-xl font-bold text-gray-900 mb-2">{event.title}</h3>
      <p className="text-sm text-gray-500 mb-4">Với sự tham gia của: <strong>{event.expert}</strong></p>
      <p className="text-sm font-semibold text-gray-700 mb-4">Thời gian: {event.date}</p>
      <div className="flex flex-wrap gap-2 mb-6">
        {event.tags.map(tag => (
          <span key={tag} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full font-medium">{tag}</span>
        ))}
      </div>
      <button className="mt-auto w-full md:w-auto bg-brand-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-brand-700 transition-colors flex items-center justify-center gap-2 self-start">
        <span>Đăng ký & Nhận QR ưu đãi</span>
        <QrCode size={16} />
      </button>
    </div>
  </div>
);

const EventsView: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <button onClick={onBack} className="flex items-center gap-2 text-sm font-semibold text-gray-600 hover:text-brand-600 transition-colors">
            <ArrowLeft size={18} />
            <span>Trang chủ</span>
          </button>
          <div className="text-lg font-bold text-gray-900">Sự kiện & Talkshow</div>
          <div className="w-24"></div> {/* Spacer */}
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900">Lắng nghe chuyên gia, Sống khỏe mỗi ngày</h1>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">Cập nhật những thông tin y khoa chính xác và nhận các ưu đãi độc quyền khi tham gia các sự kiện do Xetnghiem360 tổ chức.</p>
        </div>

        <div className="space-y-8 max-w-4xl mx-auto">
          {events.map((event, index) => (
            <EventCard key={index} event={event} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default EventsView;
