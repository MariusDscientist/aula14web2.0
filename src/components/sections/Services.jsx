import React from 'react';
import { Globe } from 'lucide-react';
import SectionTitle from '../common/SectionTitle';

const Services = ({ data }) => {
  return (
    <section id="servicios" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="Áreas de Acción y Servicios" 
          subtitle="Desarrollamos líneas de trabajo integrales para el fortalecimiento de la economía creativa y la identidad territorial."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {data?.map((service, idx) => (
            <div 
              key={idx} 
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-all hover:-translate-y-2 group"
            >
              <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <Globe size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">{service.name}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
