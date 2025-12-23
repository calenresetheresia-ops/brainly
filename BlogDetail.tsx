
import React from 'react';
import { Eye, ChevronLeft, ChevronRight } from 'lucide-react';
import { RELATED_BLOGS } from './constants';

interface BlogDetailProps {
  onBlogClick: () => void;
}

const BlogDetail: React.FC<BlogDetailProps> = ({ onBlogClick }) => {
  return (
    <div className="flex flex-col bg-white">
      {/* Hero Image */}
      <div className="w-full h-[500px] overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1522071823991-b9671e303020?auto=format&fit=crop&q=80&w=1600" 
          alt="Classroom meeting" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Article Content */}
      <article className="max-w-7xl mx-auto px-6 py-20 w-full">
        <h1 className="text-3xl md:text-5xl font-extrabold text-[#2F327D] leading-tight mb-8">
          Why Swift UI Should Be on the Radar of Every Mobile Developer
        </h1>

        <div className="space-y-8 text-slate-500 text-lg leading-relaxed mb-12">
          <p>
            TOTC is a platform that allows educators to create online classes whereby they can store the course materials online; manage
            assignments, quizzes and exams; monitor due dates; grade results and provide students with feedback all in one place.
          </p>
          <p>
            TOTC is a platform that allows educators to create online classes whereby they can store the course materials online; manage
            assignments, quizzes and exams; monitor due dates; grade results and provide students with feedback all in one place.
            TOTC is a platform that allows educators to create online classes whereby they can store the course materials online; manage
            assignments, quizzes and exams; monitor due dates; grade results and provide students with feedback all in one place.
            TOTC is a platform.
          </p>
          <p>
            TOTC is a platform that allows educators to create online classes whereby they can store the course materials online; manage
            assignments, quizzes and exams; monitor due dates; grade results and provide students with feedback all in one place.
            TOTC is a platform that allows educators to create online classes whereby they can store the course materials online; manage
          </p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-4 mb-16">
          {['affordable', 'Stunning', 'making', 'madbrawns'].map(tag => (
            <button key={tag} className="px-6 py-2 bg-slate-100 rounded-full text-xs font-medium text-slate-500 hover:bg-primary/10 hover:text-primary transition-all">
              {tag}
            </button>
          ))}
        </div>

        <hr className="border-slate-100 mb-12" />

        {/* Author Section */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-20">
          <div className="flex items-center gap-4">
            <img src="https://i.pravatar.cc/150?u=lina" alt="Lina" className="w-14 h-14 rounded-xl object-cover shadow-sm" />
            <div className="text-left">
              <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-1">Written by</p>
              <h4 className="text-lg font-bold text-[#2F327D]">Lina</h4>
            </div>
          </div>
          <button className="px-10 py-3 border border-primary text-primary rounded-xl font-bold hover:bg-primary hover:text-white transition-all">
            Follow
          </button>
        </div>
      </article>

      {/* Related Blog Section */}
      <section className="bg-slate-50/50 py-24 w-full">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-2xl font-bold text-[#2F327D]">Related Blog</h2>
            <button className="text-primary font-bold text-sm hover:underline">See all</button>
          </div>
          
          <div className="grid md:grid-cols-2 gap-10 mb-12">
            {RELATED_BLOGS.map(blog => (
              <div key={blog.id} className="bg-white rounded-[40px] p-8 shadow-sm border border-slate-100 group hover:shadow-xl transition-all">
                <div className="aspect-video rounded-3xl overflow-hidden mb-8 cursor-pointer" onClick={onBlogClick}>
                  <img src={blog.image} alt={blog.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                <h3 className="text-2xl font-bold text-[#2F327D] mb-6 leading-tight group-hover:text-primary transition-colors cursor-pointer" onClick={onBlogClick}>
                  {blog.title}
                </h3>
                <div className="flex items-center gap-4 mb-8">
                  <img src={blog.authorAvatar} alt={blog.author} className="w-12 h-12 rounded-full border-2 border-primary/20" />
                  <span className="text-base font-bold text-slate-700">{blog.author}</span>
                </div>
                <p className="text-slate-500 text-base mb-8 leading-relaxed line-clamp-2">{blog.desc}</p>
                <div className="flex items-center justify-between pt-8 border-t border-slate-100">
                  <button onClick={onBlogClick} className="text-slate-400 font-bold text-sm underline underline-offset-8 decoration-2 hover:text-primary hover:decoration-primary transition-all">
                    Read more
                  </button>
                  <div className="flex items-center gap-2 text-slate-400 text-sm font-medium">
                    <Eye className="w-5 h-5" />
                    <span>{blog.views}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-end gap-4">
             <button className="w-12 h-12 rounded-xl bg-white text-primary flex items-center justify-center shadow-md hover:bg-primary hover:text-white transition-all border border-slate-100">
               <ChevronLeft className="w-6 h-6" />
             </button>
             <button className="w-12 h-12 rounded-xl bg-[#49BBBD] text-white flex items-center justify-center shadow-lg hover:scale-105 active:scale-95 transition-all">
               <ChevronRight className="w-6 h-6" />
             </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogDetail;
