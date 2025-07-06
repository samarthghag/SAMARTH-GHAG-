
import React, { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { gsap } from 'gsap';
import Logo from './Logo';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    
    // Nav animation
    if (navRef.current) {
      gsap.fromTo(navRef.current,
        { y: -100, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 1.2, 
          ease: "power3.out", 
          delay: 0.3 
        }
      );
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '/projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsOpen(false);
  };

  const isActive = (href: string) => {
    if (href === '/') return location.pathname === '/';
    if (href === '/projects') return location.pathname === '/projects';
    return false;
  };

  return (
    <nav 
      ref={navRef} 
      className={`fixed top-0 w-full z-50 transition-all duration-700 ${
        scrolled 
          ? 'bg-gray-900/90 backdrop-blur-md border-b border-white/10' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo only */}
          <Link to="/" className="group">
            <div className="transform transition-all duration-500 group-hover:scale-110">
              <Logo size="md" className="shadow-2xl group-hover:shadow-[0_0_30px_rgba(0,212,255,0.5)]" />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center">
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-md p-2 rounded-2xl">
              {navItems.map((item, index) => (
                item.href.startsWith('#') ? (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className="px-6 py-3 text-white/70 hover:text-white font-medium transition-all duration-300 rounded-lg hover:bg-white/10 font-mono text-sm"
                  >
                    <span className="opacity-50">{String(index + 1).padStart(2, '0')}.</span> {item.name}
                  </button>
                ) : (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`px-6 py-3 font-medium transition-all duration-300 rounded-lg font-mono text-sm ${
                      isActive(item.href) 
                        ? 'text-white bg-white/20 shadow-lg' 
                        : 'text-white/70 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    <span className="opacity-50">{String(index + 1).padStart(2, '0')}.</span> {item.name}
                  </Link>
                )
              ))}
            </div>
          </div>

          {/* Mobile Navigation Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-3 text-white/70 hover:text-white hover:bg-white/10 rounded-xl transition-all duration-300"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden bg-gray-900/95 backdrop-blur-md border-t border-white/10 rounded-b-2xl shadow-2xl m-4 mt-0">
            <div className="p-4 space-y-2">
              {navItems.map((item, index) => (
                item.href.startsWith('#') ? (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className="block w-full text-left px-4 py-3 text-white/70 hover:text-white hover:bg-white/10 rounded-xl transition-all duration-300 font-mono"
                  >
                    <span className="opacity-50">{String(index + 1).padStart(2, '0')}.</span> {item.name}
                  </button>
                ) : (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="block px-4 py-3 text-white/70 hover:text-white hover:bg-white/10 rounded-xl transition-all duration-300 font-mono"
                    onClick={() => setIsOpen(false)}
                  >
                    <span className="opacity-50">{String(index + 1).padStart(2, '0')}.</span> {item.name}
                  </button>
                )
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
