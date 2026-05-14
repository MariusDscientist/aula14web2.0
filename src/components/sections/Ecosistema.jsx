import React, { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, ArrowUpRight, Instagram, Youtube } from 'lucide-react';

const Ecosistema = ({ data }) => {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' 
        ? scrollRef.current.scrollLeft - clientWidth
        : scrollRef.current.scrollLeft + clientWidth;
      
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <section id="proyectos" className="bg-brand-midnight text-brand-paper py-24 md:py-32 overflow-hidden flex flex-col">
      <div className="max-w-7xl mx-auto px-6 w-full mb-12 md:mb-16 flex items-end justify-between">
        <div className="space-y-4">
          <div className="w-12 h-[2px] bg-brand-accent"></div>
          <h2 className="text-5xl md:text-8xl font-serif leading-none">Ecosistema Vivo</h2>
          <span className="text-editorial-caption block text-brand-paper/40 tracking-[0.4em]">Navega nuestros proyectos</span>
        </div>

        {/* Controles del Carrusel (Desktop) */}
        <div className="hidden md:flex gap-4">
          <button 
            onClick={() => scroll('left')}
            disabled={!canScrollLeft}
            className={`p-4 border border-brand-paper/10 hover:bg-brand-paper hover:text-brand-midnight transition-all disabled:opacity-20`}
          >
            <ChevronLeft size={24} />
          </button>
          <button 
            onClick={() => scroll('right')}
            disabled={!canScrollRight}
            className={`p-4 border border-brand-paper/10 hover:bg-brand-paper hover:text-brand-midnight transition-all disabled:opacity-20`}
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>

      {/* Contenedor del Carrusel */}
      <div 
        ref={scrollRef}
        onScroll={checkScroll}
        className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide gap-8 px-6 md:px-20 lg:px-[10vw]"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {data?.map((proyecto) => (
          <div 
            key={proyecto.id} 
            className="min-w-full md:min-w-[85vw] lg:min-w-[75vw] snap-center shrink-0 group relative"
          >
            <div className="grid lg:grid-cols-12 gap-0 items-stretch bg-brand-paper/5 border border-brand-paper/5">
              
              {/* Media Block (Visual) */}
              <div className="lg:col-span-8 h-[350px] md:h-[400px] lg:h-auto min-h-[350px] lg:min-h-[600px] overflow-hidden relative grayscale group-hover:grayscale-0 transition-all duration-1000">
                {proyecto.imagen ? (
                  <img 
                    src={proyecto.imagen} 
                    className="w-full h-full object-cover block" 
                    alt={proyecto.nombre} 
                  />
                ) : (
                  <div className="w-full h-full bg-brand-midnight/50 flex items-center justify-center">
                    <span className="text-9xl font-serif italic opacity-5 leading-none select-none">{proyecto.nombre}</span>
                  </div>
                )}
                <div className="absolute inset-0 bg-brand-midnight/20 group-hover:bg-transparent transition-colors duration-700 pointer-events-none"></div>
              </div>

              {/* Info Block (Textual) */}
              <div className="lg:col-span-4 p-8 md:p-12 lg:p-16 flex flex-col justify-center space-y-6 md:space-y-8 bg-brand-midnight border-t lg:border-t-0 lg:border-l border-brand-paper/10">
                <div className="space-y-2">
                  <span className="text-editorial-caption text-brand-accent tracking-[0.3em]">{proyecto.tagline}</span>
                  <h3 className="text-4xl md:text-5xl lg:text-7xl font-serif font-black uppercase tracking-tighter leading-none group-hover:text-brand-accent transition-colors">
                    {proyecto.nombre}
                  </h3>
                </div>
                
                <p className="text-lg text-brand-paper/60 font-light leading-relaxed italic">
                  "{proyecto.descripcion}"
                </p>

                <div className="pt-6 flex flex-col sm:flex-row items-start sm:items-center gap-6">
                  <button className="group/btn flex items-center gap-4 text-[10px] uppercase tracking-[0.4em] font-bold text-brand-paper hover:text-brand-accent transition-all w-full sm:w-auto justify-between sm:justify-start">
                    <span>Sumergirse en la bitácora</span>
                    <div className="p-2 border border-brand-paper/20 group-hover/btn:border-brand-accent transition-colors">
                      <ArrowUpRight size={16} />
                    </div>
                  </button>

                  <div className="flex items-center gap-6 pt-4 sm:pt-0 sm:border-l border-brand-paper/10 sm:pl-6 w-full sm:w-auto justify-center sm:justify-start border-t sm:border-t-0 border-brand-paper/5">
                    {proyecto.social?.instagram && (
                      <a 
                        href={proyecto.social.instagram} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-2 text-brand-paper/40 hover:text-brand-accent transition-all"
                        aria-label="Instagram"
                      >
                        <Instagram size={24} strokeWidth={1.5} />
                      </a>
                    )}
                    {proyecto.social?.youtube && (
                      <a 
                        href={proyecto.social.youtube} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-2 text-brand-paper/40 hover:text-brand-accent transition-all"
                        aria-label="YouTube"
                      >
                        <Youtube size={24} strokeWidth={1.5} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Decoración Tipográfica Flotante */}
            <div className="absolute -bottom-10 -left-6 text-[80px] md:text-[120px] font-serif font-black text-brand-paper/[0.03] select-none -z-10 pointer-events-none">
              {proyecto.id.replace('-', ' ')}
            </div>
          </div>
        ))}
        
        {/* Espaciador final para el snap */}
        <div className="min-w-[10vw] shrink-0"></div>
      </div>

      {/* Controles Mobile */}
      <div className="flex md:hidden justify-center gap-8 mt-12">
        <button 
          onClick={() => scroll('left')}
          disabled={!canScrollLeft}
          className="p-6 border border-brand-paper/10 rounded-full disabled:opacity-20 active:bg-brand-accent transition-colors"
        >
          <ChevronLeft size={24} />
        </button>
        <button 
          onClick={() => scroll('right')}
          disabled={!canScrollRight}
          className="p-6 border border-brand-paper/10 rounded-full disabled:opacity-20 active:bg-brand-accent transition-colors"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </section>
  );
};

export default Ecosistema;
