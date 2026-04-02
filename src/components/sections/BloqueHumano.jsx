import React from 'react';

const BloqueHumano = ({ data }) => {
  return (
    <section id="nosotros" className="py-40 bg-brand-paper relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Lado Poético */}
        <div className="space-y-6">
          <div className="w-12 h-[2px] bg-brand-accent"></div>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif text-brand-midnight leading-tight">
            {data?.poetica || "Somos quienes cuentan, construyen, tocan y resisten."}
          </h2>
          <span className="text-editorial-caption block pt-4">Nuestra identidad es la gente</span>
        </div>

        {/* Lado Visual - Rostros (Placeholders) */}
        <div className="grid grid-cols-2 gap-4">
          {data?.rostros?.map((face) => (
            <div key={face.id} className="aspect-[3/4] bg-brand-midnight/5 border-editorial overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
               {face.imagen ? (
                 <img src={face.imagen} className="w-full h-full object-cover" alt="Rostro de la Fundación" />
               ) : (
                 <div className="w-full h-full flex items-center justify-center italic text-brand-muted/30 text-xs uppercase tracking-widest">
                   Registro Humano
                 </div>
               )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BloqueHumano;
