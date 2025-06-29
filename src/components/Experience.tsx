
import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
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
    },
    {
      title: "Graphic Design Intern",
      company: "YouVah",
      period: "Apr – May 2022",
      description: "Worked on visual design assets and branding projects, developing creative solutions for marketing and communication materials.",
      current: false
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <p className="text-xl text-slate-300">
            My professional journey across startups, enterprises, and academic institutions.
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500 hidden md:block"></div>

          {experiences.map((exp, index) => (
            <div key={index} className="relative mb-12 md:ml-16">
              {/* Timeline Dot */}
              <div className="absolute -left-20 top-6 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-slate-900 hidden md:block"></div>
              
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 hover:bg-slate-800/70 transition-all duration-300 border border-slate-700/30">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-1">{exp.title}</h3>
                    <h4 className="text-blue-400 font-medium">{exp.company}</h4>
                  </div>
                  <div className="flex items-center gap-2 text-slate-400 mt-2 md:mt-0">
                    <Calendar size={16} />
                    <span className="text-sm">{exp.period}</span>
                    {exp.current && (
                      <span className="bg-green-600/20 text-green-300 px-2 py-1 rounded-full text-xs ml-2">
                        Current
                      </span>
                    )}
                  </div>
                </div>
                <p className="text-slate-300 leading-relaxed">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
