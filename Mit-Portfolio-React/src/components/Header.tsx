import React from 'react';

export function Header() {
  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-sm z-50 shadow-sm">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-800">Mit Patel</h1> 
          <div className="flex items-center space-x-8">
            <a href="#about" className="text-gray-600 hover:text-blue-500 transition-colors">About</a>
            <a href="#experience" className="text-gray-600 hover:text-blue-500 transition-colors">Experience</a>
            <a href="#projects" className="text-gray-600 hover:text-blue-500 transition-colors">Projects</a>
            <a href="#skills" className="text-gray-600 hover:text-blue-500 transition-colors">Skills</a>
            <a href="#education" className="text-gray-600 hover:text-blue-500 transition-colors">Education</a>
            <a href="#contact" className="text-gray-600 hover:text-blue-500 transition-colors">Contact</a>
          </div>
        </div>
      </nav>
    </header>
  );
}