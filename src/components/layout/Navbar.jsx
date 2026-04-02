import React, { useState, useEffect } from 'react';
import { Menu, X, Heart } from 'lucide-react';

const Navbar = ({ sections, activeSection, siteInfo }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-700 ${
      isScrolled ? 'bg-brand-paper shadow-sm py-4' : 'bg-transparent py-8'
    }`}>
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        <div className="flex justify-between items-center">
          
          {/* Logo Minimalista */}
          <div 
            className="flex-shrink-0 flex items-center gap-4 cursor-pointer group" 
            onClick={() => scrollTo('hero')}
          >
            <div className={`text-2xl font-serif font-black transition-colors ${isScrolled ? 'text-brand-midnight' : 'text-brand-paper'}`}>
              {siteInfo?.name || 'Fundación Aula 14'}
            </div>
          </div>

          {/* Menú Desktop - Minimalista */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-12">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollTo(section.id)}
                  className={`text-[10px] uppercase tracking-[0.3em] font-bold transition-all hover:text-brand-accent ${
                    activeSection === section.id
                      ? 'text-brand-accent'
                      : isScrolled ? 'text-brand-midnight' : 'text-brand-paper/60 hover:text-brand-paper'
                  }`}
                >
                  {section.label}
                </button>
              ))}
              <button 
                onClick={() => scrollTo('donaciones')}
                className="text-[13px] uppercase tracking-[0.3em] font-bold bg-brand-accent text-brand-paper px-6 py-3 hover:bg-brand-midnight transition-all"
              >Donar
              </button>
            </div>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 transition-colors ${
                isScrolled || isMenuOpen ? 'text-brand-midnight' : 'text-brand-paper'
              }`}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Menú Mobile - Editorial Fullscreen */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-brand-paper z-[60] flex flex-col items-center justify-center space-y-8 animate-reveal">
           <button onClick={() => setIsMenuOpen(false)} className="absolute top-8 right-8 text-brand-midnight"><X size={32}/></button>
           {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollTo(section.id)}
                className="text-4xl md:text-6xl font-serif font-black text-brand-midnight hover:text-brand-accent transition-colors"
              >
                {section.label}
              </button>
            ))}
            <button 
                onClick={() => scrollTo('donaciones')}
                className="mt-8 text-2xl font-serif font-black bg-brand-accent text-brand-paper px-12 py-6"
            >
                Donar
            </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
