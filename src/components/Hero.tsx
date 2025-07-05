
import React, { useEffect, useRef } from 'react';
import { Github, Linkedin, Mail, ArrowRight, Download } from 'lucide-react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.3 });
    
    // Set initial states
    gsap.set([contentRef.current?.children || [], imageRef.current], { 
      opacity: 0, 
      y: 30 
    });

    // Animate profile image first
    tl.to(imageRef.current, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power3.out"
    })
    // Then animate content with stagger
    .to(contentRef.current?.children || [], {
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: "power2.out"
    }, "-=0.5");
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-gray-100" ref={heroRef}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Profile Image Section */}
          <div ref={imageRef} className="flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative">
              {/* Background decoration */}
              <div className="absolute -inset-4 bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 rounded-3xl transform rotate-3 opacity-10"></div>
              <div className="absolute -inset-2 bg-gradient-to-r from-gray-800 to-gray-600 rounded-3xl transform -rotate-1 opacity-20"></div>
              
              {/* Main image container */}
              <div className="relative bg-white p-2 rounded-3xl shadow-2xl">
                <img 
                  src="/lovable-uploads/17014b2d-4f0b-4cf2-b3f1-10c20fad2809.png" 
                  alt="Samarth Ghag - Software Developer"
                  className="w-80 h-96 object-cover rounded-2xl"
                />
                
                {/* Floating tech badges */}
                <div className="absolute -top-4 -left-4 bg-gray-900 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                  AI Developer
                </div>
                <div className="absolute -bottom-4 -right-4 bg-gray-800 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                  Full Stack
                </div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="order-2 lg:order-1">
            <div ref={contentRef}>
              <div className="inline-flex items-center gap-2 bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium mb-8">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                Available for work
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                <span className="block">Samarth</span>
                <span className="block text-gray-600">Ghag</span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-gray-600 mb-4 font-light">
                Software Developer & Tech Innovator
              </p>
              
              <p className="text-lg text-gray-500 mb-12 max-w-xl leading-relaxed">
                Crafting intelligent solutions with AI, robust cybersecurity, and cutting-edge full-stack development. 
                Transforming ideas into scalable digital experiences.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-16">
                <Link 
                  to="/projects"
                  className="inline-flex items-center justify-center gap-2 bg-gray-900 text-white px-8 py-4 rounded-2xl font-semibold hover:bg-gray-800 transition-all duration-300 hover:shadow-xl hover:scale-105"
                >
                  View My Work
                  <ArrowRight size={20} />
                </Link>
                <button className="inline-flex items-center justify-center gap-2 border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-2xl font-semibold hover:bg-gray-50 hover:border-gray-400 transition-all duration-300">
                  <Download size={20} />
                  Download Resume
                </button>
              </div>
              
              <div className="flex items-center gap-8">
                <span className="text-sm text-gray-500 font-medium">Connect with me</span>
                <div className="flex gap-4">
                  <a 
                    href="https://github.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center text-gray-600 hover:bg-gray-900 hover:text-white transition-all duration-300 hover:scale-110"
                  >
                    <Github size={20} />
                  </a>
                  <a 
                    href="https://linkedin.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center text-gray-600 hover:bg-blue-600 hover:text-white transition-all duration-300 hover:scale-110"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a 
                    href="mailto:contact@samarthghag.com" 
                    className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center text-gray-600 hover:bg-red-500 hover:text-white transition-all duration-300 hover:scale-110"
                  >
                    <Mail size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
