
import React from 'react';
import { Github, Linkedin, Mail, MessageCircle } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
            Let's Connect
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ready to collaborate on your next project? I'm always excited to discuss new opportunities 
            and innovative solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-gray-50 rounded-2xl p-8 hover:bg-gray-100 transition-colors duration-300 group"
          >
            <Github className="w-8 h-8 text-gray-600 group-hover:text-gray-900 transition-colors mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">GitHub</h3>
            <p className="text-gray-600 text-sm">Check out my code and projects</p>
          </a>

          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-gray-50 rounded-2xl p-8 hover:bg-gray-100 transition-colors duration-300 group"
          >
            <Linkedin className="w-8 h-8 text-gray-600 group-hover:text-gray-900 transition-colors mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">LinkedIn</h3>
            <p className="text-gray-600 text-sm">Connect professionally</p>
          </a>

          <a 
            href="mailto:contact@samarthghag.com"
            className="bg-gray-50 rounded-2xl p-8 hover:bg-gray-100 transition-colors duration-300 group"
          >
            <Mail className="w-8 h-8 text-gray-600 group-hover:text-gray-900 transition-colors mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Email</h3>
            <p className="text-gray-600 text-sm">Send me a message</p>
          </a>
        </div>

        <div className="bg-gray-900 rounded-2xl p-12 text-white">
          <MessageCircle className="w-12 h-12 text-gray-300 mx-auto mb-6" />
          <h3 className="text-2xl font-semibold mb-4">Ready to Start a Project?</h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Whether you need a full-stack web application, AI integration, or technical consulting, 
            I'm here to help bring your ideas to life.
          </p>
          <a 
            href="mailto:contact@samarthghag.com"
            className="inline-flex items-center gap-2 bg-white text-gray-900 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-200"
          >
            <Mail size={18} />
            Get In Touch
          </a>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-100">
          <p className="text-gray-500 text-sm">
            © 2025 Samarth Ghag. Built with React & Tailwind CSS.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
