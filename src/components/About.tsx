
import React from 'react';
import { Code, Shield, Brain, Users } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Full-Stack Development",
      description: "Proficient in modern web technologies including React, Node.js, Python, and Java"
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI & Machine Learning",
      description: "Building intelligent solutions with Google AI API and generative AI technologies"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Cybersecurity",
      description: "Certified in ethical hacking with focus on secure application development"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Leadership",
      description: "Leading teams and driving innovation as Founder of Vault Vortex and Chief of Staff"
    }
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            I'm a passionate software developer and entrepreneur currently pursuing my Bachelor's in Computer Application 
            at Christ University, Bangalore. With experience spanning from startup leadership to technical development, 
            I bring a unique blend of business acumen and technical expertise to every project.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((item, index) => (
            <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 hover:bg-slate-800/70 transition-all duration-300 hover:scale-105 border border-slate-700/30">
              <div className="text-blue-400 mb-4">
                {item.icon}
              </div>
              <h3 className="text-lg font-semibold mb-3 text-white">
                {item.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-slate-800/50 to-slate-700/50 rounded-2xl p-8 border border-slate-600/30">
          <h3 className="text-2xl font-bold mb-4 text-white">My Journey</h3>
          <p className="text-slate-300 leading-relaxed">
            From graphic design intern to Chief of Staff, my career has been driven by curiosity and innovation. 
            I've founded Vault Vortex, a fintech platform, developed AI-powered applications, and led technical 
            projects across various domains. My goal is to create technology solutions that make a meaningful 
            impact while continuously learning and growing in this ever-evolving field.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
