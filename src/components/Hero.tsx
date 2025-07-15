import React, { useEffect, useRef } from 'react';
import { Github, Linkedin, Mail, ArrowRight, Download, Sparkles, Cpu, Code2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const floatingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.8 });
    
    if (contentRef.current?.children) {
      gsap.set(contentRef.current.children, { 
        opacity: 0, 
        y: 60,
        scale: 0.8
      });
    }

    if (imageRef.current) {
      gsap.set(imageRef.current, { 
        opacity: 0, 
        scale: 0.8,
        rotation: -10
      });
    }

    // Animate profile image
    tl.to(imageRef.current, {
      opacity: 1,
      scale: 1,
      rotation: 0,
      duration: 1.2,
      ease: "back.out(1.7)"
    })
    // Then animate content
    .to(contentRef.current?.children || [], {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.8,
      stagger: 0.15,
      ease: "power2.out"
    }, "-=0.6");

    // Floating animation
    if (floatingRef.current) {
      gsap.to(floatingRef.current, {
        y: -20,
        duration: 3,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1
      });
    }

  }, []);

  return (
    <section 
      className="min-h-screen flex items-center justify-center relative overflow-hidden" 
      ref={heroRef}
      style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
      }}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-white/10 rounded-full blur-3xl floating-animation"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-white/5 rounded-full blur-3xl floating-animation" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent rotate-12"></div>
      </div>

      {/* Tech Grid Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="grid grid-cols-12 gap-4 h-full w-full p-8">
          {Array.from({ length: 144 }).map((_, i) => (
            <div key={i} className="border border-white/20 rounded"></div>
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Profile Image Section */}
          <div ref={imageRef} className="flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative" ref={floatingRef}>
              <div className="w-64 h-80 sm:w-72 sm:h-84 md:w-80 md:h-96 glass-effect rounded-3xl flex items-center justify-center overflow-hidden modern-shadow">
                <img 
                  src="/lovable-uploads/17014b2d-4f0b-4cf2-b3f1-10c20fad2809.png" 
                  alt="Samarth Ghag - Software Developer"
                  className="w-full h-full object-cover rounded-3xl"
                />
              </div>
              
               {/* Floating Tech Elements */}
               <div className="absolute -top-2 sm:-top-4 -left-2 sm:-left-4 glass-effect text-white px-2 sm:px-4 py-1 sm:py-2 rounded-2xl text-xs sm:text-sm font-bold shadow-lg flex items-center gap-1 sm:gap-2">
                 <Cpu size={12} className="text-blue-300 sm:w-4 sm:h-4" />
                 <span className="hidden sm:inline">AI Expert</span>
                 <span className="sm:hidden">AI</span>
               </div>
               <div className="absolute -bottom-2 sm:-bottom-4 -right-2 sm:-right-4 glass-effect text-white px-2 sm:px-4 py-1 sm:py-2 rounded-2xl text-xs sm:text-sm font-bold shadow-lg flex items-center gap-1 sm:gap-2">
                 <Code2 size={12} className="text-purple-300 sm:w-4 sm:h-4" />
                 <span className="hidden sm:inline">Full Stack</span>
                 <span className="sm:hidden">Dev</span>
               </div>
               <div className="absolute top-1/2 -right-4 sm:-right-8 glass-effect text-white px-2 sm:px-3 py-2 sm:py-3 rounded-full shadow-lg">
                 <Sparkles size={16} className="text-yellow-300 sm:w-5 sm:h-5" />
               </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="order-2 lg:order-1">
            <div ref={contentRef}>
              <div className="inline-flex items-center gap-3 glass-effect text-green-300 px-6 py-3 rounded-full text-sm font-bold mb-8 border border-green-400/30">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="font-mono">STATUS: AVAILABLE</span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-6 leading-tight text-white">
                <span className="block">Samarth</span>
                <span className="block text-blue-200">Ghag</span>
              </h1>
              
              <div className="text-lg sm:text-xl lg:text-2xl text-blue-100 mb-4 font-mono typewriter">
                &lt; Software Developer /&gt;
              </div>
              
              <p className="text-sm sm:text-base md:text-lg text-white/90 mb-8 sm:mb-12 max-w-xl leading-relaxed">
                Crafting intelligent solutions with <span className="text-blue-200 font-semibold">AI</span>, 
                robust <span className="text-purple-200 font-semibold">cybersecurity</span>, and 
                cutting-edge <span className="text-green-200 font-semibold">full-stack development</span>. 
                Transforming ideas into scalable digital experiences.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Link 
                  to="/projects"
                  className="tech-gradient text-white px-8 py-4 rounded-2xl font-bold hover:shadow-2xl transition-all duration-300 inline-flex items-center justify-center gap-3 text-lg group modern-shadow"
                >
                  <span className="font-mono">View Projects</span>
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <a
                  href="https://drive.google.com/file/d/1XOKuoKAruee00OcYLBLTU6xVRlCuYhB5/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-effect text-white px-8 py-4 rounded-2xl font-bold hover:bg-white/30 transition-all duration-300 font-mono modern-shadow inline-flex items-center justify-center"
                >
                  <Download size={20} className="inline mr-2" />
                  Resume
                </a>
              </div>
              
              <div className="flex items-center gap-6">
                <span className="text-sm text-blue-200 font-medium font-mono">// Connect</span>
                <div className="flex gap-3">
                  <a 
                    href="https://github.com/samarthghag" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="w-12 h-12 glass-effect rounded-2xl flex items-center justify-center text-white/70 hover:text-white hover:scale-110 transition-all duration-300"
                  >
                    <Github size={20} />
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/samarth-ghag/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="w-12 h-12 glass-effect rounded-2xl flex items-center justify-center text-white/70 hover:text-white hover:scale-110 transition-all duration-300"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a 
                    href="mailto:samarthghag9@gmail.com" 
                    className="w-12 h-12 glass-effect rounded-2xl flex items-center justify-center text-white/70 hover:text-white hover:scale-110 transition-all duration-300"
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
