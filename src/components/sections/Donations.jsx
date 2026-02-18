import React from 'react';
import { Heart, Users, Star, Award } from 'lucide-react';

const Donations = () => {
  const categories = [
    {
      title: "Asociados Fundadores",
      description: "Quienes dieron vida a la visión de A14 y lideran nuestro propósito.",
      icon: <Award className="w-8 h-8" />
    },
    {
      title: "Asociados Adherentes",
      description: "Personas y entidades que se suman para apoyar el crecimiento de la organización.",
      icon: <Users className="w-8 h-8" />
    },
    {
      title: "Asociados Honorarios",
      description: "Contribuyentes significativos a la cultura y la ciencia que impulsan nuestra misión.",
      icon: <Star className="w-8 h-8" />
    }
  ];

  return (
    <section id="donaciones" className="py-24 bg-blue-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100/50 rounded-full -mr-32 -mt-32 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-100/50 rounded-full -ml-32 -mb-32 blur-3xl"></div>
      
      <div className="max-w-6xl mx-auto px-4 text-center relative z-10">
        <div className="w-20 h-20 bg-white rounded-2xl shadow-xl flex items-center justify-center mx-auto mb-8 text-blue-600">
           <Heart className="w-10 h-10 animate-pulse" />
        </div>
        <h2 className="text-4xl font-bold text-gray-900 mb-6">Cómo Participar</h2>
        <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
          Súmate a la Fundación Aula 14 y ayúdanos a transformar el tejido social a través del arte y la cultura.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 text-left">
          {categories.map((cat, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-blue-100 group">
              <div className="text-blue-600 mb-4 group-hover:scale-110 transition-transform">
                {cat.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{cat.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {cat.description}
              </p>
            </div>
          ))}
        </div>
        
        <button className="w-full sm:w-auto px-12 py-5 bg-blue-600 text-white rounded-2xl font-bold text-xl hover:bg-blue-700 hover:shadow-xl hover:-translate-y-1 transition-all">
          Vincularme ahora
        </button>
      </div>
    </section>
  );
};

export default Donations;
