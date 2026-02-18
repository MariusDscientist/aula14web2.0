import { useState, useEffect } from 'react';
import { FALLBACK_DATA } from '../constants/fallbackData';

export const useContent = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch('./data/content.json').catch(() => null);
        
        if (response && response.ok) {
          const json = await response.json();
          setData(json);
        } else {
          console.warn("Usando datos de respaldo locales.");
          setData(FALLBACK_DATA);
        }
      } catch (err) {
        console.error("Error en fetch:", err);
        setData(FALLBACK_DATA);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return { data, loading, error };
};
