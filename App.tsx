
import React from 'react';
import { 
  Play, Search, ArrowRight, Star, FileText, Calendar, Users, 
  CheckCircle2, Plus, MessageSquare, Sparkles, User, Bell, Menu,
  Layout, Move, UserCheck, ShieldCheck, ClipboardCheck, MessageCircle
} from 'lucide-react';
import { STATS, FEATURES, COURSES_DATA, NEWS } from './constants';
import AITutor from './components/AITutor';

const App: React.FC = () => {
  return (
    <div className="min-h-screen font-['Poppins']">
      {/* Header & Hero Section */}
      <header className="relative bg-primary overflow-hidden">
        {/* Nav */}
        <nav className="relative z-20 flex items-center justify-between px-6 py-6 max-w-7xl mx-auto">
          <div className="flex items-center gap-2">
            <div className="bg-white p-1 rounded-lg">
              <div className="w-8 h-8 bg-primary rounded flex items-center justify-center text-white font-bold">T</div>
            </div>
            <span className="text-2xl font-bold text-white tracking-tight">TOTC</span>
          </div>
          <div className="hidden md:flex items-center gap-10 text-white font-medium text-sm">
            <a href="#" className="hover:opacity-80">Home</a>
            <a href="#" className="hover:opacity-80">Courses</a>
            <a href="#" className="hover:opacity-80">Careers</a>
            <a href="#" className="hover:opacity-80">Blog</a>
            <a href="#" className="hover:opacity-80">About Us</a>
          </div>
          <div className="flex items-center gap-4">
            <button className="px-6 py-2 bg-white text-[#2F327D] rounded-full font-bold text-sm shadow-md">Login</button>
            <button className="px-6 py-2 bg-white/20 text-white rounded-full font-bold text-sm border border-white/30">Sign Up</button>
          </div>
        </nav>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-12 pb-24 grid lg:grid-cols-2 gap-12 items-center">
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
              <img 
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800" 
                className="w-full aspect-[4/5] object-cover" 
                alt="Student"
              />
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -left-10 top-1/4 bg-white/90 backdrop-blur p-4 rounded-2xl shadow-xl flex items-center gap-4 z-20">
              <div className="bg-primary/20 p-2 rounded-lg text-primary">
                <Calendar className="w-6 h-6" />
              </div>
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

            <div className="absolute -right-12 top-10 bg-white/90 backdrop-blur p-4 rounded-2xl shadow-xl flex items-center gap-3 z-20">
              <div className="bg-secondary p-2 rounded-lg text-white">
                <FileText className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm font-bold text-[#2F327D]">Congratulations</p>
                <p className="text-[10px] text-slate-500">Your admission completed</p>
              </div>
            </div>
          </div>
        </div>

        {/* Curved background decoration */}
        <div className="absolute bottom-0 left-0 w-full h-24 bg-white" style={{ borderRadius: '100% 100% 0 0 / 100% 100% 0 0' }}></div>
      </header>

      {/* Success Stats */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">Our Success</h2>
          <p className="text-slate-500 max-w-2xl mx-auto mb-16">
            Ornare id fames interdum porttitor nulla turpis etiam. Diam vitae sollicitudin at nec nam et pharetra gravida.
          </p>
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

      {/* All-in-one Cloud Software */}
      <section className="py-24 bg-[#fbfbfb]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">All-In-One <span className="text-primary">Cloud Software.</span></h2>
          <p className="text-slate-500 max-w-lg mx-auto mb-20">
            TOTC is one powerful online software suite that combines all the tools needed to run a successful school or office.
          </p>
          <div className="grid md:grid-cols-3 gap-12">
            {FEATURES.map(f => (
              <div key={f.title} className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-xl transition-all group flex flex-col items-center">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-8 shadow-lg group-hover:-translate-y-2 transition-transform" style={{ backgroundColor: f.color + '20', color: f.color }}>
                   {f.icon === 'FileText' && <FileText className="w-8 h-8" />}
                   {f.icon === 'Calendar' && <Calendar className="w-8 h-8" />}
                   {f.icon === 'Users' && <Users className="w-8 h-8" />}
                </div>
                <h3 className="text-xl font-bold mb-4 leading-tight">{f.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What is TOTC */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">What is <span className="text-primary">TOTC?</span></h2>
            <p className="text-slate-500 max-w-2xl mx-auto leading-relaxed">
              TOTC is a platform that allows educators to create online classes whereby they can store the course materials online; manage assignments, quizzes and exams; monitor due dates; grade results and provide students with feedback all in one place.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative group overflow-hidden rounded-3xl h-[400px]">
              <img src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white">
                <h3 className="text-3xl font-extrabold mb-6">FOR INSTRUCTORS</h3>
                <button className="px-8 py-3 border-2 border-white rounded-full font-bold hover:bg-white hover:text-black transition-colors">Start a class today</button>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-3xl h-[400px]">
              <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-primary/40 flex flex-col items-center justify-center text-white">
                <h3 className="text-3xl font-extrabold mb-6">FOR STUDENTS</h3>
                <button className="px-8 py-3 bg-secondary rounded-full font-bold hover:bg-white hover:text-black transition-colors">Enter access code</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Classroom Features (Physical Classroom...) - Moved before 'Our Features' */}
      <section className="py-24 bg-[#fbfbfb]">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6 leading-tight">
              Everything you can do in a physical classroom, <span className="text-primary">you can do with TOTC</span>
            </h2>
            <p className="text-slate-500 mb-8 leading-relaxed">
              TOTC’s school management software helps traditional and online schools manage scheduling, attendance, payments and virtual classrooms all in one secure cloud-based system.
            </p>
            <a href="#" className="text-primary font-bold underline underline-offset-8">Learn more</a>
          </div>
          <div className="relative">
            <div className="relative z-10 rounded-[40px] overflow-hidden shadow-2xl">
              <img src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=800" className="w-full h-auto" />
              <div className="absolute inset-0 bg-primary/10"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <button className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-2xl text-primary transform hover:scale-110 transition-transform">
                  <Play className="w-8 h-8 fill-primary" />
                </button>
              </div>
            </div>
            <div className="absolute -bottom-10 -right-10 w-full h-full bg-primary/10 rounded-[40px] -z-10"></div>
          </div>
        </div>
      </section>

      {/* Our Features Section */}
      <section className="py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24">
            <h2 className="text-4xl font-bold mb-4">Our <span className="text-primary">Features</span></h2>
            <p className="text-slate-500">This very extraordinary feature, can make learning activities more efficient</p>
          </div>

          {/* Feature 1: User Interface */}
          <div className="grid lg:grid-cols-2 gap-20 items-center mb-40">
            <div className="relative">
              {/* Background Accents */}
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute -bottom-10 right-0 w-32 h-32 bg-secondary/10 rounded-full blur-2xl"></div>
              
              <div className="relative z-10 p-4 bg-white rounded-3xl shadow-2xl border border-slate-100">
                <div className="flex gap-4 mb-4">
                  <div className="flex-1 bg-slate-100 rounded-2xl aspect-square overflow-hidden border-4 border-white shadow-inner">
                    <img src="https://i.pravatar.cc/300?u=1" className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 bg-slate-100 rounded-2xl aspect-square overflow-hidden border-4 border-white shadow-inner">
                    <img src="https://i.pravatar.cc/300?u=2" className="w-full h-full object-cover" />
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-1 bg-slate-100 rounded-2xl aspect-square overflow-hidden border-4 border-white shadow-inner">
                    <img src="https://i.pravatar.cc/300?u=3" className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 bg-slate-100 rounded-2xl aspect-square overflow-hidden border-4 border-white shadow-inner">
                    <img src="https://i.pravatar.cc/300?u=4" className="w-full h-full object-cover" />
                  </div>
                </div>
                {/* Overlay buttons */}
                <div className="absolute bottom-10 left-10 flex gap-2">
                  <button className="px-4 py-2 bg-indigo-500 text-white rounded-full text-xs font-bold shadow-lg">Present</button>
                  <button className="px-4 py-2 bg-[#D8587E] text-white rounded-full text-xs font-bold shadow-lg">Call</button>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-[#2F327D] mb-8 leading-tight">
                A <span className="text-primary">user interface</span> designed for the classroom
              </h3>
              <div className="space-y-8">
                {[
                  { icon: Layout, text: "Teachers don't get lost in the grid view and have a dedicated Podium space.", color: "bg-indigo-50 text-indigo-500" },
                  { icon: Move, text: "TA's and presenters can be moved to the front of the class.", color: "bg-secondary/10 text-secondary" },
                  { icon: Users, text: "Teachers can easily see all students and class data at one time.", color: "bg-primary/10 text-primary" }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-6 items-start">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm ${item.color}`}>
                      <item.icon className="w-6 h-6" />
                    </div>
                    <p className="text-slate-500 leading-relaxed text-sm pt-1">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Feature 2: Tools for Teachers */}
          <div className="grid lg:grid-cols-2 gap-20 items-center mb-40">
            <div className="order-2 lg:order-1">
              <h3 className="text-3xl font-bold text-[#2F327D] mb-6 leading-tight">
                <span className="text-primary">Tools</span> For Teachers And Learners
              </h3>
              <p className="text-slate-500 leading-relaxed mb-8">
                Class has a dynamic set of teaching tools built to be deployed and used during class. Teachers can handout assignments in real-time for students to complete and submit.
              </p>
            </div>
            <div className="order-1 lg:order-2 relative">
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-secondary/10 rounded-full blur-3xl -z-10"></div>
               <img src="https://images.unsplash.com/photo-1544391559-71bc1400a2cc?auto=format&fit=crop&q=80&w=800" className="rounded-3xl shadow-2xl relative z-10" alt="Student studying" />
               <div className="absolute -top-6 -right-6 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-3 z-20 animate-bounce duration-[3000ms]">
                 <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-500">
                   <UserCheck className="w-6 h-6" />
                 </div>
                 <span className="text-xs font-bold text-[#2F327D]">Assignment Handout</span>
               </div>
            </div>
          </div>

          {/* Feature 3: Assessments */}
          <div className="grid lg:grid-cols-2 gap-20 items-center mb-40">
            <div className="relative">
               <div className="absolute -bottom-10 left-1/4 w-60 h-60 bg-primary/10 rounded-full blur-3xl -z-10"></div>
               <div className="bg-white p-8 rounded-[40px] shadow-2xl border border-slate-50 relative z-10 max-w-sm mx-auto">
                 <div className="flex justify-between items-center mb-6">
                    <span className="px-3 py-1 bg-indigo-50 text-indigo-500 text-[10px] font-bold rounded-full">Question 1</span>
                    <div className="flex gap-2">
                      <div className="w-6 h-6 rounded-full bg-red-50 text-red-500 flex items-center justify-center text-[10px] font-bold">✕</div>
                      <div className="w-6 h-6 rounded-full bg-green-50 text-green-500 flex items-center justify-center text-[10px] font-bold">✓</div>
                    </div>
                 </div>
                 <h4 className="text-lg font-bold text-[#2F327D] mb-6">True or false? This play takes place in Italy</h4>
                 <div className="rounded-2xl overflow-hidden mb-6">
                   <img src="https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&q=80&w=400" className="w-full" />
                 </div>
                 <div className="p-4 bg-primary/5 rounded-xl flex items-center justify-center gap-3">
                    <ClipboardCheck className="w-5 h-5 text-primary" />
                    <span className="text-[10px] font-bold text-primary uppercase">Your answer was sent successfully</span>
                 </div>
               </div>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-[#2F327D] mb-6 leading-tight">
                Assessments, <span className="text-primary">Quizzes</span>, Tests
              </h3>
              <p className="text-slate-500 leading-relaxed">
                Easily launch live assignments, quizzes, and tests. Student results are automatically entered in the online gradebook.
              </p>
            </div>
          </div>

          {/* Feature 4: Class Management */}
          <div className="grid lg:grid-cols-2 gap-20 items-center mb-40">
            <div className="order-2 lg:order-1">
              <h3 className="text-3xl font-bold text-[#2F327D] mb-6 leading-tight">
                <span className="text-primary">Class Management</span> Tools for Educators
              </h3>
              <p className="text-slate-500 leading-relaxed">
                Class provides tools to help run and manage the class such as Class Roster, Attendance, and more. With the Gradebook, teachers can review and grade tests and quizzes in real-time.
              </p>
            </div>
            <div className="order-1 lg:order-2 relative">
               <div className="bg-white p-8 rounded-[40px] shadow-2xl border border-slate-50 relative z-10">
                 <div className="flex items-center justify-between mb-8">
                    <h4 className="font-bold text-[#2F327D]">GradeBook</h4>
                    <button className="px-4 py-2 bg-indigo-500 text-white text-[10px] font-bold rounded-xl shadow-md">Export</button>
                 </div>
                 <div className="space-y-6">
                    {[
                      { name: "John Doe", progress: 85, color: "bg-green-400" },
                      { name: "Jane Smith", progress: 70, color: "bg-primary" },
                      { name: "Michael Vane", progress: 95, color: "bg-secondary" }
                    ].map((s, idx) => (
                      <div key={idx} className="flex items-center gap-4">
                        <img src={`https://i.pravatar.cc/100?u=${idx}`} className="w-8 h-8 rounded-full" />
                        <div className="flex-1">
                          <div className="flex justify-between text-[10px] font-bold mb-1">
                            <span>{s.name}</span>
                            <span>{s.progress}%</span>
                          </div>
                          <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                            <div className={`h-full ${s.color}`} style={{ width: `${s.progress}%` }}></div>
                          </div>
                        </div>
                      </div>
                    ))}
                 </div>
               </div>
               {/* Decorative dots */}
               <div className="absolute -top-10 -right-10 flex flex-wrap w-20 gap-2 opacity-20">
                 {[...Array(9)].map((_, i) => <div key={i} className="w-2 h-2 rounded-full bg-primary"></div>)}
               </div>
            </div>
          </div>

          {/* Feature 5: One-on-One */}
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
               <div className="absolute inset-0 bg-indigo-500/5 rounded-full blur-3xl -z-10 transform -scale-x-100"></div>
               <div className="relative z-10 bg-white p-6 rounded-3xl shadow-2xl border border-slate-100">
                 <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-indigo-500/10 rounded-xl flex items-center justify-center text-indigo-500">
                      <MessageCircle className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#2F327D]">Private Discussion</h4>
                      <p className="text-[10px] text-slate-400">Your video can't be seen by others</p>
                    </div>
                 </div>
                 <div className="flex gap-4">
                    <div className="flex-1 rounded-2xl overflow-hidden aspect-square shadow-md ring-4 ring-slate-50">
                      <img src="https://i.pravatar.cc/150?u=instructor" className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 rounded-2xl overflow-hidden aspect-square shadow-md ring-4 ring-slate-50">
                      <img src="https://i.pravatar.cc/150?u=student" className="w-full h-full object-cover" />
                    </div>
                 </div>
                 <button className="w-full mt-6 py-3 bg-[#D8587E] text-white rounded-2xl text-xs font-bold shadow-lg hover:opacity-90 transition-opacity">End Discussion</button>
               </div>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-[#2F327D] mb-6 leading-tight">
                One-on-One <span className="text-primary">Discussions</span>
              </h3>
              <p className="text-slate-500 leading-relaxed">
                Teachers and teacher assistants can talk with students privately without leaving the Zoom environment.
              </p>
            </div>
          </div>

          <div className="text-center mt-32">
            <button className="px-10 py-4 border border-primary text-primary rounded-full font-bold hover:bg-primary hover:text-white transition-all transform hover:scale-105 active:scale-95">
              See more features
            </button>
          </div>
        </div>
      </section>

      {/* Course Explore Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
            <div>
              <h2 className="text-4xl font-bold mb-4">Explore Course</h2>
              <p className="text-slate-500">Ut sed eros finibus, placerat orci id, dapibus.</p>
            </div>
            <div className="flex gap-4">
              <button className="text-primary font-bold flex items-center gap-2">SEE ALL <ArrowRight className="w-4 h-4" /></button>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {COURSES_DATA.map(course => (
              <div key={course.id} className="group bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="relative h-64 overflow-hidden">
                  <img src={course.image} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 text-white">
                    <p className="text-xs font-bold uppercase tracking-widest mb-2 text-white/80">{course.instructor}</p>
                    <h4 className="text-xl font-bold leading-tight">{course.title}</h4>
                  </div>
                </div>
                <div className="p-8">
                  <p className="text-slate-500 text-sm mb-6 line-clamp-2">{course.desc}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      {[1,2,3,4,5].map(s => <Star key={s} className="w-4 h-4 text-secondary fill-secondary" />)}
                    </div>
                    <span className="text-2xl font-bold text-[#2F327D]">${course.price}</span>
                  </div>
                  <button className="w-full mt-8 py-3 bg-white border border-primary text-primary rounded-full font-bold hover:bg-primary hover:text-white transition-all">
                    EXPLORE
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-[#fbfbfb]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="rounded-[40px] overflow-hidden shadow-2xl">
                <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=800" className="w-full h-auto" />
              </div>
              <div className="absolute -right-10 bottom-10 bg-white p-10 rounded-3xl shadow-2xl max-w-sm border-l-[12px] border-secondary">
                <p className="text-slate-500 text-sm leading-relaxed mb-6 italic">
                  "Thank you so much for your help. It's exactly what I've been looking for. You won't regret it. It really saves me time and effort. TOTC is exactly what our business has been lacking."
                </p>
                <div className="flex items-center justify-between">
                   <h4 className="font-bold text-[#2F327D]">Gloria Rose</h4>
                   <div className="text-right">
                     <div className="flex items-center gap-1 mb-1">
                       {[1,2,3,4,5].map(s => <Star key={s} className="w-3 h-3 text-secondary fill-secondary" />)}
                     </div>
                     <p className="text-[10px] text-slate-400">12 reviews at Yelp</p>
                   </div>
                </div>
              </div>
            </div>
            <div>
              <div className="w-20 h-px bg-slate-300 mb-8"></div>
              <h2 className="text-5xl font-extrabold text-[#2F327D] mb-8">What They Say?</h2>
              <p className="text-slate-500 text-lg mb-8 leading-relaxed">
                TOTC has over 100,000+ positive ratings from our users around the world.
              </p>
              <p className="text-slate-500 text-lg mb-10 leading-relaxed">
                Some of the students and teachers were greatly helped by the Skilline.
              </p>
              <button className="flex items-center gap-3 text-primary font-bold group">
                Write your assessment <div className="w-12 h-12 rounded-full border border-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all"><ArrowRight className="w-5 h-5" /></div>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* News & Resources */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Latest News and Resources</h2>
            <p className="text-slate-500">See the developments that have occurred to TOTC in the world</p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="rounded-3xl overflow-hidden mb-6">
                <img src={NEWS[0].image} className="w-full aspect-video object-cover" />
              </div>
              <span className="px-4 py-1 bg-primary text-white text-xs font-bold rounded-full">{NEWS[0].tag}</span>
              <h3 className="text-2xl font-bold text-[#2F327D] hover:text-primary transition-colors cursor-pointer">{NEWS[0].title}</h3>
              <p className="text-slate-500 leading-relaxed">{NEWS[0].desc}</p>
              <a href="#" className="inline-block text-slate-400 font-medium underline underline-offset-4">Read more</a>
            </div>
            <div className="space-y-8">
              {NEWS.slice(1).map(item => (
                <div key={item.id} className="flex gap-6 items-start group">
                  <div className="w-48 h-32 flex-shrink-0 rounded-2xl overflow-hidden">
                    <img src={item.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <div className="flex-1">
                    <span className="px-3 py-1 bg-slate-100 text-[#2F327D] text-[10px] font-bold rounded-full mb-3 inline-block">{item.tag}</span>
                    <h4 className="text-lg font-bold text-[#2F327D] mb-2 leading-tight group-hover:text-primary transition-colors cursor-pointer">{item.title}</h4>
                    <p className="text-slate-400 text-sm line-clamp-2">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#252641] pt-24 pb-12 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-16">
            <div className="flex items-center gap-2">
              <div className="bg-white p-1 rounded-lg">
                <div className="w-8 h-8 bg-primary rounded flex items-center justify-center text-[#252641] font-bold">T</div>
              </div>
              <span className="text-2xl font-bold tracking-tight">TOTC</span>
            </div>
            <div className="h-10 w-px bg-slate-700 hidden md:block"></div>
            <span className="text-slate-400 font-medium">Virtual Class for Zoom</span>
          </div>

          <div className="text-center mb-16">
            <h4 className="text-xl font-bold mb-6">Subscribe to get our Newsletter</h4>
            <div className="flex flex-col sm:flex-row max-w-lg mx-auto gap-4">
              <input 
                type="email" 
                placeholder="Your Email" 
                className="flex-1 px-6 py-3 rounded-full bg-transparent border border-slate-700 text-white outline-none focus:border-primary transition-colors"
              />
              <button className="px-8 py-3 bg-primary rounded-full font-bold hover:bg-white hover:text-[#252641] transition-all">Subscribe</button>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-center gap-8 text-sm text-slate-400 mb-12 border-b border-slate-800 pb-12">
            <a href="#" className="hover:text-white">Careers</a>
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms & Conditions</a>
          </div>

          <p className="text-center text-xs text-slate-500">© 2024 Class Technologies Inc.</p>
        </div>
      </footer>

      {/* Floating AI Tutor Component */}
      <AITutor />
    </div>
  );
};

export default App;
