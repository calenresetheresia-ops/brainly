
import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

interface HeaderProps {
  currentView: 'home' | 'blog' | 'login' | 'blog-detail' | 'courses';
  onViewChange: (view: 'home' | 'blog' | 'login' | 'blog-detail' | 'courses', mode?: 'login' | 'register') => void;
}

const Header: React.FC<HeaderProps> = ({ currentView, onViewChange }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const isHome = currentView === 'home';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const headerBg = isScrolled 
    ? (isHome ? 'bg-primary/95 backdrop-blur-md shadow-lg py-3' : 'bg-white/95 backdrop-blur-md shadow-sm py-3') 
    : 'bg-transparent backdrop-blur-md py-5';
  
  const textColor = isHome ? 'text-white' : 'text-[#2F327D]';
  const logoBg = isHome ? 'bg-white' : 'bg-primary';
  const logoText = isHome ? 'text-primary' : 'text-white';

  const navigateTo = (view: 'home' | 'blog' | 'login' | 'blog-detail' | 'courses', mode?: 'login' | 'register') => {
    onViewChange(view, mode);
  };

  return (
    <header className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 ${headerBg}`}>
      <nav className="flex items-center justify-between px-6 max-w-7xl mx-auto">
        <div 
          onClick={() => navigateTo('home')} 
          className="flex items-center gap-2 cursor-pointer"
        >
          <div className={`p-1 rounded-lg transition-colors ${logoBg}`}>
            <div className={`w-8 h-8 rounded flex items-center justify-center font-bold transition-colors ${logoText}`}>
              T
            </div>
          </div>
          <span className={`text-2xl font-bold tracking-tight transition-colors ${textColor}`}>TOTC</span>
        </div>
        
        <div className={`hidden md:flex items-center gap-10 font-medium text-sm transition-colors ${textColor}`}>
          <button 
            onClick={() => navigateTo('home')} 
            className={`relative py-1 group transition-all ${isHome ? 'font-bold' : 'hover:text-primary'}`}
          >
            Home
            <div className={`absolute -bottom-1 left-0 h-0.5 w-full rounded-full transition-all ${isHome ? 'bg-current scale-100' : 'bg-primary scale-0 group-hover:scale-100'}`}></div>
          </button>
          <button 
            onClick={() => navigateTo('courses')}
            className={`hover:text-primary transition-colors cursor-pointer relative py-1 group ${currentView === 'courses' ? 'font-bold text-primary' : ''}`}
          >
            Courses
            <div className={`absolute -bottom-1 left-0 h-0.5 w-full bg-primary rounded-full transition-all ${currentView === 'courses' ? 'scale-100' : 'scale-0 group-hover:scale-100'}`}></div>
          </button>
          <button className="hover:text-primary transition-colors cursor-pointer">Careers</button>
          <button 
            onClick={() => navigateTo('blog')} 
            className={`relative py-1 group transition-all ${currentView === 'blog' || currentView === 'blog-detail' ? 'font-bold text-primary' : 'hover:text-primary'}`}
          >
            Blog
            <div className={`absolute -bottom-1 left-0 h-0.5 w-full bg-primary rounded-full transition-all ${currentView === 'blog' || currentView === 'blog-detail' ? 'scale-100' : 'scale-0 group-hover:scale-100'}`}></div>
          </button>
          <button className="hover:text-primary transition-colors cursor-pointer">About Us</button>
        </div>

        <div className="flex items-center gap-4">
          {currentView !== 'home' && currentView !== 'login' ? (
            <div className="flex items-center gap-3 cursor-pointer group">
              <img src="https://i.pravatar.cc/150?u=lina" alt="Lina" className="w-10 h-10 rounded-full border border-slate-200 shadow-sm" />
              <div className="hidden lg:flex items-center gap-1">
                <span className="text-sm font-bold text-[#2F327D]">Lina</span>
                <ChevronDown className="w-4 h-4 text-[#2F327D] group-hover:translate-y-0.5 transition-transform" />
              </div>
            </div>
          ) : (
            <>
              <button 
                onClick={() => navigateTo('login', 'login')}
                className={`px-8 py-2.5 rounded-full font-bold text-sm shadow-md hover:scale-105 active:scale-95 transition-all ${isScrolled ? 'bg-white text-primary' : 'bg-white text-[#2F327D]'}`}
              >
                Login
              </button>
              <button 
                onClick={() => navigateTo('login', 'register')}
                className={`px-8 py-2.5 rounded-full font-bold text-sm border hover:bg-white/30 active:scale-95 transition-all bg-white/20 text-white border-white/30`}
              >
                Sign Up
              </button>
            </>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
