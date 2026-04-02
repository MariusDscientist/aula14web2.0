export const NAV_SECTIONS = [
  { id: 'nosotros', label: 'Nosotros' },
  { id: 'servicios', label: 'Servicios' },
  { id: 'proyectos', label: 'Proyectos' },
  { id: 'aliados', label: 'Aliados' },
  { id: 'contacto', label: 'Contacto' }
];

export const SCROLL_OBSERVE_SECTIONS = [
  'hero',
  ...NAV_SECTIONS.map(s => s.id),
  'donaciones'
];
