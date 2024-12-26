import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, MapPin, Calendar, Briefcase } from 'lucide-react';

export function About() {
  return (
    <div className="container mx-auto px-4 md:px-6">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        {/* Profile Image */}
        <motion.div
          className="relative order-1 md:order-1" // Changed order-2 to order-1 for mobile
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="rounded-2xl overflow-hidden w-40 h-40 md:w-64 md:h-64 mx-auto"> {/* Adjusted size for mobile */}
            <img
              src="../mit1.jpg"
              alt="Mit Patel"
              className="w-full h-full object-cover"
            />
          </div>
          <motion.div
            className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 w-28 h-28 md:w-48 md:h-48 bg-blue-50 rounded-full -z-10" // Adjusted for mobile
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute -top-4 -left-4 md:-top-6 md:-left-6 w-20 h-20 md:w-32 md:h-32 bg-purple-50 rounded-full -z-10" // Adjusted for mobile
            animate={{ rotate: -360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          />
        </motion.div>

        {/* Content */}
        <motion.div
          className="space-y-4 md:space-y-6 order-2 md:order-2 text-center md:text-left" // Added text alignment
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="text-3xl md:text-4xl font-normal text-gray-900 mb-6 md:mb-12"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            About Me
          </motion.div>

          <motion.p
            className="text-sm md:text-lg text-gray-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Hi, I'm Mit Patel, a passionate Java Full Stack Developer with over 3+ years of experience in designing, developing, and implementing robust and scalable enterprise applications.
          </motion.p>

          <motion.p
            className="text-sm md:text-base text-gray-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            I have a strong foundation in Java/J2EE technologies, including frameworks like Spring MVC, Spring Boot, and Hibernate. I specialize in building dynamic and responsive Single Page Applications (SPA's) using AngularJS, Node.js, and ReactJS.
          </motion.p>

          <div className="space-y-2 md:space-y-3">
            <motion.div
              className="flex items-center gap-2 text-gray-600 justify-center md:justify-start"
              whileHover={{ x: 5 }}
            >
              <MapPin className="w-4 h-4 md:w-5 md:h-5 text-blue-500" />
              <span className="text-sm md:text-base">Dallas, TX</span>
            </motion.div>
            <motion.div
              className="flex items-center gap-2 text-gray-600 justify-center md:justify-start"
              whileHover={{ x: 5 }}
            >
              <Calendar className="w-4 h-4 md:w-5 md:h-5 text-blue-500" />
              <span className="text-sm md:text-base">3+ Years of Experience</span>
            </motion.div>
            <motion.div
              className="flex items-center gap-2 text-gray-600 justify-center md:justify-start"
              whileHover={{ x: 5 }}
            >
              <Briefcase className="w-4 h-4 md:w-5 md:h-5 text-blue-500" />
              <span className="text-sm md:text-base">Available for Full-time Opportunities (Remote)</span>
            </motion.div>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 justify-center md:justify-start mt-6 md:mt-0">
            <motion.a
              href="https://github.com"
              className="p-2 md:p-3 bg-gray-50 text-gray-600 rounded-lg hover:bg-gray-100 hover:text-gray-900 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <Github className="w-5 h-5 md:w-6 md:h-6" />
            </motion.a>
            <motion.a
              href="https://linkedin.com"
              className="p-2 md:p-3 bg-gray-50 text-gray-600 rounded-lg hover:bg-gray-100 hover:text-gray-900 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, rotate: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <Linkedin className="w-5 h-5 md:w-6 md:h-6" />
            </motion.a>
            <motion.a
              href="mailto:mit.p@mytechjobemail.com"
              className="p-2 md:p-3 bg-gray-50 text-gray-600 rounded-lg hover:bg-gray-100 hover:text-gray-900 transition-colors"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <Mail className="w-5 h-5 md:w-6 md:h-6" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
