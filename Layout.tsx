
import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import AITutor from './components/AITutor';

const Layout: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col font-['Poppins'] bg-white">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      <AITutor />
    </div>
  );
};

export default Layout;
