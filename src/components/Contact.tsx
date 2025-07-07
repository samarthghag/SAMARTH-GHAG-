
import React from 'react';
import { Github, Linkedin, Mail, MessageCircle, Send, Zap } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-slate-900 to-blue-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl floating-animation"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl floating-animation" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Tech Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="grid grid-cols-12 gap-4 h-full w-full p-8">
          {Array.from({ length: 144 }).map((_, i) => (
            <div key={i} className="border border-white/20 rounded"></div>
          ))}
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center relative z-10">
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-2 rounded-full text-sm font-bold mb-6">
            <Zap size={16} />
            <span className="font-mono">GET_IN_TOUCH</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 font-mono">
            Let's Connect
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Ready to collaborate on innovative projects? Let's discuss how we can create 
            something extraordinary together.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <a 
            href="https://github.com/samarthghag" 
            target="_blank" 
            rel="noopener noreferrer"
            className="glass-effect rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 group border border-white/10 hover:border-white/20"
          >
            <div className="w-16 h-16 bg-gradient-to-r from-gray-600 to-gray-800 rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300 mx-auto mb-6">
              <Github size={24} />
            </div>
            <h3 className="text-xl font-bold text-white mb-3 font-mono">GitHub</h3>
            <p className="text-blue-200 text-sm">Explore my code repositories and contributions</p>
          </a>

          <a 
            href="https://www.linkedin.com/in/samarth-ghag/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="glass-effect rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 group border border-white/10 hover:border-white/20"
          >
            <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300 mx-auto mb-6">
              <Linkedin size={24} />
            </div>
            <h3 className="text-xl font-bold text-white mb-3 font-mono">LinkedIn</h3>
            <p className="text-blue-200 text-sm">Professional network and career updates</p>
          </a>

          <a 
            href="mailto:samarthghag9@gmail.com"
            className="glass-effect rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 group border border-white/10 hover:border-white/20"
          >
            <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300 mx-auto mb-6">
              <Mail size={24} />
            </div>
            <h3 className="text-xl font-bold text-white mb-3 font-mono">Email</h3>
            <p className="text-blue-200 text-sm">Direct communication for business inquiries</p>
          </a>
        </div>

        <div className="glass-effect rounded-3xl p-12 text-white border border-white/10 modern-shadow relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10"></div>
          <div className="relative z-10">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center text-white mx-auto mb-6">
              <MessageCircle size={24} />
            </div>
            <h3 className="text-3xl font-bold mb-4 font-mono">Ready to Innovate?</h3>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto text-lg">
              Whether you need AI integration, full-stack development, or technical consulting,
              let's transform your ideas into reality.
            </p>
            <a 
              href="mailto:samarthghag9@gmail.com"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-2xl font-bold hover:shadow-2xl transition-all duration-300 text-lg group modern-shadow"
            >
              <Send size={20} />
              <span className="font-mono">Start Project</span>
              <div className="group-hover:translate-x-1 transition-transform duration-300">→</div>
            </a>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10">
          <p className="text-blue-300 text-sm font-mono">
            © 2025 Samarth Ghag • Crafted with React & Innovation • Made in India 🇮🇳
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
