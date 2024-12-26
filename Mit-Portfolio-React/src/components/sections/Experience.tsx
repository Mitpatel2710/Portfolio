import React from 'react';
import { motion } from 'framer-motion';
import { experienceData } from '../../data/timeline';
import { Building2 } from 'lucide-react';

export function Experience() {
  return (
    <div className="container mx-auto px-6">
      <motion.h2
        className="text-4xl font-normal text-gray-900 text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Experience
      </motion.h2>
      <div className="max-w-4xl mx-auto">
        {experienceData.map((item, index) => (
          <motion.div
            key={index}
            className="relative pl-12 mb-12 last:mb-0"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            {/* Year on the left */}
            <div className="absolute left-[-50px] top-2 text-sm font-semibold text-blue-600">
              {item.year}
            </div>

            {/* Vertical Timeline Line */}
            <div className="absolute left-[170px] top-0 h-full w-[2px] bg-blue-500"></div>

            {/* Blue Dot */}
            <div className="absolute left-[164px] top-2 h-4 w-4 rounded-full bg-blue-500 ring-4 ring-blue-100"></div>

            {/* Content Box */}
            <motion.div
              className="bg-white rounded-lg shadow-lg p-6 ml-[180px]"
              whileHover={{ scale: 1.02, x: 5 }}
              transition={{ duration: 0.2 }}
            >
              <motion.h3
                className="text-xl font-bold text-gray-900"
                whileHover={{ x: 5 }}
              >
                {item.organization}
              </motion.h3>
              <motion.div
                className="flex items-center gap-2 text-md font-medium text-gray-600 mt-1"
                whileHover={{ x: 5 }}
              >
                <Building2 className="w-4 h-4" />
                <span>{item.title}</span>
              </motion.div>
              <motion.div
                className="mt-3 text-gray-600 space-y-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                {item.description.split('\n\n').map((point, i) => (
                  <p key={i} className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>{point.trim().replace('• ', '')}</span>
                  </p>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
