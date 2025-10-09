// Developer Notes:
// How to install necessary packages:
// npm i framer-motion
// or
// yarn add framer-motion

// How to change the images source path if needed:
// Update the import path in the getComputerImages function to point to a different folder

// How to add new projects:
// Add new objects to the projectsData array with title, description, tags, and image properties

// Animation timing and customization:
// All animation durations and delays are defined as constants at the top of the component
// To disable animations globally, set disableAnimations to true in the component state

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Animation timing constants
const ANIMATION_DURATION = 0.8;
const STAGGER_DELAY = 0.12;
const FLOAT_AMPLITUDE = 10;
const FLOAT_DURATION = 3;

// Helper function to dynamically import images from the computer folder
const getComputerImages = () => {
  // In a real project, you would use require.context or import.meta.glob
  // For this example, we'll return a static array of image paths
  return [
    '/assets/images/computer/pexels-andrew-2312369.jpg',
    '/assets/images/computer/pexels-designecologist-1779487.jpg',
    '/assets/images/computer/pexels-elvis-1316342-2528118.jpg',
    '/assets/images/computer/pexels-kevin-ku-92347-577585.jpg',
    '/assets/images/computer/pexels-mateusz-dach-99805-2811648.jpg',
    '/assets/images/computer/pexels-maumascaro-912387.jpg',
    '/assets/images/computer/pexels-maumascaro-912388.jpg',
    '/assets/images/computer/pexels-picjumbo-com-55570-196655.jpg',
  ];
};

// Project data
const projectsData = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-featured online shopping experience with real-time inventory management.",
    tags: ["React", "Node.js", "MongoDB"],
    image: "/assets/images/computer/pexels-designecologist-1779487.jpg"
  },
  {
    id: 2,
    title: "Health & Fitness App",
    description: "Mobile application for tracking workouts, nutrition, and health metrics.",
    tags: ["React Native", "Firebase", "Redux"],
    image: "/assets/images/computer/pexels-kevin-ku-92347-577585.jpg"
  },
  {
    id: 3,
    title: "Financial Dashboard",
    description: "Real-time analytics and visualization for financial data.",
    tags: ["Vue.js", "D3.js", "Python"],
    image: "/assets/images/computer/pexels-maumascaro-912387.jpg"
  },
  {
    id: 4,
    title: "Travel Booking System",
    description: "Comprehensive platform for booking flights, hotels, and activities.",
    tags: ["Angular", "Express", "PostgreSQL"],
    image: "/assets/images/computer/pexels-thngocbich-1714341.jpg"
  }
];

// Skill badges data
const skillsData = [
  { name: "React", level: 95 },
  { name: "Node.js", level: 90 },
  { name: "UI/UX", level: 85 },
  { name: "Python", level: 80 },
  { name: "AWS", level: 75 }
];

// Social media links
const socialLinks = [
  { name: "GitHub", url: "https://github.com/Ozair0101/", icon: "GitHub" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/mohammad-ozair-khurami-b7ba7b274/", icon: "LinkedIn" },
  { name: "Email", url: "mailto:ozairjan186@gmail.com", icon: "Email" }
];

// Typewriter effect hook
const useTypewriter = (phrases, speed = 150, delay = 2000) => {
  const [text, setText] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];
    
    const timer = setTimeout(() => {
      if (isDeleting) {
        // Deleting text
        setText(currentPhrase.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
        
        if (charIndex === 0) {
          setIsDeleting(false);
          setPhraseIndex((prev) => (prev + 1) % phrases.length);
        }
      } else {
        // Typing text
        setText(currentPhrase.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
        
        if (charIndex === currentPhrase.length) {
          setTimeout(() => setIsDeleting(true), delay);
        }
      }
    }, speed);
    
    return () => clearTimeout(timer);
  }, [text, charIndex, isDeleting, phraseIndex, phrases, speed, delay]);

  return text;
};

// Tilt effect hook
const useTiltEffect = () => {
  const ref = useRef(null);
  
  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    
    const handleMouseMove = (e) => {
      const rect = element.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateY = ((x - centerX) / centerX) * 10;
      const rotateX = ((centerY - y) / centerY) * 10;
      
      element.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
    };
    
    const handleMouseLeave = () => {
      element.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
    };
    
    element.addEventListener('mousemove', handleMouseMove);
    element.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      element.removeEventListener('mousemove', handleMouseMove);
      element.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);
  
  return ref;
};

