import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Github, Linkedin, Mail, Download, ArrowRight } from 'lucide-react';

const Hero = () => {
  const scrollToNext = () => {
    document.getElementById('about').scrollIntoView({
      behavior: 'smooth',
    });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"
    >
      {/* Enhanced Background Animation */}
      <div className="absolute inset-0">
        {/* Primary gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10"></div>
        
        {/* Animated background shapes */}
        <motion.div 
          className="absolute -top-40 -right-32 w-96 h-96 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20"
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute -bottom-40 -left-32 w-96 h-96 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20"
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
        <motion.div 
          className="absolute top-1/3 right-1/4 w-80 h-80 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-15"
          animate={{
            x: [0, 50, 0],
            y: [0, -50, 0],
            scale: [1, 0.8, 1]
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4
          }}
        />
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIwLjUiIG9wYWNpdHk9IjAuMDUiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20"></div>
      </div>

      <motion.div 
        className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Enhanced Profile Image */}
        <motion.div
          variants={itemVariants}
          className="mb-8 relative"
        >
          <motion.div 
            className="w-40 h-40 md:w-48 md:h-48 mx-auto relative group cursor-pointer"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            {/* Outer glow ring */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-1 animate-pulse">
              <div className="w-full h-full rounded-full bg-slate-900"></div>
            </div>
            
            {/* Main profile container */}
            <div className="absolute inset-2 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 p-1 shadow-2xl">
              <div className="w-full h-full rounded-full bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center overflow-hidden group-hover:shadow-2xl transition-all duration-300">
                {/* Profile image placeholder - you can replace this with an actual image */}
                <div className="w-full h-full rounded-full bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center text-4xl md:text-5xl font-bold text-slate-700 relative overflow-hidden">
                  <span className="relative z-10">MO</span>
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            </div>
            
            {/* Floating particles around profile */}
            <motion.div
              className="absolute -top-2 -right-2 w-3 h-3 bg-blue-400 rounded-full"
              animate={{
                y: [0, -10, 0],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="absolute -bottom-2 -left-2 w-2 h-2 bg-purple-400 rounded-full"
              animate={{
                y: [0, 10, 0],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
            />
            <motion.div
              className="absolute top-1/2 -right-4 w-1.5 h-1.5 bg-pink-400 rounded-full"
              animate={{
                x: [0, 10, 0],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5
              }}
            />
          </motion.div>
        </motion.div>

        {/* Enhanced Name with gradient */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 relative"
        >
          <span className="bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
            Mohammad Ozair Khurami
          </span>
          <motion.div
            className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 1, duration: 0.8, ease: "easeOut" }}
          />
        </motion.h1>

        {/* Enhanced Tagline */}
        <motion.div
          variants={itemVariants}
          className="mb-8"
        >
          <motion.p className="text-xl md:text-2xl lg:text-3xl text-slate-200 mb-4 font-medium">
            <span className="text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text">
              Full-Stack Developer
            </span>
            {" & "}
            <span className="text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text">
              UI/UX Designer
            </span>
          </motion.p>
          
          {/* Intro text with typewriter effect */}
          <motion.p 
            className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
          >
            Crafting beautiful, functional digital experiences with passion for 
            <span className="text-transparent bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text font-semibold"> clean code</span>, 
            <span className="text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text font-semibold"> innovative design</span>, and 
            <span className="text-transparent bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text font-semibold"> user-centered solutions</span>.
          </motion.p>
        </motion.div>

        {/* Enhanced CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
        >
          <motion.button
            onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
            className="group relative bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25 overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10 flex items-center gap-2">
              View My Work
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </motion.button>
          
          <motion.button
            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            className="group relative border-2 border-white/20 backdrop-blur-sm bg-white/5 hover:bg-white/10 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-white/10 hover:border-white/40"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="flex items-center gap-2">
              Contact Me
              <Mail size={18} className="group-hover:rotate-12 transition-transform duration-300" />
            </span>
          </motion.button>
          
          <motion.button
            className="group relative border-2 border-emerald-400/30 backdrop-blur-sm bg-emerald-500/5 hover:bg-emerald-500/10 text-emerald-400 px-6 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/10 hover:border-emerald-400/60"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="flex items-center gap-2">
              <Download size={18} className="group-hover:-translate-y-1 transition-transform duration-300" />
              Resume
            </span>
          </motion.button>
        </motion.div>

        {/* Enhanced Social Links */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center space-x-8 mb-20"
        >
          <motion.a
            href="https://github.com/Ozair0101/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative p-4 rounded-full border border-white/10 backdrop-blur-sm bg-white/5 text-white/70 hover:text-white hover:border-white/30 transition-all duration-300 hover:shadow-lg hover:shadow-white/10"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github size={24} className="group-hover:rotate-12 transition-transform duration-300" />
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-gray-600 to-gray-800 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
          </motion.a>
          
          <motion.a
            href="https://www.linkedin.com/in/mohammad-ozair-khurami-b7ba7b274/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative p-4 rounded-full border border-white/10 backdrop-blur-sm bg-white/5 text-white/70 hover:text-white hover:border-blue-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Linkedin size={24} className="group-hover:rotate-12 transition-transform duration-300" />
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 to-blue-800 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
          </motion.a>
          
          <motion.a
            href="mailto:ozairjan186@gmail.com"
            className="group relative p-4 rounded-full border border-white/10 backdrop-blur-sm bg-white/5 text-white/70 hover:text-white hover:border-purple-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Mail size={24} className="group-hover:rotate-12 transition-transform duration-300" />
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
          </motion.a>
        </motion.div>

        {/* Enhanced Scroll Indicator */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col items-center"
        >
          <motion.p className="text-sm text-white/50 mb-4 font-medium tracking-wider uppercase">
            Scroll to explore
          </motion.p>
          <motion.button
            onClick={scrollToNext}
            className="group relative p-3 rounded-full border border-white/20 backdrop-blur-sm bg-white/5 text-white/70 hover:text-white hover:border-white/40 transition-all duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            animate={{
              y: [0, 8, 0]
            }}
            transition={{
              y: {
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
          >
            <ChevronDown size={24} className="group-hover:translate-y-1 transition-transform duration-300" />
            <div className="absolute inset-0 rounded-full bg-gradient-to-b from-white/10 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;