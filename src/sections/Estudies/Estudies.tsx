import { useCallback, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

import SplitText from "../../animations/SplitText/SplitText";
import { ImagesBadge } from "@/components/ui/images-badge";
import DecorativeCard from "@/components/ui/Cards/ScreenCard";
import {
  certifications,
  type CertificationColor,
} from "@/lib/data/certifications";

// Mapa explícito de colores para que el JIT de Tailwind detecte las clases.
// (Los template literals `bg-${color}` no son escaneados.)
const colorClasses: Record<
  CertificationColor,
  { dot: string; text: string; pillBg: string; pillText: string }
> = {
  rosa: {
    dot: "bg-rosa",
    text: "text-rosa",
    pillBg: "bg-rosa/10",
    pillText: "text-rosa",
  },
  verde: {
    dot: "bg-verde",
    text: "text-verde",
    pillBg: "bg-verde/10",
    pillText: "text-verde",
  },
  cyan: {
    dot: "bg-cyan",
    text: "text-cyan",
    pillBg: "bg-cyan/10",
    pillText: "text-cyan",
  },
  morado: {
    dot: "bg-morado",
    text: "text-morado",
    pillBg: "bg-morado/10",
    pillText: "text-morado",
  },
  amarillo: {
    dot: "bg-amarillo",
    text: "text-amarillo",
    pillBg: "bg-amarillo/10",
    pillText: "text-amarillo",
  },
};

export default function Estudies() {
  // ── Mobile: refs + estado del stepper ─────────────────────────────────
  const mobileScrollRef = useRef<HTMLDivElement>(null);
  const [mobileActiveIndex, setMobileActiveIndex] = useState(0);

  // Detecta cuál card está más centrada en el viewport del scroller.
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

  useEffect(() => {
    detectActiveCard();
    const container = mobileScrollRef.current;
    if (!container) return;
    container.addEventListener("scroll", detectActiveCard, { passive: true });
    return () => container.removeEventListener("scroll", detectActiveCard);
  }, [detectActiveCard]);

  // Click en dot/guión → scroll suave hacia la card.
  const scrollToCard = (index: number) => {
    const container = mobileScrollRef.current;
    if (!container) return;
    const card = container.querySelectorAll<HTMLElement>("[data-card]")[index];
    if (!card) return;
    const targetScroll =
      card.offsetLeft + card.offsetWidth / 2 - container.clientWidth / 2;
    container.scrollTo({ left: targetScroll, behavior: "smooth" });
  };

  return (
    <section
      id="estudies"
      // Sin min-h-screen a propósito: el contenido marca la altura real.
      className="relative w-full flex flex-col justify-center items-center px-5 py-20 md:py-28"
    >
      <div className="w-full max-w-7xl flex flex-col gap-12 md:gap-16">
        {/* ── Encabezado ─────────────────────────────────────────────── */}

        <h1 className="text-foreground leading-tight">
          <SplitText
            text="My [[estudies]]"
            className="text-3xl md:text-5xl"
            delay={0.2}
            staggerChildren={0.03}
            duration={0.6}
            initialY={50}
          />
        </h1>

        {/* ═══════════════════════════════════════════════════════════════
            Mobile: stepper fijo + scroller horizontal separado.
            Desktop (md:): grid 4 columnas sin stepper.
            ═══════════════════════════════════════════════════════════════ */}
        <div className="md:hidden flex flex-col gap-6">
          {/* ── Stepper fijo: guiones inactivos + dot activo ───────── */}
          <div className="relative w-full flex justify-center items-center py-3">
            <div className="flex items-center gap-2.5">
              {certifications.map((cert, i) => {
                const isActive = mobileActiveIndex === i;
                const palette = colorClasses[cert.color];
                return (
                  <motion.button
                    key={cert.id}
                    type="button"
                    onClick={() => scrollToCard(i)}
                    aria-label={`Ir a ${cert.title}`}
                    aria-current={isActive ? "step" : undefined}
                    // Pastilla fina (w 22, h 4) → círculo (w 10, h 10)
                    animate={{
                      width: isActive ? 10 : 22,
                      height: isActive ? 10 : 4,
                      opacity: isActive ? 1 : 0.45,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 320,
                      damping: 24,
                    }}
                    className={`block rounded-full cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-rosa/60 ${
                      isActive ? palette.dot : "bg-foreground/40"
                    }`}
                  />
                );
              })}
            </div>
          </div>

          {/* ── Scroller: solo este contenedor hace overflow-x-auto ─ */}
          <div
            ref={mobileScrollRef}
            className="w-full overflow-x-auto overflow-y-hidden snap-x snap-mandatory"
            style={{ scrollBehavior: "smooth" }}
          >
            <div className="flex flex-nowrap gap-4 w-max px-6 py-2">
              {certifications.map((cert, index) => {
                const Icon = cert.icon;
                const palette = colorClasses[cert.color];
                return (
                  <motion.div
                    key={cert.id}
                    data-card
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.2 }}
                    transition={{
                      delay: index * 0.1,
                      duration: 0.5,
                      ease: [0.2, 0.65, 0.3, 0.9],
                    }}
                    className="snap-center shrink-0 w-80 p-2"
                  >
                    <DecorativeCard
                      borderColor="border-gris2/20"
                      backgroundColor="bg-card/30 backdrop-blur-sm"
                      contentClassName="flex flex-col gap-5 px-2"
                    >
                      {/* Badge + título */}
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex flex-col gap-1">
                          <span className="flex items-center gap-2 text-xs uppercase tracking-wider text-muted-foreground">
                            <Icon className={`size-4 ${palette.text}`} />
                            {cert.institution}
                          </span>
                          <h3 className="text-lg md:text-xl font-semibold text-foreground leading-tight">
                            {cert.title}
                          </h3>
                        </div>
                      </div>

                      {/* Descripción + periodo */}
                      <div className="flex flex-col gap-3 pt-2 border-t border-gris2/15">
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {cert.description}
                        </p>
                        <div className="flex items-center justify-between text-xs">
                          <span className="text-muted-foreground">
                            {cert.period}
                          </span>
                          <span
                            className={`px-2 py-0.5 rounded-full ${palette.pillBg} ${palette.pillText} font-medium`}
                          >
                            Certificado
                          </span>
                        </div>
                      </div>
                      {/* El badge Aceternity: carpeta con preview de imágenes */}
                      <div className="shrink-0 pt-1">
                        <ImagesBadge
                          text={cert.badgeText}
                          images={cert.images}
                          href={cert.href}
                          target={
                            cert.href && cert.href !== "#" ? "_blank" : undefined
                          }
                          folderSize={{ width: 48, height: 36 }}
                          teaserImageSize={{ width: 28, height: 20 }}
                          hoverImageSize={{ width: 64, height: 44 }}
                          hoverTranslateY={-46}
                          hoverSpread={26}
                          hoverRotation={18}
                        />
                      </div>
                    </DecorativeCard>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* ── Desktop: grid 4 columnas (sin stepper) ──────────────── */}
        <div className="hidden md:grid md:grid-cols-4 gap-12">
          {certifications.map((cert, index) => {
            const Icon = cert.icon;
            const palette = colorClasses[cert.color];
            return (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.5,
                  ease: [0.2, 0.65, 0.3, 0.9],
                }}
              >
                <DecorativeCard
                  borderColor="border-gris2/20"
                  backgroundColor="bg-card/30 backdrop-blur-sm"
                  contentClassName="flex flex-col gap-5 px-2"
                >
                  {/* Badge + título */}
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex flex-col gap-1">
                      <span className="flex items-center gap-2 text-xs uppercase tracking-wider text-muted-foreground">
                        <Icon className={`size-4 ${palette.text}`} />
                        {cert.institution}
                      </span>
                      <h3 className="text-lg md:text-xl font-semibold text-foreground leading-tight">
                        {cert.title}
                      </h3>
                    </div>
                  </div>

                  {/* Descripción + periodo */}
                  <div className="flex flex-col gap-3 pt-2 border-t border-gris2/15">
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {cert.description}
                    </p>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-muted-foreground">
                        {cert.period}
                      </span>
                      <span
                        className={`px-2 py-0.5 rounded-full ${palette.pillBg} ${palette.pillText} font-medium`}
                      >
                        Certificado
                      </span>
                    </div>
                  </div>
                  {/* El badge Aceternity: carpeta con preview de imágenes */}
                  <div className="shrink-0 pt-1">
                    <ImagesBadge
                      text={cert.badgeText}
                      images={cert.images}
                      href={cert.href}
                      target={
                        cert.href && cert.href !== "#" ? "_blank" : undefined
                      }
                      folderSize={{ width: 48, height: 36 }}
                      teaserImageSize={{ width: 28, height: 20 }}
                      hoverImageSize={{ width: 64, height: 44 }}
                      hoverTranslateY={-46}
                      hoverSpread={26}
                      hoverRotation={18}
                    />
                  </div>
                </DecorativeCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
