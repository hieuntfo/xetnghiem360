import React, { useState } from 'react';
import { Menu, Search, Phone, ArrowRight, ShieldCheck, Clock, FileText, Sparkles, ScanLine, Microscope, Activity, X, Loader2, Home, Lock, Share2, Download, FileCode, User } from 'lucide-react';
import HeroBentoGrid from './components/HeroBentoGrid';
import HealthChart from './components/HealthChart';
import DecisionTool from './components/DecisionTool';
import EducationalHub from './components/EducationalHub';
import O2OExplanation from './components/O2OExplanation';
import MapCTA from './components/MapCTA';
import IndexDecoder from './components/IndexDecoder';
import ResultLookupPage from './components/ResultLookupPage';
import Dashboard from './components/Dashboard';
import BookingModal from './components/BookingModal';
import PriceListModal from './components/PriceListModal';
import MapView from './components/MapView';
import MarathonView from './components/MarathonView';
import EventsView from './components/EventsView';


type ViewState = 'home' | 'lookup' | 'decoder' | 'dashboard' | 'map' | 'marathon' | 'events';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewState>('home');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  // Modal States
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isPriceListOpen, setIsPriceListOpen] = useState(false);

  // Search State for Home Hero
  const [isSearching, setIsSearching] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const executeQuickSearch = (term: string) => {
    setSearchQuery(term);
    setIsSearching(true);
    // Simulate API delay
    setTimeout(() => {
        setIsSearching(false);
        setShowResult(true);
    }, 1500);
  };

  const handleSearch = () => {
    if (!searchQuery.trim()) return;
    executeQuickSearch(searchQuery);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSearch();
  };

  const closeSearch = () => {
      setShowResult(false);
      setSearchQuery('');
  }

  const handleLogin = () => {
    // Dummy login
    setIsLoggedIn(true);
    setCurrentView('dashboard');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentView('home');
  };

  const openBooking = () => setIsBookingOpen(true);
  const closeBooking = () => setIsBookingOpen(false);
  const openPriceList = () => setIsPriceListOpen(true);
  const closePriceList = () => setIsPriceListOpen(false);


  // --- VIEW ROUTING ---
  if (currentView === 'lookup') {
    return <ResultLookupPage onBack={() => setCurrentView('home')} />;
  }

  if (currentView === 'decoder') {
    return (
      <>
        <IndexDecoder onBack={() => setCurrentView('home')} onBook={openBooking} />
        <BookingModal isOpen={isBookingOpen} onClose={closeBooking} />
      </>
    );
  }

  if (currentView === 'events') {
    return <EventsView onBack={() => setCurrentView('home')} />;
  }

  if (currentView === 'marathon') {
    return <MarathonView onBack={() => setCurrentView('home')} onBook={openBooking} />;
  }

  if (currentView === 'map') {
    return <MapView onBack={() => setCurrentView('home')} />;
  }

  if (currentView === 'dashboard') {
    return (
      <>
        <Dashboard onBack={() => setCurrentView('home')} onLogout={handleLogout} onBook={openBooking} />
        <BookingModal isOpen={isBookingOpen} onClose={closeBooking} />
      </>
    );
  }

  // --- HOME VIEW ---
  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans relative">
      
      {/* GLOBAL MODALS */}
      <BookingModal isOpen={isBookingOpen} onClose={closeBooking} />
      <PriceListModal isOpen={isPriceListOpen} onClose={closePriceList} onBook={openBooking} />

      {/* --- AI SEARCH RESULT POPUP (Keep this as popup since it's a quick interaction) --- */}
      { (isSearching || showResult) && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-gray-900/60 backdrop-blur-sm transition-opacity duration-300">
            <div className="bg-white w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden animate-fadeInUp">
                {/* Header */}
                <div className="bg-gradient-to-r from-brand-600 to-brand-500 p-4 flex justify-between items-center text-white">
                    <div className="flex items-center gap-2">
                        <Sparkles size={18} className="text-yellow-300" fill="currentColor"/>
                        <span className="font-bold tracking-wide text-sm uppercase">AI Trợ lý sức khỏe</span>
                    </div>
                    {!isSearching && (
                         <button onClick={closeSearch} className="hover:bg-white/20 p-1 rounded-full transition-colors">
                            <X size={20} />
                        </button>
                    )}
                </div>

                <div className="p-8 min-h-[300px] flex flex-col justify-center">
                    {isSearching ? (
                        <div className="flex flex-col items-center gap-4 text-center">
                            <Loader2 size={48} className="text-brand-500 animate-spin" />
                            <h3 className="text-xl font-bold text-gray-900">Đang phân tích triệu chứng...</h3>
                            <p className="text-gray-500">Hệ thống đang đối chiếu với cơ sở dữ liệu y khoa.</p>
                        </div>
                    ) : (
                        <div className="space-y-6 animate-fadeIn">
                             <div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">Kết quả cho: "{searchQuery}"</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    Dựa trên mô tả, các triệu chứng này thường liên quan đến <strong>Rối loạn điện giải</strong> hoặc <strong>Thiếu máu thiếu sắt</strong>, đặc biệt nếu bạn thường xuyên vận động hoặc làm việc căng thẳng.
                                </p>
                             </div>

                             <div className="bg-brand-50 rounded-xl p-5 border border-brand-100">
                                <div className="text-xs font-bold text-brand-700 uppercase mb-3 tracking-wider">Gợi ý xét nghiệm ưu tiên</div>
                                <ul className="space-y-3">
                                    <li className="flex items-center justify-between bg-white p-3 rounded-lg border border-brand-100 shadow-sm">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xs">1</div>
                                            <span className="font-semibold text-gray-800">Công thức máu (CBC)</span>
                                        </div>
                                        <ArrowRight size={16} className="text-gray-400" />
                                    </li>
                                    <li className="flex items-center justify-between bg-white p-3 rounded-lg border border-brand-100 shadow-sm">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-bold text-xs">2</div>
                                            <span className="font-semibold text-gray-800">Điện giải đồ (Ion đồ)</span>
                                        </div>
                                        <ArrowRight size={16} className="text-gray-400" />
                                    </li>
                                </ul>
                             </div>

                             <div className="flex gap-3 pt-2">
                                 <button 
                                    onClick={() => { closeSearch(); openBooking(); }}
                                    className="flex-1 bg-brand-600 hover:bg-brand-700 text-white py-3 rounded-lg font-semibold transition-colors"
                                 >
                                     Đặt lịch xét nghiệm
                                 </button>
                                 <button onClick={closeSearch} className="px-6 py-3 rounded-lg border border-gray-200 font-semibold text-gray-600 hover:bg-gray-50 transition-colors">
                                     Đóng
                                 </button>
                             </div>
                             <p className="text-[10px] text-gray-400 text-center mt-2">*Kết quả chỉ mang tính tham khảo, vui lòng tham vấn bác sĩ.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
      )}

      {/* --- HEADER --- */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 transition-all duration-300">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 bg-brand-600 rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-sm">X</div>
            <div className="flex flex-col leading-none">
              <span className="text-lg font-bold tracking-tight text-brand-900">Xetnghiem<span className="text-brand-600">360</span></span>
              <span className="text-[10px] text-gray-500 uppercase tracking-wider font-semibold">Bio-observability Platform</span>
            </div>
          </div>

          <nav className="hidden md:flex gap-8 text-sm font-medium text-gray-600">
            <a href="#" className="hover:text-brand-600 transition-colors">Về chúng tôi</a>
            <a href="#" className="hover:text-brand-600 transition-colors">Gói xét nghiệm</a>
            <a href="#" className="hover:text-brand-600 transition-colors">Thư viện chỉ số</a>
            <a href="#" className="hover:text-brand-600 transition-colors">Blog</a>
          </nav>

          <div className="flex items-center gap-4">
            <button className="p-2 text-gray-500 hover:text-brand-600 md:hidden">
              <Menu size={24} />
            </button>
            <div className="hidden md:flex items-center gap-2 text-sm font-semibold text-gray-600 bg-gray-50 px-3 py-1.5 rounded-full border border-gray-100">
              <Phone size={14} className="text-brand-500" />
              <span>1800 6000</span>
            </div>
            
            {/* LOGIN BUTTON / USER PROFILE */}
            {isLoggedIn ? (
                <button 
                  onClick={() => setCurrentView('dashboard')}
                  className="hidden md:flex items-center gap-3 bg-white border border-gray-200 hover:border-brand-300 hover:shadow-sm px-2 py-1.5 rounded-full transition-all group"
                >
                   <div className="w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center font-bold text-xs">
                     A
                   </div>
                   <span className="text-sm font-bold text-gray-700 pr-2 group-hover:text-brand-600">An Nguyễn</span>
                </button>
            ) : (
                <button 
                  onClick={handleLogin}
                  className="hidden md:flex items-center gap-2 bg-gray-900 hover:bg-black text-white px-5 py-2 rounded-lg font-medium text-sm transition-all shadow-md"
                >
                  <User size={16} /> Đăng nhập
                </button>
            )}
          </div>
        </div>
      </header>

      {/* --- HERO SECTION: SEARCH & DISCOVERY --- */}
      <section className="relative pt-16 pb-24 overflow-hidden bg-gradient-to-b from-brand-50/50 to-white">
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            
            {/* Left Column: Search & Action */}
            <div className="lg:w-1/2 space-y-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white text-brand-700 text-xs font-bold uppercase tracking-wider border border-brand-100 shadow-sm">
                <Sparkles size={14} className="text-amber-500" fill="currentColor" />
                AI-Powered Assistant
              </div>
              
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-[1.15]">
                  Cơ thể bạn đang muốn <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-accent-500">nói gì?</span>
                </h1>
                <p className="text-lg text-gray-500 max-w-lg leading-relaxed font-light">
                  Đừng để những con số làm bạn hoang mang. Nhập triệu chứng hoặc mã xét nghiệm để được giải mã ngay lập tức.
                </p>
              </div>

              {/* AI SEARCH BAR */}
              <div className="relative group w-full max-w-xl">
                <div className="absolute -inset-1 bg-gradient-to-r from-brand-400 to-accent-400 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative flex items-center bg-white rounded-2xl shadow-xl border border-gray-100 p-2">
                  <div className="pl-4 pr-3 text-brand-500">
                    <Search size={24} strokeWidth={2.5} />
                  </div>
                  <input 
                    type="text" 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onKeyDown={handleKeyDown}
                    className="flex-1 h-12 bg-transparent border-none outline-none text-gray-700 placeholder:text-gray-400 text-base w-full"
                    placeholder="Nhập triệu chứng (VD: Đau lưng, mệt mỏi)..." 
                  />
                  <button 
                    onClick={handleSearch}
                    className="hidden sm:flex bg-brand-600 hover:bg-brand-700 text-white h-12 px-6 rounded-xl font-semibold items-center justify-center transition-colors"
                  >
                    Tìm kiếm
                  </button>
                  <button onClick={handleSearch} className="sm:hidden bg-brand-600 text-white p-3 rounded-xl">
                    <ArrowRight size={20} />
                  </button>
                </div>
              </div>

              {/* QUICK ACCESS CARDS */}
              <div className="grid grid-cols-2 gap-4 max-w-xl">
                <button 
                  onClick={() => setCurrentView('lookup')}
                  className="flex items-start gap-3 p-4 rounded-xl border border-gray-200 bg-white hover:border-brand-200 hover:shadow-md transition-all group text-left"
                >
                  <div className="bg-blue-50 p-2.5 rounded-lg text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <ScanLine size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-sm">Tra cứu kết quả</h3>
                    <p className="text-xs text-gray-500 mt-1">Đã có mã hồ sơ?</p>
                  </div>
                </button>

                <button 
                  onClick={() => setCurrentView('decoder')}
                  className="flex items-start gap-3 p-4 rounded-xl border border-gray-200 bg-white hover:border-accent-200 hover:shadow-md transition-all group text-left"
                >
                  <div className="bg-emerald-50 p-2.5 rounded-lg text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                    <Microscope size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-sm">Giải mã chỉ số</h3>
                    <p className="text-xs text-gray-500 mt-1">Hiểu ý nghĩa kết quả</p>
                  </div>
                </button>
              </div>

              {/* POPULAR TAGS (UPDATED) */}
              <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-gray-400 pt-2 max-w-xl">
                <span>Triệu chứng phổ biến:</span>
                <span 
                    onClick={() => executeQuickSearch('Đau lưng')}
                    className="px-3 py-1 bg-gray-100 rounded-full text-gray-600 cursor-pointer hover:bg-brand-100 hover:text-brand-600 transition-colors"
                >
                    Đau lưng
                </span>
                <span 
                    onClick={() => executeQuickSearch('Mệt mỏi kéo dài')}
                    className="px-3 py-1 bg-gray-100 rounded-full text-gray-600 cursor-pointer hover:bg-brand-100 hover:text-brand-600 transition-colors"
                >
                    Mệt mỏi kéo dài
                </span>
                <span 
                     onClick={() => executeQuickSearch('Căng thẳng/Stress')}
                     className="px-3 py-1 bg-gray-100 rounded-full text-gray-600 cursor-pointer hover:bg-brand-100 hover:text-brand-600 transition-colors"
                >
                    Căng thẳng
                </span>
                <span 
                     onClick={() => executeQuickSearch('Mất ngủ')}
                     className="px-3 py-1 bg-gray-100 rounded-full text-gray-600 cursor-pointer hover:bg-brand-100 hover:text-brand-600 transition-colors"
                >
                    Mất ngủ
                </span>
              </div>
            </div>
            
            {/* Right Column: Bento Grid Imagery */}
            <HeroBentoGrid />
          </div>
        </div>
      </section>

      {/* --- DECISION TOOL SECTION (Interactive Map - MOVED UP) --- */}
      <section className="py-20 bg-gray-50 border-t border-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
             <div className="text-center mb-10">
                <span className="text-brand-600 font-bold tracking-wider text-sm uppercase mb-2 block">Bản đồ quyết định</span>
                <h2 className="text-[40px] leading-tight font-bold text-gray-900">Kiểm tra nhanh sức khỏe</h2>
                <p className="text-gray-500 mt-2">Chọn nhanh các yếu tố bên dưới để nhận gợi ý y khoa tức thì.</p>
             </div>
            <DecisionTool onBook={openBooking} />
          </div>
        </div>
      </section>

      {/* --- EDUCATIONAL HUB SECTION --- */}
      <EducationalHub />
      
      {/* --- O2O EXPLANATION --- */}
      <O2OExplanation onOpenEvents={() => setCurrentView('events')} onOpenMarathon={() => setCurrentView('marathon')} />

      {/* --- MAP CTA --- */}
      <MapCTA onOpenMap={() => setCurrentView('map')} />

      {/* --- THE DATA LOCKER (Hồ sơ sức khỏe số) --- */}
      <section className="py-24 bg-white border-t border-gray-100 relative overflow-hidden">
        {/* Background decorations for "Locker/Security" vibe */}
        <div className="absolute right-0 top-0 w-1/3 h-full bg-gray-50/50 skew-x-12 translate-x-20 -z-10"></div>

        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            {/* Left: Dashboard Visual */}
            <div className="md:w-1/2 order-2 md:order-1 relative">
                {/* Main Chart Card */}
                <div className="h-96 w-full shadow-2xl rounded-2xl overflow-hidden border border-gray-200 bg-white p-2 relative z-10">
                   <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-500 to-accent-500"></div>
                   <HealthChart />
                </div>
                {/* Floating "FHIR Ready" Badge */}
                <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-xl border border-gray-100 z-20 flex items-center gap-3 animate-bounce-slow hidden md:flex">
                    <div className="bg-orange-100 p-2 rounded-lg text-orange-600">
                        <FileCode size={24} />
                    </div>
                    <div>
                        <div className="text-[10px] font-bold text-gray-400 uppercase">Standard</div>
                        <div className="text-sm font-bold text-gray-900">FHIR HL7 Ready</div>
                    </div>
                </div>
            </div>

            {/* Right: Content */}
            <div className="md:w-1/2 order-1 md:order-2 space-y-8">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 text-brand-700 text-xs font-bold uppercase tracking-wider mb-4">
                   <Lock size={14} /> The Data Locker
                </div>
                <h2 className="text-[40px] leading-tight font-bold text-gray-900 mb-4">
                  Hồ sơ sức khỏe <br/>
                  <span className="text-brand-600">trọn đời của bạn.</span>
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Không còn nỗi lo mất giấy tờ xét nghiệm. Chúng tôi số hóa và lưu trữ lịch sử sức khỏe của bạn trên nền tảng đám mây bảo mật tuyệt đối.
                </p>
              </div>

              <div className="space-y-6">
                {/* Feature 1 */}
                <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 flex-shrink-0">
                        <Activity size={24} />
                    </div>
                    <div>
                        <h4 className="font-bold text-gray-900 text-lg">Longitudinal Tracking</h4>
                        <p className="text-gray-500">Biểu đồ xu hướng sức khỏe (đường huyết, mỡ máu...) qua từng năm, giúp phát hiện sớm bất thường.</p>
                    </div>
                </div>

                {/* Feature 2 */}
                <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600 flex-shrink-0">
                        <Share2 size={24} />
                    </div>
                    <div>
                        <h4 className="font-bold text-gray-900 text-lg">Liên thông y tế (FHIR)</h4>
                        <p className="text-gray-500 mb-3">Dữ liệu chuẩn hóa quốc tế. Mang hồ sơ đi khám tại bất kỳ bệnh viện nào.</p>
                        <button className="flex items-center gap-2 text-sm font-bold text-brand-600 border border-brand-200 bg-brand-50 px-4 py-2 rounded-lg hover:bg-brand-100 transition-colors">
                            <Download size={16} /> Tải hồ sơ chuẩn y tế
                        </button>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* --- FOOTER --- */}
      <footer className="bg-gray-900 text-gray-300 py-16 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-gray-800 pb-12 mb-12">
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-brand-500 rounded flex items-center justify-center text-white font-bold text-xl">X</div>
                <span className="text-2xl font-bold text-white">Xetnghiem<span className="text-brand-500">360</span></span>
              </div>
              <p className="text-sm text-gray-400 mb-6 leading-relaxed">
                Nền tảng giáo dục và quản trị sức khỏe chủ động. <br/>
                Kết hợp uy tín nội dung từ VnExpress & năng lực vận hành bởi Long Châu.
              </p>
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-brand-600 transition-colors cursor-pointer">f</div>
                <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-brand-600 transition-colors cursor-pointer">in</div>
                <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-brand-600 transition-colors cursor-pointer">yt</div>
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-6">Về chúng tôi</h4>
              <ul className="space-y-4 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Câu chuyện thương hiệu</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Đội ngũ cố vấn y khoa</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Tuyển dụng</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Chính sách bảo mật</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6">Dịch vụ</h4>
              <ul className="space-y-4 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Xét nghiệm tại nhà</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Khám sức khỏe doanh nghiệp</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Gói tầm soát ung thư</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Xét nghiệm NIPT</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6">Liên hệ</h4>
              <ul className="space-y-4 text-sm">
                <li className="flex items-center gap-3">
                  <Phone size={16} className="text-brand-500" /> <span>Hotline: 1800 6000</span>
                </li>
                <li className="flex items-center gap-3">
                   <div className="w-4 h-4 rounded-full bg-green-500"></div> <span>Hỗ trợ trực tuyến 24/7</span>
                </li>
                <li>Email: hotro@xetnghiem360.vn</li>
                <li>Hà Nội: Tòa nhà FPT, Cầu Giấy</li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 gap-4">
            <div>
              © 2024 Xetnghiem360. All rights reserved.
            </div>
            <div className="text-right">
              Nội dung trên website chỉ mang tính chất tham khảo, không thay thế chẩn đoán hoặc chỉ định của bác sĩ.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;