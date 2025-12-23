import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import AITutor from './components/AITutor';

const Layout: React.FC = () => {
  // Fixed state type to include 'blog-detail' to match Header's expectations and satisfy the type system
  const [currentView, setCurrentView] = useState<'home' | 'blog' | 'login' | 'blog-detail'>('home');

  // Added a wrapper function to handle view changes and satisfy the optional 'mode' parameter in Header's onViewChange prop
  const handleViewChange = (view: 'home' | 'blog' | 'login' | 'blog-detail', mode?: 'login' | 'register') => {
    setCurrentView(view);
  };

  return (
    <div className="min-h-screen flex flex-col font-['Poppins'] bg-white">
      {/* Passed the correctly typed currentView and handleViewChange wrapper to the Header component */}
      <Header currentView={currentView} onViewChange={handleViewChange} />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      <AITutor />
    </div>
  );
};

export default Layout;