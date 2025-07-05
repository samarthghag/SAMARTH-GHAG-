
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const certsRef = useRef<HTMLDivElement>(null);

  const skillCategories = [
    {
      title: "Languages",
      skills: ["Java", "Python", "C/C++", "JavaScript", "TypeScript"]
    },
    {
      title: "Frontend",
      skills: ["React", "HTML/CSS", "Tailwind CSS", "Responsive Design"]
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express.js", "Flask", "REST APIs"]
    },
    {
      title: "Database & Tools",
      skills: ["MongoDB", "MySQL", "Git", "Postman", "VSCode"]
    }
  ];

  const certifications = [
    "Ethical Hacking",
    "Introduction to Python",
    "What Is Generative AI?",
    "Proggy-Buggy Programming Contest 2024"
  ];

  useEffect(() => {
    const skillCards = skillsRef.current?.children;
    if (skillCards) {
      gsap.fromTo(skillCards,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: skillsRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }

    gsap.fromTo(certsRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: certsRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      }
    );
  }, []);

  return (
    <section className="py-24 bg-gray-50" ref={sectionRef}>
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
            Skills & Expertise
          </h2>
          <p className="text-xl text-gray-600">
            Technologies and expertise I bring to every project.
          </p>
        </div>

        <div ref={skillsRef} className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-sm">
              <h3 className="text-lg font-semibold mb-6 text-gray-900">
                {category.title}
              </h3>
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="bg-gray-50 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div ref={certsRef} className="bg-white rounded-2xl p-12 shadow-sm">
          <h3 className="text-2xl font-semibold mb-8 text-gray-900 text-center">Certifications</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {certifications.map((cert, index) => (
              <div key={index} className="flex items-center gap-3 bg-gray-50 rounded-xl p-4">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-gray-700 font-medium">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
