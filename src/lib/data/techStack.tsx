import { Code2, Server, Smartphone, Cloud } from "lucide-react";
export interface TechItem {
  name: string;
  image: string | null;
  fallbackIcon: React.ComponentType<{ className?: string }>;
  color: string;
}
export interface TechCategory {
  id: string;
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  items: TechItem[];
}
export const techCategories: TechCategory[] = [
  {
    id: "frontend",
    title: "Frontend",
    icon: Code2,
    color: "#3b82f6",
    items: [
      {
        name: "React",
        image: "/icons/React.webp",
        fallbackIcon: () => null,
        color: "#61DAFB",
      },
      {
        name: "Next.js",
        image: "/icons/next.webp",
        fallbackIcon: () => null,
        color: "#000000",
      },
      {
        name: "JavaScript",
        image: "/icons/javascript.webp",
        fallbackIcon: () => null,
        color: "#F7DF1E",
      },
      {
        name: "TypeScript",
        image: "/icons/typescript.webp",
        fallbackIcon: () => null,
        color: "#3178C6",
      },
      {
        name: "HTML5",
        image: "/icons/html5.webp",
        fallbackIcon: () => null,
        color: "#E34F26",
      },
      {
        name: "CSS3",
        image: "/icons/CSS3.webp",
        fallbackIcon: () => null,
        color: "#1572B6",
      },
      {
        name: "Tailwind CSS",
        image: "/icons/tailwind.webp",
        fallbackIcon: () => null,
        color: "#06B6D4",
      },
      {
        name: "Figma",
        image: "/icons/figma.webp",
        fallbackIcon: () => null,
        color: "#F24E1E",
      },
    ],
  },
  {
    id: "backend",
    title: "Backend & APIs",
    icon: Server,
    color: "#10b981",
    items: [
      {
        name: "Node.js",
        image: "/icons/NodeJS.webp",
        fallbackIcon: () => null,
        color: "#339933",
      },
      {
        name: "Python",
        image: "/icons/python.webp",
        fallbackIcon: () => null,
        color: "#3776AB",
      },
      {
        name: "Django",
        image: "/icons/Django.webp",
        fallbackIcon: () => null,
        color: "#092E20",
      },
      {
        name: "PHP",
        image: "/icons/php.webp",
        fallbackIcon: () => null,
        color: "#777BB4",
      },
      {
        name: "Laravel",
        image: "/icons/laravel.webp",
        fallbackIcon: () => null,
        color: "#FF2D20",
      },
      {
        name: "Strapi",
        image: "/icons/strapi.webp",
        fallbackIcon: () => null,
        color: "#4945FF",
      },
      {
        name: "REST APIs",
        image: "/icons/Rest API.webp",
        fallbackIcon: () => null,
        color: "#888888",
      },
    ],
  },
  {
    id: "mobile",
    title: "Mobile",
    icon: Smartphone,
    color: "#a855f7",
    items: [
      {
        name: "React Native",
        image: "/icons/React.webp",
        fallbackIcon: () => null,
        color: "#61DAFB",
      },
      {
        name: "Swift",
        image: "/icons/swift.webp",
        fallbackIcon: () => null,
        color: "#F05138",
      },
      {
        name: "SwiftUI",
        image: "/icons/SwiftUI.webp",
        fallbackIcon: () => null,
        color: "#F05138",
      },
    ],
  },
  {
    id: "devops",
    title: "DevOps & Cloud",
    icon: Cloud,
    color: "#ec4899",
    items: [
      {
        name: "Git",
        image: "/icons/Git.webp",
        fallbackIcon: () => null,
        color: "#F05032",
      },
      {
        name: "GitHub",
        image: "/icons/github.webp",
        fallbackIcon: () => null,
        color: "#181717",
      },
      {
        name: "Docker",
        image: "/icons/Docker.webp",
        fallbackIcon: () => null,
        color: "#2496ED",
      },
      {
        name: "Vercel",
        image: "/icons/Vercel.webp",
        fallbackIcon: () => null,
        color: "#000000",
      },
      {
        name: "Railway",
        image: "/icons/Railway.webp",
        fallbackIcon: () => null,
        color: "#A855F7",
      },
      {
        name: "Linux",
        image: "/icons/Linux.webp",
        fallbackIcon: () => null,
        color: "#FCC624",
      },
    ],
  },
];
