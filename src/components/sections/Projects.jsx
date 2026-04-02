import React from 'react';
import SectionTitle from '../common/SectionTitle';
import ProjectCard from '../common/ProjectCard';

const Projects = ({ data }) => {
  return (
    <section id="proyectos" className="py-32 bg-brand-paper relative overflow-hidden">
      {/* Background Accent Element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-midnight/[0.02] -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-20 text-center lg:text-left">
          <SectionTitle 
            title="Gestión y Procesos Creativos" 
            subtitle="Transformamos el territorio a través de proyectos artísticos, culturales y de memoria histórica."
          />
        </div>

        {/* Asymmetric Grid Layout (Editorial Style) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16">
          {data?.map((project, idx) => (
            <ProjectCard 
              key={idx} 
              project={project} 
              isLarge={idx % 3 === 0} // Every 3rd project takes more space for asymmetry
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
