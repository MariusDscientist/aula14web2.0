import React from 'react';
import FlippingCard from '../common/FlippingCard';

const BloqueHumano = ({ data }) => {
  return (
    <section id="nosotros" className="py-40 bg-brand-paper relative overflow-hidden">
      <div className="max-w-[1500px] mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Lado Poético — Narrative Side */}
        <div className="space-y-8">
          <div className="w-12 h-[2px] bg-brand-accent"></div>
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-serif text-brand-midnight leading-tight tracking-tighter">
            {data?.poetica || "Somos quienes cuentan, construyen, tocan y resisten."}
          </h2>
          <div className="flex items-center gap-4 pt-4">
             <span className="text-metadata">Identidad Territorial</span>
             <div className="flex-1 h-[1px] bg-brand-midnight/10"></div>
          </div>
        </div>

        {/* Lado Interactivo — Flipping & Rotating Cards */}
        <div className="grid grid-cols-2 gap-6">
          {data?.tarjetas?.map((card) => (
            <FlippingCard 
              key={card.id}
              images={card.imagenes}
              text={card.textoPosterior}
              initialDelay={card.delay}
            />
          ))}
        </div>

      </div>

      {/* Marca de agua sutil */}
      <div className="absolute -bottom-20 -right-20 text-[200px] font-serif font-black text-brand-midnight/[0.02] select-none -z-10 rotate-12">
        AULA
      </div>
    </section>
  );
};

export default BloqueHumano;
