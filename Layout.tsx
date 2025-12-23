import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import AITutor from './components/AITutor';

const Layout: React.FC = () => {
  // Added state to manage currentView for the Header component to resolve missing required props error
  const [currentView, setCurrentView] = useState<'home' | 'blog'>('home');

  return (
    <div className="min-h-screen flex flex-col font-['Poppins'] bg-white">
      <Header currentView={currentView} onViewChange={setCurrentView} />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      <AITutor />
    </div>
  );
};

export default Layout;