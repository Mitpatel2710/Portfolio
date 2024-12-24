
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code2, Coffee, Terminal, FileText } from 'lucide-react';

function FeatureCard({ icon: Icon, title }: { icon: React.ElementType; title: string }) {
  return (
    <motion.div 
      className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Icon className="w-4 h-4 text-pink-200" />
      <span className="text-sm font-medium text-white">{title}</span>
    </motion.div>
  );
}

export function Hero() {
  const handleResumeClick = () => {
    window.open('../Mit-Tech.pdf', '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-800 to-black">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iYSIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVHJhbnNmb3JtPSJyb3RhdGUoNDUpIj48cGF0aCBkPSJNLTEwIDMwaDYwdjJoLTYweiIgZmlsbD0iI2ZmZiIgZmlsbC1vcGFjaXR5PSIuMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNhKSIvPjwvc3ZnPg==')] opacity-20" />
      </div>

      <div className="relative container mx-auto px-4 pt-24 md:pt-32 pb-24">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div 
            className="flex flex-wrap justify-center gap-3 mb-8 md:mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <FeatureCard icon={Code2} title="Java Full Stack Developer" />
            <FeatureCard icon={Coffee} title="3+ Years of Experience" />
            <FeatureCard icon={Terminal} title="Problem Solving" />
          </motion.div>

          <motion.div
            className="space-y-4 md:space-y-6 mb-8 md:mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold">
              <motion.span 
                className="text-xl md:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-pink-400 to-pink-500"
                whileHover={{ scale: 1.02 }}
              >
                I Turn Coffee Into Code
              </motion.span>
            </h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-pink-300"
              whileHover={{ scale: 1.02 }}
            >
              Use Tabs Over Spaces and Never Broke Production!
            </motion.p>
          </motion.div>

          <motion.p 
            className="text-lg md:text-xl text-gray-300 mb-8 md:mb-12 max-w-2xl mx-auto italic"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            "Good code is its own best documentation. As you're about to add a comment, ask yourself, 'How can I improve the code so that this comment isn't needed?'" - Steve McConnell
          </motion.p>

          <motion.div 
            className="flex flex-col md:flex-row justify-center items-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <motion.a 
              href="#projects" 
              className="w-full md:w-auto px-8 py-3 bg-pink-500 text-white rounded-full font-medium hover:bg-pink-600 transition-colors flex items-center justify-center gap-2 group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.a>
            <motion.button 
              onClick={handleResumeClick}
              className="w-full md:w-auto px-8 py-3 bg-navy-700 text-white rounded-full font-medium hover:bg-navy-600 transition-colors flex items-center justify-center gap-2 group border border-navy-500"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Resume
              <FileText className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.button>
            <motion.a 
              href="#contact" 
              className="w-full md:w-auto px-8 py-3 bg-transparent text-white rounded-full font-medium hover:bg-white/10 transition-colors border border-white/30 text-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
    </section>
  );
}