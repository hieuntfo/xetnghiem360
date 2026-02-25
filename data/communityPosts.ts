import { CommunityPost } from '../types';

export const communityPosts: CommunityPost[] = [
  {
    id: 1,
    author: 'An Nguyễn',
    authorAvatar: 'AN',
    tag: 'Hỏi đáp chuyên gia',
    tagColor: 'blue',
    title: 'Chỉ số mỡ máu (Cholesterol) cao nên ăn gì và kiêng gì?',
    excerpt: 'Chào mọi người, em mới đi xét nghiệm tổng quát về và thấy chỉ số Cholesterol hơi cao. Bác sĩ có dặn dò chung nhưng em muốn hỏi kinh nghiệm thực tế từ mọi người...',
    stats: { likes: 128, comments: 42, views: 2400 },
    createdAt: '2 giờ trước'
  },
  {
    id: 2,
    author: 'Trần Bình',
    authorAvatar: 'TB',
    tag: 'Chia sẻ kinh nghiệm',
    tagColor: 'green',
    title: 'Hành trình giảm men gan của mình sau 3 tháng',
    excerpt: 'Mình từng là người có chỉ số men gan (AST, ALT) cao ngất ngưởng do thói quen sinh hoạt. Sau 3 tháng kiên trì thay đổi, mình đã đưa được nó về mức an toàn...',
    stats: { likes: 350, comments: 89, views: 5600 },
    createdAt: 'Hôm qua'
  },
  {
    id: 3,
    author: 'Minh Hằng (Dược sĩ)',
    authorAvatar: 'MH',
    tag: 'Kiến thức y khoa',
    tagColor: 'purple',
    title: 'Hiểu đúng về chỉ số Acid Uric và bệnh Gout',
    excerpt: 'Nhiều người thường nhầm lẫn giữa việc có chỉ số Acid Uric cao và chắc chắn bị bệnh Gout. Bài viết này sẽ giúp các bạn phân biệt rõ ràng và có hướng phòng ngừa...',
    stats: { likes: 512, comments: 112, views: 8900 },
    createdAt: '3 ngày trước'
  }
];
