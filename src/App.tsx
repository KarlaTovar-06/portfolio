import Hero from "./sections/Hero/Hero";
import Introducing from "./sections/Introducing/Introducing";
import Experiencia from "./sections/Experiencia/Experiencia";
import FeaturedWork from "./sections/FeaturedWork/FeaturedWork";
import Skills from "./sections/Skilss/Skills";
import Estudies from "./sections/Estudies/Estudies";
import BubbleMenu from "./components/common/BubbleMenu";
import { ThemeProvider } from "./lib/theme";
import { TooltipProvider } from "@/components/ui/tooltip";

const items = [
  {
    label: "home",
    href: "#hero",
    ariaLabel: "Home",
    rotation: -8,
    hoverStyles: { bgColor: "#41D6C4", textColor: "#ffffff" },
  },
  {
    label: "about",
    href: "#introducing",
    ariaLabel: "About",
    rotation: -2,
    hoverStyles: { bgColor: "#9BD24F", textColor: "#ffffff" },
  },
  {
    label: "skills",
    href: "#skills",
    ariaLabel: "Skills",
    rotation: 8,
    hoverStyles: { bgColor: "#3b82f6", textColor: "#ffffff" },
  },
  {
    label: "projects",
    href: "#featured-work",
    ariaLabel: "Projects",
    rotation: 8,
    hoverStyles: { bgColor: "#D73961", textColor: "#ffffff" },
  },
  {
    label: "experience",
    href: "#experience",
    ariaLabel: "Experience",
    rotation: 5,
    hoverStyles: { bgColor: "#f59e0b", textColor: "#ffffff" },
  },
  {
    label: "estudies",
    href: "#estudies",
    ariaLabel: "Estudies",
    rotation: -5,
    hoverStyles: { bgColor: "#00C2AB", textColor: "#ffffff" },
  },
  {
    label: "contact",
    href: "#",
    ariaLabel: "Contact",
    rotation: -2,
    hoverStyles: { bgColor: "#A22887", textColor: "#ffffff" },
  },
];

export default function App() {
  return (
    <ThemeProvider>
      <TooltipProvider>
        <BubbleMenu
          logo={<span style={{ fontWeight: 700 }}>RB</span>}
          items={items}
          menuAriaLabel="Toggle navigation"
          useFixedPosition={true}
          animationEase="back.out(1.5)"
          animationDuration={0.5}
          staggerDelay={0.12}
        />
        {/* overflow-x-clip: evita el overflow horizontal SIN romper position: sticky
          (overflow-hidden en un ancestro convierte a <main> en el scroll container
          y el sticky de Experiencia dejaría de "pinnearse"). */}
        <main className="overflow-x-clip gap-10">
          <Hero />

          <Introducing />

          <Experiencia />

          <FeaturedWork />

          <Estudies />
        </main>
      </TooltipProvider>
    </ThemeProvider>
  );
}
