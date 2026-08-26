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

        <div className="flex flex-nowrap gap-2 md:grid md:grid-cols-4 md:gap-12 overflow-x-auto overflow-y-hidden md:overflow-visible">
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
                className="shrink-0 w-80 p-2"
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
