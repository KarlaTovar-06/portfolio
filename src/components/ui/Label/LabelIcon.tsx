import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import type { LabelColor } from "@/lib/data/experience";

interface LabelProps {
  title: string;
  color?: LabelColor;
  icon?: LucideIcon;
}

const colorClasses: Record<LabelColor, string> = {
  rosa: "bg-rosa/30 text-rosa",
  verde: "bg-verde/30 text-verde",
  cyan: "bg-cyan/30 text-cyan",
  amarillo: "bg-amarillo/30 text-amarillo",
  morado: "bg-morado/30 text-morado",
};

export default function LabelIcon({
  title,
  color = "rosa",
  icon: Icon,
}: LabelProps) {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      viewport={{ once: false, amount: 0.4 }}
      className={`flex items-center w-fit gap-1 px-2 rounded-lg lowercase md:text-lg text-sm font-semibold shadow-md ${colorClasses[color]}`}
    >
      {Icon && <Icon className="size-43 md:size-4" />}
      <p>{title}</p>
    </motion.div>
  );
}