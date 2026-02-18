import React from 'react';
import { ExternalLink } from 'lucide-react';
import SectionTitle from '../common/SectionTitle';

const Projects = ({ data }) => {
  return (
    <section id="proyectos" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="Gestión y Procesos Creativos" 
          subtitle="Transformamos el territorio a través de proyectos artísticos, culturales y de memoria histórica."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {data?.map((project, idx) => (
            <div key={idx} className="group overflow-hidden rounded-2xl bg-white border border-gray-100 shadow-lg flex flex-col md:flex-row h-full">
              <div className="md:w-2/5 relative overflow-hidden h-64 md:h-auto">
                <img 
                  src={project.image} 
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  alt={project.title}
                  loading="lazy"
                />
              </div>
              <div className="md:w-3/5 p-8 flex flex-col justify-between">
                <div>
                  <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-xs font-bold rounded-full mb-4 uppercase tracking-wider">
                    {project.category}
                  </span>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>
                </div>
                <div className="flex items-center text-blue-600 font-bold gap-2 cursor-pointer hover:gap-3 transition-all">
                  Ver detalles <ExternalLink size={16} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
