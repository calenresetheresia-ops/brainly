
import React from 'react';
import { Eye, ChevronLeft, ChevronRight, Grid, Clock } from 'lucide-react';
import { BLOG_CATEGORIES, RELATED_BLOGS, MARKETING_ARTICLES } from './constants';

export const BlogHero: React.FC = () => (
  <section className="bg-[#EBF5FF] pt-32 pb-24">
    <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
      <div>
        <div className="mb-6 flex items-center gap-2 text-sm">
          <span className="text-slate-500">By Themadbrains in</span>
          <span className="text-primary font-bold">inspiration</span>
        </div>
        <h1 className="text-4xl lg:text-5xl font-extrabold text-[#2F327D] leading-tight mb-8">
          Why Swift UI Should Be on the Radar of Every Mobile Developer
        </h1>
        <p className="text-slate-500 text-lg mb-10 leading-relaxed max-w-xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <button className="px-10 py-4 bg-[#49BBBD] text-white rounded-xl font-bold shadow-lg shadow-[#49BBBD]/20 hover:scale-105 active:scale-95 transition-all">
          Start learning now
        </button>
      </div>
      <div className="relative">
        <div className="rounded-3xl overflow-hidden shadow-2xl relative z-10 border-[10px] border-white/20">
          <img src="https://picsum.photos/seed/swiftui/800/600" alt="SwiftUI" className="w-full aspect-[4/3] object-cover" />
        </div>
      </div>
    </div>
  </section>
);

export const ReadingBlogList: React.FC = () => (
  <section className="max-w-7xl mx-auto px-6 py-24 w-full">
    <h2 className="text-2xl font-bold text-[#2F327D] mb-10">Reading blog list</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {BLOG_CATEGORIES.map(cat => (
        <div key={cat.title} className="relative group cursor-pointer overflow-hidden rounded-3xl aspect-[4/3] shadow-md hover:shadow-xl transition-all">
          <img src={cat.image} alt={cat.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 flex items-center justify-center transition-all">
            <span className="px-10 py-3 bg-white/20 backdrop-blur-md rounded-2xl text-white font-bold text-lg uppercase tracking-wider border border-white/30">{cat.title}</span>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export const RelatedBlogList: React.FC = () => (
  <section className="bg-[#EBF5FF] py-24 w-full">
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex justify-between items-center mb-12">
        <h2 className="text-2xl font-bold text-[#2F327D]">Related Blog</h2>
        <button className="text-primary font-bold text-sm hover:underline">See all</button>
      </div>
      <div className="grid md:grid-cols-2 gap-10 mb-12">
        {RELATED_BLOGS.map(blog => (
          <div key={blog.id} className="bg-white rounded-[40px] p-8 shadow-sm border border-slate-50 group hover:shadow-xl transition-all">
            <div className="aspect-video rounded-3xl overflow-hidden mb-8">
              <img src={blog.image} alt={blog.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
            </div>
            <h3 className="text-2xl font-bold text-[#2F327D] mb-6 leading-tight group-hover:text-primary transition-colors">{blog.title}</h3>
            <div className="flex items-center gap-4 mb-8">
              <img src={blog.authorAvatar} alt={blog.author} className="w-12 h-12 rounded-full border-2 border-primary/20" />
              <span className="text-base font-bold text-slate-700">{blog.author}</span>
            </div>
            <p className="text-slate-500 text-base mb-8 leading-relaxed line-clamp-2">{blog.desc}</p>
            <div className="flex items-center justify-between pt-8 border-t border-slate-50">
              <button className="text-slate-400 font-bold text-sm underline underline-offset-8 decoration-2 hover:text-primary hover:decoration-primary transition-all">Read more</button>
              <div className="flex items-center gap-2 text-slate-400 text-sm font-medium">
                <Eye className="w-5 h-5" />
                <span>{blog.views}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-end gap-4">
         <button className="w-12 h-12 rounded-xl bg-white text-primary flex items-center justify-center shadow-md hover:bg-primary hover:text-white transition-all"><ChevronLeft className="w-6 h-6" /></button>
         <button className="w-12 h-12 rounded-xl bg-primary text-white flex items-center justify-center shadow-lg hover:scale-105 active:scale-95 transition-all"><ChevronRight className="w-6 h-6" /></button>
      </div>
    </div>
  </section>
);

export const MarketingArticleList: React.FC = () => (
  <section className="max-w-7xl mx-auto px-6 py-24 w-full mb-12">
    <div className="flex justify-between items-center mb-12">
      <h2 className="text-2xl font-bold text-[#2F327D]">Marketing Articles</h2>
      <button className="text-primary font-bold text-sm hover:underline">See all</button>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {MARKETING_ARTICLES.map(art => (
        <div key={art.id} className="bg-white rounded-[32px] p-6 shadow-sm border border-slate-100 hover:shadow-2xl transition-all group">
          <div className="aspect-[4/3] rounded-2xl overflow-hidden mb-6 relative">
            <img src={art.image} alt={art.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
            <div className="absolute top-4 right-4 px-3 py-1 bg-white/90 backdrop-blur rounded-lg text-[10px] font-bold text-primary shadow-sm uppercase">{art.category}</div>
          </div>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-1.5 text-[10px] text-slate-400 uppercase font-bold tracking-widest">
              <Grid className="w-3.5 h-3.5" />
              {art.category}
            </div>
            <div className="flex items-center gap-1.5 text-[10px] text-slate-400 uppercase font-bold tracking-widest">
              <Clock className="w-3.5 h-3.5" />
              {art.duration}
            </div>
          </div>
          <h4 className="text-xl font-bold text-[#2F327D] mb-4 leading-tight group-hover:text-primary transition-colors">{art.title}</h4>
          <p className="text-sm text-slate-400 mb-8 leading-relaxed line-clamp-2">{art.desc}</p>
          <div className="flex items-center justify-between pt-6 border-t border-slate-50">
            <div className="flex items-center gap-3">
              <img src="https://i.pravatar.cc/100?u=lina" alt="Lina" className="w-10 h-10 rounded-full border-2 border-slate-50" />
              <span className="text-sm font-bold text-slate-700">{art.author}</span>
            </div>
            <div className="text-right">
              <span className="text-xs text-slate-400 line-through block font-bold mb-0.5">${art.oldPrice}</span>
              <span className="text-lg font-bold text-primary">${art.price}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);
