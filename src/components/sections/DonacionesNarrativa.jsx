import React from 'react';
import { Heart } from 'lucide-react';

const DonacionesNarrativa = ({ data }) => {
  return (
    <section id="donaciones" className="py-60 bg-brand-paper relative flex items-center justify-center overflow-hidden border-y border-brand-midnight/5">
      <div className="text-center space-y-12 max-w-4xl px-4 relative z-10">
        <h2 className="text-5xl md:text-8xl font-serif font-black text-brand-midnight leading-[0.9] tracking-tighter">
          {data?.llamado || "Si esto te mueve, puedes hacerlo posible."}
        </h2>
        
        <button className="px-16 py-6 bg-brand-accent text-brand-paper hover:bg-brand-midnight rounded-none font-bold text-xl transition-all flex items-center justify-center gap-4 mx-auto group">
          <Heart size={24} className="group-hover:fill-brand-paper transition-all" />
          {data?.boton || "Sembrar"}
        </button>

        <p className="text-editorial-caption text-brand-muted/60 mt-8">
           Toda acción genera un eco en el territorio.
        </p>
      </div>

      {/* Decorative branding elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[400px] font-serif font-black text-brand-midnight/[0.02] select-none -z-0">
         ECO
      </div>
    </section>
  );
};

export default DonacionesNarrativa;
