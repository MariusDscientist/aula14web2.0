# Fundación Aula 14 - Web Project

Este proyecto representa la presencia digital de la Fundación Aula 14, enfocado en la gestión cultural, luthería y transformación social en Risaralda.

## 🏛️ Principios Arquitectónicos (Unix Philosophy & AI-Friendly)

El desarrollo se rige por la modularidad, la transparencia y la programabilidad:

1.  **Separación Estricta de Datos y Lógica (Data-Driven UI):**
    *   Toda la información del sitio reside en `public/data/content.json`.
    *   Los componentes de React son puramente representacionales (stateless/visuales).
    *   **Meta:** Facilitar actualizaciones de contenido sin despliegues de código y permitir que una IA pueda reescribir la interfaz o los datos de forma independiente.

2.  **Componentización Atómica:**
    *   Cada archivo en `src/components/` debe realizar una única función visual.
    *   Evitar el "Prop Drilling" excesivo; preferir la composición sobre la herencia de estado.

3.  **Entorno Inmutable y Predictible:**
    *   Configuración vía variables de entorno (`.env`) para asegurar la paridad entre Desarrollo, Docker y VPS.
    *   Uso de `npm lock` para garantizar la reproducibilidad exacta de las dependencias.

## 🛠️ Stack Tecnológico

*   **Frontend:** React 19 (Modern Features) + Vite (Build System).
*   **Estilos:** Tailwind CSS 4 (Zero-runtime utility first).
*   **Iconografía:** Lucide React (Consistente y ligera).
*   **Deployment Target:** Docker Container -> Linux VPS.

## 📂 Estructura de Directorios

```text
├── public/data/       # "Single Source of Truth" del contenido (JSON).
├── src/components/    # Bloques de construcción modulares.
│   ├── common/        # UI Atómica (Botones, Títulos, Skeletons).
│   ├── layout/        # Estructuras globales (Navbar, Footer).
│   └── sections/      # Secciones de la SPA (Hero, Projects, etc).
├── src/hooks/         # Lógica de consumo de datos y efectos.
└── src/constants/     # Fallbacks y configuraciones estáticas.
```

## 🐳 Hoja de Ruta a Producción (Docker Ready)

Para facilitar la futura dockerización y el despliegue en VPS:

*   **Variables de Entorno:** Todas las URLs de API o configuraciones externas deben consumirse mediante `import.meta.env.VITE_*`.
*   **Assets:** El contenido debe ser servido de forma estática o mediante un CDN configurable.
*   **Networking:** El servidor de desarrollo de Vite está configurado para ser accesible en red local, facilitando pruebas en contenedores.

## 🤖 Guía para la IA (Gemini CLI)

Cuando trabajes en este proyecto, sigue estas directrices:

1.  **Prioriza el JSON:** Antes de modificar un componente para cambiar un texto o imagen, verifica si el cambio debe hacerse en `public/data/content.json`.
2.  **Mantén la Pureza de Tailwind:** No utilices estilos CSS personalizados a menos que sea estrictamente necesario. Usa las utilidades de Tailwind 4.
3.  **Refactorización Unix:** Si un componente de sección (`sections/`) se vuelve demasiado complejo, divídelo en componentes más pequeños dentro de `common/`.
4.  **Validación de Datos:** Siempre que modifiques el esquema del JSON de contenido, actualiza `src/constants/fallbackData.js` para mantener la consistencia.

## 🚀 Comandos Clave

*   `npm run dev`: Inicia el entorno de desarrollo.
*   `npm run build`: Genera el bundle optimizado para producción.
*   `npm run lint`: Ejecuta el análisis estático de código.
