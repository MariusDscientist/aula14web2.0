import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import Skeleton from '../common/Skeleton';

const SectionNosotros = ({ data }) => {
  if (!data) return <Skeleton className="h-[400px] w-full" />;

  return (
    <section id="nosotros" className="py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative group">
            <div className="absolute -inset-4 bg-blue-100 rounded-3xl transform -rotate-3 transition-transform group-hover:rotate-0"></div>
            <img 
              src={data.image} 
              alt="Sobre nosotros" 
              className="relative rounded-2xl shadow-2xl object-cover h-[500px] w-full"
              loading="lazy"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{data.title}</h2>
            <p className="text-lg text-gray-600 leading-relaxed italic border-l-4 border-blue-600 pl-4">
              "{data.mission}"
            </p>
            <div className="space-y-6">
               {data.content?.map((item, idx) => (
                 <div key={idx} className="flex gap-4">
                   <div className="flex-shrink-0 mt-1">
                     <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center">
                       <CheckCircle2 size={20} />
                     </div>
                   </div>
                   <div>
                     <h4 className="font-bold text-gray-900 text-lg">{item.label}</h4>
                     <p className="text-gray-600">{item.text}</p>
                   </div>
                 </div>
               ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionNosotros;
