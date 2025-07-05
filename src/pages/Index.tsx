
import React from 'react';
import Hero from '../components/Hero';
import Navigation from '../components/Navigation';
import About from '../components/About';
import FeaturedProjects from '../components/FeaturedProjects';
import Experience from '../components/Experience';
import Skills from '../components/Skills';
import Contact from '../components/Contact';

const Index = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navigation />
      <Hero />
      <About />
      <FeaturedProjects />
      <Experience />
      <Skills />
      <Contact />
    </div>
  );
};

export default Index;
