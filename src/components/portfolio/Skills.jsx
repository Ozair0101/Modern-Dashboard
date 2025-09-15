import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Smartphone, Globe, Palette, Server } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Code className="w-8 h-8" />,
      skills: [
        { name: "React/Next.js", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "Vue.js", level: 85 },
        { name: "Tailwind CSS", level: 95 },
        { name: "Framer Motion", level: 80 }
      ]
    },
    {
      title: "Backend Development",
      icon: <Server className="w-8 h-8" />,
      skills: [
        { name: "Node.js", level: 90 },
        { name: "Python", level: 85 },
        { name: "Express.js", level: 88 },
        { name: "GraphQL", level: 75 },
        { name: "REST APIs", level: 92 }
      ]
    },
    {
      title: "Database & Cloud",
      icon: <Database className="w-8 h-8" />,
      skills: [
        { name: "MongoDB", level: 88 },
        { name: "PostgreSQL", level: 85 },
        { name: "Firebase", level: 80 },
        { name: "AWS", level: 75 },
        { name: "Docker", level: 70 }
      ]
    },
    {
      title: "Mobile Development",
      icon: <Smartphone className="w-8 h-8" />,
      skills: [
        { name: "React Native", level: 85 },
        { name: "Flutter", level: 70 },
        { name: "iOS Development", level: 65 },
        { name: "Android Development", level: 68 },
        { name: "Expo", level: 80 }
      ]
    },
    {
      title: "Design & UX",
      icon: <Palette className="w-8 h-8" />,
      skills: [
        { name: "Figma", level: 85 },
        { name: "Adobe XD", level: 80 },
        { name: "Photoshop", level: 75 },
        { name: "UI/UX Design", level: 88 },
        { name: "Prototyping", level: 82 }
      ]
    },
    {
      title: "DevOps & Tools",
      icon: <Globe className="w-8 h-8" />,
      skills: [
        { name: "Git/GitHub", level: 95 },
        { name: "CI/CD", level: 78 },
        { name: "Webpack", level: 80 },
        { name: "Jest/Testing", level: 85 },
        { name: "Vercel/Netlify", level: 90 }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const progressVariants = {
    hidden: { width: 0 },
    visible: (level) => ({
      width: `${level}%`,
      transition: {
        duration: 1.5,
        ease: "easeOut",
        delay: 0.2
      }
    })
  };

  return (
    <section id="skills" className="py-20 bg-white">
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
            Skills & Expertise
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            I'm passionate about creating exceptional digital experiences using cutting-edge
            technologies and best practices in development.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              variants={itemVariants}
              className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
            >
              {/* Category Header */}
              <div className="flex items-center mb-6">
                <div className="bg-blue-600 text-white p-3 rounded-lg mr-4">
                  {category.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {category.title}
                </h3>
              </div>

              {/* Skills List */}
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ 
                      duration: 0.5, 
                      delay: categoryIndex * 0.1 + skillIndex * 0.1 
                    }}
                    viewport={{ once: true }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-700">
                        {skill.name}
                      </span>
                      <span className="text-sm text-gray-500">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="bg-gray-200 rounded-full h-2">
                      <motion.div
                        className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full"
                        variants={progressVariants}
                        initial="hidden"
                        whileInView="visible"
                        custom={skill.level}
                        viewport={{ once: true }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-4">Always Learning</h3>
            <p className="text-blue-100 max-w-2xl mx-auto">
              Technology evolves rapidly, and I'm committed to staying current with the latest
              tools, frameworks, and best practices. I regularly participate in online courses,
              attend conferences, and contribute to open-source projects.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;