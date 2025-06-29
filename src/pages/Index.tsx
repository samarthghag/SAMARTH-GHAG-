
import React from 'react';
import Hero from '../components/Hero';
import Navigation from '../components/Navigation';
import About from '../components/About';
import Projects from '../components/Projects';
import Experience from '../components/Experience';
import Skills from '../components/Skills';
import Contact from '../components/Contact';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <Navigation />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Skills />
      <Contact />
    </div>
  );
};

export default Index;
