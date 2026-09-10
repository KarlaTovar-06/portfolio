import { motion } from "framer-motion";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

type TechIconSize = "s" | "md" | "l";

interface TechIconProps {
  src: string | null;
  name?: string;
  className?: string;
  size?: TechIconSize;
  /** Muestra el nombre debajo del icono y desactiva el tooltip */
  showLabel?: boolean;
}

const sizeStyles: Record<
  TechIconSize,
  { container: string; radius: string; label: string }
> = {
  s: { container: "h-8 w-8", radius: "rounded-md", label: "text-[9px]" },
  md: {
    container: "h-12 w-12",
    radius: "rounded-xl",
    label: "text-[10px]",
  },
  l: {
    container: "h-16 w-16",
    radius: "rounded-2xl",
    label: "text-xs",
  },
};

/**
 * Icono de tecnología reutilizable.
 * - `showLabel=false` (default): muestra tooltip en hover.
 * - `showLabel=true`: muestra nombre debajo, sin tooltip.
 */
export default function TechIcon({
  src,
  name,
  className,
  size = "md",
  showLabel = false,
}: TechIconProps) {
  const label =
    name ??
    src
      ?.split("/")
      .pop()
      ?.replace(/\.(webp|svg|png|jpg)$/, "") ??
    "";
  const displayName = label.charAt(0).toUpperCase() + label.slice(1);
  const hasImage = src !== null;
  const styles = sizeStyles[size];

  const iconContent = hasImage ? (
    <img src={src} alt={displayName} className="h-full w-full object-cover shadow-md" />
  ) : (
    <div className="flex h-full w-full items-center justify-center bg-card text-muted-foreground font-medium">
      ?
    </div>
  );

  const iconContainer = (
    <div
      className={cn(
        "flex shrink-0 items-center justify-center overflow-hidden shadow-lg transition-shadow duration-300 group-hover:shadow-md",
        styles.container,
        styles.radius,
        className
      )}
    >
      {iconContent}
    </div>
  );

  const motionWrapper = (
    <motion.div
      whileHover={{ scale: 1.07, y: -3 }}
      whileTap={{ scale: 0.96 }}
      transition={{ type: "spring", stiffness: 350, damping: 22 }}
      className={cn(
        "group flex shrink-0 flex-col items-center gap-1.5",
        showLabel ? "w-[62px] md:w-[66px]" : "w-auto"
      )}
    >
      {iconContainer}
      {showLabel && (
        <span
          className={cn(
            "w-full truncate text-center leading-tight text-muted-foreground",
            styles.label
          )}
        >
          {displayName}
        </span>
      )}
    </motion.div>
  );

  if (showLabel) {
    return motionWrapper;
  }

  return (
    <Tooltip>
      <TooltipTrigger asChild>{motionWrapper}</TooltipTrigger>
      <TooltipContent side="bottom" sideOffset={6}>
        {displayName}
      </TooltipContent>
    </Tooltip>
  );
}
