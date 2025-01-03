import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { educationData } from '../../data/timeline';
import { GraduationCap } from 'lucide-react';

export function Education() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const updateMedia = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    updateMedia(); // Initial check
    window.addEventListener('resize', updateMedia);
    return () => window.removeEventListener('resize', updateMedia);
  }, []);

  return (
    <div className="container mx-auto px-6">
      <motion.h2
        className="text-4xl font-bold text-gray-900 text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Education
      </motion.h2>

      <div className="max-w-4xl mx-auto">
        {educationData.map((item, index) => (
          <motion.div
            key={index}
            className={`relative ${isMobile ? 'pl-6' : 'pl-12'} mb-12 last:mb-20`}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            {/* Year on the left */}
            {isMobile ? (
              <div
                className="absolute  left-[40px] -top-8 text-xs font-semibold text-blue-600"
              >
                {item.year}
              </div>
            ) : (
              <div
                className="absolute left-[-50px] top-2 text-sm font-semibold text-blue-600"
              >
                {item.year}
              </div>
            )}

            {/* Vertical Timeline Line */}
            {isMobile ? (
              <div
                className="absolute left-[10px] -top-10 h-full w-[2px] bg-blue-500"
              ></div>
            ) : (
              <div
                className="absolute left-[170px] top-0 h-full w-[2px] bg-blue-500"
              ></div>
            )}

            {/* Blue Dot */}
            {isMobile ? (
              <div
                className="absolute left-[4px] -top-8 h-4 w-4 rounded-full bg-blue-500 ring-4 ring-blue-100"
              ></div>
            ) : (
              <div
                className="absolute left-[164px] top-2 h-4 w-4 rounded-full bg-blue-500 ring-4 ring-blue-100"
              ></div>
            )}

            {/* Content Box */}
            {isMobile ? (
              <motion.div
                className="bg-white rounded-lg shadow-lg p-6 ml-[10px]"
                whileHover={{ scale: 1.02, x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <motion.h3
                  className="text-lg font-bold text-gray-900"
                  whileHover={{ x: 5 }}
                >
                  {item.title}
                </motion.h3>
                <motion.div
                  className="flex items-center gap-2 text-gray-600 mt-1"
                  whileHover={{ x: 5 }}
                >
                  <GraduationCap className="w-4 h-4" />
                  <span className="text-md font-medium">{item.organization}</span>
                </motion.div>
                <motion.p
                  className="mt-3 text-gray-600 text-justify"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  {item.description}
                </motion.p>
              </motion.div>
            ) : (
              <motion.div
                className="bg-white rounded-lg shadow-lg p-6 ml-[180px]"
                whileHover={{ scale: 1.02, x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <motion.h3
                  className="text-lg font-bold text-gray-900"
                  whileHover={{ x: 5 }}
                >
                  {item.title}
                </motion.h3>
                <motion.div
                  className="flex items-center gap-2 text-gray-600 mt-1"
                  whileHover={{ x: 5 }}
                >
                  <GraduationCap className="w-4 h-4" />
                  <span className="text-md font-medium">{item.organization}</span>
                </motion.div>
                <motion.p
                  className="mt-3 text-gray-600 text-justify"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  {item.description}
                </motion.p>
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
