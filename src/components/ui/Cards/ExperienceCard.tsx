import { motion } from "framer-motion";

import { cn } from "@/lib/utils";
import TechIcon from "../TechIcon/TechIcon";
import type { Experience } from "@/lib/data/experience";

interface ExperienceCardProps {
  data: Experience;
  isActive: boolean;
}

/**
 * Card colapsable de la timeline.
 *
 * - `isActive === true`  → card expandida con título, empresa, descripción,
 *                          viñetas e iconos de tecnologías.
 * - `isActive === false` → label compacto: solo período + empresa.
 *
 * Las dimensiones se animan con spring y el contenido interno hace
 * fade + leve scale para que el cambio se sienta continuo y no un salto.
 */
export default function ExperienceCard({
  data,
  isActive,
}: ExperienceCardProps) {
  return (
    <motion.div
      layout
      initial={false}
      animate={{
        scale: isActive ? 1 : 0.96,
        opacity: isActive ? 1 : 0.55,
      }}
      transition={{ type: "spring", stiffness: 260, damping: 30 }}
      className={cn(
        "relative border rounded-2xl overflow-hidden my-3",
        isActive
          ? "bg-card border-gris2 shadow-xl"
          : "bg-card/50 border-gris2/40 backdrop-blur-sm"
      )}
    >
      {/* Dots decorativos (estilo ventana) — solo visibles cuando es la card activa. */}
      <motion.div
        aria-hidden
        initial={false}
        animate={{
          opacity: isActive ? 1 : 0,
          height: isActive ? "auto" : 0,
        }}
        transition={{ duration: 0.25 }}
        className="absolute top-4 left-5 flex gap-2 z-10 overflow-hidden"
      >
        <span className="size-2.5 rounded-full bg-rosa" />
        <span className="size-2.5 rounded-full bg-verde" />
        <span className="size-2.5 rounded-full bg-cyan" />
      </motion.div>

      <motion.div
        layout
        animate={{
          padding: isActive ? "2.5rem 1.5rem 1.5rem" : "0.75rem 1.25rem",
        }}
        transition={{ type: "spring", stiffness: 260, damping: 30 }}
        className="w-full"
      >
        {/* Versión LABEL — solo período + empresa. */}
        <motion.div
          initial={false}
          animate={{
            opacity: isActive ? 0 : 1,
            scale: isActive ? 0.95 : 1,
          }}
          transition={{ duration: 0.2 }}
          className={cn(
            "flex flex-col items-start gap-0.5",
            isActive && "hidden"
          )}
        >
          <span className="text-[10px] uppercase tracking-wider text-muted-foreground">
            {data.period}
          </span>
          <span className="text-base font-semibold text-foreground whitespace-nowrap">
            {data.company}
          </span>
        </motion.div>

        {/* Versión FULL — toda la info. */}
        <motion.div
          initial={false}
          animate={{
            opacity: isActive ? 1 : 0,
            scale: isActive ? 1 : 0.95,
          }}
          transition={{ duration: 0.25, delay: isActive ? 0.08 : 0 }}
          className={cn("flex flex-col gap-4", !isActive && "hidden")}
        >
          <header className="flex flex-col gap-1">
            <span className="text-xs uppercase tracking-wider text-muted-foreground">
              {data.period}
            </span>
            <h3 className="text-xl md:text-2xl font-bold text-foreground leading-tight">
              {data.title}
            </h3>
            <p className="text-sm md:text-base font-medium text-rosa">
              {data.company}
            </p>
          </header>

          <p className="text-sm text-foreground/80 leading-relaxed">
            {data.description}
          </p>

          {data.bullets.length > 0 && (
            <ul className="flex flex-col gap-1.5 pl-1">
              {data.bullets.map((bullet, i) => (
                <li
                  key={i}
                  className="flex gap-2 text-xs md:text-sm text-foreground/70 leading-relaxed"
                >
                  <span className="mt-1.5 size-1.5 rounded-full bg-cyan flex-shrink-0" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          )}

          {data.techIcons.length > 0 && (
            <footer className="flex flex-wrap gap-2 pt-2 border-t border-gris2/60">
              {data.techIcons.map((icon) => (
                <TechIcon key={icon} src={icon} className="size-7 md:size-8" />
              ))}
            </footer>
          )}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
