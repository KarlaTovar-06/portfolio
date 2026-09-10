import { motion } from "framer-motion";
import DecorativeCard from "../../components/ui/Cards/ScreenCard";
import Label from "../../components/ui/Label/Label";
import { socialLinks } from "@/lib/data/socailLinks";
import SplitText from "../../animations/SplitText/SplitText";

const goodbyeLabels = [
  {
    title: "Adiós",
    position: "absolute bottom-8 -left-10 z-50",
    rotate: -12,
    bg: "bg-morado",
  },
  {
    title: "Sayonara",
    position: "absolute -top-3 -right-3 z-50",
    rotate: 10,
    bg: "bg-verde",
  },
  {
    title: "Ciao",
    position: "absolute -bottom-3 -left-3 z-50",
    rotate: 8,
    bg: "bg-cyan",
  },
  {
    title: "Au revoir",
    position: "absolute -bottom-3 -right-3 z-50",
    rotate: -8,
    bg: "bg-rosa",
  },
  {
    title: "안녕",
    position: "absolute top-8 -right-8 z-50",
    rotate: -6,
    bg: "bg-amarillo",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="w-full min-h-screen flex justify-center items-center py-10"
    >
      <div className="relative w-full max-w-4xl mx-6">
        {/* Cápsulas en las esquinas */}
        {goodbyeLabels.map((label) => (
          <Label
            key={label.title}
            title={label.title}
            position={label.position}
            rotate={label.rotate}
            background={label.bg}
          />
        ))}

        {/* Tarjeta principal */}
        <DecorativeCard
          borderColor="border-gris2/30"
          backgroundColor="bg-background"
          className="min-h-[400px]"
        >
          <div className="flex flex-col items-center gap-8">
            {/* Título */}
            <h1 className="text-foreground leading-tight text-center">
              <SplitText
                text="Get in [[Touch]]"
                className="text-4xl md:text-6xl"
                delay={0.3}
                staggerChildren={0.03}
                duration={0.6}
                initialY={50}
              />
            </h1>
            <motion.p
              className="text-foreground/70 text-center text-lg md:text-xl max-w-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              I'd love to hear from you. Whether you have a question, a project
              idea, or just want to say hello — feel free to reach out!
            </motion.p>

            {/* Iconos de redes sociales */}
            <motion.div
              className="flex flex-row gap-6 justify-center"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    social.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  whileHover={{ scale: 1.08, y: -6 }}
                  whileTap={{ scale: 0.95 }}
                  className="rounded-xl"
                >
                  <img
                    src={social.icon}
                    alt={social.name}
                    className="size-12 rounded-xl shadow-lg cursor-pointer select-none"
                    draggable={false}
                  />
                </motion.a>
              ))}
            </motion.div>
          </div>
        </DecorativeCard>
      </div>
    </section>
  );
}
