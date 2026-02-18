import React from 'react';
import { ArrowRight } from 'lucide-react';
import Skeleton from '../common/Skeleton';

const Hero = ({ data }) => {
  if (!data) return (
    <div id="hero" className="h-[90vh] bg-gray-100 flex items-center justify-center">
      <div className="text-center space-y-4">
        <Skeleton className="h-12 w-64 mx-auto" />
        <Skeleton className="h-6 w-96 mx-auto" />
        <Skeleton className="h-12 w-40 mx-auto" />
      </div>
    </div>
  );

  return (
    <section id="hero" className="relative h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src={data.backgroundImage} 
          alt="Aula 14 Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-black/60"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
        <div className="max-w-3xl space-y-6">
          <h1 className="text-5xl md:text-8xl font-serif font-extrabold tracking-tight leading-tight animate-in fade-in slide-in-from-bottom duration-700">
            {data.title}
          </h1>
          <p className="text-xl md:text-2xl text-white/90 font-light leading-relaxed animate-in fade-in slide-in-from-bottom delay-200 duration-700">
            {data.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4 animate-in fade-in slide-in-from-bottom delay-400 duration-700">
            <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold text-lg transition-all shadow-lg shadow-blue-900/40 flex items-center justify-center gap-2">
              Conoce más <ArrowRight size={20} />
            </button>
            <button className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 rounded-xl font-bold text-lg transition-all">
              Proyectos Actuales
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
