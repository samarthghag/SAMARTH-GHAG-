
import React from 'react';
import { ExternalLink, Github, Star } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  image: string;
  github: string;
  demo: string;
  featured?: boolean;
}

const ProjectCard = ({ title, description, tech, image, github, demo, featured }: ProjectCardProps) => {
  return (
    <div className="group relative overflow-hidden">
      {/* Featured badge */}
      {featured && (
        <div className="absolute top-4 left-4 z-20 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
          <Star size={12} />
          FEATURED
        </div>
      )}

      <div className="glass-effect rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-500 border border-white/20 group-hover:scale-105 modern-shadow">
        <div className="aspect-video overflow-hidden relative">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          {/* Hover overlay with links */}
          <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <a 
              href={github} 
              className="w-12 h-12 glass-effect rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform duration-300"
            >
              <Github size={20} />
            </a>
            <a 
              href={demo} 
              className="w-12 h-12 glass-effect rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform duration-300"
            >
              <ExternalLink size={20} />
            </a>
          </div>
        </div>
        
        <div className="p-8">
          <h3 className="text-xl font-bold text-slate-800 mb-3 font-mono group-hover:text-blue-600 transition-colors duration-300">
            {title}
          </h3>
          <p className="text-slate-600 mb-6 leading-relaxed text-sm">
            {description}
          </p>
          
          <div className="flex flex-wrap gap-2 mb-6">
            {tech.map((techItem, index) => (
              <span 
                key={index} 
                className="bg-gradient-to-r from-slate-100 to-slate-200 text-slate-700 px-3 py-1 rounded-full text-xs font-bold border border-slate-300/50"
              >
                {techItem}
              </span>
            ))}
          </div>
          
          <div className="flex justify-between items-center">
            <div className="flex gap-3">
              <a 
                href={github} 
                className="text-slate-500 hover:text-slate-700 transition-colors duration-300"
              >
                <Github size={18} />
              </a>
              <a 
                href={demo} 
                className="text-slate-500 hover:text-slate-700 transition-colors duration-300"
              >
                <ExternalLink size={18} />
              </a>
            </div>
            <a 
              href={demo} 
              className="text-blue-600 hover:text-blue-800 font-bold text-sm font-mono transition-colors duration-300"
            >
              View Project →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
