# Academia de Consultorioa Emocional

Sitio Web ofical de la **Academia de Consultoría Emocional** de Miriam Sandoval. Una plataforma moderna, responsiva y optimizada para ofrecer formación en bienestar emocional, acompañamiento terapéutico y desarrollo personal.

## ✨ Características

- **Diseño moderno y elegante** - Interfaz cálida y profesional.
- **Completamente responsivo** - Experiencia óptima en todos los dispositivos.
- **Alto rendimiento** - Construido con React Vite y optimizada para SEO.
- **Accesibiilidad** - Estándares WCAG para una experiencia inclusiva.
- **SEO optimizado** - Meta tags, estructura semántica y rendimiento.

## 🚀 Tecnologías

- **Framework**: [React 19](https://es.react.dev/) con App Router
- **Lenguaje**: [TypeScript](https://www.typescriptlang.org/)
- **Estilos**: [Tailwind CSS 3](https://tailwindcss.com/)
- **Iconos**: [Lucide React](https://lucide.dev/)
- **Fuentes**: Google Fonts (Playfair Display + Inter)

## 📦 Estructura del Proyecto

academia-consultoria/
├── src/
│ ├── assets/
│ │ ├── image-1edit.png
│ │ └── image-2.webp
| | └── miriam-edit.png
│ └── globals.css # Estilos globales + Tailwind
├── components/
│ ├── layout/
│ │ ├── Header.tsx # Barra de navegación
│ │ ├── ScrollProgress.tsx
│ ├── sections/
│ │ ├── Hero.tsx # Sección principal
│ │ ├── About.tsx # Sobre Miriam
│ │ ├── Courses.tsx # Cursos disponibles
│ │ ├── Certifications.tsx # Certificaciones
│ │ ├── Benefits.tsx # Beneficios
│ │ ├── Testimonials.tsx # Testimonios
│ │ ├── Cta.tsx # Llamada a la acción
│ │ └── Contact.tsx # Formulario de contacto
│ │ └── Footer.tsx 
│ └── ui/
│ └── Loader.tsx # Botón flotante de WhatsApp
├── hooks/
│ └── useScrollAnimation.ts # Animaciones al scroll
│ └── useScrollProgress.ts
│ └── useScrollParallax.ts # Animaciones al scroll
├── types/
│ └── index.ts # Tipos TypeScript
| └── content.ts 
├── public/ # Archivos estáticos
├── .env.local # Variables de entorno
├── tailwind.config.ts # Configuración de Tailwind
└── package.json # Dependencias

## 🛠️ Instalación y Uso

### Requisitos previos

- Node.js 18.x o superior
- npm o yarn

### Instalación

```bash
# Clonar el repositorio
git clone https://github.com/tu-usuario/academia-consultoria.git

# Entrar al directorio
cd academia-consultoria

# Instalar dependencias
npm install

# Configurar variables de entorno
cp .env.example .env.local
# Editar .env.local con tus credenciales (si aplica)

# Iniciar servidor de desarrollo
npm run dev
```

# 📄 Licencia
MIT © [Miriam Sandoval - Academia de Consultoría Emocional]

# 👩‍💻 Autor
Miriam Sandoval - Academia de Consultoría Emocional

- ✉️ info@academiaemocional.com
- 📷 @academiaemocional

# 🌟 Créditos
Diseñado con ♥ para el bienestar emocional y el desarrollo personal.

