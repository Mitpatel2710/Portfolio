import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/sections/About';
import { Experience } from './components/sections/Experience';
import { Projects } from './components/sections/Projects';
import { Skills } from './components/sections/Skills';
import { Education } from './components/sections/Education';
import { Contact } from './components/sections/Contact';
import { Toaster } from 'react-hot-toast';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Toaster position="top-right" />
      <Header />
      <Hero />
      
      <main className="relative">
        <section id="about" className="py-20">
          <About />
        </section>

        <section id="experience" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
          <Experience />
        </section>

        <section id="projects" className="py-20">
          <Projects />
        </section>
        
        <section id="skills" className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
          <Skills />
        </section>
        
        <section id="education" className="py-20">
          <Education />
        </section>

        <section id="contact" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
          <Contact />
        </section>
      </main>
      
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p>© 2024 John Doe. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}