import React, { useEffect, useRef } from 'react';
import { Calendar, Building, Briefcase, TrendingUp } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  const experiences = [
    {
      title: "Co-Founder and CTO",
      company: "College Circle",
      period: "Apr 2025 – Present",
      description: "Leading the technical vision and product development for a fast-growing educational platform. Overseeing engineering teams, driving innovation, and ensuring robust, scalable solutions for students and institutions.",
      current: true,
      type: "Leadership",
      color: "from-indigo-500 to-blue-500"
    },
    {
      title: "Chief of Staff",
      company: "Guidero Pvt Ltd",
      period: "Feb 2025 – Present",
      description: "Leading business development initiatives and providing strategic tech consulting for startup operations. Driving growth through innovative solutions and operational excellence.",
      current: true,
      type: "Leadership",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Founder",
      company: "Vault Vortex",
      period: "Jul 2024 – Present",
      description: "Founded and leading a fintech platform, overseeing product development, AI feature integration, and strategic planning. Building innovative financial technology solutions.",
      current: true,
      type: "Entrepreneurship",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Java Development Intern",
      company: "CodeClause Pvt Ltd",
      period: "May – Jun 2024",
      description: "Developed Java-based software modules and contributed to enterprise application development projects. Gained hands-on experience in large-scale software architecture.",
      current: false,
      type: "Development",
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Web Developer",
      company: "Christ University",
      period: "Jan – May 2024",
      description: "Created and maintained university-related web components, enhancing digital infrastructure and user experience for academic systems.",
      current: false,
      type: "Academic",
      color: "from-orange-500 to-red-500"
    }
  ];

  useEffect(() => {
    const cards = cardsRef.current?.children;
    if (cards) {
      gsap.fromTo(cards,
        { opacity: 0, x: -60, rotationY: -15 },
        {
          opacity: 1,
          x: 0,
          rotationY: 0,
          duration: 0.8,
          stagger: 0.15,
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
    <section id="experience" className="py-20 bg-gradient-to-br from-slate-50 to-purple-50 relative overflow-hidden" ref={sectionRef}>
      {/* Background Elements */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-purple-300/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl"></div>

      <div className="max-w-5xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-600 to-blue-600 text-white px-6 py-2 rounded-full text-sm font-bold mb-6">
            <TrendingUp size={16} />
            <span className="font-mono">CAREER_JOURNEY</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-slate-800 mb-6 font-mono">
            Experience
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            My professional journey across startups, enterprises, and academic institutions, 
            building innovative solutions and leading transformative projects.
          </p>
        </div>

        <div ref={cardsRef} className="space-y-6">
          {experiences.map((exp, index) => (
            <div key={index} className="group">
              <div className="glass-effect rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 border border-white/20 relative overflow-hidden">
                {/* Background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-r ${exp.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl`}></div>
                
                <div className="relative z-10">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-4">
                        <div className={`w-12 h-12 bg-gradient-to-r ${exp.color} rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}>
                          <Briefcase size={20} />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-slate-800 font-mono">{exp.title}</h3>
                          <div className="flex items-center gap-2 text-slate-600">
                            <Building size={16} />
                            <span className="font-semibold">{exp.company}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <div className="flex items-center gap-2 text-slate-500">
                        <Calendar size={16} />
                        <span className="text-sm font-mono">{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className={`bg-gradient-to-r ${exp.color} text-white px-3 py-1 rounded-full text-xs font-bold`}>
                          {exp.type}
                        </span>
                        {exp.current && (
                          <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold border border-green-300">
                            ACTIVE
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                  <p className="text-slate-600 leading-relaxed">{exp.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
