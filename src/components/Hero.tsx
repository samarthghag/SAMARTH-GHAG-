import React, { useEffect, useRef } from 'react';
import { Github, Linkedin, Mail, ArrowRight, Download, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const contactButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-intro', {
        opacity: 0,
        y: 40,
        duration: 1.2,
        ease: 'power3.out',
        stagger: 0.2,
        delay: 0.4,
      });

      gsap.from('.hero-avatar', {
        opacity: 0,
        scale: 0.85,
        rotate: -6,
        duration: 1.3,
        ease: 'power3.out',
        delay: 0.6,
      });

      gsap.from('.hero-pill', {
        x: -24,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        delay: 1.2,
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const scrollToContact = () => {
    const section = document.querySelector('#contact');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      <div className="absolute inset-0">
        <div className="absolute top-[-10%] left-[-5%] w-[420px] h-[420px] rounded-full blur-3xl bg-[#6c5ce7]/30" />
        <div className="absolute bottom-[-15%] right-[-10%] w-[520px] h-[520px] rounded-full blur-3xl bg-[#00b894]/25" />
        <div className="noise-overlay" />
      </div>

      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10 py-24 w-full">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-16 items-center">
          <div className="space-y-8">
            <div className="hero-pill inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/10 border border-white/15 text-xs tracking-[0.3em] uppercase text-white/80">
              <Sparkles size={16} className="text-[#00b894]" />
              <span>Crafting digital experiences</span>
            </div>

            <div className="space-y-6">
              <p className="hero-intro text-sm uppercase tracking-[0.5em] text-white/60">Hi, I’m</p>
              <h1 className="hero-intro font-extrabold leading-[1.05]">
                <span className="block gradient-text">Samarth Ghag</span>
                <span className="block text-white/90 text-[clamp(1.4rem,4vw,2rem)] font-normal tracking-wide">
                  Full-Stack Developer &amp; AI Consultant
                </span>
              </h1>
              <p className="hero-intro text-base md:text-lg text-white/70 max-w-xl leading-relaxed">
                I help ambitious founders and teams design elegant, high-performance products that fuse beautiful interfaces with robust, intelligent systems. From concept to launch, I bring a strategic eye and a love for detail.
              </p>
            </div>

            <div className="hero-intro flex flex-col sm:flex-row gap-4">
              <button
                ref={contactButtonRef}
                type="button"
                onClick={scrollToContact}
                className="primary-button px-7 py-3 text-sm font-semibold tracking-[0.25em] uppercase"
              >
                Get In Touch
              </button>
              <a
                href="https://drive.google.com/file/d/1XOKuoKAruee00OcYLBLTU6xVRlCuYhB5/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="outline-button px-7 py-3 text-sm font-semibold tracking-[0.25em] uppercase flex items-center justify-center gap-2"
              >
                <Download size={18} /> Resume
              </a>
            </div>

            <div className="hero-intro flex items-center gap-6">
              <span className="text-white/50 uppercase tracking-[0.35em] text-xs">Connect</span>
              <div className="flex items-center gap-3">
                <a
                  href="https://github.com/samarthghag"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub profile"
                  className="w-12 h-12 rounded-full border border-white/10 bg-white/5 text-white/80 hover:text-white hover:border-white/40 transition-colors flex items-center justify-center"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/in/samarth-ghag/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn profile"
                  className="w-12 h-12 rounded-full border border-white/10 bg-white/5 text-white/80 hover:text-white hover:border-white/40 transition-colors flex items-center justify-center"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="mailto:samarthghag9@gmail.com"
                  aria-label="Send email"
                  className="w-12 h-12 rounded-full border border-white/10 bg-white/5 text-white/80 hover:text-white hover:border-white/40 transition-colors flex items-center justify-center"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </div>

          <div className="hero-avatar relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[320px]">
              <div className="absolute -inset-[3px] rounded-[2rem] bg-gradient-to-br from-[#6c5ce7] to-[#00b894] opacity-90 blur-md" />
              <div className="relative rounded-[2rem] overflow-hidden bg-[#112240] border border-white/10">
                <img
                  src="/lovable-uploads/17014b2d-4f0b-4cf2-b3f1-10c20fad2809.png"
                  alt="Samarth Ghag"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-8 -left-10 hidden md:block">
                <div className="rounded-2xl bg-white/5 border border-white/10 px-5 py-4 text-white/80 backdrop-blur-xl shadow-[0_30px_60px_-40px_rgba(108,92,231,0.9)]">
                  <p className="text-xs uppercase tracking-[0.35em] text-white/50">Specialties</p>
                  <div className="mt-3 space-y-2 text-sm text-white/80">
                    <p>AI Systems &amp; Automation</p>
                    <p>Secure Full-Stack Platforms</p>
                    <p>Design Systems &amp; Branding</p>
                  </div>
                </div>
              </div>
              <div className="absolute -top-10 -right-10 hidden md:block">
                <div className="rounded-full bg-[#00b894] text-[#0a121e] font-semibold text-xs uppercase tracking-[0.4em] px-6 py-3 shadow-[0_20px_50px_-30px_rgba(0,184,148,0.9)]">
                  Available for 2025 Collaborations
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
