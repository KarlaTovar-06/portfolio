/**
 * Mock data — Experiencia profesional.
 *
 * Las imágenes viven en `/public/assets/timeline/` y los iconos de
 * tecnologías en `/public/icons/`. Mantén los paths sincronizados con
 * esos directorios.
 */

export interface Experience {
  id: string;
  title: string;
  company: string;
  period: string;
  description: string;
  bullets: string[];
  techIcons: string[];
  image: string;
}

export const experiences: Experience[] = [
  {
    id: "rubidex",
    title: "Frontend Developer",
    company: "Rubidex",
    period: "2025 — Actualidad",
    description:
      "Líder técnica del frontend en una plataforma de comercio entre pares para activos tokenizados. Diseño y construyo la interfaz completa, desde el sistema de diseño base hasta los flujos de listado y matching.",
    bullets: [
      "Migré la app de Create React App a Vite y reduje el tiempo de build un 70%.",
      "Implementé un sistema de subastas en tiempo real con WebSockets y Framer Motion.",
      "Coordiné a un equipo de 3 personas y definí las convenciones de testing con Vitest.",
    ],
    techIcons: [
      "/icons/typescript.webp",
      "/icons/next.webp",
      "/icons/tailwind.webp",
      "/icons/github.webp",
      "/icons/figma.webp",
    ],
    image: "/assets/timeline/Rubidex.webp",
  },
  {
    id: "leap",
    title: "Mobile Engineer",
    company: "Leap",
    period: "2024 — 2025",
    description:
      "Desarrollo de una app móvil de finanzas personales con foco en accesibilidad y microinteracciones. Trabajé mano a mano con diseño para llevar componentes Figma a producción con animaciones a 60fps.",
    bullets: [
      "Construí flujos de onboarding con un paso configurable según el perfil del usuario.",
      "Reduje el LCP de la pantalla principal de 3.2s a 0.9s optimizando re-renders.",
      "Mantuve una cobertura de pruebas E2E del 85% con Detox y screenshots golden.",
    ],
    techIcons: [
      "/icons/javascript.webp",
      "/icons/figma.webp",
      "/icons/github.webp",
      "/icons/monday.webp",
    ],
    image: "/assets/timeline/Leap.webp",
  },
  {
    id: "kachi",
    title: "Fullstack Developer",
    company: "Kachi",
    period: "2023 — 2024",
    description:
      "Desarrollo fullstack para un CMS headless orientado a creadores de contenido. Modelé el schema en Strapi y conecté el frontend en Next.js con ISR para mantener tiempos de respuesta bajos.",
    bullets: [
      "Diseñé un editor de bloques drag-and-drop usado por 200+ creadores.",
      "Migré el backend de un monolito Node a microservices desacoplados.",
      "Publiqué la primera versión del producto en 4 meses con un equipo de 2.",
    ],
    techIcons: [
      "/icons/typescript.webp",
      "/icons/next.webp",
      "/icons/strapi.webp",
      "/icons/tailwind.webp",
      "/icons/trello.webp",
    ],
    image: "/assets/timeline/Kachi (1).webp",
  },
  {
    id: "hackathon",
    title: "iOS Hackathon Winner",
    company: "Hackathon UNAM",
    period: "2023",
    description:
      "Proyecto ganador del hackathon universitario de la UNAM. App nativa iOS en SwiftUI que traduce gestos de LSCh (Lengua de Señas Mexicana) a texto en tiempo real usando CoreML.",
    bullets: [
      "Entrené un modelo de CoreML con 2,000 muestras de gestos personalizados.",
      "Construí la UI en SwiftUI con animaciones fluidas en menos de 48h.",
      "Lideré el equipo de 4 personas y la presentación final ante el jurado.",
    ],
    techIcons: [
      "/icons/SwiftUI.webp",
      "/icons/widgetkit.webp",
      "/icons/arkit.webp",
      "/icons/coreml.webp",
      "/icons/figma.webp",
    ],
    image: "/assets/timeline/Hackathon.webp",
  },
];
