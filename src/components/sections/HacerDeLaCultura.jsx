import React, { useState, useEffect, useRef } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';
import ImageGallery from '../common/ImageGallery';
import ActionButtons from '../common/ActionButtons';

const HacerDeLaCultura = ({ data = [] }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const activeService = data[activeIndex];

  // Configuración del Carrete
  const itemHeight = 200; // Aumentamos la altura por item para que respire más
  const containerHeight = 600;
  // El offset calcula cuánto desplazar para que el activo quede en el centro exacto
  const centerOffset = (containerHeight / 2) - (itemHeight / 2);

  const navigate = (direction) => {
    if (isAnimating) return;
    setIsAnimating(true);
    if (direction === 'up') {
      setActiveIndex((prev) => (prev - 1 + data.length) % data.length);
    } else {
      setActiveIndex((prev) => (prev + 1) % data.length);
    }
    setTimeout(() => setIsAnimating(false), 700);
  };

  return (
    <section id="servicios" className="py-40 bg-brand-paper relative overflow-hidden border-y border-brand-midnight/5">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Cabecera */}
        <div className="max-w-xl space-y-4 mb-24">
          <div className="w-12 h-[2px] bg-brand-accent"></div>
          <h2 className="text-6xl md:text-8xl font-serif text-brand-midnight leading-none tracking-tighter">
            Nuestros Haceres
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-16 items-center">
          
          {/* LADO IZQUIERDO: Carrusel Vertical Centrado y Dorado */}
          <div className="lg:col-span-5 flex flex-col items-center relative h-[600px]">
            
            {/* Máscaras de degradado sutiles */}
            <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-brand-paper to-transparent z-10 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-brand-paper to-transparent z-10 pointer-events-none"></div>

            <button 
              onClick={() => navigate('up')}
              className="absolute -top-16 z-20 p-4 text-brand-muted hover:text-brand-accent transition-all"
            >
              <ChevronUp size={40} strokeWidth={1} />
            </button>

            {/* Ventana de Visualización */}
            <div className="w-full h-full relative overflow-hidden flex flex-col justify-start items-center">
              <div 
                className="w-full transition-all duration-700 cubic-bezier(0.23, 1, 0.32, 1)"
                style={{ 
                  transform: `translateY(${centerOffset - (activeIndex * itemHeight)}px)`,
                }}
              >
                {data.map((item, idx) => {
                  const isCenter = activeIndex === idx;
                  return (
                    <div
                      key={`${item.id}-${idx}`}
                      onClick={() => !isAnimating && setActiveIndex(idx)}
                      className={`w-full h-[200px] flex flex-col justify-center transition-all duration-700 cursor-pointer px-8 ${
                        isCenter 
                          ? 'opacity-100 scale-110' 
                          : 'opacity-10 blur-[0.5px] scale-90'
                      }`}
                    >
                      {/* Las "letricas doradas" restauradas */}
                      <div className="flex items-center gap-3 mb-2">
                         <span className={`text-[11px] font-mono font-black tracking-[0.4em] ${isCenter ? 'text-brand-accent' : 'text-brand-muted opacity-50'}`}>
                           {idx + 1}. {item.original.toUpperCase()}
                         </span>
                         {isCenter && <div className="w-8 h-px bg-brand-accent animate-in slide-in-from-left duration-700"></div>}
                      </div>

                      <h3 className={`text-4xl md:text-5xl lg:text-7xl font-serif leading-tight transition-all ${
                        isCenter ? 'text-brand-midnight font-black' : 'text-brand-midnight font-light'
                      }`}>
                        {item.area}
                      </h3>
                    </div>
                  );
                })}
              </div>
            </div>

            <button 
              onClick={() => navigate('down')}
              className="absolute -bottom-16 z-20 p-4 text-brand-muted hover:text-brand-accent transition-all"
            >
              <ChevronDown size={40} strokeWidth={1} />
            </button>

          </div>

          {/* LADO DERECHO: Visor Estable */}
          <div className="lg:col-span-7">
            <div className="bg-brand-paper border-editorial shadow-2xl shadow-brand-midnight/5 p-8 md:p-12 flex flex-col min-h-[750px] justify-between animate-in fade-in zoom-in-95 duration-700">
               
               <div className="space-y-10">
                  <div className="min-h-[350px]">
                    <ImageGallery images={activeService?.galeria} />
                  </div>

                  <div className="space-y-6 max-w-2xl">
                    <h4 className="text-4xl font-serif text-brand-midnight leading-tight">
                      {activeService?.area}
                    </h4>
                    <div className="min-h-[120px]">
                      <p className="text-xl text-brand-muted leading-relaxed font-light italic">
                        "{activeService?.descripcionLarga}"
                      </p>
                    </div>
                  </div>
               </div>

               <div className="space-y-10">
                  <ActionButtons links={activeService?.links} />

                  <div className="pt-8 flex justify-between items-end border-t border-brand-midnight/5 opacity-30">
                    <div className="space-y-1">
                        <span className="text-[10px] uppercase tracking-widest text-brand-muted font-mono font-bold">Bitácora de Impacto</span>
                        <p className="text-xs font-bold text-brand-midnight">Referencia No. {activeIndex + 1}</p>
                    </div>
                    <span className="text-8xl font-serif font-black text-brand-midnight/[0.03] select-none uppercase">
                      {activeService?.original.substring(0, 3)}
                    </span>
                  </div>
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HacerDeLaCultura;
