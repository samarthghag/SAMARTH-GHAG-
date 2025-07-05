
import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  image: string;
  github: string;
  demo: string;
}

const ProjectCard = ({ title, description, tech, image, github, demo }: ProjectCardProps) => {
  return (
    <div className="group bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100">
      <div className="aspect-video overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>
      
      <div className="p-8">
        <h3 className="text-xl font-semibold text-gray-900 mb-3">
          {title}
        </h3>
        <p className="text-gray-600 mb-6 leading-relaxed">
          {description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {tech.map((tech, index) => (
            <span key={index} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex justify-between items-center">
          <a href={github} className="text-gray-500 hover:text-gray-700 transition-colors">
            <Github size={20} />
          </a>
          <a href={demo} className="inline-flex items-center gap-2 text-gray-700 hover:text-gray-900 font-medium">
            <ExternalLink size={16} />
            View Project
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
