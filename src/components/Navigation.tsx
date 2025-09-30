
import React, { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';
import Logo from './Logo';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const location = useLocation();
  const navigate = useNavigate();

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

  // Close mobile menu with Escape key for accessibility
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', onKeyDown);
    }
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isOpen]);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '/projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (href: string) => {
    if (href.startsWith('#')) {
      if (location.pathname !== '/') {
        // Go to home and pass section to scroll to
        navigate('/', { state: { scrollTo: href } });
      } else {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
      setIsOpen(false);
    }
  };

  const isActive = (href: string) => {
    if (href === '/') return location.pathname === '/';
    if (href === '/projects') return location.pathname === '/projects';
    return false;
  };

  const renderNavItem = (item: typeof navItems[number]) => {
    const active = isActive(item.href);
    const sharedClasses = `group relative inline-flex items-center px-5 py-2 text-sm tracking-[0.22em] uppercase transition-colors duration-300 ${
      active ? 'text-white' : 'text-white/70 hover:text-white'
    }`;

    if (item.href.startsWith('#')) {
      return (
        <button
          key={item.name}
          type="button"
          onClick={() => scrollToSection(item.href)}
          className={sharedClasses}
        >
          <span>{item.name}</span>
          <span
            className={`pointer-events-none absolute left-1/2 -translate-x-1/2 bottom-0 h-[3px] w-8 rounded-full bg-gradient-to-r from-[#6c5ce7] to-[#00b894] transition-all duration-300 ${
              active ? 'opacity-100 scale-100' : 'opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-100'
            }`}
          />
        </button>
      );
    }

    return (
      <Link
        key={item.name}
        to={item.href}
        aria-current={active ? 'page' : undefined}
        className={sharedClasses}
      >
        <span>{item.name}</span>
        <span
          className={`pointer-events-none absolute left-1/2 -translate-x-1/2 bottom-0 h-[3px] w-8 rounded-full bg-gradient-to-r from-[#6c5ce7] to-[#00b894] transition-all duration-300 ${
            active ? 'opacity-100 scale-100' : 'opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-100'
          }`}
        />
      </Link>
    );
  };

  return (
    <nav
      ref={navRef}
      aria-label="Primary"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-[#0a121e]/95 backdrop-blur-xl shadow-[0_20px_60px_-30px_rgba(0,0,0,0.9)] border-b border-white/10' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-3 text-white group">
            <div className="hidden sm:block">
              <Logo size="md" className="transition-transform duration-300 group-hover:scale-105" />
            </div>
            <span className="sm:hidden font-semibold tracking-[0.35em] uppercase text-xs">SG</span>
          </Link>

          <div className="hidden md:flex flex-1 justify-center">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-lg border border-white/10">
              {navItems.map(renderNavItem)}
            </div>
          </div>

          <div className="md:hidden">
            <button
              type="button"
              aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={isOpen}
              aria-controls="mobile-nav"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-full border border-white/10 text-white/80 hover:text-white hover:border-white/30 transition-colors"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div id="mobile-nav" className="md:hidden pb-4">
            <div className="mt-2 rounded-3xl bg-[#112240]/95 border border-white/10 px-4 py-6 space-y-3 shadow-2xl">
              {navItems.map((item) => (
                item.href.startsWith('#') ? (
                  <button
                    key={item.name}
                    type="button"
                    onClick={() => scrollToSection(item.href)}
                    className="w-full text-left text-white/80 hover:text-white px-4 py-3 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors"
                  >
                    {item.name}
                  </button>
                ) : (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setIsOpen(false)}
                    className="block text-white/80 hover:text-white px-4 py-3 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors"
                  >
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
