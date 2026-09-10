// Experiencia.tsx

import { useCallback, useEffect, useRef, useState } from "react";
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
import LabelIcon from "@/components/ui/Label/LabelIcon";

export default function Experiencia() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // ── Mobile: refs para el stepper de dots + scroll horizontal ─────────────
  const mobileScrollRef = useRef<HTMLDivElement>(null);
  // Mantiene el activeIndex del mobile SEPARADO del desktop
  // para que ambos modos tengan su propio estado sin cruzarse.
  const [mobileActiveIndex, setMobileActiveIndex] = useState(0);

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

  // ── Mobile: detecta cuál card está más centrada en el viewport ──────────
  // Calcula el centro del contenedor scrolleable y compara contra el centro
  // de cada card (medido con offsetLeft + offsetWidth/2).
  const detectActiveCard = useCallback(() => {
    const container = mobileScrollRef.current;
    if (!container) return;
    const center = container.scrollLeft + container.clientWidth / 2;
    const cards = container.querySelectorAll<HTMLElement>("[data-card]");
    let closestIndex = 0;
    let closestDistance = Infinity;
    cards.forEach((card, i) => {
      const cardCenter = card.offsetLeft + card.offsetWidth / 2;
      const distance = Math.abs(center - cardCenter);
      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = i;
      }
    });
    setMobileActiveIndex(closestIndex);
  }, []);

  // ── Mobile: autoplay - cambia de card cada 2s ────────────────────────────
  const mobileActiveIndexRef = useRef(mobileActiveIndex);
  useEffect(() => {
    mobileActiveIndexRef.current = mobileActiveIndex;
  }, [mobileActiveIndex]);

  useEffect(() => {
    const interval = setInterval(() => {
      const next = (mobileActiveIndexRef.current + 1) % cardLength;
      scrollToCard(next);
    }, 2000);
    return () => clearInterval(interval);
  }, [cardLength]);

  // Inicializa el activeIndex después del primer paint (cuando ya conocemos
  // los anchos reales) y escucha el scroll del contenedor.
  useEffect(() => {
    detectActiveCard();
    const container = mobileScrollRef.current;
    if (!container) return;
    container.addEventListener("scroll", detectActiveCard, { passive: true });
    return () => container.removeEventListener("scroll", detectActiveCard);
  }, [detectActiveCard]);

  // ── Mobile: click en un dot → scroll suave hacia la card ──────────────
  const scrollToCard = (index: number, instant = false) => {
    const container = mobileScrollRef.current;
    if (!container) return;
    const card = container.querySelectorAll<HTMLElement>("[data-card]")[index];
    if (!card) return;
    const targetScroll =
      card.offsetLeft + card.offsetWidth / 2 - container.clientWidth / 2;
    container.scrollTo({
      left: targetScroll,
      behavior: instant ? "auto" : "smooth",
    });
  };

  const active = experiences[activeIndex];

  return (
    <section
      id="experience"
      className=" w-full min-h-screen flex flex-col justify-center md:py-10"
    >
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
        style={{ height: `${cardLength * 50}vh` }}
      >
        <div className="sticky top-0 h-screen flex items-center overflow-hidden">
          <div className="mx-auto w-auto max-w-7xl flex items-center justify-between gap-14">
            {/* ── Columna izquierda: timeline + cards colapsables ─────── */}

            {/* ── Timeline + cards, ahora en UNA sola columna ─────────────────────── */}
            <div className="relative flex-1 flex flex-col justify-center z-50">
              {/* Línea rosa vertical — va detrás de los puntitos */}
              <div className="absolute top-5 bottom-5 left-[9px] w-[2px] bg-rosa/50 rounded-full -z-10" />

              {experiences.map((exp, i) => (
                <motion.div
                  key={exp.id}
                  layout
                  transition={{ type: "spring", stiffness: 260, damping: 30 }}
                  className="flex items-center gap-3"
                >
                  {/* Puntito — vive en el mismo row que su card, se centra solo */}
                  <div className="w-5 shrink-0 flex justify-center">
                    <motion.span
                      layout
                      initial={false}
                      animate={{
                        scale: activeIndex === i ? 1.5 : 1,
                        opacity: activeIndex === i ? 0 : 1,
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 30,
                      }}
                      className="block size-2 rounded-full bg-rosa/70"
                    />
                  </div>

                  {/* Card */}
                  <motion.div
                    layout
                    initial={false}
                    animate={{ x: activeIndex === i ? -48 : 0 }}
                    transition={{ type: "spring", stiffness: 260, damping: 30 }}
                    className="flex-1"
                  >
                    <ExperienceCard data={exp} isActive={activeIndex === i} />
                  </motion.div>
                </motion.div>
              ))}
            </div>

            {/* ── Columna derecha ────────────── */}
            <div className="relative w-[480px] shrink-0">
              <AnimatePresence mode="wait">
                <motion.img
                  key={active.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  src={active.image}
                  alt={active.company.text}
                  className="w-full h-full object-cover"
                />
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════════
    Versión móvil — sin pinning, cards apiladas con info full.
    Estructura:
      • Stepper de dots FIJO arriba (no scrollea con las cards).
      • Contenedor de scroll horizontal SOLO para las cards.
    ═══════════════════════════════════════════════════════════════════ */}
      <div className="lg:hidden block w-full py-8">
        {/* ── Stepper fijo: línea rosa horizontal + dots reactivos ───── */}
        <div className="relative w-full px-12 py-5">
          {/* Línea rosa horizontal — atraviesa todo el ancho */}
          <div className="absolute top-1/2 left-12 right-12 h-[2px] bg-rosa/50 rounded-full -translate-y-1/2" />

          {/* Dots: uno por experiencia, distribuidos en el ancho */}
          <div className="relative flex justify-between items-center">
            {experiences.map((exp, i) => {
              const isActive = mobileActiveIndex === i;
              return (
                <motion.button
                  key={exp.id}
                  type="button"
                  onClick={() => scrollToCard(i)}
                  aria-label={`Ir a ${exp.company.text}`}
                  aria-current={isActive ? "step" : undefined}
                  animate={{
                    scale: isActive ? 1.6 : 1,
                    opacity: isActive ? 1 : 0.4,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 22,
                  }}
                  className="block size-2.5 rounded-full bg-rosa shrink-0 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-rosa/60"
                />
              );
            })}
          </div>
        </div>

        {/* ── Scroller: solo este contenedor hace overflow-x-auto ───── */}
        <div
          ref={mobileScrollRef}
          className="w-full overflow-x-auto overflow-y-hidden snap-x snap-mandatory"
          style={{ scrollBehavior: "smooth" }}
        >
          <div className="flex flex-nowrap gap-6 w-max px-6 py-4">
            {experiences.map((exp) => (
              <div
                key={exp.id}
                data-card
                className="snap-center shrink-0 w-96 p-4"
              >
                {/* Card */}
                <div className="relative w-full h-80 border border-gris2/20 rounded-2xl p-6 bg-card shadow-md">
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
                    <LabelIcon
                      title={exp.company.text}
                      color={exp.company.color}
                      icon={exp.company.icon}
                    />
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
