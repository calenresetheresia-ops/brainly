
import React from 'react';
import { ChevronLeft, ChevronRight, Layout, Clock, Grid } from 'lucide-react';

const EnrolledCourseCard: React.FC<{ title: string; instructor: string; progress: number; image: string }> = ({ title, instructor, progress, image }) => (
  <div className="bg-white rounded-3xl p-4 shadow-md border border-slate-100 group transition-all hover:shadow-xl">
    <div className="aspect-video rounded-2xl overflow-hidden mb-4 relative">
      <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
    </div>
    <h4 className="text-lg font-bold text-[#2F327D] mb-2 leading-tight">{title}</h4>
    <div className="flex items-center gap-2 mb-4">
      <img src="https://i.pravatar.cc/100?u=lina" alt={instructor} className="w-6 h-6 rounded-full" />
      <span className="text-sm text-slate-500">{instructor}</span>
    </div>
    <div className="relative pt-1">
      <div className="overflow-hidden h-2 text-xs flex rounded-full bg-slate-100">
        <div style={{ width: `${progress}%` }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-[#49BBBD]"></div>
      </div>
      <div className="text-right mt-1">
        <span className="text-[10px] text-slate-400 font-bold uppercase">Lesson 5 of 7</span>
      </div>
    </div>
  </div>
);

const CategoryCard: React.FC<{ icon: any; title: string; desc: string; bgColor: string; iconColor: string }> = ({ icon: Icon, title, desc, bgColor, iconColor }) => (
  <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-50 text-center flex flex-col items-center hover:shadow-md transition-all group">
    <div className={`w-16 h-16 rounded-2xl ${bgColor} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
      <Icon className={`w-8 h-8 ${iconColor}`} />
    </div>
    <h4 className="text-xl font-bold text-[#2F327D] mb-4">{title}</h4>
    <p className="text-sm text-slate-400 leading-relaxed">{desc}</p>
  </div>
);

const RecommendedCourseCard: React.FC = () => (
  <div className="bg-white rounded-[32px] p-6 shadow-sm border border-slate-100 hover:shadow-2xl transition-all group">
    <div className="aspect-[4/3] rounded-2xl overflow-hidden mb-6 relative cursor-pointer">
      <img src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=400" alt="AWS Architect" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
    </div>
    <div className="flex items-center justify-between mb-4">
      <div className="flex items-center gap-1.5 text-[10px] text-slate-400 uppercase font-bold tracking-widest">
        <Grid className="w-3.5 h-3.5" />
        Design
      </div>
      <div className="flex items-center gap-1.5 text-[10px] text-slate-400 uppercase font-bold tracking-widest">
        <Clock className="w-3.5 h-3.5" />
        3 Month
      </div>
    </div>
    <h4 className="text-xl font-bold text-[#2F327D] mb-4 leading-tight group-hover:text-primary transition-colors cursor-pointer">
      AWS Certified solutions Architect
    </h4>
    <p className="text-sm text-slate-400 mb-8 leading-relaxed line-clamp-2">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
    </p>
    <div className="flex items-center justify-between pt-6 border-t border-slate-50">
      <div className="flex items-center gap-3">
        <img src="https://i.pravatar.cc/100?u=lina" alt="Lina" className="w-10 h-10 rounded-full border-2 border-slate-50" />
        <span className="text-sm font-bold text-slate-700">Lina</span>
      </div>
      <div className="text-right">
        <span className="text-xs text-slate-400 line-through block font-bold mb-0.5">$100</span>
        <span className="text-lg font-bold text-primary">$80</span>
      </div>
    </div>
  </div>
);

const SectionHeader: React.FC<{ title: string; linkText?: string }> = ({ title, linkText = "See all" }) => (
  <div className="flex justify-between items-center mb-10">
    <h2 className="text-2xl font-bold text-[#2F327D]">{title}</h2>
    <button className="text-primary font-bold text-sm hover:underline">{linkText}</button>
  </div>
);

const Courses: React.FC = () => {
  return (
    <div className="pt-32 pb-24 bg-white">
      {/* Welcome Back Section */}
      <section className="bg-[#EBF5FF] py-16 mb-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-2xl font-bold text-[#2F327D]">Welcome back, ready for your next lesson?</h2>
            <button className="text-primary font-bold text-sm hover:underline">View history</button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
            <EnrolledCourseCard 
              title="AWS Certified Solutions Architect"
              instructor="Lina"
              progress={70}
              image="https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&q=80&w=400"
            />
            <EnrolledCourseCard 
              title="AWS Certified Solutions Architect"
              instructor="Lina"
              progress={60}
              image="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=400"
            />
            <EnrolledCourseCard 
              title="AWS Certified Solutions Architect"
              instructor="Lina"
              progress={80}
              image="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=400"
            />
          </div>
          <div className="flex justify-end gap-4">
            <button className="w-10 h-10 rounded-xl bg-white text-primary flex items-center justify-center shadow-md hover:bg-primary hover:text-white transition-all"><ChevronLeft className="w-5 h-5" /></button>
            <button className="w-10 h-10 rounded-xl bg-primary text-white flex items-center justify-center shadow-lg hover:scale-105 active:scale-95 transition-all"><ChevronRight className="w-5 h-5" /></button>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="max-w-7xl mx-auto px-6 mb-32">
        <h2 className="text-2xl font-bold text-[#2F327D] mb-12">Choice favourite course from top category</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <CategoryCard 
            icon={Layout} 
            title="Design" 
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor" 
            bgColor="bg-[#EBF5FF]" 
            iconColor="text-primary"
          />
          <CategoryCard 
            icon={Layout} 
            title="Development" 
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor" 
            bgColor="bg-[#EBF5FF]" 
            iconColor="text-indigo-500"
          />
          <CategoryCard 
            icon={Layout} 
            title="Development" 
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor" 
            bgColor="bg-[#EBF5FF]" 
            iconColor="text-blue-500"
          />
          <CategoryCard 
            icon={Layout} 
            title="Business" 
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor" 
            bgColor="bg-[#EBF5FF]" 
            iconColor="text-emerald-500"
          />
          <CategoryCard 
            icon={Layout} 
            title="Marketing" 
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor" 
            bgColor="bg-[#FFF8E1]" 
            iconColor="text-amber-500"
          />
          <CategoryCard 
            icon={Layout} 
            title="Photography" 
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor" 
            bgColor="bg-[#FFEBEE]" 
            iconColor="text-rose-500"
          />
          <CategoryCard 
            icon={Layout} 
            title="Acting" 
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor" 
            bgColor="bg-[#F3E5F5]" 
            iconColor="text-purple-500"
          />
          <CategoryCard 
            icon={Layout} 
            title="Business" 
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor" 
            bgColor="bg-[#E0F2F1]" 
            iconColor="text-teal-500"
          />
        </div>
      </section>

      {/* Recommended for You Section */}
      <section className="max-w-7xl mx-auto px-6 mb-32">
        <SectionHeader title="Recommended for you" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          <RecommendedCourseCard />
          <RecommendedCourseCard />
          <RecommendedCourseCard />
          <RecommendedCourseCard />
        </div>
        <div className="flex justify-end gap-4">
          <button className="w-10 h-10 rounded-xl bg-slate-100 text-slate-400 flex items-center justify-center shadow-sm hover:bg-primary hover:text-white transition-all"><ChevronLeft className="w-5 h-5" /></button>
          <button className="w-10 h-10 rounded-xl bg-primary text-white flex items-center justify-center shadow-lg hover:scale-105 active:scale-95 transition-all"><ChevronRight className="w-5 h-5" /></button>
        </div>
      </section>

      {/* Get Choice Section */}
      <section className="max-w-7xl mx-auto px-6 mb-32">
        <SectionHeader title="Get choice of your course" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <RecommendedCourseCard />
          <RecommendedCourseCard />
          <RecommendedCourseCard />
          <RecommendedCourseCard />
        </div>
      </section>

      {/* Banner Section */}
      <section className="max-w-7xl mx-auto px-6 mb-32">
        <div className="bg-[#252641] rounded-[40px] py-20 px-10 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Online coaching lessons for remote learning.</h2>
          <p className="text-slate-400 max-w-3xl mx-auto mb-10 leading-relaxed text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          </p>
          <button className="px-12 py-4 bg-primary text-white rounded-xl font-bold shadow-lg shadow-primary/20 hover:scale-105 active:scale-95 transition-all">
            Start learning now
          </button>
        </div>
      </section>

      {/* Personal Development Section */}
      <section className="max-w-7xl mx-auto px-6 mb-32">
        <SectionHeader title="The course in personal development" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <RecommendedCourseCard />
          <RecommendedCourseCard />
          <RecommendedCourseCard />
          <RecommendedCourseCard />
        </div>
      </section>

      {/* Student Viewing Section */}
      <section className="max-w-7xl mx-auto px-6 mb-32">
        <SectionHeader title="Student are viewing" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <RecommendedCourseCard />
          <RecommendedCourseCard />
          <RecommendedCourseCard />
          <RecommendedCourseCard />
        </div>
      </section>
    </div>
  );
};

export default Courses;
