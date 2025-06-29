
import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Prompt Dodge Game",
      description: "An innovative quiz-style driving game where players dodge obstacles while answering engineering prompts, combining entertainment with education.",
      tech: ["Python", "Pygame"],
      image: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=400&h=250&fit=crop",
      github: "#",
      demo: "#"
    },
    {
      title: "Weather Web App",
      description: "Real-time weather application providing comprehensive weather data for any city using OpenWeatherMap API integration.",
      tech: ["Java Servlet", "HTML/CSS", "API Integration"],
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=400&h=250&fit=crop",
      github: "#",
      demo: "#"
    },
    {
      title: "Event Management System",
      description: "Comprehensive event platform with creation tools, attendee tracking, and admin approval workflow for seamless event coordination.",
      tech: ["Java", "Swing", "MySQL"],
      image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=400&h=250&fit=crop",
      github: "#",
      demo: "#"
    },
    {
      title: "Smart Home Management",
      description: "IoT control system for smart devices with integrated shopping features and comprehensive user account management.",
      tech: ["Node.js", "Express.js", "EJS"],
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=250&fit=crop",
      github: "#",
      demo: "#"
    },
    {
      title: "Clickbait Creator",
      description: "AI-powered content generator leveraging Google AI API to create engaging clickbait titles with intelligent optimization.",
      tech: ["Flask", "Google AI API", "HTML/CSS", "JavaScript"],
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=250&fit=crop",
      github: "#",
      demo: "#"
    },
    {
      title: "Financial Task Scheduler",
      description: "Advanced scheduling system applying OS algorithms to optimize financial workflows and task management processes.",
      tech: ["Python", "Streamlit", "Algorithm Design"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
      github: "#",
      demo: "#"
    },
    {
      title: "Eco-Tech Start Website",
      description: "Modern eco-business website featuring smooth scroll animations, interactive elements, and integrated contact forms.",
      tech: ["HTML", "CSS", "JavaScript"],
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=250&fit=crop",
      github: "#",
      demo: "#"
    },
    {
      title: "Diwali Celebration App",
      description: "Interactive festive greeting application with beautiful animations, personalization features, and cultural elements.",
      tech: ["HTML", "CSS", "JavaScript"],
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=250&fit=crop",
      github: "#",
      demo: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl overflow-hidden hover:bg-slate-800/70 transition-all duration-300 hover:scale-105 border border-slate-700/30 group">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2 text-white group-hover:text-blue-400 transition-colors">
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
                  <a href={project.github} className="text-slate-400 hover:text-blue-400 transition-colors">
                    <Github size={18} />
                  </a>
                  <a href={project.demo} className="flex items-center gap-1 text-slate-400 hover:text-blue-400 transition-colors text-sm">
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
