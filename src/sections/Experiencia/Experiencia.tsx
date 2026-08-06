// Expereincia.tsx
import Label from "../../components/ui/Label/Label";
import SplitText from "../../animations/SplitText/SplitText";

export default function Experiencia() {
  return (
    <section className="w-full min-h-screen flex justify-center items-center my-12 overflow-hidden px-5">
      <div className="w-full  flex flex-col lg:flex-row items-center lg:mx-12 mx-6 my-10 lg:my-0 gap-4">
        <div className="w-full flex flex-col justify-center mx-12 gap-6">
          <div className="space-y-4">
            <h1 className="text-foreground leading-tight">
              <SplitText
                text="Experiencia"
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
            <div className="flex flex-col gap-4">
              <i className="font-semibold text-muted-foreground">Enero 2025 - Actual</i>
              <div className="flex md:flex-row flex-col md:items-center items-start gap-4">
                <h1 className="text-foreground leading-tight text-2xl md:text-4xl">
                  Desarrolladora Full-Stack
                </h1>
                <Label title="RUBIDEX" background="bg-cyan/50" />
              </div>

              <p className="text-xl">
                Desarrollo y mantenimiento de sitios web corporativos en React,
                implementando Strapi como CMS para gestión de contenido
                dinámico. Participación en el equipo de frontend para el
                desarrollo de aplicaciones web y móviles nativas para iOS con
                SwiftUI, resolviendo desafíos técnicos complejos con enfoque en
                optimización de la experiencia del usuario en múltiples
                plataformas..
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <i className="font-semibold text-muted-foreground">
                Mayo 2024 - Enero 2025
              </i>
              <div className="flex md:flex-row flex-col md:items-center items-start gap-4">
                <h1 className="text-foreground leading-tight text-2xl md:text-4xl">
                  Desarrolladora Full-Stack
                </h1>
                <Label title="LEAP INTERACTIVE" background="bg-rosa/50" />
              </div>

              <p className="text-xl">
                Desarrollé y mantuve sitios web personalizados en WordPress y
                React, resolviendo problemas técnicos y adaptándolos a las
                necesidades de los clientes.
              </p>
            </div>
          </div>
          <div className="flex md:flex-row flex-col md:items-center items-start gap-5 my-12">
            <Label title="full stak Development" background="bg-verde" />
            <Label title="Web Development" background="bg-rosa" />
            <Label title="App Development" background="bg-cyan" />
          </div>
        </div>
      </div>
    </section>
  );
}
