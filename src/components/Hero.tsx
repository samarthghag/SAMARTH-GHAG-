
import React from 'react';
import { Github, Linkedin, Mail, Download } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20">
      <div className="max-w-4xl mx-auto text-center">
        <div className="animate-fade-in">
          <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1">
            <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center text-4xl font-bold">
              SG
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Samarth Ghag
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-300 mb-4 font-light">
            Software Developer & Tech Innovator
          </p>
          
          <p className="text-lg text-slate-400 mb-8 max-w-3xl mx-auto leading-relaxed">
            Specializing in AI, Cybersecurity, and Full-Stack Development. 
            Building innovative solutions that bridge cutting-edge technology with real-world impact.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button 
              onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
            >
              View My Work
            </button>
            <button className="flex items-center gap-2 border border-slate-600 hover:border-slate-400 text-slate-300 hover:text-white px-6 py-3 rounded-full font-medium transition-all duration-300 hover:bg-slate-800">
              <Download size={18} />
              Download Resume
            </button>
          </div>
          
          <div className="flex justify-center space-x-6">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-400 transition-colors duration-200 hover:scale-110 transform">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-400 transition-colors duration-200 hover:scale-110 transform">
              <Linkedin size={24} />
            </a>
            <a href="mailto:contact@samarthghag.com" className="text-slate-400 hover:text-blue-400 transition-colors duration-200 hover:scale-110 transform">
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
