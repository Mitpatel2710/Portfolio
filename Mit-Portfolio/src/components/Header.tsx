import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-sm z-50 shadow-sm">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <h1 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-pink-500 to-blue-500 text-transparent bg-clip-text hover:from-blue-500 hover:to-pink-500 transition-all duration-300">
            Mit Patel
          </h1>

          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMenu}
            className="md:hidden p-2 text-gray-600 hover:text-blue-500"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-gray-600 hover:text-blue-500 transition-colors">About</a>
            <a href="#experience" className="text-gray-600 hover:text-blue-500 transition-colors">Experience</a>
            <a href="#projects" className="text-gray-600 hover:text-blue-500 transition-colors">Projects</a>
            <a href="#skills" className="text-gray-600 hover:text-blue-500 transition-colors">Skills</a>
            <a href="#education" className="text-gray-600 hover:text-blue-500 transition-colors">Education</a>
            <a href="#contact" className="text-gray-600 hover:text-blue-500 transition-colors">Contact</a>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-gray-100">
            <div className="flex flex-col space-y-4">
              <a href="#about" onClick={toggleMenu} className="text-gray-600 hover:text-blue-500 transition-colors">About</a>
              <a href="#experience" onClick={toggleMenu} className="text-gray-600 hover:text-blue-500 transition-colors">Experience</a>
              <a href="#projects" onClick={toggleMenu} className="text-gray-600 hover:text-blue-500 transition-colors">Projects</a>
              <a href="#skills" onClick={toggleMenu} className="text-gray-600 hover:text-blue-500 transition-colors">Skills</a>
              <a href="#education" onClick={toggleMenu} className="text-gray-600 hover:text-blue-500 transition-colors">Education</a>
              <a href="#contact" onClick={toggleMenu} className="text-gray-600 hover:text-blue-500 transition-colors">Contact</a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}