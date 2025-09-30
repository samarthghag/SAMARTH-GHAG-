
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Braces, Cpu, Shield, Palette, Layers, CloudLightning } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const skills = [
  {
    title: 'React & TypeScript',
    description: 'Component-driven interfaces and scalable architecture for modern web apps.',
    icon: <Braces size={22} />,
  },
  {
    title: 'AI & Automation',
    description: 'Generative workflows, multi-agent systems, and ML integrations that deliver value.',
    icon: <Cpu size={22} />,
  },
  {
    title: 'Cybersecurity',
    description: 'Ethical hacking, threat modelling, and secure coding for peace-of-mind shipping.',
    icon: <Shield size={22} />,
  },
  {
    title: 'Product Strategy',
    description: 'Translating ambiguous goals into clear roadmaps, UX flows, and success metrics.',
    icon: <Palette size={22} />,
  },
  {
    title: 'Systems Thinking',
    description: 'Designing resilient backends, APIs, and data pipelines ready for scale.',
    icon: <Layers size={22} />,
  },
  {
    title: 'DevOps & Cloud',
    description: 'CI/CD, observability, and automation to keep releases calm and predictable.',
    icon: <CloudLightning size={22} />,
  },
];

const Skills = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      if (cardsRef.current) {
        gsap.from(cardsRef.current.children, {
          scrollTrigger: {
            trigger: cardsRef.current,
            start: 'top 80%',
          },
          y: 40,
          opacity: 0,
          duration: 0.9,
          ease: 'power3.out',
          stagger: 0.12,
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="section-padding relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-10 top-10 w-64 h-64 bg-[#6c5ce7]/20 blur-3xl" />
        <div className="absolute right-6 bottom-0 w-72 h-72 bg-[#00b894]/15 blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="section-intro text-center space-y-4">
          <span className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-[#6c5ce7]/40 bg-[#6c5ce7]/10 text-xs uppercase tracking-[0.35em] text-white/70">
            Skillset
          </span>
          <h2 className="text-white">A toolkit built for bold, beautiful products.</h2>
          <p>
            Every engagement blends technical depth with refined presentation. Here’s how I help teams ship faster and smarter.
          </p>
        </div>

        <div ref={cardsRef} className="mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {skills.map((skill) => (
            <article key={skill.title} className="eb-card p-8 flex flex-col gap-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#6c5ce7]/25 border border-[#6c5ce7]/40 flex items-center justify-center text-[#9f95ff]">
                  {skill.icon}
                </div>
                <h3 className="text-white text-xl font-semibold">
                  {skill.title}
                </h3>
              </div>
              <p className="text-white/65 text-sm leading-relaxed">
                {skill.description}
              </p>
              <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
              <ul className="space-y-2 text-xs uppercase tracking-[0.3em] text-white/40">
                <li>Impact · Collaboration · Craft</li>
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
