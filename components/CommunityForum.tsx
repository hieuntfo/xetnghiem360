import React from 'react';
import { ArrowLeft, MessageSquare, ThumbsUp, Eye } from 'lucide-react';
import { communityPosts } from '../data/communityPosts';

interface CommunityForumProps {
  onBack: () => void;
}

const tagColors: { [key: string]: string } = {
    blue: 'bg-blue-100 text-blue-800',
    green: 'bg-green-100 text-green-800',
    purple: 'bg-purple-100 text-purple-800',
};

const CommunityForum: React.FC<CommunityForumProps> = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm sticky top-0 z-40">
        <div className="container mx-auto px-4 h-16 flex items-center">
          <button onClick={onBack} className="p-2 -ml-2 mr-4 text-gray-600 hover:bg-gray-100 rounded-full">
            <ArrowLeft size={24} />
          </button>
          <h1 className="text-xl font-bold text-gray-800">Forum Cộng đồng</h1>
        </div>
      </header>

      <main className="container mx-auto p-4 md:p-6">
        <div className="space-y-4">
          {communityPosts.map(post => (
            <div key={post.id} className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-200">
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-brand-100 text-brand-600 font-bold flex items-center justify-center mr-4">{post.authorAvatar}</div>
                <div className="flex-grow">
                  <div className="flex items-center gap-2 mb-1">
                    <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${tagColors[post.tagColor]}`}>{post.tag}</span>
                  </div>
                  <h2 className="text-lg font-bold text-gray-800 hover:text-brand-600 cursor-pointer">{post.title}</h2>
                  <p className="text-sm text-gray-500 mt-1">Đăng bởi <span className="font-semibold">{post.author}</span> - {post.createdAt}</p>
                  <p className="text-sm text-gray-600 mt-2 line-clamp-2">{post.excerpt}</p>
                  <div className="flex items-center gap-6 text-sm text-gray-500 mt-4 pt-3 border-t border-gray-100">
                    <div className="flex items-center gap-1.5"><ThumbsUp size={16} /> {post.stats.likes}</div>
                    <div className="flex items-center gap-1.5"><MessageSquare size={16} /> {post.stats.comments}</div>
                    <div className="flex items-center gap-1.5"><Eye size={16} /> {post.stats.views}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default CommunityForum;
