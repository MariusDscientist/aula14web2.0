import React, { useEffect, useRef, useState } from 'react';

const Filosofia = ({ data = [] }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Detectar cuando la sección entra y SALE del viewport para permitir el re-trigger
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Actualizamos el estado basado en si está intersectando o no
        // Esto permite que la animación ocurra al bajar y se "limpie" al subir
        setIsVisible(entry.isIntersecting);
      },
      { 
        threshold: 0.1, // Un poco más sensible para que el re-trigger sea rápido
        rootMargin: "-50px 0px" // Margen de seguridad para que no parpadee en los bordes
      }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="filosofia" 
      ref={sectionRef}
      className="py-60 bg-brand-midnight text-brand-paper relative overflow-hidden"
    >
      {/* CAPA 1: Paralaje de Fondo (La Raíz) - Ahora vuelve a su sitio al subir */}
      <div 
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
      >
        <span 
          className="text-[30vw] font-serif font-black text-white/[0.02] leading-none transition-all duration-[1500ms] ease-in-out"
          style={{ 
            transform: isVisible 
              ? 'translateY(-5%) scale(1.1)' 
              : 'translateY(20%) scale(0.9)',
            opacity: isVisible ? 1 : 0
          }}
        >
          RAÍZ
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* CAPA 2: Bloques con Entrada y SALIDA dinámica */}
        <div className="grid md:grid-cols-3 gap-12 lg:gap-20">
           {data?.map((item, idx) => (
             <div 
               key={idx} 
               className={`space-y-8 transition-all duration-1000 ease-out flex flex-col justify-between h-full ${
                 isVisible 
                   ? 'opacity-100 translate-x-0' 
                   : 'opacity-0 translate-x-40' // Mayor desplazamiento al salir para efecto cinemático
               }`}
               style={{ 
                 transitionDelay: isVisible ? `${idx * 200}ms` : '0ms' // Delay solo al entrar, salida inmediata o uniforme
               }}
             >
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-[1px] bg-brand-accent"></div>
                    <span className="text-metadata text-brand-accent">{item.titulo}</span>
                  </div>
                  
                  <h3 className="text-4xl lg:text-6xl font-serif font-light leading-[1.1] tracking-tighter">
                    {item.texto}
                  </h3>
                </div>

                <div className="pt-12 flex items-center gap-2 opacity-20">
                   <span className="text-[10px] font-mono">0{idx + 1}</span>
                   <div className="flex-1 h-px bg-brand-paper/20"></div>
                </div>
             </div>
           ))}
        </div>

        {/* Cierre Narrativo Reversible */}
        <div 
          className={`mt-40 text-center transition-all duration-1000 ${
            isVisible ? 'opacity-20 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: isVisible ? '800ms' : '0ms' }}
        >
           <p className="font-serif text-2xl italic">
             "El espacio es parte del contenido, el silencio es parte del sonido."
           </p>
        </div>
      </div>

      {/* Marca de agua lateral - Sutil fade */}
      <div className={`absolute right-0 top-1/2 -translate-y-1/2 rotate-90 origin-right text-[10px] tracking-[0.5em] text-white/10 uppercase font-mono transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        Filosofía de Proceso — Aula 14
      </div>
    </section>
  );
};

export default Filosofia;
