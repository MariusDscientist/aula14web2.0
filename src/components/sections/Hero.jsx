import React from 'react';
import { ArrowRight, MoveDown } from 'lucide-react';
import Skeleton from '../common/Skeleton';

const Hero = ({ data }) => {
  if (!data) return (
    <div id="hero" className="h-screen bg-brand-paper flex items-center justify-center p-8">
       <div className="w-full grid md:grid-cols-2 gap-12 max-w-7xl mx-auto">
          <div className="space-y-6">
            <Skeleton className="h-4 w-32" />
            <Skeleton className="h-32 w-full" />
            <Skeleton className="h-24 w-full" />
            <Skeleton className="h-12 w-48" />
          </div>
          <Skeleton className="h-[600px] w-full rounded-2xl" />
       </div>
    </div>
  );

  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-brand-paper">
      {/* Editorial Grid Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-0 w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Content: Manifesto */}
          <div className="lg:col-span-7 space-y-10 order-2 lg:order-1 relative z-10">
            <div className="space-y-2">
              <span className="text-editorial-caption animate-reveal">Territorio & Memoria</span>
              <h1 className="text-6xl md:text-8xl lg:text-[100px] leading-[0.9] font-serif font-black text-brand-midnight animate-reveal">
                {data.title.split(' ').map((word, i) => (
                  <span key={i} className="block last:text-brand-accent">
                    {word}
                  </span>
                ))}
              </h1>
            </div>

            <p className="text-xl md:text-2xl text-brand-muted/90 font-light leading-relaxed max-w-xl animate-reveal delay-200">
              {data.subtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-6 pt-6 animate-reveal delay-400">
              <button className="px-10 py-5 bg-brand-midnight text-brand-paper hover:bg-brand-accent rounded-none font-bold text-lg transition-all flex items-center justify-center gap-3 group">
                {data.ctaPrimary} 
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button className="px-10 py-5 bg-transparent text-brand-midnight border-b-2 border-brand-midnight hover:border-brand-accent hover:text-brand-accent rounded-none font-bold text-lg transition-all">
                {data.ctaSecondary}
              </button>
            </div>
          </div>

          {/* Right Content: Immersive Media */}
          <div className="lg:col-span-5 order-1 lg:order-2 relative h-[500px] lg:h-[700px] group animate-reveal delay-300">
            {/* Design Element: Abstract Shape Background */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-accent/10 rounded-full blur-3xl animate-parallax"></div>
            
            <div className="relative h-full w-full overflow-hidden border- editorial shadow-2xl">
              <img 
                src={data.backgroundImage} 
                alt="Fundación Aula 14 Gallery" 
                className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-brand-midnight/10 group-hover:bg-transparent transition-colors duration-700"></div>
              
              {/* Image Caption - Editorial Style */}
              <div className="absolute bottom-6 right-6 bg-brand-paper/90 backdrop-blur-md p-4 max-w-[200px] hidden md:block border- editorial">
                <p className="text-[10px] font-mono leading-tight uppercase text-brand-midnight italic">
                  "El arte como herramienta de tejido social en el Risaralda contemporáneo."
                </p>
              </div>
            </div>
            
            {/* Design Element: Floating Card behind */}
            <div className="absolute -z-10 -bottom-8 -left-8 w-full h-full border-2 border-brand-midnight/5 rounded-none"></div>
          </div>

        </div>
      </div>

      {/* Decorative Branding Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 text-brand-muted opacity-40 hover:opacity-100 transition-opacity cursor-pointer animate-reveal delay-700">
        <span className="text-[10px] uppercase tracking-[0.3em] font-bold">Explorar Bitácora</span>
        <MoveDown size={20} className="animate-bounce" />
      </div>

      {/* Large Background Lettermark */}
      <div className="absolute top-1/2 left-4 -translate-y-1/2 text-[400px] font-serif font-black text-brand-midnight/5 pointer-events-none select-none -z-10 overflow-hidden leading-none">
        14
      </div>
    </section>
  );
};

export default Hero;
