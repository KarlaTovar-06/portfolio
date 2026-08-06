import { motion } from "framer-motion";
import SplitText from "../../animations/SplitText/SplitText";

export default function Logros() {
  return (
    <section className="w-full min-h-screen flex justify-center items-center my-12 overflow-hidden px-5">
      <div className="w-full h-full flex flex-col lg:flex-row items-center lg:mx-12 mx-6 my-10 lg:my-0 gap-4">
        <div className="w-full flex flex-col justify-center mx-12 gap-6">
          <div className="space-y-4">
            <h1 className="text-foreground leading-tight">
              <SplitText
                text="Logros"
                className="text-2xl md:text-4xl"
                delay={0.3}
                staggerChildren={0.03}
                duration={0.6}
                initialY={50}
              />
            </h1>
          </div>

          {/* Contenido */}
          <div className="w-full flex flex-col items-start justify-center gap-12 mt-8 mb-2">
            <div className="flex md:flex-row flex-col gap-12">
              {/* Imagen 1 */}
              <div className="flex flex-col items-center gap-4">
                <motion.img
                  src="/assets/image/csc.png"
                  alt="CSC CDMX"
                  className="w-full h-full object-cover rounded-3xl"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.05, translateY: -6 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                />
                <p className="text-muted-foreground">CSC CDMX2024</p>
              </div>

              {/* Imagen 2 */}
              <div className="flex flex-col items-center gap-4">
                <motion.img
                  src="/assets/image/yohackathon.png"
                  alt="Hackathon Nacional"
                  className="w-full h-full object-cover rounded-3xl"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.05, translateY: -6 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                />
                <p className="text-muted-foreground">Hackathon Nacional</p>
              </div>
            </div>

            <div className="flex lg:flex-row flex-col lg:space-x-24 lg:space-y-0 space-y-12">
              <div className="flex gap-4">
                <div className="flex flex-col gap-4">
                  <i className="font-semibold text-muted-foreground">Noviembre 2024</i>
                  <p>
                    Ganadora del Changemakers Social Challenge CDMX2024
                  </p>
                </div>

                <div className="flex flex-col gap-4">
                  <i className="font-semibold text-muted-foreground">Marzo 2024</i>
                  <p>
                    Ganadora del primer lugar de Hackathon local, FES Acatlán
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex flex-col gap-4">
                  <i className="font-semibold text-muted-foreground">Abril 2024</i>
                  <p>
                    Competidora del Hackathon Nacional, TEC de Monterrey
                  </p>
                </div>

                <div className="flex flex-col gap-4">
                  <i className="font-semibold text-muted-foreground">Mayo 2023</i>
                  <p>
                    Ganadora de concurso para liberación de título Desarrollo
                    Web
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
