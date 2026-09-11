import type { LucideIcon } from "lucide-react";
import { GraduationCap, Code2, Heart, Smartphone } from "lucide-react";

export type CertificationColor =
  | "rosa"
  | "verde"
  | "cyan"
  | "morado"
  | "amarillo";

export interface Certification {
  /** Stable id used as React key */
  id: string;
  /** Text shown next to the folder badge */
  badgeText: string;
  /** Short headline shown on the card */
  title: string;
  /** Period (year range or single year) */
  period: string;

  status: string;
  /** Institution or issuer */
  institution: string;
  /** Short description */
  description: string;
  /** Accent color from the portfolio palette */
  color: CertificationColor;
  /** Lucide icon for the card header */
  icon: LucideIcon;
  /** Up to 3 image URLs shown by the ImagesBadge on hover */
  images: string[];
  /** Optional link to the credential */
  href?: string;
}

export const certifications: Certification[] = [
  {
    id: "diplomado-web",
    badgeText: "Diplomado Web",
    title: "Diplomado en Desarrollo y Optimizacion de Sitios Web",
    period: "2024",
    status: "In Progress",
    institution: "DGTIC UNAM",
    description:
      "Intensive training in full stack web development: frontend, backend, deployment, and best practices.",
    color: "morado",
    icon: Code2,
    images: [
      "/assets/certifications/diplomado-web.svg",
      "/assets/certifications/diplomado-web.svg",
      "/assets/certifications/diplomado-web.svg",
    ],
    href: "#",
  },
  {
    id: "licenciatura",
    badgeText: "Licenciatura",
    title: "Mathematics and Applied Computing",
    period: "2020 — 2024",
    status: "Certificated",
    institution: "UNAM",
    description:
      "Strong foundation in mathematics, algorithms, computational modeling, and problem solving.",
    color: "verde",
    icon: GraduationCap,
    images: [
      "/assets/certifications/licenciatura.svg",
      "/assets/certifications/licenciatura.svg",
      "/assets/certifications/licenciatura.svg",
    ],
    href: "#",
  },
  {
    id: "mujer-digital",
    badgeText: "Mujer Digital",
    title: "Programa Mujer Digital",
    period: "2023",
    status: "Certificated",
    institution: "JA AMERICAS",
    description:
      "Technology training program for women: building digital skills and mentorship.",
    color: "rosa",
    icon: Heart,
    images: [
      "/assets/certifications/NubeAWS-MD.png",
      "/assets/certifications/MujerDigital.png",
      "/assets/certifications/AWSEssencial-MD.png",
    ],
    href: "#",
  },
  {
    id: "cursos-ios",
    badgeText: "Cursos iOS",
    title: "iOS Development Courses",
    period: "2023 — 2024",
    status: "Certificated",
    institution: "Apple / SwiftUI",
    description:
      "Specialized iOS development courses with SwiftUI: navigation, state management, data, and Apple frameworks.",
    color: "cyan",
    icon: Smartphone,
    images: [
      "/assets/certifications/CoreML-LDC.png",
      "/assets/certifications/ARKit_Const.png",
      "/assets/certifications/ARKit-LDC.png",
    ],
    href: "#",
  },
];
