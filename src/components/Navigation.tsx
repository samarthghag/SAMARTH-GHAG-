
import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Code, Zap } from 'lucide-react';
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
    
    if (navRef.current) {
      gsap.fromTo(navRef.current,
        { y: -100, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 1.5, 
          ease: "power3.out", 
          delay: 0.5 
        }
      );
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '/', icon: <Zap size={16} /> },
    { name: 'About', href: '#about', icon: <Code size={16} /> },
    { name: 'Projects', href: '/projects', icon: <Code size={16} /> },
    { name: 'Experience', href: '#experience', icon: <Zap size={16} /> },
    { name: 'Contact', href: '#contact', icon: <Code size={16} /> }
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
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled 
          ? 'glass-effect shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 lg:px-6">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="group">
            <Logo size="md" className="transition-transform duration-300 group-hover:scale-110" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center">
            <div className="flex items-center space-x-1 glass-effect rounded-full px-2 py-2">
              {navItems.map((item, index) => (
                item.href.startsWith('#') ? (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className="px-4 py-2 text-slate-600 hover:text-slate-900 font-medium transition-all duration-300 rounded-full hover:bg-white/50 flex items-center gap-2 text-sm font-mono"
                  >
                    {item.icon}
                    {item.name}
                  </button>
                ) : (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`px-4 py-2 font-medium transition-all duration-300 rounded-full flex items-center gap-2 text-sm font-mono ${
                      isActive(item.href) 
                        ? 'text-slate-900 bg-white/70 shadow-sm' 
                        : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
                    }`}
                  >
                    {item.icon}
                    {item.name}
                  </Link>
                )
              ))}
            </div>
          </div>

          {/* Mobile Navigation Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-slate-600 hover:text-slate-900 glass-effect rounded-xl transition-all duration-300"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden glass-effect rounded-2xl shadow-lg m-4 mt-2">
            <div className="p-4 space-y-2">
              {navItems.map((item, index) => (
                item.href.startsWith('#') ? (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className="block w-full text-left px-4 py-3 text-slate-600 hover:text-slate-900 hover:bg-white/50 rounded-xl transition-all duration-300 font-mono flex items-center gap-2"
                  >
                    {item.icon}
                    {item.name}
                  </button>
                ) : (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="block px-4 py-3 text-slate-600 hover:text-slate-900 hover:bg-white/50 rounded-xl transition-all duration-300 font-mono flex items-center gap-2"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.icon}
                    {item.name}
                  </Link>
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
