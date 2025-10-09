import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

const HeroSection = () => {
  const { hero } = portfolioData;
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [typedText, setTypedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // Rotating text animation
  const rotatingTexts = [
    "Full-Stack Developer",
    "UI/UX Designer",
    "Problem Solver",
    "Creative Thinker"
  ];

  // Typewriter effect
  useEffect(() => {
    const currentText = rotatingTexts[currentTextIndex];
    const typingSpeed = isDeleting ? 50 : 100;
    const pauseAfterTyping = 2000;

    const timer = setTimeout(() => {
      if (isDeleting) {
        // Deleting text
        setTypedText(currentText.substring(0, typedText.length - 1));
        if (typedText === '') {
          setIsDeleting(false);
          setCurrentTextIndex((prev) => (prev + 1) % rotatingTexts.length);
        }
      } else {
        // Typing text
        setTypedText(currentText.substring(0, typedText.length + 1));
        if (typedText === currentText) {
          setTimeout(() => setIsDeleting(true), pauseAfterTyping);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [typedText, isDeleting, currentTextIndex, rotatingTexts]);

  // Floating particle component
  const FloatingParticle = ({ size, duration, delay, position }) => (
    <motion.div
      className={`absolute rounded-full bg-blue-400/20 ${size}`}
      style={position}
      animate={{
        y: [0, -20, 0],
        x: [0, 10, 0],
        opacity: [0.2, 0.5, 0.2]
      }}
      transition={{
        duration: duration,
        repeat: Infinity,
        ease: "easeInOut",
        delay: delay
      }}
    />
  );

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden py-20">
      {/* Background Image Layer */}
      <div className="absolute inset-0">
        <img 
          src="assets/images/computer/pexels-andrew-2312369.jpg" 
          alt="Hero Background" 
          className="w-full h-full object-cover"
        />
        
        {/* Transparent Color Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 via-purple-900/70 to-gray-900/80"></div>
        
        {/* Animated gradient overlay */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20"
          animate={{
            background: [
              'linear-gradient(to right, rgba(37, 99, 235, 0.2), rgba(139, 92, 246, 0.2), rgba(219, 39, 119, 0.2))',
              'linear-gradient(to right, rgba(219, 39, 119, 0.2), rgba(37, 99, 235, 0.2), rgba(139, 92, 246, 0.2))',
              'linear-gradient(to right, rgba(139, 92, 246, 0.2), rgba(219, 39, 119, 0.2), rgba(37, 99, 235, 0.2))'
            ]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        
        {/* Floating particles */}
        <FloatingParticle size="w-2 h-2" duration={6} delay={0} position={{ top: '20%', left: '10%' }} />
        <FloatingParticle size="w-1 h-1" duration={8} delay={1} position={{ top: '70%', left: '5%' }} />
        <FloatingParticle size="w-1.5 h-1.5" duration={10} delay={2} position={{ top: '40%', right: '15%' }} />
        <FloatingParticle size="w-1 h-1" duration={7} delay={3} position={{ top: '80%', right: '25%' }} />
        <FloatingParticle size="w-2 h-2" duration={9} delay={4} position={{ top: '30%', right: '10%' }} />
        <FloatingParticle size="w-1 h-1" duration={12} delay={5} position={{ bottom: '30%', left: '20%' }} />
        <FloatingParticle size="w-1.5 h-1.5" duration={11} delay={6} position={{ bottom: '60%', right: '20%' }} />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left"
          >
            {/* Tagline */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-4"
            >
              <span className="text-sm uppercase tracking-widest text-blue-400 font-medium">
                Hello, I'm
              </span>
            </motion.div>
            
            {/* Headline */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
            >
              {hero.headline.split(' ').map((word, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className="inline-block mr-2"
                >
                  {word}
                </motion.span>
              ))}
            </motion.h1>
            
            {/* Rotating subheading */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="mb-8"
            >
              <h2 className="text-2xl md:text-3xl text-gray-300 font-medium h-10">
                {typedText}
                <span className="ml-1 inline-block w-1 h-8 bg-blue-400 align-middle animate-pulse"></span>
              </h2>
            </motion.div>
            
            {/* Description */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.0 }}
              className="text-lg text-gray-200 mb-10 max-w-2xl leading-relaxed"
            >
              {hero.description}
            </motion.p>
            
            {/* Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.2 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-blue-500/20 transition-all duration-300"
              >
                {hero.ctaPrimary}
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-gray-300 text-white font-semibold rounded-xl hover:border-blue-400 transition-all duration-300"
              >
                {hero.ctaSecondary}
              </motion.button>
            </motion.div>
          </motion.div>
          
          {/* Right content - Profile image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Outer glow ring */}
              <motion.div 
                className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 p-1 animate-pulse"
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <div className="w-full h-full rounded-full bg-gray-900"></div>
              </motion.div>
              
              {/* Main profile image */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-2xl border-4 border-white/20 backdrop-blur-sm">
                <img 
                  src="assets/images/profiles/profile_6.png" 
                  alt="Mohammad Ozair Khurami" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Floating particles around profile */}
              <motion.div
                className="absolute -top-4 -right-4 w-4 h-4 bg-blue-400 rounded-full"
                animate={{
                  y: [0, -15, 0],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div
                className="absolute -bottom-4 -left-4 w-3 h-3 bg-purple-400 rounded-full"
                animate={{
                  y: [0, 15, 0],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;