import React from 'react';

const Declaracion = ({ data }) => {
  return (
    <section id="hero" className="h-screen w-full relative flex items-center justify-center overflow-hidden bg-brand-midnight">
      {/* Background Media - Cinematográfico */}
      <div className="absolute inset-0 z-0">
        {data?.imagenHero ? (
          <img 
            src={data.imagenHero} 
            className="w-full h-full object-cover grayscale-[40%] opacity-60" 
            alt="Hero Fundación"
          />
        ) : (
          <div className="w-full h-full bg-brand-midnight flex items-center justify-center">
             {/* Placeholder cinemático */}
             <div className="w-full h-full bg-gradient-to-t from-brand-midnight to-transparent opacity-50"></div>
          </div>
        )}
      </div>

      {/* Content - Impacto Inmediato */}
      <div className="relative z-10 text-center px-4 max-w-4xl space-y-8 animate-reveal">
        <h1 className="text-5xl md:text-8xl lg:text-9xl font-serif font-black text-brand-paper leading-[0.85] tracking-tight">
          {data?.frase || "La cultura no se enseña, se vive."}
        </h1>
        <p className="text-editorial-caption text-brand-paper/60 md:text-lg">
          {data?.subtexto}
        </p>
      </div>

      {/* Marca de agua / Branding sutil */}
      <div className="absolute bottom-10 left-10 text-brand-paper/10 text-8xl font-serif font-black hidden lg:block">
        14
      </div>
    </section>
  );
};

export default Declaracion;
