
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import ProjectCard from '../components/ProjectCard';
import Navigation from '../components/Navigation';

const Projects = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  const allProjects = [
    {
      title: "Multi-Agent Code Writing System",
      description: "A multi-agent system for collaborative code writing using LangGraph and Gemini API with five specialized agents for orchestration, planning, coding, testing, and checking.",
      tech: ["Python", "LangGraph", "LangChain", "Gemini API", "Multi-Agent"],
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
      github: "#",
      demo: "#"
    },
    {
      title: "Finance Savvy Journey",
      description: "Comprehensive financial management platform with expense tracking, financial education resources, and paper trading simulator for investment practice.",
      tech: ["React", "TypeScript", "Supabase", "Tailwind CSS", "React Query"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      github: "#",
      demo: "#"
    },
    {
      title: "Groovy Cart Cascade",
      description: "Modern, full-stack e-commerce platform with React, TypeScript, and Supabase. Features real-time cart management, user authentication, and seamless shopping experience.",
      tech: ["React", "TypeScript", "Supabase", "Tailwind CSS", "shadcn/ui"],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      github: "#",
      demo: "#"
    },
    {
      title: "Eco-Tech Start Website",
      description: "Modern eco-business website featuring smooth scroll animations, interactive elements, and integrated contact forms with sustainable design principles.",
      tech: ["HTML", "CSS", "JavaScript", "Animation"],
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&h=400&fit=crop",
      github: "#",
      demo: "#"
    },
    {
      title: "Prompt Dodge Game",
      description: "An innovative quiz-style driving game where players dodge obstacles while answering engineering prompts, combining entertainment with education.",
      tech: ["Python", "Pygame"],
      image: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=600&h=400&fit=crop",
      github: "https://github.com/samarthghag/Prompt-Dodge",
      demo: "#"
    },
    {
      title: "Weather Web App",
      description: "Real-time weather application providing comprehensive weather data for any city using OpenWeatherMap API integration.",
      tech: ["Java Servlet", "HTML/CSS", "API Integration"],
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop",
      github: "https://github.com/samarthghag/Weather_App",
      demo: "#"
    },
    {
      title: "Event Management System",
      description: "Comprehensive event platform with creation tools, attendee tracking, and admin approval workflow for seamless event coordination.",
      tech: ["Java", "Swing", "MySQL"],
      image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&h=400&fit=crop",
      github: "#",
      demo: "#"
    },
    {
      title: "Smart Home Management",
      description: "IoT control system for smart devices with integrated shopping features and comprehensive user account management.",
      tech: ["Node.js", "Express.js", "EJS"],
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
      github: "#",
      demo: "#"
    },
    {
      title: "Clickbait Creator",
      description: "AI-powered content generator leveraging Google AI API to create engaging clickbait titles with intelligent optimization.",
      tech: ["Flask", "Google AI API", "HTML/CSS", "JavaScript"],
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
      github: "#",
      demo: "#"
    },
    {
      title: "Financial Task Scheduler",
      description: "Advanced scheduling system applying OS algorithms to optimize financial workflows and task management processes.",
      tech: ["Python", "Streamlit", "Algorithm Design"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      github: "#",
      demo: "#"
    },
    {
      title: "Diwali Celebration App",
      description: "Interactive festive greeting application with beautiful animations, personalization features, and cultural elements.",
      tech: ["HTML", "CSS", "JavaScript"],
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop",
      github: "#",
      demo: "#"
    }
  ];

  useEffect(() => {
    gsap.fromTo(headerRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out", delay: 0.2 }
    );

    const cards = gridRef.current?.children;
    if (cards) {
      gsap.fromTo(cards,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
          delay: 0.4
        }
      );
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div ref={headerRef} className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-light text-gray-900 mb-6">
              All Projects
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore my complete portfolio of technical projects spanning AI, web development, 
              mobile apps, and system design solutions.
            </p>
          </div>

          <div ref={gridRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allProjects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
