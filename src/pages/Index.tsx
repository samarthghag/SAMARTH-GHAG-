
import React from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../components/Hero';
import Navigation from '../components/Navigation';
import About from '../components/About';
import FeaturedProjects from '../components/FeaturedProjects';
import Experience from '../components/Experience';
import Contact from '../components/Contact';

const Index = () => {
  const location = useLocation();
  useEffect(() => {
    if (location.state && location.state.scrollTo) {
      const el = document.querySelector(location.state.scrollTo);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth' });
        }, 100); // wait for DOM
      }
    }
  }, [location.state]);
  return (
    <div className="min-h-screen">
      <Navigation />
      <main id="main">
        <Hero />
        <About />
        <FeaturedProjects />
        <Experience />
        <Contact />
      </main>
    </div>
  );
};

export default Index;
