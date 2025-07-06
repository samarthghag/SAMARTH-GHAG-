
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
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900" ref={heroRef}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Profile Image Section */}
          <div ref={imageRef} className="flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative">
              <div className="w-80 h-96 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-3xl flex items-center justify-center overflow-hidden">
                <img 
                  src="/lovable-uploads/17014b2d-4f0b-4cf2-b3f1-10c20fad2809.png" 
                  alt="Samarth Ghag - Software Developer"
                  className="w-full h-full object-cover rounded-3xl"
                />
              </div>
              
              {/* Tech badges */}
              <div className="absolute -top-6 -left-6 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-full text-sm font-bold shadow-lg">
                <Code2 size={16} className="inline mr-2" />
                AI Developer
              </div>
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-full text-sm font-bold shadow-lg">
                <Zap size={16} className="inline mr-2" />
                Full Stack
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="order-2 lg:order-1">
            <div ref={contentRef}>
              <div className="inline-flex items-center gap-3 bg-green-500/20 text-green-300 px-6 py-3 rounded-full text-sm font-medium mb-8">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span>STATUS: Available for work</span>
              </div>
              
              <h1 className="text-6xl lg:text-8xl font-bold mb-8 leading-tight">
                <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Samarth</span>
                <span className="block text-white">Ghag</span>
              </h1>
              
              <div className="text-2xl lg:text-3xl text-cyan-300 mb-4 font-light font-mono">
                &lt; Software Developer /&gt;
              </div>
              
              <p className="text-lg text-white/70 mb-12 max-w-xl leading-relaxed">
                Crafting intelligent solutions with <span className="text-cyan-400 font-semibold">AI</span>, 
                robust <span className="text-blue-400 font-semibold">cybersecurity</span>, and 
                cutting-edge <span className="text-purple-400 font-semibold">full-stack development</span>. 
                Transforming ideas into scalable digital experiences.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 mb-16">
                <Link 
                  to="/projects"
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 inline-flex items-center justify-center gap-3 text-lg group"
                >
                  <span className="font-mono">View_Projects()</span>
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <button className="bg-white/10 border border-cyan-400/50 text-cyan-300 px-8 py-4 rounded-xl font-semibold hover:bg-cyan-400/10 hover:border-cyan-400 transition-all duration-300 font-mono">
                  <Download size={20} className="inline mr-2" />
                  Download_Resume()
                </button>
              </div>
              
              <div className="flex items-center gap-8">
                <span className="text-sm text-white/50 font-medium font-mono">// Connect with me</span>
                <div className="flex gap-4">
                  <a 
                    href="https://github.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center text-white/70 hover:text-white hover:scale-110 transition-all duration-300"
                  >
                    <Github size={24} />
                  </a>
                  <a 
                    href="https://linkedin.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center text-white/70 hover:text-cyan-400 hover:scale-110 transition-all duration-300"
                  >
                    <Linkedin size={24} />
                  </a>
                  <a 
                    href="mailto:contact@samarthghag.com" 
                    className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center text-white/70 hover:text-blue-400 hover:scale-110 transition-all duration-300"
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
