import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { 
  getSkills, 
} from '../../../api/api';
const SkillsSection = () => {
  const { skills } = portfolioData;

  // Skill bar animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  const [skills1, setSkills] = useState([]);
  const [loading, setLoading] = useState(false);
  // Fetch skills
    useEffect(() => {
      fetchSkills();
    }, []);
  
    const fetchSkills = async () => {
      try {
        setLoading(true);
        const response = await getSkills();
        // Handle paginated response - extract data array
        const skillsData = response.data.data || response.data || [];
        setSkills(skillsData);
        console.log('Skills:', skillsData);
      } catch (error) {
        toast.error('Failed to fetch skills');
        console.error('Error fetching skills:', error);
        setSkills([]); // Set to empty array on error
      } finally {
        setLoading(false);
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

  // Animated skill bar component
  const SkillBar = ({ skill, index }) => {
    return (
      <motion.div
        variants={itemVariants}
        custom={index}
        className="mb-8"
      >
        <div className="flex justify-between items-center mb-2">
          <div className="flex items-center">
            <span className="text-2xl mr-3">{skill.icon}</span>
            <span className="text-lg font-medium text-white">{skill.name}</span>
          </div>
          <span className="text-blue-400 font-bold">{skill.level}%</span>
        </div>
        <div className="h-3 bg-gray-800 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: `${skill.level}%` }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: index * 0.1 }}
          />
        </div>
      </motion.div>
    );
  };

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
      <div className="max-w-4xl mx-auto">
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
            Skills & Expertise
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-xl text-gray-400 max-w-2xl mx-auto"
          >
            My technical skills and areas of expertise
          </motion.p>
        </motion.div>

        <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
          {skills.map((skill, index) => (
            <SkillBar key={skill.name} skill={skill} index={index} />
          ))}
        </div>

        {/* Additional skills with floating animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6"
        >
          {['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'MongoDB'].map((skill, index) => (
            <motion.div
              key={skill}
              whileHover={{ 
                y: -10,
                scale: 1.05,
                transition: { duration: 0.3 }
              }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 text-center border border-gray-700 hover:border-blue-500/50 transition-all duration-300"
            >
              <div className="text-2xl mb-2">💻</div>
              <h3 className="text-white font-medium">{skill}</h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;