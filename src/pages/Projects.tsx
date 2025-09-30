import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Sparkles, ListFilter, ArrowUpRight } from 'lucide-react';
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
      github: "https://github.com/samarthghag/AI-Agents",
      demo: "#"
    },
    {
      title: "Finance Savvy Journey",
      description: "Comprehensive financial management platform with expense tracking, financial education resources, and paper trading simulator for investment practice.",
      tech: ["React", "TypeScript", "Supabase", "Tailwind CSS", "React Query"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      github: "https://github.com/samarthghag/finance-savvy-journey",
      demo: "https://finance-savvy-journey.vercel.app/"
    },
    {
      title: "Groovy Cart Cascade",
      description: "Modern, full-stack e-commerce platform with React, TypeScript, and Supabase. Features real-time cart management, user authentication, and seamless shopping experience.",
      tech: ["React", "TypeScript", "Supabase", "Tailwind CSS", "shadcn/ui"],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      github: "https://github.com/samarthghag/groovy-cart-cascade",
      demo: "https://groovy-cart-cascade.vercel.app/"
    },
    {
      title: "Eco-Tech Start Website",
      description: "Modern eco-business website featuring smooth scroll animations, interactive elements, and integrated contact forms with sustainable design principles.",
      tech: ["HTML", "CSS", "JavaScript", "Animation"],
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&h=400&fit=crop",
      github: "https://github.com/samarthghag/Eco-Tech-Start-Website",
      demo: "https://eco-tech-start-website.vercel.app/"
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
      github: "https://github.com/samarthghag/Event_Management_System",
      demo: "#"
    },
    {
      title: "Smart Home Management",
      description: "IoT control system for smart devices with integrated shopping features and comprehensive user account management.",
      tech: ["Node.js", "Express.js", "EJS"],
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
      github: "https://github.com/samarthghag/Smart-Home-Management-Website",
      demo: "https://smart-home-management-website.vercel.app/"
    },
    {
      title: "Clickbait Creator",
      description: "AI-powered content generator leveraging Google AI API to create engaging clickbait titles with intelligent optimization.",
      tech: ["Flask", "Google AI API", "HTML/CSS", "JavaScript"],
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
      github: "https://github.com/samarthghag/Clickbait-Creator",
      demo: "#"
    },
    {
      title: "Financial Task Scheduler",
      description: "Advanced scheduling system applying OS algorithms to optimize financial workflows and task management processes.",
      tech: ["Python", "Streamlit", "Algorithm Design"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      github: "https://github.com/samarthghag/Financial-Task-Scheduler",
      demo: "https://financial-task-scheduler-w8r7eecgrgru2rl49g4mcb.streamlit.app/"
    },
    {
      title: "Diwali Celebration App",
      description: "Interactive festive greeting application with beautiful animations, personalization features, and cultural elements.",
      tech: ["HTML", "CSS", "JavaScript"],
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop",
      github: "https://github.com/samarthghag/Diwali-Celebration", 
      demo: "https://diwali-celebration.vercel.app/"
    }
  ];

  const technologies = new Set<string>();
  let liveProjects = 0;

  allProjects.forEach((project) => {
    project.tech.forEach((item) => technologies.add(item));
    if (project.demo && project.demo !== '#') {
      liveProjects += 1;
    }
  });

  const stats = {
    total: allProjects.length,
    techCount: technologies.size,
    liveCount: liveProjects,
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (headerRef.current) {
        gsap.fromTo(
          headerRef.current.children,
          { opacity: 0, y: 32 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: 'power3.out',
            stagger: 0.14,
          }
        );
      }

      if (gridRef.current) {
        gsap.fromTo(
          gridRef.current.children,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.08,
            ease: 'power3.out',
            delay: 0.3,
          }
        );
      }
    });

    return () => ctx.revert();
  }, []);

  const focusAreas = ['AI & Agents', 'Fintech', 'Commerce', 'SaaS Platforms', 'Interactive UX', 'Systems & Tools'];

  return (
    <div className="relative min-h-screen bg-[#050810] text-white overflow-hidden">
      <Navigation />
      <main id="main" className="pt-24 pb-24">
        <section className="relative overflow-hidden">
          <div className="absolute -top-40 -right-20 h-[420px] w-[420px] rounded-full bg-[#6c5ce7]/35 blur-[160px]" />
          <div className="absolute bottom-[-30%] -left-24 h-[380px] w-[380px] rounded-full bg-[#00b894]/25 blur-[150px]" />
          <div className="noise-overlay" />
          <div className="relative max-w-6xl mx-auto px-6 lg:px-10">
            <div ref={headerRef} className="space-y-10 text-center lg:text-left py-16">
              <span className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-white/10 bg-white/5 text-xs uppercase tracking-[0.35em] text-white/60">
                <Sparkles size={16} className="text-[#9f95ff]" />
                Project Archive
              </span>
              <div className="grid gap-10 lg:grid-cols-[3fr,2fr] lg:items-end">
                <div className="space-y-6">
                  <h1 className="text-[clamp(2.8rem,5vw,4.8rem)] leading-tight">
                    Every build, wide open—in <span className="gradient-text">Elegant Bold</span> detail.
                  </h1>
                  <p className="text-white/65 text-lg max-w-2xl mx-auto lg:mx-0">
                    Explore the full stack of experiments, products, and platforms I’ve crafted across AI systems, finance tools,
                    commerce experiences, and rich interactive web applications.
                  </p>
                </div>
                <div className="glass-effect rounded-3xl border border-white/10 px-7 py-8 text-left space-y-6">
                  <div className="flex items-center justify-between text-xs uppercase tracking-[0.35em] text-white/45">
                    <span>Total Projects</span>
                    <span className="text-white text-2xl font-semibold tracking-[0.25em]">{stats.total}</span>
                  </div>
                  <div className="flex items-center justify-between text-xs uppercase tracking-[0.35em] text-white/45">
                    <span>Technologies</span>
                    <span className="text-white text-2xl font-semibold tracking-[0.25em]">{stats.techCount}</span>
                  </div>
                  <div className="flex items-center justify-between text-xs uppercase tracking-[0.35em] text-white/45">
                    <span>Live Deploys</span>
                    <span className="text-white text-2xl font-semibold tracking-[0.25em]">{stats.liveCount}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative">
          <div className="relative max-w-6xl mx-auto px-6 lg:px-10">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-12">
              <div className="text-xs uppercase tracking-[0.35em] text-white/45 inline-flex items-center gap-3">
                <ListFilter size={16} className="text-[#9f95ff]" />
                Focus Areas
              </div>
              <div className="flex flex-wrap gap-3">
                {focusAreas.map((area) => (
                  <span
                    key={area}
                    className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-[11px] uppercase tracking-[0.3em] text-white/60"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>

            <div
              ref={gridRef}
              className="grid gap-10 sm:grid-cols-2 xl:grid-cols-3 auto-rows-[minmax(0,1fr)]"
            >
              {allProjects.map((project) => (
                <ProjectCard key={project.title} {...project} />
              ))}
            </div>

            <div className="mt-16 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 border-t border-white/10 pt-10">
              <p className="text-white/60 text-sm sm:text-base max-w-2xl">
                Want a deep dive into any build or to explore collaboration? Let’s unpack code, architecture, or product thinking together.
              </p>
              <a
                href="mailto:ghagsamarth@gmail.com"
                className="primary-button px-6 py-3 text-xs uppercase tracking-[0.35em] inline-flex items-center gap-3"
              >
                Start a project
                <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Projects;
