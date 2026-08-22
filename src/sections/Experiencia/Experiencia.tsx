// Experiencia.tsx

import { useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";

import SplitText from "../../animations/SplitText/SplitText";
import ExperienceCard from "@/components/ui/Cards/ExperienceCard";
import TechIcon from "@/components/ui/TechIcon/TechIcon";
import { experiences } from "@/lib/data/experience";

export default function Experiencia() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const cardLength = experiences.length;

  // Trackea el scroll de la PÁGINA a través del wrapper alto (n * 100vh).
  // offset ["start start", "end end"]:
  //   0 → el top de la sección toca el top del viewport (empieza el pin)
  //   1 → el bottom de la sección toca el bottom del viewport (termina el pin)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // Mapea el progreso (0..1) al índice de la card más cercana.
  // Breakpoints en i/n → cada slide recibe 1/n del recorrido de scroll,
  // con transiciones en los puntos medios.
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const breakpoints = experiences.map((_, i) => i / cardLength);
    const closest = breakpoints.reduce((acc, bp, i) => {
      const distance = Math.abs(latest - bp);
      if (distance < Math.abs(latest - breakpoints[acc])) return i;
      return acc;
    }, 0);
    setActiveIndex(closest);
  });

  const active = experiences[activeIndex];

  return (
    <section className=" w-full min-h-screen py-10">
      {/* Título */}
      <div className="w-full flex justify-center items-center px-6 m-4">
        <h1 className="text-foreground leading-tight text-center">
          <SplitText
            text="[[My]] Experience"
            className="text-2xl md:text-4xl"
            delay={0.3}
            staggerChildren={0.03}
            duration={0.6}
            initialY={50}
          />
        </h1>
      </div>

      {/* ═══════════════════════════════════════════════════════════════════
          Scroll pinning — el scroll de la página "secuestra" la sección:
            - Wrapper externo de n * 100vh → da el recorrido de scroll.
            - Hijo sticky top-0 h-screen → se fija al viewport mientras
              el wrapper scrollea por debajo.
            - Al llegar al final del wrapper, el sticky se libera y la
              página continúa. Al subir, los slides retroceden solos.
          ═══════════════════════════════════════════════════════════════════ */}
      <div
        ref={sectionRef}
        className="hidden lg:block relative"
        style={{ height: `${cardLength * 100}vh` }}
      >
        <div className="sticky top-0 h-screen flex items-center overflow-hidden">
          <div className="mx-auto w-full max-w-7xl flex items-center justify-center gap-10 px-10">
            {/* ── Columna izquierda: cards colapsables ─────────────────── */}
            <div className="flex-1 max-w-xl flex flex-col justify-center">
              {experiences.map((exp, i) => (
                <ExperienceCard
                  key={exp.id}
                  data={exp}
                  isActive={activeIndex === i}
                />
              ))}
            </div>

            {/* ── Columna derecha: mac.webp con info activa ────────────── */}
            <div className="relative w-[480px] shrink-0">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={active.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    src={active.image}
                    alt={active.company}
                    className="w-full h-full object-cover"
                  />
                </AnimatePresence>

            </div>
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════════
          Versión móvil — sin pinning, cards apiladas con info full.
          ═══════════════════════════════════════════════════════════════════ */}
      <div className="lg:hidden block w-full px-6 py-8">
        <div className="flex flex-col gap-8 max-w-2xl mx-auto">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="relative border border-gris2 rounded-2xl p-6 bg-card"
            >
              <div className="absolute top-4 left-5 flex gap-2">
                <span className="size-2.5 rounded-full bg-rosa" />
                <span className="size-2.5 rounded-full bg-verde" />
                <span className="size-2.5 rounded-full bg-cyan" />
              </div>
              <div className="mt-6 flex flex-col gap-3">
                <span className="text-xs uppercase tracking-wider text-muted-foreground">
                  {exp.period}
                </span>
                <h4 className="text-lg font-bold text-foreground">
                  {exp.title}
                </h4>
                <p className="text-sm text-rosa font-medium">{exp.company}</p>
                <p className="text-sm text-foreground/80 leading-relaxed">
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {exp.techIcons.map((icon) => (
                    <TechIcon key={icon} src={icon} className="size-10" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
