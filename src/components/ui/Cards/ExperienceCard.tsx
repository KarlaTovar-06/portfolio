import { motion } from "framer-motion";

import { cn } from "@/lib/utils";
import { LucideCalendarDays } from "lucide-react";
import TechIcon from "../TechIcon/TechIcon";
import LabelIcon from "@/components/ui/Label/LabelIcon";
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
        opacity: isActive ? 1 : 0.30,
      }}
      transition={{ type: "spring", stiffness: 260, damping: 30 }}
      className={cn(
        "relative border rounded-3xl overflow-hidden my-3",
        isActive
          ? "bg-card/5 backdrop-blur-sm border border-gris2/20 shadow-lg"
          : "bg-card border-gris2/20 backdrop-blur-sm w-fit"
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
        aria-hidden
        initial={false}
        animate={{
          opacity: isActive ? 1 : 0,
          height: isActive ? "auto" : 0,
        }}
        transition={{ duration: 0.25 }}
        className="absolute top-4 right-5 flex gap-2 z-10 overflow-hidden"
      >
        <span className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-muted-foreground/50">
          <LucideCalendarDays size={14} />
          {data.period}
        </span>
      </motion.div>

      <motion.div
        layout
        animate={{
          padding: isActive ? "2.5rem 0.5rem 0.5rem" : "0.75rem 1.25rem",
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
            "flex flex-col items-start gap-2",
            isActive && "hidden"
          )}
        >
          <span className="text-sm uppercase tracking-wider text-muted-foreground">
            {data.period}
          </span>
          <LabelIcon
            title={data.company.text}
            color={data.company.color}
            icon={data.company.icon}
          />
          <h5 className="text-md md:text-lg font-bold text-foreground leading-tight">
            {data.title}
          </h5>
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
          <div className="flex flex-col gap-4 p-6 bg-card rounded-2xl">
            <header className="flex w-full justify-between gap-1">
              <h3 className="text-xl md:text-2xl font-bold text-foreground leading-tight">
                {data.title}
              </h3>
              <LabelIcon
                title={data.company.text}
                color={data.company.color}
                icon={data.company.icon}
              />
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
                  <TechIcon
                    size="s"
                    key={icon}
                    src={icon}
                    className="size-7 md:size-8"
                  />
                ))}
              </footer>
            )}
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
