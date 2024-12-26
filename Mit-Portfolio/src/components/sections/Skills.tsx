import React from 'react';
import { motion } from 'framer-motion';
import { skillCategories } from '../../data/skills';
import { StaggerContainer } from '../animations/StaggerContainer';
import { getSkillIcon } from '../../utils/skillIcons';

const skillVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

export function Skills() {
  return (
    <div className="container mx-auto px-6">
      <motion.h2 
        className="text-4xl font-normal text-gray-900 text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Skills
      </motion.h2>
      <StaggerContainer>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              className="bg-white rounded-xl shadow-lg p-6"
              variants={skillVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <motion.div
                  className="p-2 bg-blue-50 rounded-lg"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  {React.createElement(getSkillIcon(category.title), {
                    className: "w-6 h-6 text-blue-600"
                  })}
                </motion.div>
                <h3 className="text-lg font-normal text-gray-900">
                  {category.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </StaggerContainer>
    </div>
  );
}