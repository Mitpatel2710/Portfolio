import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, MapPin, Calendar, Briefcase } from 'lucide-react';

export function About() {
  return (
    <div className="container mx-auto px-6">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Profile Image */}
        <motion.div 
          className="relative"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="aspect-square rounded-2xl overflow-hidden">
            <img
              src="../mit1.jpg"
              alt="Mit Patel"
              className="w-full h-full object-cover"
            />
          </div>
          <motion.div 
            className="absolute -bottom-6 -right-6 w-64 h-64 bg-blue-50 rounded-full -z-10"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
          <motion.div 
            className="absolute -top-6 -left-6 w-48 h-48 bg-purple-50 rounded-full -z-10"
            animate={{ rotate: -360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          />
        </motion.div>

        {/* Content */}
        <motion.div 
          className="space-y-6"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div 
            className="inline-block px-4 py-2 bg-blue-50 text-blue-600 rounded-full font-medium"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            About Me
          </motion.div>
          
          <motion.h2 
            className="text-4xl font-bold text-gray-900"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Mit Patel
          </motion.h2>

          <motion.h2 
            className="text-4xl font-bold text-gray-900"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Java Full Stack Developer
          </motion.h2>
          
          <motion.p 
            className="text-lg text-gray-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Hi, I'm Mit Patel, a passionate Java Full Stack Developer with over 3 years of experience in designing, developing, and implementing robust and scalable enterprise applications.
          </motion.p>

          <motion.p 
            className="text-gray-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            I have a strong foundation in Java/J2EE technologies, including frameworks like Spring MVC, Spring Boot, and Hibernate. I specialize in building dynamic and responsive Single Page Applications (SPA's) using AngularJS, Node.js, and ReactJS.
          </motion.p>
          
          <div className="space-y-3">
            <motion.div 
              className="flex items-center gap-2 text-gray-600"
              whileHover={{ x: 5 }}
            >
              <MapPin className="w-5 h-5 text-blue-500" />
              <span>Dallas, TX</span>
            </motion.div>
            <motion.div 
              className="flex items-center gap-2 text-gray-600"
              whileHover={{ x: 5 }}
            >
              <Calendar className="w-5 h-5 text-blue-500" />
              <span>3+ Years of Experience</span>
            </motion.div>
            <motion.div 
              className="flex items-center gap-2 text-gray-600"
              whileHover={{ x: 5 }}
            >
              <Briefcase className="w-5 h-5 text-blue-500" />
              <span>Available for Full-time Opportunities (Remote) </span>
            </motion.div>
          </div>

          {/* Social Links */}
          <div className="flex gap-4">
            <motion.a
              href="https://github.com"
              className="p-3 bg-gray-50 text-gray-600 rounded-lg hover:bg-gray-100 hover:text-gray-900 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <Github className="w-6 h-6" />
            </motion.a>
            <motion.a
              href="https://linkedin.com"
              className="p-3 bg-gray-50 text-gray-600 rounded-lg hover:bg-gray-100 hover:text-gray-900 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, rotate: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <Linkedin className="w-6 h-6" />
            </motion.a>
            <motion.a
              href="mailto:mit.p@mytechjobemail.com"
              className="p-3 bg-gray-50 text-gray-600 rounded-lg hover:bg-gray-100 hover:text-gray-900 transition-colors"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <Mail className="w-6 h-6" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}