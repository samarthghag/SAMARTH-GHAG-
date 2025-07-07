
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ProjectCard from './ProjectCard';

gsap.registerPlugin(ScrollTrigger);

const FeaturedProjects = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  const featuredProjects = [
    {
      title: "Clickbait Creator",
      description: "AI-powered content generator leveraging Google AI API to create engaging clickbait titles with intelligent optimization and real-time analytics.",
      tech: ["Flask", "Google AI API", "Python", "Machine Learning"],
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
      github: "#",
      demo: "#",
      featured: true
    },
    {
      title: "Smart Home Management",
      description: "IoT control system for smart devices with integrated shopping features, comprehensive user account management, and real-time monitoring.",
      tech: ["Node.js", "Express.js", "IoT", "React"],
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
      github: "#",
      demo: "#",
      featured: true
    },
    {
      title: "Event Management System",
      description: "Comprehensive event platform with creation tools, attendee tracking, admin approval workflow, and automated notification system.",
      tech: ["Java", "Swing", "MySQL", "Spring Boot"],
      image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&h=400&fit=crop",
      github: "#",
      demo: "#",
      featured: true
    }
  ];

  useEffect(() => {
    const cards = cardsRef.current?.children;
    if (cards) {
      gsap.fromTo(cards,
        { opacity: 0, y: 60, rotationX: 15 },
        {
          opacity: 1,
          y: 0,
          rotationX: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }
  }, []);

  return (
    <section className="py-20 bg-white relative overflow-hidden" ref={sectionRef}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="grid grid-cols-8 gap-4 h-full w-full p-8">
          {Array.from({ length: 64 }).map((_, i) => (
            <div key={i} className="border border-slate-300 rounded"></div>
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full text-sm font-bold mb-6">
            <Sparkles size={16} />
            <span className="font-mono">FEATURED_WORK</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 mb-6 font-mono">
            Best Projects
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto px-4">
            A curated selection of my most impactful work showcasing innovation in AI, 
            full-stack development, and system architecture.
          </p>
        </div>

        <div ref={cardsRef} className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>

        <div className="text-center">
          <Link 
            to="/projects"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-2xl font-bold hover:shadow-2xl transition-all duration-300 text-lg group modern-shadow"
          >
            <span className="font-mono">View All Projects</span>
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
