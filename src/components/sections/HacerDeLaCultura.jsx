import React from 'react';

const HacerDeLaCultura = ({ data }) => {
  return (
    <section id="servicios" className="py-40 bg-brand-paper relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        
        <div className="max-w-xl space-y-4 mb-20">
          <div className="w-12 h-[2px] bg-brand-accent"></div>
          <h2 className="text-5xl md:text-7xl font-serif text-brand-midnight leading-tight">
            Nuestros haceres
          </h2>
          <p className="text-brand-muted italic">Traducimos la gestión en cultura viva.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-y-24 gap-x-12">
          {data?.map((item, idx) => (
            <div key={idx} className="group border-l border-brand-midnight/10 pl-8 py-4 hover:border-brand-accent transition-colors">
               <div className="space-y-4">
                  <span className="text-editorial-caption block text-brand-muted/40 font-mono italic">
                    Área: {item.original}
                  </span>
                  <h3 className="text-4xl md:text-5xl font-serif font-black text-brand-midnight group-hover:text-brand-accent transition-colors">
                    {item.area}
                  </h3>
                  <p className="text-lg text-brand-muted leading-relaxed max-w-sm font-light">
                    {item.descripcion}
                  </p>
               </div>
            </div>
          ))}
        </div>

        {/* Branding Background Element */}
        <div className="absolute top-1/2 right-10 text-[120px] font-serif font-black text-brand-midnight/[0.03] select-none -z-10 -rotate-90">
          PROCESOS
        </div>
      </div>
    </section>
  );
};

export default HacerDeLaCultura;
