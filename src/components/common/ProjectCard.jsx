import React from 'react';
import { ExternalLink } from 'lucide-react';

const ProjectCard = ({ project, isLarge = false }) => {
  return (
    <div className={`group relative bg-brand-paper overflow-hidden flex flex-col ${isLarge ? 'md:col-span-8' : 'md:col-span-4'}`}>
      {/* Image Container */}
      <div className={`relative overflow-hidden border-editorial ${isLarge ? 'h-[400px] md:h-[500px]' : 'h-[300px] md:h-[400px]'}`}>
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-brand-midnight/10 group-hover:bg-transparent transition-colors duration-500"></div>
        
        {/* Floating Label */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-brand-paper/90 backdrop-blur-md text-[10px] font-mono font-bold tracking-[0.2em] uppercase text-brand-midnight border-editorial shadow-sm">
            {project.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="pt-6 space-y-3">
        <h3 className={`font-serif font-bold text-brand-midnight leading-tight group-hover:text-brand-accent transition-colors ${isLarge ? 'text-4xl' : 'text-2xl'}`}>
          {project.title}
        </h3>
        <p className="text-brand-muted/90 text-sm leading-relaxed max-w-lg line-clamp-3 italic">
          "{project.description}"
        </p>
        
        <div className="pt-2 flex items-center gap-2 text-editorial-caption group-hover:gap-4 transition-all cursor-pointer">
          <span>Ver registro</span>
          <ExternalLink size={14} className="text-brand-accent" />
        </div>
      </div>
      
      {/* Border Decoration */}
      <div className="absolute -z-10 bottom-4 right-4 w-full h-full border border-brand-midnight/5 pointer-events-none translate-x-2 translate-y-2 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
    </div>
  );
};

export default ProjectCard;
