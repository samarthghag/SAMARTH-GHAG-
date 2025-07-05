
import React, { useEffect, useRef } from 'react';
import { Code, Shield, Brain, Users } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const highlights = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Full-Stack Development",
      description: "Proficient in modern technologies including React, Node.js, Python, and Java"
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI & Machine Learning",
      description: "Building intelligent solutions with Google AI API and generative technologies"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Cybersecurity",
      description: "Certified in ethical hacking with focus on secure application development"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Leadership",
      description: "Leading teams as Founder of Vault Vortex and Chief of Staff at Guidero"
    }
  ];

  useEffect(() => {
    const cards = contentRef.current?.querySelectorAll('.highlight-card');
    if (cards) {
      gsap.fromTo(cards,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: contentRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }
  }, []);

  return (
    <section id="about" className="py-24 bg-gray-50" ref={sectionRef}>
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
            About Me
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            I'm a passionate software developer and entrepreneur currently pursuing my Bachelor's in Computer Application 
            at Christ University, Bangalore. With experience spanning from startup leadership to technical development, 
            I bring a unique blend of business acumen and technical expertise to every project.
          </p>
        </div>

        <div ref={contentRef} className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((item, index) => (
            <div key={index} className="highlight-card bg-white rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="text-gray-700 mb-4 flex justify-center">
                {item.icon}
              </div>
              <h3 className="text-lg font-semibold mb-3 text-gray-900">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-2xl p-12 shadow-sm">
          <h3 className="text-2xl font-semibold mb-6 text-gray-900 text-center">My Journey</h3>
          <p className="text-gray-600 leading-relaxed text-lg text-center max-w-4xl mx-auto">
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
