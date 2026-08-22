import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

interface TechIconProps {
  src: string;
  name?: string;
  className?: string;
}

/**
 * Icono de tecnología con tooltip en hover.
 * Deriva el nombre del filename si no se pasa `name` explícitamente.
 * Ejemplo: "/icons/typescript.webp" → tooltip "Typescript"
 */
export default function TechIcon({ src, name, className }: TechIconProps) {
  const label =
    name ?? src.split("/").pop()?.replace(/\.(webp|svg|png|jpg)$/, "") ?? "";
  const displayName = label.charAt(0).toUpperCase() + label.slice(1);

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <img
          src={src}
          alt={displayName}
          className={cn("rounded-md object-cover", className)}
        />
      </TooltipTrigger>
      <TooltipContent side="bottom" sideOffset={6}>
        {displayName}
      </TooltipContent>
    </Tooltip>
  );
}
