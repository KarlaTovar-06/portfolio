import { motion } from "framer-motion";
import { CircleCheck } from "lucide-react";

import SplitText from "../../animations/SplitText/SplitText";
import ImagePreview from "./componentes/ImagePreview";
import { ThreeDMarquee } from "@/components/ui/3d-marquee";
import DecorativeCard from "@/components/ui/Cards/ScreenCard";

export default function Skills() {
  const softSkills = [
    "Comunicación Efectiva",
    "Resolución de Problemas",
    "Adaptabilidad",
    "Trabajo en Equipo",
    "Gestión de Tiempo",
    "Atención al Detalle",
  ];

  const images = [
    "/assets/image/icons/Imagen PNG.png",
    "/assets/image/icons/Imagen PNG 3.png",
    "/assets/image/icons/Imagen PNG 4.png",
    "/assets/image/icons/Imagen PNG 5.png",
    "/assets/image/icons/Imagen PNG 7.png",
    "/assets/image/icons/Imagen PNG 8.png",
    "/assets/image/icons/Imagen PNG 9.png",
    "/assets/image/icons/Imagen PNG 10.png",
    "/assets/image/icons/Imagen PNG 11.png",
    "/assets/image/icons/Imagen PNG 12.png",
    "/assets/image/icons/Imagen PNG 13.png",
    "/assets/image/icons/Imagen PNG 14.png",
    "/assets/image/icons/Imagen PNG 15.png",
    "/assets/image/icons/Imagen PNG 16.png",
    "/assets/image/icons/Imagen PNG 17.png",
  ];

  const tooltips = [
    "WidgetKit", "ARKit", "SwiftUI", "TypeScript", "JavaScript",
    "Python", "Strapi", "React", "HTML", "CSS",
    "TailwindCSS", "Figma", "GitHub", "GIT", "Monday",
  ];

  return (
    <section className="w-full min-h-screen flex flex-col justify-center items-center my-12 overflow-hidden px-5">
      <div className="w-full h-full flex flex-col justify-center items-start px-4 sm:px-6 lg:px-24 gap-6">
        <h1 className="text-foreground leading-tight py-10">
          <SplitText
            text="Habilidades"
            className="text-2xl md:text-4xl"
            delay={0.3}
            staggerChildren={0.03}
            duration={0.6}
            initialY={50}
          />
        </h1>

        <div className="w-full h-full mx-auto flex flex-col lg:flex-row gap-32 my-20 lg:my-0">

          {/* ── Columna izquierda ── */}
          <div className="w-auto lg:flex-1 flex flex-col justify-center gap-12">
            {/* Ejemplo: borde por defecto, fondo personalizado */}
            <DecorativeCard
              contentClassName="flex flex-col items-start gap-6 px-6"
            >
              <ImagePreview
                image="/assets/image/unam-biblioteca.jpg"
                title="Biblioteca UNAM"
                description="Click para ver imagen completa"
              />
              <ImagePreview
                image="/assets/image/unam-biblioteca.jpg"
                title="Biblioteca UNAM"
                description="Click para ver imagen completa"
              />
              <ImagePreview
                image="/assets/image/unam-biblioteca.jpg"
                title="Biblioteca UNAM"
                description="Click para ver imagen completa"
              />
              <ImagePreview
                image="/assets/image/unam-biblioteca.jpg"
                title="Biblioteca UNAM"
                description="Click para ver imagen completa"
              />
              <ImagePreview
                image="/assets/image/unam-biblioteca.jpg"
                title="Biblioteca UNAM"
                description="Click para ver imagen completa"
              />
            </DecorativeCard>
          </div>

          {/* ── Columna derecha ── */}
          <div className="w-full lg:flex-1 flex flex-col justify-center gap-6">
            {/* ThreeDMarquee: overflow-hidden requerido */}
            <DecorativeCard
              overflow="hidden"
              className="w-fit"
              contentClassName="flex items-center justify-center"
            >
              <ThreeDMarquee
                images={images}
                tooltips={tooltips}
                imageSize={100}
              />
            </DecorativeCard>

            {/* Soft Skills: borde y fondo distintos */}
            <DecorativeCard
              className="w-fit"
              borderColor="border-gris2"
              backgroundColor="bg-transparent"
              dotColors={["bg-rosa", "bg-verde", "bg-cyan"]}
              contentClassName="flex flex-col items-start gap-6"
            >
              <div className="w-auto flex flex-col gap-3">
                {softSkills.map((skill, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                  >
                    <CircleCheck className="text-verde w-5 h-5 flex-shrink-0" />
                    <span className="text-foreground">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </DecorativeCard>
          </div>

        </div>
      </div>
    </section>
  );
}
