import React from 'react';

const Filosofia = ({ data }) => {
  return (
    <section id="filosofia" className="py-40 bg-brand-midnight text-brand-paper">
      <div className="max-w-6xl mx-auto px-4">
        
        <div className="grid md:grid-cols-3 gap-16 lg:gap-24">
           {data?.map((item, idx) => (
             <div key={idx} className="space-y-6 group">
                <div className="text-editorial-caption text-brand-accent flex items-center gap-2">
                   <span className="w-6 h-[1px] bg-brand-accent"></span>
                   {item.titulo}
                </div>
                <h3 className="text-4xl lg:text-5xl font-serif font-black leading-tight group-hover:italic transition-all">
                  {item.texto}
                </h3>
             </div>
           ))}
        </div>

        {/* Cita de cierre narrativa */}
        <div className="mt-40 text-center border-t border-brand-paper/5 pt-20">
           <p className="text-brand-paper/20 font-serif text-2xl max-w-2xl mx-auto italic">
             "El espacio es parte del contenido, el silencio es parte del sonido."
           </p>
        </div>
      </div>
    </section>
  );
};

export default Filosofia;
