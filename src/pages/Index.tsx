
import React from 'react';
import Hero from '../components/Hero';
import Navigation from '../components/Navigation';
import About from '../components/About';
import FeaturedProjects from '../components/FeaturedProjects';
import Experience from '../components/Experience';
import Contact from '../components/Contact';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <FeaturedProjects />
      <Experience />
      <Contact />
    </div>
  );
};

export default Index;
