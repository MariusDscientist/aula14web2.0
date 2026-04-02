# 🎭 Sistema de Estilo Web — Fundación Aula 14

## 🧠 Concepto General

Aula 14 no es una página institucional.  
Es una **experiencia cultural viva**.

El sitio debe sentirse como:
- 🎥 una pieza cinematográfica
- 📖 una revista curada
- 🧍 un archivo humano

NO debe parecer:
- ❌ ONG tradicional
- ❌ página corporativa
- ❌ portafolio genérico

---

## 🧩 Principio de Diseño

> No diseñar por secciones → diseñar por narrativa

El usuario no navega, **recorre**.

Deja los espacios de las fotos vacios, ya te pasare las URLs para agregarlas

---

## 🧭 Estructura Narrativa

### 1. 🎥 Hero — Declaración

**Objetivo:** impacto inmediato

- Imagen o video potente (rostro o proceso)
- Texto corto (máx 6–10 palabras)
- Sin sobrecarga de UI

**Ejemplo:**
> “La cultura no se enseña, se vive”

---

### 2. 🧍 Bloque Humano — Identidad implícita

**Objetivo:** responder “quiénes somos” sin decirlo

- Fotografías de personas
- Micro-textos poéticos

**Ejemplo:**
> “Somos quienes cuentan, construyen, tocan y resisten”

---

### 3. 🎭 Proyectos — Núcleo

**Objetivo:** mostrar el ecosistema vivo

**Regla:** NO usar tarjetas ni grids genéricos

Cada proyecto es un bloque protagonista:

[imagen / video]

PURO CUENTO
Narrar es resistir

[ver más]

carusel

ahorita hay dos proyectos grandes puro ceunto(COlectivo de narracion oral) y la papayerosky (grupo de musica multifolclorica)


---

### 4. 🔧 Lo que hacemos — (antes “servicios”)

**Objetivo:** traducir lenguaje institucional a lenguaje cultural

NO usar:
> “Áreas de acción y servicios”

SÍ usar:

| Área                  | Traducción cultural        |
|----------------------|--------------------------|
| Formación            | Aprender haciendo        |
| Luthería             | Construir sonido         |
| Artes escénicas      | Habitar el escenario     |
| Gestión              | Hacer que pase           |

---

### 5. 🧠 Filosofía / Proceso

**Objetivo:** mostrar profundidad

- Memoria
- Territorio
- Innovación

Formato:
- frases cortas
- imágenes
- ritmo editorial

---

### 6. 🤝 Aliados

**Objetivo:** credibilidad sin perder estética

NO:
- grid de logos corporativo

SÍ:
- logos con aire
- o nombres tipográficos
- o registros visuales de colaboración

---

### 7. 💸 Donaciones

**Objetivo:** acción emocional

No solo en navbar.

Bloque narrativo:

> “Si esto te mueve, puedes hacerlo posible”

---

### 8. 📍 Footer

- Contacto
- Ubicación
- Redes

Con estilo editorial (no corporativo)

---

## 🎨 Sistema Visual

### 🖤 Fondo
- Base clara (blanco / hueso)
- Secciones oscuras para contraste

---

### 🎨 Color

Paleta:
- Negro / blanco / tierra (base)
- Rojo quemado
- Mostaza
- Azul

**Regla:**
- 90% neutro
- 10% acento

---

### 🔤 Tipografía

**Base:**
- Inter / Geist

**Expresiva:**
- Playfair Display / Canela-like

**Uso:**
- Títulos → expresiva o bold
- Cuerpo → limpio y legible

---

## 🧱 Layout

- Contenedor: `max-w-5xl` o `max-w-6xl`
- Espaciado amplio: `py-20` a `py-32`
- Ritmo vertical marcado

**Principio:**
> El espacio es parte del contenido

---

## ⚙️ Arquitectura Data-Driven (JSON)

### ❌ Evitar:

```json
{
  "about": "...",
  "services": "...",
  "projects": []
}