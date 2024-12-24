import React from 'react';
import { motion } from 'framer-motion';
import { experienceData } from '../../data/timeline';
import { Calendar, Building2 } from 'lucide-react';

export function Experience() {
  return (
    <div className="container mx-auto px-6">
      <motion.h2 
        className="text-4xl font-bold text-gray-900 text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Professional Experience
      </motion.h2>
      <div className="max-w-4xl mx-auto">
        {experienceData.map((item, index) => (
          <motion.div 
            key={index} 
            className="relative pl-8 mb-12 last:mb-0"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="absolute left-0 top-0 h-full w-[2px] bg-blue-200">
              <motion.div 
                className="absolute left-[-8px] top-2 h-4 w-4 rounded-full bg-blue-500 ring-4 ring-blue-100"
                whileHover={{ scale: 1.2 }}
                transition={{ duration: 0.2 }}
              />
            </div>
            <motion.div 
              className="bg-white rounded-lg shadow-lg p-6 ml-4"
              whileHover={{ scale: 1.02, x: 5 }}
              transition={{ duration: 0.2 }}
            >
              <motion.div 
                className="flex items-center gap-2 text-blue-600 mb-2"
                whileHover={{ x: 5 }}
              >
                <Calendar className="w-4 h-4" />
                <span className="text-sm font-semibold">{item.year}</span>
              </motion.div>
              <motion.h3 
                className="text-xl font-bold text-gray-900"
                whileHover={{ x: 5 }}
              >
                {item.title}
              </motion.h3>
              <motion.div 
                className="flex items-center gap-2 text-gray-600 mt-1"
                whileHover={{ x: 5 }}
              >
                <Building2 className="w-4 h-4" />
                <span>{item.organization}</span>
              </motion.div>
              <motion.p 
                className="mt-3 text-gray-600"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                {item.description}
              </motion.p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}