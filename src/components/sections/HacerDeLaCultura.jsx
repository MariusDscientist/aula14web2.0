import React, { useState, useEffect, useRef } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';
import ImageGallery from '../common/ImageGallery';
import ActionButtons from '../common/ActionButtons';

const HacerDeLaCultura = ({ data = [] }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const activeService = data[activeIndex];

  // Configuración del Carrete - Ajustado para ser más compacto
  const itemHeight = 160; 
  const containerHeight = 480; // Reducido de 600 para que se vea más lleno
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
    <section id="servicios" className="py-24 md:py-40 bg-brand-paper relative overflow-hidden border-y border-brand-midnight/5">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          
          {/* LADO IZQUIERDO: Título y Carrusel (Agrupados para reducir espacio) */}
          <div className="lg:col-span-5 flex flex-col">
            
            {/* Cabecera Compacta */}
            <div className="space-y-4 mb-12 md:mb-16">
              <div className="w-12 h-[2px] bg-brand-accent"></div>
              <h2 className="text-5xl md:text-7xl lg:text-8xl font-serif text-brand-midnight leading-[0.85] tracking-tighter">
                Nuestros<br/>Haceres
              </h2>
              <p className="text-metadata opacity-60">Explora nuestras áreas de acción</p>
            </div>

            {/* Carrusel Vertical */}
            <div className="flex flex-col items-center relative h-[250px] lg:h-[480px]">
              {/* Máscaras de degradado sutiles */}
              <div className="absolute top-0 left-0 right-0 h-12 md:h-24 bg-gradient-to-b from-brand-paper to-transparent z-10 pointer-events-none"></div>
              <div className="absolute bottom-0 left-0 right-0 h-12 md:h-24 bg-gradient-to-t from-brand-paper to-transparent z-10 pointer-events-none"></div>

              <button 
                onClick={() => navigate('up')}
                className="absolute -top-10 lg:-top-16 z-20 p-2 text-brand-muted hover:text-brand-accent transition-all"
              >
                <ChevronUp size={28} lg:size={32} strokeWidth={1} />
              </button>

              {/* Ventana de Visualización */}
              <div className="w-full h-full relative overflow-hidden flex flex-col justify-start items-center">
                <div 
                  className="w-full transition-all duration-700 cubic-bezier(0.23, 1, 0.32, 1)"
                  style={{ 
                    transform: `translateY(${(activeIndex === 0 ? (250/2 - 160/2) : (activeIndex === data.length - 1 ? -(data.length - 1) * 160 + (250/2 - 160/2) : -activeIndex * 160 + (250/2 - 160/2)))}px)`,
                  }}
                  className="hidden lg:block"
                >
                  {/* Logic for desktop remains same, using the prop style below instead */}
                </div>
                
                {/* Mobile/Responsive Viewport Logic */}
                <div 
                  className="w-full transition-all duration-700 cubic-bezier(0.23, 1, 0.32, 1)"
                  style={{ 
                    transform: `translateY(${((window.innerWidth < 1024 ? 250 : 480) / 2) - (activeIndex * 160) - (160 / 2)}px)`,
                  }}
                >
                  {data.map((item, idx) => {
                    const isCenter = activeIndex === idx;
                    return (
                      <div
                        key={`${item.id}-${idx}`}
                        onClick={() => !isAnimating && setActiveIndex(idx)}
                        className={`w-full h-[160px] flex flex-col justify-center transition-all duration-700 cursor-pointer px-4 lg:px-0 ${
                          isCenter 
                            ? 'opacity-100 scale-100' 
                            : 'opacity-25 blur-[0.5px] scale-90'
                        }`}
                      >
                        <div className="flex items-center gap-3 mb-2">
                           <span className={`text-[10px] md:text-[11px] font-mono font-black tracking-[0.4em] ${isCenter ? 'text-brand-accent' : 'text-brand-muted'}`}>
                             {idx + 1}. {item.original.toUpperCase()}
                           </span>
                           {isCenter && <div className="w-8 h-px bg-brand-accent animate-in slide-in-from-left duration-700"></div>}
                        </div>

                        <h3 className={`text-3xl md:text-5xl lg:text-6xl font-serif leading-tight transition-all ${
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
                className="absolute -bottom-10 lg:-bottom-16 z-20 p-2 text-brand-muted hover:text-brand-accent transition-all"
              >
                <ChevronDown size={28} lg:size={32} strokeWidth={1} />
              </button>
            </div>
          </div>

          {/* LADO DERECHO: Visor Estable */}
          <div className="lg:col-span-7">
            <div className="bg-brand-paper border-editorial shadow-2xl shadow-brand-midnight/5 p-6 md:p-12 flex flex-col min-h-[500px] lg:min-h-[700px] justify-between animate-in fade-in zoom-in-95 duration-700">
               
               <div className="space-y-8 md:space-y-10">
                  <div className="min-h-[250px] md:min-h-[350px]">
                    <ImageGallery images={activeService?.galeria} />
                  </div>

                  <div className="space-y-4 md:space-y-6 max-w-2xl">
                    <h4 className="text-3xl md:text-4xl font-serif text-brand-midnight leading-tight">
                      {activeService?.area}
                    </h4>
                    <div className="min-h-[100px] md:min-h-[120px]">
                      <p className="text-lg md:text-xl text-brand-muted leading-relaxed font-light italic">
                        "{activeService?.descripcionLarga}"
                      </p>
                    </div>
                  </div>
               </div>

               <div className="space-y-8 md:space-y-10">
                  <ActionButtons links={activeService?.links} />

                  <div className="pt-8 flex justify-between items-end border-t border-brand-midnight/5 opacity-30">
                    <div className="space-y-1">
                        <span className="text-[10px] uppercase tracking-widest text-brand-muted font-mono font-bold">Bitácora de Impacto</span>
                        <p className="text-xs font-bold text-brand-midnight">Referencia No. {activeIndex + 1}</p>
                    </div>
                    <span className="text-6xl md:text-8xl font-serif font-black text-brand-midnight/[0.03] select-none uppercase">
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
