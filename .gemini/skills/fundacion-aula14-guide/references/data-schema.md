# Esquema de Datos (content.json)

El contenido de la aplicación es dinámico y se carga desde `public/data/content.json`. A continuación se detalla la estructura esperada para cada sección.

## 🌟 Hero
Define el impacto visual inicial.
- `title` (string): Título principal.
- `subtitle` (string): Subtítulo explicativo.
- `backgroundImage` (string): URL de la imagen de fondo.

## 🤝 Nosotros
Información sobre la misión y valores.
- `title` (string): Título de la sección.
- `mission` (string): Texto de la misión.
- `image` (string): URL de la imagen representativa.
- `content` (array): Lista de objetos con `{ label, text }`.

## 🛠️ Servicios
Catálogo de servicios culturales.
- Array de objetos con:
    - `name` (string): Nombre del servicio.
    - `description` (string): Breve descripción.

## 🚀 Proyectos
Portafolio de actividades destacadas.
- Array de objetos con:
    - `title` (string): Título del proyecto.
    - `category` (string): Categoría (e.g., "Artes Visuales", "Patrimonio").
    - `description` (string): Resumen del proyecto.
    - `image` (string): Imagen representativa.

## 🤝 Aliados
Red de colaboración institucional.
- Array de objetos con:
    - `name` (string): Nombre del aliado.

---
**Nota:** Al modificar este esquema en `content.json`, asegúrate de actualizar también `src/constants/fallbackData.js` para mantener la resiliencia de la app.
