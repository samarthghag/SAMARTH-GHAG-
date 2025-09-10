
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
    <div className="group relative overflow-hidden h-full">
      {/* Featured badge */}
      {featured && (
        <div className="absolute top-4 left-4 z-20 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
          <Star size={12} />
          FEATURED
        </div>
      )}

      <div className="glass-effect rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-500 border border-white/20 group-hover:scale-105 modern-shadow h-full flex flex-col">
        <div className="aspect-video overflow-hidden relative flex-shrink-0">
          <img 
            src={image} 
            alt={title}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          {/* Hover overlay with links */}
          <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <a 
              href={github} 
              target="_blank" rel="noopener noreferrer"
              aria-label={`Open ${title} on GitHub`}
              className="w-12 h-12 glass-effect rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform duration-300"
            >
              <Github size={20} />
            </a>
            <a 
              href={demo} 
              target="_blank" rel="noopener noreferrer"
              aria-label={`Open live demo for ${title}`}
              className="w-12 h-12 glass-effect rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform duration-300"
            >
              <ExternalLink size={20} />
            </a>
          </div>
        </div>
        
        <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-lg font-bold text-slate-800 mb-3 font-mono group-hover:text-blue-600 transition-colors duration-300 line-clamp-2">
            {title}
          </h3>
          <p className="text-slate-600 mb-4 leading-relaxed text-sm flex-grow line-clamp-3">
            {description}
          </p>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {tech.slice(0, 4).map((techItem, index) => (
              <span 
                key={index} 
                className="bg-gradient-to-r from-slate-100 to-slate-200 text-slate-700 px-2 py-1 rounded-full text-xs font-bold border border-slate-300/50"
              >
                {techItem}
              </span>
            ))}
            {tech.length > 4 && (
              <span className="bg-gradient-to-r from-slate-100 to-slate-200 text-slate-700 px-2 py-1 rounded-full text-xs font-bold border border-slate-300/50">
                +{tech.length - 4}
              </span>
            )}
          </div>
          
          <div className="flex justify-between items-center mt-auto">
            <div className="flex gap-3">
              <a 
                href={github}
                target="_blank" rel="noopener noreferrer"
                aria-label={`Open ${title} on GitHub`}
                className="text-slate-500 hover:text-slate-700 transition-colors duration-300"
              >
                <Github size={16} />
              </a>
              <a 
                href={demo}
                target="_blank" rel="noopener noreferrer"
                aria-label={`Open live demo for ${title}`}
                className="text-slate-500 hover:text-slate-700 transition-colors duration-300"
              >
                <ExternalLink size={16} />
              </a>
            </div>
            <a 
              href={demo}
              target="_blank" rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 font-bold text-xs font-mono transition-colors duration-300"
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
