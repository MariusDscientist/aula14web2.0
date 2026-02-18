import React from 'react';
import { ChevronRight, Globe } from 'lucide-react';

const Footer = ({ sections }) => {
  return (
    <footer className="bg-gray-900 text-white py-16 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div className="text-left space-y-4">
             <div className="flex items-center gap-3">
               <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center font-bold text-xl">14</div>
               <span className="text-2xl font-bold">Fundación Aula 14</span>
             </div>
             <p className="text-gray-400 max-w-xs">
               Comprometidos con el desarrollo social a través de la educación y el empoderamiento tecnológico.
             </p>
          </div>
          <div className="text-left">
             <h4 className="font-bold text-lg mb-6">Navegación</h4>
             <ul className="space-y-3 text-gray-400">
               {sections.map(s => (
                 <li key={s.id}>
                   <button 
                    onClick={() => window.scrollTo({ top: document.getElementById(s.id)?.offsetTop - 80, behavior: 'smooth'})} 
                    className="hover:text-white transition-colors"
                   >
                     {s.label}
                   </button>
                 </li>
               ))}
             </ul>
          </div>
          <div className="text-left">
             <h4 className="font-bold text-lg mb-6">Boletín</h4>
             <p className="text-gray-400 mb-4 text-sm">Suscríbete para recibir noticias de impacto.</p>
             <div className="flex gap-2">
               <input type="email" placeholder="tu@email.com" className="bg-gray-800 border-none rounded-lg px-4 py-2 w-full focus:ring-1 focus:ring-blue-500 outline-none"/>
               <button className="bg-blue-600 p-2 rounded-lg hover:bg-blue-700"><ChevronRight/></button>
             </div>
          </div>
        </div>
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Fundación Aula 14. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <span className="hover:text-white cursor-pointer">Privacidad</span>
            <span className="hover:text-white cursor-pointer">Términos</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
