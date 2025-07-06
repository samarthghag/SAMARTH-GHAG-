
import React, { useEffect, useRef } from 'react';
import { Github, Linkedin, Mail, ArrowRight, Download, Code2, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.5 });
    
    // Set initial states
    if (contentRef.current?.children) {
      gsap.set(contentRef.current.children, { 
        opacity: 0, 
        y: 50
      });
    }

    if (imageRef.current) {
      gsap.set(imageRef.current, { 
        opacity: 0, 
        y: 50
      });
    }

    // Animate profile image
    tl.to(imageRef.current, {
      opacity: 1,
      y: 0,
      duration: 1.5,
      ease: "power3.out"
    })
    // Then animate content
    .to(contentRef.current?.children || [], {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power2.out"
    }, "-=0.8");

  }, []);

  return (
    <section 
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gray-900" 
      ref={heroRef}
    >
      {/* Subtle background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gray-800/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gray-700/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Profile Image Section */}
          <div ref={imageRef} className="flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative">
              <div className="w-80 h-96 bg-gray-800/50 rounded-3xl flex items-center justify-center overflow-hidden border border-gray-700/50 shadow-2xl backdrop-blur-sm">
                <img 
                  src="/lovable-uploads/17014b2d-4f0b-4cf2-b3f1-10c20fad2809.png" 
                  alt="Samarth Ghag - Software Developer"
                  className="w-full h-full object-cover rounded-3xl"
                />
              </div>
              
              {/* Tech badges with project theme */}
              <div className="absolute -top-6 -left-6 bg-gray-800/90 border border-gray-600/50 text-gray-100 px-6 py-3 rounded-full text-sm font-bold shadow-lg backdrop-blur-sm">
                <Code2 size={16} className="inline mr-2" />
                AI Developer
              </div>
              <div className="absolute -bottom-6 -right-6 bg-gray-700/90 border border-gray-600/50 text-gray-100 px-6 py-3 rounded-full text-sm font-bold shadow-lg backdrop-blur-sm">
                <Zap size={16} className="inline mr-2" />
                Full Stack
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="order-2 lg:order-1">
            <div ref={contentRef}>
              <div className="inline-flex items-center gap-3 bg-green-500/20 text-green-300 px-6 py-3 rounded-full text-sm font-medium mb-8 border border-green-500/30">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span>STATUS: Available for work</span>
              </div>
              
              <h1 className="text-6xl lg:text-8xl font-bold mb-8 leading-tight">
                <span className="block text-gray-100">Samarth</span>
                <span className="block text-gray-300">Ghag</span>
              </h1>
              
              <div className="text-2xl lg:text-3xl text-gray-400 mb-4 font-light font-mono">
                &lt; Software Developer /&gt;
              </div>
              
              <p className="text-lg text-gray-300 mb-12 max-w-xl leading-relaxed">
                Crafting intelligent solutions with <span className="text-gray-100 font-semibold">AI</span>, 
                robust <span className="text-gray-100 font-semibold">cybersecurity</span>, and 
                cutting-edge <span className="text-gray-100 font-semibold">full-stack development</span>. 
                Transforming ideas into scalable digital experiences.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 mb-16">
                <Link 
                  to="/projects"
                  className="bg-gray-800 border border-gray-600 text-gray-100 px-8 py-4 rounded-xl font-semibold hover:bg-gray-700 hover:border-gray-500 transition-all duration-300 inline-flex items-center justify-center gap-3 text-lg group shadow-lg"
                >
                  <span className="font-mono">View_Projects()</span>
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <button className="bg-gray-900/50 border border-gray-600/50 text-gray-300 px-8 py-4 rounded-xl font-semibold hover:bg-gray-800/50 hover:border-gray-500/50 transition-all duration-300 font-mono backdrop-blur-sm">
                  <Download size={20} className="inline mr-2" />
                  Download_Resume()
                </button>
              </div>
              
              <div className="flex items-center gap-8">
                <span className="text-sm text-gray-500 font-medium font-mono">// Connect with me</span>
                <div className="flex gap-4">
                  <a 
                    href="https://github.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="w-14 h-14 bg-gray-800/50 backdrop-blur-sm border border-gray-600/50 rounded-xl flex items-center justify-center text-gray-400 hover:text-gray-100 hover:scale-110 hover:bg-gray-700/50 transition-all duration-300"
                  >
                    <Github size={24} />
                  </a>
                  <a 
                    href="https://linkedin.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="w-14 h-14 bg-gray-800/50 backdrop-blur-sm border border-gray-600/50 rounded-xl flex items-center justify-center text-gray-400 hover:text-gray-100 hover:scale-110 hover:bg-gray-700/50 transition-all duration-300"
                  >
                    <Linkedin size={24} />
                  </a>
                  <a 
                    href="mailto:contact@samarthghag.com" 
                    className="w-14 h-14 bg-gray-800/50 backdrop-blur-sm border border-gray-600/50 rounded-xl flex items-center justify-center text-gray-400 hover:text-gray-100 hover:scale-110 hover:bg-gray-700/50 transition-all duration-300"
                  >
                    <Mail size={24} />
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
