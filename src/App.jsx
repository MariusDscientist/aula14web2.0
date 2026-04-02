import React from 'react';
import { useContent } from './hooks/useContent';
import { useScrollSpy } from './hooks/useScrollSpy';
import { NAV_SECTIONS, SCROLL_OBSERVE_SECTIONS } from './constants/navigation';

// Layout (Minimal)
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

// Narrative Sections (Reconstrucción)
import Declaracion from './components/sections/Declaracion';
import BloqueHumano from './components/sections/BloqueHumano';
import Ecosistema from './components/sections/Ecosistema';
import HacerDeLaCultura from './components/sections/HacerDeLaCultura';
import Filosofia from './components/sections/Filosofia';
import DonacionesNarrativa from './components/sections/DonacionesNarrativa';
import ContactForm from './components/sections/ContactForm';
import Allies from './components/sections/Allies';

export default function App() {
  const { data, loading } = useContent();
  const activeSection = useScrollSpy(SCROLL_OBSERVE_SECTIONS);

  if (loading) return null; // O un splash screen muy minimalista

  const n = data?.narrativa;

  return (
    <div className="min-h-screen bg-brand-paper font-sans selection:bg-brand-accent selection:text-brand-paper overflow-x-hidden">
      <Navbar 
        sections={NAV_SECTIONS} 
        activeSection={activeSection} 
        siteInfo={data?.siteInfo}
      />
      
      <main>
        {/* 🎥 Hero — Declaración */}
        <Declaracion data={n?.declaracion} />

        {/* 🧍 Bloque Humano */}
        <BloqueHumano data={n?.bloqueHumano} />

        {/* 🎭 Ecosistema Vivo (Proyectos) */}
        <Ecosistema data={n?.ecosistema} />

        {/* 🔧 Lo que hacemos (Hacer de la Cultura) */}
        <HacerDeLaCultura data={n?.hacer} />

        {/* 🧠 Filosofía / Proceso */}
        <Filosofia data={n?.filosofia} />

        {/* 🤝 Aliados (Minimal) */}
        <Allies data={data?.aliados} />

        {/* 💸 Donaciones (Acción Emocional) */}
        <DonacionesNarrativa data={n?.donaciones} />

        {/* 📍 Contacto */}
        <ContactForm />
      </main>

      <Footer 
        sections={NAV_SECTIONS} 
        siteInfo={data?.siteInfo}
      />
    </div>
  );
}
