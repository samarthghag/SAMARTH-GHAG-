
import React, { useEffect, useRef } from 'react';
import { Brain, Code2, ShieldCheck, Target, Sparkles } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const highlights = [
  {
    icon: <Code2 size={20} />,
    title: 'Engineering Elegance',
    description: 'Architecting resilient, scalable systems with TypeScript, React, and cloud-native tooling.',
  },
  {
    icon: <Brain size={20} />,
    title: 'AI, Applied',
    description: 'Deploying intelligent automation that sharpens operations and unlocks new revenue streams.',
  },
];

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from('.about-heading', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
        },
        y: 36,
        opacity: 0,
        ease: 'power3.out',
        duration: 1,
      });

      if (cardsRef.current) {
        gsap.from(cardsRef.current.children, {
          scrollTrigger: {
            trigger: cardsRef.current,
            start: 'top 80%',
          },
          y: 30,
          opacity: 0,
          duration: 0.8,
          ease: 'power3.out',
          stagger: 0.2,
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="section-padding relative">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-14 items-center">
          <div className="space-y-6 about-heading">
            <span className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-white/10 bg-white/5 text-xs uppercase tracking-[0.35em] text-white/60">
              <Sparkles size={16} className="text-[#6c5ce7]" />
              About
            </span>
            <h2 className="text-white leading-tight">
              Designing technology with a strategist’s mind and a designer’s eye.
            </h2>
            <p className="text-white/65 text-base md:text-lg leading-relaxed">
              I’m currently pursuing my BCA at Christ University and building products at the intersection of strategy, design, and emerging tech. I lead engineering at College Circle and advise startups on how to scale with precision, clarity, and charm.
            </p>
            <p className="text-white/60 text-base md:text-lg leading-relaxed">
              Whether it’s crafting a secure fintech platform, orchestrating AI-driven experiences, or mentoring teams, I bring calm leadership and curiosity to every engagement.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 pt-4" ref={cardsRef}>
              {highlights.map((item) => (
                <div key={item.title} className="eb-card p-6 flex gap-4">
                  <div className="w-11 h-11 rounded-full bg-[#6c5ce7]/20 border border-white/10 flex items-center justify-center text-[#9f95ff]">
                    {item.icon}
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-white text-lg font-semibold">
                      {item.title}
                    </h3>
                    <p className="text-white/60 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 bg-gradient-to-br from-[#6c5ce7]/40 to-[#00b894]/30 blur-3xl" />
            <div className="relative gradient-border rounded-[2.5rem] overflow-hidden">
              <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_left,rgba(108,92,231,0.6),transparent_55%)]" />
              <div className="relative bg-[#112240]/95 border border-white/10 rounded-[2.5rem] p-8 flex flex-col gap-6">
                <div className="rounded-[1.75rem] overflow-hidden border border-white/10">
                  <img
                    src="/lovable-uploads/17014b2d-4f0b-4cf2-b3f1-10c20fad2809.png"
                    alt="Samarth Ghag working"
                    className="w-full object-cover"
                    loading="lazy"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4 text-sm uppercase tracking-[0.25em] text-white/60">
                  <div>
                    <span className="text-[#9f95ff] text-xs">Experience</span>
                    <p className="text-white text-2xl font-semibold leading-tight">1.5+ yrs</p>
                  </div>
                  <div>
                    <span className="text-[#00b894] text-xs">Sectors</span>
                    <p className="text-white text-2xl font-semibold leading-tight">Fintech, AI, SaaS</p>
                  </div>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-5 space-y-3">
                  <div className="flex items-center gap-2 text-white/60 text-xs uppercase tracking-[0.3em]">
                    <Target size={14} className="text-[#00b894]" />
                    Mission
                  </div>
                  <p className="text-white/65 text-sm leading-relaxed">
                    Empowering founders with elegant, secure systems that scale gracefully and feel unforgettable.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
