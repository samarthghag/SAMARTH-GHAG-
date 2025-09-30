
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ProjectCard from './ProjectCard';

gsap.registerPlugin(ScrollTrigger);

const featuredProjects = [
    {
      title: "Multi-Agent Code Writing System",
      description: "A multi-agent system for collaborative code writing using LangGraph and Gemini API with five specialized agents for orchestration, planning, coding, testing, and checking.",
      tech: ["Python", "LangGraph", "LangChain", "Gemini API", "Multi-Agent"],
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
      github: "https://github.com/samarthghag/AI-Agents",
      demo: "#",
      featured: true,
      metrics: {
        stars: 12,
        commits: 45,
        year: "2024",
        status: "active" as const
      }
    },
    {
      title: "Finance Savvy Journey",
      description: "Comprehensive financial management platform with expense tracking, financial education resources, and paper trading simulator for investment practice.",
      tech: ["React", "TypeScript", "Supabase", "Tailwind CSS", "React Query"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      github: "https://github.com/samarthghag/finance-savvy-journey",
      demo: "https://finance-savvy-journey.vercel.app/",
      featured: true,
      metrics: {
        stars: 8,
        commits: 67,
        year: "2024",
        status: "completed" as const
      }
    },
    {
      title: "Eco-Tech Start Website",
      description: "Modern eco-business website featuring smooth scroll animations, interactive elements, and integrated contact forms with sustainable design principles.",
      tech: ["HTML", "CSS", "JavaScript", "Animation"],
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&h=400&fit=crop",
      github: "https://github.com/samarthghag/Eco-Tech-Start-Website",
      demo: "https://eco-tech-start-website.vercel.app/",
      featured: true,
      metrics: {
        stars: 5,
        commits: 23,
        year: "2024",
        status: "completed" as const
      }
    }
  ];

const FeaturedProjects = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!cardsRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(cardsRef.current!.children, {
        scrollTrigger: {
          trigger: cardsRef.current,
          start: 'top 80%',
        },
        y: 50,
        opacity: 0,
        duration: 0.9,
        ease: 'power3.out',
        stagger: 0.15,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="section-padding relative">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="section-intro text-center space-y-4">
          <span className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-[#6c5ce7]/40 bg-[#6c5ce7]/10 text-xs uppercase tracking-[0.35em] text-white/70">
            <Sparkles size={16} className="text-[#9f95ff]" />
            Featured Work
          </span>
          <h2 className="text-white">Selected builds shaping products, platforms, and experiments.</h2>
          <p>
            A quick tour through recent projects where strategy, storytelling, and engineering intertwine.
          </p>
        </div>

        <div ref={cardsRef} className="mt-14 grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>

        <div className="mt-14 flex justify-center">
          <Link
            to="/projects"
            className="primary-button px-8 py-3 text-sm font-semibold tracking-[0.3em] uppercase flex items-center gap-3"
          >
            Explore More
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
