
import React from 'react';
import { Play, Calendar, Layout, Move, Users, Star, ArrowRight } from 'lucide-react';
import { STATS, COURSES_DATA } from './constants';

export const HomeHero: React.FC = () => (
  <header className="relative bg-primary overflow-hidden min-h-[800px] flex flex-col justify-center">
    <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-24 grid lg:grid-cols-2 gap-12 items-center">
      <div>
        <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-[1.2] mb-6">
          <span className="text-secondary">Studying</span> Online is now much easier
        </h1>
        <p className="text-white/80 text-lg mb-10 max-w-md">
          TOTC is an interesting platform that will teach you in a more interactive way.
        </p>
        <div className="flex items-center gap-6">
          <button className="px-8 py-4 bg-white/20 hover:bg-white/30 text-white rounded-full font-bold transition-all border border-white/40">
            Join for free
          </button>
          <button className="flex items-center gap-3 group">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
              <Play className="w-5 h-5 text-primary fill-primary ml-1" />
            </div>
            <span className="text-white font-medium">Watch how it works</span>
          </button>
        </div>
      </div>
      <div className="relative">
        <div className="relative z-10 rounded-3xl overflow-hidden border-[12px] border-white/10 shadow-2xl">
          <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800" className="w-full aspect-[4/5] object-cover" alt="Student" />
        </div>
        <div className="absolute -left-10 top-1/4 bg-white/90 backdrop-blur p-4 rounded-2xl shadow-xl flex items-center gap-4 z-20">
          <div className="bg-primary/20 p-2 rounded-lg text-primary"><Calendar className="w-6 h-6" /></div>
          <div>
            <p className="text-xl font-bold text-[#2F327D]">250k</p>
            <p className="text-xs text-slate-500 font-medium">Assisted Student</p>
          </div>
        </div>
        <div className="absolute -right-6 bottom-1/4 bg-white/90 backdrop-blur p-4 rounded-2xl shadow-xl z-20 max-w-[180px]">
          <div className="flex items-center gap-3 mb-2">
            <img src="https://i.pravatar.cc/100?u=instructor" className="w-10 h-10 rounded-full" />
            <div>
              <p className="text-[10px] font-bold text-[#2F327D]">User Experience Class</p>
              <p className="text-[8px] text-slate-400">Today at 12:00 PM</p>
            </div>
          </div>
          <button className="w-full py-2 bg-[#D8587E] text-white rounded-full text-[10px] font-bold">Join Now</button>
        </div>
      </div>
    </div>
    <div className="absolute bottom-0 left-0 w-full h-24 bg-white" style={{ borderRadius: '100% 100% 0 0 / 100% 100% 0 0' }}></div>
  </header>
);

export const SuccessStats: React.FC = () => (
  <section className="py-20 bg-white text-center">
    <div className="max-w-7xl mx-auto px-6">
      <h2 className="text-4xl font-bold mb-4">Our Success</h2>
      <p className="text-slate-500 max-w-2xl mx-auto mb-16">Ornare id fames interdum porttitor nulla turpis etiam.</p>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
        {STATS.map(stat => (
          <div key={stat.label}>
            <p className="text-4xl md:text-5xl font-light text-primary mb-2">{stat.value}</p>
            <p className="text-sm font-semibold text-slate-400 uppercase tracking-wider">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export const HomeFeatures: React.FC = () => (
  <section className="py-24 overflow-hidden bg-white">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-24">
        <h2 className="text-4xl font-bold mb-4">Our <span className="text-primary">Features</span></h2>
        <p className="text-slate-500">This very extraordinary feature, can make learning activities more efficient</p>
      </div>
      <div className="grid lg:grid-cols-2 gap-20 items-center">
        <div className="relative">
          <div className="relative z-10 p-4 bg-white rounded-3xl shadow-2xl border border-slate-100">
            <div className="flex gap-4 mb-4">
              <div className="flex-1 bg-slate-100 rounded-2xl aspect-square overflow-hidden border-4 border-white"><img src="https://i.pravatar.cc/300?u=1" className="w-full h-full object-cover" /></div>
              <div className="flex-1 bg-slate-100 rounded-2xl aspect-square overflow-hidden border-4 border-white"><img src="https://i.pravatar.cc/300?u=2" className="w-full h-full object-cover" /></div>
            </div>
            <div className="flex gap-4">
              <div className="flex-1 bg-slate-100 rounded-2xl aspect-square overflow-hidden border-4 border-white"><img src="https://i.pravatar.cc/300?u=3" className="w-full h-full object-cover" /></div>
              <div className="flex-1 bg-slate-100 rounded-2xl aspect-square overflow-hidden border-4 border-white"><img src="https://i.pravatar.cc/300?u=4" className="w-full h-full object-cover" /></div>
            </div>
            <div className="absolute bottom-10 left-10 flex gap-2">
              <button className="px-6 py-2 bg-indigo-500 text-white rounded-full text-xs font-bold shadow-lg">Present</button>
              <button className="px-6 py-2 bg-[#D8587E] text-white rounded-full text-xs font-bold shadow-lg">Call</button>
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-3xl font-bold text-[#2F327D] mb-8 leading-tight">A <span className="text-primary">user interface</span> designed for the classroom</h3>
          <div className="space-y-8">
            {[{ icon: Layout, text: "Teachers don't get lost in the grid view and have a dedicated Podium space.", color: "bg-indigo-50 text-indigo-500" },
              { icon: Move, text: "TA's and presenters can be moved to the front of the class.", color: "bg-secondary/10 text-secondary" },
              { icon: Users, text: "Teachers can easily see all students and class data at one time.", color: "bg-primary/10 text-primary" }
            ].map((item, idx) => (
              <div key={idx} className="flex gap-6 items-start">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-sm ${item.color}`}><item.icon className="w-7 h-7" /></div>
                <p className="text-slate-500 leading-relaxed text-base pt-2">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export const CourseExplorer: React.FC = () => (
  <section className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
        <div><h2 className="text-4xl font-bold mb-4">Explore Course</h2><p className="text-slate-500">Ut sed eros finibus, placerat orci id, dapibus.</p></div>
        <button className="text-primary font-bold flex items-center gap-2 hover:gap-3 transition-all">SEE ALL <ArrowRight className="w-4 h-4" /></button>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {COURSES_DATA.map(course => (
          <div key={course.id} className="group bg-white rounded-[32px] overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500">
            <div className="relative h-64 overflow-hidden">
              <img src={course.image} className="w-full h-full object-cover group-hover:scale-110 duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white"><p className="text-xs font-bold uppercase mb-2 tracking-widest text-white/80">{course.instructor}</p><h4 className="text-2xl font-bold leading-tight">{course.title}</h4></div>
            </div>
            <div className="p-10">
              <p className="text-slate-500 text-base mb-8 line-clamp-2 leading-relaxed">{course.desc}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5">{[1,2,3,4,5].map(s => <Star key={s} className="w-4 h-4 text-secondary fill-secondary" />)}</div>
                <span className="text-3xl font-bold text-[#2F327D]">${course.price}</span>
              </div>
              <button className="w-full mt-10 py-4 bg-white border-2 border-primary text-primary rounded-full font-bold hover:bg-primary hover:text-white transition-all transform hover:scale-105">EXPLORE</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
