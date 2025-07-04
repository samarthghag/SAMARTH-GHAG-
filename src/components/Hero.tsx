
import React, { useEffect, useRef } from 'react';
import { Github, Linkedin, Mail, Download } from 'lucide-react';
import { gsap } from 'gsap';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const avatarRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const socialsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.2 });
    
    // Set initial states
    gsap.set([avatarRef.current, titleRef.current, subtitleRef.current, descriptionRef.current, buttonsRef.current, socialsRef.current], {
      opacity: 0,
      y: 30
    });

    // Animate elements in sequence
    tl.to(avatarRef.current, { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" })
      .to(titleRef.current, { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }, "-=0.4")
      .to(subtitleRef.current, { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }, "-=0.3")
      .to(descriptionRef.current, { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }, "-=0.3")
      .to(buttonsRef.current, { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }, "-=0.2")
      .to(socialsRef.current, { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }, "-=0.4");

    // Add hover animations for buttons
    const buttons = buttonsRef.current?.querySelectorAll('button');
    buttons?.forEach(button => {
      button.addEventListener('mouseenter', () => {
        gsap.to(button, { scale: 1.05, duration: 0.2, ease: "power2.out" });
      });
      button.addEventListener('mouseleave', () => {
        gsap.to(button, { scale: 1, duration: 0.2, ease: "power2.out" });
      });
    });

    // Add hover animations for social icons
    const socialIcons = socialsRef.current?.querySelectorAll('a');
    socialIcons?.forEach(icon => {
      icon.addEventListener('mouseenter', () => {
        gsap.to(icon, { scale: 1.2, rotation: 5, duration: 0.3, ease: "back.out(1.7)" });
      });
      icon.addEventListener('mouseleave', () => {
        gsap.to(icon, { scale: 1, rotation: 0, duration: 0.3, ease: "back.out(1.7)" });
      });
    });
  }, []);

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20" ref={heroRef}>
      <div className="max-w-4xl mx-auto text-center">
        <div>
          <div ref={avatarRef} className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1">
            <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center text-4xl font-bold">
              SG
            </div>
          </div>
          
          <h1 ref={titleRef} className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Samarth Ghag
            </span>
          </h1>
          
          <p ref={subtitleRef} className="text-xl md:text-2xl text-slate-300 mb-4 font-light">
            Software Developer & Tech Innovator
          </p>
          
          <p ref={descriptionRef} className="text-lg text-slate-400 mb-8 max-w-3xl mx-auto leading-relaxed">
            Specializing in AI, Cybersecurity, and Full-Stack Development. 
            Building innovative solutions that bridge cutting-edge technology with real-world impact.
          </p>
          
          <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button 
              onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg cursor-pointer"
            >
              View My Work
            </button>
            <button className="flex items-center gap-2 border border-slate-600 hover:border-slate-400 text-slate-300 hover:text-white px-6 py-3 rounded-full font-medium transition-all duration-300 hover:bg-slate-800/50 cursor-pointer">
              <Download size={18} />
              Download Resume
            </button>
          </div>
          
          <div ref={socialsRef} className="flex justify-center space-x-6">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-400 transition-colors duration-200 cursor-pointer">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-400 transition-colors duration-200 cursor-pointer">
              <Linkedin size={24} />
            </a>
            <a href="mailto:contact@samarthghag.com" className="text-slate-400 hover:text-blue-400 transition-colors duration-200 cursor-pointer">
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
