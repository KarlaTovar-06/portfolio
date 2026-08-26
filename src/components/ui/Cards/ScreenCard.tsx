import { ReactNode } from "react";

// ─── Types ────────────────────────────────────────────────────────────────────

type DotColor = "rosa" | "verde" | "cyan" | string;

interface DecorativeCardProps {
  children: ReactNode;

  /** Color del borde. Acepta clases de Tailwind o valores CSS.
   *  @default "border-gris2"
   */
  borderColor?: string;

  /** Color de fondo. Acepta clases de Tailwind o valores CSS.
   *  @default "bg-transparent"
   */
  backgroundColor?: string;

  /** Colores de los tres círculos decorativos (en orden: izquierda → derecha).
   *  Puedes pasar clases de Tailwind tipo "bg-rosa" o cualquier string.
   *  @default ["bg-rosa", "bg-verde", "bg-cyan"]
   */
  dotColors?: [DotColor, DotColor, DotColor];

  /** Clases extra para el contenedor principal */
  className?: string;

  /** Clases extra para el wrapper interior del contenido */
  contentClassName?: string;

  /** Oculta los círculos decorativos */
  hideDots?: boolean;

  /** overflow-hidden por defecto, útil para componentes como ThreeDMarquee */
  overflow?: "hidden" | "visible" | "auto";
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function DecorativeCard({
  children,
  borderColor = "border-gris2",
  backgroundColor = "bg-transparent",
  dotColors = ["bg-rosa", "bg-verde", "bg-cyan"],
  className = "",
  contentClassName = "",
  hideDots = false,
  overflow = "visible",
}: DecorativeCardProps) {
  const overflowClass = {
    hidden: "overflow-hidden",
    visible: "overflow-visible",
    auto: "overflow-auto",
  }[overflow];

  return (
    <div
      className={`
        relative p-6 min-h-96
        flex flex-col items-center justify-center
        border rounded-2xl shadow-lg
        ${borderColor}
        ${backgroundColor}
        ${overflowClass}
        ${className}
      `}
    >
      {/* Círculos decorativos */}
      {!hideDots && (
        <div className="absolute flex top-5 left-6 gap-2 z-10">
          {dotColors.map((color, i) => (
            <div
              key={i}
              className={`size-2 md:size-3 rounded-full ${color}`}
            />
          ))}
        </div>
      )}

      {/* Contenido */}
      <div className={`w-full mt-8 mb-2 ${contentClassName}`}>
        {children}
      </div>
    </div>
  );
}
