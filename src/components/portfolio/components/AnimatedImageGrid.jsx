import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { imageData } from '../data/portfolioData';

const AnimatedImageGrid = () => {
  // Tilt effect for images
  const tiltRef = useRef(null);

  useEffect(() => {
    const element = tiltRef.current;
    if (!element) return;

    const handleMouseMove = (e) => {
      const rect = element.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateY = ((x - centerX) / centerX) * 10;
      const rotateX = ((centerY - y) / centerY) * 10;

      element.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    };

    const handleMouseLeave = () => {
      element.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
    };

    element.addEventListener('mousemove', handleMouseMove);
    element.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      element.removeEventListener('mousemove', handleMouseMove);
      element.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  // Image grid animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-4xl font-bold text-white mb-4"
          >
            Creative Work
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-xl text-gray-400 max-w-2xl mx-auto"
          >
            A showcase of my recent projects and creative endeavors
          </motion.p>
        </motion.div>

        <div 
          ref={tiltRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {imageData.slice(0, 6).map((image, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05, 
                zIndex: 10,
                transition: { duration: 0.3 }
              }}
              className="relative group rounded-2xl overflow-hidden shadow-xl"
            >
              <div className="relative overflow-hidden rounded-2xl">
                <motion.img
                  src={`/assets/images/computer/${image}`}
                  alt={`Project ${index + 1}`}
                  className="w-full h-64 object-cover transition-all duration-500 group-hover:scale-110"
                  whileHover={{ scale: 1.1 }}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-80"></div>
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={false}
                  whileHover={{ opacity: 1 }}
                />
              </div>
              
              <motion.div 
                className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"
                initial={false}
                whileHover={{ y: 0 }}
              >
                <h3 className="text-xl font-bold text-white">Project {index + 1}</h3>
                <p className="text-gray-300 mt-1">Creative design showcase</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AnimatedImageGrid;