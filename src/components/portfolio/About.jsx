import React from 'react';
import { motion } from 'framer-motion';
import { Download, Award, Coffee, Users } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: <Award className="w-8 h-8" />, number: "20+", label: "Projects Completed" },
    { icon: <Users className="w-8 h-8" />, number: "10+", label: "Happy Clients" },
    { icon: <Coffee className="w-8 h-8" />, number: "500+", label: "Cups of Coffee" },
    { icon: <Award className="w-8 h-8" />, number: "3+", label: "Years Learning" }
  ];

  const timeline = [
    {
      year: "2024",
      title: "Full-Stack Developer",
      company: "Freelance / Personal Projects",
      description: "Building modern web applications using React, Node.js, and cloud technologies. Focus on creating responsive and user-friendly interfaces."
    },
    {
      year: "2023",
      title: "Frontend Developer",
      company: "Learning & Development",
      description: "Specialized in learning and practicing modern frontend technologies including React, JavaScript, and responsive design principles."
    },
    {
      year: "2022",
      title: "Web Development Journey",
      company: "Self-taught",
      description: "Started my web development journey, learning HTML, CSS, JavaScript, and exploring various frameworks and libraries."
    },
    {
      year: "2021",
      title: "Computer Science Student",
      company: "University",
      description: "Pursuing Computer Science education, focusing on programming fundamentals and software development principles."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About Me
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Passionate developer with a love for creating digital experiences that solve real-world problems.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          {/* About Content */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Hello! I'm Mohammad Ozair Khurami, a passionate full-stack developer.
            </h3>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                I'm a dedicated full-stack developer with passion for creating
                innovative digital solutions. My journey in tech started with a curiosity about
                how websites work, and it has evolved into a passion for building applications
                that make a difference.
              </p>
              <p>
                I specialize in modern web technologies including React, Node.js, and cloud platforms.
                I believe in writing clean, maintainable code and creating user experiences that
                are both beautiful and functional.
              </p>
              <p>
                When I'm not coding, you can find me exploring new technologies, contributing to
                open-source projects, or enjoying a good cup of coffee while reading about the
                latest industry trends.
              </p>
            </div>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-8 bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200 flex items-center space-x-2"
            >
              <Download className="w-5 h-5" />
              <span>Download Resume</span>
            </motion.button>
          </motion.div>

          {/* Profile Image & Stats */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="relative mb-8">
              <div className="w-64 h-64 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1">
                <div className="w-full h-full rounded-full bg-gray-300 flex items-center justify-center text-6xl font-bold text-gray-600">
                  MO
                </div>
              </div>
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500 rounded-full animate-bounce"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-500 rounded-full animate-bounce animation-delay-1000"></div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-50 rounded-lg p-4 text-center hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="text-blue-600 mb-2 flex justify-center">
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold text-gray-900 mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Experience Timeline */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            My Journey
          </h3>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-blue-600 to-purple-600"></div>
            
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg z-10"></div>
                  
                  {/* Content */}
                  <div className={`ml-12 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:text-right md:pr-8' : 'md:pl-8'}`}>
                    <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                      <span className="text-blue-600 font-semibold text-sm">{item.year}</span>
                      <h4 className="text-lg font-bold text-gray-900 mt-1 mb-2">{item.title}</h4>
                      <p className="text-blue-600 font-medium mb-3">{item.company}</p>
                      <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;