
import React, { useEffect, useRef } from 'react';
import { Code, Shield, Brain, Users, Zap, Target } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const highlights = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Full-Stack Development",
      description: "Modern web applications with React, Node.js, Python, and cutting-edge technologies",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI & Machine Learning",
      description: "Intelligent solutions powered by Google AI API and advanced machine learning algorithms",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Cybersecurity",
      description: "Certified ethical hacking expertise with focus on secure application development",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Leadership",
      description: "Proven track record as Founder of Vault Vortex and Chief of Staff at Guidero",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Innovation",
      description: "Constantly exploring emerging technologies and implementing creative solutions",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Strategy",
      description: "Business-focused approach combining technical expertise with strategic thinking",
      color: "from-indigo-500 to-purple-500"
    }
  ];

  useEffect(() => {
    const cards = contentRef.current?.querySelectorAll('.highlight-card');
    if (cards) {
      gsap.fromTo(cards,
        { opacity: 0, y: 40, scale: 0.8 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: contentRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }
  }, []);

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50" ref={sectionRef}>
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-bold mb-6">
            <Brain size={16} />
            <span className="font-mono">ABOUT_ME.exe</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 mb-6 font-mono">
            Creative Technologist
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed px-4">
            Passionate software developer and entrepreneur pursuing Bachelor's in Computer Application 
            at Christ University, Bangalore. Bridging the gap between innovative technology and 
            strategic business solutions.
          </p>
        </div>

        <div ref={contentRef} className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-12 md:mb-16">
          {highlights.map((item, index) => (
            <div key={index} className="highlight-card group">
              <div className="glass-effect rounded-3xl p-8 h-full hover:shadow-2xl transition-all duration-500 border border-white/20 relative overflow-hidden">
                {/* Animated background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl`}></div>
                
                <div className="relative z-10">
                  <div className={`w-14 h-14 bg-gradient-to-r ${item.color} rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-slate-800 font-mono">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed text-sm">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="glass-effect rounded-3xl p-6 md:p-12 modern-shadow border border-white/20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5"></div>
          <div className="relative z-10">
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center text-white">
                <Target size={20} />
              </div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-800 font-mono">My Journey</h3>
            </div>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base md:text-lg text-center max-w-4xl mx-auto px-4">
              From graphic design intern to Chief of Staff, my career has been driven by curiosity and innovation. 
              I've founded <span className="font-bold text-blue-600">Vault Vortex</span>, a fintech platform, developed AI-powered applications, 
              and led technical projects across various domains. My mission is to create technology solutions that 
              make a meaningful impact while continuously pushing the boundaries of what's possible.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
