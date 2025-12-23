
import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import Blog from './Blog';
import BlogDetail from './BlogDetail';
import Courses from './Courses';
import Login from './Login';
import AITutor from './components/AITutor';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<'home' | 'blog' | 'login' | 'blog-detail' | 'courses'>('home');
  const [preferredAuthMode, setPreferredAuthMode] = useState<'login' | 'register'>('login');

  const handleNavigate = (view: 'home' | 'blog' | 'login' | 'blog-detail' | 'courses', mode?: 'login' | 'register') => {
    if (mode) {
      setPreferredAuthMode(mode);
    }
    setCurrentView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col font-['Poppins'] bg-white">
      {/* Hide header on login page for clean auth experience */}
      {currentView !== 'login' && (
        <Header 
          currentView={currentView === 'blog-detail' ? 'blog' : currentView} 
          onViewChange={handleNavigate} 
        />
      )}
      
      <main className="flex-grow">
        {currentView === 'home' && <Home />}
        {currentView === 'blog' && <Blog onBlogClick={() => handleNavigate('blog-detail')} />}
        {currentView === 'blog-detail' && <BlogDetail onBlogClick={() => handleNavigate('blog-detail')} />}
        {currentView === 'courses' && <Courses />}
        {currentView === 'login' && (
          <Login 
            onViewChange={(view) => handleNavigate(view)} 
            initialMode={preferredAuthMode}
          />
        )}
      </main>
      
      {currentView !== 'login' && <Footer />}
      <AITutor />
    </div>
  );
};

export default App;
