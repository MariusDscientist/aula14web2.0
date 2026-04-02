---
name: fundacion-aula14-guide
description: Guía experta para el desarrollo, mantenimiento y despliegue del proyecto web de la Fundación Aula 14. Úsalo para tareas de actualización de contenido, refactorización de componentes React 19/Tailwind 4, o preparación para dockerización y despliegue en VPS.
---

# 🎨 Fundación Aula 14 - Guía de Proyecto

Esta skill asegura que cualquier intervención en el código respete la **Filosofía Unix** (una sola responsabilidad) y el enfoque **Data-Driven UI** del proyecto.

## 🏛️ Principios Fundamentales

1.  **Prioridad al JSON:** El contenido visual NUNCA debe estar "hardcoded" en los componentes. Siempre debe provenir de `public/data/content.json`.
2.  **Pureza de Tailwind 4:** No usar CSS personalizado. Utilizar las nuevas capacidades de Tailwind 4 directamente en el HTML/JSX.
3.  **React 19 Moderno:** Usar hooks nativos y patrones de renderizado eficientes. Los componentes deben ser pequeños y enfocados.

## 🛠️ Flujos de Trabajo Comunes

### Actualización de Contenido
1.  Modificar `public/data/content.json` siguiendo el esquema definido en `references/data-schema.md`.
2.  Sincronizar los cambios en `src/constants/fallbackData.js` para evitar inconsistencias si el fetch falla.
3.  Validar que los componentes visuales rendericen correctamente los nuevos datos.

### Creación de Nuevas Secciones
1.  Definir la nueva clave de datos en `content.json`.
2.  Crear el componente en `src/components/sections/`.
3.  Asegurar que el componente sea representacional y reciba los datos como props desde `App.jsx`.
4.  Registrar la nueva sección en la lógica de **ScrollSpy** en `App.jsx` si es necesario.

## 🐳 Docker & Producción
El proyecto está diseñado para ser contenedorizado.
- No uses rutas absolutas que dependan del sistema de archivos local.
- Mantén `vite.config.js` limpio para que el build de producción sea determinista.
- Todas las configuraciones variables deben ser inyectadas vía `.env`.

## 📚 Referencias Adicionales

- **Esquema de Datos:** Consulta [references/data-schema.md](references/data-schema.md) para ver la estructura exacta del contenido.
- **Filosofía del Proyecto:** Consulta el archivo `GEMINI.md` en la raíz para entender la visión arquitectónica global.
