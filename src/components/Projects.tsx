
import React, { useEffect, useRef } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  const projects = [
    {
      title: "NLP Labs 1-7: Comprehensive Pipeline",
      description: "Complete Natural Language Processing pipeline covering 7 labs: tokenization, POS tagging, multilingual support, WordNet, n-grams, discourse analysis, and lemmatization with text generation.",
      tech: ["Python", "NLTK", "spaCy", "NLP", "WordNet"],
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=250&fit=crop",
      github: "https://github.com/samarthghag/SAMARTH-GHAG-/tree/main/nlp-labs",
      demo: "#"
    },
    {
      title: "Prompt Dodge Game",
      description: "An innovative quiz-style driving game where players dodge obstacles while answering engineering prompts, combining entertainment with education.",
      tech: ["Python", "Pygame"],
      image: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=400&h=250&fit=crop",
      github: "https://github.com/samarthghag/Prompt-Dodge",
      demo: "#"
    },
    {
      title: "Weather Web App",
      description: "Real-time weather application providing comprehensive weather data for any city using OpenWeatherMap API integration.",
      tech: ["Java Servlet", "HTML/CSS", "API Integration"],
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=400&h=250&fit=crop",
      github: "https://github.com/samarthghag/Weather_App",
      demo: "#"
    },
    {
      title: "Event Management System",
      description: "Comprehensive event platform with creation tools, attendee tracking, and admin approval workflow for seamless event coordination.",
      tech: ["Java", "Swing", "MySQL"],
      image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=400&h=250&fit=crop",
      github: "",
      demo: "#"
    },
    {
      title: "Smart Home Management",
      description: "IoT control system for smart devices with integrated shopping features and comprehensive user account management.",
      tech: ["Node.js", "Express.js", "EJS"],
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=250&fit=crop",
      github: "https://github.com/samarthghag/Smart-Home-Management-Website",
      demo: "https://smart-home-management-website.vercel.app/"
    },
    {
      title: "Clickbait Creator",
      description: "AI-powered content generator leveraging Google AI API to create engaging clickbait titles with intelligent optimization.",
      tech: ["Flask", "Google AI API", "HTML/CSS", "JavaScript"],
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=250&fit=crop",
      github: "https://github.com/samarthghag/Clickbait-Creator",
      demo: "#"
    },
    {
      title: "Financial Task Scheduler",
      description: "Advanced scheduling system applying OS algorithms to optimize financial workflows and task management processes.",
      tech: ["Python", "Streamlit", "Algorithm Design"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
      github: "https://github.com/samarthghag/Financial-Task-Scheduler",
      demo: "https://financial-task-scheduler-w8r7eecgrgru2rl49g4mcb.streamlit.app/"
    },
    {
      title: "Eco-Tech Start Website",
      description: "Modern eco-business website featuring smooth scroll animations, interactive elements, and integrated contact forms.",
      tech: ["HTML", "CSS", "JavaScript"],
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=250&fit=crop",
      github: "https://github.com/samarthghag/Eco-Tech-Start-Website",
      demo: "https://eco-tech-start-website.vercel.app/"
    },
    {
      title: "Diwali Celebration App",
      description: "Interactive festive greeting application with beautiful animations, personalization features, and cultural elements.",
      tech: ["HTML", "CSS", "JavaScript"],
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=250&fit=crop",
      github: "https://github.com/samarthghag/Diwali-Celebration",
      demo: "https://diwali-celebration.vercel.app/"
    }
  ];

  useEffect(() => {
    // Title animation
    gsap.fromTo(titleRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Project cards staggered animation
    const cards = gridRef.current?.children;
    if (cards) {
      gsap.fromTo(cards,
        { 
          opacity: 0, 
          y: 80, 
          scale: 0.8,
          rotationY: 15
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          rotationY: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "back.out(1.2)",
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }

    // Individual card hover animations
    const projectCards = gridRef.current?.querySelectorAll('.project-card');
    projectCards?.forEach(card => {
      const image = card.querySelector('.project-image');
      const content = card.querySelector('.project-content');
      const buttons = card.querySelectorAll('.project-button');

      card.addEventListener('mouseenter', () => {
        gsap.to(card, { 
          y: -12, 
          scale: 1.02,
          duration: 0.4, 
          ease: "power2.out"
        });
        gsap.to(image, {
          scale: 1.1,
          duration: 0.4,
          ease: "power2.out"
        });
        gsap.to(buttons, {
          opacity: 1,
          scale: 1,
          stagger: 0.05,
          duration: 0.3,
          ease: "back.out(1.7)"
        });
      });

      card.addEventListener('mouseleave', () => {
        gsap.to(card, { 
          y: 0, 
          scale: 1,
          duration: 0.4, 
          ease: "power2.out"
        });
        gsap.to(image, {
          scale: 1,
          duration: 0.4,
          ease: "power2.out"
        });
        gsap.to(buttons, {
          opacity: 0.7,
          scale: 0.9,
          duration: 0.2,
          ease: "power2.out"
        });
      });
    });
  }, []);

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30" ref={sectionRef}>
      <div className="max-w-7xl mx-auto">
        <div ref={titleRef} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            A showcase of my technical expertise across various domains including AI, web development, 
            and system design.
          </p>
        </div>

        <div ref={gridRef} className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="project-card bg-slate-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-slate-700/30 cursor-pointer">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="project-image w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
              </div>
              
              <div className="project-content p-6">
                <h3 className="text-lg font-semibold mb-2 text-white">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="bg-blue-600/20 text-blue-300 px-2 py-1 rounded-full text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex justify-between items-center">
                  <a href={project.github} className="project-button text-slate-400 hover:text-blue-400 transition-colors opacity-70 scale-90">
                    <Github size={18} />
                  </a>
                  <a href={project.demo} className="project-button flex items-center gap-1 text-slate-400 hover:text-blue-400 transition-colors text-sm opacity-70 scale-90">
                    <ExternalLink size={16} />
                    Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
