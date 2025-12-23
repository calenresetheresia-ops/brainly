
import React from 'react';
import { HomeHero, SuccessStats, HomeFeatures, CourseExplorer } from './HomeSections';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col">
      <HomeHero />
      <SuccessStats />
      <HomeFeatures />
      <CourseExplorer />
    </div>
  );
};

export default Home;
