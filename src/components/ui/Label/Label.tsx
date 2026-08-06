import { motion } from "framer-motion";

interface LabelProps {
  title: string;
  background?: string;
  position?: string;
  rotate?: number;
  colorText?: string
}

export default function Label({
  title,
  background = "bg-rosa",
  position = "",
  rotate = 0,
  colorText="text-white font-semibold"
}: LabelProps) {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0, rotate }}
      whileInView={{ scale: 1, opacity: 1, rotate }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      viewport={{ once: false, amount: 0.4 }}
      className={`inline-block px-3 py-1 rounded-full lowercase md:text-2xl text-md ${colorText} ${background} ${position}`}
    >
      <p>{title}</p>
    </motion.div>
  );
}
