
import React, { useEffect, useRef } from 'react';
import { Github, Linkedin, Mail, ArrowRight, Download, Code2, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.5 });
    
    // Set initial states
    gsap.set([contentRef.current?.children || [], imageRef.current], { 
      opacity: 0, 
      y: 50,
      scale: 0.9
    });

    // Create floating particles
    const particles = particlesRef.current?.children;
    if (particles) {
      gsap.set(particles, { opacity: 0 });
      gsap.to(particles, {
        opacity: 0.6,
        duration: 2,
        stagger: 0.2,
        ease: "power2.out"
      });
    }

    // Animate profile image with tech effect
    tl.to(imageRef.current, {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 1.5,
      ease: "power3.out"
    })
    // Then animate content with enhanced stagger
    .to(contentRef.current?.children || [], {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 1,
      stagger: 0.2,
      ease: "power2.out"
    }, "-=0.8");

    // Continuous floating animation for image
    gsap.to(imageRef.current, {
      y: -10,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "power2.inOut"
    });

  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden" ref={heroRef}>
      {/* Animated Background Particles */}
      <div ref={particlesRef} className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animation: `float ${3 + Math.random() * 2}s ease-in-out infinite`
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Enhanced Profile Image Section */}
          <div ref={imageRef} className="flex justify-center lg:justify-end order-1 lg:order-2 gsap-element">
            <div className="relative">
              {/* Tech Grid Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-3xl transform rotate-3 blur-xl"></div>
              <div className="absolute -inset-8 opacity-30">
                <div className="w-full h-full border border-cyan-400/30 rounded-3xl transform rotate-6"></div>
                <div className="absolute top-4 left-4 w-4 h-4 border-2 border-cyan-400 rounded-full"></div>
                <div className="absolute bottom-8 right-8 w-6 h-6 border-2 border-blue-500 rounded-full"></div>
                <div className="absolute top-12 right-12 w-2 h-2 bg-cyan-400 rounded-full"></div>
              </div>
              
              {/* Main image container with tech styling */}
              <div className="relative tech-card p-4 shadow-2xl">
                <img 
                  src="/lovable-uploads/17014b2d-4f0b-4cf2-b3f1-10c20fad2809.png" 
                  alt="Samarth Ghag - Software Developer"
                  className="w-80 h-96 object-cover rounded-2xl"
                />
                
                {/* Tech overlay effects */}
                <div className="absolute inset-4 rounded-2xl border border-cyan-400/50 pointer-events-none"></div>
                
                {/* Floating tech badges with enhanced styling */}
                <div className="absolute -top-6 -left-6 tech-gradient px-6 py-3 rounded-full text-sm font-bold shadow-lg code-font">
                  <Code2 size={16} className="inline mr-2" />
                  AI Developer
                </div>
                <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-full text-sm font-bold shadow-lg code-font">
                  <Zap size={16} className="inline mr-2" />
                  Full Stack
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Content Section */}
          <div className="order-2 lg:order-1">
            <div ref={contentRef}>
              <div className="inline-flex items-center gap-3 tech-card text-cyan-300 px-6 py-3 rounded-full text-sm font-medium mb-8 code-font">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="opacity-70">STATUS:</span> Available for work
              </div>
              
              <h1 className="text-6xl lg:text-8xl font-bold mb-8 leading-tight">
                <span className="block text-gradient">Samarth</span>
                <span className="block text-white/90">Ghag</span>
              </h1>
              
              <div className="text-2xl lg:text-3xl text-cyan-300 mb-4 font-light code-font">
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
                  className="btn-tech inline-flex items-center justify-center gap-3 text-lg group"
                >
                  <span className="code-font">View_Projects()</span>
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <button className="tech-card border border-cyan-400/50 text-cyan-300 px-8 py-4 rounded-xl font-semibold hover:bg-cyan-400/10 hover:border-cyan-400 transition-all duration-300 code-font">
                  <Download size={20} className="inline mr-2" />
                  Download_Resume()
                </button>
              </div>
              
              <div className="flex items-center gap-8">
                <span className="text-sm text-white/50 font-medium code-font">// Connect with me</span>
                <div className="flex gap-4">
                  <a 
                    href="https://github.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="w-14 h-14 tech-card rounded-xl flex items-center justify-center text-white/70 hover:text-white hover:scale-110 transition-all duration-300"
                  >
                    <Github size={24} />
                  </a>
                  <a 
                    href="https://linkedin.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="w-14 h-14 tech-card rounded-xl flex items-center justify-center text-white/70 hover:text-cyan-400 hover:scale-110 transition-all duration-300"
                  >
                    <Linkedin size={24} />
                  </a>
                  <a 
                    href="mailto:contact@samarthghag.com" 
                    className="w-14 h-14 tech-card rounded-xl flex items-center justify-center text-white/70 hover:text-blue-400 hover:scale-110 transition-all duration-300"
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
