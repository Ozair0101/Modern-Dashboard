import React from 'react';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import AnimatedImageGrid from './components/AnimatedImageGrid';
import SkillsSection from './components/SkillsSection';
import ProjectShowcase from './components/ProjectShowcase';
import ContactSection from './components/ContactSection';

const PortfolioHome = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white overflow-x-hidden">
      {/* Background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>
      
      {/* Navigation */}
      <Navigation />
      
      {/* Main content */}
      <main>
        {/* Hero Section */}
        <HeroSection />
        
        {/* Animated Image Grid */}
        <AnimatedImageGrid />
        
        {/* Skills Section */}
        <SkillsSection />
        
        {/* Project Showcase */}
        <ProjectShowcase />
        
        {/* Contact Section */}
        <ContactSection />
      </main>
      
      {/* Footer */}
      <footer className="py-10 px-4 sm:px-6 lg:px-8 border-t border-gray-800">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-500">
            © {new Date().getFullYear()} Mohammad Ozair Khurami. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default PortfolioHome;