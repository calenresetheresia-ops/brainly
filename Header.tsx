
import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const headerBg = isHome 
    ? (isScrolled ? 'bg-primary/95 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-5') 
    : 'bg-white shadow-sm py-4';
  
  const textColor = isHome ? 'text-white' : 'text-[#2F327D]';
  const logoBg = isHome ? 'bg-white' : 'bg-primary';
  const logoText = isHome ? 'text-primary' : 'text-white';

  return (
    <header className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 ${headerBg}`}>
      <nav className="flex items-center justify-between px-6 max-w-7xl mx-auto">
        {/* Logo Section */}
        <NavLink to="/" className="flex items-center gap-2">
          <div className={`p-1 rounded-lg transition-colors ${logoBg}`}>
            <div className={`w-8 h-8 rounded flex items-center justify-center font-bold transition-colors ${logoText}`}>
              T
            </div>
          </div>
          <span className={`text-2xl font-bold tracking-tight transition-colors ${textColor}`}>TOTC</span>
        </NavLink>
        
        {/* Desktop Navigation Links */}
        <div className={`hidden md:flex items-center gap-10 font-medium text-sm transition-colors ${textColor}`}>
          <NavLink 
            to="/" 
            className={({ isActive }) => `relative py-1 group transition-all ${isActive ? 'font-bold' : 'hover:text-primary'}`}
          >
            {({ isActive }) => (
              <>
                Home
                <div className={`absolute -bottom-1 left-0 h-0.5 w-full rounded-full transition-all ${isActive ? 'bg-current scale-100' : 'bg-primary scale-0 group-hover:scale-100'}`}></div>
              </>
            )}
          </NavLink>
          <a href="#" className="hover:text-primary transition-colors">Courses</a>
          <a href="#" className="hover:text-primary transition-colors">Careers</a>
          <NavLink 
            to="/blog" 
            className={({ isActive }) => `relative py-1 group transition-all ${isActive ? 'font-bold text-primary' : 'hover:text-primary'}`}
          >
            {({ isActive }) => (
              <>
                Blog
                <div className={`absolute -bottom-1 left-0 h-0.5 w-full bg-primary rounded-full transition-all ${isActive ? 'scale-100' : 'scale-0 group-hover:scale-100'}`}></div>
              </>
            )}
          </NavLink>
          <a href="#" className="hover:text-primary transition-colors">About Us</a>
        </div>

        {/* Action Buttons / Profile Section */}
        <div className="flex items-center gap-4">
          {!isHome ? (
            <div className="flex items-center gap-3 cursor-pointer group">
              <img src="https://i.pravatar.cc/150?u=lina" alt="Lina" className="w-10 h-10 rounded-full border border-slate-200 shadow-sm" />
              <div className="hidden lg:flex items-center gap-1">
                <span className="text-sm font-bold text-[#2F327D]">Lina</span>
                <ChevronDown className="w-4 h-4 text-[#2F327D] group-hover:translate-y-0.5 transition-transform" />
              </div>
            </div>
          ) : (
            <>
              <button className={`px-8 py-2.5 rounded-full font-bold text-sm shadow-md hover:scale-105 active:scale-95 transition-all ${isScrolled ? 'bg-white text-primary' : 'bg-white text-[#2F327D]'}`}>Login</button>
              <button className={`px-8 py-2.5 rounded-full font-bold text-sm border hover:bg-white/30 active:scale-95 transition-all bg-white/20 text-white border-white/30`}>Sign Up</button>
            </>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
