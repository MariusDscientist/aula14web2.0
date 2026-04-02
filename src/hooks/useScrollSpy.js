import { useState, useEffect } from 'react';

/**
 * Custom hook to handle ScrollSpy logic using IntersectionObserver.
 * @param {Array<string>} sectionIds - List of element IDs to observe.
 * @param {Object} options - IntersectionObserver options.
 * @returns {string} activeSection - The ID of the currently visible section.
 */
export const useScrollSpy = (sectionIds, options = {
  root: null,
  rootMargin: '-20% 0px -70% 0px',
  threshold: 0
}) => {
  const [activeSection, setActiveSection] = useState(sectionIds[0] || '');

  useEffect(() => {
    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, options);

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sectionIds, options]);

  return activeSection;
};
