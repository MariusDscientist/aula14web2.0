import React, { useState, useEffect } from 'react';

const FlippingCard = ({ images = [], text = "", initialDelay = 0 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  // Lógica de rotación de fotos con el timing exacto solicitado
  useEffect(() => {
    // Retraso inicial para el offset solicitado (ej. 2.5s para la segunda foto)
    const initialTimer = setTimeout(() => {
      // Función para cambiar de imagen cada 5 segundos
      const interval = setInterval(() => {
        setIsAnimating(true);
        setTimeout(() => {
          setCurrentIndex((prev) => (prev + 1) % images.length);
          setIsAnimating(false);
        }, 500); // Pequeña transición de opacidad durante el cambio
      }, 7500);

      return () => clearInterval(interval);
    }, initialDelay);

    return () => clearTimeout(initialTimer);
  }, [images.length, initialDelay]);

  return (
    <div 
      className="relative aspect-[4/5] cursor-pointer group perspective-1000"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div className={`relative w-full h-full transition-transform duration-700 preserve-3d ${isFlipped ? 'rotate-y-180' : ''}`}>
        
        {/* CARA FRONTAL (Imágenes que rotan) */}
        <div className="absolute inset-0 backface-hidden border-editorial overflow-hidden bg-brand-midnight/5 grayscale group-hover:grayscale-0 transition-all duration-700">
          {images.length > 0 && images[currentIndex] ? (
            <img 
              src={images[currentIndex]} 
              className={`w-full h-full object-cover transition-opacity duration-500 ${isAnimating ? 'opacity-0' : 'opacity-100'}`} 
              alt="Aula 14 Humano" 
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center space-y-4">
               <span className="text-[10px] uppercase tracking-[0.4em] text-brand-muted opacity-40">Identidad No. 0{currentIndex + 1}</span>
               <div className="w-px h-12 bg-brand-midnight/10"></div>
            </div>
          )}
        </div>

        {/* CARA POSTERIOR (Texto de Nosotros) */}
        <div className="absolute inset-0 backface-hidden rotate-y-180 bg-brand-midnight text-brand-paper p-8 flex flex-col justify-center space-y-4 border-editorial">
           <span className="text-metadata text-brand-accent tracking-[0.3em]">Nosotros</span>
           <p className="text-lg md:text-xl font-serif italic leading-relaxed">
             "{text}"
           </p>
           <div className="pt-4">
              <div className="w-8 h-px bg-brand-paper/20"></div>
           </div>
        </div>

      </div>
    </div>
  );
};

export default FlippingCard;
