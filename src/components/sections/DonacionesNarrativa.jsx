import React, { useState } from 'react';
import { Heart, ArrowRight } from 'lucide-react';

const DonacionesNarrativa = ({ data }) => {
  const [selectedLevel, setSelectedLevel] = useState(null);

  return (
    <section id="donaciones" className="relative min-h-screen flex flex-col bg-brand-midnight text-brand-paper overflow-hidden">
      
      {/* CAPA 1: Fondo Cinematográfico (Propuesta 2) */}
      <div className="absolute inset-0 z-0">
        {data?.imagenFondo ? (
          <img 
            src={data.imagenFondo} 
            className="w-full h-full object-cover opacity-40 grayscale-[50%]" 
            alt="Impacto Aula 14"
          />
        ) : (
          <div className="w-full h-full bg-brand-midnight"></div>
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-brand-midnight via-transparent to-brand-midnight"></div>
      </div>

      <div className="relative z-10 yatzer-container py-32 flex-1 flex flex-col justify-between">
        
        {/* Cabecera de Impacto */}
        <div className="max-w-3xl space-y-8 animate-reveal">
          <div className="flex items-center gap-4">
            <Heart className="text-brand-accent animate-pulse" fill="currentColor" size={24} />
            <span className="text-metadata text-brand-accent tracking-[0.5em]">Acción Territorial</span>
          </div>
          <h2 className="text-6xl md:text-8xl lg:text-[120px] font-serif font-light leading-[0.85] tracking-tighter">
            {data?.titulo || "Sembrar es hacer posible"}
          </h2>
          <p className="text-xl md:text-2xl font-serif italic text-brand-paper/60 max-w-xl">
            "{data?.llamado}"
          </p>
        </div>

        {/* CAPA 2: Selector de Niveles de Impacto (Propuesta 1) */}
        <div className="grid md:grid-cols-3 border-t border-white/10 mt-20">
          {data?.niveles?.map((nivel, idx) => (
            <div 
              key={nivel.id}
              onMouseEnter={() => setSelectedLevel(idx)}
              onMouseLeave={() => setSelectedLevel(null)}
              className={`group p-8 md:p-12 border-r border-white/10 last:border-r-0 transition-all duration-500 cursor-pointer ${
                selectedLevel === idx ? 'bg-brand-paper text-brand-midnight' : 'bg-transparent'
              }`}
            >
              <div className="space-y-6">
                <span className={`text-[10px] font-mono tracking-[0.4em] uppercase ${selectedLevel === idx ? 'text-brand-accent' : 'text-brand-paper/40'}`}>
                  Nivel {idx + 1} / {nivel.monto}
                </span>
                <h3 className="text-4xl font-serif">{nivel.nombre}</h3>
                
                {/* Texto de Impacto que se revela */}
                <div className={`transition-all duration-500 overflow-hidden ${selectedLevel === idx ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <p className="text-lg font-light leading-relaxed italic border-l-2 border-brand-accent pl-4 mt-4">
                    {nivel.impacto}
                  </p>
                  <button className="mt-8 flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-brand-accent">
                    Elegir este camino <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Footer de la sección */}
      <div className="relative z-10 bg-brand-paper/5 backdrop-blur-sm py-8 border-t border-white/5">
         <div className="yatzer-container flex flex-col md:flex-row justify-between items-center gap-4">
            <span className="text-[10px] uppercase tracking-[0.3em] font-mono text-brand-paper/40">
               Toda donación es auditada y reportada en nuestra bitácora anual.
            </span>
            <button className="px-12 py-4 bg-brand-accent text-brand-paper hover:bg-brand-paper hover:text-brand-midnight transition-all font-bold uppercase text-xs tracking-widest">
               Sembrar ahora
            </button>
         </div>
      </div>

    </section>
  );
};

export default DonacionesNarrativa;
