# NOMA — Landing demostrativa en React

Conversión de la landing NOMA original (HTML, CSS y JavaScript) a **React + Vite**, conservando el diseño y el contenido.

> **Proyecto conceptual de portafolio:** NOMA y todos los proyectos mencionados son ficticios. No representar como clientes reales de Software Craft.

## Requisitos

- Node.js 20.19+ o 22.12+
- npm

## Ejecutar en local

```bash
npm install
npm run dev
```

Abre la URL indicada por Vite (normalmente `http://localhost:5173`).

## Compilar y previsualizar producción

```bash
npm run build
npm run preview
```

`npm run build` genera el directorio `dist/`, listo para un hosting estático que sirva sitios SPA.

## Estructura

```text
noma-landing-react/
├── index.html
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── ConceptNotice.jsx
│   │   ├── Projects.jsx
│   │   ├── Services.jsx
│   │   ├── Studio.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── data/
│   │   └── content.js
│   ├── App.jsx
│   ├── main.jsx
│   └── styles.css
├── package.json
└── vite.config.js
```

## Personalización

- **Proyectos y servicios:** `src/data/content.js`
- **Textos y secciones:** `src/components/`
- **Colores y layout:** `src/styles.css`
- **Nombre, descripción y SEO:** `index.html`
- **Imágenes:** referenciadas desde Unsplash; requieren conexión a Internet. Puedes cambiarlas por archivos propios en `public/`.

## Formulario

El formulario de `Contact.jsx` **simula un envío únicamente en el navegador**; no almacena ni transmite los datos. Para clientes reales debes integrar un backend, CRM o servicio de correo y agregar avisos de privacidad adecuados.
