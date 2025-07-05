
import React, { useEffect, useRef } from 'react';
import { Github, Linkedin, Mail, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import Logo from './Logo';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.3 });
    
    gsap.set(contentRef.current?.children || [], { opacity: 0, y: 30 });

    tl.to(contentRef.current?.children || [], {
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: "power2.out"
    });
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-50" ref={heroRef}>
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <div ref={contentRef}>
          <div className="mb-8">
            <Logo size="lg" className="mx-auto mb-6" />
          </div>
          
          <h1 className="text-6xl md:text-7xl font-light text-gray-900 mb-6 tracking-tight">
            Samarth Ghag
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-4 font-light">
            Software Developer & Tech Innovator
          </p>
          
          <p className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto leading-relaxed">
            Specializing in AI, Cybersecurity, and Full-Stack Development. 
            Building innovative solutions with clean, efficient code.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Link 
              to="/projects"
              className="inline-flex items-center gap-2 bg-gray-900 text-white px-8 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors duration-200"
            >
              View Projects
              <ArrowRight size={18} />
            </Link>
            <button className="inline-flex items-center gap-2 border border-gray-300 text-gray-700 px-6 py-3 rounded-full font-medium hover:bg-gray-50 transition-colors duration-200">
              Download Resume
            </button>
          </div>
          
          <div className="flex justify-center space-x-6">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-600 transition-colors duration-200">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-600 transition-colors duration-200">
              <Linkedin size={24} />
            </a>
            <a href="mailto:contact@samarthghag.com" className="text-gray-400 hover:text-gray-600 transition-colors duration-200">
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
