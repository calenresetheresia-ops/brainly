
import React from 'react';
import { Play, Calendar, Layout, Move, Users, Star, ArrowRight, Palette, Globe, Award } from 'lucide-react';
import { STATS } from './constants';

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

const SlantedTab: React.FC<{ label: string; color: string; bgColor: string }> = ({ label, color, bgColor }) => (
  <div className="relative group cursor-pointer transition-transform hover:-translate-y-2">
    {/* Outer glow effect */}
    <div className="absolute -inset-1 rounded-2xl opacity-40 blur-sm bg-[#E0F3D7] group-hover:opacity-100 transition-opacity"></div>
    {/* Main Slanted Pill */}
    <div 
      className="relative w-14 h-44 rounded-2xl flex flex-col items-center justify-center border-4 border-[#E0F3D7]"
      style={{ 
        backgroundColor: bgColor, 
        transform: 'skewX(-4deg) rotate(-4deg)',
        boxShadow: '0 8px 15px -3px rgba(0,0,0,0.1)'
      }}
    >
      <span 
        className="text-white font-bold text-xs uppercase whitespace-nowrap tracking-wider"
        style={{ transform: 'rotate(-90deg)' }}
      >
        {label}
      </span>
    </div>
  </div>
);

const FeaturedCard: React.FC<{ 
  image: string; 
  title: string; 
  desc: string; 
  price: number; 
  borderColor?: string;
  imageOnLeft?: boolean;
}> = ({ image, title, desc, price, borderColor = "#49BBBD", imageOnLeft = true }) => (
  <div 
    className="bg-white rounded-[32px] overflow-hidden flex flex-col sm:flex-row items-center p-6 gap-8 shadow-xl border-2 transition-transform hover:scale-[1.02]"
    style={{ borderColor }}
  >
    <div className={`w-full sm:w-1/2 rounded-2xl overflow-hidden aspect-[4/3] ${!imageOnLeft ? 'sm:order-2' : ''}`}>
      <img src={image} className="w-full h-full object-cover" alt={title} />
    </div>
    <div className="flex-1 text-left">
      <h4 className="text-xl font-bold text-[#2F327D] mb-4 leading-tight">{title}</h4>
      <p className="text-slate-400 text-sm mb-6 leading-relaxed line-clamp-3">{desc}</p>
      <div className="flex items-center gap-1 mb-6">
        {[1,2,3,4,5].map(s => <Star key={s} className="w-4 h-4 text-[#F48C06] fill-[#F48C06]" />)}
      </div>
      <div className="flex items-center justify-between">
        <span className="text-xl font-bold text-[#2F327D]">$ {price}</span>
        <button className="px-10 py-2 border-2 rounded-xl text-xs font-bold transition-all hover:bg-[#49BBBD] hover:text-white" style={{ borderColor: '#49BBBD', color: '#49BBBD' }}>
          EXPLORE
        </button>
      </div>
    </div>
  </div>
);

const SectionHeader: React.FC<{ icon: any; title: string }> = ({ icon: Icon, title }) => (
  <div className="flex justify-between items-center mb-8">
    <div className="flex items-center gap-3">
      <Icon className="w-6 h-6 text-[#2F327D]" />
      <h3 className="text-xl font-bold text-[#2F327D]">{title}</h3>
    </div>
    <button className="text-[#49BBBD] font-bold text-xs flex items-center gap-2 group tracking-widest uppercase">
      SEE ALL <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
    </button>
  </div>
);

const categoryColors = [
  { label: 'Ut Sed Eros', color: '#FFFFFF', bgColor: '#FF782D' },
  { label: 'Curabitur Egestas', color: '#FFFFFF', bgColor: '#FF8585' },
  { label: 'Quisque Conseq...', color: '#FFFFFF', bgColor: '#A3662B' },
  { label: 'Cras Convallis', color: '#FFFFFF', bgColor: '#FFB800' },
  { label: 'Vestibulum fauci...', color: '#FFFFFF', bgColor: '#A66CFF' },
  { label: 'Ut Sed Eros', color: '#FFFFFF', bgColor: '#00B0FF' },
  { label: 'Vestibulum fauci...', color: '#FFFFFF', bgColor: '#6BC785' },
];

export const CourseExplorer: React.FC = () => (
  <section className="py-24 bg-[#F2F7FB] overflow-hidden">
    <div className="max-w-7xl mx-auto px-6">
      {/* Header */}
      <div className="mb-20">
        <h2 className="text-4xl font-bold text-[#2F327D] mb-4">Explore Course</h2>
        <p className="text-slate-400 max-w-lg">Ut sed eros finibus, placerat orci id, dapibus.</p>
      </div>

      <div className="space-y-32">
        {/* Row 1: Lorem Ipsum */}
        <div>
          <SectionHeader icon={Palette} title="Lorem Ipsum" />
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="hidden lg:flex gap-4">
              {categoryColors.map((cat, i) => (
                <SlantedTab key={i} {...cat} />
              ))}
            </div>
            <div className="flex-1 w-full">
              <FeaturedCard 
                image="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=600"
                title="Integer id Orc Sed Ante Tincidunt"
                desc="Cras convallis lacus orci, tristique tincidunt magna fringilla at faucibus vel. Vestibulum faucibus iaculis eros, et hendrerit magna fringilla at faucibus vel."
                price={450}
              />
            </div>
          </div>
        </div>

        {/* Row 2: Quisque a Consequat */}
        <div>
          <SectionHeader icon={Globe} title="Quisque a Consequat" />
          <div className="relative">
             <div className="max-w-4xl mx-auto">
                <FeaturedCard 
                  borderColor="#D8587E"
                  image="https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&q=80&w=600"
                  title="Integer id Orc Sed Ante Tincidunt"
                  desc="Cras convallis lacus orci, tristique tincidunt magna fringilla at faucibus vel. Cras convallis lacus orci, tristique tincidunt magna fringilla at faucibus vel."
                  price={450}
                />
             </div>
             {/* Decorative slanted tabs on sides */}
             <div className="absolute top-1/2 -translate-y-1/2 -left-12 hidden xl:flex gap-3 opacity-50">
                {categoryColors.slice(0, 4).map((cat, i) => <SlantedTab key={i} {...cat} />)}
             </div>
             <div className="absolute top-1/2 -translate-y-1/2 -right-12 hidden xl:flex gap-3 opacity-50">
                {categoryColors.slice(4).map((cat, i) => <SlantedTab key={i} {...cat} />)}
             </div>
          </div>
        </div>

        {/* Row 3: Aenean Facilisis */}
        <div>
          <SectionHeader icon={Award} title="Aenean Facilisis" />
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 w-full">
              <FeaturedCard 
                imageOnLeft={false}
                image="https://images.unsplash.com/photo-1452784444945-3f422708fe5e?auto=format&fit=crop&q=80&w=600"
                title="Integer id Orc Sed Ante Tincidunt"
                desc="Cras convallis lacus orci, tristique tincidunt magna fringilla at faucibus vel. Vestibulum faucibus iaculis eros, et hendrerit magna fringilla at faucibus vel."
                price={450}
              />
            </div>
            <div className="hidden lg:flex gap-4">
              {categoryColors.map((cat, i) => (
                <SlantedTab key={i} {...cat} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
