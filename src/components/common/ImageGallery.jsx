import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ImageGallery = ({ images = [] }) => {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % images.length);
  const prev = () => setIndex((prev) => (prev - 1 + images.length) % images.length);

  if (images.length === 0) return (
    <div className="aspect-video bg-brand-midnight/5 border-editorial flex items-center justify-center">
       <span className="text-metadata opacity-20 italic">Registro visual no disponible</span>
    </div>
  );

  return (
    <div className="group relative aspect-video overflow-hidden border-editorial bg-brand-midnight/5">
      {/* Imágen Actual */}
      <img 
        key={index}
        src={images[index]} 
        className="w-full h-full object-cover animate-in fade-in zoom-in-95 duration-700" 
        alt="Registro Aula 14"
      />

      {/* Controles (Solo si hay más de una imagen) */}
      {images.length > 1 && (
        <>
          <div className="absolute inset-0 flex items-center justify-between px-4 opacity-0 group-hover:opacity-100 transition-opacity">
            <button 
              onClick={prev}
              className="p-2 bg-brand-paper/90 backdrop-blur-md border-editorial text-brand-midnight hover:bg-brand-midnight hover:text-brand-paper transition-all"
            >
              <ChevronLeft size={20} strokeWidth={1.5} />
            </button>
            <button 
              onClick={next}
              className="p-2 bg-brand-paper/90 backdrop-blur-md border-editorial text-brand-midnight hover:bg-brand-midnight hover:text-brand-paper transition-all"
            >
              <ChevronRight size={20} strokeWidth={1.5} />
            </button>
          </div>

          {/* Indicador de posición */}
          <div className="absolute bottom-4 right-4 bg-brand-paper/90 backdrop-blur-md px-3 py-1 border-editorial text-[10px] font-mono font-bold">
            {index + 1} / {images.length}
          </div>
        </>
      )}
    </div>
  );
};

export default ImageGallery;
