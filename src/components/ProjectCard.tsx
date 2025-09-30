
import React from 'react';
import { ExternalLink, Github, Code, Star } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  image: string;
  github: string;
  demo: string;
  featured?: boolean;
  metrics?: {
    stars?: number;
    commits?: number;
    year?: string;
    status?: 'active' | 'completed' | 'archived';
  };
}

const ProjectCard = ({ title, description, tech, image, github, demo, featured, metrics }: ProjectCardProps) => {
  return (
  <article className="group eb-card overflow-hidden flex flex-col w-full h-full min-h-[500px] sm:min-h-[540px]">
      <div className="relative aspect-[4/3] sm:aspect-[16/10] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a121e]/95 via-[#0a121e]/15 to-transparent" />
        <div className="absolute top-4 left-4 flex flex-wrap items-center gap-2 text-[11px] uppercase tracking-[0.35em] text-white/70">
          {featured && (
            <span className="inline-flex items-center gap-2 rounded-full bg-[#6c5ce7]/40 px-3 py-1 border border-[#6c5ce7]/60">
              <Star size={14} className="text-[#f6d365]" />
              Featured
            </span>
          )}
          {metrics?.year && (
            <span className="rounded-full bg-white/10 px-3 py-1 border border-white/20">{metrics.year}</span>
          )}
        </div>
        <div className="absolute bottom-4 right-4 flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open ${title} on GitHub`}
            className="w-10 h-10 rounded-full bg-white/10 border border-white/20 text-white/80 hover:text-white flex items-center justify-center transition-colors"
          >
            <Github size={16} />
          </a>
          {demo && demo !== '#' && (
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open live demo for ${title}`}
              className="w-10 h-10 rounded-full bg-white/10 border border-white/20 text-white/80 hover:text-white flex items-center justify-center transition-colors"
            >
              <ExternalLink size={16} />
            </a>
          )}
        </div>
      </div>

      <div className="p-7 flex flex-col gap-6 flex-1">
        <div className="space-y-3">
          <h3 className="text-white text-xl font-semibold leading-snug group-hover:text-[#9f95ff] transition-colors">
            {title}
          </h3>
          <p className="text-white/60 text-sm leading-relaxed line-clamp-4">
            {description}
          </p>
        </div>

        <div className="space-y-3">
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.35em] text-white/40">
            <Code size={14} /> Stack
          </div>
          <div className="flex flex-wrap gap-2">
            {tech.slice(0, 5).map((item) => (
              <span
                key={item}
                className="px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white/70 text-xs uppercase tracking-[0.2em]"
              >
                {item}
              </span>
            ))}
            {tech.length > 5 && (
              <span className="px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white/50 text-xs uppercase tracking-[0.2em]">
                +{tech.length - 5}
              </span>
            )}
          </div>
        </div>

        {metrics && (metrics.stars || metrics.commits) && (
          <div className="flex flex-wrap gap-3 text-[11px] uppercase tracking-[0.25em] text-white/45">
            {metrics.stars && (
              <span className="inline-flex items-center gap-2 text-white/60">
                <Star size={12} />
                {metrics.stars}
              </span>
            )}
            {metrics.commits && (
              <span className="inline-flex items-center gap-2 text-white/60">
                <Code size={12} />
                {metrics.commits}
              </span>
            )}
          </div>
        )}

        <div className="mt-auto flex items-center justify-between pt-4 border-t border-white/10">
          <div className="text-xs uppercase tracking-[0.35em] text-white/40">
            {metrics?.status ? metrics.status : 'Case Study'}
          </div>
          <a
            href={demo && demo !== '#' ? demo : github}
            target="_blank"
            rel="noopener noreferrer"
            className="outline-button px-5 py-2 text-xs uppercase tracking-[0.35em]"
          >
            View
          </a>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
