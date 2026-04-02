import React from 'react';
import { MessageCircle, Users } from 'lucide-react';

const ActionButtons = ({ links }) => {
  if (!links) return null;

  return (
    <div className="flex flex-wrap gap-4 pt-6">
      {/* Botón de Contacto (Siempre que exista el link) */}
      {links.contacto && (
        <a 
          href={links.contacto}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 px-8 py-4 bg-brand-midnight text-brand-paper hover:bg-brand-accent transition-all font-bold text-sm uppercase tracking-widest"
        >
          <MessageCircle size={18} />
          Contáctanos
        </a>
      )}

      {/* Botón de Comunidad (Solo si el link no es nulo) */}
      {links.comunidad && (
        <a 
          href={links.comunidad}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 px-8 py-4 bg-transparent border border-brand-midnight text-brand-midnight hover:bg-brand-midnight hover:text-brand-paper transition-all font-bold text-sm uppercase tracking-widest"
        >
          <Users size={18} />
          Vincúlate
        </a>
      )}
    </div>
  );
};

export default ActionButtons;
