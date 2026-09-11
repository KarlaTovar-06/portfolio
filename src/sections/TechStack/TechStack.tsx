"use client";
import { useRef } from "react";
import { useScroll, useTransform, motion } from "motion/react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import SplitText from "../../animations/SplitText/SplitText";
import TechIcon from "@/components/ui/TechIcon/TechIcon";
import Label from "@/components/ui/Label/Label";
import { techCategories } from "@/lib/data/techStack";
import { useLanguage } from "@/lib/i18n/LanguageContext";

/* ── Cluster centers — relative to card center ─────────────────────── */
const clusterCenters = [
  { id: "frontend", x: -530, y: -190 },
  { id: "backend", x: 480, y: -130 },
  { id: "mobile", x: -530, y: 180 },
  { id: "devops", x: 460, y: 200 },
];

/* ── Scatter: each icon within its cluster ─────────────────────────── */
// Golden-angle (phyllotaxis) spiral — mismo patrón que las semillas de
// girasol para repartir puntos parejo sin que se amontonen ni se separen de más.
const GOLDEN_ANGLE = 2.399963; // ~137.5° en radianes

function getScatter(index: number) {
  // Ajustá estos dos para controlar qué tan "apretado" se ve el cluster:
  const SPACING = 34; // px — más alto = nodos más separados
  const MIN_RADIUS = 18; // px — evita que el índice 0 quede pegado al centro

  const angle = index * GOLDEN_ANGLE;
  const radius = MIN_RADIUS + SPACING * Math.sqrt(index);

  return {
    dx: Math.cos(angle) * radius,
    dy: Math.sin(angle) * radius,
  };
}

/* ── One node ──────────────────────────────────────────────────────── */
function Node({
  src,
  name,
  cx,
  cy,
  index,
  scrollYProgress,
}: {
  src: string | null;
  name: string;
  cx: number;
  cy: number;
  index: number;
  scrollYProgress: ReturnType<typeof useScroll>["scrollYProgress"];
}) {
  const s = getScatter(index);
  const x = useTransform(scrollYProgress, [0.3, 0.45], [0, cx + s.dx]);
  const y = useTransform(scrollYProgress, [0.3, 0.45], [0, cy + s.dy]);
  const opacity = useTransform(scrollYProgress, [0.25, 0.4], [0, 1]);

  return (
    <motion.div
      style={{ x, y, opacity }}
      className="pointer-events-auto absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
    >
      <TechIcon src={src} name={name} size="l" />
    </motion.div>
  );
}

/* ── Main ──────────────────────────────────────────────────────────── */
export default function TechStack() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const { t } = useLanguage();

  return (
    <section
      id="tech-stack"
      ref={containerRef}
      className="relative justify-center md:py-10 py-20"
    >
      {/* ── Nodes behind the tablet (z-0) ─────────────────────────── */}
      <div className="pointer-events-none absolute inset-0 z-10 md:block hidden">
        {clusterCenters.map((center) => {
          const cat = techCategories.find((c) => c.id === center.id);
          if (!cat) return null;
          return (
            <div key={cat.id}>
              {cat.items.map((item, i) => (
                <Node
                  key={item.name}
                  src={item.image}
                  name={item.name}
                  cx={center.x}
                  cy={center.y}
                  index={i}
                  scrollYProgress={scrollYProgress}
                />
              ))}
            </div>
          );
        })}
      </div>

      {/* ── Tablet on top (z-10) ──────────────────────────────────── */}
      <div className="relative z-0 md:block hidden">
        <ContainerScroll
          titleComponent={
            <h1 className="text-3xl text-foreground md:text-5xl">
              <SplitText
                text={t("tech.title")}
                delay={0.2}
                staggerChildren={0.03}
                duration={0.6}
                initialY={50}
              />
            </h1>
          }
        >
          <img
            src="/assets/screenImage.webp"
            alt="Screen Image"
            className=" w-full h-full object-cover opacity-65"
          />
        </ContainerScroll>
        <Label
          title="frontend"
          background="bg-cyan"
          position="
            absolute top-1/4 left-56
            z-50
          "
          rotate={-25}
        />
        <Label
          title="backend"
          background="bg-morado"
          position="
            absolute top-[400px] right-64
            z-50
          "
          rotate={14}
        />
        <Label
          title="DevOps & Cloud"
          background="bg-verde"
          position="
            absolute bottom-64 right-56 z-20
          "
          rotate={-10}
        />
        <Label
          title="mobile"
          background="bg-rosa"
          position="
            absolute bottom-1/3 left-56 z-50
          "
          rotate={-16}
        />
      </div>

      {/* ── Mobile: stacked grid ───────────────────────────────────── */}
      <div className="flex flex-col items-start justify-center space-y-6 px-14 pb-16 md:hidden ">
        <h1 className="text-3xl text-foreground md:text-5xl">
          <SplitText
            text={t("tech.title")}
            delay={0.2}
            staggerChildren={0.03}
            duration={0.6}
            initialY={50}
          />
        </h1>
        {techCategories.map((cat) => (
          <div key={cat.id} className="text-start">
            <h3 className="mb-2 text-xs font-medium text-muted-foreground">
              {cat.title}
            </h3>
            <div className="flex flex-wrap items-center justify-start gap-2">
              {cat.items.map((item) => (
                <TechIcon
                  key={item.name}
                  src={item.image}
                  name={item.name}
                  size="s"
                  showLabel
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
