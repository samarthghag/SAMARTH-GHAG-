
import React from 'react';
import { Github, Linkedin, Mail, MessageCircle } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Let's Connect
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Ready to collaborate on your next project? I'm always excited to discuss new opportunities 
            and innovative solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 hover:bg-slate-800/70 transition-all duration-300 hover:scale-105 border border-slate-700/30 group"
          >
            <Github className="w-12 h-12 text-slate-400 group-hover:text-blue-400 transition-colors mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-white mb-2">GitHub</h3>
            <p className="text-slate-400 text-sm">Check out my code and projects</p>
          </a>

          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 hover:bg-slate-800/70 transition-all duration-300 hover:scale-105 border border-slate-700/30 group"
          >
            <Linkedin className="w-12 h-12 text-slate-400 group-hover:text-blue-400 transition-colors mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-white mb-2">LinkedIn</h3>
            <p className="text-slate-400 text-sm">Connect professionally</p>
          </a>

          <a 
            href="mailto:contact@samarthghag.com"
            className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 hover:bg-slate-800/70 transition-all duration-300 hover:scale-105 border border-slate-700/30 group"
          >
            <Mail className="w-12 h-12 text-slate-400 group-hover:text-blue-400 transition-colors mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
            <p className="text-slate-400 text-sm">Send me a message</p>
          </a>
        </div>

        <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-8 border border-blue-500/20">
          <MessageCircle className="w-16 h-16 text-blue-400 mx-auto mb-6" />
          <h3 className="text-2xl font-bold text-white mb-4">Ready to Start a Project?</h3>
          <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
            Whether you need a full-stack web application, AI integration, or technical consulting, 
            I'm here to help bring your ideas to life.
          </p>
          <a 
            href="mailto:contact@samarthghag.com"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
          >
            <Mail size={18} />
            Get In Touch
          </a>
        </div>

        <div className="mt-16 pt-8 border-t border-slate-700">
          <p className="text-slate-400 text-sm">
            © 2025 Samarth Ghag. Built with React & Tailwind CSS.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
