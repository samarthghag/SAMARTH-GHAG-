
import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Java", "Python", "C/C++", "JavaScript", "HTML/CSS"]
    },
    {
      title: "Frameworks & Libraries",
      skills: ["React", "Node.js", "Express.js", "Flask", "Streamlit"]
    },
    {
      title: "Databases & Tools",
      skills: ["MongoDB", "MySQL", "Git", "Postman", "VSCode"]
    },
    {
      title: "Technologies",
      skills: ["AI/ML", "Google AI API", "REST APIs", "Responsive Design"]
    }
  ];

  const certifications = [
    "Ethical Hacking",
    "Introduction to Python",
    "What Is Generative AI?",
    "Proggy-Buggy Programming Contest 2024"
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Skills & Certifications
            </span>
          </h2>
          <p className="text-xl text-slate-300">
            Technologies and expertise I bring to every project.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/30">
              <h3 className="text-lg font-semibold mb-4 text-blue-400">
                {category.title}
              </h3>
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="bg-slate-700/30 text-slate-300 px-3 py-2 rounded-lg text-sm">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 rounded-2xl p-8 border border-slate-600/30">
          <h3 className="text-2xl font-bold mb-6 text-white text-center">Certifications</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {certifications.map((cert, index) => (
              <div key={index} className="flex items-center gap-3 bg-slate-800/30 rounded-lg p-4">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-slate-300">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
