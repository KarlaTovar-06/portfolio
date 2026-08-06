import Label from "../../components/ui/Label/Label";
import { Terminal } from "@/components/ui/terminal";
import SplitText from "../../animations/SplitText/SplitText";
import {
  FolderIcon,
  GlassCard,
  CardIcon,
  SwiftUIIcon,
  ChococatIcon,
  StarPinkIcon,
  StarSilverIcon,
  StarTripleIcon,
} from "@/components/common/icons";

export default function Hero() {
  return (
    <section className="w-full max-w-6xl md:min-h-screen h-full mx-auto lg:my-0 my-12 flex justify-center items-center overflow-x-hidden">
      <div className="flex flex-col justify-center items-center">
        <div className="relative w-[520px] h-[560px] origin-bottom scale-[0.58] sm:scale-75 lg:scale-100">
          <FolderIcon className="absolute bottom-0 left-1/2 -translate-x-1/2 z-0 w-full h-auto dark:invert" />

          <StarTripleIcon className="absolute -left-10 top-20 z-[5] rotate-[-14deg] dark:invert" />
          <StarPinkIcon
            className="absolute -left-8 bottom-20 z-50 rotate-[12deg]"
            aria-hidden="true"
          />
          <StarSilverIcon
            className="absolute -right-5 top-40 z-[7] rotate-[-8deg]"
            aria-hidden="true"
          />

          <CardIcon
            className="absolute -right-48 -bottom-[120px] z-10 rotate-[8deg]"
            aria-hidden="true"
          />

          <SwiftUIIcon
            className="absolute left-32 top-32 z-[4] rotate-12"
            aria-hidden="true"
          />

          <ChococatIcon className="absolute right-40 top-[205px] z-[9] rotate-[6deg]" />

          <img
            src="/icons/github.webp"
            className="size-16 absolute z-[8] -right-2 bottom-52 rotate-12"
            alt="GitHub"
          />
          <img
            src="/icons/tailwind.webp"
            className="size-16 absolute z-[8] right-20 top-52 -rotate-12 shadow-xl"
            alt="Instagram"
          />

          <div className="absolute right-52 bottom-32 z-[7] -rotate-12">
            <Terminal
              commands={["npx i karla"]}
              outputs={{
                0: [
                  "> Initializing ...",
                  "",
                  "✓ Compiling ideas...",
                  "✓ Solving problems...",
                  "✓ Playing good music...",
                  "✓ Ready to create.",
                  "✓ Developer initialized.",
                ],
              }}
              typingSpeed={45}
              delayBetweenCommands={1000}
            />
          </div>

          <Label
            title="software"
            background="bg-verde"
            position="
            absolute top-44 -left-12
            z-50
          "
            rotate={-25}
          />
          <Label
            title="ui/ux"
            background="bg-rosa"
            position="
            absolute bottom-40 -right-1 z-20
          "
            rotate={16}
          />
          <Label
            title="developer"
            background="bg-cyan"
            position="
            absolute top-40 left-1/2 z-50
          "
            rotate={-5}
          />

          <GlassCard className="absolute bottom-2 left-1/2 -translate-x-1/2 z-30 w-full h-auto" />
        </div>

        <Label
          title="karla_tovar"
          background="bg-input"
          colorText="text-stone-400 font-regular"
        />

        <h1 className="py-3">
          <SplitText
            text="PORT[[folio]]"
            className="text-4xl md:text-7xl"
            delay={0.3}
            staggerChildren={0.03}
            duration={0.6}
            initialY={50}
          />
        </h1>
      </div>
    </section>
  );
}
