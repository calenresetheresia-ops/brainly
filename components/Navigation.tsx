
import React from 'react';
import { Search, Bell, User, Menu, BookOpen } from 'lucide-react';

interface NavigationProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ activeTab, setActiveTab }) => {
  return (
    <nav className="bg-white border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => setActiveTab('explore')}>
              <div className="bg-indigo-600 p-2 rounded-lg">
                <BookOpen className="text-white w-6 h-6" />
              </div>
              <span className="text-xl font-bold text-slate-900 tracking-tight">EduVibe</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-6">
              <button 
                onClick={() => setActiveTab('explore')}
                className={`text-sm font-medium transition-colors ${activeTab === 'explore' ? 'text-indigo-600' : 'text-slate-500 hover:text-slate-900'}`}
              >
                Explore
              </button>
              <button 
                onClick={() => setActiveTab('community')}
                className={`text-sm font-medium transition-colors ${activeTab === 'community' ? 'text-indigo-600' : 'text-slate-500 hover:text-slate-900'}`}
              >
                Community
              </button>
              <button 
                onClick={() => setActiveTab('my-learning')}
                className={`text-sm font-medium transition-colors ${activeTab === 'my-learning' ? 'text-indigo-600' : 'text-slate-500 hover:text-slate-900'}`}
              >
                My Learning
              </button>
            </div>
          </div>

          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
              <input 
                type="text" 
                placeholder="Search courses, mentors, topics..." 
                className="w-full pl-10 pr-4 py-2 bg-slate-100 border-none rounded-full text-sm focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
              />
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button className="p-2 text-slate-500 hover:bg-slate-100 rounded-full transition-colors relative">
              <Bell className="w-5 h-5" />
              <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
            </button>
            <div className="h-8 w-px bg-slate-200"></div>
            <button className="flex items-center gap-2 p-1 hover:bg-slate-100 rounded-full transition-colors">
              <img src="https://picsum.photos/seed/profile/40/40" alt="Profile" className="w-8 h-8 rounded-full border border-slate-200" />
              <span className="hidden lg:block text-sm font-semibold text-slate-700">Alex J.</span>
            </button>
            <button className="md:hidden p-2 text-slate-500">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
