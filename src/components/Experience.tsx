import React, { useEffect, useRef } from 'react';
import { Briefcase, Building2 } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const experiences = [
  {
    role: 'Co-Founder & CTO',
    company: 'College Circle',
    year: '2025 — Present',
    copy: 'Leading engineering, product strategy, and a cross-functional team shaping an education marketplace for India.',
  },
  {
    role: 'Chief of Staff',
    company: 'Guidero Pvt Ltd',
    year: '2025 — Present',
    copy: 'Driving growth initiatives, GTM experiments, and technical operations for a fast-paced SaaS startup.',
  },
  {
    role: 'Founder',
    company: 'Vault Vortex',
    year: '2024 — Present',
    copy: 'Architected a secure fintech platform, shipping AI-assisted money tools from concept to pilot launch.',
  },
  {
    role: 'Java Development Intern',
    company: 'CodeClause',
    year: 'Summer 2024',
    copy: 'Built enterprise-grade modules, improved code efficiency, and practiced rigorous quality standards.',
  },
  {
    role: 'Graphics Design Intern',
    company: 'Yovah',
    year: 'Summer 2023',
    copy: 'Designed engaging graphics and user interfaces, contributing to a cohesive brand identity.',
  },
];

const Experience = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      if (listRef.current) {
        gsap.from(listRef.current.children, {
          scrollTrigger: {
            trigger: listRef.current,
            start: 'top 80%',
          },
          opacity: 0,
          y: 40,
          duration: 1,
          stagger: 0.18,
          ease: 'power3.out',
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="experience" ref={sectionRef} className="section-padding relative">
      <div className="absolute inset-0">
        <div className="absolute inset-y-0 left-[28px] sm:left-1/2 w-[1px] bg-gradient-to-b from-transparent via-[#6c5ce7] to-transparent opacity-30" />
      </div>

      <div className="max-w-5xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="section-intro text-center space-y-4">
          <span className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-[#00b894]/40 bg-[#00b894]/10 text-xs uppercase tracking-[0.35em] text-white/70">
            <Briefcase size={16} className="text-[#00b894]" />
            Timeline
          </span>
          <h2 className="text-white">Anchored in leadership, shipping with momentum.</h2>
          <p>
            From founding teams to venture-backed startups, I’ve partnered with leaders to transform bold roadmaps into polished releases.
          </p>
        </div>

        <div ref={listRef} className="mt-16 space-y-12">
          {experiences.map((exp) => (
            <article key={exp.role} className="relative">
              <div className="timeline-node absolute -left-9 top-4 hidden sm:block" />
              <div className="sm:ml-12">
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-3">
                  <div>
                    <h3 className="text-white text-2xl font-semibold">{exp.role}</h3>
                    <div className="mt-2 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs uppercase tracking-[0.35em] text-white/60">
                      <Building2 size={14} />
                      {exp.company}
                    </div>
                  </div>
                  <span className="text-sm uppercase tracking-[0.3em] text-[#9f95ff]">{exp.year}</span>
                </div>
                <p className="mt-5 text-white/65 leading-relaxed text-base">
                  {exp.copy}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