const Home = () => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const computerImages = getComputerImages();
  const typewriterText = useTypewriter([
    "Full-Stack Developer",
    "UI/UX Designer",
    "Problem Solver"
  ]);
  
  // Check for prefers-reduced-motion
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    
    const handler = (e) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handler);
    
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: STAGGER_DELAY
      }
    }
  };
  
  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: prefersReducedMotion ? 0 : 20 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: ANIMATION_DURATION,
        ease: "easeOut"
      }
    }
  };
  
  const floatVariants = {
    animate: {
      y: prefersReducedMotion ? 0 : [0, -FLOAT_AMPLITUDE, 0],
      transition: {
        duration: FLOAT_DURATION,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };
  
  const parallaxVariants = {
    visible: { 
      y: 0,
      transition: {
        duration: ANIMATION_DURATION,
        ease: "easeOut"
      }
    },
    hidden: { 
      y: prefersReducedMotion ? 0 : 50
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f1724] via-[#0b1220] to-[#071226] text-white overflow-x-hidden">
      {/* Background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl"></div>
      </div>
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - Content */}
            <motion.div
              className="text-left"
              initial="hidden"
              animate="visible"
              variants={containerVariants}
            >
              {/* Tagline */}
              <motion.div 
                className="mb-6"
                variants={itemVariants}
              >
                <span className="text-sm uppercase tracking-widest text-violet-400 font-medium">
                  Hello, I'm
                </span>
              </motion.div>
              
              {/* Name/Headline */}
              <motion.h1 
                className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
                variants={itemVariants}
              >
                <span className="block">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-teal-400">
                    Mohammad Ozair
                  </span>
                </span>
                <span className="block">Khurami</span>
              </motion.h1>
              
              {/* Subheading with typewriter effect */}
              <motion.div 
                className="mb-10"
                variants={itemVariants}
              >
                <h2 className="text-2xl md:text-3xl text-gray-300 font-medium h-10">
                  {typewriterText}
                  <span className="ml-1 inline-block w-1 h-8 bg-violet-400 align-middle animate-pulse"></span>
                </h2>
              </motion.div>
              
              {/* Description */}
              <motion.p 
                className="text-lg text-gray-400 mb-10 max-w-2xl leading-relaxed"
                variants={itemVariants}
              >
                I create elegant digital experiences that combine beautiful design with powerful functionality. 
                Passionate about clean code, intuitive user interfaces, and solving complex problems with simple solutions.
              </motion.p>
              
              {/* Buttons */}
              <motion.div 
                className="flex flex-col sm:flex-row gap-4"
                variants={itemVariants}
              >
                <motion.button
                  className="px-8 py-4 bg-gradient-to-r from-violet-600 to-violet-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-violet-500/20 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 focus:ring-offset-[#0f1724]"
                  whileHover={{ scale: prefersReducedMotion ? 1 : 1.05 }}
                  whileTap={{ scale: prefersReducedMotion ? 1 : 0.95 }}
                >
                  View Work
                </motion.button>
                
                <motion.button
                  className="px-8 py-4 border-2 border-gray-700 text-white font-semibold rounded-xl hover:border-violet-500 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 focus:ring-offset-[#0f1724]"
                  whileHover={{ scale: prefersReducedMotion ? 1 : 1.05 }}
                  whileTap={{ scale: prefersReducedMotion ? 1 : 0.95 }}
                >
                  Download CV
                </motion.button>
              </motion.div>
            </motion.div>
            
            {/* Right Column - Image Collage */}
            <motion.div
              className="relative h-full flex items-center justify-center"
              initial="hidden"
              animate="visible"
              variants={containerVariants}
            >
              <div className="relative w-full max-w-2xl">
                {/* Main image */}
                <motion.div
                  className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-800"
                  variants={parallaxVariants}
                  style={{ y: prefersReducedMotion ? 0 : -20 }}
                >
                  <img 
                    src={computerImages[0]} 
                    alt="Main project showcase" 
                    className="w-full h-auto object-cover"
                    loading="lazy"
                  />
                </motion.div>
                
                {/* Floating images */}
                <motion.div
                  className="absolute -top-6 -left-6 w-2/5 rounded-xl overflow-hidden shadow-2xl border border-gray-800 z-10"
                  variants={floatVariants}
                  animate="animate"
                  style={{ y: prefersReducedMotion ? 0 : -10 }}
                >
                  <img 
                    src={computerImages[1]} 
                    alt="Project detail" 
                    className="w-full h-auto object-cover"
                    loading="lazy"
                  />
                </motion.div>
                
                <motion.div
                  className="absolute -bottom-6 -right-6 w-2/5 rounded-xl overflow-hidden shadow-2xl border border-gray-800 z-10"
                  variants={floatVariants}
                  animate="animate"
                  style={{ y: prefersReducedMotion ? 0 : 10, transitionDelay: '0.5s' }}
                >
                  <img 
                    src={computerImages[2]} 
                    alt="Project interface" 
                    className="w-full h-auto object-cover"
                    loading="lazy"
                  />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Skills Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="flex flex-wrap justify-center gap-8 md:gap-12"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            {skillsData.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="text-center"
                variants={itemVariants}
                custom={index}
              >
                <div className="relative w-24 h-24 mb-4">
                  <svg className="w-full h-full" viewBox="0 0 36 36">
                    <path
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="#1a202c"
                      strokeWidth="3"
                    />
                    <path
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="#7c5cff"
                      strokeWidth="3"
                      strokeDasharray={`${skill.level}, 100`}
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-lg font-bold">{skill.level}%</span>
                  </div>
                </div>
                <h3 className="text-lg font-medium">{skill.name}</h3>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      
      {/* Projects Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" id="projects">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.h2 
              className="text-4xl font-bold mb-4"
              variants={itemVariants}
            >
              Featured Projects
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-400 max-w-2xl mx-auto"
              variants={itemVariants}
            >
              A selection of my recent work showcasing my design and development skills
            </motion.p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            <AnimatePresence>
              {projectsData.map((project, index) => (
                <motion.div
                  key={project.id}
                  className="bg-[#1a202c]/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-800 hover:border-violet-500/30 transition-all duration-300"
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={itemVariants}
                  custom={index}
                  whileHover={{ y: prefersReducedMotion ? 0 : -10 }}
                >
                  <div className="relative overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-60 object-cover transition-transform duration-500 hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0f1724] to-transparent opacity-80"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                    <p className="text-gray-400 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag, tagIndex) => (
                        <span 
                          key={tagIndex} 
                          className="px-3 py-1 bg-violet-900/30 text-violet-300 rounded-full text-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <motion.button
                      className="text-violet-400 font-semibold flex items-center group"
                      whileHover={{ x: prefersReducedMotion ? 0 : 5 }}
                    >
                      View Case Study
                      <svg 
                        className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.div variants={itemVariants}>
              <h2 className="text-4xl font-bold mb-6">About Me</h2>
              <motion.p 
                className="text-lg text-gray-400 mb-6"
                variants={itemVariants}
              >
                I'm a passionate <motion.span className="text-violet-400 font-semibold" animate={{ opacity: [1, 0.7, 1] }} transition={{ duration: 2, repeat: Infinity }}>full-stack developer</motion.span> with over 5 years of experience creating digital solutions that make a difference.
              </motion.p>
              <motion.p 
                className="text-lg text-gray-400 mb-6"
                variants={itemVariants}
              >
                My approach combines technical expertise with creative problem-solving to build products that are not only functional but also delightful to use.
              </motion.p>
              <motion.p 
                className="text-lg text-gray-400"
                variants={itemVariants}
              >
                When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the developer community.
              </motion.p>
            </motion.div>
            
            <motion.div 
              className="relative"
              variants={itemVariants}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-800">
                <img 
                  src={computerImages[3]} 
                  alt="About me" 
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.h2 
              className="text-4xl font-bold mb-6"
              variants={itemVariants}
            >
              Let's Work Together
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto"
              variants={itemVariants}
            >
              Have a project in mind? I'd love to hear about it. Let's create something amazing together.
            </motion.p>
            
            <motion.div 
              className="mb-12"
              variants={itemVariants}
            >
              <motion.button
                className="px-8 py-4 bg-gradient-to-r from-violet-600 to-teal-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-violet-500/20 transition-all duration-300 text-lg relative overflow-hidden group"
                whileHover={{ scale: prefersReducedMotion ? 1 : 1.05 }}
                whileTap={{ scale: prefersReducedMotion ? 1 : 0.95 }}
              >
                <span className="relative z-10">Get In Touch</span>
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-teal-500 to-violet-600 opacity-0 group-hover:opacity-100 transition-opacity"
                  initial={false}
                  animate={{ 
                    backgroundPosition: ['0% 0%', '100% 100%']
                  }}
                  transition={{ 
                    duration: 1, 
                    repeat: Infinity, 
                    repeatType: "reverse" 
                  }}
                />
              </motion.button>
            </motion.div>
            
            <motion.div 
              className="flex justify-center space-x-6"
              variants={itemVariants}
            >
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-[#1a202c] border border-gray-800 flex items-center justify-center text-gray-400 hover:text-violet-400 hover:border-violet-500/30 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-violet-500"
                  whileHover={{ y: prefersReducedMotion ? 0 : -5 }}
                  whileTap={{ scale: prefersReducedMotion ? 1 : 0.9 }}
                  aria-label={link.name}
                >
                  {link.icon === "GitHub" && (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" />
                    </svg>
                  )}
                  {link.icon === "LinkedIn" && (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  )}
                  {link.icon === "Email" && (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  )}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-10 px-4 sm:px-6 lg:px-8 border-t border-gray-800">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.p 
              className="text-gray-500"
              variants={itemVariants}
            >
              © {new Date().getFullYear()} Mohammad Ozair Khurami. All rights reserved.
            </motion.p>
          </motion.div>
        </div>
      </footer>
    </div>
  );
};

export default Home;