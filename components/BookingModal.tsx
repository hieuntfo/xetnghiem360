import React, { useState } from 'react';
import { X, User, Phone, MapPin, Calendar, Clock, CheckCircle } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState<'form' | 'success'>('form');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
        setStep('success');
    }, 500);
  };

  const handleClose = () => {
      setStep('form');
      onClose();
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-gray-900/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden animate-fadeInUp relative">
        <button onClick={handleClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 z-10">
          <X size={24} />
        </button>

        {step === 'form' ? (
            <div className="p-8">
                <div className="text-center mb-6">
                    <h2 className="text-2xl font-bold text-gray-900">Đặt lịch xét nghiệm</h2>
                    <p className="text-gray-500 text-sm mt-1">Đội ngũ điều dưỡng sẽ liên hệ xác nhận trong 15 phút.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Họ và tên</label>
                        <div className="relative">
                            <User size={18} className="absolute left-3 top-3 text-gray-400" />
                            <input type="text" required className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-500 outline-none" placeholder="VD: Nguyễn Văn A" />
                        </div>
                    </div>

                    <div>
                        <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Số điện thoại</label>
                        <div className="relative">
                            <Phone size={18} className="absolute left-3 top-3 text-gray-400" />
                            <input type="tel" required className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-500 outline-none" placeholder="VD: 0912..." />
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Ngày mong muốn</label>
                            <div className="relative">
                                <Calendar size={18} className="absolute left-3 top-3 text-gray-400" />
                                <input type="date" required className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-500 outline-none" />
                            </div>
                        </div>
                         <div>
                            <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Giờ (Dự kiến)</label>
                            <div className="relative">
                                <Clock size={18} className="absolute left-3 top-3 text-gray-400" />
                                <select className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-500 outline-none bg-white">
                                    <option>07:00 - 09:00</option>
                                    <option>09:00 - 11:00</option>
                                    <option>13:00 - 15:00</option>
                                    <option>15:00 - 17:00</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div>
                        <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Địa điểm lấy mẫu</label>
                         <div className="relative">
                            <MapPin size={18} className="absolute left-3 top-3 text-gray-400" />
                            <textarea className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-500 outline-none min-h-[80px]" placeholder="Địa chỉ nhà riêng hoặc ghi chú thêm..." ></textarea>
                        </div>
                    </div>

                    <div className="pt-2">
                        <button type="submit" className="w-full bg-brand-600 hover:bg-brand-700 text-white font-bold py-3.5 rounded-xl shadow-lg transition-colors">
                            Xác nhận đặt lịch
                        </button>
                        <p className="text-[10px] text-gray-400 text-center mt-3">
                            Bằng việc gửi thông tin, bạn đồng ý với chính sách bảo mật của Xetnghiem360.
                        </p>
                    </div>
                </form>
            </div>
        ) : (
            <div className="p-12 text-center flex flex-col items-center justify-center min-h-[400px]">
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6 animate-bounce-slow">
                    <CheckCircle size={48} />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Đăng ký thành công!</h2>
                <p className="text-gray-600 mb-8 max-w-xs">
                    Cảm ơn bạn đã tin tưởng. Tổng đài viên sẽ liên hệ lại với bạn trong giây lát để xác nhận lịch hẹn.
                </p>
                <button onClick={handleClose} className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold py-3 px-8 rounded-xl transition-colors">
                    Đóng
                </button>
            </div>
        )}
      </div>
    </div>
  );
};

export default BookingModal;