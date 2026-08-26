import { motion } from "framer-motion";
import Label from "../../components/ui/Label/Label";
import SplitText from "../../animations/SplitText/SplitText";
import { StarSilverIcon } from "@/components/common/icons";
import { socialLinks } from "@/lib/data/socailLinks";

export default function Introducing() {
  return (
    <section id="introducing" className="w-full min-h-screen flex justify-center items-center py-10">
      <div className="relative flex flex-col lg:flex-row items-center lg:mx-12 mx-6 my-10 lg:my-0 gap-4">
        {/* Columna izquierda */}
        <div className="relative lg:w-1/3 lg:mx-24 flex flex-col justify-center text-center gap-6 my-8">
          <motion.img
            src="/assets/Fotito.svg"
            className="w-full h-full object-cover"
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            whileHover={{ scale: 1.03, y: -6 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          />

          <div className="flex flex-row gap-6 justify-center">
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
                initial={{ opacity: 0, scale: 0.9, y: 10 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                whileHover={{
                  scale: 1.08,
                  y: -6,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                transition={{
                  duration: 0.35,
                  ease: "easeOut",
                }}
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
          </div>

          <Label
            title="software developer"
            position="
            absolute top-0 -left-5
            z-50
          "
            rotate={-15}
            background="bg-rosa"
          />
        </div>

        {/* Columna derecha */}
        <div className="w-full lg:w-2/3 flex flex-col justify-center mx-10 gap-6">
          <div className="relative flex flex-col gap-6">
            <h1 className="text-foreground leading-tight">
              <SplitText
                text="I'm [[Karla!]]"
                className="text-2xl md:text-4xl"
                delay={0.3}
                staggerChildren={0.03}
                duration={0.6}
                initialY={50}
              />
            </h1>
            <p className="md:text-2xl">
              Passionate about programming and design, with a perfectionist
              focus on details and an analytical, problem-solving mindset.
            </p>
            <motion.img
              src="/assets/myprojects.png"
              className=" w-1/2 h-full object-cover"
              initial={{ opacity: 0, scale: 0.9, y: 10 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              whileHover={{ scale: 1.03, y: -6 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            />
            <StarSilverIcon
              className="absolute right-72 top-1/2 z-[7] rotate-[-8deg]"
              aria-hidden="true"
            />
            <StarSilverIcon
              className="absolute -left-14 bottom-1 z-[7] rotate-12"
              aria-hidden="true"
            />
          </div>
        </div>

        <img
          src="/assets/light.webp"
          className="absolute w-40 dark:invert -right-20 -bottom-12"
        />
      </div>
    </section>
  );
}
