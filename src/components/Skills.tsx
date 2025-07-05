
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Skills3D from './Skills3D';
import { Code, Database, Shield, Smartphone, Cloud, Zap } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const certsRef = useRef<HTMLDivElement>(null);
  const threeDRef = useRef<HTMLDivElement>(null);

  const skillCategories = [
    {
      title: "Frontend",
      icon: <Code className="w-6 h-6" />,
      skills: ["React", "TypeScript", "Tailwind CSS", "Next.js", "HTML5/CSS3"],
      gradient: "from-cyan-400 to-blue-500"
    },
    {
      title: "Backend",
      icon: <Database className="w-6 h-6" />,
      skills: ["Node.js", "Python", "Express.js", "Flask", "REST APIs"],
      gradient: "from-green-400 to-emerald-500"
    },
    {
      title: "Security",
      icon: <Shield className="w-6 h-6" />,
      skills: ["Ethical Hacking", "Penetration Testing", "Security Audits", "OWASP"],
      gradient: "from-red-400 to-pink-500"
    },
    {
      title: "DevOps",
      icon: <Cloud className="w-6 h-6" />,
      skills: ["Docker", "AWS", "Git", "CI/CD", "Linux"],
      gradient: "from-purple-400 to-violet-500"
    },
    {
      title: "Mobile",
      icon: <Smartphone className="w-6 h-6" />,
      skills: ["React Native", "Flutter", "iOS", "Android", "Progressive Web Apps"],
      gradient: "from-orange-400 to-red-500"
    },
    {
      title: "AI/ML",
      icon: <Zap className="w-6 h-6" />,
      skills: ["Machine Learning", "TensorFlow", "OpenAI API", "Data Analysis", "Neural Networks"],
      gradient: "from-yellow-400 to-orange-500"
    }
  ];

  const certifications = [
    { name: "Ethical Hacking Professional", level: "Advanced" },
    { name: "AWS Cloud Practitioner", level: "Certified" },
    { name: "Python Development", level: "Expert" },
    { name: "Generative AI Specialist", level: "Professional" }
  ];

  useEffect(() => {
    const skillCards = skillsRef.current?.children;
    if (skillCards) {
      gsap.fromTo(skillCards,
        { opacity: 0, y: 50, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: skillsRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }

    gsap.fromTo(threeDRef.current,
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: threeDRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      }
    );

    gsap.fromTo(certsRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
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
    <section className="py-24 relative overflow-hidden" ref={sectionRef}>
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/50 to-black/50"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-gradient mb-6 code-font">
            &lt; Skills & Expertise /&gt;
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Cutting-edge technologies and expertise I leverage to build exceptional digital solutions.
          </p>
        </div>

        {/* 3D Skills Visualization */}
        <div ref={threeDRef} className="mb-20 gsap-element">
          <h3 className="text-2xl font-bold text-white mb-8 text-center code-font">
            Interactive Skills Universe
          </h3>
          <Skills3D />
        </div>

        {/* Skills Grid */}
        <div ref={skillsRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {skillCategories.map((category, index) => (
            <div key={index} className="tech-card p-8 group hover:scale-105 transition-all duration-500 gsap-element">
              <div className={`w-12 h-12 bg-gradient-to-r ${category.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {category.icon}
              </div>
              <h3 className="text-xl font-bold mb-6 text-white code-font">
                {category.title}
              </h3>
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"></div>
                    <span className="text-white/80 font-medium">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div ref={certsRef} className="tech-card p-12 gsap-element">
          <h3 className="text-3xl font-bold mb-8 text-gradient text-center code-font">
            Professional Certifications
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="flex items-center justify-between p-6 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div>
                  <h4 className="text-white font-semibold mb-1">{cert.name}</h4>
                  <span className="text-cyan-400 text-sm code-font">{cert.level}</span>
                </div>
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
