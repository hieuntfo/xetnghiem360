import { AppEvent } from '../types';

export const appEvents: AppEvent[] = [
    {
        id: 1,
        type: 'online',
        title: 'Livestream: Dinh dưỡng cho người tiểu đường',
        date: '20:00 - Thứ Sáu, 28/02/2026',
        location: 'Fanpage Xetnghiem360.vn',
        organizer: 'BS. Nguyễn Thị Mai',
        imageUrl: 'https://picsum.photos/seed/event1/400/250'
    },
    {
        id: 2,
        type: 'offline',
        title: 'Ngày hội Tầm soát Sức khỏe Miễn phí',
        date: '08:00 - Chủ Nhật, 02/03/2026',
        location: 'Nhà thuốc Long Châu, 123 Nguyễn Huệ, Q.1, TPHCM',
        organizer: 'Hệ thống nhà thuốc Long Châu',
        imageUrl: 'https://picsum.photos/seed/event2/400/250'
    },
    {
        id: 3,
        type: 'offline',
        title: 'Giải chạy VnExpress Marathon Ho Chi Minh City Midnight',
        date: '00:00 - Chủ Nhật, 09/03/2026',
        location: 'Quận 1, TP. Hồ Chí Minh',
        organizer: 'VnExpress Marathon',
        imageUrl: 'https://picsum.photos/seed/event3/400/250'
    }
];
