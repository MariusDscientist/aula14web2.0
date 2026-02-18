import React from 'react';
import { Globe } from 'lucide-react';

const Allies = ({ data }) => {
  return (
    <section id="aliados" className="py-20 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-center text-sm font-bold text-gray-400 uppercase tracking-widest mb-12">Empresas que confían en nosotros</h3>
        <div className="flex flex-wrap justify-center items-center gap-12 opacity-60 hover:opacity-100 transition-opacity">
          {data?.map((ally, idx) => (
            <div key={idx} className="flex flex-col items-center gap-2">
              <div className="h-16 w-32 bg-gray-200 rounded-lg flex items-center justify-center p-4">
                 <Globe className="text-gray-400" size={32} />
              </div>
              <span className="text-xs font-medium text-gray-500">{ally.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Allies;
