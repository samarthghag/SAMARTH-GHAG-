
import React, { useEffect, useRef } from 'react';
import { Code, Shield, Brain, Users } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const journeyRef = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    // Title animation
    gsap.fromTo(titleRef.current, 
      { opacity: 0, y: 50 },
      {
        opacity: 1, 
        y: 0, 
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Cards stagger animation
    const cards = cardsRef.current?.children;
    if (cards) {
      gsap.fromTo(cards,
        { opacity: 0, y: 60, scale: 0.8 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }

    // Journey section animation
    gsap.fromTo(journeyRef.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: journeyRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Card hover animations
    const cardElements = cardsRef.current?.querySelectorAll('.highlight-card');
    cardElements?.forEach(card => {
      card.addEventListener('mouseenter', () => {
        gsap.to(card, { 
          y: -8, 
          scale: 1.02, 
          duration: 0.3, 
          ease: "power2.out",
          boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
        });
      });
      card.addEventListener('mouseleave', () => {
        gsap.to(card, { 
          y: 0, 
          scale: 1, 
          duration: 0.3, 
          ease: "power2.out",
          boxShadow: "none"
        });
      });
    });
  }, []);

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8" ref={sectionRef}>
      <div className="max-w-6xl mx-auto">
        <div ref={titleRef} className="text-center mb-16">
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

        <div ref={cardsRef} className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((item, index) => (
            <div key={index} className="highlight-card bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/30 cursor-pointer">
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

        <div ref={journeyRef} className="mt-16 bg-gradient-to-r from-slate-800/50 to-slate-700/50 rounded-2xl p-8 border border-slate-600/30">
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
