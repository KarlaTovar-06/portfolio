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
    title: "Frontend & Mobile Developer",
    company: "Rubidex",
    period: "2025 — Present",
    description:
      "Develop web and mobile products across multiple projects within the company.",
    bullets: [
      "Build corporate websites with Next.js + Strapi, using SSR, SSG, dynamic routes, and optimized images.",
      "Develop the RubiVault web app with React + TypeScript, reusable components, and global state with Zustand.",
      "Integrate REST APIs and handle asynchronous application states.",
      "Develop the RubiVault iOS app in SwiftUI: navigation, state management, and Codable data models.",
      "Ship features end-to-end across web and mobile.",
    ],
    techIcons: [
      "/icons/typescript.webp",
      "/icons/next.webp",
      "/icons/tailwind.webp",
      "/icons/SwiftUI.webp",
      "/icons/github.webp",
      "/icons/figma.webp",
    ],
    image: "/assets/timeline/Rubidex.webp",
  },
  {
    id: "kachi",
    title: "Co-Founder & Product Lead",
    company: "Kachi",
    period: "2024 — 2025",
    description:
      "Co-founded an educational platform focused on teaching and preserving indigenous Mexican languages through interactive experiences.",
    bullets: [
      "Defined product strategy and roadmap.",
      "Coordinated the development team and tracked tasks in Jira.",
      "Built the initial product in SwiftUI and supported the migration to Unity.",
      "Defined product features and user flows.",
      "Collaborated across development, design, and product.",
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
    id: "leap",
    title: "Full Stack Developer",
    company: "LEAP Interactive",
    period: "2024 — 2025",
    description:
      "Contributed to the development and modernization of enterprise web platforms.",
    bullets: [
      "Migrated monolithic applications to a React-based architecture.",
      "Developed reusable and scalable UI components.",
      "Built internal web platforms and tools.",
      "Implemented dynamic interfaces and state management across frontend and backend.",
      "Collaborated with design and product teams.",
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
    id: "competitions",
    title: "Innovation & Social Impact Competitions",
    company: "Hackathons & Challenges",
    period: "2024",
    description:
      "Participated in technology and entrepreneurship competitions focused on developing solutions for real-world challenges.",
    bullets: [
      "1st Place — FES Acatlán Local Hackathon",
      "Changemakers Social Challenge CDMX — Kachi",
      "Led multidisciplinary teams through ideation, prototyping, and product development.",
    ],
    techIcons: [
      "/icons/SwiftUI.webp",
      "/icons/arkit.webp",
      "/icons/coreml.webp",
      "/icons/widgetkit.webp",
    ],
    image: "/assets/timeline/Hackathon.webp",
  },
  {
    id: "education",
    title: "Applied Mathematics & Computer Science",
    company: "UNAM – FES Acatlán",
    period: "2020 — 2024",
    description:
      "Built a strong foundation in programming, algorithms, mathematical modeling, and computational problem-solving.",
    bullets: [],
    techIcons: [],
    image: "/assets/timeline/mac.webp",
  },
];
