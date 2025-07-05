
import React, { useEffect, useRef } from 'react';
import { Calendar, Building } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  const experiences = [
    {
      title: "Chief of Staff",
      company: "Guidero Pvt Ltd",
      period: "Feb 2025 – Present",
      description: "Leading business development initiatives and providing strategic tech consulting for startup operations. Driving growth through innovative solutions and operational excellence.",
      current: true
    },
    {
      title: "Founder",
      company: "Vault Vortex",
      period: "Jul 2024 – Present",
      description: "Founded and leading a fintech platform, overseeing product development, AI feature integration, and strategic planning. Building innovative financial technology solutions.",
      current: true
    },
    {
      title: "Java Development Intern",
      company: "CodeClause Pvt Ltd",
      period: "May – Jun 2024",
      description: "Developed Java-based software modules and contributed to application development projects. Gained hands-on experience in enterprise-level software development.",
      current: false
    },
    {
      title: "Web Developer",
      company: "Christ University",
      period: "Jan – May 2024",
      description: "Created and maintained university-related web components, enhancing digital infrastructure and user experience for academic systems.",
      current: false
    }
  ];

  useEffect(() => {
    const cards = cardsRef.current?.children;
    if (cards) {
      gsap.fromTo(cards,
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
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
    <section id="experience" className="py-24 bg-white" ref={sectionRef}>
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
            Experience
          </h2>
          <p className="text-xl text-gray-600">
            My professional journey across startups, enterprises, and academic institutions.
          </p>
        </div>

        <div ref={cardsRef} className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:shadow-sm transition-shadow duration-300">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{exp.title}</h3>
                  <div className="flex items-center gap-2 text-gray-600 mb-2">
                    <Building size={16} />
                    <span className="font-medium">{exp.company}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-gray-500 mt-2 md:mt-0">
                  <Calendar size={16} />
                  <span className="text-sm">{exp.period}</span>
                  {exp.current && (
                    <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-medium ml-2">
                      Current
                    </span>
                  )}
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
