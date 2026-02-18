import React, { useState, useEffect, useMemo } from 'react';
import { useContent } from './hooks/useContent';

// Layout
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

// Sections
import Hero from './components/sections/Hero';
import SectionNosotros from './components/sections/SectionNosotros';
import Services from './components/sections/Services';
import Projects from './components/sections/Projects';
import Allies from './components/sections/Allies';
import Donations from './components/sections/Donations';
import ContactForm from './components/sections/ContactForm';

export default function App() {
  const { data, loading } = useContent();
  const [activeSection, setActiveSection] = useState('hero');

  const navSections = useMemo(() => [
    { id: 'nosotros', label: 'Nosotros' },
    { id: 'servicios', label: 'Servicios' },
    { id: 'proyectos', label: 'Proyectos' },
    { id: 'aliados', label: 'Aliados' },
    { id: 'contacto', label: 'Contacto' }
  ], []);

  // ScrollSpy Logic
  useEffect(() => {
    if (loading) return;

    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0
    };

    const handleIntersect = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    const sectionsToObserve = ['hero', ...navSections.map(s => s.id), 'donaciones'];
    
    sectionsToObserve.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [loading, navSections]);

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-blue-100 selection:text-blue-900 overflow-x-hidden">
      <Navbar sections={navSections} activeSection={activeSection} />
      
      <main>
        <Hero data={data?.hero} />
        <SectionNosotros data={data?.nosotros} />
        <Services data={data?.servicios} />
        <Projects data={data?.proyectos} />
        <Allies data={data?.aliados} />
        <Donations />
        <ContactForm />
      </main>

      <Footer sections={navSections} />
    </div>
  );
}
