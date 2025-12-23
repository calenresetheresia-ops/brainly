
import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import Blog from './Blog';
import AITutor from './components/AITutor';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<'home' | 'blog'>('home');

  return (
    <div className="min-h-screen flex flex-col font-['Poppins'] bg-white">
      <Header currentView={currentView} onViewChange={setCurrentView} />
      <main className="flex-grow">
        {currentView === 'home' ? <Home /> : <Blog />}
      </main>
      <Footer />
      <AITutor />
    </div>
  );
};

export default App;