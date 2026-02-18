import React, { useState, useEffect } from 'react';
import { Menu, X, Heart } from 'lucide-react';

const Navbar = ({ sections, activeSection }) => {
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
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0 flex items-center gap-4 cursor-pointer group" onClick={() => scrollTo('hero')}>
            <div className="relative w-10 h-10">
              <div className="absolute inset-0 bg-blue-600/20 rounded-lg transform rotate-3 group-hover:rotate-12 transition-transform duration-300"></div>
              <div className="absolute inset-0 bg-blue-600 border border-white/20 rounded-lg transform -rotate-3 group-hover:-rotate-12 transition-transform duration-300 flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl">14</span>
              </div>
            </div>
            <span className={`font-bold text-xl transition-colors ${isScrolled ? 'text-gray-900' : 'text-gray-900 md:text-white'}`}>
              Fundación Aula 14
            </span>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollTo(section.id)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    activeSection === section.id
                      ? 'text-blue-600'
                      : isScrolled ? 'text-gray-600 hover:text-blue-600' : 'text-gray-200 hover:text-white'
                  }`}
                >
                  {section.label}
                </button>
              ))}
              <button 
                onClick={() => scrollTo('donaciones')}
                className="bg-blue-600 text-white px-5 py-2 rounded-full text-sm font-bold hover:bg-blue-700 transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-blue-600/20"
              >
                Donar
              </button>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md transition-colors ${
                isScrolled || isMenuOpen ? 'text-gray-600' : 'text-gray-900'
              }`}
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 shadow-xl overflow-y-auto max-h-screen">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollTo(section.id)}
                className="block w-full text-left px-4 py-4 text-base font-semibold text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
              >
                {section.label}
              </button>
            ))}
            <button 
              onClick={() => scrollTo('donaciones')}
              className="w-full mt-4 bg-blue-600 text-white px-4 py-4 rounded-xl font-bold flex items-center justify-center gap-2"
            >
              <Heart size={20}/> Donar Ahora
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
