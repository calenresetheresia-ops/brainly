
import React from 'react';
import { Heart, MessageCircle, Share2, MoreHorizontal } from 'lucide-react';
import { Post } from '../types';

interface PostProps {
  post: Post;
}

const CommunityPost: React.FC<PostProps> = ({ post }) => {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-6 mb-6">
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center gap-3">
          <img src={post.authorAvatar} alt={post.author} className="w-10 h-10 rounded-full ring-2 ring-slate-100" />
          <div>
            <h4 className="font-bold text-slate-900 text-sm leading-none mb-1">{post.author}</h4>
            <p className="text-xs text-slate-400">{post.time}</p>
          </div>
        </div>
        <button className="p-1 hover:bg-slate-100 rounded-full transition-colors">
          <MoreHorizontal className="w-5 h-5 text-slate-400" />
        </button>
      </div>

      <p className="text-slate-700 text-sm leading-relaxed mb-4">
        {post.content}
      </p>

      {post.image && (
        <div className="rounded-xl overflow-hidden mb-4 border border-slate-100">
          <img src={post.image} alt="Post media" className="w-full h-auto" />
        </div>
      )}

      <div className="flex items-center gap-6 pt-4 border-t border-slate-100">
        <button className="flex items-center gap-2 text-slate-500 hover:text-red-500 transition-colors group">
          <Heart className="w-5 h-5 group-hover:fill-red-500" />
          <span className="text-sm font-medium">{post.likes}</span>
        </button>
        <button className="flex items-center gap-2 text-slate-500 hover:text-indigo-600 transition-colors">
          <MessageCircle className="w-5 h-5" />
          <span className="text-sm font-medium">{post.comments}</span>
        </button>
        <button className="flex items-center gap-2 text-slate-500 hover:text-indigo-600 transition-colors ml-auto">
          <Share2 className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default CommunityPost;
