import React from 'react';
import MainScene from './scenes/MainScene';
import BeautifulFooter from './components/BeautifulFooter';

const Portfolio3D = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white overflow-hidden">
      {/* 3D Scene */}
      <MainScene />
      
      {/* Footer */}
      <BeautifulFooter />
    </div>
  );
};

export default Portfolio3D;